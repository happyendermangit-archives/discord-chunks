function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canGuildUseRoleIcons: function() {
            return p
        },
        getRoleIconData: function() {
            return f
        },
        isRoleIconAssetUrl: function() {
            return E
        },
        replaceRoleIconSourceSize: function() {
            return d
        }
    });
    var r = n("27375"),
        o = n("896299"),
        i = n("299529"),
        a = n("374550"),
        u = n("281767"),
        s = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
        l = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
        c = (0, a.isAndroid)(),
        f = function(e, t) {
            if (null == e) return null;
            var n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
            return {
                customIconSrc: _(e, t),
                unicodeEmoji: null != n ? n : void 0
            }
        },
        d = function(e, t) {
            return e.replace(/size=[0-9]+/g, "size=".concat((0, o.getBestMediaProxySize)(t * (0, o.getDevicePixelRatio)())))
        },
        _ = function(e, t) {
            var n = e.id,
                r = e.icon;
            if (null != r) {
                if (r.startsWith("data:")) return r;
                var a = i.SUPPORTS_WEBP ? "webp" : "png",
                    f = "",
                    d = "quality=lossless";
                return (null != t && (f = "size=" + (0, o.getBestMediaProxySize)(t * (0, o.getDevicePixelRatio)()), d = c ? "" : "&" + d), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(s, "/").concat(n, "/").concat(r, ".").concat(a, "?").concat(f).concat(d) : "".concat(l).concat(u.Endpoints.ROLE_ICON(n, r), "?").concat(f)
            }
        },
        E = function(e) {
            return e.startsWith(s) || e.startsWith("".concat(l, "/roles")) && e.includes("/icons/")
        },
        p = function(e, t) {
            var n;
            return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(u.GuildFeatures.ROLE_ICONS)
        }
}