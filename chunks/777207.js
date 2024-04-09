function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Text: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("696689"),
        o = n.n(a),
        l = n("692547"),
        u = n("832764"),
        d = n("487466");
    let _ = Object.fromEntries(Object.keys(l.default.colors).map(e => [o()(e), e])),
        c = e => {
            let t, {
                    variant: n,
                    tag: r = "div",
                    selectable: a = !1,
                    className: o,
                    lineClamp: c,
                    color: E,
                    tabularNumbers: I = !1,
                    scaleFontToUserSetting: T = !1,
                    ...f
                } = e,
                S = "",
                h = {};
            if (null != c && (1 === c ? S = u.lineClamp1 : (S = u.lineClamp2Plus, h = {
                    lineClamp: c,
                    WebkitLineClamp: c
                })), void 0 !== E) switch (E) {
                case "none":
                    t = void 0;
                    break;
                case "always-white":
                    t = "white";
                    break;
                default:
                    var A;
                    t = null === (A = l.default.colors[_[E]]) || void 0 === A ? void 0 : A.css
            }
            let m = {
                color: t,
                ...h,
                ...f.style
            };
            return (0, i.jsx)(r, {
                className: s()({
                    [u.defaultColor]: void 0 === E,
                    [u.selectable]: a,
                    [u.tabularNumbers]: I,
                    [d.fontScaling]: T
                }, S, d[n], o),
                ...f,
                style: Object.values(m).filter(Boolean).length > 0 ? m : void 0,
                "data-text-variant": n
            })
        }
}