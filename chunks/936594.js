function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("470079"),
        r = n("803997"),
        c = n.n(r),
        o = n("729460"),
        i = n("750950"),
        f = n("605094");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var s = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && l(e, t)
        }(h, e);
        var t, n, r, s, b, p = (t = h, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, a, r, c = u(t);
            if (n) {
                var o = u(this).constructor;
                r = Reflect.construct(c, arguments, o)
            } else r = c.apply(this, arguments);
            return e = this, (a = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(a) || "function" == typeof a) ? a : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function h() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), p.apply(this, arguments)
        }
        return r = h, s = [{
            key: "render",
            value: function() {
                return a.createElement("div", {
                    className: c()(i.app, f.vertical)
                }, a.createElement(o.default, null))
            }
        }], d(r.prototype, s), b && d(r, b), h
    }(a.Component);
    t.default = s
}