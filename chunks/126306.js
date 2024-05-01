function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PopoutCSSAnimator: function() {
            return I
        }
    }), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("846519"),
        d = n("186325"),
        _ = n("581536");
    (r = i || (i = {}))[r.TRANSLATE = 1] = "TRANSLATE", r[r.SCALE = 2] = "SCALE", r[r.FADE = 3] = "FADE";
    let c = Object.freeze({
            1: _.translate,
            2: _.scale,
            3: _.fade
        }),
        E = Object.freeze({
            top: _.animatorTop,
            bottom: _.animatorBottom,
            left: _.animatorLeft,
            right: _.animatorRight,
            center: _.animatorCenter,
            window_center: _.animatorCenter
        });

    function I(e) {
        let {
            position: t,
            type: n,
            children: i
        } = e, {
            reducedMotion: r
        } = a.useContext(d.AccessibilityPreferencesContext), o = r.enabled ? 3 : n, [I, T] = a.useState(null != t), [f] = a.useState(() => new u.Timeout);
        return a.useEffect(() => () => f.stop(), [f]), a.useEffect(() => {
            null != t && f.start(10, () => T(!0))
        }, [t, f]), (0, s.jsx)("div", {
            className: l()(null != t ? E[t] : null, {
                [c[o]]: null != t,
                [_.didRender]: I
            }),
            children: i
        })
    }
    I.Types = i
}