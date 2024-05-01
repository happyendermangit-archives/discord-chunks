function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
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

    function h(e, t) {
        return t.forEach(t => {
            let {
                author: n,
                mentions: i
            } = t;
            null != n && S(e, n.id), null == i || i.forEach(t => S(e, t.id))
        }), !1
    }

    function A(e) {
        let {
            channelId: t,
            messages: n
        } = e, i = E.default.getChannel(t);
        return null != i && null != i.guild_id && h(i.guild_id, n)
    }

    function m(e) {
        let {
            guildId: t,
            messages: n
        } = e;
        return null != t && h(t, l().flatten(n))
    }
    class N extends(i = u.default.Store) {
        initialize() {
            this.waitFor(E.default, I.default)
        }
        requestMember(e, t) {
            S(e, t)
        }
    }
    a = "GuildMemberRequesterStore", (s = "displayName") in(r = N) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a, t.default = new N(d.default, {
        CONNECTION_CLOSED: f,
        CONNECTION_OPEN: f,
        CONNECTION_RESUMED: function() {
            return T.requestUnacknowledged(), !1
        },
        GUILD_MEMBERS_CHUNK_BATCH: function(e) {
            let {
                chunks: t
            } = e;
            for (let e of t) e.members.forEach(t => {
                T.acknowledge(e.guildId, t.user.id)
            }), null != e.notFound && e.notFound.forEach(t => T.acknowledge(e.guildId, t));
            return !1
        },
        SEARCH_FINISH: m,
        MOD_VIEW_SEARCH_FINISH: m,
        LOCAL_MESSAGES_LOADED: A,
        LOAD_MESSAGES_SUCCESS: A,
        LOAD_MESSAGES_AROUND_SUCCESS: A,
        LOAD_PINNED_MESSAGES_SUCCESS: A,
        LOAD_RECENT_MENTIONS_SUCCESS: A,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                data: n
            } = e;
            return h(t, (0, c.getMessagesFromGuildFeedFetch)(n))
        }
    })
}