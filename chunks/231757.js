function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("842146"),
        s = n("293177"),
        o = n("349407"),
        l = n("49012"),
        u = n("202120"),
        d = n("981631");

    function _(e) {
        let {
            platformType: t,
            location: _,
            overrideUrl: c
        } = e;
        if (t === d.PlatformTypes.LEAGUE_OF_LEGENDS && (t = d.PlatformTypes.RIOT_GAMES), t === d.PlatformTypes.CRUNCHYROLL) {
            a.showModal([null != _ ? _ : "unknown"]);
            return
        }
        if (t === d.PlatformTypes.XBOX) {
            o.showModal([null != _ ? _ : "unknown"]);
            return
        }
        if (t === d.PlatformTypes.PLAYSTATION || t === d.PlatformTypes.PLAYSTATION_STAGING) {
            s.showModal([null != _ ? _ : "unknown"], t);
            return
        }
        if (t === d.PlatformTypes.DOMAIN) {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("64941")]).then(n.bind(n, "414402"));
                return t => (0, i.jsx)(e, {
                    analyticsLocation: [null != _ ? _ : "unknown"],
                    ...t
                })
            });
            return
        }
        if (null != c) {
            (0, l.handleClick)({
                shouldConfirm: !0,
                href: c,
                onConfirm: () => {
                    (0, u.openProviderAuthorize)(t, {
                        location: _
                    }, c)
                }
            });
            return
        }(0, u.openProviderAuthorize)(t, {
            location: _
        })
    }
}