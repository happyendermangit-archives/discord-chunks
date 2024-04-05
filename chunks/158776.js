function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041");
    var i, r, s, a, o = n("348327"),
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
        A = n("981631");
    let h = Object.freeze([]),
        m = {},
        N = {},
        O = {},
        p = {},
        R = {};

    function C(e, t) {
        let n = m[e];
        return null != n ? n[t] : null
    }
    let g = e => {
            switch (e.type) {
                case A.ActivityTypes.CUSTOM_STATUS:
                    return 4;
                case A.ActivityTypes.COMPETING:
                    return 3;
                case A.ActivityTypes.STREAMING:
                    return 2;
                case A.ActivityTypes.PLAYING:
                    return 1;
                default:
                    return 0
            }
        },
        L = e => (0, E.default)(e) ? 1 : 0;

    function D(e, t) {
        var n, i, r, s, a;
        return n = e, g(t) - g(n) || (i = e, L(t) - L(i)) || (r = e, (null !== (s = t.created_at) && void 0 !== s ? s : 0) - (null !== (a = r.created_at) && void 0 !== a ? a : 0))
    }

    function v(e) {
        if (delete N[e], delete O[e], delete p[e], null == m[e]) return;
        let [t] = d().sortBy(m[e], e => -e.timestamp);
        t.status !== A.StatusTypes.OFFLINE ? (N[e] = t.status, O[e] = t.activities, null != t.clientStatus && (p[e] = t.clientStatus)) : d().every(m[e], e => e.status === A.StatusTypes.OFFLINE) && delete m[e]
    }

    function M(e) {
        let t = m[e];
        if (null == t) return;
        let n = d().maxBy(Object.values(t), e => e.timestamp);
        n.status !== A.StatusTypes.OFFLINE && (N[e] = n.status, O[e] = n.activities, null != n.clientStatus && (p[e] = n.clientStatus))
    }

    function y(e) {
        let {
            guildId: t,
            userId: n,
            status: i,
            clientStatus: r,
            activities: s
        } = e;
        if (n === f.default.getId()) return !1;
        let a = m[n];
        if (null == a) {
            if (i === A.StatusTypes.OFFLINE) return !1;
            a = m[n] = {}
        }
        if (i === A.StatusTypes.OFFLINE) a[t] = {
            status: i,
            clientStatus: r,
            activities: h,
            timestamp: Date.now()
        };
        else {
            let e = s.length > 1 ? [...s].sort(D) : s,
                n = a[t];
            s = null != n && l()(n.activities, e) ? n.activities : e, a[t] = {
                status: i,
                clientStatus: r,
                activities: s,
                timestamp: Date.now()
            }
        }
        return delete R[n], v(n), !0
    }

    function P(e) {
        let {
            guildId: t,
            userId: n,
            status: i,
            clientStatus: r,
            activities: s,
            timestamp: a
        } = e;
        if (n === f.default.getId()) return;
        let o = m[n];
        if (null == o) {
            if (i === A.StatusTypes.OFFLINE) return;
            o = m[n] = {}
        }
        if (i === A.StatusTypes.OFFLINE) o[t] = {
            status: i,
            clientStatus: r,
            activities: h,
            timestamp: Date.now()
        };
        else {
            let e = s.length > 1 ? [...s].sort(D) : s;
            o[t] = {
                status: i,
                clientStatus: r,
                activities: e,
                timestamp: a
            }
        }
    }

    function U(e, t) {
        if (t === f.default.getId()) return !1;
        let n = m[t];
        if (null == n || null == n[e]) return !1;
        delete n[e], 0 === Object.keys(n).length && delete m[t], v(t)
    }

    function b(e) {
        for (let t of T.default.keys(m)) U(e, t)
    }
    class G extends(i = _.default.Store) {
        initialize() {
            this.waitFor(f.default, I.default)
        }
        setCurrentUserOnConnectionOpen(e, t) {
            N[f.default.getId()] = e, O[f.default.getId()] = t
        }
        getStatus(e) {
            var t, n;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.StatusTypes.OFFLINE,
                s = S.default.getUser(e);
            if (null != s && s.hasFlag(A.UserFlags.BOT_HTTP_INTERACTIONS) && (r = A.StatusTypes.UNKNOWN), null == s ? void 0 : s.isClyde()) return A.StatusTypes.ONLINE;
            if (null == i) return null !== (t = N[e]) && void 0 !== t ? t : r;
            let a = C(e, i);
            return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : r
        }
        getActivities(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null == t) {
                var n;
                return null !== (n = O[e]) && void 0 !== n ? n : h
            }
            let i = C(e, t);
            return null == i || null == i.activities ? h : i.activities
        }
        getPrimaryActivity(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return this.getActivities(e, t).filter(e => e.type !== A.ActivityTypes.HANG_STATUS)[0]
        }
        getAllApplicationActivities(e) {
            let t = [];
            for (let n of T.default.keys(O))
                for (let i of O[n]) i.application_id === e && t.push({
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
            return T.default.keys(O)
        }
        isMobileOnline(e) {
            let t = p[e];
            return null != t && t[A.ClientTypes.MOBILE] === A.StatusTypes.ONLINE && t[A.ClientTypes.DESKTOP] !== A.StatusTypes.ONLINE
        }
        getClientStatus(e) {
            return p[e]
        }
        getState() {
            return {
                presencesForGuilds: m,
                statuses: N,
                activities: O,
                activityMetadata: R,
                clientStatuses: p
            }
        }
    }
    a = "PresenceStore", (s = "displayName") in(r = G) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new G(c.default, {
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
            }, O = {
                [i]: O[i]
            }, p = {
                [i]: {}
            };
            let r = new Set,
                s = Date.now();
            t.forEach(e => {
                e.presences.forEach(t => {
                    let {
                        user: n,
                        status: i,
                        clientStatus: a,
                        activities: o
                    } = t;
                    P({
                        guildId: e.id,
                        userId: n.id,
                        status: i,
                        clientStatus: a,
                        activities: o,
                        timestamp: s
                    }), r.add(n.id)
                })
            }), n.forEach(e => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: a
                } = e;
                null != t && (P({
                    guildId: A.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: a,
                    timestamp: s
                }), r.add(t.id))
            }), r.delete(i), r.forEach(M)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                presences: t
            } = e;
            m = t.presencesForGuilds, N = t.statuses, O = t.activities, R = t.activityMetadata
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
                    activities: s
                } = e;
                y({
                    guildId: t.id,
                    userId: n.id,
                    status: i,
                    clientStatus: r,
                    activities: s
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
                    activities: s
                } = e;
                return y({
                    guildId: null != t ? t : A.ME,
                    userId: n.id,
                    status: i,
                    clientStatus: r,
                    activities: s
                })
            }).some(e => e)
        },
        PRESENCES_REPLACE: function(e) {
            let {
                presences: t
            } = e;
            b(A.ME), t.forEach(e => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: r
                } = e;
                null != t && y({
                    guildId: A.ME,
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
            if (N[t] === e.status && O[t] === e.activities) return !1;
            N[t] = e.status, O[t] = e.activities, delete R[t]
        }
    })
}