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
        s = n("442837"),
        a = n("592125"),
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
        let n = (0, s.useStateFromStores)([a.default], () => null == e ? null : a.default.getChannel(e.channel_id)),
            i = null == e ? void 0 : null === (t = e.author) || void 0 === t ? void 0 : t.id,
            r = null == n ? void 0 : n.guild_id,
            c = (0, s.useStateFromStores)([o.default], () => null == r || null == i ? null : o.default.getMember(r, i)),
            E = (0, s.useStateFromStores)([d.default], () => d.default.getUser(i), [i]),
            I = _.default.useName((null == e ? void 0 : e.author.bot) ? null == e ? void 0 : e.author : E),
            {
                guild: T,
                guildRoles: f
            } = (0, s.useStateFromStoresObject)([l.default], () => {
                let e = l.default.getGuild(r),
                    t = null != e ? l.default.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                }
            }, [r]),
            h = (0, s.useStateFromStores)([u.default], () => null != i && (null == n ? void 0 : n.isPrivate()) ? u.default.getNickname(i) : null);
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
        let t = a.default.getChannel(e.channel_id);
        return f(e.author, t)
    }

    function T(e, t) {
        let n = null == e ? void 0 : e.id,
            i = null == t ? void 0 : t.guild_id,
            r = (0, s.useStateFromStores)([o.default], () => null == i || null == n ? null : o.default.getMember(i, n)),
            {
                guild: a,
                guildRoles: d
            } = (0, s.useStateFromStoresObject)([l.default], () => {
                let e = l.default.getGuild(i),
                    t = null != e ? l.default.getRoles(e.id) : void 0;
                return {
                    guild: e,
                    guildRoles: t
                }
            }, [i]),
            c = (0, s.useStateFromStores)([u.default], () => null != n && (null == t ? void 0 : t.isPrivate()) ? u.default.getNickname(n) : null),
            E = _.default.useName(e);
        return S({
            user: e,
            channel: t,
            guild: a,
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
            s = null != i ? l.default.getRoles(i) : void 0,
            a = null == i || null == n ? null : o.default.getMember(i, n),
            d = null != n && null != t && t.isPrivate() ? u.default.getNickname(n) : null;
        return S({
            user: e,
            channel: t,
            guild: r,
            guildRoles: s,
            member: a,
            friendNickname: d
        })
    }

    function S(e) {
        var t, n, i;
        let {
            user: r,
            channel: s,
            guild: a,
            guildRoles: o,
            member: l,
            userName: u,
            friendNickname: d
        } = e, c = null == r ? "???" : null != u ? u : _.default.getName(r);
        return (null == r ? void 0 : r.id) == null || null == s ? {
            nick: c,
            colorString: void 0
        } : (null == a ? void 0 : a.id) == null ? {
            nick: null != d ? d : c,
            colorString: void 0
        } : null == l ? {
            nick: c,
            colorString: void 0
        } : {
            nick: null !== (n = l.nick) && void 0 !== n ? n : c,
            colorString: null !== (i = l.colorString) && void 0 !== i ? i : void 0,
            colorRoleName: null != l.colorRoleId && null != a ? null == o ? void 0 : null === (t = o[l.colorRoleId]) || void 0 === t ? void 0 : t.name : void 0,
            colorRoleId: l.colorRoleId,
            iconRoleId: l.iconRoleId,
            guildMemberAvatar: l.avatar
        }
    }
}