function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Text: function() {
            return Text
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        a = n("773179"),
        o = n.n(a),
        l = n("669491"),
        u = n("619974"),
        c = n("323805");
    let d = Object.fromEntries(Object.keys(l.default.colors).map(e => [o.kebabCase(e), e])),
        Text = e => {
            let t, {
                    variant: n,
                    tag: r = "div",
                    selectable: a = !1,
                    className: o,
                    lineClamp: f,
                    color: E,
                    tabularNumbers: p = !1,
                    scaleFontToUserSetting: h = !1,
                    ..._
                } = e,
                S = "",
                m = {};
            if (null != f && (1 === f ? S = u.lineClamp1 : (S = u.lineClamp2Plus, m = {
                    lineClamp: f,
                    WebkitLineClamp: f
                })), void 0 !== E) switch (E) {
                case "none":
                    t = void 0;
                    break;
                case "always-white":
                    t = "white";
                    break;
                default:
                    var T;
                    t = null === (T = l.default.colors[d[E]]) || void 0 === T ? void 0 : T.css
            }
            let g = {
                color: t,
                ...m,
                ..._.style
            };
            return (0, i.jsx)(r, {
                className: s({
                    [u.defaultColor]: void 0 === E,
                    [u.selectable]: a,
                    [u.tabularNumbers]: p,
                    [c.fontScaling]: h
                }, S, c[n], o),
                ..._,
                style: Object.values(g).filter(Boolean).length > 0 ? g : void 0,
                "data-text-variant": n
            })
        }
}