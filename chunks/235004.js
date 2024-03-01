function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    }), n("222007"), n("424973"), n("834022");
    var s, i, r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        d = n("913144"),
        u = n("845579"),
        l = n("374363"),
        f = n("697218"),
        _ = n("599110"),
        c = n("829536"),
        g = n("299039"),
        m = n("846325"),
        h = n("49111"),
        v = n("397336");
    (i = s || (s = {}))[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED";
    let E = new Map,
        p = new Map,
        y = new Set,
        T = 0,
        C = 0,
        I = new Set,
        S = new Map,
        A = !1;

    function D(e) {
        let {
            sound: t
        } = e, n = E.get(t.guildId), s = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
        null != n && null != s && -1 !== s ? (n[s] = t, E.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), E.set(t.guildId, [...n]))
    }
    let N = a.debounce(e => {
        _.default.track(h.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
            volume: Math.round((0, c.amplitudeToPerceptual)(e))
        }), u.SoundboardSettings.updateSetting({
            volume: e
        })
    }, 1e3);

    function O(e) {
        var t, n;
        let s = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
        for (let [e, t] of Object.entries(s)) t.soundboardMuted ? y.add(e) : y.delete(e);
        for (let e of y.keys()) null == s[e] && y.delete(e)
    }
    class P extends o.default.Store {
        initialize() {
            this.waitFor(l.default), O(l.default.settings)
        }
        getOverlaySerializedState() {
            return {
                soundboardSounds: Object.fromEntries(E),
                favoritedSoundIds: Array.from(I),
                localSoundboardMutes: Array.from(y)
            }
        }
        getSounds() {
            return E
        }
        getSoundsForGuild(e) {
            return E.get(e)
        }
        getSound(e, t) {
            var n;
            let s = null !== (n = E.get(e)) && void 0 !== n ? n : [];
            return s.find(e => e.soundId === t)
        }
        getSoundById(e) {
            let t = Array.from(E.values()).flat();
            return t.find(t => t.soundId === e)
        }
        isFetchingSounds() {
            return 1 === C
        }
        isFetchingDefaultSounds() {
            return 1 === T
        }
        isFetching() {
            return this.isFetchingSounds() || this.isFetchingDefaultSounds()
        }
        shouldFetchDefaultSounds() {
            return 0 === T
        }
        hasFetchedDefaultSounds() {
            return 2 === T
        }
        isUserPlayingSounds(e) {
            let t = S.get(e);
            return null != t && t > 0
        }
        isPlayingSound(e) {
            return null != p.get(e)
        }
        isFavoriteSound(e) {
            return I.has(e)
        }
        getFavorites() {
            return I
        }
        isLocalSoundboardMuted(e) {
            return y.has(e)
        }
        hasHadOtherUserPlaySoundInSession() {
            return A
        }
        hasFetchedAllSounds() {
            return 2 === C && 2 === T
        }
    }
    P.displayName = "SoundboardStore";
    var b = new P(d.default, {
        LOGOUT: function() {
            E.clear(), p.clear(), S.clear(), A = !1, C = 0, T = 0
        },
        GUILD_SOUNDBOARD_FETCH: function() {
            C = 1
        },
        GUILD_SOUNDBOARD_SOUND_CREATE: D,
        GUILD_SOUNDBOARD_SOUND_UPDATE: D,
        GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
            let {
                soundId: t,
                guildId: n
            } = e, s = E.get(n), i = null == s ? void 0 : s.findIndex(e => e.soundId === t);
            null != s && null != i && !(i < 0) && (s.splice(i, 1), E.set(n, [...s]))
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
            var t, n, s;
            let {
                soundId: i,
                userId: r
            } = e, a = (null !== (n = p.get(i)) && void 0 !== n ? n : 0) + 1, o = (null !== (s = S.get(r)) && void 0 !== s ? s : 0) + 1;
            p.set(i, a), S.set(r, o), r !== (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (A = !0)
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
            var t, n;
            let {
                soundId: s,
                userId: i
            } = e, r = (null !== (t = p.get(s)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = S.get(i)) && void 0 !== n ? n : 0) - 1;
            r <= 0 ? p.delete(s) : p.set(s, r), a <= 0 ? S.delete(i) : S.set(i, a)
        },
        USER_SOUNDBOARD_SET_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            N(t)
        },
        VOICE_CHANNEL_SELECT: function() {
            p.clear(), S.clear()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: t
            } = e, {
                type: n,
                proto: s
            } = t;
            if (n === v.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                var i, r;
                I = new Set(null !== (r = null == s ? void 0 : null === (i = s.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== r ? r : [])
            } else n === v.UserSettingsTypes.PRELOADED_USER_SETTINGS && O(s)
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
            T = 1
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
            let {
                soundboardSounds: t
            } = e;
            E.set(m.DEFAULT_SOUND_GUILD_ID, t), T = 2
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
                E.set(t, n)
            }), C = 2
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            E.delete(t.id)
        },
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
            let {
                userId: t
            } = e;
            y.has(t) ? y.delete(t) : y.add(t)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                soundboardStoreState: t
            } = e;
            E = new Map(g.default.entries(t.soundboardSounds)), I = new Set(t.favoritedSoundIds), y = new Set(t.localSoundboardMutes)
        },
        GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
            let {
                guildId: t,
                soundboardSounds: n
            } = e;
            E.set(t, n)
        }
    })
}