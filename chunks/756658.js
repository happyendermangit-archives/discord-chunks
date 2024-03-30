function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("660560"),
        d = n("620205"),
        _ = n("367602"),
        E = n("332716");

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var I = {},
        h = {},
        O = {},
        T = {},
        S = !1,
        v = !1,
        g = new Set,
        A = new Set,
        b = {};

    function N(e) {
        I[e.id] = f.default.createFromServer(e), null == O[e.sku_id] && (O[e.sku_id] = new Set), null == T[e.application_id] && (T[e.application_id] = new Set), null != e.subscription_id && (null == b[e.subscription_id] && (b[e.subscription_id] = new Set), b[e.subscription_id].add(e.id)), T[e.application_id].add(e.id), O[e.sku_id].add(e.id)
    }

    function R(e) {
        h[e.id] = f.default.createFromServer(e)
    }

    function C(e) {
        return N(e.entitlement)
    }
    var P = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
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
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
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
            key: "initialize",
            value: function() {
                this.syncWith([d.default], function() {
                    return !0
                })
            }
        }, {
            key: "get",
            value: function(e) {
                return I[e]
            }
        }, {
            key: "getGiftable",
            value: function() {
                return s().values(h)
            }
        }, {
            key: "getForApplication",
            value: function(e) {
                var t = T[e];
                if (null == t) return null;
                var n = new Set,
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var s = a.value;
                        n.add(I[s])
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && null != u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
        }, {
            key: "getForSku",
            value: function(e) {
                var t = O[e];
                if (null == t) return null;
                var n = new Set,
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var s = a.value;
                        n.add(I[s])
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && null != u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
        }, {
            key: "fetchingAllEntitlements",
            get: function() {
                return S
            }
        }, {
            key: "fetchedAllEntitlements",
            get: function() {
                return v
            }
        }, {
            key: "applicationIdsFetching",
            get: function() {
                return g
            }
        }, {
            key: "applicationIdsFetched",
            get: function() {
                return A
            }
        }, {
            key: "isFetchingForApplication",
            value: function(e) {
                return this.fetchingAllEntitlements || null != e && this.applicationIdsFetching.has(e)
            }
        }, {
            key: "isFetchedForApplication",
            value: function(e) {
                return this.fetchedAllEntitlements || null != e && this.applicationIdsFetched.has(e)
            }
        }, {
            key: "getForSubscription",
            value: function(e) {
                var t = b[e];
                if (null == t) return null;
                var n = new Set,
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var s = a.value;
                        n.add(I[s])
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && null != u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
        }, {
            key: "isEntitledToSku",
            value: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    o = O[t];
                if (null != o) {
                    var i = !0,
                        a = !1,
                        u = void 0;
                    try {
                        for (var s, l = o[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                            var c = I[s.value];
                            if (null != c && c.isValid(e, E.default, r)) return !0
                        }
                    } catch (e) {
                        a = !0, u = e
                    } finally {
                        try {
                            !i && null != l.return && l.return()
                        } finally {
                            if (a) throw u
                        }
                    }
                }
                if (A.has(n)) return !1;
                var f = null != r ? d.default.getLibraryApplication(n, r) : d.default.getActiveLibraryApplication(n);
                return !!(null != f && f.sku.id === t && (0, _.isUserEntitledToLibraryApplication)(f)) || null
            }
        }, {
            key: "hasFetchedForApplicationIds",
            value: function(e) {
                return e.every(function(e) {
                    return A.has(e)
                })
            }
        }], p(r.prototype, o), i && p(r, i), u
    }(l.default.Store);
    i = "EntitlementStore", (o = "displayName") in(r = P) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new P(c.default, {
        ENTITLEMENT_FETCH_APPLICATION_START: function(e) {
            var t = e.applicationId;
            g.add(t)
        },
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: function(e) {
            var t = e.applicationId,
                n = e.entitlements;
            g.delete(t), A.add(t);
            var r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value;
                    !0 !== s.consumed && N(s)
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && null != u.return && u.return()
                } finally {
                    if (o) throw i
                }
            }
        },
        ENTITLEMENT_FETCH_APPLICATION_FAIL: function() {},
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function(e) {
            var t = e.entitlements;
            h = {}, t.forEach(R)
        },
        SKU_PURCHASE_SUCCESS: function(e) {
            var t = e.entitlements,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    N(u)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        LIBRARY_FETCH_SUCCESS: function(e) {
            var t = e.libraryApplications,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    if (null != u.entitlements) {
                        var s = !0,
                            l = !1,
                            c = void 0;
                        try {
                            for (var f, d = u.entitlements[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                                var _ = f.value;
                                N(_)
                            }
                        } catch (e) {
                            l = !0, c = e
                        } finally {
                            try {
                                !s && null != d.return && d.return()
                            } finally {
                                if (l) throw c
                            }
                        }
                    }
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        ENTITLEMENT_CREATE: C,
        ENTITLEMENT_UPDATE: C,
        ENTITLEMENT_DELETE: function(e) {
            return function(e) {
                delete I[e.id];
                var t = T[e.application_id];
                null != t && t.delete(e.id);
                var n = O[e.sku_id];
                if (null != n && n.delete(e.id), null != e.subscription_id) {
                    var r = b[e.subscription_id];
                    null != r && r.delete(e.id)
                }
            }(e.entitlement)
        },
        LOGOUT: function() {
            I = {}, O = {}, T = {}, S = !1, v = !1, g = new Set, A = new Set
        },
        ENTITLEMENTS_FETCH_FOR_USER_START: function() {
            S = !0
        },
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: function(e) {
            var t = e.entitlements;
            v = !0, S = !1;
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    N(u)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        ENTITLEMENTS_FETCH_FOR_USER_FAIL: function() {
            v = !1, S = !1
        }
    })
}