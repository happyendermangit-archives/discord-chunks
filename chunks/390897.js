function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acceptWhitelist: function() {
            return f
        },
        authorize: function() {
            return d
        },
        fetchAuthorization: function() {
            return E
        },
        fetchChannels: function() {
            return m
        },
        finishUserCode: function() {
            return T
        },
        finishUserCodeTwoWayLinkError: function() {
            return v
        },
        logoutWithRedirect: function() {
            return I
        },
        verifyUserCode: function() {
            return h
        }
    });
    var r = n("571979"),
        o = n("389380"),
        i = n("967888"),
        a = n("493174"),
        u = n("281767");

    function s(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function l(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    s(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    s(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function c(e, t) {
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

    function f(e) {
        return i.HTTP.post({
            url: u.Endpoints.OAUTH2_WHITELIST_ACCEPT,
            query: {
                token: e
            },
            oldFormErrors: !0
        })
    }

    function d(e) {
        return _.apply(this, arguments)
    }

    function _() {
        return (_ = l(function(e) {
            var t, n, r, o, a, s, l, f, d, _, E, p;
            return c(this, function(c) {
                switch (c.label) {
                    case 0:
                        return t = e.authorize, n = e.clientId, r = e.scopes, o = e.responseType, a = e.redirectUri, s = e.codeChallenge, l = e.codeChallengeMethod, f = e.state, d = e.permissions, _ = e.guildId, E = e.channelId, p = e.integrationType, [4, i.HTTP.post({
                            url: u.Endpoints.OAUTH2_AUTHORIZE,
                            query: {
                                client_id: n,
                                response_type: o,
                                redirect_uri: a,
                                code_challenge: s,
                                code_challenge_method: l,
                                scope: r.join(" "),
                                state: f
                            },
                            body: {
                                guild_id: _,
                                webhook_channel_id: null != _ && null != E ? E : void 0,
                                channel_id: null == _ && null != E ? E : void 0,
                                permissions: d,
                                authorize: t,
                                integration_type: p
                            },
                            oldFormErrors: !0
                        })];
                    case 1:
                        return [2, c.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function E(e) {
        return p.apply(this, arguments)
    }

    function p() {
        return (p = l(function(e) {
            var t, n, o, a, s, l, f, d;
            return c(this, function(c) {
                switch (c.label) {
                    case 0:
                        return t = e.clientId, n = e.scopes, o = e.responseType, a = e.redirectUri, s = e.codeChallenge, l = e.codeChallengeMethod, f = e.state, d = e.userInstall, [4, i.HTTP.get({
                            url: u.Endpoints.OAUTH2_AUTHORIZE,
                            query: {
                                client_id: t,
                                response_type: o,
                                redirect_uri: a,
                                code_challenge: s,
                                code_challenge_method: l,
                                scope: n.join(" "),
                                state: f,
                                integration_type: d ? r.ApplicationIntegrationType.USER_INSTALL : r.ApplicationIntegrationType.GUILD_INSTALL
                            },
                            retries: 3,
                            oldFormErrors: !0
                        })];
                    case 1:
                        return [2, c.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function m(e) {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = l(function(e) {
            return c(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, i.HTTP.get({
                            url: u.Endpoints.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS,
                            query: {
                                guild_id: e
                            },
                            oldFormErrors: !0
                        })];
                    case 1:
                        return [2, t.sent().body]
                }
            })
        })).apply(this, arguments)
    }

    function I(e) {
        a.default.logout((0, o.getLoginPath)(e.pathname + e.search, !1))
    }

    function h(e) {
        return O.apply(this, arguments)
    }

    function O() {
        return (O = l(function(e) {
            return c(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, i.HTTP.post({
                            url: u.Endpoints.OAUTH2_DEVICE_VERIFY,
                            body: {
                                user_code: e
                            }
                        })];
                    case 1:
                        return [2, t.sent()]
                }
            })
        })).apply(this, arguments)
    }

    function T(e, t) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = l(function(e, t) {
            return c(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, i.HTTP.post({
                            url: u.Endpoints.OAUTH2_DEVICE_FINISH,
                            body: {
                                user_code: e,
                                result: t
                            }
                        })];
                    case 1:
                        return [2, n.sent()]
                }
            })
        })).apply(this, arguments)
    }

    function v(e, t, n) {
        return g.apply(this, arguments)
    }

    function g() {
        return (g = l(function(e, t, n) {
            return c(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, i.HTTP.post({
                            url: u.Endpoints.OAUTH2_DEVICE_FINISH,
                            body: {
                                user_code: e,
                                result: "two_way_link_error",
                                error_code: t,
                                error_source: n
                            }
                        })];
                    case 1:
                        return [2, r.sent()]
                }
            })
        })).apply(this, arguments)
    }
}