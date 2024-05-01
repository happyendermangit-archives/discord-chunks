function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, a, s, o = n("348327"),
        l = n.n(o),
        u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140"),
        E = n("122810"),
        I = n("106301"),
        T = n("709054"),
        f = n("314897"),
        S = n("594174"),
        h = n("981631");
    let A = Object.freeze([]),
        m = {},
        N = {},
        p = {},
        O = {},
        R = {};

    function C(e, t) {
        let n = m[e];
        return null != n ? n[t] : null
    }
    let g = e => {
            switch (e.type) {
                case h.ActivityTypes.CUSTOM_STATUS:
                    return 4;
                case h.ActivityTypes.COMPETING:
                    return 3;
                case h.ActivityTypes.STREAMING:
                    return 2;
                case h.ActivityTypes.PLAYING:
                    return 1;
                default:
                    return 0
            }
        },
        L = e => (0, E.default)(e) ? 1 : 0;

    function v(e, t) {
        var n, i, r, a, s;
        return n = e, g(t) - g(n) || (i = e, L(t) - L(i)) || (r = e, (null !== (a = t.created_at) && void 0 !== a ? a : 0) - (null !== (s = r.created_at) && void 0 !== s ? s : 0))
    }

    function D(e) {
        if (delete N[e], delete p[e], delete O[e], null == m[e]) return;
        let [t] = d().sortBy(m[e], e => -e.timestamp);
        t.status !== h.StatusTypes.OFFLINE ? (N[e] = t.status, p[e] = t.activities, null != t.clientStatus && (O[e] = t.clientStatus)) : d().every(m[e], e => e.status === h.StatusTypes.OFFLINE) && delete m[e]
    }

    function M(e) {
        let t = m[e];
        if (null == t) return;
        let n = d().maxBy(Object.values(t), e => e.timestamp);
        n.status !== h.StatusTypes.OFFLINE && (N[e] = n.status, p[e] = n.activities, null != n.clientStatus && (O[e] = n.clientStatus))
    }

    function y(e) {
        let {
            guildId: t,
            userId: n,
            status: i,
            clientStatus: r,
            activities: a
        } = e;
        if (n === f.default.getId()) return !1;
        let s = m[n];
        if (null == s) {
            if (i === h.StatusTypes.OFFLINE) return !1;
            s = m[n] = {}
        }
        if (i === h.StatusTypes.OFFLINE) s[t] = {
            status: i,
            clientStatus: r,
            activities: A,
            timestamp: Date.now()
        };
        else {
            let e = a.length > 1 ? [...a].sort(v) : a,
                n = s[t];
            a = null != n && l()(n.activities, e) ? n.activities : e, s[t] = {
                status: i,
                clientStatus: r,
                activities: a,
                timestamp: Date.now()
            }
        }
        return delete R[n], D(n), !0
    }

    function P(e) {
        let {
            guildId: t,
            userId: n,
            status: i,
            clientStatus: r,
            activities: a,
            timestamp: s
        } = e;
        if (n === f.default.getId()) return;
        let o = m[n];
        if (null == o) {
            if (i === h.StatusTypes.OFFLINE) return;
            o = m[n] = {}
        }
        if (i === h.StatusTypes.OFFLINE) o[t] = {
            status: i,
            clientStatus: r,
            activities: A,
            timestamp: Date.now()
        };
        else {
            let e = a.length > 1 ? [...a].sort(v) : a;
            o[t] = {
                status: i,
                clientStatus: r,
                activities: e,
                timestamp: s
            }
        }
    }

    function U(e, t) {
        if (t === f.default.getId()) return !1;
        let n = m[t];
        if (null == n || null == n[e]) return !1;
        delete n[e], 0 === Object.keys(n).length && delete m[t], D(t)
    }

    function b(e) {
        for (let t of T.default.keys(m)) U(e, t)
    }
    class G extends(i = _.default.Store) {
        initialize() {
            this.waitFor(f.default, I.default)
        }
        setCurrentUserOnConnectionOpen(e, t) {
            N[f.default.getId()] = e, p[f.default.getId()] = t
        }
        getStatus(e) {
            var t, n;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.StatusTypes.OFFLINE,
                a = S.default.getUser(e);
            if (null != a && a.hasFlag(h.UserFlags.BOT_HTTP_INTERACTIONS) && (r = h.StatusTypes.UNKNOWN), null == a ? void 0 : a.isClyde()) return h.StatusTypes.ONLINE;
            if (null == i) return null !== (t = N[e]) && void 0 !== t ? t : r;
            let s = C(e, i);
            return null !== (n = null == s ? void 0 : s.status) && void 0 !== n ? n : r
        }
        getActivities(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null == t) {
                var n;
                return null !== (n = p[e]) && void 0 !== n ? n : A
            }
            let i = C(e, t);
            return null == i || null == i.activities ? A : i.activities
        }
        getPrimaryActivity(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return this.getActivities(e, t).filter(e => e.type !== h.ActivityTypes.HANG_STATUS)[0]
        }
        getAllApplicationActivities(e) {
            let t = [];
            for (let n of T.default.keys(p))
                for (let i of p[n]) i.application_id === e && t.push({
                    userId: n,
                    activity: i
                });
            return t
        }
        getApplicationActivity(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this.findActivity(e, e => e.application_id === t, n)
        }
        findActivity(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this.getActivities(e, n).find(t)
        }
        getActivityMetadata(e) {
            return R[e]
        }
        getUserIds() {
            return T.default.keys(p)
        }
        isMobileOnline(e) {
            let t = O[e];
            return null != t && t[h.ClientTypes.MOBILE] === h.StatusTypes.ONLINE && t[h.ClientTypes.DESKTOP] !== h.StatusTypes.ONLINE
        }
        getClientStatus(e) {
            return O[e]
        }
        getState() {
            return {
                presencesForGuilds: m,
                statuses: N,
                activities: p,
                activityMetadata: R,
                clientStatuses: O
            }
        }
    }
    s = "PresenceStore", (a = "displayName") in(r = G) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s, t.default = new G(c.default, {
        CONNECTION_OPEN: function() {
            return !0
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                guilds: t,
                presences: n
            } = e, i = f.default.getId();
            m = {}, R = {}, N = {
                [i]: N[i]
            }, p = {
                [i]: p[i]
            }, O = {
                [i]: {}
            };
            let r = new Set,
                a = Date.now();
            t.forEach(e => {
                e.presences.forEach(t => {
                    let {
                        user: n,
                        status: i,
                        clientStatus: s,
                        activities: o
                    } = t;
                    P({
                        guildId: e.id,
                        userId: n.id,
                        status: i,
                        clientStatus: s,
                        activities: o,
                        timestamp: a
                    }), r.add(n.id)
                })
            }), n.forEach(e => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: s
                } = e;
                null != t && (P({
                    guildId: h.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: s,
                    timestamp: a
                }), r.add(t.id))
            }), r.delete(i), r.forEach(M)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                presences: t
            } = e;
            m = t.presencesForGuilds, N = t.statuses, p = t.activities, R = t.activityMetadata
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            t.presences.forEach(e => {
                let {
                    user: n,
                    status: i,
                    clientStatus: r,
                    activities: a
                } = e;
                y({
                    guildId: t.id,
                    userId: n.id,
                    status: i,
                    clientStatus: r,
                    activities: a
                })
            })
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            b(t.id)
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return U(t, n.id)
        },
        PRESENCE_UPDATES: function(e) {
            let {
                updates: t
            } = e;
            return t.map(e => {
                let {
                    guildId: t,
                    user: n,
                    status: i,
                    clientStatus: r,
                    activities: a
                } = e;
                return y({
                    guildId: null != t ? t : h.ME,
                    userId: n.id,
                    status: i,
                    clientStatus: r,
                    activities: a
                })
            }).some(e => e)
        },
        PRESENCES_REPLACE: function(e) {
            let {
                presences: t
            } = e;
            b(h.ME), t.forEach(e => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: r
                } = e;
                null != t && y({
                    guildId: h.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: r
                })
            })
        },
        ACTIVITY_METADATA_UPDATE: function(e) {
            let {
                userId: t,
                metadata: n
            } = e;
            return R[t] = n, !1
        },
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            n.forEach(e => {
                null != e.presence && y({
                    guildId: t,
                    userId: e.user_id,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                })
            })
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let {
                guildId: t,
                addedMembers: n
            } = e;
            null == n || n.forEach(e => {
                null != e.presence && y({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                })
            })
        },
        SELF_PRESENCE_STORE_UPDATE: function(e) {
            let t = f.default.getId();
            if (N[t] === e.status && p[t] === e.activities) return !1;
            N[t] = e.status, p[t] = e.activities, delete R[t]
        }
    })
}