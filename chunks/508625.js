function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Layer: function() {
            return A
        },
        LayerClassName: function() {
            return T
        },
        LayerContainer: function() {
            return v
        },
        LayerProvider: function() {
            return S
        },
        createLayer: function() {
            return b
        },
        getParentLayerContainer: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("699581"),
        l = n.n(s),
        c = n("943959"),
        f = n("716936"),
        d = n("260064");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function O(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var T = d.layerContainer,
        S = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }(s, e);
            var t, n, o, i, a, u = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = y(t);
                if (n) {
                    var a = y(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : E(e)
            });

            function s() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), e = u.apply(this, arguments), m(E(e), "state", {
                    layerContainerElement: null
                }), m(E(e), "setLayerContainerElement", function(t) {
                    e.setState({
                        layerContainerElement: t
                    })
                }), m(E(e), "getContextValue", (0, c.cachedFunction)(function(t) {
                    return [t, e.setLayerContainerElement]
                })), e
            }
            return o = s, i = [{
                key: "componentWillUnmount",
                value: function() {
                    this.state.layerContainerElement = null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.layerContext,
                        n = e.children,
                        o = this.state.layerContainerElement;
                    return r.createElement(t.Provider, {
                        value: this.getContextValue(o)
                    }, n)
                }
            }], p(o.prototype, i), a && p(o, a), s
        }(r.Component),
        v = function(e) {
            var t = e.layerContext,
                n = e.className,
                o = O(r.useContext(t), 2)[1];
            return r.createElement("div", {
                className: i()(T, n),
                ref: o
            })
        };

    function g(e) {
        var t = (0, f.default)(e, d.layerContainer);
        return u()(null != t, "Unexpected missing parent container"), t
    }
    var A = function(e) {
        var t = e.layerContext,
            n = e.children;
        return r.createElement(t.Consumer, null, function(e) {
            var t, o, i;
            return t = e, o = n, null == (i = O(t, 1)[0]) ? null : l().createPortal(r.Children.only(o), i)
        })
    };

    function b(e) {
        var t = r.createContext([null, function() {}]),
            n = {
                LayerProvider: function(e) {
                    return r.createElement(S, I({
                        layerContext: t
                    }, e))
                },
                LayerContainer: function(e) {
                    return r.createElement(v, I({
                        layerContext: t
                    }, e))
                },
                Layer: function(e) {
                    return r.createElement(A, I({
                        layerContext: t
                    }, e))
                },
                layerContext: t
            };
        return n.LayerProvider.displayName = "".concat(e, "LayerProvider"), n.LayerContainer.displayName = "".concat(e, "LayerContainer"), n.Layer.displayName = "".concat(e, "Layer"), n
    }
}