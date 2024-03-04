function(e, t, n) {
    "use strict";
    let r = n("599235"),
        i = n("571405").Reporter,
        o = n("415005").Buffer;

    function s(e, t) {
        if (i.call(this, t), !o.isBuffer(e)) {
            this.error("Input not Buffer");
            return
        }
        this.base = e, this.offset = 0, this.length = e.length
    }

    function a(e, t) {
        if (Array.isArray(e)) this.length = 0, this.value = e.map(function(e) {
            return !a.isEncoderBuffer(e) && (e = new a(e, t)), this.length += e.length, e
        }, this);
        else if ("number" == typeof e) {
            if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
            this.value = e, this.length = 1
        } else if ("string" == typeof e) this.value = e, this.length = o.byteLength(e);
        else {
            if (!o.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
            this.value = e, this.length = e.length
        }
    }
    r(s, i), t.DecoderBuffer = s, s.isDecoderBuffer = function(e) {
        if (e instanceof s) return !0;
        let t = "object" == typeof e && o.isBuffer(e.base) && "DecoderBuffer" === e.constructor.name && "number" == typeof e.offset && "number" == typeof e.length && "function" == typeof e.save && "function" == typeof e.restore && "function" == typeof e.isEmpty && "function" == typeof e.readUInt8 && "function" == typeof e.skip && "function" == typeof e.raw;
        return t
    }, s.prototype.save = function() {
        return {
            offset: this.offset,
            reporter: i.prototype.save.call(this)
        }
    }, s.prototype.restore = function(e) {
        let t = new s(this.base);
        return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, i.prototype.restore.call(this, e.reporter), t
    }, s.prototype.isEmpty = function() {
        return this.offset === this.length
    }, s.prototype.readUInt8 = function(e) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
    }, s.prototype.skip = function(e, t) {
        if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
        let n = new s(this.base);
        return n._reporterState = this._reporterState, n.offset = this.offset, n.length = this.offset + e, this.offset += e, n
    }, s.prototype.raw = function(e) {
        return this.base.slice(e ? e.offset : this.offset, this.length)
    }, t.EncoderBuffer = a, a.isEncoderBuffer = function(e) {
        if (e instanceof a) return !0;
        let t = "object" == typeof e && "EncoderBuffer" === e.constructor.name && "number" == typeof e.length && "function" == typeof e.join;
        return t
    }, a.prototype.join = function(e, t) {
        return (!e && (e = o.alloc(this.length)), !t && (t = 0), 0 === this.length) ? e : (Array.isArray(this.value) ? this.value.forEach(function(n) {
            n.join(e, t), t += n.length
        }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : o.isBuffer(this.value) && this.value.copy(e, t), t += this.length), e)
    }
}