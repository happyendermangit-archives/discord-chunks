function(t, e, s) {
    "use strict";
    var r = s("390493");
    s("424973"), s("854508");
    var i = Object.keys || function(t) {
        var e = [];
        for (var s in t) e.push(s);
        return e
    };
    t.exports = a;
    var n = s("245387"),
        c = s("769419");
    s("599235")(a, n);
    for (var o = i(c.prototype), f = 0; f < o.length; f++) {
        var u = o[f];
        !a.prototype[u] && (a.prototype[u] = c.prototype[u])
    }

    function a(t) {
        if (!(this instanceof a)) return new a(t);
        n.call(this, t), c.call(this, t), this.allowHalfOpen = !0, t && (!1 === t.readable && (this.readable = !1), !1 === t.writable && (this.writable = !1), !1 === t.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", d)))
    }

    function d() {
        !this._writableState.ended && r.nextTick(p, this)
    }

    function p(t) {
        t.end()
    }
    Object.defineProperty(a.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }), Object.defineProperty(a.prototype, "writableBuffer", {
        enumerable: !1,
        get: function() {
            return this._writableState && this._writableState.getBuffer()
        }
    }), Object.defineProperty(a.prototype, "writableLength", {
        enumerable: !1,
        get: function() {
            return this._writableState.length
        }
    }), Object.defineProperty(a.prototype, "destroyed", {
        enumerable: !1,
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
        },
        set: function(t) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t)
        }
    })
}