function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("49978"),
        l = n("560208"),
        u = n("42203"),
        d = n("26989");
    let c = new o.default(d.default.isMember, (e, t) => {
        a.default.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: [e],
            userIds: t
        })
    });

    function _() {
        c.reset()
    }

    function f(e, t) {
        return c.request(e, t), !1
    }

    function E(e, t) {
        return t.forEach(t => {
            let {
                author: n,
                mentions: i
            } = t;
            null != n && f(e, n.id), null == i || i.forEach(t => f(e, t.id))
        }), !1
    }

    function h(e) {
        let {
            channelId: t,
            messages: n
        } = e, i = u.default.getChannel(t);
        return null != i && null != i.guild_id && E(i.guild_id, n)
    }

    function g(e) {
        let {
            guildId: t,
            messages: n
        } = e;
        return null != t && E(t, s.flatten(n))
    }
    class m extends r.default.Store {
        initialize() {
            this.waitFor(u.default, d.default)
        }
        requestMember(e, t) {
            f(e, t)
        }
    }
    m.displayName = "GuildMemberRequesterStore";
    var p = new m(a.default, {
        CONNECTION_CLOSED: _,
        CONNECTION_OPEN: _,
        CONNECTION_RESUMED: function() {
            return c.requestUnacknowledged(), !1
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            let {
                guildId: t,
                members: n,
                notFound: i
            } = e;
            return n.forEach(e => {
                c.acknowledge(t, e.user.id)
            }), null != i && i.forEach(e => c.acknowledge(t, e)), !1
        },
        SEARCH_FINISH: g,
        MOD_VIEW_SEARCH_FINISH: g,
        LOCAL_MESSAGES_LOADED: h,
        LOAD_MESSAGES_SUCCESS: h,
        LOAD_MESSAGES_AROUND_SUCCESS: h,
        LOAD_PINNED_MESSAGES_SUCCESS: h,
        LOAD_RECENT_MENTIONS_SUCCESS: h,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                data: n
            } = e, i = (0, l.getMessagesFromGuildFeedFetch)(n);
            return E(t, i)
        }
    })
}