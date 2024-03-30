function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("392711"),
        u = n("898511"),
        s = n("727309"),
        l = n("629815"),
        c = n("428009"),
        f = n("217014"),
        d = n("523018"),
        _ = n("904393"),
        E = n("603138");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
            })
        }
        return e
    }

    function O(e, t) {
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

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function S(e) {
        return function(e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || v(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function v(e, t) {
        if (e) {
            if ("string" == typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
        }
    }(r = o || (o = {}))[r.INVALID = 0] = "INVALID", r[r.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", r[r.VALID = 2] = "VALID";
    var g = new Set,
        A = new Set,
        b = new Set,
        N = [],
        R = {
            BROADCASTS_BY_USER_ID: function(e) {
                return "user:".concat(e)
            },
            BROADCASTS_BY_CHANNEL_ID: function(e) {
                return "channel:".concat(e)
            },
            BROADCASTS_BY_VALIDITY: function(e) {
                return "validity:".concat(e)
            }
        },
        C = new s.SecondaryIndexMap(function(e) {
            var t = g.has(e.userId) ? 1 : 0;
            return null != e.viewers && (t = 2), [R.BROADCASTS_BY_USER_ID(e.userId), R.BROADCASTS_BY_CHANNEL_ID(e.channelId), R.BROADCASTS_BY_VALIDITY(t)]
        }, function(e) {
            return e.channelId
        });

    function P(e, t, n) {
        if (f.default.getId() === e) return !1;
        if (null == t) {
            var r = C.get(e);
            return !!(null != r && (0, a.isEqual)(r.source, n)) && (C.delete(e), void 0)
        }!g.has(e) && !A.has(e) && (b.add(e), N = S(b));
        var o = (0, E.broadcastFromServer)(t, e, n);
        C.set(e, o)
    }

    function D(e) {
        return null != e ? {
            type: E.BroadcastSourceType.GUILD,
            guildId: e
        } : {
            type: E.BroadcastSourceType.GLOBAL
        }
    }
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && T(e, t)
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
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
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
            key: "getBroadcasts",
            value: function() {
                return C.values(R.BROADCASTS_BY_VALIDITY(2))
            }
        }, {
            key: "getBroadcastsToValidateChannels",
            value: function() {
                return C.values(R.BROADCASTS_BY_VALIDITY(1))
            }
        }, {
            key: "getBroadcastByChannel",
            value: function(e) {
                return C.values(R.BROADCASTS_BY_CHANNEL_ID(e))[0]
            }
        }, {
            key: "getBroadcastByUser",
            value: function(e) {
                return C.get(e)
            }
        }, {
            key: "getUserIdsToValidate",
            value: function() {
                return N
            }
        }], m(r.prototype, o), i && m(r, i), u
    }(u.default.Store);
    y(L, "displayName", "BroadcastingStore"), t.default = new L(l.default, {
        PRESENCE_UPDATES: function(e) {
            return e.updates.forEach(function(e) {
                var t = e.user,
                    n = e.broadcast,
                    r = e.guildId;
                P(t.id, n, D(r))
            })
        },
        PRESENCES_REPLACE: function(e) {
            return e.presences.forEach(function(e) {
                var t = e.user,
                    n = e.broadcast,
                    r = e.guildId;
                P(t.id, n, D(r))
            })
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            var t = e.presences,
                n = e.guilds;
            t.forEach(function(e) {
                var t = e.user,
                    n = e.broadcast,
                    r = e.guildId;
                P(t.id, n, D(r))
            }), n.forEach(function(e) {
                var t = e.presences,
                    n = e.id;
                t.forEach(function(e) {
                    var t = e.user,
                        r = e.broadcast;
                    P(t.id, r, D(n))
                })
            })
        },
        BROADCASTER_BUCKETS_RECEIVED: function(e) {
            var t = e.data;
            d.default.keys(t).forEach(function(e) {
                _.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? g.add(e) : A.add(e), b.clear(), N = S(b);
                var n = C.get(e);
                null != n && (C.delete(e), C.set(e, n))
            })
        },
        BROADCAST_VIEWERS_UPDATE: function(e) {
            Object.entries(e.viewers).forEach(function(e) {
                var t, n, r = (n = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t = e) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(t, n) || v(t, n) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    o = r[0],
                    i = r[1],
                    a = C.get(o);
                null != a && C.set(o, O(h({}, a), {
                    viewers: i
                }))
            })
        },
        CHANNEL_RECIPIENT_ADD: function(e) {
            var t = e.channelId,
                n = e.user,
                r = C.values(R.BROADCASTS_BY_CHANNEL_ID(t))[0];
            if (null == r || null == r.viewers || r.viewers.some(function(e) {
                    return e.id === n.id
                })) return !1;
            C.set(r.userId, O(h({}, r), {
                viewers: S(r.viewers).concat([new c.default(n)])
            }))
        },
        CHANNEL_RECIPIENT_REMOVE: function(e) {
            var t = e.channelId,
                n = e.user,
                r = C.values(R.BROADCASTS_BY_CHANNEL_ID(t))[0];
            if (null == r || null == r.viewers) return !1;
            C.set(r.userId, O(h({}, r), {
                viewers: r.viewers.filter(function(e) {
                    return e.id !== n.id
                })
            }))
        },
        CHANNEL_CREATE: function(e) {
            var t, n = e.channel,
                r = C.values(R.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
            if (null == r) return !1;
            var o = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
            C.set(r.userId, O(h({}, r), {
                viewers: o.filter(function(e) {
                    return e.id !== r.userId
                }).map(function(e) {
                    return new c.default(e)
                })
            }))
        },
        LOGOUT: function() {
            g.clear(), A.clear(), b.clear(), N = [], C.clear()
        }
    })
}