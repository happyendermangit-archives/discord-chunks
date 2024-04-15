function(e, t, n) {
    "use strict";
    let i, r, s, a;
    n.r(t), n("47120"), n("724458"), n("773603"), n("653041"), n("337869");
    var o, l, u, d = n("512722"),
        _ = n.n(d),
        c = n("392711"),
        E = n.n(c),
        I = n("553813"),
        T = n.n(I),
        f = n("442837"),
        S = n("46973"),
        A = n("433517"),
        h = n("846519"),
        m = n("570140"),
        N = n("579806"),
        O = n("887278"),
        p = n("565885"),
        R = n("435064"),
        C = n("779618"),
        g = n("710845"),
        L = n("811660"),
        D = n("646047"),
        v = n("594190"),
        M = n("502286"),
        y = n("248062"),
        P = n("227196"),
        U = n("294473"),
        b = n("836157"),
        G = n("166884"),
        w = n("924371"),
        B = n("894180"),
        k = n("86614"),
        F = n("498600"),
        V = n("631610"),
        x = n("951958"),
        H = n("529558"),
        Y = n("263853"),
        j = n("636458"),
        W = n("441167"),
        K = n("904272"),
        z = n("338336"),
        X = n("751571"),
        Q = n("815016"),
        q = n("725380"),
        Z = n("581883"),
        J = n("626135"),
        $ = n("12647"),
        ee = n("70956"),
        et = n("358085"),
        en = n("960048"),
        ei = n("998502"),
        er = n("13140"),
        es = n("314897"),
        ea = n("967368"),
        eo = n("463395"),
        el = n("592125"),
        eu = n("828695"),
        ed = n("858340"),
        e_ = n("19780"),
        ec = n("631768"),
        eE = n("981631"),
        eI = n("70722"),
        eT = n("761274"),
        ef = n("526761"),
        eS = n("65154"),
        eA = n("689938");

    function eh(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let em = new g.default("MediaEngineStore");
    (u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE";
    let eN = "MediaEngineStore",
        eO = {
            left: 1,
            right: 1
        };

    function ep() {
        return {
            mode: eE.InputModes.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -60,
                autoThreshold: et.isPlatformEmbedded || __OVERLAY__,
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
            inputVolume: eS.DEFAULT_VOLUME,
            outputVolume: eS.DEFAULT_VOLUME,
            inputDeviceId: eS.DEFAULT_DEVICE_ID,
            outputDeviceId: eS.DEFAULT_DEVICE_ID,
            videoDeviceId: eS.DEFAULT_DEVICE_ID,
            qos: !1,
            qosMigrated: !1,
            videoHook: eR.supports(eS.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            av1Enabled: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        }
    }
    let eR = (0, S.initializeMediaEngine)((0, S.determineMediaEngine)()),
        eC = {},
        eg = new Set([eS.MediaEngineContextTypes.DEFAULT]),
        eL = eR.supports(eS.Features.AUTO_ENABLE),
        eD = !1,
        ev = eS.MediaEngineContextTypes.STREAM,
        eM = {
            [eS.DEFAULT_DEVICE_ID]: to(eA.default.Messages.NO_INPUT_DEVICES)
        },
        ey = {
            [eS.DEFAULT_DEVICE_ID]: to(eA.default.Messages.NO_OUTPUT_DEVICES)
        },
        eP = {
            [eS.DEFAULT_DEVICE_ID]: to(eA.default.Messages.NO_VIDEO_DEVICES)
        },
        eU = !1,
        eb = !1,
        eG = !1,
        ew = !1,
        eB = !1,
        ek = eS.DISABLED_DEVICE_ID,
        eF = !1,
        eV = !1,
        ex = !1,
        eH = !1,
        eY = null,
        ej = !1,
        eW = !1,
        eK = !1,
        ez = !1,
        eX = !1,
        eQ = null,
        eq = !1,
        eZ = !1,
        eJ = !1;
    X.default.hasPermission(eT.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), X.default.hasPermission(eT.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let e$ = new Set,
        e0 = !1,
        e1 = !1,
        e2 = {},
        e3 = {},
        e4 = 5 * ee.default.Millis.SECOND;

    function e6() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT,
            t = eC[e];
        return null == t && (t = ep(), eC[e] = t), t
    }

    function e7(e) {
        let t = e6(e.context);
        e.setInputMode(t.mode, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                return eX || !1
            }(),
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: t.modeOptions.delay
        })
    }

    function e5(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.DEFAULT_VOLUME;
        return E().clamp(e, 0, t)
    }

    function e8(e) {
        let t = e6(e.context),
            i = !eL || t.mute || t.deaf;
        e.context === eS.MediaEngineContextTypes.DEFAULT ? i = i || eU || eb || eG || !X.default.didHavePermission(eT.NativePermissionTypes.AUDIO) : e.context === eS.MediaEngineContextTypes.STREAM && (i = !0), e.setSelfMute(i), e.setSelfDeaf(t.deaf),
            function(e) {
                Promise.resolve().then(n.bind(n, "44744")).then(t => {
                    let {
                        default: n
                    } = t;
                    n.updateNativeMute(e)
                })
            }(e.context)
    }

    function e9() {
        var e, t, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            o = s;
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, et.isWindows)() && O.cancelAttachToProcess(o.desktopSource.soundshareId), eR.setGoLiveSource(null, ev)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eR.setGoLiveSource(null, ev), (eB || r) && (ek = (eB = r) ? tu(eP, e6().videoDeviceId) : eS.DISABLED_DEVICE_ID, eR.setVideoInputDevice(ek)), s = a, null != a) {
            let e = {
                resolution: a.quality.resolution,
                frameRate: a.quality.frameRate
            };
            if (null != a.desktopSource) {
                let {
                    hdrCaptureMode: t
                } = F.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), n = e6().videoHook, r = eR.supports(eS.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                    videoHookStaleFrameTimeoutMs: s
                } = Y.default.getConfig(r && n, "e225cfdf5_vh1", !0), {
                    graphicsCaptureStaleFrameTimeoutMs: o
                } = K.default.getConfig(r && tn(), "e225cfdf5_wgc2", !0);
                eR.setGoLiveSource({
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tn(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: ti(),
                        videoHookStaleFrameTimeoutMs: s,
                        graphicsCaptureStaleFrameTimeoutMs: o,
                        hdrCaptureMode: t
                    },
                    quality: e
                }, ev)
            }
            null != a.cameraSource && eR.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: a.cameraSource.audioDeviceGuid
                },
                quality: e
            }, ev)
        }
    }

    function te(e, t, n, i) {
        var r;
        let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
        null == e3[s] && (e3[s] = new Set);
        let a = null != t && !e3[s].has(t);
        a && e3[s].add(t), (null == t || a) && J.default.track(eE.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, M.default)(e)
        })
    }

    function tt(e) {
        let t = e6(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(eo.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, et.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function tn() {
        return (0, et.isWindows)() && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eI.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function ti() {
        return (0, et.isMac)() && eR.supports(eS.Features.SCREEN_CAPTURE_KIT) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eI.DARWIN_SCKIT_VERSION)
    }
    let tr = new class {
        start() {
            !this.started && (this.started = !0, eR.on(S.MediaEngineEvent.Silence, this.handleSilence))
        }
        stop() {
            this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eR.removeListener(S.MediaEngineEvent.Silence, this.handleSilence), m.default.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null
            }))
        }
        update() {
            let e = e6();
            !ej && e_.default.getState() === eE.RTCConnectionStates.RTC_CONNECTED && e.mode === eE.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
        }
        reset() {
            this.stop(), this.update()
        }
        constructor() {
            eh(this, "stateChangeTimeout", void 0), eh(this, "noVoiceTimeout", 5e3), eh(this, "voiceTimeout", 1500), eh(this, "started", !1), eh(this, "handleSilence", e => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
                    this.stateChangeTimeout = null, this.started && (m.default.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: t
                    }), e && (eW = !0))
                }, t ? this.voiceTimeout : this.noVoiceTimeout)
            })
        }
    };

    function ts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e6(t);
        return Object.assign(i, e), !__OVERLAY__ && n && A.Storage.set(eN, eC), i
    }

    function ta() {
        !eL && eR.enable().then(() => m.default.dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: !0,
            unmute: !1
        }))
    }

    function to(e) {
        return {
            id: eS.DEFAULT_DEVICE_ID,
            index: 0,
            name: e,
            disabled: !0
        }
    }

    function tl(e, t) {
        if (0 === e.length) {
            let e = to(t);
            return {
                [e.id]: e
            }
        }
        return E()(e).map(e => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1
        })).keyBy("id").value()
    }

    function tu(e, t) {
        var n;
        let i = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
        return null != i ? i.id : t
    }

    function td() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = null !== (e = Z.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let r = e === ef.ProtoAudioSettingsContextTypes.USER ? eS.MediaEngineContextTypes.DEFAULT : eS.MediaEngineContextTypes.STREAM,
                s = r === eS.MediaEngineContextTypes.STREAM ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
                a = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e6(r);
            for (let [e, t] of Object.entries(a)) null == (0, q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eR.eachConnection(n => {
                n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
            }, r));
            if (n)
                for (let e of new Set([...Object.keys(o), ...Object.keys(l)])) null == a[e] && (delete o[e], delete l[e], eR.eachConnection(t => {
                    t.setLocalVolume(e, s), t.setLocalMute(e, !1)
                }, r));
            ts({
                localMutes: o,
                localVolumes: l
            }, r)
        }
    }

    function t_(e) {
        if (null == i) return em.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
            soundshareId: null,
            soundshareSession: ""
        };
        {
            let t = i.getExperimentalSoundshare() ? e : $.default.getAudioPid(e),
                n = "";
            return null != t && (n = $.default.generateSessionFromPid(t)), {
                soundshareId: t,
                soundshareSession: n
            }
        }
    }

    function tc(e, t) {
        (0, et.isWindows)() && O.attachToProcess(e, {
            soundshare_session: t
        }).then(t => {
            null != t && !v.default.shouldContinueWithoutElevatedProcessForPID(e) && m.default.wait(() => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                    errorMessage: t
                })
            })
        })
    }

    function tE() {
        let e = eS.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e6(e);
        for (let [e, n] of Object.entries(t)) n === eE.VideoToggleState.AUTO_PROBING && delete t[e];
        ts({
            videoToggleStateMap: t
        }, e, !1)
    }

    function tI(e) {
        let t = e6();
        J.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function tT() {
        let e = e6(),
            t = e.inputDeviceId,
            n = eo.default.hasEchoCancellation(t) || e.echoCancellation,
            i = eo.default.hasNoiseSuppression(t) || e.noiseSuppression,
            r = eo.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            s = e.noiseCancellation;
        eR.setLoopback(e1, {
            echoCancellation: n,
            noiseSuppression: i,
            automaticGainControl: r,
            noiseCancellation: s
        })
    }

    function tf() {
        return eX || !1
    }
    async function tS() {
        try {
            await ei.default.ensureModule("discord_krisp"), ei.default.requireModule("discord_krisp"), eX = !0, i.emitChange()
        } catch (t) {
            em.warn("Failed to load Krisp module: ".concat(t.message)), en.default.captureException(t);
            let e = eS.NoiseCancellerError.INITIALIZED;
            if (t.message.includes(": ")) {
                let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                e = isNaN(n) || 0 === n ? eS.NoiseCancellerError.INITIALIZED : n
            }
            J.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), ts({
                noiseCancellation: !1
            })
        } finally {
            ez = !1
        }
    }

    function tA(e) {
        let {
            section: t
        } = e;
        return t === eE.UserSettingsSections.VOICE && ta(), !1
    }
    class th extends(l = f.default.Store) {
        initialize() {
            eR.on(S.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = x.default.getCurrentConfig({
                    location: "f627ab_3"
                }, {
                    autoTrackExposure: !1
                });
                t > 0 && eR.setMaxSyncDelayOverride(t), e7(e), e8(e), tt(e);
                let n = e6();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                let {
                    useExperimentalRateControl: r
                } = j.default.getCurrentConfig({
                    location: "f627ab_4"
                }, {
                    autoTrackExposure: !1
                });
                r && e.setExperimentFlag(eS.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                let {
                    muteBeforeProcessing: a,
                    pttBeforeProcessing: o,
                    skipEncode: l
                } = U.default.getCurrentConfig({
                    location: "setupMediaEngine"
                }, {
                    autoTrackExposure: !0
                });
                a && e.setExperimentFlag(eS.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), o && e.setExperimentFlag(eS.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eS.ExperimentFlags.SKIP_ENCODE, !0);
                {
                    (0, et.isWindows)() && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = k.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: n
                    } = B.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    n && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: i
                    } = w.default.getCurrentConfig({
                        location: "f627ab_8"
                    }, {
                        autoTrackExposure: !0
                    });
                    i && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
                }
                let {
                    signalAV1Support: u
                } = y.default.getCurrentConfig({
                    location: "f627ab_10"
                }, {
                    autoTrackExposure: !0
                });
                u && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                let {
                    allowSettingFullbandAndroid: d
                } = V.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (d && eR.setHasFullbandPerformance((0, L.hasPerformanceForKrispFullband)()), (0, C.default)(i)) {
                    let t = R.default.getSettings();
                    e.setExperimentFlag(eS.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = W.default.getCurrentConfig({
                        location: "f627ab_15"
                    }, {
                        autoTrackExposure: !1
                    });
                    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eS.VIEWERSIDE_CLIP_KFI_MS);
                    let {
                        allowQualityDecoupling: i
                    } = p.default.getCurrentConfig({
                        location: "MediaEngineStore_setupMediaEngine"
                    }, {
                        autoTrackExposure: !0
                    });
                    e.setQualityDecoupling(i)
                }
                for (let t of (n = e6(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== es.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                for (let t of Object.keys(n.localVolumes)) t !== es.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right)
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(S.BaseConnectionEvent.Speaking, (t, n) => {
                    m.default.dispatch({
                        type: "SPEAKING",
                        context: e.context,
                        userId: t,
                        speakingFlags: n
                    })
                }), e.context === eS.MediaEngineContextTypes.DEFAULT && (eV = !1, e.on(S.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    eV = !0, i.emitChange()
                })), e.on(S.BaseConnectionEvent.DesktopSourceEnd, () => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(S.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == s ? void 0 : s.desktopSource) != null && J.default.track(eE.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, M.default)(null == s ? void 0 : s.desktopSource))
                }), e.on(S.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    te(null == s ? void 0 : s.desktopSource, t, n, i)
                }), e.on(S.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == s ? void 0 : s.desktopSource) != null && (J.default.track(eE.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, M.default)(null == s ? void 0 : s.desktopSource)), null != ed.default.getHookError(eE.MediaEngineHookTypes.SOUND) && m.default.wait(() => m.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let _ = new h.Timeout;
                e.on(S.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            _.start(e4, () => {
                                m.default.dispatch({
                                    type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                    errorMessage: "Sound Hook Failed"
                                })
                            });
                            break;
                        case "soundshare_recv_failed":
                            let t = e.reason,
                                n = e.code,
                                i = e.retry;
                            (null == s ? void 0 : s.desktopSource) != null && (te(null == s ? void 0 : s.desktopSource, n, t, i), !i && (_.stop(), m.default.wait(() => m.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                errorMessage: t,
                                errorCode: n
                            }))));
                            break;
                        case "soundshare_state_transition":
                            4 === e.newState && (_.stop(), m.default.wait(() => m.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                            })))
                    }
                }), e.on(S.BaseConnectionEvent.InteractionRequired, e => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e
                    })
                }), e.on(S.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, a) => {
                    (null == s ? void 0 : s.desktopSource) != null && J.default.track(eE.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: r,
                        reinitialization: a,
                        ...(0, M.default)(null == s ? void 0 : s.desktopSource)
                    })
                }), e.on(S.BaseConnectionEvent.NoiseCancellationError, e => {
                    em.warn("noisecancellererror event: ".concat(e)), eq = !0, J.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), m.default.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: !0
                    }), m.default.dispatch({
                        type: "AUDIO_SET_NOISE_CANCELLATION",
                        enabled: !1
                    }), m.default.dispatch({
                        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                        code: e
                    })
                }), e.on(S.BaseConnectionEvent.VoiceActivityDetectorError, e => {
                    em.warn("voiceactivitydetectorerror event: ".concat(e)), J.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), m.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eS.MediaEngineContextTypes.DEFAULT,
                        mode: eE.InputModes.VOICE_ACTIVITY,
                        options: {
                            ...e6(eS.MediaEngineContextTypes.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }), m.default.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e
                    })
                }), e.on(S.BaseConnectionEvent.VideoState, t => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                        videoState: t,
                        context: e.context
                    })
                }), e.on(S.BaseConnectionEvent.Destroy, () => {
                    _.stop()
                }), e.setBitRate(ea.default.bitrate), e.applyVideoQualityMode(ec.default.mode)
            }), eR.on(S.MediaEngineEvent.DeviceChange, (e, t, n) => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                })
            }), eR.on(S.MediaEngineEvent.VolumeChange, (e, t) => {
                m.default.dispatch({
                    type: "AUDIO_VOLUME_CHANGE",
                    inputVolume: e,
                    outputVolume: t
                })
            }), eR.on(S.MediaEngineEvent.DesktopSourceEnd, () => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: null
                })
            }), eR.on(S.MediaEngineEvent.AudioPermission, e => {
                eJ = !0, m.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e
                })
            }), eR.on(S.MediaEngineEvent.VideoPermission, e => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "video",
                    granted: e
                })
            }), eR.on(S.MediaEngineEvent.WatchdogTimeout, async () => {
                let e;
                try {
                    await $.default.submitLiveCrashReport({
                        message: {
                            message: "Voice Watchdog Timeout"
                        }
                    })
                } catch (t) {
                    "number" == typeof t.status && (e = t.status)
                }
                em.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), J.default.track(eE.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e
                })
            }), eR.on(S.MediaEngineEvent.VideoInputInitialized, e => {
                J.default.track(eE.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ee.default.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                })
            }), eR.on(S.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                m.default.dispatch({
                    type: "CLIPS_RESTART"
                })
            }), eR.on(S.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                m.default.wait(() => {
                    m.default.dispatch({
                        type: "CLIPS_INIT_FAILURE",
                        errMsg: e,
                        applicationName: t
                    })
                })
            }), eR.on(S.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                var n, i;
                (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && O.cancelAttachToProcess(t), a = null)
            }), tr.reset(), ! function() {
                var e;
                let t = A.Storage.get("audio");
                null != t && (A.Storage.set(eN, {
                        [eS.MediaEngineContextTypes.DEFAULT]: t
                    }), A.Storage.remove("audio")), eC = null !== (e = A.Storage.get(eN)) && void 0 !== e ? e : {}, E().each(eC, e => {
                        if (E().defaultsDeep(e, ep()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, er.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, et.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e6();
                        eR.setAudioInputDevice(e.inputDeviceId), eR.setAudioOutputDevice(e.outputDeviceId), e9(), eR.setInputVolume(e.inputVolume), eR.setOutputVolume(e.outputVolume), eR.setH264Enabled(e.openH264), eR.setAv1Enabled(e.av1Enabled), eR.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, et.isDesktop)() || __OVERLAY__ || ez || eX ? (0, et.isWeb)() && eR.supports(eS.Features.NOISE_CANCELLATION) ? (eX = !0, i.emitChange()) : (0, et.isWeb)() && ts({
                noiseCancellation: !1
            }) : (ez = !0, tS()), tE(), e2 = {
                [eS.Features.VIDEO]: eR.supports(eS.Features.VIDEO),
                [eS.Features.DESKTOP_CAPTURE]: eR.supports(eS.Features.DESKTOP_CAPTURE),
                [eS.Features.HYBRID_VIDEO]: eR.supports(eS.Features.HYBRID_VIDEO)
            }, this.waitFor(es.default, eo.default, el.default, ed.default, e_.default, v.default, X.default.storage, Z.default, eu.default, R.default)
        }
        supports(e) {
            return eR.supports(e)
        }
        supportsInApp(e) {
            return e2[e] || eR.supports(e)
        }
        isSupported() {
            return eR.supported()
        }
        isExperimentalEncodersSupported() {
            return eR.supports(eS.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eR.supports(eS.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return eX || !1
        }
        isNoiseCancellationError() {
            return eq
        }
        isAutomaticGainControlSupported() {
            return eR.supports(eS.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return eX || !1
        }
        isAecDumpSupported() {
            return eR.supports(eS.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eR.supports(eS.Features.VIDEO) && eR.supports(eS.Features.SIMULCAST)
        }
        getAecDump() {
            return e6().aecDumpEnabled
        }
        getMediaEngine() {
            return eR
        }
        getVideoComponent() {
            return eR.supports(eS.Features.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Video
        }
        getCameraComponent() {
            return eR.supports(eS.Features.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Camera
        }
        isEnabled() {
            return eL
        }
        isMute() {
            return this.isSelfMute() || eU
        }
        isDeaf() {
            return this.isSelfDeaf() || ew
        }
        hasContext(e) {
            return null != eC[e]
        }
        isSelfMutedTemporarily() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e === eS.MediaEngineContextTypes.DEFAULT && eb
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e6(e).mute || !X.default.didHavePermission(eT.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eS.MediaEngineContextTypes.DEFAULT && eG
        }
        shouldSkipMuteUnmuteSound() {
            let {
                airpodsMuteSupported: e
            } = P.default.getCurrentConfig({
                location: "shouldSkipMuteUnmuteSound"
            }, {
                autoTrackExposure: !0
            });
            return !!e && eF
        }
        notifyMuteUnmuteSoundWasSkipped() {
            eF = !1
        }
        isHardwareMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return !this.isSupported() || e6(e).deaf
        }
        isVideoEnabled() {
            return eB && eH
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.STREAM;
            return ev === e && null != s
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.STREAM;
            return ev === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
            return e !== es.default.getId() && (e6(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eR.supports(eS.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e6(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e6(n).videoToggleStateMap[e]) && void 0 !== t ? t : eE.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
            return t === eS.MediaEngineContextTypes.DEFAULT && e$.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e === eS.MediaEngineContextTypes.DEFAULT && e$.size > 0
        }
        isMediaFilterSettingLoading() {
            return eZ
        }
        isNativeAudioPermissionReady() {
            return eJ
        }
        getGoLiveSource() {
            return s
        }
        getGoLiveContext() {
            return ev
        }
        getLocalPan(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
                n = e6(t).localPans[e];
            return null != n ? n : eO
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
                n = t === eS.MediaEngineContextTypes.STREAM ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
                i = e6(t).localVolumes[e];
            return null != i ? i : n
        }
        getInputVolume() {
            return e6().inputVolume
        }
        getOutputVolume() {
            return e6().outputVolume
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e6(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e6(e).modeOptions
        }
        getShortcuts() {
            let e = {};
            return E().each(eC, (t, n) => {
                let {
                    mode: i,
                    modeOptions: {
                        shortcut: r
                    }
                } = t;
                i === eE.InputModes.PUSH_TO_TALK && eg.has(n) && (e[n] = r)
            }), e
        }
        getInputDeviceId() {
            return tu(eM, e6().inputDeviceId)
        }
        getOutputDeviceId() {
            return tu(ey, e6().outputDeviceId)
        }
        getVideoDeviceId() {
            return tu(eP, e6().videoDeviceId)
        }
        getInputDevices() {
            return eM
        }
        getOutputDevices() {
            return ey
        }
        getVideoDevices() {
            return eP
        }
        getEchoCancellation() {
            let e = e6();
            return eo.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e6().h265Enabled
        }
        getLoopback() {
            return eR.getLoopback()
        }
        getNoiseSuppression() {
            let e = e6();
            return eo.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e6();
            return eo.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
        }
        getNoiseCancellation() {
            return e6().noiseCancellation
        }
        getExperimentalEncoders() {
            return e6().experimentalEncoders
        }
        getHardwareH264() {
            return e6().hardwareH264
        }
        getEnableSilenceWarning() {
            return e6().silenceWarning
        }
        getDebugLogging() {
            return eR.getDebugLogging()
        }
        getQoS() {
            return e6().qos
        }
        getAttenuation() {
            return e6().attenuation
        }
        getAttenuateWhileSpeakingSelf() {
            return e6().attenuateWhileSpeakingSelf
        }
        getAttenuateWhileSpeakingOthers() {
            return e6().attenuateWhileSpeakingOthers
        }
        getAudioSubsystem() {
            return eR.getAudioSubsystem()
        }
        getSettings() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e6(e)
        }
        getState() {
            return {
                settingsByContext: eC,
                inputDevices: eM,
                outputDevices: ey,
                appSupported: e2,
                krispModuleLoaded: eX,
                goLiveSource: s,
                goLiveContext: ev
            }
        }
        getInputDetected() {
            return eY
        }
        getNoInputDetectedNotice() {
            return eW
        }
        getPacketDelay() {
            return et.isPlatformEmbedded || this.getMode() !== eE.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
        }
        setCanHavePriority(e, t) {
            eR.eachConnection(n => n.setCanHavePriority(e, t))
        }
        isInteractionRequired() {
            return eD
        }
        getVideoHook() {
            return e6().videoHook
        }
        supportsVideoHook() {
            return eR.supports(eS.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e6().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eR.supports(eS.Features.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eI.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e6().openH264
        }
        getAv1Enabled() {
            return e6().av1Enabled
        }
        getEverSpeakingWhileMuted() {
            return eV
        }
        supportsScreenSoundshare() {
            return (0, et.isMac)() && eR.supports(eS.Features.SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eI.DARWIN_SCKIT_AUDIO_VERSION) && ti() || (0, et.isWindows)() && eR.supports(eS.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT,
                n = this.supports(eS.Features.VIDEO) ? [{
                    rid: "100",
                    type: t === eS.MediaEngineContextTypes.DEFAULT ? eS.MediaTypes.VIDEO : eS.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            if (this.isSimulcastSupported() && (t === eS.MediaEngineContextTypes.DEFAULT || (e = !1, G.default.getCurrentConfig({
                    location: "GoLiveSimulcastEnabled"
                }, {
                    autoTrackExposure: e
                }).enableGoLiveSimulcast))) n.push({
                rid: "50",
                type: eS.MediaTypes.VIDEO,
                quality: 50
            });
            return n
        }
        getSupportedSecureFramesProtocolVersion(e) {
            var t;
            let n = eR.getSupportedSecureFramesProtocolVersion(),
                i = H.SecureFramesUserExperiment.getCurrentConfig({
                    location: "MediaEngineStore"
                }),
                r = null != e ? H.SecureFramesGuildExperiment.getCurrentConfig({
                    guildId: e,
                    location: "MediaEngineStore"
                }) : null,
                s = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
                a = i.canSupportMls || (null == r ? void 0 : r.canSupportMls),
                o = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0);
            return s && n % 100 >= o ? a ? n : n % 100 : 0
        }
        hasClipsSource() {
            return null != a
        }
    }
    eh(th, "displayName", "MediaEngineStore"), i = new th(m.default, {
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n,
                currentVoiceChannelId: i,
                video: r
            } = e;
            if (i !== n && e9(r, null), null != t || null == n) {
                eK = !1;
                return
            }
            if (eK) return;
            eK = !0;
            let s = e6();
            (s.mute || s.deaf) && (ts({
                deaf: !1,
                mute: !1
            }), eR.eachConnection(e8))
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => r === t.sessionId ? (eU = t.mute || t.suppress, ew = t.deaf, eR.eachConnection(e8), e9(!(null != t.guildId && null != t.channelId && null != eQ && eQ !== t.channelId) && eB), eQ = t.channelId, !0) : (!__OVERLAY__ && t.userId === es.default.getId() && null == e_.default.getChannelId() && e9(!1, null), e), !1)
        },
        CONNECTION_OPEN: function(e) {
            r = e.sessionId, eU = !1, ew = !1, (0, Q.shouldReadWriteAudioSettings)() && td()
        },
        CONNECTION_CLOSED: function() {
            r = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case eE.RTCConnectionStates.CONNECTING:
                    ta();
                    break;
                case eE.RTCConnectionStates.RTC_CONNECTING:
                    ej = !1, eW = !1;
                    break;
                case eE.RTCConnectionStates.RTC_CONNECTED:
                    e9();
                    break;
                case eE.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === e$.size) return;
                        let e = eS.MediaEngineContextTypes.DEFAULT,
                            {
                                disabledLocalVideos: t
                            } = e6(e);
                        e$.forEach(n => {
                            _()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eR.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                        }), e$.clear(), ts({
                            disabledLocalVideos: t
                        }, e, !1)
                    })(), tE()
            }
            tr.update()
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
            let {
                mute: t
            } = e;
            eb = t, eR.eachConnection(e8)
        },
        AUDIO_TOGGLE_SELF_MUTE: function(e) {
            let {
                context: t,
                skipMuteUnmuteSoundEffect: n
            } = e, {
                mute: i,
                deaf: r
            } = e6(t);
            if (t === eS.MediaEngineContextTypes.DEFAULT && (X.default.requestPermission(eT.NativePermissionTypes.AUDIO), eG)) return !1;
            !(i = !r && !i) && (r = !1), n && (eF = !0), ts({
                mute: i,
                deaf: r
            }, t), eR.eachConnection(e8)
        },
        AUDIO_SET_SELF_MUTE: function(e) {
            let {
                context: t,
                mute: n
            } = e;
            ts({
                mute: n
            }, t), eR.eachConnection(e8)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            let {
                context: t
            } = e;
            ts({
                deaf: !e6(t).deaf
            }, t), eR.eachConnection(e8)
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
            let {
                context: t,
                userId: n
            } = e;
            if (n === es.default.getId()) return;
            let {
                localMutes: i
            } = e6(t);
            i[n] ? delete i[n] : i[n] = !0, ts({
                localMutes: i
            }, t), eR.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
            var t, n, i, r, s, a, o;
            let {
                context: l,
                userId: u,
                videoToggleState: d,
                persist: c,
                isAutomatic: E
            } = e;
            _()(!(c && E), "These are not allowed to both be true.");
            let I = d === eE.VideoToggleState.DISABLED,
                {
                    disabledLocalVideos: T
                } = e6(l),
                f = null !== (t = T[u]) && void 0 !== t && t,
                S = e$.has(u),
                A = d === eE.VideoToggleState.AUTO_ENABLED || d === eE.VideoToggleState.MANUAL_ENABLED;
            em.info("disableVideo=".concat(I, " currentlyDisabled=").concat(f, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(A)), _()(!(S && !f), "If you are auto-disabled, then you are also disabled.");
            let h = I !== f,
                m = l === eS.MediaEngineContextTypes.DEFAULT,
                N = E && h && m,
                O = c && h && m;
            em.info("changed=".concat(h, " isDefaultContext=").concat(m, " isUpdateCausedByVideoHealthManager=").concat(N, " isManualToggleByUser=").concat(O));
            let {
                videoToggleStateMap: p
            } = e6(l);
            if (p[u] === eE.VideoToggleState.AUTO_PROBING && d === eE.VideoToggleState.AUTO_ENABLED && (0, z.default)(u, I ? eS.VideoToggleReason.AUTO_DISABLE : eS.VideoToggleReason.AUTO_ENABLE, A), p[u] = d, ts({
                    videoToggleStateMap: p
                }, l, c), d === eE.VideoToggleState.AUTO_PROBING ? null === (n = e_.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = e_.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e0 && (em.info("isAutoDisableAllowed=".concat(e0, " - disabling VideoHealthManager")), null === (s = e_.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), N) {
                if (!I && !S || I && !e0) return;
                (0, z.default)(u, I ? eS.VideoToggleReason.AUTO_DISABLE : eS.VideoToggleReason.AUTO_ENABLE, A), I ? e$.add(u) : e$.delete(u)
            } else O && (S && !I ? (em.info("disallowing auto-disable for this session because of manual override by user"), e0 = !1, null === (o = e_.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, z.default)(u, eS.VideoToggleReason.MANUAL_REENABLE, A)) : (0, z.default)(u, I ? eS.VideoToggleReason.MANUAL_DISABLE : eS.VideoToggleReason.MANUAL_ENABLE, A));
            m && !I && e$.delete(u), I ? T[u] = !0 : delete T[u], ts({
                disabledLocalVideos: T
            }, l, c), eR.eachConnection(e => {
                var t;
                return e.setLocalVideoDisabled(u, null !== (t = T[u]) && void 0 !== t && t)
            }, l)
        },
        AUDIO_SET_LOCAL_VOLUME: function(e) {
            let {
                context: t,
                userId: n,
                volume: i
            } = e;
            if (n === es.default.getId()) return;
            let r = t === eS.MediaEngineContextTypes.STREAM ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
                {
                    localVolumes: s
                } = e6(t);
            i === r ? delete s[n] : s[n] = i, ts({
                localVolumes: s
            }, t), eR.eachConnection(e => e.setLocalVolume(n, i), t)
        },
        AUDIO_SET_LOCAL_PAN: function(e) {
            let {
                context: t,
                userId: n,
                left: i,
                right: r
            } = e, {
                localPans: s
            } = e6(t);
            s[n] = {
                left: i,
                right: r
            }, ts({
                localPans: s
            }, t), eR.eachConnection(e => e.setLocalPan(n, i, r), t)
        },
        AUDIO_SET_MODE: function(e) {
            let {
                context: t,
                mode: n,
                options: i
            } = e;
            ts({
                mode: n,
                modeOptions: i
            }, t), eR.eachConnection(e7), tr.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            ts({
                inputVolume: e5(t)
            }), eR.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            ts({
                outputVolume: t
            }), eR.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                inputDeviceId: t = tu(eM, t)
            }), eR.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                outputDeviceId: t = tu(ey, t)
            }), eR.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            let t = ts({
                echoCancellation: e.enabled
            });
            eR.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tT(), tI(e.location)
        },
        MEDIA_ENGINE_SET_H265: function(e) {
            let t = ts({
                h265Enabled: e.enabled
            });
            eR.setH265Enabled(t.h265Enabled)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            let {
                enabled: t
            } = e;
            return e1 = t, tT()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            let t = ts({
                noiseSuppression: e.enabled
            });
            eR.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tT(), tI(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            let t = ts({
                automaticGainControl: e.enabled
            });
            eR.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tT(), tI(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            let t = ts({
                noiseCancellation: e.enabled
            });
            eR.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tT(), tI(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            ts({
                silenceWarning: e.enabled
            }), tr.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eR.setDebugLogging(e.enabled)
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
            ts({
                videoHook: e.enabled
            })
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
            ts({
                experimentalSoundshare2: e.enabled
            })
        },
        AUDIO_SET_ATTENUATION: function(e) {
            let {
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            } = e, r = ts({
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            });
            eR.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
        },
        AUDIO_SET_QOS: function(e) {
            let {
                enabled: t
            } = e;
            ts({
                qos: t
            }), eR.eachConnection(e => e.setQoS(t))
        },
        MEDIA_ENGINE_DEVICES: function(e) {
            let {
                inputDevices: t,
                outputDevices: n,
                videoDevices: i
            } = e;
            ! function(e) {
                let t = eM;
                if (eM = tl(e, eA.default.Messages.NO_INPUT_DEVICES), !E().isEqual(eM, t)) {
                    let e = e6(),
                        t = tu(eM, e.inputDeviceId);
                    eR.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = ey;
                if (ey = tl(e, eA.default.Messages.NO_OUTPUT_DEVICES), !E().isEqual(ey, t)) {
                    let e = e6(),
                        t = tu(ey, e.outputDeviceId);
                    eR.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                eH = e.length > 0;
                let t = eP;
                if (eP = tl(e, eA.default.Messages.NO_VIDEO_DEVICES), eB && !E().isEqual(eP, t)) {
                    var n;
                    let e = void 0 !== eP[ek],
                        i = ek === eS.DEFAULT_DEVICE_ID && (null === (n = t[eS.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    e9(e || i)
                }
            }(i)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            let {
                inputVolume: t,
                outputVolume: n
            } = e;
            ts({
                inputVolume: e5(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            A.Storage.remove(eN), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            let {
                inputDetected: t
            } = e;
            eY = t, !ej && eY && (ej = !0, tr.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eR.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            eL = e.enabled, e.unmute && ts({
                mute: !1,
                deaf: !1
            }), eR.eachConnection(e8)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            X.default.requestPermission(eT.NativePermissionTypes.CAMERA), e9(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            let {
                kind: t,
                granted: n
            } = e;
            if (!n) switch (t) {
                case "audio":
                    eL = !1, eR.eachConnection(e8);
                    break;
                case "video":
                    e9(!1)
            }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            var t, n, i, r, a;
            let {
                settings: o
            } = e;
            if ((null == o ? void 0 : o.desktopSettings) != null) {
                ;
                let e = null,
                    i = null,
                    {
                        sourceId: r,
                        sound: l
                    } = o.desktopSettings,
                    u = null !== (t = o.context) && void 0 !== t ? t : eS.MediaEngineContextTypes.DEFAULT,
                    d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                        resolution: 720,
                        frameRate: 30
                    },
                    _ = $.default.getPidFromDesktopSource(r);
                et.isPlatformEmbedded && !0 === l && ({
                    soundshareId: e,
                    soundshareSession: i
                } = t_(_), null != e && tc(e, i)), (a = u) !== ev && (null != s && eR.setGoLiveSource(null, ev), ev = a), e9(u === eS.MediaEngineContextTypes.STREAM && eB, {
                    desktopSource: {
                        id: r,
                        sourcePid: _,
                        soundshareId: e,
                        soundshareSession: i
                    },
                    quality: {
                        resolution: d.resolution,
                        frameRate: d.frameRate
                    }
                })
            } else if ((null == o ? void 0 : o.cameraSettings) != null) {
                let e = null !== (i = o.context) && void 0 !== i ? i : eS.MediaEngineContextTypes.DEFAULT,
                    {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    } = o.cameraSettings,
                    s = e === eS.MediaEngineContextTypes.STREAM && eB,
                    a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
                        resolution: 720,
                        frameRate: 30
                    };
                e9(s, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: a.resolution,
                        frameRate: a.frameRate
                    }
                })
            } else e9(eB, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                videoDeviceId: t = tu(eP, t)
            }), e9()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            let t = ts({
                experimentalEncoders: e.enabled
            });
            eR.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return eD !== e.required && (eD = e.required, !e.required && eR.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: tA,
        USER_SETTINGS_MODAL_SET_SECTION: tA,
        CERTIFIED_DEVICES_SET: function() {
            return eR.eachConnection(tt), !1
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            eg.add(t.id)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            eg.delete(t.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                mediaEngineState: t
            } = e;
            eC = t.settingsByContext, eM = t.inputDevices, ey = t.outputDevices, e2 = t.appSupported, eX = t.krispModuleLoaded, ev = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                openH264: t
            });
            eR.setH264Enabled(n.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                hardwareH264: t
            });
            eR.eachConnection(e => e.setHardwareH264(n.hardwareH264))
        },
        MEDIA_ENGINE_SET_AV1: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                av1Enabled: t
            });
            eR.setAv1Enabled(n.av1Enabled)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = D.default.isEnabled();
            if (t === eE.AppStates.BACKGROUND && eB && !n) ex = !0, e9(!1);
            else {
                if (t !== eE.AppStates.ACTIVE || !ex) return !1;
                ex = !1, e9(!0)
            }
            return !0
        },
        SET_CHANNEL_BITRATE: function(e) {
            eR.eachConnection(t => t.setBitRate(e.bitrate))
        },
        SET_VAD_PERMISSION: function(e) {
            let {
                hasPermission: t
            } = e, n = !t;
            if (n === eG) return !1;
            eG = n, eR.eachConnection(e8)
        },
        SET_NATIVE_PERMISSION: function(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = t === eT.NativePermissionStates.ACCEPTED;
            switch (n) {
                case eT.NativePermissionTypes.AUDIO:
                    eJ = !0, eR.eachConnection(e8);
                    break;
                case eT.NativePermissionTypes.CAMERA:
                    !i && eB && e9(!1);
                    break;
                default:
                    return !1
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            eR.eachConnection(t => t.applyVideoQualityMode(e.mode))
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                aecDumpEnabled: t
            });
            eR.setAecDump(n.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!eB && null == s || null != e_.default.getRTCConnectionId()) return !1;
            e9(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!eq && (eq = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            eR.applyMediaFilterSettings(t).finally(() => {
                eZ = !1, i.emitChange()
            })
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
            eZ = !0
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
            eZ = !1
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                local: n,
                wasSaved: i
            } = e;
            if (!(0, Q.shouldReadWriteAudioSettings)() || t !== ef.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            td(!0)
        },
        CLIPS_INIT: function(e) {
            let {
                sourceId: t,
                applicationName: n,
                quality: r
            } = e, {
                enableDecoupledGameClipping: s
            } = b.default.getCurrentConfig({
                location: "handleClipsInit"
            }, {
                autoTrackExposure: !0
            }), o = R.default.getSettings().decoupledClipsEnabled;
            if (!s || !o || null == N.default) return;
            let l = null,
                u = null,
                d = $.default.getPidFromDesktopSource(t);
            ({
                soundshareId: l,
                soundshareSession: u
            } = t_(d));
            let _ = {
                desktopSource: {
                    id: t,
                    sourcePid: d,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: r
            };
            null != a && a.desktopSource.id !== _.desktopSource.id && (eR.setClipsSource(null), (0, et.isWindows)() && null != a.desktopSource.soundshareId && O.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tc(l, u), a = _;
            let {
                hdrCaptureMode: c
            } = F.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), E = e6().videoHook, I = eR.supports(eS.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                videoHookStaleFrameTimeoutMs: T
            } = Y.default.getConfig(I && E, "e225cfdf5_vh2", !1), {
                graphicsCaptureStaleFrameTimeoutMs: f
            } = K.default.getConfig(I && tn(), "e225cfdf5_wgc2", !1);
            eR.setClipsSource({
                desktopDescription: {
                    id: a.desktopSource.id,
                    soundshareId: a.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: tn(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: ti(),
                    videoHookStaleFrameTimeoutMs: T,
                    graphicsCaptureStaleFrameTimeoutMs: f,
                    hdrCaptureMode: c
                },
                quality: r,
                applicationName: n
            })
        },
        CLIPS_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            !1 === t.decoupledClipsEnabled && (a = null, eR.setClipsSource(null))
        }
    }), t.default = i
}