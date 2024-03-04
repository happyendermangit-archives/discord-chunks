function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Switch: function() {
            return E
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("907002"),
        l = n("669491"),
        u = n("413197"),
        d = n("718776"),
        c = n("708253"),
        f = n("737185");
    let _ = {
            mass: 1,
            tension: 250
        },
        h = {
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
        E = function(e) {
            let {
                id: t,
                onChange: n,
                checked: r,
                disabled: E,
                className: g,
                focusProps: m,
                innerRef: p
            } = e, {
                reducedMotion: S
            } = s.useContext(u.AccessibilityPreferencesContext), v = s.useRef(null), [T, I] = s.useState(!1), C = (0, c.useToken)(l.default.unsafe_rawColors.PRIMARY_400).spring(), A = (0, c.useToken)(l.default.unsafe_rawColors.GREEN_360).spring(), {
                state: y,
                opacity: N
            } = (0, o.useSpring)({
                config: _,
                opacity: E ? .3 : 1,
                state: T ? r ? .7 : .3 : r ? 1 : 0
            });
            return (0, i.jsx)(d.FocusRing, {
                ...m,
                within: !0,
                offset: -2,
                children: (0, i.jsxs)(o.animated.div, {
                    className: a(f.container, g, {
                        [f.checked]: r,
                        [f.disabled]: E
                    }),
                    onMouseDown: () => !E && I(!0),
                    onMouseUp: () => I(!1),
                    onMouseLeave: () => I(!1),
                    style: {
                        opacity: N,
                        backgroundColor: y.to({
                            output: [C, A]
                        })
                    },
                    children: [(0, i.jsxs)(o.animated.svg, {
                        className: f.slider,
                        viewBox: "0 0 28 20",
                        preserveAspectRatio: "xMinYMid meet",
                        style: {
                            left: y.to({
                                range: [0, .3, .7, 1],
                                output: [-3, 1, 8, 12]
                            })
                        },
                        "aria-hidden": !0,
                        children: [(0, i.jsx)(o.animated.rect, {
                            fill: "white",
                            x: y.to({
                                range: [0, .3, .7, 1],
                                output: [4, 0, 0, 4]
                            }),
                            y: y.to({
                                range: [0, .3, .7, 1],
                                output: [0, 1, 1, 0]
                            }),
                            height: y.to({
                                range: [0, .3, .7, 1],
                                output: [20, 18, 18, 20]
                            }),
                            width: y.to({
                                range: [0, .3, .7, 1],
                                output: [20, 28, 28, 20]
                            }),
                            rx: "10"
                        }), function(e, t, n, s) {
                            let r = e.to({
                                    output: [t, n]
                                }),
                                a = s ? [h.X.TOP, h.X.TOP, h.CHECK.TOP, h.CHECK.TOP] : [h.X.TOP, h.BAR.TOP, h.BAR.TOP, h.CHECK.TOP],
                                l = s ? [h.X.BOTTOM, h.X.BOTTOM, h.CHECK.BOTTOM, h.CHECK.BOTTOM] : [h.X.BOTTOM, h.BAR.BOTTOM, h.BAR.BOTTOM, h.CHECK.BOTTOM];
                            return (0, i.jsxs)("svg", {
                                viewBox: "0 0 20 20",
                                fill: "none",
                                children: [(0, i.jsx)(o.animated.path, {
                                    fill: r,
                                    d: e.to({
                                        range: [0, .3, .7, 1],
                                        output: a
                                    })
                                }), (0, i.jsx)(o.animated.path, {
                                    fill: r,
                                    d: e.to({
                                        range: [0, .3, .7, 1],
                                        output: l
                                    })
                                })]
                            })
                        }(y, C, A, S.enabled)]
                    }), (0, i.jsx)("input", {
                        id: t,
                        type: "checkbox",
                        ref: e => {
                            v.current = e, null != p && (p.current = e)
                        },
                        className: f.input,
                        tabIndex: E ? -1 : 0,
                        onKeyDown: function(e) {
                            if (!E && !e.repeat)(" " === e.key || "Enter" === e.key) && I(!0)
                        },
                        onKeyUp: function(e) {
                            var t;
                            if (!E && !!T && !e.repeat) I(!1), "Enter" === e.key && (null === (t = v.current) || void 0 === t || t.click())
                        },
                        onChange: function(e) {
                            I(!1), null == n || n(e.currentTarget.checked, e)
                        },
                        checked: r,
                        disabled: E
                    })]
                })
            })
        }
}