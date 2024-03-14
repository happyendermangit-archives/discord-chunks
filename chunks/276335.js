function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PopoutCSSAnimator: function() {
            return E
        }
    }), n("222007");
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("862337"),
        d = n("413197"),
        c = n("505444");
    (s = i || (i = {}))[s.TRANSLATE = 1] = "TRANSLATE", s[s.SCALE = 2] = "SCALE", s[s.FADE = 3] = "FADE";
    let f = Object.freeze({
            1: c.translate,
            2: c.scale,
            3: c.fade
        }),
        _ = Object.freeze({
            top: c.animatorTop,
            bottom: c.animatorBottom,
            left: c.animatorLeft,
            right: c.animatorRight,
            center: c.animatorCenter,
            window_center: c.animatorCenter
        });

    function E(e) {
        let {
            position: t,
            type: n,
            children: i
        } = e, {
            reducedMotion: s
        } = a.useContext(d.AccessibilityPreferencesContext), o = s.enabled ? 3 : n, [E, h] = a.useState(null != t), [g] = a.useState(() => new u.Timeout);
        return a.useEffect(() => () => g.stop(), [g]), a.useEffect(() => {
            null != t && g.start(10, () => h(!0))
        }, [t, g]), (0, r.jsx)("div", {
            className: l(null != t ? _[t] : null, {
                [f[o]]: null != t,
                [c.didRender]: E
            }),
            children: i
        })
    }
    E.Types = i
}