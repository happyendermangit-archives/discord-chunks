function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        MIN_REREQUEST_TIME: function() {
            return E
        },
        getSnowflakeSelectDefaultValues: function() {
            return m
        },
        queryChannels: function() {
            return T
        },
        queryMentionables: function() {
            return p
        }
    }), l("47120");
    var n = l("524846"),
        a = l("911969"),
        u = l("592125"),
        i = l("271383"),
        s = l("430824"),
        o = l("594174"),
        r = l("483360"),
        d = l("5192"),
        c = l("280501");
    let E = 1e3;

    function p(e, t, l) {
        let n = u.default.getChannel(l);
        if (null == n) return [];
        let i = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
            s = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
            {
                users: o,
                roles: E
            } = r.default.queryMentionResults({
                query: t,
                channel: n,
                canMentionEveryone: !1,
                canMentionHere: !1,
                canMentionUsers: i,
                canMentionRoles: s,
                includeAllGuildUsers: !0,
                includeNonMentionableRoles: !0,
                checkRecentlyTalkedOnEmptyQuery: !1,
                limit: 15
            }),
            p = o.map(e => {
                var t;
                let a = d.default.getNickname(n.getGuildId(), l, e.user);
                return {
                    type: c.SelectOptionType.USER,
                    value: e.user.id,
                    label: null !== (t = null != a ? a : e.user.globalName) && void 0 !== t ? t : e.user.username
                }
            });
        return [...p, ...E.map(e => ({
            type: c.SelectOptionType.ROLE,
            value: e.id,
            label: e.name
        }))]
    }

    function T(e, t, l) {
        let n = u.default.getChannel(t);
        return null == n ? [] : r.default.queryApplicationCommandChannelResults({
            query: e,
            channel: n,
            channelTypes: l,
            limit: 15
        }).channels.map(e => ({
            type: c.SelectOptionType.CHANNEL,
            value: e.id,
            label: e.name
        }))
    }

    function m(e, t) {
        let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null == e) return;
        let a = s.default.getGuild(t);
        return e.map(e => {
            switch (e.type) {
                case n.SnowflakeSelectDefaultValueTypes.USER:
                    var t;
                    let r = o.default.getUser(e.id);
                    if (null == r) return null;
                    let d = null != a ? i.default.getNick(a.id, r.id) : void 0;
                    return {
                        type: c.SelectOptionType.USER, value: r.id, label: null !== (t = null != d ? d : r.globalName) && void 0 !== t ? t : r.username
                    };
                case n.SnowflakeSelectDefaultValueTypes.ROLE:
                    if (null == a) return null;
                    let E = s.default.getRole(a.id, e.id);
                    if (null == E) return null;
                    return {
                        type: c.SelectOptionType.ROLE, value: E.id, label: E.name
                    };
                case n.SnowflakeSelectDefaultValueTypes.CHANNEL:
                    if (null == a) return null;
                    let p = u.default.getChannel(e.id);
                    if (null == p || p.guild_id !== a.id || l.length > 0 && !l.includes(p.type)) return null;
                    return {
                        type: c.SelectOptionType.CHANNEL, value: p.id, label: p.name
                    }
            }
        }).filter(e => null !== e)
    }
}