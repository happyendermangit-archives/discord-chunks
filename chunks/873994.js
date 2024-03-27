function(e, t, n) {
    "use strict";
    let r = n("689118"),
        i = n("761655").Reporter,
        a = n("988324").Buffer;

    function o(e, t) {
        if (i.call(this, t), !a.isBuffer(e)) {
            this.error("Input not Buffer");
            return
        }
        this.base = e, this.offset = 0, this.length = e.length
    }

    function s(e, t) {
        if (Array.isArray(e)) this.length = 0, this.value = e.map(function(e) {
            return !s.isEncoderBuffer(e) && (e = new s(e, t)), this.length += e.length, e
        }, this);
        else if ("number" == typeof e) {
            if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
            this.value = e, this.length = 1
        } else if ("string" == typeof e) this.value = e, this.length = a.byteLength(e);
        else {
            if (!a.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
            this.value = e, this.length = e.length
        }
    }
    r(o, i), t.DecoderBuffer = o, o.isDecoderBuffer = function(e) {
        return e instanceof o || "object" == typeof e && a.isBuffer(e.base) && "DecoderBuffer" === e.constructor.name && "number" == typeof e.offset && "number" == typeof e.length && "function" == typeof e.save && "function" == typeof e.restore && "function" == typeof e.isEmpty && "function" == typeof e.readUInt8 && "function" == typeof e.skip && "function" == typeof e.raw
    }, o.prototype.save = function() {
        return {
            offset: this.offset,
            reporter: i.prototype.save.call(this)
        }
    }, o.prototype.restore = function(e) {
        let t = new o(this.base);
        return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, i.prototype.restore.call(this, e.reporter), t
    }, o.prototype.isEmpty = function() {
        return this.offset === this.length
    }, o.prototype.readUInt8 = function(e) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
    }, o.prototype.skip = function(e, t) {
        if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
        let n = new o(this.base);
        return n._reporterState = this._reporterState, n.offset = this.offset, n.length = this.offset + e, this.offset += e, n
    }, o.prototype.raw = function(e) {
        return this.base.slice(e ? e.offset : this.offset, this.length)
    }, t.EncoderBuffer = s, s.isEncoderBuffer = function(e) {
        return e instanceof s || "object" == typeof e && "EncoderBuffer" === e.constructor.name && "number" == typeof e.length && "function" == typeof e.join
    }, s.prototype.join = function(e, t) {
        return (!e && (e = a.alloc(this.length)), !t && (t = 0), 0 === this.length) ? e : (Array.isArray(this.value) ? this.value.forEach(function(n) {
            n.join(e, t), t += n.length
        }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : a.isBuffer(this.value) && this.value.copy(e, t), t += this.length), e)
    }
}