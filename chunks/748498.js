function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearErrors: function() {
            return A
        },
        closeGuildIdentitySettings: function() {
            return d
        },
        initGuildIdentitySettings: function() {
            return f
        },
        resetAllPending: function() {
            return g
        },
        resetAndCloseGuildIdentityForm: function() {
            return _
        },
        resetPendingMemberChanges: function() {
            return S
        },
        resetPendingProfileChanges: function() {
            return v
        },
        saveGuildIdentityChanges: function() {
            return s
        },
        setCurrentGuild: function() {
            return c
        },
        setDisableSubmit: function() {
            return b
        },
        setPendingAvatar: function() {
            return E
        },
        setPendingAvatarDecoration: function() {
            return p
        },
        setPendingBanner: function() {
            return y
        },
        setPendingBio: function() {
            return I
        },
        setPendingNickname: function() {
            return O
        },
        setPendingProfileEffectId: function() {
            return m
        },
        setPendingPronouns: function() {
            return h
        },
        setPendingThemeColors: function() {
            return T
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("78928"),
        a = n("281767");

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function s(e, t) {
        return l.apply(this, arguments)
    }

    function l() {
        var e;
        return e = function(e, t) {
            var n, i, u, s, l, c, f;
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
            }(this, function(d) {
                switch (d.label) {
                    case 0:
                        if (n = t.nick, i = t.avatar, u = t.avatarDecoration, null == e) throw Error("Need guildId");
                        o.default.dispatch({
                            type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                        }), s = {
                            nick: n,
                            avatar: i,
                            avatar_decoration_id: null === u ? null : null == u ? void 0 : u.id,
                            avatar_decoration_sku_id: null === u ? null : null == u ? void 0 : u.skuId
                        }, d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]), [4, r.HTTP.patch({
                            url: a.Endpoints.SET_GUILD_MEMBER(e),
                            body: s,
                            oldFormErrors: !0
                        })];
                    case 2:
                        return l = d.sent(), o.default.dispatch({
                            type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                        }), o.default.dispatch({
                            type: "GUILD_MEMBER_PROFILE_UPDATE",
                            guildMember: l.body,
                            guildId: e
                        }), [2, l];
                    case 3:
                        return (null == (f = (c = d.sent()).body) ? void 0 : f.username) != null && (f.nick = f.username, delete f.username), o.default.dispatch({
                            type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                            errors: c.body
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        }, (l = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    u(i, r, o, a, s, "next", e)
                }

                function s(e) {
                    u(i, r, o, a, s, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function c(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
            guild: e
        })
    }

    function f(e, t) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_INIT",
            guild: e,
            analyticsLocations: t
        })
    }

    function d() {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_CLOSE"
        }), (0, i.popLayer)()
    }

    function _() {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
        })
    }

    function E(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
            avatar: e
        })
    }

    function p(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION",
            avatarDecoration: e
        })
    }

    function m(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID",
            profileEffectId: e
        })
    }

    function y(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
            banner: e
        })
    }

    function I(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
            bio: e
        })
    }

    function h(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
            pronouns: e
        })
    }

    function O(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
            nickname: e
        })
    }

    function T(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
            themeColors: e
        })
    }

    function S() {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
        })
    }

    function v() {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
        })
    }

    function g() {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
        })
    }

    function A() {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
        })
    }

    function b(e) {
        o.default.dispatch({
            type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
            disable: e
        })
    }
}