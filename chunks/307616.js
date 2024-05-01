function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Modals: function() {
            return R
        },
        useModalContext: function() {
            return p
        }
    }), n("47120"), n("411104"), n("852437");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("392711"),
        l = n.n(o),
        u = n("215569"),
        d = n("40851"),
        _ = n("468436"),
        c = n("153850"),
        E = n("78415"),
        I = n("585483"),
        T = n("952265"),
        f = n("602091"),
        S = n("981631"),
        h = n("788495");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let m = [c.default, E.default];
    class N extends r.PureComponent {
        render() {
            let {
                render: e,
                LayerComponent: t,
                isTopModal: n,
                instant: r
            } = this.props, {
                transitionState: a
            } = this.state;
            return (a === f.ModalTransitionState.ENTERING || a === f.ModalTransitionState.ENTERED) && !n && (a = f.ModalTransitionState.HIDDEN), r && (a = f.ModalTransitionState.ENTERED), (0, i.jsx)(t, {
                children: (0, i.jsx)("div", {
                    className: s()(h.layer, !n && h.hidden),
                    children: e({
                        transitionState: a,
                        onClose: this.close
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), A(this, "state", {
                transitionState: null
            }), A(this, "componentWillAppear", e => {
                this.componentWillEnter(e)
            }), A(this, "componentWillEnter", e => {
                let {
                    instant: t
                } = this.props;
                this.setState({
                    transitionState: f.ModalTransitionState.ENTERING
                }), setTimeout(() => {
                    this.setState({
                        transitionState: f.ModalTransitionState.ENTERED
                    }), e()
                }, t ? 0 : f.TRANSITION_DURATION)
            }), A(this, "componentWillLeave", e => {
                let {
                    instant: t
                } = this.props;
                this.setState({
                    transitionState: f.ModalTransitionState.EXITING
                }), setTimeout(() => {
                    this.setState({
                        transitionState: f.ModalTransitionState.EXITED
                    }), e()
                }, t ? 0 : f.TRANSITION_DURATION)
            }), A(this, "close", () => new Promise(e => {
                this.props.closeModal(this.props.modalKey), setTimeout(() => e(), f.TRANSITION_DURATION)
            }))
        }
    }

    function p() {
        return (0, T.modalContextFromAppContext)((0, d.useAppContext)())
    }
    let O = [];

    function R() {
        let e = p(),
            t = (0, T.useModalsStore)(t => void 0 !== t[e] ? t[e] : O),
            n = r.useRef();
        r.useLayoutEffect(() => {
            n.current = t[t.length - 1]
        }, [t]);
        let a = t.length > 0;
        r.useLayoutEffect(() => {
            if (!a) return;
            let e = () => {
                let e = n.current;
                null != e && null != e.onCloseRequest && e.onCloseRequest()
            };
            return I.ComponentDispatch.subscribe(S.ComponentActions.MODAL_CLOSE, e), () => {
                I.ComponentDispatch.unsubscribe(S.ComponentActions.MODAL_CLOSE, e)
            }
        }, [a]);
        let s = r.useCallback(() => {
                let e = n.current;
                null != e && null != e.onCloseRequest && e.onCloseRequest()
            }, []),
            o = r.useCallback(t => {
                (0, T.closeModal)(t, e)
            }, [e]),
            d = m.map(e => t.some(t => t.Layer === e || null == t.Layer && e === c.default));
        return (0, i.jsxs)(u.TransitionGroup, {
            component: r.Fragment,
            children: [m.map((e, n) => {
                var r;
                let a = l().findLast(t, t => t.Layer === e || null == t.Layer && e === c.default);
                return (0, i.jsx)(_.default, {
                    isVisible: d[n],
                    backdropStyle: null !== (r = null == a ? void 0 : a.backdropStyle) && void 0 !== r ? r : _.BackdropStyles.DARK,
                    onClose: s,
                    LayerComponent: e,
                    backdropInstant: null == a ? void 0 : a.instant
                }, "layer-".concat(n))
            }), t.map((e, n) => {
                let {
                    key: r,
                    Layer: a,
                    render: s,
                    instant: l
                } = e;
                return (0, i.jsx)(N, {
                    modalKey: r,
                    LayerComponent: null != a ? a : c.default,
                    isTopModal: n === t.length - 1,
                    render: s,
                    closeModal: o,
                    instant: l
                }, r)
            })]
        })
    }
}