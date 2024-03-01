function(t, e, n) {
    "use strict";
    n("70102"), n("854508"), n("424973");
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
        i = function(t) {
            function e() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                }(this, e);
                var t = function(t, e) {
                    if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e && ("object" == typeof e || "function" == typeof e) ? e : t
                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t._children = [], t
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
                key: "__addChild",
                value: function(t) {
                    0 === this._children.length && this.__attach(), this._children.push(t)
                }
            }, {
                key: "__removeChild",
                value: function(t) {
                    var e = this._children.indexOf(t);
                    if (-1 === e) {
                        console.warn("Trying to remove a child that doesn't exist");
                        return
                    }
                    this._children.splice(e, 1), 0 === this._children.length && this.__detach()
                }
            }, {
                key: "__getChildren",
                value: function() {
                    return this._children
                }
            }]), e
        }(n("867031"));
    t.exports = i
}