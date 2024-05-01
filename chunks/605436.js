function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canCreatePrivateChannel: function() {
            return Y
        },
        extractPermissionOverwrites: function() {
            return W
        },
        flipEveryonePermission: function() {
            return k
        },
        getExistingMembersRows: function() {
            return G
        },
        getExistingRolesRowWithPermissionDisabled: function() {
            return D
        },
        getExistingRolesRows: function() {
            return v
        },
        getMembersRows: function() {
            return b
        },
        getNoRolesRow: function() {
            return N
        },
        getPrivateChannelHintText: function() {
            return j
        },
        getRemoveTooltipHint: function() {
            return B
        },
        getRoleRowData: function() {
            return A
        },
        getRolesRows: function() {
            return g
        },
        getRolesRowsWithPermissionDisabled: function() {
            return L
        },
        getRowTypeLabel: function() {
            return w
        },
        grantUserChannelAccess: function() {
            return x
        },
        hasCustomRoles: function() {
            return H
        },
        isAdmin: function() {
            return h
        },
        isEveryoneRoleId: function() {
            return O
        },
        isNotEveryoneRoleId: function() {
            return R
        },
        isPrivateGuildChannel: function() {
            return F
        },
        sortRoles: function() {
            return m
        },
        toggleChannelEveryonePermission: function() {
            return V
        }
    }), n("653041");
    var i = n("149765"),
        r = n("866442"),
        a = n("741361"),
        s = n("911969"),
        o = n("131704"),
        l = n("271383"),
        u = n("594174"),
        d = n("934415"),
        _ = n("823379"),
        c = n("700785"),
        E = n("709054"),
        I = n("51144"),
        T = n("71080"),
        f = n("981631"),
        S = n("689938");

    function h(e) {
        return i.has(e.permissions, f.Permissions.ADMINISTRATOR)
    }

    function A(e) {
        var t, n;
        let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let s = (n = e, i.has(n.permissions, f.Permissions.ADMINISTRATOR) ? T.RowType.ADMINISTRATOR : T.RowType.ROLE);
        return {
            rowType: s,
            colorString: null !== (t = e.colorString) && void 0 !== t ? t : (0, r.int2hex)(f.DEFAULT_ROLE_COLOR),
            name: e.name,
            id: e.id,
            disabled: h(e) || a,
            key: "".concat(s, ":").concat(e.id),
            tags: e.tags
        }
    }

    function m(e, t) {
        let n = h(e) ? 0 : 1,
            i = h(t) ? 0 : 1;
        return n !== i ? n - i : t.position - e.position
    }

    function N() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
        return [{
            rowType: T.RowType.EMPTY_STATE,
            colorString: (0, r.int2hex)(f.DEFAULT_ROLE_COLOR),
            name: e,
            disabled: !0,
            id: "EMPTY_STATE"
        }]
    }

    function p(e, t, n, r) {
        let a = u.default.getCurrentUser();
        if (null == a) return !1;
        if (null == e) return a.id !== t;
        let s = e.permissionOverwrites[t];
        return (null == r ? void 0 : r[t]) != null && (s = r[t]), null == s || !i.has(s.allow, n)
    }

    function O(e, t) {
        return E.default.castGuildIdAsEveryoneGuildRoleId(e) === t
    }

    function R(e, t) {
        return !O(e, t)
    }

    function C(e, t) {
        return !O(e.id, t.id)
    }

    function g(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
        return Object.values(t).filter(t => !h(t) && p(n, t.id, i) && C(e, t) && r(t.name)).sort(m).map(e => A(e))
    }

    function L(e, t, n, r) {
        let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
        return Object.values(t).filter(t => !h(t) && p(n, t.id, r) && C(e, t) && a(t.name)).sort(m).map(e => A(e, i.has(e.permissions, r)))
    }

    function v(e, t, n, i, r) {
        var a, s, o, l, u;
        let d = [];
        return 0 === (d = (a = e, s = t, o = n, l = i, u = r, Object.values(s).filter(e => h(e) || !p(o, e.id, l, u) && C(a, e))).sort(m).map(e => A(e))).length ? N(S.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : d
    }

    function D(e, t, n, r, a) {
        var s, o, l, u, d;
        let _ = [];
        return 0 === (_ = (s = e, o = t, l = n, u = r, d = a, Object.values(o).filter(e => {
            var t;
            return h(e) || !p(l, e.id, u, d) && C(s, e) || i.has(i.combine(e.permissions, null === (t = l.permissionOverwrites[e.id]) || void 0 === t ? void 0 : t.allow), u)
        })).sort(m).map(e => A(e, i.has(e.permissions, r)))).length ? N(S.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : _
    }

    function M(e, t) {
        var n;
        return null !== (n = l.default.getNick(t.id, e.id)) && void 0 !== n ? n : I.default.getName(e)
    }

    function y(e, t) {
        return t.isOwner(e)
    }

    function P(e, t) {
        var n, i, r;
        let a = (i = e, t.isOwner(i) ? T.RowType.OWNER : T.RowType.MEMBER);
        return {
            rowType: a,
            name: M(e, t),
            nickname: null !== (n = l.default.getNick(t.id, e.id)) && void 0 !== n ? n : null,
            username: I.default.getName(e),
            id: e.id,
            avatarURL: e.getAvatarURL(t.id, 24),
            bot: e.bot,
            verifiedBot: e.isVerifiedBot(),
            disabled: (r = e, t.isOwner(r)),
            key: "".concat(a, ":").concat(e.id)
        }
    }

    function U(e, t) {
        return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
    }

    function b(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => !0;
        return e.map(u.default.getUser).filter(_.isNotNullish).filter(e => !n.isOwner(e) && p(t, e.id, i) && (r(M(e, n)) || r(e.username) || r(e.discriminator))).map(e => P(e, n)).sort(U)
    }

    function G(e, t, n, i, r) {
        var a, s, o, l, d;
        return (a = e, s = t, o = n, l = i, d = r, a.map(u.default.getUser).filter(_.isNotNullish).filter(e => {
            var t;
            return !p(s, e.id, l, d) || (t = e, o.isOwner(t))
        })).map(e => P(e, n)).sort(U)
    }

    function w(e, t) {
        switch (e) {
            case T.RowType.ROLE:
                return S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
            case T.RowType.OWNER:
                return S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
            case T.RowType.ADMINISTRATOR:
                return S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
            case T.RowType.MEMBER:
                return t ? S.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
            case T.RowType.USER:
                return S.default.Messages.USER;
            case T.RowType.GUILD:
                return S.default.Messages.SERVER;
            case T.RowType.EMPTY_STATE:
                return null
        }
    }

    function B(e) {
        switch (e) {
            case T.RowType.ROLE:
                return S.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
            case T.RowType.OWNER:
                return S.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
            case T.RowType.ADMINISTRATOR:
                return S.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
            case T.RowType.MEMBER:
                return S.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
            case T.RowType.EMPTY_STATE:
            default:
                return null
        }
    }

    function k(e, t, n) {
        let r = e.permissionOverwrites[e.guild_id];
        null == r && (r = c.makeEveryoneOverwrite(e.guild_id));
        let a = {
            ...r
        };
        return a.deny = i.remove(a.deny, t), a.allow = i.remove(a.allow, t), !n && (a.deny = i.add(a.deny, t)), a
    }

    function V(e, t, n) {
        let i = k(e, t, n);
        (0, a.updatePermission)(e, i.id, i.allow, i.deny)
    }

    function x(e, t) {
        let n = u.default.getCurrentUser();
        if (null == n) return;
        let r = e.permissionOverwrites[n.id];
        if (null == r) {
            let r = {
                id: n.id,
                type: s.PermissionOverwriteType.MEMBER,
                allow: i.add(c.NONE, t),
                deny: c.NONE
            };
            return (0, a.savePermissionUpdates)(e.id, [r], !0)
        } {
            let {
                allow: n,
                deny: s
            } = r;
            return n = i.add(n, t), (0, a.updatePermission)(e, r.id, n, s)
        }
    }

    function F(e, t) {
        if (null == e) return !1;
        let n = e.permissionOverwrites[e.guild_id];
        return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && i.has(n.deny, e.accessPermissions)
    }

    function H(e, t) {
        let n = Object.keys(t);
        return 0 !== n.length && (1 !== n.length || n[0] !== e.id)
    }

    function Y(e, t, n) {
        return e === f.ChannelTypes.GUILD_TEXT || e === f.ChannelTypes.GUILD_ANNOUNCEMENT ? t : !(0, o.isGuildVocalChannelType)(e) && e !== f.ChannelTypes.GUILD_CATEGORY || t && n
    }

    function j(e) {
        switch (e) {
            case f.ChannelTypes.GUILD_TEXT:
            case f.ChannelTypes.GUILD_ANNOUNCEMENT:
                return S.default.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
            case f.ChannelTypes.GUILD_VOICE:
                return S.default.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
            case f.ChannelTypes.GUILD_CATEGORY:
                return S.default.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
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
            null != i.id && "" !== i.id && (i.rowType === T.RowType.ROLE ? n.push((0, d.permissionOverwriteForRole)(i.id, t)) : i.rowType === T.RowType.MEMBER && n.push((0, d.permissionOverwriteForUser)(i.id, t)))
        }), n
    }
}