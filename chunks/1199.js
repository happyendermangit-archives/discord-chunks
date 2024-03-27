function(e, t, n) {
    "use strict";
    let r = n("689118"),
        i = n("814033"),
        a = n("873994").DecoderBuffer,
        o = n("206424"),
        s = n("375990");

    function u(e) {
        this.enc = "der", this.name = e.name, this.entity = e, this.tree = new c, this.tree._init(e.body)
    }

    function c(e) {
        o.call(this, "der", e)
    }

    function l(e, t) {
        let n = e.readUInt8(t);
        if (e.isError(n)) return n;
        let r = s.tagClass[n >> 6],
            i = (32 & n) == 0;
        if ((31 & n) == 31) {
            let r = n;
            for (n = 0;
                (128 & r) == 128;) {
                if (r = e.readUInt8(t), e.isError(r)) return r;
                n <<= 7, n |= 127 & r
            }
        } else n &= 31;
        let a = s.tag[n];
        return {
            cls: r,
            primitive: i,
            tag: n,
            tagStr: a
        }
    }

    function d(e, t, n) {
        let r = e.readUInt8(n);
        if (e.isError(r)) return r;
        if (!t && 128 === r) return null;
        if ((128 & r) == 0) return r;
        let i = 127 & r;
        if (i > 4) return e.error("length octect is too long");
        r = 0;
        for (let t = 0; t < i; t++) {
            r <<= 8;
            let t = e.readUInt8(n);
            if (e.isError(t)) return t;
            r |= t
        }
        return r
    }
    e.exports = u, u.prototype.decode = function(e, t) {
        return !a.isDecoderBuffer(e) && (e = new a(e, t)), this.tree._decode(e, t)
    }, r(c, o), c.prototype._peekTag = function(e, t, n) {
        if (e.isEmpty()) return !1;
        let r = e.save(),
            i = l(e, 'Failed to peek tag: "' + t + '"');
        return e.isError(i) ? i : (e.restore(r), i.tag === t || i.tagStr === t || i.tagStr + "of" === t || n)
    }, c.prototype._decodeTag = function(e, t, n) {
        let r = l(e, 'Failed to decode tag of "' + t + '"');
        if (e.isError(r)) return r;
        let i = d(e, r.primitive, 'Failed to get length of "' + t + '"');
        if (e.isError(i)) return i;
        if (!n && r.tag !== t && r.tagStr !== t && r.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');
        if (r.primitive || null !== i) return e.skip(i, 'Failed to match body of: "' + t + '"');
        let a = e.save(),
            o = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return e.isError(o) ? o : (i = e.offset - a.offset, e.restore(a), e.skip(i, 'Failed to match body of: "' + t + '"'))
    }, c.prototype._skipUntilEnd = function(e, t) {
        for (;;) {
            let n;
            let r = l(e, t);
            if (e.isError(r)) return r;
            let i = d(e, r.primitive, t);
            if (e.isError(i)) return i;
            if (n = r.primitive || null !== i ? e.skip(i) : this._skipUntilEnd(e, t), e.isError(n)) return n;
            if ("end" === r.tagStr) break
        }
    }, c.prototype._decodeList = function(e, t, n, r) {
        let i = [];
        for (; !e.isEmpty();) {
            let t = this._peekTag(e, "end");
            if (e.isError(t)) return t;
            let a = n.decode(e, "der", r);
            if (e.isError(a) && t) break;
            i.push(a)
        }
        return i
    }, c.prototype._decodeStr = function(e, t) {
        if ("bitstr" === t) {
            let t = e.readUInt8();
            return e.isError(t) ? t : {
                unused: t,
                data: e.raw()
            }
        }
        if ("bmpstr" === t) {
            let t = e.raw();
            if (t.length % 2 == 1) return e.error("Decoding of string type: bmpstr length mismatch");
            let n = "";
            for (let e = 0; e < t.length / 2; e++) n += String.fromCharCode(t.readUInt16BE(2 * e));
            return n
        }
        if ("numstr" === t) {
            let t = e.raw().toString("ascii");
            return this._isNumstr(t) ? t : e.error("Decoding of string type: numstr unsupported characters")
        } else if ("octstr" === t) return e.raw();
        else if ("objDesc" === t) return e.raw();
        else if ("printstr" === t) {
            let t = e.raw().toString("ascii");
            return this._isPrintstr(t) ? t : e.error("Decoding of string type: printstr unsupported characters")
        } else if (/str$/.test(t)) return e.raw().toString();
        else return e.error("Decoding of string type: " + t + " unsupported")
    }, c.prototype._decodeObjid = function(e, t, n) {
        let r;
        let i = [],
            a = 0,
            o = 0;
        for (; !e.isEmpty();) o = e.readUInt8(), a <<= 7, a |= 127 & o, (128 & o) == 0 && (i.push(a), a = 0);
        128 & o && i.push(a);
        let s = i[0] / 40 | 0,
            u = i[0] % 40;
        if (r = n ? i : [s, u].concat(i.slice(1)), t) {
            let e = t[r.join(" ")];
            void 0 === e && (e = t[r.join(".")]), void 0 !== e && (r = e)
        }
        return r
    }, c.prototype._decodeTime = function(e, t) {
        let n, r, i, a, o, s;
        let u = e.raw().toString();
        if ("gentime" === t) n = 0 | u.slice(0, 4), r = 0 | u.slice(4, 6), i = 0 | u.slice(6, 8), a = 0 | u.slice(8, 10), o = 0 | u.slice(10, 12), s = 0 | u.slice(12, 14);
        else {
            if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet");
            n = 0 | u.slice(0, 2), r = 0 | u.slice(2, 4), i = 0 | u.slice(4, 6), a = 0 | u.slice(6, 8), o = 0 | u.slice(8, 10), s = 0 | u.slice(10, 12), n = n < 70 ? 2e3 + n : 1900 + n
        }
        return Date.UTC(n, r - 1, i, a, o, s, 0)
    }, c.prototype._decodeNull = function() {
        return null
    }, c.prototype._decodeBool = function(e) {
        let t = e.readUInt8();
        return e.isError(t) ? t : 0 !== t
    }, c.prototype._decodeInt = function(e, t) {
        let n = new i(e.raw());
        return t && (n = t[n.toString(10)] || n), n
    }, c.prototype._use = function(e, t) {
        return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree
    }
}