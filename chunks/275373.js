function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        convertSecondsToClockFormat: function() {
            return z
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("392711"),
        l = n.n(s),
        c = n("664183"),
        f = n("784184"),
        d = n("94498"),
        _ = n("692053"),
        E = n("649310"),
        p = n("870331"),
        m = n("388990"),
        y = n("605855"),
        I = n("172637"),
        h = n("102742"),
        O = n("969603"),
        T = n("505956"),
        S = n("433393"),
        v = n("994087"),
        g = n("639649"),
        A = n("328545"),
        b = n("415381"),
        N = n("81091"),
        R = n("766063"),
        C = n("281767"),
        P = n("941504"),
        D = n("900445"),
        L = n("605094");

    function M(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function U(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function w(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function k(e, t, n) {
        return t && w(e.prototype, t), n && w(e, n), e
    }

    function G(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function B(e) {
        return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function j(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && V(e, t)
    }

    function F(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                G(e, t, n[t])
            })
        }
        return e
    }

    function V(e, t) {
        return (V = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function H(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r, o, i = B(e);
            if (t) {
                var a = B(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return n = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : M(n)
        }
    }
    var x = "-:--",
        Y = {
            friction: 14,
            tension: 200
        },
        W = {
            VIDEO: "VIDEO",
            AUDIO: "AUDIO"
        },
        K = {
            width: "100%",
            height: "100%",
            backgroundColor: "black"
        };

    function z(e) {
        var t = 0 | e,
            n = t % 60;
        return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
    }
    var X = function(e) {
            var t = e.current,
                n = e.duration,
                r = null != t ? z(t) : x,
                o = null != n ? z(n) : x;
            return r = r.padStart(o.length, "0"), i.createElement("div", {
                className: D.durationTimeWrapper
            }, i.createElement("span", {
                className: D.durationTimeDisplay
            }, r), i.createElement("span", {
                className: D.durationTimeSeparator
            }, "/"), i.createElement("span", {
                className: D.durationTimeDisplay
            }, o))
        },
        q = function(e) {
            j(n, e);
            var t = H(n);

            function n() {
                var e;
                return U(this, n), e = t.apply(this, arguments), G(M(e), "state", {
                    translateY: new c.default.Value(0)
                }), G(M(e), "volumeButton", void 0), G(M(e), "durationBar", void 0), G(M(e), "setDurationRef", function(t) {
                    e.durationBar = t
                }), G(M(e), "setVolumeButtonRef", function(t) {
                    e.volumeButton = t
                }), e
            }
            return k(n, [{
                key: "componentDidMount",
                value: function() {
                    this.state.translateY.setValue(this.props.autoPlay ? 1 : 0)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t, n = this.props,
                        r = n.hide,
                        o = n.playing;
                    r && !e.hide ? (this.animateControls(1, o), null === (t = this.volumeButton) || void 0 === t || t.blur()) : !r && e.hide && this.animateControls(0, o)
                }
            }, {
                key: "updateProgress",
                value: function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = this.durationBar;
                    null != n && n.setGrabber(e, t)
                }
            }, {
                key: "animateControls",
                value: function(e, t) {
                    var n = this.state.translateY;
                    t ? c.default.spring(n, F({
                        toValue: e
                    }, Y)).start() : n.setValue(e)
                }
            }, {
                key: "getAnimatedStyle",
                value: function() {
                    return {
                        transform: [{
                            translateY: this.state.translateY.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0%", "100%"]
                            })
                        }]
                    }
                }
            }, {
                key: "renderPlayIcon",
                value: function() {
                    var e = this.props,
                        t = e.playing,
                        n = e.currentTime,
                        r = e.duration,
                        o = e.onPause,
                        a = e.onPlay,
                        u = e.disabled;
                    return t ? i.createElement(f.Clickable, {
                        className: D.videoButton,
                        onClick: o,
                        tabIndex: u ? -1 : 0,
                        "aria-label": P.default.Messages.PAUSE
                    }, i.createElement(g.default, {
                        key: "pause",
                        className: D.controlIcon
                    })) : null != n && n === r ? i.createElement(f.Clickable, {
                        className: D.videoButton,
                        onClick: a,
                        tabIndex: u ? -1 : 0,
                        "aria-label": P.default.Messages.PLAY_AGAIN
                    }, i.createElement(b.default, {
                        key: "replay",
                        className: D.controlIcon
                    })) : i.createElement(f.Clickable, {
                        className: D.videoButton,
                        onClick: a,
                        tabIndex: u ? -1 : 0,
                        "aria-label": P.default.Messages.PLAY
                    }, i.createElement(A.default, {
                        key: "play",
                        className: D.controlIcon
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.buffers,
                        n = e.children,
                        r = e.currentTime,
                        o = e.duration,
                        a = e.muted,
                        u = e.onDrag,
                        s = e.onDragEnd,
                        l = e.onDragStart,
                        f = e.onToggleMuted,
                        d = e.onVolumeShow,
                        _ = e.onVolumeHide,
                        E = e.width,
                        p = e.volume,
                        m = e.type;
                    return i.createElement(c.default.div, {
                        className: m === W.VIDEO ? D.videoControls : D.audioControls,
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        onDoubleClick: function(e) {
                            return e.stopPropagation()
                        },
                        style: this.getAnimatedStyle()
                    }, this.renderPlayIcon(), "string" == typeof E || E > 250 ? i.createElement(X, {
                        current: r,
                        duration: o
                    }) : null, i.createElement(O.default, {
                        buffers: t,
                        value: null != o ? o : 0,
                        onDrag: u,
                        onDragEnd: s,
                        onDragStart: l,
                        type: O.default.Types.DURATION,
                        ref: this.setDurationRef
                    }), i.createElement("div", {
                        className: L.flex
                    }, i.createElement(v.default, {
                        ref: this.setVolumeButtonRef,
                        muted: a,
                        value: p,
                        minValue: 0,
                        maxValue: 1,
                        currentWindow: window,
                        onValueChange: function(e) {
                            return u(e, O.default.Types.VOLUME)
                        },
                        onToggleMute: f,
                        onVolumeShow: d,
                        onVolumeHide: _,
                        iconClassName: D.controlIcon,
                        sliderWrapperClassName: D.volumeSliderWrapper
                    })), n)
                }
            }]), n
        }(i.Component);

    function Q(e) {
        var t = e.fileName,
            n = e.fileSize,
            r = e.src,
            o = e.disabled,
            a = e.mimeType,
            u = e.hideDownloadButton;
        return i.createElement("div", {
            className: D.audioMetadata
        }, i.createElement("div", {
            className: D.metadataContent
        }, o ? t : i.createElement(h.default, {
            href: r,
            className: D.metadataDownload,
            iconClassName: D.metadataIcon,
            mimeType: a,
            fileName: t
        }), i.createElement("div", {
            className: D.metadataSize
        }, n)), !u && i.createElement(h.default, {
            href: r,
            className: D.metadataDownload,
            iconClassName: D.metadataIcon,
            mimeType: a
        }))
    }
    G(q, "defaultProps", {
        disabled: !1
    });
    var J = function(e) {
            j(n, e);
            var t = H(n);

            function n() {
                var e;
                return U(this, n), e = t.apply(this, arguments), G(M(e), "state", {
                    play: !1,
                    scale: new c.default.Value(0),
                    opacity: new c.default.Value(0)
                }), G(M(e), "popAnimation", function() {
                    var t, n, r = e.state,
                        o = r.opacity,
                        i = r.scale;
                    i.setValue(0), o.setValue(0), c.default.parallel([c.default.sequence([c.default.timing(o, {
                        toValue: 1,
                        duration: 200
                    }), c.default.timing(o, {
                        toValue: 0,
                        duration: 200
                    })]), c.default.spring(i, (t = F({
                        toValue: 1.5
                    }, Y), n = (n = {
                        friction: 80
                    }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t))]).start()
                }), e
            }
            return k(n, [{
                key: "pop",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.setState({
                        play: e
                    }, this.popAnimation)
                }
            }, {
                key: "getAnimatedStyle",
                value: function() {
                    var e = this.state,
                        t = e.opacity,
                        n = e.scale;
                    return c.default.accelerate({
                        opacity: t.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, .8]
                        }),
                        transform: [{
                            scale: n.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 2]
                            })
                        }]
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.play ? A.default : g.default;
                    return i.createElement(c.default.div, {
                        className: D.playPausePop,
                        style: this.getAnimatedStyle()
                    }, i.createElement(e, {
                        className: D.playPausePopIcon
                    }))
                }
            }]), n
        }(i.Component),
        Z = (0, d.createExperiment)({
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
        }),
        $ = function() {
            function e(t) {
                var n = this;
                U(this, e), G(this, "metadata", void 0), G(this, "playTimeSec", 0), G(this, "playWallTimeMs", 0), G(this, "firstPlayWaitingMs", 0), G(this, "stallCount", 0), G(this, "stallMs", 0), G(this, "seekCount", 0), G(this, "seekWaitingMs", 0), G(this, "stateTime", performance.now()), G(this, "currentState", "not_started"), G(this, "playbackStartTime", void 0), G(this, "lastPlayingTime", void 0), G(this, "analyticsEnabled", void 0), G(this, "onWaiting", function(e) {
                    switch (n.currentState) {
                        case "not_started":
                            n.moveToState("not_started_waiting");
                            break;
                        case "playing":
                            n.updatePlayTime(e.currentTarget.currentTime), n.stallCount += 1, n.moveToState("stalled");
                            break;
                        case "seeking":
                        case "not_started_waiting":
                        case "stalled":
                            break;
                        case "paused":
                        case "seeked":
                            n.moveToState("stalled");
                            break;
                        default:
                            n.assertUnreachable(n.currentState)
                    }
                }), G(this, "onSeeking", function(e) {
                    switch (n.currentState) {
                        case "seeking":
                        case "seeked":
                            n.moveToState("seeking");
                            return;
                        case "stalled":
                            n.stallMs += n.timeInState();
                            break;
                        case "playing":
                            n.updatePlayTime(e.currentTarget.currentTime);
                            break;
                        case "not_started":
                        case "not_started_waiting":
                        case "paused":
                            break;
                        default:
                            n.assertUnreachable(n.currentState)
                    }
                    n.seekCount += 1, n.moveToState("seeking")
                }), G(this, "onSeeked", function(e) {
                    switch (n.currentState) {
                        case "seeking":
                        case "seeked":
                            var t = n.stateTime;
                            n.moveToState("seeked"), n.stateTime = t;
                            break;
                        case "not_started":
                        case "not_started_waiting":
                        case "stalled":
                        case "playing":
                        case "paused":
                            break;
                        default:
                            n.assertUnreachable(n.currentState)
                    }
                }), G(this, "onPause", function(e) {
                    switch (n.currentState) {
                        case "playing":
                            n.updatePlayTime(e.currentTarget.currentTime), n.moveToState("paused"), n.sendEvent();
                            break;
                        case "stalled":
                            n.stallMs += n.timeInState(), n.moveToState("paused"), n.sendEvent();
                            break;
                        case "not_started":
                        case "not_started_waiting":
                        case "paused":
                        case "seeking":
                            break;
                        case "seeked":
                            n.seekWaitingMs += n.timeInState(), n.seekCount += 1;
                            break;
                        default:
                            n.assertUnreachable(n.currentState)
                    }
                }), G(this, "onPlaying", function(e) {
                    switch (n.currentState) {
                        case "playing":
                            return;
                        case "not_started":
                            n.firstPlayWaitingMs = 0;
                            break;
                        case "not_started_waiting":
                            n.firstPlayWaitingMs = n.timeInState();
                            break;
                        case "stalled":
                            n.stallMs += n.timeInState();
                            break;
                        case "seeked":
                            n.seekWaitingMs += n.timeInState();
                            break;
                        case "paused":
                        case "seeking":
                            break;
                        default:
                            n.assertUnreachable(n.currentState)
                    }
                    n.playbackStartTime = e.currentTarget.currentTime, n.moveToState("playing")
                }), G(this, "onTimeUpdate", function(e) {
                    switch (n.currentState) {
                        case "playing":
                            n.lastPlayingTime = e.currentTarget.currentTime;
                            return;
                        case "not_started":
                        case "not_started_waiting":
                        case "stalled":
                        case "seeked":
                        case "paused":
                        case "seeking":
                            break;
                        default:
                            n.assertUnreachable(n.currentState)
                    }
                }), G(this, "onDragStart", function(e) {
                    null != e && (n.lastPlayingTime = e)
                }), G(this, "onLoadedMetadata", function(e) {
                    n.metadata.fileDurationSec = e.currentTarget.duration
                }), this.metadata = t, this.analyticsEnabled = Z.getCurrentConfig({
                    location: "media_player"
                }).enabled
            }
            return k(e, [{
                key: "moveToState",
                value: function(e) {
                    this.stateTime = performance.now(), this.currentState = e
                }
            }, {
                key: "timeInState",
                value: function() {
                    return performance.now() - this.stateTime
                }
            }, {
                key: "assertUnreachable",
                value: function(e) {
                    throw Error("uhoh")
                }
            }, {
                key: "sendEvent",
                value: function() {
                    this.analyticsEnabled && p.default.track(C.AnalyticEvents.MEDIA_PLAY_FINISHED, {
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
                        connection_type: E.default.getType(),
                        effective_connection_speed: E.default.getEffectiveConnectionSpeed(),
                        service_provider: E.default.getServiceProvider()
                    }), this.playTimeSec = 0, this.playWallTimeMs = 0, this.firstPlayWaitingMs = 0, this.stallCount = 0, this.stallMs = 0, this.seekCount = 0, this.seekWaitingMs = 0, this.playbackStartTime = void 0, this.lastPlayingTime = void 0, this.moveToState("not_started")
                }
            }, {
                key: "updatePlayTime",
                value: function(e) {
                    var t, n;
                    this.playTimeSec += Math.max((null !== (t = this.lastPlayingTime) && void 0 !== t ? t : e) - (null !== (n = this.playbackStartTime) && void 0 !== n ? n : 0), 0), this.playWallTimeMs += this.timeInState()
                }
            }]), e
        }(),
        ee = function(e) {
            j(n, e);
            var t = H(n);

            function n(e) {
                U(this, n), G(M(r = t.call(this, e)), "_unmounted", !1), G(M(r), "_lastMove", 0), G(M(r), "_analytics", void 0), G(M(r), "mediaRef", i.createRef()), G(M(r), "controlsRef", i.createRef()), G(M(r), "playPausePopRef", i.createRef()), G(M(r), "handleFullScreenExit", function() {
                    var e = r.mediaRef.current;
                    if (null != e) {
                        var t = (0, I.getFullScreenNode)(e.parentNode, e);
                        (null == t || !(0, I.isFullScreen)(t)) && r.setState({
                            fullscreen: !1
                        })
                    }
                }), G(M(r), "toggleFullscreen", function() {
                    var e = !r.state.fullscreen;
                    r.setState({
                        fullscreen: e
                    })
                }), G(M(r), "setMuted", function(e) {
                    r.setState({
                        muted: e
                    })
                }), G(M(r), "toggleMuted", function() {
                    r.setMuted(!r.state.muted)
                }), G(M(r), "setTime", function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = r.mediaRef.current;
                    null != n && isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = e, r.updateValue(e / n.duration, t), r.updateTime(e, n.duration))
                }), G(M(r), "handleUIUpdate", function() {
                    if (!!r.state.playing && !r._unmounted) {
                        var e = r.mediaRef.current;
                        null != e && (e.duration > 0 && r.updateValue(e.currentTime / e.duration), r.updateTime(e.currentTime, e.duration), r.updateControlsVisibility(), requestAnimationFrame(r.handleUIUpdate))
                    }
                }), G(M(r), "handleDrag", function(e, t) {
                    var n = r.mediaRef.current;
                    if (t === O.default.Types.DURATION) null != n && isFinite(n.duration) && r.setTime(n.duration * e, !1);
                    else if (t === O.default.Types.VOLUME) {
                        var o = (0, y.perceptualToAmplitude)(e, 1);
                        0 === o ? r.setState({
                            muted: !0,
                            volume: o
                        }) : r.state.muted && o > 0 ? r.setState({
                            muted: !1,
                            volume: o
                        }) : r.setState({
                            volume: o
                        })
                    }
                }), G(M(r), "handleLoaded", function(e) {
                    r._analytics.onLoadedMetadata(e);
                    var t = r.mediaRef.current;
                    null != t && (r.updateTime(t.currentTime, t.duration), r.setState({
                        hasLoadedMetadata: !0,
                        currentTime: t.currentTime,
                        duration: t.duration
                    }))
                }), G(M(r), "handleDurationChange", function() {
                    var e = r.mediaRef.current;
                    null != e && (r.updateTime(e.currentTime, e.duration), r.setState({
                        duration: e.duration
                    }))
                }), G(M(r), "handleBuffer", l().debounce(function() {
                    var e = r.mediaRef.current;
                    if (null == e) {
                        r.setState({
                            buffers: []
                        });
                        return
                    }
                    r.setState({
                        buffers: function(e) {
                            for (var t = [], n = e.duration, r = 0; r < e.buffered.length; r++) {
                                var o = e.buffered.start(r),
                                    i = e.buffered.end(r);
                                if (!(i - o < 1)) {
                                    var a = (i - o) / n,
                                        u = o / n;
                                    t.push([u, a])
                                }
                            }
                            return t
                        }(e)
                    })
                }, 400)), G(M(r), "handleEnded", function(e) {
                    var t = r.props.onEnded;
                    r.setState({
                        playing: !1,
                        hideControls: !1
                    }), null != t && t(e)
                }), G(M(r), "handleMouseMove", function() {
                    r._lastMove = Date.now()
                }), G(M(r), "handleMouseLeave", function() {
                    r.state.playing && (r._lastMove = 0), r.setState({
                        hovering: !1
                    })
                }), G(M(r), "handleMouseEnter", function() {
                    "none" === r.state.preload && r.setState({
                        preload: "metadata"
                    }), r.setState({
                        hovering: !0
                    })
                }), G(M(r), "handleVideoClick", function(e) {
                    var t = M(r),
                        n = t.state,
                        o = n.hasClickedPlay,
                        i = n.playing,
                        a = t.props,
                        u = a.onClick,
                        s = a.autoPlay,
                        l = a.autoMute;
                    if (null != u) {
                        u(e);
                        return
                    }
                    e.stopPropagation(), s && !o && i && l ? r.setState({
                        muted: !1,
                        hasClickedPlay: !0
                    }) : r.setPlay(!r.state.playing)
                }), G(M(r), "setPlay", function(e) {
                    var t = M(r),
                        n = t.props.autoMute,
                        o = t.state,
                        i = o.hasClickedPlay,
                        a = o.muted;
                    e !== r.state.playing && (e ? r.setState({
                        playing: e,
                        hasClickedPlay: !0,
                        muted: (!!i || !n) && a
                    }) : r.setState({
                        playing: !1,
                        hideControls: !1
                    }))
                }), G(M(r), "handleDragStart", function(e) {
                    var t, n;
                    r.setState({
                        dragging: e
                    }), r._analytics.onDragStart(null !== (n = null === (t = r.mediaRef.current) || void 0 === t ? void 0 : t.currentTime) && void 0 !== n ? n : null)
                }), G(M(r), "handleDragEnd", function() {
                    r.setState({
                        dragging: null
                    }), r._lastMove = Date.now()
                }), G(M(r), "handleKeyDown", function(e) {
                    var t = r.mediaRef.current;
                    if (e.which === C.KeyboardKeys.SPACE) e.preventDefault(), r.setPlay(!r.state.playing);
                    else if (e.which >= C.KeyboardKeys.DIGIT_0 && e.which <= C.KeyboardKeys.DIGIT_9 && null != t) {
                        e.preventDefault();
                        var n = (e.which - C.KeyboardKeys.DIGIT_0) / 10;
                        t.currentTime = t.duration * n, r.setPlay(!0)
                    }
                }), r._analytics = new $({
                    src: e.src,
                    mimeType: null === (o = e.mimeType) || void 0 === o ? void 0 : o.join("/"),
                    fileSize: e.fileSizeBytes
                });
                var r, o, a = r.props,
                    u = a.autoPlay,
                    s = a.autoMute,
                    c = a.volume,
                    f = a.playable,
                    d = "function" == typeof c ? c() : c,
                    _ = "function" == typeof s ? s() : s;
                return r.state = {
                    buffers: [],
                    currentTime: null,
                    dragging: null,
                    duration: null,
                    fullscreen: !1,
                    hasClickedPlay: !1,
                    hasLoadedMetadata: !1,
                    hideControls: !f,
                    muted: _,
                    volume: d,
                    playing: u,
                    preload: "none",
                    width: n.minWidth,
                    height: n.minHeight,
                    hovering: !1
                }, r
            }
            return k(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.state,
                        t = e.playing,
                        n = e.muted,
                        r = e.volume,
                        o = this.mediaRef.current;
                    null != o && (n && (o.muted = n), t && (this.play(!0), this.handleUIUpdate()), o.volume = r)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    var n = this.props,
                        r = n.onPause,
                        o = n.onVolumeChange,
                        i = n.onMute,
                        a = this.state,
                        u = a.playing,
                        s = a.fullscreen,
                        l = a.muted,
                        c = a.dragging,
                        f = a.volume,
                        d = this.mediaRef.current,
                        _ = this.playPausePopRef.current;
                    if (null != d) {
                        u && !t.playing ? (this.play(), this.handleMouseMove(), this.handleUIUpdate(), t.hasClickedPlay && (null == _ || _.pop(u))) : !u && t.playing && (d.pause(), null == _ || _.pop(u), null == r || r());
                        var E = (0, I.getFullScreenNode)(d.parentNode, d);
                        s && !t.fullscreen && null != E ? ((0, I.requestFullScreen)(E), E.addEventListener(I.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit)) : !s && t.fullscreen && null != E && (E.removeEventListener(I.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, I.exitFullScreen)(E)), c === O.default.Types.DURATION && t.dragging !== O.default.Types.DURATION && u ? d.pause() : c !== O.default.Types.DURATION && t.dragging === O.default.Types.DURATION && u && d.play(), l !== t.muted && (d.muted = l, null == i || i(l)), f !== t.volume && (d.volume = f, null == o || o(f))
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._unmounted = !0;
                    var e = this.mediaRef.current;
                    if (null != e) {
                        var t = (0, I.getFullScreenNode)(e.parentNode, e);
                        null != t && (t.removeEventListener(I.FULLSCREEN_CHANGE_EVENT, this.handleFullScreenExit), (0, I.exitFullScreen)(t))
                    }
                }
            }, {
                key: "play",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this.props,
                        n = t.onPlay,
                        r = t.volume,
                        o = t.autoMute,
                        i = this.mediaRef.current;
                    if (null != i) {
                        var a = {};
                        if ("function" == typeof r) {
                            var u = r();
                            u !== this.state.volume && (i.volume = u, a.volume = u)
                        }
                        if ("function" == typeof o) {
                            var s = o();
                            s !== this.state.muted && (i.muted = s, a.muted = s)
                        }
                        this.setState(a), i.play(), null == n || n(e, i.currentTime * m.default.Millis.SECOND, i.duration * m.default.Millis.SECOND)
                    }
                }
            }, {
                key: "getWidth",
                value: function() {
                    var e = this.props.width;
                    return "100%" === e ? e : Math.max(e, n.minWidth)
                }
            }, {
                key: "getHeight",
                value: function() {
                    var e = this.props.height;
                    return "100%" === e ? e : Math.max(e, n.minHeight)
                }
            }, {
                key: "updateValue",
                value: function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = this.controlsRef.current;
                    null != n && n.updateProgress(e, t)
                }
            }, {
                key: "updateTime",
                value: function(e, t) {
                    var n = 0 | e,
                        r = 0 | t;
                    (this.state.currentTime !== n || this.state.duration !== r) && this.setState({
                        currentTime: n,
                        duration: r
                    })
                }
            }, {
                key: "updateControlsVisibility",
                value: function() {
                    var e = this.state,
                        t = e.dragging,
                        n = e.fullscreen,
                        r = Math.max(0, Date.now() - this._lastMove) > (n ? 1e3 : 3e3);
                    r !== this.state.hideControls && null == t && this.setState({
                        hideControls: r
                    })
                }
            }, {
                key: "renderVideo",
                value: function() {
                    var e = this.props,
                        t = e.src,
                        n = e.poster,
                        r = e.forceExternal,
                        o = e.onError,
                        a = e.responsive,
                        u = e.mediaLayoutType,
                        s = this.state,
                        l = s.playing,
                        c = s.fullscreen,
                        f = this.getWidth(),
                        d = this.getHeight();
                    return r ? i.createElement(N.default, {
                        className: D.video,
                        controls: !1,
                        height: d,
                        poster: n,
                        width: f,
                        responsive: a && !c,
                        mediaLayoutType: u,
                        playsInline: !0,
                        autoPlay: l
                    }) : i.createElement(N.default, {
                        className: D.video,
                        controls: !1,
                        playsInline: !0,
                        autoPlay: l,
                        height: d,
                        responsive: a && !c,
                        mediaLayoutType: c ? R.MediaLayoutType.STATIC : u,
                        onClick: this.handleVideoClick,
                        onEnded: this.handleEnded,
                        onError: o,
                        onWaiting: this._analytics.onWaiting,
                        onSeeking: this._analytics.onSeeking,
                        onSeeked: this._analytics.onSeeked,
                        onPause: this._analytics.onPause,
                        onPlaying: this._analytics.onPlaying,
                        onTimeUpdate: this._analytics.onTimeUpdate,
                        onLoadedMetadata: this.handleLoaded,
                        onProgress: this.handleBuffer,
                        poster: n,
                        preload: this.state.preload,
                        ref: this.mediaRef,
                        width: f,
                        src: t
                    })
                }
            }, {
                key: "renderAudio",
                value: function() {
                    return i.createElement("audio", {
                        className: D.audio,
                        controls: !1,
                        onClick: this.handleVideoClick,
                        onEnded: this.handleEnded,
                        onLoadedMetadata: this.handleLoaded,
                        onProgress: this.handleBuffer,
                        preload: this.state.preload,
                        ref: this.mediaRef
                    }, i.createElement("source", {
                        src: this.props.src
                    }))
                }
            }, {
                key: "renderControls",
                value: function() {
                    var e = this,
                        t = this.mediaRef.current,
                        n = this.props,
                        r = n.type,
                        o = n.autoPlay,
                        a = n.playable,
                        u = void 0 === a || a,
                        s = n.onVolumeShow,
                        l = n.onVolumeHide,
                        c = this.state,
                        f = c.buffers,
                        d = c.currentTime,
                        E = c.duration,
                        p = c.hasClickedPlay,
                        m = c.hideControls,
                        h = c.muted,
                        O = c.playing,
                        S = c.fullscreen,
                        v = c.volume,
                        g = c.dragging,
                        A = this.getWidth();
                    return p || o || r === W.AUDIO ? i.createElement(q, {
                        buffers: f,
                        currentTime: d,
                        duration: E,
                        volume: (0, y.amplitudeToPerceptual)(v, 1),
                        hide: r === W.VIDEO && m,
                        muted: h,
                        autoPlay: o,
                        onDrag: this.handleDrag,
                        onDragEnd: this.handleDragEnd,
                        onDragStart: this.handleDragStart,
                        onPause: function() {
                            return e.setPlay(!1)
                        },
                        onPlay: function() {
                            return e.setPlay(!0)
                        },
                        onToggleMuted: this.toggleMuted,
                        onVolumeShow: s,
                        onVolumeHide: l,
                        playing: O,
                        dragging: g,
                        type: r,
                        ref: this.controlsRef,
                        width: S ? window.screen.width : A,
                        disabled: !u
                    }, r === W.VIDEO ? i.createElement(_.default, {
                        "aria-label": P.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                        className: D.videoButton,
                        guestWindow: window,
                        onClick: this.toggleFullscreen,
                        node: (0, I.getFullScreenNode)(null == t ? void 0 : t.parentNode, t)
                    }) : null) : i.createElement(T.default, {
                        onPlay: this.handleVideoClick,
                        inactive: !u
                    })
                }
            }, {
                key: "renderMetadata",
                value: function() {
                    var e = this.props,
                        t = e.fileName,
                        n = e.fileSize,
                        r = e.src,
                        o = e.type,
                        a = e.playable,
                        u = e.mimeType;
                    return null == t || null == n ? null : o === W.AUDIO ? i.createElement(Q, {
                        fileName: t,
                        fileSize: n,
                        src: r,
                        disabled: !a,
                        mimeType: u,
                        hideDownloadButton: !0
                    }) : null
                }
            }, {
                key: "renderPlayPausePop",
                value: function() {
                    return i.createElement(J, {
                        ref: this.playPausePopRef
                    })
                }
            }, {
                key: "getMediaStyle",
                value: function() {
                    var e = this.props,
                        t = e.responsive,
                        n = e.type,
                        r = e.height,
                        o = this.state.fullscreen,
                        i = this.getWidth();
                    return o ? K : n === W.AUDIO ? {
                        width: void 0,
                        height: "auto"
                    } : t ? void 0 : {
                        width: i,
                        height: r
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.height,
                        n = e.type,
                        r = e.src,
                        o = e.forceExternal,
                        a = e.className,
                        s = e.renderLinkComponent,
                        l = e.responsive,
                        c = e.mediaLayoutType,
                        f = e.renderOverlayContent,
                        d = this.state,
                        _ = d.fullscreen,
                        E = d.hideControls,
                        p = d.playing,
                        m = D.wrapperPaused;
                    if (n === W.AUDIO ? m = D.wrapperAudio : E ? m = D.wrapperControlsHidden : p && (m = D.wrapperPlaying), o && n === W.VIDEO) {
                        var y = this.getWidth();
                        return i.createElement("div", {
                            className: u()(m, G({}, D.wrapperMediaMosaic, c === R.MediaLayoutType.MOSAIC)),
                            style: l ? void 0 : {
                                width: y,
                                height: t
                            }
                        }, this.renderMetadata(), this.renderVideo(), i.createElement("div", {
                            className: D.playCenter
                        }, i.createElement(S.default, {
                            className: D.__invalid_playButton,
                            externalURL: r,
                            renderLinkComponent: s
                        })))
                    }
                    return i.createElement("div", {
                        className: u()(m, D.newMosaicStyle, a, G({}, D.wrapperMediaMosaic, c === R.MediaLayoutType.MOSAIC)),
                        "data-fullscreen": _,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onMouseMove: p ? this.handleMouseMove : void 0,
                        onKeyDown: this.handleKeyDown,
                        style: this.getMediaStyle()
                    }, this.renderMetadata(), n === W.AUDIO ? this.renderAudio() : this.renderVideo(), this.renderControls(), n === W.VIDEO ? this.renderPlayPausePop() : null, null != f ? i.createElement("div", {
                        className: u()(G({}, D.overlayContentHidden, p || _))
                    }, f()) : null)
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return !e.playable && t.playing ? {
                        playing: !1,
                        hideControls: !1
                    } : null
                }
            }]), n
        }(i.PureComponent);
    G(ee, "Types", W), G(ee, "defaultProps", {
        width: 400,
        height: 300,
        forceExternal: !1,
        playable: !0,
        downloadable: !0,
        autoPlay: !1,
        autoMute: !1,
        volume: 1
    }), G(ee, "minWidth", 150), G(ee, "minHeight", 110), t.default = ee
}