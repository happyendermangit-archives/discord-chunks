function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Splash: function() {
            return g
        },
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("769846"),
        l = n("313609"),
        u = n("159885"),
        d = n("725484"),
        c = n("331756"),
        f = n("289382"),
        _ = n("261145");
    let h = (0, u.cssValueToNumber)(o.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

    function E(e, t) {
        let {
            innerWidth: n,
            innerHeight: i
        } = window;
        if (0 === e || 0 === t) return null;
        let s = t / e,
            r = n,
            a = Math.round(n * s);
        return a < i && (a = i, r = Math.round(i * (s = e / t))), {
            naturalWidth: e,
            naturalHeight: t,
            width: r,
            height: a
        }
    }

    function g(e) {
        let {
            splash: t,
            children: n
        } = e, [{
            width: r,
            height: o
        }, u] = s.useState({
            width: 0,
            height: 0,
            naturalHeight: 0,
            naturalWidth: 0
        });
        return s.useEffect(() => {
            function e() {
                u(e => {
                    let {
                        naturalWidth: t,
                        naturalHeight: n
                    } = e, i = E(t, n);
                    return null != i ? i : e
                })
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("reslize", e)
        }, []), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.default, {
                className: a(_.rightSplit),
                onLoad: function(e) {
                    let {
                        currentTarget: t
                    } = e, {
                        naturalWidth: n,
                        naturalHeight: i
                    } = t, s = E(n, i);
                    null != s && u(s)
                },
                src: t,
                width: r,
                height: o
            }), (0, i.jsx)("div", {
                className: a(_.leftSplit, {
                    [_.nonEmbeddedLeftSplit]: !0
                }),
                children: n
            })]
        })
    }
    class m extends s.PureComponent {
        componentWillUnmount() {
            window.removeEventListener("resize", this.handleResize)
        }
        calculateShowWaveAnimation() {
            return window.innerWidth > h
        }
        renderSplashArt() {
            let {
                splash: e,
                embedded: t
            } = this.props, {
                width: n,
                height: s
            } = this.state;
            return null != e ? (0, i.jsx)(l.default, {
                className: a(_.rightSplit, {
                    [_.embedded]: t
                }),
                src: e,
                width: n,
                height: s,
                onLoad: this.handleLoad
            }) : null
        }
        renderWave() {
            let {
                waveState: e,
                updateWaveState: t,
                embedded: n
            } = this.props, {
                showWaveAnimation: s,
                splashLoaded: r
            } = this.state;
            return s ? (0, i.jsx)(c.default, {
                embedded: n,
                waveState: e,
                updateWaveState: t,
                hideFallback: !r
            }) : (0, i.jsx)("div", {
                className: _.mobileWave
            })
        }
        renderContent() {
            let {
                children: e,
                waveState: t,
                showLogo: n,
                logoClassName: r,
                embedded: o
            } = this.props, {
                showWaveAnimation: l
            } = this.state;
            return (0, i.jsxs)(s.Fragment, {
                children: [this.renderWave(), (0, i.jsxs)("div", {
                    className: a(_.leftSplit, {
                        [_.nonEmbeddedLeftSplit]: o
                    }),
                    children: [n ? (0, i.jsx)(d.default, {
                        show: !l || t === f.WaveStates.ENTERED && t !== f.WaveStates.FILLING,
                        className: a(_.logo, r)
                    }) : null, e]
                })]
            })
        }
        render() {
            let {
                className: e
            } = this.props;
            return (0, i.jsxs)("div", {
                className: a(e, _.wrapper),
                children: [this.renderSplashArt(), this.renderContent()]
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                naturalWidth: 0,
                naturalHeight: 0,
                width: 0,
                height: 0,
                showWaveAnimation: this.calculateShowWaveAnimation(),
                splashLoaded: !1
            }, this.handleResize = () => {
                let {
                    naturalWidth: e,
                    naturalHeight: t
                } = this.state, n = E(e, t), i = this.calculateShowWaveAnimation();
                null != n ? this.setState({
                    ...n,
                    showWaveAnimation: i
                }) : this.setState({
                    showWaveAnimation: i
                })
            }, this.handleLoad = e => {
                let {
                    currentTarget: t
                } = e, {
                    naturalWidth: n,
                    naturalHeight: i
                } = t, s = E(n, i);
                null != s && this.setState(s), this.setState({
                    splashLoaded: !0
                }), window.removeEventListener("resize", this.handleResize), window.addEventListener("resize", this.handleResize)
            }
        }
    }
    m.defaultProps = {
        embedded: !1
    };
    var p = m
}