function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ShineSizes: function() {
            return r
        },
        Shine: function() {
            return C
        },
        default: function() {
            return m
        }
    });
    var i, r, s = n("37983"),
        l = n("884691"),
        a = n("414456"),
        o = n.n(a),
        u = n("458960"),
        c = n("77078"),
        d = n("252744"),
        f = n("145131"),
        h = n("61435");
    (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
    let v = {
            default: h.shineDefault,
            small: h.shineSmall
        },
        p = {
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
            return (0, s.jsx)(u.default.div, {
                ...i,
                className: o(h.shineContainer, e, {
                    [h.shinePaused]: n
                }),
                children: (0, s.jsx)(f.default, {
                    align: f.default.Align.CENTER,
                    justify: f.default.Justify.CENTER,
                    className: v[t],
                    children: (0, s.jsx)("div", {
                        className: p[t]
                    })
                })
            })
        }
    }
    C.defaultProps = {
        shineSize: "default"
    };
    let E = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: r,
            pauseAnimation: a,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: v,
            onlyShineOnHover: p,
            ...E
        } = e, m = l.createRef(), _ = (0, d.default)(m), g = !i && !r && !0 !== a && (!p || _);
        return (0, s.jsxs)(c.Button, {
            buttonRef: m,
            ...E,
            className: o(h.shinyButton, n),
            disabled: i,
            submitting: r,
            children: [t, g ? (0, s.jsx)(C, {
                shinePaused: f,
                className: o(h.buttonShine, p ? h.onlyShineOnHover : void 0, v),
                shineSize: u
            }) : null]
        })
    };
    E.ShineSizes = r;
    var m = E
}