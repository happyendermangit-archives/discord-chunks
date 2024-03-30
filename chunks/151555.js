function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setLocaleHack: function() {
            return p
        }
    });
    var r, o, i, a, u = n("898511"),
        s = n("629815");

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = !1,
        _ = null,
        E = null;

    function p(e) {
        m({
            locale: e
        })
    }

    function m(e) {
        var t = e.locale;
        d = !0, _ = t
    }
    var y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var a = c(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "isLoading",
            value: function() {
                return d
            }
        }, {
            key: "getError",
            value: function() {
                return E
            }
        }], l(r.prototype, o), i && l(r, i), u
    }(u.default.Store);
    i = "I18nLoaderStore", (o = "displayName") in(r = y) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new y(s.default, {
        I18N_LOAD_START: m,
        I18N_LOAD_SUCCESS: function(e) {
            e.locale === _ && (d = !1, E = null, _ = null)
        },
        I18N_LOAD_ERROR: function(e) {
            var t = e.error;
            e.locale === _ && (d = !1, E = null != t ? t : null, _ = null)
        }
    })
}