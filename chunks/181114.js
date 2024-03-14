function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ShineSizes: function() {
            return s
        },
        Shine: function() {
            return C
        },
        default: function() {
            return m
        }
    });
    var i, s, r = n("37983"),
        l = n("884691"),
        a = n("414456"),
        o = n.n(a),
        u = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        h = n("61435");
    (i = s || (s = {})).DEFAULT = "default", i.SMALL = "small";
    let v = {
            default: h.shineDefault,
            small: h.shineSmall
        },
        E = {
            default: h.shineInnerDefault,
            small: h.shineInnerSmall
        };
    class C extends l.PureComponent {
        render() {
            let {
                className: e,
                shineSize: t,
                shinePaused: n,
                ...i
            } = this.props;
            return (0, r.jsx)(u.default.div, {
                ...i,
                className: o(h.shineContainer, e, {
                    [h.shinePaused]: n
                }),
                children: (0, r.jsx)(f.default, {
                    align: f.default.Align.CENTER,
                    justify: f.default.Justify.CENTER,
                    className: v[t],
                    children: (0, r.jsx)("div", {
                        className: E[t]
                    })
                })
            })
        }
    }
    C.defaultProps = {
        shineSize: "default"
    };
    let p = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: s,
            pauseAnimation: a,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: v,
            onlyShineOnHover: E,
            ...p
        } = e, m = l.createRef(), _ = (0, d.default)(m), S = !i && !s && !0 !== a && (!E || _);
        return (0, r.jsxs)(c.Button, {
            buttonRef: m,
            ...p,
            className: o(h.shinyButton, n),
            disabled: i,
            submitting: s,
            children: [t, S ? (0, r.jsx)(C, {
                shinePaused: f,
                className: o(h.buttonShine, E ? h.onlyShineOnHover : void 0, v),
                shineSize: u
            }) : null]
        })
    };
    p.ShineSizes = s;
    var m = p
}