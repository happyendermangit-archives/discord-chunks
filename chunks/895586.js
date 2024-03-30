function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("699581"),
        i = n("383959"),
        a = n("898511"),
        u = n("784184"),
        s = n("549579"),
        l = n("813970"),
        c = n("278982"),
        f = n("798206"),
        d = n("772662"),
        _ = n("244749"),
        E = n("120447"),
        p = n("195793"),
        m = n("281767");

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = function(e) {
            var t = e.children,
                n = e.close,
                a = e.onUnmount,
                s = e.rect,
                f = e.position,
                d = e.align,
                E = e.impressionName,
                p = e.impressionProperties,
                y = r.useRef(null);
            r.useEffect(function() {
                var e, t, r = (0, o.findDOMNode)(y.current);
                if (null != r) {
                    var i = function(e) {
                        var t = e.target,
                            r = (0, o.findDOMNode)(y.current);
                        !(null != r && (0, u.referencePortalAwareContains)(r, t)) && (window.getSelection().removeAllRanges(), n())
                    };
                    return null === (e = r.ownerDocument) || void 0 === e || e.addEventListener("click", i, !0), null === (t = r.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", i, !0),
                        function() {
                            var e, t;
                            null === (e = r.ownerDocument) || void 0 === e || e.removeEventListener("click", i, !0), null === (t = r.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", i, !0)
                        }
                }
            }, [n]);
            var I = r.useRef(a);
            r.useEffect(function() {
                I.current = a
            }), r.useEffect(function() {
                return function() {
                    var e;
                    return null === (e = I.current) || void 0 === e ? void 0 : e.call(I)
                }
            }, []), r.useLayoutEffect(function() {
                var e;
                null === (e = y.current) || void 0 === e || e.updatePosition()
            }), (0, c.default)({
                type: i.ImpressionTypes.MENU,
                name: E,
                properties: p
            });
            var h = (0, l.useWindowDispatch)(),
                O = r.useCallback(function() {
                    h.dispatch(m.ComponentActions.POPOUT_SHOW)
                }, [h]),
                T = r.useCallback(function() {
                    h.dispatch(m.ComponentActions.POPOUT_HIDE)
                }, [h]);
            return r.createElement(_.AppReferencePositionLayer, {
                onMount: O,
                onUnmount: T,
                reference: function() {
                    return s
                },
                position: null != f ? f : "right",
                align: null != d ? d : "top",
                autoInvert: !0,
                ref: y,
                nudgeAlignIntoViewport: !0
            }, t)
        },
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && T(e, t)
            }(l, e);
            var t, n, o, i, a, s = (t = l, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = O(t);
                if (n) {
                    var a = O(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : y(e)
            });

            function l() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), e = s.apply(this, arguments), h(y(e), "state", {
                    render: void 0
                }), h(y(e), "closeResize", function(t) {
                    var n = e.props.renderWindow;
                    t.target === n && e.close()
                }), h(y(e), "close", function() {
                    var t = e.props,
                        n = t.isOpen,
                        r = t.closeContextMenu;
                    n && r()
                }), e
            }
            return o = l, i = [{
                key: "componentDidMount",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.renderLazy;
                    if (t.renderWindow.addEventListener("resize", this.closeResize, !0), E.ComponentDispatch.subscribe(m.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != n) {
                        var o = setTimeout(function() {
                            e.setState({
                                render: function() {
                                    return r.createElement(u.MenuSpinner, null)
                                }
                            })
                        }, 300);
                        n().then(function(t) {
                            e.setState({
                                render: t
                            }), clearTimeout(o)
                        })
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t, n;
                    !this.props.isOpen && e.isOpen && (null === (n = e.config) || void 0 === n || null === (t = n.onClose) || void 0 === t || t.call(n))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.props.renderWindow.removeEventListener("resize", this.closeResize, !0), E.ComponentDispatch.unsubscribe(m.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props,
                        n = t.appContext,
                        o = t.target,
                        i = t.isOpen,
                        a = t.theme,
                        u = t.config,
                        s = t.rect,
                        l = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
                    return i && null != s && null != u && null != o && null != l && u.context === n ? r.createElement(S, {
                        rect: s,
                        close: this.close,
                        onUnmount: u.onClose,
                        align: u.align,
                        position: u.position,
                        impressionName: u.impressionName,
                        impressionProperties: u.impressionProperties
                    }, function(e, t) {
                        var r = e.position;
                        return l({
                            className: p.ContextMenuClassName,
                            position: r,
                            theme: a,
                            onHeightUpdate: t,
                            config: u,
                            target: o,
                            context: n
                        })
                    }) : null
                }
            }], I(o.prototype, i), a && I(o, a), l
        }(r.PureComponent);

    function g() {
        var e, t, n = (0, a.useStateFromStoresObject)([d.default], function() {
                return {
                    contextMenu: d.default.getContextMenu(),
                    version: d.default.version,
                    isOpen: d.default.isOpen()
                }
            }),
            o = n.contextMenu,
            i = n.version,
            u = n.isOpen,
            c = (0, a.useStateFromStores)([f.default], function() {
                return f.default.theme
            }),
            _ = r.useContext(l.default),
            E = _.appContext,
            p = _.renderWindow;
        return r.createElement(v, (e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    h(e, t, n[t])
                })
            }
            return e
        }({
            key: i,
            appContext: E,
            renderWindow: p
        }, o), t = (t = {
            isOpen: u,
            theme: c,
            closeContextMenu: s.closeContextMenu
        }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))
    }
}