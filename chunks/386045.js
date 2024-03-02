function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007"), n("702976");
    var i = n("446674"),
        r = n("913144"),
        s = n("49671"),
        a = n("161454"),
        o = n("374014"),
        l = n("271938"),
        u = n("568734"),
        c = n("30591"),
        d = n("80028"),
        f = n("49111"),
        E = n("686298");
    let p = "default",
        h = [],
        _ = [],
        S = [],
        m = 0,
        T = null,
        g = null,
        I = {},
        C = null,
        v = null,
        A = {},
        R = {
            clipsEnabled: !1,
            storageLocation: p,
            clipsQuality: {
                resolution: E.ApplicationStreamResolutions.RESOLUTION_1080,
                frameRate: E.ApplicationStreamFPS.FPS_30
            },
            clipsLength: d.ClipsLengthSettings.SECONDS_30,
            remindersEnabled: !0,
            decoupledClipsEnabled: !1,
            viewerClipsEnabled: !0,
            viewerConnectivity: d.ClipsViewerConnectivitySettings.ALL
        },
        N = {
            clipsSettings: R,
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
    async function O() {
        if (N.clipsSettings.storageLocation !== p || null == s.default || null == s.default.remoteApp) return;
        let e = await s.default.remoteApp.getPath("documents");
        N.clipsSettings.storageLocation = e, y.emitChange()
    }
    class D extends i.default.DeviceSettingsStore {
        initialize(e) {
            null != e && (N = e), O(), this.waitFor(a.default)
        }
        getClips() {
            return _
        }
        getPendingClips() {
            return S
        }
        getUserAgnosticState() {
            return N
        }
        getSettings() {
            return N.clipsSettings
        }
        getLastClipsSession() {
            return g
        }
        getClipsWarningShown(e) {
            return T === e
        }
        getActiveAnimation() {
            return v
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
            return m >= d.MAX_SIMULTANEOUS_SAVE_CLIP_OPERATIONS
        }
        getLastClipsError() {
            return C
        }
        isClipsEnabledForUser(e) {
            var t, n;
            return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n
        }
        isVoiceRecordingAllowedForUser(e) {
            var t, n;
            return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n
        }
        isViewerClippingAllowedForUser(e) {
            var t, n;
            return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n
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
    D.displayName = "ClipsStore", D.persistKey = "ClipsStore", D.migrations = [e => ({
        clipsSettings: null != e ? e : R,
        newClipsCount: 0
    }), e => {
        let t = {
            ...R,
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
            decoupledClipsEnabled: R.decoupledClipsEnabled
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
            clipsQuality: "number" == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? R.clipsQuality : e.clipsSettings.clipsQuality
        }
    }), e => {
        var t;
        return {
            ...e,
            clipsSettings: {
                ...e.clipsSettings,
                remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : R.remindersEnabled
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
    let y = new D(r.default, {
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
            m = Math.max(m - 1, 0), g = {
                applicationName: i.applicationName,
                ended: !1,
                ...g,
                newClipIds: [...null !== (t = null == g ? void 0 : g.newClipIds) && void 0 !== t ? t : [], i.id]
            }, N = {
                ...N,
                newClipIds: [...null !== (n = N.newClipIds) && void 0 !== n ? n : [], i.id]
            }, S = S.filter(e => {
                let {
                    id: t
                } = e;
                return t !== i.id
            }), _ = [i, ..._], N.hasClips = !0
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER: function(e) {
            let {
                clip: t
            } = e;
            S = [t, ...S]
        },
        CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function(e) {
            let {
                clipId: t
            } = e;
            S = S.filter(e => {
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
            if (m += 1, N.hasTakenDecoupledClip = N.hasTakenDecoupledClip || t === d.ClipSaveTypes.DECOUPLED, null != n && null != i) {
                var r;
                let e = Date.now();
                v = null != v ? v : e, A[n] = [...null !== (r = A[n]) && void 0 !== r ? r : [], {
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
            v === n && (v = null), null == n ? A[t] = [] : A[t] = A[t].filter(e => e.timestamp !== n)
        },
        STREAM_START: function(e) {
            let {
                sourceName: t,
                pid: n
            } = e;
            if (!N.clipsSettings.clipsEnabled) return !1;
            let i = t;
            if (null != n) {
                var r;
                let e = a.default.getGameForPID(n);
                i = null !== (r = null == e ? void 0 : e.name) && void 0 !== r ? r : i
            }
            if (null == i || "" === i) return !1;
            g = {
                applicationName: i,
                newClipIds: [],
                ended: !1
            }
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            if (v = null, A[t] = [], null == g || (0, o.decodeStreamKey)(t).ownerId !== l.default.getId()) return !1;
            g = 0 === g.newClipIds.length ? null : {
                ...g,
                ended: !0
            }
        },
        CLIPS_CLEAR_CLIPS_SESSION: function() {
            if (null == g) return !1;
            g = null
        },
        CLIPS_CLEAR_NEW_CLIP_IDS: function() {
            N.newClipIds = []
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
            N.hasClips = e.clips.length > 0, _ = e.clips
        },
        CLIPS_DELETE_CLIP: function(e) {
            0 === (_ = _.filter(t => {
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
            for (let [e, n] of _.entries())
                if (n.id === t.id) {
                    _[e] = t, _ = [..._];
                    return
                }
        },
        RTC_CONNECTION_FLAGS: function(e) {
            I[e.userId] = {
                clipsEnabled: (0, u.hasFlag)(e.flags, f.VoiceFlags.CLIPS_ENABLED),
                allowVoiceRecording: (0, u.hasFlag)(e.flags, f.VoiceFlags.ALLOW_VOICE_RECORDING),
                allowAnyViewerClips: (0, u.hasFlag)(e.flags, f.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS)
            }
        },
        CLIPS_SHOW_CALL_WARNING: function(e) {
            let {
                channelId: t
            } = e;
            T = t
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            t !== T && (T = null)
        },
        CLIPS_CLASSIFY_HARDWARE: function(e) {
            let {
                classification: t
            } = e, n = N.hardwareClassification;
            N.hardwareClassificationVersion = d.CLIPS_HARDWARE_CLASSIFICATION_VERSION, N.hardwareClassification = t, N.hardwareClassification === c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (N.clipsSettings.clipsEnabled = !0);
            let i = N.hardwareClassificationForDecoupled;
            N.hardwareClassificationForDecoupled = t, N.hardwareClassificationForDecoupled === c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && i !== c.ClipsHardwareClassification.MEETS_AUTO_ENABLE && N.clipsSettings.clipsEnabled && (N.clipsSettings.decoupledClipsEnabled = !0)
        },
        CLIPS_INIT: function(e) {
            let {
                applicationName: t
            } = e;
            if (C = null, !N.clipsSettings.clipsEnabled) return !1;
            g = {
                applicationName: t,
                newClipIds: [],
                ended: !1
            }
        },
        CLIPS_INIT_FAILURE: function(e) {
            let {
                errMsg: t
            } = e;
            C = t
        },
        CLIPS_DISMISS_EDUCATION: function(e) {
            let {
                educationType: t
            } = e;
            switch (t) {
                case d.ClipsUserEducationType.Error:
                    C = null;
                    break;
                case d.ClipsUserEducationType.Disabled:
                case d.ClipsUserEducationType.Enabled:
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
    var P = y
}