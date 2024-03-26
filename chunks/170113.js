function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertSecondsToClockFormat: function() {
            return U
        },
        default: function() {
            return K
        }
    }), n("424973"), n("222007"), n("70102");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("458960"),
        d = n("77078"),
        c = n("862205"),
        f = n("95032"),
        p = n("985365"),
        m = n("599110"),
        h = n("718517"),
        x = n("829536"),
        E = n("563680"),
        y = n("725962"),
        g = n("672724"),
        S = n("392284"),
        C = n("468482"),
        _ = n("316680"),
        T = n("830837"),
        I = n("132755"),
        v = n("73034"),
        N = n("58608"),
        A = n("719347"),
        R = n("49111"),
        O = n("782340"),
        M = n("273818"),
        k = n("125047");
    let L = "-:--",
        P = {
            friction: 14,
            tension: 200
        },
        b = {
            VIDEO: "VIDEO",
            AUDIO: "AUDIO"
        },
        j = {
            width: "100%",
            height: "100%",
            backgroundColor: "black"
        };

    function U(e) {
        let t = 0 | e,
            n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
    }
    let D = e => {
        let {
            current: t,
            duration: n
        } = e, l = null != t ? U(t) : L, a = null != n ? U(n) : L;
        return l = l.padStart(a.length, "0"), (0, i.jsxs)("div", {
            className: M.durationTimeWrapper,
            children: [(0, i.jsx)("span", {
                className: M.durationTimeDisplay,
                children: l
            }), (0, i.jsx)("span", {
                className: M.durationTimeSeparator,
                children: "/"
            }), (0, i.jsx)("span", {
                className: M.durationTimeDisplay,
                children: a
            })]
        })
    };
    class w extends l.Component {
        componentDidMount() {
            this.state.translateY.setValue(this.props.autoPlay ? 1 : 0)
        }
        componentDidUpdate(e) {
            let {
                hide: t,
                playing: n
            } = this.props;
            if (t && !e.hide) {
                var i;
                this.animateControls(1, n), null === (i = this.volumeButton) || void 0 === i || i.blur()
            } else !t && e.hide && this.animateControls(0, n)
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
            t ? u.default.spring(n, {
                toValue: e,
                ...P
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
                onPause: l,
                onPlay: a,
                disabled: s
            } = this.props;
            return e ? (0, i.jsx)(d.Clickable, {
                className: M.videoButton,
                onClick: l,
                tabIndex: s ? -1 : 0,
                "aria-label": O.default.Messages.PAUSE,
                children: (0, i.jsx)(T.default, {
                    className: M.controlIcon
                }, "pause")
            }) : null != t && t === n ? (0, i.jsx)(d.Clickable, {
                className: M.videoButton,
                onClick: a,
                tabIndex: s ? -1 : 0,
                "aria-label": O.default.Messages.PLAY_AGAIN,
                children: (0, i.jsx)(v.default, {
                    className: M.controlIcon
                }, "replay")
            }) : (0, i.jsx)(d.Clickable, {
                className: M.videoButton,
                onClick: a,
                tabIndex: s ? -1 : 0,
                "aria-label": O.default.Messages.PLAY,
                children: (0, i.jsx)(I.default, {
                    className: M.controlIcon
                }, "play")
            })
        }
        render() {
            let {
                buffers: e,
                children: t,
                currentTime: n,
                duration: l,
                muted: a,
                onDrag: s,
                onDragEnd: r,
                onDragStart: o,
                onToggleMuted: d,
                onVolumeShow: c,
                onVolumeHide: f,
                width: p,
                volume: m,
                type: h
            } = this.props;
            return (0, i.jsxs)(u.default.div, {
                className: h === b.VIDEO ? M.videoControls : M.audioControls,
                onClick: e => e.stopPropagation(),
                onDoubleClick: e => e.stopPropagation(),
                style: this.getAnimatedStyle(),
                children: [this.renderPlayIcon(), "string" == typeof p || p > 250 ? (0, i.jsx)(D, {
                    current: n,
                    duration: l
                }) : null, (0, i.jsx)(g.default, {
                    buffers: e,
                    value: null != l ? l : 0,
                    onDrag: s,
                    onDragEnd: r,
                    onDragStart: o,
                    type: g.default.Types.DURATION,
                    ref: this.setDurationRef
                }), (0, i.jsx)("div", {
                    className: k.flex,
                    children: (0, i.jsx)(_.default, {
                        ref: this.setVolumeButtonRef,
                        muted: a,
                        value: m,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: e => s(e, g.default.Types.VOLUME),
                        onToggleMute: d,
                        onVolumeShow: c,
                        onVolumeHide: f,
                        iconClassName: M.controlIcon,
                        sliderWrapperClassName: M.volumeSliderWrapper
                    })
                }), t]
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                translateY: new u.default.Value(0)
            }, this.setDurationRef = e => {
                this.durationBar = e
            }, this.setVolumeButtonRef = e => {
                this.volumeButton = e
            }
        }
    }

    function F(e) {
        let {
            fileName: t,
            fileSize: n,
            src: l,
            disabled: a,
            mimeType: s,
            hideDownloadButton: r
        } = e;
        return (0, i.jsxs)("div", {
            className: M.audioMetadata,
            children: [(0, i.jsxs)("div", {
                className: M.metadataContent,
                children: [a ? t : (0, i.jsx)(y.default, {
                    href: l,
                    className: M.metadataDownload,
                    iconClassName: M.metadataIcon,
                    mimeType: s,
                    fileName: t
                }), (0, i.jsx)("div", {
                    className: M.metadataSize,
                    children: n
                })]
            }), !r && (0, i.jsx)(y.default, {
                href: l,
                className: M.metadataDownload,
                iconClassName: M.metadataIcon,
                mimeType: s
            })]
        })
    }
    w.defaultProps = {
        disabled: !1
    };
    class G extends l.Component {
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
            return u.default.accelerate({
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
            } = this.state, t = e ? I.default : T.default;
            return (0, i.jsx)(u.default.div, {
                className: M.playPausePop,
                style: this.getAnimatedStyle(),
                children: (0, i.jsx)(t, {
                    className: M.playPausePopIcon
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                play: !1,
                scale: new u.default.Value(0),
                opacity: new u.default.Value(0)
            }, this.popAnimation = () => {
                let {
                    opacity: e,
                    scale: t
                } = this.state;
                t.setValue(0), e.setValue(0), u.default.parallel([u.default.sequence([u.default.timing(e, {
                    toValue: 1,
                    duration: 200
                }), u.default.timing(e, {
                    toValue: 0,
                    duration: 200
                })]), u.default.spring(t, {
                    toValue: 1.5,
                    ...P,
                    friction: 80
                })]).start()
            }
        }
    }
    let H = (0, c.createExperiment)({
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
    class B {
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
            this.analyticsEnabled && m.default.track(R.AnalyticEvents.MEDIA_PLAY_FINISHED, {
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
                connection_type: p.default.getType(),
                effective_connection_speed: p.default.getEffectiveConnectionSpeed(),
                service_provider: p.default.getServiceProvider()
            }), this.playTimeSec = 0, this.playWallTimeMs = 0, this.firstPlayWaitingMs = 0, this.stallCount = 0, this.stallMs = 0, this.seekCount = 0, this.seekWaitingMs = 0, this.playbackStartTime = void 0, this.lastPlayingTime = void 0, this.moveToState("not_started")
        }
        updatePlayTime(e) {
            var t, n;
            this.playTimeSec += Math.max((null !== (t = this.lastPlayingTime) && void 0 !== t ? t : e) - (null !== (n = this.playbackStartTime) && void 0 !== n ? n : 0), 0), this.playWallTimeMs += this.timeInState()
        }
        constructor(e) {
            this.playTimeSec = 0, this.playWallTimeMs = 0, this.firstPlayWaitingMs = 0, this.stallCount = 0, this.stallMs = 0, this.seekCount = 0, this.seekWaitingMs = 0, this.stateTime = performance.now(), this.currentState = "not_started", this.onWaiting = e => {
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
            }, this.onSeeking = e => {
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
            }, this.onSeeked = e => {
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
            }, this.onPause = e => {
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
            }, this.onPlaying = e => {
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
            }, this.onTimeUpdate = e => {
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
            }, this.onDragStart = e => {
                null != e && (this.lastPlayingTime = e)
            }, this.onLoadedMetadata = e => {
                this.metadata.fileDurationSec = e.currentTarget.duration
            }, this.metadata = e, this.analyticsEnabled = H.getCurrentConfig({
                location: "media_player"
            }).enabled
        }
    }
    class V extends l.PureComponent {
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
                    onMute: l
                },
                state: {
                    playing: a,
                    fullscreen: s,
                    muted: r,
                    dragging: o,
                    volume: u
                }
            } = this, {
                current: d
            } = this.mediaRef, {
                current: c
            } = this.playPausePopRef;
            if (null == d) return;
            a && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == c || c.pop(a))) : !a && t.playing && (d.pause(), null == c || c.pop(a), null == n || n());
            let f = (0, E.getFullScreenNode)(d.parentNode, d);
            s && !t.fullscreen && null != f ? ((0, E.requestFullScreen)(f), f.addEventListener(E.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit)) : !s && t.fullscreen && null != f && (f.removeEventListener(E.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, E.exitFullScreen)(f)), o === g.default.Types.DURATION && t.dragging !== g.default.Types.DURATION && a ? d.pause() : o !== g.default.Types.DURATION && t.dragging === g.default.Types.DURATION && a && d.play(), r !== t.muted && (d.muted = r, null == l || l(r)), u !== t.volume && (d.volume = u, null == i || i(u))
        }
        componentWillUnmount() {
            this._unmounted = !0;
            let {
                current: e
            } = this.mediaRef;
            if (null == e) return;
            let t = (0, E.getFullScreenNode)(e.parentNode, e);
            null != t && (t.removeEventListener(E.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, E.exitFullScreen)(t))
        }
        play() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                {
                    onPlay: t,
                    volume: n,
                    autoMute: i
                } = this.props,
                {
                    current: l
                } = this.mediaRef;
            if (null != l) {
                let a = {};
                if ("function" == typeof n) {
                    let e = n();
                    e !== this.state.volume && (l.volume = e, a.volume = e)
                }
                if ("function" == typeof i) {
                    let e = i();
                    e !== this.state.muted && (l.muted = e, a.muted = e)
                }
                this.setState(a), l.play(), null == t || t(e, l.currentTime * h.default.Millis.SECOND, l.duration * h.default.Millis.SECOND)
            }
        }
        getWidth() {
            let {
                width: e
            } = this.props;
            return "100%" === e ? e : Math.max(e, V.minWidth)
        }
        getHeight() {
            let {
                height: e
            } = this.props;
            return "100%" === e ? e : Math.max(e, V.minHeight)
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
                onError: l,
                responsive: a,
                mediaLayoutType: s
            } = this.props, {
                playing: r,
                fullscreen: o
            } = this.state, u = this.getWidth(), d = this.getHeight();
            return n ? (0, i.jsx)(N.default, {
                className: M.video,
                controls: !1,
                height: d,
                poster: t,
                width: u,
                responsive: a && !o,
                mediaLayoutType: s,
                playsInline: !0,
                autoPlay: r
            }) : (0, i.jsx)(N.default, {
                className: M.video,
                controls: !1,
                playsInline: !0,
                autoPlay: r,
                height: d,
                responsive: a && !o,
                mediaLayoutType: o ? A.MediaLayoutType.STATIC : s,
                onClick: this.handleVideoClick,
                onEnded: this.handleEnded,
                onError: l,
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
            return (0, i.jsx)("audio", {
                className: M.audio,
                controls: !1,
                onClick: this.handleVideoClick,
                onEnded: this.handleEnded,
                onLoadedMetadata: this.handleLoaded,
                onProgress: this.handleBuffer,
                preload: this.state.preload,
                ref: this.mediaRef,
                children: (0, i.jsx)("source", {
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
                    playable: l = !0,
                    onVolumeShow: a,
                    onVolumeHide: s
                },
                state: {
                    buffers: r,
                    currentTime: o,
                    duration: u,
                    hasClickedPlay: d,
                    hideControls: c,
                    muted: p,
                    playing: m,
                    fullscreen: h,
                    volume: y,
                    dragging: g
                }
            } = this, C = this.getWidth();
            return d || n || t === b.AUDIO ? (0, i.jsx)(w, {
                buffers: r,
                currentTime: o,
                duration: u,
                volume: (0, x.amplitudeToPerceptual)(y, 1),
                hide: t === b.VIDEO && c,
                muted: p,
                autoPlay: n,
                onDrag: this.handleDrag,
                onDragEnd: this.handleDragEnd,
                onDragStart: this.handleDragStart,
                onPause: () => this.setPlay(!1),
                onPlay: () => this.setPlay(!0),
                onToggleMuted: this.toggleMuted,
                onVolumeShow: a,
                onVolumeHide: s,
                playing: m,
                dragging: g,
                type: t,
                ref: this.controlsRef,
                width: h ? window.screen.width : C,
                disabled: !l,
                children: t === b.VIDEO ? (0, i.jsx)(f.default, {
                    "aria-label": O.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                    className: M.videoButton,
                    guestWindow: window,
                    onClick: this.toggleFullscreen,
                    node: (0, E.getFullScreenNode)(null == e ? void 0 : e.parentNode, e)
                }) : null
            }) : (0, i.jsx)(S.default, {
                onPlay: this.handleVideoClick,
                inactive: !l
            })
        }
        renderMetadata() {
            let {
                fileName: e,
                fileSize: t,
                src: n,
                type: l,
                playable: a,
                mimeType: s
            } = this.props;
            return null == e || null == t ? null : l === b.AUDIO ? (0, i.jsx)(F, {
                fileName: e,
                fileSize: t,
                src: n,
                disabled: !a,
                mimeType: s,
                hideDownloadButton: !0
            }) : null
        }
        renderPlayPausePop() {
            return (0, i.jsx)(G, {
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
            } = this.state, l = this.getWidth();
            return i ? j : t === b.AUDIO ? {
                width: void 0,
                height: "auto"
            } : e ? void 0 : {
                width: l,
                height: n
            }
        }
        render() {
            let {
                height: e,
                type: t,
                src: n,
                forceExternal: l,
                className: a,
                renderLinkComponent: r,
                responsive: o,
                mediaLayoutType: u,
                renderOverlayContent: d
            } = this.props, {
                fullscreen: c,
                hideControls: f,
                playing: p
            } = this.state, m = M.wrapperPaused;
            if (t === b.AUDIO ? m = M.wrapperAudio : f ? m = M.wrapperControlsHidden : p && (m = M.wrapperPlaying), l && t === b.VIDEO) {
                let t = this.getWidth();
                return (0, i.jsxs)("div", {
                    className: s(m, {
                        [M.wrapperMediaMosaic]: u === A.MediaLayoutType.MOSAIC
                    }),
                    style: o ? void 0 : {
                        width: t,
                        height: e
                    },
                    children: [this.renderMetadata(), this.renderVideo(), (0, i.jsx)("div", {
                        className: M.playCenter,
                        children: (0, i.jsx)(C.default, {
                            className: M.playButton,
                            externalURL: n,
                            renderLinkComponent: r
                        })
                    })]
                })
            }
            return (0, i.jsxs)("div", {
                className: s(m, M.newMosaicStyle, a, {
                    [M.wrapperMediaMosaic]: u === A.MediaLayoutType.MOSAIC
                }),
                "data-fullscreen": c,
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                onMouseMove: p ? this.handleMouseMove : void 0,
                onKeyDown: this.handleKeyDown,
                style: this.getMediaStyle(),
                children: [this.renderMetadata(), t === b.AUDIO ? this.renderAudio() : this.renderVideo(), this.renderControls(), t === b.VIDEO ? this.renderPlayPausePop() : null, null != d ? (0, i.jsx)("div", {
                    className: s({
                        [M.overlayContentHidden]: p || c
                    }),
                    children: d()
                }) : null]
            })
        }
        constructor(e) {
            var t, n;
            super(e), t = this, this._unmounted = !1, this._lastMove = 0, this.mediaRef = l.createRef(), this.controlsRef = l.createRef(), this.playPausePopRef = l.createRef(), this.handleFullScreenExit = () => {
                let {
                    current: e
                } = this.mediaRef;
                if (null == e) return;
                let t = (0, E.getFullScreenNode)(e.parentNode, e);
                (null == t || !(0, E.isFullScreen)(t)) && this.setState({
                    fullscreen: !1
                })
            }, this.toggleFullscreen = () => {
                let e = !this.state.fullscreen;
                this.setState({
                    fullscreen: e
                })
            }, this.setMuted = e => {
                this.setState({
                    muted: e
                })
            }, this.toggleMuted = () => {
                this.setMuted(!this.state.muted)
            }, this.setTime = function(e) {
                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        current: i
                    } = t.mediaRef;
                null != i && isFinite(i.duration) && isFinite(i.currentTime) && (i.currentTime = e, t.updateValue(e / i.duration, n), t.updateTime(e, i.duration))
            }, this.handleUIUpdate = () => {
                if (!this.state.playing || this._unmounted) return;
                let {
                    current: e
                } = this.mediaRef;
                null != e && (e.duration > 0 && this.updateValue(e.currentTime / e.duration), this.updateTime(e.currentTime, e.duration), this.updateControlsVisibility(), requestAnimationFrame(this.handleUIUpdate))
            }, this.handleDrag = (e, t) => {
                let {
                    current: n
                } = this.mediaRef;
                if (t === g.default.Types.DURATION) null != n && isFinite(n.duration) && this.setTime(n.duration * e, !1);
                else if (t === g.default.Types.VOLUME) {
                    let t = (0, x.perceptualToAmplitude)(e, 1);
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
            }, this.handleLoaded = e => {
                this._analytics.onLoadedMetadata(e);
                let {
                    current: t
                } = this.mediaRef;
                null != t && (this.updateTime(t.currentTime, t.duration), this.setState({
                    hasLoadedMetadata: !0,
                    currentTime: t.currentTime,
                    duration: t.duration
                }))
            }, this.handleDurationChange = () => {
                let {
                    current: e
                } = this.mediaRef;
                null != e && (this.updateTime(e.currentTime, e.duration), this.setState({
                    duration: e.duration
                }))
            }, this.handleBuffer = o.debounce(() => {
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
                            let l = e.buffered.start(i),
                                a = e.buffered.end(i);
                            if (a - l < 1) continue;
                            let s = (a - l) / n,
                                r = l / n;
                            t.push([r, s])
                        }
                        return t
                    }(e)
                })
            }, 400), this.handleEnded = e => {
                let {
                    onEnded: t
                } = this.props;
                this.setState({
                    playing: !1,
                    hideControls: !1
                }), null != t && t(e)
            }, this.handleMouseMove = () => {
                this._lastMove = Date.now()
            }, this.handleMouseLeave = () => {
                this.state.playing && (this._lastMove = 0), this.setState({
                    hovering: !1
                })
            }, this.handleMouseEnter = () => {
                "none" === this.state.preload && this.setState({
                    preload: "metadata"
                }), this.setState({
                    hovering: !0
                })
            }, this.handleVideoClick = e => {
                let {
                    state: {
                        hasClickedPlay: t,
                        playing: n
                    },
                    props: {
                        onClick: i,
                        autoPlay: l,
                        autoMute: a
                    }
                } = this;
                if (null != i) {
                    i(e);
                    return
                }
                e.stopPropagation(), l && !t && n && a ? this.setState({
                    muted: !1,
                    hasClickedPlay: !0
                }) : this.setPlay(!this.state.playing)
            }, this.setPlay = e => {
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
            }, this.handleDragStart = e => {
                var t, n;
                this.setState({
                    dragging: e
                }), this._analytics.onDragStart(null !== (n = null === (t = this.mediaRef.current) || void 0 === t ? void 0 : t.currentTime) && void 0 !== n ? n : null)
            }, this.handleDragEnd = () => {
                this.setState({
                    dragging: null
                }), this._lastMove = Date.now()
            }, this.handleKeyDown = e => {
                let {
                    current: t
                } = this.mediaRef;
                if (e.which === R.KeyboardKeys.SPACE) e.preventDefault(), this.setPlay(!this.state.playing);
                else if (e.which >= R.KeyboardKeys.DIGIT_0 && e.which <= R.KeyboardKeys.DIGIT_9 && null != t) {
                    e.preventDefault();
                    let n = (e.which - R.KeyboardKeys.DIGIT_0) / 10;
                    t.currentTime = t.duration * n, this.setPlay(!0)
                }
            }, this._analytics = new B({
                src: e.src,
                mimeType: null === (n = e.mimeType) || void 0 === n ? void 0 : n.join("/"),
                fileSize: e.fileSizeBytes
            });
            let {
                autoPlay: i,
                autoMute: a,
                volume: s,
                playable: r
            } = this.props, u = "function" == typeof s ? s() : s, d = "function" == typeof a ? a() : a;
            this.state = {
                buffers: [],
                currentTime: null,
                dragging: null,
                duration: null,
                fullscreen: !1,
                hasClickedPlay: !1,
                hasLoadedMetadata: !1,
                hideControls: !r,
                muted: d,
                volume: u,
                playing: i,
                preload: "none",
                width: V.minWidth,
                height: V.minHeight,
                hovering: !1
            }
        }
    }
    V.Types = b, V.defaultProps = {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }, V.minWidth = 150, V.minHeight = 110;
    var K = V
}