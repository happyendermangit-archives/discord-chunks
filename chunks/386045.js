function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007"), n("702976");
    var i = n("446674"),
        s = n("913144"),
        r = n("49671"),
        a = n("161454"),
        o = n("374014"),
        l = n("271938"),
        u = n("568734"),
        d = n("30591"),
        c = n("80028"),
        f = n("49111"),
        _ = n("686298");
    let E = "default",
        h = [],
        g = [],
        m = [],
        p = 0,
        S = null,
        v = null,
        T = {},
        I = null,
        C = null,
        A = {},
        y = {
            clipsEnabled: !1,
            storageLocation: E,
            clipsQuality: {
                resolution: _.ApplicationStreamResolutions.RESOLUTION_1080,
                frameRate: _.ApplicationStreamFPS.FPS_30
            },
            clipsLength: c.ClipsLengthSettings.SECONDS_30,
            remindersEnabled: !0,
            decoupledClipsEnabled: !1,
            viewerClipsEnabled: !0,
            viewerConnectivity: c.ClipsViewerConnectivitySettings.ALL
        },
        N = {
            clipsSettings: y,
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
    async function R() {
        if (N.clipsSettings.storageLocation !== E || null == r.default || null == r.default.remoteApp) return;
        let e = await r.default.remoteApp.getPath("documents");
        N.clipsSettings.storageLocation = e, D.emitChange()
    }
    class O extends i.default.DeviceSettingsStore {
        initialize(e) {
            null != e && (N = e), R(), this.waitFor(a.default)
        }
        getClips() {
            return g
        }
        getPendingClips() {
            return m
        }
        getUserAgnosticState() {
            return N
        }
        getSettings() {
            return N.clipsSettings
        }
        getLastClipsSession() {
            return v
        }
        getClipsWarningShown(e) {
            return S === e
        }
        getActiveAnimation() {
            return C
        }
        getStreamClipAnimations(e) {
            var t;
            return null !== (t = A[e]) && void 0 !== t ? t : h
        }
        hasAnyClipAnimations() {
            return Object.values(A).some(e => e.length > 0)
        }
        getHardwareClassification() {
            return N.hardwareClassification
        }
        getHardwareClassificationForDecoupled() {
            return N.hardwareClassificationForDecoupled
        }
        getHardwareClassificationVersion() {
            return N.hardwareClassificationVersion
        }
        getIsAtMaxSaveClipOperations() {
            return p >= c.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS
        }
        getLastClipsError() {
            return I
        }
        isClipsEnabledForUser(e) {
            var t, n;
            return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
        }
        isVoiceRecordingAllowedForUser(e) {
            var t, n;
            return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
        }
        isViewerClippingAllowedForUser(e) {
            var t, n;
            return null !== (n = null === (t = T[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
        }
        hasClips() {
            return N.hasClips
        }
        hasTakenDecoupledClip() {
            return N.hasTakenDecoupledClip
        }
        getNewClipIds() {
            return N.newClipIds
        }
    }
    O.displayName = "ClipsStore", O.persistKey = "ClipsStore", O.migrations = [e => ({
        clipsSettings: null != e ? e : y,
        newClipsCount: 0
    }), e => {
        let t = {
            ...y,
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
            decoupledClipsEnabled: y.decoupledClipsEnabled
        }
    }), e => {
        var t;
        return {
            ...e,
            hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
        }
    }, e => {
        var t;
        let i = null === (t = n("42887").default) || void 0 === t ? void 0 : t.getHardwareH264();
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
            clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? y.clipsQuality : e.clipsSettings.clipsQuality
        }
    }), e => {
        var t;
        return {
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : y.remindersEnabled
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
    })];
    let D = new O(s.default, {
        CLIPS_SETTINGS_UPDATE: function(e) {
            let {
                settings: t
            } = e;
            N = {
                ...N,
                clipsSettings: {
                    ...N.clipsSettings,
                    ...t
                }
            }
        },
        CLIPS_SAVE_CLIP: function(e) {
            var t, n;
            let {
                clip: i
            } = e;
            p = Math.max(p - 1, 0), v = {
                applicationName: i.applicationName,
                ended: !1,
                ...v,
                newClipIds: [...null !== (t = null == v ? void 0 : v.newClipIds) && void 0 !== t ? t : [], i.id]
            }, N = {
                ...N,
                newClipIds: [...null !== (n = N.newClipIds) && void 0 !== n ? n : [], i.id]
            }, m = m.filter(e => {
                let {
                    id: t
                } = e;
                return t !== i.id
            }), g = [i, ...g], N.hasClips = !0
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
            let {
                clip: t
            } = e;
            m = [t, ...m]
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
            let {
                clipId: t
            } = e;
            m = m.filter(e => {
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
            if (p += 1, N.hasTakenDecoupledClip = N.hasTakenDecoupledClip || t === c.ClipSaveTypes.DECOUPLED, null != n && null != i) {
                var s;
                let e = Date.now();
                C = null != C ? C : e, A[n] = [...null !== (s = A[n]) && void 0 !== s ? s : [], {
                    timestamp: e,
                    thumbnail: i
                }]
            }
        },
        CLIPS_SAVE_CLIP_ERROR: function() {
            p = Math.max(p - 1, 0)
        },
        CLIPS_SAVE_ANIMATION_END: function(e) {
            let {
                streamKey: t,
                timestamp: n
            } = e;
            C === n && (C = null), null == n ? A[t] = [] : A[t] = A[t].filter(e => e.timestamp !== n)
        },
        STREAM_START: function(e) {
            let {
                sourceName: t,
                pid: n
            } = e;
            if (!N.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                var s;
                let e = a.default.getGameForPID(n);
                i = null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : i
            }
            if (null == i || "" === i) return !1;
            v = {
                applicationName: i,
                newClipIds: [],
                ended: !1
            }
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            if (C = null, A[t] = [], null == v || (0, o.decodeStreamKey)(t).ownerId !== l.default.getId()) return !1;
            v = 0 === v.newClipIds.length ? null : {
                ...v,
                ended: !0
            }
        },
        CLIPS_CLEAR_CLIPS_SESSION: function() {
            if (null == v) return !1;
            v = null
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function() {
            N.newClipIds = []
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
            N.hasClips = e.clips.length > 0, g = e.clips
        },
        CLIPS_DELETE_CLIP: function(e) {
            0 === (g = g.filter(t => {
                let {
                    filepath: n
                } = t;
                return n !== e.filepath
            })).length && (N.hasClips = !1)
        },
        CLIPS_UPDATE_METADATA: function(e) {
            let {
                clip: t
            } = e;
            for (let [e, n] of g.entries())
                if (n.id === t.id) {
                    g[e] = t, g = [...g];
                    return
                }
        },
        RTC_CONNECTION_FLAGS: function(e) {
            T[e.userId] = {
                clipsEnabled: (0, u.hasFlag)(e.flags, f.VoiceFlags.CLIPS_ENABLED),
                allowVoiceRecording: (0, u.hasFlag)(e.flags, f.VoiceFlags.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, u.hasFlag)(e.flags, f.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS)
            }
        },
        CLIPS_SHOW_CALL_WARNING: function(e) {
            let {
                channelId: t
            } = e;
            S = t
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            t !== S && (S = null)
        },
        CLIPS_CLASSIFY_HARDWARE: function(e) {
            let {
                classification: t
            } = e, n = N.hardwareClassification;
            N.hardwareClassificationVersion = c.CLIPS_HARDWARE_CLASSIFICATION_VERSION, N.hardwareClassification = t, N.hardwareClassification === d.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== d.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (N.clipsSettings.clipsEnabled = !0);
            let i = N.hardwareClassificationForDecoupled;
            N.hardwareClassificationForDecoupled = t, N.hardwareClassificationForDecoupled === d.ClipsHardwareClassification.MEETS_AUTO_ENABLE && i !== d.ClipsHardwareClassification.MEETS_AUTO_ENABLE && N.clipsSettings.clipsEnabled && (N.clipsSettings.decoupledClipsEnabled = !0)
        },
        CLIPS_INIT: function(e) {
            let {
                applicationName: t
            } = e;
            if (I = null, !N.clipsSettings.clipsEnabled) return !1;
            v = {
                applicationName: t,
                newClipIds: [],
                ended: !1
            }
        },
        CLIPS_INIT_FAILURE: function(e) {
            let {
                errMsg: t
            } = e;
            I = t
        },
        CLIPS_DISMISS_EDUCATION: function(e) {
            let {
                educationType: t
            } = e;
            switch (t) {
                case c.ClipsUserEducationType.Error:
                    I = null;
                    break;
                case c.ClipsUserEducationType.Disabled:
                case c.ClipsUserEducationType.Enabled:
                    N.clipsEducationState.dismissedAt = Date.now(), N.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, N.clipsEducationState.numberOfTimesDismissed += 1
            }
        },
        RUNNING_GAMES_CHANGE: function(e) {
            let {
                added: t
            } = e;
            t.length > 0 && (N.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
        }
    });
    var P = D
}