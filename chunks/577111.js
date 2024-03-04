function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        decorateHandler: function() {
            return y
        }
    }), n("222007"), n("70102"), n("424973"), n("426094"), n("854508");
    var r = n("37983"),
        i = n("884691"),
        o = n("373589"),
        s = n("900255"),
        a = n("388588"),
        c = n("635246"),
        u = n("959708"),
        d = n("204527"),
        l = n.n(d);

    function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function g(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        var t = e.DecoratedComponent,
            n = e.createHandler,
            d = e.createMonitor,
            y = e.createConnector,
            x = e.registerHandler,
            w = e.containerDisplayName,
            S = e.getType,
            k = e.collect,
            E = e.options.arePropsEqual,
            _ = void 0 === E ? o.shallowEqual : E,
            M = t.displayName || t.name || "Component",
            D = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && v(e, t)
                }(T, e);
                var l, w, E, D, C, P = (l = T, w = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, t = b(l);
                    if (w) {
                        var n = b(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else e = t.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === f(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                        return g(e)
                    }(this, e)
                });

                function T(e) {
                    var t;
                    return ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, T), m(g(t = P.call(this, e)), "decoratedRef", (0, i.createRef)()), m(g(t), "handlerId", void 0), m(g(t), "manager", void 0), m(g(t), "handlerMonitor", void 0), m(g(t), "handlerConnector", void 0), m(g(t), "handler", void 0), m(g(t), "disposable", void 0), m(g(t), "currentType", void 0), m(g(t), "handleChange", function() {
                        var e = t.getCurrentState();
                        !(0, o.shallowEqual)(e, t.state) && t.setState(e)
                    }), t.disposable = new c.SerialDisposable, t.receiveProps(e), t.dispose(), t
                }
                return E = T, D = [{
                    key: "getHandlerId",
                    value: function() {
                        return this.handlerId
                    }
                }, {
                    key: "getDecoratedComponentInstance",
                    value: function() {
                        return (0, s.invariant)(this.decoratedRef.current, "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"), this.decoratedRef.current
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return !_(e, this.props) || !(0, o.shallowEqual)(t, this.state)
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.disposable = new c.SerialDisposable, this.currentType = void 0, this.receiveProps(this.props), this.handleChange()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        !_(this.props, e) && (this.receiveProps(this.props), this.handleChange())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.dispose()
                    }
                }, {
                    key: "receiveProps",
                    value: function(e) {
                        this.handler && (this.handler.receiveProps(e), this.receiveType(S(e)))
                    }
                }, {
                    key: "receiveType",
                    value: function(e) {
                        if (!!this.handlerMonitor && !!this.manager && !!this.handlerConnector) {
                            if (e !== this.currentType) {
                                this.currentType = e;
                                var t, n, r = (n = 2, function(e) {
                                        if (Array.isArray(e)) return e
                                    }(t = x(e, this.handler, this.manager)) || function(e, t) {
                                        var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != i) {
                                            var o = [],
                                                s = !0,
                                                a = !1;
                                            try {
                                                for (i = i.call(e); !(s = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                                            } catch (e) {
                                                a = !0, r = e
                                            } finally {
                                                try {
                                                    !s && null != i.return && i.return()
                                                } finally {
                                                    if (a) throw r
                                                }
                                            }
                                            return o
                                        }
                                    }(t, n) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return p(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                                        }
                                    }(t, n) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    i = r[0],
                                    o = r[1];
                                this.handlerId = i, this.handlerMonitor.receiveHandlerId(i), this.handlerConnector.receiveHandlerId(i);
                                var s = this.manager.getMonitor().subscribeToStateChange(this.handleChange, {
                                    handlerIds: [i]
                                });
                                this.disposable.setDisposable(new c.CompositeDisposable(new c.Disposable(s), new c.Disposable(o)))
                            }
                        }
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.disposable.dispose(), this.handlerConnector && this.handlerConnector.receiveHandlerId(null)
                    }
                }, {
                    key: "getCurrentState",
                    value: function() {
                        return this.handlerConnector ? k(this.handlerConnector.hooks, this.handlerMonitor, this.props) : {}
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return (0, r.jsx)(a.DndContext.Consumer, {
                            children: function(n) {
                                var i = n.dragDropManager;
                                return e.receiveDragDropManager(i), "undefined" != typeof requestAnimationFrame && requestAnimationFrame(function() {
                                    var t;
                                    return null === (t = e.handlerConnector) || void 0 === t ? void 0 : t.reconnect()
                                }), (0, r.jsx)(t, Object.assign({}, e.props, e.getCurrentState(), {
                                    ref: (0, u.isRefable)(t) ? e.decoratedRef : null
                                }), void 0)
                            }
                        }, void 0)
                    }
                }, {
                    key: "receiveDragDropManager",
                    value: function(e) {
                        if (void 0 === this.manager)(0, s.invariant)(void 0 !== e, "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context", M, M), void 0 !== e && (this.manager = e, this.handlerMonitor = d(e), this.handlerConnector = y(e.getBackend()), this.handler = n(this.handlerMonitor, this.decoratedRef))
                    }
                }], h(E.prototype, D), C && h(E, C), T
            }(i.Component);
        return m(D, "DecoratedComponent", t), m(D, "displayName", "".concat(w, "(").concat(M, ")")), l(D, t)
    }
}