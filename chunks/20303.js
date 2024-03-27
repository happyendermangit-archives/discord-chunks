function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("757143");
    var i, r, s, a, o, l = n("442837"),
        u = n("433517"),
        d = n("570140"),
        _ = n("591759"),
        c = n("902676"),
        E = n("616922");
    let I = "MaskedLinkStore",
        T = new Set,
        f = new Set,
        S = null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.replace("//", "");

    function h(e) {
        let t = (0, c.getHostname)(e);
        switch (t) {
            case window.GLOBAL_ENV.CDN_HOST:
            case window.GLOBAL_ENV.INVITE_HOST:
            case window.GLOBAL_ENV.GIFT_CODE_HOST:
            case window.GLOBAL_ENV.GUILD_TEMPLATE_HOST:
            case S:
            case location.hostname:
                return !0;
            default:
                return E.SPOTIFY_HOSTNAMES.includes(t) || _.default.isDiscordHostname(t) || T.has(t)
        }
    }

    function A(e) {
        let t = (0, c.getProtocol)(e);
        return f.has(t)
    }
    class m extends(r = l.default.Store) {
        initialize() {
            var e;
            let t = null !== (e = u.Storage.get(I)) && void 0 !== e ? e : {};
            if (Array.isArray(t)) T = new Set(null != t ? Array.from(t) : null), f = new Set;
            else {
                let {
                    trustedDomains: e,
                    trustedProtocols: n
                } = t;
                T = new Set(null != e ? Array.from(e) : null), f = new Set(null != n ? Array.from(n) : null)
            }
        }
        isTrustedDomain(e) {
            return h(e)
        }
        isTrustedProtocol(e) {
            return A(e)
        }
    }
    o = "MaskedLinkStore", (a = "displayName") in(s = m) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new m(d.default, {
        MASKED_LINK_ADD_TRUSTED_DOMAIN: function(e) {
            let {
                url: t
            } = e;
            if (h(t)) return !1;
            T.add((0, c.getHostname)(t)), u.Storage.set(I, {
                trustedDomains: T,
                trustedProtocols: f
            })
        },
        MASKED_LINK_ADD_TRUSTED_PROTOCOL: function(e) {
            let {
                url: t
            } = e;
            if (A(t)) return !1;
            f.add((0, c.getProtocol)(t)), u.Storage.set(I, {
                trustedDomains: T,
                trustedProtocols: f
            })
        }
    })
}