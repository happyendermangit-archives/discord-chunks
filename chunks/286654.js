function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSoundButtonContextMenu: function() {
            return u
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("239091"),
        a = n("430824"),
        o = n("594174"),
        l = n("74538");

    function u(e, t) {
        return r.useCallback(r => {
            r.stopPropagation();
            let u = a.default.getGuild(e.guildId),
                d = o.default.getCurrentUser();
            (null != u || l.default.canUseCustomCallSounds(d)) && ! function(e, t, r, a) {
                let u = o.default.getCurrentUser();
                (null != t || l.default.canUseCustomCallSounds(u)) && (0, s.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.e("2356").then(n.bind(n, "876308"));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        soundGuild: t,
                        activeCallGuildId: a,
                        sound: r
                    })
                })
            }(r, u, e, t)
        }, [e, t])
    }
}