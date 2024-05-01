function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRoleIconProps: function() {
            return o
        },
        useRoleIcon: function() {
            return l
        },
        useRoleIconForPreview: function() {
            return u
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("430824"),
        s = n("829883");

    function o(e, t) {
        var n;
        let {
            customIconSrc: i,
            unicodeEmoji: r
        } = null !== (n = (0, s.getRoleIconData)(e, t)) && void 0 !== n ? n : {};
        if (null != i || null != r) return {
            src: i,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: r
        }
    }

    function l(e) {
        let {
            guildId: t,
            roleId: n,
            size: l = 20
        } = e, {
            guild: u,
            roles: d
        } = (0, r.useStateFromStoresObject)([a.default], () => ({
            guild: a.default.getGuild(t),
            roles: a.default.getRoles(t)
        }), [t]);
        return i.useMemo(() => {
            if (null == u || null == n) return;
            let e = d[n];
            if ((0, s.canGuildUseRoleIcons)(u, e)) return o(e, l)
        }, [u, d, n, l])
    }

    function u(e, t) {
        let n = (0, r.useStateFromStores)([a.default], () => a.default.getGuild(e));
        if (null != n && (0, s.canGuildUseRoleIcons)(n, t)) return o(t)
    }
}