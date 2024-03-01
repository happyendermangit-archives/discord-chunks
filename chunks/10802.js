function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("222007");
    var a = n("917351"),
        l = n.n(a),
        s = n("446674"),
        r = n("913144"),
        u = n("386451"),
        d = n("662285"),
        o = n("271938"),
        c = n("19766"),
        _ = n("982108"),
        f = n("42203"),
        h = n("341542"),
        E = n("26989"),
        g = n("305961"),
        m = n("945956"),
        A = n("27618"),
        T = n("18494"),
        p = n("162771"),
        S = n("49111");
    let M = new u.default(e => {
        for (let t in e) null == g.default.getGuild(t) && !h.default.isUnavailable(t) && delete e[t];
        r.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: e
        })
    });

    function N(e, t) {
        let n = {};
        M.forEach(a => {
            var l;
            a !== p.default.getGuildId() && a !== m.default.getGuildId() && a !== (null === (l = f.default.getChannel(T.default.getChannelId())) || void 0 === l ? void 0 : l.getGuildId()) && (null == i || i.guildId !== a) && (M.clearWithoutFlushing(a, e), t && (n[a] = M.get(a)))
        }), !l.isEmpty(n) && r.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: n
        })
    }

    function v(e, t) {
        return M.subscribeToGuild(e), null != t && _.default.getSection(t) === S.ChannelSections.MEMBERS && C(e, t, u.DEFAULT_RANGES)
    }

    function C(e, t, n) {
        if (t === c.EVERYONE_CHANNEL_ID) return M.subscribeChannel(e, t, n);
        let i = f.default.getChannel(t);
        if (null == i) return !1;
        let a = i.getGuildId();
        return (a !== e && e === S.FAVORITES && M.subscribeToGuild(a), null != i && i.isThread()) ? i.type === S.ChannelTypes.ANNOUNCEMENT_THREAD ? M.subscribeChannel(a, i.parent_id, n) : !!i.isActiveThread() && M.subscribeThreadMemberList(a, t, T.default.getChannelId()) : M.subscribeChannel(a, t, n)
    }

    function O(e) {
        let {
            type: t
        } = e;
        "CONNECTION_OPEN" === t && N(!0, !1);
        let n = p.default.getGuildId();
        null != n && v(n, T.default.getChannelId(n));
        let i = {};
        M.forEach(e => {
            null == g.default.getGuild(e) ? M.clearWithoutFlushing(e, !0) : i[e] = M.get(e)
        }), !l.isEmpty(i) && r.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: i
        })
    }

    function I(e) {
        let {
            guildId: t,
            channelId: n
        } = e, i = h.default.isUnavailable(t);
        return !i && v(t, n)
    }

    function R() {
        return v(p.default.getGuildId(), T.default.getChannelId())
    }

    function b() {
        let e = d.default.getSyncingWith();
        if (null == e) null != i && (M.unsubscribeUser(i.guildId, i.userId), i = null);
        else {
            let {
                userId: t
            } = e;
            if (null != i && i.userId === t || A.default.isFriend(t)) return !1;
            let n = E.default.memberOf(t);
            if (0 === n.length) return !1;
            let [a] = n;
            i = {
                guildId: a,
                userId: t
            }, M.subscribeUser(a, t)
        }
        return !1
    }
    class D extends s.default.Store {
        initialize() {
            this.waitFor(f.default, g.default, p.default, T.default, m.default, o.default, _.default), this.syncWith([d.default], b), this.syncWith([_.default], R)
        }
        getSubscribedThreadIds() {
            return M.getSubscribedThreadIds()
        }
        isSubscribedToThreads(e) {
            return M.isSubscribedToThreads(e)
        }
        isSubscribedToAnyMember(e) {
            return M.isSubscribedToAnyMember(e)
        }
        isSubscribedToMemberUpdates(e) {
            return M.isSubscribedToMemberUpdates(e)
        }
        isSubscribedToAnyGuildChannel(e) {
            let t = M.get(e).channels;
            return null != t && Object.keys(t).length > 0
        }
    }
    D.displayName = "GuildSubscriptionsStore";
    var y = new D(r.default, {
        CONNECTION_OPEN: O,
        CONNECTION_RESUMED: O,
        CONNECTION_CLOSED: function() {
            N(!1, !1)
        },
        IDLE: function(e) {
            let {
                idle: t
            } = e;
            if (!t) return !1;
            N(!1, !0)
        },
        LOGOUT: function() {
            M.reset()
        },
        VOICE_CHANNEL_SELECT: I,
        CHANNEL_SELECT: I,
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            t.id === p.default.getGuildId() && R()
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            M.clearWithoutFlushing(t.id, !0)
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
            let {
                guildId: t,
                userIds: n
            } = e;
            return n.forEach(e => {
                e !== o.default.getId() && M.subscribeUser(t, e)
            }), !1
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
            let {
                guildId: t,
                userIds: n
            } = e;
            return n.forEach(e => {
                M.unsubscribeUser(t, e)
            }), !1
        },
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            M.subscribeToMemberUpdates(t)
        },
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            M.unsubscribeFromMemberUpdates(t)
        },
        GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
            let {
                guildId: t,
                channelId: n,
                ranges: i
            } = e;
            return C(t, n, i)
        },
        GUILD_SUBSCRIPTIONS: function(e) {
            let {
                guildId: t
            } = e;
            return M.subscribeToGuild(t)
        },
        CHANNEL_PRELOAD: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            return v(t, n)
        },
        INBOX_OPEN: function(e) {
            let {
                guildIds: t
            } = e;
            for (let e of t) null != e && M.subscribeToGuild(e);
            return !1
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            return t.isArchivedThread() ? M.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && T.default.getChannelId() === t.id && void M.subscribeThreadMemberList(t.guild_id, t.id, T.default.getChannelId())
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return M.unsubscribeThreadMemberList(t.guild_id, t.id)
        },
        THREAD_LIST_SYNC: R
    })
}