function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("470888"),
        u = n("386823"),
        s = n("108059"),
        l = n("393588"),
        c = n("281767");

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function p(e, t) {
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

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = new Set([c.PlatformTypes.CONTACTS]),
        I = !0,
        h = [],
        O = [],
        T = {},
        S = {},
        v = {},
        g = function(e) {
            h = e.filter(function(e) {
                return !y.has(e.type) && u.default.isSupported(e.type)
            }), O = e.filter(function(e) {
                return y.has(e.type)
            }), I = !1
        },
        A = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
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
                var e, r, o, i = _(t);
                if (n) {
                    var a = _(this).constructor;
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
                key: "isJoining",
                value: function(e) {
                    return T[e] || !1
                }
            }, {
                key: "joinErrorMessage",
                value: function(e) {
                    return v[e]
                }
            }, {
                key: "isFetching",
                value: function() {
                    return I
                }
            }, {
                key: "getAccounts",
                value: function() {
                    return h
                }
            }, {
                key: "getLocalAccounts",
                value: function() {
                    return O
                }
            }, {
                key: "getAccount",
                value: function(e, t) {
                    return h.find(function(n) {
                        return (null == e || n.id === e) && n.type === t
                    })
                }
            }, {
                key: "getLocalAccount",
                value: function(e) {
                    return O.find(function(t) {
                        return t.type === e
                    })
                }
            }, {
                key: "isSuggestedAccountType",
                value: function(e) {
                    return S[e] || !1
                }
            }], f(r.prototype, o), i && f(r, i), u
        }(o.default.Store);
    d(A, "displayName", "ConnectedAccountsStore"), t.default = new A(i.default, {
        CONNECTION_OPEN: function(e) {
            g(e.connectedAccounts.map(function(e) {
                return new s.default(e)
            }))
        },
        USER_CONNECTIONS_UPDATE: function(e) {
            e.local && null != e.accounts ? g(e.accounts.map(function(e) {
                return new s.default(p(E({}, e), {
                    integrations: e.integrations.map(function(e) {
                        return p(E({}, e), {
                            guild: new l.default(e.guild)
                        })
                    })
                }))
            })) : a.default.fetch()
        },
        USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
            T[e.integrationId] = e.joining
        },
        USER_CONNECTION_UPDATE: function(e) {
            var t = e.platformType,
                n = e.id,
                r = e.revoked,
                o = e.accessToken,
                i = h.find(function(e) {
                    return e.id === n && e.type === t
                });
            if (null == i) return !1;
            null != r && (i.revoked = r), null != o && (i.accessToken = o)
        },
        USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: function(e) {
            v[e.integrationId] = void 0 !== e.error ? e.error : ""
        }
    })
}