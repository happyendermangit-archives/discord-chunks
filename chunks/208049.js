function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addFavoriteSound: function() {
            return C
        },
        deleteSound: function() {
            return R
        },
        maybeFetchSoundboardSounds: function() {
            return N
        },
        muteCustomJoinSound: function() {
            return y
        },
        playSoundLocally: function() {
            return L
        },
        removeFavoriteSound: function() {
            return g
        },
        reportSoundFinishedPlaying: function() {
            return D
        },
        reportSoundStartedPlaying: function() {
            return v
        },
        updateSound: function() {
            return O
        },
        updateUserSoundboardVolume: function() {
            return M
        },
        uploadSound: function() {
            return p
        }
    }), n("47120"), n("653041");
    var i = n("392711"),
        r = n.n(i),
        a = n("544891"),
        s = n("570140"),
        o = n("668781"),
        l = n("479531"),
        u = n("675478"),
        d = n("763296"),
        _ = n("697426"),
        c = n("174470"),
        E = n("710111"),
        I = n("981631"),
        T = n("526761"),
        f = n("689938");
    let S = async e => {
        try {
            let t = (await a.HTTP.get({
                url: I.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
                query: {
                    guild_ids: e
                }
            })).body.map(e => (0, _.soundboardSoundFromAPI)(e, E.DEFAULT_SOUND_GUILD_ID));
            s.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                soundboardSounds: t
            })
        } catch (e) {
            throw s.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
            }), new l.default(e)
        }
    }, h = e => new Promise(t => {
        let n = () => {
            s.default.unsubscribe(e, n), setTimeout(t, 0)
        };
        s.default.subscribe(e, n)
    }), A = e => {
        if (!d.default.shouldFetchDefaultSounds()) return Promise.resolve();
        s.default.dispatch({
            type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
        });
        let t = h("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
        return S(e), t
    }, m = () => {
        let e = (0, c.getGuildIdsToFetchSoundsFor)();
        if (0 === e.length) return Promise.resolve();
        let t = h("SOUNDBOARD_SOUNDS_RECEIVED");
        return s.default.dispatch({
            type: "GUILD_SOUNDBOARD_FETCH"
        }), s.default.dispatch({
            type: "REQUEST_SOUNDBOARD_SOUNDS",
            guildIds: e
        }), t
    }, N = () => __OVERLAY__ ? (s.default.dispatch({
        type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
    }), Promise.all([])) : Promise.all([A(), m()]);
    async function p(e) {
        let {
            guildId: t,
            name: n,
            sound: i,
            volume: r,
            emojiId: s,
            emojiName: o
        } = e, l = await a.HTTP.post({
            url: I.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: i,
                volume: r,
                emoji_id: s,
                emoji_name: o
            }
        });
        return (0, _.soundboardSoundFromAPI)(l.body, t)
    }
    async function O(e) {
        let {
            guildId: t,
            soundId: n,
            name: i,
            volume: r,
            emojiId: s,
            emojiName: o
        } = e, l = await a.HTTP.patch({
            url: I.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: i,
                volume: r,
                emoji_id: s,
                emoji_name: o
            }
        });
        return (0, _.soundboardSoundFromAPI)(l.body, t)
    }
    async function R(e, t) {
        await a.HTTP.del({
            url: I.Endpoints.GUILD_SOUNDBOARD_SOUND(e, t),
            oldFormErrors: !0
        })
    }

    function C(e) {
        u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => r().size(t.soundIds) >= T.MAX_FAVORITES ? (o.default.show({
            title: f.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
            body: f.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                count: T.MAX_FAVORITES
            })
        }), !1) : !t.soundIds.includes(e) && void t.soundIds.push(e), T.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function g(e) {
        u.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", t => {
            t.soundIds = t.soundIds.filter(t => t !== e)
        }, T.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function L(e, t, n) {
        s.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
            sound: t,
            channelId: e,
            trigger: n
        })
    }

    function v(e, t) {
        s.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
            soundId: e,
            userId: t
        })
    }

    function D(e, t) {
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

    function y(e) {
        s.default.dispatch({
            type: "SOUNDBOARD_MUTE_JOIN_SOUND",
            channelId: e
        })
    }
}