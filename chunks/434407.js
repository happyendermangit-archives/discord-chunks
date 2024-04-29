function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = n("434429"),
        a = n("648935"),
        o = n("530892"),
        s = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n._deceleration = void 0 !== e.deceleration ? e.deceleration : .998, n._velocity = e.velocity, n.__isInteraction = void 0 === e.isInteraction || e.isInteraction, n
            }
            return ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e), r(t, [{
                key: "start",
                value: function(e, t, n) {
                    this.__active = !0, this._lastValue = e, this._fromValue = e, this._onUpdate = t, this.__onEnd = n, this._startTime = Date.now(), this._animationFrame = a.current(this.onUpdate.bind(this))
                }
            }, {
                key: "onUpdate",
                value: function() {
                    var e = Date.now(),
                        t = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (e - this._startTime)));
                    if (this._onUpdate(t), .1 > Math.abs(this._lastValue - t)) {
                        this.__debouncedOnEnd({
                            finished: !0
                        });
                        return
                    }
                    this._lastValue = t, this.__active && (this._animationFrame = a.current(this.onUpdate.bind(this)))
                }
            }, {
                key: "stop",
                value: function() {
                    this.__active = !1, o.current(this._animationFrame), this.__debouncedOnEnd({
                        finished: !1
                    })
                }
            }]), t
        }(i);
    e.exports = s
}