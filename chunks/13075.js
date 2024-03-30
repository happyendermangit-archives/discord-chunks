function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        addStickerPreview: function() {
            return B
        },
        clearStickerPreview: function() {
            return j
        },
        createGuildSticker: function() {
            return k
        },
        deleteGuildSticker: function() {
            return w
        },
        favoriteSticker: function() {
            return V
        },
        fetchGuildStickers: function() {
            return U
        },
        fetchSticker: function() {
            return M
        },
        fetchStickerPack: function() {
            return D
        },
        fetchStickerPacks: function() {
            return L
        },
        unfavoriteSticker: function() {
            return H
        },
        updateGuildSticker: function() {
            return G
        }
    });
    var r, o, i, a, u, s, l, c = n("392711"),
        f = n.n(c),
        d = n("967888"),
        _ = n("629815"),
        E = n("483587"),
        p = n("950879"),
        m = n("225098"),
        y = n("968574"),
        I = n("428009"),
        h = n("489763"),
        O = n("208454"),
        T = n("329903"),
        S = n("389712"),
        v = n("281767"),
        g = n("382021"),
        A = n("941504");

    function b(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function N(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    b(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    b(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function R(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function C(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function P(e, t) {
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
    var D = (r = N(function(e, t) {
        var n;
        return P(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, (0, T.httpGetWithCountryCodeQuery)(v.Endpoints.STICKER_PACK(e))];
                case 1:
                    return n = r.sent().body, _.default.dispatch({
                        type: "STICKER_PACK_FETCH_SUCCESS",
                        packId: e,
                        pack: n,
                        ingestStickers: t
                    }), [2, n]
            }
        })
    }), function(e, t) {
        return r.apply(this, arguments)
    });
    var L = (o = N(function() {
        var e, t, n, r = arguments;
        return P(this, function(o) {
            switch (o.label) {
                case 0:
                    if (t = void 0 === (e = (r.length > 0 && void 0 !== r[0] ? r[0] : {}).locale) ? m.default.locale : e, S.default.isFetchingStickerPacks || S.default.hasLoadedStickerPacks) return [2];
                    return _.default.wait(function() {
                        _.default.dispatch({
                            type: "STICKER_PACKS_FETCH_START"
                        })
                    }), [4, d.HTTP.get({
                        url: v.Endpoints.STICKER_PACKS,
                        query: {
                            locale: t
                        }
                    })];
                case 1:
                    return n = o.sent().body.sticker_packs, _.default.dispatch({
                        type: "STICKER_PACKS_FETCH_SUCCESS",
                        packs: n
                    }), [2]
            }
        })
    }), function() {
        return o.apply(this, arguments)
    });
    var M = (i = N(function(e) {
        var t;
        return P(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, d.HTTP.get({
                        url: v.Endpoints.STICKER(e)
                    })];
                case 1:
                    return t = n.sent().body, _.default.dispatch({
                        type: "STICKER_FETCH_SUCCESS",
                        sticker: t
                    }), [2]
            }
        })
    }), function(e) {
        return i.apply(this, arguments)
    });
    var U = (a = N(function(e) {
        var t;
        return P(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, d.HTTP.get({
                        url: v.Endpoints.GUILD_STICKER_PACKS(e)
                    })];
                case 1:
                    return t = n.sent().body, _.default.dispatch({
                        type: "GUILD_STICKERS_FETCH_SUCCESS",
                        guildId: e,
                        stickers: t.map(function(e) {
                            return null != e.user ? C(R({}, e), {
                                user: new I.default(e.user)
                            }) : e
                        })
                    }), [2]
            }
        })
    }), function(e) {
        return a.apply(this, arguments)
    });
    var w = (u = N(function(e) {
        return P(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, d.HTTP.del({
                        url: v.Endpoints.GUILD_STICKER(e.guild_id, e.id)
                    })];
                case 1:
                    return t.sent(), [2]
            }
        })
    }), function(e) {
        return u.apply(this, arguments)
    });
    var k = (s = N(function(e, t) {
        var n;
        return P(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, d.HTTP.post({
                        url: v.Endpoints.GUILD_STICKER_PACKS(e),
                        body: t
                    })];
                case 1:
                    return n = r.sent(), _.default.dispatch({
                        type: "GUILD_STICKERS_CREATE_SUCCESS",
                        guildId: e,
                        sticker: C(R({}, n.body), {
                            user: O.default.getCurrentUser()
                        })
                    }), [2, n.body]
            }
        })
    }), function(e, t) {
        return s.apply(this, arguments)
    });
    var G = (l = N(function(e, t, n) {
        return P(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, d.HTTP.patch({
                        url: v.Endpoints.GUILD_STICKER(e, t),
                        body: n
                    })];
                case 1:
                    return [2, r.sent().body]
            }
        })
    }), function(e, t, n) {
        return l.apply(this, arguments)
    });

    function B(e, t, n) {
        _.default.dispatch({
            type: "ADD_STICKER_PREVIEW",
            channelId: e,
            sticker: t,
            draftType: n
        })
    }

    function j(e, t) {
        _.default.dispatch({
            type: "CLEAR_STICKER_PREVIEW",
            channelId: e,
            draftType: t
        })
    }

    function F(e) {
        return h.default.totalUnavailableGuilds > 0 || !p.default.isConnected() ? e : e.filter(function(e) {
            return null != S.default.getStickerById(e)
        })
    }

    function V(e) {
        y.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", function(t) {
            return (t.stickerIds = F(t.stickerIds), f().size(t.stickerIds) >= g.MAX_FAVORITES) ? (E.default.show({
                title: A.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                body: A.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                    count: g.MAX_FAVORITES
                })
            }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e)
        }, g.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }

    function H(e) {
        y.FrecencyUserSettingsActionCreators.updateAsync("favoriteStickers", function(t) {
            t.stickerIds = t.stickerIds.filter(function(t) {
                return t !== e
            }), t.stickerIds = F(t.stickerIds)
        }, g.UserSettingsDelay.INFREQUENT_USER_ACTION)
    }
}