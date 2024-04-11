function(e, t, a) {
    "use strict";
    a.r(t), a("411104");
    var d = a("570140"),
        n = a("846027"),
        i = a("872810"),
        c = a("710845"),
        o = a("252759"),
        r = a("361291"),
        f = a("199902"),
        s = a("314897"),
        l = a("569545"),
        u = a("803647"),
        b = a("981631"),
        h = a("65154");

    function p(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }
    class m {
        _onGameDetectionUpdate(e) {
            this.applications = e.map(e => {
                var t, a;
                return {
                    applicationId: null !== (t = e.id) && void 0 !== t ? t : null,
                    processId: e.pid,
                    processPath: e.pidPath,
                    windowHandle: null !== (a = e.windowHandle) && void 0 !== a ? a : null,
                    executableName: e.exeName
                }
            }), "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications)
        }
        _onStreamApplication(e, t) {
            this.mode = "application", this.streamKey = e, this.director.onStreamBegin(this.applications, t)
        }
        _onStreamDirectSource(e, t, a, d) {
            this.mode = "verbatim-source", this.streamKey = e, this._onDirectorAction({
                type: o.StreamDirectorActionType.STREAM,
                sourceId: t,
                audioSourceId: a,
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
                        type: o.StreamDirectorActionType.STOP
                    });
                    break;
                default:
                    var t;
                    throw Error("unknown streaming mode: ".concat(null !== (t = this.mode) && void 0 !== t ? t : "(none)"))
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
                    var t;
                    throw Error("unknown streaming mode: ".concat(null !== (t = this.mode) && void 0 !== t ? t : "(none)"))
            }
        }
        _onDirectorAction(e) {
            let t = f.default.getCurrentUserActiveStream(),
                a = r.default.getState();
            switch (e.type) {
                case o.StreamDirectorActionType.STREAM:
                    if (null != t && (0, i.setStreamPaused)(t, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
                        let t = e.sourceId.split(":")[1];
                        n.default.setGoLiveSource({
                            cameraSettings: {
                                videoDeviceGuid: t,
                                audioDeviceGuid: e.audioSourceId
                            },
                            qualityOptions: {
                                preset: a.preset,
                                resolution: a.resolution,
                                frameRate: a.fps
                            },
                            context: h.MediaEngineContextTypes.STREAM
                        })
                    } else {
                        var d;
                        n.default.setGoLiveSource({
                            desktopSettings: {
                                sourceId: e.sourceId,
                                sound: null === (d = e.sound) || void 0 === d || d
                            },
                            qualityOptions: {
                                preset: a.preset,
                                resolution: a.resolution,
                                frameRate: a.fps
                            },
                            context: h.MediaEngineContextTypes.STREAM
                        })
                    }
                    break;
                case o.StreamDirectorActionType.PAUSE:
                    null != t && (0, i.setStreamPaused)(t, !0);
                    break;
                case o.StreamDirectorActionType.STOP:
                    null != t && (0, u.default)(t);
                    break;
                default:
                    throw Error("unhandled stream action: ".concat(e.type))
            }
        }
        _onCapturePaused(e) {
            let t = f.default.getCurrentUserActiveStream();
            null != t && (0, i.setStreamPaused)(t, e)
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
            p(this, "director", void 0), p(this, "applications", void 0), p(this, "streamKey", void 0), p(this, "mode", void 0), this.mode = null, this.applications = [], this.director = new o.StreamDirector(e => this._onDirectorAction(e)), d.default.subscribe("STREAM_START", e => {
                let {
                    streamType: t,
                    guildId: a,
                    channelId: d,
                    pid: n,
                    sourceId: i,
                    audioSourceId: o,
                    sound: r
                } = e, f = s.default.getId(), u = (0, l.encodeStreamKey)({
                    streamType: t,
                    guildId: a,
                    channelId: d,
                    ownerId: f
                });
                null == n != (null == i) ? (null != n && this._onStreamApplication(u, n), null != i && this._onStreamDirectSource(u, i, o, r)) : new c.default("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(n, ", source-id: ").concat(i, ")"))
            }), d.default.subscribe("STREAM_DELETE", e => {
                let {
                    streamKey: t
                } = e;
                this._onStreamKilled(t)
            }), d.default.subscribe("STREAM_STOP", e => {
                let {
                    streamKey: t
                } = e;
                this._onStreamEnd(t)
            }), d.default.subscribe("RUNNING_GAMES_CHANGE", e => {
                let {
                    games: t
                } = e;
                this._onGameDetectionUpdate(t)
            }), d.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
                let {
                    videoState: t,
                    context: a
                } = e;
                a === h.MediaEngineContextTypes.STREAM && this._onCapturePaused(t === b.MediaEngineVideoStates.PAUSED)
            }), d.default.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", e => {
                let {
                    settings: t
                } = e;
                (null == t ? void 0 : t.context) === h.MediaEngineContextTypes.STREAM && (null == t ? void 0 : t.desktopSettings) == null && (null == t ? void 0 : t.cameraSettings) == null && this._onCaptureEnded()
            })
        }
    }
    t.default = {
        instance: null,
        init() {
            null == this.instance && (this.instance = new m)
        }
    }
}