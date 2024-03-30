function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildPermissionContext: function() {
            return y
        },
        computeCommandContextType: function() {
            return T
        },
        getContextGuildId: function() {
            return S
        },
        usePermissionContext: function() {
            return I
        }
    });
    var r = n("470079"),
        o = n("22287"),
        i = n("898511"),
        a = n("29570"),
        u = n("717744"),
        s = n("53867"),
        l = n("569492"),
        c = n("217014"),
        f = n("935741"),
        d = n("957808"),
        _ = n("29884"),
        E = n("208454"),
        p = n("281767");

    function m(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function y(e, t) {
        var n, r, o, i, a, _, p = S(o = m(e, l.ChannelRecordBase) && e.isThread() ? null !== (i = f.default.getChannel(e.parent_id)) && void 0 !== i ? i : e : e),
            y = s.ViewNsfwCommands.getSetting(),
            I = c.default.getId(),
            T = null !== (a = null === (n = E.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== a && a,
            v = null != p && null !== (_ = null === (r = d.default.getMember(p, I)) || void 0 === r ? void 0 : r.roles) && void 0 !== _ ? _ : [],
            g = u.default.isViewingRoles(p),
            A = O(o);
        return {
            context: o,
            userId: I,
            roleIds: v,
            isImpersonating: g,
            commandType: t,
            computedPermissions: A.computedPermissions,
            hasBaseAccessPermissions: A.hasBaseAccessPermissions,
            allowNsfw: h(o, T, y)
        }
    }

    function I(e, t) {
        var n = r.useMemo(function() {
                if (m(e, l.ChannelRecordBase) && e.isThread()) {
                    var t;
                    return null !== (t = f.default.getChannel(e.parent_id)) && void 0 !== t ? t : e
                }
                return e
            }, [e]),
            o = S(n),
            a = s.ViewNsfwCommands.useSetting(),
            _ = (0, i.useStateFromStores)([c.default], function() {
                return c.default.getId()
            }),
            p = (0, i.useStateFromStores)([E.default], function() {
                var e, t;
                return null !== (t = null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
            }),
            y = (0, i.useStateFromStoresArray)([d.default], function() {
                var e, t;
                return null != o && null !== (t = null === (e = d.default.getMember(o, _)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
            }),
            I = (0, i.useStateFromStores)([u.default], function() {
                return u.default.isViewingRoles(o)
            });
        return r.useMemo(function() {
            var e = O(n);
            return {
                context: n,
                userId: _,
                roleIds: y,
                commandType: t,
                isImpersonating: I,
                computedPermissions: e.computedPermissions,
                hasBaseAccessPermissions: e.hasBaseAccessPermissions,
                allowNsfw: h(n, p, a)
            }
        }, [t, n, I, y, _, p, a])
    }

    function h(e, t, n) {
        return !!t && (!m(e, l.ChannelRecordBase) || (null != e.guild_id ? e.nsfw : n))
    }

    function O(e) {
        if (m(e, l.ChannelRecordBase) && e.isPrivate()) return {
            computedPermissions: o.deserialize(0),
            hasBaseAccessPermissions: !0
        };
        var t, n = _.default.computePermissions(e);
        return t = !!o.has(n, p.Permissions.ADMINISTRATOR) || (m(e, l.ChannelRecordBase) ? o.has(n, p.Permissions.VIEW_CHANNEL) && o.has(n, p.Permissions.USE_APPLICATION_COMMANDS) : o.has(n, p.Permissions.VIEW_CHANNEL)), {
            computedPermissions: n,
            hasBaseAccessPermissions: t
        }
    }

    function T(e, t) {
        return m(e, l.ChannelRecordBase) && null == e.guild_id ? e.type === p.ChannelTypes.DM && e.getRecipientId() === t ? a.InteractionContextType.BOT_DM : a.InteractionContextType.PRIVATE_CHANNEL : a.InteractionContextType.GUILD
    }

    function S(e) {
        return m(e, l.ChannelRecordBase) ? e.guild_id : e.id
    }
}