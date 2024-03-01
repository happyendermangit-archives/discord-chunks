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
    }();
    n("867031");
    var i = n("375028"),
        o = n("528830"),
        a = n("627445"),
        u = n("452478"),
        s = function(t) {
            function e(t) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, e);
                var n = function(t, e) {
                        if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e && ("object" == typeof e || "function" == typeof e) ? e : t
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)),
                    r = t || {
                        x: 0,
                        y: 0
                    };
                return "number" == typeof r.x && "number" == typeof r.y ? (n.x = new i(r.x), n.y = new i(r.y)) : (a(r.x instanceof i && r.y instanceof i, "AnimatedValueXY must be initalized with an object of numbers or AnimatedValues."), n.x = r.x, n.y = r.y), n._listeners = {}, n
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
                key: "setValue",
                value: function(t) {
                    this.x.setValue(t.x), this.y.setValue(t.y)
                }
            }, {
                key: "setOffset",
                value: function(t) {
                    this.x.setOffset(t.x), this.y.setOffset(t.y)
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
                value: function(t) {
                    this.x.stopAnimation(), this.y.stopAnimation(), t && t(this.__getValue())
                }
            }, {
                key: "addListener",
                value: function(t) {
                    var e = this,
                        n = u(),
                        r = function(n) {
                            n.value, t(e.__getValue())
                        };
                    return this._listeners[n] = {
                        x: this.x.addListener(r),
                        y: this.y.addListener(r)
                    }, n
                }
            }, {
                key: "removeListener",
                value: function(t) {
                    this.x.removeListener(this._listeners[t].x), this.y.removeListener(this._listeners[t].y), delete this._listeners[t]
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
            }]), e
        }(o);
    t.exports = s
}