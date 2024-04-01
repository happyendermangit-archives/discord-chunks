function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearClipsSession: function() {
            return j
        },
        clearNewClipIds: function() {
            return W
        },
        deleteClip: function() {
            return z
        },
        dismissClipsUserEducation: function() {
            return Q
        },
        dismissSaveClipAnimation: function() {
            return H
        },
        exportClip: function() {
            return X
        },
        loadClipsDirectory: function() {
            return K
        },
        saveClip: function() {
            return x
        },
        updateAllowVoiceRecording: function() {
            return y
        },
        updateClipMetadata: function() {
            return Y
        },
        updateClipsEnabled: function() {
            return P
        },
        updateClipsLength: function() {
            return B
        },
        updateClipsQuality: function() {
            return w
        },
        updateClipsStorageLocation: function() {
            return G
        },
        updateDecoupledClipsEnabled: function() {
            return U
        },
        updateRemindersEnabled: function() {
            return b
        },
        updateViewerClipsEnabled: function() {
            return k
        }
    }), n("47120"), n("653041");
    var i = n("46973"),
        r = n("992774"),
        s = n("381499"),
        a = n("570140"),
        o = n("579806"),
        l = n("255914"),
        u = n("594190"),
        d = n("569545"),
        _ = n("836157"),
        c = n("441167"),
        E = n("675478"),
        I = n("361291"),
        T = n("199902"),
        f = n("314897"),
        S = n("131951"),
        h = n("959457"),
        A = n("33039"),
        m = n("626135"),
        N = n("358085"),
        O = n("557177"),
        p = n("435064"),
        R = n("61994"),
        C = n("550351"),
        g = n("659487"),
        L = n("711644"),
        D = n("259612"),
        v = n("356659"),
        M = n("981631");

    function y(e) {
        let {
            allowVoiceRecording: t
        } = e;
        E.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
            e.allowVoiceRecording = s.BoolValue.create({
                value: t
            })
        }, E.UserSettingsDelay.INFREQUENT_USER_ACTION), m.default.track(M.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            allow_voice_recording: t
        })
    }
    async function P(e) {
        let {
            clipsEnabled: t,
            guildId: n,
            trackAnalytics: i = !1
        } = e;
        await a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsEnabled: t,
                ...!t && {
                    decoupledClipsEnabled: !1
                }
            }
        }), i && m.default.track(M.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            clips_enabled: t,
            guild_id: n,
            ...!t && {
                decoupled_clips_enabled: !1
            }
        })
    }

    function U(e) {
        let {
            enabled: t,
            trackAnalytics: n = !1
        } = e;
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                ...t && {
                    clipsEnabled: !0
                },
                decoupledClipsEnabled: t
            }
        }), n && m.default.track(M.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            ...t && {
                clips_enabled: !0
            },
            decoupled_clips_enabled: t
        })
    }

    function b(e) {
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                remindersEnabled: e
            }
        })
    }

    function G(e) {
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                storageLocation: e
            }
        })
    }

    function w(e) {
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsQuality: e
            }
        })
    }

    function B(e) {
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsLength: e
            }
        })
    }

    function k(e) {
        let {
            enabled: t,
            trackAnalytics: n = !1
        } = e;
        a.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                viewerClipsEnabled: t
            }
        }), n && m.default.track(M.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            viewer_clips_enabled: t
        })
    }

    function V(e, t) {
        var n, i, r, s, a, o, u, d, _, c;
        let E = new Map;
        for (let e in t.framesEncodedByEncoder) {
            let i = t.framesEncodedByEncoder[e],
                r = (0, l.parseEncoder)(e),
                s = null !== (n = E.get(r)) && void 0 !== n ? n : 0;
            E.set(r, s + i)
        }
        return {
            ...e,
            frames_encoded_nvidia_cuda: null !== (i = E.get(l.Encoders.NVIDIA_CUDA)) && void 0 !== i ? i : 0,
            frames_encoded_nvidia_direct3d: null !== (r = E.get(l.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== r ? r : 0,
            frames_encoded_openh264: null !== (s = E.get(l.Encoders.OPENH264)) && void 0 !== s ? s : 0,
            frames_encoded_videotoolbox: null !== (a = E.get(l.Encoders.VIDEOTOOLBOX)) && void 0 !== a ? a : 0,
            frames_encoded_amd_direct3d: null !== (o = E.get(l.Encoders.AMD_DIRECT_3D)) && void 0 !== o ? o : 0,
            frames_encoded_intel: null !== (u = E.get(l.Encoders.INTEL)) && void 0 !== u ? u : 0,
            frames_encoded_intel_direct3d: null !== (d = E.get(l.Encoders.INTEL_DIRECT_3D)) && void 0 !== d ? d : 0,
            frames_encoded_uncategorized: null !== (_ = E.get(l.Encoders.UNCATEGORIZED)) && void 0 !== _ ? _ : 0,
            frames_encoded_unknown: null !== (c = E.get(l.Encoders.UNKNOWN)) && void 0 !== c ? c : 0,
            frames_submitted: t.framesSubmitted,
            frames_submitted_during_clip: t.framesSubmittedDuringClip,
            frames_encoded: t.framesEncoded,
            frames_encoded_during_clip: t.framesEncodedDuringClip,
            frames_dropped: t.framesDropped,
            frames_dropped_during_clip: t.framesDroppedDuringClip,
            clip_duration_setting: p.default.getSettings().clipsLength,
            clip_duration: t.clipDuration,
            clip_resolution_width: t.clipResolutionWidth,
            clip_resolution_height: t.clipResolutionHeight,
            min_fps: t.minFps,
            max_fps: t.maxFps,
            submitted_fps: t.submittedFps,
            target_fps: I.default.getState().fps,
            audio_track_count: t.audioTrackCount,
            saved_at: t.savedAt
        }
    }
    async function F(e) {
        let t = p.default.getSettings().storageLocation,
            n = (0, C.default)(e),
            i = "".concat((0, R.default)(n.applicationName.substring(0, 20)), "_").concat(n.id, ".mp4"),
            r = o.default.fileManager.join(t, i),
            s = S.default.getMediaEngine(),
            l = JSON.stringify(n),
            u = null != e ? (0, d.decodeStreamKey)(e).ownerId : void 0,
            _ = function(e) {
                var t;
                let n, i, r;
                if (null != e) {
                    n = null != e ? h.default.getRTCConnection(e) : null;
                    let t = (0, d.decodeStreamKey)(e);
                    i = t.guildId, r = t.channelId
                } else {
                    let e = f.default.getId(),
                        t = T.default.getActiveStreamForUser(e, null);
                    n = null != t ? h.default.getRTCConnection((0, d.encodeStreamKey)(t)) : null, i = null == t ? void 0 : t.guildId, r = null == t ? void 0 : t.channelId
                }
                let s = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
                return {
                    rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                    media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                    parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                    guild_id: i,
                    channel_id: r,
                    application_id: null == s ? void 0 : s.id,
                    application_name: null == s ? void 0 : s.name
                }
            }(e);
        null != e && a.default.dispatch({
            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
            clip: {
                ...n,
                filepath: r
            }
        });
        try {
            var c;
            let {
                duration: e,
                clipStats: t
            } = await (null != u ? s.saveClipForUser(u, r, l) : s.saveClip(r, l)), i = V(_, t);
            i.clip_save_time_ms = t.clipSaveTimeMs, i.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (i.decode_fps_during_clip = t.viewerDecodeFps, i.encode_fps_during_clip = t.viewerEncodeFps, i.target_fps = null), m.default.track(M.AnalyticEvents.CLIP_SAVED, i);
            let a = await (0, D.createThumbnailFromVideo)(o.default.clips.getClipProtocolURLFromPath(r), 0);
            return n.thumbnail = a, n.length = e, v.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (c = null == a ? void 0 : a.length) && void 0 !== c ? c : 0, " bytes thumbnail.")), await s.updateClipMetadata(r, JSON.stringify(n)), {
                ...n,
                filepath: r
            }
        } catch (i) {
            if (null != e && a.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                    clipId: n.id
                }), !("errorMessage" in i)) throw m.default.track(M.AnalyticEvents.CLIP_SAVE_FAILURE, _), i;
            let t = V(_, i);
            throw t.error_at = i.errorAt, t.error_message = i.errorMessage, m.default.track(M.AnalyticEvents.CLIP_SAVE_FAILURE, t), i.errorMessage
        }
    }
    async function x(e) {
        var t;
        let {
            enableDecoupledGameClipping: n
        } = _.default.getCurrentConfig({
            location: "8ac9d1_1"
        }, {
            autoTrackExposure: !1
        }), {
            enableViewerClipping: s
        } = c.default.getCurrentConfig({
            location: "SaveClip"
        }, {
            autoTrackExposure: !1
        });
        if (p.default.getIsAtMaxSaveClipOperations()) return;
        let o = p.default.getSettings().clipsEnabled && null != T.default.getCurrentUserActiveStream(),
            l = n && p.default.getSettings().decoupledClipsEnabled && (null === (t = u.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && S.default.hasClipsSource(),
            E = null != e && null != T.default.getActiveStreamForStreamKey(e) && s;
        if (!o && !l && !E) return;
        let I = T.default.getCurrentUserActiveStream(),
            h = null != I ? (0, d.encodeStreamKey)(I) : void 0,
            m = null != e ? e : h,
            N = (() => {
                let e = null != m ? (0, d.decodeStreamKey)(m).ownerId : void 0;
                return e === f.default.getId() ? v.ClipSaveTypes.STREAMER : null != e ? v.ClipSaveTypes.VIEWER : v.ClipSaveTypes.DECOUPLED
            })(),
            R = await (async () => {
                if (null == m) return;
                let {
                    ownerId: e,
                    guildId: t
                } = (0, d.decodeStreamKey)(m), n = A.default.getStreamId(e, t, i.MediaEngineContextTypes.STREAM);
                if (null != n) try {
                    let e = (0, r.getVoiceEngine)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, D.createImageFromImageData)(t)
                } catch (e) {
                    return
                }
            })();
        a.default.dispatch({
            type: "CLIPS_SAVE_CLIP_START",
            clipType: N,
            streamKey: m,
            thumbnail: R
        });
        let C = (0, O.playSound)("clip_save", .5),
            g = performance.now();
        try {
            let e = await F(m);
            a.default.dispatch({
                type: "CLIPS_SAVE_CLIP",
                clip: e
            })
        } catch (e) {
            v.ClipsLogger.error("Clip Failed to Save", e), null == C || C.stop(), (0, O.playSound)("clip_error", .5), a.default.dispatch({
                type: "CLIPS_SAVE_CLIP_ERROR"
            })
        }
        v.ClipsLogger.info("".concat(p.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - g), "ms"))
    }

    function H(e, t) {
        a.default.dispatch({
            type: "CLIPS_SAVE_ANIMATION_END",
            streamKey: e,
            timestamp: t
        })
    }
    async function Y(e, t) {
        let n = p.default.getClips().find(t => t.id === e);
        if (null == n) return;
        let i = {
            ...n,
            ...t
        };
        null != await (0, g.validateClipMetadata)(i) && (await S.default.getMediaEngine().updateClipMetadata(i.filepath, JSON.stringify(i)), m.default.track(M.AnalyticEvents.CLIP_EDITED, {
            clip_id: i.id
        }), a.default.dispatch({
            type: "CLIPS_UPDATE_METADATA",
            clip: i
        }))
    }

    function j() {
        a.default.dispatch({
            type: "CLIPS_CLEAR_CLIPS_SESSION"
        })
    }

    function W() {
        a.default.dispatch({
            type: "CLIPS_CLEAR_NEW_CLIP_IDS"
        })
    }
    async function K(e) {
        var t;
        if (!(0, N.isDesktop)() || (null === (t = o.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
        let n = await o.default.clips.loadClipsDirectory(e),
            i = [];
        for (let e of n) {
            let t = await (0, g.validateClipMetadata)({
                ...e.metadata,
                filepath: e.filepath
            });
            null != t && i.push(t)
        }
        a.default.dispatch({
            type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
            clips: i
        })
    }
    async function z(e) {
        var t;
        (0, N.isDesktop)() && (null === (t = o.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await o.default.clips.deleteClip(e), a.default.dispatch({
            type: "CLIPS_DELETE_CLIP",
            filepath: e
        }))
    }
    async function X(e, t) {
        let n = S.default.getMediaEngine(),
            i = await n.exportClip(e.filepath, t);
        return (0, L.default)(i)
    }

    function Q(e) {
        a.default.dispatch({
            type: "CLIPS_DISMISS_EDUCATION",
            educationType: e
        })
    }
}