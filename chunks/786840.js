function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var r = n("384433"),
        o = n("629815"),
        i = n("807471"),
        a = n("517727"),
        u = n("736381"),
        s = n("602520"),
        l = n("217014"),
        c = n("335911"),
        f = n("545072"),
        d = n("140591"),
        _ = n("870331"),
        E = n("374550"),
        p = n("891387"),
        m = n("635243"),
        y = n("38833"),
        I = n("975628"),
        h = n("945986"),
        O = n("281767"),
        T = n("367965");

    function S(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var N = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }(P, e);
        var t, n, i, N, R, C = (t = P, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = A(t);
            if (n) {
                var a = A(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : S(e)
        });

        function P() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, P), e = C.apply(this, arguments), t = S(e), n = "actions", r = {
                POST_CONNECTION_OPEN: function(t) {
                    return e.handlePostConnectionOpen()
                },
                RTC_CONNECTION_FLAGS: function(t) {
                    return e.handleRTCConnectionFlags(t)
                },
                RTC_CONNECTION_USER_CREATE: function(t) {
                    return e.handleRTCUserCreate(t)
                },
                CLIPS_INIT_FAILURE: function(t) {
                    return e.handleClipsInitFailure(t)
                },
                CLIPS_SETTINGS_UPDATE: function(t) {
                    return e.applyNativeClipsSettings(t)
                },
                STREAM_START: function() {
                    return e.applyNativeClipsSettings()
                },
                RUNNING_GAME_TOGGLE_DETECTION: function(t) {
                    return e.handleClipsInitOnToggleDetection(t)
                },
                RUNNING_GAMES_CHANGE: function(t) {
                    return e.handleClipsInitOnGamesChange(t)
                },
                CLIPS_RESTART: function() {
                    return e.fireClipsInitEvent()
                },
                RTC_CONNECTION_VIDEO: function(t) {
                    return e.handleRTCConnectionVideo(t)
                },
                RTC_CONNECTION_STATE: function(t) {
                    return e.handleRTCConnectionState(t)
                },
                MEDIA_ENGINE_SET_HARDWARE_H264: function(t) {
                    return e.handleMediaEngineSetHardwareH264(t)
                }
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return i = P, N = [{
            key: "handleRTCConnectionState",
            value: function(e) {
                var t = e.context,
                    n = e.state,
                    o = e.streamKey;
                if (!!(0, p.areClipsEnabled)()) {
                    if (n === O.RTCConnectionStates.RTC_CONNECTED) {
                        var i = l.default.getId();
                        if (t === r.MediaEngineContextTypes.DEFAULT) return this.applyUserVoiceRecording(i);
                        if (t === r.MediaEngineContextTypes.STREAM && null != o) {
                            if ((0, u.decodeStreamKey)(o).ownerId !== i) return;
                            var a = d.default.getRTCConnection(o);
                            if (null == a) return;
                            this.applyStreamRecording(i, a)
                        }
                    }
                }
            }
        }, {
            key: "handleRTCUserCreate",
            value: function(e) {
                var t = e.userId;
                e.context === r.MediaEngineContextTypes.DEFAULT && this.applyUserVoiceRecording(t)
            }
        }, {
            key: "handleRTCConnectionFlags",
            value: function(e) {
                var t = e.userId,
                    n = e.channelId,
                    r = e.guildId;
                this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
                var o = d.default.getRTCConnection(u.encodeStreamKey({
                    streamType: null != r ? T.StreamTypes.GUILD : T.StreamTypes.CALL,
                    ownerId: t,
                    channelId: n,
                    guildId: r
                }));
                null != o && this.applyStreamRecording(t, o)
            }
        }, {
            key: "handleClipsInitFailure",
            value: function(e) {
                var t = e.applicationName,
                    n = e.errMsg;
                _.default.track(O.AnalyticEvents.CLIPS_INIT_FAILURE, {
                    application_name: t,
                    error_message: n
                })
            }
        }, {
            key: "maybeShowClipsWarning",
            value: function(e) {
                var t = f.default.getChannelId();
                if (!(null == t || m.default.getClipsWarningShown(t)) && e !== l.default.getId()) m.default.isClipsEnabledForUser(e) && (o.default.dispatch({
                    type: "CLIPS_SHOW_CALL_WARNING",
                    channelId: t
                }), this.showClipsToast())
            }
        }, {
            key: "handlePostConnectionOpen",
            value: function() {
                if (!!(0, I.default)(c.default)) {
                    if (this.applyNativeClipsSettings(), !(0, p.areClipsEnabled)()) {
                        m.default.getSettings().clipsEnabled && this.disableClips();
                        return
                    }(null == m.default.getHardwareClassification() || null == m.default.getHardwareClassificationForDecoupled() || m.default.getHardwareClassificationVersion() !== h.CLIPS_HARDWARE_CLASSIFICATION_VERSION) && this.classifyHardwareAndTrack().then(function(e) {
                        o.default.dispatch({
                            type: "CLIPS_CLASSIFY_HARDWARE",
                            classification: e
                        })
                    })
                }
            }
        }, {
            key: "handleRTCConnectionVideo",
            value: function(e) {
                var t = e.userId,
                    n = e.context,
                    o = e.channelId,
                    i = e.guildId;
                if (n === r.MediaEngineContextTypes.STREAM && !!(0, I.default)(c.default)) {
                    var a = d.default.getRTCConnection(u.encodeStreamKey({
                        streamType: null != i ? T.StreamTypes.GUILD : T.StreamTypes.CALL,
                        ownerId: t,
                        channelId: o,
                        guildId: i
                    }));
                    null != a && this.applyStreamRecording(t, a)
                }
            }
        }, {
            key: "classifyHardwareAndTrack",
            value: function() {
                var e, t = this;
                return (e = function() {
                    var e, n, r;
                    return function(e, t) {
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
                    }(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]), [4, a.default.processUtils.getSystemInfo()];
                            case 1:
                                return e = r.sent(), n = t.classifyHardware(e), _.default.track(O.AnalyticEvents.CLIPS_HARDWARE_CLASSIFICATION, {
                                    classification: n,
                                    version: h.CLIPS_HARDWARE_CLASSIFICATION_VERSION,
                                    gpu_models: e.gpus.map(function(e) {
                                        return e.model
                                    })
                                }), [2, n];
                            case 2:
                                return r.sent(), [2, y.ClipsHardwareClassification.UNKNOWN];
                            case 3:
                                return [2]
                        }
                    })
                }, function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            v(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            v(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                })()
            }
        }, {
            key: "classifyHardware",
            value: function(e) {
                if ((0, E.isWindows)()) {
                    var t = e.gpus.some(function(e) {
                            var t = e.model;
                            return h.WINDOWS_HARDWARE_AUTO_ENABLE_GPU_REGEX.test(t)
                        }),
                        n = e.gpus.some(function(e) {
                            var t = e.model;
                            return h.WINDOWS_HARDWARE_MINIMUM_GPU_REGEX.test(t)
                        });
                    return t ? y.ClipsHardwareClassification.MEETS_AUTO_ENABLE : n ? y.ClipsHardwareClassification.MEETS_MINIMUM : y.ClipsHardwareClassification.BELOW_MINIMUM
                }
                if ((0, E.isMac)()) return e.gpus.some(function(e) {
                    var t = e.model;
                    return h.OSX_HARDWARE_AUTO_ENABLE_GPU_REGEX.test(t)
                }) ? y.ClipsHardwareClassification.MEETS_AUTO_ENABLE : y.ClipsHardwareClassification.MEETS_MINIMUM;
                return y.ClipsHardwareClassification.UNKNOWN
            }
        }, {
            key: "applyUserVoiceRecording",
            value: function(e) {
                if (!!(0, I.default)(c.default)) {
                    var t = f.default.getRTCConnection();
                    if (null != t) {
                        if (e === l.default.getId()) {
                            t.setClipRecordUser(e, "audio", m.default.getSettings().clipsEnabled);
                            return
                        }
                        var n = m.default.isVoiceRecordingAllowedForUser(e);
                        t.setClipRecordUser(e, "audio", n)
                    }
                }
            }
        }, {
            key: "applyStreamRecording",
            value: function(e, t) {
                if (!!(0, I.default)(c.default)) {
                    if (l.default.getId() === e) {
                        var n = m.default.getSettings().clipsEnabled,
                            r = (0, p.areClipsEnabled)();
                        t.setClipRecordUser(e, "audio", r && n), t.setClipRecordUser(e, "video", r && n);
                        return
                    }
                    var o = s.default.getCurrentConfig({
                            location: "ClipsManager:applyStreamRecording"
                        }),
                        i = o.enableViewerClipping,
                        a = o.ignoreSenderPreference;
                    if (i) {
                        var u = a || m.default.isViewerClippingAllowedForUser(e);
                        this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", u), t.setClipRecordUser(e, "video", u)
                    }
                }
            }
        }, {
            key: "disableClips",
            value: function() {}
        }], g(i.prototype, N), R && g(i, R), P
    }(i.default)
}