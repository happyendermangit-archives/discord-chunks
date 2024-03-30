function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deleteEmoji: function() {
            return S
        },
        favoriteEmoji: function() {
            return b
        },
        fetchEmoji: function() {
            return O
        },
        setDiversityColor: function() {
            return h
        },
        unfavoriteEmoji: function() {
            return N
        },
        updateEmoji: function() {
            return v
        },
        uploadEmoji: function() {
            return T
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("967888"),
        a = n("700449"),
        u = n("629815"),
        s = n("375314"),
        l = n("300983"),
        c = n("27375"),
        f = n("950879"),
        d = n("968574"),
        _ = n("489763"),
        E = n("483587"),
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
        d.PreloadedUserSettingsActionCreators.updateAsync("textAndImages", function(t) {
            t.diversitySurrogate = a.StringValue.create(), t.diversitySurrogate.value = e
        }, m.UserSettingsDelay.FREQUENT_USER_ACTION)
    }

    function O(e) {
        u.default.dispatch({
            type: "EMOJI_FETCH",
            guildId: e
        }), i.HTTP.get({
            url: p.Endpoints.GUILD_EMOJIS(e),
            oldFormErrors: !0
        }).then(function(t) {
            return u.default.dispatch({
                type: "EMOJI_FETCH_SUCCESS",
                guildId: e,
                emojis: t.body
            })
        }, function() {
            return u.default.dispatch({
                type: "EMOJI_FETCH_FAILURE",
                guildId: e
            })
        })
    }

    function T(e) {
        var t = e.guildId,
            n = e.image,
            r = e.name,
            o = e.roles;
        return u.default.dispatch({
            type: "EMOJI_UPLOAD_START",
            guildId: t
        }), i.HTTP.post({
            url: p.Endpoints.GUILD_EMOJIS(t),
            body: {
                image: n,
                name: r,
                roles: o
            },
            oldFormErrors: !0
        }).then(function() {
            return u.default.dispatch({
                type: "EMOJI_UPLOAD_STOP",
                guildId: t
            })
        }, function(e) {
            return u.default.dispatch({
                type: "EMOJI_UPLOAD_STOP",
                guildId: t
            }), Promise.reject(e)
        })
    }

    function S(e, t) {
        return u.default.dispatch({
            type: "EMOJI_DELETE",
            guildId: e,
            emojiId: t
        }), i.HTTP.del({
            url: p.Endpoints.GUILD_EMOJI(e, t),
            oldFormErrors: !0
        })
    }

    function v(e) {
        return g.apply(this, arguments)
    }

    function g() {
        var e;
        return e = function(e) {
            var t, n, r, o, a;
            return function(e, t) {
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
            }(this, function(u) {
                switch (u.label) {
                    case 0:
                        t = e.guildId, n = e.emojiId, r = e.name, o = e.roles, u.label = 1;
                    case 1:
                        return u.trys.push([1, 3, , 4]), [4, i.HTTP.patch({
                            url: p.Endpoints.GUILD_EMOJI(t, n),
                            body: {
                                name: r,
                                roles: o
                            },
                            oldFormErrors: !0
                        })];
                    case 2:
                        return [2, u.sent()];
                    case 3:
                        throw a = u.sent(), new s.default(a);
                    case 4:
                        return [2]
                }
            })
        }, (g = function() {
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
        }).apply(this, arguments)
    }

    function A(e) {
        return _.default.totalUnavailableGuilds > 0 || !f.default.isConnected() ? e : e.filter(function(e) {
            var t;
            return null != (null !== (t = l.default.getCustomEmojiById(e)) && void 0 !== t ? t : c.default.getByName(e))
        })
    }

    function b(e) {
        var t;
        (function(e) {
            null != e && d.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", function(t) {
                return (t.emojis = A(t.emojis), o().size(t.emojis) >= m.MAX_FAVORITES) ? (E.default.show({
                    title: y.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                    body: y.default.Messages.FAVORITES_LIMIT_REACHED_BODY.format({
                        count: m.MAX_FAVORITES
                    })
                }), !1) : !t.emojis.includes(e) && void t.emojis.push(e)
            }, m.UserSettingsDelay.INFREQUENT_USER_ACTION)
        })(null !== (t = e.id) && void 0 !== t ? t : e.name)
    }

    function N(e) {
        var t;
        (function(e) {
            null != e && d.FrecencyUserSettingsActionCreators.updateAsync("favoriteEmojis", function(t) {
                if (!t.emojis.includes(e)) return !1;
                t.emojis = t.emojis.filter(function(t) {
                    return e !== t
                }), t.emojis = A(t.emojis)
            }, m.UserSettingsDelay.INFREQUENT_USER_ACTION)
        })(null !== (t = e.id) && void 0 !== t ? t : e.name)
    }
}