function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MIN_REREQUEST_TIME: function() {
            return E
        },
        queryMentionables: function() {
            return p
        },
        queryChannels: function() {
            return m
        },
        getSnowflakeSelectDefaultValues: function() {
            return T
        }
    }), n("222007");
    var l = n("374158"),
        a = n("798609"),
        u = n("42203"),
        i = n("26989"),
        o = n("305961"),
        s = n("697218"),
        r = n("25292"),
        d = n("387111"),
        c = n("192112");
    let E = 1e3;

    function p(e, t, n) {
        let l = u.default.getChannel(n);
        if (null == l) return [];
        let i = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
            o = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
            {
                users: s,
                roles: E
            } = r.default.queryMentionResults({
                query: t,
                channel: l,
                canMentionEveryone: !1,
                canMentionHere: !1,
                canMentionUsers: i,
                canMentionRoles: o,
                includeAllGuildUsers: !0,
                includeNonMentionableRoles: !0,
                checkRecentlyTalkedOnEmptyQuery: !1,
                limit: 15
            }),
            p = s.map(e => {
                var t;
                let a = d.default.getNickname(l.getGuildId(), n, e.user);
                return {
                    type: c.SelectOptionType.USER,
                    value: e.user.id,
                    label: null !== (t = null != a ? a : e.user.globalName) && void 0 !== t ? t : e.user.username
                }
            }),
            m = E.map(e => ({
                type: c.SelectOptionType.ROLE,
                value: e.id,
                label: e.name
            }));
        return [...p, ...m]
    }

    function m(e, t, n) {
        let l = u.default.getChannel(t);
        if (null == l) return [];
        let a = r.default.queryApplicationCommandChannelResults({
                query: e,
                channel: l,
                channelTypes: n,
                limit: 15
            }),
            i = a.channels.map(e => ({
                type: c.SelectOptionType.CHANNEL,
                value: e.id,
                label: e.name
            }));
        return i
    }

    function T(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null == e) return;
        let a = o.default.getGuild(t);
        return e.map(e => {
            switch (e.type) {
                case l.SnowflakeSelectDefaultValueTypes.USER:
                    var t;
                    let r = s.default.getUser(e.id);
                    if (null == r) return null;
                    let d = null != a ? i.default.getNick(a.id, r.id) : void 0;
                    return {
                        type: c.SelectOptionType.USER, value: r.id, label: null !== (t = null != d ? d : r.globalName) && void 0 !== t ? t : r.username
                    };
                case l.SnowflakeSelectDefaultValueTypes.ROLE:
                    if (null == a) return null;
                    let E = o.default.getRole(a.id, e.id);
                    if (null == E) return null;
                    return {
                        type: c.SelectOptionType.ROLE, value: E.id, label: E.name
                    };
                case l.SnowflakeSelectDefaultValueTypes.CHANNEL:
                    if (null == a) return null;
                    let p = u.default.getChannel(e.id);
                    if (null == p || p.guild_id !== a.id || n.length > 0 && !n.includes(p.type)) return null;
                    return {
                        type: c.SelectOptionType.CHANNEL, value: p.id, label: p.name
                    }
            }
        }).filter(e => null !== e)
    }
}