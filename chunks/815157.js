function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateAttemptId: function() {
            return l
        },
        parseDynamicLink: function() {
            return u
        },
        default: function() {
            return d
        }
    }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var i = n("383536"),
        s = n.n(i),
        r = n("748820"),
        a = n("530334");
    let o = "https://discordapp.page.link";

    function l() {
        return (0, r.v4)()
    }

    function u(e) {
        if (!e.startsWith(o)) return null;
        try {
            var t;
            let n = new URL(e),
                i = n.searchParams,
                s = i.get("link");
            if (null == s) return null;
            let r = decodeURIComponent(s),
                a = new URL(r).searchParams,
                o = {
                    utmSource: null !== (t = i.get("utm_source")) && void 0 !== t ? t : void 0
                };
            for (let [e, t] of a.entries()) o[e] = t;
            return o
        } catch {
            return null
        }
    }

    function d(e, t) {
        let {
            utmSource: n,
            androidFallbackLink: i,
            iosFallbackLink: r,
            ...l
        } = t, u = new URL(e);
        for (let e in l) {
            let t = l[e];
            null != t && u.searchParams.set(e, t)
        }
        let d = encodeURIComponent(u.toString()),
            c = encodeURIComponent((0, a.default)()),
            f = ! function() {
                var e, t;
                let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
                    i = (null == s ? void 0 : null === (e = s.ua) || void 0 === e ? void 0 : e.match(n)) != null,
                    r = (null == s ? void 0 : s.name) === "Safari" && !i;
                return (null == s ? void 0 : null === (t = s.os) || void 0 === t ? void 0 : t.family) !== "iOS" || r
            }() ? 0 : 1,
            _ = null != i ? encodeURIComponent(i) : null,
            h = null != r ? encodeURIComponent(r) : null,
            E = "".concat(o, "/?link=").concat(d, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(c, "&efr=").concat(f);
        return null != _ && (E += "&afl=".concat(_)), null != h && (E += "&ifl=".concat(h)), E
    }
}