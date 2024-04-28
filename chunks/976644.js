function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Shine: function() {
            return m
        },
        ShineSizes: function() {
            return o
        }
    });
    var i, r, s, a, o, l, u = n("735250"),
        d = n("470079"),
        _ = n("120356"),
        c = n.n(_),
        E = n("748780"),
        I = n("481060"),
        T = n("727637"),
        f = n("285952"),
        S = n("481887");
    (i = o || (o = {})).DEFAULT = "default", i.SMALL = "small";
    let h = {
            default: S.shineDefault,
            small: S.shineSmall
        },
        A = {
            default: S.shineInnerDefault,
            small: S.shineInnerSmall
        };
    class m extends(l = d.PureComponent) {
        render() {
            let {
                className: e,
                shineSize: t,
                shinePaused: n,
                ...i
            } = this.props;
            return (0, u.jsx)(E.default.div, {
                ...i,
                className: c()(S.shineContainer, e, {
                    [S.shinePaused]: n
                }),
                children: (0, u.jsx)(f.default, {
                    align: f.default.Align.CENTER,
                    justify: f.default.Justify.CENTER,
                    className: h[t],
                    children: (0, u.jsx)("div", {
                        className: A[t]
                    })
                })
            })
        }
    }
    a = {
        shineSize: "default"
    }, (s = "defaultProps") in(r = m) ? Object.defineProperty(r, s, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[s] = a;
    let N = e => {
        let {
            children: t,
            className: n,
            disabled: i,
            submitting: r,
            pauseAnimation: s,
            shineSize: a = "default",
            shinePaused: o,
            buttonShineClassName: l,
            onlyShineOnHover: _,
            ...E
        } = e, f = d.createRef(), h = (0, T.default)(f), A = !i && !r && !0 !== s && (!_ || h);
        return (0, u.jsxs)(I.Button, {
            buttonRef: f,
            ...E,
            className: c()(S.shinyButton, n),
            disabled: i,
            submitting: r,
            children: [t, A ? (0, u.jsx)(m, {
                shinePaused: o,
                className: c()(S.buttonShine, _ ? S.onlyShineOnHover : void 0, l),
                shineSize: a
            }) : null]
        })
    };
    N.ShineSizes = o, t.default = N
}