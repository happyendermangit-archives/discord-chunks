function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BasePopout: function() {
            return T
        }
    }), n("222007"), n("70102");
    var i = n("37983"),
        s = n("884691"),
        r = n("995008"),
        a = n.n(r),
        o = n("817736"),
        l = n.n(o),
        u = n("118810"),
        d = n("862337"),
        c = n("860226"),
        f = n("228256"),
        _ = n("222163"),
        E = n("551042"),
        h = n("452453"),
        g = n("244201"),
        m = n("983782"),
        p = n("678904"),
        S = n("49111");
    let v = new Set(["Spacebar", " ", "Enter"]);
    class T extends s.Component {
        shouldShowPopout(e, t) {
            return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout
        }
        componentDidMount() {
            this.shouldShowPopout(this.props, this.state) && this.setupShowPopout()
        }
        componentDidUpdate(e, t) {
            e.shouldShow, this.props.shouldShow;
            let n = this.shouldShowPopout(this.props, this.state);
            if ((this.shouldShowPopout(e, t) !== n || t.isLoading !== this.state.isLoading) && (n ? this.setupShowPopout() : this.unsubscribe()), this.props.closeOnScroll !== e.closeOnScroll) {
                var i, s;
                let e = this.getDomElement();
                this.props.closeOnScroll ? null === (i = e.ownerDocument) || void 0 === i || i.addEventListener("scroll", this.close, !0) : null === (s = e.ownerDocument) || void 0 === s || s.removeEventListener("scroll", this.close, !0)
            }
        }
        getDomElement() {
            let e = l.findDOMNode(this);
            if (!(0, u.isElement)(e)) throw Error("Popout cannot find DOM node");
            return e
        }
        setupShowPopout() {
            var e, t, n;
            let i = this.getDomElement();
            null === (e = i.ownerDocument) || void 0 === e || e.addEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("mouseup", this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null === (n = i.ownerDocument) || void 0 === n || n.addEventListener("scroll", this.close, !0)), this.context.windowDispatch.subscribe(S.ComponentActions.POPOUT_CLOSE, this.close), this.domElementRef.current = i, this.isValidClickStart = !1, this.forceUpdate()
        }
        unsubscribe() {
            var e, t, n, i;
            let s = this.domElementRef.current;
            null != s && (null === (t = s.ownerDocument) || void 0 === t || t.removeEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (n = s.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleDocumentMouseUp, !0), null === (i = s.ownerDocument) || void 0 === i || i.removeEventListener("scroll", this.close, !0)), this.context.windowDispatch.unsubscribe(S.ComponentActions.POPOUT_CLOSE, this.close), null === (e = this.resizeObserver) || void 0 === e || e.disconnect()
        }
        componentWillUnmount() {
            this.unsubscribe(), this.domElementRef.current = null, this.loadingTimeout.stop(), this.validClickTimeout.stop()
        }
        render() {
            let {
                children: e,
                useMouseEnter: t
            } = this.props, n = this.shouldShowPopout(this.props, this.state);
            return (0, i.jsxs)(s.Fragment, {
                children: [e({
                    onMouseDown: this.handlePreload,
                    ...t ? {
                        onMouseEnter: this.handleMouseEnter
                    } : {},
                    onKeyDown: this.handleKeyboardPreload,
                    onClick: this.handleClick,
                    "aria-controls": n ? this.popoutId : void 0,
                    "aria-expanded": n
                }, {
                    isShown: n,
                    position: this.state.renderedPosition
                }), (0, i.jsx)(c.HeadingLevel, {
                    forceLevel: 2,
                    children: this.renderLayer()
                })]
            })
        }
        renderLayer() {
            if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
            let {
                position: e,
                align: t,
                nudgeAlignIntoViewport: n,
                spacing: s,
                autoInvert: r,
                fixed: a,
                positionKey: o,
                disablePointerEvents: l,
                layerContext: u
            } = this.props, {
                resizeKey: d,
                isLoading: c,
                shouldShowLoadingState: E
            } = this.state;
            return c && !E ? null : (0, i.jsx)(f.Layer, {
                layerContext: null != u ? u : m.appLayerContext,
                children: (0, i.jsx)(_.ReferencePositionLayer, {
                    ref: this.layerRef,
                    onMount: this.handlePopoutShow,
                    onUnmount: this.handlePopoutHide,
                    id: this.popoutId,
                    reference: this.domElementRef,
                    position: e,
                    align: t,
                    nudgeAlignIntoViewport: n,
                    spacing: s,
                    autoInvert: r,
                    fixed: a,
                    positionKey: null != o ? o : String(d),
                    disablePointerEvents: l,
                    onPositionChange: this.handlePopoutPositionChange,
                    children: this.renderPopout
                })
            })
        }
        toggleShow(e) {
            this.state.shouldShowPopout !== e && this.setState({
                shouldShowPopout: e
            })
        }
        constructor(...e) {
            super(...e), this.domElementRef = s.createRef(), this.layerRef = s.createRef(), this.popoutRef = s.createRef(), this.popoutId = "popout_".concat(a()), this.loadingTimeout = new d.Timeout, this.validClickTimeout = new d.Timeout, this.isValidClickStart = !1, this.state = {
                renderedPosition: this.props.position,
                shouldShowPopout: !1,
                shouldShowLoadingState: !1,
                isLoading: !1,
                resizeKey: 0
            }, this.handlePopoutShow = () => {
                this.context.windowDispatch.dispatch(S.ComponentActions.POPOUT_SHOW)
            }, this.handlePopoutHide = () => {
                this.context.windowDispatch.dispatch(S.ComponentActions.POPOUT_HIDE)
            }, this.handleSetPopoutRef = e => {
                var t;
                let n = null == e ? void 0 : e.ownerDocument.defaultView;
                null != e && null != n && (this.popoutRef.current = e, null === (t = this.resizeObserver) || void 0 === t || t.disconnect(), this.resizeObserver = new n.ResizeObserver(() => {
                    l.flushSync(() => {
                        this.setState({
                            resizeKey: this.state.resizeKey + 1
                        })
                    })
                }), this.resizeObserver.observe(e))
            }, this.renderPopout = (e, t) => {
                let {
                    renderPopout: n
                } = this.props;
                return this.state.isLoading ? this.props.loadingComponent : n({
                    ...e,
                    updatePosition: t,
                    closePopout: this.close,
                    setPopoutRef: this.handleSetPopoutRef
                })
            }, this.close = () => {
                let {
                    onRequestClose: e,
                    shouldShow: t
                } = this.props;
                null == e || e(), null == t && this.toggleShow(!1)
            }, this.handleClick = e => {
                let {
                    onShiftClick: t,
                    shouldShow: n,
                    onRequestOpen: i,
                    onRequestClose: s
                } = this.props;
                if (e.shiftKey && null != t) {
                    t(e);
                    return
                }
                let r = null != n,
                    a = r ? n : this.state.shouldShowPopout;
                a ? null == s || s() : null == i || i(), !r && this.setState(e => {
                    let {
                        shouldShowPopout: t
                    } = e;
                    return {
                        shouldShowPopout: !t
                    }
                })
            }, this.handleMouseEnter = () => {
                let {
                    onRequestOpen: e
                } = this.props;
                null == e || e(), this.setState({
                    shouldShowPopout: !0
                })
            }, this.handlePreload = async () => {
                let {
                    preload: e
                } = this.props;
                if (null != e) {
                    this.setState({
                        isLoading: !0
                    }), this.loadingTimeout.start(250, () => this.setState({
                        shouldShowLoadingState: !0
                    }), !1);
                    try {
                        await e()
                    } finally {
                        this.setState({
                            isLoading: !1
                        })
                    }
                }
            }, this.handleKeyboardPreload = e => {
                v.has(e.key) && this.handlePreload()
            }, this.handleDocumentMouseDown = e => {
                let {
                    ignoreModalClicks: t
                } = this.props, n = e.target, i = this.domElementRef.current;
                if (null != i) {
                    if ((0, _.referencePortalAwareContains)(i, n) || null != n.closest("." + h.ContextMenuClassName) || t && (0, E.hasAnyModalOpen)()) return;
                    this.isValidClickStart = !0
                }
            }, this.handleDocumentMouseUp = () => {
                this.isValidClickStart && (this.isValidClickStart = !1, this.close())
            }, this.handlePopoutPositionChange = e => {
                this.setState({
                    renderedPosition: e
                })
            }
        }
    }
    T.defaultProps = {
        autoInvert: !1,
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        loadingComponent: (0, i.jsx)(p.LoadingPopout, {})
    }, T.contextType = g.default
}