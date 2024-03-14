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
                    lineClamp: f,
                    color: _,
                    tabularNumbers: h = !1,
                    scaleFontToUserSetting: E = !1,
                    ...g
                } = e,
                m = "",
                p = {};
            if (null != f && (1 === f ? m = u.lineClamp1 : (m = u.lineClamp2Plus, p = {
                    lineClamp: f,
                    WebkitLineClamp: f
                })), void 0 !== _) switch (_) {
                case "none":
                    t = void 0;
                    break;
                case "always-white":
                    t = "white";
                    break;
                default:
                    var S;
                    t = null === (S = l.default.colors[c[_]]) || void 0 === S ? void 0 : S.css
            }
            let v = {
                color: t,
                ...p,
                ...g.style
            };
            return (0, i.jsx)(s, {
                className: r({
                    [u.defaultColor]: void 0 === _,
                    [u.selectable]: a,
                    [u.tabularNumbers]: h,
                    [d.fontScaling]: E
                }, m, d[n], o),
                ...g,
                style: Object.values(v).filter(Boolean).length > 0 ? v : void 0,
                "data-text-variant": n
            })
        }
}