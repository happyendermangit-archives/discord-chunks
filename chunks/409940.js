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
    }();
    n("968598");
    var i = n("592093"),
        a = n("261469"),
        o = n("512722"),
        s = n("771922"),
        u = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ("object" == typeof t || "function" == typeof t) ? t : e
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                    r = e || {
                        x: 0,
                        y: 0
                    };
                return "number" == typeof r.x && "number" == typeof r.y ? (n.x = new i(r.x), n.y = new i(r.y)) : (o(r.x instanceof i && r.y instanceof i, "AnimatedValueXY must be initalized with an object of numbers or AnimatedValues."), n.x = r.x, n.y = r.y), n._listeners = {}, n
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
                key: "setValue",
                value: function(e) {
                    this.x.setValue(e.x), this.y.setValue(e.y)
                }
            }, {
                key: "setOffset",
                value: function(e) {
                    this.x.setOffset(e.x), this.y.setOffset(e.y)
                }
            }, {
                key: "flattenOffset",
                value: function() {
                    this.x.flattenOffset(), this.y.flattenOffset()
                }
            }, {
                key: "__getValue",
                value: function() {
                    return {
                        x: this.x.__getValue(),
                        y: this.y.__getValue()
                    }
                }
            }, {
                key: "stopAnimation",
                value: function(e) {
                    this.x.stopAnimation(), this.y.stopAnimation(), e && e(this.__getValue())
                }
            }, {
                key: "addListener",
                value: function(e) {
                    var t = this,
                        n = s(),
                        r = function(n) {
                            n.value, e(t.__getValue())
                        };
                    return this._listeners[n] = {
                        x: this.x.addListener(r),
                        y: this.y.addListener(r)
                    }, n
                }
            }, {
                key: "removeListener",
                value: function(e) {
                    this.x.removeListener(this._listeners[e].x), this.y.removeListener(this._listeners[e].y), delete this._listeners[e]
                }
            }, {
                key: "getLayout",
                value: function() {
                    return {
                        left: this.x,
                        top: this.y
                    }
                }
            }, {
                key: "getTranslateTransform",
                value: function() {
                    return [{
                        translateX: this.x
                    }, {
                        translateY: this.y
                    }]
                }
            }]), t
        }(a);
    e.exports = u
}