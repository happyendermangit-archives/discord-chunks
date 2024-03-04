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
            return C
        },
        isNotEveryoneRoleId: function() {
            return A
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
            return j
        },
        extractPermissionOverwrites: function() {
            return W
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
        f = n("991170"),
        _ = n("299039"),
        h = n("158998"),
        E = n("606762"),
        g = n("49111"),
        m = n("782340");

    function p(e) {
        return i.default.has(e.permissions, g.Permissions.ADMINISTRATOR)
    }

    function S(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let a = (n = e, i.default.has(n.permissions, g.Permissions.ADMINISTRATOR) ? E.RowType.ADMINISTRATOR : E.RowType.ROLE);
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
            rowType: E.RowType.EMPTY_STATE,
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
        return (null == s ? void 0 : s[t]) != null && (a = s[t]), null == a || !i.default.has(a.allow, n)
    }

    function C(e, t) {
        return _.default.castGuildIdAsEveryoneGuildRoleId(e) === t
    }

    function A(e, t) {
        return !C(e, t)
    }

    function y(e, t) {
        return !C(e.id, t.id)
    }

    function N(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0;
        return null == e.roles ? [] : Object.values(e.roles).filter(s => !p(s) && I(t, s.id, n) && y(e, s) && i(s.name)).sort(v).map(e => S(e))
    }

    function R(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !0;
        return null == e.roles ? [] : Object.values(e.roles).filter(i => !p(i) && I(t, i.id, n) && y(e, i) && s(i.name)).sort(v).map(e => S(e, i.default.has(e.permissions, n)))
    }

    function O(e, t, n, i) {
        var s, r, a, o;
        let l = [];
        if (null == e.roles) return l;
        return 0 === (l = (s = e, r = t, a = n, o = i, Object.values(s.roles).filter(e => p(e) || !I(r, e.id, a, o) && y(s, e))).sort(v).map(e => S(e))).length ? T(m.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : l
    }

    function D(e, t, n, s) {
        var r, a, o, l;
        let u = [];
        if (null == e.roles) return u;
        return 0 === (u = (r = e, a = t, o = n, l = s, Object.values(r.roles).filter(e => {
            var t;
            return p(e) || !I(a, e.id, o, l) && y(r, e) || i.default.has(i.default.combine(e.permissions, null === (t = a.permissionOverwrites[e.id]) || void 0 === t ? void 0 : t.allow), o)
        })).sort(v).map(e => S(e, i.default.has(e.permissions, n)))).length ? T(m.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : u
    }

    function P(e, t) {
        var n;
        return null !== (n = l.default.getNick(t.id, e.id)) && void 0 !== n ? n : h.default.getName(e)
    }

    function L(e, t) {
        return t.isOwner(e)
    }

    function M(e, t) {
        var n, i, s;
        let r = (i = e, t.isOwner(i) ? E.RowType.OWNER : E.RowType.MEMBER);
        return {
            rowType: r,
            name: P(e, t),
            nickname: null !== (n = l.default.getNick(t.id, e.id)) && void 0 !== n ? n : null,
            username: h.default.getName(e),
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
            case E.RowType.ROLE:
                return m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
            case E.RowType.OWNER:
                return m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
            case E.RowType.ADMINISTRATOR:
                return m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
            case E.RowType.MEMBER:
                return t ? m.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
            case E.RowType.USER:
                return m.default.Messages.USER;
            case E.RowType.GUILD:
                return m.default.Messages.SERVER;
            case E.RowType.EMPTY_STATE:
                return null
        }
    }

    function V(e) {
        switch (e) {
            case E.RowType.ROLE:
                return m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
            case E.RowType.OWNER:
                return m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
            case E.RowType.ADMINISTRATOR:
                return m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
            case E.RowType.MEMBER:
                return m.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
            case E.RowType.EMPTY_STATE:
            default:
                return null
        }
    }

    function G(e, t, n) {
        let s = e.permissionOverwrites[e.guild_id];
        null == s && (s = f.default.makeEveryoneOverwrite(e.guild_id));
        let r = {
            ...s
        };
        return r.deny = i.default.remove(r.deny, t), r.allow = i.default.remove(r.allow, t), !n && (r.deny = i.default.add(r.deny, t)), r
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
                allow: i.default.add(f.default.NONE, t),
                deny: f.default.NONE
            };
            (0, r.savePermissionUpdates)(e.id, [s], !0)
        } else {
            let {
                allow: n,
                deny: a
            } = s;
            n = i.default.add(n, t), (0, r.updatePermission)(e, s.id, n, a)
        }
    }

    function B(e, t) {
        if (null == e) return !1;
        let n = e.permissionOverwrites[e.guild_id];
        return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && i.default.has(n.deny, e.accessPermissions)
    }

    function H(e) {
        let t = Object.keys(e.roles);
        return 0 !== t.length && (1 !== t.length || t[0] !== e.id)
    }

    function Y(e, t, n) {
        return e === g.ChannelTypes.GUILD_TEXT || e === g.ChannelTypes.GUILD_ANNOUNCEMENT ? t : !(0, o.isGuildVocalChannelType)(e) && e !== g.ChannelTypes.GUILD_CATEGORY || t && n
    }

    function j(e) {
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

    function W(e, t) {
        let n = [];
        return Object.values(e).forEach(e => {
            let {
                row: i
            } = e;
            null != i.id && "" !== i.id && (i.rowType === E.RowType.ROLE ? n.push((0, d.permissionOverwriteForRole)(i.id, t)) : i.rowType === E.RowType.MEMBER && n.push((0, d.permissionOverwriteForUser)(i.id, t)))
        }), n
    }
}