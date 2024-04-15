function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Checkbox: function() {
            return p
        }
    }), n("47120");
    var i, r, s, a, o, l = n("735250"),
        u = n("470079"),
        d = n("120356"),
        _ = n.n(d),
        c = n("512722"),
        E = n.n(c),
        I = n("866442"),
        T = n("692547"),
        f = n("84735"),
        S = n("263704"),
        A = n("981631"),
        h = n("532721");

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(a = i || (i = {})).DEFAULT = "default", a.INVERTED = "inverted", a.GHOST = "ghost", a.ROW = "row", (o = r || (r = {})).TOP = "top", o.CENTER = "center";
    let N = {
            BOX: h.box,
            ROUND: h.round,
            SMALL_BOX: h.smallBox
        },
        O = {
            top: h.alignTop,
            center: h.alignCenter
        };
    class p extends(s = u.PureComponent) {
        getInputMode() {
            return this.props.disabled ? "disabled" : this.props.readOnly ? "readonly" : "default"
        }
        getStyle() {
            var e;
            let {
                value: t,
                type: n,
                color: i
            } = this.props, r = null !== (e = this.props.style) && void 0 !== e ? e : {};
            if (!1 === t) return r;
            if (r = {
                    ...r
                }, i === T.default.unsafe_rawColors.BRAND_500.css) switch (n) {
                case "default":
                    r.borderColor = "var(--control-brand-foreground)";
                    break;
                case "ghost":
                    r.borderColor = "var(--brand-experiment-15a)", r.backgroundColor = "var(--brand-experiment-15a)";
                    break;
                case "row":
                case "inverted":
                    r.borderColor = "var(--brand-experiment-400)", r.backgroundColor = "var(--brand-experiment-500)"
            } else switch (n) {
                case "default":
                    r.borderColor = i;
                    break;
                case "ghost":
                    if (i.startsWith("var(--")) {
                        let e = "".concat(i.slice(0, -1), "-hsl)");
                        r.borderColor = "rgba(".concat(e, ", 0.15)"), r.backgroundColor = "rgba(".concat(e, ", 0.15)")
                    } else E()((0, I.isValidHex)(i), "Checkbox: ".concat(i, " is not a valid hex color")), r.borderColor = (0, I.hex2rgb)(i, .15), r.backgroundColor = (0, I.hex2rgb)(i, .15);
                    break;
                case "row":
                case "inverted":
                    r.backgroundColor = i, r.borderColor = i
            }
            return r
        }
        getColor() {
            let {
                value: e,
                type: t,
                color: n
            } = this.props;
            return e ? "inverted" === t || "row" === t ? T.default.unsafe_rawColors.WHITE_500.css : n : T.default.unsafe_rawColors.TRANSPARENT.css
        }
        render() {
            let {
                disabled: e,
                readOnly: t,
                value: n,
                shape: i,
                align: r = "center",
                className: s,
                innerClassName: a,
                children: o,
                size: u,
                reverse: d,
                checkboxColor: c,
                displayOnly: E,
                type: I,
                onClick: T
            } = this.props, m = null != o ? (0, l.jsx)("div", {
                className: _()(h.label, e ? h.labelDisabled : h.labelClickable, d ? h.labelReversed : h.labelForward),
                style: {
                    lineHeight: "".concat(u, "px")
                },
                children: o
            }) : null, N = this.props.disabled ? h.inputDisabled : this.props.readOnly ? h.inputReadonly : h.inputDefault;
            return (0, l.jsxs)(E ? "span" : "label", {
                className: _()(e ? h.checkboxWrapperDisabled : h.checkboxWrapper, O[r], s, {
                    [h.row]: "row" === I,
                    [h.checked]: n
                }),
                children: [d ? m : null, !E && (0, l.jsx)(f.FocusRing, {
                    children: (0, l.jsx)("input", {
                        className: _()(a, N),
                        type: "checkbox",
                        onClick: T,
                        onChange: e || t ? A.NOOP : this.handleChange,
                        checked: n,
                        style: {
                            width: u,
                            height: u
                        }
                    })
                }), (0, l.jsx)("div", {
                    className: _()(h.checkbox, i, {
                        [h.checked]: n
                    }),
                    style: {
                        width: u,
                        height: u,
                        borderColor: c,
                        ...this.getStyle()
                    },
                    children: (0, l.jsx)(S.default, {
                        width: 18,
                        height: 18,
                        color: this.getColor(),
                        "aria-hidden": !0
                    })
                }), d ? null : m]
            })
        }
        constructor(...e) {
            super(...e), m(this, "handleChange", e => {
                let {
                    onChange: t
                } = this.props;
                null == t || t(e, e.currentTarget.checked)
            })
        }
    }
    m(p, "Types", i), m(p, "Shapes", N), m(p, "Aligns", r), m(p, "defaultProps", {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: "default",
        color: T.default.unsafe_rawColors.BRAND_500.css,
        shape: N.BOX,
        align: "center",
        onChange: A.NOOP,
        reverse: !1
    })
}