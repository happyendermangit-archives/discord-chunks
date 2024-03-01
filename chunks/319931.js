function(t, e, n) {
    "use strict";
    n("70102"), n("854508");
    var r = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        Animation = n("439382"),
        i = n("330139"),
        o = n("242173"),
        a = function(t) {
            function e(t) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, e);
                var n = function(t, e) {
                    if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e && ("object" == typeof e || "function" == typeof e) ? e : t
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n._deceleration = void 0 !== t.deceleration ? t.deceleration : .998, n._velocity = t.velocity, n.__isInteraction = void 0 === t.isInteraction || t.isInteraction, n
            }
            return ! function(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, t), r(e, [{
                key: "start",
                value: function(t, e, n) {
                    this.__active = !0, this._lastValue = t, this._fromValue = t, this._onUpdate = e, this.__onEnd = n, this._startTime = Date.now(), this._animationFrame = i.current(this.onUpdate.bind(this))
                }
            }, {
                key: "onUpdate",
                value: function() {
                    var t = Date.now(),
                        e = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (t - this._startTime)));
                    if (this._onUpdate(e), .1 > Math.abs(this._lastValue - e)) {
                        this.__debouncedOnEnd({
                            finished: !0
                        });
                        return
                    }
                    this._lastValue = e, this.__active && (this._animationFrame = i.current(this.onUpdate.bind(this)))
                }
            }, {
                key: "stop",
                value: function() {
                    this.__active = !1, o.current(this._animationFrame), this.__debouncedOnEnd({
                        finished: !1
                    })
                }
            }]), e
        }(Animation);
    t.exports = a
}