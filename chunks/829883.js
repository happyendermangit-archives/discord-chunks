function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canGuildUseRoleIcons: function() {
            return T
        },
        getRoleIconData: function() {
            return _
        },
        isRoleIconAssetUrl: function() {
            return I
        },
        replaceRoleIconSourceSize: function() {
            return c
        }
    }), n("757143");
    var i = n("633302"),
        r = n("134432"),
        s = n("768581"),
        a = n("358085"),
        o = n("981631");
    let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        d = (0, a.isAndroid)(),
        _ = (e, t) => {
            if (null == e) return null;
            let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
            return {
                customIconSrc: E(e, t),
                unicodeEmoji: null != n ? n : void 0
            }
        },
        c = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
        E = (e, t) => {
            let {
                id: n,
                icon: i
            } = e;
            if (null == i) return;
            if (i.startsWith("data:")) return i;
            let a = s.SUPPORTS_WEBP ? "webp" : "png",
                _ = "",
                c = "quality=lossless";
            return (null != t && (_ = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), c = d ? "" : "&" + c), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(i, ".").concat(a, "?").concat(_).concat(c) : "".concat(u).concat(o.Endpoints.ROLE_ICON(n, i), "?").concat(_)
        },
        I = e => e.startsWith(l) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
        T = (e, t) => {
            var n;
            return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(o.GuildFeatures.ROLE_ICONS)
        }
}