function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    }), n("222007"), n("424973"), n("834022");
    var i, s, r = n("917351"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144"),
        u = n("845579"),
        d = n("374363"),
        c = n("697218"),
        _ = n("599110"),
        f = n("829536"),
        E = n("299039"),
        h = n("846325"),
        g = n("49111"),
        m = n("397336");
    (s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
    let p = new Map,
        S = new Map,
        v = new Set,
        T = 0,
        I = 0,
        A = new Set,
        C = new Map,
        y = !1;

    function N(e) {
        let {
            sound: t
        } = e, n = p.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
        null != n && null != i && -1 !== i ? (n[i] = t, p.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), p.set(t.guildId, [...n]))
    }
    let R = a.debounce(e => {
        _.default.track(g.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
            volume: Math.round((0, f.amplitudeToPerceptual)(e))
        }), u.SoundboardSettings.updateSetting({
            volume: e
        })
    }, 1e3);

    function O(e) {
        var t, n;
        let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
        for (let [e, t] of Object.entries(i)) t.soundboardMuted ? v.add(e) : v.delete(e);
        for (let e of v.keys()) null == i[e] && v.delete(e)
    }
    class D extends o.default.Store {
        initialize() {
            this.waitFor(d.default), O(d.default.settings)
        }
        getOverlaySerializedState() {
            return {
                soundboardSounds: Object.fromEntries(p),
                favoritedSoundIds: Array.from(A),
                localSoundboardMutes: Array.from(v)
            }
        }
        getSounds() {
            return p
        }
        getSoundsForGuild(e) {
            return p.get(e)
        }
        getSound(e, t) {
            var n;
            let i = null !== (n = p.get(e)) && void 0 !== n ? n : [];
            return i.find(e => e.soundId === t)
        }
        getSoundById(e) {
            let t = Array.from(p.values()).flat();
            return t.find(t => t.soundId === e)
        }
        isFetchingSounds() {
            return 1 === I
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
            let t = C.get(e);
            return null != t && t > 0
        }
        isPlayingSound(e) {
            return null != S.get(e)
        }
        isFavoriteSound(e) {
            return A.has(e)
        }
        getFavorites() {
            return A
        }
        isLocalSoundboardMuted(e) {
            return v.has(e)
        }
        hasHadOtherUserPlaySoundInSession() {
            return y
        }
        hasFetchedAllSounds() {
            return 2 === I && 2 === T
        }
    }
    D.displayName = "SoundboardStore";
    var P = new D(l.default, {
        LOGOUT: function() {
            p.clear(), S.clear(), C.clear(), y = !1, I = 0, T = 0
        },
        GUILD_SOUNDBOARD_FETCH: function() {
            I = 1
        },
        GUILD_SOUNDBOARD_SOUND_CREATE: N,
        GUILD_SOUNDBOARD_SOUND_UPDATE: N,
        GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
            let {
                soundId: t,
                guildId: n
            } = e, i = p.get(n), s = null == i ? void 0 : i.findIndex(e => e.soundId === t);
            null != i && null != s && !(s < 0) && (i.splice(s, 1), p.set(n, [...i]))
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
            var t, n, i;
            let {
                soundId: s,
                userId: r
            } = e, a = (null !== (n = S.get(s)) && void 0 !== n ? n : 0) + 1, o = (null !== (i = C.get(r)) && void 0 !== i ? i : 0) + 1;
            S.set(s, a), C.set(r, o), r !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (y = !0)
        },
        GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
            var t, n;
            let {
                soundId: i,
                userId: s
            } = e, r = (null !== (t = S.get(i)) && void 0 !== t ? t : 0) - 1, a = (null !== (n = C.get(s)) && void 0 !== n ? n : 0) - 1;
            r <= 0 ? S.delete(i) : S.set(i, r), a <= 0 ? C.delete(s) : C.set(s, a)
        },
        USER_SOUNDBOARD_SET_VOLUME: function(e) {
            let {
                volume: t
            } = e;
            R(t)
        },
        VOICE_CHANNEL_SELECT: function() {
            S.clear(), C.clear()
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            let {
                settings: t
            } = e, {
                type: n,
                proto: i
            } = t;
            if (n === m.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                var s, r;
                A = new Set(null !== (r = null == i ? void 0 : null === (s = i.favoriteSoundboardSounds) || void 0 === s ? void 0 : s.soundIds) && void 0 !== r ? r : [])
            } else n === m.UserSettingsTypes.PRELOADED_USER_SETTINGS && O(i)
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
            T = 1
        },
        SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
            let {
                soundboardSounds: t
            } = e;
            p.set(h.DEFAULT_SOUND_GUILD_ID, t), T = 2
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
                p.set(t, n)
            }), I = 2
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            p.delete(t.id)
        },
        AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
            let {
                userId: t
            } = e;
            v.has(t) ? v.delete(t) : v.add(t)
        },
        OVERLAY_INITIALIZE: function(e) {
            let {
                soundboardStoreState: t
            } = e;
            p = new Map(E.default.entries(t.soundboardSounds)), A = new Set(t.favoritedSoundIds), v = new Set(t.localSoundboardMutes)
        },
        GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
            let {
                guildId: t,
                soundboardSounds: n
            } = e;
            p.set(t, n)
        }
    })
}