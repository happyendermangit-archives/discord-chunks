function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return o
        }
    });
    var r, o, i, a = n("31775"),
        u = n.n(a),
        s = n("898511"),
        l = n("629815");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function m(e) {
        var t = e.query,
            n = e.guildId,
            r = e.page,
            o = e.categoryId;
        return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(r, " categoryId:").concat(o)
    }(r = o || (o = {}))[r.FETCHING = 0] = "FETCHING", r[r.FETCHED = 1] = "FETCHED", r[r.ERROR = 2] = "ERROR";
    var y = new(u())({
            max: 20
        }),
        I = {},
        h = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
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
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
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
                key: "getSearchResults",
                value: function(e) {
                    var t = m({
                        query: e.query,
                        guildId: e.guildId,
                        page: e.page,
                        categoryId: e.categoryId
                    });
                    return y.get(t)
                }
            }, {
                key: "getFetchState",
                value: function(e) {
                    return I[m({
                        query: e.query,
                        guildId: e.guildId,
                        page: e.page,
                        categoryId: e.categoryId
                    })]
                }
            }], c(r.prototype, o), i && c(r, i), u
        }(s.default.Store);
    f(h, "displayName", "ApplicationDirectorySearchStore"), t.default = new h(l.default, {
        APPLICATION_DIRECTORY_FETCH_SEARCH: function(e) {
            var t = m({
                query: e.query,
                guildId: e.guildId,
                page: e.page,
                categoryId: e.categoryId
            });
            I = E(_({}, I), f({}, t, 0))
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(e) {
            var t = e.query,
                n = e.guildId,
                r = e.page,
                o = e.categoryId,
                i = e.result,
                a = m({
                    query: t,
                    guildId: n,
                    page: r,
                    categoryId: o
                });
            y.set(a, _({
                lastFetchTimeMs: Date.now()
            }, i)), I = E(_({}, I), f({}, a, 1))
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(e) {
            var t = m({
                query: e.query,
                guildId: e.guildId,
                page: e.page,
                categoryId: e.categoryId
            });
            I = E(_({}, I), f({}, t, 2))
        }
    })
}