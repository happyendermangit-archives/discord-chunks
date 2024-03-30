function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MIN_REREQUEST_TIME: function() {
            return m
        },
        getSnowflakeSelectDefaultValues: function() {
            return S
        },
        queryChannels: function() {
            return T
        },
        queryMentionables: function() {
            return f
        }
    });
    var l = n("414194"),
        a = n("29570"),
        u = n("935741"),
        o = n("957808"),
        r = n("306912"),
        i = n("208454"),
        s = n("378309"),
        c = n("62957"),
        d = n("162074");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, l = Array(t); n < t; n++) l[n] = e[n];
        return l
    }

    function E(e) {
        return function(e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var m = 1e3;

    function f(e, t, n) {
        var l = u.default.getChannel(n);
        if (null == l) return [];
        var o = e === a.ComponentType.USER_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
            r = e === a.ComponentType.ROLE_SELECT || e === a.ComponentType.MENTIONABLE_SELECT,
            i = s.default.queryMentionResults({
                query: t,
                channel: l,
                canMentionEveryone: !1,
                canMentionHere: !1,
                canMentionUsers: o,
                canMentionRoles: r,
                includeAllGuildUsers: !0,
                includeNonMentionableRoles: !0,
                checkRecentlyTalkedOnEmptyQuery: !1,
                limit: 15
            }),
            p = i.users,
            m = i.roles,
            f = p.map(function(e) {
                var t, a = c.default.getNickname(l.getGuildId(), n, e.user);
                return {
                    type: d.SelectOptionType.USER,
                    value: e.user.id,
                    label: null !== (t = null != a ? a : e.user.globalName) && void 0 !== t ? t : e.user.username
                }
            }),
            T = m.map(function(e) {
                return {
                    type: d.SelectOptionType.ROLE,
                    value: e.id,
                    label: e.name
                }
            });
        return E(f).concat(E(T))
    }

    function T(e, t, n) {
        var l = u.default.getChannel(t);
        return null == l ? [] : s.default.queryApplicationCommandChannelResults({
            query: e,
            channel: l,
            channelTypes: n,
            limit: 15
        }).channels.map(function(e) {
            return {
                type: d.SelectOptionType.CHANNEL,
                value: e.id,
                label: e.name
            }
        })
    }

    function S(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (null != e) {
            var a = r.default.getGuild(t);
            return e.map(function(e) {
                switch (e.type) {
                    case l.SnowflakeSelectDefaultValueTypes.USER:
                        var t, s = i.default.getUser(e.id);
                        if (null == s) return null;
                        var c = null != a ? o.default.getNick(a.id, s.id) : void 0;
                        return {
                            type: d.SelectOptionType.USER, value: s.id, label: null !== (t = null != c ? c : s.globalName) && void 0 !== t ? t : s.username
                        };
                    case l.SnowflakeSelectDefaultValueTypes.ROLE:
                        if (null == a) return null;
                        var p = r.default.getRole(a.id, e.id);
                        if (null == p) return null;
                        return {
                            type: d.SelectOptionType.ROLE, value: p.id, label: p.name
                        };
                    case l.SnowflakeSelectDefaultValueTypes.CHANNEL:
                        if (null == a) return null;
                        var E = u.default.getChannel(e.id);
                        if (null == E || E.guild_id !== a.id || n.length > 0 && !n.includes(E.type)) return null;
                        return {
                            type: d.SelectOptionType.CHANNEL, value: E.id, label: E.name
                        }
                }
            }).filter(function(e) {
                return null !== e
            })
        }
    }
}