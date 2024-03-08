function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSoundButtonContextMenu: function() {
            return u
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("272030"),
        s = n("305961"),
        r = n("697218"),
        o = n("719923");

    function u(e, t) {
        return l.useCallback(l => {
            l.stopPropagation();
            let u = s.default.getGuild(e.guildId),
                d = r.default.getCurrentUser();
            (null != u || o.default.canUseCustomCallSounds(d)) && ! function(e, t, l, s) {
                let u = r.default.getCurrentUser();
                (null != t || o.default.canUseCustomCallSounds(u)) && (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("632507").then(n.bind(n, "632507"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        soundGuild: t,
                        activeCallGuildId: s,
                        sound: l
                    })
                })
            }(l, u, e, t)
        }, [e, t])
    }
}