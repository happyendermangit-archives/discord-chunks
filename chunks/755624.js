function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007"), n("702976");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("668597"),
        l = n("233069"),
        u = n("271938");
    let d = {},
        c = new o.default,
        _ = new Set;

    function f(e) {
        d = s(d).reject(t => t.guildId === e).keyBy("threadId").value()
    }

    function E(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(h)
    }

    function h(e) {
        l.ALL_CHANNEL_TYPES.has(e.type) && null != e.member && (d[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }, g(e.id))
    }

    function g(e) {
        let t = d[e];
        if (c.clearTimer(e), !0 === t.muted) {
            (_ = new Set(_)).add(e);
            let n = c.setTimer(e, t.muteConfig, () => {
                d[e].muted = !1, (_ = new Set(_)).delete(e), S.emitChange()
            });
            n && (d[e].muted = !1, (_ = new Set(_)).delete(e))
        } else(_ = new Set(_)).delete(e)
    }

    function m(e) {
        let {
            guildId: t,
            members: n
        } = e;
        null != t && null != n && n.forEach(e => {
            d[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }, g(e.id)
        })
    }
    class p extends r.default.Store {
        hasJoined(e) {
            return e in d
        }
        joinTimestamp(e) {
            var t;
            return null === (t = d[e]) || void 0 === t ? void 0 : t.joinTimestamp
        }
        flags(e) {
            var t;
            return null === (t = d[e]) || void 0 === t ? void 0 : t.flags
        }
        getInitialOverlayState() {
            return Object.values(d)
        }
        getMuteConfig(e) {
            var t;
            return null === (t = d[e]) || void 0 === t ? void 0 : t.muteConfig
        }
        getMutedThreads() {
            return _
        }
        isMuted(e) {
            return _.has(e)
        }
    }
    p.displayName = "JoinedThreadsStore";
    let S = new p(a.default, {
        CONNECTION_OPEN: function(e) {
            c.reset(), _ = new Set, d = {}, e.guilds.forEach(e => {
                E(e)
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                joinedThreads: t
            } = e;
            d = s(t).map(e => ({
                ...e,
                joinTimestamp: new Date(e.joinTimestamp)
            })).keyBy("threadId").value()
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            f(t.id), E(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            f(t.id)
        },
        THREAD_CREATE: function(e) {
            let {
                channel: t
            } = e;
            h(t)
        },
        THREAD_LIST_SYNC: m,
        SEARCH_FINISH: m,
        MOD_VIEW_SEARCH_FINISH: m,
        LOAD_THREADS_SUCCESS: m,
        LOAD_ARCHIVED_THREADS_SUCCESS: m,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (!(t.id in d)) return !1;
            d = {
                ...d
            }, delete d[t.id]
        },
        THREAD_MEMBER_UPDATE: function(e) {
            if (u.default.getId() !== e.userId) return !1;
            d[e.id] = {
                threadId: e.id,
                guildId: e.guildId,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }, g(e.id)
        },
        THREAD_MEMBER_LOCAL_UPDATE: function(e) {
            let {
                id: t,
                userId: n,
                guildId: i,
                isJoining: s
            } = e;
            if (u.default.getId() !== n || null === i) return !1;
            s ? d[t] = {
                threadId: t,
                guildId: i,
                flags: 0,
                muted: !0,
                muteConfig: {
                    end_time: void 0
                },
                joinTimestamp: new Date
            } : delete d[t]
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            var t, n;
            let i = !1;
            return (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(u.default.getId())) && e.id in d && (d = {
                ...d
            }, delete d[e.id], i = !0), null === (n = e.addedMembers) || void 0 === n || n.forEach(t => {
                t.userId === u.default.getId() && ((d = {
                    ...d
                })[e.id] = {
                    threadId: e.id,
                    guildId: e.guildId,
                    flags: t.flags,
                    muted: t.muted,
                    muteConfig: t.muteConfig,
                    joinTimestamp: new Date(t.joinTimestamp)
                }, g(e.id), i = !0)
            }), i
        }
    });
    var T = S
}