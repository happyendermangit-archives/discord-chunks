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
        i = n("464942");
    n("592093");
    var a = n("1108"),
        o = n("144613"),
        s = n("512722"),
        u = n("510610");

    function c(e, t) {
        return null == e ? t : e
    }
    var l = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, t);
            var n, r = function(e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return r._overshootClamping = c(e.overshootClamping, !1), r._restDisplacementThreshold = c(e.restDisplacementThreshold, .001), r._restSpeedThreshold = c(e.restSpeedThreshold, .001), r._initialVelocity = e.velocity, r._lastVelocity = c(e.velocity, 0), r._toValue = e.toValue, r.__isInteraction = void 0 === e.isInteraction || e.isInteraction, void 0 !== e.bounciness || void 0 !== e.speed ? (s(void 0 === e.tension && void 0 === e.friction, "You can only define bounciness/speed or tension/friction but not both"), n = u.fromBouncinessAndSpeed(c(e.bounciness, 8), c(e.speed, 12))) : n = u.fromOrigamiTensionAndFriction(c(e.tension, 40), c(e.friction, 7)), r._tension = n.tension, r._friction = n.friction, r
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
            value: function(e, n, r, i) {
                if (this.__active = !0, this._startPosition = e, this._lastPosition = this._startPosition, this._onUpdate = n, this.__onEnd = r, this._lastTime = Date.now(), i instanceof t) {
                    var a = i.getInternalState();
                    this._lastPosition = a.lastPosition, this._lastVelocity = a.lastVelocity, this._lastTime = a.lastTime
                }
                void 0 !== this._initialVelocity && null !== this._initialVelocity && (this._lastVelocity = this._initialVelocity), this.onUpdate()
            }
        }, {
            key: "getInternalState",
            value: function() {
                return {
                    lastPosition: this._lastPosition,
                    lastVelocity: this._lastVelocity,
                    lastTime: this._lastTime
                }
            }
        }, {
            key: "onUpdate",
            value: function() {
                var e = this._lastPosition,
                    t = this._lastVelocity,
                    n = this._lastPosition,
                    r = this._lastVelocity,
                    i = Date.now();
                i > this._lastTime + 64 && (i = this._lastTime + 64);
                for (var o = Math.floor((i - this._lastTime) / 1), s = 0; s < o; ++s) {
                    var u = .001,
                        c = t,
                        l = this._tension * (this._toValue - n) - this._friction * r,
                        n = e + c * u / 2,
                        r = t + l * u / 2,
                        d = r,
                        f = this._tension * (this._toValue - n) - this._friction * r;
                    n = e + d * u / 2;
                    var p = r = t + f * u / 2,
                        h = this._tension * (this._toValue - n) - this._friction * r;
                    n = e + p * u / 2;
                    var m = r = t + h * u / 2,
                        g = this._tension * (this._toValue - n) - this._friction * r;
                    n = e + p * u / 2, r = t + h * u / 2;
                    var _ = (l + 2 * (f + h) + g) / 6;
                    e += (c + 2 * (d + p) + m) / 6 * u, t += _ * u
                }
                if (this._lastTime = i, this._lastPosition = e, this._lastVelocity = t, this._onUpdate(e), this.__active) {
                    var b = !1;
                    this._overshootClamping && 0 !== this._tension && (b = this._startPosition < this._toValue ? e > this._toValue : e < this._toValue);
                    var v = Math.abs(t) <= this._restSpeedThreshold,
                        y = !0;
                    if (0 !== this._tension && (y = Math.abs(this._toValue - e) <= this._restDisplacementThreshold), b || v && y) {
                        0 !== this._tension && this._onUpdate(this._toValue), this.__debouncedOnEnd({
                            finished: !0
                        });
                        return
                    }
                    this._animationFrame = a.current(this.onUpdate.bind(this))
                }
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
    e.exports = l
}