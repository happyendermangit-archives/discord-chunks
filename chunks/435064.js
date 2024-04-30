function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("789020");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("579806"),
        o = n("594190"),
        l = n("569545"),
        u = n("314897"),
        d = n("630388"),
        _ = n("894694"),
        c = n("356659"),
        E = n("981631"),
        I = n("37113");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let f = "default",
        S = [],
        h = [],
        A = [],
        m = 0,
        N = null,
        p = null,
        O = {},
        R = null,
        C = null,
        g = {},
        L = {
            clipsEnabled: !1,
            storageLocation: f,
            clipsQuality: {
                resolution: I.ApplicationStreamResolutions.RESOLUTION_1080,
                frameRate: I.ApplicationStreamFPS.FPS_30
            },
            clipsLength: c.ClipsLengthSettings.SECONDS_30,
            remindersEnabled: !0,
            decoupledClipsEnabled: !1,
            viewerClipsEnabled: !0,
            viewerConnectivity: c.ClipsViewerConnectivitySettings.ALL
        },
        v = {
            clipsSettings: L,
            hardwareClassification: null,
            hardwareClassificationForDecoupled: null,
            hardwareClassificationVersion: 0,
            newClipIds: [],
            hasClips: !1,
            hasTakenDecoupledClip: !1,
            clipsEducationState: {
                dismissedAt: null,
                numberOfGamesLaunchedSinceDismissal: 0,
                numberOfTimesDismissed: 0
            }
        };
    async function D() {
        if (v.clipsSettings.storageLocation !== f || null == a.default || null == a.default.remoteApp) return;
        let e = await a.default.remoteApp.getPath("documents");
        v.clipsSettings.storageLocation = e, y.emitChange()
    }
    class M extends(i = r.default.DeviceSettingsStore) {
        initialize(e) {
            null != e && (v = e), D(), this.waitFor(o.default)
        }
        getClips() {
            return h
        }
        getPendingClips() {
            return A
        }
        getUserAgnosticState() {
            return v
        }
        getSettings() {
            return v.clipsSettings
        }
        getLastClipsSession() {
            return p
        }
        getClipsWarningShown(e) {
            return N === e
        }
        getActiveAnimation() {
            return C
        }
        getStreamClipAnimations(e) {
            var t;
            return null !== (t = g[e]) && void 0 !== t ? t : S
        }
        hasAnyClipAnimations() {
            return Object.values(g).some(e => e.length > 0)
        }
        getHardwareClassification() {
            return v.hardwareClassification
        }
        getHardwareClassificationForDecoupled() {
            return v.hardwareClassificationForDecoupled
        }
        getHardwareClassificationVersion() {
            return v.hardwareClassificationVersion
        }
        getIsAtMaxSaveClipOperations() {
            return m >= c.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS
        }
        getLastClipsError() {
            return R
        }
        isClipsEnabledForUser(e) {
            var t, n;
            return null !== (n = null === (t = O[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
        }
        isVoiceRecordingAllowedForUser(e) {
            var t, n;
            return null !== (n = null === (t = O[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
        }
        isViewerClippingAllowedForUser(e) {
            var t, n;
            return null !== (n = null === (t = O[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
        }
        hasClips() {
            return v.hasClips
        }
        hasTakenDecoupledClip() {
            return v.hasTakenDecoupledClip
        }
        getNewClipIds() {
            return v.newClipIds
        }
    }
    T(M, "displayName", "ClipsStore"), T(M, "persistKey", "ClipsStore"), T(M, "migrations", [e => ({
        clipsSettings: null != e ? e : L,
        newClipsCount: 0
    }), e => {
        let t = {
            ...L,
            ...e.clipsSettings
        };
        return {
            ...e,
            clipsSettings: t
        }
    }, e => {
        var t;
        return {
            ...e,
            newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
        }
    }, e => {
        var t, n;
        return {
            ...e,
            hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
            hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
        }
    }, e => {
        var t;
        return {
            ...e,
            hasClips: null !== (t = e.hasClips) && void 0 !== t && t
        }
    }, e => ({
        ...e,
        clipsSettings: {
            ...e.clipsSettings,
            decoupledClipsEnabled: L.decoupledClipsEnabled
        }
    }), e => {
        var t;
        return {
            ...e,
            hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
        }
    }, e => {
        var t;
        let i = null === (t = n("131951").default) || void 0 === t ? void 0 : t.getHardwareH264();
        return {
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                clipsEnabled: !!i && e.clipsSettings.clipsEnabled,
                decoupledClipsEnabled: !!i && e.clipsSettings.decoupledClipsEnabled
            }
        }
    }, e => {
        var t;
        return {
            ...e,
            newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
            newClipIDs: void 0
        }
    }, e => ({
        ...e,
        clipsSettings: {
            ...e.clipsSettings,
            clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? L.clipsQuality : e.clipsSettings.clipsQuality
        }
    }), e => {
        var t;
        return {
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : L.remindersEnabled
            }
        }
    }, e => ({
        ...e,
        hasTakenDecoupledClip: !1,
        clipsEducationState: {
            dismissedAt: null,
            numberOfGamesLaunchedSinceDismissal: 0,
            numberOfTimesDismissed: 0
        }
    })]);
    let y = new M(s.default, {
        CLIPS_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            v = {
                ...v,
                clipsSettings: {
                    ...v.clipsSettings,
                    ...t
                }
            }
        },
        CLIPS_SAVE_CLIP: function(e) {
            var t, n;
            let {
                clip: i
            } = e;
            m = Math.max(m - 1, 0), p = {
                applicationName: i.applicationName,
                ended: !1,
                ...p,
                newClipIds: [...null !== (t = null == p ? void 0 : p.newClipIds) && void 0 !== t ? t : [], i.id]
            }, v = {
                ...v,
                newClipIds: [...null !== (n = v.newClipIds) && void 0 !== n ? n : [], i.id]
            }, A = A.filter(e => {
                let {
                    id: t
                } = e;
                return t !== i.id
            }), h = [i, ...h], v.hasClips = !0
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
            let {
                clip: t
            } = e;
            A = [t, ...A]
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
            let {
                clipId: t
            } = e;
            A = A.filter(e => {
                let {
                    id: n
                } = e;
                return n !== t
            })
        },
        CLIPS_SAVE_CLIP_START: function(e) {
            let {
                clipType: t,
                streamKey: n,
                thumbnail: i
            } = e;
            if (m += 1, v.hasTakenDecoupledClip = v.hasTakenDecoupledClip || t === c.ClipSaveTypes.DECOUPLED, null != n && null != i) {
                var r;
                let e = Date.now();
                C = null != C ? C : e, g[n] = [...null !== (r = g[n]) && void 0 !== r ? r : [], {
                    timestamp: e,
                    thumbnail: i
                }]
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function() {
            m = Math.max(m - 1, 0)
        },
        CLIPS_SAVE_ANIMATION_END: function(e) {
            let {
                streamKey: t,
                timestamp: n
            } = e;
            C === n && (C = null), null == n ? g[t] = [] : g[t] = g[t].filter(e => e.timestamp !== n)
        },
        STREAM_START: function(e) {
            let {
                sourceName: t,
                pid: n
            } = e;
            if (!v.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                var r;
                let e = o.default.getGameForPID(n);
                i = null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : i
            }
            if (null == i || "" === i) return !1;
            p = {
                applicationName: i,
                newClipIds: [],
                ended: !1
            }
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            if (C = null, g[t] = [], null == p || (0, l.decodeStreamKey)(t).ownerId !== u.default.getId()) return !1;
            p = 0 === p.newClipIds.length ? null : {
                ...p,
                ended: !0
            }
        },
        CLIPS_CLEAR_CLIPS_SESSION: function() {
            if (null == p) return !1;
            p = null
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function() {
            v.newClipIds = []
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
            v.hasClips = e.clips.length > 0, h = e.clips
        },
        CLIPS_DELETE_CLIP: function(e) {
            0 === (h = h.filter(t => {
                let {
                    filepath: n
                } = t;
                return n !== e.filepath
            })).length && (v.hasClips = !1)
        },
        CLIPS_UPDATE_METADATA: function(e) {
            let {
                clip: t
            } = e;
            for (let [e, n] of h.entries())
                if (n.id === t.id) {
                    h[e] = t, h = [...h];
                    return
                }
        },
        RTC_CONNECTION_FLAGS: function(e) {
            O[e.userId] = {
                clipsEnabled: (0, d.hasFlag)(e.flags, E.VoiceFlags.CLIPS_ENABLED),
                allowVoiceRecording: (0, d.hasFlag)(e.flags, E.VoiceFlags.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, d.hasFlag)(e.flags, E.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS)
            }
        },
        CLIPS_SHOW_CALL_WARNING: function(e) {
            let {
                channelId: t
            } = e;
            N = t
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            t !== N && (N = null)
        },
        CLIPS_CLASSIFY_HARDWARE: function(e) {
            let {
                classification: t
            } = e, n = v.hardwareClassification;
            v.hardwareClassificationVersion = c.CLIPS_HARDWARE_CLASSIFICATION_VERSION, v.hardwareClassification = t, v.hardwareClassification === _.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== _.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (v.clipsSettings.clipsEnabled = !0);
            let i = v.hardwareClassificationForDecoupled;
            v.hardwareClassificationForDecoupled = t, v.hardwareClassificationForDecoupled === _.ClipsHardwareClassification.MEETS_AUTO_ENABLE && i !== _.ClipsHardwareClassification.MEETS_AUTO_ENABLE && v.clipsSettings.clipsEnabled && (v.clipsSettings.decoupledClipsEnabled = !0)
        },
        CLIPS_INIT: function(e) {
            let {
                applicationName: t
            } = e;
            if (R = null, !v.clipsSettings.clipsEnabled) return !1;
            p = {
                applicationName: t,
                newClipIds: [],
                ended: !1
            }
        },
        CLIPS_INIT_FAILURE: function(e) {
            let {
                errMsg: t
            } = e;
            R = t
        },
        CLIPS_DISMISS_EDUCATION: function(e) {
            let {
                educationType: t
            } = e;
            switch (t) {
                case c.ClipsUserEducationType.Error:
                    R = null;
                    break;
                case c.ClipsUserEducationType.Disabled:
                case c.ClipsUserEducationType.Enabled:
                    v.clipsEducationState.dismissedAt = Date.now(), v.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, v.clipsEducationState.numberOfTimesDismissed += 1
            }
        },
        RUNNING_GAMES_CHANGE: function(e) {
            let {
                added: t
            } = e;
            t.length > 0 && (v.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
        }
    });
    t.default = y
}