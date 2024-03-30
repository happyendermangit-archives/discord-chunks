function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = function() {
        var e, t, n;

        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            if (! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, i), o(this, "min", void 0), o(this, "max", void 0), o(this, "jitter", void 0), o(this, "_current", void 0), o(this, "_timeoutId", void 0), o(this, "_callback", void 0), o(this, "_fails", 0), e <= 0) throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
            this.min = e, this.max = null != t ? t : 10 * e, this.jitter = n, this._current = e
        }
        return e = i, t = [{
            key: "fails",
            get: function() {
                return this._fails
            }
        }, {
            key: "current",
            get: function() {
                return this._current
            }
        }, {
            key: "pending",
            get: function() {
                return null != this._timeoutId
            }
        }, {
            key: "succeed",
            value: function() {
                this.cancel(), this._fails = 0, this._current = this.min
            }
        }, {
            key: "fail",
            value: function(e) {
                var t = this;
                this._fails += 1;
                var n = 2 * this._current;
                if (this.jitter && (n *= Math.random()), this._current = Math.min(this._current + n, this.max), null != e) {
                    if (null != this._timeoutId) {
                        if (this._callback !== e) throw Error("callback already pending");
                        this.cancel()
                    }
                    this._callback = e, this._timeoutId = setTimeout(function() {
                        try {
                            null != e && e()
                        } finally {
                            t.cancel()
                        }
                    }, this._current)
                }
                return this._current
            }
        }, {
            key: "cancel",
            value: function() {
                this._callback = null, null != this._timeoutId && (clearTimeout(this._timeoutId), this._timeoutId = null)
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}