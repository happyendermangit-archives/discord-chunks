function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Modals: function() {
            return N
        },
        useModalContext: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("467645"),
        l = n("813970"),
        c = n("125324"),
        f = n("244749"),
        d = n("404411"),
        _ = n("120447"),
        E = n("67381"),
        p = n("840801"),
        m = n("281767"),
        y = n("493772");

    function I(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var v = [f.default, d.default],
        g = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
            }(l, e);
            var t, n, o, a, u, s = (t = l, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = T(t);
                if (n) {
                    var a = T(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : I(e)
            });

            function l() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), e = s.apply(this, arguments), O(I(e), "state", {
                    transitionState: null
                }), O(I(e), "componentWillAppear", function(t) {
                    e.componentWillEnter(t)
                }), O(I(e), "componentWillEnter", function(t) {
                    var n = e.props.instant;
                    e.setState({
                        transitionState: p.ModalTransitionState.ENTERING
                    }), setTimeout(function() {
                        e.setState({
                            transitionState: p.ModalTransitionState.ENTERED
                        }), t()
                    }, n ? 0 : p.TRANSITION_DURATION)
                }), O(I(e), "componentWillLeave", function(t) {
                    var n = e.props.instant;
                    e.setState({
                        transitionState: p.ModalTransitionState.EXITING
                    }), setTimeout(function() {
                        e.setState({
                            transitionState: p.ModalTransitionState.EXITED
                        }), t()
                    }, n ? 0 : p.TRANSITION_DURATION)
                }), O(I(e), "close", function() {
                    return new Promise(function(t) {
                        e.props.closeModal(e.props.modalKey), setTimeout(function() {
                            return t()
                        }, p.TRANSITION_DURATION)
                    })
                }), e
            }
            return o = l, a = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.render,
                        n = e.LayerComponent,
                        o = e.isTopModal,
                        a = e.instant,
                        u = this.state.transitionState;
                    return (u === p.ModalTransitionState.ENTERING || u === p.ModalTransitionState.ENTERED) && !o && (u = p.ModalTransitionState.HIDDEN), a && (u = p.ModalTransitionState.ENTERED), r.createElement(n, null, r.createElement("div", {
                        className: i()(y.layer, !o && y.hidden)
                    }, t({
                        transitionState: u,
                        onClose: this.close
                    })))
                }
            }], h(o.prototype, a), u && h(o, u), l
        }(r.PureComponent);

    function A() {
        return (0, E.modalContextFromAppContext)((0, l.useAppContext)())
    }
    var b = [];

    function N() {
        var e = A(),
            t = (0, E.useModalsStore)(function(t) {
                return void 0 !== t[e] ? t[e] : b
            }),
            n = r.useRef();
        r.useLayoutEffect(function() {
            n.current = t[t.length - 1]
        }, [t]);
        var o = t.length > 0;
        r.useLayoutEffect(function() {
            if (o) {
                var e = function() {
                    var e = n.current;
                    null != e && null != e.onCloseRequest && e.onCloseRequest()
                };
                return _.ComponentDispatch.subscribe(m.ComponentActions.MODAL_CLOSE, e),
                    function() {
                        _.ComponentDispatch.unsubscribe(m.ComponentActions.MODAL_CLOSE, e)
                    }
            }
        }, [o]);
        var i = r.useCallback(function() {
                var e = n.current;
                null != e && null != e.onCloseRequest && e.onCloseRequest()
            }, []),
            a = r.useCallback(function(t) {
                (0, E.closeModal)(t, e)
            }, [e]),
            l = v.map(function(e) {
                return t.some(function(t) {
                    return t.Layer === e || null == t.Layer && e === f.default
                })
            });
        return r.createElement(s.TransitionGroup, {
            component: r.Fragment
        }, v.map(function(e, n) {
            var o, a = u().findLast(t, function(t) {
                return t.Layer === e || null == t.Layer && e === f.default
            });
            return r.createElement(c.default, {
                key: "layer-".concat(n),
                isVisible: l[n],
                backdropStyle: null !== (o = null == a ? void 0 : a.backdropStyle) && void 0 !== o ? o : c.BackdropStyles.DARK,
                onClose: i,
                LayerComponent: e,
                backdropInstant: null == a ? void 0 : a.instant
            })
        }), t.map(function(e, n) {
            var o = e.key,
                i = e.Layer,
                u = e.render,
                s = e.instant;
            return r.createElement(g, {
                modalKey: o,
                LayerComponent: null != i ? i : f.default,
                isTopModal: n === t.length - 1,
                render: u,
                closeModal: a,
                key: o,
                instant: s
            })
        }))
    }
}