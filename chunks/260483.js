function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("900489"),
        c = n("131704"),
        E = n("592125");
    let I = {};

    function T(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(f)
    }

    function f(e) {
        if (!c.ALL_CHANNEL_TYPES.has(e.type)) return !1;
        let t = function(e) {
            if (!(e.id in I)) {
                var t, n;
                I[e.id] = {
                    guildId: e.guild_id,
                    parentId: e.parent_id,
                    memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
                    memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
                }
            }
            return I[e.id]
        }(e);
        null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
    }

    function S(e) {
        let {
            channel: t
        } = e;
        return f(t)
    }

    function A(e) {
        let {
            threads: t
        } = e;
        t.forEach(m)
    }

    function h(e) {
        let t = !1;
        for (let n of e.messages)
            for (let e of n) t = m(e.thread) || t;
        return e.threads.forEach(e => {
            t = m(e) || t
        }), t
    }

    function m(e) {
        if (null != e && !(e.id in I)) {
            let t = E.default.getChannel(e.id);
            if (null != t) return f(t), !0
        }
        return !1
    }
    class N extends(i = u.default.Store) {
        initialize() {
            this.waitFor(E.default)
        }
        getMemberCount(e) {
            var t, n;
            return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
        }
        getMemberIdsPreview(e) {
            var t, n;
            return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
        }
        getInitialOverlayState() {
            return I
        }
    }
    a = "ThreadMembersStore", (s = "displayName") in(r = N) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new N(d.default, {
        CONNECTION_OPEN: function(e) {
            I = {}, e.guilds.forEach(T)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                threadMembers: t
            } = e;
            I = {
                ...t
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            T(t)
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e;
            t = n.id, I = l().omitBy(I, e => e.guildId === t)
        },
        CHANNEL_DELETE: function(e) {
            var t;
            let {
                channel: n
            } = e;
            t = n.id, I = l().omitBy(I, e => e.parentId === t)
        },
        THREAD_CREATE: S,
        THREAD_UPDATE: S,
        THREAD_LIST_SYNC: function(e) {
            let {
                threads: t
            } = e;
            t.forEach(f)
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let t = I[e.id];
            if (null == t) return !1;
            null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
        },
        SEARCH_FINISH: h,
        MOD_VIEW_SEARCH_FINISH: h,
        LOAD_THREADS_SUCCESS: A,
        LOAD_ARCHIVED_THREADS_SUCCESS: A,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            delete I[t.id]
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let t = !1;
            for (let n of e.messages) t = m(n.thread) || t;
            return t
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = !1;
            for (let e of (0, _.getThreadsFromGuildFeedFetch)(t)) n = m(e) || n;
            return n
        }
    })
}