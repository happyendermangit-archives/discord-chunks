function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Switch: function() {
            return T
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("718017"),
        l = n("692547"),
        u = n("186325"),
        d = n("84735"),
        _ = n("180035"),
        c = n("577684");
    let E = {
            mass: 1,
            tension: 250
        },
        I = {
            X: {
                TOP: "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
                BOTTOM: "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"
            },
            BAR: {
                TOP: "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
                BOTTOM: "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z"
            },
            CHECK: {
                TOP: "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
                BOTTOM: "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z"
            }
        },
        T = function(e) {
            let {
                id: t,
                onChange: n,
                checked: s,
                disabled: T,
                className: f,
                focusProps: S,
                innerRef: h
            } = e, {
                reducedMotion: A
            } = r.useContext(u.AccessibilityPreferencesContext), m = r.useRef(null), [N, p] = r.useState(!1), O = (0, _.useToken)(l.default.unsafe_rawColors.PRIMARY_400).spring(), R = (0, _.useToken)(l.default.unsafe_rawColors.GREEN_360).spring(), {
                state: C,
                opacity: g
            } = (0, o.useSpring)({
                config: E,
                opacity: T ? .3 : 1,
                state: N ? s ? .7 : .3 : s ? 1 : 0
            });
            return (0, i.jsx)(d.FocusRing, {
                ...S,
                within: !0,
                offset: -2,
                children: (0, i.jsxs)(o.animated.div, {
                    className: a()(c.container, f, {
                        [c.checked]: s,
                        [c.disabled]: T
                    }),
                    onMouseDown: () => !T && p(!0),
                    onMouseUp: () => p(!1),
                    onMouseLeave: () => p(!1),
                    style: {
                        opacity: g,
                        backgroundColor: C.to({
                            output: [O, R]
                        })
                    },
                    children: [(0, i.jsxs)(o.animated.svg, {
                        className: c.slider,
                        viewBox: "0 0 28 20",
                        preserveAspectRatio: "xMinYMid meet",
                        style: {
                            left: C.to({
                                range: [0, .3, .7, 1],
                                output: [-3, 1, 8, 12]
                            })
                        },
                        "aria-hidden": !0,
                        children: [(0, i.jsx)(o.animated.rect, {
                            fill: "white",
                            x: C.to({
                                range: [0, .3, .7, 1],
                                output: [4, 0, 0, 4]
                            }),
                            y: C.to({
                                range: [0, .3, .7, 1],
                                output: [0, 1, 1, 0]
                            }),
                            height: C.to({
                                range: [0, .3, .7, 1],
                                output: [20, 18, 18, 20]
                            }),
                            width: C.to({
                                range: [0, .3, .7, 1],
                                output: [20, 28, 28, 20]
                            }),
                            rx: "10"
                        }), function(e, t, n, r) {
                            let s = e.to({
                                    output: [t, n]
                                }),
                                a = r ? [I.X.TOP, I.X.TOP, I.CHECK.TOP, I.CHECK.TOP] : [I.X.TOP, I.BAR.TOP, I.BAR.TOP, I.CHECK.TOP],
                                l = r ? [I.X.BOTTOM, I.X.BOTTOM, I.CHECK.BOTTOM, I.CHECK.BOTTOM] : [I.X.BOTTOM, I.BAR.BOTTOM, I.BAR.BOTTOM, I.CHECK.BOTTOM];
                            return (0, i.jsxs)("svg", {
                                viewBox: "0 0 20 20",
                                fill: "none",
                                children: [(0, i.jsx)(o.animated.path, {
                                    fill: s,
                                    d: e.to({
                                        range: [0, .3, .7, 1],
                                        output: a
                                    })
                                }), (0, i.jsx)(o.animated.path, {
                                    fill: s,
                                    d: e.to({
                                        range: [0, .3, .7, 1],
                                        output: l
                                    })
                                })]
                            })
                        }(C, O, R, A.enabled)]
                    }), (0, i.jsx)("input", {
                        id: t,
                        type: "checkbox",
                        ref: e => {
                            m.current = e, null != h && (h.current = e)
                        },
                        className: c.input,
                        tabIndex: T ? -1 : 0,
                        onKeyDown: function(e) {
                            if (!T && !e.repeat)(" " === e.key || "Enter" === e.key) && p(!0)
                        },
                        onKeyUp: function(e) {
                            var t;
                            if (!T && !!N && !e.repeat) p(!1), "Enter" === e.key && (null === (t = m.current) || void 0 === t || t.click())
                        },
                        onChange: function(e) {
                            p(!1), null == n || n(e.currentTarget.checked, e)
                        },
                        checked: s,
                        disabled: T
                    })]
                })
            })
        }
}