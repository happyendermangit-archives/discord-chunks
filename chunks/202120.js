function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openProviderAuthorize: function() {
            return o
        }
    });
    var i = n("457330"),
        r = n("358085"),
        s = n("856651"),
        a = n("981631");
    async function o(e) {
        let {
            location: t,
            twoWayLinkType: n
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, l = Math.round(screen.width / 2 - 350), u = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, d = null;
        !(0, r.isDesktop)() && (d = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(a.Routes.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(u, ",left=").concat(l, ",width=").concat(700, ",height=").concat(640)));
        let _ = o;
        if (null == _ && e !== s.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE) {
            let {
                body: r
            } = await i.default.authorize(e, {
                location: t,
                twoWayLinkType: n
            });
            _ = r.url
        }
        if (null != _) return null != d ? d.location.href = _ : window.open(_), _
    }
}