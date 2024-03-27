function(e, t, n) {
    "use strict";
    e.exports = l;
    var r = n("531478").codes,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        a = r.ERR_MULTIPLE_CALLBACK,
        o = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = r.ERR_TRANSFORM_WITH_LENGTH_0,
        u = n("827664");

    function c(e, t) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r) return this.emit("error", new a);
        n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
        var i = this._readableState;
        i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }

    function l(e) {
        if (!(this instanceof l)) return new l(e);
        u.call(this, e), this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", d)
    }

    function d() {
        var e = this;
        "function" != typeof this._flush || this._readableState.destroyed ? f(this, null, null) : this._flush(function(t, n) {
            f(e, t, n)
        })
    }

    function f(e, t, n) {
        if (t) return e.emit("error", t);
        if (null != n && e.push(n), e._writableState.length) throw new s;
        if (e._transformState.transforming) throw new o;
        return e.push(null)
    }
    n("689118")(l, u), l.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1, u.prototype.push.call(this, e, t)
    }, l.prototype._transform = function(e, t, n) {
        n(new i("_transform()"))
    }, l.prototype._write = function(e, t, n) {
        var r = this._transformState;
        if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }, l.prototype._read = function(e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
    }, l.prototype._destroy = function(e, t) {
        u.prototype._destroy.call(this, e, function(e) {
            t(e)
        })
    }
}