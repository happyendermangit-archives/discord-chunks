function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        updateAllowVoiceRecording: function() {
            return M
        },
        updateClipsEnabled: function() {
            return b
        },
        updateDecoupledClipsEnabled: function() {
            return U
        },
        updateRemindersEnabled: function() {
            return P
        },
        updateClipsStorageLocation: function() {
            return w
        },
        updateClipsQuality: function() {
            return F
        },
        updateClipsLength: function() {
            return G
        },
        updateViewerClipsEnabled: function() {
            return k
        },
        saveClip: function() {
            return W
        },
        dismissSaveClipAnimation: function() {
            return H
        },
        updateClipMetadata: function() {
            return K
        },
        clearClipsSession: function() {
            return B
        },
        clearNewClipIds: function() {
            return Y
        },
        loadClipsDirectory: function() {
            return q
        },
        deleteClip: function() {
            return j
        },
        exportClip: function() {
            return J
        },
        dismissClipsUserEducation: function() {
            return z
        }
    }), n("222007"), n("424973");
    var a = n("773364"),
        i = n("784063"),
        l = n("750028"),
        r = n("913144"),
        s = n("49671"),
        u = n("44642"),
        d = n("161454"),
        o = n("374014"),
        c = n("584687"),
        _ = n("103979"),
        f = n("872173"),
        E = n("268491"),
        g = n("373469"),
        p = n("271938"),
        S = n("42887"),
        m = n("205817"),
        A = n("555035"),
        h = n("599110"),
        C = n("773336"),
        I = n("709681"),
        T = n("386045"),
        v = n("13136"),
        N = n("881095"),
        y = n("997942"),
        R = n("310238"),
        O = n("430481"),
        D = n("80028"),
        L = n("49111");

    function M(e) {
        let {
            allowVoiceRecording: t
        } = e;
        f.PreloadedUserSettingsActionCreators.updateAsync("clips", e => {
            e.allowVoiceRecording = l.BoolValue.create({
                value: t
            })
        }, f.UserSettingsDelay.INFREQUENT_USER_ACTION), h.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            allow_voice_recording: t
        })
    }
    async function b(e) {
        let {
            clipsEnabled: t,
            guildId: n,
            trackAnalytics: a = !1
        } = e;
        await r.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsEnabled: t,
                ...!t && {
                    decoupledClipsEnabled: !1
                }
            }
        }), a && h.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
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
        r.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                ...t && {
                    clipsEnabled: !0
                },
                decoupledClipsEnabled: t
            }
        }), n && h.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            ...t && {
                clips_enabled: !0
            },
            decoupled_clips_enabled: t
        })
    }

    function P(e) {
        r.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                remindersEnabled: e
            }
        })
    }

    function w(e) {
        r.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                storageLocation: e
            }
        })
    }

    function F(e) {
        r.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                clipsQuality: e
            }
        })
    }

    function G(e) {
        r.default.dispatch({
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
        r.default.dispatch({
            type: "CLIPS_SETTINGS_UPDATE",
            settings: {
                viewerClipsEnabled: t
            }
        }), n && h.default.track(L.AnalyticEvents.CLIPS_SETTINGS_UPDATED, {
            viewer_clips_enabled: t
        })
    }

    function V(e, t) {
        var n, a, i, l, r, s, d, o, c, _;
        let f = new Map;
        for (let e in t.framesEncodedByEncoder) {
            let a = t.framesEncodedByEncoder[e],
                i = (0, u.parseEncoder)(e),
                l = null !== (n = f.get(i)) && void 0 !== n ? n : 0;
            f.set(i, l + a)
        }
        return {
            ...e,
            frames_encoded_nvidia_cuda: null !== (a = f.get(u.Encoders.NVIDIA_CUDA)) && void 0 !== a ? a : 0,
            frames_encoded_nvidia_direct3d: null !== (i = f.get(u.Encoders.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
            frames_encoded_openh264: null !== (l = f.get(u.Encoders.OPENH264)) && void 0 !== l ? l : 0,
            frames_encoded_videotoolbox: null !== (r = f.get(u.Encoders.VIDEOTOOLBOX)) && void 0 !== r ? r : 0,
            frames_encoded_amd_direct3d: null !== (s = f.get(u.Encoders.AMD_DIRECT_3D)) && void 0 !== s ? s : 0,
            frames_encoded_intel: null !== (d = f.get(u.Encoders.INTEL)) && void 0 !== d ? d : 0,
            frames_encoded_intel_direct3d: null !== (o = f.get(u.Encoders.INTEL_DIRECT_3D)) && void 0 !== o ? o : 0,
            frames_encoded_uncategorized: null !== (c = f.get(u.Encoders.UNCATEGORIZED)) && void 0 !== c ? c : 0,
            frames_encoded_unknown: null !== (_ = f.get(u.Encoders.UNKNOWN)) && void 0 !== _ ? _ : 0,
            frames_submitted: t.framesSubmitted,
            frames_submitted_during_clip: t.framesSubmittedDuringClip,
            frames_encoded: t.framesEncoded,
            frames_encoded_during_clip: t.framesEncodedDuringClip,
            frames_dropped: t.framesDropped,
            frames_dropped_during_clip: t.framesDroppedDuringClip,
            clip_duration_setting: T.default.getSettings().clipsLength,
            clip_duration: t.clipDuration,
            clip_resolution_width: t.clipResolutionWidth,
            clip_resolution_height: t.clipResolutionHeight,
            min_fps: t.minFps,
            max_fps: t.maxFps,
            submitted_fps: t.submittedFps,
            target_fps: E.default.getState().fps,
            audio_track_count: t.audioTrackCount,
            saved_at: t.savedAt
        }
    }
    async function x(e) {
        let t = T.default.getSettings(),
            n = t.storageLocation,
            a = (0, N.default)(e),
            i = "".concat((0, v.default)(a.applicationName.substring(0, 20)), "_").concat(a.id, ".mp4"),
            l = s.default.fileManager.join(n, i),
            u = S.default.getMediaEngine(),
            d = JSON.stringify(a),
            c = null != e ? (0, o.decodeStreamKey)(e).ownerId : void 0,
            _ = function(e) {
                var t;
                let n, a, i;
                if (null != e) {
                    n = null != e ? m.default.getRTCConnection(e) : null;
                    let t = (0, o.decodeStreamKey)(e);
                    a = t.guildId, i = t.channelId
                } else {
                    let e = p.default.getId(),
                        t = g.default.getActiveStreamForUser(e, null);
                    n = null != t ? m.default.getRTCConnection((0, o.encodeStreamKey)(t)) : null, a = null == t ? void 0 : t.guildId, i = null == t ? void 0 : t.channelId
                }
                let l = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
                return {
                    rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
                    media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                    parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                    guild_id: a,
                    channel_id: i,
                    application_id: null == l ? void 0 : l.id,
                    application_name: null == l ? void 0 : l.name
                }
            }(e);
        null != e && r.default.dispatch({
            type: "CLIPS_SAVE_CLIP_PLACEHOLDER",
            clip: {
                ...a,
                filepath: l
            }
        });
        try {
            var f;
            let {
                duration: e,
                clipStats: t
            } = await (null != c ? u.saveClipForUser(c, l, d) : u.saveClip(l, d)), n = V(_, t);
            n.clip_save_time_ms = t.clipSaveTimeMs, n.clip_size_bytes = t.clipSizeBytes, null != t.viewerDecodeFps && (n.decode_fps_during_clip = t.viewerDecodeFps, n.encode_fps_during_clip = t.viewerEncodeFps, n.target_fps = null), h.default.track(L.AnalyticEvents.CLIP_SAVED, n);
            let i = await (0, O.createThumbnailFromVideo)(s.default.clips.getClipProtocolURLFromPath(l), 0);
            return a.thumbnail = i, a.length = e, D.ClipsLogger.info("Clip save succeeded with ".concat(e, "ms and thumbnail ").concat(null !== (f = null == i ? void 0 : i.length) && void 0 !== f ? f : 0, " bytes thumbnail.")), await u.updateClipMetadata(l, JSON.stringify(a)), {
                ...a,
                filepath: l
            }
        } catch (n) {
            if (null != e && r.default.dispatch({
                    type: "CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR",
                    clipId: a.id
                }), !("errorMessage" in n)) throw h.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, _), n;
            let t = V(_, n);
            throw t.error_at = n.errorAt, t.error_message = n.errorMessage, h.default.track(L.AnalyticEvents.CLIP_SAVE_FAILURE, t), n.errorMessage
        }
    }
    async function W(e) {
        var t;
        let {
            enableDecoupledGameClipping: n
        } = c.default.getCurrentConfig({
            location: "8ac9d1_1"
        }, {
            autoTrackExposure: !1
        }), {
            enableViewerClipping: l
        } = _.default.getCurrentConfig({
            location: "SaveClip"
        }, {
            autoTrackExposure: !1
        });
        if (T.default.getIsAtMaxSaveClipOperations()) return;
        let s = T.default.getSettings().clipsEnabled && null != g.default.getCurrentUserActiveStream(),
            u = n && T.default.getSettings().decoupledClipsEnabled && (null === (t = d.default.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null && S.default.hasClipsSource(),
            f = null != e && null != g.default.getActiveStreamForStreamKey(e) && l;
        if (!s && !u && !f) return;
        let E = g.default.getCurrentUserActiveStream(),
            m = null != E ? (0, o.encodeStreamKey)(E) : void 0,
            h = null != e ? e : m,
            C = (() => {
                let e = null != h ? (0, o.decodeStreamKey)(h).ownerId : void 0;
                return e === p.default.getId() ? D.ClipSaveTypes.STREAMER : null != e ? D.ClipSaveTypes.VIEWER : D.ClipSaveTypes.DECOUPLED
            })(),
            v = await (async () => {
                if (null == h) return;
                let {
                    ownerId: e,
                    guildId: t
                } = (0, o.decodeStreamKey)(h), n = A.default.getStreamId(e, t, a.MediaEngineContextTypes.STREAM);
                if (null != n) try {
                    let e = (0, i.getVoiceEngine)(),
                        t = await e.getNextVideoOutputFrame(n);
                    return (0, O.createImageFromImageData)(t)
                } catch (e) {
                    return
                }
            })();
        r.default.dispatch({
            type: "CLIPS_SAVE_CLIP_START",
            clipType: C,
            streamKey: h,
            thumbnail: v
        });
        let N = (0, I.playSound)("clip_save", .5),
            y = performance.now();
        try {
            let e = await x(h);
            r.default.dispatch({
                type: "CLIPS_SAVE_CLIP",
                clip: e
            })
        } catch (e) {
            D.ClipsLogger.error("Clip Failed to Save", e), null == N || N.stop(), (0, I.playSound)("clip_error", .5), r.default.dispatch({
                type: "CLIPS_SAVE_CLIP_ERROR"
            })
        }
        D.ClipsLogger.info("".concat(T.default.getSettings().clipsLength / 1e3, "s clip save took ").concat(Math.round(performance.now() - y), "ms"))
    }

    function H(e, t) {
        r.default.dispatch({
            type: "CLIPS_SAVE_ANIMATION_END",
            streamKey: e,
            timestamp: t
        })
    }
    async function K(e, t) {
        let n = T.default.getClips().find(t => t.id === e);
        if (null == n) return;
        let a = {
                ...n,
                ...t
            },
            i = await (0, y.validateClipMetadata)(a);
        null != i && (await S.default.getMediaEngine().updateClipMetadata(a.filepath, JSON.stringify(a)), h.default.track(L.AnalyticEvents.CLIP_EDITED, {
            clip_id: a.id
        }), r.default.dispatch({
            type: "CLIPS_UPDATE_METADATA",
            clip: a
        }))
    }

    function B() {
        r.default.dispatch({
            type: "CLIPS_CLEAR_CLIPS_SESSION"
        })
    }

    function Y() {
        r.default.dispatch({
            type: "CLIPS_CLEAR_NEW_CLIP_IDS"
        })
    }
    async function q(e) {
        var t;
        if (!(0, C.isDesktop)() || (null === (t = s.default.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
        let n = await s.default.clips.loadClipsDirectory(e),
            a = [];
        for (let e of n) {
            let t = await (0, y.validateClipMetadata)({
                ...e.metadata,
                filepath: e.filepath
            });
            null != t && a.push(t)
        }
        r.default.dispatch({
            type: "CLIPS_LOAD_DIRECTORY_SUCCESS",
            clips: a
        })
    }
    async function j(e) {
        var t;
        (0, C.isDesktop)() && (null === (t = s.default.clips) || void 0 === t ? void 0 : t.deleteClip) != null && (await s.default.clips.deleteClip(e), r.default.dispatch({
            type: "CLIPS_DELETE_CLIP",
            filepath: e
        }))
    }
    async function J(e, t) {
        let n = S.default.getMediaEngine(),
            a = await n.exportClip(e.filepath, t);
        return (0, R.default)(a)
    }

    function z(e) {
        r.default.dispatch({
            type: "CLIPS_DISMISS_EDUCATION",
            educationType: e
        })
    }
}