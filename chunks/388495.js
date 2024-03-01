function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useModalContext: function() {
            return I
        },
        Modals: function() {
            return v
        }
    }), n("222007"), n("70102"), n("700225");
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("917351"),
        l = n.n(o),
        u = n("266491"),
        c = n("244201"),
        d = n("892974"),
        f = n("983782"),
        E = n("668596"),
        p = n("659500"),
        h = n("551042"),
        _ = n("625611"),
        S = n("49111"),
        m = n("934583");
    let T = [f.default, E.default];
    class g extends r.PureComponent {
        render() {
            let {
                render: e,
                LayerComponent: t,
                isTopModal: n,
                instant: r
            } = this.props, {
                transitionState: s
            } = this.state;
            return (s === _.ModalTransitionState.ENTERING || s === _.ModalTransitionState.ENTERED) && !n && (s = _.ModalTransitionState.HIDDEN), r && (s = _.ModalTransitionState.ENTERED), (0, i.jsx)(t, {
                children: (0, i.jsx)("div", {
                    className: a(m.layer, !n && m.hidden),
                    children: e({
                        transitionState: s,
                        onClose: this.close
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                transitionState: null
            }, this.componentWillAppear = e => {
                this.componentWillEnter(e)
            }, this.componentWillEnter = e => {
                let {
                    instant: t
                } = this.props;
                this.setState({
                    transitionState: _.ModalTransitionState.ENTERING
                }), setTimeout(() => {
                    this.setState({
                        transitionState: _.ModalTransitionState.ENTERED
                    }), e()
                }, t ? 0 : _.TRANSITION_DURATION)
            }, this.componentWillLeave = e => {
                let {
                    instant: t
                } = this.props;
                this.setState({
                    transitionState: _.ModalTransitionState.EXITING
                }), setTimeout(() => {
                    this.setState({
                        transitionState: _.ModalTransitionState.EXITED
                    }), e()
                }, t ? 0 : _.TRANSITION_DURATION)
            }, this.close = () => new Promise(e => {
                this.props.closeModal(this.props.modalKey), setTimeout(() => e(), _.TRANSITION_DURATION)
            })
        }
    }

    function I() {
        return (0, h.modalContextFromAppContext)((0, c.useAppContext)())
    }
    let C = [];

    function v() {
        let e = I(),
            t = (0, h.useModalsStore)(t => void 0 !== t[e] ? t[e] : C),
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
            return p.ComponentDispatch.subscribe(S.ComponentActions.MODAL_CLOSE, e), () => {
                p.ComponentDispatch.unsubscribe(S.ComponentActions.MODAL_CLOSE, e)
            }
        }, [s]);
        let a = r.useCallback(() => {
                let e = n.current;
                null != e && null != e.onCloseRequest && e.onCloseRequest()
            }, []),
            o = r.useCallback(t => {
                (0, h.closeModal)(t, e)
            }, [e]),
            c = T.map(e => t.some(t => t.Layer === e || null == t.Layer && e === f.default));
        return (0, i.jsxs)(u.default, {
            component: r.Fragment,
            children: [T.map((e, n) => {
                var r;
                let s = l.findLast(t, t => t.Layer === e || null == t.Layer && e === f.default);
                return (0, i.jsx)(d.default, {
                    isVisible: c[n],
                    backdropStyle: null !== (r = null == s ? void 0 : s.backdropStyle) && void 0 !== r ? r : d.BackdropStyles.DARK,
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
                return (0, i.jsx)(g, {
                    modalKey: r,
                    LayerComponent: null != s ? s : f.default,
                    isTopModal: n === t.length - 1,
                    render: a,
                    closeModal: o,
                    instant: l
                }, r)
            })]
        })
    }
}