function(e, t, n) {
    "use strict";
    n("424973"), e.exports = d;
    var r = n("129752").codes,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        o = r.ERR_MULTIPLE_CALLBACK,
        s = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        a = r.ERR_TRANSFORM_WITH_LENGTH_0,
        c = n("388765");

    function u(e, t) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r) return this.emit("error", new o);
        n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
        var i = this._readableState;
        i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }

    function d(e) {
        if (!(this instanceof d)) return new d(e);
        c.call(this, e), this._transformState = {
            afterTransform: u.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", l)
    }

    function l() {
        var e = this;
        "function" != typeof this._flush || this._readableState.destroyed ? f(this, null, null) : this._flush(function(t, n) {
            f(e, t, n)
        })
    }

    function f(e, t, n) {
        if (t) return e.emit("error", t);
        if (null != n && e.push(n), e._writableState.length) throw new a;
        if (e._transformState.transforming) throw new s;
        return e.push(null)
    }
    n("599235")(d, c), d.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1, c.prototype.push.call(this, e, t)
    }, d.prototype._transform = function(e, t, n) {
        n(new i("_transform()"))
    }, d.prototype._write = function(e, t, n) {
        var r = this._transformState;
        if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }, d.prototype._read = function(e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
    }, d.prototype._destroy = function(e, t) {
        c.prototype._destroy.call(this, e, function(e) {
            t(e)
        })
    }
}