function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        DelayedCall: function() {
            return s
        },
        Interval: function() {
            return l
        },
        Timeout: function() {
            return u
        },
        timeoutPromise: function() {
            return c
        }
    });
    var u = function() {
            function e() {
                r(this, e), a(this, "_ref", void 0)
            }
            return i(e, [{
                key: "start",
                value: function(e, t) {
                    var n = this,
                        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    (!this.isStarted() || r) && (this.stop(), this._ref = window.setTimeout(function() {
                        n._ref = null, t()
                    }, e))
                }
            }, {
                key: "stop",
                value: function() {
                    null != this._ref && (clearTimeout(this._ref), this._ref = null)
                }
            }, {
                key: "isStarted",
                value: function() {
                    return null != this._ref
                }
            }]), e
        }(),
        s = function() {
            function e(t, n) {
                r(this, e), a(this, "_timeout", void 0), a(this, "_delay", void 0), a(this, "_handler", void 0), this._delay = t, this._handler = n, this._timeout = new u
            }
            return i(e, [{
                key: "set",
                value: function(e) {
                    return this._delay = e, this
                }
            }, {
                key: "delay",
                value: function() {
                    var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    this._timeout.start(this._delay, this._handler, e)
                }
            }, {
                key: "cancel",
                value: function() {
                    this._timeout.stop()
                }
            }, {
                key: "isDelayed",
                value: function() {
                    return this._timeout.isStarted()
                }
            }]), e
        }(),
        l = function() {
            function e() {
                r(this, e), a(this, "_ref", void 0)
            }
            return i(e, [{
                key: "start",
                value: function(e, t) {
                    this.stop(), this._ref = window.setInterval(t, e)
                }
            }, {
                key: "stop",
                value: function() {
                    null != this._ref && (clearInterval(this._ref), this._ref = null)
                }
            }, {
                key: "isStarted",
                value: function() {
                    return null != this._ref
                }
            }]), e
        }();

    function c(e) {
        return new Promise(function(t) {
            setTimeout(function() {
                return t()
            }, e)
        })
    }
}