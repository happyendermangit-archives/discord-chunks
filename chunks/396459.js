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
        i = n("379334"),
        a = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r._strings = e, r._values = n, r
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
                key: "__transformValue",
                value: function(e) {
                    return e instanceof i ? e.__getValue() : e
                }
            }, {
                key: "__getValue",
                value: function() {
                    for (var e = this._strings[0], t = 0; t < this._values.length; ++t) e += this.__transformValue(this._values[t]) + this._strings[1 + t];
                    return e
                }
            }, {
                key: "__attach",
                value: function() {
                    for (var e = 0; e < this._values.length; ++e) this._values[e] instanceof i && this._values[e].__addChild(this)
                }
            }, {
                key: "__detach",
                value: function() {
                    for (var e = 0; e < this._values.length; ++e) this._values[e] instanceof i && this._values[e].__removeChild(this)
                }
            }]), t
        }(n("581448"));
    e.exports = a
}