function(e, t, n) {
    "use strict";
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = function() {
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
        a = n("968598");
    n("592093");
    var o = function(e) {
        function t(e, n, r, i, a) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, t);
            var o = function(e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return o._value = e, o._parent = n, o._animationClass = r, o._animationConfig = i, o._callback = a, o.__attach(), o
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
        }(t, e), i(t, [{
            key: "__getValue",
            value: function() {
                return this._parent.__getValue()
            }
        }, {
            key: "__attach",
            value: function() {
                this._parent.__addChild(this)
            }
        }, {
            key: "__detach",
            value: function() {
                this._parent.__removeChild(this)
            }
        }, {
            key: "update",
            value: function() {
                this._value.animate(new this._animationClass(r({}, this._animationConfig, {
                    toValue: this._animationConfig.toValue.__getValue()
                })), this._callback)
            }
        }]), t
    }(a);
    e.exports = o
}