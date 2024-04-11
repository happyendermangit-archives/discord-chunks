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
            return v
        },
        reportSoundStartedPlaying: function() {
            return D
        },
        updateSound: function() {
            return p
        },
        updateUserSoundboardVolume: function() {
            return M
        },
        uploadSound: function() {
            return O
        }
    }), n("47120"), n("653041");
    var i = n("392711"),
        r = n.n(i),
        s = n("544891"),
        a = n("570140"),
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
            let t = (await s.HTTP.get({
                url: I.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
                query: {
                    guild_ids: e
                }
            })).body.map(e => (0, _.soundboardSoundFromAPI)(e, E.DEFAULT_SOUND_GUILD_ID));
            a.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                soundboardSounds: t
            })
        } catch (e) {
            throw a.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
            }), new l.default(e)
        }
    }, A = e => new Promise(t => {
        let n = () => {
            a.default.unsubscribe(e, n), setTimeout(t, 0)
        };
        a.default.subscribe(e, n)
    }), h = e => {
        if (!d.default.shouldFetchDefaultSounds()) return Promise.resolve();
        a.default.dispatch({
            type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
        });
        let t = A("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
        return S(e), t
    }, m = () => {
        let e = (0, c.getGuildIdsToFetchSoundsFor)();
        if (0 === e.length) return Promise.resolve();
        let t = A("SOUNDBOARD_SOUNDS_RECEIVED");
        return a.default.dispatch({
            type: "GUILD_SOUNDBOARD_FETCH"
        }), a.default.dispatch({
            type: "REQUEST_SOUNDBOARD_SOUNDS",
            guildIds: e
        }), t
    }, N = () => __OVERLAY__ ? (a.default.dispatch({
        type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
    }), Promise.all([])) : Promise.all([h(), m()]);
    async function O(e) {
        let {
            guildId: t,
            name: n,
            sound: i,
            volume: r,
            emojiId: a,
            emojiName: o
        } = e, l = await s.HTTP.post({
            url: I.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
            body: {
                name: n,
                sound: i,
                volume: r,
                emoji_id: a,
                emoji_name: o
            }
        });
        return (0, _.soundboardSoundFromAPI)(l.body, t)
    }
    async function p(e) {
        let {
            guildId: t,
            soundId: n,
            name: i,
            volume: r,
            emojiId: a,
            emojiName: o
        } = e, l = await s.HTTP.patch({
            url: I.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
            body: {
                name: i,
                volume: r,
                emoji_id: a,
                emoji_name: o
            }
        });
        return (0, _.soundboardSoundFromAPI)(l.body, t)
    }
    async function R(e, t) {
        await s.HTTP.del({
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
        a.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
            sound: t,
            channelId: e,
            trigger: n
        })
    }

    function D(e, t) {
        a.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
            soundId: e,
            userId: t
        })
    }

    function v(e, t) {
        a.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
            soundId: e,
            userId: t
        })
    }

    function M(e) {
        a.default.dispatch({
            type: "USER_SOUNDBOARD_SET_VOLUME",
            volume: e
        })
    }

    function y(e) {
        a.default.dispatch({
            type: "SOUNDBOARD_MUTE_JOIN_SOUND",
            channelId: e
        })
    }
}