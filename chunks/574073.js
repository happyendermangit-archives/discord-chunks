function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        },
        useNullableMessageAuthor: function() {
            return _
        },
        getMessageAuthor: function() {
            return h
        },
        useNullableUserAuthor: function() {
            return E
        },
        getUserAuthor: function() {
            return g
        }
    });
    var i = n("627445"),
        s = n.n(i),
        r = n("446674"),
        a = n("42203"),
        o = n("26989"),
        l = n("305961"),
        u = n("27618"),
        d = n("697218"),
        c = n("158998");

    function f(e) {
        let t = _(e);
        return s(null != t, "Result cannot be null because the message is not null"), t
    }

    function _(e) {
        var t;
        let n = (0, r.useStateFromStores)([a.default], () => null == e ? null : a.default.getChannel(e.channel_id)),
            i = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
            s = null == n ? void 0 : n.guild_id,
            f = (0, r.useStateFromStores)([o.default], () => null == s || null == i ? null : o.default.getMember(s, i)),
            _ = (0, r.useStateFromStores)([d.default], () => d.default.getUser(i), [i]),
            h = c.default.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : _),
            E = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(s)),
            g = (0, r.useStateFromStores)([u.default], () => null != i && (null == n ? void 0 : n.isPrivate()) ? u.default.getNickname(i) : null);
        return null == e ? null : m({
            user: e.author,
            channel: n,
            guild: E,
            userName: h,
            member: f,
            friendNickname: g
        })
    }

    function h(e) {
        let t = a.default.getChannel(e.channel_id);
        return g(e.author, t)
    }

    function E(e, t) {
        let n = null == e ? void 0 : e.id,
            i = null == t ? void 0 : t.guild_id,
            s = (0, r.useStateFromStores)([o.default], () => null == i || null == n ? null : o.default.getMember(i, n)),
            a = (0, r.useStateFromStores)([l.default], () => l.default.getGuild(i)),
            d = (0, r.useStateFromStores)([u.default], () => null != n && (null == t ? void 0 : t.isPrivate()) ? u.default.getNickname(n) : null),
            f = c.default.useName(e);
        return m({
            user: e,
            channel: t,
            guild: a,
            member: s,
            userName: f,
            friendNickname: d
        })
    }

    function g(e, t) {
        let n = null == e ? void 0 : e.id,
            i = null == t ? void 0 : t.guild_id,
            s = l.default.getGuild(i),
            r = null == i || null == n ? null : o.default.getMember(i, n),
            a = null != n && null != t && t.isPrivate() ? u.default.getNickname(n) : null;
        return m({
            user: e,
            channel: t,
            guild: s,
            member: r,
            friendNickname: a
        })
    }

    function m(e) {
        var t, n, i;
        let {
            user: s,
            channel: r,
            guild: a,
            member: o,
            userName: l,
            friendNickname: u
        } = e, d = null == s ? "???" : null != l ? l : c.default.getName(s);
        return (null == s ? void 0 : s.id) == null || null == r ? {
            nick: d,
            colorString: void 0
        } : (null == a ? void 0 : a.id) == null ? {
            nick: null != u ? u : d,
            colorString: void 0
        } : null == o ? {
            nick: d,
            colorString: void 0
        } : {
            nick: null !== (n = o.nick) && void 0 !== n ? n : d,
            colorString: null !== (i = o.colorString) && void 0 !== i ? i : void 0,
            colorRoleName: null != o.colorRoleId ? null == a ? void 0 : null === (t = a.roles[o.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
            iconRoleId: o.iconRoleId,
            guildMemberAvatar: o.avatar
        }
    }
}