function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("843762");
    var s = n("37983"),
        r = n("884691"),
        a = n("819855"),
        i = n("77078"),
        l = n("488284"),
        u = n("560528"),
        o = n("242777"),
        c = n("336406"),
        d = n("58608"),
        f = n("49111"),
        p = n("838623"),
        m = n("844389"),
        g = n("392518"),
        _ = n("414298"),
        b = n("815143"),
        h = n("134072");

    function x(e) {
        let {
            movDark: t = o,
            movLight: n = c,
            mp4Dark: r = p,
            mp4Light: a = _,
            pngDark: i = m,
            pngLight: l = b,
            webmDark: d = g,
            webmLight: x = h
        } = e, v = (0, u.getChromeVersion)(), T = [(0, s.jsx)("source", {
            src: r,
            type: "video/mp4"
        }, "mp4"), (0, s.jsx)("img", {
            alt: "",
            src: i
        }, "png")], N = [(0, s.jsx)("source", {
            src: a,
            type: "video/mp4"
        }, "mp4"), (0, s.jsx)("img", {
            alt: "",
            src: l
        }, "png")];
        return (v > 52 || -1 === v) && (T.unshift((0, s.jsx)("source", {
            src: d,
            type: "video/webm"
        }, "webm")), N.unshift((0, s.jsx)("source", {
            src: x,
            type: "video/webm"
        }, "webm"))), (0, u.supportsHEVCAlpha)() && (T.unshift((0, s.jsx)("source", {
            src: t,
            type: "video/mp4"
        }, "hevc")), N.unshift((0, s.jsx)("source", {
            src: n,
            type: "video/mp4"
        }, "hevc"))), {
            [f.ThemeTypes.DARK]: T,
            [f.ThemeTypes.LIGHT]: N
        }
    }
    let v = l.default.getAppSpinnerSources(),
        T = null != v ? x(v) : null,
        N = x({});
    var y = e => {
        var t;
        let {
            loop: n = !0,
            autoPlay: l = !0,
            setRef: u,
            className: o,
            onReady: c
        } = e, {
            theme: p
        } = (0, i.useThemeContext)(), {
            reducedMotion: m
        } = r.useContext(i.AccessibilityPreferencesContext), g = N;
        null != T && (g = T);
        let _ = (0, a.isThemeDark)(p) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT,
            b = null !== (t = g[_]) && void 0 !== t ? t : g[f.ThemeTypes.DARK];
        return (0, s.jsx)(d.default, {
            ref: u,
            onLoadedData: c,
            className: o,
            loop: !m.enabled && n,
            autoPlay: !m.enabled && l,
            playsInline: !0,
            "data-testid": "app-spinner",
            children: b
        }, p)
    }
}