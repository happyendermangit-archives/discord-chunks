function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAssetFromImageURL: function() {
            return S
        },
        getAssetImage: function() {
            return T
        },
        getAssets: function() {
            return v
        },
        fetchAssetIds: function() {
            return y
        },
        getAssetIds: function() {
            return N
        }
    }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var i = n("627445"),
        s = n.n(i),
        r = n("872717"),
        a = n("913144"),
        o = n("493259"),
        l = n("605250"),
        u = n("407063"),
        d = n("49111");
    let c = "https://i.scdn.co/image/",
        _ = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
        f = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
        E = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
        h = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
        g = {
            [d.PlatformTypes.SPOTIFY]: {
                deserialize: e => "".concat(c).concat(encodeURIComponent(e)),
                serialize: e => e.split(c)[1]
            },
            [d.PlatformTypes.TWITCH]: {
                deserialize: (e, t) => _(encodeURIComponent(e), t[0], t[1]),
                serialize: e => {
                    let t = e.match(f);
                    return null != t ? t[1] : null
                }
            },
            [d.PlatformTypes.YOUTUBE]: {
                deserialize: e => E(encodeURIComponent(e)),
                serialize: e => {
                    let t = e.match(h);
                    return null != t ? t[1] : null
                }
            },
            mp: {
                deserialize: e => (s(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
                serialize: e => e
            }
        },
        m = {};
    async function p(e) {
        let {
            body: t
        } = await r.HTTP.get({
            url: d.Endpoints.APPLICATION_ASSETS(e),
            oldFormErrors: !0
        });
        return a.default.dispatch({
            type: "APPLICATION_ASSETS_UPDATE",
            applicationId: e,
            assets: t
        }), o.default.getApplicationAssets(e)
    }

    function S(e, t) {
        let n = g[e].serialize(t);
        return n ? "".concat(e, ":").concat(n.toString()) : null
    }

    function T(e, t, n) {
        if (null != t && t.includes(":")) {
            let [e, i] = t.split(":");
            if (e === d.PlatformTypes.TWITCH) {
                if (null == n || "number" == typeof n) {
                    new(0, l.default)("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
                    return
                }
                return g[d.PlatformTypes.TWITCH].deserialize(i, n)
            }
            return Object.prototype.hasOwnProperty.call(g, e) ? g[e].deserialize(i) : void 0
        }
        if (null == e || null == t) return;
        let i = "number" == typeof n ? "?size=".concat((0, u.getBestMediaProxySize)(n)) : "";
        return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(i) : "".concat((0, r.getAPIBaseURL)(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(i)
    }
    async function v(e) {
        let t = await
        function(e) {
            var t;
            let n = o.default.getApplicationAssets(e);
            return null == n || (t = n.lastUpdated, Date.now() - t > 36e5) ? p(e) : Promise.resolve(n)
        }(e);
        return null == t ? void 0 : t.assets
    }
    async function I(e, t) {
        let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(m, e) && null == m[e]);
        if (0 === n.length) return;
        let {
            body: i
        } = await r.HTTP.post({
            url: d.Endpoints.APPLICATION_EXTERNAL_ASSETS(e),
            body: {
                urls: n
            },
            oldFormErrors: !0
        });
        for (let {
                url: e,
                external_asset_path: t
            }
            of i) m[e] = t
    }

    function A(e, t) {
        let n = 0,
            i = e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
        if (i.length > 0)
            for (let i = 0; i < e.length; i++) {
                let s = e[i];
                if (null == s) continue;
                let r = Object.prototype.hasOwnProperty.call(m, s) ? m[s] : void 0;
                null != r && (t[i] = S("mp", r), n++)
            }
        return n === e.length
    }

    function C(e, t, n, i) {
        let s = !1;
        for (let r = 0; r < e.length; r++) {
            let a = e[r];
            if (null == a || null != t[r]) continue;
            let o = Object.prototype.hasOwnProperty.call(n, a) && n[a];
            if (!o) {
                if (null == i || i <= 0) {
                    t[r] = null;
                    continue
                }
                s = !0
            }
            t[r] = o.id
        }
        return s
    }
    async function y(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH",
            applicationId: e
        });
        let i = [],
            s = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
        s.length > 0 && await I(e, s);
        let r = A(t, i);
        if (r) return a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH_SUCCESS",
            applicationId: e
        }), i;
        let o = await v(e),
            l = C(t, i, o, n);
        return l ? p(e).then(() => y(e, t, n - 1)) : (a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH_SUCCESS",
            applicationId: e
        }), i)
    }

    function N(e, t) {
        let n = [],
            i = A(t, n);
        if (i) return n;
        let s = o.default.getApplicationAssets(e);
        return null == s ? n : (C(t, n, s), n)
    }
}