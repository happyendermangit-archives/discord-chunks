function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("348327"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("898511"),
        l = n("629815"),
        c = n("889083"),
        f = n("979821"),
        d = n("523018"),
        _ = n("217014"),
        E = n("208454"),
        p = n("281767");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function T(e) {
        return function(e) {
            if (Array.isArray(e)) return m(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || S(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function S(e, t) {
        if (e) {
            if ("string" == typeof e) return m(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
        }
    }
    var v = Object.freeze([]),
        g = {},
        A = {},
        b = {},
        N = {},
        R = {};

    function C(e, t) {
        var n = g[e];
        return null != n ? n[t] : null
    }
    var P = function(e) {
            switch (e.type) {
                case p.ActivityTypes.CUSTOM_STATUS:
                    return 4;
                case p.ActivityTypes.COMPETING:
                    return 3;
                case p.ActivityTypes.STREAMING:
                    return 2;
                case p.ActivityTypes.PLAYING:
                    return 1;
                default:
                    return 0
            }
        },
        D = function(e) {
            return (0, c.default)(e) ? 1 : 0
        };

    function L(e, t) {
        var n, r, o, i, a;
        return n = e, P(t) - P(n) || (r = e, D(t) - D(r)) || (o = e, (null !== (i = t.created_at) && void 0 !== i ? i : 0) - (null !== (a = o.created_at) && void 0 !== a ? a : 0))
    }

    function M(e) {
        if (delete A[e], delete b[e], delete N[e], null != g[e]) {
            var t, n, r = (t = u().sortBy(g[e], function(e) {
                return -e.timestamp
            }), n = 1, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || S(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0];
            r.status !== p.StatusTypes.OFFLINE ? (A[e] = r.status, b[e] = r.activities, null != r.clientStatus && (N[e] = r.clientStatus)) : u().every(g[e], function(e) {
                return e.status === p.StatusTypes.OFFLINE
            }) && delete g[e]
        }
    }

    function U(e) {
        var t = g[e];
        if (null != t) {
            var n = u().maxBy(Object.values(t), function(e) {
                return e.timestamp
            });
            n.status !== p.StatusTypes.OFFLINE && (A[e] = n.status, b[e] = n.activities, null != n.clientStatus && (N[e] = n.clientStatus))
        }
    }

    function w(e) {
        var t = e.guildId,
            n = e.userId,
            r = e.status,
            o = e.clientStatus,
            a = e.activities;
        if (n === _.default.getId()) return !1;
        var u = g[n];
        if (null == u) {
            if (r === p.StatusTypes.OFFLINE) return !1;
            u = g[n] = {}
        }
        if (r === p.StatusTypes.OFFLINE) u[t] = {
            status: r,
            clientStatus: o,
            activities: v,
            timestamp: Date.now()
        };
        else {
            var s = a.length > 1 ? T(a).sort(L) : a,
                l = u[t];
            a = null != l && i()(l.activities, s) ? l.activities : s, u[t] = {
                status: r,
                clientStatus: o,
                activities: a,
                timestamp: Date.now()
            }
        }
        return delete R[n], M(n), !0
    }

    function k(e) {
        var t = e.guildId,
            n = e.userId,
            r = e.status,
            o = e.clientStatus,
            i = e.activities,
            a = e.timestamp;
        if (n !== _.default.getId()) {
            var u = g[n];
            if (null == u) {
                if (r === p.StatusTypes.OFFLINE) return;
                u = g[n] = {}
            }
            if (r === p.StatusTypes.OFFLINE) u[t] = {
                status: r,
                clientStatus: o,
                activities: v,
                timestamp: Date.now()
            };
            else {
                var s = i.length > 1 ? T(i).sort(L) : i;
                u[t] = {
                    status: r,
                    clientStatus: o,
                    activities: s,
                    timestamp: a
                }
            }
        }
    }

    function G(e, t) {
        if (t === _.default.getId()) return !1;
        var n = g[t];
        if (null == n || null == n[e]) return !1;
        delete n[e], 0 === Object.keys(n).length && delete g[t], M(t)
    }

    function B(e) {
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = d.default.keys(g)[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a = o.value;
                G(e, a)
            }
        } catch (e) {
            n = !0, r = e
        } finally {
            try {
                !t && null != i.return && i.return()
            } finally {
                if (n) throw r
            }
        }
    }
    var j = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
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
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
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
                this.waitFor(_.default, f.default)
            }
        }, {
            key: "setCurrentUserOnConnectionOpen",
            value: function(e, t) {
                A[_.default.getId()] = e, b[_.default.getId()] = t
            }
        }, {
            key: "getStatus",
            value: function(e) {
                var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.StatusTypes.OFFLINE,
                    i = E.default.getUser(e);
                if (null != i && i.hasFlag(p.UserFlags.BOT_HTTP_INTERACTIONS) && (o = p.StatusTypes.UNKNOWN), null == i ? void 0 : i.isClyde()) return p.StatusTypes.ONLINE;
                if (null == r) return null !== (t = A[e]) && void 0 !== t ? t : o;
                var a = C(e, r);
                return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : o
            }
        }, {
            key: "getActivities",
            value: function(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (null == n) return null !== (t = b[e]) && void 0 !== t ? t : v;
                var r = C(e, n);
                return null == r || null == r.activities ? v : r.activities
            }
        }, {
            key: "getPrimaryActivity",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return this.getActivities(e, t).filter(function(e) {
                    return e.type !== p.ActivityTypes.HANG_STATUS
                })[0]
            }
        }, {
            key: "getAllApplicationActivities",
            value: function(e) {
                var t = [],
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = d.default.keys(b)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = i.value,
                            s = b[u],
                            l = !0,
                            c = !1,
                            f = void 0;
                        try {
                            for (var _, E = s[Symbol.iterator](); !(l = (_ = E.next()).done); l = !0) {
                                var p = _.value;
                                p.application_id === e && t.push({
                                    userId: u,
                                    activity: p
                                })
                            }
                        } catch (e) {
                            c = !0, f = e
                        } finally {
                            try {
                                !l && null != E.return && E.return()
                            } finally {
                                if (c) throw f
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
                return t
            }
        }, {
            key: "getApplicationActivity",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return this.findActivity(e, function(e) {
                    return e.application_id === t
                }, n)
            }
        }, {
            key: "findActivity",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return this.getActivities(e, n).find(t)
            }
        }, {
            key: "getActivityMetadata",
            value: function(e) {
                return R[e]
            }
        }, {
            key: "getUserIds",
            value: function() {
                return d.default.keys(b)
            }
        }, {
            key: "isMobileOnline",
            value: function(e) {
                var t = N[e];
                return null != t && t[p.ClientTypes.MOBILE] === p.StatusTypes.ONLINE && t[p.ClientTypes.DESKTOP] !== p.StatusTypes.ONLINE
            }
        }, {
            key: "getClientStatus",
            value: function(e) {
                return N[e]
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    presencesForGuilds: g,
                    statuses: A,
                    activities: b,
                    activityMetadata: R,
                    clientStatuses: N
                }
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(s.default.Store);
    I(j, "displayName", "PresenceStore"), t.default = new j(l.default, {
        CONNECTION_OPEN: function() {
            return !0
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            var t = e.guilds,
                n = e.presences,
                r = _.default.getId();
            g = {}, R = {}, A = I({}, r, A[r]), b = I({}, r, b[r]), N = I({}, r, {});
            var o = new Set,
                i = Date.now();
            t.forEach(function(e) {
                e.presences.forEach(function(t) {
                    var n = t.user,
                        r = t.status,
                        a = t.clientStatus,
                        u = t.activities;
                    k({
                        guildId: e.id,
                        userId: n.id,
                        status: r,
                        clientStatus: a,
                        activities: u,
                        timestamp: i
                    }), o.add(n.id)
                })
            }), n.forEach(function(e) {
                var t = e.user,
                    n = e.status,
                    r = e.clientStatus,
                    a = e.activities;
                null != t && (k({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: a,
                    timestamp: i
                }), o.add(t.id))
            }), o.delete(r), o.forEach(U)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.presences;
            g = t.presencesForGuilds, A = t.statuses, b = t.activities, R = t.activityMetadata
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            t.presences.forEach(function(e) {
                var n = e.user,
                    r = e.status,
                    o = e.clientStatus,
                    i = e.activities;
                w({
                    guildId: t.id,
                    userId: n.id,
                    status: r,
                    clientStatus: o,
                    activities: i
                })
            })
        },
        GUILD_DELETE: function(e) {
            B(e.guild.id)
        },
        GUILD_MEMBER_REMOVE: function(e) {
            return G(e.guildId, e.user.id)
        },
        PRESENCE_UPDATES: function(e) {
            return e.updates.map(function(e) {
                var t = e.guildId,
                    n = e.user,
                    r = e.status,
                    o = e.clientStatus,
                    i = e.activities;
                return w({
                    guildId: null != t ? t : p.ME,
                    userId: n.id,
                    status: r,
                    clientStatus: o,
                    activities: i
                })
            }).some(function(e) {
                return e
            })
        },
        PRESENCES_REPLACE: function(e) {
            var t = e.presences;
            B(p.ME), t.forEach(function(e) {
                var t = e.user,
                    n = e.status,
                    r = e.clientStatus,
                    o = e.activities;
                null != t && w({
                    guildId: p.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: r,
                    activities: o
                })
            })
        },
        ACTIVITY_METADATA_UPDATE: function(e) {
            var t = e.userId,
                n = e.metadata;
            return R[t] = n, !1
        },
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            var t = e.guildId;
            e.members.forEach(function(e) {
                null != e.presence && w({
                    guildId: t,
                    userId: e.user_id,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                })
            })
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            var t = e.guildId,
                n = e.addedMembers;
            null == n || n.forEach(function(e) {
                null != e.presence && w({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                })
            })
        },
        SELF_PRESENCE_STORE_UPDATE: function(e) {
            var t = _.default.getId();
            if (A[t] === e.status && b[t] === e.activities) return !1;
            A[t] = e.status, b[t] = e.activities, delete R[t]
        }
    })
}