function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        subscribeChannel: function() {
            return u
        },
        subscribeChannelDimensions: function() {
            return d
        },
        subscribeMembers: function() {
            return s
        },
        subscribeToMemberUpdates: function() {
            return o
        },
        unsubscribeFromMemberUpdates: function() {
            return l
        },
        unsubscribeMembers: function() {
            return a
        }
    }), n("653041");
    var i = n("570140"),
        r = n("509848");

    function s(e, t) {
        i.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
            guildId: e,
            userIds: t
        })
    }

    function a(e, t) {
        i.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
            guildId: e,
            userIds: t
        })
    }

    function o(e) {
        i.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
            guildId: e
        })
    }

    function l(e) {
        i.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
            guildId: e
        })
    }

    function u(e, t, n) {
        i.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_CHANNEL",
            guildId: e,
            channelId: t,
            ranges: n
        })
    }

    function d(e) {
        let {
            guildId: t,
            channelId: n,
            y: i,
            height: s,
            rowHeight: a
        } = e;

        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
        }
        let l = [];

        function d(e) {
            let t = e + (r.MINIMUM_RANGE - 1);
            return l.push([e, t]), t + 1
        }
        let _ = o(.5 * s),
            c = o(i, -_),
            E = o(i + s, _);
        for (c > 0 && (c = Math.max(d(0), c)), c = Math.floor(c / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; c <= E;) c = d(c);
        u(t, n, l)
    }
}