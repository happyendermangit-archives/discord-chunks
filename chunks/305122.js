function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeFetchSoundboardSounds: function() {
            return C
        },
        uploadSound: function() {
            return _
        },
        updateSound: function() {
            return T
        },
        deleteSound: function() {
            return I
        },
        addFavoriteSound: function() {
            return v
        },
        removeFavoriteSound: function() {
            return N
        },
        playSoundLocally: function() {
            return A
        },
        reportSoundStartedPlaying: function() {
            return O
        },
        reportSoundFinishedPlaying: function() {
            return R
        },
        updateUserSoundboardVolume: function() {
            return M
        },
        muteCustomJoinSound: function() {
            return k
        }
    }), n("222007"), n("424973");
    var i = n("917351"),
        l = n.n(i),
        a = n("872717"),
        s = n("913144"),
        r = n("404118"),
        o = n("599417"),
        u = n("872173"),
        d = n("235004"),
        c = n("389480"),
        f = n("24156"),
        p = n("846325"),
        m = n("49111"),
        h = n("397336"),
        x = n("782340");
    let E = async e => {
        try {
            let t = await a.HTTP.get({
                    url: m.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
                    query: {
                        guild_ids: e
                    }
                }),
                n = t.body.map(e => (0, c.soundboardSoundFromAPI)(e, p.DEFAULT_SOUND_GUILD_ID));
            s.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                soundboardSounds: n
            })
        } catch (e) {
            throw s.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
            }), new o.default(e)
        }
    }, y = e => new Promise(t => {
        let n = () => {
            s.default.unsubscribe(e, n), setTimeout(t, 0)
        };
        s.default.subscribe(e, n)
    }), g = e => {
        if (!d.default.shouldFetchDefaultSounds()) return Promise.resolve();
        s.default.dispatch({
            type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
        });
        let t = y("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
        return E(e), t
    }, S = () => {
        let e = (0, f.getGuildIdsToFetchSoundsFor)();
        if (0 === e.length) return Promise.resolve();
        let t = y("SOUNDBOARD_SOUNDS_RECEIVED");
        return s.default.dispatch({
            type: "GUILD_SOUNDBOARD_FETCH"
        }), s.default.dispatch({
            type: "REQUEST_SOUNDBOARD_SOUNDS",
            guildIds: e
        }), t
    }, C = () => __OVERLAY__ ? (s.default.dispatch({
        type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
    }), Promise.all([])) : Promise.all([g(), S()]);
    async function _(e) {
        let {
            guildId: t,
            name: n,
            sound: i,
            volume: l,
            emojiId: s,
            emojiName: r
        } = e, o = await a.HTTP.post({
            url: m.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: i,
                volume: l,
                emoji_id: s,
                emoji_name: r
            }
        }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
        return u
    }
    async function T(e) {
        let {
            guildId: t,
            soundId: n,
            name: i,
            volume: l,
            emojiId: s,
            emojiName: r
        } = e, o = await a.HTTP.patch({
            url: m.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: i,
                volume: l,
                emoji_id: s,
                emoji_name: r
            }
        }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
        return u
    }
    async function I(e, t) {
        await a.HTTP.del({
            url: m.Endpoints.GUILD_SOUNDBOARD_SOUND(e, t),
            oldFormErrors: !0
        })
    }

    function v(e) {
        u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => l.size(t.soundIds) >= h.MAX_FAVORITES ? (r.default.show({
            title: x.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
            body: x.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                count: h.MAX_FAVORITES
            })
        }), !1) : !t.soundIds.includes(e) && void t.soundIds.push(e), h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function N(e) {
        u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => {
            t.soundIds = t.soundIds.filter(t => t !== e)
        }, h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function A(e, t, n) {
        s.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
            sound: t,
            channelId: e,
            trigger: n
        })
    }

    function O(e, t) {
        s.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
            soundId: e,
            userId: t
        })
    }

    function R(e, t) {
        s.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
            soundId: e,
            userId: t
        })
    }

    function M(e) {
        s.default.dispatch({
            type: "USER_SOUNDBOARD_SET_VOLUME",
            volume: e
        })
    }

    function k(e) {
        s.default.dispatch({
            type: "SOUNDBOARD_MUTE_JOIN_SOUND",
            channelId: e
        })
    }
}