function(e, t, n) {
    "use strict";
    let i, r, a, s;
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
        v = n("646047"),
        D = n("594190"),
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
        j = n("874785"),
        W = n("636458"),
        K = n("441167"),
        z = n("338336"),
        Z = n("751571"),
        X = n("815016"),
        Q = n("725380"),
        q = n("581883"),
        J = n("626135"),
        $ = n("12647"),
        ee = n("70956"),
        et = n("358085"),
        en = n("960048"),
        ei = n("998502"),
        er = n("13140"),
        ea = n("314897"),
        es = n("967368"),
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
        eh = n("689938");

    function eA(e, t, n) {
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
        ep = {
            left: 1,
            right: 1
        },
        eO = 5 * ee.default.Millis.SECOND;

    function eR() {
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
            videoHook: eC.supports(eS.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        }
    }
    let eC = (0, S.initializeMediaEngine)((0, S.determineMediaEngine)()),
        eg = {},
        eL = new Set([eS.MediaEngineContextTypes.DEFAULT]),
        ev = eC.supports(eS.Features.AUTO_ENABLE),
        eD = !1,
        eM = eS.MediaEngineContextTypes.STREAM,
        ey = {
            [eS.DEFAULT_DEVICE_ID]: tl(eh.default.Messages.NO_INPUT_DEVICES)
        },
        eP = {
            [eS.DEFAULT_DEVICE_ID]: tl(eh.default.Messages.NO_OUTPUT_DEVICES)
        },
        eU = {
            [eS.DEFAULT_DEVICE_ID]: tl(eh.default.Messages.NO_VIDEO_DEVICES)
        },
        eb = !1,
        eG = !1,
        ew = !1,
        eB = !1,
        ek = !1,
        eV = eS.DISABLED_DEVICE_ID,
        ex = !1,
        eF = !1,
        eH = !1,
        eY = !1,
        ej = null,
        eW = !1,
        eK = !1,
        ez = !1,
        eZ = !1,
        eX = !1,
        eQ = null,
        eq = !1,
        eJ = !1,
        e$ = !1;
    Z.default.hasPermission(eT.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), Z.default.hasPermission(eT.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let e0 = new Set,
        e1 = !1,
        e2 = !1,
        e3 = {},
        e4 = {},
        e6 = 5 * ee.default.Millis.SECOND;

    function e7() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT,
            t = eg[e];
        return null == t && (t = eR(), eg[e] = t), t
    }

    function e5(e) {
        let t = e7(e.context);
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

    function e8(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.DEFAULT_VOLUME;
        return E().clamp(e, 0, t)
    }

    function e9(e) {
        let t = e7(e.context),
            i = !ev || t.mute || t.deaf;
        e.context === eS.MediaEngineContextTypes.DEFAULT ? i = i || eb || eG || ew || !Z.default.didHavePermission(eT.NativePermissionTypes.AUDIO) : e.context === eS.MediaEngineContextTypes.STREAM && (i = !0), e.setSelfMute(i), e.setSelfDeaf(t.deaf),
            function(e) {
                Promise.resolve().then(n.bind(n, "44744")).then(t => {
                    let {
                        default: n
                    } = t;
                    n.updateNativeMute(e)
                })
            }(e.context)
    }

    function te() {
        var e, t, n;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek,
            s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
            o = a;
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, et.isWindows)() && p.cancelAttachToProcess(o.desktopSource.soundshareId), eC.setGoLiveSource(null, eM)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eC.setGoLiveSource(null, eM), (ek || r) && (eV = (ek = r) ? td(eU, e7().videoDeviceId) : eS.DISABLED_DEVICE_ID, eC.setVideoInputDevice(eV)), a = s, null != s) {
            let e = {
                resolution: s.quality.resolution,
                frameRate: s.quality.frameRate
            };
            if (null != s.desktopSource) {
                let {
                    hdrCaptureMode: t
                } = x.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), n = e7().videoHook;
                eC.setGoLiveSource({
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: ti(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tr(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eO,
                        hdrCaptureMode: t
                    },
                    quality: e
                }, eM)
            }
            null != s.cameraSource && eC.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: s.cameraSource.audioDeviceGuid
                },
                quality: e
            }, eM)
        }
    }

    function tt(e, t, n, i) {
        var r;
        let a = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
        null == e4[a] && (e4[a] = new Set);
        let s = null != t && !e4[a].has(t);
        s && e4[a].add(t), (null == t || s) && J.default.track(eE.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, M.default)(e)
        })
    }

    function tn(e) {
        let t = e7(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(eo.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, et.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function ti() {
        return (0, et.isWindows)() && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eI.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function tr() {
        return (0, et.isMac)() && eC.supports(eS.Features.SCREEN_CAPTURE_KIT) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eI.DARWIN_SCKIT_VERSION)
    }
    let ta = new class {
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
            let e = e7();
            !eW && e_.default.getState() === eE.RTCConnectionStates.RTC_CONNECTED && e.mode === eE.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
        }
        reset() {
            this.stop(), this.update()
        }
        constructor() {
            eA(this, "stateChangeTimeout", void 0), eA(this, "noVoiceTimeout", 5e3), eA(this, "voiceTimeout", 1500), eA(this, "started", !1), eA(this, "handleSilence", e => {
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

    function ts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e7(t);
        return Object.assign(i, e), !__OVERLAY__ && n && h.Storage.set(eN, eg), i
    }

    function to() {
        !ev && eC.enable().then(() => m.default.dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: !0,
            unmute: !1
        }))
    }

    function tl(e) {
        return {
            id: eS.DEFAULT_DEVICE_ID,
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
            i = null !== (e = q.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let r = e === ef.ProtoAudioSettingsContextTypes.USER ? eS.MediaEngineContextTypes.DEFAULT : eS.MediaEngineContextTypes.STREAM,
                a = r === eS.MediaEngineContextTypes.STREAM ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
                s = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e7(r);
            for (let [e, t] of Object.entries(s)) null == (0, Q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== a ? l[e] = t.volume : delete l[e], eC.eachConnection(n => {
                n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
            }, r));
            if (n)
                for (let e of new Set([...Object.keys(o), ...Object.keys(l)])) null == s[e] && (delete o[e], delete l[e], eC.eachConnection(t => {
                    t.setLocalVolume(e, a), t.setLocalMute(e, !1)
                }, r));
            ts({
                localMutes: o,
                localVolumes: l
            }, r)
        }
    }

    function tc(e) {
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

    function tE(e, t) {
        (0, et.isWindows)() && p.attachToProcess(e, {
            soundshare_session: t
        }).then(t => {
            null != t && !D.default.shouldContinueWithoutElevatedProcessForPID(e) && m.default.wait(() => {
                m.default.dispatch({
                    type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                    errorMessage: t
                })
            })
        })
    }

    function tI() {
        let e = eS.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e7(e);
        for (let [e, n] of Object.entries(t)) n === eE.VideoToggleState.AUTO_PROBING && delete t[e];
        ts({
            videoToggleStateMap: t
        }, e, !1)
    }

    function tT(e) {
        let t = e7();
        J.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function tf() {
        let e = e7(),
            t = e.inputDeviceId,
            n = eo.default.hasEchoCancellation(t) || e.echoCancellation,
            i = eo.default.hasNoiseSuppression(t) || e.noiseSuppression,
            r = eo.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            a = e.noiseCancellation;
        eC.setLoopback(e2, {
            echoCancellation: n,
            noiseSuppression: i,
            automaticGainControl: r,
            noiseCancellation: a
        })
    }

    function tS() {
        return eX || !1
    }
    async function th() {
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
            eZ = !1
        }
    }

    function tA(e) {
        let {
            section: t
        } = e;
        return t === eE.UserSettingsSections.VOICE && to(), !1
    }
    class tm extends(l = f.default.Store) {
        initialize() {
            eC.on(S.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = H.default.getCurrentConfig({
                    location: "f627ab_3"
                }, {
                    autoTrackExposure: !1
                });
                t > 0 && eC.setMaxSyncDelayOverride(t), e5(e), e9(e), tn(e);
                let n = e7();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                let {
                    useExperimentalRateControl: r
                } = W.default.getCurrentConfig({
                    location: "f627ab_4"
                }, {
                    autoTrackExposure: !1
                });
                r && e.setExperimentFlag(eS.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                let s = e_.default.getGuildId(),
                    {
                        muteBeforeProcessing: o,
                        pttBeforeProcessing: l,
                        skipEncode: u
                    } = (null != s ? b.default : U.default).getCurrentConfig({
                        location: "setupMediaEngine",
                        ...null != s && {
                            guildId: s
                        }
                    }, {
                        autoTrackExposure: !0
                    });
                o && e.setExperimentFlag(eS.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eS.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eS.ExperimentFlags.SKIP_ENCODE, !0);
                let {
                    resetOnErrors: d,
                    fallbackOnErrors: _,
                    fallbackOnConsecutiveErrors: c
                } = j.default.getCurrentConfig({
                    location: "setupMediaEngine"
                }, {
                    autoTrackExposure: !0
                });
                d && e.setExperimentFlag(eS.ExperimentFlags.RESET_DECODER_ON_ERRORS, !0), _ && e.setExperimentFlag(eS.ExperimentFlags.SOFTWARE_FALLBACK_ON_ERRORS, !0), c && e.setExperimentFlag(eS.ExperimentFlags.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                {
                    (0, et.isWindows)() && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = V.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && n.hardwareH264 && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: i
                    } = k.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    i && n.hardwareH264 && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: r
                    } = B.default.getCurrentConfig({
                        location: "f627ab_8"
                    }, {
                        autoTrackExposure: !0
                    });
                    if (r) {
                        var E;
                        (0, et.isMac)() && (null === (E = window.DiscordNative) || void 0 === E ? void 0 : E.os.arch) === "arm64" && (n.hardwareH264 ? e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_SUPPORT, !0) : e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0))
                    }
                }
                let {
                    signalAV1Support: I
                } = y.default.getCurrentConfig({
                    location: "f627ab_10"
                }, {
                    autoTrackExposure: !0
                });
                I && e.setExperimentFlag(eS.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                let {
                    allowSettingFullbandAndroid: T
                } = F.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (T && eC.setHasFullbandPerformance((0, L.hasPerformanceForKrispFullband)()), (0, C.default)(i)) {
                    let t = R.default.getSettings();
                    e.setExperimentFlag(eS.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = K.default.getCurrentConfig({
                        location: "f627ab_15"
                    }, {
                        autoTrackExposure: !1
                    });
                    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eS.VIEWERSIDE_CLIP_KFI_MS);
                    let {
                        allowQualityDecoupling: i
                    } = O.default.getCurrentConfig({
                        location: "MediaEngineStore_setupMediaEngine"
                    }, {
                        autoTrackExposure: !0
                    });
                    e.setQualityDecoupling(i)
                }
                for (let t of (n = e7(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== ea.default.getId() && e.setLocalMute(t, n.localMutes[t]);
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
                }), e.context === eS.MediaEngineContextTypes.DEFAULT && (eF = !1, e.on(S.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    eF = !0, i.emitChange()
                })), e.on(S.BaseConnectionEvent.DesktopSourceEnd, () => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(S.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == a ? void 0 : a.desktopSource) != null && J.default.track(eE.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, M.default)(null == a ? void 0 : a.desktopSource))
                }), e.on(S.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    tt(null == a ? void 0 : a.desktopSource, t, n, i)
                }), e.on(S.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == a ? void 0 : a.desktopSource) != null && (J.default.track(eE.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, M.default)(null == a ? void 0 : a.desktopSource)), null != ed.default.getHookError(eE.MediaEngineHookTypes.SOUND) && m.default.wait(() => m.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let f = new A.Timeout;
                e.on(S.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            f.start(e6, () => {
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
                            (null == a ? void 0 : a.desktopSource) != null && (tt(null == a ? void 0 : a.desktopSource, n, t, i), !i && (f.stop(), m.default.wait(() => m.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                errorMessage: t,
                                errorCode: n
                            }))));
                            break;
                        case "soundshare_state_transition":
                            4 === e.newState && (f.stop(), m.default.wait(() => m.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                            })))
                    }
                }), e.on(S.BaseConnectionEvent.InteractionRequired, e => {
                    m.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e
                    })
                }), e.on(S.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, s) => {
                    (null == a ? void 0 : a.desktopSource) != null && J.default.track(eE.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: r,
                        reinitialization: s,
                        ...(0, M.default)(null == a ? void 0 : a.desktopSource)
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
                            ...e7(eS.MediaEngineContextTypes.DEFAULT).modeOptions,
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
                    f.stop()
                }), e.setBitRate(es.default.bitrate), e.applyVideoQualityMode(ec.default.mode)
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
            }), eC.on(S.MediaEngineEvent.VideoInputInitialized, e => {
                J.default.track(eE.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ee.default.Millis.SECOND),
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
                (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (i = a.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && p.cancelAttachToProcess(t), s = null)
            }), ta.reset(), ! function() {
                var e;
                let t = h.Storage.get("audio");
                null != t && (h.Storage.set(eN, {
                        [eS.MediaEngineContextTypes.DEFAULT]: t
                    }), h.Storage.remove("audio")), eg = null !== (e = h.Storage.get(eN)) && void 0 !== e ? e : {}, E().each(eg, e => {
                        if (E().defaultsDeep(e, eR()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, er.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, et.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e7();
                        eC.setAudioInputDevice(e.inputDeviceId), eC.setAudioOutputDevice(e.outputDeviceId), te(), eC.setInputVolume(e.inputVolume), eC.setOutputVolume(e.outputVolume), eC.setH264Enabled(e.openH264), eC.setAv1Enabled(e.hardwareH264), eC.setH265Enabled(e.hardwareH264), eC.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, et.isDesktop)() || __OVERLAY__ || eZ || eX ? (0, et.isWeb)() && eC.supports(eS.Features.NOISE_CANCELLATION) ? (eX = !0, i.emitChange()) : (0, et.isWeb)() && ts({
                noiseCancellation: !1
            }) : (eZ = !0, th()), tI(), e3 = {
                [eS.Features.VIDEO]: eC.supports(eS.Features.VIDEO),
                [eS.Features.DESKTOP_CAPTURE]: eC.supports(eS.Features.DESKTOP_CAPTURE),
                [eS.Features.HYBRID_VIDEO]: eC.supports(eS.Features.HYBRID_VIDEO)
            }, this.waitFor(ea.default, eo.default, el.default, ed.default, e_.default, D.default, Z.default.storage, q.default, eu.default, R.default)
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
            return eC.supports(eS.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eC.supports(eS.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return eX || !1
        }
        isNoiseCancellationError() {
            return eq
        }
        isAutomaticGainControlSupported() {
            return eC.supports(eS.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return eX || !1
        }
        isAecDumpSupported() {
            return eC.supports(eS.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eC.supports(eS.Features.VIDEO) && eC.supports(eS.Features.SIMULCAST)
        }
        getAecDump() {
            return e7().aecDumpEnabled
        }
        getMediaEngine() {
            return eC
        }
        getVideoComponent() {
            return eC.supports(eS.Features.DIRECT_VIDEO) && eC.setUseDirectVideo(!0), eC.Video
        }
        getCameraComponent() {
            return eC.supports(eS.Features.DIRECT_VIDEO) && eC.setUseDirectVideo(!0), eC.Camera
        }
        isEnabled() {
            return ev
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e === eS.MediaEngineContextTypes.DEFAULT && eG
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e7(e).mute || !Z.default.didHavePermission(eT.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eS.MediaEngineContextTypes.DEFAULT && ew
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return !this.isSupported() || e7(e).deaf
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.STREAM;
            return eM === e && null != a
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.STREAM;
            return eM === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
            return e !== ea.default.getId() && (e7(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eC.supports(eS.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e7(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e7(n).videoToggleStateMap[e]) && void 0 !== t ? t : eE.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT;
            return t === eS.MediaEngineContextTypes.DEFAULT && e0.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e === eS.MediaEngineContextTypes.DEFAULT && e0.size > 0
        }
        isMediaFilterSettingLoading() {
            return eJ
        }
        isNativeAudioPermissionReady() {
            return e$
        }
        getGoLiveSource() {
            return a
        }
        getGoLiveContext() {
            return eM
        }
        getLocalPan(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
                n = e7(t).localPans[e];
            return null != n ? n : ep
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.MediaEngineContextTypes.DEFAULT,
                n = t === eS.MediaEngineContextTypes.STREAM ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
                i = e7(t).localVolumes[e];
            return null != i ? i : n
        }
        getInputVolume() {
            return e7().inputVolume
        }
        getOutputVolume() {
            return e7().outputVolume
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e7(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e7(e).modeOptions
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
                i === eE.InputModes.PUSH_TO_TALK && eL.has(n) && (e[n] = r)
            }), e
        }
        getInputDeviceId() {
            return td(ey, e7().inputDeviceId)
        }
        getOutputDeviceId() {
            return td(eP, e7().outputDeviceId)
        }
        getVideoDeviceId() {
            return td(eU, e7().videoDeviceId)
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
            let e = e7();
            return eo.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e7().h265Enabled
        }
        getLoopback() {
            return eC.getLoopback()
        }
        getNoiseSuppression() {
            let e = e7();
            return eo.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e7();
            return eo.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
        }
        getNoiseCancellation() {
            return e7().noiseCancellation
        }
        getExperimentalEncoders() {
            return e7().experimentalEncoders
        }
        getHardwareH264() {
            return e7().hardwareH264
        }
        getEnableSilenceWarning() {
            return e7().silenceWarning
        }
        getDebugLogging() {
            return eC.getDebugLogging()
        }
        getQoS() {
            return e7().qos
        }
        getAttenuation() {
            return e7().attenuation
        }
        getAttenuateWhileSpeakingSelf() {
            return e7().attenuateWhileSpeakingSelf
        }
        getAttenuateWhileSpeakingOthers() {
            return e7().attenuateWhileSpeakingOthers
        }
        getAudioSubsystem() {
            return eC.getAudioSubsystem()
        }
        getSettings() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT;
            return e7(e)
        }
        getState() {
            return {
                settingsByContext: eg,
                inputDevices: ey,
                outputDevices: eP,
                appSupported: e3,
                krispModuleLoaded: eX,
                goLiveSource: a,
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
            return et.isPlatformEmbedded || this.getMode() !== eE.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
        }
        setCanHavePriority(e, t) {
            eC.eachConnection(n => n.setCanHavePriority(e, t))
        }
        isInteractionRequired() {
            return eD
        }
        getVideoHook() {
            return e7().videoHook
        }
        supportsVideoHook() {
            return eC.supports(eS.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e7().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eC.supports(eS.Features.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eI.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e7().openH264
        }
        getEverSpeakingWhileMuted() {
            return eF
        }
        supportsScreenSoundshare() {
            return (0, et.isMac)() && eC.supports(eS.Features.SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eI.DARWIN_SCKIT_AUDIO_VERSION) && tr() || (0, et.isWindows)() && eC.supports(eS.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.MediaEngineContextTypes.DEFAULT,
                n = this.supports(eS.Features.VIDEO) ? [{
                    rid: "100",
                    type: t === eS.MediaEngineContextTypes.DEFAULT ? eS.MediaTypes.VIDEO : eS.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            if (this.isSimulcastSupported() && (t === eS.MediaEngineContextTypes.DEFAULT || (e = !1, w.default.getCurrentConfig({
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
            let n = eC.getSupportedSecureFramesProtocolVersion(),
                i = Y.SecureFramesUserExperiment.getCurrentConfig({
                    location: "MediaEngineStore"
                }),
                r = null != e ? Y.SecureFramesGuildExperiment.getCurrentConfig({
                    guildId: e,
                    location: "MediaEngineStore"
                }) : null,
                a = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
                s = i.canSupportMls || (null == r ? void 0 : r.canSupportMls),
                o = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0);
            return a && n % 100 >= o ? s ? n : n % 100 : 0
        }
        hasClipsSource() {
            return null != s
        }
    }
    eA(tm, "displayName", "MediaEngineStore"), i = new tm(m.default, {
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
            let a = e7();
            (a.mute || a.deaf) && (ts({
                deaf: !1,
                mute: !1
            }), eC.eachConnection(e9))
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => r === t.sessionId ? (eb = t.mute || t.suppress, eB = t.deaf, eC.eachConnection(e9), te(!(null != t.guildId && null != t.channelId && null != eQ && eQ !== t.channelId) && ek), eQ = t.channelId, !0) : (!__OVERLAY__ && t.userId === ea.default.getId() && null == e_.default.getChannelId() && te(!1, null), e), !1)
        },
        CONNECTION_OPEN: function(e) {
            r = e.sessionId, eb = !1, eB = !1, (0, X.shouldReadWriteAudioSettings)() && t_()
        },
        CONNECTION_CLOSED: function() {
            r = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case eE.RTCConnectionStates.CONNECTING:
                    to();
                    break;
                case eE.RTCConnectionStates.RTC_CONNECTING:
                    eW = !1, eK = !1;
                    break;
                case eE.RTCConnectionStates.RTC_CONNECTED:
                    te();
                    break;
                case eE.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === e0.size) return;
                        let e = eS.MediaEngineContextTypes.DEFAULT,
                            {
                                disabledLocalVideos: t
                            } = e7(e);
                        e0.forEach(n => {
                            _()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eC.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                        }), e0.clear(), ts({
                            disabledLocalVideos: t
                        }, e, !1)
                    })(), tI()
            }
            ta.update()
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
            } = e7(t);
            if (t === eS.MediaEngineContextTypes.DEFAULT && (Z.default.requestPermission(eT.NativePermissionTypes.AUDIO), ew)) return !1;
            !(i = !r && !i) && (r = !1), n && (ex = !0), ts({
                mute: i,
                deaf: r
            }, t), eC.eachConnection(e9)
        },
        AUDIO_SET_SELF_MUTE: function(e) {
            let {
                context: t,
                mute: n
            } = e;
            ts({
                mute: n
            }, t), eC.eachConnection(e9)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            let {
                context: t
            } = e;
            ts({
                deaf: !e7(t).deaf
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
            } = e7(t);
            i[n] ? delete i[n] : i[n] = !0, ts({
                localMutes: i
            }, t), eC.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
            var t, n, i, r, a, s, o;
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
                } = e7(l),
                f = null !== (t = T[u]) && void 0 !== t && t,
                S = e0.has(u),
                h = d === eE.VideoToggleState.AUTO_ENABLED || d === eE.VideoToggleState.MANUAL_ENABLED;
            em.info("disableVideo=".concat(I, " currentlyDisabled=").concat(f, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(h)), _()(!(S && !f), "If you are auto-disabled, then you are also disabled.");
            let A = I !== f,
                m = l === eS.MediaEngineContextTypes.DEFAULT,
                N = E && A && m,
                p = c && A && m;
            em.info("changed=".concat(A, " isDefaultContext=").concat(m, " isUpdateCausedByVideoHealthManager=").concat(N, " isManualToggleByUser=").concat(p));
            let {
                videoToggleStateMap: O
            } = e7(l);
            if (O[u] === eE.VideoToggleState.AUTO_PROBING && d === eE.VideoToggleState.AUTO_ENABLED && (0, z.default)(u, I ? eS.VideoToggleReason.AUTO_DISABLE : eS.VideoToggleReason.AUTO_ENABLE, h), O[u] = d, ts({
                    videoToggleStateMap: O
                }, l, c), d === eE.VideoToggleState.AUTO_PROBING ? null === (n = e_.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = e_.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e1 && (em.info("isAutoDisableAllowed=".concat(e1, " - disabling VideoHealthManager")), null === (a = e_.default.getRTCConnection()) || void 0 === a || null === (r = a.getVideoHealthManager()) || void 0 === r || r.disable()), N) {
                if (!I && !S || I && !e1) return;
                (0, z.default)(u, I ? eS.VideoToggleReason.AUTO_DISABLE : eS.VideoToggleReason.AUTO_ENABLE, h), I ? e0.add(u) : e0.delete(u)
            } else p && (S && !I ? (em.info("disallowing auto-disable for this session because of manual override by user"), e1 = !1, null === (o = e_.default.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, z.default)(u, eS.VideoToggleReason.MANUAL_REENABLE, h)) : (0, z.default)(u, I ? eS.VideoToggleReason.MANUAL_DISABLE : eS.VideoToggleReason.MANUAL_ENABLE, h));
            m && !I && e0.delete(u), I ? T[u] = !0 : delete T[u], ts({
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
            let r = t === eS.MediaEngineContextTypes.STREAM ? eS.DEFAULT_STREAM_VOLUME : eS.DEFAULT_VOLUME,
                {
                    localVolumes: a
                } = e7(t);
            i === r ? delete a[n] : a[n] = i, ts({
                localVolumes: a
            }, t), eC.eachConnection(e => e.setLocalVolume(n, i), t)
        },
        AUDIO_SET_LOCAL_PAN: function(e) {
            let {
                context: t,
                userId: n,
                left: i,
                right: r
            } = e, {
                localPans: a
            } = e7(t);
            a[n] = {
                left: i,
                right: r
            }, ts({
                localPans: a
            }, t), eC.eachConnection(e => e.setLocalPan(n, i, r), t)
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
            }, t), eC.eachConnection(e5), ta.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            ts({
                inputVolume: e8(t)
            }), eC.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            ts({
                outputVolume: t
            }), eC.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                inputDeviceId: t = td(ey, t)
            }), eC.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                outputDeviceId: t = td(eP, t)
            }), eC.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            let t = ts({
                echoCancellation: e.enabled
            });
            eC.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tf(), tT(e.location)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            let {
                enabled: t
            } = e;
            return e2 = t, tf()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            let t = ts({
                noiseSuppression: e.enabled
            });
            eC.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tf(), tT(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            let t = ts({
                automaticGainControl: e.enabled
            });
            eC.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tf(), tT(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            let t = ts({
                noiseCancellation: e.enabled
            });
            eC.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tf(), tT(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            ts({
                silenceWarning: e.enabled
            }), ta.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eC.setDebugLogging(e.enabled)
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
            eC.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
        },
        AUDIO_SET_QOS: function(e) {
            let {
                enabled: t
            } = e;
            ts({
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
                    let e = e7(),
                        t = td(ey, e.inputDeviceId);
                    eC.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = eP;
                if (eP = tu(e, eh.default.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eP, t)) {
                    let e = e7(),
                        t = td(eP, e.outputDeviceId);
                    eC.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                eY = e.length > 0;
                let t = eU;
                if (eU = tu(e, eh.default.Messages.NO_VIDEO_DEVICES), ek && !E().isEqual(eU, t)) {
                    var n;
                    let e = void 0 !== eU[eV],
                        i = eV === eS.DEFAULT_DEVICE_ID && (null === (n = t[eS.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    te(e || i)
                }
            }(i)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            let {
                inputVolume: t,
                outputVolume: n
            } = e;
            ts({
                inputVolume: e8(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            h.Storage.remove(eN), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            let {
                inputDetected: t
            } = e;
            ej = t, !eW && ej && (eW = !0, ta.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eC.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            ev = e.enabled, e.unmute && ts({
                mute: !1,
                deaf: !1
            }), eC.eachConnection(e9)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            Z.default.requestPermission(eT.NativePermissionTypes.CAMERA), te(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            let {
                kind: t,
                granted: n
            } = e;
            if (!n) switch (t) {
                case "audio":
                    ev = !1, eC.eachConnection(e9);
                    break;
                case "video":
                    te(!1)
            }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            var t, n, i, r, s;
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
                } = tc(_), null != e && tE(e, i)), (s = u) !== eM && (null != a && eC.setGoLiveSource(null, eM), eM = s), te(u === eS.MediaEngineContextTypes.STREAM && ek, {
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
                    a = e === eS.MediaEngineContextTypes.STREAM && ek,
                    s = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
                        resolution: 720,
                        frameRate: 30
                    };
                te(a, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: s.resolution,
                        frameRate: s.frameRate
                    }
                })
            } else te(ek, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                videoDeviceId: t = td(eU, t)
            }), te()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            let t = ts({
                experimentalEncoders: e.enabled
            });
            eC.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return eD !== e.required && (eD = e.required, !e.required && eC.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: tA,
        USER_SETTINGS_MODAL_SET_SECTION: tA,
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
            eg = t.settingsByContext, ey = t.inputDevices, eP = t.outputDevices, e3 = t.appSupported, eX = t.krispModuleLoaded, eM = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                openH264: t
            });
            eC.setH264Enabled(n.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                hardwareH264: t
            });
            eC.eachConnection(e => e.setHardwareH264(n.hardwareH264)), eC.setAv1Enabled(n.hardwareH264), eC.setH265Enabled(n.hardwareH264)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = v.default.isEnabled();
            if (t === eE.AppStates.BACKGROUND && ek && !n) eH = !0, te(!1);
            else {
                if (t !== eE.AppStates.ACTIVE || !eH) return !1;
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
            } = e, i = t === eT.NativePermissionStates.ACCEPTED;
            switch (n) {
                case eT.NativePermissionTypes.AUDIO:
                    e$ = !0, eC.eachConnection(e9);
                    break;
                case eT.NativePermissionTypes.CAMERA:
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
            } = e, n = ts({
                aecDumpEnabled: t
            });
            eC.setAecDump(n.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!ek && null == a || null != e_.default.getRTCConnectionId()) return !1;
            te(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!eq && (eq = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            eC.applyMediaFilterSettings(t).finally(() => {
                eJ = !1, i.emitChange()
            })
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
            eJ = !0
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
            eJ = !1
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                local: n,
                wasSaved: i
            } = e;
            if (!(0, X.shouldReadWriteAudioSettings)() || t !== ef.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            t_(!0)
        },
        CLIPS_INIT: function(e) {
            let {
                sourceId: t,
                applicationName: n,
                quality: r
            } = e, {
                enableDecoupledGameClipping: a
            } = G.default.getCurrentConfig({
                location: "handleClipsInit"
            }, {
                autoTrackExposure: !0
            }), o = R.default.getSettings().decoupledClipsEnabled;
            if (!a || !o || null == N.default) return;
            let l = null,
                u = null,
                d = $.default.getPidFromDesktopSource(t);
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
            null != s && s.desktopSource.id !== _.desktopSource.id && (eC.setClipsSource(null), (0, et.isWindows)() && null != s.desktopSource.soundshareId && p.cancelAttachToProcess(s.desktopSource.soundshareId)), null != l && tE(l, u), s = _;
            let {
                hdrCaptureMode: c
            } = x.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), E = e7().videoHook;
            eC.setClipsSource({
                desktopDescription: {
                    id: s.desktopSource.id,
                    soundshareId: s.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: ti(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: !0,
                    allowScreenCaptureKit: tr(),
                    videoHookStaleFrameTimeoutMs: 500,
                    graphicsCaptureStaleFrameTimeoutMs: eO,
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
            !1 === t.decoupledClipsEnabled && (s = null, eC.setClipsSource(null))
        }
    }), t.default = i
}