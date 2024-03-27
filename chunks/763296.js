function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("653041"), n("536091");
    var i, r, s, a, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("442837"),
        c = n("570140"),
        E = n("695346"),
        I = n("581883"),
        T = n("594174"),
        f = n("626135"),
        S = n("36703"),
        h = n("709054"),
        A = n("710111"),
        m = n("981631"),
        N = n("526761");
    (s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
    let O = new Map,
        p = new Map,
        R = new Set,
        C = 0,
        g = 0,
        L = new Set,
        D = new Map,
        v = !1;

    function M(e) {
        let {
            sound: t
        } = e, n = O.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
        null != n && null != i && -1 !== i ? (n[i] = t, O.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), O.set(t.guildId, [...n]))
    }
    let y = d().debounce(e => {
        f.default.track(m.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
            volume: Math.round((0, S.amplitudeToPerceptual)(e))
        }), E.SoundboardSettings.updateSetting({
            volume: e
        })
    }, 1e3);

    function P(e) {
        var t, n;
        let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
        for (let [e, t] of Object.entries(i)) t.soundboardMuted ? R.add(e) : R.delete(e);
        for (let e of R.keys()) null == i[e] && R.delete(e)
    }
    class U extends(r = _.default.Store) {
        initialize() {
            this.waitFor(I.default), P(I.default.settings)
        }
        getOverlaySerializedState() {
            return {
                soundboardSounds: Object.fromEntries(O),
                favoritedSoundIds: Array.from(L),
                localSoundboardMutes: Array.from(R)
            }
        }
        getSounds() {
            return O
        }
        getSoundsForGuild(e) {
            return O.get(e)
        }
        getSound(e, t) {
            var n;
            return (null !== (n = O.get(e)) && void 0 !== n ? n : []).find(e => e.soundId === t)
        }
        getSoundById(e) {
            return Array.from(O.values()).flat().find(t => t.soundId === e)
        }
        isFetchingSounds() {
            return 1 === g
        }
        isFetchingDefaultSounds() {
            return 1 === C
        }
        isFetching() {
            return this.isFetchingSounds() || this.isFetchingDefaultSounds()
        }
        shouldFetchDefaultSounds() {
            return 0 === C
        }
        hasFetchedDefaultSounds() {
            return 2 === C
        }
        isUserPlayingSounds(e) {
            let t = D.get(e);
            return null != t && t > 0
        }
        isPlayingSound(e) {
            return null != p.get(e)
        }
        isFavoriteSound(e) {
            return L.has(e)
        }
        getFavorites() {
            return L
        }
        isLocalSoundboardMuted(e) {
            return R.has(e)
        }
        hasHadOtherUserPlaySoundInSession() {
            return v
        }
        hasFetchedAllSounds() {
            return 2 === g && 2 === C
        }
    }
    l = "SoundboardStore", (o = "displayName") in(a = U) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new U(c.default, {
        LOGOUT: function() {
            O.clear(), p.clear(), D.clear(), v = !1, g = 0, C = 0
        },
        GUILD_SOUNDBOARD_FETCH: function() {
            g = 1
        },
        GUILD_SOUNDBOARD_SOUND_CREATE: M,
        GUILD_SOUNDBOARD_SOUND_UPDATE: M,
        GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
            let {
                soundId: t,
                guildId: n
            } = e, i = O.get(n), r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
            null != i && null != r && !(r < 0) && (i.splice(r, 1), O.set(n, [...i]))
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
            var t, n, i;
            let {
                soundId: r,
                userId: s
            } = e, a = (null !== (n = p.get(r)) && void 0 !== n ? n : 0) + 1, o = (null !== (i = D.get(s)) && void 0 !== i ? i : 0) + 1;
            p.set(r, a), D.set(s, o), s !== (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (v = !0)
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
            var t, n;
            let {
                soundId: i,
                userId: r
            } = e, s = (null !== (t = p.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = D.get(r)) && void 0 !== n ? n : 0) - 1;
            s <= 0 ? p.delete(i) : p.set(i, s), a <= 0 ? D.delete(r) : D.set(r, a)
        },
        USER_SOUNDBOARD_SET_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            y(t)
        },
        VOICE_CHANNEL_SELECT: function() {
            p.clear(), D.clear()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: t
            } = e, {
                type: n,
                proto: i
            } = t;
            if (n === N.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                var r, s;
                L = new Set(null !== (s = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== s ? s : [])
            } else n === N.UserSettingsTypes.PRELOADED_USER_SETTINGS && P(i)
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
            C = 1
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
            let {
                soundboardSounds: t
            } = e;
            O.set(A.DEFAULT_SOUND_GUILD_ID, t), C = 2
        },
        SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
            let {
                updates: t
            } = e;
            t.forEach(e => {
                let {
                    guildId: t,
                    sounds: n
                } = e;
                O.set(t, n)
            }), g = 2
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            O.delete(t.id)
        },
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
            let {
                userId: t
            } = e;
            R.has(t) ? R.delete(t) : R.add(t)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                soundboardStoreState: t
            } = e;
            O = new Map(h.default.entries(t.soundboardSounds)), L = new Set(t.favoritedSoundIds), R = new Set(t.localSoundboardMutes)
        },
        GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
            let {
                guildId: t,
                soundboardSounds: n
            } = e;
            O.set(t, n)
        }
    })
}