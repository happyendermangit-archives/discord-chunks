function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MIN_REREQUEST_TIME: function() {
            return c
        },
        getSnowflakeSelectDefaultValues: function() {
            return T
        },
        queryChannels: function() {
            return I
        },
        queryMentionables: function() {
            return E
        }
    }), n("47120");
    var i = n("524846"),
        r = n("911969"),
        s = n("592125"),
        a = n("271383"),
        o = n("430824"),
        l = n("594174"),
        u = n("483360"),
        d = n("5192"),
        _ = n("280501");
    let c = 1e3;

    function E(e, t, n) {
        let i = s.default.getChannel(n);
        if (null == i) return [];
        let a = e === r.ComponentType.USER_SELECT || e === r.ComponentType.MENTIONABLE_SELECT,
            o = e === r.ComponentType.ROLE_SELECT || e === r.ComponentType.MENTIONABLE_SELECT,
            {
                users: l,
                roles: c
            } = u.default.queryMentionResults({
                query: t,
                channel: i,
                canMentionEveryone: !1,
                canMentionHere: !1,
                canMentionUsers: a,
                canMentionRoles: o,
                includeAllGuildUsers: !0,
                includeNonMentionableRoles: !0,
                checkRecentlyTalkedOnEmptyQuery: !1,
                limit: 15
            }),
            E = l.map(e => {
                var t;
                let r = d.default.getNickname(i.getGuildId(), n, e.user);
                return {
                    type: _.SelectOptionType.USER,
                    value: e.user.id,
                    label: null !== (t = null != r ? r : e.user.globalName) && void 0 !== t ? t : e.user.username
                }
            });
        return [...E, ...c.map(e => ({
            type: _.SelectOptionType.ROLE,
            value: e.id,
            label: e.name
        }))]
    }

    function I(e, t, n) {
        let i = s.default.getChannel(t);
        return null == i ? [] : u.default.queryApplicationCommandChannelResults({
            query: e,
            channel: i,
            channelTypes: n,
            limit: 15
        }).channels.map(e => ({
            type: _.SelectOptionType.CHANNEL,
            value: e.id,
            label: e.name
        }))
    }

    function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null == e) return;
        let r = o.default.getGuild(t);
        return e.map(e => {
            switch (e.type) {
                case i.SnowflakeSelectDefaultValueTypes.USER:
                    var t;
                    let u = l.default.getUser(e.id);
                    if (null == u) return null;
                    let d = null != r ? a.default.getNick(r.id, u.id) : void 0;
                    return {
                        type: _.SelectOptionType.USER, value: u.id, label: null !== (t = null != d ? d : u.globalName) && void 0 !== t ? t : u.username
                    };
                case i.SnowflakeSelectDefaultValueTypes.ROLE:
                    if (null == r) return null;
                    let c = o.default.getRole(r.id, e.id);
                    if (null == c) return null;
                    return {
                        type: _.SelectOptionType.ROLE, value: c.id, label: c.name
                    };
                case i.SnowflakeSelectDefaultValueTypes.CHANNEL:
                    if (null == r) return null;
                    let E = s.default.getChannel(e.id);
                    if (null == E || E.guild_id !== r.id || n.length > 0 && !n.includes(E.type)) return null;
                    return {
                        type: _.SelectOptionType.CHANNEL, value: E.id, label: E.name
                    }
            }
        }).filter(e => null !== e)
    }
}