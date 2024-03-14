function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("560208"),
        l = n("233069"),
        u = n("42203");
    let d = {};

    function c(e) {
        var t;
        null === (t = e.threads) || void 0 === t || t.forEach(f)
    }

    function f(e) {
        if (!l.ALL_CHANNEL_TYPES.has(e.type)) return !1;
        let t = function(e) {
            if (!(e.id in d)) {
                var t, n;
                d[e.id] = {
                    guildId: e.guild_id,
                    parentId: e.parent_id,
                    memberCount: null !== (t = e.memberCount) && void 0 !== t ? t : 0,
                    memberIdsPreview: null !== (n = e.memberIdsPreview) && void 0 !== n ? n : []
                }
            }
            return d[e.id]
        }(e);
        null != e.memberCount && (t.memberCount = e.memberCount), null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview)
    }

    function _(e) {
        let {
            channel: t
        } = e;
        return f(t)
    }

    function E(e) {
        let {
            threads: t
        } = e;
        t.forEach(g)
    }

    function h(e) {
        let t = !1;
        for (let n of e.messages)
            for (let e of n) t = g(e.thread) || t;
        return e.threads.forEach(e => {
            t = g(e) || t
        }), t
    }

    function g(e) {
        if (null != e && !(e.id in d)) {
            let t = u.default.getChannel(e.id);
            if (null != t) return f(t), !0
        }
        return !1
    }
    class m extends r.default.Store {
        initialize() {
            this.waitFor(u.default)
        }
        getMemberCount(e) {
            var t, n;
            return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.memberCount) && void 0 !== n ? n : null
        }
        getMemberIdsPreview(e) {
            var t, n;
            return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.memberIdsPreview) && void 0 !== n ? n : null
        }
        getInitialOverlayState() {
            return d
        }
    }
    m.displayName = "ThreadMembersStore";
    var p = new m(a.default, {
        CONNECTION_OPEN: function(e) {
            d = {}, e.guilds.forEach(c)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                threadMembers: t
            } = e;
            d = {
                ...t
            }
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            c(t)
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e;
            t = n.id, d = s.omitBy(d, e => e.guildId === t)
        },
        CHANNEL_DELETE: function(e) {
            var t;
            let {
                channel: n
            } = e;
            t = n.id, d = s.omitBy(d, e => e.parentId === t)
        },
        THREAD_CREATE: _,
        THREAD_UPDATE: _,
        THREAD_LIST_SYNC: function(e) {
            let {
                threads: t
            } = e;
            t.forEach(f)
        },
        THREAD_MEMBERS_UPDATE: function(e) {
            let t = d[e.id];
            if (null == t) return !1;
            null != e.memberIdsPreview && (t.memberIdsPreview = e.memberIdsPreview), t.memberCount = e.memberCount
        },
        SEARCH_FINISH: h,
        MOD_VIEW_SEARCH_FINISH: h,
        LOAD_THREADS_SUCCESS: E,
        LOAD_ARCHIVED_THREADS_SUCCESS: E,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            delete d[t.id]
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let t = !1;
            for (let n of e.messages) t = g(n.thread) || t;
            return t
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = !1;
            for (let e of (0, o.getThreadsFromGuildFeedFetch)(t)) n = g(e) || n;
            return n
        }
    })
}