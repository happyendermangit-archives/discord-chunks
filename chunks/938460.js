function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return j
        }
    }), t("70102");
    var d = t("913144"),
        s = t("629109"),
        n = t("990766"),
        c = t("605250"),
        i = t("660078"),
        r = t("268491"),
        o = t("373469"),
        f = t("271938"),
        l = t("374014"),
        u = t("16916"),
        p = t("49111"),
        b = t("353927");
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
        _onStreamDirectSource(e, a, t, d) {
            this.mode = "verbatim-source", this.streamKey = e, this._onDirectorAction({
                type: i.StreamDirectorActionType.STREAM,
                sourceId: a,
                audioSourceId: t,
                sound: d
            })
        }
        _onStreamEnd(e) {
            if (this.streamKey === e) switch (this.streamKey = null, this.mode) {
                case "application":
                    this.director.onStreamEnd();
                    break;
                case "verbatim-source":
                    this._onDirectorAction({
                        type: i.StreamDirectorActionType.STOP
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
                case i.StreamDirectorActionType.STREAM:
                    if (null != a && (0, n.setStreamPaused)(a, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
                        let a = e.sourceId.split(":"),
                            d = a[1];
                        s.default.setGoLiveSource({
                            cameraSettings: {
                                videoDeviceGuid: d,
                                audioDeviceGuid: e.audioSourceId
                            },
                            qualityOptions: {
                                preset: t.preset,
                                resolution: t.resolution,
                                frameRate: t.fps
                            },
                            context: b.MediaEngineContextTypes.STREAM
                        })
                    } else {
                        var d;
                        s.default.setGoLiveSource({
                            desktopSettings: {
                                sourceId: e.sourceId,
                                sound: null === (d = e.sound) || void 0 === d || d
                            },
                            qualityOptions: {
                                preset: t.preset,
                                resolution: t.resolution,
                                frameRate: t.fps
                            },
                            context: b.MediaEngineContextTypes.STREAM
                        })
                    }
                    break;
                case i.StreamDirectorActionType.PAUSE:
                    null != a && (0, n.setStreamPaused)(a, !0);
                    break;
                case i.StreamDirectorActionType.STOP:
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
            this.mode = null, this.applications = [], this.director = new i.StreamDirector(e => this._onDirectorAction(e)), d.default.subscribe("STREAM_START", e => {
                let {
                    streamType: a,
                    guildId: t,
                    channelId: d,
                    pid: s,
                    sourceId: n,
                    audioSourceId: i,
                    sound: r
                } = e, o = f.default.getId(), u = (0, l.encodeStreamKey)({
                    streamType: a,
                    guildId: t,
                    channelId: d,
                    ownerId: o
                });
                null == s != (null == n) ? (null != s && this._onStreamApplication(u, s), null != n && this._onStreamDirectSource(u, n, i, r)) : new(0, c.default)("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(s, ", source-id: ").concat(n, ")"))
            }), d.default.subscribe("STREAM_DELETE", e => {
                let {
                    streamKey: a
                } = e;
                this._onStreamKilled(a)
            }), d.default.subscribe("STREAM_STOP", e => {
                let {
                    streamKey: a
                } = e;
                this._onStreamEnd(a)
            }), d.default.subscribe("RUNNING_GAMES_CHANGE", e => {
                let {
                    games: a
                } = e;
                this._onGameDetectionUpdate(a)
            }), d.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                let {
                    videoState: a,
                    context: t
                } = e;
                t === b.MediaEngineContextTypes.STREAM && this._onCapturePaused(a === p.MediaEngineVideoStates.PAUSED)
            }), d.default.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", e => {
                let {
                    settings: a
                } = e;
                (null == a ? void 0 : a.context) === b.MediaEngineContextTypes.STREAM && (null == a ? void 0 : a.desktopSettings) == null && (null == a ? void 0 : a.cameraSettings) == null && this._onCaptureEnded()
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