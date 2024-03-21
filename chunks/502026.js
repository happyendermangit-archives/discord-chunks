function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Text: function() {
            return Text
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("331545"),
        o = n.n(a),
        l = n("669491"),
        u = n("619974"),
        d = n("323805");
    let c = Object.fromEntries(Object.keys(l.default.colors).map(e => [o(e), e])),
        Text = e => {
            let t, {
                    variant: n,
                    tag: s = "div",
                    selectable: a = !1,
                    className: o,
                    lineClamp: _,
                    color: f,
                    tabularNumbers: E = !1,
                    scaleFontToUserSetting: h = !1,
                    ...g
                } = e,
                m = "",
                p = {};
            if (null != _ && (1 === _ ? m = u.lineClamp1 : (m = u.lineClamp2Plus, p = {
                    lineClamp: _,
                    WebkitLineClamp: _
                })), void 0 !== f) switch (f) {
                case "none":
                    t = void 0;
                    break;
                case "always-white":
                    t = "white";
                    break;
                default:
                    var S;
                    t = null === (S = l.default.colors[c[f]]) || void 0 === S ? void 0 : S.css
            }
            let v = {
                color: t,
                ...p,
                ...g.style
            };
            return (0, i.jsx)(s, {
                className: r({
                    [u.defaultColor]: void 0 === f,
                    [u.selectable]: a,
                    [u.tabularNumbers]: E,
                    [d.fontScaling]: h
                }, m, d[n], o),
                ...g,
                style: Object.values(v).filter(Boolean).length > 0 ? v : void 0,
                "data-text-variant": n
            })
        }
}