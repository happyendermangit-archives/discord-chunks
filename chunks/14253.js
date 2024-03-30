function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addFavoriteSound: function() {
            return L
        },
        deleteSound: function() {
            return P
        },
        maybeFetchSoundboardSounds: function() {
            return A
        },
        muteCustomJoinSound: function() {
            return B
        },
        playSoundLocally: function() {
            return U
        },
        removeFavoriteSound: function() {
            return M
        },
        reportSoundFinishedPlaying: function() {
            return k
        },
        reportSoundStartedPlaying: function() {
            return w
        },
        updateSound: function() {
            return R
        },
        updateUserSoundboardVolume: function() {
            return G
        },
        uploadSound: function() {
            return b
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("967888"),
        u = n("629815"),
        s = n("483587"),
        l = n("375314"),
        c = n("968574"),
        f = n("452700"),
        d = n("686309"),
        _ = n("340045"),
        E = n("571336"),
        p = n("281767"),
        m = n("382021"),
        y = n("941504");

    function I(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function h(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    I(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    I(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function O(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var T = (r = h(function(e) {
            var t, n;
            return O(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), [4, a.HTTP.get({
                            url: p.Endpoints.SOUNDBOARD_DEFAULT_SOUNDS,
                            query: {
                                guild_ids: e
                            }
                        })];
                    case 1:
                        return t = r.sent().body.map(function(e) {
                            return (0, d.soundboardSoundFromAPI)(e, E.DEFAULT_SOUND_GUILD_ID)
                        }), u.default.dispatch({
                            type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS",
                            soundboardSounds: t
                        }), [3, 3];
                    case 2:
                        throw n = r.sent(), u.default.dispatch({
                            type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS_FAILURE"
                        }), new l.default(n);
                    case 3:
                        return [2]
                }
            })
        }), function(e) {
            return r.apply(this, arguments)
        }),
        S = function(e) {
            return new Promise(function(t) {
                var n = function() {
                    u.default.unsubscribe(e, n), setTimeout(t, 0)
                };
                u.default.subscribe(e, n)
            })
        },
        v = function(e) {
            if (!f.default.shouldFetchDefaultSounds()) return Promise.resolve();
            u.default.dispatch({
                type: "SOUNDBOARD_FETCH_DEFAULT_SOUNDS"
            });
            var t = S("SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS");
            return T(e), t
        },
        g = function() {
            var e = (0, _.getGuildIdsToFetchSoundsFor)();
            if (0 === e.length) return Promise.resolve();
            var t = S("SOUNDBOARD_SOUNDS_RECEIVED");
            return u.default.dispatch({
                type: "GUILD_SOUNDBOARD_FETCH"
            }), u.default.dispatch({
                type: "REQUEST_SOUNDBOARD_SOUNDS",
                guildIds: e
            }), t
        },
        A = function() {
            return __OVERLAY__ ? (u.default.dispatch({
                type: "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST"
            }), Promise.all([])) : Promise.all([v(), g()])
        };

    function b(e) {
        return N.apply(this, arguments)
    }

    function N() {
        return (N = h(function(e) {
            var t, n, r, o, i, u, s;
            return O(this, function(l) {
                switch (l.label) {
                    case 0:
                        return t = e.guildId, n = e.name, r = e.sound, o = e.volume, i = e.emojiId, u = e.emojiName, [4, a.HTTP.post({
                            url: p.Endpoints.GUILD_SOUNDBOARD_SOUNDS(t),
                            body: {
                                name: n,
                                sound: r,
                                volume: o,
                                emoji_id: i,
                                emoji_name: u
                            }
                        })];
                    case 1:
                        return s = l.sent(), [2, (0, d.soundboardSoundFromAPI)(s.body, t)]
                }
            })
        })).apply(this, arguments)
    }

    function R(e) {
        return C.apply(this, arguments)
    }

    function C() {
        return (C = h(function(e) {
            var t, n, r, o, i, u, s;
            return O(this, function(l) {
                switch (l.label) {
                    case 0:
                        return t = e.guildId, n = e.soundId, r = e.name, o = e.volume, i = e.emojiId, u = e.emojiName, [4, a.HTTP.patch({
                            url: p.Endpoints.GUILD_SOUNDBOARD_SOUND(t, n),
                            body: {
                                name: r,
                                volume: o,
                                emoji_id: i,
                                emoji_name: u
                            }
                        })];
                    case 1:
                        return s = l.sent(), [2, (0, d.soundboardSoundFromAPI)(s.body, t)]
                }
            })
        })).apply(this, arguments)
    }

    function P(e, t) {
        return D.apply(this, arguments)
    }

    function D() {
        return (D = h(function(e, t) {
            return O(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, a.HTTP.del({
                            url: p.Endpoints.GUILD_SOUNDBOARD_SOUND(e, t),
                            oldFormErrors: !0
                        })];
                    case 1:
                        return n.sent(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function L(e) {
        c.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", function(t) {
            return i().size(t.soundIds) >= m.MAX_FAVORITES ? (s.default.show({
                title: y.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: y.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                    count: m.MAX_FAVORITES
                })
            }), !1) : !t.soundIds.includes(e) && void t.soundIds.push(e)
        }, m.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function M(e) {
        c.FrecencyUserSettingsActionCreators.updateAsync("favoriteSoundboardSounds", function(t) {
            t.soundIds = t.soundIds.filter(function(t) {
                return t !== e
            })
        }, m.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function U(e, t, n) {
        u.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
            sound: t,
            channelId: e,
            trigger: n
        })
    }

    function w(e, t) {
        u.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_START",
            soundId: e,
            userId: t
        })
    }

    function k(e, t) {
        u.default.dispatch({
            type: "GUILD_SOUNDBOARD_SOUND_PLAY_END",
            soundId: e,
            userId: t
        })
    }

    function G(e) {
        u.default.dispatch({
            type: "USER_SOUNDBOARD_SET_VOLUME",
            volume: e
        })
    }

    function B(e) {
        u.default.dispatch({
            type: "SOUNDBOARD_MUTE_JOIN_SOUND",
            channelId: e
        })
    }
}