function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s, a = n("735250"),
        o = n("470079"),
        l = n("846519");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {})).SVG = "svg", s.CANVAS = "canvas";
    class d extends(r = o.Component) {
        componentDidMount() {
            (null == this.props.versionKey || !(this.props.versionKey < 0)) && this.loadAnimation()
        }
        componentDidUpdate(e) {
            (null == this.props.versionKey || !(this.props.versionKey < 0)) && (null != this.props.versionKey && null != e.versionKey && this.props.versionKey > e.versionKey ? this.loadAnimation() : this.playOrPauseAnimation(e))
        }
        componentWillUnmount() {
            null != this.animation && (this.animation.stop(), this.animation.destroy(), this.animation = null), this.delayTimeout.stop()
        }
        playOrPauseAnimation(e) {
            null != this.animation && (this.props.shouldAnimate && (null == e || !e.shouldAnimate) ? this.props.resetOnPlay ? this.animation.goToAndPlay(0) : this.animation.play() : !this.props.shouldAnimate && (null == e || e.shouldAnimate) && (this.animation.pause(), null != this.props.pauseAtFrame && this.animation.goToAndStop(this.props.pauseAtFrame, !0)))
        }
        render() {
            return (0, a.jsx)("div", {
                className: this.props.className,
                ref: this.animationRef
            })
        }
        constructor(...e) {
            super(...e), u(this, "animationRef", o.createRef()), u(this, "animation", void 0), u(this, "delayTimeout", new l.Timeout), u(this, "loadAnimation", async () => {
                let {
                    importData: e,
                    loop: t,
                    autoplay: i,
                    delay: r,
                    renderer: s,
                    shouldAnimate: a
                } = this.props;
                null != this.animation && this.animation.destroy();
                let [o, {
                    default: l
                }] = await Promise.all([e(), n.e("23755").then(n.t.bind(n, "500923", 23))]);
                null != this.animationRef.current && (this.animation = l.loadAnimation({
                    container: this.animationRef.current,
                    renderer: s,
                    loop: t,
                    autoplay: i && null == r && a,
                    animationData: o
                }), null != r ? this.delayTimeout.start(r, () => {
                    var e;
                    null === (e = this.animation) || void 0 === e || e.play()
                }) : this.playOrPauseAnimation(), this.animation.addEventListener("complete", this.handleComplete))
            }), u(this, "handleComplete", () => {
                let {
                    onComplete: e
                } = this.props;
                null != e && e()
            })
        }
    }
    u(d, "defaultProps", {
        loop: !0,
        autoplay: !0,
        renderer: "svg",
        shouldAnimate: !0,
        resetOnPlay: !1
    }), u(d, "Renderers", i), t.default = d
}