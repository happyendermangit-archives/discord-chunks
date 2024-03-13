function(e, t, n) {
    "use strict";
    let i, s, r, a;
    n.r(t), n.d(t, {
        default: function() {
            return tm
        }
    }), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
    var o, l, u = n("627445"),
        d = n.n(u),
        c = n("917351"),
        f = n.n(c),
        _ = n("570277"),
        h = n.n(_),
        E = n("446674"),
        g = n("773364"),
        m = n("95410"),
        p = n("862337"),
        S = n("913144"),
        v = n("49671"),
        T = n("6193"),
        I = n("965068"),
        C = n("386045"),
        A = n("18346"),
        y = n("605250"),
        N = n("808122"),
        R = n("733589"),
        O = n("161454"),
        D = n("933034"),
        P = n("746800"),
        M = n("301108"),
        L = n("584687"),
        b = n("705500"),
        U = n("797323"),
        w = n("238847"),
        k = n("981699"),
        V = n("140622"),
        G = n("16001"),
        F = n("631508"),
        x = n("368765"),
        B = n("403770"),
        H = n("940146"),
        Y = n("353500"),
        j = n("103979"),
        W = n("665862"),
        K = n("122530"),
        z = n("928609"),
        q = n("891760"),
        X = n("536692"),
        Q = n("374363"),
        Z = n("599110"),
        J = n("922932"),
        $ = n("718517"),
        ee = n("773336"),
        et = n("286235"),
        en = n("50885"),
        ei = n("13798"),
        es = n("271938"),
        er = n("366679"),
        ea = n("533222"),
        eo = n("42203"),
        el = n("760190"),
        eu = n("855867"),
        ed = n("945956"),
        ec = n("123647"),
        ef = n("49111"),
        e_ = n("706530"),
        eh = n("180524"),
        eE = n("397336"),
        eg = n("353927"),
        em = n("782340");
    let ep = new y.default("MediaEngineStore");
    (l = o || (o = {}))[l.DETACHED = 0] = "DETACHED", l[l.WAITING = 1] = "WAITING", l[l.ATTACHED = 2] = "ATTACHED", l[l.STARTED = 3] = "STARTED", l[l.PLAYING = 4] = "PLAYING", l[l.SILENCE = 5] = "SILENCE";
    let eS = "MediaEngineStore",
        ev = {
            left: 1,
            right: 1
        };

    function eT() {
        let e = {
            mode: ef.InputModes.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -60,
                autoThreshold: ee.isPlatformEmbedded || __OVERLAY__,
                vadUseKrisp: !0,
                vadLeading: 5,
                vadTrailing: 25,
                delay: 20,
                shortcut: []
            },
            vadUseKrispSettingVersion: 0,
            ncUseKrispSettingVersion: 0,
            ncUseKrispjsSettingVersion: 0,
            av1EnabledSettingVersion: 0,
            mute: !1,
            deaf: !1,
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            experimentalEncoders: !1,
            hardwareH264: !0,
            hardwareEnabledVersion: 0,
            silenceWarning: !0,
            attenuation: 0,
            attenuateWhileSpeakingSelf: !1,
            attenuateWhileSpeakingOthers: !0,
            localMutes: {},
            disabledLocalVideos: {},
            videoToggleStateMap: {},
            localVolumes: {},
            localPans: {},
            inputVolume: eg.DEFAULT_VOLUME,
            outputVolume: eg.DEFAULT_VOLUME,
            inputDeviceId: eg.DEFAULT_DEVICE_ID,
            outputDeviceId: eg.DEFAULT_DEVICE_ID,
            videoDeviceId: eg.DEFAULT_DEVICE_ID,
            qos: !1,
            qosMigrated: !1,
            videoHook: eI.supports(eg.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            av1Enabled: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        };
        return e
    }
    let eI = (0, g.initializeMediaEngine)((0, g.determineMediaEngine)()),
        eC = {},
        eA = new Set([eg.MediaEngineContextTypes.DEFAULT]),
        ey = eI.supports(eg.Features.AUTO_ENABLE),
        eN = !1,
        eR = eg.MediaEngineContextTypes.STREAM,
        eO = {
            [eg.DEFAULT_DEVICE_ID]: ts(em.default.Messages.NO_INPUT_DEVICES)
        },
        eD = {
            [eg.DEFAULT_DEVICE_ID]: ts(em.default.Messages.NO_OUTPUT_DEVICES)
        },
        eP = {
            [eg.DEFAULT_DEVICE_ID]: ts(em.default.Messages.NO_VIDEO_DEVICES)
        },
        eM = !1,
        eL = !1,
        eb = !1,
        eU = !1,
        ew = !1,
        ek = eg.DISABLED_DEVICE_ID,
        eV = !1,
        eG = !1,
        eF = !1,
        ex = null,
        eB = !1,
        eH = !1,
        eY = !1,
        ej = !1,
        eW = !1,
        eK = null,
        ez = !1,
        eq = !1,
        eX = !1;
    z.default.hasPermission(eh.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), z.default.hasPermission(eh.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let eQ = new Set,
        eZ = !1,
        eJ = !1,
        e$ = {},
        e0 = {},
        e1 = 5 * $.default.Millis.SECOND;

    function e2() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT,
            t = eC[e];
        return null == t && (t = eT(), eC[e] = t), t
    }

    function e3(e) {
        let t = e2(e.context);
        e.setInputMode(t.mode, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                return eW || !1
            }(),
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: t.modeOptions.delay
        })
    }

    function e4(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.DEFAULT_VOLUME;
        return f.clamp(e, 0, t)
    }

    function e6(e) {
        let t = e2(e.context),
            n = !ey || t.mute || t.deaf;
        e.context === eg.MediaEngineContextTypes.DEFAULT && (n = n || eM || eL || eb || !z.default.didHavePermission(eh.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eg.MediaEngineContextTypes.DEFAULT && e.setNativeMute(n)
    }

    function e9() {
        var e, t, n;
        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            o = r;
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, ee.isWindows)() && T.cancelAttachToProcess(o.desktopSource.soundshareId), eI.setGoLiveSource(null, eR)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eI.setGoLiveSource(null, eR), (ew || s) && (ek = (ew = s) ? ta(eP, e2().videoDeviceId) : eg.DISABLED_DEVICE_ID, eI.setVideoInputDevice(ek)), r = a, null != a) {
            let e = {
                resolution: a.quality.resolution,
                frameRate: a.quality.frameRate
            };
            if (null != a.desktopSource) {
                let {
                    useQuartzCapturer: t
                } = F.default.getCurrentConfig({
                    location: "f627ab_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    hdrCaptureMode: n
                } = k.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), s = e2().videoHook, r = eI.supports(eg.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                    videoHookStaleFrameTimeoutMs: o
                } = H.default.getConfig(r && s, "e225cfdf5_vh1", !0), {
                    graphicsCaptureStaleFrameTimeoutMs: l
                } = W.default.getConfig(r && e5(), "e225cfdf5_wgc2", !0);
                eI.setGoLiveSource({
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: s,
                        useGraphicsCapture: e5(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: t,
                        allowScreenCaptureKit: te(!0),
                        videoHookStaleFrameTimeoutMs: o,
                        graphicsCaptureStaleFrameTimeoutMs: l,
                        hdrCaptureMode: n
                    },
                    quality: e
                }, eR)
            }
            null != a.cameraSource && eI.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: a.cameraSource.audioDeviceGuid
                },
                quality: e
            }, eR)
        }
    }

    function e8(e, t, n, i) {
        var s;
        let r = null !== (s = null == e ? void 0 : e.soundshareSession) && void 0 !== s ? s : "";
        null == e0[r] && (e0[r] = new Set);
        let a = null != t && !e0[r].has(t);
        a && e0[r].add(t), (null == t || a) && Z.default.track(ef.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, D.default)(e)
        })
    }

    function e7(e) {
        let t = e2(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(ea.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ea.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ea.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function e5() {
        return (0, ee.isWindows)() && h.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, e_.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function te(e) {
        return !!((0, ee.isMac)() && eI.supports(eg.Features.SCREEN_CAPTURE_KIT) && h.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, e_.DARWIN_SCKIT_VERSION)) && x.default.getCurrentConfig({
            location: "screenCaptureKitEnabled"
        }, {
            autoTrackExposure: e
        }).allowScreenCaptureKit
    }
    let tt = new class {
        start() {
            !this.started && (this.started = !0, eI.on(g.MediaEngineEvent.Silence, this.handleSilence))
        }
        stop() {
            this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eI.removeListener(g.MediaEngineEvent.Silence, this.handleSilence), S.default.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null
            }))
        }
        update() {
            let e = e2();
            !eB && ed.default.getState() === ef.RTCConnectionStates.RTC_CONNECTED && e.mode === ef.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
        }
        reset() {
            this.stop(), this.update()
        }
        constructor() {
            this.noVoiceTimeout = 5e3, this.voiceTimeout = 1500, this.started = !1, this.handleSilence = e => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
                    this.stateChangeTimeout = null, this.started && (S.default.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: t
                    }), e && (eH = !0))
                }, t ? this.voiceTimeout : this.noVoiceTimeout)
            }
        }
    };

    function tn(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e2(t);
        return Object.assign(i, e), !__OVERLAY__ && n && m.default.set(eS, eC), i
    }

    function ti() {
        !ey && eI.enable().then(() => S.default.dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: !0,
            unmute: !1
        }))
    }

    function ts(e) {
        return {
            id: eg.DEFAULT_DEVICE_ID,
            index: 0,
            name: e,
            disabled: !0
        }
    }

    function tr(e, t) {
        if (0 === e.length) {
            let e = ts(t);
            return {
                [e.id]: e
            }
        }
        return f(e).map(e => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1
        })).keyBy("id").value()
    }

    function ta(e, t) {
        var n;
        let i = null !== (n = e[t]) && void 0 !== n ? n : f(e).values().first();
        return null != i ? i.id : t
    }

    function to() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = null !== (e = Q.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let s = e === eE.ProtoAudioSettingsContextTypes.USER ? eg.MediaEngineContextTypes.DEFAULT : eg.MediaEngineContextTypes.STREAM,
                r = s === eg.MediaEngineContextTypes.STREAM ? eg.DEFAULT_STREAM_VOLUME : eg.DEFAULT_VOLUME,
                a = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e2(s);
            for (let [e, t] of Object.entries(a)) null == (0, X.getPendingAudioSettings)(s, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== r ? l[e] = t.volume : delete l[e], eI.eachConnection(n => {
                n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
            }, s));
            if (n) {
                let e = new Set([...Object.keys(o), ...Object.keys(l)]);
                for (let t of e) null == a[t] && (delete o[t], delete l[t], eI.eachConnection(e => {
                    e.setLocalVolume(t, r), e.setLocalMute(t, !1)
                }, s))
            }
            tn({
                localMutes: o,
                localVolumes: l
            }, s)
        }
    }

    function tl(e) {
        if (null == i) return ep.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
            soundshareId: null,
            soundshareSession: ""
        };
        {
            let t = i.getExperimentalSoundshare() ? e : J.default.getAudioPid(e),
                n = "";
            return null != t && (n = J.default.generateSessionFromPid(t)), {
                soundshareId: t,
                soundshareSession: n
            }
        }
    }

    function tu(e, t) {
        (0, ee.isWindows)() && T.attachToProcess(e, {
            soundshare_session: t
        }).then(t => {
            null != t && !O.default.shouldContinueWithoutElevatedProcessForPID(e) && S.default.wait(() => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                    errorMessage: t
                })
            })
        })
    }

    function td() {
        let e = eg.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e2(e);
        for (let [e, n] of Object.entries(t)) n === ef.VideoToggleState.AUTO_PROBING && delete t[e];
        tn({
            videoToggleStateMap: t
        }, e, !1)
    }

    function tc(e) {
        let t = e2();
        Z.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function tf() {
        let e = e2(),
            t = e.inputDeviceId,
            n = ea.default.hasEchoCancellation(t) || e.echoCancellation,
            i = ea.default.hasNoiseSuppression(t) || e.noiseSuppression,
            s = ea.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            r = e.noiseCancellation;
        eI.setLoopback(eJ, {
            echoCancellation: n,
            noiseSuppression: i,
            automaticGainControl: s,
            noiseCancellation: r
        })
    }

    function t_() {
        return eW || !1
    }
    async function th() {
        try {
            await en.default.ensureModule("discord_krisp"), en.default.requireModule("discord_krisp"), eW = !0, i.emitChange()
        } catch (t) {
            ep.warn("Failed to load Krisp module: ".concat(t.message)), et.default.captureException(t);
            let e = eg.NoiseCancellerError.INITIALIZED;
            if (t.message.includes(": ")) {
                let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                e = isNaN(n) || 0 === n ? eg.NoiseCancellerError.INITIALIZED : n
            }
            Z.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), tn({
                noiseCancellation: !1
            })
        } finally {
            ej = !1
        }
    }

    function tE(e) {
        let {
            section: t
        } = e;
        return t === ef.UserSettingsSections.VOICE && ti(), !1
    }
    class tg extends E.default.Store {
        initialize() {
            eI.on(g.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = G.default.getCurrentConfig({
                    location: "f627ab_3"
                }, {
                    autoTrackExposure: !1
                });
                t > 0 && eI.setMaxSyncDelayOverride(t), e3(e), e6(e), e7(e);
                let n = e2();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                let {
                    useExperimentalRateControl: s
                } = Y.default.getCurrentConfig({
                    location: "f627ab_4"
                }, {
                    autoTrackExposure: !1
                });
                s && e.setExperimentFlag(eg.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                let {
                    muteBeforeProcessing: a,
                    pttBeforeProcessing: o,
                    skipEncode: l
                } = M.default.getCurrentConfig({
                    location: "setupMediaEngine"
                }, {
                    autoTrackExposure: !0
                });
                a && e.setExperimentFlag(eg.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), o && e.setExperimentFlag(eg.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eg.ExperimentFlags.SKIP_ENCODE, !0);
                {
                    (0, ee.isWindows)() && e.setExperimentFlag(eg.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = w.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && e.setExperimentFlag(eg.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: n
                    } = U.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    n && e.setExperimentFlag(eg.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: i
                    } = b.default.getCurrentConfig({
                        location: "f627ab_8"
                    }, {
                        autoTrackExposure: !0
                    });
                    i && e.setExperimentFlag(eg.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
                }
                let {
                    signalAV1Support: u
                } = P.default.getCurrentConfig({
                    location: "f627ab_10"
                }, {
                    autoTrackExposure: !0
                });
                u && e.setExperimentFlag(eg.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                let {
                    allowSettingFullbandAndroid: d
                } = V.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (d && eI.setHasFullbandPerformance((0, N.hasPerformanceForKrispFullband)()), (0, A.default)(i)) {
                    let t = C.default.getSettings();
                    e.setExperimentFlag(eg.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = j.default.getCurrentConfig({
                        location: "f627ab_15"
                    }, {
                        autoTrackExposure: !1
                    });
                    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eg.VIEWERSIDE_CLIP_KFI_MS);
                    let {
                        allowQualityDecoupling: i
                    } = I.default.getCurrentConfig({
                        location: "MediaEngineStore_setupMediaEngine"
                    }, {
                        autoTrackExposure: !0
                    });
                    e.setQualityDecoupling(i)
                }
                for (let t of (n = e2(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== es.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                for (let t of Object.keys(n.localVolumes)) t !== es.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right)
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(g.BaseConnectionEvent.Speaking, (t, n) => {
                    S.default.dispatch({
                        type: "SPEAKING",
                        context: e.context,
                        userId: t,
                        speakingFlags: n
                    })
                }), e.context === eg.MediaEngineContextTypes.DEFAULT && (eV = !1, e.on(g.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    eV = !0, i.emitChange()
                })), e.on(g.BaseConnectionEvent.DesktopSourceEnd, () => {
                    S.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(g.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == r ? void 0 : r.desktopSource) != null && Z.default.track(ef.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, D.default)(null == r ? void 0 : r.desktopSource))
                }), e.on(g.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    e8(null == r ? void 0 : r.desktopSource, t, n, i)
                }), e.on(g.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == r ? void 0 : r.desktopSource) != null && (Z.default.track(ef.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, D.default)(null == r ? void 0 : r.desktopSource)), null != eu.default.getHookError(ef.MediaEngineHookTypes.SOUND) && S.default.wait(() => S.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let c = new p.Timeout;
                e.on(g.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            c.start(e1, () => {
                                S.default.dispatch({
                                    type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                    errorMessage: "Sound Hook Failed"
                                })
                            });
                            break;
                        case "soundshare_recv_failed":
                            let t = e.reason,
                                n = e.code,
                                i = e.retry;
                            (null == r ? void 0 : r.desktopSource) != null && (e8(null == r ? void 0 : r.desktopSource, n, t, i), !i && (c.stop(), S.default.wait(() => S.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                errorMessage: t,
                                errorCode: n
                            }))));
                            break;
                        case "soundshare_state_transition":
                            4 === e.newState && (c.stop(), S.default.wait(() => S.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                            })))
                    }
                }), e.on(g.BaseConnectionEvent.InteractionRequired, e => {
                    S.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e
                    })
                }), e.on(g.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, s, a) => {
                    (null == r ? void 0 : r.desktopSource) != null && Z.default.track(ef.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: s,
                        reinitialization: a,
                        ...(0, D.default)(null == r ? void 0 : r.desktopSource)
                    })
                }), e.on(g.BaseConnectionEvent.NoiseCancellationError, e => {
                    ep.warn("noisecancellererror event: ".concat(e)), ez = !0, Z.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), S.default.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: !0
                    }), S.default.dispatch({
                        type: "AUDIO_SET_NOISE_CANCELLATION",
                        enabled: !1
                    }), S.default.dispatch({
                        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                        code: e
                    })
                }), e.on(g.BaseConnectionEvent.VoiceActivityDetectorError, e => {
                    ep.warn("voiceactivitydetectorerror event: ".concat(e)), Z.default.track(ef.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), S.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eg.MediaEngineContextTypes.DEFAULT,
                        mode: ef.InputModes.VOICE_ACTIVITY,
                        options: {
                            ...e2(eg.MediaEngineContextTypes.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }), S.default.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e
                    })
                }), e.on(g.BaseConnectionEvent.VideoState, t => {
                    S.default.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                        videoState: t,
                        context: e.context
                    })
                }), e.on(g.BaseConnectionEvent.Destroy, () => {
                    c.stop()
                }), e.setBitRate(er.default.bitrate), e.applyVideoQualityMode(ec.default.mode)
            }), eI.on(g.MediaEngineEvent.DeviceChange, (e, t, n) => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                })
            }), eI.on(g.MediaEngineEvent.VolumeChange, (e, t) => {
                S.default.dispatch({
                    type: "AUDIO_VOLUME_CHANGE",
                    inputVolume: e,
                    outputVolume: t
                })
            }), eI.on(g.MediaEngineEvent.DesktopSourceEnd, () => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: null
                })
            }), eI.on(g.MediaEngineEvent.AudioPermission, e => {
                eX = !0, S.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e
                })
            }), eI.on(g.MediaEngineEvent.VideoPermission, e => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "video",
                    granted: e
                })
            }), eI.on(g.MediaEngineEvent.WatchdogTimeout, async () => {
                let e;
                try {
                    await J.default.submitLiveCrashReport({
                        message: {
                            message: "Voice Watchdog Timeout"
                        }
                    })
                } catch (t) {
                    "number" == typeof t.status && (e = t.status)
                }
                ep.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Z.default.track(ef.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e
                })
            }), eI.on(g.MediaEngineEvent.VideoInputInitialized, e => {
                Z.default.track(ef.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.default.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                })
            }), eI.on(g.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                S.default.dispatch({
                    type: "CLIPS_RESTART"
                })
            }), eI.on(g.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                S.default.wait(() => {
                    S.default.dispatch({
                        type: "CLIPS_INIT_FAILURE",
                        errMsg: e,
                        applicationName: t
                    })
                })
            }), eI.on(g.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                var n, i;
                (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == r ? void 0 : null === (i = r.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && T.cancelAttachToProcess(t), a = null)
            }), tt.reset(), ! function() {
                var e;
                let t = m.default.get("audio");
                null != t && (m.default.set(eS, {
                        [eg.MediaEngineContextTypes.DEFAULT]: t
                    }), m.default.remove("audio")), eC = null !== (e = m.default.get(eS)) && void 0 !== e ? e : {}, f.each(eC, e => {
                        if (f.defaultsDeep(e, eT()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e2();
                        eI.setAudioInputDevice(e.inputDeviceId), eI.setAudioOutputDevice(e.outputDeviceId), e9(), eI.setInputVolume(e.inputVolume), eI.setOutputVolume(e.outputVolume), eI.setH264Enabled(e.openH264), eI.setAv1Enabled(e.av1Enabled), eI.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, ee.isDesktop)() || __OVERLAY__ || ej || eW ? (0, ee.isWeb)() && eI.supports(eg.Features.NOISE_CANCELLATION) ? (eW = !0, i.emitChange()) : (0, ee.isWeb)() && tn({
                noiseCancellation: !1
            }) : (ej = !0, th()), td(), e$ = {
                [eg.Features.VIDEO]: eI.supports(eg.Features.VIDEO),
                [eg.Features.DESKTOP_CAPTURE]: eI.supports(eg.Features.DESKTOP_CAPTURE),
                [eg.Features.HYBRID_VIDEO]: eI.supports(eg.Features.HYBRID_VIDEO)
            }, this.waitFor(es.default, ea.default, eo.default, eu.default, ed.default, O.default, z.default.storage, Q.default, el.default, C.default)
        }
        supports(e) {
            return eI.supports(e)
        }
        supportsInApp(e) {
            return e$[e] || eI.supports(e)
        }
        isSupported() {
            return eI.supported()
        }
        isExperimentalEncodersSupported() {
            return eI.supports(eg.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eI.supports(eg.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return eW || !1
        }
        isNoiseCancellationError() {
            return ez
        }
        isAutomaticGainControlSupported() {
            return eI.supports(eg.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return eW || !1
        }
        isAecDumpSupported() {
            return eI.supports(eg.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eI.supports(eg.Features.VIDEO) && eI.supports(eg.Features.SIMULCAST)
        }
        getAecDump() {
            return e2().aecDumpEnabled
        }
        getMediaEngine() {
            return eI
        }
        getVideoComponent() {
            return eI.supports(eg.Features.DIRECT_VIDEO) && eI.setUseDirectVideo(!0), eI.Video
        }
        getCameraComponent() {
            return eI.supports(eg.Features.DIRECT_VIDEO) && eI.setUseDirectVideo(!0), eI.Camera
        }
        isEnabled() {
            return ey
        }
        isMute() {
            return this.isSelfMute() || eM
        }
        isDeaf() {
            return this.isSelfDeaf() || eU
        }
        hasContext(e) {
            return null != eC[e]
        }
        isSelfMutedTemporarily() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT;
            return e === eg.MediaEngineContextTypes.DEFAULT && eL
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e2(e).mute || !z.default.didHavePermission(eh.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eg.MediaEngineContextTypes.DEFAULT && eb
        }
        isHardwareMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && ea.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT;
            return !this.isSupported() || e2(e).deaf
        }
        isVideoEnabled() {
            return ew && eF
        }
        isVideoAvailable() {
            return Object.values(eP).some(e => {
                let {
                    disabled: t
                } = e;
                return !t
            })
        }
        isScreenSharing() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.STREAM;
            return eR === e && null != r
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.STREAM;
            return eR === t && null != r && (null === (e = r.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.MediaEngineContextTypes.DEFAULT;
            return e !== es.default.getId() && (e2(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eI.supports(eg.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e2(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e2(n).videoToggleStateMap[e]) && void 0 !== t ? t : ef.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.MediaEngineContextTypes.DEFAULT;
            return t === eg.MediaEngineContextTypes.DEFAULT && eQ.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT;
            return e === eg.MediaEngineContextTypes.DEFAULT && eQ.size > 0
        }
        isMediaFilterSettingLoading() {
            return eq
        }
        isNativeAudioPermissionReady() {
            return eX
        }
        getGoLiveSource() {
            return r
        }
        getGoLiveContext() {
            return eR
        }
        getLocalPan(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.MediaEngineContextTypes.DEFAULT,
                n = e2(t).localPans[e];
            return null != n ? n : ev
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.MediaEngineContextTypes.DEFAULT,
                n = t === eg.MediaEngineContextTypes.STREAM,
                i = n ? eg.DEFAULT_STREAM_VOLUME : eg.DEFAULT_VOLUME,
                s = e2(t).localVolumes[e];
            return null != s ? s : i
        }
        getInputVolume() {
            return e2().inputVolume
        }
        getOutputVolume() {
            return e2().outputVolume
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT;
            return e2(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT;
            return e2(e).modeOptions
        }
        getShortcuts() {
            let e = {};
            return f.each(eC, (t, n) => {
                let {
                    mode: i,
                    modeOptions: {
                        shortcut: s
                    }
                } = t;
                i === ef.InputModes.PUSH_TO_TALK && eA.has(n) && (e[n] = s)
            }), e
        }
        getInputDeviceId() {
            return ta(eO, e2().inputDeviceId)
        }
        getOutputDeviceId() {
            return ta(eD, e2().outputDeviceId)
        }
        getVideoDeviceId() {
            return ta(eP, e2().videoDeviceId)
        }
        getInputDevices() {
            return eO
        }
        getOutputDevices() {
            return eD
        }
        getVideoDevices() {
            return eP
        }
        getEchoCancellation() {
            let e = e2();
            return ea.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e2().h265Enabled
        }
        getLoopback() {
            return eI.getLoopback()
        }
        getNoiseSuppression() {
            let e = e2();
            return ea.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e2();
            return ea.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
        }
        getNoiseCancellation() {
            return e2().noiseCancellation
        }
        getExperimentalEncoders() {
            return e2().experimentalEncoders
        }
        getHardwareH264() {
            return e2().hardwareH264
        }
        getEnableSilenceWarning() {
            return e2().silenceWarning
        }
        getDebugLogging() {
            return eI.getDebugLogging()
        }
        getQoS() {
            return e2().qos
        }
        getAttenuation() {
            return e2().attenuation
        }
        getAttenuateWhileSpeakingSelf() {
            return e2().attenuateWhileSpeakingSelf
        }
        getAttenuateWhileSpeakingOthers() {
            return e2().attenuateWhileSpeakingOthers
        }
        getAudioSubsystem() {
            return eI.getAudioSubsystem()
        }
        getSettings() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT;
            return e2(e)
        }
        getState() {
            return {
                settingsByContext: eC,
                inputDevices: eO,
                outputDevices: eD,
                appSupported: e$,
                krispModuleLoaded: eW,
                goLiveSource: r,
                goLiveContext: eR
            }
        }
        getInputDetected() {
            return ex
        }
        getNoInputDetectedNotice() {
            return eH
        }
        getPacketDelay() {
            return ee.isPlatformEmbedded || this.getMode() !== ef.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
        }
        setCanHavePriority(e, t) {
            eI.eachConnection(n => n.setCanHavePriority(e, t))
        }
        isInteractionRequired() {
            return eN
        }
        getVideoHook() {
            return e2().videoHook
        }
        supportsVideoHook() {
            return eI.supports(eg.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e2().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eI.supports(eg.Features.EXPERIMENTAL_SOUNDSHARE) && h.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, e_.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e2().openH264
        }
        getAv1Enabled() {
            return e2().av1Enabled
        }
        getEverSpeakingWhileMuted() {
            return eV
        }
        supportsScreenSoundshare() {
            return (0, ee.isMac)() && eI.supports(eg.Features.SOUNDSHARE) && h.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, e_.DARWIN_SCKIT_AUDIO_VERSION) && te(!1) || (0, ee.isWindows)() && eI.supports(eg.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.MediaEngineContextTypes.DEFAULT,
                t = this.supports(eg.Features.VIDEO) ? [{
                    rid: "100",
                    type: e === eg.MediaEngineContextTypes.DEFAULT ? eg.MediaTypes.VIDEO : eg.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            return this.isSimulcastSupported() && e === eg.MediaEngineContextTypes.DEFAULT && t.push({
                rid: "50",
                type: eg.MediaTypes.VIDEO,
                quality: 50
            }), t
        }
        getSupportedSecureFramesProtocolVersion(e) {
            var t;
            let n = eI.getSupportedSecureFramesProtocolVersion(),
                i = B.SecureFramesUserExperiment.getCurrentConfig({
                    location: "MediaEngineStore"
                }),
                s = null != e ? B.SecureFramesGuildExperiment.getCurrentConfig({
                    guildId: e,
                    location: "MediaEngineStore"
                }) : null,
                r = i.canSupportSecureFrames || (null == s ? void 0 : s.canSupportSecureFrames),
                a = i.canSupportMls || (null == s ? void 0 : s.canSupportMls),
                o = Math.max(i.protocolVersionFloor, null !== (t = null == s ? void 0 : s.protocolVersionFloor) && void 0 !== t ? t : 0);
            return r && n % 100 >= o ? a ? n : n % 100 : 0
        }
        hasClipsSource() {
            return null != a
        }
    }
    tg.displayName = "MediaEngineStore";
    var tm = i = new tg(S.default, {
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n,
                currentVoiceChannelId: i,
                video: s
            } = e;
            if (i !== n && e9(s, null), null != t || null == n) {
                eY = !1;
                return
            }
            if (eY) return;
            eY = !0;
            let r = e2();
            (r.mute || r.deaf) && (tn({
                deaf: !1,
                mute: !1
            }), eI.eachConnection(e6))
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (s === t.sessionId) {
                    eM = t.mute || t.suppress, eU = t.deaf, eI.eachConnection(e6);
                    let e = null != t.guildId && null != t.channelId && null != eK && eK !== t.channelId,
                        n = !e && ew;
                    return e9(n), eK = t.channelId, !0
                }
                return !__OVERLAY__ && t.userId === es.default.getId() && null == ed.default.getChannelId() && e9(!1, null), e
            }, !1)
        },
        CONNECTION_OPEN: function(e) {
            s = e.sessionId, eM = !1, eU = !1, (0, q.shouldReadWriteAudioSettings)() && to()
        },
        CONNECTION_CLOSED: function() {
            s = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case ef.RTCConnectionStates.CONNECTING:
                    ti();
                    break;
                case ef.RTCConnectionStates.RTC_CONNECTING:
                    eB = !1, eH = !1;
                    break;
                case ef.RTCConnectionStates.RTC_CONNECTED:
                    e9();
                    break;
                case ef.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === eQ.size) return;
                        let e = eg.MediaEngineContextTypes.DEFAULT,
                            {
                                disabledLocalVideos: t
                            } = e2(e);
                        eQ.forEach(n => {
                            d(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eI.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                        }), eQ.clear(), tn({
                            disabledLocalVideos: t
                        }, e, !1)
                    })(), td()
            }
            tt.update()
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
            let {
                mute: t
            } = e;
            eL = t, eI.eachConnection(e6)
        },
        AUDIO_TOGGLE_SELF_MUTE: function(e) {
            let {
                context: t
            } = e, {
                mute: n,
                deaf: i
            } = e2(t);
            if (t === eg.MediaEngineContextTypes.DEFAULT && (z.default.requestPermission(eh.NativePermissionTypes.AUDIO), eb)) return !1;
            !(n = !i && !n) && (i = !1), tn({
                mute: n,
                deaf: i
            }, t), eI.eachConnection(e6)
        },
        AUDIO_SET_SELF_MUTE: function(e) {
            let {
                context: t,
                mute: n
            } = e;
            tn({
                mute: n
            }, t), eI.eachConnection(e6)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            let {
                context: t
            } = e, n = e2(t);
            tn({
                deaf: !n.deaf
            }, t), eI.eachConnection(e6)
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
            let {
                context: t,
                userId: n
            } = e;
            if (n === es.default.getId()) return;
            let {
                localMutes: i
            } = e2(t);
            i[n] ? delete i[n] : i[n] = !0, tn({
                localMutes: i
            }, t), eI.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
            var t, n, i, s, r, a, o;
            let {
                context: l,
                userId: u,
                videoToggleState: c,
                persist: f,
                isAutomatic: _
            } = e;
            d(!(f && _), "These are not allowed to both be true.");
            let h = c === ef.VideoToggleState.DISABLED,
                {
                    disabledLocalVideos: E
                } = e2(l),
                g = null !== (t = E[u]) && void 0 !== t && t,
                m = eQ.has(u),
                p = c === ef.VideoToggleState.AUTO_ENABLED || c === ef.VideoToggleState.MANUAL_ENABLED;
            ep.info("disableVideo=".concat(h, " currentlyDisabled=").concat(g, " currentlyAutoDisabled=").concat(m, ", isVideoShown=").concat(p)), d(!(m && !g), "If you are auto-disabled, then you are also disabled.");
            let S = h !== g,
                v = l === eg.MediaEngineContextTypes.DEFAULT,
                T = _ && S && v,
                I = f && S && v;
            ep.info("changed=".concat(S, " isDefaultContext=").concat(v, " isUpdateCausedByVideoHealthManager=").concat(T, " isManualToggleByUser=").concat(I));
            let {
                videoToggleStateMap: C
            } = e2(l);
            if (C[u] === ef.VideoToggleState.AUTO_PROBING && c === ef.VideoToggleState.AUTO_ENABLED && (0, K.default)(u, h ? eg.VideoToggleReason.AUTO_DISABLE : eg.VideoToggleReason.AUTO_ENABLE, p), C[u] = c, tn({
                    videoToggleStateMap: C
                }, l, f), c === ef.VideoToggleState.AUTO_PROBING ? null === (n = ed.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ed.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eZ && (ep.info("isAutoDisableAllowed=".concat(eZ, " - disabling VideoHealthManager")), null === (r = ed.default.getRTCConnection()) || void 0 === r || null === (s = r.getVideoHealthManager()) || void 0 === s || s.disable()), T) {
                if (!h && !m || h && !eZ) return;
                (0, K.default)(u, h ? eg.VideoToggleReason.AUTO_DISABLE : eg.VideoToggleReason.AUTO_ENABLE, p), h ? eQ.add(u) : eQ.delete(u)
            } else I && (m && !h ? (ep.info("disallowing auto-disable for this session because of manual override by user"), eZ = !1, null === (o = ed.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, K.default)(u, eg.VideoToggleReason.MANUAL_REENABLE, p)) : (0, K.default)(u, h ? eg.VideoToggleReason.MANUAL_DISABLE : eg.VideoToggleReason.MANUAL_ENABLE, p));
            v && !h && eQ.delete(u), h ? E[u] = !0 : delete E[u], tn({
                disabledLocalVideos: E
            }, l, f), eI.eachConnection(e => {
                var t;
                return e.setLocalVideoDisabled(u, null !== (t = E[u]) && void 0 !== t && t)
            }, l)
        },
        AUDIO_SET_LOCAL_VOLUME: function(e) {
            let {
                context: t,
                userId: n,
                volume: i
            } = e;
            if (n === es.default.getId()) return;
            let s = t === eg.MediaEngineContextTypes.STREAM,
                r = s ? eg.DEFAULT_STREAM_VOLUME : eg.DEFAULT_VOLUME,
                {
                    localVolumes: a
                } = e2(t);
            i === r ? delete a[n] : a[n] = i, tn({
                localVolumes: a
            }, t), eI.eachConnection(e => e.setLocalVolume(n, i), t)
        },
        AUDIO_SET_LOCAL_PAN: function(e) {
            let {
                context: t,
                userId: n,
                left: i,
                right: s
            } = e, {
                localPans: r
            } = e2(t);
            r[n] = {
                left: i,
                right: s
            }, tn({
                localPans: r
            }, t), eI.eachConnection(e => e.setLocalPan(n, i, s), t)
        },
        AUDIO_SET_MODE: function(e) {
            let {
                context: t,
                mode: n,
                options: i
            } = e;
            tn({
                mode: n,
                modeOptions: i
            }, t), eI.eachConnection(e3), tt.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            tn({
                inputVolume: e4(t)
            }), eI.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            tn({
                outputVolume: t
            }), eI.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tn({
                inputDeviceId: t = ta(eO, t)
            }), eI.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tn({
                outputDeviceId: t = ta(eD, t)
            }), eI.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            let t = tn({
                echoCancellation: e.enabled
            });
            eI.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tf(), tc(e.location)
        },
        MEDIA_ENGINE_SET_H265: function(e) {
            let t = tn({
                h265Enabled: e.enabled
            });
            eI.setH265Enabled(t.h265Enabled)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            let {
                enabled: t
            } = e;
            return eJ = t, tf()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            let t = tn({
                noiseSuppression: e.enabled
            });
            eI.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tf(), tc(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            let t = tn({
                automaticGainControl: e.enabled
            });
            eI.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tf(), tc(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            let t = tn({
                noiseCancellation: e.enabled
            });
            eI.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tf(), tc(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            tn({
                silenceWarning: e.enabled
            }), tt.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eI.setDebugLogging(e.enabled)
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
            tn({
                videoHook: e.enabled
            })
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
            tn({
                experimentalSoundshare2: e.enabled
            })
        },
        AUDIO_SET_ATTENUATION: function(e) {
            let {
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            } = e, s = tn({
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            });
            eI.eachConnection(e => e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers))
        },
        AUDIO_SET_QOS: function(e) {
            let {
                enabled: t
            } = e;
            tn({
                qos: t
            }), eI.eachConnection(e => e.setQoS(t))
        },
        MEDIA_ENGINE_DEVICES: function(e) {
            let {
                inputDevices: t,
                outputDevices: n,
                videoDevices: i
            } = e;
            ! function(e) {
                let t = eO;
                if (eO = tr(e, em.default.Messages.NO_INPUT_DEVICES), !f.isEqual(eO, t)) {
                    let e = e2(),
                        t = ta(eO, e.inputDeviceId);
                    eI.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = eD;
                if (eD = tr(e, em.default.Messages.NO_OUTPUT_DEVICES), !f.isEqual(eD, t)) {
                    let e = e2(),
                        t = ta(eD, e.outputDeviceId);
                    eI.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                eF = e.length > 0;
                let t = eP;
                if (eP = tr(e, em.default.Messages.NO_VIDEO_DEVICES), ew && !f.isEqual(eP, t)) {
                    var n;
                    let e = void 0 !== eP[ek],
                        i = ek === eg.DEFAULT_DEVICE_ID && (null === (n = t[eg.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    e9(e || i)
                }
            }(i)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            let {
                inputVolume: t,
                outputVolume: n
            } = e;
            tn({
                inputVolume: e4(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            m.default.remove(eS), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            let {
                inputDetected: t
            } = e;
            ex = t, !eB && ex && (eB = !0, tt.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eI.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            ey = e.enabled, e.unmute && tn({
                mute: !1,
                deaf: !1
            }), eI.eachConnection(e6)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            z.default.requestPermission(eh.NativePermissionTypes.CAMERA), e9(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            let {
                kind: t,
                granted: n
            } = e;
            if (!n) switch (t) {
                case "audio":
                    ey = !1, eI.eachConnection(e6);
                    break;
                case "video":
                    e9(!1)
            }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            var t, n, i, s, a;
            let {
                settings: o
            } = e;
            if ((null == o ? void 0 : o.desktopSettings) != null) {
                ;
                let e = null,
                    i = null,
                    {
                        sourceId: s,
                        sound: l
                    } = o.desktopSettings,
                    u = null !== (t = o.context) && void 0 !== t ? t : eg.MediaEngineContextTypes.DEFAULT,
                    d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                        resolution: 720,
                        frameRate: 30
                    },
                    c = J.default.getPidFromDesktopSource(s);
                ee.isPlatformEmbedded && !0 === l && ({
                    soundshareId: e,
                    soundshareSession: i
                } = tl(c), null != e && tu(e, i)), (a = u) !== eR && (null != r && eI.setGoLiveSource(null, eR), eR = a);
                let f = u === eg.MediaEngineContextTypes.STREAM && ew;
                e9(f, {
                    desktopSource: {
                        id: s,
                        sourcePid: c,
                        soundshareId: e,
                        soundshareSession: i
                    },
                    quality: {
                        resolution: d.resolution,
                        frameRate: d.frameRate
                    }
                })
            } else if ((null == o ? void 0 : o.cameraSettings) != null) {
                let e = null !== (i = o.context) && void 0 !== i ? i : eg.MediaEngineContextTypes.DEFAULT,
                    {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    } = o.cameraSettings,
                    r = e === eg.MediaEngineContextTypes.STREAM && ew,
                    a = null !== (s = o.qualityOptions) && void 0 !== s ? s : {
                        resolution: 720,
                        frameRate: 30
                    };
                e9(r, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: a.resolution,
                        frameRate: a.frameRate
                    }
                })
            } else e9(ew, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tn({
                videoDeviceId: t = ta(eP, t)
            }), e9()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            let t = tn({
                experimentalEncoders: e.enabled
            });
            eI.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return eN !== e.required && (eN = e.required, !e.required && eI.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: tE,
        USER_SETTINGS_MODAL_SET_SECTION: tE,
        CERTIFIED_DEVICES_SET: function() {
            return eI.eachConnection(e7), !1
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            eA.add(t.id)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            eA.delete(t.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                mediaEngineState: t
            } = e;
            eC = t.settingsByContext, eO = t.inputDevices, eD = t.outputDevices, e$ = t.appSupported, eW = t.krispModuleLoaded, eR = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            let {
                enabled: t
            } = e, n = tn({
                openH264: t
            });
            eI.setH264Enabled(n.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            let {
                enabled: t
            } = e, n = tn({
                hardwareH264: t
            });
            eI.eachConnection(e => e.setHardwareH264(n.hardwareH264))
        },
        MEDIA_ENGINE_SET_AV1: function(e) {
            let {
                enabled: t
            } = e, n = tn({
                av1Enabled: t
            });
            eI.setAv1Enabled(n.av1Enabled)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = R.default.isEnabled();
            if (t === ef.AppStates.BACKGROUND && ew && !n) eG = !0, e9(!1);
            else {
                if (t !== ef.AppStates.ACTIVE || !eG) return !1;
                eG = !1, e9(!0)
            }
            return !0
        },
        SET_CHANNEL_BITRATE: function(e) {
            eI.eachConnection(t => t.setBitRate(e.bitrate))
        },
        SET_VAD_PERMISSION: function(e) {
            let {
                hasPermission: t
            } = e, n = !t;
            if (n === eb) return !1;
            eb = n, eI.eachConnection(e6)
        },
        SET_NATIVE_PERMISSION: function(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = t === eh.NativePermissionStates.ACCEPTED;
            switch (n) {
                case eh.NativePermissionTypes.AUDIO:
                    eX = !0, eI.eachConnection(e6);
                    break;
                case eh.NativePermissionTypes.CAMERA:
                    !i && ew && e9(!1);
                    break;
                default:
                    return !1
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            eI.eachConnection(t => t.applyVideoQualityMode(e.mode))
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
            let {
                enabled: t
            } = e, n = tn({
                aecDumpEnabled: t
            });
            eI.setAecDump(n.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!ew && null == r || null != ed.default.getRTCConnectionId()) return !1;
            e9(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!ez && (ez = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            eI.applyMediaFilterSettings(t).finally(() => {
                eq = !1, i.emitChange()
            })
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
            eq = !0
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
            eq = !1
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                local: n,
                wasSaved: i
            } = e;
            if (!(0, q.shouldReadWriteAudioSettings)() || t !== eE.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            to(!0)
        },
        CLIPS_INIT: function(e) {
            let {
                sourceId: t,
                applicationName: n,
                quality: s
            } = e, {
                enableDecoupledGameClipping: r
            } = L.default.getCurrentConfig({
                location: "handleClipsInit"
            }, {
                autoTrackExposure: !0
            }), o = C.default.getSettings().decoupledClipsEnabled;
            if (!r || !o || null == v.default) return;
            let l = null,
                u = null,
                d = J.default.getPidFromDesktopSource(t);
            ({
                soundshareId: l,
                soundshareSession: u
            } = tl(d));
            let c = {
                desktopSource: {
                    id: t,
                    sourcePid: d,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: s
            };
            null != a && a.desktopSource.id !== c.desktopSource.id && (eI.setClipsSource(null), (0, ee.isWindows)() && null != a.desktopSource.soundshareId && T.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tu(l, u), a = c;
            let {
                useQuartzCapturer: f
            } = F.default.getCurrentConfig({
                location: "f627ab_11"
            }, {
                autoTrackExposure: !1
            }), {
                hdrCaptureMode: _
            } = k.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), h = e2().videoHook, E = eI.supports(eg.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                videoHookStaleFrameTimeoutMs: g
            } = H.default.getConfig(E && h, "e225cfdf5_vh2", !1), {
                graphicsCaptureStaleFrameTimeoutMs: m
            } = W.default.getConfig(E && e5(), "e225cfdf5_wgc2", !1);
            eI.setClipsSource({
                desktopDescription: {
                    id: a.desktopSource.id,
                    soundshareId: a.desktopSource.soundshareId,
                    useVideoHook: h,
                    useGraphicsCapture: e5(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: f,
                    allowScreenCaptureKit: te(!1),
                    videoHookStaleFrameTimeoutMs: g,
                    graphicsCaptureStaleFrameTimeoutMs: m,
                    hdrCaptureMode: _
                },
                quality: s,
                applicationName: n
            })
        },
        CLIPS_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            !1 === t.decoupledClipsEnabled && (a = null, eI.setClipsSource(null)), !1 === t.decoupledClipsEnabled && (a = null, eI.setClipsSource(null))
        }
    })
}