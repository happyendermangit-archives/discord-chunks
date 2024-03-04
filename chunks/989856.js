function(e, t, n) {
    "use strict";
    n("70102"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("424973");
    var r = n("630678"),
        i = n("112774"),
        o = n("566239"),
        s = n("876809"),
        a = n("227386"),
        c = Object.prototype.toString;

    function u(e) {
        if (!(this instanceof u)) return new u(e);
        this.options = i.assign({
            level: -1,
            method: 8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: 0,
            to: ""
        }, e || {});
        var t, n = this.options;
        n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new a, this.strm.avail_out = 0;
        var d = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
        if (0 !== d) throw Error(s[d]);
        if (n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary) {
            if (t = "string" == typeof n.dictionary ? o.string2buf(n.dictionary) : "[object ArrayBuffer]" === c.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary, 0 !== (d = r.deflateSetDictionary(this.strm, t))) throw Error(s[d]);
            this._dict_set = !0
        }
    }

    function d(e, t) {
        var n = new u(t);
        if (n.push(e, !0), n.err) throw n.msg || s[n.err];
        return n.result
    }
    u.prototype.push = function(e, t) {
        var n, s, a = this.strm,
            u = this.options.chunkSize;
        if (this.ended) return !1;
        s = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? a.input = o.string2buf(e) : "[object ArrayBuffer]" === c.call(e) ? a.input = new Uint8Array(e) : a.input = e, a.next_in = 0, a.avail_in = a.input.length;
        do {
            if (0 === a.avail_out && (a.output = new i.Buf8(u), a.next_out = 0, a.avail_out = u), 1 !== (n = r.deflate(a, s)) && 0 !== n) return this.onEnd(n), this.ended = !0, !1;
            (0 === a.avail_out || 0 === a.avail_in && (4 === s || 2 === s)) && ("string" === this.options.to ? this.onData(o.buf2binstring(i.shrinkBuf(a.output, a.next_out))) : this.onData(i.shrinkBuf(a.output, a.next_out)))
        } while ((a.avail_in > 0 || 0 === a.avail_out) && 1 !== n);
        return 4 === s ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, 0 === n) : (2 === s && (this.onEnd(0), a.avail_out = 0), !0)
    }, u.prototype.onData = function(e) {
        this.chunks.push(e)
    }, u.prototype.onEnd = function(e) {
        0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    };
    t.Deflate = u, t.deflate = d, t.deflateRaw = function(e, t) {
        return (t = t || {}).raw = !0, d(e, t)
    }, t.gzip = function(e, t) {
        return (t = t || {}).gzip = !0, d(e, t)
    }
}