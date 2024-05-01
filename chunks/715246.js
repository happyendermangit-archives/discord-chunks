function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertSecondsToClockFormat: function() {
            return V
        }
    }), n("653041"), n("47120"), n("411104");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("392711"),
        d = n.n(u),
        _ = n("748780"),
        c = n("481060"),
        E = n("818083"),
        I = n("268353"),
        T = n("866960"),
        f = n("626135"),
        S = n("70956"),
        h = n("36703"),
        A = n("228488"),
        m = n("196050"),
        N = n("189595"),
        p = n("27268"),
        O = n("259773"),
        R = n("80618"),
        C = n("786048"),
        g = n("897353"),
        L = n("181058"),
        v = n("810090"),
        D = n("768760"),
        M = n("981631"),
        y = n("689938"),
        P = n("83983"),
        U = n("26673");

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let G = "-:--",
        w = {
            friction: 14,
            tension: 200
        },
        B = {
            VIDEO: "VIDEO",
            AUDIO: "AUDIO"
        },
        k = {
            width: "100%",
            height: "100%",
            backgroundColor: "black"
        };

    function V(e) {
        let t = 0 | e,
            n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
    }
    let x = e => {
        let {
            current: t,
            duration: n
        } = e, i = null != t ? V(t) : G, r = null != n ? V(n) : G;
        return i = i.padStart(r.length, "0"), (0, s.jsxs)("div", {
            className: P.durationTimeWrapper,
            children: [(0, s.jsx)("span", {
                className: P.durationTimeDisplay,
                children: i
            }), (0, s.jsx)("span", {
                className: P.durationTimeSeparator,
                children: "/"
            }), (0, s.jsx)("span", {
                className: P.durationTimeDisplay,
                children: r
            })]
        })
    };
    class F extends(i = a.Component) {
        componentDidMount() {
            this.state.translateY.setValue(this.props.autoPlay ? 1 : 0)
        }
        componentDidUpdate(e) {
            var t, n, i, r, s;
            let {
                hide: a,
                playing: o
            } = this.props;
            a && !e.hide ? (this.animateControls(1, o), null === (t = this.volumeButton) || void 0 === t || t.blur(), null === (n = (i = this.props).onControlsHide) || void 0 === n || n.call(i)) : !a && e.hide && (this.animateControls(0, o), null === (r = (s = this.props).onControlsShow) || void 0 === r || r.call(s))
        }
        updateProgress(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                {
                    durationBar: n
                } = this;
            null != n && n.setGrabber(e, t)
        }
        animateControls(e, t) {
            let {
                translateY: n
            } = this.state;
            t ? _.default.spring(n, {
                toValue: e,
                ...w
            }).start() : n.setValue(e)
        }
        getAnimatedStyle() {
            let {
                translateY: e
            } = this.state;
            return {
                transform: [{
                    translateY: e.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"]
                    })
                }]
            }
        }
        renderPlayIcon() {
            let {
                playing: e,
                currentTime: t,
                duration: n,
                onPause: i,
                onPlay: r,
                disabled: a
            } = this.props;
            return e ? (0, s.jsx)(c.Clickable, {
                className: P.videoButton,
                onClick: i,
                tabIndex: a ? -1 : 0,
                "aria-label": y.default.Messages.PAUSE,
                children: (0, s.jsx)(C.default, {
                    className: P.controlIcon
                }, "pause")
            }) : null != t && t === n ? (0, s.jsx)(c.Clickable, {
                className: P.videoButton,
                onClick: r,
                tabIndex: a ? -1 : 0,
                "aria-label": y.default.Messages.PLAY_AGAIN,
                children: (0, s.jsx)(L.default, {
                    className: P.controlIcon
                }, "replay")
            }) : (0, s.jsx)(c.Clickable, {
                className: P.videoButton,
                onClick: r,
                tabIndex: a ? -1 : 0,
                "aria-label": y.default.Messages.PLAY,
                children: (0, s.jsx)(g.default, {
                    className: P.controlIcon
                }, "play")
            })
        }
        render() {
            let {
                buffers: e,
                children: t,
                currentTime: n,
                duration: i,
                muted: r,
                onDrag: a,
                onDragEnd: o,
                onDragStart: l,
                onToggleMuted: u,
                onVolumeShow: d,
                onVolumeHide: c,
                width: E,
                volume: I,
                type: T
            } = this.props;
            return (0, s.jsxs)(_.default.div, {
                className: T === B.VIDEO ? P.videoControls : P.audioControls,
                onClick: e => e.stopPropagation(),
                onDoubleClick: e => e.stopPropagation(),
                style: this.getAnimatedStyle(),
                children: [this.renderPlayIcon(), "string" == typeof E || E > 250 ? (0, s.jsx)(x, {
                    current: n,
                    duration: i
                }) : null, (0, s.jsx)(N.default, {
                    buffers: e,
                    value: null != i ? i : 0,
                    onDrag: a,
                    onDragEnd: o,
                    onDragStart: l,
                    type: N.default.Types.DURATION,
                    ref: this.setDurationRef
                }), (0, s.jsx)("div", {
                    className: U.flex,
                    children: (0, s.jsx)(R.default, {
                        ref: this.setVolumeButtonRef,
                        muted: r,
                        value: I,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: e => a(e, N.default.Types.VOLUME),
                        onToggleMute: u,
                        onVolumeShow: d,
                        onVolumeHide: c,
                        iconClassName: P.controlIcon,
                        sliderWrapperClassName: P.volumeSliderWrapper
                    })
                }), t]
            })
        }
        constructor(...e) {
            super(...e), b(this, "state", {
                translateY: new _.default.Value(0)
            }), b(this, "volumeButton", void 0), b(this, "durationBar", void 0), b(this, "setDurationRef", e => {
                this.durationBar = e
            }), b(this, "setVolumeButtonRef", e => {
                this.volumeButton = e
            })
        }
    }

    function H(e) {
        let {
            fileName: t,
            fileSize: n,
            src: i,
            disabled: r,
            mimeType: a,
            hideDownloadButton: o
        } = e;
        return (0, s.jsxs)("div", {
            className: P.audioMetadata,
            children: [(0, s.jsxs)("div", {
                className: P.metadataContent,
                children: [r ? t : (0, s.jsx)(m.default, {
                    href: i,
                    className: P.metadataDownload,
                    iconClassName: P.metadataIcon,
                    mimeType: a,
                    fileName: t
                }), (0, s.jsx)("div", {
                    className: P.metadataSize,
                    children: n
                })]
            }), !o && (0, s.jsx)(m.default, {
                href: i,
                className: P.metadataDownload,
                iconClassName: P.metadataIcon,
                mimeType: a
            })]
        })
    }
    b(F, "defaultProps", {
        disabled: !1
    });
    class Y extends a.Component {
        pop() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this.setState({
                play: e
            }, this.popAnimation)
        }
        getAnimatedStyle() {
            let {
                opacity: e,
                scale: t
            } = this.state;
            return _.default.accelerate({
                opacity: e.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, .8]
                }),
                transform: [{
                    scale: t.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 2]
                    })
                }]
            })
        }
        render() {
            let {
                play: e
            } = this.state, t = e ? g.default : C.default;
            return (0, s.jsx)(_.default.div, {
                className: P.playPausePop,
                style: this.getAnimatedStyle(),
                children: (0, s.jsx)(t, {
                    className: P.playPausePopIcon
                })
            })
        }
        constructor(...e) {
            super(...e), b(this, "state", {
                play: !1,
                scale: new _.default.Value(0),
                opacity: new _.default.Value(0)
            }), b(this, "popAnimation", () => {
                let {
                    opacity: e,
                    scale: t
                } = this.state;
                t.setValue(0), e.setValue(0), _.default.parallel([_.default.sequence([_.default.timing(e, {
                    toValue: 1,
                    duration: 200
                }), _.default.timing(e, {
                    toValue: 0,
                    duration: 200
                })]), _.default.spring(t, {
                    toValue: 1.5,
                    ...w,
                    friction: 80
                })]).start()
            })
        }
    }
    let j = (0, E.createExperiment)({
        kind: "user",
        id: "2024-03_media_play_metrics",
        label: "Media play metrics User Experiment",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Send metrics",
            config: {
                enabled: !0
            }
        }]
    });
    class W {
        moveToState(e) {
            this.stateTime = performance.now(), this.currentState = e
        }
        timeInState() {
            return performance.now() - this.stateTime
        }
        assertUnreachable(e) {
            throw Error("uhoh")
        }
        sendEvent() {
            this.analyticsEnabled && f.default.track(M.AnalyticEvents.MEDIA_PLAY_FINISHED, {
                play_time_sec: this.playTimeSec,
                play_wall_time_ms: this.playWallTimeMs,
                first_play_waiting_ms: this.firstPlayWaitingMs,
                stall_count: this.stallCount,
                stall_ms: this.stallMs,
                seek_count: this.seekCount,
                seek_waiting_ms: this.seekWaitingMs,
                media_source: this.metadata.src,
                mime_type: this.metadata.mimeType,
                file_size: this.metadata.fileSize,
                file_duration_sec: this.metadata.fileDurationSec,
                connection_type: T.default.getType(),
                effective_connection_speed: T.default.getEffectiveConnectionSpeed(),
                service_provider: T.default.getServiceProvider()
            }), this.playTimeSec = 0, this.playWallTimeMs = 0, this.firstPlayWaitingMs = 0, this.stallCount = 0, this.stallMs = 0, this.seekCount = 0, this.seekWaitingMs = 0, this.playbackStartTime = void 0, this.lastPlayingTime = void 0, this.moveToState("not_started")
        }
        updatePlayTime(e) {
            var t, n;
            this.playTimeSec += Math.max((null !== (t = this.lastPlayingTime) && void 0 !== t ? t : e) - (null !== (n = this.playbackStartTime) && void 0 !== n ? n : 0), 0), this.playWallTimeMs += this.timeInState()
        }
        constructor(e) {
            b(this, "metadata", void 0), b(this, "playTimeSec", 0), b(this, "playWallTimeMs", 0), b(this, "firstPlayWaitingMs", 0), b(this, "stallCount", 0), b(this, "stallMs", 0), b(this, "seekCount", 0), b(this, "seekWaitingMs", 0), b(this, "stateTime", performance.now()), b(this, "currentState", "not_started"), b(this, "playbackStartTime", void 0), b(this, "lastPlayingTime", void 0), b(this, "analyticsEnabled", void 0), b(this, "onWaiting", e => {
                switch (this.currentState) {
                    case "not_started":
                        this.moveToState("not_started_waiting");
                        break;
                    case "playing":
                        this.updatePlayTime(e.currentTarget.currentTime), this.stallCount += 1, this.moveToState("stalled");
                        break;
                    case "seeking":
                    case "not_started_waiting":
                    case "stalled":
                        break;
                    case "paused":
                    case "seeked":
                        this.moveToState("stalled");
                        break;
                    default:
                        this.assertUnreachable(this.currentState)
                }
            }), b(this, "onSeeking", e => {
                switch (this.currentState) {
                    case "seeking":
                    case "seeked":
                        this.moveToState("seeking");
                        return;
                    case "stalled":
                        this.stallMs += this.timeInState();
                        break;
                    case "playing":
                        this.updatePlayTime(e.currentTarget.currentTime);
                        break;
                    case "not_started":
                    case "not_started_waiting":
                    case "paused":
                        break;
                    default:
                        this.assertUnreachable(this.currentState)
                }
                this.seekCount += 1, this.moveToState("seeking")
            }), b(this, "onSeeked", e => {
                switch (this.currentState) {
                    case "seeking":
                    case "seeked":
                        let t = this.stateTime;
                        this.moveToState("seeked"), this.stateTime = t;
                        break;
                    case "not_started":
                    case "not_started_waiting":
                    case "stalled":
                    case "playing":
                    case "paused":
                        break;
                    default:
                        this.assertUnreachable(this.currentState)
                }
            }), b(this, "onPause", e => {
                switch (this.currentState) {
                    case "playing":
                        this.updatePlayTime(e.currentTarget.currentTime), this.moveToState("paused"), this.sendEvent();
                        break;
                    case "stalled":
                        this.stallMs += this.timeInState(), this.moveToState("paused"), this.sendEvent();
                        break;
                    case "not_started":
                    case "not_started_waiting":
                    case "paused":
                    case "seeking":
                        break;
                    case "seeked":
                        this.seekWaitingMs += this.timeInState(), this.seekCount += 1;
                        break;
                    default:
                        this.assertUnreachable(this.currentState)
                }
            }), b(this, "onPlaying", e => {
                switch (this.currentState) {
                    case "playing":
                        return;
                    case "not_started":
                        this.firstPlayWaitingMs = 0;
                        break;
                    case "not_started_waiting":
                        this.firstPlayWaitingMs = this.timeInState();
                        break;
                    case "stalled":
                        this.stallMs += this.timeInState();
                        break;
                    case "seeked":
                        this.seekWaitingMs += this.timeInState();
                        break;
                    case "paused":
                    case "seeking":
                        break;
                    default:
                        this.assertUnreachable(this.currentState)
                }
                this.playbackStartTime = e.currentTarget.currentTime, this.moveToState("playing")
            }), b(this, "onTimeUpdate", e => {
                switch (this.currentState) {
                    case "playing":
                        this.lastPlayingTime = e.currentTarget.currentTime;
                        return;
                    case "not_started":
                    case "not_started_waiting":
                    case "stalled":
                    case "seeked":
                    case "paused":
                    case "seeking":
                        break;
                    default:
                        this.assertUnreachable(this.currentState)
                }
            }), b(this, "onDragStart", e => {
                null != e && (this.lastPlayingTime = e)
            }), b(this, "onLoadedMetadata", e => {
                this.metadata.fileDurationSec = e.currentTarget.duration
            }), this.metadata = e, this.analyticsEnabled = j.getCurrentConfig({
                location: "media_player"
            }).enabled
        }
    }
    class K extends(r = a.PureComponent) {
        static getDerivedStateFromProps(e, t) {
            return !e.playable && t.playing ? {
                playing: !1,
                hideControls: !1
            } : null
        }
        componentDidMount() {
            let {
                playing: e,
                muted: t,
                volume: n
            } = this.state, {
                current: i
            } = this.mediaRef;
            null != i && (t && (i.muted = t), e && (this.play(!0), this.handleUIUpdate()), i.volume = n)
        }
        componentDidUpdate(e, t) {
            let {
                props: {
                    onPause: n,
                    onVolumeChange: i,
                    onMute: r
                },
                state: {
                    playing: s,
                    fullscreen: a,
                    muted: o,
                    dragging: l,
                    volume: u
                }
            } = this, {
                current: d
            } = this.mediaRef, {
                current: _
            } = this.playPausePopRef;
            if (null == d) return;
            s && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == _ || _.pop(s))) : !s && t.playing && (d.pause(), null == _ || _.pop(s), null == n || n());
            let c = (0, A.getFullScreenNode)(d.parentNode, d);
            a && !t.fullscreen && null != c ? ((0, A.requestFullScreen)(c), c.addEventListener(A.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit)) : !a && t.fullscreen && null != c && (c.removeEventListener(A.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, A.exitFullScreen)(c)), l === N.default.Types.DURATION && t.dragging !== N.default.Types.DURATION && s ? d.pause() : l !== N.default.Types.DURATION && t.dragging === N.default.Types.DURATION && s && d.play(), o !== t.muted && (d.muted = o, null == r || r(o)), u !== t.volume && (d.volume = u, null == i || i(u))
        }
        componentWillUnmount() {
            this._unmounted = !0;
            let {
                current: e
            } = this.mediaRef;
            if (null == e) return;
            let t = (0, A.getFullScreenNode)(e.parentNode, e);
            null != t && (t.removeEventListener(A.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, A.exitFullScreen)(t))
        }
        play() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                {
                    onPlay: t,
                    volume: n,
                    autoMute: i
                } = this.props,
                {
                    current: r
                } = this.mediaRef;
            if (null != r) {
                let s = {};
                if ("function" == typeof n) {
                    let e = n();
                    e !== this.state.volume && (r.volume = e, s.volume = e)
                }
                if ("function" == typeof i) {
                    let e = i();
                    e !== this.state.muted && (r.muted = e, s.muted = e)
                }
                this.setState(s), r.play(), null == t || t(e, r.currentTime * S.default.Millis.SECOND, r.duration * S.default.Millis.SECOND)
            }
        }
        getWidth() {
            let {
                width: e
            } = this.props;
            return "100%" === e ? e : Math.max(e, K.minWidth)
        }
        getHeight() {
            let {
                height: e
            } = this.props;
            return "100%" === e ? e : Math.max(e, K.minHeight)
        }
        updateValue(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                {
                    current: n
                } = this.controlsRef;
            null != n && n.updateProgress(e, t)
        }
        updateTime(e, t) {
            let n = 0 | e,
                i = 0 | t;
            (this.state.currentTime !== n || this.state.duration !== i) && this.setState({
                currentTime: n,
                duration: i
            })
        }
        updateControlsVisibility() {
            let {
                dragging: e,
                fullscreen: t
            } = this.state, n = Math.max(0, Date.now() - this._lastMove) > (t ? 1e3 : 3e3);
            n !== this.state.hideControls && null == e && this.setState({
                hideControls: n
            })
        }
        renderVideo() {
            let {
                src: e,
                poster: t,
                forceExternal: n,
                onError: i,
                responsive: r,
                mediaLayoutType: a
            } = this.props, {
                playing: o,
                fullscreen: l
            } = this.state, u = this.getWidth(), d = this.getHeight();
            return n ? (0, s.jsx)(v.default, {
                className: P.video,
                controls: !1,
                height: d,
                poster: t,
                width: u,
                responsive: r && !l,
                mediaLayoutType: a,
                playsInline: !0,
                autoPlay: o
            }) : (0, s.jsx)(v.default, {
                className: P.video,
                controls: !1,
                playsInline: !0,
                autoPlay: o,
                height: d,
                responsive: r && !l,
                mediaLayoutType: l ? D.MediaLayoutType.STATIC : a,
                onClick: this.handleVideoClick,
                onEnded: this.handleEnded,
                onError: i,
                onWaiting: this._analytics.onWaiting,
                onSeeking: this._analytics.onSeeking,
                onSeeked: this._analytics.onSeeked,
                onPause: this._analytics.onPause,
                onPlaying: this._analytics.onPlaying,
                onTimeUpdate: this._analytics.onTimeUpdate,
                onLoadedMetadata: this.handleLoaded,
                onProgress: this.handleBuffer,
                poster: t,
                preload: this.state.preload,
                ref: this.mediaRef,
                width: u,
                src: e
            })
        }
        renderAudio() {
            return (0, s.jsx)("audio", {
                className: P.audio,
                controls: !1,
                onClick: this.handleVideoClick,
                onEnded: this.handleEnded,
                onLoadedMetadata: this.handleLoaded,
                onProgress: this.handleBuffer,
                preload: this.state.preload,
                ref: this.mediaRef,
                children: (0, s.jsx)("source", {
                    src: this.props.src
                })
            })
        }
        renderControls() {
            let {
                current: e
            } = this.mediaRef, {
                props: {
                    type: t,
                    autoPlay: n,
                    playable: i = !0,
                    onVolumeShow: r,
                    onVolumeHide: a,
                    onControlsHide: o,
                    onControlsShow: l
                },
                state: {
                    buffers: u,
                    currentTime: d,
                    duration: _,
                    hasClickedPlay: c,
                    hideControls: E,
                    muted: T,
                    playing: f,
                    fullscreen: S,
                    volume: m,
                    dragging: N
                }
            } = this, O = this.getWidth();
            return c || n || t === B.AUDIO ? (0, s.jsx)(F, {
                buffers: u,
                currentTime: d,
                duration: _,
                volume: (0, h.amplitudeToPerceptual)(m, 1),
                hide: t === B.VIDEO && E,
                muted: T,
                autoPlay: n,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                onDragStart: this.handleDragStart,
                onPause: () => this.setPlay(!1),
                onPlay: () => this.setPlay(!0),
                onToggleMuted: this.toggleMuted,
                onVolumeShow: r,
                onVolumeHide: a,
                onControlsShow: l,
                onControlsHide: o,
                playing: f,
                dragging: N,
                type: t,
                ref: this.controlsRef,
                width: S ? window.screen.width : O,
                disabled: !i,
                children: t === B.VIDEO ? (0, s.jsx)(I.default, {
                    "aria-label": y.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                    className: P.videoButton,
                    guestWindow: window,
                    onClick: this.toggleFullscreen,
                    node: (0, A.getFullScreenNode)(null == e ? void 0 : e.parentNode, e)
                }) : null
            }) : (0, s.jsx)(p.default, {
                onPlay: this.handleVideoClick,
                inactive: !i
            })
        }
        renderMetadata() {
            let {
                fileName: e,
                fileSize: t,
                src: n,
                type: i,
                playable: r,
                mimeType: a
            } = this.props;
            return null == e || null == t ? null : i === B.AUDIO ? (0, s.jsx)(H, {
                fileName: e,
                fileSize: t,
                src: n,
                disabled: !r,
                mimeType: a,
                hideDownloadButton: !0
            }) : null
        }
        renderPlayPausePop() {
            return (0, s.jsx)(Y, {
                ref: this.playPausePopRef
            })
        }
        getMediaStyle() {
            let {
                responsive: e,
                type: t,
                height: n
            } = this.props, {
                fullscreen: i
            } = this.state, r = this.getWidth();
            return i ? k : t === B.AUDIO ? {
                width: void 0,
                height: "auto"
            } : e ? void 0 : {
                width: r,
                height: n
            }
        }
        render() {
            let {
                height: e,
                type: t,
                src: n,
                forceExternal: i,
                className: r,
                renderLinkComponent: a,
                responsive: o,
                mediaLayoutType: u,
                renderOverlayContent: d
            } = this.props, {
                fullscreen: _,
                hideControls: c,
                playing: E
            } = this.state, I = P.wrapperPaused;
            if (t === B.AUDIO ? I = P.wrapperAudio : c ? I = P.wrapperControlsHidden : E && (I = P.wrapperPlaying), i && t === B.VIDEO) {
                let t = this.getWidth();
                return (0, s.jsxs)("div", {
                    className: l()(I, {
                        [P.wrapperMediaMosaic]: u === D.MediaLayoutType.MOSAIC
                    }),
                    style: o ? void 0 : {
                        width: t,
                        height: e
                    },
                    children: [this.renderMetadata(), this.renderVideo(), (0, s.jsx)("div", {
                        className: P.playCenter,
                        children: (0, s.jsx)(O.default, {
                            className: P.__invalid_playButton,
                            externalURL: n,
                            renderLinkComponent: a
                        })
                    })]
                })
            }
            return (0, s.jsxs)("div", {
                className: l()(I, P.newMosaicStyle, r, {
                    [P.wrapperMediaMosaic]: u === D.MediaLayoutType.MOSAIC
                }),
                "data-fullscreen": _,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                onMouseMove: E ? this.handleMouseMove : void 0,
                onKeyDown: this.handleKeyDown,
                style: this.getMediaStyle(),
                children: [this.renderMetadata(), t === B.AUDIO ? this.renderAudio() : this.renderVideo(), this.renderControls(), t === B.VIDEO ? this.renderPlayPausePop() : null, null != d ? (0, s.jsx)("div", {
                    className: l()({
                        [P.overlayContentHidden]: E || _
                    }),
                    children: d()
                }) : null]
            })
        }
        constructor(e) {
            var t, n;
            super(e), t = this, b(this, "_unmounted", !1), b(this, "_lastMove", 0), b(this, "_analytics", void 0), b(this, "mediaRef", a.createRef()), b(this, "controlsRef", a.createRef()), b(this, "playPausePopRef", a.createRef()), b(this, "handleFullScreenExit", () => {
                let {
                    current: e
                } = this.mediaRef;
                if (null == e) return;
                let t = (0, A.getFullScreenNode)(e.parentNode, e);
                (null == t || !(0, A.isFullScreen)(t)) && this.setState({
                    fullscreen: !1
                })
            }), b(this, "toggleFullscreen", () => {
                let e = !this.state.fullscreen;
                this.setState({
                    fullscreen: e
                })
            }), b(this, "setMuted", e => {
                this.setState({
                    muted: e
                })
            }), b(this, "toggleMuted", () => {
                this.setMuted(!this.state.muted)
            }), b(this, "setTime", function(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        current: i
                    } = t.mediaRef;
                null != i && isFinite(i.duration) && isFinite(i.currentTime) && (i.currentTime = e, t.updateValue(e / i.duration, n), t.updateTime(e, i.duration))
            }), b(this, "handleUIUpdate", () => {
                if (!this.state.playing || this._unmounted) return;
                let {
                    current: e
                } = this.mediaRef;
                null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate))
            }), b(this, "handleDrag", (e, t) => {
                let {
                    current: n
                } = this.mediaRef;
                if (t === N.default.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === N.default.Types.VOLUME) {
                    let t = (0, h.perceptualToAmplitude)(e, 1);
                    0 === t ? this.setState({
                        muted: !0,
                        volume: t
                    }) : this.state.muted && t > 0 ? this.setState({
                        muted: !1,
                        volume: t
                    }) : this.setState({
                        volume: t
                    })
                }
            }), b(this, "handleLoaded", e => {
                this._analytics.onLoadedMetadata(e);
                let {
                    current: t
                } = this.mediaRef;
                null != t && (this.updateTime(t.currentTime, t.duration), this.setState({
                    hasLoadedMetadata: !0,
                    currentTime: t.currentTime,
                    duration: t.duration
                }))
            }), b(this, "handleDurationChange", () => {
                let {
                    current: e
                } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
                    duration: e.duration
                }))
            }), b(this, "handleBuffer", d().debounce(() => {
                let {
                    current: e
                } = this.mediaRef;
                if (null == e) {
                    this.setState({
                        buffers: []
                    });
                    return
                }
                this.setState({
                    buffers: function(e) {
                        let t = [],
                            {
                                duration: n
                            } = e;
                        for (let i = 0; i < e.buffered.length; i++) {
                            let r = e.buffered.start(i),
                                s = e.buffered.end(i);
                            if (s - r < 1) continue;
                            let a = (s - r) / n,
                                o = r / n;
                            t.push([o, a])
                        }
                        return t
                    }(e)
                })
            }, 400)), b(this, "handleEnded", e => {
                let {
                    onEnded: t
                } = this.props;
                this.setState({
                    playing: !1,
                    hideControls: !1
                }), null != t && t(e)
            }), b(this, "handleMouseMove", () => {
                this._lastMove = Date.now()
            }), b(this, "handleMouseLeave", () => {
                this.state.playing && (this._lastMove = 0), this.setState({
                    hovering: !1
                })
            }), b(this, "handleMouseEnter", () => {
                "none" === this.state.preload && this.setState({
                    preload: "metadata"
                }), this.setState({
                    hovering: !0
                })
            }), b(this, "handleVideoClick", e => {
                let {
                    state: {
                        hasClickedPlay: t,
                        playing: n
                    },
                    props: {
                        onClick: i,
                        autoPlay: r,
                        autoMute: s
                    }
                } = this;
                if (null != i) {
                    i(e);
                    return
                }
                e.stopPropagation(), r && !t && n && s ? this.setState({
                    muted: !1,
                    hasClickedPlay: !0
                }) : this.setPlay(!this.state.playing)
            }), b(this, "setPlay", e => {
                let {
                    props: {
                        autoMute: t
                    },
                    state: {
                        hasClickedPlay: n,
                        muted: i
                    }
                } = this;
                e !== this.state.playing && (e ? this.setState({
                    playing: e,
                    hasClickedPlay: !0,
                    muted: (!!n || !t) && i
                }) : this.setState({
                    playing: !1,
                    hideControls: !1
                }))
            }), b(this, "handleDragStart", e => {
                var t, n;
                this.setState({
                    dragging: e
                }), this._analytics.onDragStart(null !== (n = null === (t = this.mediaRef.current) || void 0 === t ? void 0 : t.currentTime) && void 0 !== n ? n : null)
            }), b(this, "handleDragEnd", () => {
                this.setState({
                    dragging: null
                }), this._lastMove = Date.now()
            }), b(this, "handleKeyDown", e => {
                let {
                    current: t
                } = this.mediaRef;
                if (e.which === M.KeyboardKeys.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which >= M.KeyboardKeys.DIGIT_0 && e.which <= M.KeyboardKeys.DIGIT_9 && null != t) {
                    e.preventDefault();
                    let n = (e.which - M.KeyboardKeys.DIGIT_0) / 10;
                    t.currentTime = t.duration * n, this.setPlay(!0)
                }
            }), this._analytics = new W({
                src: e.src,
                mimeType: null === (n = e.mimeType) || void 0 === n ? void 0 : n.join("/"),
                fileSize: e.fileSizeBytes
            });
            let {
                autoPlay: i,
                autoMute: r,
                volume: s,
                playable: o
            } = this.props, l = "function" == typeof s ? s() : s, u = "function" == typeof r ? r() : r;
            this.state = {
                buffers: [],
                currentTime: null,
                dragging: null,
                duration: null,
                fullscreen: !1,
                hasClickedPlay: !1,
                hasLoadedMetadata: !1,
                hideControls: !o,
                muted: u,
                volume: l,
                playing: i,
                preload: "none",
                width: K.minWidth,
                height: K.minHeight,
                hovering: !1
            }
        }
    }
    b(K, "Types", B), b(K, "defaultProps", {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }), b(K, "minWidth", 150), b(K, "minHeight", 110), t.default = K
}