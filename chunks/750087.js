function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return o
        }
    });
    var r, o, i, a = n("898511"),
        u = n("629815");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function d(e, t) {
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

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }(r = o || (o = {}))[r.FETCHING = 0] = "FETCHING", r[r.FETCHED = 1] = "FETCHED", r[r.ERROR = 2] = "ERROR";
    var E = {},
        p = {},
        m = new Set,
        y = {},
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
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
                key: "getApplication",
                value: function(e) {
                    if (null != e) return E[e]
                }
            }, {
                key: "getApplications",
                value: function() {
                    return E
                }
            }, {
                key: "getApplicationFetchState",
                value: function(e) {
                    if (null != e) return p[e]
                }
            }, {
                key: "getApplicationFetchStates",
                value: function() {
                    return p
                }
            }, {
                key: "isInvalidApplication",
                value: function(e) {
                    return null != e && m.has(e)
                }
            }, {
                key: "getInvalidApplicationIds",
                value: function() {
                    return m
                }
            }, {
                key: "isFetching",
                value: function(e) {
                    return 0 === this.getApplicationFetchState(e)
                }
            }, {
                key: "getApplicationLastFetchTime",
                value: function(e) {
                    if (null != e) return y[e]
                }
            }], s(r.prototype, o), i && s(r, i), u
        }(a.default.Store);
    l(I, "displayName", "ApplicationDirectoryApplicationsStore"), t.default = new I(u.default, {
        APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
            var t = e.applicationId;
            p = d(f({}, p), l({}, t, 0))
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
            var t = e.application;
            E = d(f({}, E), l({}, t.id, t)), p = d(f({}, p), l({}, t.id, 1));
            var n = Date.now();
            y = d(f({}, y), l({}, t.id, n)), m.has(t.id) && (m.delete(t.id), m = new Set(m))
        },
        APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
            var t = e.applicationId,
                n = e.isInvalidApplication;
            p = d(f({}, p), l({}, t, 2)), n && (m.add(t), m = new Set(m))
        }
    })
}