function(e, t, n) {
    "use strict";
    let i, s, r, a;
    n.r(t), n.d(t, {
        default: function() {
            return tS
        }
    }), n("222007"), n("808653"), n("506083"), n("424973"), n("256955");
    var o, l, u = n("627445"),
        d = n.n(u),
        c = n("917351"),
        f = n.n(c),
        _ = n("570277"),
        E = n.n(_),
        h = n("446674"),
        g = n("773364"),
        m = n("95410"),
        p = n("862337"),
        S = n("913144"),
        v = n("49671"),
        T = n("6193"),
        I = n("965068"),
        A = n("386045"),
        C = n("18346"),
        y = n("605250"),
        N = n("808122"),
        R = n("733589"),
        O = n("161454"),
        D = n("933034"),
        P = n("746800"),
        L = n("747823"),
        M = n("301108"),
        b = n("584687"),
        U = n("705500"),
        w = n("797323"),
        k = n("238847"),
        V = n("981699"),
        G = n("140622"),
        F = n("16001"),
        x = n("631508"),
        B = n("368765"),
        H = n("403770"),
        Y = n("940146"),
        K = n("353500"),
        j = n("103979"),
        W = n("665862"),
        z = n("122530"),
        q = n("928609"),
        X = n("891760"),
        Q = n("536692"),
        Z = n("374363"),
        J = n("599110"),
        $ = n("922932"),
        ee = n("718517"),
        et = n("773336"),
        en = n("286235"),
        ei = n("50885"),
        es = n("13798"),
        er = n("271938"),
        ea = n("366679"),
        eo = n("533222"),
        el = n("42203"),
        eu = n("760190"),
        ed = n("855867"),
        ec = n("945956"),
        ef = n("123647"),
        e_ = n("49111"),
        eE = n("706530"),
        eh = n("180524"),
        eg = n("397336"),
        em = n("353927"),
        ep = n("782340");
    let eS = new y.default("MediaEngineStore");
    (l = o || (o = {}))[l.DETACHED = 0] = "DETACHED", l[l.WAITING = 1] = "WAITING", l[l.ATTACHED = 2] = "ATTACHED", l[l.STARTED = 3] = "STARTED", l[l.PLAYING = 4] = "PLAYING", l[l.SILENCE = 5] = "SILENCE";
    let ev = "MediaEngineStore",
        eT = {
            left: 1,
            right: 1
        };

    function eI() {
        let e = {
            mode: e_.InputModes.VOICE_ACTIVITY,
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
            inputVolume: em.DEFAULT_VOLUME,
            outputVolume: em.DEFAULT_VOLUME,
            inputDeviceId: em.DEFAULT_DEVICE_ID,
            outputDeviceId: em.DEFAULT_DEVICE_ID,
            videoDeviceId: em.DEFAULT_DEVICE_ID,
            qos: !1,
            qosMigrated: !1,
            videoHook: eA.supports(em.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            av1Enabled: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        };
        return e
    }
    let eA = (0, g.initializeMediaEngine)((0, g.determineMediaEngine)()),
        eC = {},
        ey = new Set([em.MediaEngineContextTypes.DEFAULT]),
        eN = eA.supports(em.Features.AUTO_ENABLE),
        eR = !1,
        eO = em.MediaEngineContextTypes.STREAM,
        eD = {
            [em.DEFAULT_DEVICE_ID]: ta(ep.default.Messages.NO_INPUT_DEVICES)
        },
        eP = {
            [em.DEFAULT_DEVICE_ID]: ta(ep.default.Messages.NO_OUTPUT_DEVICES)
        },
        eL = {
            [em.DEFAULT_DEVICE_ID]: ta(ep.default.Messages.NO_VIDEO_DEVICES)
        },
        eM = !1,
        eb = !1,
        eU = !1,
        ew = !1,
        ek = !1,
        eV = em.DISABLED_DEVICE_ID,
        eG = !1,
        eF = !1,
        ex = !1,
        eB = !1,
        eH = null,
        eY = !1,
        eK = !1,
        ej = !1,
        eW = !1,
        ez = !1,
        eq = null,
        eX = !1,
        eQ = !1,
        eZ = !1;
    q.default.hasPermission(eh.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), q.default.hasPermission(eh.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let eJ = new Set,
        e$ = !1,
        e0 = !1,
        e1 = {},
        e2 = {},
        e3 = 5 * ee.default.Millis.SECOND;

    function e4() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT,
            t = eC[e];
        return null == t && (t = eI(), eC[e] = t), t
    }

    function e6(e) {
        let t = e4(e.context);
        e.setInputMode(t.mode, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                return ez || !1
            }(),
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: t.modeOptions.delay
        })
    }

    function e9(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.DEFAULT_VOLUME;
        return f.clamp(e, 0, t)
    }

    function e8(e) {
        let t = e4(e.context),
            n = !eN || t.mute || t.deaf;
        e.context === em.MediaEngineContextTypes.DEFAULT ? n = n || eM || eb || eU || !q.default.didHavePermission(eh.NativePermissionTypes.AUDIO) : e.context === em.MediaEngineContextTypes.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
    }

    function e7() {
        var e, t, n;
        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            o = r;
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, et.isWindows)() && T.cancelAttachToProcess(o.desktopSource.soundshareId), eA.setGoLiveSource(null, eO)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eA.setGoLiveSource(null, eO), (ek || s) && (eV = (ek = s) ? tl(eL, e4().videoDeviceId) : em.DISABLED_DEVICE_ID, eA.setVideoInputDevice(eV)), r = a, null != a) {
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
                } = V.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), s = e4().videoHook, r = eA.supports(em.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                    videoHookStaleFrameTimeoutMs: o
                } = Y.default.getConfig(r && s, "e225cfdf5_vh1", !0), {
                    graphicsCaptureStaleFrameTimeoutMs: l
                } = W.default.getConfig(r && tt(), "e225cfdf5_wgc2", !0);
                eA.setGoLiveSource({
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: s,
                        useGraphicsCapture: tt(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: t,
                        allowScreenCaptureKit: tn(!0),
                        videoHookStaleFrameTimeoutMs: o,
                        graphicsCaptureStaleFrameTimeoutMs: l,
                        hdrCaptureMode: n
                    },
                    quality: e
                }, eO)
            }
            null != a.cameraSource && eA.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: a.cameraSource.audioDeviceGuid
                },
                quality: e
            }, eO)
        }
    }

    function e5(e, t, n, i) {
        var s;
        let r = null !== (s = null == e ? void 0 : e.soundshareSession) && void 0 !== s ? s : "";
        null == e2[r] && (e2[r] = new Set);
        let a = null != t && !e2[r].has(t);
        a && e2[r].add(t), (null == t || a) && J.default.track(e_.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, D.default)(e)
        })
    }

    function te(e) {
        let t = e4(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(eo.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, et.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function tt() {
        return (0, et.isWindows)() && E.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eE.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function tn(e) {
        return !!((0, et.isMac)() && eA.supports(em.Features.SCREEN_CAPTURE_KIT) && E.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eE.DARWIN_SCKIT_VERSION)) && B.default.getCurrentConfig({
            location: "screenCaptureKitEnabled"
        }, {
            autoTrackExposure: e
        }).allowScreenCaptureKit
    }
    let ti = new class {
        start() {
            !this.started && (this.started = !0, eA.on(g.MediaEngineEvent.Silence, this.handleSilence))
        }
        stop() {
            this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eA.removeListener(g.MediaEngineEvent.Silence, this.handleSilence), S.default.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null
            }))
        }
        update() {
            let e = e4();
            !eY && ec.default.getState() === e_.RTCConnectionStates.RTC_CONNECTED && e.mode === e_.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
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
                    }), e && (eK = !0))
                }, t ? this.voiceTimeout : this.noVoiceTimeout)
            }
        }
    };

    function ts(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e4(t);
        return Object.assign(i, e), !__OVERLAY__ && n && m.default.set(ev, eC), i
    }

    function tr() {
        !eN && eA.enable().then(() => S.default.dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: !0,
            unmute: !1
        }))
    }

    function ta(e) {
        return {
            id: em.DEFAULT_DEVICE_ID,
            index: 0,
            name: e,
            disabled: !0
        }
    }

    function to(e, t) {
        if (0 === e.length) {
            let e = ta(t);
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

    function tl(e, t) {
        var n;
        let i = null !== (n = e[t]) && void 0 !== n ? n : f(e).values().first();
        return null != i ? i.id : t
    }

    function tu() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = null !== (e = Z.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let s = e === eg.ProtoAudioSettingsContextTypes.USER ? em.MediaEngineContextTypes.DEFAULT : em.MediaEngineContextTypes.STREAM,
                r = s === em.MediaEngineContextTypes.STREAM ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
                a = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e4(s);
            for (let [e, t] of Object.entries(a)) null == (0, Q.getPendingAudioSettings)(s, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== r ? l[e] = t.volume : delete l[e], eA.eachConnection(n => {
                n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
            }, s));
            if (n) {
                let e = new Set([...Object.keys(o), ...Object.keys(l)]);
                for (let t of e) null == a[t] && (delete o[t], delete l[t], eA.eachConnection(e => {
                    e.setLocalVolume(t, r), e.setLocalMute(t, !1)
                }, s))
            }
            ts({
                localMutes: o,
                localVolumes: l
            }, s)
        }
    }

    function td(e) {
        if (null == i) return eS.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
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
        (0, et.isWindows)() && T.attachToProcess(e, {
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

    function tf() {
        let e = em.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e4(e);
        for (let [e, n] of Object.entries(t)) n === e_.VideoToggleState.AUTO_PROBING && delete t[e];
        ts({
            videoToggleStateMap: t
        }, e, !1)
    }

    function t_(e) {
        let t = e4();
        J.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function tE() {
        let e = e4(),
            t = e.inputDeviceId,
            n = eo.default.hasEchoCancellation(t) || e.echoCancellation,
            i = eo.default.hasNoiseSuppression(t) || e.noiseSuppression,
            s = eo.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            r = e.noiseCancellation;
        eA.setLoopback(e0, {
            echoCancellation: n,
            noiseSuppression: i,
            automaticGainControl: s,
            noiseCancellation: r
        })
    }

    function th() {
        return ez || !1
    }
    async function tg() {
        try {
            await ei.default.ensureModule("discord_krisp"), ei.default.requireModule("discord_krisp"), ez = !0, i.emitChange()
        } catch (t) {
            eS.warn("Failed to load Krisp module: ".concat(t.message)), en.default.captureException(t);
            let e = em.NoiseCancellerError.INITIALIZED;
            if (t.message.includes(": ")) {
                let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                e = isNaN(n) || 0 === n ? em.NoiseCancellerError.INITIALIZED : n
            }
            J.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), ts({
                noiseCancellation: !1
            })
        } finally {
            eW = !1
        }
    }

    function tm(e) {
        let {
            section: t
        } = e;
        return t === e_.UserSettingsSections.VOICE && tr(), !1
    }
    class tp extends h.default.Store {
        initialize() {
            eA.on(g.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = F.default.getCurrentConfig({
                    location: "f627ab_3"
                }, {
                    autoTrackExposure: !1
                });
                t > 0 && eA.setMaxSyncDelayOverride(t), e6(e), e8(e), te(e);
                let n = e4();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                let {
                    useExperimentalRateControl: s
                } = K.default.getCurrentConfig({
                    location: "f627ab_4"
                }, {
                    autoTrackExposure: !1
                });
                s && e.setExperimentFlag(em.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                let {
                    muteBeforeProcessing: a,
                    pttBeforeProcessing: o,
                    skipEncode: l
                } = M.default.getCurrentConfig({
                    location: "setupMediaEngine"
                }, {
                    autoTrackExposure: !0
                });
                a && e.setExperimentFlag(em.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), o && e.setExperimentFlag(em.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(em.ExperimentFlags.SKIP_ENCODE, !0);
                {
                    (0, et.isWindows)() && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = k.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: n
                    } = w.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    n && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: i
                    } = U.default.getCurrentConfig({
                        location: "f627ab_8"
                    }, {
                        autoTrackExposure: !0
                    });
                    i && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
                }
                let {
                    signalAV1Support: u
                } = P.default.getCurrentConfig({
                    location: "f627ab_10"
                }, {
                    autoTrackExposure: !0
                });
                u && e.setExperimentFlag(em.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                let {
                    allowSettingFullbandAndroid: d
                } = G.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (d && eA.setHasFullbandPerformance((0, N.hasPerformanceForKrispFullband)()), (0, C.default)(i)) {
                    let t = A.default.getSettings();
                    e.setExperimentFlag(em.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = j.default.getCurrentConfig({
                        location: "f627ab_15"
                    }, {
                        autoTrackExposure: !1
                    });
                    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(em.VIEWERSIDE_CLIP_KFI_MS);
                    let {
                        allowQualityDecoupling: i
                    } = I.default.getCurrentConfig({
                        location: "MediaEngineStore_setupMediaEngine"
                    }, {
                        autoTrackExposure: !0
                    });
                    e.setQualityDecoupling(i)
                }
                for (let t of (n = e4(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== er.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                for (let t of Object.keys(n.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
                }), e.context === em.MediaEngineContextTypes.DEFAULT && (eF = !1, e.on(g.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    eF = !0, i.emitChange()
                })), e.on(g.BaseConnectionEvent.DesktopSourceEnd, () => {
                    S.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(g.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == r ? void 0 : r.desktopSource) != null && J.default.track(e_.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, D.default)(null == r ? void 0 : r.desktopSource))
                }), e.on(g.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    e5(null == r ? void 0 : r.desktopSource, t, n, i)
                }), e.on(g.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == r ? void 0 : r.desktopSource) != null && (J.default.track(e_.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, D.default)(null == r ? void 0 : r.desktopSource)), null != ed.default.getHookError(e_.MediaEngineHookTypes.SOUND) && S.default.wait(() => S.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let c = new p.Timeout;
                e.on(g.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            c.start(e3, () => {
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
                            (null == r ? void 0 : r.desktopSource) != null && (e5(null == r ? void 0 : r.desktopSource, n, t, i), !i && (c.stop(), S.default.wait(() => S.default.dispatch({
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
                    (null == r ? void 0 : r.desktopSource) != null && J.default.track(e_.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: s,
                        reinitialization: a,
                        ...(0, D.default)(null == r ? void 0 : r.desktopSource)
                    })
                }), e.on(g.BaseConnectionEvent.NoiseCancellationError, e => {
                    eS.warn("noisecancellererror event: ".concat(e)), eX = !0, J.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
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
                    eS.warn("voiceactivitydetectorerror event: ".concat(e)), J.default.track(e_.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), S.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: em.MediaEngineContextTypes.DEFAULT,
                        mode: e_.InputModes.VOICE_ACTIVITY,
                        options: {
                            ...e4(em.MediaEngineContextTypes.DEFAULT).modeOptions,
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
                }), e.setBitRate(ea.default.bitrate), e.applyVideoQualityMode(ef.default.mode)
            }), eA.on(g.MediaEngineEvent.DeviceChange, (e, t, n) => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                })
            }), eA.on(g.MediaEngineEvent.VolumeChange, (e, t) => {
                S.default.dispatch({
                    type: "AUDIO_VOLUME_CHANGE",
                    inputVolume: e,
                    outputVolume: t
                })
            }), eA.on(g.MediaEngineEvent.DesktopSourceEnd, () => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: null
                })
            }), eA.on(g.MediaEngineEvent.AudioPermission, e => {
                eZ = !0, S.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e
                })
            }), eA.on(g.MediaEngineEvent.VideoPermission, e => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "video",
                    granted: e
                })
            }), eA.on(g.MediaEngineEvent.WatchdogTimeout, async () => {
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
                eS.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), J.default.track(e_.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e
                })
            }), eA.on(g.MediaEngineEvent.VideoInputInitialized, e => {
                J.default.track(e_.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ee.default.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                })
            }), eA.on(g.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                S.default.dispatch({
                    type: "CLIPS_RESTART"
                })
            }), eA.on(g.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                S.default.wait(() => {
                    S.default.dispatch({
                        type: "CLIPS_INIT_FAILURE",
                        errMsg: e,
                        applicationName: t
                    })
                })
            }), eA.on(g.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                var n, i;
                (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == r ? void 0 : null === (i = r.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && T.cancelAttachToProcess(t), a = null)
            }), ti.reset(), ! function() {
                var e;
                let t = m.default.get("audio");
                null != t && (m.default.set(ev, {
                        [em.MediaEngineContextTypes.DEFAULT]: t
                    }), m.default.remove("audio")), eC = null !== (e = m.default.get(ev)) && void 0 !== e ? e : {}, f.each(eC, e => {
                        if (f.defaultsDeep(e, eI()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, es.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, et.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e4();
                        eA.setAudioInputDevice(e.inputDeviceId), eA.setAudioOutputDevice(e.outputDeviceId), e7(), eA.setInputVolume(e.inputVolume), eA.setOutputVolume(e.outputVolume), eA.setH264Enabled(e.openH264), eA.setAv1Enabled(e.av1Enabled), eA.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, et.isDesktop)() || __OVERLAY__ || eW || ez ? (0, et.isWeb)() && eA.supports(em.Features.NOISE_CANCELLATION) ? (ez = !0, i.emitChange()) : (0, et.isWeb)() && ts({
                noiseCancellation: !1
            }) : (eW = !0, tg()), tf(), e1 = {
                [em.Features.VIDEO]: eA.supports(em.Features.VIDEO),
                [em.Features.DESKTOP_CAPTURE]: eA.supports(em.Features.DESKTOP_CAPTURE),
                [em.Features.HYBRID_VIDEO]: eA.supports(em.Features.HYBRID_VIDEO)
            }, this.waitFor(er.default, eo.default, el.default, ed.default, ec.default, O.default, q.default.storage, Z.default, eu.default, A.default)
        }
        supports(e) {
            return eA.supports(e)
        }
        supportsInApp(e) {
            return e1[e] || eA.supports(e)
        }
        isSupported() {
            return eA.supported()
        }
        isExperimentalEncodersSupported() {
            return eA.supports(em.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eA.supports(em.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return ez || !1
        }
        isNoiseCancellationError() {
            return eX
        }
        isAutomaticGainControlSupported() {
            return eA.supports(em.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return ez || !1
        }
        isAecDumpSupported() {
            return eA.supports(em.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eA.supports(em.Features.VIDEO) && eA.supports(em.Features.SIMULCAST)
        }
        getAecDump() {
            return e4().aecDumpEnabled
        }
        getMediaEngine() {
            return eA
        }
        getVideoComponent() {
            return eA.supports(em.Features.DIRECT_VIDEO) && eA.setUseDirectVideo(!0), eA.Video
        }
        getCameraComponent() {
            return eA.supports(em.Features.DIRECT_VIDEO) && eA.setUseDirectVideo(!0), eA.Camera
        }
        isEnabled() {
            return eN
        }
        isMute() {
            return this.isSelfMute() || eM
        }
        isDeaf() {
            return this.isSelfDeaf() || ew
        }
        hasContext(e) {
            return null != eC[e]
        }
        isSelfMutedTemporarily() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
            return e === em.MediaEngineContextTypes.DEFAULT && eb
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e4(e).mute || !q.default.didHavePermission(eh.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === em.MediaEngineContextTypes.DEFAULT && eU
        }
        shouldSkipMuteUnmuteSound() {
            let {
                airpodsMuteSupported: e
            } = L.default.getCurrentConfig({
                location: "shouldSkipMuteUnmuteSound"
            }, {
                autoTrackExposure: !0
            });
            return !!e && eG
        }
        notifyMuteUnmuteSoundWasSkipped() {
            eG = !1
        }
        isHardwareMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
            return !this.isSupported() || e4(e).deaf
        }
        isVideoEnabled() {
            return ek && eB
        }
        isVideoAvailable() {
            return Object.values(eL).some(e => {
                let {
                    disabled: t
                } = e;
                return !t
            })
        }
        isScreenSharing() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.STREAM;
            return eO === e && null != r
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.STREAM;
            return eO === t && null != r && (null === (e = r.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
            return e !== er.default.getId() && (e4(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eA.supports(em.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e4(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e4(n).videoToggleStateMap[e]) && void 0 !== t ? t : e_.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT;
            return t === em.MediaEngineContextTypes.DEFAULT && eJ.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
            return e === em.MediaEngineContextTypes.DEFAULT && eJ.size > 0
        }
        isMediaFilterSettingLoading() {
            return eQ
        }
        isNativeAudioPermissionReady() {
            return eZ
        }
        getGoLiveSource() {
            return r
        }
        getGoLiveContext() {
            return eO
        }
        getLocalPan(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
                n = e4(t).localPans[e];
            return null != n ? n : eT
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.MediaEngineContextTypes.DEFAULT,
                n = t === em.MediaEngineContextTypes.STREAM,
                i = n ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
                s = e4(t).localVolumes[e];
            return null != s ? s : i
        }
        getInputVolume() {
            return e4().inputVolume
        }
        getOutputVolume() {
            return e4().outputVolume
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
            return e4(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
            return e4(e).modeOptions
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
                i === e_.InputModes.PUSH_TO_TALK && ey.has(n) && (e[n] = s)
            }), e
        }
        getInputDeviceId() {
            return tl(eD, e4().inputDeviceId)
        }
        getOutputDeviceId() {
            return tl(eP, e4().outputDeviceId)
        }
        getVideoDeviceId() {
            return tl(eL, e4().videoDeviceId)
        }
        getInputDevices() {
            return eD
        }
        getOutputDevices() {
            return eP
        }
        getVideoDevices() {
            return eL
        }
        getEchoCancellation() {
            let e = e4();
            return eo.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e4().h265Enabled
        }
        getLoopback() {
            return eA.getLoopback()
        }
        getNoiseSuppression() {
            let e = e4();
            return eo.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e4();
            return eo.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
        }
        getNoiseCancellation() {
            return e4().noiseCancellation
        }
        getExperimentalEncoders() {
            return e4().experimentalEncoders
        }
        getHardwareH264() {
            return e4().hardwareH264
        }
        getEnableSilenceWarning() {
            return e4().silenceWarning
        }
        getDebugLogging() {
            return eA.getDebugLogging()
        }
        getQoS() {
            return e4().qos
        }
        getAttenuation() {
            return e4().attenuation
        }
        getAttenuateWhileSpeakingSelf() {
            return e4().attenuateWhileSpeakingSelf
        }
        getAttenuateWhileSpeakingOthers() {
            return e4().attenuateWhileSpeakingOthers
        }
        getAudioSubsystem() {
            return eA.getAudioSubsystem()
        }
        getSettings() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT;
            return e4(e)
        }
        getState() {
            return {
                settingsByContext: eC,
                inputDevices: eD,
                outputDevices: eP,
                appSupported: e1,
                krispModuleLoaded: ez,
                goLiveSource: r,
                goLiveContext: eO
            }
        }
        getInputDetected() {
            return eH
        }
        getNoInputDetectedNotice() {
            return eK
        }
        getPacketDelay() {
            return et.isPlatformEmbedded || this.getMode() !== e_.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
        }
        setCanHavePriority(e, t) {
            eA.eachConnection(n => n.setCanHavePriority(e, t))
        }
        isInteractionRequired() {
            return eR
        }
        getVideoHook() {
            return e4().videoHook
        }
        supportsVideoHook() {
            return eA.supports(em.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e4().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eA.supports(em.Features.EXPERIMENTAL_SOUNDSHARE) && E.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eE.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e4().openH264
        }
        getAv1Enabled() {
            return e4().av1Enabled
        }
        getEverSpeakingWhileMuted() {
            return eF
        }
        supportsScreenSoundshare() {
            return (0, et.isMac)() && eA.supports(em.Features.SOUNDSHARE) && E.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, eE.DARWIN_SCKIT_AUDIO_VERSION) && tn(!1) || (0, et.isWindows)() && eA.supports(em.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.MediaEngineContextTypes.DEFAULT,
                t = this.supports(em.Features.VIDEO) ? [{
                    rid: "100",
                    type: e === em.MediaEngineContextTypes.DEFAULT ? em.MediaTypes.VIDEO : em.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            return this.isSimulcastSupported() && e === em.MediaEngineContextTypes.DEFAULT && t.push({
                rid: "50",
                type: em.MediaTypes.VIDEO,
                quality: 50
            }), t
        }
        getSupportedSecureFramesProtocolVersion(e) {
            var t;
            let n = eA.getSupportedSecureFramesProtocolVersion(),
                i = H.SecureFramesUserExperiment.getCurrentConfig({
                    location: "MediaEngineStore"
                }),
                s = null != e ? H.SecureFramesGuildExperiment.getCurrentConfig({
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
    tp.displayName = "MediaEngineStore";
    var tS = i = new tp(S.default, {
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n,
                currentVoiceChannelId: i,
                video: s
            } = e;
            if (i !== n && e7(s, null), null != t || null == n) {
                ej = !1;
                return
            }
            if (ej) return;
            ej = !0;
            let r = e4();
            (r.mute || r.deaf) && (ts({
                deaf: !1,
                mute: !1
            }), eA.eachConnection(e8))
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (s === t.sessionId) {
                    eM = t.mute || t.suppress, ew = t.deaf, eA.eachConnection(e8);
                    let e = null != t.guildId && null != t.channelId && null != eq && eq !== t.channelId,
                        n = !e && ek;
                    return e7(n), eq = t.channelId, !0
                }
                return !__OVERLAY__ && t.userId === er.default.getId() && null == ec.default.getChannelId() && e7(!1, null), e
            }, !1)
        },
        CONNECTION_OPEN: function(e) {
            s = e.sessionId, eM = !1, ew = !1, (0, X.shouldReadWriteAudioSettings)() && tu()
        },
        CONNECTION_CLOSED: function() {
            s = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case e_.RTCConnectionStates.CONNECTING:
                    tr();
                    break;
                case e_.RTCConnectionStates.RTC_CONNECTING:
                    eY = !1, eK = !1;
                    break;
                case e_.RTCConnectionStates.RTC_CONNECTED:
                    e7();
                    break;
                case e_.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === eJ.size) return;
                        let e = em.MediaEngineContextTypes.DEFAULT,
                            {
                                disabledLocalVideos: t
                            } = e4(e);
                        eJ.forEach(n => {
                            d(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eA.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                        }), eJ.clear(), ts({
                            disabledLocalVideos: t
                        }, e, !1)
                    })(), tf()
            }
            ti.update()
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
            let {
                mute: t
            } = e;
            eb = t, eA.eachConnection(e8)
        },
        AUDIO_TOGGLE_SELF_MUTE: function(e) {
            let {
                context: t,
                skipMuteUnmuteSoundEffect: n
            } = e, {
                mute: i,
                deaf: s
            } = e4(t);
            if (t === em.MediaEngineContextTypes.DEFAULT && (q.default.requestPermission(eh.NativePermissionTypes.AUDIO), eU)) return !1;
            !(i = !s && !i) && (s = !1), n && (eG = !0), ts({
                mute: i,
                deaf: s
            }, t), eA.eachConnection(e8)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            let {
                context: t
            } = e, n = e4(t);
            ts({
                deaf: !n.deaf
            }, t), eA.eachConnection(e8)
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
            let {
                context: t,
                userId: n
            } = e;
            if (n === er.default.getId()) return;
            let {
                localMutes: i
            } = e4(t);
            i[n] ? delete i[n] : i[n] = !0, ts({
                localMutes: i
            }, t), eA.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
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
            let E = c === e_.VideoToggleState.DISABLED,
                {
                    disabledLocalVideos: h
                } = e4(l),
                g = null !== (t = h[u]) && void 0 !== t && t,
                m = eJ.has(u),
                p = c === e_.VideoToggleState.AUTO_ENABLED || c === e_.VideoToggleState.MANUAL_ENABLED;
            eS.info("disableVideo=".concat(E, " currentlyDisabled=").concat(g, " currentlyAutoDisabled=").concat(m, ", isVideoShown=").concat(p)), d(!(m && !g), "If you are auto-disabled, then you are also disabled.");
            let S = E !== g,
                v = l === em.MediaEngineContextTypes.DEFAULT,
                T = _ && S && v,
                I = f && S && v;
            eS.info("changed=".concat(S, " isDefaultContext=").concat(v, " isUpdateCausedByVideoHealthManager=").concat(T, " isManualToggleByUser=").concat(I));
            let {
                videoToggleStateMap: A
            } = e4(l);
            if (A[u] === e_.VideoToggleState.AUTO_PROBING && c === e_.VideoToggleState.AUTO_ENABLED && (0, z.default)(u, E ? em.VideoToggleReason.AUTO_DISABLE : em.VideoToggleReason.AUTO_ENABLE, p), A[u] = c, ts({
                    videoToggleStateMap: A
                }, l, f), c === e_.VideoToggleState.AUTO_PROBING ? null === (n = ec.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ec.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e$ && (eS.info("isAutoDisableAllowed=".concat(e$, " - disabling VideoHealthManager")), null === (r = ec.default.getRTCConnection()) || void 0 === r || null === (s = r.getVideoHealthManager()) || void 0 === s || s.disable()), T) {
                if (!E && !m || E && !e$) return;
                (0, z.default)(u, E ? em.VideoToggleReason.AUTO_DISABLE : em.VideoToggleReason.AUTO_ENABLE, p), E ? eJ.add(u) : eJ.delete(u)
            } else I && (m && !E ? (eS.info("disallowing auto-disable for this session because of manual override by user"), e$ = !1, null === (o = ec.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, z.default)(u, em.VideoToggleReason.MANUAL_REENABLE, p)) : (0, z.default)(u, E ? em.VideoToggleReason.MANUAL_DISABLE : em.VideoToggleReason.MANUAL_ENABLE, p));
            v && !E && eJ.delete(u), E ? h[u] = !0 : delete h[u], ts({
                disabledLocalVideos: h
            }, l, f), eA.eachConnection(e => {
                var t;
                return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t)
            }, l)
        },
        AUDIO_SET_LOCAL_VOLUME: function(e) {
            let {
                context: t,
                userId: n,
                volume: i
            } = e;
            if (n === er.default.getId()) return;
            let s = t === em.MediaEngineContextTypes.STREAM,
                r = s ? em.DEFAULT_STREAM_VOLUME : em.DEFAULT_VOLUME,
                {
                    localVolumes: a
                } = e4(t);
            i === r ? delete a[n] : a[n] = i, ts({
                localVolumes: a
            }, t), eA.eachConnection(e => e.setLocalVolume(n, i), t)
        },
        AUDIO_SET_LOCAL_PAN: function(e) {
            let {
                context: t,
                userId: n,
                left: i,
                right: s
            } = e, {
                localPans: r
            } = e4(t);
            r[n] = {
                left: i,
                right: s
            }, ts({
                localPans: r
            }, t), eA.eachConnection(e => e.setLocalPan(n, i, s), t)
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
            }, t), eA.eachConnection(e6), ti.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            ts({
                inputVolume: e9(t)
            }), eA.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            ts({
                outputVolume: t
            }), eA.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                inputDeviceId: t = tl(eD, t)
            }), eA.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                outputDeviceId: t = tl(eP, t)
            }), eA.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            let t = ts({
                echoCancellation: e.enabled
            });
            eA.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tE(), t_(e.location)
        },
        MEDIA_ENGINE_SET_H265: function(e) {
            let t = ts({
                h265Enabled: e.enabled
            });
            eA.setH265Enabled(t.h265Enabled)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            let {
                enabled: t
            } = e;
            return e0 = t, tE()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            let t = ts({
                noiseSuppression: e.enabled
            });
            eA.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tE(), t_(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            let t = ts({
                automaticGainControl: e.enabled
            });
            eA.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tE(), t_(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            let t = ts({
                noiseCancellation: e.enabled
            });
            eA.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tE(), t_(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            ts({
                silenceWarning: e.enabled
            }), ti.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eA.setDebugLogging(e.enabled)
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
            } = e, s = ts({
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            });
            eA.eachConnection(e => e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers))
        },
        AUDIO_SET_QOS: function(e) {
            let {
                enabled: t
            } = e;
            ts({
                qos: t
            }), eA.eachConnection(e => e.setQoS(t))
        },
        MEDIA_ENGINE_DEVICES: function(e) {
            let {
                inputDevices: t,
                outputDevices: n,
                videoDevices: i
            } = e;
            ! function(e) {
                let t = eD;
                if (eD = to(e, ep.default.Messages.NO_INPUT_DEVICES), !f.isEqual(eD, t)) {
                    let e = e4(),
                        t = tl(eD, e.inputDeviceId);
                    eA.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = eP;
                if (eP = to(e, ep.default.Messages.NO_OUTPUT_DEVICES), !f.isEqual(eP, t)) {
                    let e = e4(),
                        t = tl(eP, e.outputDeviceId);
                    eA.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                eB = e.length > 0;
                let t = eL;
                if (eL = to(e, ep.default.Messages.NO_VIDEO_DEVICES), ek && !f.isEqual(eL, t)) {
                    var n;
                    let e = void 0 !== eL[eV],
                        i = eV === em.DEFAULT_DEVICE_ID && (null === (n = t[em.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    e7(e || i)
                }
            }(i)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            let {
                inputVolume: t,
                outputVolume: n
            } = e;
            ts({
                inputVolume: e9(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            m.default.remove(ev), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            let {
                inputDetected: t
            } = e;
            eH = t, !eY && eH && (eY = !0, ti.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eA.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            eN = e.enabled, e.unmute && ts({
                mute: !1,
                deaf: !1
            }), eA.eachConnection(e8)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            q.default.requestPermission(eh.NativePermissionTypes.CAMERA), e7(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            let {
                kind: t,
                granted: n
            } = e;
            if (!n) switch (t) {
                case "audio":
                    eN = !1, eA.eachConnection(e8);
                    break;
                case "video":
                    e7(!1)
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
                    u = null !== (t = o.context) && void 0 !== t ? t : em.MediaEngineContextTypes.DEFAULT,
                    d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                        resolution: 720,
                        frameRate: 30
                    },
                    c = $.default.getPidFromDesktopSource(s);
                et.isPlatformEmbedded && !0 === l && ({
                    soundshareId: e,
                    soundshareSession: i
                } = td(c), null != e && tc(e, i)), (a = u) !== eO && (null != r && eA.setGoLiveSource(null, eO), eO = a);
                let f = u === em.MediaEngineContextTypes.STREAM && ek;
                e7(f, {
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
                let e = null !== (i = o.context) && void 0 !== i ? i : em.MediaEngineContextTypes.DEFAULT,
                    {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    } = o.cameraSettings,
                    r = e === em.MediaEngineContextTypes.STREAM && ek,
                    a = null !== (s = o.qualityOptions) && void 0 !== s ? s : {
                        resolution: 720,
                        frameRate: 30
                    };
                e7(r, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: a.resolution,
                        frameRate: a.frameRate
                    }
                })
            } else e7(ek, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            let {
                id: t
            } = e;
            ts({
                videoDeviceId: t = tl(eL, t)
            }), e7()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            let t = ts({
                experimentalEncoders: e.enabled
            });
            eA.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return eR !== e.required && (eR = e.required, !e.required && eA.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: tm,
        USER_SETTINGS_MODAL_SET_SECTION: tm,
        CERTIFIED_DEVICES_SET: function() {
            return eA.eachConnection(te), !1
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            ey.add(t.id)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            ey.delete(t.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                mediaEngineState: t
            } = e;
            eC = t.settingsByContext, eD = t.inputDevices, eP = t.outputDevices, e1 = t.appSupported, ez = t.krispModuleLoaded, eO = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                openH264: t
            });
            eA.setH264Enabled(n.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                hardwareH264: t
            });
            eA.eachConnection(e => e.setHardwareH264(n.hardwareH264))
        },
        MEDIA_ENGINE_SET_AV1: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                av1Enabled: t
            });
            eA.setAv1Enabled(n.av1Enabled)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = R.default.isEnabled();
            if (t === e_.AppStates.BACKGROUND && ek && !n) ex = !0, e7(!1);
            else {
                if (t !== e_.AppStates.ACTIVE || !ex) return !1;
                ex = !1, e7(!0)
            }
            return !0
        },
        SET_CHANNEL_BITRATE: function(e) {
            eA.eachConnection(t => t.setBitRate(e.bitrate))
        },
        SET_VAD_PERMISSION: function(e) {
            let {
                hasPermission: t
            } = e, n = !t;
            if (n === eU) return !1;
            eU = n, eA.eachConnection(e8)
        },
        SET_NATIVE_PERMISSION: function(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = t === eh.NativePermissionStates.ACCEPTED;
            switch (n) {
                case eh.NativePermissionTypes.AUDIO:
                    eZ = !0, eA.eachConnection(e8);
                    break;
                case eh.NativePermissionTypes.CAMERA:
                    !i && ek && e7(!1);
                    break;
                default:
                    return !1
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            eA.eachConnection(t => t.applyVideoQualityMode(e.mode))
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
            let {
                enabled: t
            } = e, n = ts({
                aecDumpEnabled: t
            });
            eA.setAecDump(n.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!ek && null == r || null != ec.default.getRTCConnectionId()) return !1;
            e7(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!eX && (eX = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            eA.applyMediaFilterSettings(t).finally(() => {
                eQ = !1, i.emitChange()
            })
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
            eQ = !0
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
            eQ = !1
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                local: n,
                wasSaved: i
            } = e;
            if (!(0, X.shouldReadWriteAudioSettings)() || t !== eg.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            tu(!0)
        },
        CLIPS_INIT: function(e) {
            let {
                sourceId: t,
                applicationName: n,
                quality: s
            } = e, {
                enableDecoupledGameClipping: r
            } = b.default.getCurrentConfig({
                location: "handleClipsInit"
            }, {
                autoTrackExposure: !0
            }), o = A.default.getSettings().decoupledClipsEnabled;
            if (!r || !o || null == v.default) return;
            let l = null,
                u = null,
                d = $.default.getPidFromDesktopSource(t);
            ({
                soundshareId: l,
                soundshareSession: u
            } = td(d));
            let c = {
                desktopSource: {
                    id: t,
                    sourcePid: d,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: s
            };
            null != a && a.desktopSource.id !== c.desktopSource.id && (eA.setClipsSource(null), (0, et.isWindows)() && null != a.desktopSource.soundshareId && T.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tc(l, u), a = c;
            let {
                useQuartzCapturer: f
            } = x.default.getCurrentConfig({
                location: "f627ab_11"
            }, {
                autoTrackExposure: !1
            }), {
                hdrCaptureMode: _
            } = V.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), E = e4().videoHook, h = eA.supports(em.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                videoHookStaleFrameTimeoutMs: g
            } = Y.default.getConfig(h && E, "e225cfdf5_vh2", !1), {
                graphicsCaptureStaleFrameTimeoutMs: m
            } = W.default.getConfig(h && tt(), "e225cfdf5_wgc2", !1);
            eA.setClipsSource({
                desktopDescription: {
                    id: a.desktopSource.id,
                    soundshareId: a.desktopSource.soundshareId,
                    useVideoHook: E,
                    useGraphicsCapture: tt(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: f,
                    allowScreenCaptureKit: tn(!1),
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
            !1 === t.decoupledClipsEnabled && (a = null, eA.setClipsSource(null))
        }
    })
}