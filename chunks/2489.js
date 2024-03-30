function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnimatedAvatar: function() {
            return D
        },
        Avatar: function() {
            return C
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("718017"),
        u = n("324377"),
        s = n("315860"),
        l = n("873740"),
        c = n("582444"),
        f = n("845265"),
        d = n("830567"),
        _ = n("962839"),
        E = n("281767"),
        p = n("86198"),
        m = n("941504"),
        y = n("332357");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function O(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function T(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }
    var S = {
        tension: 1200,
        friction: 70
    };

    function v(e) {
        var t = e.size,
            n = e.isMobile,
            o = e.isTyping,
            i = T(e, ["size", "isMobile", "isTyping"]),
            a = (0, _.getAvatarSpecs)(t),
            u = a.status * (n && !o ? _.MOBILE_HEIGHT_RATIO : 1),
            s = a.status * (o ? _.TYPING_WIDTH_RATIO : 1),
            l = o ? (a.status * _.TYPING_WIDTH_RATIO - a.status) / 2 : 0,
            c = a.size - a.status - l - a.offset,
            f = a.size - u - a.offset;
        return r.createElement("rect", h({
            x: c,
            y: f,
            width: s,
            height: u,
            fill: "transparent",
            "aria-hidden": !0
        }, i))
    }

    function g(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = (0, l.getStatusSize)(e.status, t, n, r),
            i = (r ? e.size - (o.width / 2 + e.status / 2) : e.size - o.width) - e.offset;
        return O(h({}, o), {
            x: i,
            y: e.size - o.height - e.offset
        })
    }

    function A(e, t, n, o) {
        var i = g(n, o, t, !1),
            a = (0, l.getStatusBackdropOpacity)(o, e);
        if (!t) {
            var u = i.height / 2 + n.stroke,
                s = i.x + n.status / 2;
            return r.createElement("circle", {
                style: {
                    opacity: a
                },
                fill: e,
                r: u,
                cx: s,
                cy: s
            })
        }
        var c = i.height + 2 * n.stroke,
            f = i.width + 2 * n.stroke,
            d = i.x - n.stroke,
            _ = i.y - n.stroke;
        return r.createElement("rect", {
            fill: e,
            height: c,
            width: f,
            style: {
                opacity: a
            },
            x: d,
            y: _,
            rx: n.stroke
        })
    }

    function b(e) {
        var t, n, r, o, i, a, u, s, c, f = e.status,
            d = e.isMobile,
            p = e.isTyping,
            m = e.size,
            y = d && !p && f === E.StatusTypes.ONLINE,
            I = (0, _.getAvatarSpecs)(m);
        return h({}, (t = I, n = y, r = p, o = t.size, i = t.status, a = t.stroke, u = t.offset, s = r ? i * _.TYPING_WIDTH_RATIO : i, c = n ? i * _.MOBILE_HEIGHT_RATIO : i, {
            avatarCutoutX: o - s + (s - i) / 2 - a - u,
            avatarCutoutY: o - c - a - u,
            avatarCutoutWidth: s + 2 * a,
            avatarCutoutHeight: c + 2 * a,
            avatarCutoutRadius: n ? (c + 2 * a) * _.CUTOUT_BORDER_RADIUS : (i + 2 * a) / 2
        }), (0, l.getStatusValues)({
            status: f,
            size: I.status,
            isMobile: y,
            isTyping: p,
            topOffset: 2,
            leftOffset: 6
        }))
    }

    function N(e) {
        var t = e.children,
            n = e.size,
            o = e.onClick,
            a = e.onMouseDown,
            s = e.onKeyDown,
            l = e.onContextMenu,
            c = e.onMouseEnter,
            E = e.onMouseLeave,
            I = e.className,
            h = e.tabIndex,
            O = e.ariaLabel,
            T = e.ariaHidden,
            S = e.status,
            v = e.isMobile,
            g = void 0 !== v && v,
            A = e.isTyping,
            b = e.avatarDecoration,
            N = e.typingOffset,
            R = e.specs,
            C = {
                width: (0, _.getAvatarSize)(n),
                height: (0, _.getAvatarSize)(n)
            },
            P = null == O || T ? void 0 : function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return null != t ? m.default.Messages.LABEL_WITH_ONLINE_STATUS.format({
                    label: e,
                    status: (0, d.humanizeStatus)(t, n)
                }) : e
            }(O, S, g),
            D = R.size * p.DECORATION_TO_AVATAR_RATIO,
            L = function(e, t, n, r) {
                if (null == e) return null;
                if (r) switch (t) {
                    case _.AvatarSizes.SIZE_16:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_16;
                    case _.AvatarSizes.SIZE_20:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_20;
                    case _.AvatarSizes.SIZE_24:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_24;
                    case _.AvatarSizes.SIZE_32:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_32;
                    case _.AvatarSizes.SIZE_40:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_40;
                    case _.AvatarSizes.SIZE_56:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_56;
                    case _.AvatarSizes.SIZE_80:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_80;
                    case _.AvatarSizes.SIZE_120:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_120
                }
                if (n) switch (t) {
                    case _.AvatarSizes.SIZE_16:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_16;
                    case _.AvatarSizes.SIZE_20:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_20;
                    case _.AvatarSizes.SIZE_24:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_24;
                    case _.AvatarSizes.SIZE_32:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_32;
                    case _.AvatarSizes.SIZE_40:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_40;
                    case _.AvatarSizes.SIZE_56:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_56;
                    case _.AvatarSizes.SIZE_80:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_80;
                    case _.AvatarSizes.SIZE_120:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_120
                }
                switch (t) {
                    case _.AvatarSizes.SIZE_16:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_16;
                    case _.AvatarSizes.SIZE_20:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_20;
                    case _.AvatarSizes.SIZE_24:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_24;
                    case _.AvatarSizes.SIZE_32:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_32;
                    case _.AvatarSizes.SIZE_40:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_40;
                    case _.AvatarSizes.SIZE_56:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_56;
                    case _.AvatarSizes.SIZE_80:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_80;
                    case _.AvatarSizes.SIZE_120:
                        return f.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_120
                }
                return null
            }(S, n, g, void 0 !== A && A),
            M = null != b && r.createElement("svg", {
                width: D + N,
                height: D,
                viewBox: "0 0 ".concat(D + N, " ").concat(D),
                className: y.avatarDecoration,
                "aria-hidden": !0
            }, r.createElement("foreignObject", {
                x: 0,
                y: 0,
                width: D,
                height: D,
                mask: null != L ? "url(#".concat(L, ")") : void 0
            }, r.createElement("div", {
                className: y.avatarStack
            }, r.createElement("img", {
                className: y.avatar,
                src: b,
                alt: " ",
                "aria-hidden": !0
            }))));
        return null != o || null != a ? r.createElement(u.Clickable, {
            className: i()(y.wrapper, y.pointer, I),
            style: C,
            onClick: o,
            tabIndex: h,
            onContextMenu: l,
            onMouseDown: a,
            onKeyDown: s,
            onMouseEnter: null != c ? c : void 0,
            onMouseLeave: null != E ? E : void 0,
            "aria-label": P,
            "aria-hidden": T
        }, t, M) : r.createElement("div", {
            className: i()(y.wrapper, I),
            style: C,
            onContextMenu: null != l ? l : void 0,
            onMouseEnter: null != c ? c : void 0,
            onMouseLeave: null != E ? E : void 0,
            role: "img",
            "aria-label": P,
            "aria-hidden": T
        }, t, M)
    }

    function R(e) {
        var t = e.src,
            n = e.isSpeaking;
        return r.createElement("div", {
            className: y.avatarStack
        }, r.createElement("img", {
            src: null != t ? t : void 0,
            alt: " ",
            className: y.avatar,
            "aria-hidden": !0
        }), n && r.createElement("div", {
            className: y.avatarSpeaking
        }))
    }

    function C(e) {
        var t = e.src,
            n = e.status,
            o = e.size,
            a = e.statusColor,
            u = e.isMobile,
            p = void 0 !== u && u,
            m = e.isTyping,
            I = void 0 !== m && m,
            T = e.typingIndicatorRef,
            S = e.isSpeaking,
            v = e.statusTooltip,
            b = e.statusBackdropColor,
            C = e["aria-hidden"],
            P = e["aria-label"],
            D = n !== E.StatusTypes.UNKNOWN ? n : null,
            L = (0, _.getAvatarSpecs)(o),
            M = null != D ? Math.ceil((L.status * _.TYPING_WIDTH_RATIO - L.status) / 2) : 0,
            U = L.size + M,
            w = (0, l.useStatusFillColor)(D, a);
        return r.createElement(N, O(h({}, e), {
            ariaLabel: P,
            ariaHidden: void 0 !== C && C,
            status: D,
            specs: L,
            typingOffset: M
        }), r.createElement("svg", {
            width: U,
            height: U,
            viewBox: "0 0 ".concat(U, " ").concat(U),
            className: i()(y.mask, y.svg),
            "aria-hidden": !0
        }, r.createElement("foreignObject", {
            x: 0,
            y: 0,
            width: L.size,
            height: L.size,
            mask: "url(#".concat(function(e, t, n, r) {
                if (null == e) return f.MaskIDs.AVATAR_DEFAULT;
                if (r) switch (t) {
                    case _.AvatarSizes.SIZE_16:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_16;
                    case _.AvatarSizes.SIZE_20:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_20;
                    case _.AvatarSizes.SIZE_24:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_24;
                    case _.AvatarSizes.SIZE_32:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_32;
                    case _.AvatarSizes.SIZE_40:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_40;
                    case _.AvatarSizes.SIZE_48:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_48;
                    case _.AvatarSizes.SIZE_56:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_56;
                    case _.AvatarSizes.SIZE_80:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_80;
                    case _.AvatarSizes.SIZE_120:
                        return f.MaskIDs.AVATAR_STATUS_TYPING_120
                }
                if (e === E.StatusTypes.ONLINE && n) switch (t) {
                    case _.AvatarSizes.SIZE_16:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_16;
                    case _.AvatarSizes.SIZE_20:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_20;
                    case _.AvatarSizes.SIZE_24:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_24;
                    case _.AvatarSizes.SIZE_32:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_32;
                    case _.AvatarSizes.SIZE_40:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_40;
                    case _.AvatarSizes.SIZE_48:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_48;
                    case _.AvatarSizes.SIZE_56:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_56;
                    case _.AvatarSizes.SIZE_80:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_80;
                    case _.AvatarSizes.SIZE_120:
                        return f.MaskIDs.AVATAR_STATUS_MOBILE_120
                }
                switch (t) {
                    case _.AvatarSizes.SIZE_16:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_16;
                    case _.AvatarSizes.SIZE_20:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_20;
                    case _.AvatarSizes.SIZE_24:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_24;
                    case _.AvatarSizes.SIZE_32:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_32;
                    case _.AvatarSizes.SIZE_40:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_40;
                    case _.AvatarSizes.SIZE_48:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_48;
                    case _.AvatarSizes.SIZE_56:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_56;
                    case _.AvatarSizes.SIZE_80:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_80;
                    case _.AvatarSizes.SIZE_120:
                        return f.MaskIDs.AVATAR_STATUS_ROUND_120
                }
                throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
            }(D, o, p, I), ")")
        }, r.createElement(R, {
            src: t,
            isSpeaking: void 0 !== S && S
        })), null != D ? r.createElement(c.Tooltip, {
            text: void 0 !== v && v ? (0, d.humanizeStatus)(D) : null,
            "aria-label": !1,
            position: "top",
            spacing: 5 + 1.5 * L.stroke
        }, function(e) {
            return r.createElement(r.Fragment, null, null != b && A(b, p, L, D), r.createElement("rect", O(h({}, e, g(L, D, p, I)), {
                fill: w,
                mask: "url(#".concat((0, l.getStatusMask)(D, p, I), ")"),
                className: y.pointerEvents
            })), I ? r.createElement(s.Dots, {
                ref: T,
                dotRadius: L.status / 4,
                x: L.size - 1.375 * L.status - L.offset,
                y: L.size - L.status / 1.333 - L.offset
            }) : null)
        }) : null))
    }

    function P(e) {
        var t, n, o = e.fromIsMobile,
            u = void 0 === o || o,
            f = e.fromStatus,
            E = e.fromColor,
            p = e.isMobile,
            m = void 0 !== p && p,
            g = e.isTyping,
            C = void 0 !== g && g,
            P = e.typingIndicatorRef,
            D = e.isSpeaking,
            L = e.size,
            M = e.src,
            U = e.status,
            w = e.statusColor,
            k = e.statusTooltip,
            G = void 0 !== k && k,
            B = e.statusBackdropColor,
            j = e["aria-hidden"],
            F = e["aria-label"],
            V = (0, l.useStatusFillColor)(U, w),
            H = r.useId(),
            x = r.useId();
        var Y = (t = r.useState(function() {
                return h({
                    fill: E
                }, b({
                    size: L,
                    status: f,
                    isMobile: u,
                    isTyping: !1
                }))
            }), n = 1, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0],
            W = r.useMemo(function() {
                return h({
                    fill: V
                }, b({
                    size: L,
                    status: U,
                    isMobile: m,
                    isTyping: C
                }))
            }, [V, L, U, m, C]),
            K = (0, a.useSpring)({
                immediate: !document.hasFocus(),
                config: S,
                from: Y,
                to: W
            }),
            z = K.avatarCutoutX,
            X = K.avatarCutoutY,
            q = K.avatarCutoutWidth,
            Q = K.avatarCutoutHeight,
            J = K.avatarCutoutRadius,
            Z = K.fill,
            $ = T(K, ["avatarCutoutX", "avatarCutoutY", "avatarCutoutWidth", "avatarCutoutHeight", "avatarCutoutRadius", "fill"]),
            ee = (0, _.getAvatarSize)(L),
            et = (0, _.getAvatarSpecs)(L),
            en = et.status * _.TYPING_WIDTH_RATIO,
            er = et.status * _.MOBILE_HEIGHT_RATIO,
            eo = null != U ? (et.status * _.TYPING_WIDTH_RATIO - et.status) / 2 : 0,
            ei = et.size - et.status - eo - et.offset,
            ea = et.size - er - et.offset,
            eu = et.size + Math.ceil(eo);
        return r.createElement(N, O(h({}, e), {
            ariaLabel: F,
            ariaHidden: void 0 !== j && j,
            typingOffset: eo,
            specs: et
        }), r.createElement("svg", {
            width: eu,
            height: eu,
            viewBox: "0 0 ".concat(eu, " ").concat(eu),
            className: i()(y.mask, y.svg),
            "aria-hidden": !0
        }, r.createElement("mask", {
            id: H,
            width: ee,
            height: ee
        }, r.createElement("circle", {
            cx: ee / 2,
            cy: ee / 2,
            r: ee / 2,
            fill: "white"
        }), r.createElement(a.animated.rect, {
            color: "black",
            x: z,
            y: X,
            width: q,
            height: Q,
            rx: J,
            ry: J
        })), r.createElement("foreignObject", {
            className: y.__invalid_foreignObject,
            x: 0,
            y: 0,
            width: ee,
            height: ee,
            mask: "url(#".concat(H, ")")
        }, r.createElement(R, {
            src: M,
            isSpeaking: void 0 !== D && D
        })), r.createElement(c.Tooltip, {
            text: G ? (0, d.humanizeStatus)(U) : null,
            "aria-label": !1,
            position: "top",
            spacing: function(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return 5 - (n && !r ? 0 : .5 * e) + 1.5 * t
            }(et.status, et.stroke, m, C)
        }, function(e) {
            return r.createElement(r.Fragment, null, null != B && A(B, m, et, U), r.createElement("svg", {
                x: ei,
                y: ea,
                width: en,
                height: er,
                viewBox: "0 0 ".concat(en, " ").concat(er),
                className: G ? y.cursorDefault : void 0
            }, (0, l.renderStatusMask)($, et.status, x), r.createElement(a.animated.rect, {
                fill: Z,
                width: en,
                height: er,
                mask: "url(#".concat(x, ")")
            }), r.createElement(s.Dots, {
                ref: P,
                dotRadius: et.status / 4,
                x: .15 * en,
                y: .5 * er,
                hide: !C
            })), r.createElement(v, h({
                size: L,
                isMobile: m,
                isTyping: C,
                className: y.pointerEvents
            }, e)))
        })))
    }
    var D = r.memo(function(e) {
        var t, n, o, i, a, u = e.statusColor,
            s = e.status,
            c = T(e, ["statusColor", "status"]),
            f = c.isMobile,
            d = void 0 !== f && f,
            _ = c.isTyping,
            p = r.useRef(s),
            m = r.useRef(d),
            y = (0, l.useStatusFillColor)(s, u),
            I = r.useRef(y),
            S = r.useRef(!1);
        var v = S.current || (t = void 0 !== _ && _, n = s, o = p.current, i = d, a = m.current, null != o && null != n && (!!t || n !== o || n === E.StatusTypes.ONLINE && i !== a || !1));
        return r.useLayoutEffect(function() {
            S.current = v, p.current = s, m.current = d, I.current = y
        }, [s, d, y, v]), null != s && null != p.current && v ? r.createElement(P, O(h({}, c), {
            status: s,
            statusColor: y,
            fromStatus: p.current,
            fromIsMobile: m.current,
            fromColor: I.current
        })) : r.createElement(C, O(h({}, c), {
            status: s,
            statusColor: y
        }))
    })
}