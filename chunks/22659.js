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
        i = n("528830");
    n("867031");
    var o = n("375028"),
        a = n("318974"),
        u = n("426939"),
        s = function(t) {
            function e(t, n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, e);
                var r = function(t, e) {
                    if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e && ("object" == typeof e || "function" == typeof e) ? e : t
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return r._a = "number" == typeof t ? new o(t) : t, r._b = "number" == typeof n ? new o(n) : n, r._listeners = {}, r
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
                key: "__getValue",
                value: function() {
                    return this._a.__getValue() * this._b.__getValue()
                }
            }, {
                key: "addListener",
                value: function(t) {
                    var e = this;
                    !this._aListener && this._a.addListener && (this._aListener = this._a.addListener(function() {
                        for (var t in e._listeners) e._listeners[t]({
                            value: e.__getValue()
                        })
                    })), !this._bListener && this._b.addListener && (this._bListener = this._b.addListener(function() {
                        for (var t in e._listeners) e._listeners[t]({
                            value: e.__getValue()
                        })
                    }));
                    var n = guid();
                    return this._listeners[n] = t, n
                }
            }, {
                key: "removeListener",
                value: function(t) {
                    delete this._listeners[t]
                }
            }, {
                key: "interpolate",
                value: function(t) {
                    return new a(this, u.create(t))
                }
            }, {
                key: "__attach",
                value: function() {
                    this._a.__addChild(this), this._b.__addChild(this)
                }
            }, {
                key: "__detach",
                value: function() {
                    this._a.__removeChild(this), this._b.__removeChild(this)
                }
            }]), e
        }(i);
    t.exports = s
}