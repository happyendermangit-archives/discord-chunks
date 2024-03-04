function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SpotifyAPI: function() {
            return _
        },
        getAccessToken: function() {
            return h
        },
        subscribePlayerStateNotifications: function() {
            return function e(t, n, i) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                return _.put(t, n, {
                    url: d.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
                    query: {
                        connection_id: i
                    }
                }).catch(a => r <= 0 ? Promise.reject(a) : (0, s.timeoutPromise)(5e3).then(() => e(t, n, i, r - 1)))
            }
        },
        getProfile: function() {
            return E
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
            return v
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

    function f(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        return e(i = {
            ...i,
            headers: {
                authorization: "Bearer ".concat(n)
            }
        }).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
            let a = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || a) && r > 0 ? (202 === n.status ? (0, s.timeoutPromise)(5e3) : Promise.resolve()).then(() => h(t)).then(n => {
                let {
                    body: {
                        access_token: s
                    }
                } = n;
                return f(e, t, s, i, r - 1)
            }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
        })
    }
    let _ = {
        get: f.bind(null, i.default.get),
        put: f.bind(null, i.default.put)
    };

    function h(e) {
        return i.default.get({
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
                return (0, s.timeoutPromise)(i).then(() => h(e))
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

    function E(e, t) {
        return _.get(e, t, {
            url: d.SpotifyEndpoints.PROFILE
        }).then(t => (r.default.dispatch({
            type: "SPOTIFY_PROFILE_UPDATE",
            accountId: e,
            isPremium: "premium" === t.body.product
        }), t))
    }

    function g(e, t) {
        return _.get(e, t, {
            url: d.SpotifyEndpoints.PLAYER_DEVICES
        }).then(t => (t.body && r.default.dispatch({
            type: "SPOTIFY_SET_DEVICES",
            accountId: e,
            devices: t.body.devices
        }), t))
    }

    function m(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = d.SpotifyEndpoints.PLAYER_OPEN(d.SpotifyResourceTypes.TRACK, n, !1),
            {
                deviceId: a,
                position: o,
                contextUri: l,
                repeat: u
            } = i;
        return _.put(e, t, {
            url: d.SpotifyEndpoints.PLAYER_PLAY,
            query: {
                device_id: a
            },
            body: {
                context_uri: null != l ? l : void 0,
                uris: null == l ? [s] : void 0,
                offset: null != l ? {
                    uri: s
                } : void 0,
                position_ms: null != o ? o : 0
            }
        }).then(n => null == u ? n : _.put(e, t, {
            url: d.SpotifyEndpoints.PLAYER_REPEAT,
            query: {
                device_id: a,
                state: u ? "context" : "off"
            }
        })).then(e => (r.default.dispatch({
            type: "SPOTIFY_PLAYER_PLAY",
            id: n,
            position: null != o ? o : 0
        }), e))
    }

    function p(e, t) {
        return _.put(e, t, {
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

    function v(e, t) {
        r.default.dispatch({
            type: "SPOTIFY_SET_ACTIVE_DEVICE",
            accountId: e,
            deviceId: t
        })
    }
}