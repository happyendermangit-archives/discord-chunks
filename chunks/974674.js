function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimatedAvatar: function() {
            return D
        },
        Avatar: function() {
            return g
        }
    }), n("411104"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("718017"),
        l = n("1561"),
        u = n("438784"),
        d = n("696826"),
        _ = n("981729"),
        c = n("806519"),
        E = n("51144"),
        I = n("182294"),
        T = n("981631"),
        f = n("419061"),
        S = n("689938"),
        h = n("332357");
    let A = {
        tension: 1200,
        friction: 70
    };

    function m(e) {
        let {
            size: t,
            isMobile: n,
            isTyping: r,
            ...s
        } = e, a = (0, I.getAvatarSpecs)(t), o = a.status * (n && !r ? I.MOBILE_HEIGHT_RATIO : 1), l = a.status * (r ? I.TYPING_WIDTH_RATIO : 1), u = r ? (a.status * I.TYPING_WIDTH_RATIO - a.status) / 2 : 0, d = a.size - a.status - u - a.offset, _ = a.size - o - a.offset;
        return (0, i.jsx)("rect", {
            x: d,
            y: _,
            width: l,
            height: o,
            fill: "transparent",
            "aria-hidden": !0,
            ...s
        })
    }

    function N(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = (0, d.getStatusSize)(e.status, t, n, i),
            s = (i ? e.size - (r.width / 2 + e.status / 2) : e.size - r.width) - e.offset;
        return {
            ...r,
            x: s,
            y: e.size - r.height - e.offset
        }
    }

    function p(e, t, n, r) {
        let s = N(n, r, t, !1),
            a = (0, d.getStatusBackdropOpacity)(r, e);
        if (!t) {
            let t = s.height / 2 + n.stroke,
                r = s.x + n.status / 2;
            return (0, i.jsx)("circle", {
                style: {
                    opacity: a
                },
                fill: e,
                r: t,
                cx: r,
                cy: r
            })
        }
        let o = s.height + 2 * n.stroke,
            l = s.width + 2 * n.stroke,
            u = s.x - n.stroke,
            _ = s.y - n.stroke;
        return (0, i.jsx)("rect", {
            fill: e,
            height: o,
            width: l,
            style: {
                opacity: a
            },
            x: u,
            y: _,
            rx: n.stroke
        })
    }

    function O(e) {
        let {
            status: t,
            isMobile: n,
            isTyping: i,
            size: r
        } = e, s = n && !i && t === T.StatusTypes.ONLINE, a = (0, I.getAvatarSpecs)(r);
        return {
            ... function(e, t, n) {
                let {
                    size: i,
                    status: r,
                    stroke: s,
                    offset: a
                } = e, o = n ? r * I.TYPING_WIDTH_RATIO : r, l = t ? r * I.MOBILE_HEIGHT_RATIO : r;
                return {
                    avatarCutoutX: i - o + (o - r) / 2 - s - a,
                    avatarCutoutY: i - l - s - a,
                    avatarCutoutWidth: o + 2 * s,
                    avatarCutoutHeight: l + 2 * s,
                    avatarCutoutRadius: t ? (l + 2 * s) * I.CUTOUT_BORDER_RADIUS : (r + 2 * s) / 2
                }
            }(a, s, i),
            ...(0, d.getStatusValues)({
                status: t,
                size: a.status,
                isMobile: s,
                isTyping: i,
                topOffset: 2,
                leftOffset: 6
            })
        }
    }

    function R(e) {
        let {
            children: t,
            size: n,
            onClick: r,
            onMouseDown: s,
            onKeyDown: o,
            onContextMenu: u,
            onMouseEnter: d,
            onMouseLeave: _,
            className: T,
            tabIndex: A,
            ariaLabel: m,
            ariaHidden: N,
            status: p,
            isMobile: O = !1,
            isTyping: R = !1,
            avatarDecoration: C,
            typingOffset: g,
            specs: L
        } = e, D = {
            width: (0, I.getAvatarSize)(n),
            height: (0, I.getAvatarSize)(n)
        }, v = null == m || N ? void 0 : function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return null != t ? S.default.Messages.LABEL_WITH_ONLINE_STATUS.format({
                label: e,
                status: (0, E.humanizeStatus)(t, n)
            }) : e
        }(m, p, O), M = L.size * f.DECORATION_TO_AVATAR_RATIO, y = function(e, t, n, i) {
            if (null == e) return null;
            if (i) switch (t) {
                case I.AvatarSizes.SIZE_16:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_16;
                case I.AvatarSizes.SIZE_20:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_20;
                case I.AvatarSizes.SIZE_24:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_24;
                case I.AvatarSizes.SIZE_32:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_32;
                case I.AvatarSizes.SIZE_40:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_40;
                case I.AvatarSizes.SIZE_56:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_56;
                case I.AvatarSizes.SIZE_80:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_80;
                case I.AvatarSizes.SIZE_120:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_120
            }
            if (n) switch (t) {
                case I.AvatarSizes.SIZE_16:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_16;
                case I.AvatarSizes.SIZE_20:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_20;
                case I.AvatarSizes.SIZE_24:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_24;
                case I.AvatarSizes.SIZE_32:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_32;
                case I.AvatarSizes.SIZE_40:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_40;
                case I.AvatarSizes.SIZE_56:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_56;
                case I.AvatarSizes.SIZE_80:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_80;
                case I.AvatarSizes.SIZE_120:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_120
            }
            switch (t) {
                case I.AvatarSizes.SIZE_16:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_16;
                case I.AvatarSizes.SIZE_20:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_20;
                case I.AvatarSizes.SIZE_24:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_24;
                case I.AvatarSizes.SIZE_32:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_32;
                case I.AvatarSizes.SIZE_40:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_40;
                case I.AvatarSizes.SIZE_56:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_56;
                case I.AvatarSizes.SIZE_80:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_80;
                case I.AvatarSizes.SIZE_120:
                    return c.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_120
            }
            return null
        }(p, n, O, R), P = null != C && (0, i.jsx)("svg", {
            width: M + g,
            height: M,
            viewBox: "0 0 ".concat(M + g, " ").concat(M),
            className: h.avatarDecoration,
            "aria-hidden": !0,
            children: (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: M,
                height: M,
                mask: null != y ? "url(#".concat(y, ")") : void 0,
                children: (0, i.jsx)("div", {
                    className: h.avatarStack,
                    children: (0, i.jsx)("img", {
                        className: h.avatar,
                        src: C,
                        alt: " ",
                        "aria-hidden": !0
                    })
                })
            })
        });
        return null != r || null != s ? (0, i.jsxs)(l.Clickable, {
            className: a()(h.wrapper, h.pointer, T),
            style: D,
            onClick: r,
            tabIndex: A,
            onContextMenu: u,
            onMouseDown: s,
            onKeyDown: o,
            onMouseEnter: null != d ? d : void 0,
            onMouseLeave: null != _ ? _ : void 0,
            "aria-label": v,
            "aria-hidden": N,
            children: [t, P]
        }) : (0, i.jsxs)("div", {
            className: a()(h.wrapper, T),
            style: D,
            onContextMenu: null != u ? u : void 0,
            onMouseEnter: null != d ? d : void 0,
            onMouseLeave: null != _ ? _ : void 0,
            role: "img",
            "aria-label": v,
            "aria-hidden": N,
            children: [t, P]
        })
    }

    function C(e) {
        let {
            src: t,
            isSpeaking: n
        } = e;
        return (0, i.jsxs)("div", {
            className: h.avatarStack,
            children: [(0, i.jsx)("img", {
                src: null != t ? t : void 0,
                alt: " ",
                className: h.avatar,
                "aria-hidden": !0
            }), n && (0, i.jsx)("div", {
                className: h.avatarSpeaking
            })]
        })
    }

    function g(e) {
        let {
            src: t,
            status: n,
            size: r,
            statusColor: s,
            isMobile: o = !1,
            isTyping: l = !1,
            typingIndicatorRef: f,
            isSpeaking: S = !1,
            statusTooltip: A = !1,
            statusBackdropColor: m,
            "aria-hidden": O = !1,
            "aria-label": g
        } = e, L = n !== T.StatusTypes.UNKNOWN ? n : null, D = (0, I.getAvatarSpecs)(r), v = null != L ? Math.ceil((D.status * I.TYPING_WIDTH_RATIO - D.status) / 2) : 0, M = D.size + v, y = (0, d.useStatusFillColor)(L, s);
        return (0, i.jsx)(R, {
            ...e,
            ariaLabel: g,
            ariaHidden: O,
            status: L,
            specs: D,
            typingOffset: v,
            children: (0, i.jsxs)("svg", {
                width: M,
                height: M,
                viewBox: "0 0 ".concat(M, " ").concat(M),
                className: a()(h.mask, h.svg),
                "aria-hidden": !0,
                children: [(0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: D.size,
                    height: D.size,
                    mask: "url(#".concat(function(e, t, n, i) {
                        if (null == e) return c.MaskIDs.AVATAR_DEFAULT;
                        if (i) switch (t) {
                            case I.AvatarSizes.SIZE_16:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_16;
                            case I.AvatarSizes.SIZE_20:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_20;
                            case I.AvatarSizes.SIZE_24:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_24;
                            case I.AvatarSizes.SIZE_32:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_32;
                            case I.AvatarSizes.SIZE_40:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_40;
                            case I.AvatarSizes.SIZE_48:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_48;
                            case I.AvatarSizes.SIZE_56:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_56;
                            case I.AvatarSizes.SIZE_80:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_80;
                            case I.AvatarSizes.SIZE_120:
                                return c.MaskIDs.AVATAR_STATUS_TYPING_120
                        }
                        if (e === T.StatusTypes.ONLINE && n) switch (t) {
                            case I.AvatarSizes.SIZE_16:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_16;
                            case I.AvatarSizes.SIZE_20:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_20;
                            case I.AvatarSizes.SIZE_24:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_24;
                            case I.AvatarSizes.SIZE_32:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_32;
                            case I.AvatarSizes.SIZE_40:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_40;
                            case I.AvatarSizes.SIZE_48:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_48;
                            case I.AvatarSizes.SIZE_56:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_56;
                            case I.AvatarSizes.SIZE_80:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_80;
                            case I.AvatarSizes.SIZE_120:
                                return c.MaskIDs.AVATAR_STATUS_MOBILE_120
                        }
                        switch (t) {
                            case I.AvatarSizes.SIZE_16:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_16;
                            case I.AvatarSizes.SIZE_20:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_20;
                            case I.AvatarSizes.SIZE_24:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_24;
                            case I.AvatarSizes.SIZE_32:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_32;
                            case I.AvatarSizes.SIZE_40:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_40;
                            case I.AvatarSizes.SIZE_48:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_48;
                            case I.AvatarSizes.SIZE_56:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_56;
                            case I.AvatarSizes.SIZE_80:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_80;
                            case I.AvatarSizes.SIZE_120:
                                return c.MaskIDs.AVATAR_STATUS_ROUND_120
                        }
                        throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
                    }(L, r, o, l), ")"),
                    children: (0, i.jsx)(C, {
                        src: t,
                        isSpeaking: S
                    })
                }), null != L ? (0, i.jsx)(_.Tooltip, {
                    text: A ? (0, E.humanizeStatus)(L) : null,
                    "aria-label": !1,
                    position: "top",
                    spacing: 5 + 1.5 * D.stroke,
                    children: e => (0, i.jsxs)(i.Fragment, {
                        children: [null != m && p(m, o, D, L), (0, i.jsx)("rect", {
                            ...e,
                            ...N(D, L, o, l),
                            fill: y,
                            mask: "url(#".concat((0, d.getStatusMask)(L, o, l), ")"),
                            className: h.pointerEvents
                        }), l ? (0, i.jsx)(u.Dots, {
                            ref: f,
                            dotRadius: D.status / 4,
                            x: D.size - 1.375 * D.status - D.offset,
                            y: D.size - D.status / 1.333 - D.offset
                        }) : null]
                    })
                }) : null]
            })
        })
    }

    function L(e) {
        let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: s,
            isMobile: l = !1,
            isTyping: c = !1,
            typingIndicatorRef: T,
            isSpeaking: f = !1,
            size: S,
            src: N,
            status: g,
            statusColor: L,
            statusTooltip: D = !1,
            statusBackdropColor: v,
            "aria-hidden": M = !1,
            "aria-label": y
        } = e, P = (0, d.useStatusFillColor)(g, L), U = r.useId(), b = r.useId(), [G] = r.useState(() => ({
            fill: s,
            ...O({
                size: S,
                status: n,
                isMobile: t,
                isTyping: !1
            })
        })), w = r.useMemo(() => ({
            fill: P,
            ...O({
                size: S,
                status: g,
                isMobile: l,
                isTyping: c
            })
        }), [P, S, g, l, c]), {
            avatarCutoutX: B,
            avatarCutoutY: k,
            avatarCutoutWidth: F,
            avatarCutoutHeight: V,
            avatarCutoutRadius: x,
            fill: H,
            ...Y
        } = (0, o.useSpring)({
            immediate: !document.hasFocus(),
            config: A,
            from: G,
            to: w
        }), j = (0, I.getAvatarSize)(S), W = (0, I.getAvatarSpecs)(S), K = W.status * I.TYPING_WIDTH_RATIO, z = W.status * I.MOBILE_HEIGHT_RATIO, X = null != g ? (W.status * I.TYPING_WIDTH_RATIO - W.status) / 2 : 0, q = W.size - W.status - X - W.offset, Q = W.size - z - W.offset, Z = W.size + Math.ceil(X);
        return (0, i.jsx)(R, {
            ...e,
            ariaLabel: y,
            ariaHidden: M,
            typingOffset: X,
            specs: W,
            children: (0, i.jsxs)("svg", {
                width: Z,
                height: Z,
                viewBox: "0 0 ".concat(Z, " ").concat(Z),
                className: a()(h.mask, h.svg),
                "aria-hidden": !0,
                children: [(0, i.jsxs)("mask", {
                    id: U,
                    width: j,
                    height: j,
                    children: [(0, i.jsx)("circle", {
                        cx: j / 2,
                        cy: j / 2,
                        r: j / 2,
                        fill: "white"
                    }), (0, i.jsx)(o.animated.rect, {
                        color: "black",
                        x: B,
                        y: k,
                        width: F,
                        height: V,
                        rx: x,
                        ry: x
                    })]
                }), (0, i.jsx)("foreignObject", {
                    className: h.__invalid_foreignObject,
                    x: 0,
                    y: 0,
                    width: j,
                    height: j,
                    mask: "url(#".concat(U, ")"),
                    children: (0, i.jsx)(C, {
                        src: N,
                        isSpeaking: f
                    })
                }), (0, i.jsx)(_.Tooltip, {
                    text: D ? (0, E.humanizeStatus)(g) : null,
                    "aria-label": !1,
                    position: "top",
                    spacing: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !i ? 0 : .5 * e) + 1.5 * t
                    }(W.status, W.stroke, l, c),
                    children: e => (0, i.jsxs)(i.Fragment, {
                        children: [null != v && p(v, l, W, g), (0, i.jsxs)("svg", {
                            x: q,
                            y: Q,
                            width: K,
                            height: z,
                            viewBox: "0 0 ".concat(K, " ").concat(z),
                            className: D ? h.cursorDefault : void 0,
                            children: [(0, d.renderStatusMask)(Y, W.status, b), (0, i.jsx)(o.animated.rect, {
                                fill: H,
                                width: K,
                                height: z,
                                mask: "url(#".concat(b, ")")
                            }), (0, i.jsx)(u.Dots, {
                                ref: T,
                                dotRadius: W.status / 4,
                                x: .15 * K,
                                y: .5 * z,
                                hide: !c
                            })]
                        }), (0, i.jsx)(m, {
                            size: S,
                            isMobile: l,
                            isTyping: c,
                            className: h.pointerEvents,
                            ...e
                        })]
                    })
                })]
            })
        })
    }
    let D = r.memo(function(e) {
        var t, n, s, a, o;
        let {
            statusColor: l,
            status: u,
            ..._
        } = e, {
            isMobile: c = !1,
            isTyping: E = !1
        } = _, I = r.useRef(u), f = r.useRef(c), S = (0, d.useStatusFillColor)(u, l), h = r.useRef(S), A = r.useRef(!1);
        let m = A.current || (t = E, n = u, s = I.current, a = c, o = f.current, null != s && null != n && (!!t || n !== s || n === T.StatusTypes.ONLINE && a !== o || !1));
        return r.useLayoutEffect(() => {
            A.current = m, I.current = u, f.current = c, h.current = S
        }, [u, c, S, m]), null != u && null != I.current && m ? (0, i.jsx)(L, {
            ..._,
            status: u,
            statusColor: S,
            fromStatus: I.current,
            fromIsMobile: f.current,
            fromColor: h.current
        }) : (0, i.jsx)(g, {
            ..._,
            status: u,
            statusColor: S
        })
    })
}