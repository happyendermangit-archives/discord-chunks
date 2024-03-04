function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ShineSizes: function() {
            return s
        },
        Shine: function() {
            return E
        },
        default: function() {
            return _
        }
    });
    var i, s, r = n("37983"),
        l = n("884691"),
        o = n("414456"),
        a = n.n(o),
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
        C = {
            default: h.shineInnerDefault,
            small: h.shineInnerSmall
        };
    class E extends l.PureComponent {
        render() {
            let {
                className: e,
                shineSize: t,
                shinePaused: n,
                ...i
            } = this.props;
            return (0, r.jsx)(u.default.div, {
                ...i,
                className: a(h.shineContainer, e, {
                    [h.shinePaused]: n
                }),
                children: (0, r.jsx)(f.default, {
                    align: f.default.Align.CENTER,
                    justify: f.default.Justify.CENTER,
                    className: v[t],
                    children: (0, r.jsx)("div", {
                        className: C[t]
                    })
                })
            })
        }
    }
    E.defaultProps = {
        shineSize: "default"
    };
    let p = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: s,
            pauseAnimation: o,
            shineSize: u = "default",
            shinePaused: f,
            buttonShineClassName: v,
            onlyShineOnHover: C,
            ...p
        } = e, _ = l.createRef(), I = (0, d.default)(_), S = !i && !s && !0 !== o && (!C || I);
        return (0, r.jsxs)(c.Button, {
            buttonRef: _,
            ...p,
            className: a(h.shinyButton, n),
            disabled: i,
            submitting: s,
            children: [t, S ? (0, r.jsx)(E, {
                shinePaused: f,
                className: a(h.buttonShine, C ? h.onlyShineOnHover : void 0, v),
                shineSize: u
            }) : null]
        })
    };
    p.ShineSizes = s;
    var _ = p
}