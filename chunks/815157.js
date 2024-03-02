function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateAttemptId: function() {
            return d
        },
        parseDynamicLink: function() {
            return u
        },
        default: function() {
            return l
        }
    }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var s = n("383536"),
        i = n.n(s),
        r = n("748820"),
        a = n("530334");
    let o = "https://discordapp.page.link";

    function d() {
        return (0, r.v4)()
    }

    function u(e) {
        if (!e.startsWith(o)) return null;
        try {
            var t;
            let n = new URL(e),
                s = n.searchParams,
                i = s.get("link");
            if (null == i) return null;
            let r = decodeURIComponent(i),
                a = new URL(r).searchParams,
                o = {
                    utmSource: null !== (t = s.get("utm_source")) && void 0 !== t ? t : void 0
                };
            for (let [e, t] of a.entries()) o[e] = t;
            return o
        } catch {
            return null
        }
    }

    function l(e, t) {
        let {
            utmSource: n,
            androidFallbackLink: s,
            iosFallbackLink: r,
            ...d
        } = t, u = new URL(e);
        for (let e in d) {
            let t = d[e];
            null != t && u.searchParams.set(e, t)
        }
        let l = encodeURIComponent(u.toString()),
            f = encodeURIComponent((0, a.default)()),
            _ = ! function() {
                var e, t;
                let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
                    s = (null == i ? void 0 : null === (e = i.ua) || void 0 === e ? void 0 : e.match(n)) != null,
                    r = (null == i ? void 0 : i.name) === "Safari" && !s;
                return (null == i ? void 0 : null === (t = i.os) || void 0 === t ? void 0 : t.family) !== "iOS" || r
            }() ? 0 : 1,
            c = null != s ? encodeURIComponent(s) : null,
            g = null != r ? encodeURIComponent(r) : null,
            m = "".concat(o, "/?link=").concat(l, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(f, "&efr=").concat(_);
        return null != c && (m += "&afl=".concat(c)), null != g && (m += "&ifl=".concat(g)), m
    }
}