function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openProviderAuthorize: function() {
            return _
        },
        default: function() {
            return h
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("77078"),
        r = n("619340"),
        a = n("455711"),
        o = n("938157"),
        l = n("448819"),
        u = n("128259"),
        d = n("773336"),
        c = n("214509"),
        f = n("49111");
    async function _(e) {
        let {
            location: t,
            twoWayLinkType: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0, s = Math.round(screen.width / 2 - 350), a = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, o = null;
        !(0, d.isDesktop)() && (o = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(f.Routes.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(a, ",left=").concat(s, ",width=").concat(700, ",height=").concat(640)));
        let l = i;
        if (null == l && e !== c.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE) {
            let {
                body: i
            } = await r.default.authorize(e, {
                location: t,
                twoWayLinkType: n
            });
            l = i.url
        }
        if (null != l) return null != o ? o.location.href = l : window.open(l), l
    }

    function h(e, t, r) {
        if (e === f.PlatformTypes.LEAGUE_OF_LEGENDS && (e = f.PlatformTypes.RIOT_GAMES), e === f.PlatformTypes.CRUNCHYROLL) {
            a.showModal([null != t ? t : "unknown"]);
            return
        }
        if (e === f.PlatformTypes.XBOX) {
            l.showModal([null != t ? t : "unknown"]);
            return
        }
        if (e === f.PlatformTypes.PLAYSTATION || e === f.PlatformTypes.PLAYSTATION_STAGING) {
            o.showModal([null != t ? t : "unknown"], e);
            return
        }
        if (e === f.PlatformTypes.DOMAIN) {
            (0, s.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.el("359113").then(n.bind(n, "359113"));
                return n => (0, i.jsx)(e, {
                    analyticsLocation: [null != t ? t : "unknown"],
                    ...n
                })
            });
            return
        }
        if (null != r) {
            (0, u.handleClick)({
                shouldConfirm: !0,
                href: r,
                onConfirm: () => {
                    _(e, {
                        location: t
                    }, r)
                }
            });
            return
        }
        _(e, {
            location: t
        })
    }
}