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
        i = n("968598"),
        a = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n._transforms = e, n
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
                key: "__getValue",
                value: function() {
                    return this._transforms.map(function(e) {
                        var t = {};
                        for (var n in e) {
                            var r = e[n];
                            r instanceof i ? t[n] = r.__getValue() : t[n] = r
                        }
                        return t
                    })
                }
            }, {
                key: "__getAnimatedValue",
                value: function() {
                    return this._transforms.map(function(e) {
                        var t = {};
                        for (var n in e) {
                            var r = e[n];
                            r instanceof i ? t[n] = r.__getAnimatedValue() : t[n] = r
                        }
                        return t
                    })
                }
            }, {
                key: "__attach",
                value: function() {
                    var e = this;
                    this._transforms.forEach(function(t) {
                        for (var n in t) {
                            var r = t[n];
                            r instanceof i && r.__addChild(e)
                        }
                    })
                }
            }, {
                key: "__detach",
                value: function() {
                    var e = this;
                    this._transforms.forEach(function(t) {
                        for (var n in t) {
                            var r = t[n];
                            r instanceof i && r.__removeChild(e)
                        }
                    })
                }
            }]), t
        }(n("261469"));
    e.exports = a
}