function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FullScreenLayers: function() {
            return v
        },
        closeFullScreenLayer: function() {
            return A
        },
        openFullScreenLayer: function() {
            return g
        },
        useFullScreenLayerStore: function() {
            return h
        }
    });
    var r, o, i = n("470079"),
        a = n("97613"),
        u = n.n(a),
        s = n("194621"),
        l = n("652874"),
        c = n("337905"),
        f = n("784184"),
        d = n("423466"),
        _ = n("778513"),
        E = n("244749"),
        p = n("592453");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return m(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var I = (0, _.cssValueToNumber)(c.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
    (r = o || (o = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
    var h = (0, l.default)(function(e) {
        return {
            fullScreenLayers: [],
            addLayer: function(t) {
                return e(function(e) {
                    return {
                        fullScreenLayers: y(e.fullScreenLayers).concat([t])
                    }
                })
            }
        }
    });

    function O(e) {
        var t = e.item,
            n = i.useRef(null);
        return (0, f.useFocusLock)(n), i.useEffect(function() {
            return d.default.disable(), d.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action: function() {
                                A(e)
                            }
                        }
                    }
                }(t.key)),
                function() {
                    d.default.disableTemp()
                }
        }, [t.key]), i.createElement(t.LayerComponent, null, i.createElement("div", {
            className: p.root,
            ref: n
        }, i.createElement("div", {
            className: p.drag
        }), t.render({
            transitionState: null != t ? t.transitionState : 3,
            closeLayer: function() {
                return A(t.key)
            }
        })))
    }
    var T = {
            enter: p.enter,
            enterActive: p.enterActive,
            enterDone: p.enterDone,
            exit: p.exit,
            exitActive: p.exitActive,
            exitDone: p.exitDone
        },
        S = {
            enter: p.enterReducedMotion,
            enterActive: p.enterActiveReducedMotion,
            enterDone: p.enterDoneReducedMotion,
            exit: p.exitReducedMotion,
            exitActive: p.exitActiveReducedMotion,
            exitDone: p.exitDoneReducedMotion
        };

    function v() {
        var e = i.useContext(f.AccessibilityPreferencesContext).reducedMotion.enabled ? S : T,
            t = h(function(e) {
                return e.fullScreenLayers
            });
        return i.createElement(s.TransitionGroup, null, t.map(function(n) {
            return i.createElement(s.CSSTransition, {
                classNames: e,
                key: n.key,
                timeout: I,
                onEntered: function() {
                    h.setState({
                        fullScreenLayers: t.map(function(e) {
                            var t, r;
                            return e.key === n.key ? (t = function(e) {
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
                            }({}, e), r = (r = {
                                transitionState: 2
                            }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(r)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }), t) : e
                        })
                    })
                },
                unmountOnExit: !0
            }, i.createElement(O, {
                item: n
            }))
        }))
    }

    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
            n = t.layerKey,
            r = t.Layer,
            o = null != n ? n : u()();
        return h.setState(function(t) {
            return {
                fullScreenLayers: y(t.fullScreenLayers).concat([{
                    key: o,
                    transitionState: 1,
                    LayerComponent: null != r ? r : E.default,
                    render: e
                }])
            }
        }), o
    }

    function A(e) {
        h.setState(function(t) {
            return {
                fullScreenLayers: t.fullScreenLayers.filter(function(t) {
                    return t.key !== e
                })
            }
        })
    }
}