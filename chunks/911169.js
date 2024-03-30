function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BasePopout: function() {
            return C
        }
    });
    var r, o = n("470079"),
        i = n("97613"),
        a = n.n(i),
        u = n("699581"),
        s = n.n(u),
        l = n("188104"),
        c = n("945816"),
        f = n("433952"),
        d = n("508625"),
        _ = n("527310"),
        E = n("67381"),
        p = n("195793"),
        m = n("813970"),
        y = n("244749"),
        I = n("814391"),
        h = n("281767");

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                v(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function N(e, t) {
        return (N = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var R = new Set(["Spacebar", " ", "Enter"]),
        C = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && N(e, t)
            }(I, e);
            var t, n, r, i, u, m = (t = I, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = g(t);
                if (n) {
                    var a = g(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : O(e)
            });

            function I() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, I), t = m.apply(this, arguments), v(O(t), "domElementRef", o.createRef()), v(O(t), "layerRef", o.createRef()), v(O(t), "popoutRef", o.createRef()), v(O(t), "resizeObserver", void 0), v(O(t), "popoutId", "popout_".concat(a()())), v(O(t), "loadingTimeout", new c.Timeout), v(O(t), "validClickTimeout", new c.Timeout), v(O(t), "isValidClickStart", !1), v(O(t), "state", {
                    renderedPosition: t.props.position,
                    shouldShowPopout: !1,
                    shouldShowLoadingState: !1,
                    isLoading: !1,
                    resizeKey: 0
                }), v(O(t), "handlePopoutShow", function() {
                    t.context.windowDispatch.dispatch(h.ComponentActions.POPOUT_SHOW)
                }), v(O(t), "handlePopoutHide", function() {
                    t.context.windowDispatch.dispatch(h.ComponentActions.POPOUT_HIDE)
                }), v(O(t), "handleSetPopoutRef", function(e) {
                    var n, r = null == e ? void 0 : e.ownerDocument.defaultView;
                    null != e && null != r && (t.popoutRef.current = e, null === (n = t.resizeObserver) || void 0 === n || n.disconnect(), t.resizeObserver = new r.ResizeObserver(function() {
                        s().flushSync(function() {
                            t.setState({
                                resizeKey: t.state.resizeKey + 1
                            })
                        })
                    }), t.resizeObserver.observe(e))
                }), v(O(t), "renderPopout", function(e, n) {
                    var r = t.props.renderPopout;
                    return t.state.isLoading ? t.props.loadingComponent : r(b(A({}, e), {
                        updatePosition: n,
                        closePopout: t.close,
                        setPopoutRef: t.handleSetPopoutRef
                    }))
                }), v(O(t), "close", function() {
                    var e = t.props,
                        n = e.onRequestClose,
                        r = e.shouldShow;
                    null == n || n(), null == r && t.toggleShow(!1)
                }), v(O(t), "handleClick", function(e) {
                    var n = t.props,
                        r = n.onShiftClick,
                        o = n.shouldShow,
                        i = n.onRequestOpen,
                        a = n.onRequestClose;
                    if (e.shiftKey && null != r) {
                        r(e);
                        return
                    }
                    var u = null != o;
                    (u ? o : t.state.shouldShowPopout) ? null == a || a(): null == i || i(), !u && t.setState(function(e) {
                        return {
                            shouldShowPopout: !e.shouldShowPopout
                        }
                    })
                }), v(O(t), "handleMouseEnter", function() {
                    var e = t.props.onRequestOpen;
                    null == e || e(), t.setState({
                        shouldShowPopout: !0
                    })
                });
                var e, t, n = O(t);
                return v(O(t), "handlePreload", (e = function() {
                    var e;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (null == (e = n.props.preload)) return [2];
                                n.setState({
                                    isLoading: !0
                                }), n.loadingTimeout.start(250, function() {
                                    return n.setState({
                                        shouldShowLoadingState: !0
                                    })
                                }, !1), t.label = 1;
                            case 1:
                                return t.trys.push([1, , 3, 4]), [4, e()];
                            case 2:
                                return t.sent(), [3, 4];
                            case 3:
                                return n.setState({
                                    isLoading: !1
                                }), [7];
                            case 4:
                                return [2]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            T(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            T(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                })), v(O(t), "handleKeyboardPreload", function(e) {
                    R.has(e.key) && t.handlePreload()
                }), v(O(t), "handleDocumentMouseDown", function(e) {
                    var n = t.props.ignoreModalClicks,
                        r = e.target,
                        o = t.domElementRef.current;
                    if (null != o) {
                        if ((0, _.referencePortalAwareContains)(o, r) || null != r.closest("." + p.ContextMenuClassName) || n && (0, E.hasAnyModalOpen)()) return;
                        t.isValidClickStart = !0
                    }
                }), v(O(t), "handleDocumentMouseUp", function() {
                    t.isValidClickStart && (t.isValidClickStart = !1, t.close())
                }), v(O(t), "handlePopoutPositionChange", function(e) {
                    t.setState({
                        renderedPosition: e
                    })
                }), t
            }
            return r = I, i = [{
                key: "shouldShowPopout",
                value: function(e, t) {
                    return null != e.shouldShow ? e.shouldShow : t.shouldShowPopout
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.shouldShowPopout(this.props, this.state) && this.setupShowPopout()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    e.shouldShow, this.props.shouldShow;
                    var n = this.shouldShowPopout(this.props, this.state);
                    if ((this.shouldShowPopout(e, t) !== n || t.isLoading !== this.state.isLoading) && (n ? this.setupShowPopout() : this.unsubscribe()), this.props.closeOnScroll !== e.closeOnScroll) {
                        var r, o, i = this.getDomElement();
                        this.props.closeOnScroll ? null === (r = i.ownerDocument) || void 0 === r || r.addEventListener("scroll", this.close, !0) : null === (o = i.ownerDocument) || void 0 === o || o.removeEventListener("scroll", this.close, !0)
                    }
                }
            }, {
                key: "getDomElement",
                value: function() {
                    var e = s().findDOMNode(this);
                    if (!(0, l.isElement)(e)) throw Error("Popout cannot find DOM node");
                    return e
                }
            }, {
                key: "setupShowPopout",
                value: function() {
                    var e, t, n, r = this.getDomElement();
                    null === (e = r.ownerDocument) || void 0 === e || e.addEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (t = r.ownerDocument) || void 0 === t || t.addEventListener("mouseup", this.handleDocumentMouseUp, !0), this.props.closeOnScroll && (null === (n = r.ownerDocument) || void 0 === n || n.addEventListener("scroll", this.close, !0)), this.context.windowDispatch.subscribe(h.ComponentActions.POPOUT_CLOSE, this.close), this.domElementRef.current = r, this.isValidClickStart = !1, this.forceUpdate()
                }
            }, {
                key: "unsubscribe",
                value: function() {
                    var e, t, n, r, o = this.domElementRef.current;
                    null != o && (null === (t = o.ownerDocument) || void 0 === t || t.removeEventListener("mousedown", this.handleDocumentMouseDown, !0), null === (n = o.ownerDocument) || void 0 === n || n.removeEventListener("mouseup", this.handleDocumentMouseUp, !0), null === (r = o.ownerDocument) || void 0 === r || r.removeEventListener("scroll", this.close, !0)), this.context.windowDispatch.unsubscribe(h.ComponentActions.POPOUT_CLOSE, this.close), null === (e = this.resizeObserver) || void 0 === e || e.disconnect()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.unsubscribe(), this.domElementRef.current = null, this.loadingTimeout.stop(), this.validClickTimeout.stop()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.useMouseEnter,
                        r = this.shouldShowPopout(this.props, this.state);
                    return o.createElement(o.Fragment, null, t(b(A({
                        onMouseDown: this.handlePreload
                    }, n ? {
                        onMouseEnter: this.handleMouseEnter
                    } : {}), {
                        onKeyDown: this.handleKeyboardPreload,
                        onClick: this.handleClick,
                        "aria-controls": r ? this.popoutId : void 0,
                        "aria-expanded": r
                    }), {
                        isShown: r,
                        position: this.state.renderedPosition
                    }), o.createElement(f.HeadingLevel, {
                        forceLevel: 2
                    }, this.renderLayer()))
                }
            }, {
                key: "renderLayer",
                value: function() {
                    if (!this.shouldShowPopout(this.props, this.state) || null == this.domElementRef.current) return null;
                    var e = this.props,
                        t = e.position,
                        n = e.align,
                        r = e.nudgeAlignIntoViewport,
                        i = e.spacing,
                        a = e.autoInvert,
                        u = e.fixed,
                        s = e.positionKey,
                        l = e.disablePointerEvents,
                        c = e.layerContext,
                        f = this.state,
                        E = f.resizeKey,
                        p = f.isLoading,
                        m = f.shouldShowLoadingState;
                    return p && !m ? null : o.createElement(d.Layer, {
                        layerContext: null != c ? c : y.appLayerContext
                    }, o.createElement(_.ReferencePositionLayer, {
                        ref: this.layerRef,
                        onMount: this.handlePopoutShow,
                        onUnmount: this.handlePopoutHide,
                        id: this.popoutId,
                        reference: this.domElementRef,
                        position: t,
                        align: n,
                        nudgeAlignIntoViewport: r,
                        spacing: i,
                        autoInvert: a,
                        fixed: u,
                        positionKey: null != s ? s : String(E),
                        disablePointerEvents: l,
                        onPositionChange: this.handlePopoutPositionChange
                    }, this.renderPopout))
                }
            }, {
                key: "toggleShow",
                value: function(e) {
                    this.state.shouldShowPopout !== e && this.setState({
                        shouldShowPopout: e
                    })
                }
            }], S(r.prototype, i), u && S(r, u), I
        }(o.Component);
    v(C, "defaultProps", {
        autoInvert: !1,
        nudgeAlignIntoViewport: !1,
        spacing: 0,
        loadingComponent: o.createElement(I.LoadingPopout, null)
    }), v(C, "contextType", m.default)
}