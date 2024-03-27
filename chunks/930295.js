function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BasePopout: function() {
            return p
        }
    }), n("47120"), n("411104");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("97613"),
        o = n.n(a),
        l = n("699581"),
        u = n.n(l),
        d = n("374470"),
        _ = n("846519"),
        c = n("337033"),
        E = n("302901"),
        I = n("539907"),
        T = n("952265"),
        f = n("632120"),
        S = n("40851"),
        h = n("153850"),
        A = n("920676"),
        m = n("981631");

    function N(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let O = new Set(["Spacebar", " ", "Enter"]);
    class p extends(i = s.Component) {
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
                var i, r;
                let e = this.getDomElement();
                this.props.closeOnScroll ? null === (i = e.ownerDocument) || void 0 === i || i.addEventListener("scroll", this.close, !0) : null === (r = e.ownerDocument) || void 0 === r || r.removeEventListener("scroll", this.close, !0)
            }
        }
        getDomElement() {
            let e = u().findDOMNode(this);
            if (!(0, d.isElement)(e)) throw Error("Popout cannot find DOM node");
            return e
        }
        setupShowPopout() {
            var e, t, n;
            let i = this.getDomElement();
            null === (e = i.ownerDocument) || void 0 === e || e.addEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("mouseup", this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null === (n = i.ownerDocument) || void 0 === n || n.addEventListener("scroll", this.close, !0)), this.context.windowDispatch.subscribe(m.ComponentActions.POPOUT_CLOSE, this.close), this.domElementRef.current = i, this.isValidClickStart = !1, this.forceUpdate()
        }
        unsubscribe() {
            var e, t, n, i;
            let r = this.domElementRef.current;
            null != r && (null === (t = r.ownerDocument) || void 0 === t || t.removeEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (n = r.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleDocumentMouseUp, !0), null === (i = r.ownerDocument) || void 0 === i || i.removeEventListener("scroll", this.close, !0)), this.context.windowDispatch.unsubscribe(m.ComponentActions.POPOUT_CLOSE, this.close), null === (e = this.resizeObserver) || void 0 === e || e.disconnect()
        }
        componentWillUnmount() {
            this.unsubscribe(), this.domElementRef.current = null, this.loadingTimeout.stop(), this.validClickTimeout.stop()
        }
        render() {
            let {
                children: e,
                useMouseEnter: t
            } = this.props, n = this.shouldShowPopout(this.props, this.state);
            return (0, r.jsxs)(s.Fragment, {
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
                }), (0, r.jsx)(c.HeadingLevel, {
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
                spacing: i,
                autoInvert: s,
                fixed: a,
                positionKey: o,
                disablePointerEvents: l,
                layerContext: u
            } = this.props, {
                resizeKey: d,
                isLoading: _,
                shouldShowLoadingState: c
            } = this.state;
            return _ && !c ? null : (0, r.jsx)(E.Layer, {
                layerContext: null != u ? u : h.appLayerContext,
                children: (0, r.jsx)(I.ReferencePositionLayer, {
                    ref: this.layerRef,
                    onMount: this.handlePopoutShow,
                    onUnmount: this.handlePopoutHide,
                    id: this.popoutId,
                    reference: this.domElementRef,
                    position: e,
                    align: t,
                    nudgeAlignIntoViewport: n,
                    spacing: i,
                    autoInvert: s,
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
            super(...e), N(this, "domElementRef", s.createRef()), N(this, "layerRef", s.createRef()), N(this, "popoutRef", s.createRef()), N(this, "resizeObserver", void 0), N(this, "popoutId", "popout_".concat(o()())), N(this, "loadingTimeout", new _.Timeout), N(this, "validClickTimeout", new _.Timeout), N(this, "isValidClickStart", !1), N(this, "state", {
                renderedPosition: this.props.position,
                shouldShowPopout: !1,
                shouldShowLoadingState: !1,
                isLoading: !1,
                resizeKey: 0
            }), N(this, "handlePopoutShow", () => {
                this.context.windowDispatch.dispatch(m.ComponentActions.POPOUT_SHOW)
            }), N(this, "handlePopoutHide", () => {
                this.context.windowDispatch.dispatch(m.ComponentActions.POPOUT_HIDE)
            }), N(this, "handleSetPopoutRef", e => {
                var t;
                let n = null == e ? void 0 : e.ownerDocument.defaultView;
                null != e && null != n && (this.popoutRef.current = e, null === (t = this.resizeObserver) || void 0 === t || t.disconnect(), this.resizeObserver = new n.ResizeObserver(() => {
                    u().flushSync(() => {
                        this.setState({
                            resizeKey: this.state.resizeKey + 1
                        })
                    })
                }), this.resizeObserver.observe(e))
            }), N(this, "renderPopout", (e, t) => {
                let {
                    renderPopout: n
                } = this.props;
                return this.state.isLoading ? this.props.loadingComponent : n({
                    ...e,
                    updatePosition: t,
                    closePopout: this.close,
                    setPopoutRef: this.handleSetPopoutRef
                })
            }), N(this, "close", () => {
                let {
                    onRequestClose: e,
                    shouldShow: t
                } = this.props;
                null == e || e(), null == t && this.toggleShow(!1)
            }), N(this, "handleClick", e => {
                let {
                    onShiftClick: t,
                    shouldShow: n,
                    onRequestOpen: i,
                    onRequestClose: r
                } = this.props;
                if (e.shiftKey && null != t) {
                    t(e);
                    return
                }
                let s = null != n;
                (s ? n : this.state.shouldShowPopout) ? null == r || r(): null == i || i(), !s && this.setState(e => {
                    let {
                        shouldShowPopout: t
                    } = e;
                    return {
                        shouldShowPopout: !t
                    }
                })
            }), N(this, "handleMouseEnter", () => {
                let {
                    onRequestOpen: e
                } = this.props;
                null == e || e(), this.setState({
                    shouldShowPopout: !0
                })
            }), N(this, "handlePreload", async () => {
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
            }), N(this, "handleKeyboardPreload", e => {
                O.has(e.key) && this.handlePreload()
            }), N(this, "handleDocumentMouseDown", e => {
                let {
                    ignoreModalClicks: t
                } = this.props, n = e.target, i = this.domElementRef.current;
                if (null != i) {
                    if ((0, I.referencePortalAwareContains)(i, n) || null != n.closest("." + f.ContextMenuClassName) || t && (0, T.hasAnyModalOpen)()) return;
                    this.isValidClickStart = !0
                }
            }), N(this, "handleDocumentMouseUp", () => {
                this.isValidClickStart && (this.isValidClickStart = !1, this.close())
            }), N(this, "handlePopoutPositionChange", e => {
                this.setState({
                    renderedPosition: e
                })
            })
        }
    }
    N(p, "defaultProps", {
        autoInvert: !1,
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        loadingComponent: (0, r.jsx)(A.LoadingPopout, {})
    }), N(p, "contextType", S.default)
}