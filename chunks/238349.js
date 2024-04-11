function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        computeThreadIdsSnapshot: function() {
            return V
        }
    }), n("47120");
    var r, s, a, o, l = n("392711"),
        u = n.n(l),
        d = n("683860"),
        _ = n("442837"),
        c = n("570140"),
        E = n("344185"),
        I = n("144140"),
        T = n("314897"),
        f = n("592125"),
        S = n("306680"),
        h = n("944486"),
        A = n("823379"),
        m = n("709054"),
        N = n("882252");
    let O = [],
        p = null,
        R = null,
        C = new Set,
        g = d.ThreadSortOrder.LATEST_ACTIVITY,
        L = 0,
        D = [],
        v = !1,
        M = [],
        y = u().chain(O),
        P = u().chain(O),
        U = new Set,
        b = new Set;

    function G(e) {
        var t;
        return null !== (t = S.default.lastMessageId(e)) && void 0 !== t ? t : e
    }

    function w(e) {
        return function(t, n) {
            if ((0, N.isForumPostPinned)(t)) return -1;
            if ((0, N.isForumPostPinned)(n)) return 1;
            if (e === d.ThreadSortOrder.LATEST_ACTIVITY) return m.default.compare(G(n), G(t));
            else return m.default.compare(n, t)
        }
    }

    function k() {
        D = [], i = null, R = null, C = new Set, g = d.ThreadSortOrder.LATEST_ACTIVITY, L = 0, M = [], y = u().chain(O), P = u().chain(O), b.clear(), U.clear()
    }

    function B() {
        var e;
        let t = h.default.getChannelId();
        if (null == t || !(null === (e = f.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return k(), !1;
        F({
            refreshThreadIds: !0
        })
    }

    function V(e) {
        let t = f.default.getChannel(e);
        return null == t ? [] : Object.values(E.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
            let {
                id: t
            } = e;
            return t
        }).sort(w(g))
    }

    function F(e) {
        var t;
        let n = f.default.getChannel(R);
        if (null == n) return;
        (null == e ? void 0 : e.refreshThreadIds) && (M = Object.values(E.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
            let {
                id: t
            } = e;
            return t
        }), L = 0, v = !0), 0 !== U.size && (M = M.filter(e => !U.has(e)), U.clear()), 0 !== b.size && (M = Array.from(new Set([...M, ...b])), b.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (P = u().chain(M).sort(w(d.ThreadSortOrder.LATEST_ACTIVITY)), y = u().chain(M).sort(w(d.ThreadSortOrder.CREATION_DATE)));
        let r = (g === d.ThreadSortOrder.LATEST_ACTIVITY ? P : y).value();
        let s = (D = 0 === C.size ? r : r.filter((t = C, function(e) {
            var n;
            let i = null === (n = f.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
            return null != i && 0 !== i.length && i.some(e => t.has(e))
        }))).find(e => (function(e) {
            let t = I.default.getCount(e);
            return null === t || 0 === t
        })(e));
        i = null == s ? null : s
    }
    class x extends(r = _.default.Store) {
        initialize() {
            this.waitFor(f.default, E.default, h.default, S.default)
        }
        getNewThreadCount() {
            return L
        }
        getCanAckThreads() {
            return v
        }
        getThreadIds(e, t, n) {
            let i = e !== R,
                r = !(0, A.areSetsEqual)(n, C),
                s = t !== g;
            return R = e, C = n, g = t, i ? F({
                refreshThreadIds: !0
            }) : s ? F({
                sortThreadIds: !0
            }) : r && F(), D
        }
        getCurrentThreadIds() {
            return D
        }
        getAndDeleteMostRecentUserCreatedThreadId() {
            let e = p;
            return p = null, e
        }
        getFirstNoReplyThreadId() {
            return i
        }
    }
    o = "ForumActivePostStore", (a = "displayName") in(s = x) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new x(c.default, {
        CONNECTION_OPEN: B,
        OVERLAY_INITIALIZE: B,
        GUILD_CREATE: B,
        CHANNEL_SELECT: B,
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== R) return !1;
            k()
        },
        THREAD_LIST_SYNC: function(e) {
            var t;
            let {
                guildId: n
            } = e;
            if (null == R || n !== (null === (t = f.default.getChannel(R)) || void 0 === t ? void 0 : t.guild_id)) return !1;
            F({
                refreshThreadIds: !0
            })
        },
        THREAD_CREATE: function(e) {
            let {
                channel: t,
                isNewlyCreated: n
            } = e;
            if (null == t.parent_id || t.parent_id !== R || !n) return !1;
            t.ownerId !== T.default.getId() ? L++ : p = t.id
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== R) return !1;
            let n = (0, N.isForumPostPinned)(t.id),
                i = b.has(t.id);
            if (n && !i) b.add(t.id), F({
                sortThreadIds: !0
            });
            else {
                if (n || !i) return !1;
                b.delete(t.id), F({
                    sortThreadIds: !0
                })
            }
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (null == t.parent_id || t.parent_id !== R) return !1;
            U.add(t.id), F({
                sortThreadIds: !0
            })
        },
        RESORT_THREADS: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || t !== R) return !1;
            F({
                refreshThreadIds: !0
            })
        },
        CHANNEL_ACK: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || t !== R) return !1;
            v = !1
        }
    })
}