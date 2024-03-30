function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("470079"),
        r = n("751848"),
        i = n("784184"),
        l = n("757631"),
        s = n("513741"),
        o = n("281979"),
        u = n("293716"),
        c = n("81091"),
        m = n("281767"),
        d = n("461113"),
        f = n("542943"),
        p = n("423028"),
        g = n("528512"),
        v = n("184984"),
        b = n("646562");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function N(e) {
        var t, n = e.movDark,
            r = e.movLight,
            i = e.mp4Dark,
            l = e.mp4Light,
            c = e.pngDark,
            N = e.pngLight,
            h = e.webmDark,
            T = e.webmLight,
            y = (0, s.getChromeVersion)(),
            S = [a.createElement("source", {
                key: "mp4",
                src: void 0 === i ? d : i,
                type: "video/mp4"
            }), a.createElement("img", {
                alt: "",
                key: "png",
                src: void 0 === c ? f : c
            })],
            x = [a.createElement("source", {
                key: "mp4",
                src: void 0 === l ? g : l,
                type: "video/mp4"
            }), a.createElement("img", {
                alt: "",
                key: "png",
                src: void 0 === N ? v : N
            })];
        return (y > 52 || -1 === y) && (S.unshift(a.createElement("source", {
            key: "webm",
            src: void 0 === h ? p : h,
            type: "video/webm"
        })), x.unshift(a.createElement("source", {
            key: "webm",
            src: void 0 === T ? b : T,
            type: "video/webm"
        }))), (0, s.supportsHEVCAlpha)() && (S.unshift(a.createElement("source", {
            key: "hevc",
            src: void 0 === n ? o : n,
            type: "video/mp4"
        })), x.unshift(a.createElement("source", {
            key: "hevc",
            src: void 0 === r ? u : r,
            type: "video/mp4"
        }))), E(t = {}, m.ThemeTypes.DARK, S), E(t, m.ThemeTypes.LIGHT, x), t
    }
    var h = l.default.getAppSpinnerSources(),
        T = null != h ? N(h) : null,
        y = N({});
    t.default = function(e) {
        var t, n = e.loop,
            l = e.autoPlay,
            s = e.setRef,
            o = e.className,
            u = e.onReady,
            d = (0, i.useThemeContext)().theme,
            f = a.useContext(i.AccessibilityPreferencesContext).reducedMotion,
            p = y;
        null != T && (p = T);
        var g = null !== (t = p[(0, r.isThemeDark)(d) ? m.ThemeTypes.DARK : m.ThemeTypes.LIGHT]) && void 0 !== t ? t : p[m.ThemeTypes.DARK];
        return a.createElement(c.default, {
            key: d,
            ref: s,
            onLoadedData: u,
            className: o,
            loop: !f.enabled && (void 0 === n || n),
            autoPlay: !f.enabled && (void 0 === l || l),
            playsInline: !0,
            "data-testid": "app-spinner"
        }, g)
    }
}