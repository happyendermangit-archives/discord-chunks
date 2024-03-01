function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        },
        useNullableMessageAuthor: function() {
            return c
        },
        getMessageAuthor: function() {
            return g
        },
        useNullableUserAuthor: function() {
            return m
        },
        getUserAuthor: function() {
            return h
        }
    });
    var s = n("627445"),
        i = n.n(s),
        r = n("446674"),
        a = n("42203"),
        o = n("26989"),
        d = n("305961"),
        u = n("27618"),
        l = n("697218"),
        f = n("158998");

    function _(e) {
        let t = c(e);
        return i(null != t, "Result cannot be null because the message is not null"), t
    }

    function c(e) {
        var t;
        let n = (0, r.useStateFromStores)([a.default], () => null == e ? null : a.default.getChannel(e.channel_id)),
            s = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
            i = null == n ? void 0 : n.guild_id,
            _ = (0, r.useStateFromStores)([o.default], () => null == i || null == s ? null : o.default.getMember(i, s)),
            c = (0, r.useStateFromStores)([l.default], () => l.default.getUser(s), [s]),
            g = f.default.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : c),
            m = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(i)),
            h = (0, r.useStateFromStores)([u.default], () => null != s && (null == n ? void 0 : n.isPrivate()) ? u.default.getNickname(s) : null);
        return null == e ? null : v({
            user: e.author,
            channel: n,
            guild: m,
            userName: g,
            member: _,
            friendNickname: h
        })
    }

    function g(e) {
        let t = a.default.getChannel(e.channel_id);
        return h(e.author, t)
    }

    function m(e, t) {
        let n = null == e ? void 0 : e.id,
            s = null == t ? void 0 : t.guild_id,
            i = (0, r.useStateFromStores)([o.default], () => null == s || null == n ? null : o.default.getMember(s, n)),
            a = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(s)),
            l = (0, r.useStateFromStores)([u.default], () => null != n && (null == t ? void 0 : t.isPrivate()) ? u.default.getNickname(n) : null),
            _ = f.default.useName(e);
        return v({
            user: e,
            channel: t,
            guild: a,
            member: i,
            userName: _,
            friendNickname: l
        })
    }

    function h(e, t) {
        let n = null == e ? void 0 : e.id,
            s = null == t ? void 0 : t.guild_id,
            i = d.default.getGuild(s),
            r = null == s || null == n ? null : o.default.getMember(s, n),
            a = null != n && null != t && t.isPrivate() ? u.default.getNickname(n) : null;
        return v({
            user: e,
            channel: t,
            guild: i,
            member: r,
            friendNickname: a
        })
    }

    function v(e) {
        var t, n, s;
        let {
            user: i,
            channel: r,
            guild: a,
            member: o,
            userName: d,
            friendNickname: u
        } = e, l = null == i ? "???" : null != d ? d : f.default.getName(i);
        return (null == i ? void 0 : i.id) == null || null == r ? {
            nick: l,
            colorString: void 0
        } : (null == a ? void 0 : a.id) == null ? {
            nick: null != u ? u : l,
            colorString: void 0
        } : null == o ? {
            nick: l,
            colorString: void 0
        } : {
            nick: null !== (n = o.nick) && void 0 !== n ? n : l,
            colorString: null !== (s = o.colorString) && void 0 !== s ? s : void 0,
            colorRoleName: null != o.colorRoleId ? null == a ? void 0 : null === (t = a.roles[o.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
            iconRoleId: o.iconRoleId,
            guildMemberAvatar: o.avatar
        }
    }
}