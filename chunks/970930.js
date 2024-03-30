function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        getMessageAuthor: function() {
            return E
        },
        getUserAuthor: function() {
            return m
        },
        useNullableMessageAuthor: function() {
            return _
        },
        useNullableUserAuthor: function() {
            return p
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("898511"),
        a = n("935741"),
        u = n("957808"),
        s = n("306912"),
        l = n("776982"),
        c = n("208454"),
        f = n("830567");

    function d(e) {
        var t = _(e);
        return o()(null != t, "Result cannot be null because the message is not null"), t
    }

    function _(e) {
        var t, n = (0, i.useStateFromStores)([a.default], function() {
                return null == e ? null : a.default.getChannel(e.channel_id)
            }),
            r = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
            o = null == n ? void 0 : n.guild_id,
            d = (0, i.useStateFromStores)([u.default], function() {
                return null == o || null == r ? null : u.default.getMember(o, r)
            }),
            _ = (0, i.useStateFromStores)([c.default], function() {
                return c.default.getUser(r)
            }, [r]),
            E = f.default.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : _),
            p = (0, i.useStateFromStoresObject)([s.default], function() {
                var e = s.default.getGuild(o),
                    t = null != e ? s.default.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                }
            }, [o]),
            m = p.guild,
            I = p.guildRoles,
            h = (0, i.useStateFromStores)([l.default], function() {
                return null != r && (null == n ? void 0 : n.isPrivate()) ? l.default.getNickname(r) : null
            });
        return null == e ? null : y({
            user: e.author,
            channel: n,
            guild: m,
            guildRoles: I,
            userName: E,
            member: d,
            friendNickname: h
        })
    }

    function E(e) {
        var t = a.default.getChannel(e.channel_id);
        return m(e.author, t)
    }

    function p(e, t) {
        var n = null == e ? void 0 : e.id,
            r = null == t ? void 0 : t.guild_id,
            o = (0, i.useStateFromStores)([u.default], function() {
                return null == r || null == n ? null : u.default.getMember(r, n)
            }),
            a = (0, i.useStateFromStoresObject)([s.default], function() {
                var e = s.default.getGuild(r),
                    t = null != e ? s.default.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                }
            }, [r]),
            c = a.guild,
            d = a.guildRoles,
            _ = (0, i.useStateFromStores)([l.default], function() {
                return null != n && (null == t ? void 0 : t.isPrivate()) ? l.default.getNickname(n) : null
            }),
            E = f.default.useName(e);
        return y({
            user: e,
            channel: t,
            guild: c,
            guildRoles: d,
            member: o,
            userName: E,
            friendNickname: _
        })
    }

    function m(e, t) {
        var n = null == e ? void 0 : e.id,
            r = null == t ? void 0 : t.guild_id,
            o = s.default.getGuild(r),
            i = null != r ? s.default.getRoles(r) : void 0,
            a = null == r || null == n ? null : u.default.getMember(r, n),
            c = null != n && null != t && t.isPrivate() ? l.default.getNickname(n) : null;
        return y({
            user: e,
            channel: t,
            guild: o,
            guildRoles: i,
            member: a,
            friendNickname: c
        })
    }

    function y(e) {
        var t, n, r, o = e.user,
            i = e.channel,
            a = e.guild,
            u = e.guildRoles,
            s = e.member,
            l = e.userName,
            c = e.friendNickname,
            d = null == o ? "???" : null != l ? l : f.default.getName(o);
        return (null == o ? void 0 : o.id) == null || null == i ? {
            nick: d,
            colorString: void 0
        } : (null == a ? void 0 : a.id) == null ? {
            nick: null != c ? c : d,
            colorString: void 0
        } : null == s ? {
            nick: d,
            colorString: void 0
        } : {
            nick: null !== (n = s.nick) && void 0 !== n ? n : d,
            colorString: null !== (r = s.colorString) && void 0 !== r ? r : void 0,
            colorRoleName: null != s.colorRoleId && null != a ? null == u ? void 0 : null === (t = u[s.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
            colorRoleId: s.colorRoleId,
            iconRoleId: s.iconRoleId,
            guildMemberAvatar: s.avatar
        }
    }
}