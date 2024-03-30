function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("629815"),
        r = n("661961"),
        c = n("224359"),
        o = n("35523"),
        i = n("772156"),
        f = n("403720"),
        d = n("73013"),
        u = n("217014"),
        l = n("736381"),
        s = n("739213"),
        b = n("281767"),
        p = n("439386");

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var v = function() {
        var e, t, n;

        function v() {
            var e = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, v), m(this, "director", void 0), m(this, "applications", void 0), m(this, "streamKey", void 0), m(this, "mode", void 0), this.mode = null, this.applications = [], this.director = new i.StreamDirector(function(t) {
                return e._onDirectorAction(t)
            }), a.default.subscribe("STREAM_START", function(t) {
                var n = t.streamType,
                    a = t.guildId,
                    r = t.channelId,
                    c = t.pid,
                    i = t.sourceId,
                    f = t.audioSourceId,
                    d = t.sound,
                    s = u.default.getId(),
                    b = (0, l.encodeStreamKey)({
                        streamType: n,
                        guildId: a,
                        channelId: r,
                        ownerId: s
                    });
                null == c != (null == i) ? (null != c && e._onStreamApplication(b, c), null != i && e._onStreamDirectSource(b, i, f, d)) : new o.default("ApplicationSwitchingManager").warn("invalid start_stream: both application + display modes were specified (pid: ".concat(c, ", source-id: ").concat(i, ")"))
            }), a.default.subscribe("STREAM_DELETE", function(t) {
                var n = t.streamKey;
                e._onStreamKilled(n)
            }), a.default.subscribe("STREAM_STOP", function(t) {
                var n = t.streamKey;
                e._onStreamEnd(n)
            }), a.default.subscribe("RUNNING_GAMES_CHANGE", function(t) {
                var n = t.games;
                e._onGameDetectionUpdate(n)
            }), a.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", function(t) {
                var n = t.videoState;
                t.context === p.MediaEngineContextTypes.STREAM && e._onCapturePaused(n === b.MediaEngineVideoStates.PAUSED)
            }), a.default.subscribe("MEDIA_ENGINE_SET_GO_LIVE_SOURCE", function(t) {
                var n = t.settings;
                (null == n ? void 0 : n.context) === p.MediaEngineContextTypes.STREAM && (null == n ? void 0 : n.desktopSettings) == null && (null == n ? void 0 : n.cameraSettings) == null && e._onCaptureEnded()
            })
        }
        return e = v, t = [{
            key: "_onGameDetectionUpdate",
            value: function(e) {
                this.applications = e.map(function(e) {
                    var t, n;
                    return {
                        applicationId: null !== (t = e.id) && void 0 !== t ? t : null,
                        processId: e.pid,
                        processPath: e.pidPath,
                        windowHandle: null !== (n = e.windowHandle) && void 0 !== n ? n : null,
                        executableName: e.exeName
                    }
                }), "verbatim-source" !== this.mode && this.director.onDetectionUpdate(this.applications)
            }
        }, {
            key: "_onStreamApplication",
            value: function(e, t) {
                this.mode = "application", this.streamKey = e, this.director.onStreamBegin(this.applications, t)
            }
        }, {
            key: "_onStreamDirectSource",
            value: function(e, t, n, a) {
                this.mode = "verbatim-source", this.streamKey = e, this._onDirectorAction({
                    type: i.StreamDirectorActionType.STREAM,
                    sourceId: t,
                    audioSourceId: n,
                    sound: a
                })
            }
        }, {
            key: "_onStreamEnd",
            value: function(e) {
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
                        var t;
                        throw Error("unknown streaming mode: ".concat(null !== (t = this.mode) && void 0 !== t ? t : "(none)"))
                }
            }
        }, {
            key: "_onStreamKilled",
            value: function(e) {
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
        }, {
            key: "_onDirectorAction",
            value: function(e) {
                var t = d.default.getCurrentUserActiveStream(),
                    n = f.default.getState();
                switch (e.type) {
                    case i.StreamDirectorActionType.STREAM:
                        if (null != t && (0, c.setStreamPaused)(t, !1), e.sourceId.startsWith("camera") && null != e.audioSourceId) {
                            var a, o = e.sourceId.split(":")[1];
                            r.default.setGoLiveSource({
                                cameraSettings: {
                                    videoDeviceGuid: o,
                                    audioDeviceGuid: e.audioSourceId
                                },
                                qualityOptions: {
                                    preset: n.preset,
                                    resolution: n.resolution,
                                    frameRate: n.fps
                                },
                                context: p.MediaEngineContextTypes.STREAM
                            })
                        } else r.default.setGoLiveSource({
                            desktopSettings: {
                                sourceId: e.sourceId,
                                sound: null === (a = e.sound) || void 0 === a || a
                            },
                            qualityOptions: {
                                preset: n.preset,
                                resolution: n.resolution,
                                frameRate: n.fps
                            },
                            context: p.MediaEngineContextTypes.STREAM
                        });
                        break;
                    case i.StreamDirectorActionType.PAUSE:
                        null != t && (0, c.setStreamPaused)(t, !0);
                        break;
                    case i.StreamDirectorActionType.STOP:
                        null != t && (0, s.default)(t);
                        break;
                    default:
                        throw Error("unhandled stream action: ".concat(e.type))
                }
            }
        }, {
            key: "_onCapturePaused",
            value: function(e) {
                var t = d.default.getCurrentUserActiveStream();
                null != t && (0, c.setStreamPaused)(t, e)
            }
        }, {
            key: "_onCaptureEnded",
            value: function() {
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
        }], h(e.prototype, t), n && h(e, n), v
    }();
    t.default = {
        instance: null,
        init: function() {
            null == this.instance && (this.instance = new v)
        }
    }
}