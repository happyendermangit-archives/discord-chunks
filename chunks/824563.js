function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007"), n("424973");
    var i = n("714617"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144"),
        u = n("309570"),
        d = n("32346"),
        c = n("299039"),
        _ = n("271938"),
        f = n("697218"),
        E = n("49111");
    let h = Object.freeze([]),
        g = {},
        m = {},
        p = {},
        S = {},
        v = {};

    function T(e, t) {
        let n = g[e];
        return null != n ? n[t] : null
    }
    let I = e => {
            switch (e.type) {
                case E.ActivityTypes.CUSTOM_STATUS:
                    return 4;
                case E.ActivityTypes.COMPETING:
                    return 3;
                case E.ActivityTypes.STREAMING:
                    return 2;
                case E.ActivityTypes.PLAYING:
                    return 1;
                default:
                    return 0
            }
        },
        A = e => (0, u.default)(e) ? 1 : 0;

    function C(e, t) {
        var n, i, s, r, a;
        return n = e, I(t) - I(n) || (i = e, A(t) - A(i)) || (s = e, (null !== (r = t.created_at) && void 0 !== r ? r : 0) - (null !== (a = s.created_at) && void 0 !== a ? a : 0))
    }

    function y(e) {
        if (delete m[e], delete p[e], delete S[e], null == g[e]) return;
        let [t] = a.sortBy(g[e], e => -e.timestamp);
        t.status !== E.StatusTypes.OFFLINE ? (m[e] = t.status, p[e] = t.activities, null != t.clientStatus && (S[e] = t.clientStatus)) : a.every(g[e], e => e.status === E.StatusTypes.OFFLINE) && delete g[e]
    }

    function N(e) {
        let t = g[e];
        if (null == t) return;
        let n = a.maxBy(Object.values(t), e => e.timestamp);
        n.status !== E.StatusTypes.OFFLINE && (m[e] = n.status, p[e] = n.activities, null != n.clientStatus && (S[e] = n.clientStatus))
    }

    function R(e) {
        let {
            guildId: t,
            userId: n,
            status: i,
            clientStatus: r,
            activities: a
        } = e;
        if (n === _.default.getId()) return !1;
        let o = g[n];
        if (null == o) {
            if (i === E.StatusTypes.OFFLINE) return !1;
            o = g[n] = {}
        }
        if (i === E.StatusTypes.OFFLINE) o[t] = {
            status: i,
            clientStatus: r,
            activities: h,
            timestamp: Date.now()
        };
        else {
            let e = a.length > 1 ? [...a].sort(C) : a,
                n = o[t];
            a = null != n && s(n.activities, e) ? n.activities : e, o[t] = {
                status: i,
                clientStatus: r,
                activities: a,
                timestamp: Date.now()
            }
        }
        return delete v[n], y(n), !0
    }

    function O(e) {
        let {
            guildId: t,
            userId: n,
            status: i,
            clientStatus: s,
            activities: r,
            timestamp: a
        } = e;
        if (n === _.default.getId()) return;
        let o = g[n];
        if (null == o) {
            if (i === E.StatusTypes.OFFLINE) return;
            o = g[n] = {}
        }
        if (i === E.StatusTypes.OFFLINE) o[t] = {
            status: i,
            clientStatus: s,
            activities: h,
            timestamp: Date.now()
        };
        else {
            let e = r.length > 1 ? [...r].sort(C) : r;
            o[t] = {
                status: i,
                clientStatus: s,
                activities: e,
                timestamp: a
            }
        }
    }

    function D(e, t) {
        if (t === _.default.getId()) return !1;
        let n = g[t];
        if (null == n || null == n[e]) return !1;
        delete n[e], 0 === Object.keys(n).length && delete g[t], y(t)
    }

    function P(e) {
        for (let t of c.default.keys(g)) D(e, t)
    }
    class L extends o.default.Store {
        initialize() {
            this.waitFor(_.default, d.default)
        }
        setCurrentUserOnConnectionOpen(e, t) {
            m[_.default.getId()] = e, p[_.default.getId()] = t
        }
        getStatus(e) {
            var t, n;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.StatusTypes.OFFLINE,
                r = f.default.getUser(e);
            if (null != r && r.hasFlag(E.UserFlags.BOT_HTTP_INTERACTIONS) && (s = E.StatusTypes.UNKNOWN), null == r ? void 0 : r.isClyde()) return E.StatusTypes.ONLINE;
            if (null == i) return null !== (t = m[e]) && void 0 !== t ? t : s;
            let a = T(e, i);
            return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : s
        }
        getActivities(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null == t) {
                var n;
                return null !== (n = p[e]) && void 0 !== n ? n : h
            }
            let i = T(e, t);
            return null == i || null == i.activities ? h : i.activities
        }
        getPrimaryActivity(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = this.getActivities(e, t).filter(e => e.type !== E.ActivityTypes.HANG_STATUS);
            return n[0]
        }
        getAllApplicationActivities(e) {
            let t = [];
            for (let n of c.default.keys(p)) {
                let i = p[n];
                for (let s of i) s.application_id === e && t.push({
                    userId: n,
                    activity: s
                })
            }
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
            return v[e]
        }
        getUserIds() {
            return c.default.keys(p)
        }
        isMobileOnline(e) {
            let t = S[e];
            return null != t && t[E.ClientTypes.MOBILE] === E.StatusTypes.ONLINE && t[E.ClientTypes.DESKTOP] !== E.StatusTypes.ONLINE
        }
        getClientStatus(e) {
            return S[e]
        }
        getState() {
            return {
                presencesForGuilds: g,
                statuses: m,
                activities: p,
                activityMetadata: v,
                clientStatuses: S
            }
        }
    }
    L.displayName = "PresenceStore";
    var M = new L(l.default, {
        CONNECTION_OPEN: function() {
            return !0
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            let {
                guilds: t,
                presences: n
            } = e, i = _.default.getId();
            g = {}, v = {}, m = {
                [i]: m[i]
            }, p = {
                [i]: p[i]
            }, S = {
                [i]: {}
            };
            let s = new Set,
                r = Date.now();
            t.forEach(e => {
                e.presences.forEach(t => {
                    let {
                        user: n,
                        status: i,
                        clientStatus: a,
                        activities: o
                    } = t;
                    O({
                        guildId: e.id,
                        userId: n.id,
                        status: i,
                        clientStatus: a,
                        activities: o,
                        timestamp: r
                    }), s.add(n.id)
                })
            }), n.forEach(e => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: a
                } = e;
                null != t && (O({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: a,
                    timestamp: r
                }), s.add(t.id))
            }), s.delete(i), s.forEach(N)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                presences: t
            } = e;
            g = t.presencesForGuilds, m = t.statuses, p = t.activities, v = t.activityMetadata
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            t.presences.forEach(e => {
                let {
                    user: n,
                    status: i,
                    clientStatus: s,
                    activities: r
                } = e;
                R({
                    guildId: t.id,
                    userId: n.id,
                    status: i,
                    clientStatus: s,
                    activities: r
                })
            })
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            P(t.id)
        },
        GUILD_MEMBER_REMOVE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return D(t, n.id)
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
                    clientStatus: s,
                    activities: r
                } = e;
                return R({
                    guildId: null != t ? t : E.ME,
                    userId: n.id,
                    status: i,
                    clientStatus: s,
                    activities: r
                })
            }).some(e => e)
        },
        PRESENCES_REPLACE: function(e) {
            let {
                presences: t
            } = e;
            P(E.ME), t.forEach(e => {
                let {
                    user: t,
                    status: n,
                    clientStatus: i,
                    activities: s
                } = e;
                null != t && R({
                    guildId: E.ME,
                    userId: t.id,
                    status: n,
                    clientStatus: i,
                    activities: s
                })
            })
        },
        ACTIVITY_METADATA_UPDATE: function(e) {
            let {
                userId: t,
                metadata: n
            } = e;
            return v[t] = n, !1
        },
        THREAD_MEMBER_LIST_UPDATE: function(e) {
            let {
                guildId: t,
                members: n
            } = e;
            n.forEach(e => {
                null != e.presence && R({
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
                null != e.presence && R({
                    guildId: t,
                    userId: e.userId,
                    status: e.presence.status,
                    clientStatus: e.presence.clientStatus,
                    activities: e.presence.activities
                })
            })
        },
        SELF_PRESENCE_STORE_UPDATE: function(e) {
            let t = _.default.getId();
            if (m[t] === e.status && p[t] === e.activities) return !1;
            m[t] = e.status, p[t] = e.activities, delete v[t]
        }
    })
}