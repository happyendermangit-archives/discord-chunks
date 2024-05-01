function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        PAGE_SIZE: function() {
            return N
        }
    }), n("47120");
    var r, a, s, o, l = n("392711"),
        u = n.n(l),
        d = n("683860"),
        _ = n("442837"),
        c = n("570140"),
        E = n("882252"),
        I = n("228392"),
        T = n("131704"),
        f = n("592125"),
        S = n("306680"),
        h = n("823379"),
        A = n("709054"),
        m = n("569471");
    let N = 25,
        p = !1,
        O = !0,
        R = !1,
        C = !1,
        g = null,
        L = d.ThreadSortOrder.LATEST_ACTIVITY,
        v = [],
        D = 0;

    function M() {
        p = !1, O = !0, R = !1, C = !1, g = null, L = d.ThreadSortOrder.LATEST_ACTIVITY, i = new Set, D = 0, v = []
    }

    function y(e, t) {
        return t === d.ThreadSortOrder.LATEST_ACTIVITY ? S.default.lastMessageId(e.id) : e.id
    }

    function P() {
        if (null == g) return !1;
        let e = !R,
            t = f.default.getChannel(v[v.length - 1]),
            n = null == t ? null : y(t, L);
        v = u()(f.default.getAllThreadsForParent(g)).filter(e => e.isArchivedThread()).filter(t => {
            var r;
            if (0 !== i.size && (null === (r = t.appliedTags) || void 0 === r ? void 0 : r.some(e => i.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : y(t, L);
                return null != e && A.default.compare(e, n) >= 0
            }
        }).sort((e, t) => A.default.compare(y(e, L), y(t, L))).map(e => e.id).reverse().value()
    }

    function U(e) {
        if (!(v.indexOf(e) >= 0)) return !1;
        v = v.filter(t => t !== e)
    }
    let b = [];
    class G extends(r = _.default.Store) {
        initialize() {
            this.waitFor(f.default, m.default, S.default)
        }
        get canLoadMore() {
            return R && !p && !C
        }
        get nextOffset() {
            return D
        }
        get isInitialLoad() {
            return O
        }
        isLoading(e, t, n) {
            return g === e && L === t && (0, h.areSetsEqual)(i, n) ? p : (M(), !1)
        }
        getThreads(e, t, n) {
            return g === e && L === t && (0, h.areSetsEqual)(i, n) ? v : b
        }
    }
    o = "ArchivedThreadsStore", (s = "displayName") in(a = G) ? Object.defineProperty(a, s, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[s] = o, t.default = new G(c.default, {
        CONNECTION_OPEN: M,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return U(t.id)
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            return g === t.parent_id && !!(0, E.isForumPostPinned)(t.id) && void U(t.id)
        },
        CHANNEL_DELETE: function(e) {
            if (e.channel.id !== g) return !1;
            M()
        },
        LOAD_ARCHIVED_THREADS: function(e) {
            (e.channelId !== g || e.sortOrder !== L || !(0, h.areSetsEqual)(e.tagFilter, i)) && M(), g = e.channelId, L = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), p = !0, O = !1
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            if (e.channelId !== g || e.sortOrder !== L || !(0, h.areSetsEqual)(e.tagFilter, i)) return !1;
            let t = e.threads.filter(e => T.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
            v = v.concat(t);
            let n = f.default.getChannel(g);
            null != n && n.isForumLikeChannel() && (0, I.trackForumMorePostsLoaded)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: v.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder
            }), P(), R = e.hasMore, D = e.offset + N, p = !1, O = !1
        },
        LOAD_ARCHIVED_THREADS_FAIL: function(e) {
            if (e.channelId !== g || e.sortOrder !== L || !(0, h.areSetsEqual)(e.tagFilter, i)) return !1;
            p = !1, C = !0, O = !1
        },
        RESORT_THREADS: function(e) {
            return (null == g || null == e.channelId || g === e.channelId) && P()
        }
    })
}