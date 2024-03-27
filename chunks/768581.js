function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        DEFAULT_AVATARS: function() {
            return T
        },
        SUPPORTS_WEBP: function() {
            return f
        },
        getAvatarDecorationURL: function() {
            return g
        },
        getEmojiURL: function() {
            return A
        },
        getGuildMemberAvatarURL: function() {
            return R
        },
        getGuildMemberAvatarURLSimple: function() {
            return p
        },
        getGuildMemberBannerURL: function() {
            return L
        },
        getUserAvatarURL: function() {
            return O
        },
        getUserBannerURL: function() {
            return C
        },
        getVideoFilterAssetURL: function() {
            return w
        },
        isAnimatedIconHash: function() {
            return B
        },
        isAnimatedImageURL: function() {
            return F
        },
        isVideoAssetHash: function() {
            return V
        }
    }), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
    var r = n("654861"),
        s = n.n(r),
        a = n("664751"),
        o = n("864106"),
        l = n("134432"),
        u = n("930153"),
        d = n("358085"),
        _ = n("709054"),
        c = n("981631"),
        E = n("377668"),
        I = n("970952");
    let T = (i = n("426563").default).DEFAULT_AVATARS;
    i.DEFAULT_GROUP_DM_AVATARS;
    let f = i.canUseWebp(),
        S = (0, d.isAndroid)();

    function h(e) {
        let t, {
            endpoint: n,
            path: i,
            id: r,
            hash: s,
            size: o,
            canAnimate: u = !1,
            keepAspectRatio: d,
            format: _ = null
        } = e;
        if (null == r || null == s) return;
        let c = null != _ ? _ : u && B(s) ? "gif" : "jpg";
        u && V(s) && (c = "mp4");
        let E = window.GLOBAL_ENV.CDN_HOST;
        if (null != E ? ("jpg" === c && (c = f ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(E, "/").concat(i, "/").concat(r, "/").concat(s, ".").concat(c)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(r, s, c), "mp4" === c) return t;
        let I = {};
        return null != o && (I.size = (0, l.getBestMediaProxySize)(o * (0, l.getDevicePixelRatio)())), null != d && (I.keep_aspect_ratio = d), t + "?".concat(a.stringify(I))
    }

    function A(e) {
        let {
            id: t,
            animated: n,
            size: i,
            forcePNG: r = !1
        } = e, s = f && !r ? "webp" : "png", a = f && !S ? "&quality=lossless" : "";
        return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(n ? "gif" : s, "?size=").concat((0, l.getBestMediaProxySize)(i * (0, l.getDevicePixelRatio)())).concat(a) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.EMOJI(t, n ? "gif" : s)
    }

    function m(e, t) {
        if (null == e && null == t) return T[0];
        let n = (0, u.parseInteger)(t, 0);
        return n > 0 ? T[n % 5] : null != e ? T[s()(e).shiftRight(22).mod(6).toJSNumber()] : T[0]
    }

    function N(e) {
        let {
            id: t,
            avatar: n,
            discriminator: r,
            bot: s
        } = e, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.AVATAR_SIZE, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (s && t !== E.CLYDE_AI_USER_ID) {
            let e = i.BOT_AVATARS[n];
            if (e) return e;
            if (null == n && "0000" === r) return T[0]
        }
        return h({
            endpoint: c.Endpoints.AVATAR,
            path: "avatars",
            id: t,
            hash: n,
            size: o,
            canAnimate: a,
            format: l
        })
    }

    function O(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.AVATAR_SIZE,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return null !== (t = N(e, n, i, r)) && void 0 !== t ? t : m(e.id, e.discriminator)
    }

    function p(e) {
        let t, {
                guildId: n,
                userId: i,
                avatar: r,
                canAnimate: s = !1,
                size: o = c.AVATAR_SIZE
            } = e,
            u = s && B(r) ? "gif" : "jpg",
            {
                CDN_HOST: d
            } = window.GLOBAL_ENV;
        return null != d ? ("jpg" === u && (u = f ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(d).concat(c.Endpoints.GUILD_MEMBER_AVATAR(n, i, r, u))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_MEMBER_AVATAR(n, i, r, u), t + "?".concat(a.stringify({
            size: (0, l.getBestMediaProxySize)(o * (0, l.getDevicePixelRatio)())
        }))
    }

    function R(e) {
        let {
            userId: t,
            avatar: n,
            guildId: i
        } = e, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == n ? null : p({
            userId: t,
            avatar: n,
            guildId: i,
            canAnimate: r
        })
    }

    function C(e) {
        let t, {
            id: n,
            banner: i,
            canAnimate: r,
            size: s
        } = e;
        if (null == i) return;
        let a = window.GLOBAL_ENV.CDN_HOST,
            o = r && B(i) ? "gif" : "png";
        return t = (null != a ? "".concat(location.protocol, "//").concat(a, "/banners/").concat(n, "/").concat(i, ".").concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.USER_BANNER(n, i, o)) + "?size=".concat((0, l.getBestMediaProxySize)(s * (0, l.getDevicePixelRatio)()))
    }

    function g(e) {
        let {
            avatarDecoration: t,
            size: n,
            canAnimate: i = !1
        } = e;
        if (null == t) return;
        if (/^data:/.test(t.asset)) return t.asset;
        let {
            CDN_HOST: r,
            API_ENDPOINT: s
        } = window.GLOBAL_ENV, a = c.Endpoints.AVATAR_DECORATION_PRESETS(t.asset), u = new URL(null != r ? "".concat(location.protocol, "//").concat(r).concat(a) : "".concat(location.protocol).concat(s).concat(a));
        return u.searchParams.set("size", "".concat((0, l.getBestMediaProxySize)(n * (0, l.getDevicePixelRatio)()))), u.searchParams.set("passthrough", "".concat(i && (0, o.isAnimatedAvatarDecoration)(t.asset))), u.toString()
    }

    function L(e) {
        let t, {
            id: n,
            guildId: i,
            banner: r,
            canAnimate: s,
            size: a
        } = e;
        if (null == r || null == i) return;
        let o = window.GLOBAL_ENV.CDN_HOST,
            u = s && B(r) ? "gif" : "png",
            d = c.Endpoints.GUILD_MEMBER_BANNER(i, n, r, u);
        return t = (null != o ? "".concat(location.protocol, "//").concat(o).concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d) + "?size=".concat((0, l.getBestMediaProxySize)(a * (0, l.getDevicePixelRatio)()))
    }

    function D(e) {
        let t, {
            id: n,
            splash: i,
            size: r
        } = e;
        if (null == i) return null;
        null == r && (r = window.screen.width * (0, l.getDevicePixelRatio)()), r = (0, l.getBestMediaProxySize)(r);
        let s = window.GLOBAL_ENV.CDN_HOST;
        return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/splashes/").concat(n, "/").concat(i, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_SPLASH(n, i)) + "?size=".concat(r)
    }

    function v(e) {
        let t, {
                id: n,
                banner: i
            } = e,
            r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == i) return null;
        let s = (0, l.getBestMediaProxySize)(240 * (0, l.getDevicePixelRatio)()),
            a = f ? "webp" : "jpg",
            o = r && B(i) ? "gif" : a,
            u = window.GLOBAL_ENV.CDN_HOST;
        return t = (null != u ? "".concat(location.protocol, "//").concat(u, "/banners/").concat(n, "/").concat(i, ".").concat(o) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_BANNER(n, i, o)) + "?size=".concat(s), "jpg" === o && (t += "&quality=lossless"), t
    }

    function M(e) {
        let t, {
            id: n,
            homeHeader: i
        } = e;
        if (null == i) return null;
        let r = (0, l.getBestMediaProxySize)(1096 * (0, l.getDevicePixelRatio)()),
            s = window.GLOBAL_ENV.CDN_HOST;
        return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/home-headers/").concat(n, "/").concat(i, ".png") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_HOME_HEADER(n, i)) + "?size=".concat(r)
    }

    function y(e) {
        let t, {
            id: n,
            splash: i,
            size: r
        } = e;
        if (null == i) return null;
        null == r && (r = window.screen.width * (0, l.getDevicePixelRatio)()), r = (0, l.getBestMediaProxySize)(r);
        let s = window.GLOBAL_ENV.CDN_HOST;
        return t = (null != s ? "".concat(location.protocol, "//").concat(s, "/discovery-splashes/").concat(n, "/").concat(i, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c.Endpoints.GUILD_DISCOVERY_SPLASH(n, i)) + "?size=".concat(r)
    }

    function P(e) {
        let {
            id: t,
            icon: n,
            size: i,
            canAnimate: r = !1
        } = e;
        return h({
            endpoint: c.Endpoints.GUILD_ICON,
            path: "icons",
            id: t,
            hash: n,
            size: i,
            canAnimate: r
        })
    }

    function U(e) {
        let {
            id: t,
            icon: n,
            size: i = c.AVATAR_SIZE,
            canAnimate: r = !1
        } = e;
        return h({
            endpoint: c.Endpoints.GUILD_TEMPLATE_ICON,
            path: "guild-templates",
            id: t,
            hash: n,
            size: i,
            canAnimate: r
        })
    }

    function b(e) {
        let {
            id: t,
            icon: n,
            size: i = c.AVATAR_SIZE,
            bot: r,
            botIconFirst: s,
            fallbackAvatar: a = !0
        } = e;
        if (null != r && s) {
            let e = N(r, !1, i);
            if (null != e) return e
        }
        if (null != n) return h({
            endpoint: c.Endpoints.APPLICATION_ICON,
            path: "app-icons",
            id: t,
            hash: n,
            size: i,
            canAnimate: !1
        });
        if (null != r) {
            let e = N(r, !1, i);
            if (null != e) return e
        }
        if (a) return I
    }

    function G(e) {
        let {
            id: t,
            hash: n,
            size: i = c.AVATAR_SIZE,
            keepAspectRatio: r = !1
        } = e;
        return h({
            endpoint: c.Endpoints.APPLICATION_ICON,
            path: "app-icons",
            id: t,
            hash: n,
            size: i,
            canAnimate: !1,
            keepAspectRatio: r
        })
    }

    function w(e) {
        let {
            userId: t,
            assetId: n,
            assetHash: i,
            size: r,
            canAnimate: s = !0
        } = e;
        return h({
            endpoint: (e, r, s) => c.Endpoints.VIDEO_FILTER_ASSET_STORAGE(t, n, i, s),
            path: "video-filter-assets/".concat(t),
            id: n,
            hash: i,
            size: r,
            canAnimate: s
        })
    }

    function k(e) {
        var t, n, r;
        let {
            id: s,
            icon: a,
            applicationId: o,
            size: l
        } = e;
        if (null != o) return null !== (t = b({
            id: o,
            icon: a,
            size: l
        })) && void 0 !== t ? t : i.DEFAULT_CHANNEL_ICON;
        return null !== (n = h({
            endpoint: c.Endpoints.CHANNEL_ICON,
            path: "channel-icons",
            id: s,
            hash: a,
            canAnimate: !1,
            size: l
        })) && void 0 !== n ? n : (r = s, i.DEFAULT_GROUP_DM_AVATARS[_.default.extractTimestamp(r) % i.DEFAULT_GROUP_DM_AVATARS.length])
    }

    function B(e) {
        return null != e && e.startsWith("a_")
    }

    function V(e) {
        return null != e && e.startsWith("v_")
    }

    function F(e) {
        return null != e && B(function(e) {
            let t;
            try {
                return (t = new URL(e).pathname).split("/").pop()
            } catch (e) {
                return null
            }
        }(e))
    }

    function x(e) {
        return "number" == typeof e ? e : {
            uri: null != e ? e : void 0
        }
    }
    t.default = {
        getUserAvatarURL: O,
        getDefaultAvatarURL: m,
        getGuildMemberAvatarURL: R,
        getGuildMemberAvatarURLSimple: p,
        getGuildMemberAvatarSource: function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = R(e, n);
            return null != i ? x(i) : t.getAvatarSource(e.guildId, n)
        },
        getGuildMemberBannerURL: L,
        getUserBannerURL: C,
        getAvatarDecorationURL: g,
        hasAnimatedGuildIcon: function(e) {
            return B(null == e ? void 0 : e.icon)
        },
        isAnimatedIconHash: B,
        getUserAvatarSource: (e, t, n) => x(O(e, t, n)),
        getGuildIconURL: P,
        getGuildSplashURL: D,
        getGuildSplashSource: function(e) {
            return x(D(e))
        },
        getGuildDiscoverySplashURL: y,
        getGuildDiscoverySplashSource: function(e) {
            return x(y(e))
        },
        getGuildBannerURL: v,
        getGuildHomeHeaderURL: M,
        getResourceChannelIconURL: function(e) {
            let {
                channelId: t,
                icon: n
            } = e;
            return null == n ? null : h({
                endpoint: c.Endpoints.GUILD_RESOURCE_CHANNELS_ICON,
                path: "resource-channels",
                id: t,
                hash: n,
                size: c.AVATAR_SIZE,
                canAnimate: !0
            })
        },
        getNewMemberActionIconURL: function(e) {
            let {
                channelId: t,
                icon: n
            } = e;
            return null == n ? null : h({
                endpoint: c.Endpoints.GUILD_NEW_MEMBER_ACTIONS_ICON,
                path: "new-member-actions",
                id: t,
                hash: n,
                size: c.AVATAR_SIZE,
                canAnimate: !0
            })
        },
        getGuildTemplateIconURL: U,
        getChannelIconURL: k,
        getEmojiURL: A,
        getApplicationIconURL: b,
        getGameAssetURL: G,
        getVideoFilterAssetURL: w,
        getGameAssetSource: e => x(G(e)),
        getGuildIconSource: e => x(P(e)),
        getGuildTemplateIconSource: e => x(U(e)),
        getGuildBannerSource(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return x(v(e, t))
        },
        getGuildHomeHeaderSource: e => x(M(e)),
        getChannelIconSource: e => x(k(e)),
        getApplicationIconSource: e => x(b(e)),
        makeSource: x,
        getAnimatableSourceWithFallback(e, t) {
            let n = t(e);
            if (!(0, d.isAndroid)() || !e || "number" == typeof n) return n;
            {
                let e = t(!1);
                return "number" != typeof e && e.uri === n.uri ? e : [n, {
                    ...e,
                    isForceCached: !0
                }]
            }
        }
    }
}