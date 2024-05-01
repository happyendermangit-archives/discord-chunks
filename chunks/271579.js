function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        },
        generateAttemptId: function() {
            return l
        },
        parseDynamicLink: function() {
            return u
        }
    }), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
    var i = n("264344"),
        r = n.n(i),
        a = n("153832"),
        s = n("511266");
    let o = "https://discordapp.page.link";

    function l() {
        return (0, a.v4)()
    }

    function u(e) {
        if (!e.startsWith(o)) return null;
        try {
            var t;
            let n = new URL(e).searchParams,
                i = n.get("link");
            if (null == i) return null;
            let r = decodeURIComponent(i),
                a = new URL(r).searchParams,
                s = {
                    utmSource: null !== (t = n.get("utm_source")) && void 0 !== t ? t : void 0
                };
            for (let [e, t] of a.entries()) s[e] = t;
            return s
        } catch {
            return null
        }
    }

    function d(e, t) {
        let {
            utmSource: n,
            androidFallbackLink: i,
            iosFallbackLink: a,
            ...l
        } = t, u = new URL(e);
        for (let e in l) {
            let t = l[e];
            null != t && u.searchParams.set(e, t)
        }
        let d = encodeURIComponent(u.toString()),
            _ = encodeURIComponent((0, s.default)()),
            c = ! function() {
                var e, t;
                let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
                    i = (null === r() || void 0 === r() ? void 0 : null === (e = r().ua) || void 0 === e ? void 0 : e.match(n)) != null,
                    a = (null === r() || void 0 === r() ? void 0 : r().name) === "Safari" && !i;
                return (null === r() || void 0 === r() ? void 0 : null === (t = r().os) || void 0 === t ? void 0 : t.family) !== "iOS" || a
            }() ? 0 : 1,
            E = null != i ? encodeURIComponent(i) : null,
            I = null != a ? encodeURIComponent(a) : null,
            T = "".concat(o, "/?link=").concat(d, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(_, "&efr=").concat(c);
        return null != E && (T += "&afl=".concat(E)), null != I && (T += "&ifl=".concat(I)), T
    }
}