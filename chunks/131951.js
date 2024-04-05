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
        G = n("924371"),
        w = n("894180"),
        B = n("86614"),
        k = n("498600"),
        V = n("631610"),
        F = n("951958"),
        x = n("736036"),
        H = n("38849"),
        Y = n("529558"),
        j = n("263853"),
        W = n("636458"),
        K = n("441167"),
        z = n("904272"),
        X = n("338336"),
        Q = n("751571"),
        q = n("815016"),
        J = n("725380"),
        Z = n("581883"),
        $ = n("626135"),
        ee = n("12647"),
        et = n("70956"),
        en = n("358085"),
        ei = n("960048"),
        er = n("998502"),
        es = n("13140"),
        ea = n("314897"),
        eo = n("967368"),
        el = n("463395"),
        eu = n("592125"),
        ed = n("828695"),
        e_ = n("858340"),
        ec = n("19780"),
        eE = n("631768"),
        eI = n("981631"),
        eT = n("70722"),
        ef = n("761274"),
        eS = n("526761"),
        eA = n("65154"),
        eh = n("689938");

    function em(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let eN = new g.default("MediaEngineStore");
    (u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE";
    let eO = "MediaEngineStore",
        ep = {
            left: 1,
            right: 1
        };

    function eR() {
        return {
            mode: eI.InputModes.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -60,
                autoThreshold: en.isPlatformEmbedded || __OVERLAY__,
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
            inputVolume: eA.DEFAULT_VOLUME,
            outputVolume: eA.DEFAULT_VOLUME,
            inputDeviceId: eA.DEFAULT_DEVICE_ID,
            outputDeviceId: eA.DEFAULT_DEVICE_ID,
            videoDeviceId: eA.DEFAULT_DEVICE_ID,
            qos: !1,
            qosMigrated: !1,
            videoHook: eC.supports(eA.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            av1Enabled: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        }
    }
    let eC = (0, S.initializeMediaEngine)((0, S.determineMediaEngine)()),
        eg = {},
        eL = new Set([eA.MediaEngineContextTypes.DEFAULT]),
        eD = eC.supports(eA.Features.AUTO_ENABLE),
        ev = !1,
        eM = eA.MediaEngineContextTypes.STREAM,
        ey = {
            [eA.DEFAULT_DEVICE_ID]: tl(eh.default.Messages.NO_INPUT_DEVICES)
        },
        eP = {
            [eA.DEFAULT_DEVICE_ID]: tl(eh.default.Messages.NO_OUTPUT_DEVICES)
        },
        eU = {
            [eA.DEFAULT_DEVICE_ID]: tl(eh.default.Messages.NO_VIDEO_DEVICES)
        },
        eb = !1,
        eG = !1,
        ew = !1,
        eB = !1,
        ek = !1,
        eV = eA.DISABLED_DEVICE_ID,
        eF = !1,
        ex = !1,
        eH = !1,
        eY = !1,
        ej = null,
        eW = !1,
        eK = !1,
        ez = !1,
        eX = !1,
        eQ = !1,
        eq = null,
        eJ = !1,
        eZ = !1,
        e$ = !1;
    Q.default.hasPermission(ef.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), Q.default.hasPermission(ef.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let e0 = new Set,
        e1 = !1,
        e2 = !1,
        e3 = {},
        e4 = {},
        e7 = 5 * et.default.Millis.SECOND;

    function e6() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT,
            t = eg[e];
        return null == t && (t = eR(), eg[e] = t), t
    }

    function e5(e) {
        let t = e6(e.context);
        e.setInputMode(t.mode, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                return eQ || !1
            }(),
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: t.modeOptions.delay
        })
    }

    function e8(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.DEFAULT_VOLUME;
        return E().clamp(e, 0, t)
    }

    function e9(e) {
        let t = e6(e.context),
            n = !eD || t.mute || t.deaf;
        e.context === eA.MediaEngineContextTypes.DEFAULT ? n = n || eb || eG || ew || !Q.default.didHavePermission(ef.NativePermissionTypes.AUDIO) : e.context === eA.MediaEngineContextTypes.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
    }

    function te() {
        var e, t, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            o = s;
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, en.isWindows)() && O.cancelAttachToProcess(o.desktopSource.soundshareId), eC.setGoLiveSource(null, eM)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eC.setGoLiveSource(null, eM), (ek || r) && (eV = (ek = r) ? td(eU, e6().videoDeviceId) : eA.DISABLED_DEVICE_ID, eC.setVideoInputDevice(eV)), s = a, null != a) {
            let e = {
                resolution: a.quality.resolution,
                frameRate: a.quality.frameRate
            };
            if (null != a.desktopSource) {
                let {
                    useQuartzCapturer: t
                } = x.default.getCurrentConfig({
                    location: "f627ab_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    hdrCaptureMode: n
                } = k.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), r = e6().videoHook, s = eC.supports(eA.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                    videoHookStaleFrameTimeoutMs: o
                } = j.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
                    graphicsCaptureStaleFrameTimeoutMs: l
                } = z.default.getConfig(s && ti(), "e225cfdf5_wgc2", !0);
                eC.setGoLiveSource({
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: ti(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: t,
                        allowScreenCaptureKit: tr(!0),
                        videoHookStaleFrameTimeoutMs: o,
                        graphicsCaptureStaleFrameTimeoutMs: l,
                        hdrCaptureMode: n
                    },
                    quality: e
                }, eM)
            }
            null != a.cameraSource && eC.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: a.cameraSource.audioDeviceGuid
                },
                quality: e
            }, eM)
        }
    }

    function tt(e, t, n, i) {
        var r;
        let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
        null == e4[s] && (e4[s] = new Set);
        let a = null != t && !e4[s].has(t);
        a && e4[s].add(t), (null == t || a) && $.default.track(eI.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, M.default)(e)
        })
    }

    function tn(e) {
        let t = e6(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(el.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(el.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(el.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, en.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function ti() {
        return (0, en.isWindows)() && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eT.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function tr(e) {
        return !!((0, en.isMac)() && eC.supports(eA.Features.SCREEN_CAPTURE_KIT) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eT.DARWIN_SCKIT_VERSION)) && H.default.getCurrentConfig({
            location: "screenCaptureKitEnabled"
        }, {
            autoTrackExposure: e
        }).allowScreenCaptureKit
    }
    let ts = new class {
        start() {
            !this.started && (this.started = !0, eC.on(S.MediaEngineEvent.Silence, this.handleSilence))
        }
        stop() {
            this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eC.removeListener(S.MediaEngineEvent.Silence, this.handleSilence), m.default.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null
            }))
        }
        update() {
            let e = e6();
            !eW && ec.default.getState() === eI.RTCConnectionStates.RTC_CONNECTED && e.mode === eI.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
        }
        reset() {
            this.stop(), this.update()
        }
        constructor() {
            em(this, "stateChangeTimeout", void 0), em(this, "noVoiceTimeout", 5e3), em(this, "voiceTimeout", 1500), em(this, "started", !1), em(this, "handleSilence", e => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
                    this.stateChangeTimeout = null, this.started && (m.default.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: t
                    }), e && (eK = !0))
                }, t ? this.voiceTimeout : this.noVoiceTimeout)
            })
        }
    };

    function ta(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e6(t);
        return Object.assign(i, e), !__OVERLAY__ && n && A.Storage.set(eO, eg), i
    }

    function to() {
        !eD && eC.enable().then(() => m.default.dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: !0,
            unmute: !1
        }))
    }

    function tl(e) {
        return {
            id: eA.DEFAULT_DEVICE_ID,
            index: 0,
            name: e,
            disabled: !0
        }
    }

    function tu(e, t) {
        if (0 === e.length) {
            let e = tl(t);
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

    function td(e, t) {
        var n;
        let i = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
        return null != i ? i.id : t
    }

    function t_() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = null !== (e = Z.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let r = e === eS.ProtoAudioSettingsContextTypes.USER ? eA.MediaEngineContextTypes.DEFAULT : eA.MediaEngineContextTypes.STREAM,
                s = r === eA.MediaEngineContextTypes.STREAM ? eA.DEFAULT_STREAM_VOLUME : eA.DEFAULT_VOLUME,
                a = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e6(r);
            for (let [e, t] of Object.entries(a)) null == (0, J.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eC.eachConnection(n => {
                n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
            }, r));
            if (n)
                for (let e of new Set([...Object.keys(o), ...Object.keys(l)])) null == a[e] && (delete o[e], delete l[e], eC.eachConnection(t => {
                    t.setLocalVolume(e, s), t.setLocalMute(e, !1)
                }, r));
            ta({
                localMutes: o,
                localVolumes: l
            }, r)
        }
    }

    function tc(e) {
        if (null == i) return eN.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
            soundshareId: null,
            soundshareSession: ""
        };
        {
            let t = i.getExperimentalSoundshare() ? e : ee.default.getAudioPid(e),
                n = "";
            return null != t && (n = ee.default.generateSessionFromPid(t)), {
                soundshareId: t,
                soundshareSession: n
            }
        }
    }

    function tE(e, t) {
        (0, en.isWindows)() && O.attachToProcess(e, {
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

    function tI() {
        let e = eA.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e6(e);
        for (let [e, n] of Object.entries(t)) n === eI.VideoToggleState.AUTO_PROBING && delete t[e];
        ta({
            videoToggleStateMap: t
        }, e, !1)
    }

    function tT(e) {
        let t = e6();
        $.default.track(eI.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function tf() {
        let e = e6(),
            t = e.inputDeviceId,
            n = el.default.hasEchoCancellation(t) || e.echoCancellation,
            i = el.default.hasNoiseSuppression(t) || e.noiseSuppression,
            r = el.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            s = e.noiseCancellation;
        eC.setLoopback(e2, {
            echoCancellation: n,
            noiseSuppression: i,
            automaticGainControl: r,
            noiseCancellation: s
        })
    }

    function tS() {
        return eQ || !1
    }
    async function tA() {
        try {
            await er.default.ensureModule("discord_krisp"), er.default.requireModule("discord_krisp"), eQ = !0, i.emitChange()
        } catch (t) {
            eN.warn("Failed to load Krisp module: ".concat(t.message)), ei.default.captureException(t);
            let e = eA.NoiseCancellerError.INITIALIZED;
            if (t.message.includes(": ")) {
                let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                e = isNaN(n) || 0 === n ? eA.NoiseCancellerError.INITIALIZED : n
            }
            $.default.track(eI.AnalyticEvents.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), ta({
                noiseCancellation: !1
            })
        } finally {
            eX = !1
        }
    }

    function th(e) {
        let {
            section: t
        } = e;
        return t === eI.UserSettingsSections.VOICE && to(), !1
    }
    class tm extends(l = f.default.Store) {
        initialize() {
            eC.on(S.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = F.default.getCurrentConfig({
                    location: "f627ab_3"
                }, {
                    autoTrackExposure: !1
                });
                t > 0 && eC.setMaxSyncDelayOverride(t), e5(e), e9(e), tn(e);
                let n = e6();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                let {
                    useExperimentalRateControl: r
                } = W.default.getCurrentConfig({
                    location: "f627ab_4"
                }, {
                    autoTrackExposure: !1
                });
                r && e.setExperimentFlag(eA.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                let {
                    muteBeforeProcessing: a,
                    pttBeforeProcessing: o,
                    skipEncode: l
                } = U.default.getCurrentConfig({
                    location: "setupMediaEngine"
                }, {
                    autoTrackExposure: !0
                });
                a && e.setExperimentFlag(eA.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), o && e.setExperimentFlag(eA.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eA.ExperimentFlags.SKIP_ENCODE, !0);
                {
                    (0, en.isWindows)() && e.setExperimentFlag(eA.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = B.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && e.setExperimentFlag(eA.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: n
                    } = w.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    n && e.setExperimentFlag(eA.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: i
                    } = G.default.getCurrentConfig({
                        location: "f627ab_8"
                    }, {
                        autoTrackExposure: !0
                    });
                    i && e.setExperimentFlag(eA.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
                }
                let {
                    signalAV1Support: u
                } = y.default.getCurrentConfig({
                    location: "f627ab_10"
                }, {
                    autoTrackExposure: !0
                });
                u && e.setExperimentFlag(eA.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                let {
                    allowSettingFullbandAndroid: d
                } = V.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (d && eC.setHasFullbandPerformance((0, L.hasPerformanceForKrispFullband)()), (0, C.default)(i)) {
                    let t = R.default.getSettings();
                    e.setExperimentFlag(eA.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = K.default.getCurrentConfig({
                        location: "f627ab_15"
                    }, {
                        autoTrackExposure: !1
                    });
                    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eA.VIEWERSIDE_CLIP_KFI_MS);
                    let {
                        allowQualityDecoupling: i
                    } = p.default.getCurrentConfig({
                        location: "MediaEngineStore_setupMediaEngine"
                    }, {
                        autoTrackExposure: !0
                    });
                    e.setQualityDecoupling(i)
                }
                for (let t of (n = e6(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== ea.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                for (let t of Object.keys(n.localVolumes)) t !== ea.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
                }), e.context === eA.MediaEngineContextTypes.DEFAULT && (ex = !1, e.on(S.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    ex = !0, i.emitChange()
                })), e.on(S.BaseConnectionEvent.DesktopSourceEnd, () => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(S.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == s ? void 0 : s.desktopSource) != null && $.default.track(eI.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, M.default)(null == s ? void 0 : s.desktopSource))
                }), e.on(S.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    tt(null == s ? void 0 : s.desktopSource, t, n, i)
                }), e.on(S.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == s ? void 0 : s.desktopSource) != null && ($.default.track(eI.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, M.default)(null == s ? void 0 : s.desktopSource)), null != e_.default.getHookError(eI.MediaEngineHookTypes.SOUND) && m.default.wait(() => m.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let _ = new h.Timeout;
                e.on(S.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            _.start(e7, () => {
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
                            (null == s ? void 0 : s.desktopSource) != null && (tt(null == s ? void 0 : s.desktopSource, n, t, i), !i && (_.stop(), m.default.wait(() => m.default.dispatch({
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
                    (null == s ? void 0 : s.desktopSource) != null && $.default.track(eI.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: r,
                        reinitialization: a,
                        ...(0, M.default)(null == s ? void 0 : s.desktopSource)
                    })
                }), e.on(S.BaseConnectionEvent.NoiseCancellationError, e => {
                    eN.warn("noisecancellererror event: ".concat(e)), eJ = !0, $.default.track(eI.AnalyticEvents.VOICE_PROCESSING, {
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
                    eN.warn("voiceactivitydetectorerror event: ".concat(e)), $.default.track(eI.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), m.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eA.MediaEngineContextTypes.DEFAULT,
                        mode: eI.InputModes.VOICE_ACTIVITY,
                        options: {
                            ...e6(eA.MediaEngineContextTypes.DEFAULT).modeOptions,
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
                }), e.setBitRate(eo.default.bitrate), e.applyVideoQualityMode(eE.default.mode)
            }), eC.on(S.MediaEngineEvent.DeviceChange, (e, t, n) => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                })
            }), eC.on(S.MediaEngineEvent.VolumeChange, (e, t) => {
                m.default.dispatch({
                    type: "AUDIO_VOLUME_CHANGE",
                    inputVolume: e,
                    outputVolume: t
                })
            }), eC.on(S.MediaEngineEvent.DesktopSourceEnd, () => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: null
                })
            }), eC.on(S.MediaEngineEvent.AudioPermission, e => {
                e$ = !0, m.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e
                })
            }), eC.on(S.MediaEngineEvent.VideoPermission, e => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "video",
                    granted: e
                })
            }), eC.on(S.MediaEngineEvent.WatchdogTimeout, async () => {
                let e;
                try {
                    await ee.default.submitLiveCrashReport({
                        message: {
                            message: "Voice Watchdog Timeout"
                        }
                    })
                } catch (t) {
                    "number" == typeof t.status && (e = t.status)
                }
                eN.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), $.default.track(eI.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e
                })
            }), eC.on(S.MediaEngineEvent.VideoInputInitialized, e => {
                $.default.track(eI.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * et.default.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                })
            }), eC.on(S.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                m.default.dispatch({
                    type: "CLIPS_RESTART"
                })
            }), eC.on(S.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                m.default.wait(() => {
                    m.default.dispatch({
                        type: "CLIPS_INIT_FAILURE",
                        errMsg: e,
                        applicationName: t
                    })
                })
            }), eC.on(S.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                var n, i;
                (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && O.cancelAttachToProcess(t), a = null)
            }), ts.reset(), ! function() {
                var e;
                let t = A.Storage.get("audio");
                null != t && (A.Storage.set(eO, {
                        [eA.MediaEngineContextTypes.DEFAULT]: t
                    }), A.Storage.remove("audio")), eg = null !== (e = A.Storage.get(eO)) && void 0 !== e ? e : {}, E().each(eg, e => {
                        if (E().defaultsDeep(e, eR()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, es.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, en.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e6();
                        eC.setAudioInputDevice(e.inputDeviceId), eC.setAudioOutputDevice(e.outputDeviceId), te(), eC.setInputVolume(e.inputVolume), eC.setOutputVolume(e.outputVolume), eC.setH264Enabled(e.openH264), eC.setAv1Enabled(e.av1Enabled), eC.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, en.isDesktop)() || __OVERLAY__ || eX || eQ ? (0, en.isWeb)() && eC.supports(eA.Features.NOISE_CANCELLATION) ? (eQ = !0, i.emitChange()) : (0, en.isWeb)() && ta({
                noiseCancellation: !1
            }) : (eX = !0, tA()), tI(), e3 = {
                [eA.Features.VIDEO]: eC.supports(eA.Features.VIDEO),
                [eA.Features.DESKTOP_CAPTURE]: eC.supports(eA.Features.DESKTOP_CAPTURE),
                [eA.Features.HYBRID_VIDEO]: eC.supports(eA.Features.HYBRID_VIDEO)
            }, this.waitFor(ea.default, el.default, eu.default, e_.default, ec.default, v.default, Q.default.storage, Z.default, ed.default, R.default)
        }
        supports(e) {
            return eC.supports(e)
        }
        supportsInApp(e) {
            return e3[e] || eC.supports(e)
        }
        isSupported() {
            return eC.supported()
        }
        isExperimentalEncodersSupported() {
            return eC.supports(eA.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eC.supports(eA.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return eQ || !1
        }
        isNoiseCancellationError() {
            return eJ
        }
        isAutomaticGainControlSupported() {
            return eC.supports(eA.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return eQ || !1
        }
        isAecDumpSupported() {
            return eC.supports(eA.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eC.supports(eA.Features.VIDEO) && eC.supports(eA.Features.SIMULCAST)
        }
        getAecDump() {
            return e6().aecDumpEnabled
        }
        getMediaEngine() {
            return eC
        }
        getVideoComponent() {
            return eC.supports(eA.Features.DIRECT_VIDEO) && eC.setUseDirectVideo(!0), eC.Video
        }
        getCameraComponent() {
            return eC.supports(eA.Features.DIRECT_VIDEO) && eC.setUseDirectVideo(!0), eC.Camera
        }
        isEnabled() {
            return eD
        }
        isMute() {
            return this.isSelfMute() || eb
        }
        isDeaf() {
            return this.isSelfDeaf() || eB
        }
        hasContext(e) {
            return null != eg[e]
        }
        isSelfMutedTemporarily() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e === eA.MediaEngineContextTypes.DEFAULT && eG
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e6(e).mute || !Q.default.didHavePermission(ef.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eA.MediaEngineContextTypes.DEFAULT && ew
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && el.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return !this.isSupported() || e6(e).deaf
        }
        isVideoEnabled() {
            return ek && eY
        }
        isVideoAvailable() {
            return Object.values(eU).some(e => {
                let {
                    disabled: t
                } = e;
                return !t
            })
        }
        isScreenSharing() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.STREAM;
            return eM === e && null != s
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.STREAM;
            return eM === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT;
            return e !== ea.default.getId() && (e6(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eC.supports(eA.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e6(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e6(n).videoToggleStateMap[e]) && void 0 !== t ? t : eI.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT;
            return t === eA.MediaEngineContextTypes.DEFAULT && e0.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e === eA.MediaEngineContextTypes.DEFAULT && e0.size > 0
        }
        isMediaFilterSettingLoading() {
            return eZ
        }
        isNativeAudioPermissionReady() {
            return e$
        }
        getGoLiveSource() {
            return s
        }
        getGoLiveContext() {
            return eM
        }
        getLocalPan(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT,
                n = e6(t).localPans[e];
            return null != n ? n : ep
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT,
                n = t === eA.MediaEngineContextTypes.STREAM ? eA.DEFAULT_STREAM_VOLUME : eA.DEFAULT_VOLUME,
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e6(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e6(e).modeOptions
        }
        getShortcuts() {
            let e = {};
            return E().each(eg, (t, n) => {
                let {
                    mode: i,
                    modeOptions: {
                        shortcut: r
                    }
                } = t;
                i === eI.InputModes.PUSH_TO_TALK && eL.has(n) && (e[n] = r)
            }), e
        }
        getInputDeviceId() {
            return td(ey, e6().inputDeviceId)
        }
        getOutputDeviceId() {
            return td(eP, e6().outputDeviceId)
        }
        getVideoDeviceId() {
            return td(eU, e6().videoDeviceId)
        }
        getInputDevices() {
            return ey
        }
        getOutputDevices() {
            return eP
        }
        getVideoDevices() {
            return eU
        }
        getEchoCancellation() {
            let e = e6();
            return el.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e6().h265Enabled
        }
        getLoopback() {
            return eC.getLoopback()
        }
        getNoiseSuppression() {
            let e = e6();
            return el.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e6();
            return el.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
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
            return eC.getDebugLogging()
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
            return eC.getAudioSubsystem()
        }
        getSettings() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e6(e)
        }
        getState() {
            return {
                settingsByContext: eg,
                inputDevices: ey,
                outputDevices: eP,
                appSupported: e3,
                krispModuleLoaded: eQ,
                goLiveSource: s,
                goLiveContext: eM
            }
        }
        getInputDetected() {
            return ej
        }
        getNoInputDetectedNotice() {
            return eK
        }
        getPacketDelay() {
            return en.isPlatformEmbedded || this.getMode() !== eI.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
        }
        setCanHavePriority(e, t) {
            eC.eachConnection(n => n.setCanHavePriority(e, t))
        }
        isInteractionRequired() {
            return ev
        }
        getVideoHook() {
            return e6().videoHook
        }
        supportsVideoHook() {
            return eC.supports(eA.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e6().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eC.supports(eA.Features.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eT.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e6().openH264
        }
        getAv1Enabled() {
            return e6().av1Enabled
        }
        getEverSpeakingWhileMuted() {
            return ex
        }
        supportsScreenSoundshare() {
            return (0, en.isMac)() && eC.supports(eA.Features.SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eT.DARWIN_SCKIT_AUDIO_VERSION) && tr(!1) || (0, en.isWindows)() && eC.supports(eA.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT,
                t = this.supports(eA.Features.VIDEO) ? [{
                    rid: "100",
                    type: e === eA.MediaEngineContextTypes.DEFAULT ? eA.MediaTypes.VIDEO : eA.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            return this.isSimulcastSupported() && e === eA.MediaEngineContextTypes.DEFAULT && t.push({
                rid: "50",
                type: eA.MediaTypes.VIDEO,
                quality: 50
            }), t
        }
        getSupportedSecureFramesProtocolVersion(e) {
            var t;
            let n = eC.getSupportedSecureFramesProtocolVersion(),
                i = Y.SecureFramesUserExperiment.getCurrentConfig({
                    location: "MediaEngineStore"
                }),
                r = null != e ? Y.SecureFramesGuildExperiment.getCurrentConfig({
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
    em(tm, "displayName", "MediaEngineStore"), i = new tm(m.default, {
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n,
                currentVoiceChannelId: i,
                video: r
            } = e;
            if (i !== n && te(r, null), null != t || null == n) {
                ez = !1;
                return
            }
            if (ez) return;
            ez = !0;
            let s = e6();
            (s.mute || s.deaf) && (ta({
                deaf: !1,
                mute: !1
            }), eC.eachConnection(e9))
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => r === t.sessionId ? (eb = t.mute || t.suppress, eB = t.deaf, eC.eachConnection(e9), te(!(null != t.guildId && null != t.channelId && null != eq && eq !== t.channelId) && ek), eq = t.channelId, !0) : (!__OVERLAY__ && t.userId === ea.default.getId() && null == ec.default.getChannelId() && te(!1, null), e), !1)
        },
        CONNECTION_OPEN: function(e) {
            r = e.sessionId, eb = !1, eB = !1, (0, q.shouldReadWriteAudioSettings)() && t_()
        },
        CONNECTION_CLOSED: function() {
            r = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case eI.RTCConnectionStates.CONNECTING:
                    to();
                    break;
                case eI.RTCConnectionStates.RTC_CONNECTING:
                    eW = !1, eK = !1;
                    break;
                case eI.RTCConnectionStates.RTC_CONNECTED:
                    te();
                    break;
                case eI.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === e0.size) return;
                        let e = eA.MediaEngineContextTypes.DEFAULT,
                            {
                                disabledLocalVideos: t
                            } = e6(e);
                        e0.forEach(n => {
                            _()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eC.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                        }), e0.clear(), ta({
                            disabledLocalVideos: t
                        }, e, !1)
                    })(), tI()
            }
            ts.update()
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
            let {
                mute: t
            } = e;
            eG = t, eC.eachConnection(e9)
        },
        AUDIO_TOGGLE_SELF_MUTE: function(e) {
            let {
                context: t,
                skipMuteUnmuteSoundEffect: n
            } = e, {
                mute: i,
                deaf: r
            } = e6(t);
            if (t === eA.MediaEngineContextTypes.DEFAULT && (Q.default.requestPermission(ef.NativePermissionTypes.AUDIO), ew)) return !1;
            !(i = !r && !i) && (r = !1), n && (eF = !0), ta({
                mute: i,
                deaf: r
            }, t), eC.eachConnection(e9)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            let {
                context: t
            } = e;
            ta({
                deaf: !e6(t).deaf
            }, t), eC.eachConnection(e9)
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
            let {
                context: t,
                userId: n
            } = e;
            if (n === ea.default.getId()) return;
            let {
                localMutes: i
            } = e6(t);
            i[n] ? delete i[n] : i[n] = !0, ta({
                localMutes: i
            }, t), eC.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
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
            let I = d === eI.VideoToggleState.DISABLED,
                {
                    disabledLocalVideos: T
                } = e6(l),
                f = null !== (t = T[u]) && void 0 !== t && t,
                S = e0.has(u),
                A = d === eI.VideoToggleState.AUTO_ENABLED || d === eI.VideoToggleState.MANUAL_ENABLED;
            eN.info("disableVideo=".concat(I, " currentlyDisabled=").concat(f, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(A)), _()(!(S && !f), "If you are auto-disabled, then you are also disabled.");
            let h = I !== f,
                m = l === eA.MediaEngineContextTypes.DEFAULT,
                N = E && h && m,
                O = c && h && m;
            eN.info("changed=".concat(h, " isDefaultContext=").concat(m, " isUpdateCausedByVideoHealthManager=").concat(N, " isManualToggleByUser=").concat(O));
            let {
                videoToggleStateMap: p
            } = e6(l);
            if (p[u] === eI.VideoToggleState.AUTO_PROBING && d === eI.VideoToggleState.AUTO_ENABLED && (0, X.default)(u, I ? eA.VideoToggleReason.AUTO_DISABLE : eA.VideoToggleReason.AUTO_ENABLE, A), p[u] = d, ta({
                    videoToggleStateMap: p
                }, l, c), d === eI.VideoToggleState.AUTO_PROBING ? null === (n = ec.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ec.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e1 && (eN.info("isAutoDisableAllowed=".concat(e1, " - disabling VideoHealthManager")), null === (s = ec.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), N) {
                if (!I && !S || I && !e1) return;
                (0, X.default)(u, I ? eA.VideoToggleReason.AUTO_DISABLE : eA.VideoToggleReason.AUTO_ENABLE, A), I ? e0.add(u) : e0.delete(u)
            } else O && (S && !I ? (eN.info("disallowing auto-disable for this session because of manual override by user"), e1 = !1, null === (o = ec.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, X.default)(u, eA.VideoToggleReason.MANUAL_REENABLE, A)) : (0, X.default)(u, I ? eA.VideoToggleReason.MANUAL_DISABLE : eA.VideoToggleReason.MANUAL_ENABLE, A));
            m && !I && e0.delete(u), I ? T[u] = !0 : delete T[u], ta({
                disabledLocalVideos: T
            }, l, c), eC.eachConnection(e => {
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
            if (n === ea.default.getId()) return;
            let r = t === eA.MediaEngineContextTypes.STREAM ? eA.DEFAULT_STREAM_VOLUME : eA.DEFAULT_VOLUME,
                {
                    localVolumes: s
                } = e6(t);
            i === r ? delete s[n] : s[n] = i, ta({
                localVolumes: s
            }, t), eC.eachConnection(e => e.setLocalVolume(n, i), t)
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
            }, ta({
                localPans: s
            }, t), eC.eachConnection(e => e.setLocalPan(n, i, r), t)
        },
        AUDIO_SET_MODE: function(e) {
            let {
                context: t,
                mode: n,
                options: i
            } = e;
            ta({
                mode: n,
                modeOptions: i
            }, t), eC.eachConnection(e5), ts.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            ta({
                inputVolume: e8(t)
            }), eC.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            ta({
                outputVolume: t
            }), eC.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ta({
                inputDeviceId: t = td(ey, t)
            }), eC.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ta({
                outputDeviceId: t = td(eP, t)
            }), eC.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            let t = ta({
                echoCancellation: e.enabled
            });
            eC.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tf(), tT(e.location)
        },
        MEDIA_ENGINE_SET_H265: function(e) {
            let t = ta({
                h265Enabled: e.enabled
            });
            eC.setH265Enabled(t.h265Enabled)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            let {
                enabled: t
            } = e;
            return e2 = t, tf()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            let t = ta({
                noiseSuppression: e.enabled
            });
            eC.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tf(), tT(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            let t = ta({
                automaticGainControl: e.enabled
            });
            eC.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tf(), tT(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            let t = ta({
                noiseCancellation: e.enabled
            });
            eC.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tf(), tT(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            ta({
                silenceWarning: e.enabled
            }), ts.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eC.setDebugLogging(e.enabled)
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
            ta({
                videoHook: e.enabled
            })
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
            ta({
                experimentalSoundshare2: e.enabled
            })
        },
        AUDIO_SET_ATTENUATION: function(e) {
            let {
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            } = e, r = ta({
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            });
            eC.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
        },
        AUDIO_SET_QOS: function(e) {
            let {
                enabled: t
            } = e;
            ta({
                qos: t
            }), eC.eachConnection(e => e.setQoS(t))
        },
        MEDIA_ENGINE_DEVICES: function(e) {
            let {
                inputDevices: t,
                outputDevices: n,
                videoDevices: i
            } = e;
            ! function(e) {
                let t = ey;
                if (ey = tu(e, eh.default.Messages.NO_INPUT_DEVICES), !E().isEqual(ey, t)) {
                    let e = e6(),
                        t = td(ey, e.inputDeviceId);
                    eC.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = eP;
                if (eP = tu(e, eh.default.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eP, t)) {
                    let e = e6(),
                        t = td(eP, e.outputDeviceId);
                    eC.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                eY = e.length > 0;
                let t = eU;
                if (eU = tu(e, eh.default.Messages.NO_VIDEO_DEVICES), ek && !E().isEqual(eU, t)) {
                    var n;
                    let e = void 0 !== eU[eV],
                        i = eV === eA.DEFAULT_DEVICE_ID && (null === (n = t[eA.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    te(e || i)
                }
            }(i)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            let {
                inputVolume: t,
                outputVolume: n
            } = e;
            ta({
                inputVolume: e8(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            A.Storage.remove(eO), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            let {
                inputDetected: t
            } = e;
            ej = t, !eW && ej && (eW = !0, ts.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eC.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            eD = e.enabled, e.unmute && ta({
                mute: !1,
                deaf: !1
            }), eC.eachConnection(e9)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            Q.default.requestPermission(ef.NativePermissionTypes.CAMERA), te(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            let {
                kind: t,
                granted: n
            } = e;
            if (!n) switch (t) {
                case "audio":
                    eD = !1, eC.eachConnection(e9);
                    break;
                case "video":
                    te(!1)
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
                    u = null !== (t = o.context) && void 0 !== t ? t : eA.MediaEngineContextTypes.DEFAULT,
                    d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                        resolution: 720,
                        frameRate: 30
                    },
                    _ = ee.default.getPidFromDesktopSource(r);
                en.isPlatformEmbedded && !0 === l && ({
                    soundshareId: e,
                    soundshareSession: i
                } = tc(_), null != e && tE(e, i)), (a = u) !== eM && (null != s && eC.setGoLiveSource(null, eM), eM = a), te(u === eA.MediaEngineContextTypes.STREAM && ek, {
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
                let e = null !== (i = o.context) && void 0 !== i ? i : eA.MediaEngineContextTypes.DEFAULT,
                    {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    } = o.cameraSettings,
                    s = e === eA.MediaEngineContextTypes.STREAM && ek,
                    a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
                        resolution: 720,
                        frameRate: 30
                    };
                te(s, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: a.resolution,
                        frameRate: a.frameRate
                    }
                })
            } else te(ek, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ta({
                videoDeviceId: t = td(eU, t)
            }), te()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            let t = ta({
                experimentalEncoders: e.enabled
            });
            eC.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return ev !== e.required && (ev = e.required, !e.required && eC.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: th,
        USER_SETTINGS_MODAL_SET_SECTION: th,
        CERTIFIED_DEVICES_SET: function() {
            return eC.eachConnection(tn), !1
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            eL.add(t.id)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            eL.delete(t.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                mediaEngineState: t
            } = e;
            eg = t.settingsByContext, ey = t.inputDevices, eP = t.outputDevices, e3 = t.appSupported, eQ = t.krispModuleLoaded, eM = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            let {
                enabled: t
            } = e, n = ta({
                openH264: t
            });
            eC.setH264Enabled(n.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            let {
                enabled: t
            } = e, n = ta({
                hardwareH264: t
            });
            eC.eachConnection(e => e.setHardwareH264(n.hardwareH264))
        },
        MEDIA_ENGINE_SET_AV1: function(e) {
            let {
                enabled: t
            } = e, n = ta({
                av1Enabled: t
            });
            eC.setAv1Enabled(n.av1Enabled)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = D.default.isEnabled();
            if (t === eI.AppStates.BACKGROUND && ek && !n) eH = !0, te(!1);
            else {
                if (t !== eI.AppStates.ACTIVE || !eH) return !1;
                eH = !1, te(!0)
            }
            return !0
        },
        SET_CHANNEL_BITRATE: function(e) {
            eC.eachConnection(t => t.setBitRate(e.bitrate))
        },
        SET_VAD_PERMISSION: function(e) {
            let {
                hasPermission: t
            } = e, n = !t;
            if (n === ew) return !1;
            ew = n, eC.eachConnection(e9)
        },
        SET_NATIVE_PERMISSION: function(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = t === ef.NativePermissionStates.ACCEPTED;
            switch (n) {
                case ef.NativePermissionTypes.AUDIO:
                    e$ = !0, eC.eachConnection(e9);
                    break;
                case ef.NativePermissionTypes.CAMERA:
                    !i && ek && te(!1);
                    break;
                default:
                    return !1
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            eC.eachConnection(t => t.applyVideoQualityMode(e.mode))
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
            let {
                enabled: t
            } = e, n = ta({
                aecDumpEnabled: t
            });
            eC.setAecDump(n.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!ek && null == s || null != ec.default.getRTCConnectionId()) return !1;
            te(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!eJ && (eJ = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            eC.applyMediaFilterSettings(t).finally(() => {
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
            if (!(0, q.shouldReadWriteAudioSettings)() || t !== eS.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            t_(!0)
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
                d = ee.default.getPidFromDesktopSource(t);
            ({
                soundshareId: l,
                soundshareSession: u
            } = tc(d));
            let _ = {
                desktopSource: {
                    id: t,
                    sourcePid: d,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: r
            };
            null != a && a.desktopSource.id !== _.desktopSource.id && (eC.setClipsSource(null), (0, en.isWindows)() && null != a.desktopSource.soundshareId && O.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tE(l, u), a = _;
            let {
                useQuartzCapturer: c
            } = x.default.getCurrentConfig({
                location: "f627ab_11"
            }, {
                autoTrackExposure: !1
            }), {
                hdrCaptureMode: E
            } = k.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), I = e6().videoHook, T = eC.supports(eA.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                videoHookStaleFrameTimeoutMs: f
            } = j.default.getConfig(T && I, "e225cfdf5_vh2", !1), {
                graphicsCaptureStaleFrameTimeoutMs: S
            } = z.default.getConfig(T && ti(), "e225cfdf5_wgc2", !1);
            eC.setClipsSource({
                desktopDescription: {
                    id: a.desktopSource.id,
                    soundshareId: a.desktopSource.soundshareId,
                    useVideoHook: I,
                    useGraphicsCapture: ti(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: c,
                    allowScreenCaptureKit: tr(!1),
                    videoHookStaleFrameTimeoutMs: f,
                    graphicsCaptureStaleFrameTimeoutMs: S,
                    hdrCaptureMode: E
                },
                quality: r,
                applicationName: n
            })
        },
        CLIPS_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            !1 === t.decoupledClipsEnabled && (a = null, eC.setClipsSource(null))
        }
    }), t.default = i
}