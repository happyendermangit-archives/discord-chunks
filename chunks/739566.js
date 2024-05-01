function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        getMessageAuthor: function() {
            return I
        },
        getUserAuthor: function() {
            return f
        },
        useNullableMessageAuthor: function() {
            return E
        },
        useNullableUserAuthor: function() {
            return T
        }
    });
    var i = n("512722"),
        r = n.n(i),
        a = n("442837"),
        s = n("592125"),
        o = n("271383"),
        l = n("430824"),
        u = n("699516"),
        d = n("594174"),
        _ = n("51144");

    function c(e) {
        let t = E(e);
        return r()(null != t, "Result cannot be null because the message is not null"), t
    }

    function E(e) {
        var t;
        let n = (0, a.useStateFromStores)([s.default], () => null == e ? null : s.default.getChannel(e.channel_id)),
            i = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
            r = null == n ? void 0 : n.guild_id,
            c = (0, a.useStateFromStores)([o.default], () => null == r || null == i ? null : o.default.getMember(r, i)),
            E = (0, a.useStateFromStores)([d.default], () => d.default.getUser(i), [i]),
            I = _.default.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : E),
            {
                guild: T,
                guildRoles: f
            } = (0, a.useStateFromStoresObject)([l.default], () => {
                let e = l.default.getGuild(r),
                    t = null != e ? l.default.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                }
            }, [r]),
            h = (0, a.useStateFromStores)([u.default], () => null != i && (null == n ? void 0 : n.isPrivate()) ? u.default.getNickname(i) : null);
        return null == e ? null : S({
            user: e.author,
            channel: n,
            guild: T,
            guildRoles: f,
            userName: I,
            member: c,
            friendNickname: h
        })
    }

    function I(e) {
        let t = s.default.getChannel(e.channel_id);
        return f(e.author, t)
    }

    function T(e, t) {
        let n = null == e ? void 0 : e.id,
            i = null == t ? void 0 : t.guild_id,
            r = (0, a.useStateFromStores)([o.default], () => null == i || null == n ? null : o.default.getMember(i, n)),
            {
                guild: s,
                guildRoles: d
            } = (0, a.useStateFromStoresObject)([l.default], () => {
                let e = l.default.getGuild(i),
                    t = null != e ? l.default.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                }
            }, [i]),
            c = (0, a.useStateFromStores)([u.default], () => null != n && (null == t ? void 0 : t.isPrivate()) ? u.default.getNickname(n) : null),
            E = _.default.useName(e);
        return S({
            user: e,
            channel: t,
            guild: s,
            guildRoles: d,
            member: r,
            userName: E,
            friendNickname: c
        })
    }

    function f(e, t) {
        let n = null == e ? void 0 : e.id,
            i = null == t ? void 0 : t.guild_id,
            r = l.default.getGuild(i),
            a = null != i ? l.default.getRoles(i) : void 0,
            s = null == i || null == n ? null : o.default.getMember(i, n),
            d = null != n && null != t && t.isPrivate() ? u.default.getNickname(n) : null;
        return S({
            user: e,
            channel: t,
            guild: r,
            guildRoles: a,
            member: s,
            friendNickname: d
        })
    }

    function S(e) {
        var t, n, i, r;
        let {
            user: a,
            channel: s,
            guild: o,
            guildRoles: l,
            member: u,
            userName: d,
            friendNickname: c
        } = e, E = null == a ? "???" : null != d ? d : _.default.getName(a);
        return (null == a ? void 0 : a.id) == null || null == s ? {
            nick: E,
            colorString: void 0
        } : (null == o ? void 0 : o.id) == null ? {
            nick: null != c ? c : E,
            colorString: void 0
        } : null == u ? {
            nick: E,
            colorString: void 0
        } : {
            nick: null !== (n = u.nick) && void 0 !== n ? n : E,
            colorString: null !== (i = u.colorString) && void 0 !== i ? i : void 0,
            colorRoleName: null != u.colorRoleId && null != o ? null == l ? void 0 : null === (t = l[u.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
            colorRoleId: u.colorRoleId,
            iconRoleId: u.iconRoleId,
            guildMemberAvatar: u.avatar,
            clan: null !== (r = a.clan) && void 0 !== r ? r : void 0
        }
    }
}