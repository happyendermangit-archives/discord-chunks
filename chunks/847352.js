function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("118810"),
        o = n("446674"),
        u = n("551042"),
        d = n("77078"),
        c = n("901582"),
        f = n("244201"),
        m = n("983782"),
        p = n("659500"),
        h = n("791776"),
        x = n("82372"),
        E = n("426969"),
        y = n("105571"),
        g = n("634114"),
        S = n("49111"),
        C = n("13030"),
        T = n("942838"),
        _ = l.memo(function(e) {
            let {
                positionTargetRef: t,
                channel: n,
                closeOnModalOuterClick: a = !1,
                parentModalKey: _
            } = e, I = l.useRef(null), v = l.useRef(null), {
                renderWindow: A,
                windowDispatch: N
            } = l.useContext(f.default), R = null != _, O = (0, u.useIsModalAtTop)(null != _ ? _ : ""), M = () => {
                x.dismissAppLauncherPopup()
            }, k = l.useCallback(e => {
                var t;
                if (!R && (0, u.hasAnyModalOpen)() || R && !(O && a)) return;
                let {
                    target: n
                } = e;
                if ((0, r.isElement)(n) && null != n.closest("." + C.CHAT_INPUT_BUTTON_CLASSNAME)) return;
                for (;
                    (0, r.isElement)(n);) {
                    if (n === v.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                    n = n.parentNode
                }
                M();
                let i = null === (t = (0, h.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == i || "BODY" === i.tagName) && p.ComponentDispatch.dispatchToLastSubscribed(S.ComponentActions.TEXTAREA_FOCUS)
            }, [a, O, R]), L = l.useCallback(() => {
                M()
            }, []);
            l.useLayoutEffect(() => (A.addEventListener("mousedown", k), A.addEventListener("contextmenu", k), N.subscribe(S.ComponentActions.POPOUT_CLOSE, L), () => {
                A.removeEventListener("mousedown", k), A.removeEventListener("contextmenu", k), N.unsubscribe(S.ComponentActions.POPOUT_CLOSE, L)
            }), [L, k, A, N]), (0, d.useFocusLock)(I), l.useEffect(() => {
                (!R && (0, u.hasAnyModalOpen)() || R && !O) && M()
            }, [O, R]);
            let P = (0, o.useStateFromStores)([E.default], () => E.default.getCurrentAppDetail());
            return (0, i.jsx)(c.default, {
                section: S.AnalyticsSections.EXPRESSION_PICKER,
                children: (0, i.jsx)(m.AppReferencePositionLayer, {
                    className: T.positionLayer,
                    reference: t,
                    position: "top",
                    align: "left",
                    spacing: 8,
                    autoInvert: !0,
                    children: e => {
                        let {
                            isPositioned: t
                        } = e;
                        return (0, i.jsx)("section", {
                            className: s(T.positionContainer),
                            ref: I,
                            role: "dialog",
                            "aria-label": "Application Launcher",
                            children: t ? (0, i.jsxs)("div", {
                                className: T.drawerSizingWrapper,
                                ref: v,
                                children: [(0, i.jsx)("div", {
                                    className: T.resizeHandle
                                }), (0, i.jsxs)("div", {
                                    className: T.contentWrapper,
                                    children: [(0, i.jsx)(g.default, {
                                        channel: n,
                                        isAppDetailPresent: null != P
                                    }), null != P ? (0, i.jsx)(y.default, {
                                        channel: n,
                                        appDetail: P
                                    }, P.id) : null]
                                })]
                            }) : null
                        })
                    }
                })
            })
        })
}