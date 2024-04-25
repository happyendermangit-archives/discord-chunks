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
        p = n("887278"),
        O = n("565885"),
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
        b = n("706629"),
        G = n("836157"),
        w = n("166884"),
        B = n("924371"),
        k = n("894180"),
        V = n("86614"),
        x = n("498600"),
        F = n("631610"),
        H = n("951958"),
        Y = n("529558"),
        j = n("636458"),
        W = n("441167"),
        K = n("338336"),
        z = n("751571"),
        X = n("815016"),
        Q = n("725380"),
        q = n("581883"),
        Z = n("626135"),
        J = n("12647"),
        $ = n("70956"),
        ee = n("358085"),
        et = n("960048"),
        en = n("998502"),
        ei = n("13140"),
        er = n("314897"),
        es = n("967368"),
        ea = n("463395"),
        eo = n("592125"),
        el = n("828695"),
        eu = n("858340"),
        ed = n("19780"),
        e_ = n("631768"),
        ec = n("981631"),
        eE = n("70722"),
        eI = n("761274"),
        eT = n("526761"),
        ef = n("65154"),
        eS = n("689938");

    function eh(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let eA = new g.default("MediaEngineStore");
    (u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE";
    let em = "MediaEngineStore",
        eN = {
            left: 1,
            right: 1
        },
        ep = 5 * $.default.Millis.SECOND;

    function eO() {
        return {
            mode: ec.InputModes.VOICE_ACTIVITY,
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
            inputVolume: ef.DEFAULT_VOLUME,
            outputVolume: ef.DEFAULT_VOLUME,
            inputDeviceId: ef.DEFAULT_DEVICE_ID,
            outputDeviceId: ef.DEFAULT_DEVICE_ID,
            videoDeviceId: ef.DEFAULT_DEVICE_ID,
            qos: !1,
            qosMigrated: !1,
            videoHook: eR.supports(ef.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        }
    }
    let eR = (0, S.initializeMediaEngine)((0, S.determineMediaEngine)()),
        eC = {},
        eg = new Set([ef.MediaEngineContextTypes.DEFAULT]),
        eL = eR.supports(ef.Features.AUTO_ENABLE),
        eD = !1,
        ev = ef.MediaEngineContextTypes.STREAM,
        eM = {
            [ef.DEFAULT_DEVICE_ID]: to(eS.default.Messages.NO_INPUT_DEVICES)
        },
        ey = {
            [ef.DEFAULT_DEVICE_ID]: to(eS.default.Messages.NO_OUTPUT_DEVICES)
        },
        eP = {
            [ef.DEFAULT_DEVICE_ID]: to(eS.default.Messages.NO_VIDEO_DEVICES)
        },
        eU = !1,
        eb = !1,
        eG = !1,
        ew = !1,
        eB = !1,
        ek = ef.DISABLED_DEVICE_ID,
        eV = !1,
        ex = !1,
        eF = !1,
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
    z.default.hasPermission(eI.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), z.default.hasPermission(eI.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let e$ = new Set,
        e0 = !1,
        e1 = !1,
        e2 = {},
        e3 = {},
        e4 = 5 * $.default.Millis.SECOND;

    function e6() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT,
            t = eC[e];
        return null == t && (t = eO(), eC[e] = t), t
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.DEFAULT_VOLUME;
        return E().clamp(e, 0, t)
    }

    function e8(e) {
        let t = e6(e.context),
            i = !eL || t.mute || t.deaf;
        e.context === ef.MediaEngineContextTypes.DEFAULT ? i = i || eU || eb || eG || !z.default.didHavePermission(eI.NativePermissionTypes.AUDIO) : e.context === ef.MediaEngineContextTypes.STREAM && (i = !0), e.setSelfMute(i), e.setSelfDeaf(t.deaf),
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
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, ee.isWindows)() && p.cancelAttachToProcess(o.desktopSource.soundshareId), eR.setGoLiveSource(null, ev)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eR.setGoLiveSource(null, ev), (eB || r) && (ek = (eB = r) ? tu(eP, e6().videoDeviceId) : ef.DISABLED_DEVICE_ID, eR.setVideoInputDevice(ek)), s = a, null != a) {
            let e = {
                resolution: a.quality.resolution,
                frameRate: a.quality.frameRate
            };
            if (null != a.desktopSource) {
                let {
                    hdrCaptureMode: t
                } = x.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), n = e6().videoHook;
                eR.setGoLiveSource({
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tn(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: ti(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: ep,
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
        a && e3[s].add(t), (null == t || a) && Z.default.track(ec.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, M.default)(e)
        })
    }

    function tt(e) {
        let t = e6(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(ea.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ea.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ea.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function tn() {
        return (0, ee.isWindows)() && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eE.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function ti() {
        return (0, ee.isMac)() && eR.supports(ef.Features.SCREEN_CAPTURE_KIT) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eE.DARWIN_SCKIT_VERSION)
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
            !ej && ed.default.getState() === ec.RTCConnectionStates.RTC_CONNECTED && e.mode === ec.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e6(t);
        return Object.assign(i, e), !__OVERLAY__ && n && h.Storage.set(em, eC), i
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
            id: ef.DEFAULT_DEVICE_ID,
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
            i = null !== (e = q.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let r = e === eT.ProtoAudioSettingsContextTypes.USER ? ef.MediaEngineContextTypes.DEFAULT : ef.MediaEngineContextTypes.STREAM,
                s = r === ef.MediaEngineContextTypes.STREAM ? ef.DEFAULT_STREAM_VOLUME : ef.DEFAULT_VOLUME,
                a = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e6(r);
            for (let [e, t] of Object.entries(a)) null == (0, Q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== s ? l[e] = t.volume : delete l[e], eR.eachConnection(n => {
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
        if (null == i) return eA.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
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

    function tc(e, t) {
        (0, ee.isWindows)() && p.attachToProcess(e, {
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
        let e = ef.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e6(e);
        for (let [e, n] of Object.entries(t)) n === ec.VideoToggleState.AUTO_PROBING && delete t[e];
        ts({
            videoToggleStateMap: t
        }, e, !1)
    }

    function tI(e) {
        let t = e6();
        Z.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
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
            n = ea.default.hasEchoCancellation(t) || e.echoCancellation,
            i = ea.default.hasNoiseSuppression(t) || e.noiseSuppression,
            r = ea.default.hasAutomaticGainControl(t) || e.automaticGainControl,
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
            await en.default.ensureModule("discord_krisp"), en.default.requireModule("discord_krisp"), eX = !0, i.emitChange()
        } catch (t) {
            eA.warn("Failed to load Krisp module: ".concat(t.message)), et.default.captureException(t);
            let e = ef.NoiseCancellerError.INITIALIZED;
            if (t.message.includes(": ")) {
                let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                e = isNaN(n) || 0 === n ? ef.NoiseCancellerError.INITIALIZED : n
            }
            Z.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), ts({
                noiseCancellation: !1
            })
        } finally {
            ez = !1
        }
    }

    function th(e) {
        let {
            section: t
        } = e;
        return t === ec.UserSettingsSections.VOICE && ta(), !1
    }
    class tA extends(l = f.default.Store) {
        initialize() {
            eR.on(S.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = H.default.getCurrentConfig({
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
                r && e.setExperimentFlag(ef.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                let a = ed.default.getGuildId(),
                    {
                        muteBeforeProcessing: o,
                        pttBeforeProcessing: l,
                        skipEncode: u
                    } = (null != a ? b.default : U.default).getCurrentConfig({
                        location: "setupMediaEngine",
                        ...null != a && {
                            guildId: a
                        }
                    }, {
                        autoTrackExposure: !0
                    });
                o && e.setExperimentFlag(ef.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(ef.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(ef.ExperimentFlags.SKIP_ENCODE, !0);
                {
                    (0, ee.isWindows)() && e.setExperimentFlag(ef.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = V.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && n.hardwareH264 && e.setExperimentFlag(ef.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: i
                    } = k.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    i && n.hardwareH264 && e.setExperimentFlag(ef.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: r
                    } = B.default.getCurrentConfig({
                        location: "f627ab_8"
                    }, {
                        autoTrackExposure: !0
                    });
                    if (r) {
                        var d;
                        (0, ee.isMac)() && (null === (d = window.DiscordNative) || void 0 === d ? void 0 : d.os.arch) === "arm64" && (n.hardwareH264 ? e.setExperimentFlag(ef.ExperimentFlags.SIGNAL_H265_SUPPORT, !0) : e.setExperimentFlag(ef.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0))
                    }
                }
                let {
                    signalAV1Support: _
                } = y.default.getCurrentConfig({
                    location: "f627ab_10"
                }, {
                    autoTrackExposure: !0
                });
                _ && e.setExperimentFlag(ef.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                let {
                    allowSettingFullbandAndroid: c
                } = F.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (c && eR.setHasFullbandPerformance((0, L.hasPerformanceForKrispFullband)()), (0, C.default)(i)) {
                    let t = R.default.getSettings();
                    e.setExperimentFlag(ef.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = W.default.getCurrentConfig({
                        location: "f627ab_15"
                    }, {
                        autoTrackExposure: !1
                    });
                    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ef.VIEWERSIDE_CLIP_KFI_MS);
                    let {
                        allowQualityDecoupling: i
                    } = O.default.getCurrentConfig({
                        location: "MediaEngineStore_setupMediaEngine"
                    }, {
                        autoTrackExposure: !0
                    });
                    e.setQualityDecoupling(i)
                }
                for (let t of (n = e6(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== er.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                for (let t of Object.keys(n.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
                }), e.context === ef.MediaEngineContextTypes.DEFAULT && (ex = !1, e.on(S.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    ex = !0, i.emitChange()
                })), e.on(S.BaseConnectionEvent.DesktopSourceEnd, () => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(S.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == s ? void 0 : s.desktopSource) != null && Z.default.track(ec.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, M.default)(null == s ? void 0 : s.desktopSource))
                }), e.on(S.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    te(null == s ? void 0 : s.desktopSource, t, n, i)
                }), e.on(S.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == s ? void 0 : s.desktopSource) != null && (Z.default.track(ec.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, M.default)(null == s ? void 0 : s.desktopSource)), null != eu.default.getHookError(ec.MediaEngineHookTypes.SOUND) && m.default.wait(() => m.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let E = new A.Timeout;
                e.on(S.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            E.start(e4, () => {
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
                            (null == s ? void 0 : s.desktopSource) != null && (te(null == s ? void 0 : s.desktopSource, n, t, i), !i && (E.stop(), m.default.wait(() => m.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                errorMessage: t,
                                errorCode: n
                            }))));
                            break;
                        case "soundshare_state_transition":
                            4 === e.newState && (E.stop(), m.default.wait(() => m.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                            })))
                    }
                }), e.on(S.BaseConnectionEvent.InteractionRequired, e => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e
                    })
                }), e.on(S.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, a) => {
                    (null == s ? void 0 : s.desktopSource) != null && Z.default.track(ec.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: r,
                        reinitialization: a,
                        ...(0, M.default)(null == s ? void 0 : s.desktopSource)
                    })
                }), e.on(S.BaseConnectionEvent.NoiseCancellationError, e => {
                    eA.warn("noisecancellererror event: ".concat(e)), eq = !0, Z.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
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
                    eA.warn("voiceactivitydetectorerror event: ".concat(e)), Z.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), m.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: ef.MediaEngineContextTypes.DEFAULT,
                        mode: ec.InputModes.VOICE_ACTIVITY,
                        options: {
                            ...e6(ef.MediaEngineContextTypes.DEFAULT).modeOptions,
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
                    E.stop()
                }), e.setBitRate(es.default.bitrate), e.applyVideoQualityMode(e_.default.mode)
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
                    await J.default.submitLiveCrashReport({
                        message: {
                            message: "Voice Watchdog Timeout"
                        }
                    })
                } catch (t) {
                    "number" == typeof t.status && (e = t.status)
                }
                eA.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Z.default.track(ec.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e
                })
            }), eR.on(S.MediaEngineEvent.VideoInputInitialized, e => {
                Z.default.track(ec.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.default.Millis.SECOND),
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
                (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && p.cancelAttachToProcess(t), a = null)
            }), tr.reset(), ! function() {
                var e;
                let t = h.Storage.get("audio");
                null != t && (h.Storage.set(em, {
                        [ef.MediaEngineContextTypes.DEFAULT]: t
                    }), h.Storage.remove("audio")), eC = null !== (e = h.Storage.get(em)) && void 0 !== e ? e : {}, E().each(eC, e => {
                        if (E().defaultsDeep(e, eO()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e6();
                        eR.setAudioInputDevice(e.inputDeviceId), eR.setAudioOutputDevice(e.outputDeviceId), e9(), eR.setInputVolume(e.inputVolume), eR.setOutputVolume(e.outputVolume), eR.setH264Enabled(e.openH264), eR.setAv1Enabled(e.hardwareH264), eR.setH265Enabled(e.hardwareH264), eR.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, ee.isDesktop)() || __OVERLAY__ || ez || eX ? (0, ee.isWeb)() && eR.supports(ef.Features.NOISE_CANCELLATION) ? (eX = !0, i.emitChange()) : (0, ee.isWeb)() && ts({
                noiseCancellation: !1
            }) : (ez = !0, tS()), tE(), e2 = {
                [ef.Features.VIDEO]: eR.supports(ef.Features.VIDEO),
                [ef.Features.DESKTOP_CAPTURE]: eR.supports(ef.Features.DESKTOP_CAPTURE),
                [ef.Features.HYBRID_VIDEO]: eR.supports(ef.Features.HYBRID_VIDEO)
            }, this.waitFor(er.default, ea.default, eo.default, eu.default, ed.default, v.default, z.default.storage, q.default, el.default, R.default)
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
            return eR.supports(ef.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eR.supports(ef.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return eX || !1
        }
        isNoiseCancellationError() {
            return eq
        }
        isAutomaticGainControlSupported() {
            return eR.supports(ef.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return eX || !1
        }
        isAecDumpSupported() {
            return eR.supports(ef.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eR.supports(ef.Features.VIDEO) && eR.supports(ef.Features.SIMULCAST)
        }
        getAecDump() {
            return e6().aecDumpEnabled
        }
        getMediaEngine() {
            return eR
        }
        getVideoComponent() {
            return eR.supports(ef.Features.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Video
        }
        getCameraComponent() {
            return eR.supports(ef.Features.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Camera
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT;
            return e === ef.MediaEngineContextTypes.DEFAULT && eb
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e6(e).mute || !z.default.didHavePermission(eI.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === ef.MediaEngineContextTypes.DEFAULT && eG
        }
        shouldSkipMuteUnmuteSound() {
            let {
                airpodsMuteSupported: e
            } = P.default.getCurrentConfig({
                location: "shouldSkipMuteUnmuteSound"
            }, {
                autoTrackExposure: !0
            });
            return !!e && eV
        }
        notifyMuteUnmuteSoundWasSkipped() {
            eV = !1
        }
        isHardwareMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && ea.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT;
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.STREAM;
            return ev === e && null != s
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.STREAM;
            return ev === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.MediaEngineContextTypes.DEFAULT;
            return e !== er.default.getId() && (e6(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eR.supports(ef.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e6(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e6(n).videoToggleStateMap[e]) && void 0 !== t ? t : ec.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.MediaEngineContextTypes.DEFAULT;
            return t === ef.MediaEngineContextTypes.DEFAULT && e$.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT;
            return e === ef.MediaEngineContextTypes.DEFAULT && e$.size > 0
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
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.MediaEngineContextTypes.DEFAULT,
                n = e6(t).localPans[e];
            return null != n ? n : eN
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ef.MediaEngineContextTypes.DEFAULT,
                n = t === ef.MediaEngineContextTypes.STREAM ? ef.DEFAULT_STREAM_VOLUME : ef.DEFAULT_VOLUME,
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT;
            return e6(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT;
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
                i === ec.InputModes.PUSH_TO_TALK && eg.has(n) && (e[n] = r)
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
            return ea.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e6().h265Enabled
        }
        getLoopback() {
            return eR.getLoopback()
        }
        getNoiseSuppression() {
            let e = e6();
            return ea.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e6();
            return ea.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT;
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
            return ee.isPlatformEmbedded || this.getMode() !== ec.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
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
            return eR.supports(ef.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e6().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eR.supports(ef.Features.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eE.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e6().openH264
        }
        getEverSpeakingWhileMuted() {
            return ex
        }
        supportsScreenSoundshare() {
            return (0, ee.isMac)() && eR.supports(ef.Features.SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eE.DARWIN_SCKIT_AUDIO_VERSION) && ti() || (0, ee.isWindows)() && eR.supports(ef.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ef.MediaEngineContextTypes.DEFAULT,
                n = this.supports(ef.Features.VIDEO) ? [{
                    rid: "100",
                    type: t === ef.MediaEngineContextTypes.DEFAULT ? ef.MediaTypes.VIDEO : ef.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            if (this.isSimulcastSupported() && (t === ef.MediaEngineContextTypes.DEFAULT || (e = !1, w.default.getCurrentConfig({
                    location: "GoLiveSimulcastEnabled"
                }, {
                    autoTrackExposure: e
                }).enableGoLiveSimulcast))) n.push({
                rid: "50",
                type: ef.MediaTypes.VIDEO,
                quality: 50
            });
            return n
        }
        getSupportedSecureFramesProtocolVersion(e) {
            var t;
            let n = eR.getSupportedSecureFramesProtocolVersion(),
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
    eh(tA, "displayName", "MediaEngineStore"), i = new tA(m.default, {
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
            return t.reduce((e, t) => r === t.sessionId ? (eU = t.mute || t.suppress, ew = t.deaf, eR.eachConnection(e8), e9(!(null != t.guildId && null != t.channelId && null != eQ && eQ !== t.channelId) && eB), eQ = t.channelId, !0) : (!__OVERLAY__ && t.userId === er.default.getId() && null == ed.default.getChannelId() && e9(!1, null), e), !1)
        },
        CONNECTION_OPEN: function(e) {
            r = e.sessionId, eU = !1, ew = !1, (0, X.shouldReadWriteAudioSettings)() && td()
        },
        CONNECTION_CLOSED: function() {
            r = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case ec.RTCConnectionStates.CONNECTING:
                    ta();
                    break;
                case ec.RTCConnectionStates.RTC_CONNECTING:
                    ej = !1, eW = !1;
                    break;
                case ec.RTCConnectionStates.RTC_CONNECTED:
                    e9();
                    break;
                case ec.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === e$.size) return;
                        let e = ef.MediaEngineContextTypes.DEFAULT,
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
            if (t === ef.MediaEngineContextTypes.DEFAULT && (z.default.requestPermission(eI.NativePermissionTypes.AUDIO), eG)) return !1;
            !(i = !r && !i) && (r = !1), n && (eV = !0), ts({
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
            if (n === er.default.getId()) return;
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
            let I = d === ec.VideoToggleState.DISABLED,
                {
                    disabledLocalVideos: T
                } = e6(l),
                f = null !== (t = T[u]) && void 0 !== t && t,
                S = e$.has(u),
                h = d === ec.VideoToggleState.AUTO_ENABLED || d === ec.VideoToggleState.MANUAL_ENABLED;
            eA.info("disableVideo=".concat(I, " currentlyDisabled=").concat(f, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(h)), _()(!(S && !f), "If you are auto-disabled, then you are also disabled.");
            let A = I !== f,
                m = l === ef.MediaEngineContextTypes.DEFAULT,
                N = E && A && m,
                p = c && A && m;
            eA.info("changed=".concat(A, " isDefaultContext=").concat(m, " isUpdateCausedByVideoHealthManager=").concat(N, " isManualToggleByUser=").concat(p));
            let {
                videoToggleStateMap: O
            } = e6(l);
            if (O[u] === ec.VideoToggleState.AUTO_PROBING && d === ec.VideoToggleState.AUTO_ENABLED && (0, K.default)(u, I ? ef.VideoToggleReason.AUTO_DISABLE : ef.VideoToggleReason.AUTO_ENABLE, h), O[u] = d, ts({
                    videoToggleStateMap: O
                }, l, c), d === ec.VideoToggleState.AUTO_PROBING ? null === (n = ed.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ed.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e0 && (eA.info("isAutoDisableAllowed=".concat(e0, " - disabling VideoHealthManager")), null === (s = ed.default.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), N) {
                if (!I && !S || I && !e0) return;
                (0, K.default)(u, I ? ef.VideoToggleReason.AUTO_DISABLE : ef.VideoToggleReason.AUTO_ENABLE, h), I ? e$.add(u) : e$.delete(u)
            } else p && (S && !I ? (eA.info("disallowing auto-disable for this session because of manual override by user"), e0 = !1, null === (o = ed.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, K.default)(u, ef.VideoToggleReason.MANUAL_REENABLE, h)) : (0, K.default)(u, I ? ef.VideoToggleReason.MANUAL_DISABLE : ef.VideoToggleReason.MANUAL_ENABLE, h));
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
            if (n === er.default.getId()) return;
            let r = t === ef.MediaEngineContextTypes.STREAM ? ef.DEFAULT_STREAM_VOLUME : ef.DEFAULT_VOLUME,
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
                if (eM = tl(e, eS.default.Messages.NO_INPUT_DEVICES), !E().isEqual(eM, t)) {
                    let e = e6(),
                        t = tu(eM, e.inputDeviceId);
                    eR.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = ey;
                if (ey = tl(e, eS.default.Messages.NO_OUTPUT_DEVICES), !E().isEqual(ey, t)) {
                    let e = e6(),
                        t = tu(ey, e.outputDeviceId);
                    eR.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                eH = e.length > 0;
                let t = eP;
                if (eP = tl(e, eS.default.Messages.NO_VIDEO_DEVICES), eB && !E().isEqual(eP, t)) {
                    var n;
                    let e = void 0 !== eP[ek],
                        i = ek === ef.DEFAULT_DEVICE_ID && (null === (n = t[ef.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
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
            h.Storage.remove(em), location.reload()
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
            z.default.requestPermission(eI.NativePermissionTypes.CAMERA), e9(t)
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
                    u = null !== (t = o.context) && void 0 !== t ? t : ef.MediaEngineContextTypes.DEFAULT,
                    d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                        resolution: 720,
                        frameRate: 30
                    },
                    _ = J.default.getPidFromDesktopSource(r);
                ee.isPlatformEmbedded && !0 === l && ({
                    soundshareId: e,
                    soundshareSession: i
                } = t_(_), null != e && tc(e, i)), (a = u) !== ev && (null != s && eR.setGoLiveSource(null, ev), ev = a), e9(u === ef.MediaEngineContextTypes.STREAM && eB, {
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
                let e = null !== (i = o.context) && void 0 !== i ? i : ef.MediaEngineContextTypes.DEFAULT,
                    {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    } = o.cameraSettings,
                    s = e === ef.MediaEngineContextTypes.STREAM && eB,
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
        USER_SETTINGS_MODAL_INIT: th,
        USER_SETTINGS_MODAL_SET_SECTION: th,
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
            eR.eachConnection(e => e.setHardwareH264(n.hardwareH264)), eR.setAv1Enabled(n.hardwareH264), eR.setH265Enabled(n.hardwareH264)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = D.default.isEnabled();
            if (t === ec.AppStates.BACKGROUND && eB && !n) eF = !0, e9(!1);
            else {
                if (t !== ec.AppStates.ACTIVE || !eF) return !1;
                eF = !1, e9(!0)
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
            } = e, i = t === eI.NativePermissionStates.ACCEPTED;
            switch (n) {
                case eI.NativePermissionTypes.AUDIO:
                    eJ = !0, eR.eachConnection(e8);
                    break;
                case eI.NativePermissionTypes.CAMERA:
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
            if (!eB && null == s || null != ed.default.getRTCConnectionId()) return !1;
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
            if (!(0, X.shouldReadWriteAudioSettings)() || t !== eT.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            td(!0)
        },
        CLIPS_INIT: function(e) {
            let {
                sourceId: t,
                applicationName: n,
                quality: r
            } = e, {
                enableDecoupledGameClipping: s
            } = G.default.getCurrentConfig({
                location: "handleClipsInit"
            }, {
                autoTrackExposure: !0
            }), o = R.default.getSettings().decoupledClipsEnabled;
            if (!s || !o || null == N.default) return;
            let l = null,
                u = null,
                d = J.default.getPidFromDesktopSource(t);
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
            null != a && a.desktopSource.id !== _.desktopSource.id && (eR.setClipsSource(null), (0, ee.isWindows)() && null != a.desktopSource.soundshareId && p.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tc(l, u), a = _;
            let {
                hdrCaptureMode: c
            } = x.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), E = e6().videoHook;
            eR.setClipsSource({
                desktopDescription: {
                    id: a.desktopSource.id,
                    soundshareId: a.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: tn(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: ti(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: ep,
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