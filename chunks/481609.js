function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Future: function() {
            return o
        }
    });

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o = function e() {
        var t = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }(this, e), r(this, "promise", void 0), r(this, "resolve", void 0), r(this, "reject", void 0), this.promise = new Promise(function(e, n) {
            t.resolve = e, t.reject = n
        })
    }
}