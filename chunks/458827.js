function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return u
        }
    });
    var r, o, i, a, u, s, l = n("898511"),
        c = n("629815"),
        f = n("338140"),
        d = n("541746");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return _(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(r = u || (u = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.FETCH_FAILED = 3] = "FETCH_FAILED";
    var I = new Map,
        h = new Map,
        O = [],
        T = 0,
        S = [],
        v = function(e) {
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
                var e, r, o, i = p(t);
                if (n) {
                    var a = p(this).constructor;
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
                key: "getIntegrations",
                value: function(e) {
                    var t;
                    return null !== (t = I.get(e)) && void 0 !== t ? t : S
                }
            }, {
                key: "getIntegration",
                value: function(e, t) {
                    var n;
                    return null === (n = I.get(e)) || void 0 === n ? void 0 : n.find(function(e) {
                        return e.application.id === t
                    })
                }
            }, {
                key: "getAllIntegrations",
                value: function() {
                    return I
                }
            }, {
                key: "getIntegrationsFetchState",
                value: function(e) {
                    var t;
                    return null !== (t = h.get(e)) && void 0 !== t ? t : 0
                }
            }, {
                key: "getApplicationsShelfFetchState",
                value: function() {
                    return T
                }
            }, {
                key: "getApplicationsShelf",
                value: function() {
                    return O
                }
            }], E(r.prototype, o), i && E(r, i), u
        }(l.default.Store);

    function g(e) {
        return e.sort(function(e, t) {
            return e.application.name.localeCompare(t.application.name)
        })
    }
    a = "PrivateChannelIntegrationStore", (i = "displayName") in(o = v) ? Object.defineProperty(o, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = a;
    var A = new v(c.default, {
        LOGOUT: function() {
            I.clear()
        },
        CONNECTION_OPEN: function() {
            I.clear(), h.clear()
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            if (null == t || 3 !== h.get(t)) return !1;
            h.set(t, 0)
        },
        APPLICATIONS_SHELF_FETCH_START: function() {
            T = 1
        },
        APPLICATIONS_SHELF_FETCH_SUCCESS: function(e) {
            O = e.applications.map(f.default.createFromServer).sort(function(e, t) {
                return e.name.localeCompare(t.name)
            }), T = 2
        },
        APPLICATIONS_SHELF_FETCH_FAIL: function() {
            T = 3
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START: function(e) {
            var t = e.channelId;
            I.set(t, null), h.set(t, 1)
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS: function(e) {
            var t = e.channelId,
                n = e.integrations;
            I.set(t, g(n.map(d.createPrivateChannelIntegration))), h.set(t, 2)
        },
        FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL: function(e) {
            var t = e.channelId;
            h.set(t, 3)
        },
        PRIVATE_CHANNEL_INTEGRATION_CREATE: function(e) {
            var t = e.integration,
                n = I.get(t.channel_id);
            if (null == n) return !1;
            I.set(t.channel_id, g(y(n).concat([(0, d.createPrivateChannelIntegration)(t)])))
        },
        PRIVATE_CHANNEL_INTEGRATION_UPDATE: function(e) {
            var t = e.integration,
                n = I.get(t.channel_id);
            if (null == n) return !1;
            var r = (0, d.createPrivateChannelIntegration)(t),
                o = n.findIndex(function(e) {
                    return e.application.id === r.application.id
                }),
                i = y(n); - 1 === o ? i.push(r) : i[o] = r, I.set(r.channel_id, g(i))
        },
        PRIVATE_CHANNEL_INTEGRATION_DELETE: function(e) {
            var t = e.channelId,
                n = e.applicationId,
                r = I.get(t);
            if (null == r) return !1;
            I.set(t, r.filter(function(e) {
                return e.application.id !== n
            }))
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            return I.delete(t.id)
        }
    });
    t.default = A
}