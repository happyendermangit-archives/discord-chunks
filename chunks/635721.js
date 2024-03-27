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
    n("379334");
    var i = n("581448"),
        a = n("512722"),
        o = n("865605"),
        s = n("320993"),
        u = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r._parent = e, r._interpolation = n, r._listeners = {}, r
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
                    var e = this._parent.__getValue();
                    return a("number" == typeof e, "Cannot interpolate an input which is not a number."), this._interpolation(e)
                }
            }, {
                key: "addListener",
                value: function(e) {
                    var t = this;
                    !this._parentListener && (this._parentListener = this._parent.addListener(function() {
                        for (var e in t._listeners) t._listeners[e]({
                            value: t.__getValue()
                        })
                    }));
                    var n = s();
                    return this._listeners[n] = e, n
                }
            }, {
                key: "removeListener",
                value: function(e) {
                    delete this._listeners[e]
                }
            }, {
                key: "interpolate",
                value: function(e) {
                    return new t(this, o.create(e))
                }
            }, {
                key: "__attach",
                value: function() {
                    this._parent.__addChild(this)
                }
            }, {
                key: "__detach",
                value: function() {
                    this._parent.__removeChild(this), this._parentListener = this._parent.removeListener(this._parentListener)
                }
            }]), t
        }(i);
    e.exports = u
}