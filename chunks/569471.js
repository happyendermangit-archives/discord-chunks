function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020");
    var i, r, a, s, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("798140"),
        c = n("131704"),
        E = n("314897");
    let I = {},
        T = new _.default,
        f = new Set;

    function S(e) {
        I = l()(I).reject(t => t.guildId === e).keyBy("threadId").value()
    }

    function h(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(A)
    }

    function A(e) {
        c.ALL_CHANNEL_TYPES.has(e.type) && null != e.member && (I[e.id] = {
            threadId: e.id,
            guildId: e.guild_id,
            flags: e.member.flags,
            muted: e.member.muted,
            muteConfig: e.member.muteConfig,
            joinTimestamp: new Date(e.member.joinTimestamp)
        }, m(e.id))
    }

    function m(e) {
        let t = I[e];
        T.clearTimer(e), !0 === t.muted ? ((f = new Set(f)).add(e), T.setTimer(e, t.muteConfig, () => {
            I[e].muted = !1, (f = new Set(f)).delete(e), O.emitChange()
        }) && (I[e].muted = !1, (f = new Set(f)).delete(e))) : (f = new Set(f)).delete(e)
    }

    function N(e) {
        let {
            guildId: t,
            members: n
        } = e;
        null != t && null != n && n.forEach(e => {
            I[e.id] = {
                threadId: e.id,
                guildId: t,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }, m(e.id)
        })
    }
    class p extends(i = u.default.Store) {
        hasJoined(e) {
            return e in I
        }
        joinTimestamp(e) {
            var t;
            return null === (t = I[e]) || void 0 === t ? void 0 : t.joinTimestamp
        }
        flags(e) {
            var t;
            return null === (t = I[e]) || void 0 === t ? void 0 : t.flags
        }
        getInitialOverlayState() {
            return Object.values(I)
        }
        getMuteConfig(e) {
            var t;
            return null === (t = I[e]) || void 0 === t ? void 0 : t.muteConfig
        }
        getMutedThreads() {
            return f
        }
        isMuted(e) {
            return f.has(e)
        }
    }
    s = "JoinedThreadsStore", (a = "displayName") in(r = p) ? Object.defineProperty(r, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[a] = s;
    let O = new p(d.default, {
        CONNECTION_OPEN: function(e) {
            T.reset(), f = new Set, I = {}, e.guilds.forEach(e => {
                h(e)
            })
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                joinedThreads: t
            } = e;
            I = l()(t).map(e => ({
                ...e,
                joinTimestamp: new Date(e.joinTimestamp)
            })).keyBy("threadId").value()
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            S(t.id), h(t)
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            S(t.id)
        },
        THREAD_CREATE: function(e) {
            let {
                channel: t
            } = e;
            A(t)
        },
        THREAD_LIST_SYNC: N,
        SEARCH_FINISH: N,
        MOD_VIEW_SEARCH_FINISH: N,
        LOAD_THREADS_SUCCESS: N,
        LOAD_ARCHIVED_THREADS_SUCCESS: N,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (!(t.id in I)) return !1;
            I = {
                ...I
            }, delete I[t.id]
        },
        THREAD_MEMBER_UPDATE: function(e) {
            if (E.default.getId() !== e.userId) return !1;
            I[e.id] = {
                threadId: e.id,
                guildId: e.guildId,
                flags: e.flags,
                muted: e.muted,
                muteConfig: e.muteConfig,
                joinTimestamp: new Date(e.joinTimestamp)
            }, m(e.id)
        },
        THREAD_MEMBER_LOCAL_UPDATE: function(e) {
            let {
                id: t,
                userId: n,
                guildId: i,
                isJoining: r
            } = e;
            if (E.default.getId() !== n || null === i) return !1;
            r ? I[t] = {
                threadId: t,
                guildId: i,
                flags: 0,
                muted: !0,
                muteConfig: {
                    end_time: void 0
                },
                joinTimestamp: new Date
            } : delete I[t]
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            var t, n;
            let i = !1;
            return (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(E.default.getId())) && e.id in I && (I = {
                ...I
            }, delete I[e.id], i = !0), null === (n = e.addedMembers) || void 0 === n || n.forEach(t => {
                t.userId === E.default.getId() && ((I = {
                    ...I
                })[e.id] = {
                    threadId: e.id,
                    guildId: e.guildId,
                    flags: t.flags,
                    muted: t.muted,
                    muteConfig: t.muteConfig,
                    joinTimestamp: new Date(t.joinTimestamp)
                }, m(e.id), i = !0)
            }), i
        }
    });
    t.default = O
}