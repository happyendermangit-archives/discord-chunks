function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("222007");
    var i, r, s = n("37983"),
        a = n("884691"),
        o = n("862337");
    (r = i || (i = {})).SVG = "svg", r.CANVAS = "canvas", r.HYBRID = "hybrid";
    class l extends a.Component {
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
            return (0, s.jsx)("div", {
                className: this.props.className,
                ref: this.animationRef
            })
        }
        constructor(...e) {
            super(...e), this.animationRef = a.createRef(), this.delayTimeout = new o.Timeout, this.loadAnimation = async () => {
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
                }] = await Promise.all([e(), n.el("865981").then(n.t.bind(n, "865981", 23))]);
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
            }, this.handleComplete = () => {
                let {
                    onComplete: e
                } = this.props;
                null != e && e()
            }
        }
    }
    l.defaultProps = {
        loop: !0,
        autoplay: !0,
        renderer: "svg",
        shouldAnimate: !0,
        resetOnPlay: !1
    }, l.Renderers = i;
    var u = l
}