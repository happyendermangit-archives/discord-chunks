function(t, e, n) {
    "use strict";
    n("70102"), n("854508"), n("222007");
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
        i = n("528830"),
        o = n("561621"),
        a = n("318974"),
        u = n("523931");
    n("439382");
    var s = n("452478"),
        Set = n.g.Set || n("343732"),
        c = function(t) {
            function e(t) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, e);
                var n = function(t, e) {
                    if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e && ("object" == typeof e || "function" == typeof e) ? e : t
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n._value = t, n._offset = 0, n._animation = null, n._listeners = {}, n
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
                value: function(t) {
                    this._animation && (this._animation.stop(), this._animation = null), this._updateValue(t)
                }
            }, {
                key: "setOffset",
                value: function(t) {
                    this._offset = t
                }
            }, {
                key: "flattenOffset",
                value: function() {
                    this._value += this._offset, this._offset = 0
                }
            }, {
                key: "addListener",
                value: function(t) {
                    var e = s();
                    return this._listeners[e] = t, e
                }
            }, {
                key: "removeListener",
                value: function(t) {
                    delete this._listeners[t]
                }
            }, {
                key: "removeAllListeners",
                value: function() {
                    this._listeners = {}
                }
            }, {
                key: "stopAnimation",
                value: function(t) {
                    this.stopTracking(), this._animation && this._animation.stop(), this._animation = null, t && t(this.__getValue())
                }
            }, {
                key: "interpolate",
                value: function(t) {
                    return new a(this, u.create(t))
                }
            }, {
                key: "animate",
                value: function(t, e) {
                    var n = this,
                        r = null;
                    t.__isInteraction && (r = o.current.createInteractionHandle());
                    var i = this._animation;
                    this._animation && this._animation.stop(), this._animation = t, t.start(this._value, function(t) {
                        n._updateValue(t)
                    }, function(t) {
                        n._animation = null, null !== r && o.current.clearInteractionHandle(r), e && e(t)
                    }, i)
                }
            }, {
                key: "stopTracking",
                value: function() {
                    this._tracking && this._tracking.__detach(), this._tracking = null
                }
            }, {
                key: "track",
                value: function(t) {
                    this.stopTracking(), this._tracking = t
                }
            }, {
                key: "_updateValue",
                value: function(t) {
                    var e, n;
                    for (var r in this._value = t, e = this, n = new Set, ! function t(e) {
                            "function" == typeof e.update ? n.add(e) : e.__getChildren().forEach(t)
                        }(e), n.forEach(function(t) {
                            return t.update()
                        }), this._listeners) this._listeners[r]({
                        value: this.__getValue()
                    })
                }
            }]), e
        }(i);
    t.exports = c
}