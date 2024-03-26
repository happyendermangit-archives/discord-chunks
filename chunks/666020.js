function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        subscribeMembers: function() {
            return r
        },
        unsubscribeMembers: function() {
            return u
        },
        subscribeToMemberUpdates: function() {
            return a
        },
        unsubscribeFromMemberUpdates: function() {
            return d
        },
        subscribeChannel: function() {
            return s
        },
        subscribeChannelDimensions: function() {
            return o
        }
    }), n("424973");
    var l = n("913144"),
        i = n("696605");

    function r(e, t) {
        l.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
            guildId: e,
            userIds: t
        })
    }

    function u(e, t) {
        l.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
            guildId: e,
            userIds: t
        })
    }

    function a(e) {
        l.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES",
            guildId: e
        })
    }

    function d(e) {
        l.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES",
            guildId: e
        })
    }

    function s(e, t, n) {
        l.default.dispatch({
            type: "GUILD_SUBSCRIPTIONS_CHANNEL",
            guildId: e,
            channelId: t,
            ranges: n
        })
    }

    function o(e) {
        let {
            guildId: t,
            channelId: n,
            y: l,
            height: r,
            rowHeight: u
        } = e;

        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return Math.max(0, Math.ceil(Math.ceil(e / u)) + t)
        }
        let d = [];

        function o(e) {
            let t = e + (i.MINIMUM_RANGE - 1);
            return d.push([e, t]), t + 1
        }
        let c = a(.5 * r),
            f = a(l, -c),
            _ = a(l + r, c);
        for (f > 0 && (f = Math.max(o(0), f)), f = Math.floor(f / i.MINIMUM_RANGE) * i.MINIMUM_RANGE; f <= _;) f = o(f);
        s(t, n, d)
    }
}