function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("188104"),
        u = n("898511"),
        s = n("67381"),
        l = n("784184"),
        c = n("286601"),
        f = n("813970"),
        d = n("244749"),
        _ = n("120447"),
        E = n("850168"),
        p = n("288625"),
        m = n("884916"),
        y = n("663231"),
        I = n("914929"),
        h = n("281767"),
        O = n("980671"),
        T = n("470774");
    t.default = r.memo(function(e) {
        var t = e.positionTargetRef,
            n = e.channel,
            o = e.closeOnModalOuterClick,
            S = void 0 !== o && o,
            v = e.parentModalKey,
            g = r.useRef(null),
            A = r.useRef(null),
            b = r.useContext(f.default),
            N = b.renderWindow,
            R = b.windowDispatch,
            C = null != v,
            P = (0, s.useIsModalAtTop)(null != v ? v : ""),
            D = function() {
                p.dismissAppLauncherPopup()
            },
            L = r.useCallback(function(e) {
                if (!(!C && (0, s.hasAnyModalOpen)()) && (!C || !!(P && S))) {
                    var t, n = e.target;
                    if (!(0, a.isElement)(n) || null == n.closest("." + O.CHAT_INPUT_BUTTON_CLASSNAME)) {
                        for (;
                            (0, a.isElement)(n);) {
                            if (n === A.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                            n = n.parentNode
                        }
                        D();
                        var r = null === (t = (0, E.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                        (null == r || "BODY" === r.tagName) && _.ComponentDispatch.dispatchToLastSubscribed(h.ComponentActions.TEXTAREA_FOCUS)
                    }
                }
            }, [S, P, C]),
            M = r.useCallback(function() {
                D()
            }, []);
        r.useLayoutEffect(function() {
            return N.addEventListener("mousedown", L), N.addEventListener("contextmenu", L), R.subscribe(h.ComponentActions.POPOUT_CLOSE, M),
                function() {
                    N.removeEventListener("mousedown", L), N.removeEventListener("contextmenu", L), R.unsubscribe(h.ComponentActions.POPOUT_CLOSE, M)
                }
        }, [M, L, N, R]), (0, l.useFocusLock)(g), r.useEffect(function() {
            (!C && (0, s.hasAnyModalOpen)() || C && !P) && D()
        }, [P, C]);
        var U = (0, u.useStateFromStores)([m.default], function() {
            return m.default.getCurrentAppDetail()
        });
        return r.createElement(c.default, {
            section: h.AnalyticsSections.EXPRESSION_PICKER
        }, r.createElement(d.AppReferencePositionLayer, {
            className: T.positionLayer,
            reference: t,
            position: "top",
            align: "left",
            spacing: 8,
            autoInvert: !0
        }, function(e) {
            var t = e.isPositioned;
            return r.createElement("section", {
                className: i()(T.positionContainer),
                ref: g,
                role: "dialog",
                "aria-label": "Application Launcher"
            }, t ? r.createElement("div", {
                className: T.drawerSizingWrapper,
                ref: A
            }, r.createElement("div", {
                className: T.resizeHandle
            }), r.createElement("div", {
                className: T.contentWrapper
            }, r.createElement(I.default, {
                channel: n,
                isAppDetailPresent: null != U
            }), null != U ? r.createElement(y.default, {
                key: U.id,
                channel: n,
                appDetail: U
            }) : null)) : null)
        }))
    })
}