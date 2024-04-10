function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("601635"),
        c = n("900489"),
        E = n("592125"),
        I = n("271383");
    let T = new _.default(I.default.isMember, (e, t) => {
        d.default.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: [e],
            userIds: t
        })
    });

    function f() {
        T.reset()
    }

    function S(e, t) {
        return T.request(e, t), !1
    }

    function A(e, t) {
        return t.forEach(t => {
            let {
                author: n,
                mentions: i
            } = t;
            null != n && S(e, n.id), null == i || i.forEach(t => S(e, t.id))
        }), !1
    }

    function h(e) {
        let {
            channelId: t,
            messages: n
        } = e, i = E.default.getChannel(t);
        return null != i && null != i.guild_id && A(i.guild_id, n)
    }

    function m(e) {
        let {
            guildId: t,
            messages: n
        } = e;
        return null != t && A(t, l().flatten(n))
    }
    class N extends(a = u.default.Store) {
        initialize() {
            this.waitFor(E.default, I.default)
        }
        requestMember(e, t) {
            S(e, t)
        }
    }
    s = "GuildMemberRequesterStore", (r = "displayName") in(i = N) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new N(d.default, {
        CONNECTION_CLOSED: f,
        CONNECTION_OPEN: f,
        CONNECTION_RESUMED: function() {
            return T.requestUnacknowledged(), !1
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            let {
                guildId: t,
                members: n,
                notFound: i
            } = e;
            return n.forEach(e => {
                T.acknowledge(t, e.user.id)
            }), null != i && i.forEach(e => T.acknowledge(t, e)), !1
        },
        SEARCH_FINISH: m,
        MOD_VIEW_SEARCH_FINISH: m,
        LOCAL_MESSAGES_LOADED: h,
        LOAD_MESSAGES_SUCCESS: h,
        LOAD_MESSAGES_AROUND_SUCCESS: h,
        LOAD_PINNED_MESSAGES_SUCCESS: h,
        LOAD_RECENT_MENTIONS_SUCCESS: h,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                data: n
            } = e;
            return A(t, (0, c.getMessagesFromGuildFeedFetch)(n))
        }
    })
}