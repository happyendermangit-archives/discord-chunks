function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("47120");
    var i = n("46973"),
        r = n("570140"),
        s = n("147913"),
        a = n("579806"),
        o = n("569545"),
        l = n("441167"),
        u = n("314897"),
        d = n("131951"),
        _ = n("19780"),
        c = n("959457"),
        E = n("626135"),
        I = n("358085"),
        T = n("924557"),
        f = n("435064"),
        S = n("894694"),
        h = n("779618"),
        A = n("356659"),
        m = n("981631"),
        N = n("70722");
    class O extends s.default {
        handleRTCConnectionState(e) {
            let {
                context: t,
                state: n,
                streamKey: r
            } = e;
            if (!(0, T.areClipsEnabled)() || n !== m.RTCConnectionStates.RTC_CONNECTED) return;
            let s = u.default.getId();
            if (t === i.MediaEngineContextTypes.DEFAULT) return this.applyUserVoiceRecording(s);
            if (t === i.MediaEngineContextTypes.STREAM && null != r) {
                let {
                    ownerId: e
                } = (0, o.decodeStreamKey)(r);
                if (e !== s) return;
                let t = c.default.getRTCConnection(r);
                if (null == t) return;
                this.applyStreamRecording(s, t)
            }
        }
        handleRTCUserCreate(e) {
            let {
                userId: t,
                context: n
            } = e;
            n === i.MediaEngineContextTypes.DEFAULT && this.applyUserVoiceRecording(t)
        }
        handleRTCConnectionFlags(e) {
            let {
                userId: t,
                channelId: n,
                guildId: i
            } = e;
            this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
            let r = c.default.getRTCConnection(o.encodeStreamKey({
                streamType: null != i ? N.StreamTypes.GUILD : N.StreamTypes.CALL,
                ownerId: t,
                channelId: n,
                guildId: i
            }));
            null != r && this.applyStreamRecording(t, r)
        }
        handleClipsInitFailure(e) {
            let {
                applicationName: t,
                errMsg: n
            } = e;
            E.default.track(m.AnalyticEvents.CLIPS_INIT_FAILURE, {
                application_name: t,
                error_message: n
            })
        }
        maybeShowClipsWarning(e) {
            let t = _.default.getChannelId();
            if (!(null == t || f.default.getClipsWarningShown(t)) && e !== u.default.getId()) f.default.isClipsEnabledForUser(e) && (r.default.dispatch({
                type: "CLIPS_SHOW_CALL_WARNING",
                channelId: t
            }), this.showClipsToast())
        }
        handlePostConnectionOpen() {
            if (!!(0, h.default)(d.default)) {
                if (this.applyNativeClipsSettings(), !(0, T.areClipsEnabled)()) {
                    f.default.getSettings().clipsEnabled && this.disableClips();
                    return
                }(null == f.default.getHardwareClassification() || null == f.default.getHardwareClassificationForDecoupled() || f.default.getHardwareClassificationVersion() !== A.CLIPS_HARDWARE_CLASSIFICATION_VERSION) && this.classifyHardwareAndTrack().then(e => {
                    r.default.dispatch({
                        type: "CLIPS_CLASSIFY_HARDWARE",
                        classification: e
                    })
                })
            }
        }
        handleRTCConnectionVideo(e) {
            let {
                userId: t,
                context: n,
                channelId: r,
                guildId: s
            } = e;
            if (n !== i.MediaEngineContextTypes.STREAM || !(0, h.default)(d.default)) return;
            let a = c.default.getRTCConnection(o.encodeStreamKey({
                streamType: null != s ? N.StreamTypes.GUILD : N.StreamTypes.CALL,
                ownerId: t,
                channelId: r,
                guildId: s
            }));
            null != a && this.applyStreamRecording(t, a)
        }
        async classifyHardwareAndTrack() {
            try {
                let e = await a.default.processUtils.getSystemInfo(),
                    t = this.classifyHardware(e);
                return E.default.track(m.AnalyticEvents.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: A.CLIPS_HARDWARE_CLASSIFICATION_VERSION,
                    gpu_models: e.gpus.map(e => {
                        let {
                            model: t
                        } = e;
                        return t
                    })
                }), t
            } catch (e) {
                return S.ClipsHardwareClassification.UNKNOWN
            }
        }
        classifyHardware(e) {
            if ((0, I.isWindows)()) {
                let t = e.gpus.some(e => {
                        let {
                            model: t
                        } = e;
                        return A.WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX.test(t)
                    }),
                    n = e.gpus.some(e => {
                        let {
                            model: t
                        } = e;
                        return A.WINDOWS_HARDWARE_MINIMUM_GPU_REGEX.test(t)
                    });
                return t ? S.ClipsHardwareClassification.MEETS_AUTO_ENABLE : n ? S.ClipsHardwareClassification.MEETS_MINIMUM : S.ClipsHardwareClassification.BELOW_MINIMUM
            }
            if ((0, I.isMac)()) return e.gpus.some(e => {
                let {
                    model: t
                } = e;
                return A.OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX.test(t)
            }) ? S.ClipsHardwareClassification.MEETS_AUTO_ENABLE : S.ClipsHardwareClassification.MEETS_MINIMUM;
            return S.ClipsHardwareClassification.UNKNOWN
        }
        applyUserVoiceRecording(e) {
            if (!(0, h.default)(d.default)) return;
            let t = _.default.getRTCConnection();
            if (null == t) return;
            if (e === u.default.getId()) {
                t.setClipRecordUser(e, "audio", f.default.getSettings().clipsEnabled);
                return
            }
            let n = f.default.isVoiceRecordingAllowedForUser(e);
            t.setClipRecordUser(e, "audio", n)
        }
        applyStreamRecording(e, t) {
            if (!(0, h.default)(d.default)) return;
            if (u.default.getId() === e) {
                let {
                    clipsEnabled: n
                } = f.default.getSettings(), i = (0, T.areClipsEnabled)();
                t.setClipRecordUser(e, "audio", i && n), t.setClipRecordUser(e, "video", i && n);
                return
            }
            let {
                enableViewerClipping: n,
                ignoreSenderPreference: i
            } = l.default.getCurrentConfig({
                location: "ClipsManager:applyStreamRecording"
            });
            if (!n) return;
            let r = i || f.default.isViewerClippingAllowedForUser(e);
            this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", r), t.setClipRecordUser(e, "video", r)
        }
        disableClips() {}
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: e => this.handlePostConnectionOpen(),
                RTC_CONNECTION_FLAGS: e => this.handleRTCConnectionFlags(e),
                RTC_CONNECTION_USER_CREATE: e => this.handleRTCUserCreate(e),
                CLIPS_INIT_FAILURE: e => this.handleClipsInitFailure(e),
                CLIPS_SETTINGS_UPDATE: e => this.applyNativeClipsSettings(e),
                STREAM_START: () => this.applyNativeClipsSettings(),
                RUNNING_GAME_TOGGLE_DETECTION: e => this.handleClipsInitOnToggleDetection(e),
                RUNNING_GAMES_CHANGE: e => this.handleClipsInitOnGamesChange(e),
                CLIPS_RESTART: () => this.fireClipsInitEvent(),
                RTC_CONNECTION_VIDEO: e => this.handleRTCConnectionVideo(e),
                RTC_CONNECTION_STATE: e => this.handleRTCConnectionState(e),
                MEDIA_ENGINE_SET_HARDWARE_H264: e => this.handleMediaEngineSetHardwareH264(e)
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
}