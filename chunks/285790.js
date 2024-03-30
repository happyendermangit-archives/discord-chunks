function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Shakeable: function() {
            return _
        }
    });
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a);

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }(p, e);
        var t, n, o, a, _, E = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function p(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), c(s(t = E.call(this, e)), "animProps", void 0), c(s(t), "_animationFrame", void 0), c(s(t), "ref", r.createRef()), c(s(t), "_animate", function() {
                var e = s(t).animProps;
                if (!t.state.shaking || e.progress > e.duration || null == t.ref.current) {
                    t._animationComplete();
                    return
                }
                var n = Date.now();
                if (e.progress += n - e.last, e.last = n, e.frameCount % 2 != 0) {
                    var r = e.lastDirection * e.intensity,
                        o = u().random(-e.intensity, e.intensity, !0),
                        a = Math.max(0, Math.cbrt(e.duration - e.progress / 1e3));
                    e.intensity *= Math.min(1, a), e.lastDirection *= -1, i()(null != t.ref.current, "Shakeable style set when not mounted"), t.ref.current.style.transform = "translate3d(".concat(r, "px,").concat(o, "px,0px)")
                }
                e.frameCount += 1, t._animationFrame = requestAnimationFrame(t._animate)
            }), c(s(t), "_animationCleanup", function() {
                null != t.ref.current && (t.ref.current.style.transform = ""), cancelAnimationFrame(t._animationFrame)
            }), t.state = {
                shaking: !1
            }, t
        }
        return o = p, a = [{
            key: "getDefaultAnimProps",
            value: function(e, t) {
                return {
                    duration: null != e ? e : 300,
                    progress: 0,
                    last: Date.now(),
                    intensity: null != t ? t : 5,
                    lastDirection: -1,
                    frameCount: 0
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this._animationCleanup()
            }
        }, {
            key: "shake",
            value: function(e, t) {
                this.animProps = this.getDefaultAnimProps(e, t), !this.state.shaking && this.setState({
                    shaking: !0
                }, this._animate)
            }
        }, {
            key: "stop",
            value: function() {
                this.state.shaking && this.setState({
                    shaking: !1
                })
            }
        }, {
            key: "_animationComplete",
            value: function() {
                this.setState({
                    shaking: !1
                }, this._animationCleanup)
            }
        }, {
            key: "render",
            value: function() {
                var e, t, n = this.props,
                    o = n.children,
                    i = function(e, t) {
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
                    }(n, ["children"]);
                return r.createElement("div", (e = function(e) {
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
                }({}, i), t = (t = {
                    ref: this.ref
                }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e), o)
            }
        }], l(o.prototype, a), _ && l(o, _), p
    }(r.Component)
}