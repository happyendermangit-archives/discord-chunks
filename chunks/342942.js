function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("338140");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = [],
        E = {},
        p = {},
        m = {},
        y = {};

    function I(e) {
        E[e.id] = e, m[e.name.toLowerCase()] = e;
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = e.aliases[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) m[o.value.toLowerCase()] = e
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
        delete y[e.id]
    }

    function h(e) {
        var t = e.entitlements,
            n = !1,
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value.sku;
                (null == s ? void 0 : s.application) != null && (I(l.default.createFromServer(s.application)), n = !0)
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
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
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
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
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
            key: "_getAllApplications",
            value: function() {
                return Object.values(E)
            }
        }, {
            key: "getGuildApplication",
            value: function(e, t) {
                if (null != e) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = Object.values(E)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            if (u.guildId === e && u.type === t) return u
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
                }
            }
        }, {
            key: "getGuildApplicationIds",
            value: function(e) {
                var t;
                return null == e ? _ : null !== (t = p[e]) && void 0 !== t ? t : _
            }
        }, {
            key: "getApplication",
            value: function(e) {
                return E[e]
            }
        }, {
            key: "getApplicationByName",
            value: function(e) {
                if (null != e) {
                    var t = e.toLowerCase();
                    return Object.prototype.hasOwnProperty.call(m, t) ? m[t] : void 0
                }
            }
        }, {
            key: "isFetchingApplication",
            value: function(e) {
                return !0 === y[e]
            }
        }, {
            key: "didFetchingApplicationFail",
            value: function(e) {
                return !1 === y[e]
            }
        }, {
            key: "getFetchingOrFailedFetchingIds",
            value: function() {
                return Object.keys(y)
            }
        }], c(r.prototype, o), i && c(r, i), u
    }(u.default.Store);
    i = "ApplicationStore", (o = "displayName") in(r = O) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new O(s.default, {
        LOGOUT: function() {
            E = {}, p = {}, m = {}, y = {}
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.applications,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    I(new l.default(u))
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
        APPLICATION_FETCH: function(e) {
            var t = e.applicationId,
                n = y[t];
            return y[t] = !0, !0 !== n
        },
        APPLICATION_FETCH_SUCCESS: function(e) {
            var t = e.application;
            I(l.default.createFromServer(t))
        },
        APPLICATION_FETCH_FAIL: function(e) {
            var t = e.applicationId,
                n = y[t];
            return y[t] = !1, !1 !== n
        },
        APPLICATIONS_FETCH: function(e) {
            var t = e.applicationIds,
                n = !1,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value,
                        l = y[s];
                    y[s] = !0, n = !0 !== l
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
        },
        APPLICATIONS_FETCH_SUCCESS: function(e) {
            var t = e.applications,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    I(l.default.createFromServer(u))
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
        APPLICATIONS_FETCH_FAIL: function(e) {
            var t = e.applicationIds,
                n = !1,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s = a.value,
                        l = y[s];
                    y[s] = !1, n = !1 !== l
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
        },
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: h,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: h,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: h,
        GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
            var t = e.integrations,
                n = e.guildId,
                r = !1,
                o = [],
                i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = t[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                    var c = s.value.application;
                    null != c && (I(c), o.push(c.id), r = !0)
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
            return r && (p[n] = o), r
        },
        GUILD_APPLICATIONS_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.applications,
                r = [],
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = n[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var c = u.value;
                    r.push(c.id), I(l.default.createFromServer(c))
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
            p[t] = r
        },
        BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
            var t = e.payments,
                n = new Set,
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                    var s, c = a.value,
                        f = null === (s = c.sku) || void 0 === s ? void 0 : s.application;
                    !(null == f || n.has(f.id)) && I(l.default.createFromServer(f))
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
            return n.size > 0
        },
        PAYMENT_UPDATE: function(e) {
            var t, n = e.payment;
            if ((null === (t = n.sku) || void 0 === t ? void 0 : t.application) == null) return !1;
            I(l.default.createFromServer(n.sku.application))
        },
        INVITE_RESOLVE_SUCCESS: function(e) {
            var t = e.invite;
            if (null == t.target_application) return !1;
            I(l.default.createFromServer(t.target_application))
        },
        GIFT_CODE_RESOLVE_SUCCESS: function(e) {
            var t, n = e.giftCode;
            if ((null === (t = n.store_listing) || void 0 === t ? void 0 : t.sku.application) == null) return !1;
            I(l.default.createFromServer(n.store_listing.sku.application))
        },
        LIBRARY_FETCH_SUCCESS: function(e) {
            var t = e.libraryApplications,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    I(l.default.createFromServer(u.application))
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
        STORE_LISTING_FETCH_SUCCESS: function(e) {
            var t = e.storeListing;
            if (null == t.sku.application) return !1;
            I(l.default.createFromServer(t.sku.application))
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            e.messages.forEach(function(e) {
                return function(e) {
                    var t;
                    null === (t = e.attachments) || void 0 === t || t.forEach(function(e) {
                        null != e.application && I(l.default.createFromServer(e.application))
                    })
                }(e)
            })
        },
        USER_RECENT_GAMES_FETCH_SUCCESS: function(e) {
            e.recentGames.forEach(function(e) {
                I(l.default.createFromServer(e.application))
            })
        }
    })
}