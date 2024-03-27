function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        Future: function() {
            return r
        }
    });
    class r {
        constructor() {
            i(this, "promise", void 0), i(this, "resolve", void 0), i(this, "reject", void 0), this.promise = new Promise((e, t) => {
                this.resolve = e, this.reject = t
            })
        }
    }
}