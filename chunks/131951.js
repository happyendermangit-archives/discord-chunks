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
        h = n("433517"),
        A = n("846519"),
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
        V = n("498600"),
        F = n("631610"),
        x = n("951958"),
        H = n("736036"),
        Y = n("38849"),
        j = n("529558"),
        W = n("263853"),
        K = n("636458"),
        z = n("441167"),
        X = n("904272"),
        Q = n("338336"),
        q = n("751571"),
        J = n("815016"),
        Z = n("725380"),
        $ = n("581883"),
        ee = n("626135"),
        et = n("12647"),
        en = n("70956"),
        ei = n("358085"),
        er = n("960048"),
        es = n("998502"),
        ea = n("13140"),
        eo = n("314897"),
        el = n("967368"),
        eu = n("463395"),
        ed = n("592125"),
        e_ = n("828695"),
        ec = n("858340"),
        eE = n("19780"),
        eI = n("631768"),
        eT = n("981631"),
        ef = n("70722"),
        eS = n("761274"),
        eh = n("526761"),
        eA = n("65154"),
        em = n("689938");

    function eN(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let eO = new g.default("MediaEngineStore");
    (u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE";
    let ep = "MediaEngineStore",
        eR = {
            left: 1,
            right: 1
        };

    function eC() {
        return {
            mode: eT.InputModes.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -60,
                autoThreshold: ei.isPlatformEmbedded || __OVERLAY__,
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
            videoHook: eg.supports(eA.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            av1Enabled: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        }
    }
    let eg = (0, S.initializeMediaEngine)((0, S.determineMediaEngine)()),
        eL = {},
        eD = new Set([eA.MediaEngineContextTypes.DEFAULT]),
        ev = eg.supports(eA.Features.AUTO_ENABLE),
        eM = !1,
        ey = eA.MediaEngineContextTypes.STREAM,
        eP = {
            [eA.DEFAULT_DEVICE_ID]: tu(em.default.Messages.NO_INPUT_DEVICES)
        },
        eU = {
            [eA.DEFAULT_DEVICE_ID]: tu(em.default.Messages.NO_OUTPUT_DEVICES)
        },
        eb = {
            [eA.DEFAULT_DEVICE_ID]: tu(em.default.Messages.NO_VIDEO_DEVICES)
        },
        eG = !1,
        ew = !1,
        eB = !1,
        ek = !1,
        eV = !1,
        eF = eA.DISABLED_DEVICE_ID,
        ex = !1,
        eH = !1,
        eY = !1,
        ej = !1,
        eW = null,
        eK = !1,
        ez = !1,
        eX = !1,
        eQ = !1,
        eq = !1,
        eJ = null,
        eZ = !1,
        e$ = !1,
        e0 = !1;
    q.default.hasPermission(eS.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), q.default.hasPermission(eS.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let e1 = new Set,
        e2 = !1,
        e3 = !1,
        e4 = {},
        e7 = {},
        e6 = 5 * en.default.Millis.SECOND;

    function e5() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT,
            t = eL[e];
        return null == t && (t = eC(), eL[e] = t), t
    }

    function e8(e) {
        let t = e5(e.context);
        e.setInputMode(t.mode, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                return eq || !1
            }(),
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: t.modeOptions.delay
        })
    }

    function e9(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.DEFAULT_VOLUME;
        return E().clamp(e, 0, t)
    }

    function te(e) {
        let t = e5(e.context),
            n = !ev || t.mute || t.deaf;
        e.context === eA.MediaEngineContextTypes.DEFAULT ? n = n || eG || ew || eB || !q.default.didHavePermission(eS.NativePermissionTypes.AUDIO) : e.context === eA.MediaEngineContextTypes.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
    }

    function tt() {
        var e, t, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
            o = s;
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, ei.isWindows)() && O.cancelAttachToProcess(o.desktopSource.soundshareId), eg.setGoLiveSource(null, ey)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eg.setGoLiveSource(null, ey), (eV || r) && (eF = (eV = r) ? t_(eb, e5().videoDeviceId) : eA.DISABLED_DEVICE_ID, eg.setVideoInputDevice(eF)), s = a, null != a) {
            let e = {
                resolution: a.quality.resolution,
                frameRate: a.quality.frameRate
            };
            if (null != a.desktopSource) {
                let {
                    useQuartzCapturer: t
                } = H.default.getCurrentConfig({
                    location: "f627ab_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    hdrCaptureMode: n
                } = V.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), r = e5().videoHook, s = eg.supports(eA.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                    videoHookStaleFrameTimeoutMs: o
                } = W.default.getConfig(s && r, "e225cfdf5_vh1", !0), {
                    graphicsCaptureStaleFrameTimeoutMs: l
                } = X.default.getConfig(s && tr(), "e225cfdf5_wgc2", !0);
                eg.setGoLiveSource({
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: tr(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: t,
                        allowScreenCaptureKit: ts(!0),
                        videoHookStaleFrameTimeoutMs: o,
                        graphicsCaptureStaleFrameTimeoutMs: l,
                        hdrCaptureMode: n
                    },
                    quality: e
                }, ey)
            }
            null != a.cameraSource && eg.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: a.cameraSource.audioDeviceGuid
                },
                quality: e
            }, ey)
        }
    }

    function tn(e, t, n, i) {
        var r;
        let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
        null == e7[s] && (e7[s] = new Set);
        let a = null != t && !e7[s].has(t);
        a && e7[s].add(t), (null == t || a) && ee.default.track(eT.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, M.default)(e)
        })
    }

    function ti(e) {
        let t = e5(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(eu.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eu.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eu.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ei.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function tr() {
        return (0, ei.isWindows)() && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ef.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function ts(e) {
        return !!((0, ei.isMac)() && eg.supports(eA.Features.SCREEN_CAPTURE_KIT) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ef.DARWIN_SCKIT_VERSION)) && Y.default.getCurrentConfig({
            location: "screenCaptureKitEnabled"
        }, {
            autoTrackExposure: e
        }).allowScreenCaptureKit
    }
    let ta = new class {
        start() {
            !this.started && (this.started = !0, eg.on(S.MediaEngineEvent.Silence, this.handleSilence))
        }
        stop() {
            this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eg.removeListener(S.MediaEngineEvent.Silence, this.handleSilence), m.default.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null
            }))
        }
        update() {
            let e = e5();
            !eK && eE.default.getState() === eT.RTCConnectionStates.RTC_CONNECTED && e.mode === eT.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
        }
        reset() {
            this.stop(), this.update()
        }
        constructor() {
            eN(this, "stateChangeTimeout", void 0), eN(this, "noVoiceTimeout", 5e3), eN(this, "voiceTimeout", 1500), eN(this, "started", !1), eN(this, "handleSilence", e => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
                    this.stateChangeTimeout = null, this.started && (m.default.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: t
                    }), e && (ez = !0))
                }, t ? this.voiceTimeout : this.noVoiceTimeout)
            })
        }
    };

    function to(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e5(t);
        return Object.assign(i, e), !__OVERLAY__ && n && h.Storage.set(ep, eL), i
    }

    function tl() {
        !ev && eg.enable().then(() => m.default.dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: !0,
            unmute: !1
        }))
    }

    function tu(e) {
        return {
            id: eA.DEFAULT_DEVICE_ID,
            index: 0,
            name: e,
            disabled: !0
        }
    }

    function td(e, t) {
        if (0 === e.length) {
            let e = tu(t);
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

    function t_(e, t) {
        var n;
        let i = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
        return null != i ? i.id : t
    }

    function tc() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = null !== (e = $.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let r = e === eh.ProtoAudioSettingsContextTypes.USER ? eA.MediaEngineContextTypes.DEFAULT : eA.MediaEngineContextTypes.STREAM,
                s = r === eA.MediaEngineContextTypes.STREAM ? eA.DEFAULT_STREAM_VOLUME : eA.DEFAULT_VOLUME,
                a = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e5(r);
            for (let [e, t] of Object.entries(a)) null == (0, Z.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eg.eachConnection(n => {
                n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
            }, r));
            if (n)
                for (let e of new Set([...Object.keys(o), ...Object.keys(l)])) null == a[e] && (delete o[e], delete l[e], eg.eachConnection(t => {
                    t.setLocalVolume(e, s), t.setLocalMute(e, !1)
                }, r));
            to({
                localMutes: o,
                localVolumes: l
            }, r)
        }
    }

    function tE(e) {
        if (null == i) return eO.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
            soundshareId: null,
            soundshareSession: ""
        };
        {
            let t = i.getExperimentalSoundshare() ? e : et.default.getAudioPid(e),
                n = "";
            return null != t && (n = et.default.generateSessionFromPid(t)), {
                soundshareId: t,
                soundshareSession: n
            }
        }
    }

    function tI(e, t) {
        (0, ei.isWindows)() && O.attachToProcess(e, {
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

    function tT() {
        let e = eA.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e5(e);
        for (let [e, n] of Object.entries(t)) n === eT.VideoToggleState.AUTO_PROBING && delete t[e];
        to({
            videoToggleStateMap: t
        }, e, !1)
    }

    function tf(e) {
        let t = e5();
        ee.default.track(eT.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function tS() {
        let e = e5(),
            t = e.inputDeviceId,
            n = eu.default.hasEchoCancellation(t) || e.echoCancellation,
            i = eu.default.hasNoiseSuppression(t) || e.noiseSuppression,
            r = eu.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            s = e.noiseCancellation;
        eg.setLoopback(e3, {
            echoCancellation: n,
            noiseSuppression: i,
            automaticGainControl: r,
            noiseCancellation: s
        })
    }

    function th() {
        return eq || !1
    }
    async function tA() {
        try {
            await es.default.ensureModule("discord_krisp"), es.default.requireModule("discord_krisp"), eq = !0, i.emitChange()
        } catch (t) {
            eO.warn("Failed to load Krisp module: ".concat(t.message)), er.default.captureException(t);
            let e = eA.NoiseCancellerError.INITIALIZED;
            if (t.message.includes(": ")) {
                let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                e = isNaN(n) || 0 === n ? eA.NoiseCancellerError.INITIALIZED : n
            }
            ee.default.track(eT.AnalyticEvents.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), to({
                noiseCancellation: !1
            })
        } finally {
            eQ = !1
        }
    }

    function tm(e) {
        let {
            section: t
        } = e;
        return t === eT.UserSettingsSections.VOICE && tl(), !1
    }
    class tN extends(l = f.default.Store) {
        initialize() {
            eg.on(S.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = x.default.getCurrentConfig({
                    location: "f627ab_3"
                }, {
                    autoTrackExposure: !1
                });
                t > 0 && eg.setMaxSyncDelayOverride(t), e8(e), te(e), ti(e);
                let n = e5();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                let {
                    useExperimentalRateControl: r
                } = K.default.getCurrentConfig({
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
                    (0, ei.isWindows)() && e.setExperimentFlag(eA.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = k.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && e.setExperimentFlag(eA.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: n
                    } = B.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    n && e.setExperimentFlag(eA.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: i
                    } = w.default.getCurrentConfig({
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
                } = F.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (d && eg.setHasFullbandPerformance((0, L.hasPerformanceForKrispFullband)()), (0, C.default)(i)) {
                    let t = R.default.getSettings();
                    e.setExperimentFlag(eA.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = z.default.getCurrentConfig({
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
                for (let t of (n = e5(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== eo.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                for (let t of Object.keys(n.localVolumes)) t !== eo.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
                }), e.context === eA.MediaEngineContextTypes.DEFAULT && (eH = !1, e.on(S.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    eH = !0, i.emitChange()
                })), e.on(S.BaseConnectionEvent.DesktopSourceEnd, () => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(S.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == s ? void 0 : s.desktopSource) != null && ee.default.track(eT.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, M.default)(null == s ? void 0 : s.desktopSource))
                }), e.on(S.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    tn(null == s ? void 0 : s.desktopSource, t, n, i)
                }), e.on(S.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == s ? void 0 : s.desktopSource) != null && (ee.default.track(eT.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, M.default)(null == s ? void 0 : s.desktopSource)), null != ec.default.getHookError(eT.MediaEngineHookTypes.SOUND) && m.default.wait(() => m.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let _ = new A.Timeout;
                e.on(S.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            _.start(e6, () => {
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
                            (null == s ? void 0 : s.desktopSource) != null && (tn(null == s ? void 0 : s.desktopSource, n, t, i), !i && (_.stop(), m.default.wait(() => m.default.dispatch({
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
                    (null == s ? void 0 : s.desktopSource) != null && ee.default.track(eT.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: r,
                        reinitialization: a,
                        ...(0, M.default)(null == s ? void 0 : s.desktopSource)
                    })
                }), e.on(S.BaseConnectionEvent.NoiseCancellationError, e => {
                    eO.warn("noisecancellererror event: ".concat(e)), eZ = !0, ee.default.track(eT.AnalyticEvents.VOICE_PROCESSING, {
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
                    eO.warn("voiceactivitydetectorerror event: ".concat(e)), ee.default.track(eT.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), m.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eA.MediaEngineContextTypes.DEFAULT,
                        mode: eT.InputModes.VOICE_ACTIVITY,
                        options: {
                            ...e5(eA.MediaEngineContextTypes.DEFAULT).modeOptions,
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
                }), e.setBitRate(el.default.bitrate), e.applyVideoQualityMode(eI.default.mode)
            }), eg.on(S.MediaEngineEvent.DeviceChange, (e, t, n) => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                })
            }), eg.on(S.MediaEngineEvent.VolumeChange, (e, t) => {
                m.default.dispatch({
                    type: "AUDIO_VOLUME_CHANGE",
                    inputVolume: e,
                    outputVolume: t
                })
            }), eg.on(S.MediaEngineEvent.DesktopSourceEnd, () => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: null
                })
            }), eg.on(S.MediaEngineEvent.AudioPermission, e => {
                e0 = !0, m.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e
                })
            }), eg.on(S.MediaEngineEvent.VideoPermission, e => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "video",
                    granted: e
                })
            }), eg.on(S.MediaEngineEvent.WatchdogTimeout, async () => {
                let e;
                try {
                    await et.default.submitLiveCrashReport({
                        message: {
                            message: "Voice Watchdog Timeout"
                        }
                    })
                } catch (t) {
                    "number" == typeof t.status && (e = t.status)
                }
                eO.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), ee.default.track(eT.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e
                })
            }), eg.on(S.MediaEngineEvent.VideoInputInitialized, e => {
                ee.default.track(eT.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * en.default.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                })
            }), eg.on(S.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                m.default.dispatch({
                    type: "CLIPS_RESTART"
                })
            }), eg.on(S.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                m.default.wait(() => {
                    m.default.dispatch({
                        type: "CLIPS_INIT_FAILURE",
                        errMsg: e,
                        applicationName: t
                    })
                })
            }), eg.on(S.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                var n, i;
                (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && O.cancelAttachToProcess(t), a = null)
            }), ta.reset(), ! function() {
                var e;
                let t = h.Storage.get("audio");
                null != t && (h.Storage.set(ep, {
                        [eA.MediaEngineContextTypes.DEFAULT]: t
                    }), h.Storage.remove("audio")), eL = null !== (e = h.Storage.get(ep)) && void 0 !== e ? e : {}, E().each(eL, e => {
                        if (E().defaultsDeep(e, eC()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ea.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, ei.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e5();
                        eg.setAudioInputDevice(e.inputDeviceId), eg.setAudioOutputDevice(e.outputDeviceId), tt(), eg.setInputVolume(e.inputVolume), eg.setOutputVolume(e.outputVolume), eg.setH264Enabled(e.openH264), eg.setAv1Enabled(e.av1Enabled), eg.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, ei.isDesktop)() || __OVERLAY__ || eQ || eq ? (0, ei.isWeb)() && eg.supports(eA.Features.NOISE_CANCELLATION) ? (eq = !0, i.emitChange()) : (0, ei.isWeb)() && to({
                noiseCancellation: !1
            }) : (eQ = !0, tA()), tT(), e4 = {
                [eA.Features.VIDEO]: eg.supports(eA.Features.VIDEO),
                [eA.Features.DESKTOP_CAPTURE]: eg.supports(eA.Features.DESKTOP_CAPTURE),
                [eA.Features.HYBRID_VIDEO]: eg.supports(eA.Features.HYBRID_VIDEO)
            }, this.waitFor(eo.default, eu.default, ed.default, ec.default, eE.default, v.default, q.default.storage, $.default, e_.default, R.default)
        }
        supports(e) {
            return eg.supports(e)
        }
        supportsInApp(e) {
            return e4[e] || eg.supports(e)
        }
        isSupported() {
            return eg.supported()
        }
        isExperimentalEncodersSupported() {
            return eg.supports(eA.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eg.supports(eA.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return eq || !1
        }
        isNoiseCancellationError() {
            return eZ
        }
        isAutomaticGainControlSupported() {
            return eg.supports(eA.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return eq || !1
        }
        isAecDumpSupported() {
            return eg.supports(eA.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eg.supports(eA.Features.VIDEO) && eg.supports(eA.Features.SIMULCAST)
        }
        getAecDump() {
            return e5().aecDumpEnabled
        }
        getMediaEngine() {
            return eg
        }
        getVideoComponent() {
            return eg.supports(eA.Features.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Video
        }
        getCameraComponent() {
            return eg.supports(eA.Features.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Camera
        }
        isEnabled() {
            return ev
        }
        isMute() {
            return this.isSelfMute() || eG
        }
        isDeaf() {
            return this.isSelfDeaf() || ek
        }
        hasContext(e) {
            return null != eL[e]
        }
        isSelfMutedTemporarily() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e === eA.MediaEngineContextTypes.DEFAULT && ew
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e5(e).mute || !q.default.didHavePermission(eS.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eA.MediaEngineContextTypes.DEFAULT && eB
        }
        shouldSkipMuteUnmuteSound() {
            let {
                airpodsMuteSupported: e
            } = P.default.getCurrentConfig({
                location: "shouldSkipMuteUnmuteSound"
            }, {
                autoTrackExposure: !0
            });
            return !!e && ex
        }
        notifyMuteUnmuteSoundWasSkipped() {
            ex = !1
        }
        isHardwareMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && eu.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return !this.isSupported() || e5(e).deaf
        }
        isVideoEnabled() {
            return eV && ej
        }
        isVideoAvailable() {
            return Object.values(eb).some(e => {
                let {
                    disabled: t
                } = e;
                return !t
            })
        }
        isScreenSharing() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.STREAM;
            return ey === e && null != s
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.STREAM;
            return ey === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT;
            return e !== eo.default.getId() && (e5(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eg.supports(eA.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e5(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e5(n).videoToggleStateMap[e]) && void 0 !== t ? t : eT.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT;
            return t === eA.MediaEngineContextTypes.DEFAULT && e1.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e === eA.MediaEngineContextTypes.DEFAULT && e1.size > 0
        }
        isMediaFilterSettingLoading() {
            return e$
        }
        isNativeAudioPermissionReady() {
            return e0
        }
        getGoLiveSource() {
            return s
        }
        getGoLiveContext() {
            return ey
        }
        getLocalPan(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT,
                n = e5(t).localPans[e];
            return null != n ? n : eR
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.MediaEngineContextTypes.DEFAULT,
                n = t === eA.MediaEngineContextTypes.STREAM ? eA.DEFAULT_STREAM_VOLUME : eA.DEFAULT_VOLUME,
                i = e5(t).localVolumes[e];
            return null != i ? i : n
        }
        getInputVolume() {
            return e5().inputVolume
        }
        getOutputVolume() {
            return e5().outputVolume
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e5(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e5(e).modeOptions
        }
        getShortcuts() {
            let e = {};
            return E().each(eL, (t, n) => {
                let {
                    mode: i,
                    modeOptions: {
                        shortcut: r
                    }
                } = t;
                i === eT.InputModes.PUSH_TO_TALK && eD.has(n) && (e[n] = r)
            }), e
        }
        getInputDeviceId() {
            return t_(eP, e5().inputDeviceId)
        }
        getOutputDeviceId() {
            return t_(eU, e5().outputDeviceId)
        }
        getVideoDeviceId() {
            return t_(eb, e5().videoDeviceId)
        }
        getInputDevices() {
            return eP
        }
        getOutputDevices() {
            return eU
        }
        getVideoDevices() {
            return eb
        }
        getEchoCancellation() {
            let e = e5();
            return eu.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e5().h265Enabled
        }
        getLoopback() {
            return eg.getLoopback()
        }
        getNoiseSuppression() {
            let e = e5();
            return eu.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e5();
            return eu.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
        }
        getNoiseCancellation() {
            return e5().noiseCancellation
        }
        getExperimentalEncoders() {
            return e5().experimentalEncoders
        }
        getHardwareH264() {
            return e5().hardwareH264
        }
        getEnableSilenceWarning() {
            return e5().silenceWarning
        }
        getDebugLogging() {
            return eg.getDebugLogging()
        }
        getQoS() {
            return e5().qos
        }
        getAttenuation() {
            return e5().attenuation
        }
        getAttenuateWhileSpeakingSelf() {
            return e5().attenuateWhileSpeakingSelf
        }
        getAttenuateWhileSpeakingOthers() {
            return e5().attenuateWhileSpeakingOthers
        }
        getAudioSubsystem() {
            return eg.getAudioSubsystem()
        }
        getSettings() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT;
            return e5(e)
        }
        getState() {
            return {
                settingsByContext: eL,
                inputDevices: eP,
                outputDevices: eU,
                appSupported: e4,
                krispModuleLoaded: eq,
                goLiveSource: s,
                goLiveContext: ey
            }
        }
        getInputDetected() {
            return eW
        }
        getNoInputDetectedNotice() {
            return ez
        }
        getPacketDelay() {
            return ei.isPlatformEmbedded || this.getMode() !== eT.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
        }
        setCanHavePriority(e, t) {
            eg.eachConnection(n => n.setCanHavePriority(e, t))
        }
        isInteractionRequired() {
            return eM
        }
        getVideoHook() {
            return e5().videoHook
        }
        supportsVideoHook() {
            return eg.supports(eA.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e5().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eg.supports(eA.Features.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ef.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e5().openH264
        }
        getAv1Enabled() {
            return e5().av1Enabled
        }
        getEverSpeakingWhileMuted() {
            return eH
        }
        supportsScreenSoundshare() {
            return (0, ei.isMac)() && eg.supports(eA.Features.SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, ef.DARWIN_SCKIT_AUDIO_VERSION) && ts(!1) || (0, ei.isWindows)() && eg.supports(eA.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.MediaEngineContextTypes.DEFAULT,
                n = this.supports(eA.Features.VIDEO) ? [{
                    rid: "100",
                    type: t === eA.MediaEngineContextTypes.DEFAULT ? eA.MediaTypes.VIDEO : eA.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            if (this.isSimulcastSupported() && (t === eA.MediaEngineContextTypes.DEFAULT || (e = !1, G.default.getCurrentConfig({
                    location: "GoLiveSimulcastEnabled"
                }, {
                    autoTrackExposure: e
                }).enableGoLiveSimulcast))) n.push({
                rid: "50",
                type: eA.MediaTypes.VIDEO,
                quality: 50
            });
            return n
        }
        getSupportedSecureFramesProtocolVersion(e) {
            var t;
            let n = eg.getSupportedSecureFramesProtocolVersion(),
                i = j.SecureFramesUserExperiment.getCurrentConfig({
                    location: "MediaEngineStore"
                }),
                r = null != e ? j.SecureFramesGuildExperiment.getCurrentConfig({
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
    eN(tN, "displayName", "MediaEngineStore"), i = new tN(m.default, {
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n,
                currentVoiceChannelId: i,
                video: r
            } = e;
            if (i !== n && tt(r, null), null != t || null == n) {
                eX = !1;
                return
            }
            if (eX) return;
            eX = !0;
            let s = e5();
            (s.mute || s.deaf) && (to({
                deaf: !1,
                mute: !1
            }), eg.eachConnection(te))
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => r === t.sessionId ? (eG = t.mute || t.suppress, ek = t.deaf, eg.eachConnection(te), tt(!(null != t.guildId && null != t.channelId && null != eJ && eJ !== t.channelId) && eV), eJ = t.channelId, !0) : (!__OVERLAY__ && t.userId === eo.default.getId() && null == eE.default.getChannelId() && tt(!1, null), e), !1)
        },
        CONNECTION_OPEN: function(e) {
            r = e.sessionId, eG = !1, ek = !1, (0, J.shouldReadWriteAudioSettings)() && tc()
        },
        CONNECTION_CLOSED: function() {
            r = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case eT.RTCConnectionStates.CONNECTING:
                    tl();
                    break;
                case eT.RTCConnectionStates.RTC_CONNECTING:
                    eK = !1, ez = !1;
                    break;
                case eT.RTCConnectionStates.RTC_CONNECTED:
                    tt();
                    break;
                case eT.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === e1.size) return;
                        let e = eA.MediaEngineContextTypes.DEFAULT,
                            {
                                disabledLocalVideos: t
                            } = e5(e);
                        e1.forEach(n => {
                            _()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eg.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                        }), e1.clear(), to({
                            disabledLocalVideos: t
                        }, e, !1)
                    })(), tT()
            }
            ta.update()
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
            let {
                mute: t
            } = e;
            ew = t, eg.eachConnection(te)
        },
        AUDIO_TOGGLE_SELF_MUTE: function(e) {
            let {
                context: t,
                skipMuteUnmuteSoundEffect: n
            } = e, {
                mute: i,
                deaf: r
            } = e5(t);
            if (t === eA.MediaEngineContextTypes.DEFAULT && (q.default.requestPermission(eS.NativePermissionTypes.AUDIO), eB)) return !1;
            !(i = !r && !i) && (r = !1), n && (ex = !0), to({
                mute: i,
                deaf: r
            }, t), eg.eachConnection(te)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            let {
                context: t
            } = e;
            to({
                deaf: !e5(t).deaf
            }, t), eg.eachConnection(te)
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
            let {
                context: t,
                userId: n
            } = e;
            if (n === eo.default.getId()) return;
            let {
                localMutes: i
            } = e5(t);
            i[n] ? delete i[n] : i[n] = !0, to({
                localMutes: i
            }, t), eg.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
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
            let I = d === eT.VideoToggleState.DISABLED,
                {
                    disabledLocalVideos: T
                } = e5(l),
                f = null !== (t = T[u]) && void 0 !== t && t,
                S = e1.has(u),
                h = d === eT.VideoToggleState.AUTO_ENABLED || d === eT.VideoToggleState.MANUAL_ENABLED;
            eO.info("disableVideo=".concat(I, " currentlyDisabled=").concat(f, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(h)), _()(!(S && !f), "If you are auto-disabled, then you are also disabled.");
            let A = I !== f,
                m = l === eA.MediaEngineContextTypes.DEFAULT,
                N = E && A && m,
                O = c && A && m;
            eO.info("changed=".concat(A, " isDefaultContext=").concat(m, " isUpdateCausedByVideoHealthManager=").concat(N, " isManualToggleByUser=").concat(O));
            let {
                videoToggleStateMap: p
            } = e5(l);
            if (p[u] === eT.VideoToggleState.AUTO_PROBING && d === eT.VideoToggleState.AUTO_ENABLED && (0, Q.default)(u, I ? eA.VideoToggleReason.AUTO_DISABLE : eA.VideoToggleReason.AUTO_ENABLE, h), p[u] = d, to({
                    videoToggleStateMap: p
                }, l, c), d === eT.VideoToggleState.AUTO_PROBING ? null === (n = eE.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eE.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e2 && (eO.info("isAutoDisableAllowed=".concat(e2, " - disabling VideoHealthManager")), null === (s = eE.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), N) {
                if (!I && !S || I && !e2) return;
                (0, Q.default)(u, I ? eA.VideoToggleReason.AUTO_DISABLE : eA.VideoToggleReason.AUTO_ENABLE, h), I ? e1.add(u) : e1.delete(u)
            } else O && (S && !I ? (eO.info("disallowing auto-disable for this session because of manual override by user"), e2 = !1, null === (o = eE.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, Q.default)(u, eA.VideoToggleReason.MANUAL_REENABLE, h)) : (0, Q.default)(u, I ? eA.VideoToggleReason.MANUAL_DISABLE : eA.VideoToggleReason.MANUAL_ENABLE, h));
            m && !I && e1.delete(u), I ? T[u] = !0 : delete T[u], to({
                disabledLocalVideos: T
            }, l, c), eg.eachConnection(e => {
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
            if (n === eo.default.getId()) return;
            let r = t === eA.MediaEngineContextTypes.STREAM ? eA.DEFAULT_STREAM_VOLUME : eA.DEFAULT_VOLUME,
                {
                    localVolumes: s
                } = e5(t);
            i === r ? delete s[n] : s[n] = i, to({
                localVolumes: s
            }, t), eg.eachConnection(e => e.setLocalVolume(n, i), t)
        },
        AUDIO_SET_LOCAL_PAN: function(e) {
            let {
                context: t,
                userId: n,
                left: i,
                right: r
            } = e, {
                localPans: s
            } = e5(t);
            s[n] = {
                left: i,
                right: r
            }, to({
                localPans: s
            }, t), eg.eachConnection(e => e.setLocalPan(n, i, r), t)
        },
        AUDIO_SET_MODE: function(e) {
            let {
                context: t,
                mode: n,
                options: i
            } = e;
            to({
                mode: n,
                modeOptions: i
            }, t), eg.eachConnection(e8), ta.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            to({
                inputVolume: e9(t)
            }), eg.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            to({
                outputVolume: t
            }), eg.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            to({
                inputDeviceId: t = t_(eP, t)
            }), eg.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            to({
                outputDeviceId: t = t_(eU, t)
            }), eg.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            let t = to({
                echoCancellation: e.enabled
            });
            eg.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tS(), tf(e.location)
        },
        MEDIA_ENGINE_SET_H265: function(e) {
            let t = to({
                h265Enabled: e.enabled
            });
            eg.setH265Enabled(t.h265Enabled)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            let {
                enabled: t
            } = e;
            return e3 = t, tS()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            let t = to({
                noiseSuppression: e.enabled
            });
            eg.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tS(), tf(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            let t = to({
                automaticGainControl: e.enabled
            });
            eg.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tS(), tf(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            let t = to({
                noiseCancellation: e.enabled
            });
            eg.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tS(), tf(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            to({
                silenceWarning: e.enabled
            }), ta.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eg.setDebugLogging(e.enabled)
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
            to({
                videoHook: e.enabled
            })
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
            to({
                experimentalSoundshare2: e.enabled
            })
        },
        AUDIO_SET_ATTENUATION: function(e) {
            let {
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            } = e, r = to({
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            });
            eg.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
        },
        AUDIO_SET_QOS: function(e) {
            let {
                enabled: t
            } = e;
            to({
                qos: t
            }), eg.eachConnection(e => e.setQoS(t))
        },
        MEDIA_ENGINE_DEVICES: function(e) {
            let {
                inputDevices: t,
                outputDevices: n,
                videoDevices: i
            } = e;
            ! function(e) {
                let t = eP;
                if (eP = td(e, em.default.Messages.NO_INPUT_DEVICES), !E().isEqual(eP, t)) {
                    let e = e5(),
                        t = t_(eP, e.inputDeviceId);
                    eg.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = eU;
                if (eU = td(e, em.default.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eU, t)) {
                    let e = e5(),
                        t = t_(eU, e.outputDeviceId);
                    eg.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                ej = e.length > 0;
                let t = eb;
                if (eb = td(e, em.default.Messages.NO_VIDEO_DEVICES), eV && !E().isEqual(eb, t)) {
                    var n;
                    let e = void 0 !== eb[eF],
                        i = eF === eA.DEFAULT_DEVICE_ID && (null === (n = t[eA.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    tt(e || i)
                }
            }(i)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            let {
                inputVolume: t,
                outputVolume: n
            } = e;
            to({
                inputVolume: e9(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            h.Storage.remove(ep), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            let {
                inputDetected: t
            } = e;
            eW = t, !eK && eW && (eK = !0, ta.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eg.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            ev = e.enabled, e.unmute && to({
                mute: !1,
                deaf: !1
            }), eg.eachConnection(te)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            q.default.requestPermission(eS.NativePermissionTypes.CAMERA), tt(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            let {
                kind: t,
                granted: n
            } = e;
            if (!n) switch (t) {
                case "audio":
                    ev = !1, eg.eachConnection(te);
                    break;
                case "video":
                    tt(!1)
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
                    _ = et.default.getPidFromDesktopSource(r);
                ei.isPlatformEmbedded && !0 === l && ({
                    soundshareId: e,
                    soundshareSession: i
                } = tE(_), null != e && tI(e, i)), (a = u) !== ey && (null != s && eg.setGoLiveSource(null, ey), ey = a), tt(u === eA.MediaEngineContextTypes.STREAM && eV, {
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
                    s = e === eA.MediaEngineContextTypes.STREAM && eV,
                    a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
                        resolution: 720,
                        frameRate: 30
                    };
                tt(s, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: a.resolution,
                        frameRate: a.frameRate
                    }
                })
            } else tt(eV, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            let {
                id: t
            } = e;
            to({
                videoDeviceId: t = t_(eb, t)
            }), tt()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            let t = to({
                experimentalEncoders: e.enabled
            });
            eg.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return eM !== e.required && (eM = e.required, !e.required && eg.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: tm,
        USER_SETTINGS_MODAL_SET_SECTION: tm,
        CERTIFIED_DEVICES_SET: function() {
            return eg.eachConnection(ti), !1
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            eD.add(t.id)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            eD.delete(t.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                mediaEngineState: t
            } = e;
            eL = t.settingsByContext, eP = t.inputDevices, eU = t.outputDevices, e4 = t.appSupported, eq = t.krispModuleLoaded, ey = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            let {
                enabled: t
            } = e, n = to({
                openH264: t
            });
            eg.setH264Enabled(n.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            let {
                enabled: t
            } = e, n = to({
                hardwareH264: t
            });
            eg.eachConnection(e => e.setHardwareH264(n.hardwareH264))
        },
        MEDIA_ENGINE_SET_AV1: function(e) {
            let {
                enabled: t
            } = e, n = to({
                av1Enabled: t
            });
            eg.setAv1Enabled(n.av1Enabled)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = D.default.isEnabled();
            if (t === eT.AppStates.BACKGROUND && eV && !n) eY = !0, tt(!1);
            else {
                if (t !== eT.AppStates.ACTIVE || !eY) return !1;
                eY = !1, tt(!0)
            }
            return !0
        },
        SET_CHANNEL_BITRATE: function(e) {
            eg.eachConnection(t => t.setBitRate(e.bitrate))
        },
        SET_VAD_PERMISSION: function(e) {
            let {
                hasPermission: t
            } = e, n = !t;
            if (n === eB) return !1;
            eB = n, eg.eachConnection(te)
        },
        SET_NATIVE_PERMISSION: function(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = t === eS.NativePermissionStates.ACCEPTED;
            switch (n) {
                case eS.NativePermissionTypes.AUDIO:
                    e0 = !0, eg.eachConnection(te);
                    break;
                case eS.NativePermissionTypes.CAMERA:
                    !i && eV && tt(!1);
                    break;
                default:
                    return !1
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            eg.eachConnection(t => t.applyVideoQualityMode(e.mode))
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
            let {
                enabled: t
            } = e, n = to({
                aecDumpEnabled: t
            });
            eg.setAecDump(n.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!eV && null == s || null != eE.default.getRTCConnectionId()) return !1;
            tt(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!eZ && (eZ = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            eg.applyMediaFilterSettings(t).finally(() => {
                e$ = !1, i.emitChange()
            })
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
            e$ = !0
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
            e$ = !1
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                local: n,
                wasSaved: i
            } = e;
            if (!(0, J.shouldReadWriteAudioSettings)() || t !== eh.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            tc(!0)
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
                d = et.default.getPidFromDesktopSource(t);
            ({
                soundshareId: l,
                soundshareSession: u
            } = tE(d));
            let _ = {
                desktopSource: {
                    id: t,
                    sourcePid: d,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: r
            };
            null != a && a.desktopSource.id !== _.desktopSource.id && (eg.setClipsSource(null), (0, ei.isWindows)() && null != a.desktopSource.soundshareId && O.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tI(l, u), a = _;
            let {
                useQuartzCapturer: c
            } = H.default.getCurrentConfig({
                location: "f627ab_11"
            }, {
                autoTrackExposure: !1
            }), {
                hdrCaptureMode: E
            } = V.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), I = e5().videoHook, T = eg.supports(eA.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                videoHookStaleFrameTimeoutMs: f
            } = W.default.getConfig(T && I, "e225cfdf5_vh2", !1), {
                graphicsCaptureStaleFrameTimeoutMs: S
            } = X.default.getConfig(T && tr(), "e225cfdf5_wgc2", !1);
            eg.setClipsSource({
                desktopDescription: {
                    id: a.desktopSource.id,
                    soundshareId: a.desktopSource.soundshareId,
                    useVideoHook: I,
                    useGraphicsCapture: tr(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: c,
                    allowScreenCaptureKit: ts(!1),
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
            !1 === t.decoupledClipsEnabled && (a = null, eg.setClipsSource(null))
        }
    }), t.default = i
}