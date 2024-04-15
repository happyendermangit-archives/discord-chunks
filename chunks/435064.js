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
        D = {
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
    async function v() {
        if (D.clipsSettings.storageLocation !== f || null == a.default || null == a.default.remoteApp) return;
        let e = await a.default.remoteApp.getPath("documents");
        D.clipsSettings.storageLocation = e, y.emitChange()
    }
    class M extends(i = r.default.DeviceSettingsStore) {
        initialize(e) {
            null != e && (D = e), v(), this.waitFor(o.default)
        }
        getClips() {
            return h
        }
        getPendingClips() {
            return A
        }
        getUserAgnosticState() {
            return D
        }
        getSettings() {
            return D.clipsSettings
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
            return D.hardwareClassification
        }
        getHardwareClassificationForDecoupled() {
            return D.hardwareClassificationForDecoupled
        }
        getHardwareClassificationVersion() {
            return D.hardwareClassificationVersion
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
            return D.hasClips
        }
        hasTakenDecoupledClip() {
            return D.hasTakenDecoupledClip
        }
        getNewClipIds() {
            return D.newClipIds
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
            D = {
                ...D,
                clipsSettings: {
                    ...D.clipsSettings,
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
            }, D = {
                ...D,
                newClipIds: [...null !== (n = D.newClipIds) && void 0 !== n ? n : [], i.id]
            }, A = A.filter(e => {
                let {
                    id: t
                } = e;
                return t !== i.id
            }), h = [i, ...h], D.hasClips = !0
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
            if (m += 1, D.hasTakenDecoupledClip = D.hasTakenDecoupledClip || t === c.ClipSaveTypes.DECOUPLED, null != n && null != i) {
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
            if (!D.clipsSettings.clipsEnabled) return !1;
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
            D.newClipIds = []
        },
        CLIPS_LOAD_DIRECTORY_SUCCESS: function(e) {
            D.hasClips = e.clips.length > 0, h = e.clips
        },
        CLIPS_DELETE_CLIP: function(e) {
            0 === (h = h.filter(t => {
                let {
                    filepath: n
                } = t;
                return n !== e.filepath
            })).length && (D.hasClips = !1)
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
            } = e, n = D.hardwareClassification;
            D.hardwareClassificationVersion = c.CLIPS_HARDWARE_CLASSIFICATION_VERSION, D.hardwareClassification = t, D.hardwareClassification === _.ClipsHardwareClassification.MEETS_AUTO_ENABLE && n !== _.ClipsHardwareClassification.MEETS_AUTO_ENABLE && (D.clipsSettings.clipsEnabled = !0);
            let i = D.hardwareClassificationForDecoupled;
            D.hardwareClassificationForDecoupled = t, D.hardwareClassificationForDecoupled === _.ClipsHardwareClassification.MEETS_AUTO_ENABLE && i !== _.ClipsHardwareClassification.MEETS_AUTO_ENABLE && D.clipsSettings.clipsEnabled && (D.clipsSettings.decoupledClipsEnabled = !0)
        },
        CLIPS_INIT: function(e) {
            let {
                applicationName: t
            } = e;
            if (R = null, !D.clipsSettings.clipsEnabled) return !1;
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
                    D.clipsEducationState.dismissedAt = Date.now(), D.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0, D.clipsEducationState.numberOfTimesDismissed += 1
            }
        },
        RUNNING_GAMES_CHANGE: function(e) {
            let {
                added: t
            } = e;
            t.length > 0 && (D.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1)
        }
    });
    t.default = y
}