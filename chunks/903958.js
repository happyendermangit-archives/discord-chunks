function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("803997"),
        o = n.n(a),
        l = n("442837"),
        u = n("607070"),
        d = n("451478"),
        _ = n("477094");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class E extends(i = s.PureComponent) {
        async componentDidMount() {
            let {
                importData: e,
                nextScene: t,
                pauseWhileUnfocused: i,
                pause: r,
                isWindowFocused: s,
                useReducedMotion: a
            } = this.props, [o, {
                default: l
            }] = await Promise.all([e(), n.e("23755").then(n.t.bind(n, "500923", 23))]);
            null != this.animationRef && (this.animation = l.loadAnimation({
                container: this.animationRef,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: o
            }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(t), (i && !s || r || a) && this.animation.pause())
        }
        componentWillUnmount() {
            this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
        }
        componentDidUpdate(e) {
            var t, n, i;
            let {
                nextScene: r,
                pauseWhileUnfocused: s,
                pause: a,
                isWindowFocused: o,
                useReducedMotion: l
            } = this.props;
            r !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(r), null != this.animation && (s && !e.isWindowFocused && o && !l && !0 !== a ? this.animation.play() : (l || s && e.isWindowFocused && !o) && this.animation.pause()), !e.pause && a ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !a && !l && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== r && a && (this.playScene(r), null === (i = this.animation) || void 0 === i || i.pause())
        }
        shouldForcePlayAfter() {
            let {
                sceneSegments: e
            } = this.props;
            return !0 === e[this.currentScene].shouldForcePlayAfter
        }
        playScene(e) {
            if (this.isUnmounted) return;
            let {
                onScenePlay: t,
                sceneSegments: n,
                useReducedMotion: i
            } = this.props, r = n[e], s = n[this.currentScene];
            if (null != this.animation && (e === this.currentScene || r.BEG !== s.BEG || r.END !== s.END) && this.animation.playSegments([r.BEG, r.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
                var a;
                null === (a = this.animation) || void 0 === a || a.pause()
            }
        }
        render() {
            return (0, r.jsx)("div", {
                ref: this.handleSetRef,
                className: o()(this.props.className, _.wrapper)
            })
        }
        constructor(...e) {
            super(...e), c(this, "animationRef", null), c(this, "animation", void 0), c(this, "currentScene", this.props.nextScene), c(this, "isUnmounted", !1), c(this, "handleLoopComplete", () => {
                let {
                    onSceneComplete: e,
                    nextScene: t
                } = this.props;
                null != e && e(this.currentScene), this.playScene(t)
            }), c(this, "handleComplete", () => {
                let {
                    onSceneComplete: e
                } = this.props;
                null != e && e(this.currentScene)
            }), c(this, "handleEnterFrame", e => {
                let {
                    onEnterFrame: t
                } = this.props;
                null == t || t(this.currentScene, e)
            }), c(this, "handleSetRef", e => {
                this.animationRef = e;
                let {
                    animationRef: t
                } = this.props;
                null != t && t(e)
            })
        }
    }
    c(E, "defaultProps", {
        pauseWhileUnfocused: !0,
        pause: !1
    });
    t.default = e => {
        let {
            componentRef: t,
            ...n
        } = e, i = (0, l.useStateFromStores)([d.default], () => d.default.isFocused()), s = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
        return (0, r.jsx)(E, {
            ...n,
            isWindowFocused: i,
            useReducedMotion: s,
            ref: t
        })
    }
}