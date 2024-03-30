function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("807471"),
        o = n("517727"),
        i = n("930949");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var l = !1;

    function c() {
        var e, t = null === o.default || void 0 === o.default ? void 0 : null === (e = o.default.window) || void 0 === e ? void 0 : e.setContentProtection;
        if (null != t) {
            var n = i.default.enableContentProtection;
            n !== l && (t(n), l = n)
        }
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && s(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = u(t);
            if (n) {
                var s = u(this).constructor;
                o = Reflect.construct(i, arguments, s)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function o() {
            var e, t, n, u;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), c(), t = a(e = r.call(this)), n = "stores", u = new Map().set(i.default, c), n in t ? Object.defineProperty(t, n, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = u, e
        }
        return o
    }(r.default);
    t.default = new f
}