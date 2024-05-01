function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Text: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("803997"),
        s = n.n(a),
        o = n("696689"),
        l = n.n(o),
        u = n("692547"),
        d = n("481517"),
        _ = n("430600");
    let c = Object.fromEntries(Object.keys(u.default.colors).map(e => [l()(e), e])),
        E = r.forwardRef(function(e, t) {
            let n, {
                    variant: r,
                    tag: a = "div",
                    selectable: o = !1,
                    className: l,
                    lineClamp: E,
                    color: I,
                    tabularNumbers: T = !1,
                    scaleFontToUserSetting: f = !1,
                    ...S
                } = e,
                h = "",
                A = {};
            if (null != E && (1 === E ? h = d.lineClamp1 : (h = d.lineClamp2Plus, A = {
                    lineClamp: E,
                    WebkitLineClamp: E
                })), void 0 !== I) switch (I) {
                case "currentColor":
                    n = "currentColor";
                    break;
                case "none":
                    n = void 0;
                    break;
                case "always-white":
                    n = "white";
                    break;
                default:
                    var m;
                    n = null === (m = u.default.colors[c[I]]) || void 0 === m ? void 0 : m.css
            }
            let N = {
                color: n,
                ...A,
                ...S.style
            };
            return (0, i.jsx)(a, {
                ref: t,
                className: s()({
                    [d.defaultColor]: void 0 === I,
                    [d.selectable]: o,
                    [d.tabularNumbers]: T,
                    [_.fontScaling]: f
                }, h, _[r], l),
                ...S,
                style: Object.values(N).filter(Boolean).length > 0 ? N : void 0,
                "data-text-variant": r
            })
        })
}