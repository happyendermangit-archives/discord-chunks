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
        i = function(e) {
            function t() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._children = [], e
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
                key: "__addChild",
                value: function(e) {
                    0 === this._children.length && this.__attach(), this._children.push(e)
                }
            }, {
                key: "__removeChild",
                value: function(e) {
                    var t = this._children.indexOf(e);
                    if (-1 === t) {
                        console.warn("Trying to remove a child that doesn't exist");
                        return
                    }
                    this._children.splice(t, 1), 0 === this._children.length && this.__detach()
                }
            }, {
                key: "__getChildren",
                value: function() {
                    return this._children
                }
            }]), t
        }(n("379334"));
    e.exports = i
}