function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        PAGE_SIZE: function() {
            return m
        },
        default: function() {
            return L
        }
    }), n("222007");
    var s = n("917351"),
        r = n.n(s),
        a = n("335710"),
        o = n("446674"),
        l = n("913144"),
        u = n("786742"),
        d = n("867965"),
        c = n("233069"),
        f = n("42203"),
        _ = n("660478"),
        h = n("449008"),
        E = n("299039"),
        g = n("755624");
    let m = 25,
        p = !1,
        S = !0,
        v = !1,
        T = !1,
        I = null,
        C = a.ThreadSortOrder.LATEST_ACTIVITY,
        A = [],
        y = 0;

    function N() {
        p = !1, S = !0, v = !1, T = !1, I = null, C = a.ThreadSortOrder.LATEST_ACTIVITY, i = new Set, y = 0, A = []
    }

    function R(e, t) {
        return t === a.ThreadSortOrder.LATEST_ACTIVITY ? _.default.lastMessageId(e.id) : e.id
    }

    function O() {
        if (null == I) return !1;
        let e = !v,
            t = f.default.getChannel(A[A.length - 1]),
            n = null == t ? null : R(t, C);
        A = r(f.default.getAllThreadsForParent(I)).filter(e => e.isArchivedThread()).filter(t => {
            var s;
            if (0 !== i.size && (null === (s = t.appliedTags) || void 0 === s ? void 0 : s.some(e => i.has(e))) !== !0) return !1;
            if (e || null == n) return !0;
            {
                let e = null == t ? null : R(t, C);
                return null != e && E.default.compare(e, n) >= 0
            }
        }).sort((e, t) => E.default.compare(R(e, C), R(t, C))).map(e => e.id).reverse().value()
    }

    function D(e) {
        if (!(A.indexOf(e) >= 0)) return !1;
        A = A.filter(t => t !== e)
    }
    let P = [];
    class M extends o.default.Store {
        initialize() {
            this.waitFor(f.default, g.default, _.default)
        }
        get canLoadMore() {
            return v && !p && !T
        }
        get nextOffset() {
            return y
        }
        get isInitialLoad() {
            return S
        }
        isLoading(e, t, n) {
            return I === e && C === t && (0, h.areSetsEqual)(i, n) ? p : (N(), !1)
        }
        getThreads(e, t, n) {
            return I === e && C === t && (0, h.areSetsEqual)(i, n) ? A : P
        }
    }
    M.displayName = "ArchivedThreadsStore";
    var L = new M(l.default, {
        CONNECTION_OPEN: N,
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return D(t.id)
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            return I === t.parent_id && !!(0, u.isForumPostPinned)(t.id) && void D(t.id)
        },
        CHANNEL_DELETE: function(e) {
            if (e.channel.id !== I) return !1;
            N()
        },
        LOAD_ARCHIVED_THREADS: function(e) {
            (e.channelId !== I || e.sortOrder !== C || !(0, h.areSetsEqual)(e.tagFilter, i)) && N(), I = e.channelId, C = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), p = !0, S = !1
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
            if (e.channelId !== I || e.sortOrder !== C || !(0, h.areSetsEqual)(e.tagFilter, i)) return !1;
            let t = e.threads.filter(e => c.ALL_CHANNEL_TYPES.has(e.type)).map(e => e.id);
            A = A.concat(t);
            let n = f.default.getChannel(I);
            null != n && n.isForumLikeChannel() && (0, d.trackForumMorePostsLoaded)({
                guildId: n.guild_id,
                channelId: n.id,
                numArchivedThreads: A.length,
                hasMoreThreads: e.hasMore,
                filterTagIds: Array.from(e.tagFilter),
                sortOrder: e.sortOrder
            }), O(), v = e.hasMore, y = e.offset + m, p = !1, S = !1
        },
        LOAD_ARCHIVED_THREADS_FAIL: function(e) {
            if (e.channelId !== I || e.sortOrder !== C || !(0, h.areSetsEqual)(e.tagFilter, i)) return !1;
            p = !1, T = !0, S = !1
        },
        RESORT_THREADS: function(e) {
            return (null == I || null == e.channelId || I === e.channelId) && O()
        }
    })
}