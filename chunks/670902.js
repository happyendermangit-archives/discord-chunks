function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        computeThreadIdsSnapshot: function() {
            return b
        },
        default: function() {
            return B
        }
    }), n("222007");
    var l = n("917351"),
        a = n.n(l),
        o = n("335710"),
        r = n("446674"),
        s = n("913144"),
        u = n("689275"),
        d = n("610730"),
        c = n("271938"),
        p = n("42203"),
        f = n("660478"),
        m = n("18494"),
        _ = n("449008"),
        I = n("299039"),
        C = n("786742");
    let T = [],
        A = null,
        E = null,
        N = new Set,
        g = o.ThreadSortOrder.LATEST_ACTIVITY,
        h = 0,
        S = [],
        O = !1,
        M = [],
        v = a.chain(T),
        y = a.chain(T),
        D = new Set,
        R = new Set;

    function L(e) {
        var t;
        return null !== (t = f.default.lastMessageId(e)) && void 0 !== t ? t : e
    }

    function P(e) {
        return function(t, n) {
            if ((0, C.isForumPostPinned)(t)) return -1;
            if ((0, C.isForumPostPinned)(n)) return 1;
            if (e === o.ThreadSortOrder.LATEST_ACTIVITY) return I.default.compare(L(n), L(t));
            else return I.default.compare(n, t)
        }
    }

    function U() {
        S = [], i = null, E = null, N = new Set, g = o.ThreadSortOrder.LATEST_ACTIVITY, h = 0, M = [], v = a.chain(T), y = a.chain(T), R.clear(), D.clear()
    }

    function F() {
        var e;
        let t = m.default.getChannelId();
        if (null == t || !(null === (e = p.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
        H({
            refreshThreadIds: !0
        })
    }

    function b(e) {
        let t = p.default.getChannel(e);
        return null == t ? [] : Object.values(u.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
            let {
                id: t
            } = e;
            return t
        }).sort(P(g))
    }

    function H(e) {
        var t;
        let n = p.default.getChannel(E);
        if (null == n) return;
        (null == e ? void 0 : e.refreshThreadIds) && (M = Object.values(u.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
            let {
                id: t
            } = e;
            return t
        }), h = 0, O = !0), 0 !== D.size && (M = M.filter(e => !D.has(e)), D.clear()), 0 !== R.size && (M = Array.from(new Set([...M, ...R])), R.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (y = a.chain(M).sort(P(o.ThreadSortOrder.LATEST_ACTIVITY)), v = a.chain(M).sort(P(o.ThreadSortOrder.CREATION_DATE)));
        let l = g === o.ThreadSortOrder.LATEST_ACTIVITY ? y : v,
            r = l.value();
        S = 0 === N.size ? r : r.filter((t = N, function(e) {
            var n;
            let i = null === (n = p.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
            return null != i && 0 !== i.length && i.some(e => t.has(e))
        }));
        let s = S.find(e => (function(e) {
            let t = d.default.getCount(e);
            return null === t || 0 === t
        })(e));
        i = null == s ? null : s
    }
    class x extends r.default.Store {
        initialize() {
            this.waitFor(p.default, u.default, m.default, f.default)
        }
        getNewThreadCount() {
            return h
        }
        getCanAckThreads() {
            return O
        }
        getThreadIds(e, t, n) {
            let i = e !== E,
                l = !(0, _.areSetsEqual)(n, N),
                a = t !== g;
            return E = e, N = n, g = t, i ? H({
                refreshThreadIds: !0
            }) : a ? H({
                sortThreadIds: !0
            }) : l && H(), S
        }
        getCurrentThreadIds() {
            return S
        }
        getAndDeleteMostRecentUserCreatedThreadId() {
            let e = A;
            return A = null, e
        }
        getFirstNoReplyThreadId() {
            return i
        }
    }
    x.displayName = "ForumActivePostStore";
    var B = new x(s.default, {
        CONNECTION_OPEN: F,
        OVERLAY_INITIALIZE: F,
        GUILD_CREATE: F,
        CHANNEL_SELECT: F,
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== E) return !1;
            U()
        },
        THREAD_LIST_SYNC: function(e) {
            var t;
            let {
                guildId: n
            } = e;
            if (null == E || n !== (null === (t = p.default.getChannel(E)) || void 0 === t ? void 0 : t.guild_id)) return !1;
            H({
                refreshThreadIds: !0
            })
        },
        THREAD_CREATE: function(e) {
            let {
                channel: t,
                isNewlyCreated: n
            } = e;
            if (null == t.parent_id || t.parent_id !== E || !n) return !1;
            t.ownerId !== c.default.getId() ? h++ : A = t.id
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== E) return !1;
            let n = (0, C.isForumPostPinned)(t.id),
                i = R.has(t.id);
            if (n && !i) R.add(t.id), H({
                sortThreadIds: !0
            });
            else {
                if (n || !i) return !1;
                R.delete(t.id), H({
                    sortThreadIds: !0
                })
            }
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== E) return !1;
            D.add(t.id), H({
                sortThreadIds: !0
            })
        },
        RESORT_THREADS: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || t !== E) return !1;
            H({
                refreshThreadIds: !0
            })
        },
        CHANNEL_ACK: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || t !== E) return !1;
            O = !1
        }
    })
}