function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("735250"),
        s = n("470079"),
        a = n("120356"),
        o = n.n(a),
        l = n("692547"),
        u = n("477690"),
        d = n("481060"),
        _ = n("585483"),
        c = n("624138"),
        E = n("989823"),
        I = n("713308"),
        T = n("520687"),
        f = n("756286"),
        S = n("981631"),
        h = n("991506");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let m = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        N = 1 / 120;
    class p extends(i = s.Component) {
        componentDidMount() {
            this.initialize()
        }
        componentDidUpdate(e) {
            let {
                waveState: t
            } = this.props;
            t === f.WaveStates.FILLING && t !== e.waveState && this.waveFill()
        }
        componentWillUnmount() {
            this.terminate()
        }
        initialize() {
            this.children.forEach(e => e.initialize()), this.bindEvents(), this.resizeCanvas(), document.hidden && this.delayedPause()
        }
        terminate() {
            this.pause(), this.unbindEvents(), this.children.forEach(e => e.terminate())
        }
        bindEvents() {
            window.addEventListener("resize", this.resizeCanvas, !1), window.addEventListener("blur", this.delayedPause, !1), window.addEventListener("focus", this.play, !1), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1), _.ComponentDispatch.subscribe(S.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
        }
        unbindEvents() {
            window.removeEventListener("resize", this.resizeCanvas, !1), window.removeEventListener("blur", this.delayedPause, !1), window.removeEventListener("focus", this.play, !1), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1), _.ComponentDispatch.unsubscribe(S.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
        }
        advanceTransitionalState() {
            let {
                waveState: e
            } = this.props;
            (e === f.WaveStates.INITIAL || e === f.WaveStates.FILLING) && this.updateWaveState(e + 1)
        }
        waveFill() {
            this._isPlaying ? this.children.forEach(e => e.fill()) : this.updateWaveState(f.WaveStates.FILLED)
        }
        updateAnimation(e) {
            this.children.forEach(t => t.update(e))
        }
        renderAnimation() {
            let {
                canvasFillStyle: e
            } = this.props, {
                canvasContext: t
            } = this;
            null != t && (t.fillStyle = e, t.fillRect(0, 0, this.width, this.height), this.children.forEach(e => e.render(t)))
        }
        render() {
            let {
                waveState: e,
                hideFallback: t,
                embedded: n
            } = this.props;
            return (0, r.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                children: i => {
                    let {
                        reducedMotion: s
                    } = i;
                    return s.enabled ? (0, r.jsx)("div", {
                        className: o()(h.fallbackImage, {
                            [h.embedded]: n,
                            [h.visible]: !t && e >= f.WaveStates.ENTERED
                        })
                    }) : (0, r.jsx)("canvas", {
                        className: o()(h.canvas, {
                            [h.embedded]: n
                        }),
                        ref: this.setCanvas
                    })
                }
            })
        }
        constructor(e) {
            super(e), A(this, "width", 0), A(this, "height", 0), A(this, "canvas", void 0), A(this, "canvasContext", void 0), A(this, "children", []), A(this, "wave", void 0), A(this, "ratio", 0), A(this, "_lastTick", 0), A(this, "_isPlaying", !1), A(this, "_reqAnimId", null), A(this, "_pauseTimeout", void 0), A(this, "setCanvas", e => {
                var t;
                if (null == e) return;
                this.canvas = e, this.canvasContext = this.canvas.getContext("2d");
                let n = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1,
                    i = this.canvasContext.webkitBackingStorePixelRatio || this.canvasContext.mozBackingStorePixelRatio || this.canvasContext.msBackingStorePixelRatio || this.canvasContext.oBackingStorePixelRatio || this.canvasContext.backingStorePixelRatio || 1;
                this.ratio = n / i, this.resizeCanvas()
            }), A(this, "resizeCanvas", () => {
                this.width = window.innerWidth, this.height = window.innerHeight;
                let {
                    canvas: e,
                    canvasContext: t,
                    width: n,
                    height: i,
                    ratio: r
                } = this;
                null != e && null != t && (e.width = n * r, e.height = i * r, e.style.width = n + "px", e.style.height = i + "px", t.scale(r, r)), n <= m ? this.pause() : this.play(), this.wave.resizeWave(), this.renderAnimation()
            }), A(this, "handleVisibilityChange", () => {
                document.hidden ? this.delayedPause() : this.play()
            }), A(this, "play", () => {
                clearTimeout(this._pauseTimeout), !this._isPlaying && (this._isPlaying = !0, this.run())
            }), A(this, "pause", () => {
                clearTimeout(this._pauseTimeout), this._isPlaying = !1, null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId), this._reqAnimId = null, this.advanceTransitionalState()
            }), A(this, "delayedPause", () => {
                clearTimeout(this._pauseTimeout), this._pauseTimeout = setTimeout(this.pause, 4e3)
            }), A(this, "updateWaveState", e => {
                let {
                    updateWaveState: t
                } = this.props;
                t(e)
            }), A(this, "handleWaveEmphasize", () => {
                this.wave.emphasize()
            }), A(this, "run", () => {
                if (!this._isPlaying) return;
                if (0 === this._lastTick) {
                    this._lastTick = Date.now(), this._reqAnimId = requestAnimationFrame(this.run);
                    return
                }
                let e = Date.now(),
                    t = Math.min((e - this._lastTick) / 1e3, 8 * N);
                for (; t > 0;) {
                    let e = t < N ? t : N;
                    this.updateAnimation(e), t -= e
                }
                this.renderAnimation(), this._lastTick = e, this._reqAnimId = requestAnimationFrame(this.run)
            }), this.wave = new T.default(this.updateWaveState), this.children = [new E.default, new I.default, this.wave]
        }
    }
    A(p, "defaultProps", {
        embedded: !1
    });
    t.default = e => {
        let t = (0, d.useToken)(l.default.unsafe_rawColors.PRIMARY_630).hex();
        return (0, r.jsx)(p, {
            canvasFillStyle: t,
            ...e
        })
    }
}