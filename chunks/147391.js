function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ModalCloseButton: function() {
            return M
        },
        ModalContent: function() {
            return D
        },
        ModalFooter: function() {
            return L
        },
        ModalHeader: function() {
            return P
        },
        ModalListContent: function() {
            return U
        },
        ModalRoot: function() {
            return C
        },
        ModalSize: function() {
            return o
        }
    });
    var r, o, i, a = n("470079"),
        u = n("803997"),
        s = n.n(u),
        l = n("718017"),
        c = n("383959"),
        f = n("664183"),
        d = n("676250"),
        _ = n("608036"),
        E = n("639643"),
        p = n("35628"),
        m = n("433952"),
        y = n("839881"),
        I = n("882393"),
        h = n("143953"),
        O = n("247164"),
        T = n("840801"),
        S = n("563090"),
        v = n("941504"),
        g = n("462278");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                A(e, t, n[t])
            })
        }
        return e
    }

    function N(e, t) {
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
    }(r = o || (o = {})).SMALL = "small", r.MEDIUM = "medium", r.LARGE = "large", r.DYNAMIC = "dynamic";
    var R = Object.freeze((A(i = {}, "small", g.small), A(i, "medium", g.medium), A(i, "large", g.large), A(i, "dynamic", null), i));

    function C(e) {
        var t, n, r = e.transitionState,
            o = e.children,
            i = e.size,
            u = e.role,
            _ = e.className,
            m = e.fullscreenOnMobile,
            y = e.hideShadow,
            I = e.onAnimationEnd,
            h = void 0 === I ? S.NOOP : I,
            O = e.returnRef,
            v = N(e, ["transitionState", "children", "size", "role", "className", "fullscreenOnMobile", "hideShadow", "onAnimationEnd", "returnRef"]),
            C = r === T.ModalTransitionState.ENTERING || r === T.ModalTransitionState.ENTERED,
            P = a.useContext(d.AccessibilityPreferencesContext).reducedMotion,
            D = (0, l.useSpring)({
                opacity: C ? 1 : 0,
                transform: C || P.enabled ? "scale(1)" : "scale(0.7)",
                config: {
                    duration: C ? 300 : 100,
                    easing: C ? f.default.Easing.inOut(f.default.Easing.back()) : f.default.Easing.quad,
                    clamp: !0
                },
                onRest: h
            }),
            L = a.useRef(null),
            M = null != v["aria-label"],
            U = null != v["aria-labelledby"],
            w = a.useId(),
            k = null !== (t = v["aria-labelledby"]) && void 0 !== t ? t : w,
            G = a.useMemo(function() {
                return {
                    headerId: k,
                    headerIdIsManaged: U
                }
            }, [k, U]);
        return a.createElement(T.ModalContentContext.Provider, {
            value: G
        }, a.createElement(E.Dialog, b({
            className: g.focusLock,
            role: void 0 === u ? "dialog" : u,
            returnRef: O,
            impressionType: c.ImpressionTypes.MODAL,
            "aria-labelledby": M ? void 0 : G.headerId
        }, v), a.createElement(l.animated.div, {
            className: s()(_, g.root, R[void 0 === i ? "small" : i], (A(n = {}, g.fullscreenOnMobile, void 0 === m || m), A(n, g.rootWithShadow, !(void 0 !== y && y)), n)),
            ref: L,
            style: D
        }, a.createElement(p.FocusRingScope, {
            containerRef: L
        }, o))))
    }

    function P(e) {
        var t, n, r, o, i, u = a.useContext(T.ModalContentContext),
            l = u.headerId,
            c = u.headerIdIsManaged;
        return a.createElement(h.default, {
            grow: 0,
            shrink: 0,
            direction: null !== (t = e.direction) && void 0 !== t ? t : h.default.Direction.HORIZONTAL,
            justify: null !== (n = e.justify) && void 0 !== n ? n : h.default.Justify.START,
            align: null !== (r = e.align) && void 0 !== r ? r : h.default.Align.CENTER,
            wrap: null !== (o = e.wrap) && void 0 !== o ? o : h.default.Wrap.NO_WRAP,
            className: s()(g.header, e.className, A({}, g.separator, null === (i = e.separator) || void 0 === i || i)),
            id: c ? void 0 : l
        }, e.children)
    }

    function D(e) {
        var t = e.className,
            n = e.children,
            r = e.scrollerRef,
            o = e.scrollbarType,
            i = N(e, ["className", "children", "scrollerRef", "scrollbarType"]),
            u = function(e) {
                switch (null != e ? e : "thin") {
                    case "auto":
                        return I.AdvancedScrollerAuto;
                    case "none":
                        return I.AdvancedScrollerNone;
                    default:
                        return I.AdvancedScrollerThin
                }
            }(o);
        return a.createElement(u, b({
            className: s()(g.content, t),
            ref: r
        }, i), a.createElement(m.HeadingLevel, null, n))
    }

    function L(e) {
        var t, n, r, o, i;
        return a.createElement(h.default, {
            grow: 0,
            shrink: 0,
            direction: null !== (t = e.direction) && void 0 !== t ? t : h.default.Direction.HORIZONTAL_REVERSE,
            justify: null !== (n = e.justify) && void 0 !== n ? n : h.default.Justify.START,
            align: null !== (r = e.align) && void 0 !== r ? r : h.default.Align.STRETCH,
            wrap: null !== (o = e.wrap) && void 0 !== o ? o : h.default.Wrap.NO_WRAP,
            className: s()(g.footer, e.className, A({}, g.footerSeparator, null === (i = e.separator) || void 0 === i || i))
        }, a.createElement(m.HeadingLevel, null, e.children))
    }

    function M(e) {
        var t;
        return a.createElement(_.Button, {
            focusProps: e.focusProps,
            "aria-label": v.default.Messages.CLOSE,
            look: _.Button.Looks.BLANK,
            size: _.Button.Sizes.NONE,
            onClick: e.onClick,
            innerClassName: s()(A({}, g.closeWithCircleBackground, e.withCircleBackground)),
            className: s()(e.className, (A(t = {}, g.hideOnFullscreen, e.hideOnFullscreen), A(t, g.close, !e.withCircleBackground), t))
        }, a.createElement(O.default, {
            width: 24,
            height: 24,
            className: g.closeIcon
        }))
    }

    function U(e) {
        var t = e.className,
            n = e.scrollerRef,
            r = N(e, ["className", "scrollerRef"]);
        return a.createElement(y.ListThin, b({
            className: t,
            ref: n
        }, r))
    }
}