function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Checkbox: function() {
            return v
        }
    }), n("222007");
    var i, s, r, a, o = n("37983"),
        l = n("884691"),
        u = n("414456"),
        d = n.n(u),
        c = n("627445"),
        _ = n.n(c),
        f = n("509043"),
        E = n("669491"),
        h = n("718776"),
        g = n("36694"),
        m = n("49111"),
        p = n("139368");
    (r = i || (i = {})).DEFAULT = "default", r.INVERTED = "inverted", r.GHOST = "ghost", r.ROW = "row", (a = s || (s = {})).TOP = "top", a.CENTER = "center";
    let S = {
            BOX: p.box,
            ROUND: p.round,
            SMALL_BOX: p.smallBox
        },
        T = {
            top: p.alignTop,
            center: p.alignCenter
        };
    class v extends l.PureComponent {
        getInputMode() {
            return this.props.disabled ? "disabled" : this.props.readOnly ? "readonly" : "default"
        }
        getStyle() {
            var e;
            let {
                value: t,
                type: n,
                color: i
            } = this.props, s = null !== (e = this.props.style) && void 0 !== e ? e : {};
            if (!1 === t) return s;
            if (s = {
                    ...s
                }, i === E.default.unsafe_rawColors.BRAND_500.css) switch (n) {
                case "default":
                    s.borderColor = "var(--control-brand-foreground)";
                    break;
                case "ghost":
                    s.borderColor = "var(--brand-experiment-15a)", s.backgroundColor = "var(--brand-experiment-15a)";
                    break;
                case "row":
                case "inverted":
                    s.borderColor = "var(--brand-experiment-400)", s.backgroundColor = "var(--brand-experiment-500)"
            } else switch (n) {
                case "default":
                    s.borderColor = i;
                    break;
                case "ghost":
                    if (i.startsWith("var(--")) {
                        let e = "".concat(i.slice(0, -1), "-hsl)");
                        s.borderColor = "rgba(".concat(e, ", 0.15)"), s.backgroundColor = "rgba(".concat(e, ", 0.15)")
                    } else _((0, f.isValidHex)(i), "Checkbox: ".concat(i, " is not a valid hex color")), s.borderColor = (0, f.hex2rgb)(i, .15), s.backgroundColor = (0, f.hex2rgb)(i, .15);
                    break;
                case "row":
                case "inverted":
                    s.backgroundColor = i, s.borderColor = i
            }
            return s
        }
        getColor() {
            let {
                value: e,
                type: t,
                color: n
            } = this.props;
            return e ? "inverted" === t || "row" === t ? E.default.unsafe_rawColors.WHITE_500.css : n : E.default.unsafe_rawColors.TRANSPARENT.css
        }
        render() {
            let {
                disabled: e,
                readOnly: t,
                value: n,
                shape: i,
                align: s = "center",
                className: r,
                innerClassName: a,
                children: l,
                size: u,
                reverse: c,
                checkboxColor: _,
                displayOnly: f,
                type: E,
                onClick: S
            } = this.props, v = null != l ? (0, o.jsx)("div", {
                className: d(p.label, e ? p.labelDisabled : p.labelClickable, c ? p.labelReversed : p.labelForward),
                style: {
                    lineHeight: "".concat(u, "px")
                },
                children: l
            }) : null, I = this.props.disabled ? p.inputDisabled : this.props.readOnly ? p.inputReadonly : p.inputDefault;
            return (0, o.jsxs)(f ? "span" : "label", {
                className: d(e ? p.checkboxWrapperDisabled : p.checkboxWrapper, T[s], r, {
                    [p.row]: "row" === E,
                    [p.checked]: n
                }),
                children: [c ? v : null, !f && (0, o.jsx)(h.FocusRing, {
                    children: (0, o.jsx)("input", {
                        className: d(a, I),
                        type: "checkbox",
                        onClick: S,
                        onChange: e || t ? m.NOOP : this.handleChange,
                        checked: n,
                        style: {
                            width: u,
                            height: u
                        }
                    })
                }), (0, o.jsx)("div", {
                    className: d(p.checkbox, i, {
                        [p.checked]: n
                    }),
                    style: {
                        width: u,
                        height: u,
                        borderColor: _,
                        ...this.getStyle()
                    },
                    children: (0, o.jsx)(g.default, {
                        width: 18,
                        height: 18,
                        color: this.getColor(),
                        "aria-hidden": !0
                    })
                }), c ? null : v]
            })
        }
        constructor(...e) {
            super(...e), this.handleChange = e => {
                let {
                    onChange: t
                } = this.props;
                null == t || t(e, e.currentTarget.checked)
            }
        }
    }
    v.Types = i, v.Shapes = S, v.Aligns = s, v.defaultProps = {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: "default",
        color: E.default.unsafe_rawColors.BRAND_500.css,
        shape: S.BOX,
        align: "center",
        onChange: m.NOOP,
        reverse: !1
    }
}