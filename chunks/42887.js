function(e, t, n) {
    "use strict";
    let i, s, r, a;
    n.r(t), n.d(t, {
        default: function() {
            return tg
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
        L = n("584687"),
        M = n("705500"),
        b = n("797323"),
        U = n("238847"),
        w = n("981699"),
        k = n("140622"),
        V = n("16001"),
        G = n("631508"),
        F = n("368765"),
        x = n("403770"),
        B = n("940146"),
        H = n("353500"),
        Y = n("103979"),
        j = n("665862"),
        W = n("122530"),
        K = n("928609"),
        z = n("891760"),
        q = n("536692"),
        X = n("374363"),
        Q = n("599110"),
        Z = n("922932"),
        J = n("718517"),
        $ = n("773336"),
        ee = n("286235"),
        et = n("50885"),
        en = n("13798"),
        ei = n("271938"),
        es = n("366679"),
        er = n("533222"),
        ea = n("42203"),
        eo = n("760190"),
        el = n("855867"),
        eu = n("945956"),
        ed = n("123647"),
        ec = n("49111"),
        ef = n("706530"),
        e_ = n("180524"),
        eh = n("397336"),
        eE = n("353927"),
        eg = n("782340");
    let em = new y.default("MediaEngineStore");
    (l = o || (o = {}))[l.DETACHED = 0] = "DETACHED", l[l.WAITING = 1] = "WAITING", l[l.ATTACHED = 2] = "ATTACHED", l[l.STARTED = 3] = "STARTED", l[l.PLAYING = 4] = "PLAYING", l[l.SILENCE = 5] = "SILENCE";
    let ep = "MediaEngineStore",
        eS = {
            left: 1,
            right: 1
        };

    function ev() {
        let e = {
            mode: ec.InputModes.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -60,
                autoThreshold: $.isPlatformEmbedded || __OVERLAY__,
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
            inputVolume: eE.DEFAULT_VOLUME,
            outputVolume: eE.DEFAULT_VOLUME,
            inputDeviceId: eE.DEFAULT_DEVICE_ID,
            outputDeviceId: eE.DEFAULT_DEVICE_ID,
            videoDeviceId: eE.DEFAULT_DEVICE_ID,
            qos: !1,
            qosMigrated: !1,
            videoHook: eT.supports(eE.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            av1Enabled: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        };
        return e
    }
    let eT = (0, g.initializeMediaEngine)((0, g.determineMediaEngine)()),
        eI = {},
        eC = new Set([eE.MediaEngineContextTypes.DEFAULT]),
        eA = eT.supports(eE.Features.AUTO_ENABLE),
        ey = !1,
        eN = eE.MediaEngineContextTypes.STREAM,
        eR = {
            [eE.DEFAULT_DEVICE_ID]: ti(eg.default.Messages.NO_INPUT_DEVICES)
        },
        eO = {
            [eE.DEFAULT_DEVICE_ID]: ti(eg.default.Messages.NO_OUTPUT_DEVICES)
        },
        eD = {
            [eE.DEFAULT_DEVICE_ID]: ti(eg.default.Messages.NO_VIDEO_DEVICES)
        },
        eP = !1,
        eL = !1,
        eM = !1,
        eb = !1,
        eU = !1,
        ew = eE.DISABLED_DEVICE_ID,
        ek = !1,
        eV = !1,
        eG = !1,
        eF = null,
        ex = !1,
        eB = !1,
        eH = !1,
        eY = !1,
        ej = !1,
        eW = null,
        eK = !1,
        ez = !1,
        eq = !1;
    K.default.hasPermission(e_.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), K.default.hasPermission(e_.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    let eX = new Set,
        eQ = !1,
        eZ = !1,
        eJ = {},
        e$ = {},
        e0 = 5 * J.default.Millis.SECOND;

    function e1() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT,
            t = eI[e];
        return null == t && (t = ev(), eI[e] = t), t
    }

    function e2(e) {
        let t = e1(e.context);
        e.setInputMode(t.mode, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                return ej || !1
            }(),
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: t.modeOptions.delay
        })
    }

    function e3(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.DEFAULT_VOLUME;
        return f.clamp(e, 0, t)
    }

    function e4(e) {
        let t = e1(e.context),
            n = !eA || t.mute || t.deaf;
        e.context === eE.MediaEngineContextTypes.DEFAULT && (n = n || eP || eL || eM || !K.default.didHavePermission(e_.NativePermissionTypes.AUDIO)), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eE.MediaEngineContextTypes.DEFAULT && e.setNativeMute(n)
    }

    function e6() {
        var e, t, n;
        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU,
            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r,
            o = r;
        if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, $.isWindows)() && T.cancelAttachToProcess(o.desktopSource.soundshareId), eT.setGoLiveSource(null, eN)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eT.setGoLiveSource(null, eN), (eU || s) && (ew = (eU = s) ? tr(eD, e1().videoDeviceId) : eE.DISABLED_DEVICE_ID, eT.setVideoInputDevice(ew)), r = a, null != a) {
            let e = {
                resolution: a.quality.resolution,
                frameRate: a.quality.frameRate
            };
            if (null != a.desktopSource) {
                let {
                    useQuartzCapturer: t
                } = G.default.getCurrentConfig({
                    location: "f627ab_1"
                }, {
                    autoTrackExposure: !1
                }), {
                    hdrCaptureMode: n
                } = w.default.getCurrentConfig({
                    location: "f627ab_2"
                }, {
                    autoTrackExposure: !1
                }), s = e1().videoHook, r = eT.supports(eE.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                    videoHookStaleFrameTimeoutMs: o
                } = B.default.getConfig(r && s, "e225cfdf5_vh1", !0), {
                    graphicsCaptureStaleFrameTimeoutMs: l
                } = j.default.getConfig(r && e7(), "e225cfdf5_wgc2", !0);
                eT.setGoLiveSource({
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: s,
                        useGraphicsCapture: e7(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: t,
                        allowScreenCaptureKit: e5(!0),
                        videoHookStaleFrameTimeoutMs: o,
                        graphicsCaptureStaleFrameTimeoutMs: l,
                        hdrCaptureMode: n
                    },
                    quality: e
                }, eN)
            }
            null != a.cameraSource && eT.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: a.cameraSource.audioDeviceGuid
                },
                quality: e
            }, eN)
        }
    }

    function e9(e, t, n, i) {
        var s;
        let r = null !== (s = null == e ? void 0 : e.soundshareSession) && void 0 !== s ? s : "";
        null == e$[r] && (e$[r] = new Set);
        let a = null != t && !e$[r].has(t);
        a && e$[r].add(t), (null == t || a) && Q.default.track(ec.AnalyticEvents.SOUNDSHARE_FAILED, {
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: i,
            ...(0, D.default)(e)
        })
    }

    function e8(e) {
        let t = e1(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(er.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(er.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(er.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, $.isWeb)()) {
            let n = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(n)
        }
    }

    function e7() {
        return (0, $.isWindows)() && h.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, ef.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function e5(e) {
        return !!((0, $.isMac)() && eT.supports(eE.Features.SCREEN_CAPTURE_KIT) && h.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, ef.DARWIN_SCKIT_VERSION)) && F.default.getCurrentConfig({
            location: "screenCaptureKitEnabled"
        }, {
            autoTrackExposure: e
        }).allowScreenCaptureKit
    }
    let te = new class {
        start() {
            !this.started && (this.started = !0, eT.on(g.MediaEngineEvent.Silence, this.handleSilence))
        }
        stop() {
            this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eT.removeListener(g.MediaEngineEvent.Silence, this.handleSilence), S.default.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null
            }))
        }
        update() {
            let e = e1();
            !ex && eu.default.getState() === ec.RTCConnectionStates.RTC_CONNECTED && e.mode === ec.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
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
                    }), e && (eB = !0))
                }, t ? this.voiceTimeout : this.noVoiceTimeout)
            }
        }
    };

    function tt(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = e1(t);
        return Object.assign(i, e), !__OVERLAY__ && n && m.default.set(ep, eI), i
    }

    function tn() {
        !eA && eT.enable().then(() => S.default.dispatch({
            type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
            enabled: !0,
            unmute: !1
        }))
    }

    function ti(e) {
        return {
            id: eE.DEFAULT_DEVICE_ID,
            index: 0,
            name: e,
            disabled: !0
        }
    }

    function ts(e, t) {
        if (0 === e.length) {
            let e = ti(t);
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

    function tr(e, t) {
        var n;
        let i = null !== (n = e[t]) && void 0 !== n ? n : f(e).values().first();
        return null != i ? i.id : t
    }

    function ta() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = null !== (e = X.default.settings.audioContextSettings) && void 0 !== e ? e : {
                user: {},
                stream: {}
            };
        for (let e of Object.keys(i)) {
            let s = e === eh.ProtoAudioSettingsContextTypes.USER ? eE.MediaEngineContextTypes.DEFAULT : eE.MediaEngineContextTypes.STREAM,
                r = s === eE.MediaEngineContextTypes.STREAM ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
                a = null !== (t = i[e]) && void 0 !== t ? t : {},
                {
                    localMutes: o,
                    localVolumes: l
                } = e1(s);
            for (let [e, t] of Object.entries(a)) null == (0, q.getPendingAudioSettings)(s, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== r ? l[e] = t.volume : delete l[e], eT.eachConnection(n => {
                n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
            }, s));
            if (n) {
                let e = new Set([...Object.keys(o), ...Object.keys(l)]);
                for (let t of e) null == a[t] && (delete o[t], delete l[t], eT.eachConnection(e => {
                    e.setLocalVolume(t, r), e.setLocalMute(t, !1)
                }, s))
            }
            tt({
                localMutes: o,
                localVolumes: l
            }, s)
        }
    }

    function to(e) {
        if (null == i) return em.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
            soundshareId: null,
            soundshareSession: ""
        };
        {
            let t = i.getExperimentalSoundshare() ? e : Z.default.getAudioPid(e),
                n = "";
            return null != t && (n = Z.default.generateSessionFromPid(t)), {
                soundshareId: t,
                soundshareSession: n
            }
        }
    }

    function tl(e, t) {
        (0, $.isWindows)() && T.attachToProcess(e, {
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

    function tu() {
        let e = eE.MediaEngineContextTypes.DEFAULT,
            {
                videoToggleStateMap: t
            } = e1(e);
        for (let [e, n] of Object.entries(t)) n === ec.VideoToggleState.AUTO_PROBING && delete t[e];
        tt({
            videoToggleStateMap: t
        }, e, !1)
    }

    function td(e) {
        let t = e1();
        Q.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function tc() {
        let e = e1(),
            t = e.inputDeviceId,
            n = er.default.hasEchoCancellation(t) || e.echoCancellation,
            i = er.default.hasNoiseSuppression(t) || e.noiseSuppression,
            s = er.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            r = e.noiseCancellation;
        eT.setLoopback(eZ, {
            echoCancellation: n,
            noiseSuppression: i,
            automaticGainControl: s,
            noiseCancellation: r
        })
    }

    function tf() {
        return ej || !1
    }
    async function t_() {
        try {
            await et.default.ensureModule("discord_krisp"), et.default.requireModule("discord_krisp"), ej = !0, i.emitChange()
        } catch (t) {
            em.warn("Failed to load Krisp module: ".concat(t.message)), ee.default.captureException(t);
            let e = eE.NoiseCancellerError.INITIALIZED;
            if (t.message.includes(": ")) {
                let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
                e = isNaN(n) || 0 === n ? eE.NoiseCancellerError.INITIALIZED : n
            }
            Q.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
                noise_canceller_error: e
            }), tt({
                noiseCancellation: !1
            })
        } finally {
            eY = !1
        }
    }

    function th(e) {
        let {
            section: t
        } = e;
        return t === ec.UserSettingsSections.VOICE && tn(), !1
    }
    class tE extends E.default.Store {
        initialize() {
            eT.on(g.MediaEngineEvent.Connection, e => {
                let {
                    maxSyncDelayOverride: t
                } = V.default.getCurrentConfig({
                    location: "f627ab_3"
                }, {
                    autoTrackExposure: !1
                });
                t > 0 && eT.setMaxSyncDelayOverride(t), e2(e), e4(e), e8(e);
                let n = e1();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
                let {
                    useExperimentalRateControl: s
                } = H.default.getCurrentConfig({
                    location: "f627ab_4"
                }, {
                    autoTrackExposure: !1
                });
                s && e.setExperimentFlag(eE.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                {
                    (0, $.isWindows)() && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
                    let {
                        signalH265SupportNvenc: t
                    } = U.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    t && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportAMD: n
                    } = b.default.getCurrentConfig({
                        location: "f627ab_9"
                    }, {
                        autoTrackExposure: !0
                    });
                    n && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
                    let {
                        signalH265SupportMacOS: i
                    } = M.default.getCurrentConfig({
                        location: "f627ab_8"
                    }, {
                        autoTrackExposure: !0
                    });
                    i && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_H265_SUPPORT, !0)
                }
                let {
                    signalAV1Support: a
                } = P.default.getCurrentConfig({
                    location: "f627ab_10"
                }, {
                    autoTrackExposure: !0
                });
                a && e.setExperimentFlag(eE.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
                let {
                    allowSettingFullbandAndroid: o
                } = k.default.getCurrentConfig({
                    location: "f627ab_14"
                }, {
                    autoTrackExposure: !0
                });
                if (o && eT.setHasFullbandPerformance((0, N.hasPerformanceForKrispFullband)()), (0, A.default)(i)) {
                    let t = C.default.getSettings();
                    e.setExperimentFlag(eE.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
                    let {
                        enableViewerClipping: n
                    } = Y.default.getCurrentConfig({
                        location: "f627ab_15"
                    }, {
                        autoTrackExposure: !1
                    });
                    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eE.VIEWERSIDE_CLIP_KFI_MS);
                    let {
                        allowQualityDecoupling: i
                    } = I.default.getCurrentConfig({
                        location: "MediaEngineStore_setupMediaEngine"
                    }, {
                        autoTrackExposure: !0
                    });
                    e.setQualityDecoupling(i)
                }
                for (let t of (n = e1(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== ei.default.getId() && e.setLocalMute(t, n.localMutes[t]);
                for (let t of Object.keys(n.localVolumes)) t !== ei.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
                }), e.context === eE.MediaEngineContextTypes.DEFAULT && (ek = !1, e.on(g.BaseConnectionEvent.SpeakingWhileMuted, () => {
                    ek = !0, i.emitChange()
                })), e.on(g.BaseConnectionEvent.DesktopSourceEnd, () => {
                    S.default.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context
                        }
                    })
                }), e.on(g.BaseConnectionEvent.SoundshareAttached, () => {
                    (null == r ? void 0 : r.desktopSource) != null && Q.default.track(ec.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, D.default)(null == r ? void 0 : r.desktopSource))
                }), e.on(g.BaseConnectionEvent.SoundshareFailed, e => {
                    let {
                        failureCode: t,
                        failureReason: n,
                        willRetry: i
                    } = e;
                    e9(null == r ? void 0 : r.desktopSource, t, n, i)
                }), e.on(g.BaseConnectionEvent.SoundshareSpeaking, () => {
                    (null == r ? void 0 : r.desktopSource) != null && (Q.default.track(ec.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, D.default)(null == r ? void 0 : r.desktopSource)), null != el.default.getHookError(ec.MediaEngineHookTypes.SOUND) && S.default.wait(() => S.default.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                    })))
                });
                let l = new p.Timeout;
                e.on(g.BaseConnectionEvent.SoundshareTrace, e => {
                    switch (e.type) {
                        case "soundshare_attach_requested":
                            l.start(e0, () => {
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
                            (null == r ? void 0 : r.desktopSource) != null && (e9(null == r ? void 0 : r.desktopSource, n, t, i), !i && (l.stop(), S.default.wait(() => S.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                errorMessage: t,
                                errorCode: n
                            }))));
                            break;
                        case "soundshare_state_transition":
                            4 === e.newState && (l.stop(), S.default.wait(() => S.default.dispatch({
                                type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                            })))
                    }
                }), e.on(g.BaseConnectionEvent.InteractionRequired, e => {
                    S.default.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e
                    })
                }), e.on(g.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, s, a) => {
                    (null == r ? void 0 : r.desktopSource) != null && Q.default.track(ec.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: s,
                        reinitialization: a,
                        ...(0, D.default)(null == r ? void 0 : r.desktopSource)
                    })
                }), e.on(g.BaseConnectionEvent.NoiseCancellationError, e => {
                    em.warn("noisecancellererror event: ".concat(e)), eK = !0, Q.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
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
                    em.warn("voiceactivitydetectorerror event: ".concat(e)), Q.default.track(ec.AnalyticEvents.VOICE_PROCESSING, {
                        noise_canceller_error: e
                    }), S.default.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eE.MediaEngineContextTypes.DEFAULT,
                        mode: ec.InputModes.VOICE_ACTIVITY,
                        options: {
                            ...e1(eE.MediaEngineContextTypes.DEFAULT).modeOptions,
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
                    l.stop()
                }), e.setBitRate(es.default.bitrate), e.applyVideoQualityMode(ed.default.mode)
            }), eT.on(g.MediaEngineEvent.DeviceChange, (e, t, n) => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n
                })
            }), eT.on(g.MediaEngineEvent.VolumeChange, (e, t) => {
                S.default.dispatch({
                    type: "AUDIO_VOLUME_CHANGE",
                    inputVolume: e,
                    outputVolume: t
                })
            }), eT.on(g.MediaEngineEvent.DesktopSourceEnd, () => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: null
                })
            }), eT.on(g.MediaEngineEvent.AudioPermission, e => {
                eq = !0, S.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e
                })
            }), eT.on(g.MediaEngineEvent.VideoPermission, e => {
                S.default.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "video",
                    granted: e
                })
            }), eT.on(g.MediaEngineEvent.WatchdogTimeout, async () => {
                let e;
                try {
                    await Z.default.submitLiveCrashReport({
                        message: {
                            message: "Voice Watchdog Timeout"
                        }
                    })
                } catch (t) {
                    "number" == typeof t.status && (e = t.status)
                }
                em.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Q.default.track(ec.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e
                })
            }), eT.on(g.MediaEngineEvent.VideoInputInitialized, e => {
                Q.default.track(ec.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.default.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy
                })
            }), eT.on(g.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
                S.default.dispatch({
                    type: "CLIPS_RESTART"
                })
            }), eT.on(g.MediaEngineEvent.ClipsInitFailure, (e, t) => {
                S.default.wait(() => {
                    S.default.dispatch({
                        type: "CLIPS_INIT_FAILURE",
                        errMsg: e,
                        applicationName: t
                    })
                })
            }), eT.on(g.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
                var n, i;
                (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == r ? void 0 : null === (i = r.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && T.cancelAttachToProcess(t), a = null)
            }), te.reset(), ! function() {
                var e;
                let t = m.default.get("audio");
                null != t && (m.default.set(ep, {
                        [eE.MediaEngineContextTypes.DEFAULT]: t
                    }), m.default.remove("audio")), eI = null !== (e = m.default.get(ep)) && void 0 !== e ? e : {}, f.each(eI, e => {
                        if (f.defaultsDeep(e, ev()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, $.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        let e = e1();
                        eT.setAudioInputDevice(e.inputDeviceId), eT.setAudioOutputDevice(e.outputDeviceId), e6(), eT.setInputVolume(e.inputVolume), eT.setOutputVolume(e.outputVolume), eT.setH264Enabled(e.openH264), eT.setAv1Enabled(e.av1Enabled), eT.setAecDump(e.aecDumpEnabled)
                    }()
            }(), !(0, $.isDesktop)() || __OVERLAY__ || eY || ej ? (0, $.isWeb)() && eT.supports(eE.Features.NOISE_CANCELLATION) ? (ej = !0, i.emitChange()) : (0, $.isWeb)() && tt({
                noiseCancellation: !1
            }) : (eY = !0, t_()), tu(), eJ = {
                [eE.Features.VIDEO]: eT.supports(eE.Features.VIDEO),
                [eE.Features.DESKTOP_CAPTURE]: eT.supports(eE.Features.DESKTOP_CAPTURE),
                [eE.Features.HYBRID_VIDEO]: eT.supports(eE.Features.HYBRID_VIDEO)
            }, this.waitFor(ei.default, er.default, ea.default, el.default, eu.default, O.default, K.default.storage, X.default, eo.default, C.default)
        }
        supports(e) {
            return eT.supports(e)
        }
        supportsInApp(e) {
            return eJ[e] || eT.supports(e)
        }
        isSupported() {
            return eT.supported()
        }
        isExperimentalEncodersSupported() {
            return eT.supports(eE.Features.EXPERIMENTAL_ENCODERS)
        }
        isNoiseSuppressionSupported() {
            return eT.supports(eE.Features.NOISE_SUPPRESSION)
        }
        isNoiseCancellationSupported() {
            return ej || !1
        }
        isNoiseCancellationError() {
            return eK
        }
        isAutomaticGainControlSupported() {
            return eT.supports(eE.Features.AUTOMATIC_GAIN_CONTROL)
        }
        isAdvancedVoiceActivitySupported() {
            return ej || !1
        }
        isAecDumpSupported() {
            return eT.supports(eE.Features.AEC_DUMP)
        }
        isSimulcastSupported() {
            return eT.supports(eE.Features.VIDEO) && eT.supports(eE.Features.SIMULCAST)
        }
        getAecDump() {
            return e1().aecDumpEnabled
        }
        getMediaEngine() {
            return eT
        }
        getVideoComponent() {
            return eT.supports(eE.Features.DIRECT_VIDEO) && eT.setUseDirectVideo(!0), eT.Video
        }
        getCameraComponent() {
            return eT.supports(eE.Features.DIRECT_VIDEO) && eT.setUseDirectVideo(!0), eT.Camera
        }
        isEnabled() {
            return eA
        }
        isMute() {
            return this.isSelfMute() || eP
        }
        isDeaf() {
            return this.isSelfDeaf() || eb
        }
        hasContext(e) {
            return null != eI[e]
        }
        isSelfMutedTemporarily() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
            return e === eE.MediaEngineContextTypes.DEFAULT && eL
        }
        isSelfMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
            return !this.isEnabled() || e1(e).mute || !K.default.didHavePermission(e_.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eE.MediaEngineContextTypes.DEFAULT && eM
        }
        isHardwareMute() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
            return !this.isMute() && !this.isSelfMutedTemporarily(e) && er.default.isHardwareMute(this.getInputDeviceId())
        }
        isSelfDeaf() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
            return !this.isSupported() || e1(e).deaf
        }
        isVideoEnabled() {
            return eU && eG
        }
        isVideoAvailable() {
            return Object.values(eD).some(e => {
                let {
                    disabled: t
                } = e;
                return !t
            })
        }
        isScreenSharing() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.STREAM;
            return eN === e && null != r
        }
        isSoundSharing() {
            var e;
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.STREAM;
            return eN === t && null != r && (null === (e = r.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
        }
        isLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
            return e !== ei.default.getId() && (e1(t).localMutes[e] || !1)
        }
        supportsDisableLocalVideo() {
            return eT.supports(eE.Features.DISABLE_VIDEO)
        }
        isLocalVideoDisabled(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e1(n).disabledLocalVideos[e]) && void 0 !== t && t
        }
        getVideoToggleState(e) {
            var t;
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
            return null !== (t = e1(n).videoToggleStateMap[e]) && void 0 !== t ? t : ec.VideoToggleState.NONE
        }
        isLocalVideoAutoDisabled(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT;
            return t === eE.MediaEngineContextTypes.DEFAULT && eX.has(e)
        }
        isAnyLocalVideoAutoDisabled() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
            return e === eE.MediaEngineContextTypes.DEFAULT && eX.size > 0
        }
        isMediaFilterSettingLoading() {
            return ez
        }
        isNativeAudioPermissionReady() {
            return eq
        }
        getGoLiveSource() {
            return r
        }
        getGoLiveContext() {
            return eN
        }
        getLocalPan(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
                n = e1(t).localPans[e];
            return null != n ? n : eS
        }
        getLocalVolume(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.MediaEngineContextTypes.DEFAULT,
                n = t === eE.MediaEngineContextTypes.STREAM,
                i = n ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
                s = e1(t).localVolumes[e];
            return null != s ? s : i
        }
        getInputVolume() {
            return e1().inputVolume
        }
        getOutputVolume() {
            return e1().outputVolume
        }
        getMode() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
            return e1(e).mode
        }
        getModeOptions() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
            return e1(e).modeOptions
        }
        getShortcuts() {
            let e = {};
            return f.each(eI, (t, n) => {
                let {
                    mode: i,
                    modeOptions: {
                        shortcut: s
                    }
                } = t;
                i === ec.InputModes.PUSH_TO_TALK && eC.has(n) && (e[n] = s)
            }), e
        }
        getInputDeviceId() {
            return tr(eR, e1().inputDeviceId)
        }
        getOutputDeviceId() {
            return tr(eO, e1().outputDeviceId)
        }
        getVideoDeviceId() {
            return tr(eD, e1().videoDeviceId)
        }
        getInputDevices() {
            return eR
        }
        getOutputDevices() {
            return eO
        }
        getVideoDevices() {
            return eD
        }
        getEchoCancellation() {
            let e = e1();
            return er.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
        }
        getH265Enabled() {
            return e1().h265Enabled
        }
        getLoopback() {
            return eT.getLoopback()
        }
        getNoiseSuppression() {
            let e = e1();
            return er.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
        }
        getAutomaticGainControl() {
            let e = e1();
            return er.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
        }
        getNoiseCancellation() {
            return e1().noiseCancellation
        }
        getExperimentalEncoders() {
            return e1().experimentalEncoders
        }
        getHardwareH264() {
            return e1().hardwareH264
        }
        getEnableSilenceWarning() {
            return e1().silenceWarning
        }
        getDebugLogging() {
            return eT.getDebugLogging()
        }
        getQoS() {
            return e1().qos
        }
        getAttenuation() {
            return e1().attenuation
        }
        getAttenuateWhileSpeakingSelf() {
            return e1().attenuateWhileSpeakingSelf
        }
        getAttenuateWhileSpeakingOthers() {
            return e1().attenuateWhileSpeakingOthers
        }
        getAudioSubsystem() {
            return eT.getAudioSubsystem()
        }
        getSettings() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT;
            return e1(e)
        }
        getState() {
            return {
                settingsByContext: eI,
                inputDevices: eR,
                outputDevices: eO,
                appSupported: eJ,
                krispModuleLoaded: ej,
                goLiveSource: r,
                goLiveContext: eN
            }
        }
        getInputDetected() {
            return eF
        }
        getNoInputDetectedNotice() {
            return eB
        }
        getPacketDelay() {
            return $.isPlatformEmbedded || this.getMode() !== ec.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
        }
        setCanHavePriority(e, t) {
            eT.eachConnection(n => n.setCanHavePriority(e, t))
        }
        isInteractionRequired() {
            return ey
        }
        getVideoHook() {
            return e1().videoHook
        }
        supportsVideoHook() {
            return eT.supports(eE.Features.VIDEO_HOOK)
        }
        getExperimentalSoundshare() {
            let e = e1().experimentalSoundshare2;
            return this.supportsExperimentalSoundshare() && (null == e || e)
        }
        supportsExperimentalSoundshare() {
            return eT.supports(eE.Features.EXPERIMENTAL_SOUNDSHARE) && h.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, ef.WINDOWS_SOUNDSHARE_VERSION)
        }
        getOpenH264() {
            return e1().openH264
        }
        getAv1Enabled() {
            return e1().av1Enabled
        }
        getEverSpeakingWhileMuted() {
            return ek
        }
        supportsScreenSoundshare() {
            return (0, $.isMac)() && eT.supports(eE.Features.SOUNDSHARE) && h.satisfies(null === v.default || void 0 === v.default ? void 0 : v.default.os.release, ef.DARWIN_SCKIT_AUDIO_VERSION) && e5(!1) || (0, $.isWindows)() && eT.supports(eE.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
        }
        getVideoStreamParameters() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.MediaEngineContextTypes.DEFAULT,
                t = this.supports(eE.Features.VIDEO) ? [{
                    rid: "100",
                    type: e === eE.MediaEngineContextTypes.DEFAULT ? eE.MediaTypes.VIDEO : eE.MediaTypes.SCREEN,
                    quality: 100
                }] : [];
            return this.isSimulcastSupported() && e === eE.MediaEngineContextTypes.DEFAULT && t.push({
                rid: "50",
                type: eE.MediaTypes.VIDEO,
                quality: 50
            }), t
        }
        getSupportedSecureFramesProtocolVersion(e) {
            var t;
            let n = eT.getSupportedSecureFramesProtocolVersion(),
                i = x.SecureFramesUserExperiment.getCurrentConfig({
                    location: "MediaEngineStore"
                }),
                s = null != e ? x.SecureFramesGuildExperiment.getCurrentConfig({
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
    tE.displayName = "MediaEngineStore";
    var tg = i = new tE(S.default, {
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n,
                currentVoiceChannelId: i,
                video: s
            } = e;
            if (i !== n && e6(s, null), null != t || null == n) {
                eH = !1;
                return
            }
            if (eH) return;
            eH = !0;
            let r = e1();
            (r.mute || r.deaf) && (tt({
                deaf: !1,
                mute: !1
            }), eT.eachConnection(e4))
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                if (s === t.sessionId) {
                    eP = t.mute || t.suppress, eb = t.deaf, eT.eachConnection(e4);
                    let e = null != t.guildId && null != t.channelId && null != eW && eW !== t.channelId,
                        n = !e && eU;
                    return e6(n), eW = t.channelId, !0
                }
                return !__OVERLAY__ && t.userId === ei.default.getId() && null == eu.default.getChannelId() && e6(!1, null), e
            }, !1)
        },
        CONNECTION_OPEN: function(e) {
            s = e.sessionId, eP = !1, eb = !1, (0, z.shouldReadWriteAudioSettings)() && ta()
        },
        CONNECTION_CLOSED: function() {
            s = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case ec.RTCConnectionStates.CONNECTING:
                    tn();
                    break;
                case ec.RTCConnectionStates.RTC_CONNECTING:
                    ex = !1, eB = !1;
                    break;
                case ec.RTCConnectionStates.RTC_CONNECTED:
                    e6();
                    break;
                case ec.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 === eX.size) return;
                        let e = eE.MediaEngineContextTypes.DEFAULT,
                            {
                                disabledLocalVideos: t
                            } = e1(e);
                        eX.forEach(n => {
                            d(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eT.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
                        }), eX.clear(), tt({
                            disabledLocalVideos: t
                        }, e, !1)
                    })(), tu()
            }
            te.update()
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
            let {
                mute: t
            } = e;
            eL = t, eT.eachConnection(e4)
        },
        AUDIO_TOGGLE_SELF_MUTE: function(e) {
            let {
                context: t
            } = e, {
                mute: n,
                deaf: i
            } = e1(t);
            if (t === eE.MediaEngineContextTypes.DEFAULT && (K.default.requestPermission(e_.NativePermissionTypes.AUDIO), eM)) return !1;
            !(n = !i && !n) && (i = !1), tt({
                mute: n,
                deaf: i
            }, t), eT.eachConnection(e4)
        },
        AUDIO_SET_SELF_MUTE: function(e) {
            let {
                context: t,
                mute: n
            } = e;
            tt({
                mute: n
            }, t), eT.eachConnection(e4)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            let {
                context: t
            } = e, n = e1(t);
            tt({
                deaf: !n.deaf
            }, t), eT.eachConnection(e4)
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
            let {
                context: t,
                userId: n
            } = e;
            if (n === ei.default.getId()) return;
            let {
                localMutes: i
            } = e1(t);
            i[n] ? delete i[n] : i[n] = !0, tt({
                localMutes: i
            }, t), eT.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
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
            let h = c === ec.VideoToggleState.DISABLED,
                {
                    disabledLocalVideos: E
                } = e1(l),
                g = null !== (t = E[u]) && void 0 !== t && t,
                m = eX.has(u),
                p = c === ec.VideoToggleState.AUTO_ENABLED || c === ec.VideoToggleState.MANUAL_ENABLED;
            em.info("disableVideo=".concat(h, " currentlyDisabled=").concat(g, " currentlyAutoDisabled=").concat(m, ", isVideoShown=").concat(p)), d(!(m && !g), "If you are auto-disabled, then you are also disabled.");
            let S = h !== g,
                v = l === eE.MediaEngineContextTypes.DEFAULT,
                T = _ && S && v,
                I = f && S && v;
            em.info("changed=".concat(S, " isDefaultContext=").concat(v, " isUpdateCausedByVideoHealthManager=").concat(T, " isManualToggleByUser=").concat(I));
            let {
                videoToggleStateMap: C
            } = e1(l);
            if (C[u] === ec.VideoToggleState.AUTO_PROBING && c === ec.VideoToggleState.AUTO_ENABLED && (0, W.default)(u, h ? eE.VideoToggleReason.AUTO_DISABLE : eE.VideoToggleReason.AUTO_ENABLE, p), C[u] = c, tt({
                    videoToggleStateMap: C
                }, l, f), c === ec.VideoToggleState.AUTO_PROBING ? null === (n = eu.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eu.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !eQ && (em.info("isAutoDisableAllowed=".concat(eQ, " - disabling VideoHealthManager")), null === (r = eu.default.getRTCConnection()) || void 0 === r || null === (s = r.getVideoHealthManager()) || void 0 === s || s.disable()), T) {
                if (!h && !m || h && !eQ) return;
                (0, W.default)(u, h ? eE.VideoToggleReason.AUTO_DISABLE : eE.VideoToggleReason.AUTO_ENABLE, p), h ? eX.add(u) : eX.delete(u)
            } else I && (m && !h ? (em.info("disallowing auto-disable for this session because of manual override by user"), eQ = !1, null === (o = eu.default.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable(), (0, W.default)(u, eE.VideoToggleReason.MANUAL_REENABLE, p)) : (0, W.default)(u, h ? eE.VideoToggleReason.MANUAL_DISABLE : eE.VideoToggleReason.MANUAL_ENABLE, p));
            v && !h && eX.delete(u), h ? E[u] = !0 : delete E[u], tt({
                disabledLocalVideos: E
            }, l, f), eT.eachConnection(e => {
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
            if (n === ei.default.getId()) return;
            let s = t === eE.MediaEngineContextTypes.STREAM,
                r = s ? eE.DEFAULT_STREAM_VOLUME : eE.DEFAULT_VOLUME,
                {
                    localVolumes: a
                } = e1(t);
            i === r ? delete a[n] : a[n] = i, tt({
                localVolumes: a
            }, t), eT.eachConnection(e => e.setLocalVolume(n, i), t)
        },
        AUDIO_SET_LOCAL_PAN: function(e) {
            let {
                context: t,
                userId: n,
                left: i,
                right: s
            } = e, {
                localPans: r
            } = e1(t);
            r[n] = {
                left: i,
                right: s
            }, tt({
                localPans: r
            }, t), eT.eachConnection(e => e.setLocalPan(n, i, s), t)
        },
        AUDIO_SET_MODE: function(e) {
            let {
                context: t,
                mode: n,
                options: i
            } = e;
            tt({
                mode: n,
                modeOptions: i
            }, t), eT.eachConnection(e2), te.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            tt({
                inputVolume: e3(t)
            }), eT.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            tt({
                outputVolume: t
            }), eT.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tt({
                inputDeviceId: t = tr(eR, t)
            }), eT.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tt({
                outputDeviceId: t = tr(eO, t)
            }), eT.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            let t = tt({
                echoCancellation: e.enabled
            });
            eT.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tc(), td(e.location)
        },
        MEDIA_ENGINE_SET_H265: function(e) {
            let t = tt({
                h265Enabled: e.enabled
            });
            eT.setH265Enabled(t.h265Enabled)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            let {
                enabled: t
            } = e;
            return eZ = t, tc()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            let t = tt({
                noiseSuppression: e.enabled
            });
            eT.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tc(), td(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            let t = tt({
                automaticGainControl: e.enabled
            });
            eT.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tc(), td(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            let t = tt({
                noiseCancellation: e.enabled
            });
            eT.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tc(), td(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            tt({
                silenceWarning: e.enabled
            }), te.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eT.setDebugLogging(e.enabled)
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
            tt({
                videoHook: e.enabled
            })
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
            tt({
                experimentalSoundshare2: e.enabled
            })
        },
        AUDIO_SET_ATTENUATION: function(e) {
            let {
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            } = e, s = tt({
                attenuation: t,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: i
            });
            eT.eachConnection(e => e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers))
        },
        AUDIO_SET_QOS: function(e) {
            let {
                enabled: t
            } = e;
            tt({
                qos: t
            }), eT.eachConnection(e => e.setQoS(t))
        },
        MEDIA_ENGINE_DEVICES: function(e) {
            let {
                inputDevices: t,
                outputDevices: n,
                videoDevices: i
            } = e;
            ! function(e) {
                let t = eR;
                if (eR = ts(e, eg.default.Messages.NO_INPUT_DEVICES), !f.isEqual(eR, t)) {
                    let e = e1(),
                        t = tr(eR, e.inputDeviceId);
                    eT.setAudioInputDevice(t)
                }
            }(t), ! function(e) {
                let t = eO;
                if (eO = ts(e, eg.default.Messages.NO_OUTPUT_DEVICES), !f.isEqual(eO, t)) {
                    let e = e1(),
                        t = tr(eO, e.outputDeviceId);
                    eT.setAudioOutputDevice(t)
                }
            }(n), ! function(e) {
                eG = e.length > 0;
                let t = eD;
                if (eD = ts(e, eg.default.Messages.NO_VIDEO_DEVICES), eU && !f.isEqual(eD, t)) {
                    var n;
                    let e = void 0 !== eD[ew],
                        i = ew === eE.DEFAULT_DEVICE_ID && (null === (n = t[eE.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    e6(e || i)
                }
            }(i)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            let {
                inputVolume: t,
                outputVolume: n
            } = e;
            tt({
                inputVolume: e3(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            m.default.remove(ep), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            let {
                inputDetected: t
            } = e;
            eF = t, !ex && eF && (ex = !0, te.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eT.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            eA = e.enabled, e.unmute && tt({
                mute: !1,
                deaf: !1
            }), eT.eachConnection(e4)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            let {
                enabled: t
            } = e;
            K.default.requestPermission(e_.NativePermissionTypes.CAMERA), e6(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            let {
                kind: t,
                granted: n
            } = e;
            if (!n) switch (t) {
                case "audio":
                    eA = !1, eT.eachConnection(e4);
                    break;
                case "video":
                    e6(!1)
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
                    u = null !== (t = o.context) && void 0 !== t ? t : eE.MediaEngineContextTypes.DEFAULT,
                    d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
                        resolution: 720,
                        frameRate: 30
                    },
                    c = Z.default.getPidFromDesktopSource(s);
                $.isPlatformEmbedded && !0 === l && ({
                    soundshareId: e,
                    soundshareSession: i
                } = to(c), null != e && tl(e, i)), (a = u) !== eN && (null != r && eT.setGoLiveSource(null, eN), eN = a);
                let f = u === eE.MediaEngineContextTypes.STREAM && eU;
                e6(f, {
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
                let e = null !== (i = o.context) && void 0 !== i ? i : eE.MediaEngineContextTypes.DEFAULT,
                    {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    } = o.cameraSettings,
                    r = e === eE.MediaEngineContextTypes.STREAM && eU,
                    a = null !== (s = o.qualityOptions) && void 0 !== s ? s : {
                        resolution: 720,
                        frameRate: 30
                    };
                e6(r, {
                    cameraSource: {
                        videoDeviceGuid: t,
                        audioDeviceGuid: n
                    },
                    quality: {
                        resolution: a.resolution,
                        frameRate: a.frameRate
                    }
                })
            } else e6(eU, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            let {
                id: t
            } = e;
            tt({
                videoDeviceId: t = tr(eD, t)
            }), e6()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            let t = tt({
                experimentalEncoders: e.enabled
            });
            eT.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return ey !== e.required && (ey = e.required, !e.required && eT.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: th,
        USER_SETTINGS_MODAL_SET_SECTION: th,
        CERTIFIED_DEVICES_SET: function() {
            return eT.eachConnection(e8), !1
        },
        RPC_APP_CONNECTED: function(e) {
            let {
                application: t
            } = e;
            eC.add(t.id)
        },
        RPC_APP_DISCONNECTED: function(e) {
            let {
                application: t
            } = e;
            eC.delete(t.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                mediaEngineState: t
            } = e;
            eI = t.settingsByContext, eR = t.inputDevices, eO = t.outputDevices, eJ = t.appSupported, ej = t.krispModuleLoaded, eN = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            let {
                enabled: t
            } = e, n = tt({
                openH264: t
            });
            eT.setH264Enabled(n.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            let {
                enabled: t
            } = e, n = tt({
                hardwareH264: t
            });
            eT.eachConnection(e => e.setHardwareH264(n.hardwareH264))
        },
        MEDIA_ENGINE_SET_AV1: function(e) {
            let {
                enabled: t
            } = e, n = tt({
                av1Enabled: t
            });
            eT.setAv1Enabled(n.av1Enabled)
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e, n = R.default.isEnabled();
            if (t === ec.AppStates.BACKGROUND && eU && !n) eV = !0, e6(!1);
            else {
                if (t !== ec.AppStates.ACTIVE || !eV) return !1;
                eV = !1, e6(!0)
            }
            return !0
        },
        SET_CHANNEL_BITRATE: function(e) {
            eT.eachConnection(t => t.setBitRate(e.bitrate))
        },
        SET_VAD_PERMISSION: function(e) {
            let {
                hasPermission: t
            } = e, n = !t;
            if (n === eM) return !1;
            eM = n, eT.eachConnection(e4)
        },
        SET_NATIVE_PERMISSION: function(e) {
            let {
                state: t,
                permissionType: n
            } = e, i = t === e_.NativePermissionStates.ACCEPTED;
            switch (n) {
                case e_.NativePermissionTypes.AUDIO:
                    eq = !0, eT.eachConnection(e4);
                    break;
                case e_.NativePermissionTypes.CAMERA:
                    !i && eU && e6(!1);
                    break;
                default:
                    return !1
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            eT.eachConnection(t => t.applyVideoQualityMode(e.mode))
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
            let {
                enabled: t
            } = e, n = tt({
                aecDumpEnabled: t
            });
            eT.setAecDump(n.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!eU && null == r || null != eu.default.getRTCConnectionId()) return !1;
            e6(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!eK && (eK = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            let {
                settings: t
            } = e;
            eT.applyMediaFilterSettings(t).finally(() => {
                ez = !1, i.emitChange()
            })
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
            ez = !0
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
            ez = !1
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: {
                    type: t
                },
                local: n,
                wasSaved: i
            } = e;
            if (!(0, z.shouldReadWriteAudioSettings)() || t !== eh.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
            ta(!0)
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
                d = Z.default.getPidFromDesktopSource(t);
            ({
                soundshareId: l,
                soundshareSession: u
            } = to(d));
            let c = {
                desktopSource: {
                    id: t,
                    sourcePid: d,
                    soundshareId: l,
                    soundshareSession: u
                },
                quality: s
            };
            null != a && a.desktopSource.id !== c.desktopSource.id && (eT.setClipsSource(null), (0, $.isWindows)() && null != a.desktopSource.soundshareId && T.cancelAttachToProcess(a.desktopSource.soundshareId)), null != l && tl(l, u), a = c;
            let {
                useQuartzCapturer: f
            } = G.default.getCurrentConfig({
                location: "f627ab_11"
            }, {
                autoTrackExposure: !1
            }), {
                hdrCaptureMode: _
            } = w.default.getCurrentConfig({
                location: "f627ab_12"
            }, {
                autoTrackExposure: !1
            }), h = e1().videoHook, E = eT.supports(eE.Features.CAPTURE_TIMEOUT_EXPERIMENTS), {
                videoHookStaleFrameTimeoutMs: g
            } = B.default.getConfig(E && h, "e225cfdf5_vh2", !1), {
                graphicsCaptureStaleFrameTimeoutMs: m
            } = j.default.getConfig(E && e7(), "e225cfdf5_wgc2", !1);
            eT.setClipsSource({
                desktopDescription: {
                    id: a.desktopSource.id,
                    soundshareId: a.desktopSource.soundshareId,
                    useVideoHook: h,
                    useGraphicsCapture: e7(),
                    useLoopback: i.getExperimentalSoundshare(),
                    useQuartzCapturer: f,
                    allowScreenCaptureKit: e5(!1),
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
            !1 === t.decoupledClipsEnabled && (a = null, eT.setClipsSource(null)), !1 === t.decoupledClipsEnabled && (a = null, eT.setClipsSource(null))
        }
    })
}