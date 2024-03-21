function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SpotifyAPI: function() {
            return f
        },
        getAccessToken: function() {
            return E
        },
        subscribePlayerStateNotifications: function() {
            return function e(t, n, i) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                return f.put(t, n, {
                    url: d.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
                    query: {
                        connection_id: i
                    }
                }).catch(a => r <= 0 ? Promise.reject(a) : (0, s.timeoutPromise)(5e3).then(() => e(t, n, i, r - 1)))
            }
        },
        getProfile: function() {
            return h
        },
        getDevices: function() {
            return g
        },
        play: function() {
            return m
        },
        pause: function() {
            return p
        },
        fetchIsSpotifyProtocolRegistered: function() {
            return S
        },
        setActiveDevice: function() {
            return T
        }
    }), n("860677");
    var i = n("872717"),
        s = n("862337"),
        r = n("913144"),
        a = n("718517"),
        o = n("269180"),
        l = n("773336"),
        u = n("155815"),
        d = n("450484"),
        c = n("49111");

    function _(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        return e(i = {
            ...i,
            headers: {
                authorization: "Bearer ".concat(n)
            }
        }).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
            let a = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || a) && r > 0 ? (202 === n.status ? (0, s.timeoutPromise)(5e3) : Promise.resolve()).then(() => E(t)).then(n => {
                let {
                    body: {
                        access_token: s
                    }
                } = n;
                return _(e, t, s, i, r - 1)
            }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
        })
    }
    let f = {
        get: _.bind(null, i.HTTP.get),
        put: _.bind(null, i.HTTP.put)
    };

    function E(e) {
        return i.HTTP.get({
            url: c.Endpoints.CONNECTION_ACCESS_TOKEN(c.PlatformTypes.SPOTIFY, e),
            oldFormErrors: !0
        }).catch(t => {
            if (401 === t.status) r.default.dispatch({
                type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
                accountId: e
            });
            else if (429 === t.status) {
                let n = t.headers["retry-after"] * a.default.Millis.SECOND,
                    i = isNaN(n) || 0 === n ? 5e3 : n;
                return (0, s.timeoutPromise)(i).then(() => E(e))
            }
            return Promise.reject(t)
        }).then(t => {
            let {
                access_token: n
            } = t.body;
            return r.default.dispatch({
                type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
                accountId: e,
                accessToken: n
            }), t
        })
    }

    function h(e, t) {
        return f.get(e, t, {
            url: d.SpotifyEndpoints.PROFILE
        }).then(t => (r.default.dispatch({
            type: "SPOTIFY_PROFILE_UPDATE",
            accountId: e,
            isPremium: "premium" === t.body.product
        }), t))
    }

    function g(e, t) {
        return f.get(e, t, {
            url: d.SpotifyEndpoints.PLAYER_DEVICES
        }).then(t => (t.body && r.default.dispatch({
            type: "SPOTIFY_SET_DEVICES",
            accountId: e,
            devices: t.body.devices
        }), t))
    }

    function m(e, t, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            a = d.SpotifyEndpoints.PLAYER_OPEN(i, n, !1),
            {
                deviceId: o,
                position: l,
                contextUri: u,
                repeat: c
            } = s;
        return f.put(e, t, {
            url: d.SpotifyEndpoints.PLAYER_PLAY,
            query: {
                device_id: o
            },
            body: {
                context_uri: null != u ? u : void 0,
                uris: null == u ? [a] : void 0,
                offset: null != u ? {
                    uri: a
                } : void 0,
                position_ms: null != l ? l : 0
            }
        }).then(n => null == c ? n : f.put(e, t, {
            url: d.SpotifyEndpoints.PLAYER_REPEAT,
            query: {
                device_id: o,
                state: c ? "context" : "off"
            }
        })).then(e => (r.default.dispatch({
            type: "SPOTIFY_PLAYER_PLAY",
            id: n,
            position: null != l ? l : 0
        }), e))
    }

    function p(e, t) {
        return f.put(e, t, {
            url: d.SpotifyEndpoints.PLAYER_PAUSE
        }).then(e => (r.default.dispatch({
            type: "SPOTIFY_PLAYER_PAUSE"
        }), e))
    }

    function S() {
        !u.default.isProtocolRegistered() && (0, l.isDesktop)() && o.default.isProtocolRegistered(d.SPOTIFY_APP_PROTOCOL).then(e => {
            r.default.dispatch({
                type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
                isRegistered: e
            })
        })
    }

    function T(e, t) {
        r.default.dispatch({
            type: "SPOTIFY_SET_ACTIVE_DEVICE",
            accountId: e,
            deviceId: t
        })
    }
}