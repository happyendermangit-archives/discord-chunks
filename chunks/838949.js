function(e, t, n) {
    "use strict";
    n.r(t), n("733860");
    var r = n("735250"),
        a = n("470079"),
        s = n("780384"),
        i = n("481060"),
        l = n("197344"),
        o = n("526167"),
        u = n("281979"),
        d = n("293716"),
        c = n("810090"),
        p = n("981631"),
        f = n("461113"),
        m = n("542943"),
        g = n("423028"),
        E = n("528512"),
        _ = n("184984"),
        h = n("646562");

    function T(e) {
        let {
            movDark: t = u,
            movLight: n = d,
            mp4Dark: a = f,
            mp4Light: s = E,
            pngDark: i = m,
            pngLight: l = _,
            webmDark: c = g,
            webmLight: T = h
        } = e, N = (0, o.getChromeVersion)(), b = [(0, r.jsx)("source", {
            src: a,
            type: "video/mp4"
        }, "mp4"), (0, r.jsx)("img", {
            alt: "",
            src: i
        }, "png")], x = [(0, r.jsx)("source", {
            src: s,
            type: "video/mp4"
        }, "mp4"), (0, r.jsx)("img", {
            alt: "",
            src: l
        }, "png")];
        return (N > 52 || -1 === N) && (b.unshift((0, r.jsx)("source", {
            src: c,
            type: "video/webm"
        }, "webm")), x.unshift((0, r.jsx)("source", {
            src: T,
            type: "video/webm"
        }, "webm"))), (0, o.supportsHEVCAlpha)() && (b.unshift((0, r.jsx)("source", {
            src: t,
            type: "video/mp4"
        }, "hevc")), x.unshift((0, r.jsx)("source", {
            src: n,
            type: "video/mp4"
        }, "hevc"))), {
            [p.ThemeTypes.DARK]: b,
            [p.ThemeTypes.LIGHT]: x
        }
    }
    let N = l.default.getAppSpinnerSources(),
        b = null != N ? T(N) : null,
        x = T({});
    t.default = e => {
        var t;
        let {
            loop: n = !0,
            autoPlay: l = !0,
            setRef: o,
            className: u,
            onReady: d
        } = e, {
            theme: f
        } = (0, i.useThemeContext)(), {
            reducedMotion: m
        } = a.useContext(i.AccessibilityPreferencesContext), g = x;
        null != b && (g = b);
        let E = null !== (t = g[(0, s.isThemeDark)(f) ? p.ThemeTypes.DARK : p.ThemeTypes.LIGHT]) && void 0 !== t ? t : g[p.ThemeTypes.DARK];
        return (0, r.jsx)(c.default, {
            ref: o,
            onLoadedData: d,
            className: u,
            loop: !m.enabled && n,
            autoPlay: !m.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: E
        }, f)
    }
}