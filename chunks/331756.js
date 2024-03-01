function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("669491"),
        d = n("769846"),
        u = n("77078"),
        l = n("659500"),
        f = n("159885"),
        _ = n("470074"),
        c = n("261147"),
        g = n("401059"),
        m = n("289382"),
        h = n("49111"),
        v = n("611787");
    let E = (0, f.cssValueToNumber)(d.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        p = 1 / 120;
    class y extends i.Component {
        componentDidMount() {
            this.initialize()
        }
        componentDidUpdate(e) {
            let {
                waveState: t
            } = this.props;
            t === m.WaveStates.FILLING && t !== e.waveState && this.waveFill()
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
            window.addEventListener("resize", this.resizeCanvas, !1), window.addEventListener("blur", this.delayedPause, !1), window.addEventListener("focus", this.play, !1), document.addEventListener("visibilitychange", this.handleVisibilityChange, !1), l.ComponentDispatch.subscribe(h.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
        }
        unbindEvents() {
            window.removeEventListener("resize", this.resizeCanvas, !1), window.removeEventListener("blur", this.delayedPause, !1), window.removeEventListener("focus", this.play, !1), document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1), l.ComponentDispatch.unsubscribe(h.ComponentActions.WAVE_EMPHASIZE, this.handleWaveEmphasize)
        }
        advanceTransitionalState() {
            let {
                waveState: e
            } = this.props;
            (e === m.WaveStates.INITIAL || e === m.WaveStates.FILLING) && this.updateWaveState(e + 1)
        }
        waveFill() {
            this._isPlaying ? this.children.forEach(e => e.fill()) : this.updateWaveState(m.WaveStates.FILLED)
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
            return (0, s.jsx)(u.AccessibilityPreferencesContext.Consumer, {
                children: i => {
                    let {
                        reducedMotion: r
                    } = i;
                    return r.enabled ? (0, s.jsx)("div", {
                        className: a(v.fallbackImage, {
                            [v.embedded]: n,
                            [v.visible]: !t && e >= m.WaveStates.ENTERED
                        })
                    }) : (0, s.jsx)("canvas", {
                        className: a(v.canvas, {
                            [v.embedded]: n
                        }),
                        ref: this.setCanvas
                    })
                }
            })
        }
        constructor(e) {
            super(e), this.width = 0, this.height = 0, this.children = [], this.ratio = 0, this._lastTick = 0, this._isPlaying = !1, this._reqAnimId = null, this.setCanvas = e => {
                var t;
                if (null == e) return;
                this.canvas = e, this.canvasContext = this.canvas.getContext("2d");
                let n = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1,
                    s = this.canvasContext.webkitBackingStorePixelRatio || this.canvasContext.mozBackingStorePixelRatio || this.canvasContext.msBackingStorePixelRatio || this.canvasContext.oBackingStorePixelRatio || this.canvasContext.backingStorePixelRatio || 1;
                this.ratio = n / s, this.resizeCanvas()
            }, this.resizeCanvas = () => {
                this.width = window.innerWidth, this.height = window.innerHeight;
                let {
                    canvas: e,
                    canvasContext: t,
                    width: n,
                    height: s,
                    ratio: i
                } = this;
                null != e && null != t && (e.width = n * i, e.height = s * i, e.style.width = n + "px", e.style.height = s + "px", t.scale(i, i)), n <= E ? this.pause() : this.play(), this.wave.resizeWave(), this.renderAnimation()
            }, this.handleVisibilityChange = () => {
                document.hidden ? this.delayedPause() : this.play()
            }, this.play = () => {
                clearTimeout(this._pauseTimeout), !this._isPlaying && (this._isPlaying = !0, this.run())
            }, this.pause = () => {
                clearTimeout(this._pauseTimeout), this._isPlaying = !1, null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId), this._reqAnimId = null, this.advanceTransitionalState()
            }, this.delayedPause = () => {
                clearTimeout(this._pauseTimeout), this._pauseTimeout = setTimeout(this.pause, 4e3)
            }, this.updateWaveState = e => {
                let {
                    updateWaveState: t
                } = this.props;
                t(e)
            }, this.handleWaveEmphasize = () => {
                this.wave.emphasize()
            }, this.run = () => {
                if (!this._isPlaying) return;
                if (0 === this._lastTick) {
                    this._lastTick = Date.now(), this._reqAnimId = requestAnimationFrame(this.run);
                    return
                }
                let e = Date.now(),
                    t = Math.min((e - this._lastTick) / 1e3, 8 * p);
                for (; t > 0;) {
                    let e = t < p ? t : p;
                    this.updateAnimation(e), t -= e
                }
                this.renderAnimation(), this._lastTick = e, this._reqAnimId = requestAnimationFrame(this.run)
            }, this.wave = new g.default(this.updateWaveState), this.children = [new _.default, new c.default, this.wave]
        }
    }
    y.defaultProps = {
        embedded: !1
    };
    var T = e => {
        let t = (0, u.useToken)(o.default.unsafe_rawColors.PRIMARY_630).hex();
        return (0, s.jsx)(y, {
            canvasFillStyle: t,
            ...e
        })
    }
}