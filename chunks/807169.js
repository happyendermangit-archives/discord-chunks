function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildPermissionContext: function() {
            return f
        },
        computeCommandContextType: function() {
            return m
        },
        getContextGuildId: function() {
            return N
        },
        usePermissionContext: function() {
            return S
        }
    });
    var i = n("470079"),
        r = n("149765"),
        s = n("442837"),
        a = n("911969"),
        o = n("160404"),
        l = n("695346"),
        u = n("131704"),
        d = n("314897"),
        _ = n("592125"),
        c = n("271383"),
        E = n("496675"),
        I = n("594174"),
        T = n("981631");

    function f(e, t) {
        var n, i, r, s, a;
        let E;
        let T = N(E = e instanceof u.ChannelRecordBase && e.isThread() ? null !== (r = _.default.getChannel(e.parent_id)) && void 0 !== r ? r : e : e),
            f = l.ViewNsfwCommands.getSetting(),
            S = d.default.getId(),
            m = null !== (s = null === (n = I.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== s && s,
            O = null != T && null !== (a = null === (i = c.default.getMember(T, S)) || void 0 === i ? void 0 : i.roles) && void 0 !== a ? a : [],
            p = o.default.isViewingRoles(T),
            {
                computedPermissions: R,
                hasBaseAccessPermissions: C
            } = A(E);
        return {
            context: E,
            userId: S,
            roleIds: O,
            isImpersonating: p,
            commandType: t,
            computedPermissions: R,
            hasBaseAccessPermissions: C,
            allowNsfw: h(E, m, f)
        }
    }

    function S(e, t) {
        let n = i.useMemo(() => {
                if (e instanceof u.ChannelRecordBase && e.isThread()) {
                    var t;
                    return null !== (t = _.default.getChannel(e.parent_id)) && void 0 !== t ? t : e
                }
                return e
            }, [e]),
            r = N(n),
            a = l.ViewNsfwCommands.useSetting(),
            E = (0, s.useStateFromStores)([d.default], () => d.default.getId()),
            T = (0, s.useStateFromStores)([I.default], () => {
                var e, t;
                return null !== (t = null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t
            }),
            f = (0, s.useStateFromStoresArray)([c.default], () => {
                var e, t;
                return null != r && null !== (t = null === (e = c.default.getMember(r, E)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : []
            }),
            S = (0, s.useStateFromStores)([o.default], () => o.default.isViewingRoles(r));
        return i.useMemo(() => {
            let {
                computedPermissions: e,
                hasBaseAccessPermissions: i
            } = A(n);
            return {
                context: n,
                userId: E,
                roleIds: f,
                commandType: t,
                isImpersonating: S,
                computedPermissions: e,
                hasBaseAccessPermissions: i,
                allowNsfw: h(n, T, a)
            }
        }, [t, n, S, f, E, T, a])
    }

    function h(e, t, n) {
        return !!t && (!(e instanceof u.ChannelRecordBase) || (null != e.guild_id ? e.nsfw : n))
    }

    function A(e) {
        let t;
        if (e instanceof u.ChannelRecordBase && e.isPrivate()) return {
            computedPermissions: r.deserialize(0),
            hasBaseAccessPermissions: !0
        };
        let n = E.default.computePermissions(e);
        return t = !!r.has(n, T.Permissions.ADMINISTRATOR) || (e instanceof u.ChannelRecordBase ? r.has(n, T.Permissions.VIEW_CHANNEL) && r.has(n, T.Permissions.USE_APPLICATION_COMMANDS) : r.has(n, T.Permissions.VIEW_CHANNEL)), {
            computedPermissions: n,
            hasBaseAccessPermissions: t
        }
    }

    function m(e, t) {
        return e instanceof u.ChannelRecordBase && null == e.guild_id ? e.type === T.ChannelTypes.DM && e.getRecipientId() === t ? a.InteractionContextType.BOT_DM : a.InteractionContextType.PRIVATE_CHANNEL : a.InteractionContextType.GUILD
    }

    function N(e) {
        return e instanceof u.ChannelRecordBase ? e.guild_id : e.id
    }
}