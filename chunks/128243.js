function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        subscribeChannel: function() {
            return l
        },
        subscribeChannelDimensions: function() {
            return c
        },
        subscribeMembers: function() {
            return i
        },
        subscribeToMemberUpdates: function() {
            return u
        },
        unsubscribeFromMemberUpdates: function() {
            return s
        },
        unsubscribeMembers: function() {
            return a
        }
    });
    var r = n("629815"),
        o = n("127926");

    function i(e, t) {
        r.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
            guildId: e,
            userIds: t
        })
    }

    function a(e, t) {
        r.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
            guildId: e,
            userIds: t
        })
    }

    function u(e) {
        r.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
            guildId: e
        })
    }

    function s(e) {
        r.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
            guildId: e
        })
    }

    function l(e, t, n) {
        r.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_CHANNEL",
            guildId: e,
            channelId: t,
            ranges: n
        })
    }

    function c(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.y,
            i = e.height,
            a = e.rowHeight;

        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
        }
        var s = [];

        function c(e) {
            var t = e + (o.MINIMUM_RANGE - 1);
            return s.push([e, t]), t + 1
        }
        var f = u(.5 * i),
            d = u(r, -f),
            _ = u(r + i, f);
        for (d > 0 && (d = Math.max(c(0), d)), d = Math.floor(d / o.MINIMUM_RANGE) * o.MINIMUM_RANGE; d <= _;) d = c(d);
        l(t, n, s)
    }
}