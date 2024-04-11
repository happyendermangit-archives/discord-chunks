function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchAssetIds: function() {
            return C
        },
        getAssetFromImageURL: function() {
            return h
        },
        getAssetIds: function() {
            return g
        },
        getAssetImage: function() {
            return m
        },
        getAssets: function() {
            return N
        }
    }), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
    var i = n("512722"),
        r = n.n(i),
        s = n("544891"),
        a = n("570140"),
        o = n("430449"),
        l = n("710845"),
        u = n("134432"),
        d = n("981631");
    let _ = "https://i.scdn.co/image/",
        c = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
        E = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
        I = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
        T = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
        f = {
            [d.PlatformTypes.SPOTIFY]: {
                deserialize: e => "".concat(_).concat(encodeURIComponent(e)),
                serialize: e => e.split(_)[1]
            },
            [d.PlatformTypes.TWITCH]: {
                deserialize: (e, t) => c(encodeURIComponent(e), t[0], t[1]),
                serialize: e => {
                    let t = e.match(E);
                    return null != t ? t[1] : null
                }
            },
            [d.PlatformTypes.YOUTUBE]: {
                deserialize: e => I(encodeURIComponent(e)),
                serialize: e => {
                    let t = e.match(T);
                    return null != t ? t[1] : null
                }
            },
            mp: {
                deserialize: e => (r()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
                serialize: e => e
            }
        },
        S = {};
    async function A(e) {
        let {
            body: t
        } = await s.HTTP.get({
            url: d.Endpoints.APPLICATION_ASSETS(e),
            oldFormErrors: !0
        });
        return a.default.dispatch({
            type: "APPLICATION_ASSETS_UPDATE",
            applicationId: e,
            assets: t
        }), o.default.getApplicationAssets(e)
    }

    function h(e, t) {
        let n = f[e].serialize(t);
        return n ? "".concat(e, ":").concat(n.toString()) : null
    }

    function m(e, t, n) {
        if (null != t && t.includes(":")) {
            let [e, i] = t.split(":");
            if (e === d.PlatformTypes.TWITCH) {
                if (null == n || "number" == typeof n) {
                    new l.default("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
                    return
                }
                return f[d.PlatformTypes.TWITCH].deserialize(i, n)
            }
            return Object.prototype.hasOwnProperty.call(f, e) ? f[e].deserialize(i) : void 0
        }
        if (null == e || null == t) return;
        let i = "number" == typeof n ? "?size=".concat((0, u.getBestMediaProxySize)(n)) : "";
        return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(i) : "".concat((0, s.getAPIBaseURL)(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(i)
    }
    async function N(e) {
        let t = await
        function(e) {
            var t;
            let n = o.default.getApplicationAssets(e);
            return null == n || (t = n.lastUpdated, Date.now() - t > 36e5) ? A(e) : Promise.resolve(n)
        }(e);
        return null == t ? void 0 : t.assets
    }
    async function O(e, t) {
        let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(S, e) && null == S[e]);
        if (0 === n.length) return;
        let {
            body: i
        } = await s.HTTP.post({
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
            of i) S[e] = t
    }

    function p(e, t) {
        let n = 0;
        if (e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:"))).length > 0)
            for (let i = 0; i < e.length; i++) {
                let r = e[i];
                if (null == r) continue;
                let s = Object.prototype.hasOwnProperty.call(S, r) ? S[r] : void 0;
                null != s && (t[i] = h("mp", s), n++)
            }
        return n === e.length
    }

    function R(e, t, n, i) {
        let r = !1;
        for (let s = 0; s < e.length; s++) {
            let a = e[s];
            if (null == a || null != t[s]) continue;
            let o = Object.prototype.hasOwnProperty.call(n, a) && n[a];
            if (!o) {
                if (null == i || i <= 0) {
                    t[s] = null;
                    continue
                }
                r = !0
            }
            t[s] = o.id
        }
        return r
    }
    async function C(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH",
            applicationId: e
        });
        let i = [],
            r = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
        return (r.length > 0 && await O(e, r), p(t, i)) ? (a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH_SUCCESS",
            applicationId: e
        }), i) : R(t, i, await N(e), n) ? A(e).then(() => C(e, t, n - 1)) : (a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH_SUCCESS",
            applicationId: e
        }), i)
    }

    function g(e, t) {
        let n = [];
        if (p(t, n)) return n;
        let i = o.default.getApplicationAssets(e);
        return null == i ? n : (R(t, n, i), n)
    }
}