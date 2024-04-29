function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FullScreenLayers: function() {
            return p
        },
        closeFullScreenLayer: function() {
            return R
        },
        openFullScreenLayer: function() {
            return O
        },
        useFullScreenLayerStore: function() {
            return h
        }
    }), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("97613"),
        l = n.n(o),
        u = n("194621"),
        d = n("652874"),
        _ = n("477690"),
        c = n("481060"),
        E = n("714338"),
        I = n("624138"),
        T = n("153850"),
        f = n("604487");
    let S = (0, I.cssValueToNumber)(_.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
    (r = i || (i = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
    let h = (0, d.default)(e => ({
        fullScreenLayers: [],
        addLayer: t => e(e => {
            let {
                fullScreenLayers: n
            } = e;
            return {
                fullScreenLayers: [...n, t]
            }
        })
    }));

    function A(e) {
        let {
            item: t
        } = e, n = a.useRef(null);
        return (0, c.useFocusLock)(n), a.useEffect(() => (E.default.disable(), E.default.enableTemp(function(e) {
            return {
                POP_LAYER: {
                    binds: ["esc"],
                    comboKeysBindGlobal: !0,
                    action() {
                        R(e)
                    }
                }
            }
        }(t.key)), () => {
            E.default.disableTemp()
        }), [t.key]), (0, s.jsx)(t.LayerComponent, {
            children: (0, s.jsxs)("div", {
                className: f.root,
                ref: n,
                children: [(0, s.jsx)("div", {
                    className: f.drag
                }), t.render({
                    transitionState: null != t ? t.transitionState : 3,
                    closeLayer: () => R(t.key)
                })]
            })
        })
    }
    let m = {
            enter: f.enter,
            enterActive: f.enterActive,
            enterDone: f.enterDone,
            exit: f.exit,
            exitActive: f.exitActive,
            exitDone: f.exitDone
        },
        N = {
            enter: f.enterReducedMotion,
            enterActive: f.enterActiveReducedMotion,
            enterDone: f.enterDoneReducedMotion,
            exit: f.exitReducedMotion,
            exitActive: f.exitActiveReducedMotion,
            exitDone: f.exitDoneReducedMotion
        };

    function p() {
        let {
            reducedMotion: e
        } = a.useContext(c.AccessibilityPreferencesContext), t = e.enabled ? N : m, n = h(e => e.fullScreenLayers);
        return (0, s.jsx)(u.TransitionGroup, {
            children: n.map(e => (0, s.jsx)(u.CSSTransition, {
                classNames: t,
                timeout: S,
                onEntered: () => {
                    h.setState({
                        fullScreenLayers: n.map(t => t.key === e.key ? {
                            ...t,
                            transitionState: 2
                        } : t)
                    })
                },
                unmountOnExit: !0,
                children: (0, s.jsx)(A, {
                    item: e
                })
            }, e.key))
        })
    }

    function O(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
            {
                layerKey: n,
                Layer: i
            } = t,
            r = null != n ? n : l()();
        return h.setState(t => ({
            fullScreenLayers: [...t.fullScreenLayers, {
                key: r,
                transitionState: 1,
                LayerComponent: null != i ? i : T.default,
                render: e
            }]
        })), r
    }

    function R(e) {
        h.setState(t => ({
            fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
        }))
    }
}