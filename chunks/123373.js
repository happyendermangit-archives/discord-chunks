function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildPermissionContext: function() {
            return I
        },
        usePermissionContext: function() {
            return T
        },
        computeCommandContextType: function() {
            return C
        },
        getContextGuildId: function() {
            return N
        }
    });
    var i = n("884691"),
        l = n("316693"),
        a = n("446674"),
        o = n("798609"),
        s = n("38654"),
        r = n("845579"),
        u = n("233069"),
        d = n("271938"),
        c = n("42203"),
        p = n("26989"),
        f = n("957255"),
        m = n("697218"),
        _ = n("49111");

    function I(e, t) {
        var n, i, l, a, o;
        let f;
        f = e instanceof u.ChannelRecordBase && e.isThread() ? null !== (l = c.default.getChannel(e.parent_id)) && void 0 !== l ? l : e : e;
        let _ = N(f),
            I = r.ViewNsfwCommands.getSetting(),
            T = d.default.getId(),
            C = null !== (a = null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== a && a,
            g = null != _ && null !== (o = null === (i = p.default.getMember(_, T)) || void 0 === i ? void 0 : i.roles) && void 0 !== o ? o : [],
            M = s.default.isViewingRoles(_),
            {
                computedPermissions: O,
                hasBaseAccessPermissions: S
            } = E(f);
        return {
            context: f,
            userId: T,
            roleIds: g,
            isImpersonating: M,
            commandType: t,
            computedPermissions: O,
            hasBaseAccessPermissions: S,
            allowNsfw: A(f, C, I)
        }
    }

    function T(e, t) {
        let n = i.useMemo(() => {
                if (e instanceof u.ChannelRecordBase && e.isThread()) {
                    var t;
                    return null !== (t = c.default.getChannel(e.parent_id)) && void 0 !== t ? t : e
                }
                return e
            }, [e]),
            l = N(n),
            o = r.ViewNsfwCommands.useSetting(),
            f = (0, a.useStateFromStores)([d.default], () => d.default.getId()),
            _ = (0, a.useStateFromStores)([m.default], () => {
                var e, t;
                return null !== (t = null === (e = m.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
            }),
            I = (0, a.useStateFromStoresArray)([p.default], () => {
                var e, t;
                return null != l && null !== (t = null === (e = p.default.getMember(l, f)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
            }),
            T = (0, a.useStateFromStores)([s.default], () => s.default.isViewingRoles(l));
        return i.useMemo(() => {
            let {
                computedPermissions: e,
                hasBaseAccessPermissions: i
            } = E(n);
            return {
                context: n,
                userId: f,
                roleIds: I,
                commandType: t,
                isImpersonating: T,
                computedPermissions: e,
                hasBaseAccessPermissions: i,
                allowNsfw: A(n, _, o)
            }
        }, [t, n, T, I, f, _, o])
    }

    function A(e, t, n) {
        return !!t && (!(e instanceof u.ChannelRecordBase) || (null != e.guild_id ? e.nsfw : n))
    }

    function E(e) {
        let t;
        if (e instanceof u.ChannelRecordBase && e.isPrivate()) return {
            computedPermissions: l.default.deserialize(0),
            hasBaseAccessPermissions: !0
        };
        let n = f.default.computePermissions(e);
        return t = !!l.default.has(n, _.Permissions.ADMINISTRATOR) || (e instanceof u.ChannelRecordBase ? l.default.has(n, _.Permissions.VIEW_CHANNEL) && l.default.has(n, _.Permissions.USE_APPLICATION_COMMANDS) : l.default.has(n, _.Permissions.VIEW_CHANNEL)), {
            computedPermissions: n,
            hasBaseAccessPermissions: t
        }
    }

    function C(e, t) {
        return e instanceof u.ChannelRecordBase && null == e.guild_id ? e.type === _.ChannelTypes.DM && e.getRecipientId() === t ? o.InteractionContextType.BOT_DM : o.InteractionContextType.PRIVATE_CHANNEL : o.InteractionContextType.GUILD
    }

    function N(e) {
        return e instanceof u.ChannelRecordBase ? e.guild_id : e.id
    }
}