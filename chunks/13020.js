function(t, e, s) {
    "use strict";
    let r = s("599235"),
        i = s("571405").Reporter,
        n = s("415005").Buffer;

    function c(t, e) {
        if (i.call(this, e), !n.isBuffer(t)) {
            this.error("Input not Buffer");
            return
        }
        this.base = t, this.offset = 0, this.length = t.length
    }

    function o(t, e) {
        if (Array.isArray(t)) this.length = 0, this.value = t.map(function(t) {
            return !o.isEncoderBuffer(t) && (t = new o(t, e)), this.length += t.length, t
        }, this);
        else if ("number" == typeof t) {
            if (!(0 <= t && t <= 255)) return e.error("non-byte EncoderBuffer value");
            this.value = t, this.length = 1
        } else if ("string" == typeof t) this.value = t, this.length = n.byteLength(t);
        else {
            if (!n.isBuffer(t)) return e.error("Unsupported type: " + typeof t);
            this.value = t, this.length = t.length
        }
    }
    r(c, i), e.DecoderBuffer = c, c.isDecoderBuffer = function(t) {
        if (t instanceof c) return !0;
        let e = "object" == typeof t && n.isBuffer(t.base) && "DecoderBuffer" === t.constructor.name && "number" == typeof t.offset && "number" == typeof t.length && "function" == typeof t.save && "function" == typeof t.restore && "function" == typeof t.isEmpty && "function" == typeof t.readUInt8 && "function" == typeof t.skip && "function" == typeof t.raw;
        return e
    }, c.prototype.save = function() {
        return {
            offset: this.offset,
            reporter: i.prototype.save.call(this)
        }
    }, c.prototype.restore = function(t) {
        let e = new c(this.base);
        return e.offset = t.offset, e.length = this.offset, this.offset = t.offset, i.prototype.restore.call(this, t.reporter), e
    }, c.prototype.isEmpty = function() {
        return this.offset === this.length
    }, c.prototype.readUInt8 = function(t) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(t || "DecoderBuffer overrun")
    }, c.prototype.skip = function(t, e) {
        if (!(this.offset + t <= this.length)) return this.error(e || "DecoderBuffer overrun");
        let s = new c(this.base);
        return s._reporterState = this._reporterState, s.offset = this.offset, s.length = this.offset + t, this.offset += t, s
    }, c.prototype.raw = function(t) {
        return this.base.slice(t ? t.offset : this.offset, this.length)
    }, e.EncoderBuffer = o, o.isEncoderBuffer = function(t) {
        if (t instanceof o) return !0;
        let e = "object" == typeof t && "EncoderBuffer" === t.constructor.name && "number" == typeof t.length && "function" == typeof t.join;
        return e
    }, o.prototype.join = function(t, e) {
        return (!t && (t = n.alloc(this.length)), !e && (e = 0), 0 === this.length) ? t : (Array.isArray(this.value) ? this.value.forEach(function(s) {
            s.join(t, e), e += s.length
        }) : ("number" == typeof this.value ? t[e] = this.value : "string" == typeof this.value ? t.write(this.value, e) : n.isBuffer(this.value) && this.value.copy(t, e), e += this.length), t)
    }
}