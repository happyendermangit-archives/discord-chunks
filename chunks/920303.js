function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        PAGE_SIZE: function() {
            return N
        }
    }), n("47120");
    var r, s, a, o, l = n("392711"),
        u = n.n(l),
        d = n("683860"),
        _ = n("442837"),
        c = n("570140"),
        E = n("882252"),
        I = n("228392"),
        T = n("131704"),
        f = n("592125"),
        S = n("306680"),
        A = n("823379"),
        h = n("709054"),
        m = n("569471");
    let N = 25,
        O = !1,
        p = !0,
        R = !1,
        C = !1,
        g = null,
        L = d.ThreadSortOrder.LATEST_ACTIVITY,
        D = [],
        v = 0;

    function M() {
        O = !1, p = !0, R = !1, C = !1, g = null, L = d.ThreadSortOrder.LATEST_ACTIVITY, i = new Set, v = 0, D = []
    }

    function y(e, t) {
        return t === d.ThreadSortOrder.LATEST_ACTIVITY ? S.default.lastMessageId(e.id) : e.id
    }

    function P() {
        if (null == g) return !1;
        let e = !R,
            t = f.default.getChannel(D[D.length - 1]),
            n = null == t ? null : y(t, L);
        D = u()(f.default.getAllThreadsForParent(g)).filter(e => e.isArchivedThread()).filter(t => {
            var r;
            if (0 !== i.size && (null === (r = t.appliedTags) || void 0 === r ? void 0 : r.some(e => i.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : y(t, L);
                return null != e && h.default.compare(e, n) >= 0
            }
        }).sort((e, t) => h.default.compare(y(e, L), y(t, L))).map(e => e.id).reverse().value()
    }

    function U(e) {
        if (!(D.indexOf(e) >= 0)) return !1;
        D = D.filter(t => t !== e)
    }
    let b = [];
    class G extends(r = _.default.Store) {
        initialize() {
            this.waitFor(f.default, m.default, S.default)
        }
        get canLoadMore() {
            return R && !O && !C
        }
        get nextOffset() {
            return v
        }
        get isInitialLoad() {
            return p
        }
        isLoading(e, t, n) {
            return g === e && L === t && (0, A.areSetsEqual)(i, n) ? O : (M(), !1)
        }
        getThreads(e, t, n) {
            return g === e && L === t && (0, A.areSetsEqual)(i, n) ? D : b
        }
    }
    o = "ArchivedThreadsStore", (a = "displayName") in(s = G) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new G(c.default, {
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
            (e.channelId !== g || e.sortOrder !== L || !(0, A.areSetsEqual)(e.tagFilter, i)) && M(), g = e.channelId, L = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), O = !0, p = !1
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            if (e.channelId !== g || e.sortOrder !== L || !(0, A.areSetsEqual)(e.tagFilter, i)) return !1;
            let t = e.threads.filter(e => T.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
            D = D.concat(t);
            let n = f.default.getChannel(g);
            null != n && n.isForumLikeChannel() && (0, I.trackForumMorePostsLoaded)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: D.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder
            }), P(), R = e.hasMore, v = e.offset + N, O = !1, p = !1
        },
        LOAD_ARCHIVED_THREADS_FAIL: function(e) {
            if (e.channelId !== g || e.sortOrder !== L || !(0, A.areSetsEqual)(e.tagFilter, i)) return !1;
            O = !1, C = !0, p = !1
        },
        RESORT_THREADS: function(e) {
            return (null == g || null == e.channelId || g === e.channelId) && P()
        }
    })
}