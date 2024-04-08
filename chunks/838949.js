function(e, t, n) {
    "use strict";
    n.r(t), n("733860");
    var r = n("735250"),
        s = n("470079"),
        i = n("780384"),
        a = n("481060"),
        l = n("197344"),
        o = n("526167"),
        u = n("281979"),
        d = n("293716"),
        c = n("810090"),
        p = n("981631"),
        f = n("461113"),
        _ = n("542943"),
        m = n("423028"),
        g = n("528512"),
        E = n("184984"),
        h = n("646562");

    function b(e) {
        let {
            movDark: t = u,
            movLight: n = d,
            mp4Dark: s = f,
            mp4Light: i = g,
            pngDark: a = _,
            pngLight: l = E,
            webmDark: c = m,
            webmLight: b = h
        } = e, T = (0, o.getChromeVersion)(), N = [(0, r.jsx)("source", {
            src: s,
            type: "video/mp4"
        }, "mp4"), (0, r.jsx)("img", {
            alt: "",
            src: a
        }, "png")], I = [(0, r.jsx)("source", {
            src: i,
            type: "video/mp4"
        }, "mp4"), (0, r.jsx)("img", {
            alt: "",
            src: l
        }, "png")];
        return (T > 52 || -1 === T) && (N.unshift((0, r.jsx)("source", {
            src: c,
            type: "video/webm"
        }, "webm")), I.unshift((0, r.jsx)("source", {
            src: b,
            type: "video/webm"
        }, "webm"))), (0, o.supportsHEVCAlpha)() && (N.unshift((0, r.jsx)("source", {
            src: t,
            type: "video/mp4"
        }, "hevc")), I.unshift((0, r.jsx)("source", {
            src: n,
            type: "video/mp4"
        }, "hevc"))), {
            [p.ThemeTypes.DARK]: N,
            [p.ThemeTypes.LIGHT]: I
        }
    }
    let T = l.default.getAppSpinnerSources(),
        N = null != T ? b(T) : null,
        I = b({});
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
        } = (0, a.useThemeContext)(), {
            reducedMotion: _
        } = s.useContext(a.AccessibilityPreferencesContext), m = I;
        null != N && (m = N);
        let g = null !== (t = m[(0, i.isThemeDark)(f) ? p.ThemeTypes.DARK : p.ThemeTypes.LIGHT]) && void 0 !== t ? t : m[p.ThemeTypes.DARK];
        return (0, r.jsx)(c.default, {
            ref: o,
            onLoadedData: d,
            className: u,
            loop: !_.enabled && n,
            autoPlay: !_.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: g
        }, f)
    }
}