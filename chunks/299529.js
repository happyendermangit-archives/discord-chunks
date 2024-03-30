function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_AVATARS: function() {
            return p
        },
        SUPPORTS_WEBP: function() {
            return m
        },
        getAvatarDecorationURL: function() {
            return b
        },
        getEmojiURL: function() {
            return h
        },
        getGuildMemberAvatarURL: function() {
            return g
        },
        getGuildMemberAvatarURLSimple: function() {
            return v
        },
        getGuildMemberBannerURL: function() {
            return N
        },
        getUserAvatarURL: function() {
            return S
        },
        getUserBannerURL: function() {
            return A
        },
        getVideoFilterAssetURL: function() {
            return k
        },
        isAnimatedIconHash: function() {
            return B
        },
        isAnimatedImageURL: function() {
            return F
        },
        isVideoAssetHash: function() {
            return j
        }
    });
    var r, o = n("654861"),
        i = n.n(o),
        a = n("664751"),
        u = n("272665"),
        s = n("896299"),
        l = n("79738"),
        c = n("374550"),
        f = n("523018"),
        d = n("281767"),
        _ = n("142680"),
        E = n("970952"),
        p = (r = n("341633").default).DEFAULT_AVATARS;
    r.DEFAULT_GROUP_DM_AVATARS;
    var m = r.canUseWebp(),
        y = (0, c.isAndroid)();

    function I(e) {
        var t, n = e.endpoint,
            r = e.path,
            o = e.id,
            i = e.hash,
            u = e.size,
            l = e.canAnimate,
            c = void 0 !== l && l,
            f = e.keepAspectRatio,
            d = e.format,
            _ = void 0 === d ? null : d;
        if (null != o && null != i) {
            var E = null != _ ? _ : c && B(i) ? "gif" : "jpg";
            c && j(i) && (E = "mp4");
            var p = window.GLOBAL_ENV.CDN_HOST;
            if (null != p ? ("jpg" === E && (E = m ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(p, "/").concat(r, "/").concat(o, "/").concat(i, ".").concat(E)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(o, i, E), "mp4" === E) return t;
            var y = {};
            return null != u && (y.size = (0, s.getBestMediaProxySize)(u * (0, s.getDevicePixelRatio)())), null != f && (y.keep_aspect_ratio = f), t + "?".concat(a.stringify(y))
        }
    }

    function h(e) {
        var t = e.id,
            n = e.animated,
            r = e.size,
            o = e.forcePNG,
            i = m && !(void 0 !== o && o) ? "webp" : "png",
            a = m && !y ? "&quality=lossless" : "";
        return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(n ? "gif" : i, "?size=").concat((0, s.getBestMediaProxySize)(r * (0, s.getDevicePixelRatio)())).concat(a) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d.Endpoints.EMOJI(t, n ? "gif" : i)
    }

    function O(e, t) {
        if (null == e && null == t) return p[0];
        var n = (0, l.parseInteger)(t, 0);
        return n > 0 ? p[n % 5] : null != e ? p[i()(e).shiftRight(22).mod(6).toJSNumber()] : p[0]
    }

    function T(e) {
        var t = e.id,
            n = e.avatar,
            o = e.discriminator,
            i = e.bot,
            a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.AVATAR_SIZE,
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (i && t !== _.CLYDE_AI_USER_ID) {
            var l = r.BOT_AVATARS[n];
            if (l) return l;
            if (null == n && "0000" === o) return p[0]
        }
        return I({
            endpoint: d.Endpoints.AVATAR,
            path: "avatars",
            id: t,
            hash: n,
            size: u,
            canAnimate: a,
            format: s
        })
    }

    function S(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.AVATAR_SIZE,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return null !== (t = T(e, n, r, o)) && void 0 !== t ? t : O(e.id, e.discriminator)
    }

    function v(e) {
        var t, n = e.guildId,
            r = e.userId,
            o = e.avatar,
            i = e.canAnimate,
            u = e.size,
            l = void 0 === u ? d.AVATAR_SIZE : u,
            c = void 0 !== i && i && B(o) ? "gif" : "jpg",
            f = window.GLOBAL_ENV.CDN_HOST;
        return null != f ? ("jpg" === c && (c = m ? "webp" : "png"), t = "".concat(location.protocol, "//").concat(f).concat(d.Endpoints.GUILD_MEMBER_AVATAR(n, r, o, c))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d.Endpoints.GUILD_MEMBER_AVATAR(n, r, o, c), t + "?".concat(a.stringify({
            size: (0, s.getBestMediaProxySize)(l * (0, s.getDevicePixelRatio)())
        }))
    }

    function g(e) {
        var t = e.userId,
            n = e.avatar,
            r = e.guildId,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return null == n ? null : v({
            userId: t,
            avatar: n,
            guildId: r,
            canAnimate: o
        })
    }

    function A(e) {
        var t, n = e.id,
            r = e.banner,
            o = e.canAnimate,
            i = e.size;
        if (null != r) {
            var a = window.GLOBAL_ENV.CDN_HOST,
                u = o && B(r) ? "gif" : "png";
            return t = (null != a ? "".concat(location.protocol, "//").concat(a, "/banners/").concat(n, "/").concat(r, ".").concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d.Endpoints.USER_BANNER(n, r, u)) + "?size=".concat((0, s.getBestMediaProxySize)(i * (0, s.getDevicePixelRatio)()))
        }
    }

    function b(e) {
        var t = e.avatarDecoration,
            n = e.size,
            r = e.canAnimate;
        if (null != t) {
            if (/^data:/.test(t.asset)) return t.asset;
            var o = window.GLOBAL_ENV,
                i = o.CDN_HOST,
                a = o.API_ENDPOINT,
                l = d.Endpoints.AVATAR_DECORATION_PRESETS(t.asset),
                c = new URL(null != i ? "".concat(location.protocol, "//").concat(i).concat(l) : "".concat(location.protocol).concat(a).concat(l));
            return c.searchParams.set("size", "".concat((0, s.getBestMediaProxySize)(n * (0, s.getDevicePixelRatio)()))), c.searchParams.set("passthrough", "".concat(void 0 !== r && r && (0, u.isAnimatedAvatarDecoration)(t.asset))), c.toString()
        }
    }

    function N(e) {
        var t, n = e.id,
            r = e.guildId,
            o = e.banner,
            i = e.canAnimate,
            a = e.size;
        if (null != o && null != r) {
            var u = window.GLOBAL_ENV.CDN_HOST,
                l = i && B(o) ? "gif" : "png",
                c = d.Endpoints.GUILD_MEMBER_BANNER(r, n, o, l);
            return t = (null != u ? "".concat(location.protocol, "//").concat(u).concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + c) + "?size=".concat((0, s.getBestMediaProxySize)(a * (0, s.getDevicePixelRatio)()))
        }
    }

    function R(e) {
        var t, n = e.id,
            r = e.splash,
            o = e.size;
        if (null == r) return null;
        null == o && (o = window.screen.width * (0, s.getDevicePixelRatio)()), o = (0, s.getBestMediaProxySize)(o);
        var i = window.GLOBAL_ENV.CDN_HOST;
        return t = (null != i ? "".concat(location.protocol, "//").concat(i, "/splashes/").concat(n, "/").concat(r, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d.Endpoints.GUILD_SPLASH(n, r)) + "?size=".concat(o)
    }

    function C(e) {
        var t, n = e.id,
            r = e.banner,
            o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == r) return null;
        var i = (0, s.getBestMediaProxySize)(240 * (0, s.getDevicePixelRatio)()),
            a = m ? "webp" : "jpg",
            u = o && B(r) ? "gif" : a,
            l = window.GLOBAL_ENV.CDN_HOST;
        return t = (null != l ? "".concat(location.protocol, "//").concat(l, "/banners/").concat(n, "/").concat(r, ".").concat(u) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d.Endpoints.GUILD_BANNER(n, r, u)) + "?size=".concat(i), "jpg" === u && (t += "&quality=lossless"), t
    }

    function P(e) {
        var t, n = e.id,
            r = e.homeHeader;
        if (null == r) return null;
        var o = (0, s.getBestMediaProxySize)(1096 * (0, s.getDevicePixelRatio)()),
            i = window.GLOBAL_ENV.CDN_HOST;
        return t = (null != i ? "".concat(location.protocol, "//").concat(i, "/home-headers/").concat(n, "/").concat(r, ".png") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d.Endpoints.GUILD_HOME_HEADER(n, r)) + "?size=".concat(o)
    }

    function D(e) {
        var t, n = e.id,
            r = e.splash,
            o = e.size;
        if (null == r) return null;
        null == o && (o = window.screen.width * (0, s.getDevicePixelRatio)()), o = (0, s.getBestMediaProxySize)(o);
        var i = window.GLOBAL_ENV.CDN_HOST;
        return t = (null != i ? "".concat(location.protocol, "//").concat(i, "/discovery-splashes/").concat(n, "/").concat(r, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d.Endpoints.GUILD_DISCOVERY_SPLASH(n, r)) + "?size=".concat(o)
    }

    function L(e) {
        var t = e.id,
            n = e.icon,
            r = e.size,
            o = e.canAnimate;
        return I({
            endpoint: d.Endpoints.GUILD_ICON,
            path: "icons",
            id: t,
            hash: n,
            size: r,
            canAnimate: void 0 !== o && o
        })
    }

    function M(e) {
        var t = e.id,
            n = e.icon,
            r = e.size,
            o = void 0 === r ? d.AVATAR_SIZE : r,
            i = e.canAnimate;
        return I({
            endpoint: d.Endpoints.GUILD_TEMPLATE_ICON,
            path: "guild-templates",
            id: t,
            hash: n,
            size: o,
            canAnimate: void 0 !== i && i
        })
    }

    function U(e) {
        var t = e.id,
            n = e.icon,
            r = e.size,
            o = void 0 === r ? d.AVATAR_SIZE : r,
            i = e.bot,
            a = e.botIconFirst,
            u = e.fallbackAvatar;
        if (null != i && a) {
            var s = T(i, !1, o);
            if (null != s) return s
        }
        if (null != n) return I({
            endpoint: d.Endpoints.APPLICATION_ICON,
            path: "app-icons",
            id: t,
            hash: n,
            size: o,
            canAnimate: !1
        });
        if (null != i) {
            var l = T(i, !1, o);
            if (null != l) return l
        }
        if (void 0 === u || u) return E
    }

    function w(e) {
        var t = e.id,
            n = e.hash,
            r = e.size,
            o = void 0 === r ? d.AVATAR_SIZE : r,
            i = e.keepAspectRatio,
            a = e.format;
        return I({
            endpoint: d.Endpoints.APPLICATION_ICON,
            path: "app-icons",
            id: t,
            hash: n,
            size: o,
            canAnimate: !1,
            keepAspectRatio: void 0 !== i && i,
            format: a
        })
    }

    function k(e) {
        var t = e.userId,
            n = e.assetId,
            r = e.assetHash,
            o = e.size,
            i = e.canAnimate;
        return I({
            endpoint: function(e, o, i) {
                return d.Endpoints.VIDEO_FILTER_ASSET_STORAGE(t, n, r, i)
            },
            path: "video-filter-assets/".concat(t),
            id: n,
            hash: r,
            size: o,
            canAnimate: void 0 === i || i
        })
    }

    function G(e) {
        var t, n, o, i = e.id,
            a = e.icon,
            u = e.applicationId,
            s = e.size;
        if (null != u) return null !== (n = U({
            id: u,
            icon: a,
            size: s
        })) && void 0 !== n ? n : r.DEFAULT_CHANNEL_ICON;
        return null !== (o = I({
            endpoint: d.Endpoints.CHANNEL_ICON,
            path: "channel-icons",
            id: i,
            hash: a,
            canAnimate: !1,
            size: s
        })) && void 0 !== o ? o : (t = i, r.DEFAULT_GROUP_DM_AVATARS[f.default.extractTimestamp(t) % r.DEFAULT_GROUP_DM_AVATARS.length])
    }

    function B(e) {
        return null != e && e.startsWith("a_")
    }

    function j(e) {
        return null != e && e.startsWith("v_")
    }

    function F(e) {
        return null != e && B(function(e) {
            try {
                return new URL(e).pathname.split("/").pop()
            } catch (e) {
                return null
            }
        }(e))
    }

    function V(e) {
        return "number" == typeof e ? e : {
            uri: null != e ? e : void 0
        }
    }
    t.default = {
        getUserAvatarURL: S,
        getDefaultAvatarURL: O,
        getGuildMemberAvatarURL: g,
        getGuildMemberAvatarURLSimple: v,
        getGuildMemberAvatarSource: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = g(e, n);
            return null != r ? V(r) : t.getAvatarSource(e.guildId, n)
        },
        getGuildMemberBannerURL: N,
        getUserBannerURL: A,
        getAvatarDecorationURL: b,
        hasAnimatedGuildIcon: function(e) {
            return B(null == e ? void 0 : e.icon)
        },
        isAnimatedIconHash: B,
        getUserAvatarSource: function(e, t, n) {
            return V(S(e, t, n))
        },
        getGuildIconURL: L,
        getGuildSplashURL: R,
        getGuildSplashSource: function(e) {
            return V(R(e))
        },
        getGuildDiscoverySplashURL: D,
        getGuildDiscoverySplashSource: function(e) {
            return V(D(e))
        },
        getGuildBannerURL: C,
        getGuildHomeHeaderURL: P,
        getResourceChannelIconURL: function(e) {
            var t = e.channelId,
                n = e.icon;
            return null == n ? null : I({
                endpoint: d.Endpoints.GUILD_RESOURCE_CHANNELS_ICON,
                path: "resource-channels",
                id: t,
                hash: n,
                size: d.AVATAR_SIZE,
                canAnimate: !0
            })
        },
        getNewMemberActionIconURL: function(e) {
            var t = e.channelId,
                n = e.icon;
            return null == n ? null : I({
                endpoint: d.Endpoints.GUILD_NEW_MEMBER_ACTIONS_ICON,
                path: "new-member-actions",
                id: t,
                hash: n,
                size: d.AVATAR_SIZE,
                canAnimate: !0
            })
        },
        getGuildTemplateIconURL: M,
        getChannelIconURL: G,
        getEmojiURL: h,
        getApplicationIconURL: U,
        getGameAssetURL: w,
        getVideoFilterAssetURL: k,
        getGameAssetSource: function(e) {
            return V(w(e))
        },
        getGuildIconSource: function(e) {
            return V(L(e))
        },
        getGuildTemplateIconSource: function(e) {
            return V(M(e))
        },
        getGuildBannerSource: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return V(C(e, t))
        },
        getGuildHomeHeaderSource: function(e) {
            return V(P(e))
        },
        getChannelIconSource: function(e) {
            return V(G(e))
        },
        getApplicationIconSource: function(e) {
            return V(U(e))
        },
        makeSource: V,
        getAnimatableSourceWithFallback: function(e, t) {
            var n, r, o = t(e);
            if (!(0, c.isAndroid)() || !e || "number" == typeof o) return o;
            var i = t(!1);
            if ("number" != typeof i && i.uri === o.uri) return i;
            return [o, (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, i), r = (r = {
                isForceCached: !0
            }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(r)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }), n)]
        }
    }
}