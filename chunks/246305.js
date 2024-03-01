function(t, e, s) {
    "use strict";
    s("843762");
    let r = s("599235"),
        i = s("415005").Buffer,
        Node = s("747336"),
        n = s("335036");

    function c(t) {
        this.enc = "der", this.name = t.name, this.entity = t, this.tree = new o, this.tree._init(t.body)
    }

    function o(t) {
        Node.call(this, "der", t)
    }

    function f(t) {
        return t < 10 ? "0" + t : t
    }
    t.exports = c, c.prototype.encode = function(t, e) {
        return this.tree._encode(t, e).join()
    }, r(o, Node), o.prototype._encodeComposite = function(t, e, s, r) {
        let c = function(t, e, s, r) {
            let i;
            if ("seqof" === t ? t = "seq" : "setof" === t && (t = "set"), n.tagByName.hasOwnProperty(t)) i = n.tagByName[t];
            else {
                if ("number" != typeof t || (0 | t) !== t) return r.error("Unknown tag: " + t);
                i = t
            }
            return i >= 31 ? r.error("Multi-octet tag encoding unsupported") : (!e && (i |= 32), i |= n.tagClassByName[s || "universal"] << 6)
        }(t, e, s, this.reporter);
        if (r.length < 128) {
            let t = i.alloc(2);
            return t[0] = c, t[1] = r.length, this._createEncoderBuffer([t, r])
        }
        let o = 1;
        for (let t = r.length; t >= 256; t >>= 8) o++;
        let f = i.alloc(2 + o);
        f[0] = c, f[1] = 128 | o;
        for (let t = 1 + o, e = r.length; e > 0; t--, e >>= 8) f[t] = 255 & e;
        return this._createEncoderBuffer([f, r])
    }, o.prototype._encodeStr = function(t, e) {
        if ("bitstr" === e) return this._createEncoderBuffer([0 | t.unused, t.data]);
        if ("bmpstr" === e) {
            let e = i.alloc(2 * t.length);
            for (let s = 0; s < t.length; s++) e.writeUInt16BE(t.charCodeAt(s), 2 * s);
            return this._createEncoderBuffer(e)
        }
        if ("numstr" === e) return this._isNumstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: numstr supports only digits and space");
        else if ("printstr" === e) return this._isPrintstr(t) ? this._createEncoderBuffer(t) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark");
        else if (/str$/.test(e)) return this._createEncoderBuffer(t);
        else if ("objDesc" === e) return this._createEncoderBuffer(t);
        else return this.reporter.error("Encoding of string type: " + e + " unsupported")
    }, o.prototype._encodeObjid = function(t, e, s) {
        if ("string" == typeof t) {
            if (!e) return this.reporter.error("string objid given, but no values map found");
            if (!e.hasOwnProperty(t)) return this.reporter.error("objid not found in values map");
            t = e[t].split(/[\s.]+/g);
            for (let e = 0; e < t.length; e++) t[e] |= 0
        } else if (Array.isArray(t)) {
            t = t.slice();
            for (let e = 0; e < t.length; e++) t[e] |= 0
        }
        if (!Array.isArray(t)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(t));
        if (!s) {
            if (t[1] >= 40) return this.reporter.error("Second objid identifier OOB");
            t.splice(0, 2, 40 * t[0] + t[1])
        }
        let r = 0;
        for (let e = 0; e < t.length; e++) {
            let s = t[e];
            for (r++; s >= 128; s >>= 7) r++
        }
        let n = i.alloc(r),
            c = n.length - 1;
        for (let e = t.length - 1; e >= 0; e--) {
            let s = t[e];
            for (n[c--] = 127 & s;
                (s >>= 7) > 0;) n[c--] = 128 | 127 & s
        }
        return this._createEncoderBuffer(n)
    }, o.prototype._encodeTime = function(t, e) {
        let s;
        let r = new Date(t);
        return "gentime" === e ? s = [f(r.getUTCFullYear()), f(r.getUTCMonth() + 1), f(r.getUTCDate()), f(r.getUTCHours()), f(r.getUTCMinutes()), f(r.getUTCSeconds()), "Z"].join("") : "utctime" === e ? s = [f(r.getUTCFullYear() % 100), f(r.getUTCMonth() + 1), f(r.getUTCDate()), f(r.getUTCHours()), f(r.getUTCMinutes()), f(r.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + e + " time is not supported yet"), this._encodeStr(s, "octstr")
    }, o.prototype._encodeNull = function() {
        return this._createEncoderBuffer("")
    }, o.prototype._encodeInt = function(t, e) {
        if ("string" == typeof t) {
            if (!e) return this.reporter.error("String int or enum given, but no values map");
            if (!e.hasOwnProperty(t)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(t));
            t = e[t]
        }
        if ("number" != typeof t && !i.isBuffer(t)) {
            let e = t.toArray();
            !t.sign && 128 & e[0] && e.unshift(0), t = i.from(e)
        }
        if (i.isBuffer(t)) {
            let e = t.length;
            0 === t.length && e++;
            let s = i.alloc(e);
            return t.copy(s), 0 === t.length && (s[0] = 0), this._createEncoderBuffer(s)
        }
        if (t < 128) return this._createEncoderBuffer(t);
        if (t < 256) return this._createEncoderBuffer([0, t]);
        let s = 1;
        for (let e = t; e >= 256; e >>= 8) s++;
        let r = Array(s);
        for (let e = r.length - 1; e >= 0; e--) r[e] = 255 & t, t >>= 8;
        return 128 & r[0] && r.unshift(0), this._createEncoderBuffer(i.from(r))
    }, o.prototype._encodeBool = function(t) {
        return this._createEncoderBuffer(t ? 255 : 0)
    }, o.prototype._use = function(t, e) {
        return "function" == typeof t && (t = t(e)), t._getEncoder("der").tree
    }, o.prototype._skipDefault = function(t, e, s) {
        let r;
        let i = this._baseState;
        if (null === i.default) return !1;
        let n = t.join();
        if (void 0 === i.defaultBuffer && (i.defaultBuffer = this._encodeValue(i.default, e, s).join()), n.length !== i.defaultBuffer.length) return !1;
        for (r = 0; r < n.length; r++)
            if (n[r] !== i.defaultBuffer[r]) return !1;
        return !0
    }
}