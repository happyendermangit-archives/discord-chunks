function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canCreatePrivateChannel: function() {
            return x
        },
        extractPermissionOverwrites: function() {
            return W
        },
        flipEveryonePermission: function() {
            return B
        },
        getExistingMembersRows: function() {
            return w
        },
        getExistingRolesRowWithPermissionDisabled: function() {
            return C
        },
        getExistingRolesRows: function() {
            return R
        },
        getMembersRows: function() {
            return U
        },
        getNoRolesRow: function() {
            return T
        },
        getPrivateChannelHintText: function() {
            return Y
        },
        getRemoveTooltipHint: function() {
            return G
        },
        getRoleRowData: function() {
            return h
        },
        getRolesRows: function() {
            return b
        },
        getRolesRowsWithPermissionDisabled: function() {
            return N
        },
        getRowTypeLabel: function() {
            return k
        },
        grantUserChannelAccess: function() {
            return F
        },
        hasCustomRoles: function() {
            return H
        },
        isAdmin: function() {
            return I
        },
        isEveryoneRoleId: function() {
            return v
        },
        isNotEveryoneRoleId: function() {
            return g
        },
        isPrivateGuildChannel: function() {
            return V
        },
        sortRoles: function() {
            return O
        },
        toggleChannelEveryonePermission: function() {
            return j
        }
    });
    var r = n("22287"),
        o = n("194926"),
        i = n("768025"),
        a = n("29570"),
        u = n("569492"),
        s = n("957808"),
        l = n("208454"),
        c = n("115752"),
        f = n("162677"),
        d = n("359017"),
        _ = n("523018"),
        E = n("830567"),
        p = n("824691"),
        m = n("281767"),
        y = n("941504");

    function I(e) {
        return r.has(e.permissions, m.Permissions.ADMINISTRATOR)
    }

    function h(e) {
        var t, n, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var a = (t = e, r.has(t.permissions, m.Permissions.ADMINISTRATOR) ? p.RowType.ADMINISTRATOR : p.RowType.ROLE);
        return {
            rowType: a,
            colorString: null !== (n = e.colorString) && void 0 !== n ? n : (0, o.int2hex)(m.DEFAULT_ROLE_COLOR),
            name: e.name,
            id: e.id,
            disabled: I(e) || i,
            key: "".concat(a, ":").concat(e.id),
            tags: e.tags
        }
    }

    function O(e, t) {
        var n = I(e) ? 0 : 1,
            r = I(t) ? 0 : 1;
        return n !== r ? n - r : t.position - e.position
    }

    function T() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_NO_ROLES;
        return [{
            rowType: p.RowType.EMPTY_STATE,
            colorString: (0, o.int2hex)(m.DEFAULT_ROLE_COLOR),
            name: e,
            disabled: !0,
            id: "EMPTY_STATE"
        }]
    }

    function S(e, t, n, o) {
        var i = l.default.getCurrentUser();
        if (null == i) return !1;
        if (null == e) return i.id !== t;
        var a = e.permissionOverwrites[t];
        return (null == o ? void 0 : o[t]) != null && (a = o[t]), null == a || !r.has(a.allow, n)
    }

    function v(e, t) {
        return _.default.castGuildIdAsEveryoneGuildRoleId(e) === t
    }

    function g(e, t) {
        return !v(e, t)
    }

    function A(e, t) {
        return !v(e.id, t.id)
    }

    function b(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
            return !0
        };
        return Object.values(t).filter(function(t) {
            return !I(t) && S(n, t.id, r) && A(e, t) && o(t.name)
        }).sort(O).map(function(e) {
            return h(e)
        })
    }

    function N(e, t, n, o) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
            return !0
        };
        return Object.values(t).filter(function(t) {
            return !I(t) && S(n, t.id, o) && A(e, t) && i(t.name)
        }).sort(O).map(function(e) {
            return h(e, r.has(e.permissions, o))
        })
    }

    function R(e, t, n, r, o) {
        var i, a, u, s, l, c = [];
        return 0 === (c = (i = e, a = t, u = n, s = r, l = o, Object.values(a).filter(function(e) {
            return I(e) || !S(u, e.id, s, l) && A(i, e)
        })).sort(O).map(function(e) {
            return h(e)
        })).length ? T(y.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : c
    }

    function C(e, t, n, o, i) {
        var a, u, s, l, c, f = [];
        return 0 === (f = (a = e, u = t, s = n, l = o, c = i, Object.values(u).filter(function(e) {
            var t;
            return I(e) || !S(s, e.id, l, c) && A(a, e) || r.has(r.combine(e.permissions, null === (t = s.permissionOverwrites[e.id]) || void 0 === t ? void 0 : t.allow), l)
        })).sort(O).map(function(e) {
            return h(e, r.has(e.permissions, o))
        })).length ? T(y.default.Messages.CHANNEL_PERMISSIONS_NO_ROLES) : f
    }

    function P(e, t) {
        var n;
        return null !== (n = s.default.getNick(t.id, e.id)) && void 0 !== n ? n : E.default.getName(e)
    }

    function D(e, t) {
        return t.isOwner(e)
    }

    function L(e, t) {
        var n, r, o, i = (r = e, t.isOwner(r) ? p.RowType.OWNER : p.RowType.MEMBER);
        return {
            rowType: i,
            name: P(e, t),
            nickname: null !== (o = s.default.getNick(t.id, e.id)) && void 0 !== o ? o : null,
            username: E.default.getName(e),
            id: e.id,
            avatarURL: e.getAvatarURL(t.id, 24),
            bot: e.bot,
            verifiedBot: e.isVerifiedBot(),
            disabled: (n = e, t.isOwner(n)),
            key: "".concat(i, ":").concat(e.id)
        }
    }

    function M(e, t) {
        return e.rowType !== t.rowType ? e.rowType - t.rowType : e.name.toLocaleLowerCase().localeCompare(t.name.toLocaleLowerCase())
    }

    function U(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
            return !0
        };
        return e.map(l.default.getUser).filter(f.isNotNullish).filter(function(e) {
            return !n.isOwner(e) && S(t, e.id, r) && (o(P(e, n)) || o(e.username) || o(e.discriminator))
        }).map(function(e) {
            return L(e, n)
        }).sort(M)
    }

    function w(e, t, n, r, o) {
        var i, a, u, s, c;
        return (i = e, a = t, u = n, s = r, c = o, i.map(l.default.getUser).filter(f.isNotNullish).filter(function(e) {
            var t;
            return !S(a, e.id, s, c) || (t = e, u.isOwner(t))
        })).map(function(e) {
            return L(e, n)
        }).sort(M)
    }

    function k(e, t) {
        switch (e) {
            case p.RowType.ROLE:
                return y.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ROLE;
            case p.RowType.OWNER:
                return y.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_OWNER;
            case p.RowType.ADMINISTRATOR:
                return y.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_ADMINISTRATOR;
            case p.RowType.MEMBER:
                return t ? y.default.Messages.PRIVATE_CHANNEL_ADD_MEMBERS_MODAL_ROW_MEMBER : null;
            case p.RowType.USER:
                return y.default.Messages.USER;
            case p.RowType.GUILD:
                return y.default.Messages.SERVER;
            case p.RowType.EMPTY_STATE:
                return null
        }
    }

    function G(e) {
        switch (e) {
            case p.RowType.ROLE:
                return y.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
            case p.RowType.OWNER:
                return y.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
            case p.RowType.ADMINISTRATOR:
                return y.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
            case p.RowType.MEMBER:
                return y.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP;
            case p.RowType.EMPTY_STATE:
            default:
                return null
        }
    }

    function B(e, t, n) {
        var o = e.permissionOverwrites[e.guild_id];
        null == o && (o = d.makeEveryoneOverwrite(e.guild_id));
        var i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, o);
        return i.deny = r.remove(i.deny, t), i.allow = r.remove(i.allow, t), !n && (i.deny = r.add(i.deny, t)), i
    }

    function j(e, t, n) {
        var r = B(e, t, n);
        (0, i.updatePermission)(e, r.id, r.allow, r.deny)
    }

    function F(e, t) {
        var n = l.default.getCurrentUser();
        if (null != n) {
            var o = e.permissionOverwrites[n.id];
            if (null == o) {
                var u = {
                    id: n.id,
                    type: a.PermissionOverwriteType.MEMBER,
                    allow: r.add(d.NONE, t),
                    deny: d.NONE
                };
                (0, i.savePermissionUpdates)(e.id, [u], !0)
            } else {
                var s = o.allow,
                    c = o.deny;
                s = r.add(s, t), (0, i.updatePermission)(e, o.id, s, c)
            }
        }
    }

    function V(e, t) {
        if (null == e) return !1;
        var n = e.permissionOverwrites[e.guild_id];
        return (null == t ? void 0 : t[e.guild_id]) != null && (n = t[e.guild_id]), null != n && r.has(n.deny, e.accessPermissions)
    }

    function H(e, t) {
        var n = Object.keys(t);
        return 0 !== n.length && (1 !== n.length || n[0] !== e.id)
    }

    function x(e, t, n) {
        return e === m.ChannelTypes.GUILD_TEXT || e === m.ChannelTypes.GUILD_ANNOUNCEMENT ? t : !(0, u.isGuildVocalChannelType)(e) && e !== m.ChannelTypes.GUILD_CATEGORY || t && n
    }

    function Y(e) {
        switch (e) {
            case m.ChannelTypes.GUILD_TEXT:
            case m.ChannelTypes.GUILD_ANNOUNCEMENT:
                return y.default.Messages.PRIVATE_TEXT_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
            case m.ChannelTypes.GUILD_VOICE:
                return y.default.Messages.PRIVATE_VOICE_CHANNEL_CREATION_PERMISSION_MISSING_HINT.format();
            case m.ChannelTypes.GUILD_CATEGORY:
                return y.default.Messages.PRIVATE_CATEGORY_CREATION_PERMISSION_MISSING_HINT.format();
            default:
                return null
        }
    }

    function W(e, t) {
        var n = [];
        return Object.values(e).forEach(function(e) {
            var r = e.row;
            null != r.id && "" !== r.id && (r.rowType === p.RowType.ROLE ? n.push((0, c.permissionOverwriteForRole)(r.id, t)) : r.rowType === p.RowType.MEMBER && n.push((0, c.permissionOverwriteForUser)(r.id, t)))
        }), n
    }
}