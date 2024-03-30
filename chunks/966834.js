function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SpotifyAPI: function() {
            return _
        },
        fetchIsSpotifyProtocolRegistered: function() {
            return h
        },
        getAccessToken: function() {
            return E
        },
        getDevices: function() {
            return m
        },
        getProfile: function() {
            return p
        },
        pause: function() {
            return I
        },
        play: function() {
            return y
        },
        setActiveDevice: function() {
            return O
        },
        subscribePlayerStateNotifications: function() {
            return function e(t, n, r) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                return _.put(t, n, {
                    url: c.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
                    query: {
                        connection_id: r
                    }
                }).catch(function(a) {
                    return i <= 0 ? Promise.reject(a) : (0, o.timeoutPromise)(5e3).then(function() {
                        return e(t, n, r, i - 1)
                    })
                })
            }
        }
    });
    var r = n("967888"),
        o = n("945816"),
        i = n("629815"),
        a = n("388990"),
        u = n("173862"),
        s = n("374550"),
        l = n("222577"),
        c = n("935776"),
        f = n("281767");

    function d(e, t, n, r) {
        var i, a, u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        return i = function(e) {
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
        }({}, r), a = (a = {
            headers: {
                authorization: "Bearer ".concat(n)
            }
        }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(a)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), e(r = i).then(function(e) {
            return 202 === e.status ? Promise.reject(e) : e
        }).catch(function(n) {
            var i = !0 !== r.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || i) && u > 0 ? (202 === n.status ? (0, o.timeoutPromise)(5e3) : Promise.resolve()).then(function() {
                return E(t)
            }).then(function(n) {
                return d(e, t, n.body.access_token, r, u - 1)
            }).then(function(e) {
                return new Promise(function(t) {
                    return setImmediate(function() {
                        return t(e)
                    })
                })
            }) : Promise.reject(n)
        })
    }
    var _ = {
        get: d.bind(null, r.HTTP.get),
        put: d.bind(null, r.HTTP.put)
    };

    function E(e) {
        return r.HTTP.get({
            url: f.Endpoints.CONNECTION_ACCESS_TOKEN(f.PlatformTypes.SPOTIFY, e),
            oldFormErrors: !0
        }).catch(function(t) {
            if (401 === t.status) i.default.dispatch({
                type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
                accountId: e
            });
            else if (429 === t.status) {
                var n = t.headers["retry-after"] * a.default.Millis.SECOND,
                    r = isNaN(n) || 0 === n ? 5e3 : n;
                return (0, o.timeoutPromise)(r).then(function() {
                    return E(e)
                })
            }
            return Promise.reject(t)
        }).then(function(t) {
            var n = t.body.access_token;
            return i.default.dispatch({
                type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
                accountId: e,
                accessToken: n
            }), t
        })
    }

    function p(e, t) {
        return _.get(e, t, {
            url: c.SpotifyEndpoints.PROFILE
        }).then(function(t) {
            return i.default.dispatch({
                type: "SPOTIFY_PROFILE_UPDATE",
                accountId: e,
                isPremium: "premium" === t.body.product
            }), t
        })
    }

    function m(e, t) {
        return _.get(e, t, {
            url: c.SpotifyEndpoints.PLAYER_DEVICES
        }).then(function(t) {
            return t.body && i.default.dispatch({
                type: "SPOTIFY_SET_DEVICES",
                accountId: e,
                devices: t.body.devices
            }), t
        })
    }

    function y(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            a = c.SpotifyEndpoints.PLAYER_OPEN(r, n, !1),
            u = o.deviceId,
            s = o.position,
            l = o.contextUri,
            f = o.repeat;
        return _.put(e, t, {
            url: c.SpotifyEndpoints.PLAYER_PLAY,
            query: {
                device_id: u
            },
            body: {
                context_uri: null != l ? l : void 0,
                uris: null == l ? [a] : void 0,
                offset: null != l ? {
                    uri: a
                } : void 0,
                position_ms: null != s ? s : 0
            }
        }).then(function(n) {
            return null == f ? n : _.put(e, t, {
                url: c.SpotifyEndpoints.PLAYER_REPEAT,
                query: {
                    device_id: u,
                    state: f ? "context" : "off"
                }
            })
        }).then(function(e) {
            return i.default.dispatch({
                type: "SPOTIFY_PLAYER_PLAY",
                id: n,
                position: null != s ? s : 0
            }), e
        })
    }

    function I(e, t) {
        return _.put(e, t, {
            url: c.SpotifyEndpoints.PLAYER_PAUSE
        }).then(function(e) {
            return i.default.dispatch({
                type: "SPOTIFY_PLAYER_PAUSE"
            }), e
        })
    }

    function h() {
        !l.default.isProtocolRegistered() && (0, s.isDesktop)() && u.default.isProtocolRegistered(c.SPOTIFY_APP_PROTOCOL).then(function(e) {
            i.default.dispatch({
                type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
                isRegistered: e
            })
        })
    }

    function O(e, t) {
        i.default.dispatch({
            type: "SPOTIFY_SET_ACTIVE_DEVICE",
            accountId: e,
            deviceId: t
        })
    }
}