function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        },
        openProviderAuthorize: function() {
            return E
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("457330"),
        a = n("842146"),
        o = n("293177"),
        l = n("349407"),
        u = n("49012"),
        d = n("358085"),
        _ = n("856651"),
        c = n("981631");
    async function E(e) {
        let {
            location: t,
            twoWayLinkType: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0, r = Math.round(screen.width / 2 - 350), a = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, o = null;
        !(0, d.isDesktop)() && (o = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(c.Routes.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(a, ",left=").concat(r, ",width=").concat(700, ",height=").concat(640)));
        let l = i;
        if (null == l && e !== _.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE) {
            let {
                body: i
            } = await s.default.authorize(e, {
                location: t,
                twoWayLinkType: n
            });
            l = i.url
        }
        if (null != l) return null != o ? o.location.href = l : window.open(l), l
    }

    function I(e, t, s) {
        if (e === c.PlatformTypes.LEAGUE_OF_LEGENDS && (e = c.PlatformTypes.RIOT_GAMES), e === c.PlatformTypes.CRUNCHYROLL) {
            a.showModal([null != t ? t : "unknown"]);
            return
        }
        if (e === c.PlatformTypes.XBOX) {
            l.showModal([null != t ? t : "unknown"]);
            return
        }
        if (e === c.PlatformTypes.PLAYSTATION || e === c.PlatformTypes.PLAYSTATION_STAGING) {
            o.showModal([null != t ? t : "unknown"], e);
            return
        }
        if (e === c.PlatformTypes.DOMAIN) {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("64941")]).then(n.bind(n, "414402"));
                return n => (0, i.jsx)(e, {
                    analyticsLocation: [null != t ? t : "unknown"],
                    ...n
                })
            });
            return
        }
        if (null != s) {
            (0, u.handleClick)({
                shouldConfirm: !0,
                href: s,
                onConfirm: () => {
                    E(e, {
                        location: t
                    }, s)
                }
            });
            return
        }
        E(e, {
            location: t
        })
    }
}