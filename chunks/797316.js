function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("47120");
    var r, s, a, o, l = n("392711"),
        u = n.n(l),
        d = n("442837"),
        _ = n("570140"),
        c = n("177523"),
        E = n("768419"),
        I = n("314897"),
        T = n("439170"),
        f = n("433355"),
        S = n("592125"),
        h = n("486472"),
        A = n("271383"),
        m = n("430824"),
        N = n("19780"),
        p = n("699516"),
        O = n("944486"),
        R = n("914010"),
        C = n("981631");
    let g = new c.default(e => {
        for (let t in e) null == m.default.getGuild(t) && !h.default.isUnavailable(t) && delete e[t];
        _.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: e
        })
    });

    function L(e, t) {
        let n = {};
        g.forEach(r => {
            var s;
            r !== R.default.getGuildId() && r !== N.default.getGuildId() && r !== (null === (s = S.default.getChannel(O.default.getChannelId())) || void 0 === s ? void 0 : s.getGuildId()) && (null == i || i.guildId !== r) && (g.clearWithoutFlushing(r, e), t && (n[r] = g.get(r)))
        }), !u().isEmpty(n) && _.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: n
        })
    }

    function D(e, t) {
        return g.subscribeToGuild(e), null != t && f.default.getSection(t) === C.ChannelSections.MEMBERS && v(e, t, c.DEFAULT_RANGES)
    }

    function v(e, t, n) {
        if (t === T.EVERYONE_CHANNEL_ID) return g.subscribeChannel(e, t, n);
        let i = S.default.getChannel(t);
        if (null == i) return !1;
        let r = i.getGuildId();
        return (r !== e && e === C.FAVORITES && g.subscribeToGuild(r), null != i && i.isThread()) ? i.type === C.ChannelTypes.ANNOUNCEMENT_THREAD ? g.subscribeChannel(r, i.parent_id, n) : !!i.isActiveThread() && g.subscribeThreadMemberList(r, t, O.default.getChannelId()) : g.subscribeChannel(r, t, n)
    }

    function M(e) {
        let {
            type: t
        } = e;
        "CONNECTION_OPEN" === t && L(!0, !1);
        let n = R.default.getGuildId();
        null != n && D(n, O.default.getChannelId(n));
        let i = {};
        g.forEach(e => {
            null == m.default.getGuild(e) ? g.clearWithoutFlushing(e, !0) : i[e] = g.get(e)
        }), !u().isEmpty(i) && _.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: i
        })
    }

    function y(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        return !h.default.isUnavailable(t) && D(t, n)
    }

    function P() {
        return D(R.default.getGuildId(), O.default.getChannelId())
    }

    function U() {
        let e = E.default.getSyncingWith();
        if (null == e) null != i && (g.unsubscribeUser(i.guildId, i.userId), i = null);
        else {
            let {
                userId: t
            } = e;
            if (null != i && i.userId === t || p.default.isFriend(t)) return !1;
            let n = A.default.memberOf(t);
            if (0 === n.length) return !1;
            let [r] = n;
            i = {
                guildId: r,
                userId: t
            }, g.subscribeUser(r, t)
        }
        return !1
    }
    class b extends(r = d.default.Store) {
        initialize() {
            this.waitFor(S.default, m.default, R.default, O.default, N.default, I.default, f.default), this.syncWith([E.default], U), this.syncWith([f.default], P)
        }
        getSubscribedThreadIds() {
            return g.getSubscribedThreadIds()
        }
        isSubscribedToThreads(e) {
            return g.isSubscribedToThreads(e)
        }
        isSubscribedToAnyMember(e) {
            return g.isSubscribedToAnyMember(e)
        }
        isSubscribedToMemberUpdates(e) {
            return g.isSubscribedToMemberUpdates(e)
        }
        isSubscribedToAnyGuildChannel(e) {
            let t = g.get(e).channels;
            return null != t && Object.keys(t).length > 0
        }
    }
    o = "GuildSubscriptionsStore", (a = "displayName") in(s = b) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new b(_.default, {
        CONNECTION_OPEN: M,
        CONNECTION_RESUMED: M,
        CONNECTION_CLOSED: function() {
            L(!1, !1)
        },
        IDLE: function(e) {
            let {
                idle: t
            } = e;
            if (!t) return !1;
            L(!1, !0)
        },
        LOGOUT: function() {
            g.reset()
        },
        VOICE_CHANNEL_SELECT: y,
        CHANNEL_SELECT: y,
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            t.id === R.default.getGuildId() && P()
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            g.clearWithoutFlushing(t.id, !0)
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
            let {
                guildId: t,
                userIds: n
            } = e;
            return n.forEach(e => {
                e !== I.default.getId() && g.subscribeUser(t, e)
            }), !1
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
            let {
                guildId: t,
                userIds: n
            } = e;
            return n.forEach(e => {
                g.unsubscribeUser(t, e)
            }), !1
        },
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            g.subscribeToMemberUpdates(t)
        },
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            g.unsubscribeFromMemberUpdates(t)
        },
        GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
            let {
                guildId: t,
                channelId: n,
                ranges: i
            } = e;
            return v(t, n, i)
        },
        GUILD_SUBSCRIPTIONS: function(e) {
            let {
                guildId: t
            } = e;
            return g.subscribeToGuild(t)
        },
        CHANNEL_PRELOAD: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            return D(t, n)
        },
        INBOX_OPEN: function(e) {
            let {
                guildIds: t
            } = e;
            for (let e of t) null != e && g.subscribeToGuild(e);
            return !1
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            return t.isArchivedThread() ? g.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && O.default.getChannelId() === t.id && void g.subscribeThreadMemberList(t.guild_id, t.id, O.default.getChannelId())
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return g.unsubscribeThreadMemberList(t.guild_id, t.id)
        },
        THREAD_LIST_SYNC: P
    })
}