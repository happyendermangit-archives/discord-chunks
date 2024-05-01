function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Splash: function() {
            return h
        }
    }), n("47120");
    var i, r = n("735250"),
        a = n("470079"),
        s = n("120356"),
        o = n.n(s),
        l = n("477690"),
        u = n("257915"),
        d = n("624138"),
        _ = n("980483"),
        c = n("450590"),
        E = n("756286"),
        I = n("503638");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let f = (0, d.cssValueToNumber)(l.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

    function S(e, t) {
        let {
            innerWidth: n,
            innerHeight: i
        } = window;
        if (0 === e || 0 === t) return null;
        let r = t / e,
            a = n,
            s = Math.round(n * r);
        return s < i && (s = i, a = Math.round(i * (r = e / t))), {
            naturalWidth: e,
            naturalHeight: t,
            width: a,
            height: s
        }
    }

    function h(e) {
        let {
            splash: t,
            children: n
        } = e, [{
            width: i,
            height: s
        }, l] = a.useState({
            width: 0,
            height: 0,
            naturalHeight: 0,
            naturalWidth: 0
        });
        return a.useEffect(() => {
            function e() {
                l(e => {
                    let {
                        naturalWidth: t,
                        naturalHeight: n
                    } = e, i = S(t, n);
                    return null != i ? i : e
                })
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("reslize", e)
        }, []), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.default, {
                className: o()(I.rightSplit),
                onLoad: function(e) {
                    let {
                        currentTarget: t
                    } = e, {
                        naturalWidth: n,
                        naturalHeight: i
                    } = t, r = S(n, i);
                    null != r && l(r)
                },
                src: t,
                width: i,
                height: s
            }), (0, r.jsx)("div", {
                className: o()(I.leftSplit, {
                    [I.nonEmbeddedLeftSplit]: !0
                }),
                children: n
            })]
        })
    }
    class A extends(i = a.PureComponent) {
        componentWillUnmount() {
            window.removeEventListener("resize", this.handleResize)
        }
        calculateShowWaveAnimation() {
            return window.innerWidth > f
        }
        renderSplashArt() {
            let {
                splash: e,
                embedded: t
            } = this.props, {
                width: n,
                height: i
            } = this.state;
            return null != e ? (0, r.jsx)(u.default, {
                className: o()(I.rightSplit, {
                    [I.embedded]: t
                }),
                src: e,
                width: n,
                height: i,
                onLoad: this.handleLoad
            }) : null
        }
        renderWave() {
            let {
                waveState: e,
                updateWaveState: t,
                embedded: n
            } = this.props, {
                showWaveAnimation: i,
                splashLoaded: a
            } = this.state;
            return i ? (0, r.jsx)(c.default, {
                embedded: n,
                waveState: e,
                updateWaveState: t,
                hideFallback: !a
            }) : (0, r.jsx)("div", {
                className: I.mobileWave
            })
        }
        renderContent() {
            let {
                children: e,
                waveState: t,
                showLogo: n,
                logoClassName: i,
                embedded: s
            } = this.props, {
                showWaveAnimation: l
            } = this.state;
            return (0, r.jsxs)(a.Fragment, {
                children: [this.renderWave(), (0, r.jsxs)("div", {
                    className: o()(I.leftSplit, {
                        [I.nonEmbeddedLeftSplit]: s
                    }),
                    children: [n ? (0, r.jsx)(_.default, {
                        show: !l || t === E.WaveStates.ENTERED && t !== E.WaveStates.FILLING,
                        className: o()(I.logo, i)
                    }) : null, e]
                })]
            })
        }
        render() {
            let {
                className: e
            } = this.props;
            return (0, r.jsxs)("div", {
                className: o()(e, I.wrapper),
                children: [this.renderSplashArt(), this.renderContent()]
            })
        }
        constructor(...e) {
            super(...e), T(this, "state", {
                naturalWidth: 0,
                naturalHeight: 0,
                width: 0,
                height: 0,
                showWaveAnimation: this.calculateShowWaveAnimation(),
                splashLoaded: !1
            }), T(this, "handleResize", () => {
                let {
                    naturalWidth: e,
                    naturalHeight: t
                } = this.state, n = S(e, t), i = this.calculateShowWaveAnimation();
                null != n ? this.setState({
                    ...n,
                    showWaveAnimation: i
                }) : this.setState({
                    showWaveAnimation: i
                })
            }), T(this, "handleLoad", e => {
                let {
                    currentTarget: t
                } = e, {
                    naturalWidth: n,
                    naturalHeight: i
                } = t, r = S(n, i);
                null != r && this.setState(r), this.setState({
                    splashLoaded: !0
                }), window.removeEventListener("resize", this.handleResize), window.addEventListener("resize", this.handleResize)
            })
        }
    }
    T(A, "defaultProps", {
        embedded: !1
    }), t.default = A
}