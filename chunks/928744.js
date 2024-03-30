function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("252546"),
        i = n("483424");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && E(e, t)
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function p(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = f(e);
            if (t) {
                var u = f(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(n)
        }
    }

    function m(e) {
        var t, n;
        return null !== (n = null !== (t = e.displayName) && void 0 !== t ? t : e.name) && void 0 !== n ? n : "<Unknown>"
    }
    t.default = function(e, t, n) {
        return null != n && n.forwardRef ? function(e, t) {
            return function(n) {
                var s, f = "FluxContainer(".concat(m(n), ")"),
                    E = function(s) {
                        d(m, s);
                        var E = p(m);

                        function m() {
                            var n;
                            return u(this, m), n = E.apply(this, arguments), c(a(n), "memoizedGetStateFromStores", y(t)), c(a(n), "listener", new i.BatchedStoreListener(e, function() {
                                var e = n.memoizedGetStateFromStores.getCachedResult(n.props.childProps);
                                if (!(null != e && (n.memoizedGetStateFromStores.clear(), (0, o.default)(n.memoizedGetStateFromStores(n.props.childProps), e)))) n.forceUpdate()
                            })), n
                        }
                        return l(m, [{
                            key: "componentDidMount",
                            value: function() {
                                this.listener.attach(f)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.listener.detach(), this.memoizedGetStateFromStores.clear()
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.forwardedConnectStoresRef,
                                    o = e.childProps,
                                    i = this.memoizedGetStateFromStores(o);
                                return r.createElement(n, _({
                                    ref: t
                                }, o, i))
                            }
                        }]), m
                    }(r.Component);
                c(E, "displayName", f);
                var I = r.forwardRef(function(e, t) {
                    return r.createElement(E, {
                        childProps: e,
                        forwardedConnectStoresRef: t
                    })
                });
                return I.displayName = "ForwardRef(".concat(f, ")"), I
            }
        }(e, t) : function(e, t) {
            return function(n) {
                var s, f = "FluxContainer(".concat(m(n), ")"),
                    E = function(s) {
                        d(m, s);
                        var E = p(m);

                        function m() {
                            var n;
                            return u(this, m), n = E.apply(this, arguments), c(a(n), "memoizedGetStateFromStores", y(t)), c(a(n), "listener", new i.BatchedStoreListener(e, function() {
                                var e = n.memoizedGetStateFromStores.getCachedResult(n.props);
                                if (!(null != e && (n.memoizedGetStateFromStores.clear(), (0, o.default)(n.memoizedGetStateFromStores(n.props), e)))) n.forceUpdate()
                            })), n
                        }
                        return l(m, [{
                            key: "componentDidMount",
                            value: function() {
                                this.listener.attach(f)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.listener.detach(), this.memoizedGetStateFromStores.clear()
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.memoizedGetStateFromStores(this.props);
                                return r.createElement(n, _({}, this.props, e))
                            }
                        }]), m
                    }(r.Component);
                return c(E, "displayName", f), E
            }
        }(e, t)
    };

    function y(e) {
        var t = null,
            n = null,
            r = function(e) {
                return null != t && null != n && (0, o.default)(t, e) ? n : null != t && null != n && (0, o.default)(t, e) ? (t = e, n) : null
            },
            i = function(o) {
                var i = r(o);
                return null != i ? i : n = e(t = o)
            };
        return i.getCachedResult = r, i.clear = function() {
            t = null, n = null
        }, i
    }
}