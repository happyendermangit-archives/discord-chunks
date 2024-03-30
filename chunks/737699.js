function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("379887");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function a(e, t) {
        return (a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var u = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && a(e, t)
        }(c, e);
        var t, n, r, u, s, l = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, a = i(t);
            if (n) {
                var u = i(this).constructor;
                o = Reflect.construct(a, arguments, u)
            } else o = a.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), l.apply(this, arguments)
        }
        return r = c, u = [{
            key: "requestPermissionCore",
            value: function(e, t) {
                return Promise.resolve(!0)
            }
        }, {
            key: "hasPermissionCore",
            value: function(e, t) {
                return Promise.resolve(!0)
            }
        }, {
            key: "openSettings",
            value: function(e) {}
        }, {
            key: "didHavePermission",
            value: function(e) {
                return !0
            }
        }, {
            key: "openAlertModal",
            value: function(e) {}
        }], o(r.prototype, u), s && o(r, s), c
    }(r.NativePermissionBaseUtils);
    t.default = new u
}