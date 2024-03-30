function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearClipsSession: function() {
            return Z
        },
        clearNewClipIds: function() {
            return $
        },
        deleteClip: function() {
            return en
        },
        dismissClipsUserEducation: function() {
            return ea
        },
        dismissSaveClipAnimation: function() {
            return q
        },
        exportClip: function() {
            return eo
        },
        loadClipsDirectory: function() {
            return ee
        },
        saveClip: function() {
            return z
        },
        updateAllowVoiceRecording: function() {
            return k
        },
        updateClipMetadata: function() {
            return Q
        },
        updateClipsEnabled: function() {
            return G
        },
        updateClipsLength: function() {
            return x
        },
        updateClipsQuality: function() {
            return H
        },
        updateClipsStorageLocation: function() {
            return V
        },
        updateDecoupledClipsEnabled: function() {
            return j
        },
        updateRemindersEnabled: function() {
            return F
        },
        updateViewerClipsEnabled: function() {
            return Y
        }
    });
    var r = n("384433"),
        o = n("702016"),
        i = n("700449"),
        a = n("629815"),
        u = n("517727"),
        s = n("94288"),
        l = n("654370"),
        c = n("736381"),
        f = n("354086"),
        d = n("602520"),
        _ = n("968574"),
        E = n("403720"),
        p = n("73013"),
        m = n("217014"),
        y = n("335911"),
        I = n("140591"),
        h = n("712465"),
        O = n("870331"),
        T = n("374550"),
        S = n("423284"),
        v = n("635243"),
        g = n("618822"),
        A = n("211116"),
        b = n("142277"),
        N = n("381479"),
        R = n("26877"),
        C = n("945986"),
        P = n("281767");

    function D(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function L(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    D(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    D(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function M(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function U(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function w(e, t) {
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

    function k(e) {
        var t = e.allowVoiceRecording;
        _.PreloadedUserSettingsActionCreators.updateAsync("clips", function(e) {
            e.allowVoiceRecording = i.BoolValue.create({
                value: t
            })
        }, _.UserSettingsDelay.INFREQUENT_USER_ACTION), O.default.track(P.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            allow_voice_recording: t
        })
    }

    function G(e) {
        return B.apply(this, arguments)
    }

    function B() {
        return (B = L(function(e) {
            var t, n, r, o;
            return w(this, function(i) {
                switch (i.label) {
                    case 0:
                        return t = e.clipsEnabled, n = e.guildId, o = void 0 !== (r = e.trackAnalytics) && r, [4, a.default.dispatch({
                            type: "CLIPS_SETTINGS_UPDATE",
                            settings: M({
                                clipsEnabled: t
                            }, !t && {
                                decoupledClipsEnabled: !1
                            })
                        })];
                    case 1:
                        return i.sent(), o && O.default.track(P.AnalyticEvents.CLIPS_SETTINGS_UPDATED, M({
                            clips_enabled: t,
                            guild_id: n
                        }, !t && {
                            decoupled_clips_enabled: !1
                        })), [2]
                }
            })
        })).apply(this, arguments)
    }

    function j(e) {
        var t = e.enabled,
            n = e.trackAnalytics;
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: U(M({}, t && {
                clipsEnabled: !0
            }), {
                decoupledClipsEnabled: t
            })
        }), void 0 !== n && n && O.default.track(P.AnalyticEvents.CLIPS_SETTINGS_UPDATED, U(M({}, t && {
            clips_enabled: !0
        }), {
            decoupled_clips_enabled: t
        }))
    }

    function F(e) {
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                remindersEnabled: e
            }
        })
    }

    function V(e) {
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                storageLocation: e
            }
        })
    }

    function H(e) {
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsQuality: e
            }
        })
    }

    function x(e) {
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsLength: e
            }
        })
    }

    function Y(e) {
        var t = e.enabled,
            n = e.trackAnalytics;
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                viewerClipsEnabled: t
            }
        }), void 0 !== n && n && O.default.track(P.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            viewer_clips_enabled: t
        })
    }

    function W(e, t) {
        var n, r, o, i, a, u, l, c, f, d = new Map;
        for (var _ in t.framesEncodedByEncoder) {
            var p, m = t.framesEncodedByEncoder[_],
                y = (0, s.parseEncoder)(_),
                I = null !== (p = d.get(y)) && void 0 !== p ? p : 0;
            d.set(y, I + m)
        }
        return U(M({}, e), {
            frames_encoded_nvidia_cuda: null !== (n = d.get(s.Encoders.NVIDIA_CUDA)) && void 0 !== n ? n : 0,
            frames_encoded_nvidia_direct3d: null !== (r = d.get(s.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== r ? r : 0,
            frames_encoded_openh264: null !== (o = d.get(s.Encoders.OPENH264)) && void 0 !== o ? o : 0,
            frames_encoded_videotoolbox: null !== (i = d.get(s.Encoders.VIDEOTOOLBOX)) && void 0 !== i ? i : 0,
            frames_encoded_amd_direct3d: null !== (a = d.get(s.Encoders.AMD_DIRECT_3D)) && void 0 !== a ? a : 0,
            frames_encoded_intel: null !== (u = d.get(s.Encoders.INTEL)) && void 0 !== u ? u : 0,
            frames_encoded_intel_direct3d: null !== (l = d.get(s.Encoders.INTEL_DIRECT_3D)) && void 0 !== l ? l : 0,
            frames_encoded_uncategorized: null !== (c = d.get(s.Encoders.UNCATEGORIZED)) && void 0 !== c ? c : 0,
            frames_encoded_unknown: null !== (f = d.get(s.Encoders.UNKNOWN)) && void 0 !== f ? f : 0,
            frames_submitted: t.framesSubmitted,
            frames_submitted_during_clip: t.framesSubmittedDuringClip,
            frames_encoded: t.framesEncoded,
            frames_encoded_during_clip: t.framesEncodedDuringClip,
            frames_dropped: t.framesDropped,
            frames_dropped_during_clip: t.framesDroppedDuringClip,
            clip_duration_setting: v.default.getSettings().clipsLength,
            clip_duration: t.clipDuration,
            clip_resolution_width: t.clipResolutionWidth,
            clip_resolution_height: t.clipResolutionHeight,
            min_fps: t.minFps,
            max_fps: t.maxFps,
            submitted_fps: t.submittedFps,
            target_fps: E.default.getState().fps,
            audio_track_count: t.audioTrackCount,
            saved_at: t.savedAt
        })
    }

    function K() {
        return (K = L(function(e) {
            var t, n, r, o, i, s, l, f, d, _, E, h, T, S, b, N, D;
            return w(this, function(L) {
                switch (L.label) {
                    case 0:
                        t = v.default.getSettings().storageLocation, n = (0, A.default)(e), r = "".concat((0, g.default)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4"), o = u.default.fileManager.join(t, r), i = y.default.getMediaEngine(), s = JSON.stringify(n), l = null != e ? (0, c.decodeStreamKey)(e).ownerId : void 0, f = function(e) {
                            if (null != e) {
                                n = null != e ? I.default.getRTCConnection(e) : null;
                                var t, n, r, o, i = (0, c.decodeStreamKey)(e);
                                r = i.guildId, o = i.channelId
                            } else {
                                var a = m.default.getId(),
                                    u = p.default.getActiveStreamForUser(a, null);
                                n = null != u ? I.default.getRTCConnection((0, c.encodeStreamKey)(u)) : null, r = null == u ? void 0 : u.guildId, o = null == u ? void 0 : u.channelId
                            }
                            var s = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
                            return {
                                rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                                media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                                parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                                guild_id: r,
                                channel_id: o,
                                application_id: null == s ? void 0 : s.id,
                                application_name: null == s ? void 0 : s.name
                            }
                        }(e), null != e && a.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
                            clip: U(M({}, n), {
                                filepath: o
                            })
                        }), L.label = 1;
                    case 1:
                        return L.trys.push([1, 5, , 6]), [4, null != l ? i.saveClipForUser(l, o, s) : i.saveClip(o, s)];
                    case 2:
                        return _ = (d = L.sent()).duration, E = d.clipStats, (h = W(f, E)).clip_save_time_ms = E.clipSaveTimeMs, h.clip_size_bytes = E.clipSizeBytes, null != E.viewerDecodeFps && (h.decode_fps_during_clip = E.viewerDecodeFps, h.encode_fps_during_clip = E.viewerEncodeFps, h.target_fps = null), O.default.track(P.AnalyticEvents.CLIP_SAVED, h), [4, (0, R.createThumbnailFromVideo)(u.default.clips.getClipProtocolURLFromPath(o), 0)];
                    case 3:
                        return T = L.sent(), n.thumbnail = T, n.length = _, C.ClipsLogger.info("Clip save succeeded with ".concat(_, "ms and thumbnail ").concat(null !== (S = null == T ? void 0 : T.length) && void 0 !== S ? S : 0, " bytes thumbnail.")), [4, i.updateClipMetadata(o, JSON.stringify(n))];
                    case 4:
                        return L.sent(), [2, U(M({}, n), {
                            filepath: o
                        })];
                    case 5:
                        if (b = L.sent(), null != e && a.default.dispatch({
                                type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                                clipId: n.id
                            }), !("errorMessage" in b)) throw O.default.track(P.AnalyticEvents.CLIP_SAVE_FAILURE, f), b;
                        throw (D = W(f, N = b)).error_at = N.errorAt, D.error_message = N.errorMessage, O.default.track(P.AnalyticEvents.CLIP_SAVE_FAILURE, D), N.errorMessage;
                    case 6:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function z(e) {
        return X.apply(this, arguments)
    }

    function X() {
        return (X = L(function(e) {
            var t, n, i, u, s, _, E, I, O, T, g, A, b, N, P;
            return w(this, function(D) {
                switch (D.label) {
                    case 0:
                        var M;
                        if (n = f.default.getCurrentConfig({
                                location: "8ac9d1_1"
                            }, {
                                autoTrackExposure: !1
                            }).enableDecoupledGameClipping, i = d.default.getCurrentConfig({
                                location: "SaveClip"
                            }, {
                                autoTrackExposure: !1
                            }).enableViewerClipping, v.default.getIsAtMaxSaveClipOperations()) return [2];
                        if (u = v.default.getSettings().clipsEnabled && null != p.default.getCurrentUserActiveStream(), s = n && v.default.getSettings().decoupledClipsEnabled && (null === (t = l.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && y.default.hasClipsSource(), _ = null != e && null != p.default.getActiveStreamForStreamKey(e) && i, !u && !s && !_) return [2];
                        return I = null != (E = p.default.getCurrentUserActiveStream()) ? (0, c.encodeStreamKey)(E) : void 0, T = (M = null != (O = null != e ? e : I) ? (0, c.decodeStreamKey)(O).ownerId : void 0) === m.default.getId() ? C.ClipSaveTypes.STREAMER : null != M ? C.ClipSaveTypes.VIEWER : C.ClipSaveTypes.DECOUPLED, [4, L(function() {
                            var e, t, n, i, a, u;
                            return w(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (null == O) return [2];
                                        if (t = (e = (0, c.decodeStreamKey)(O)).ownerId, n = e.guildId, null == (i = h.default.getStreamId(t, n, r.MediaEngineContextTypes.STREAM))) return [2];
                                        u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), [4, (0, o.getVoiceEngine)().getNextVideoOutputFrame(i)];
                                    case 2:
                                        return a = u.sent(), [2, (0, R.createImageFromImageData)(a)];
                                    case 3:
                                        return u.sent(), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })()];
                    case 1:
                        g = D.sent(), a.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_START",
                            clipType: T,
                            streamKey: O,
                            thumbnail: g
                        }), A = (0, S.playSound)("clip_save", .5), b = performance.now(), D.label = 2;
                    case 2:
                        return D.trys.push([2, 4, , 5]), [4, function(e) {
                            return K.apply(this, arguments)
                        }(O)];
                    case 3:
                        return N = D.sent(), a.default.dispatch({
                            type: "CLIPS_SAVE_CLIP",
                            clip: N
                        }), [3, 5];
                    case 4:
                        return P = D.sent(), C.ClipsLogger.error("Clip Failed to Save", P), null == A || A.stop(), (0, S.playSound)("clip_error", .5), a.default.dispatch({
                            type: "CLIPS_SAVE_CLIP_ERROR"
                        }), [3, 5];
                    case 5:
                        return C.ClipsLogger.info("".concat(v.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - b), "ms")), [2]
                }
            })
        })).apply(this, arguments)
    }

    function q(e, t) {
        a.default.dispatch({
            type: "CLIPS_SAVE_ANIMATION_END",
            streamKey: e,
            timestamp: t
        })
    }

    function Q(e, t) {
        return J.apply(this, arguments)
    }

    function J() {
        return (J = L(function(e, t) {
            var n, r;
            return w(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (null == (n = v.default.getClips().find(function(t) {
                                return t.id === e
                            }))) return [2];
                        return r = M({}, n, t), [4, (0, b.validateClipMetadata)(r)];
                    case 1:
                        if (null == o.sent()) return [2];
                        return [4, y.default.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r))];
                    case 2:
                        return o.sent(), O.default.track(P.AnalyticEvents.CLIP_EDITED, {
                            clip_id: r.id
                        }), a.default.dispatch({
                            type: "CLIPS_UPDATE_METADATA",
                            clip: r
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function Z() {
        a.default.dispatch({
            type: "CLIPS_CLEAR_CLIPS_SESSION"
        })
    }

    function $() {
        a.default.dispatch({
            type: "CLIPS_CLEAR_NEW_CLIP_IDS"
        })
    }

    function ee(e) {
        return et.apply(this, arguments)
    }

    function et() {
        return (et = L(function(e) {
            var t, n, r, o, i, s, l, c, f, d, _;
            return w(this, function(E) {
                switch (E.label) {
                    case 0:
                        if (!(0, T.isDesktop)() || (null === (t = u.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return [2];
                        return [4, u.default.clips.loadClipsDirectory(e)];
                    case 1:
                        n = E.sent(), r = [], o = !0, i = !1, s = void 0, E.label = 2;
                    case 2:
                        E.trys.push([2, 7, 8, 9]), l = n[Symbol.iterator](), E.label = 3;
                    case 3:
                        if (o = (c = l.next()).done) return [3, 6];
                        return f = c.value, [4, (0, b.validateClipMetadata)(U(M({}, f.metadata), {
                            filepath: f.filepath
                        }))];
                    case 4:
                        null != (d = E.sent()) && r.push(d), E.label = 5;
                    case 5:
                        return o = !0, [3, 3];
                    case 6:
                        return [3, 9];
                    case 7:
                        return _ = E.sent(), i = !0, s = _, [3, 9];
                    case 8:
                        try {
                            !o && null != l.return && l.return()
                        } finally {
                            if (i) throw s
                        }
                        return [7];
                    case 9:
                        return a.default.dispatch({
                            type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
                            clips: r
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function en(e) {
        return er.apply(this, arguments)
    }

    function er() {
        return (er = L(function(e) {
            var t;
            return w(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!(0, T.isDesktop)() || (null === (t = u.default.clips) || void 0 === t ? void 0 : t.deleteClip) == null) return [2];
                        return [4, u.default.clips.deleteClip(e)];
                    case 1:
                        return n.sent(), a.default.dispatch({
                            type: "CLIPS_DELETE_CLIP",
                            filepath: e
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function eo(e, t) {
        return ei.apply(this, arguments)
    }

    function ei() {
        return (ei = L(function(e, t) {
            var n;
            return w(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, y.default.getMediaEngine().exportClip(e.filepath, t)];
                    case 1:
                        return n = r.sent(), [2, (0, N.default)(n)]
                }
            })
        })).apply(this, arguments)
    }

    function ea(e) {
        a.default.dispatch({
            type: "CLIPS_DISMISS_EDUCATION",
            educationType: e
        })
    }
}