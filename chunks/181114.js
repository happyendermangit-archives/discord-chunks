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
            return _
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
    let E = {
            default: h.shineDefault,
            small: h.shineSmall
        },
        v = {
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
                    className: E[t],
                    children: (0, s.jsx)("div", {
                        className: v[t]
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
            submitting: r,
            pauseAnimation: a,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: E,
            onlyShineOnHover: v,
            ...p
        } = e, _ = l.createRef(), I = (0, d.default)(_), m = !i && !r && !0 !== a && (!v || I);
        return (0, s.jsxs)(c.Button, {
            buttonRef: _,
            ...p,
            className: o(h.shinyButton, n),
            disabled: i,
            submitting: r,
            children: [t, m ? (0, s.jsx)(C, {
                shinePaused: f,
                className: o(h.buttonShine, v ? h.onlyShineOnHover : void 0, E),
                shineSize: u
            }) : null]
        })
    };
    p.ShineSizes = r;
    var _ = p
}