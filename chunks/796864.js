function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSoundButtonContextMenu: function() {
            return u
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("272030"),
        s = n("305961"),
        r = n("697218"),
        o = n("719923");

    function u(e, t) {
        return i.useCallback(i => {
            i.stopPropagation();
            let u = s.default.getGuild(e.guildId),
                d = r.default.getCurrentUser();
            (null != u || o.default.canUseCustomCallSounds(d)) && ! function(e, t, i, s) {
                let u = r.default.getCurrentUser();
                (null != t || o.default.canUseCustomCallSounds(u)) && (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("632507").then(n.bind(n, "632507"));
                    return n => (0, l.jsx)(e, {
                        ...n,
                        soundGuild: t,
                        activeCallGuildId: s,
                        sound: i
                    })
                })
            }(i, u, e, t)
        }, [e, t])
    }
}