function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Splash: function() {
            return S
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("337905"),
        s = n("567529"),
        l = n("778513"),
        c = n("262243"),
        f = n("800890"),
        d = n("450112"),
        _ = n("42794");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = (0, l.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

    function T(e, t) {
        var n = window.innerWidth,
            r = window.innerHeight;
        if (0 === e || 0 === t) return null;
        var o = t / e,
            i = n,
            a = Math.round(n * o);
        return a < r && (a = r, i = Math.round(r * (o = e / t))), {
            naturalWidth: e,
            naturalHeight: t,
            width: i,
            height: a
        }
    }

    function S(e) {
        var t, n, r = e.splash,
            i = e.children;
        var u = (t = o.useState({
                width: 0,
                height: 0,
                naturalHeight: 0,
                naturalWidth: 0
            }), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            l = u[0],
            c = l.width,
            f = l.height,
            d = u[1];
        return o.useEffect(function() {
            var e = function() {
                d(function(e) {
                    var t = T(e.naturalWidth, e.naturalHeight);
                    return null != t ? t : e
                })
            };
            return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("reslize", e)
                }
        }, []), o.createElement(o.Fragment, null, o.createElement(s.default, {
            className: a()(_.rightSplit),
            onLoad: function(e) {
                var t = e.currentTarget,
                    n = T(t.naturalWidth, t.naturalHeight);
                null != n && d(n)
            },
            src: r,
            width: c,
            height: f
        }), o.createElement("div", {
            className: a()(_.leftSplit, y({}, _.nonEmbeddedLeftSplit, !0))
        }, i))
    }
    var v = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(E, e);
        var t, n, r, i, u, l = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function E() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), e = l.apply(this, arguments), y(p(e), "state", {
                naturalWidth: 0,
                naturalHeight: 0,
                width: 0,
                height: 0,
                showWaveAnimation: e.calculateShowWaveAnimation(),
                splashLoaded: !1
            }), y(p(e), "handleResize", function() {
                var t, n, r = e.state,
                    o = T(r.naturalWidth, r.naturalHeight),
                    i = e.calculateShowWaveAnimation();
                if (null != o) {
                    ;
                    e.setState((t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                y(e, t, n[t])
                            })
                        }
                        return e
                    }({}, o), n = (n = {
                        showWaveAnimation: i
                    }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t))
                } else e.setState({
                    showWaveAnimation: i
                })
            }), y(p(e), "handleLoad", function(t) {
                var n = t.currentTarget,
                    r = T(n.naturalWidth, n.naturalHeight);
                null != r && e.setState(r), e.setState({
                    splashLoaded: !0
                }), window.removeEventListener("resize", e.handleResize), window.addEventListener("resize", e.handleResize)
            }), e
        }
        return r = E, i = [{
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("resize", this.handleResize)
            }
        }, {
            key: "calculateShowWaveAnimation",
            value: function() {
                return window.innerWidth > O
            }
        }, {
            key: "renderSplashArt",
            value: function() {
                var e = this.props,
                    t = e.splash,
                    n = e.embedded,
                    r = this.state,
                    i = r.width,
                    u = r.height;
                return null != t ? o.createElement(s.default, {
                    className: a()(_.rightSplit, y({}, _.embedded, n)),
                    src: t,
                    width: i,
                    height: u,
                    onLoad: this.handleLoad
                }) : null
            }
        }, {
            key: "renderWave",
            value: function() {
                var e = this.props,
                    t = e.waveState,
                    n = e.updateWaveState,
                    r = e.embedded,
                    i = this.state,
                    a = i.showWaveAnimation,
                    u = i.splashLoaded;
                return a ? o.createElement(f.default, {
                    embedded: r,
                    waveState: t,
                    updateWaveState: n,
                    hideFallback: !u
                }) : o.createElement("div", {
                    className: _.mobileWave
                })
            }
        }, {
            key: "renderContent",
            value: function() {
                var e = this.props,
                    t = e.children,
                    n = e.waveState,
                    r = e.showLogo,
                    i = e.logoClassName,
                    u = e.embedded,
                    s = this.state.showWaveAnimation;
                return o.createElement(o.Fragment, null, this.renderWave(), o.createElement("div", {
                    className: a()(_.leftSplit, y({}, _.nonEmbeddedLeftSplit, u))
                }, r ? o.createElement(c.default, {
                    show: !s || n === d.WaveStates.ENTERED && n !== d.WaveStates.FILLING,
                    className: a()(_.logo, i)
                }) : null, t))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.className;
                return o.createElement("div", {
                    className: a()(e, _.wrapper)
                }, this.renderSplashArt(), this.renderContent())
            }
        }], m(r.prototype, i), u && m(r, u), E
    }(o.PureComponent);
    y(v, "defaultProps", {
        embedded: !1
    }), t.default = v
}