function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("447515"),
        s = n("337905"),
        l = n("784184"),
        c = n("120447"),
        f = n("778513"),
        d = n("509988"),
        _ = n("131113"),
        E = n("621325"),
        p = n("450112"),
        m = n("281767"),
        y = n("991506");

    function I(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var v = (0, f.cssValueToNumber)(s.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        g = 1 / 120,
        A = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
            }(f, e);
            var t, n, r, i, u, s = (t = f, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = T(t);
                if (n) {
                    var a = T(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : I(e)
            });

            function f(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, f), O(I(t = s.call(this, e)), "width", 0), O(I(t), "height", 0), O(I(t), "canvas", void 0), O(I(t), "canvasContext", void 0), O(I(t), "children", []), O(I(t), "wave", void 0), O(I(t), "ratio", 0), O(I(t), "_lastTick", 0), O(I(t), "_isPlaying", !1), O(I(t), "_reqAnimId", null), O(I(t), "_pauseTimeout", void 0), O(I(t), "setCanvas", function(e) {
                    if (null != e) {
                        t.canvas = e, t.canvasContext = t.canvas.getContext("2d");
                        var n, r = null !== (n = window.devicePixelRatio) && void 0 !== n ? n : 1,
                            o = t.canvasContext.webkitBackingStorePixelRatio || t.canvasContext.mozBackingStorePixelRatio || t.canvasContext.msBackingStorePixelRatio || t.canvasContext.oBackingStorePixelRatio || t.canvasContext.backingStorePixelRatio || 1;
                        t.ratio = r / o, t.resizeCanvas()
                    }
                }), O(I(t), "resizeCanvas", function() {
                    t.width = window.innerWidth, t.height = window.innerHeight;
                    var e = I(t),
                        n = e.canvas,
                        r = e.canvasContext,
                        o = e.width,
                        i = e.height,
                        a = e.ratio;
                    null != n && null != r && (n.width = o * a, n.height = i * a, n.style.width = o + "px", n.style.height = i + "px", r.scale(a, a)), o <= v ? t.pause() : t.play(), t.wave.resizeWave(), t.renderAnimation()
                }), O(I(t), "handleVisibilityChange", function() {
                    document.hidden ? t.delayedPause() : t.play()
                }), O(I(t), "play", function() {
                    clearTimeout(t._pauseTimeout), !t._isPlaying && (t._isPlaying = !0, t.run())
                }), O(I(t), "pause", function() {
                    clearTimeout(t._pauseTimeout), t._isPlaying = !1, null != t._reqAnimId && window.cancelAnimationFrame(t._reqAnimId), t._reqAnimId = null, t.advanceTransitionalState()
                }), O(I(t), "delayedPause", function() {
                    clearTimeout(t._pauseTimeout), t._pauseTimeout = setTimeout(t.pause, 4e3)
                }), O(I(t), "updateWaveState", function(e) {
                    (0, t.props.updateWaveState)(e)
                }), O(I(t), "handleWaveEmphasize", function() {
                    t.wave.emphasize()
                }), O(I(t), "run", function() {
                    if (t._isPlaying) {
                        if (0 === t._lastTick) {
                            t._lastTick = Date.now(), t._reqAnimId = requestAnimationFrame(t.run);
                            return
                        }
                        for (var e = Date.now(), n = Math.min((e - t._lastTick) / 1e3, 8 * g); n > 0;) {
                            var r = n < g ? n : g;
                            t.updateAnimation(r), n -= r
                        }
                        t.renderAnimation(), t._lastTick = e, t._reqAnimId = requestAnimationFrame(t.run)
                    }
                }), t.wave = new E.default(t.updateWaveState), t.children = [new d.default, new _.default, t.wave], t
            }
            return r = f, i = [{
                key: "componentDidMount",
                value: function() {
                    this.initialize()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props.waveState;
                    t === p.WaveStates.FILLING && t !== e.waveState && this.waveFill()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.terminate()
                }
            }, {
                key: "initialize",
                value: function() {
                    this.children.forEach(function(e) {
                        return e.initialize()
                    }), this.bindEvents(), this.resizeCanvas(), document.hidden && this.delayedPause()
                }
            }, {
                key: "terminate",
                value: function() {
                    this.pause(), this.unbindEvents(), this.children.forEach(function(e) {
                        return e.terminate()
                    })
                }
            }, {
                key: "bindEvents",
                value: function() {
                    window.addEventListener("resize", this.resizeCanvas, !1), window.addEventListener("blur", this.delayedPause, !1), window.addEventListener("focus", this.play, !1), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1), c.ComponentDispatch.subscribe(m.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                }
            }, {
                key: "unbindEvents",
                value: function() {
                    window.removeEventListener("resize", this.resizeCanvas, !1), window.removeEventListener("blur", this.delayedPause, !1), window.removeEventListener("focus", this.play, !1), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1), c.ComponentDispatch.unsubscribe(m.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
                }
            }, {
                key: "advanceTransitionalState",
                value: function() {
                    var e = this.props.waveState;
                    (e === p.WaveStates.INITIAL || e === p.WaveStates.FILLING) && this.updateWaveState(e + 1)
                }
            }, {
                key: "waveFill",
                value: function() {
                    this._isPlaying ? this.children.forEach(function(e) {
                        return e.fill()
                    }) : this.updateWaveState(p.WaveStates.FILLED)
                }
            }, {
                key: "updateAnimation",
                value: function(e) {
                    this.children.forEach(function(t) {
                        return t.update(e)
                    })
                }
            }, {
                key: "renderAnimation",
                value: function() {
                    var e = this.props.canvasFillStyle,
                        t = this.canvasContext;
                    null != t && (t.fillStyle = e, t.fillRect(0, 0, this.width, this.height), this.children.forEach(function(e) {
                        return e.render(t)
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.waveState,
                        r = t.hideFallback,
                        i = t.embedded;
                    return o.createElement(l.AccessibilityPreferencesContext.Consumer, null, function(t) {
                        var u;
                        return t.reducedMotion.enabled ? o.createElement("div", {
                            className: a()(y.fallbackImage, (O(u = {}, y.embedded, i), O(u, y.visible, !r && n >= p.WaveStates.ENTERED), u))
                        }) : o.createElement("canvas", {
                            className: a()(y.canvas, O({}, y.embedded, i)),
                            ref: e.setCanvas
                        })
                    })
                }
            }], h(r.prototype, i), u && h(r, u), f
        }(o.Component);
    O(A, "defaultProps", {
        embedded: !1
    });
    t.default = function(e) {
        var t = (0, l.useToken)(u.default.unsafe_rawColors.PRIMARY_630).hex();
        return o.createElement(A, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    O(e, t, n[t])
                })
            }
            return e
        }({
            canvasFillStyle: t
        }, e))
    }
}