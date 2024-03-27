function(e, t, n) {
    "use strict";
    var r = n("288537"),
        i = n("754793"),
        a = n("911725"),
        o = n("441234"),
        s = n("404625"),
        u = Object.prototype.toString;

    function c(e) {
        if (!(this instanceof c)) return new c(e);
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
        n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s, this.strm.avail_out = 0;
        var l = r.deflateInit2(this.strm, n.level, n.method, n.windowBits, n.memLevel, n.strategy);
        if (0 !== l) throw Error(o[l]);
        if (n.header && r.deflateSetHeader(this.strm, n.header), n.dictionary) {
            if (t = "string" == typeof n.dictionary ? a.string2buf(n.dictionary) : "[object ArrayBuffer]" === u.call(n.dictionary) ? new Uint8Array(n.dictionary) : n.dictionary, 0 !== (l = r.deflateSetDictionary(this.strm, t))) throw Error(o[l]);
            this._dict_set = !0
        }
    }

    function l(e, t) {
        var n = new c(t);
        if (n.push(e, !0), n.err) throw n.msg || o[n.err];
        return n.result
    }
    c.prototype.push = function(e, t) {
        var n, o, s = this.strm,
            c = this.options.chunkSize;
        if (this.ended) return !1;
        o = t === ~~t ? t : !0 === t ? 4 : 0, "string" == typeof e ? s.input = a.string2buf(e) : "[object ArrayBuffer]" === u.call(e) ? s.input = new Uint8Array(e) : s.input = e, s.next_in = 0, s.avail_in = s.input.length;
        do {
            if (0 === s.avail_out && (s.output = new i.Buf8(c), s.next_out = 0, s.avail_out = c), 1 !== (n = r.deflate(s, o)) && 0 !== n) return this.onEnd(n), this.ended = !0, !1;
            (0 === s.avail_out || 0 === s.avail_in && (4 === o || 2 === o)) && ("string" === this.options.to ? this.onData(a.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)))
        } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== n);
        return 4 === o ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, 0 === n) : (2 === o && (this.onEnd(0), s.avail_out = 0), !0)
    }, c.prototype.onData = function(e) {
        this.chunks.push(e)
    }, c.prototype.onEnd = function(e) {
        0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
    };
    t.Deflate = c, t.deflate = l, t.deflateRaw = function(e, t) {
        return (t = t || {}).raw = !0, l(e, t)
    }, t.gzip = function(e, t) {
        return (t = t || {}).gzip = !0, l(e, t)
    }
}