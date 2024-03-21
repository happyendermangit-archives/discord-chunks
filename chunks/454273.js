function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAdmin: function() {
            return p
        },
        getRoleRowData: function() {
            return S
        },
        sortRoles: function() {
            return v
        },
        getNoRolesRow: function() {
            return T
        },
        isEveryoneRoleId: function() {
            return A
        },
        isNotEveryoneRoleId: function() {
            return C
        },
        getRolesRows: function() {
            return N
        },
        getRolesRowsWithPermissionDisabled: function() {
            return R
        },
        getExistingRolesRows: function() {
            return O
        },
        getExistingRolesRowWithPermissionDisabled: function() {
            return D
        },
        getMembersRows: function() {
            return U
        },
        getExistingMembersRows: function() {
            return w
        },
        getRowTypeLabel: function() {
            return k
        },
        getRemoveTooltipHint: function() {
            return V
        },
        flipEveryonePermission: function() {
            return G
        },
        toggleChannelEveryonePermission: function() {
            return F
        },
        grantUserChannelAccess: function() {
            return x
        },
        isPrivateGuildChannel: function() {
            return B
        },
        hasCustomRoles: function() {
            return H
        },
        canCreatePrivateChannel: function() {
            return Y
        },
        getPrivateChannelHintText: function() {
            return K
        },
        extractPermissionOverwrites: function() {
            return j
        }
    }), n("424973");
    var i = n("316693"),
        s = n("509043"),
        r = n("318738"),
        a = n("798609"),
        o = n("233069"),
        l = n("26989"),
        u = n("697218"),
        d = n("404008"),
        c = n("449008"),
        _ = n("991170"),
        f = n("299039"),
        E = n("158998"),
        h = n("606762"),
        g = n("49111"),
        m = n("782340");

    function p(e) {
        return i.has(e.permissions, g.Permissions.ADMINISTRATOR)
    }

    function S(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let a = (n = e, i.has(n.permissions, g.Permissions.ADMINISTRATOR) ? h.RowType.ADMINISTRATOR : h.RowType.ROLE);
        return {
            rowType: a,
            colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, s.int2hex)(g.DEFAULT_ROLE_COLOR),
            name: e.name,
            id: e.id,
            disabled: p(e) || r,
            key: "".concat(a, ":").concat(e.id),
            tags: e.tags
        }
    }

    function v(e, t) {
        let n = p(e) ? 0 : 1,
            i = p(t) ? 0 : 1;
        return n !== i ? n - i : t.position - e.position
    }

    function T() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
        return [{
            rowType: h.RowType.EMPTY_STATE,
            colorString: (0, s.int2hex)(g.DEFAULT_ROLE_COLOR),
            name: e,
            disabled: !0,
            id: "EMPTY_STATE"
        }]
    }

    function I(e, t, n, s) {
        let r = u.default.getCurrentUser();
        if (null == r) return !1;
        if (null == e) return r.id !== t;
        let a = e.permissionOverwrites[t];
        return (null == s ? void 0 : s[t]) != null && (a = s[t]), null == a || !i.has(a.allow, n)
    }

    function A(e, t) {
        return f.default.castGuildIdAsEveryoneGuildRoleId(e) === t
    }

    function C(e, t) {
        return !A(e, t)
    }

    function y(e, t) {
        return !A(e.id, t.id)
    }

    function N(e, t, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
        return Object.values(t).filter(t => !p(t) && I(n, t.id, i) && y(e, t) && s(t.name)).sort(v).map(e => S(e))
    }

    function R(e, t, n, s) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
        return Object.values(t).filter(t => !p(t) && I(n, t.id, s) && y(e, t) && r(t.name)).sort(v).map(e => S(e, i.has(e.permissions, s)))
    }

    function O(e, t, n, i, s) {
        var r, a, o, l, u;
        let d = [];
        return 0 === (d = (r = e, a = t, o = n, l = i, u = s, Object.values(a).filter(e => p(e) || !I(o, e.id, l, u) && y(r, e))).sort(v).map(e => S(e))).length ? T(m.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : d
    }

    function D(e, t, n, s, r) {
        var a, o, l, u, d;
        let c = [];
        return 0 === (c = (a = e, o = t, l = n, u = s, d = r, Object.values(o).filter(e => {
            var t;
            return p(e) || !I(l, e.id, u, d) && y(a, e) || i.has(i.combine(e.permissions, null === (t = l.permissionOverwrites[e.id]) || void 0 === t ? void 0 : t.allow), u)
        })).sort(v).map(e => S(e, i.has(e.permissions, s)))).length ? T(m.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : c
    }

    function P(e, t) {
        var n;
        return null !== (n = l.default.getNick(t.id, e.id)) && void 0 !== n ? n : E.default.getName(e)
    }

    function L(e, t) {
        return t.isOwner(e)
    }

    function M(e, t) {
        var n, i, s;
        let r = (i = e, t.isOwner(i) ? h.RowType.OWNER : h.RowType.MEMBER);
        return {
            rowType: r,
            name: P(e, t),
            nickname: null !== (n = l.default.getNick(t.id, e.id)) && void 0 !== n ? n : null,
            username: E.default.getName(e),
            id: e.id,
            avatarURL: e.getAvatarURL(t.id, 24),
            bot: e.bot,
            verifiedBot: e.isVerifiedBot(),
            disabled: (s = e, t.isOwner(s)),
            key: "".concat(r, ":").concat(e.id)
        }
    }

    function b(e, t) {
        return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
    }

    function U(e, t, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
        return e.map(u.default.getUser).filter(c.isNotNullish).filter(e => !n.isOwner(e) && I(t, e.id, i) && (s(P(e, n)) || s(e.username) || s(e.discriminator))).map(e => M(e, n)).sort(b)
    }

    function w(e, t, n, i, s) {
        var r, a, o, l, d;
        return (r = e, a = t, o = n, l = i, d = s, r.map(u.default.getUser).filter(c.isNotNullish).filter(e => {
            var t;
            return !I(a, e.id, l, d) || (t = e, o.isOwner(t))
        })).map(e => M(e, n)).sort(b)
    }

    function k(e, t) {
        switch (e) {
            case h.RowType.ROLE:
                return m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
            case h.RowType.OWNER:
                return m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
            case h.RowType.ADMINISTRATOR:
                return m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
            case h.RowType.MEMBER:
                return t ? m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
            case h.RowType.USER:
                return m.default.Messages.USER;
            case h.RowType.GUILD:
                return m.default.Messages.SERVER;
            case h.RowType.EMPTY_STATE:
                return null
        }
    }

    function V(e) {
        switch (e) {
            case h.RowType.ROLE:
                return m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
            case h.RowType.OWNER:
                return m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
            case h.RowType.ADMINISTRATOR:
                return m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
            case h.RowType.MEMBER:
                return m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
            case h.RowType.EMPTY_STATE:
            default:
                return null
        }
    }

    function G(e, t, n) {
        let s = e.permissionOverwrites[e.guild_id];
        null == s && (s = _.makeEveryoneOverwrite(e.guild_id));
        let r = {
            ...s
        };
        return r.deny = i.remove(r.deny, t), r.allow = i.remove(r.allow, t), !n && (r.deny = i.add(r.deny, t)), r
    }

    function F(e, t, n) {
        let i = G(e, t, n);
        (0, r.updatePermission)(e, i.id, i.allow, i.deny)
    }

    function x(e, t) {
        let n = u.default.getCurrentUser();
        if (null == n) return;
        let s = e.permissionOverwrites[n.id];
        if (null == s) {
            let s = {
                id: n.id,
                type: a.PermissionOverwriteType.MEMBER,
                allow: i.add(_.NONE, t),
                deny: _.NONE
            };
            (0, r.savePermissionUpdates)(e.id, [s], !0)
        } else {
            let {
                allow: n,
                deny: a
            } = s;
            n = i.add(n, t), (0, r.updatePermission)(e, s.id, n, a)
        }
    }

    function B(e, t) {
        if (null == e) return !1;
        let n = e.permissionOverwrites[e.guild_id];
        return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && i.has(n.deny, e.accessPermissions)
    }

    function H(e, t) {
        let n = Object.keys(t);
        return 0 !== n.length && (1 !== n.length || n[0] !== e.id)
    }

    function Y(e, t, n) {
        return e === g.ChannelTypes.GUILD_TEXT || e === g.ChannelTypes.GUILD_ANNOUNCEMENT ? t : !(0, o.isGuildVocalChannelType)(e) && e !== g.ChannelTypes.GUILD_CATEGORY || t && n
    }

    function K(e) {
        switch (e) {
            case g.ChannelTypes.GUILD_TEXT:
            case g.ChannelTypes.GUILD_ANNOUNCEMENT:
                return m.default.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
            case g.ChannelTypes.GUILD_VOICE:
                return m.default.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
            case g.ChannelTypes.GUILD_CATEGORY:
                return m.default.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
            default:
                return null
        }
    }

    function j(e, t) {
        let n = [];
        return Object.values(e).forEach(e => {
            let {
                row: i
            } = e;
            null != i.id && "" !== i.id && (i.rowType === h.RowType.ROLE ? n.push((0, d.permissionOverwriteForRole)(i.id, t)) : i.rowType === h.RowType.MEMBER && n.push((0, d.permissionOverwriteForUser)(i.id, t)))
        }), n
    }
}