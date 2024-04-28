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
        i = n("261469"),
        a = n("504144"),
        o = n("118403"),
        s = n("59199");
    n("464942");
    var u = n("771922"),
        c = n.g.Set || n("309332"),
        l = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n._value = e, n._offset = 0, n._animation = null, n._listeners = {}, n
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
                key: "__detach",
                value: function() {
                    this.stopAnimation()
                }
            }, {
                key: "__getValue",
                value: function() {
                    return this._value + this._offset
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this._animation && (this._animation.stop(), this._animation = null), this._updateValue(e)
                }
            }, {
                key: "setOffset",
                value: function(e) {
                    this._offset = e
                }
            }, {
                key: "flattenOffset",
                value: function() {
                    this._value += this._offset, this._offset = 0
                }
            }, {
                key: "addListener",
                value: function(e) {
                    var t = u();
                    return this._listeners[t] = e, t
                }
            }, {
                key: "removeListener",
                value: function(e) {
                    delete this._listeners[e]
                }
            }, {
                key: "removeAllListeners",
                value: function() {
                    this._listeners = {}
                }
            }, {
                key: "stopAnimation",
                value: function(e) {
                    this.stopTracking(), this._animation && this._animation.stop(), this._animation = null, e && e(this.__getValue())
                }
            }, {
                key: "interpolate",
                value: function(e) {
                    return new o(this, s.create(e))
                }
            }, {
                key: "animate",
                value: function(e, t) {
                    var n = this,
                        r = null;
                    e.__isInteraction && (r = a.current.createInteractionHandle());
                    var i = this._animation;
                    this._animation && this._animation.stop(), this._animation = e, e.start(this._value, function(e) {
                        n._updateValue(e)
                    }, function(e) {
                        n._animation = null, null !== r && a.current.clearInteractionHandle(r), t && t(e)
                    }, i)
                }
            }, {
                key: "stopTracking",
                value: function() {
                    this._tracking && this._tracking.__detach(), this._tracking = null
                }
            }, {
                key: "track",
                value: function(e) {
                    this.stopTracking(), this._tracking = e
                }
            }, {
                key: "_updateValue",
                value: function(e) {
                    var t, n;
                    for (var r in this._value = e, t = this, n = new c, ! function e(t) {
                            "function" == typeof t.update ? n.add(t) : t.__getChildren().forEach(e)
                        }(t), n.forEach(function(e) {
                            return e.update()
                        }), this._listeners) this._listeners[r]({
                        value: this.__getValue()
                    })
                }
            }]), t
        }(i);
    e.exports = l
}