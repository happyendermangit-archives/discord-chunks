function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        backgroundImagePreloader: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("711873"),
        i = n.n(o),
        a = n("896299");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = /url\(['"](.*)['"]\)/,
        E = function(e) {
            if (null == e || "" === e || "none" === e) return null;
            var t = e.match(_);
            return null != t ? t[1] : e
        };

    function p(e) {
        var t = function(t) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(y, t);
            var n, o, i, _, p, m = (n = y, o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, t, r, i = c(n);
                if (o) {
                    var a = c(this).constructor;
                    r = Reflect.construct(i, arguments, a)
                } else r = i.apply(this, arguments);
                return e = this, (t = r) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(t) || "function" == typeof t) ? t : u(e)
            });

            function y(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, y), l(u(t = m.call(this, e)), "cachedURLs", []), l(u(t), "canceller", null);
                var t, n = e.style,
                    r = null != n ? E(n.backgroundImage) : null;
                return t.cachedURLs = [r], t.state = {
                    cached: r,
                    loaded: !0
                }, t
            }
            return i = y, _ = [{
                key: "componentDidUpdate",
                value: function(e, t) {
                    var n = this;
                    if (t !== this.state) {
                        var r = this.state,
                            o = r.cached,
                            i = r.loaded,
                            a = this.props.style,
                            u = null != a ? E(a.backgroundImage) : null;
                        null == u && u !== o ? this.setState({
                            loaded: !0,
                            cached: u
                        }) : this.cachedURLs.indexOf(u) >= 0 ? this.setState({
                            loaded: !0,
                            cached: u
                        }) : null != u && u !== o && !0 === i && this.setState({
                            loaded: !1
                        }, function() {
                            return n.preloadURL(u)
                        })
                    }
                }
            }, {
                key: "preloadURL",
                value: function(e) {
                    var t = this;
                    this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, function(n) {
                        t.canceller && (t.canceller = null), !n && (t.cachedURLs.push(e), t.setState({
                            cached: e,
                            loaded: !0
                        }));
                        var r = t.props.onBackgroundImageLoad;
                        r && r(n, e)
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.canceller && this.canceller(), this.cachedURLs.length = 0
                }
            }, {
                key: "render",
                value: function() {
                    var t, n, o, i = this.props,
                        a = i.style,
                        u = (i.onBackgroundImageLoad, function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) {
                                    if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                }
                            }
                            return o
                        }(i, ["style", "onBackgroundImageLoad"])),
                        s = this.state,
                        l = s.loaded,
                        c = s.cached;
                    if (!l && null != a) {
                        ;
                        n = f({}, a), o = (o = {
                            backgroundImage: null == (t = c) || "" === t || "none" === t ? "none" : "url(".concat(t, ")")
                        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(o)).forEach(function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                        }), a = n
                    }
                    return r.createElement(e, f({
                        style: a
                    }, u))
                }
            }], s(i.prototype, _), p && s(i, p), y
        }(r.Component);
        return i()(t, e), t
    }
}