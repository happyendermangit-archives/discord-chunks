function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("866442"),
        d = n("692547"),
        _ = n("84735"),
        c = n("285952"),
        E = n("263704"),
        I = n("981631"),
        T = n("330888"),
        f = n("611273");

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let h = l().memoize(e => {
        let t = !1;
        if (null != e && (0, u.isValidHex)(e)) {
            let n = (0, u.hex2int)(e);
            null != n && (t = .2 > (0, u.getDarkness)(n))
        }
        return t ? d.default.unsafe_rawColors.BLACK_500.css : d.default.unsafe_rawColors.WHITE_500.css
    });
    class A extends r.PureComponent {
        render() {
            let e;
            let {
                selected: t,
                color: n,
                className: r,
                children: s
            } = this.props, o = h(n);
            return t ? e = {
                color: o,
                background: null != n ? n : d.default.unsafe_rawColors.BRAND_500.css
            } : null != n && (e = {
                color: n
            }), (0, i.jsx)(_.FocusRing, {
                offset: {
                    left: 4
                },
                children: (0, i.jsxs)(c.default, {
                    className: a()(T.selectableItem, r, {
                        [T.selected]: t
                    }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: c.default.Align.CENTER,
                    style: {
                        ...e,
                        ...this.props.style
                    },
                    role: "button",
                    tabIndex: 0,
                    children: [(0, i.jsx)(c.default, {
                        align: c.default.Align.CENTER,
                        className: T.selectableItemLabel,
                        shrink: 1,
                        children: s
                    }), t && (0, i.jsx)(c.default, {
                        wrap: c.default.Wrap.WRAP,
                        className: f.marginReset,
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(E.default, {
                            color: o
                        })
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), S(this, "state", {
                color: h(this.props.color)
            }), S(this, "handleKeyUp", e => {
                if (e.which === I.KeyboardKeys.ENTER || e.which === I.KeyboardKeys.SPACE) {
                    let {
                        onClick: e,
                        ...t
                    } = this.props;
                    e(t)
                }
            }), S(this, "handleClick", () => {
                let {
                    onClick: e,
                    ...t
                } = this.props;
                e(t)
            })
        }
    }
    t.default = A
}