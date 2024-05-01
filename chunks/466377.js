function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ModalCloseButton: function() {
            return M
        },
        ModalContent: function() {
            return v
        },
        ModalFooter: function() {
            return D
        },
        ModalHeader: function() {
            return L
        },
        ModalListContent: function() {
            return y
        },
        ModalRoot: function() {
            return g
        },
        ModalSize: function() {
            return r
        }
    });
    var i, r, a = n("735250"),
        s = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("718017"),
        d = n("990547"),
        _ = n("748780"),
        c = n("186325"),
        E = n("693789"),
        I = n("507274"),
        T = n("84735"),
        f = n("337033"),
        S = n("742746"),
        h = n("147479"),
        A = n("285952"),
        m = n("465670"),
        N = n("602091"),
        p = n("231338"),
        O = n("689938"),
        R = n("821458");
    (i = r || (r = {})).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i.DYNAMIC = "dynamic";
    let C = Object.freeze({
        small: R.small,
        medium: R.medium,
        large: R.large,
        dynamic: null
    });

    function g(e) {
        var t;
        let {
            transitionState: n,
            children: i,
            size: r = "small",
            role: o = "dialog",
            className: E,
            fullscreenOnMobile: f = !0,
            hideShadow: S = !1,
            onAnimationEnd: h = p.NOOP,
            returnRef: A,
            ...m
        } = e, O = n === N.ModalTransitionState.ENTERING || n === N.ModalTransitionState.ENTERED, {
            reducedMotion: g
        } = s.useContext(c.AccessibilityPreferencesContext), L = (0, u.useSpring)({
            opacity: O ? 1 : 0,
            transform: O || g.enabled ? "scale(1)" : "scale(0.7)",
            config: {
                duration: O ? 300 : 100,
                easing: O ? _.default.Easing.inOut(_.default.Easing.back()) : _.default.Easing.quad,
                clamp: !0
            },
            onRest: h
        }), v = s.useRef(null), D = null != m["aria-label"], M = null != m["aria-labelledby"], y = s.useId(), P = null !== (t = m["aria-labelledby"]) && void 0 !== t ? t : y, U = s.useMemo(() => ({
            headerId: P,
            headerIdIsManaged: M
        }), [P, M]);
        return (0, a.jsx)(N.ModalContentContext.Provider, {
            value: U,
            children: (0, a.jsx)(I.Dialog, {
                className: R.focusLock,
                role: o,
                returnRef: A,
                impressionType: d.ImpressionTypes.MODAL,
                "aria-labelledby": D ? void 0 : U.headerId,
                ...m,
                children: (0, a.jsx)(u.animated.div, {
                    className: l()(E, R.root, C[r], {
                        [R.fullscreenOnMobile]: f,
                        [R.rootWithShadow]: !S
                    }),
                    ref: v,
                    style: L,
                    children: (0, a.jsx)(T.FocusRingScope, {
                        containerRef: v,
                        children: i
                    })
                })
            })
        })
    }

    function L(e) {
        var t, n, i, r, o;
        let {
            headerId: u,
            headerIdIsManaged: d
        } = s.useContext(N.ModalContentContext);
        return (0, a.jsx)(A.default, {
            grow: 0,
            shrink: 0,
            direction: null !== (t = e.direction) && void 0 !== t ? t : A.default.Direction.HORIZONTAL,
            justify: null !== (n = e.justify) && void 0 !== n ? n : A.default.Justify.START,
            align: null !== (i = e.align) && void 0 !== i ? i : A.default.Align.CENTER,
            wrap: null !== (r = e.wrap) && void 0 !== r ? r : A.default.Wrap.NO_WRAP,
            className: l()(R.header, e.className, {
                [R.separator]: null === (o = e.separator) || void 0 === o || o
            }),
            id: d ? void 0 : u,
            children: e.children
        })
    }

    function v(e) {
        let {
            className: t,
            children: n,
            scrollerRef: i,
            scrollbarType: r,
            ...s
        } = e, o = function(e) {
            switch (null != e ? e : "thin") {
                case "auto":
                    return h.AdvancedScrollerAuto;
                case "none":
                    return h.AdvancedScrollerNone;
                default:
                    return h.AdvancedScrollerThin
            }
        }(r);
        return (0, a.jsx)(o, {
            className: l()(R.content, t),
            ref: i,
            ...s,
            children: (0, a.jsx)(f.HeadingLevel, {
                children: n
            })
        })
    }

    function D(e) {
        var t, n, i, r, s;
        return (0, a.jsx)(A.default, {
            grow: 0,
            shrink: 0,
            direction: null !== (t = e.direction) && void 0 !== t ? t : A.default.Direction.HORIZONTAL_REVERSE,
            justify: null !== (n = e.justify) && void 0 !== n ? n : A.default.Justify.START,
            align: null !== (i = e.align) && void 0 !== i ? i : A.default.Align.STRETCH,
            wrap: null !== (r = e.wrap) && void 0 !== r ? r : A.default.Wrap.NO_WRAP,
            className: l()(R.footer, e.className, {
                [R.footerSeparator]: null === (s = e.separator) || void 0 === s || s
            }),
            children: (0, a.jsx)(f.HeadingLevel, {
                children: e.children
            })
        })
    }

    function M(e) {
        return (0, a.jsx)(E.Button, {
            focusProps: e.focusProps,
            "aria-label": O.default.Messages.CLOSE,
            look: E.Button.Looks.BLANK,
            size: E.Button.Sizes.NONE,
            onClick: e.onClick,
            innerClassName: l()({
                [R.closeWithCircleBackground]: e.withCircleBackground
            }),
            className: l()(e.className, {
                [R.hideOnFullscreen]: e.hideOnFullscreen,
                [R.close]: !e.withCircleBackground
            }),
            children: (0, a.jsx)(m.default, {
                width: 24,
                height: 24,
                className: R.closeIcon
            })
        })
    }

    function y(e) {
        let {
            className: t,
            scrollerRef: n,
            ...i
        } = e;
        return (0, a.jsx)(S.ListThin, {
            className: t,
            ref: n,
            ...i
        })
    }
}