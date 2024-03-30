function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRoleIconProps: function() {
            return u
        },
        useRoleIcon: function() {
            return s
        },
        useRoleIconForPreview: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("306912"),
        a = n("4231");

    function u(e, t) {
        var n, r = null !== (n = (0, a.getRoleIconData)(e, t)) && void 0 !== n ? n : {},
            o = r.customIconSrc,
            i = r.unicodeEmoji;
        if (null != o || null != i) return {
            src: o,
            name: e.name,
            roleId: e.id,
            size: t,
            unicodeEmoji: i
        }
    }

    function s(e) {
        var t = e.guildId,
            n = e.roleId,
            s = e.size,
            l = void 0 === s ? 20 : s,
            c = (0, o.useStateFromStoresObject)([i.default], function() {
                return {
                    guild: i.default.getGuild(t),
                    roles: i.default.getRoles(t)
                }
            }, [t]),
            f = c.guild,
            d = c.roles;
        return r.useMemo(function() {
            if (null != f && null != n) {
                var e = d[n];
                if ((0, a.canGuildUseRoleIcons)(f, e)) return u(e, l)
            }
        }, [f, d, n, l])
    }

    function l(e, t) {
        var n = (0, o.useStateFromStores)([i.default], function() {
            return i.default.getGuild(e)
        });
        if (null != n && (0, a.canGuildUseRoleIcons)(n, t)) return u(t)
    }
}