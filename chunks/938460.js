function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return j
        }
    }), t("70102");
    var s = t("913144"),
        d = t("629109"),
        n = t("990766"),
        i = t("605250"),
        c = t("660078"),
        r = t("268491"),
        o = t("373469"),
        l = t("271938"),
        f = t("374014"),
        u = t("16916"),
        b = t("49111"),
        p = t("353927");
    class h {
        _onGameDetectionUpdate(e) {
            this.applications = e.map(e => {
                var a, t;
                return {
                    applicationId: null !== (a = e.id) && void 0 !== a ? a : null,
                    processId: e.pid,
                    processPath: e.pidPath,
                    windowHandle: null !== (t = e.windowHandle) && void 0 !== t ? t : null,
                    executableName: e.exeName
                }
            }), "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications)
        }
        _onStreamApplication(e, a) {
            this.mode = "application", this.streamKey = e, this.director.onStreamBegin(this.applications, a)
        }
        _onStreamDirectSource(e, a, t, s) {
            this.mode = "verbatim-source", this.streamKey = e, this._onDirectorAction({
                type: c.StreamDirectorActionType.STREAM,
                sourceId: a,
                audioSourceId: t,
                sound: s
            })
        }
        _onStreamEnd(e) {
            if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
                case "application":
                    this.director.onStreamEnd();
                    break;
                case "verbatim-source":
                    this._onDirectorAction({
                        type: c.StreamDirectorActionType.STOP
                    });
                    break;
                default:
                    var a;
                    throw Error("unknown streaming mode: ".concat(null !== (a = this.mode) && void 0 !== a ? a : "(none)"))
            }
        }
        _onStreamKilled(e) {
            if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
                case "application":
                    this.director.onStreamKilled();
                    break;
                case "verbatim-source":
                    break;
                default:
                    var a;
                    throw Error("unknown streaming mode: ".concat(null !== (a = this.mode) && void 0 !== a ? a : "(none)"))
            }
        }
        _onDirectorAction(e) {
            let a = o.default.getCurrentUserActiveStream(),
                t = r.default.getState();
            switch (e.type) {
                case c.StreamDirectorActionType.STREAM:
                    if (null != a && (0, n.setStreamPaused)(a, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
                        let a = e.sourceId.split(":"),
                            s = a[1];
                        d.default.setGoLiveSource({
                            cameraSettings: {
                                videoDeviceGuid: s,
                                audioDeviceGuid: e.audioSourceId
                            },
                            qualityOptions: {
                                preset: t.preset,
                                resolution: t.resolution,
                                frameRate: t.fps
                            },
                            context: p.MediaEngineContextTypes.STREAM
                        })
                    } else {
                        var s;
                        d.default.setGoLiveSource({
                            desktopSettings: {
                                sourceId: e.sourceId,
                                sound: null === (s = e.sound) || void 0 === s || s
                            },
                            qualityOptions: {
                                preset: t.preset,
                                resolution: t.resolution,
                                frameRate: t.fps
                            },
                            context: p.MediaEngineContextTypes.STREAM
                        })
                    }
                    break;
                case c.StreamDirectorActionType.PAUSE:
                    null != a && (0, n.setStreamPaused)(a, !0);
                    break;
                case c.StreamDirectorActionType.STOP:
                    null != a && (0, u.default)(a);
                    break;
                default:
                    throw Error("unhandled stream action: ".concat(e.type))
            }
        }
        _onCapturePaused(e) {
            let a = o.default.getCurrentUserActiveStream();
            null != a && (0, n.setStreamPaused)(a, e)
        }
        _onCaptureEnded() {
            switch (this.mode) {
                case "application":
                    this._onCapturePaused(!0);
                    break;
                case "verbatim-source":
                    null != this.streamKey && this._onStreamEnd(this.streamKey);
                    break;
                default:
                    var e;
                    throw Error("unknown streaming mode: ".concat(null !== (e = this.mode) && void 0 !== e ? e : "(none)"))
            }
        }
        constructor() {
            this.mode = null, this.applications = [], this.director = new c.StreamDirector(e => this._onDirectorAction(e)), s.default.subscribe("STREAM_START", e => {
                let {
                    streamType: a,
                    guildId: t,
                    channelId: s,
                    pid: d,
                    sourceId: n,
                    audioSourceId: c,
                    sound: r
                } = e, o = l.default.getId(), u = (0, f.encodeStreamKey)({
                    streamType: a,
                    guildId: t,
                    channelId: s,
                    ownerId: o
                });
                null == d != (null == n) ? (null != d && this._onStreamApplication(u, d), null != n && this._onStreamDirectSource(u, n, c, r)) : new(0, i.default)("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(d, ", source-id: ").concat(n, ")"))
            }), s.default.subscribe("STREAM_DELETE", e => {
                let {
                    streamKey: a
                } = e;
                this._onStreamKilled(a)
            }), s.default.subscribe("STREAM_STOP", e => {
                let {
                    streamKey: a
                } = e;
                this._onStreamEnd(a)
            }), s.default.subscribe("RUNNING_GAMES_CHANGE", e => {
                let {
                    games: a
                } = e;
                this._onGameDetectionUpdate(a)
            }), s.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                let {
                    videoState: a,
                    context: t
                } = e;
                t === p.MediaEngineContextTypes.STREAM && this._onCapturePaused(a === b.MediaEngineVideoStates.PAUSED)
            }), s.default.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", e => {
                let {
                    settings: a
                } = e;
                (null == a ? void 0 : a.context) === p.MediaEngineContextTypes.STREAM && (null == a ? void 0 : a.desktopSettings) == null && (null == a ? void 0 : a.cameraSettings) == null && this._onCaptureEnded()
            })
        }
    }
    var j = {
        instance: null,
        init() {
            null == this.instance && (this.instance = new h)
        }
    }
}