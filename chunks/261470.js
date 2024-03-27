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
        default: function() {
            return r
        }
    }), n("411104");
    class r {
        get fails() {
            return this._fails
        }
        get current() {
            return this._current
        }
        get pending() {
            return null != this._timeoutId
        }
        succeed() {
            this.cancel(), this._fails = 0, this._current = this.min
        }
        fail(e) {
            this._fails += 1;
            let t = 2 * this._current;
            if (this.jitter && (t *= Math.random()), this._current = Math.min(this._current + t, this.max), null != e) {
                if (null != this._timeoutId) {
                    if (this._callback !== e) throw Error("callback already pending");
                    this.cancel()
                }
                this._callback = e, this._timeoutId = setTimeout(() => {
                    try {
                        null != e && e()
                    } finally {
                        this.cancel()
                    }
                }, this._current)
            }
            return this._current
        }
        cancel() {
            this._callback = null, null != this._timeoutId && (clearTimeout(this._timeoutId), this._timeoutId = null)
        }
        constructor(e = 500, t = null, n = !0) {
            if (i(this, "min", void 0), i(this, "max", void 0), i(this, "jitter", void 0), i(this, "_current", void 0), i(this, "_timeoutId", void 0), i(this, "_callback", void 0), i(this, "_fails", 0), e <= 0) throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
            this.min = e, this.max = null != t ? t : 10 * e, this.jitter = n, this._current = e
        }
    }
}