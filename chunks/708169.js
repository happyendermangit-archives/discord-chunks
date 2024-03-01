function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        FullScreenLayers: function() {
            return M
        },
        useFullScreenLayerStore: function() {
            return R
        },
        openFullScreenLayer: function() {
            return G
        },
        closeFullScreenLayer: function() {
            return h
        }
    }), s("222007");
    var i, r, a = s("37983"),
        l = s("884691"),
        o = s("995008"),
        n = s.n(o),
        u = s("324134"),
        d = s("308503"),
        c = s("769846"),
        E = s("77078"),
        _ = s("485328"),
        T = s("159885"),
        I = s("983782"),
        N = s("847820");
    let f = (0, T.cssValueToNumber)(c.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
    (r = i || (i = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
    let R = (0, d.default)(e => ({
        fullScreenLayers: [],
        addLayer: t => e(e => {
            let {
                fullScreenLayers: s
            } = e;
            return {
                fullScreenLayers: [...s, t]
            }
        })
    }));

    function g(e) {
        let {
            item: t
        } = e, s = l.useRef(null);
        return (0, E.useFocusLock)(s), l.useEffect(() => (_.default.disable(), _.default.enableTemp(function(e) {
            return {
                POP_LAYER: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action() {
                        h(e)
                    }
                }
            }
        }(t.key)), () => {
            _.default.disableTemp()
        }), [t.key]), (0, a.jsx)(t.LayerComponent, {
            children: (0, a.jsxs)("div", {
                className: N.root,
                ref: s,
                children: [(0, a.jsx)("div", {
                    className: N.drag
                }), t.render({
                    transitionState: null != t ? t.transitionState : 3,
                    closeLayer: () => h(t.key)
                })]
            })
        })
    }
    let m = {
            enter: N.enter,
            enterActive: N.enterActive,
            enterDone: N.enterDone,
            exit: N.exit,
            exitActive: N.exitActive,
            exitDone: N.exitDone
        },
        S = {
            enter: N.enterReducedMotion,
            enterActive: N.enterActiveReducedMotion,
            enterDone: N.enterDoneReducedMotion,
            exit: N.exitReducedMotion,
            exitActive: N.exitActiveReducedMotion,
            exitDone: N.exitDoneReducedMotion
        };

    function M() {
        let {
            reducedMotion: e
        } = l.useContext(E.AccessibilityPreferencesContext), t = e.enabled, s = t ? S : m, i = R(e => e.fullScreenLayers);
        return (0, a.jsx)(u.TransitionGroup, {
            children: i.map(e => (0, a.jsx)(u.CSSTransition, {
                classNames: s,
                timeout: f,
                onEntered: () => {
                    R.setState({
                        fullScreenLayers: i.map(t => t.key === e.key ? {
                            ...t,
                            transitionState: 2
                        } : t)
                    })
                },
                unmountOnExit: !0,
                children: (0, a.jsx)(g, {
                    item: e
                })
            }, e.key))
        })
    }

    function G(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
            {
                layerKey: s,
                Layer: i
            } = t,
            r = null != s ? s : n();
        return R.setState(t => ({
            fullScreenLayers: [...t.fullScreenLayers, {
                key: r,
                transitionState: 1,
                LayerComponent: null != i ? i : I.default,
                render: e
            }]
        })), r
    }

    function h(e) {
        R.setState(t => ({
            fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
        }))
    }
}