function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        computeThreadIdsSnapshot: function() {
            return B
        },
        default: function() {
            return H
        }
    }), n("222007");
    var l = n("917351"),
        a = n.n(l),
        o = n("335710"),
        s = n("446674"),
        r = n("913144"),
        u = n("689275"),
        d = n("610730"),
        c = n("271938"),
        p = n("42203"),
        f = n("660478"),
        m = n("18494"),
        _ = n("449008"),
        I = n("299039"),
        T = n("786742");
    let A = [],
        E = null,
        C = null,
        N = new Set,
        g = o.ThreadSortOrder.LATEST_ACTIVITY,
        M = 0,
        O = [],
        S = !1,
        h = [],
        y = a.chain(A),
        v = a.chain(A),
        D = new Set,
        R = new Set;

    function L(e) {
        var t;
        return null !== (t = f.default.lastMessageId(e)) && void 0 !== t ? t : e
    }

    function P(e) {
        return function(t, n) {
            if ((0, T.isForumPostPinned)(t)) return -1;
            if ((0, T.isForumPostPinned)(n)) return 1;
            if (e === o.ThreadSortOrder.LATEST_ACTIVITY) return I.default.compare(L(n), L(t));
            else return I.default.compare(n, t)
        }
    }

    function U() {
        O = [], i = null, C = null, N = new Set, g = o.ThreadSortOrder.LATEST_ACTIVITY, M = 0, h = [], y = a.chain(A), v = a.chain(A), R.clear(), D.clear()
    }

    function b() {
        var e;
        let t = m.default.getChannelId();
        if (null == t || !(null === (e = p.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
        x({
            refreshThreadIds: !0
        })
    }

    function B(e) {
        let t = p.default.getChannel(e);
        return null == t ? [] : Object.values(u.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
            let {
                id: t
            } = e;
            return t
        }).sort(P(g))
    }

    function x(e) {
        var t;
        let n = p.default.getChannel(C);
        if (null == n) return;
        (null == e ? void 0 : e.refreshThreadIds) && (h = Object.values(u.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
            let {
                id: t
            } = e;
            return t
        }), M = 0, S = !0), 0 !== D.size && (h = h.filter(e => !D.has(e)), D.clear()), 0 !== R.size && (h = Array.from(new Set([...h, ...R])), R.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (v = a.chain(h).sort(P(o.ThreadSortOrder.LATEST_ACTIVITY)), y = a.chain(h).sort(P(o.ThreadSortOrder.CREATION_DATE)));
        let l = g === o.ThreadSortOrder.LATEST_ACTIVITY ? v : y,
            s = l.value();
        O = 0 === N.size ? s : s.filter((t = N, function(e) {
            var n;
            let i = null === (n = p.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
            return null != i && 0 !== i.length && i.some(e => t.has(e))
        }));
        let r = O.find(e => (function(e) {
            let t = d.default.getCount(e);
            return null === t || 0 === t
        })(e));
        i = null == r ? null : r
    }
    class F extends s.default.Store {
        initialize() {
            this.waitFor(p.default, u.default, m.default, f.default)
        }
        getNewThreadCount() {
            return M
        }
        getCanAckThreads() {
            return S
        }
        getThreadIds(e, t, n) {
            let i = e !== C,
                l = !(0, _.areSetsEqual)(n, N),
                a = t !== g;
            return C = e, N = n, g = t, i ? x({
                refreshThreadIds: !0
            }) : a ? x({
                sortThreadIds: !0
            }) : l && x(), O
        }
        getCurrentThreadIds() {
            return O
        }
        getAndDeleteMostRecentUserCreatedThreadId() {
            let e = E;
            return E = null, e
        }
        getFirstNoReplyThreadId() {
            return i
        }
    }
    F.displayName = "ForumActivePostStore";
    var H = new F(r.default, {
        CONNECTION_OPEN: b,
        OVERLAY_INITIALIZE: b,
        GUILD_CREATE: b,
        CHANNEL_SELECT: b,
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== C) return !1;
            U()
        },
        THREAD_LIST_SYNC: function(e) {
            var t;
            let {
                guildId: n
            } = e;
            if (null == C || n !== (null === (t = p.default.getChannel(C)) || void 0 === t ? void 0 : t.guild_id)) return !1;
            x({
                refreshThreadIds: !0
            })
        },
        THREAD_CREATE: function(e) {
            let {
                channel: t,
                isNewlyCreated: n
            } = e;
            if (null == t.parent_id || t.parent_id !== C || !n) return !1;
            t.ownerId !== c.default.getId() ? M++ : E = t.id
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== C) return !1;
            let n = (0, T.isForumPostPinned)(t.id),
                i = R.has(t.id);
            if (n && !i) R.add(t.id), x({
                sortThreadIds: !0
            });
            else {
                if (n || !i) return !1;
                R.delete(t.id), x({
                    sortThreadIds: !0
                })
            }
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== C) return !1;
            D.add(t.id), x({
                sortThreadIds: !0
            })
        },
        RESORT_THREADS: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || t !== C) return !1;
            x({
                refreshThreadIds: !0
            })
        },
        CHANNEL_ACK: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || t !== C) return !1;
            S = !1
        }
    })
}