function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007");
    var s = n("917351"),
        r = n.n(s),
        a = n("446674"),
        o = n("913144"),
        l = n("386451"),
        u = n("662285"),
        d = n("271938"),
        c = n("19766"),
        f = n("982108"),
        _ = n("42203"),
        h = n("341542"),
        E = n("26989"),
        g = n("305961"),
        m = n("945956"),
        p = n("27618"),
        S = n("18494"),
        v = n("162771"),
        T = n("49111");
    let I = new l.default(e => {
        for (let t in e) null == g.default.getGuild(t) && !h.default.isUnavailable(t) && delete e[t];
        o.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: e
        })
    });

    function C(e, t) {
        let n = {};
        I.forEach(s => {
            var r;
            s !== v.default.getGuildId() && s !== m.default.getGuildId() && s !== (null === (r = _.default.getChannel(S.default.getChannelId())) || void 0 === r ? void 0 : r.getGuildId()) && (null == i || i.guildId !== s) && (I.clearWithoutFlushing(s, e), t && (n[s] = I.get(s)))
        }), !r.isEmpty(n) && o.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: n
        })
    }

    function A(e, t) {
        return I.subscribeToGuild(e), null != t && f.default.getSection(t) === T.ChannelSections.MEMBERS && y(e, t, l.DEFAULT_RANGES)
    }

    function y(e, t, n) {
        if (t === c.EVERYONE_CHANNEL_ID) return I.subscribeChannel(e, t, n);
        let i = _.default.getChannel(t);
        if (null == i) return !1;
        let s = i.getGuildId();
        return (s !== e && e === T.FAVORITES && I.subscribeToGuild(s), null != i && i.isThread()) ? i.type === T.ChannelTypes.ANNOUNCEMENT_THREAD ? I.subscribeChannel(s, i.parent_id, n) : !!i.isActiveThread() && I.subscribeThreadMemberList(s, t, S.default.getChannelId()) : I.subscribeChannel(s, t, n)
    }

    function N(e) {
        let {
            type: t
        } = e;
        "CONNECTION_OPEN" === t && C(!0, !1);
        let n = v.default.getGuildId();
        null != n && A(n, S.default.getChannelId(n));
        let i = {};
        I.forEach(e => {
            null == g.default.getGuild(e) ? I.clearWithoutFlushing(e, !0) : i[e] = I.get(e)
        }), !r.isEmpty(i) && o.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_FLUSH",
            subscriptions: i
        })
    }

    function R(e) {
        let {
            guildId: t,
            channelId: n
        } = e, i = h.default.isUnavailable(t);
        return !i && A(t, n)
    }

    function O() {
        return A(v.default.getGuildId(), S.default.getChannelId())
    }

    function D() {
        let e = u.default.getSyncingWith();
        if (null == e) null != i && (I.unsubscribeUser(i.guildId, i.userId), i = null);
        else {
            let {
                userId: t
            } = e;
            if (null != i && i.userId === t || p.default.isFriend(t)) return !1;
            let n = E.default.memberOf(t);
            if (0 === n.length) return !1;
            let [s] = n;
            i = {
                guildId: s,
                userId: t
            }, I.subscribeUser(s, t)
        }
        return !1
    }
    class P extends a.default.Store {
        initialize() {
            this.waitFor(_.default, g.default, v.default, S.default, m.default, d.default, f.default), this.syncWith([u.default], D), this.syncWith([f.default], O)
        }
        getSubscribedThreadIds() {
            return I.getSubscribedThreadIds()
        }
        isSubscribedToThreads(e) {
            return I.isSubscribedToThreads(e)
        }
        isSubscribedToAnyMember(e) {
            return I.isSubscribedToAnyMember(e)
        }
        isSubscribedToMemberUpdates(e) {
            return I.isSubscribedToMemberUpdates(e)
        }
        isSubscribedToAnyGuildChannel(e) {
            let t = I.get(e).channels;
            return null != t && Object.keys(t).length > 0
        }
    }
    P.displayName = "GuildSubscriptionsStore";
    var M = new P(o.default, {
        CONNECTION_OPEN: N,
        CONNECTION_RESUMED: N,
        CONNECTION_CLOSED: function() {
            C(!1, !1)
        },
        IDLE: function(e) {
            let {
                idle: t
            } = e;
            if (!t) return !1;
            C(!1, !0)
        },
        LOGOUT: function() {
            I.reset()
        },
        VOICE_CHANNEL_SELECT: R,
        CHANNEL_SELECT: R,
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            t.id === v.default.getGuildId() && O()
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            I.clearWithoutFlushing(t.id, !0)
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_ADD: function(e) {
            let {
                guildId: t,
                userIds: n
            } = e;
            return n.forEach(e => {
                e !== d.default.getId() && I.subscribeUser(t, e)
            }), !1
        },
        GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE: function(e) {
            let {
                guildId: t,
                userIds: n
            } = e;
            return n.forEach(e => {
                I.unsubscribeUser(t, e)
            }), !1
        },
        GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            I.subscribeToMemberUpdates(t)
        },
        GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES: function(e) {
            let {
                guildId: t
            } = e;
            I.unsubscribeFromMemberUpdates(t)
        },
        GUILD_SUBSCRIPTIONS_CHANNEL: function(e) {
            let {
                guildId: t,
                channelId: n,
                ranges: i
            } = e;
            return y(t, n, i)
        },
        GUILD_SUBSCRIPTIONS: function(e) {
            let {
                guildId: t
            } = e;
            return I.subscribeToGuild(t)
        },
        CHANNEL_PRELOAD: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            return A(t, n)
        },
        INBOX_OPEN: function(e) {
            let {
                guildIds: t
            } = e;
            for (let e of t) null != e && I.subscribeToGuild(e);
            return !1
        },
        THREAD_UPDATE: function(e) {
            let {
                channel: t
            } = e;
            return t.isArchivedThread() ? I.unsubscribeThreadMemberList(t.guild_id, t.id) : !!t.isActiveThread() && S.default.getChannelId() === t.id && void I.subscribeThreadMemberList(t.guild_id, t.id, S.default.getChannelId())
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return I.unsubscribeThreadMemberList(t.guild_id, t.id)
        },
        THREAD_LIST_SYNC: O
    })
}