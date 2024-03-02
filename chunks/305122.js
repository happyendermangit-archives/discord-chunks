function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeFetchSoundboardSounds: function() {
            return I
        },
        uploadSound: function() {
            return v
        },
        updateSound: function() {
            return _
        },
        deleteSound: function() {
            return N
        },
        addFavoriteSound: function() {
            return A
        },
        removeFavoriteSound: function() {
            return x
        },
        playSoundLocally: function() {
            return y
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
            return L
        }
    }), n("222007"), n("424973");
    var l = n("917351"),
        i = n.n(l),
        a = n("872717"),
        s = n("913144"),
        r = n("404118"),
        o = n("599417"),
        u = n("872173"),
        d = n("235004"),
        c = n("389480"),
        f = n("24156"),
        m = n("846325"),
        p = n("49111"),
        h = n("397336"),
        E = n("782340");
    let g = async e => {
        try {
            let t = await a.default.get({
                    url: p.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
                    query: {
                        guild_ids: e
                    }
                }),
                n = t.body.map(e => (0, c.soundboardSoundFromAPI)(e, m.DEFAULT_SOUND_GUILD_ID));
            s.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                soundboardSounds: n
            })
        } catch (e) {
            throw s.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
            }), new o.default(e)
        }
    }, C = e => new Promise(t => {
        let n = () => {
            s.default.unsubscribe(e, n), setTimeout(t, 0)
        };
        s.default.subscribe(e, n)
    }), S = e => {
        if (!d.default.shouldFetchDefaultSounds()) return Promise.resolve();
        s.default.dispatch({
            type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
        });
        let t = C("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
        return g(e), t
    }, T = () => {
        let e = (0, f.getGuildIdsToFetchSoundsFor)();
        if (0 === e.length) return Promise.resolve();
        let t = C("SOUNDBOARD_SOUNDS_RECEIVED");
        return s.default.dispatch({
            type: "GUILD_SOUNDBOARD_FETCH"
        }), s.default.dispatch({
            type: "REQUEST_SOUNDBOARD_SOUNDS",
            guildIds: e
        }), t
    }, I = () => __OVERLAY__ ? (s.default.dispatch({
        type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
    }), Promise.all([])) : Promise.all([S(), T()]);
    async function v(e) {
        let {
            guildId: t,
            name: n,
            sound: l,
            volume: i,
            emojiId: s,
            emojiName: r
        } = e, o = await a.default.post({
            url: p.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: l,
                volume: i,
                emoji_id: s,
                emoji_name: r
            }
        }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
        return u
    }
    async function _(e) {
        let {
            guildId: t,
            soundId: n,
            name: l,
            volume: i,
            emojiId: s,
            emojiName: r
        } = e, o = await a.default.patch({
            url: p.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: l,
                volume: i,
                emoji_id: s,
                emoji_name: r
            }
        }), u = (0, c.soundboardSoundFromAPI)(o.body, t);
        return u
    }
    async function N(e, t) {
        await a.default.delete({
            url: p.Endpoints.GUILD_SOUNDBOARD_SOUND(e, t),
            oldFormErrors: !0
        })
    }

    function A(e) {
        u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => i.size(t.soundIds) >= h.MAX_FAVORITES ? (r.default.show({
            title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
            body: E.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                count: h.MAX_FAVORITES
            })
        }), !1) : !t.soundIds.includes(e) && void t.soundIds.push(e), h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function x(e) {
        u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => {
            t.soundIds = t.soundIds.filter(t => t !== e)
        }, h.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function y(e, t, n) {
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

    function L(e) {
        s.default.dispatch({
            type: "SOUNDBOARD_MUTE_JOIN_SOUND",
            channelId: e
        })
    }
}