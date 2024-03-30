function(e, t, n) {
    "use strict";
    n.r(t), n("752584");
    var r, o, i, a, u, s, l, c = n("512722"),
        f = n.n(c),
        d = n("392711"),
        _ = n.n(d),
        E = n("553813"),
        p = n.n(E),
        m = n("898511"),
        y = n("384433"),
        I = n("242880"),
        h = n("945816"),
        O = n("629815"),
        T = n("517727"),
        S = n("633814"),
        v = n("607305"),
        g = n("635243"),
        A = n("975628"),
        b = n("35523"),
        N = n("848312"),
        R = n("581787"),
        C = n("654370"),
        P = n("428560"),
        D = n("634498"),
        L = n("514708"),
        M = n("129284"),
        U = n("354086"),
        w = n("957210"),
        k = n("614655"),
        G = n("543451"),
        B = n("534360"),
        j = n("86677"),
        F = n("734981"),
        V = n("380638"),
        H = n("488199"),
        x = n("3116"),
        Y = n("251383"),
        W = n("197128"),
        K = n("602520"),
        z = n("760381"),
        X = n("297472"),
        q = n("967385"),
        Q = n("238022"),
        J = n("679203"),
        Z = n("851285"),
        $ = n("870331"),
        ee = n("618396"),
        et = n("388990"),
        en = n("374550"),
        er = n("285910"),
        eo = n("131900"),
        ei = n("469849"),
        ea = n("217014"),
        eu = n("239546"),
        es = n("839650"),
        el = n("935741"),
        ec = n("139890"),
        ef = n("533890"),
        ed = n("545072"),
        e_ = n("342564"),
        eE = n("281767"),
        ep = n("367965"),
        em = n("203151"),
        ey = n("382021"),
        eI = n("439386"),
        eh = n("941504");

    function eO(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function eT(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function eS(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    eT(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    eT(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function ev(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function eg(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function eA(e, t, n) {
        return t && eg(e.prototype, t), n && eg(e, n), e
    }

    function eb(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function eN(e) {
        return (eN = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function eR(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                eb(e, t, n[t])
            })
        }
        return e
    }

    function eC(e, t) {
        return (eC = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function eP(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || eL(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function eD(e) {
        return function(e) {
            if (Array.isArray(e)) return eO(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || eL(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function eL(e, t) {
        if (e) {
            if ("string" == typeof e) return eO(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return eO(e, t)
        }
    }

    function eM(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var eU = new b.default("MediaEngineStore");
    (r = o || (o = {}))[r.DETACHED = 0] = "DETACHED", r[r.WAITING = 1] = "WAITING", r[r.ATTACHED = 2] = "ATTACHED", r[r.STARTED = 3] = "STARTED", r[r.PLAYING = 4] = "PLAYING", r[r.SILENCE = 5] = "SILENCE";
    var ew = "MediaEngineStore",
        ek = {
            left: 1,
            right: 1
        };

    function eG() {
        return {
            mode: eE.InputModes.VOICE_ACTIVITY,
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
            inputVolume: eI.DEFAULT_VOLUME,
            outputVolume: eI.DEFAULT_VOLUME,
            inputDeviceId: eI.DEFAULT_DEVICE_ID,
            outputDeviceId: eI.DEFAULT_DEVICE_ID,
            videoDeviceId: eI.DEFAULT_DEVICE_ID,
            qos: !1,
            qosMigrated: !1,
            videoHook: eB.supports(eI.Features.VIDEO_HOOK),
            experimentalSoundshare2: null,
            openH264: !0,
            av1Enabled: !0,
            h265Enabled: !0,
            vadThrehsoldMigrated: !1,
            aecDumpEnabled: !1
        }
    }
    var eB = (0, y.initializeMediaEngine)((0, y.determineMediaEngine)()),
        ej = {},
        eF = new Set([eI.MediaEngineContextTypes.DEFAULT]),
        eV = eB.supports(eI.Features.AUTO_ENABLE),
        eH = !1,
        ex = eI.MediaEngineContextTypes.STREAM,
        eY = eb({}, eI.DEFAULT_DEVICE_ID, tT(eh.default.Messages.NO_INPUT_DEVICES)),
        eW = eb({}, eI.DEFAULT_DEVICE_ID, tT(eh.default.Messages.NO_OUTPUT_DEVICES)),
        eK = eb({}, eI.DEFAULT_DEVICE_ID, tT(eh.default.Messages.NO_VIDEO_DEVICES)),
        ez = !1,
        eX = !1,
        eq = !1,
        eQ = !1,
        eJ = !1,
        eZ = eI.DISABLED_DEVICE_ID,
        e$ = !1,
        e0 = !1,
        e1 = !1,
        e2 = !1,
        e3 = null,
        e4 = !1,
        e6 = !1,
        e8 = !1,
        e7 = !1,
        e9 = !1,
        e5 = null,
        te = !1,
        tt = !1,
        tn = !1;
    q.default.hasPermission(em.NativePermissionTypes.AUDIO, {
        showAuthorizationError: !1
    }), q.default.hasPermission(em.NativePermissionTypes.CAMERA, {
        showAuthorizationError: !1
    });
    var tr = new Set,
        to = !1,
        ti = !1,
        ta = {},
        tu = {},
        ts = 5 * et.default.Millis.SECOND;

    function tl() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT,
            t = ej[e];
        return null == t && (t = eG(), ej[e] = t), t
    }

    function tc(e) {
        var t = tl(e.context);
        e.setInputMode(t.mode, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
                return e9 || !1
            }(),
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: t.modeOptions.delay
        })
    }

    function tf(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.DEFAULT_VOLUME;
        return _().clamp(e, 0, t)
    }

    function td(e) {
        var t = tl(e.context),
            n = !eV || t.mute || t.deaf;
        e.context === eI.MediaEngineContextTypes.DEFAULT ? n = n || ez || eX || eq || !q.default.didHavePermission(em.NativePermissionTypes.AUDIO) : e.context === eI.MediaEngineContextTypes.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf)
    }

    function t_() {
        var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ,
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
            a = u;
        if ((null == a ? void 0 : a.desktopSource) != null && a.desktopSource.id !== (null == o ? void 0 : null === (e = o.desktopSource) || void 0 === e ? void 0 : e.id) && (null != a.desktopSource.soundshareId && (0, en.isWindows)() && S.cancelAttachToProcess(a.desktopSource.soundshareId), eB.setGoLiveSource(null, ex)), (null == a ? void 0 : a.cameraSource) != null && (a.cameraSource.videoDeviceGuid !== (null == o ? void 0 : null === (t = o.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || a.cameraSource.audioDeviceGuid !== (null == o ? void 0 : null === (n = o.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eB.setGoLiveSource(null, ex), (eJ || r) && (eZ = (eJ = r) ? tv(eK, tl().videoDeviceId) : eI.DISABLED_DEVICE_ID, eB.setVideoInputDevice(eZ)), u = o, null != o) {
            var s = {
                resolution: o.quality.resolution,
                frameRate: o.quality.frameRate
            };
            if (null != o.desktopSource) {
                var l = V.default.getCurrentConfig({
                        location: "f627ab_1"
                    }, {
                        autoTrackExposure: !1
                    }).useQuartzCapturer,
                    c = B.default.getCurrentConfig({
                        location: "f627ab_2"
                    }, {
                        autoTrackExposure: !1
                    }).hdrCaptureMode,
                    f = tl().videoHook,
                    d = eB.supports(eI.Features.CAPTURE_TIMEOUT_EXPERIMENTS),
                    _ = Y.default.getConfig(d && f, "e225cfdf5_vh1", !0).videoHookStaleFrameTimeoutMs,
                    E = z.default.getConfig(d && tm(), "e225cfdf5_wgc2", !0).graphicsCaptureStaleFrameTimeoutMs;
                eB.setGoLiveSource({
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: f,
                        useGraphicsCapture: tm(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: l,
                        allowScreenCaptureKit: ty(!0),
                        videoHookStaleFrameTimeoutMs: _,
                        graphicsCaptureStaleFrameTimeoutMs: E,
                        hdrCaptureMode: c
                    },
                    quality: s
                }, ex)
            }
            null != o.cameraSource && eB.setGoLiveSource({
                cameraDescription: {
                    videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: o.cameraSource.audioDeviceGuid
                },
                quality: s
            }, ex)
        }
    }

    function tE(e, t, n, r) {
        var o, i = null !== (o = null == e ? void 0 : e.soundshareSession) && void 0 !== o ? o : "";
        null == tu[i] && (tu[i] = new Set);
        var a = null != t && !tu[i].has(t);
        a && tu[i].add(t), (null == t || a) && $.default.track(eE.AnalyticEvents.SOUNDSHARE_FAILED, eR({
            soundshare_failure_code: t,
            soundshare_failure_reason: n,
            soundshare_failure_will_retry: r
        }, (0, P.default)(e)))
    }

    function tp(e) {
        var t = tl(),
            n = t.inputDeviceId;
        if (e.setEchoCancellation(es.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(es.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(es.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, en.isWeb)()) {
            var r = t.noiseCancellation ? -150 : -100;
            e.setSilenceThreshold(r)
        }
    }

    function tm() {
        return (0, en.isWindows)() && p().satisfies(null === T.default || void 0 === T.default ? void 0 : T.default.os.release, ep.WINDOWS_GRAPHICS_CAPTURE_VERSION)
    }

    function ty(e) {
        return !!((0, en.isMac)() && eB.supports(eI.Features.SCREEN_CAPTURE_KIT) && p().satisfies(null === T.default || void 0 === T.default ? void 0 : T.default.os.release, ep.DARWIN_SCKIT_VERSION)) && H.default.getCurrentConfig({
            location: "screenCaptureKitEnabled"
        }, {
            autoTrackExposure: e
        }).allowScreenCaptureKit
    }
    var tI = new(function() {
        function e() {
            var t = this;
            ev(this, e), eb(this, "stateChangeTimeout", void 0), eb(this, "noVoiceTimeout", 5e3), eb(this, "voiceTimeout", 1500), eb(this, "started", !1), eb(this, "handleSilence", function(e) {
                var n = !e;
                null != t.stateChangeTimeout && clearTimeout(t.stateChangeTimeout), t.stateChangeTimeout = setTimeout(function() {
                    t.stateChangeTimeout = null, t.started && (O.default.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: n
                    }), e && (e6 = !0))
                }, n ? t.voiceTimeout : t.noVoiceTimeout)
            })
        }
        return eA(e, [{
            key: "start",
            value: function() {
                !this.started && (this.started = !0, eB.on(y.MediaEngineEvent.Silence, this.handleSilence))
            }
        }, {
            key: "stop",
            value: function() {
                this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eB.removeListener(y.MediaEngineEvent.Silence, this.handleSilence), O.default.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: null
                }))
            }
        }, {
            key: "update",
            value: function() {
                var e = tl();
                !e4 && ed.default.getState() === eE.RTCConnectionStates.RTC_CONNECTED && e.mode === eE.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
            }
        }, {
            key: "reset",
            value: function() {
                this.stop(), this.update()
            }
        }]), e
    }());

    function th(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.MediaEngineContextTypes.DEFAULT,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = tl(t);
        return Object.assign(r, e), !__OVERLAY__ && n && I.Storage.set(ew, ej), r
    }

    function tO() {
        !eV && eB.enable().then(function() {
            return O.default.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1
            })
        })
    }

    function tT(e) {
        return {
            id: eI.DEFAULT_DEVICE_ID,
            index: 0,
            name: e,
            disabled: !0
        }
    }

    function tS(e, t) {
        if (0 === e.length) {
            var n = tT(t);
            return eb({}, n.id, n)
        }
        return _()(e).map(function(e) {
            return {
                id: e.id,
                index: e.index,
                name: e.name,
                disabled: !1
            }
        }).keyBy("id").value()
    }

    function tv(e, t) {
        var n, r = null !== (n = e[t]) && void 0 !== n ? n : _()(e).values().first();
        return null != r ? r.id : t
    }

    function tg() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = null !== (i = Z.default.settings.audioContextSettings) && void 0 !== i ? i : {
                user: {},
                stream: {}
            },
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a, u = Object.keys(t)[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) ! function() {
                var n = a.value,
                    r = n === ey.ProtoAudioSettingsContextTypes.USER ? eI.MediaEngineContextTypes.DEFAULT : eI.MediaEngineContextTypes.STREAM,
                    o = r === eI.MediaEngineContextTypes.STREAM ? eI.DEFAULT_STREAM_VOLUME : eI.DEFAULT_VOLUME,
                    i = null !== (_ = t[n]) && void 0 !== _ ? _ : {},
                    u = tl(r),
                    s = u.localMutes,
                    l = u.localVolumes,
                    c = !0,
                    f = !1,
                    d = void 0;
                try {
                    for (var _, E, p = Object.entries(i)[Symbol.iterator](); !(c = (E = p.next()).done); c = !0) ! function() {
                        var e = eP(E.value, 2),
                            t = e[0],
                            n = e[1];
                        if (null != (0, J.getPendingAudioSettings)(r, t)) return;
                        n.muted ? s[t] = !0 : delete s[t], n.volume !== o ? l[t] = n.volume : delete l[t], eB.eachConnection(function(e) {
                            e.setLocalVolume(t, n.volume), e.setLocalMute(t, n.muted)
                        }, r)
                    }()
                } catch (e) {
                    f = !0, d = e
                } finally {
                    try {
                        !c && null != p.return && p.return()
                    } finally {
                        if (f) throw d
                    }
                }
                if (e) {
                    var m = new Set(eD(Object.keys(s)).concat(eD(Object.keys(l)))),
                        y = !0,
                        I = !1,
                        h = void 0;
                    try {
                        for (var O, T = m[Symbol.iterator](); !(y = (O = T.next()).done); y = !0) ! function() {
                            var e = O.value;
                            if (null != i[e]) return;
                            delete s[e], delete l[e], eB.eachConnection(function(t) {
                                t.setLocalVolume(e, o), t.setLocalMute(e, !1)
                            }, r)
                        }()
                    } catch (e) {
                        I = !0, h = e
                    } finally {
                        try {
                            !y && null != T.return && T.return()
                        } finally {
                            if (I) throw h
                        }
                    }
                }
                th({
                    localMutes: s,
                    localVolumes: l
                }, r)
            }()
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != u.return && u.return()
            } finally {
                if (r) throw o
            }
        }
    }

    function tA(e) {
        if (null == i) return eU.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
            soundshareId: null,
            soundshareSession: ""
        };
        var t = i.getExperimentalSoundshare() ? e : ee.default.getAudioPid(e),
            n = "";
        return null != t && (n = ee.default.generateSessionFromPid(t)), {
            soundshareId: t,
            soundshareSession: n
        }
    }

    function tb(e, t) {
        (0, en.isWindows)() && S.attachToProcess(e, {
            soundshare_session: t
        }).then(function(t) {
            null != t && !C.default.shouldContinueWithoutElevatedProcessForPID(e) && O.default.wait(function() {
                O.default.dispatch({
                    type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                    errorMessage: t
                })
            })
        })
    }

    function tN() {
        var e = eI.MediaEngineContextTypes.DEFAULT,
            t = tl(e).videoToggleStateMap,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = Object.entries(t)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = eP(i.value, 2),
                    s = u[0];
                u[1] === eE.VideoToggleState.AUTO_PROBING && delete t[s]
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        th({
            videoToggleStateMap: t
        }, e, !1)
    }

    function tR(e) {
        var t = tl();
        $.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
            echo_cancellation: t.echoCancellation,
            noise_cancellation: t.noiseCancellation,
            noise_suppression: t.noiseSuppression,
            automatic_gain_control: t.automaticGainControl,
            location: e
        })
    }

    function tC() {
        var e = tl(),
            t = e.inputDeviceId,
            n = es.default.hasEchoCancellation(t) || e.echoCancellation,
            r = es.default.hasNoiseSuppression(t) || e.noiseSuppression,
            o = es.default.hasAutomaticGainControl(t) || e.automaticGainControl,
            i = e.noiseCancellation;
        eB.setLoopback(ti, {
            echoCancellation: n,
            noiseSuppression: r,
            automaticGainControl: o,
            noiseCancellation: i
        })
    }

    function tP() {
        return e9 || !1
    }

    function tD() {
        return (tD = eS(function() {
            var e, t, n;
            return eM(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, 3, 4]), [4, eo.default.ensureModule("discord_krisp")];
                    case 1:
                        return r.sent(), eo.default.requireModule("discord_krisp"), e9 = !0, i.emitChange(), [3, 4];
                    case 2:
                        return e = r.sent(), eU.warn("Failed to load Krisp module: ".concat(e.message)), er.default.captureException(e), t = eI.NoiseCancellerError.INITIALIZED, e.message.includes(": ") && (t = isNaN(n = parseInt(e.message.substring(e.message.indexOf(": ") + 1))) || 0 === n ? eI.NoiseCancellerError.INITIALIZED : n), $.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
                            noise_canceller_error: t
                        }), th({
                            noiseCancellation: !1
                        }), [3, 4];
                    case 3:
                        return e7 = !1, [7];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function tL(e) {
        return e.section === eE.UserSettingsSections.VOICE && tO(), !1
    }
    var tM = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && eC(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = eN(t);
            if (n) {
                var a = eN(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function o() {
            return ev(this, o), r.apply(this, arguments)
        }
        return eA(o, [{
            key: "initialize",
            value: function() {
                var e, t, n;
                eB.on(y.MediaEngineEvent.Connection, function(e) {
                        var t = F.default.getCurrentConfig({
                            location: "f627ab_3"
                        }, {
                            autoTrackExposure: !1
                        }).maxSyncDelayOverride;
                        t > 0 && eB.setMaxSyncDelayOverride(t), tc(e), td(e), tp(e);
                        var n = tl();
                        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264), W.default.getCurrentConfig({
                            location: "f627ab_4"
                        }, {
                            autoTrackExposure: !1
                        }).useExperimentalRateControl && e.setExperimentFlag(eI.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
                        var r = M.default.getCurrentConfig({
                                location: "setupMediaEngine"
                            }, {
                                autoTrackExposure: !0
                            }),
                            o = r.muteBeforeProcessing,
                            a = r.pttBeforeProcessing,
                            s = r.skipEncode;
                        if (o && e.setExperimentFlag(eI.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), a && e.setExperimentFlag(eI.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), s && e.setExperimentFlag(eI.ExperimentFlags.SKIP_ENCODE, !0), (0, en.isWindows)() && e.setExperimentFlag(eI.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0), G.default.getCurrentConfig({
                                location: "f627ab_9"
                            }, {
                                autoTrackExposure: !0
                            }).signalH265SupportNvenc && e.setExperimentFlag(eI.ExperimentFlags.SIGNAL_H265_SUPPORT, !0), k.default.getCurrentConfig({
                                location: "f627ab_9"
                            }, {
                                autoTrackExposure: !0
                            }).signalH265SupportAMD && e.setExperimentFlag(eI.ExperimentFlags.SIGNAL_H265_SUPPORT, !0), w.default.getCurrentConfig({
                                location: "f627ab_8"
                            }, {
                                autoTrackExposure: !0
                            }).signalH265SupportMacOS && e.setExperimentFlag(eI.ExperimentFlags.SIGNAL_H265_SUPPORT, !0), D.default.getCurrentConfig({
                                location: "f627ab_10"
                            }, {
                                autoTrackExposure: !0
                            }).signalAV1Support && e.setExperimentFlag(eI.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0), j.default.getCurrentConfig({
                                location: "f627ab_14"
                            }, {
                                autoTrackExposure: !0
                            }).allowSettingFullbandAndroid && eB.setHasFullbandPerformance((0, N.hasPerformanceForKrispFullband)()), (0, A.default)(i)) {
                            var l = g.default.getSettings();
                            e.setExperimentFlag(eI.ExperimentFlags.STREAMER_CLIP, l.clipsEnabled);
                            var c = K.default.getCurrentConfig({
                                location: "f627ab_15"
                            }, {
                                autoTrackExposure: !1
                            }).enableViewerClipping;
                            e.setViewerSideClip(c), e.setClipsKeyFrameInterval(eI.VIEWERSIDE_CLIP_KFI_MS);
                            var f = v.default.getCurrentConfig({
                                location: "MediaEngineStore_setupMediaEngine"
                            }, {
                                autoTrackExposure: !0
                            }).allowQualityDecoupling;
                            e.setQualityDecoupling(f)
                        }
                        n = tl(e.context), e.setPostponeDecodeLevel(100);
                        var d = !0,
                            _ = !1,
                            E = void 0;
                        try {
                            for (var p, m = Object.keys(n.localMutes)[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                                var I = p.value;
                                I !== ea.default.getId() && e.setLocalMute(I, n.localMutes[I])
                            }
                        } catch (e) {
                            _ = !0, E = e
                        } finally {
                            try {
                                !d && null != m.return && m.return()
                            } finally {
                                if (_) throw E
                            }
                        }
                        var T = !0,
                            S = !1,
                            b = void 0;
                        try {
                            for (var R, C = Object.keys(n.localVolumes)[Symbol.iterator](); !(T = (R = C.next()).done); T = !0) {
                                var L = R.value;
                                L !== ea.default.getId() && e.setLocalVolume(L, n.localVolumes[L])
                            }
                        } catch (e) {
                            S = !0, b = e
                        } finally {
                            try {
                                !T && null != C.return && C.return()
                            } finally {
                                if (S) throw b
                            }
                        }
                        var U = !0,
                            B = !1,
                            V = void 0;
                        try {
                            for (var H, x = Object.keys(n.localPans)[Symbol.iterator](); !(U = (H = x.next()).done); U = !0) {
                                var Y = H.value,
                                    z = n.localPans[Y];
                                e.setLocalPan(Y, z.left, z.right)
                            }
                        } catch (e) {
                            B = !0, V = e
                        } finally {
                            try {
                                !U && null != x.return && x.return()
                            } finally {
                                if (B) throw V
                            }
                        }
                        var X = !0,
                            q = !1,
                            Q = void 0;
                        try {
                            for (var J, Z = Object.keys(n.disabledLocalVideos)[Symbol.iterator](); !(X = (J = Z.next()).done); X = !0) {
                                var ee = J.value;
                                e.setLocalVideoDisabled(ee, n.disabledLocalVideos[ee])
                            }
                        } catch (e) {
                            q = !0, Q = e
                        } finally {
                            try {
                                !X && null != Z.return && Z.return()
                            } finally {
                                if (q) throw Q
                            }
                        }
                        e.on(y.BaseConnectionEvent.Speaking, function(t, n) {
                            O.default.dispatch({
                                type: "SPEAKING",
                                context: e.context,
                                userId: t,
                                speakingFlags: n
                            })
                        }), e.context === eI.MediaEngineContextTypes.DEFAULT && (e0 = !1, e.on(y.BaseConnectionEvent.SpeakingWhileMuted, function() {
                            e0 = !0, i.emitChange()
                        })), e.on(y.BaseConnectionEvent.DesktopSourceEnd, function() {
                            O.default.dispatch({
                                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                                settings: {
                                    context: e.context
                                }
                            })
                        }), e.on(y.BaseConnectionEvent.SoundshareAttached, function() {
                            (null == u ? void 0 : u.desktopSource) != null && $.default.track(eE.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, P.default)(null == u ? void 0 : u.desktopSource))
                        }), e.on(y.BaseConnectionEvent.SoundshareFailed, function(e) {
                            var t = e.failureCode,
                                n = e.failureReason,
                                r = e.willRetry;
                            tE(null == u ? void 0 : u.desktopSource, t, n, r)
                        }), e.on(y.BaseConnectionEvent.SoundshareSpeaking, function() {
                            (null == u ? void 0 : u.desktopSource) != null && ($.default.track(eE.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, P.default)(null == u ? void 0 : u.desktopSource)), null != ef.default.getHookError(eE.MediaEngineHookTypes.SOUND) && O.default.wait(function() {
                                return O.default.dispatch({
                                    type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                                })
                            }))
                        });
                        var et = new h.Timeout;
                        e.on(y.BaseConnectionEvent.SoundshareTrace, function(e) {
                            switch (e.type) {
                                case "soundshare_attach_requested":
                                    et.start(ts, function() {
                                        O.default.dispatch({
                                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                            errorMessage: "Sound Hook Failed"
                                        })
                                    });
                                    break;
                                case "soundshare_recv_failed":
                                    var t = e.reason,
                                        n = e.code,
                                        r = e.retry;
                                    (null == u ? void 0 : u.desktopSource) != null && (tE(null == u ? void 0 : u.desktopSource, n, t, r), !r && (et.stop(), O.default.wait(function() {
                                        return O.default.dispatch({
                                            type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                                            errorMessage: t,
                                            errorCode: n
                                        })
                                    })));
                                    break;
                                case "soundshare_state_transition":
                                    4 === e.newState && (et.stop(), O.default.wait(function() {
                                        return O.default.dispatch({
                                            type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
                                        })
                                    }))
                            }
                        }), e.on(y.BaseConnectionEvent.InteractionRequired, function(e) {
                            O.default.dispatch({
                                type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                                required: e
                            })
                        }), e.on(y.BaseConnectionEvent.VideoHookInitialize, function(e, t, n, r, o, i) {
                            (null == u ? void 0 : u.desktopSource) != null && $.default.track(eE.AnalyticEvents.VIDEOHOOK_INITIALIZED, eR({
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: o,
                                reinitialization: i
                            }, (0, P.default)(null == u ? void 0 : u.desktopSource)))
                        }), e.on(y.BaseConnectionEvent.NoiseCancellationError, function(e) {
                            eU.warn("noisecancellererror event: ".concat(e)), te = !0, $.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
                                noise_canceller_error: e
                            }), O.default.dispatch({
                                type: "AUDIO_SET_NOISE_SUPPRESSION",
                                enabled: !0
                            }), O.default.dispatch({
                                type: "AUDIO_SET_NOISE_CANCELLATION",
                                enabled: !1
                            }), O.default.dispatch({
                                type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                                code: e
                            })
                        }), e.on(y.BaseConnectionEvent.VoiceActivityDetectorError, function(e) {
                            var t, n;
                            eU.warn("voiceactivitydetectorerror event: ".concat(e)), $.default.track(eE.AnalyticEvents.VOICE_PROCESSING, {
                                noise_canceller_error: e
                            }), O.default.dispatch({
                                type: "AUDIO_SET_MODE",
                                context: eI.MediaEngineContextTypes.DEFAULT,
                                mode: eE.InputModes.VOICE_ACTIVITY,
                                options: (t = eR({}, tl(eI.MediaEngineContextTypes.DEFAULT).modeOptions), n = (n = {
                                    vadUseKrisp: !1
                                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(n)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }), t)
                            }), O.default.dispatch({
                                type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                                code: e
                            })
                        }), e.on(y.BaseConnectionEvent.VideoState, function(t) {
                            O.default.dispatch({
                                type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                                videoState: t,
                                context: e.context
                            })
                        }), e.on(y.BaseConnectionEvent.Destroy, function() {
                            et.stop()
                        }), e.setBitRate(eu.default.bitrate), e.applyVideoQualityMode(e_.default.mode)
                    }), eB.on(y.MediaEngineEvent.DeviceChange, function(e, t, n) {
                        O.default.dispatch({
                            type: "MEDIA_ENGINE_DEVICES",
                            inputDevices: e,
                            outputDevices: t,
                            videoDevices: n
                        })
                    }), eB.on(y.MediaEngineEvent.VolumeChange, function(e, t) {
                        O.default.dispatch({
                            type: "AUDIO_VOLUME_CHANGE",
                            inputVolume: e,
                            outputVolume: t
                        })
                    }), eB.on(y.MediaEngineEvent.DesktopSourceEnd, function() {
                        O.default.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: null
                        })
                    }), eB.on(y.MediaEngineEvent.AudioPermission, function(e) {
                        tn = !0, O.default.dispatch({
                            type: "MEDIA_ENGINE_PERMISSION",
                            kind: "audio",
                            granted: e
                        })
                    }), eB.on(y.MediaEngineEvent.VideoPermission, function(e) {
                        O.default.dispatch({
                            type: "MEDIA_ENGINE_PERMISSION",
                            kind: "video",
                            granted: e
                        })
                    }), eB.on(y.MediaEngineEvent.WatchdogTimeout, eS(function() {
                        var e, t;
                        return eM(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, ee.default.submitLiveCrashReport({
                                        message: {
                                            message: "Voice Watchdog Timeout"
                                        }
                                    })];
                                case 1:
                                    return n.sent(), [3, 3];
                                case 2:
                                    return "number" == typeof(t = n.sent()).status && (e = t.status), [3, 3];
                                case 3:
                                    return eU.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), $.default.track(eE.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
                                        minidump_submission_error: e
                                    }), [2]
                            }
                        })
                    })), eB.on(y.MediaEngineEvent.VideoInputInitialized, function(e) {
                        $.default.track(eE.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
                            device_name: e.description.name,
                            time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * et.default.Millis.SECOND),
                            timed_out: e.initializationTimerExpired,
                            activity: e.entropy
                        })
                    }), eB.on(y.MediaEngineEvent.ClipsRecordingRestartNeeded, function() {
                        O.default.dispatch({
                            type: "CLIPS_RESTART"
                        })
                    }), eB.on(y.MediaEngineEvent.ClipsInitFailure, function(e, t) {
                        O.default.wait(function() {
                            O.default.dispatch({
                                type: "CLIPS_INIT_FAILURE",
                                errMsg: e,
                                applicationName: t
                            })
                        })
                    }), eB.on(y.MediaEngineEvent.ClipsRecordingEnded, function(e, t) {
                        var n, r;
                        (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == u ? void 0 : null === (r = u.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && S.cancelAttachToProcess(t), s = null)
                    }), tI.reset(), null != (n = I.Storage.get("audio")) && (I.Storage.set(ew, eb({}, eI.MediaEngineContextTypes.DEFAULT, n)), I.Storage.remove("audio")), ej = null !== (t = I.Storage.get(ew)) && void 0 !== t ? t : {}, _().each(ej, function(e) {
                        if (_().defaultsDeep(e, eG()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
                            var t;
                            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
                        }(0, en.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.av1EnabledSettingVersion && (e.av1EnabledSettingVersion = 1, e.av1Enabled = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
                    }),
                    function() {
                        var e = tl();
                        eB.setAudioInputDevice(e.inputDeviceId), eB.setAudioOutputDevice(e.outputDeviceId), t_(), eB.setInputVolume(e.inputVolume), eB.setOutputVolume(e.outputVolume), eB.setH264Enabled(e.openH264), eB.setAv1Enabled(e.av1Enabled), eB.setAecDump(e.aecDumpEnabled)
                    }(), !(0, en.isDesktop)() || __OVERLAY__ || e7 || e9 ? (0, en.isWeb)() && eB.supports(eI.Features.NOISE_CANCELLATION) ? (e9 = !0, i.emitChange()) : (0, en.isWeb)() && th({
                        noiseCancellation: !1
                    }) : (e7 = !0, function() {
                        return tD.apply(this, arguments)
                    }()), tN(), eb(e = {}, eI.Features.VIDEO, eB.supports(eI.Features.VIDEO)), eb(e, eI.Features.DESKTOP_CAPTURE, eB.supports(eI.Features.DESKTOP_CAPTURE)), eb(e, eI.Features.HYBRID_VIDEO, eB.supports(eI.Features.HYBRID_VIDEO)), ta = e, this.waitFor(ea.default, es.default, el.default, ef.default, ed.default, C.default, q.default.storage, Z.default, ec.default, g.default)
            }
        }, {
            key: "supports",
            value: function(e) {
                return eB.supports(e)
            }
        }, {
            key: "supportsInApp",
            value: function(e) {
                return ta[e] || eB.supports(e)
            }
        }, {
            key: "isSupported",
            value: function() {
                return eB.supported()
            }
        }, {
            key: "isExperimentalEncodersSupported",
            value: function() {
                return eB.supports(eI.Features.EXPERIMENTAL_ENCODERS)
            }
        }, {
            key: "isNoiseSuppressionSupported",
            value: function() {
                return eB.supports(eI.Features.NOISE_SUPPRESSION)
            }
        }, {
            key: "isNoiseCancellationSupported",
            value: function() {
                return e9 || !1
            }
        }, {
            key: "isNoiseCancellationError",
            value: function() {
                return te
            }
        }, {
            key: "isAutomaticGainControlSupported",
            value: function() {
                return eB.supports(eI.Features.AUTOMATIC_GAIN_CONTROL)
            }
        }, {
            key: "isAdvancedVoiceActivitySupported",
            value: function() {
                return e9 || !1
            }
        }, {
            key: "isAecDumpSupported",
            value: function() {
                return eB.supports(eI.Features.AEC_DUMP)
            }
        }, {
            key: "isSimulcastSupported",
            value: function() {
                return eB.supports(eI.Features.VIDEO) && eB.supports(eI.Features.SIMULCAST)
            }
        }, {
            key: "getAecDump",
            value: function() {
                return tl().aecDumpEnabled
            }
        }, {
            key: "getMediaEngine",
            value: function() {
                return eB
            }
        }, {
            key: "getVideoComponent",
            value: function() {
                return eB.supports(eI.Features.DIRECT_VIDEO) && eB.setUseDirectVideo(!0), eB.Video
            }
        }, {
            key: "getCameraComponent",
            value: function() {
                return eB.supports(eI.Features.DIRECT_VIDEO) && eB.setUseDirectVideo(!0), eB.Camera
            }
        }, {
            key: "isEnabled",
            value: function() {
                return eV
            }
        }, {
            key: "isMute",
            value: function() {
                return this.isSelfMute() || ez
            }
        }, {
            key: "isDeaf",
            value: function() {
                return this.isSelfDeaf() || eQ
            }
        }, {
            key: "hasContext",
            value: function(e) {
                return null != ej[e]
            }
        }, {
            key: "isSelfMutedTemporarily",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT;
                return e === eI.MediaEngineContextTypes.DEFAULT && eX
            }
        }, {
            key: "isSelfMute",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT;
                return !this.isEnabled() || tl(e).mute || !q.default.didHavePermission(em.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eI.MediaEngineContextTypes.DEFAULT && eq
            }
        }, {
            key: "shouldSkipMuteUnmuteSound",
            value: function() {
                return !!L.default.getCurrentConfig({
                    location: "shouldSkipMuteUnmuteSound"
                }, {
                    autoTrackExposure: !0
                }).airpodsMuteSupported && e$
            }
        }, {
            key: "notifyMuteUnmuteSoundWasSkipped",
            value: function() {
                e$ = !1
            }
        }, {
            key: "isHardwareMute",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT;
                return !this.isMute() && !this.isSelfMutedTemporarily(e) && es.default.isHardwareMute(this.getInputDeviceId())
            }
        }, {
            key: "isSelfDeaf",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT;
                return !this.isSupported() || tl(e).deaf
            }
        }, {
            key: "isVideoEnabled",
            value: function() {
                return eJ && e2
            }
        }, {
            key: "isVideoAvailable",
            value: function() {
                return Object.values(eK).some(function(e) {
                    return !e.disabled
                })
            }
        }, {
            key: "isScreenSharing",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.STREAM;
                return ex === e && null != u
            }
        }, {
            key: "isSoundSharing",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.STREAM;
                return ex === t && null != u && (null === (e = u.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
            }
        }, {
            key: "isLocalMute",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.MediaEngineContextTypes.DEFAULT;
                return e !== ea.default.getId() && (tl(t).localMutes[e] || !1)
            }
        }, {
            key: "supportsDisableLocalVideo",
            value: function() {
                return eB.supports(eI.Features.DISABLE_VIDEO)
            }
        }, {
            key: "isLocalVideoDisabled",
            value: function(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.MediaEngineContextTypes.DEFAULT;
                return null !== (t = tl(n).disabledLocalVideos[e]) && void 0 !== t && t
            }
        }, {
            key: "getVideoToggleState",
            value: function(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.MediaEngineContextTypes.DEFAULT;
                return null !== (t = tl(n).videoToggleStateMap[e]) && void 0 !== t ? t : eE.VideoToggleState.NONE
            }
        }, {
            key: "isLocalVideoAutoDisabled",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.MediaEngineContextTypes.DEFAULT;
                return t === eI.MediaEngineContextTypes.DEFAULT && tr.has(e)
            }
        }, {
            key: "isAnyLocalVideoAutoDisabled",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT;
                return e === eI.MediaEngineContextTypes.DEFAULT && tr.size > 0
            }
        }, {
            key: "isMediaFilterSettingLoading",
            value: function() {
                return tt
            }
        }, {
            key: "isNativeAudioPermissionReady",
            value: function() {
                return tn
            }
        }, {
            key: "getGoLiveSource",
            value: function() {
                return u
            }
        }, {
            key: "getGoLiveContext",
            value: function() {
                return ex
            }
        }, {
            key: "getLocalPan",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.MediaEngineContextTypes.DEFAULT,
                    n = tl(t).localPans[e];
                return null != n ? n : ek
            }
        }, {
            key: "getLocalVolume",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.MediaEngineContextTypes.DEFAULT,
                    n = t === eI.MediaEngineContextTypes.STREAM ? eI.DEFAULT_STREAM_VOLUME : eI.DEFAULT_VOLUME,
                    r = tl(t).localVolumes[e];
                return null != r ? r : n
            }
        }, {
            key: "getInputVolume",
            value: function() {
                return tl().inputVolume
            }
        }, {
            key: "getOutputVolume",
            value: function() {
                return tl().outputVolume
            }
        }, {
            key: "getMode",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT;
                return tl(e).mode
            }
        }, {
            key: "getModeOptions",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT;
                return tl(e).modeOptions
            }
        }, {
            key: "getShortcuts",
            value: function() {
                var e = {};
                return _().each(ej, function(t, n) {
                    var r = t.mode,
                        o = t.modeOptions.shortcut;
                    r === eE.InputModes.PUSH_TO_TALK && eF.has(n) && (e[n] = o)
                }), e
            }
        }, {
            key: "getInputDeviceId",
            value: function() {
                return tv(eY, tl().inputDeviceId)
            }
        }, {
            key: "getOutputDeviceId",
            value: function() {
                return tv(eW, tl().outputDeviceId)
            }
        }, {
            key: "getVideoDeviceId",
            value: function() {
                return tv(eK, tl().videoDeviceId)
            }
        }, {
            key: "getInputDevices",
            value: function() {
                return eY
            }
        }, {
            key: "getOutputDevices",
            value: function() {
                return eW
            }
        }, {
            key: "getVideoDevices",
            value: function() {
                return eK
            }
        }, {
            key: "getEchoCancellation",
            value: function() {
                var e = tl();
                return es.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
            }
        }, {
            key: "getH265Enabled",
            value: function() {
                return tl().h265Enabled
            }
        }, {
            key: "getLoopback",
            value: function() {
                return eB.getLoopback()
            }
        }, {
            key: "getNoiseSuppression",
            value: function() {
                var e = tl();
                return es.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
            }
        }, {
            key: "getAutomaticGainControl",
            value: function() {
                var e = tl();
                return es.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
            }
        }, {
            key: "getNoiseCancellation",
            value: function() {
                return tl().noiseCancellation
            }
        }, {
            key: "getExperimentalEncoders",
            value: function() {
                return tl().experimentalEncoders
            }
        }, {
            key: "getHardwareH264",
            value: function() {
                return tl().hardwareH264
            }
        }, {
            key: "getEnableSilenceWarning",
            value: function() {
                return tl().silenceWarning
            }
        }, {
            key: "getDebugLogging",
            value: function() {
                return eB.getDebugLogging()
            }
        }, {
            key: "getQoS",
            value: function() {
                return tl().qos
            }
        }, {
            key: "getAttenuation",
            value: function() {
                return tl().attenuation
            }
        }, {
            key: "getAttenuateWhileSpeakingSelf",
            value: function() {
                return tl().attenuateWhileSpeakingSelf
            }
        }, {
            key: "getAttenuateWhileSpeakingOthers",
            value: function() {
                return tl().attenuateWhileSpeakingOthers
            }
        }, {
            key: "getAudioSubsystem",
            value: function() {
                return eB.getAudioSubsystem()
            }
        }, {
            key: "getSettings",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT;
                return tl(e)
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    settingsByContext: ej,
                    inputDevices: eY,
                    outputDevices: eW,
                    appSupported: ta,
                    krispModuleLoaded: e9,
                    goLiveSource: u,
                    goLiveContext: ex
                }
            }
        }, {
            key: "getInputDetected",
            value: function() {
                return e3
            }
        }, {
            key: "getNoInputDetectedNotice",
            value: function() {
                return e6
            }
        }, {
            key: "getPacketDelay",
            value: function() {
                return en.isPlatformEmbedded || this.getMode() !== eE.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
            }
        }, {
            key: "setCanHavePriority",
            value: function(e, t) {
                eB.eachConnection(function(n) {
                    return n.setCanHavePriority(e, t)
                })
            }
        }, {
            key: "isInteractionRequired",
            value: function() {
                return eH
            }
        }, {
            key: "getVideoHook",
            value: function() {
                return tl().videoHook
            }
        }, {
            key: "supportsVideoHook",
            value: function() {
                return eB.supports(eI.Features.VIDEO_HOOK)
            }
        }, {
            key: "getExperimentalSoundshare",
            value: function() {
                var e = tl().experimentalSoundshare2;
                return this.supportsExperimentalSoundshare() && (null == e || e)
            }
        }, {
            key: "supportsExperimentalSoundshare",
            value: function() {
                return eB.supports(eI.Features.EXPERIMENTAL_SOUNDSHARE) && p().satisfies(null === T.default || void 0 === T.default ? void 0 : T.default.os.release, ep.WINDOWS_SOUNDSHARE_VERSION)
            }
        }, {
            key: "getOpenH264",
            value: function() {
                return tl().openH264
            }
        }, {
            key: "getAv1Enabled",
            value: function() {
                return tl().av1Enabled
            }
        }, {
            key: "getEverSpeakingWhileMuted",
            value: function() {
                return e0
            }
        }, {
            key: "supportsScreenSoundshare",
            value: function() {
                return (0, en.isMac)() && eB.supports(eI.Features.SOUNDSHARE) && p().satisfies(null === T.default || void 0 === T.default ? void 0 : T.default.os.release, ep.DARWIN_SCKIT_AUDIO_VERSION) && ty(!1) || (0, en.isWindows)() && eB.supports(eI.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
            }
        }, {
            key: "getVideoStreamParameters",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.MediaEngineContextTypes.DEFAULT,
                    t = this.supports(eI.Features.VIDEO) ? [{
                        rid: "100",
                        type: e === eI.MediaEngineContextTypes.DEFAULT ? eI.MediaTypes.VIDEO : eI.MediaTypes.SCREEN,
                        quality: 100
                    }] : [];
                return this.isSimulcastSupported() && e === eI.MediaEngineContextTypes.DEFAULT && t.push({
                    rid: "50",
                    type: eI.MediaTypes.VIDEO,
                    quality: 50
                }), t
            }
        }, {
            key: "getSupportedSecureFramesProtocolVersion",
            value: function(e) {
                var t, n = eB.getSupportedSecureFramesProtocolVersion(),
                    r = x.SecureFramesUserExperiment.getCurrentConfig({
                        location: "MediaEngineStore"
                    }),
                    o = null != e ? x.SecureFramesGuildExperiment.getCurrentConfig({
                        guildId: e,
                        location: "MediaEngineStore"
                    }) : null,
                    i = r.canSupportSecureFrames || (null == o ? void 0 : o.canSupportSecureFrames),
                    a = r.canSupportMls || (null == o ? void 0 : o.canSupportMls),
                    u = Math.max(r.protocolVersionFloor, null !== (t = null == o ? void 0 : o.protocolVersionFloor) && void 0 !== t ? t : 0);
                return i && n % 100 >= u ? a ? n : n % 100 : 0
            }
        }, {
            key: "hasClipsSource",
            value: function() {
                return null != s
            }
        }]), o
    }(m.default.Store);
    eb(tM, "displayName", "MediaEngineStore"), i = new tM(O.default, {
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.guildId,
                n = e.channelId,
                r = e.currentVoiceChannelId,
                o = e.video;
            if (r !== n && t_(o, null), null != t || null == n) {
                e8 = !1;
                return
            }
            if (!e8) {
                e8 = !0;
                var i = tl();
                (i.mute || i.deaf) && (th({
                    deaf: !1,
                    mute: !1
                }), eB.eachConnection(td))
            }
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                return a === t.sessionId ? (ez = t.mute || t.suppress, eQ = t.deaf, eB.eachConnection(td), t_(!(null != t.guildId && null != t.channelId && null != e5 && e5 !== t.channelId) && eJ), e5 = t.channelId, !0) : (!__OVERLAY__ && t.userId === ea.default.getId() && null == ed.default.getChannelId() && t_(!1, null), e)
            }, !1)
        },
        CONNECTION_OPEN: function(e) {
            a = e.sessionId, ez = !1, eQ = !1, (0, Q.shouldReadWriteAudioSettings)() && tg()
        },
        CONNECTION_CLOSED: function() {
            a = null
        },
        RTC_CONNECTION_STATE: function(e) {
            switch (e.state) {
                case eE.RTCConnectionStates.CONNECTING:
                    tO();
                    break;
                case eE.RTCConnectionStates.RTC_CONNECTING:
                    e4 = !1, e6 = !1;
                    break;
                case eE.RTCConnectionStates.RTC_CONNECTED:
                    t_();
                    break;
                case eE.RTCConnectionStates.DISCONNECTED:
                    (function() {
                        if (0 !== tr.size) {
                            var e = eI.MediaEngineContextTypes.DEFAULT,
                                t = tl(e).disabledLocalVideos;
                            tr.forEach(function(n) {
                                f()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eB.eachConnection(function(e) {
                                    return e.setLocalVideoDisabled(n, !1)
                                }, e)
                            }), tr.clear(), th({
                                disabledLocalVideos: t
                            }, e, !1)
                        }
                    })(), tN()
            }
            tI.update()
        },
        AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
            eX = e.mute, eB.eachConnection(td)
        },
        AUDIO_TOGGLE_SELF_MUTE: function(e) {
            var t = e.context,
                n = e.skipMuteUnmuteSoundEffect,
                r = tl(t),
                o = r.mute,
                i = r.deaf;
            if (t === eI.MediaEngineContextTypes.DEFAULT && (q.default.requestPermission(em.NativePermissionTypes.AUDIO), eq)) return !1;
            !(o = !i && !o) && (i = !1), n && (e$ = !0), th({
                mute: o,
                deaf: i
            }, t), eB.eachConnection(td)
        },
        AUDIO_TOGGLE_SELF_DEAF: function(e) {
            var t = e.context;
            th({
                deaf: !tl(t).deaf
            }, t), eB.eachConnection(td)
        },
        AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
            var t = e.context,
                n = e.userId;
            if (n !== ea.default.getId()) {
                var r = tl(t).localMutes;
                r[n] ? delete r[n] : r[n] = !0, th({
                    localMutes: r
                }, t), eB.eachConnection(function(e) {
                    return e.setLocalMute(n, r[n] || !1)
                }, t)
            }
        },
        AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
            var t, n, r, o, i, a, u, s = e.context,
                l = e.userId,
                c = e.videoToggleState,
                d = e.persist,
                _ = e.isAutomatic;
            f()(!(d && _), "These are not allowed to both be true.");
            var E = c === eE.VideoToggleState.DISABLED,
                p = tl(s).disabledLocalVideos,
                m = null !== (t = p[l]) && void 0 !== t && t,
                y = tr.has(l),
                I = c === eE.VideoToggleState.AUTO_ENABLED || c === eE.VideoToggleState.MANUAL_ENABLED;
            eU.info("disableVideo=".concat(E, " currentlyDisabled=").concat(m, " currentlyAutoDisabled=").concat(y, ", isVideoShown=").concat(I)), f()(!(y && !m), "If you are auto-disabled, then you are also disabled.");
            var h = E !== m,
                O = s === eI.MediaEngineContextTypes.DEFAULT,
                T = _ && h && O,
                S = d && h && O;
            eU.info("changed=".concat(h, " isDefaultContext=").concat(O, " isUpdateCausedByVideoHealthManager=").concat(T, " isManualToggleByUser=").concat(S));
            var v = tl(s).videoToggleStateMap;
            if (v[l] === eE.VideoToggleState.AUTO_PROBING && c === eE.VideoToggleState.AUTO_ENABLED && (0, X.default)(l, E ? eI.VideoToggleReason.AUTO_DISABLE : eI.VideoToggleReason.AUTO_ENABLE, I), v[l] = c, th({
                    videoToggleStateMap: v
                }, s, d), c === eE.VideoToggleState.AUTO_PROBING ? null === (n = ed.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(l, !0) : null === (r = ed.default.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(l, !1), !to && (eU.info("isAutoDisableAllowed=".concat(to, " - disabling VideoHealthManager")), null === (i = ed.default.getRTCConnection()) || void 0 === i || null === (o = i.getVideoHealthManager()) || void 0 === o || o.disable()), T) {
                if (!E && !y || E && !to) return;
                (0, X.default)(l, E ? eI.VideoToggleReason.AUTO_DISABLE : eI.VideoToggleReason.AUTO_ENABLE, I), E ? tr.add(l) : tr.delete(l)
            } else S && (y && !E ? (eU.info("disallowing auto-disable for this session because of manual override by user"), to = !1, null === (u = ed.default.getRTCConnection()) || void 0 === u || null === (a = u.getVideoHealthManager()) || void 0 === a || a.disable(), (0, X.default)(l, eI.VideoToggleReason.MANUAL_REENABLE, I)) : (0, X.default)(l, E ? eI.VideoToggleReason.MANUAL_DISABLE : eI.VideoToggleReason.MANUAL_ENABLE, I));
            O && !E && tr.delete(l), E ? p[l] = !0 : delete p[l], th({
                disabledLocalVideos: p
            }, s, d), eB.eachConnection(function(e) {
                var t;
                return e.setLocalVideoDisabled(l, null !== (t = p[l]) && void 0 !== t && t)
            }, s)
        },
        AUDIO_SET_LOCAL_VOLUME: function(e) {
            var t = e.context,
                n = e.userId,
                r = e.volume;
            if (n !== ea.default.getId()) {
                var o = t === eI.MediaEngineContextTypes.STREAM ? eI.DEFAULT_STREAM_VOLUME : eI.DEFAULT_VOLUME,
                    i = tl(t).localVolumes;
                r === o ? delete i[n] : i[n] = r, th({
                    localVolumes: i
                }, t), eB.eachConnection(function(e) {
                    return e.setLocalVolume(n, r)
                }, t)
            }
        },
        AUDIO_SET_LOCAL_PAN: function(e) {
            var t = e.context,
                n = e.userId,
                r = e.left,
                o = e.right,
                i = tl(t).localPans;
            i[n] = {
                left: r,
                right: o
            }, th({
                localPans: i
            }, t), eB.eachConnection(function(e) {
                return e.setLocalPan(n, r, o)
            }, t)
        },
        AUDIO_SET_MODE: function(e) {
            var t = e.context;
            th({
                mode: e.mode,
                modeOptions: e.options
            }, t), eB.eachConnection(tc), tI.update()
        },
        AUDIO_SET_INPUT_VOLUME: function(e) {
            var t = e.volume;
            th({
                inputVolume: tf(t)
            }), eB.setInputVolume(t)
        },
        AUDIO_SET_OUTPUT_VOLUME: function(e) {
            var t = e.volume;
            th({
                outputVolume: t
            }), eB.setOutputVolume(t)
        },
        AUDIO_SET_INPUT_DEVICE: function(e) {
            var t = e.id;
            th({
                inputDeviceId: t = tv(eY, t)
            }), eB.setAudioInputDevice(t)
        },
        AUDIO_SET_OUTPUT_DEVICE: function(e) {
            var t = e.id;
            th({
                outputDeviceId: t = tv(eW, t)
            }), eB.setAudioOutputDevice(t)
        },
        AUDIO_SET_ECHO_CANCELLATION: function(e) {
            var t = th({
                echoCancellation: e.enabled
            });
            eB.eachConnection(function(e) {
                return e.setEchoCancellation(t.echoCancellation)
            }), tC(), tR(e.location)
        },
        MEDIA_ENGINE_SET_H265: function(e) {
            var t = th({
                h265Enabled: e.enabled
            });
            eB.setH265Enabled(t.h265Enabled)
        },
        AUDIO_SET_LOOPBACK: function(e) {
            return ti = e.enabled, tC()
        },
        AUDIO_SET_NOISE_SUPPRESSION: function(e) {
            var t = th({
                noiseSuppression: e.enabled
            });
            eB.eachConnection(function(e) {
                return e.setNoiseSuppression(t.noiseSuppression)
            }), tC(), tR(e.location)
        },
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
            var t = th({
                automaticGainControl: e.enabled
            });
            eB.eachConnection(function(e) {
                return e.setAutomaticGainControl(t.automaticGainControl)
            }), tC(), tR(e.location)
        },
        AUDIO_SET_NOISE_CANCELLATION: function(e) {
            var t = th({
                noiseCancellation: e.enabled
            });
            eB.eachConnection(function(e) {
                return e.setNoiseCancellation(t.noiseCancellation)
            }), tC(), tR(e.location)
        },
        AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
            th({
                silenceWarning: e.enabled
            }), tI.update()
        },
        AUDIO_SET_DEBUG_LOGGING: function(e) {
            eB.setDebugLogging(e.enabled)
        },
        MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
            th({
                videoHook: e.enabled
            })
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
            th({
                experimentalSoundshare2: e.enabled
            })
        },
        AUDIO_SET_ATTENUATION: function(e) {
            var t = th({
                attenuation: e.attenuation,
                attenuateWhileSpeakingSelf: e.attenuateWhileSpeakingSelf,
                attenuateWhileSpeakingOthers: e.attenuateWhileSpeakingOthers
            });
            eB.eachConnection(function(e) {
                return e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers)
            })
        },
        AUDIO_SET_QOS: function(e) {
            var t = e.enabled;
            th({
                qos: t
            }), eB.eachConnection(function(e) {
                return e.setQoS(t)
            })
        },
        MEDIA_ENGINE_DEVICES: function(e) {
            var t = e.inputDevices,
                n = e.outputDevices,
                r = e.videoDevices;
            ! function(e) {
                var t = eY;
                if (eY = tS(e, eh.default.Messages.NO_INPUT_DEVICES), !_().isEqual(eY, t)) {
                    var n = tl(),
                        r = tv(eY, n.inputDeviceId);
                    eB.setAudioInputDevice(r)
                }
            }(t), ! function(e) {
                var t = eW;
                if (eW = tS(e, eh.default.Messages.NO_OUTPUT_DEVICES), !_().isEqual(eW, t)) {
                    var n = tl(),
                        r = tv(eW, n.outputDeviceId);
                    eB.setAudioOutputDevice(r)
                }
            }(n), ! function(e) {
                e2 = e.length > 0;
                var t = eK;
                if (eK = tS(e, eh.default.Messages.NO_VIDEO_DEVICES), eJ && !_().isEqual(eK, t)) {
                    var n, r = void 0 !== eK[eZ],
                        o = eZ === eI.DEFAULT_DEVICE_ID && (null === (n = t[eI.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
                    t_(r || o)
                }
            }(r)
        },
        AUDIO_VOLUME_CHANGE: function(e) {
            var t = e.inputVolume,
                n = e.outputVolume;
            th({
                inputVolume: tf(t),
                outputVolume: n
            })
        },
        AUDIO_RESET: function() {
            I.Storage.remove(ew), location.reload()
        },
        AUDIO_INPUT_DETECTED: function(e) {
            e3 = e.inputDetected, !e4 && e3 && (e4 = !0, tI.update())
        },
        AUDIO_SET_SUBSYSTEM: function(e) {
            eB.setAudioSubsystem(e.subsystem)
        },
        MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
            eV = e.enabled, e.unmute && th({
                mute: !1,
                deaf: !1
            }), eB.eachConnection(td)
        },
        MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
            var t = e.enabled;
            q.default.requestPermission(em.NativePermissionTypes.CAMERA), t_(t)
        },
        MEDIA_ENGINE_PERMISSION: function(e) {
            var t = e.kind;
            if (!e.granted) switch (t) {
                case "audio":
                    eV = !1, eB.eachConnection(td);
                    break;
                case "video":
                    t_(!1)
            }
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            var t = e.settings;
            if ((null == t ? void 0 : t.desktopSettings) != null) {
                var n, r, o, i, a = null,
                    s = null,
                    l = t.desktopSettings,
                    c = l.sourceId,
                    f = l.sound,
                    d = null !== (r = t.context) && void 0 !== r ? r : eI.MediaEngineContextTypes.DEFAULT,
                    _ = null !== (o = t.qualityOptions) && void 0 !== o ? o : {
                        resolution: 720,
                        frameRate: 30
                    },
                    E = ee.default.getPidFromDesktopSource(c);
                en.isPlatformEmbedded && !0 === f && (a = (i = tA(E)).soundshareId, s = i.soundshareSession, null != a && tb(a, s)), (n = d) !== ex && (null != u && eB.setGoLiveSource(null, ex), ex = n), t_(d === eI.MediaEngineContextTypes.STREAM && eJ, {
                    desktopSource: {
                        id: c,
                        sourcePid: E,
                        soundshareId: a,
                        soundshareSession: s
                    },
                    quality: {
                        resolution: _.resolution,
                        frameRate: _.frameRate
                    }
                })
            } else if ((null == t ? void 0 : t.cameraSettings) != null) {
                var p, m, y = null !== (p = t.context) && void 0 !== p ? p : eI.MediaEngineContextTypes.DEFAULT,
                    I = t.cameraSettings,
                    h = I.videoDeviceGuid,
                    O = I.audioDeviceGuid,
                    T = y === eI.MediaEngineContextTypes.STREAM && eJ,
                    S = null !== (m = t.qualityOptions) && void 0 !== m ? m : {
                        resolution: 720,
                        frameRate: 30
                    };
                t_(T, {
                    cameraSource: {
                        videoDeviceGuid: h,
                        audioDeviceGuid: O
                    },
                    quality: {
                        resolution: S.resolution,
                        frameRate: S.frameRate
                    }
                })
            } else t_(eJ, null)
        },
        MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
            var t = e.id;
            th({
                videoDeviceId: t = tv(eK, t)
            }), t_()
        },
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
            var t = th({
                experimentalEncoders: e.enabled
            });
            eB.eachConnection(function(e) {
                return e.setExperimentalEncoders(t.experimentalEncoders)
            })
        },
        MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
            return eH !== e.required && (eH = e.required, !e.required && eB.interact(), !0)
        },
        USER_SETTINGS_MODAL_INIT: tL,
        USER_SETTINGS_MODAL_SET_SECTION: tL,
        CERTIFIED_DEVICES_SET: function() {
            return eB.eachConnection(tp), !1
        },
        RPC_APP_CONNECTED: function(e) {
            var t = e.application;
            eF.add(t.id)
        },
        RPC_APP_DISCONNECTED: function(e) {
            var t = e.application;
            eF.delete(t.id)
        },
        OVERLAY_INITIALIZE: function(e) {
            var t = e.mediaEngineState;
            ej = t.settingsByContext, eY = t.inputDevices, eW = t.outputDevices, ta = t.appSupported, e9 = t.krispModuleLoaded, ex = t.goLiveContext
        },
        MEDIA_ENGINE_SET_OPEN_H264: function(e) {
            var t = th({
                openH264: e.enabled
            });
            eB.setH264Enabled(t.openH264)
        },
        MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
            var t = th({
                hardwareH264: e.enabled
            });
            eB.eachConnection(function(e) {
                return e.setHardwareH264(t.hardwareH264)
            })
        },
        MEDIA_ENGINE_SET_AV1: function(e) {
            var t = th({
                av1Enabled: e.enabled
            });
            eB.setAv1Enabled(t.av1Enabled)
        },
        APP_STATE_UPDATE: function(e) {
            var t = e.state,
                n = R.default.isEnabled();
            if (t === eE.AppStates.BACKGROUND && eJ && !n) e1 = !0, t_(!1);
            else {
                if (t !== eE.AppStates.ACTIVE || !e1) return !1;
                e1 = !1, t_(!0)
            }
            return !0
        },
        SET_CHANNEL_BITRATE: function(e) {
            eB.eachConnection(function(t) {
                return t.setBitRate(e.bitrate)
            })
        },
        SET_VAD_PERMISSION: function(e) {
            var t = !e.hasPermission;
            if (t === eq) return !1;
            eq = t, eB.eachConnection(td)
        },
        SET_NATIVE_PERMISSION: function(e) {
            var t = e.state,
                n = e.permissionType,
                r = t === em.NativePermissionStates.ACCEPTED;
            switch (n) {
                case em.NativePermissionTypes.AUDIO:
                    tn = !0, eB.eachConnection(td);
                    break;
                case em.NativePermissionTypes.CAMERA:
                    !r && eJ && t_(!1);
                    break;
                default:
                    return !1
            }
        },
        SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
            eB.eachConnection(function(t) {
                return t.applyVideoQualityMode(e.mode)
            })
        },
        MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
            var t = th({
                aecDumpEnabled: e.enabled
            });
            eB.setAecDump(t.aecDumpEnabled)
        },
        CHANNEL_DELETE: function() {
            if (!eJ && null == u || null != ed.default.getRTCConnectionId()) return !1;
            t_(!1, null)
        },
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
            return !!te && (te = !1, !0)
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
            var t = e.settings;
            eB.applyMediaFilterSettings(t).finally(function() {
                tt = !1, i.emitChange()
            })
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
            tt = !0
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
            tt = !1
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t = e.settings.type,
                n = e.local,
                r = e.wasSaved;
            if (!(0, Q.shouldReadWriteAudioSettings)() || t !== ey.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != r) return !1;
            tg(!0)
        },
        CLIPS_INIT: function(e) {
            var t, n = e.sourceId,
                r = e.applicationName,
                o = e.quality,
                a = U.default.getCurrentConfig({
                    location: "handleClipsInit"
                }, {
                    autoTrackExposure: !0
                }).enableDecoupledGameClipping,
                u = g.default.getSettings().decoupledClipsEnabled;
            if (a && u && null != T.default) {
                var l = null,
                    c = null,
                    f = ee.default.getPidFromDesktopSource(n);
                l = (t = tA(f)).soundshareId;
                var d = {
                    desktopSource: {
                        id: n,
                        sourcePid: f,
                        soundshareId: l,
                        soundshareSession: c = t.soundshareSession
                    },
                    quality: o
                };
                null != s && s.desktopSource.id !== d.desktopSource.id && (eB.setClipsSource(null), (0, en.isWindows)() && null != s.desktopSource.soundshareId && S.cancelAttachToProcess(s.desktopSource.soundshareId)), null != l && tb(l, c), s = d;
                var _ = V.default.getCurrentConfig({
                        location: "f627ab_11"
                    }, {
                        autoTrackExposure: !1
                    }).useQuartzCapturer,
                    E = B.default.getCurrentConfig({
                        location: "f627ab_12"
                    }, {
                        autoTrackExposure: !1
                    }).hdrCaptureMode,
                    p = tl().videoHook,
                    m = eB.supports(eI.Features.CAPTURE_TIMEOUT_EXPERIMENTS),
                    y = Y.default.getConfig(m && p, "e225cfdf5_vh2", !1).videoHookStaleFrameTimeoutMs,
                    I = z.default.getConfig(m && tm(), "e225cfdf5_wgc2", !1).graphicsCaptureStaleFrameTimeoutMs;
                eB.setClipsSource({
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: p,
                        useGraphicsCapture: tm(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: _,
                        allowScreenCaptureKit: ty(!1),
                        videoHookStaleFrameTimeoutMs: y,
                        graphicsCaptureStaleFrameTimeoutMs: I,
                        hdrCaptureMode: E
                    },
                    quality: o,
                    applicationName: r
                })
            }
        },
        CLIPS_SETTINGS_UPDATE: function(e) {
            !1 === e.settings.decoupledClipsEnabled && (s = null, eB.setClipsSource(null))
        }
    }), t.default = i
}