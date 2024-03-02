function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getAssetFromImageURL: function() {
            return p
        },
        getAssetImage: function() {
            return y
        },
        getAssets: function() {
            return T
        },
        fetchAssetIds: function() {
            return A
        },
        getAssetIds: function() {
            return D
        }
    }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var s = n("627445"),
        i = n.n(s),
        r = n("872717"),
        a = n("913144"),
        o = n("493259"),
        d = n("605250"),
        u = n("407063"),
        l = n("49111");
    let f = "https://i.scdn.co/image/",
        _ = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
        c = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
        g = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
        m = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
        h = {
            [l.PlatformTypes.SPOTIFY]: {
                deserialize: e => "".concat(f).concat(encodeURIComponent(e)),
                serialize: e => e.split(f)[1]
            },
            [l.PlatformTypes.TWITCH]: {
                deserialize: (e, t) => _(encodeURIComponent(e), t[0], t[1]),
                serialize: e => {
                    let t = e.match(c);
                    return null != t ? t[1] : null
                }
            },
            [l.PlatformTypes.YOUTUBE]: {
                deserialize: e => g(encodeURIComponent(e)),
                serialize: e => {
                    let t = e.match(m);
                    return null != t ? t[1] : null
                }
            },
            mp: {
                deserialize: e => (i(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
                serialize: e => e
            }
        },
        v = {};
    async function E(e) {
        let {
            body: t
        } = await r.default.get({
            url: l.Endpoints.APPLICATION_ASSETS(e),
            oldFormErrors: !0
        });
        return a.default.dispatch({
            type: "APPLICATION_ASSETS_UPDATE",
            applicationId: e,
            assets: t
        }), o.default.getApplicationAssets(e)
    }

    function p(e, t) {
        let n = h[e].serialize(t);
        return n ? "".concat(e, ":").concat(n.toString()) : null
    }

    function y(e, t, n) {
        if (null != t && t.includes(":")) {
            let [e, s] = t.split(":");
            if (e === l.PlatformTypes.TWITCH) {
                if (null == n || "number" == typeof n) {
                    new(0, d.default)("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
                    return
                }
                return h[l.PlatformTypes.TWITCH].deserialize(s, n)
            }
            return Object.prototype.hasOwnProperty.call(h, e) ? h[e].deserialize(s) : void 0
        }
        if (null == e || null == t) return;
        let s = "number" == typeof n ? "?size=".concat((0, u.getBestMediaProxySize)(n)) : "";
        return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(s) : "".concat(r.default.getAPIBaseURL(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(s)
    }
    async function T(e) {
        let t = await
        function(e) {
            var t;
            let n = o.default.getApplicationAssets(e);
            return null == n || (t = n.lastUpdated, Date.now() - t > 36e5) ? E(e) : Promise.resolve(n)
        }(e);
        return null == t ? void 0 : t.assets
    }
    async function C(e, t) {
        let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(v, e) && null == v[e]);
        if (0 === n.length) return;
        let {
            body: s
        } = await r.default.post({
            url: l.Endpoints.APPLICATION_EXTERNAL_ASSETS(e),
            body: {
                urls: n
            },
            oldFormErrors: !0
        });
        for (let {
                url: e,
                external_asset_path: t
            }
            of s) v[e] = t
    }

    function I(e, t) {
        let n = 0,
            s = e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
        if (s.length > 0)
            for (let s = 0; s < e.length; s++) {
                let i = e[s];
                if (null == i) continue;
                let r = Object.prototype.hasOwnProperty.call(v, i) ? v[i] : void 0;
                null != r && (t[s] = p("mp", r), n++)
            }
        return n === e.length
    }

    function S(e, t, n, s) {
        let i = !1;
        for (let r = 0; r < e.length; r++) {
            let a = e[r];
            if (null == a || null != t[r]) continue;
            let o = Object.prototype.hasOwnProperty.call(n, a) && n[a];
            if (!o) {
                if (null == s || s <= 0) {
                    t[r] = null;
                    continue
                }
                i = !0
            }
            t[r] = o.id
        }
        return i
    }
    async function A(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH",
            applicationId: e
        });
        let s = [],
            i = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
        i.length > 0 && await C(e, i);
        let r = I(t, s);
        if (r) return a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH_SUCCESS",
            applicationId: e
        }), s;
        let o = await T(e),
            d = S(t, s, o, n);
        return d ? E(e).then(() => A(e, t, n - 1)) : (a.default.dispatch({
            type: "APPLICATION_ASSETS_FETCH_SUCCESS",
            applicationId: e
        }), s)
    }

    function D(e, t) {
        let n = [],
            s = I(t, n);
        if (s) return n;
        let i = o.default.getApplicationAssets(e);
        return null == i ? n : (S(t, n, i), n)
    }
}