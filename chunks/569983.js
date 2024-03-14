function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007"), n("781738");
    var i, s = n("446674"),
        r = n("95410"),
        a = n("913144"),
        o = n("253981"),
        l = n("48703"),
        u = n("450484");
    let d = "MaskedLinkStore",
        c = new Set,
        f = new Set,
        _ = null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.replace("//", "");

    function E(e) {
        let t = (0, l.getHostname)(e);
        switch (t) {
            case window.GLOBAL_ENV.CDN_HOST:
            case window.GLOBAL_ENV.INVITE_HOST:
            case window.GLOBAL_ENV.GIFT_CODE_HOST:
            case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
            case _:
            case location.hostname:
                return !0;
            default:
                return u.SPOTIFY_HOSTNAMES.includes(t) || o.default.isDiscordHostname(t) || c.has(t)
        }
    }

    function h(e) {
        let t = (0, l.getProtocol)(e);
        return f.has(t)
    }
    class g extends s.default.Store {
        initialize() {
            var e;
            let t = null !== (e = r.default.get(d)) && void 0 !== e ? e : {};
            if (Array.isArray(t)) c = new Set(null != t ? Array.from(t) : null), f = new Set;
            else {
                let {
                    trustedDomains: e,
                    trustedProtocols: n
                } = t;
                c = new Set(null != e ? Array.from(e) : null), f = new Set(null != n ? Array.from(n) : null)
            }
        }
        isTrustedDomain(e) {
            return E(e)
        }
        isTrustedProtocol(e) {
            return h(e)
        }
    }
    g.displayName = "MaskedLinkStore";
    var m = new g(a.default, {
        MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
            let {
                url: t
            } = e;
            if (E(t)) return !1;
            c.add((0, l.getHostname)(t)), r.default.set(d, {
                trustedDomains: c,
                trustedProtocols: f
            })
        },
        MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
            let {
                url: t
            } = e;
            if (h(t)) return !1;
            f.add((0, l.getProtocol)(t)), r.default.set(d, {
                trustedDomains: c,
                trustedProtocols: f
            })
        }
    })
}