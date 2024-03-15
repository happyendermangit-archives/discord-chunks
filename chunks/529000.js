function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("917351"),
        l = n.n(o),
        u = n("509043"),
        d = n("669491"),
        c = n("718776"),
        f = n("145131"),
        _ = n("36694"),
        E = n("49111"),
        h = n("750692"),
        g = n("890957");
    let m = l.memoize(e => {
        let t = !1;
        if (null != e && (0, u.isValidHex)(e)) {
            let n = (0, u.hex2int)(e);
            null != n && (t = .2 > (0, u.getDarkness)(n))
        }
        return t ? d.default.unsafe_rawColors.BLACK_500.css : d.default.unsafe_rawColors.WHITE_500.css
    });
    class p extends s.PureComponent {
        render() {
            let e;
            let {
                selected: t,
                color: n,
                className: s,
                children: r
            } = this.props, o = m(n);
            return t ? e = {
                color: o,
                background: null != n ? n : d.default.unsafe_rawColors.BRAND_500.css
            } : null != n && (e = {
                color: n
            }), (0, i.jsx)(c.FocusRing, {
                offset: {
                    left: 4
                },
                children: (0, i.jsxs)(f.default, {
                    className: a(h.selectableItem, s, {
                        [h.selected]: t
                    }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: f.default.Align.CENTER,
                    style: {
                        ...e,
                        ...this.props.style
                    },
                    role: "button",
                    tabIndex: 0,
                    children: [(0, i.jsx)(f.default, {
                        align: f.default.Align.CENTER,
                        className: h.selectableItemLabel,
                        shrink: 1,
                        children: r
                    }), t && (0, i.jsx)(f.default, {
                        wrap: f.default.Wrap.WRAP,
                        className: g.marginReset,
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(_.default, {
                            color: o
                        })
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                color: m(this.props.color)
            }, this.handleKeyUp = e => {
                if (e.which === E.KeyboardKeys.ENTER || e.which === E.KeyboardKeys.SPACE) {
                    let {
                        onClick: e,
                        ...t
                    } = this.props;
                    e(t)
                }
            }, this.handleClick = () => {
                let {
                    onClick: e,
                    ...t
                } = this.props;
                e(t)
            }
        }
    }
    var S = p
}