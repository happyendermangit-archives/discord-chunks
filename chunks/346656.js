function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("735250"),
        s = n("470079"),
        a = n("803997"),
        o = n.n(a),
        l = n("613828"),
        u = n("442837"),
        d = n("692547"),
        _ = n("481060"),
        c = n("891819"),
        E = n("451478"),
        I = n("956664"),
        T = n("153066"),
        f = n("940627"),
        S = n("795798");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let h = {
            SMOL: "Smol",
            MINI: "Mini",
            SMALLER: "Smaller",
            SMALL: "Small",
            MEDIUM: "Medium",
            LARGE: "Large",
            LARGER: "Larger",
            XLARGE: "XLarge"
        },
        m = {
            [h.SMOL]: 16,
            [h.MINI]: 20,
            [h.SMALLER]: 24,
            [h.SMALL]: 30,
            [h.MEDIUM]: 40,
            [h.LARGE]: 50,
            [h.LARGER]: 64,
            [h.XLARGE]: 100
        },
        N = {
            [h.SMOL]: [10, 10, 8, 6, 6, 4],
            [h.MINI]: [12, 12, 10, 10, 8, 6, 4],
            [h.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
            [h.SMALL]: [14, 14, 12, 12, 10, 8, 6],
            [h.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
            [h.LARGE]: [18, 18, 16, 16, 14, 12, 10],
            [h.LARGER]: [19, 19, 17, 17, 15, 13, 11],
            [h.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
        };
    class O extends s.PureComponent {
        renderAcronym() {
            let {
                guild: e,
                iconSrc: t
            } = this.props;
            return null != e.icon || null != t ? null : (0, r.jsx)("div", {
                className: S.acronym,
                children: e.acronym
            })
        }
        renderBadge() {
            let {
                showBadge: e,
                guild: t,
                badgeStrokeColor: n
            } = this.props;
            return e && null != t.hasFeature ? (0, r.jsx)(f.default, {
                className: S.guildIconBadge,
                guild: t,
                badgeStrokeColor: n
            }) : null
        }
        renderIcon() {
            var e, t;
            let {
                guild: n,
                className: i,
                showBadge: s,
                active: a,
                size: l,
                style: u = {},
                textScale: d,
                showTooltip: c,
                tooltipPosition: E,
                onClick: I,
                to: f,
                badgeStrokeColor: A,
                animate: h,
                tabIndex: m,
                iconSrc: O,
                "aria-hidden": p,
                ...R
            } = this.props, C = N[l], g = null != I ? _.Clickable : "div";
            return (0, r.jsxs)(g, {
                className: o()(S.icon, i, (0, T.getClass)(S, "iconSize", l), {
                    [null !== (e = (0, T.getClass)(S, "iconActive", l)) && void 0 !== e ? e : ""]: a,
                    [S.iconInactive]: !a,
                    [S.noIcon]: null == n.icon
                }),
                "aria-hidden": p,
                style: null == n.icon ? {
                    fontSize: (null !== (t = C[n.acronym.length]) && void 0 !== t ? t : C[C.length - 1]) * d,
                    ...u
                } : u,
                onClick: null != f || null == I ? void 0 : I,
                tabIndex: m,
                ...R,
                children: [this.renderAcronym(), this.renderBadge()]
            })
        }
        renderTooltip() {
            let {
                guild: e,
                showTooltip: t,
                tooltipPosition: n
            } = this.props;
            return t ? (0, r.jsx)(_.Tooltip, {
                text: e.name,
                position: n,
                "aria-label": !1,
                children: e => s.cloneElement(s.Children.only(this.renderIcon()), {
                    ...e
                })
            }) : this.renderIcon()
        }
        render() {
            let {
                to: e,
                guild: t,
                source: n,
                tabIndex: i,
                "aria-hidden": s
            } = this.props;
            return null != e ? (0, r.jsx)(l.Link, {
                "aria-hidden": s,
                to: {
                    pathname: e,
                    state: null != n ? {
                        analyticsSource: n
                    } : null
                },
                "aria-label": t.toString(),
                tabIndex: i,
                children: this.renderTooltip()
            }) : this.renderTooltip()
        }
    }
    let p = u.default.connectStores([E.default], e => {
        let {
            guild: t,
            animate: n,
            iconSrc: i,
            style: r,
            size: s
        } = e;
        return {
            style: {
                ...r,
                backgroundImage: (0, I.makeCssUrlString)(null != i ? i : t.getIconURL(m[s], n && E.default.isFocused()))
            }
        }
    })((0, c.backgroundImagePreloader)(e => (0, r.jsx)(O, {
        ...e
    })));
    class R extends(i = s.PureComponent) {
        render() {
            return (0, r.jsx)(p, {
                ...this.props
            })
        }
    }
    A(R, "Sizes", h), A(R, "defaultProps", {
        size: h.LARGE,
        textScale: 1,
        showBadge: !1,
        showTooltip: !1,
        active: !1,
        tooltipPosition: "top",
        badgeStrokeColor: d.default.unsafe_rawColors.WHITE_500.css,
        animate: !1
    }), t.default = R
}