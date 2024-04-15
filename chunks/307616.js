function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Modals: function() {
            return R
        },
        useModalContext: function() {
            return O
        }
    }), n("47120"), n("411104"), n("852437");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
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
        A = n("493772");

    function h(e, t, n) {
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
                transitionState: s
            } = this.state;
            return (s === f.ModalTransitionState.ENTERING || s === f.ModalTransitionState.ENTERED) && !n && (s = f.ModalTransitionState.HIDDEN), r && (s = f.ModalTransitionState.ENTERED), (0, i.jsx)(t, {
                children: (0, i.jsx)("div", {
                    className: a()(A.layer, !n && A.hidden),
                    children: e({
                        transitionState: s,
                        onClose: this.close
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), h(this, "state", {
                transitionState: null
            }), h(this, "componentWillAppear", e => {
                this.componentWillEnter(e)
            }), h(this, "componentWillEnter", e => {
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
            }), h(this, "componentWillLeave", e => {
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
            }), h(this, "close", () => new Promise(e => {
                this.props.closeModal(this.props.modalKey), setTimeout(() => e(), f.TRANSITION_DURATION)
            }))
        }
    }

    function O() {
        return (0, T.modalContextFromAppContext)((0, d.useAppContext)())
    }
    let p = [];

    function R() {
        let e = O(),
            t = (0, T.useModalsStore)(t => void 0 !== t[e] ? t[e] : p),
            n = r.useRef();
        r.useLayoutEffect(() => {
            n.current = t[t.length - 1]
        }, [t]);
        let s = t.length > 0;
        r.useLayoutEffect(() => {
            if (!s) return;
            let e = () => {
                let e = n.current;
                null != e && null != e.onCloseRequest && e.onCloseRequest()
            };
            return I.ComponentDispatch.subscribe(S.ComponentActions.MODAL_CLOSE, e), () => {
                I.ComponentDispatch.unsubscribe(S.ComponentActions.MODAL_CLOSE, e)
            }
        }, [s]);
        let a = r.useCallback(() => {
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
                let s = l().findLast(t, t => t.Layer === e || null == t.Layer && e === c.default);
                return (0, i.jsx)(_.default, {
                    isVisible: d[n],
                    backdropStyle: null !== (r = null == s ? void 0 : s.backdropStyle) && void 0 !== r ? r : _.BackdropStyles.DARK,
                    onClose: a,
                    LayerComponent: e,
                    backdropInstant: null == s ? void 0 : s.instant
                }, "layer-".concat(n))
            }), t.map((e, n) => {
                let {
                    key: r,
                    Layer: s,
                    render: a,
                    instant: l
                } = e;
                return (0, i.jsx)(N, {
                    modalKey: r,
                    LayerComponent: null != s ? s : c.default,
                    isTopModal: n === t.length - 1,
                    render: a,
                    closeModal: o,
                    instant: l
                }, r)
            })]
        })
    }
}