function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SpotifyAPI: function() {
            return E
        },
        fetchIsSpotifyProtocolRegistered: function() {
            return A
        },
        getAccessToken: function() {
            return I
        },
        getDevices: function() {
            return f
        },
        getProfile: function() {
            return T
        },
        pause: function() {
            return h
        },
        play: function() {
            return S
        },
        setActiveDevice: function() {
            return m
        },
        subscribePlayerStateNotifications: function() {
            return function e(t, n, i) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                return E.put(t, n, {
                    url: d.SpotifyEndpoints.NOTIFICATIONS_PLAYER,
                    query: {
                        connection_id: i
                    }
                }).catch(a => s <= 0 ? Promise.reject(a) : (0, r.timeoutPromise)(5e3).then(() => e(t, n, i, s - 1)))
            }
        }
    }), n("177593");
    var i = n("544891"),
        r = n("846519"),
        s = n("570140"),
        a = n("70956"),
        o = n("877481"),
        l = n("358085"),
        u = n("18323"),
        d = n("616922"),
        _ = n("981631");

    function c(e, t, n, i) {
        let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
        return e(i = {
            ...i,
            headers: {
                authorization: "Bearer ".concat(n)
            }
        }).then(e => 202 === e.status ? Promise.reject(e) : e).catch(n => {
            let a = !0 !== i.onlyRetryOnAuthorizationErrors && 202 === n.status;
            return (401 === n.status || a) && s > 0 ? (202 === n.status ? (0, r.timeoutPromise)(5e3) : Promise.resolve()).then(() => I(t)).then(n => {
                let {
                    body: {
                        access_token: r
                    }
                } = n;
                return c(e, t, r, i, s - 1)
            }).then(e => new Promise(t => setImmediate(() => t(e)))) : Promise.reject(n)
        })
    }
    let E = {
        get: c.bind(null, i.HTTP.get),
        put: c.bind(null, i.HTTP.put)
    };

    function I(e) {
        return i.HTTP.get({
            url: _.Endpoints.CONNECTION_ACCESS_TOKEN(_.PlatformTypes.SPOTIFY, e),
            oldFormErrors: !0
        }).catch(t => {
            var n;
            if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === _.AbortCodes.CONNECTION_REVOKED) s.default.dispatch({
                type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
                accountId: e
            });
            else if (429 === t.status) {
                let n = t.headers["retry-after"] * a.default.Millis.SECOND,
                    i = isNaN(n) || 0 === n ? 5e3 : n;
                return (0, r.timeoutPromise)(i).then(() => I(e))
            }
            return Promise.reject(t)
        }).then(t => {
            let {
                access_token: n
            } = t.body;
            return s.default.dispatch({
                type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
                accountId: e,
                accessToken: n
            }), t
        })
    }

    function T(e, t) {
        return E.get(e, t, {
            url: d.SpotifyEndpoints.PROFILE
        }).then(t => (s.default.dispatch({
            type: "SPOTIFY_PROFILE_UPDATE",
            accountId: e,
            isPremium: "premium" === t.body.product
        }), t))
    }

    function f(e, t) {
        return E.get(e, t, {
            url: d.SpotifyEndpoints.PLAYER_DEVICES
        }).then(t => (t.body && s.default.dispatch({
            type: "SPOTIFY_SET_DEVICES",
            accountId: e,
            devices: t.body.devices
        }), t))
    }

    function S(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            a = d.SpotifyEndpoints.PLAYER_OPEN(i, n, !1),
            {
                deviceId: o,
                position: l,
                contextUri: u,
                repeat: _
            } = r;
        return E.put(e, t, {
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
        }).then(n => null == _ ? n : E.put(e, t, {
            url: d.SpotifyEndpoints.PLAYER_REPEAT,
            query: {
                device_id: o,
                state: _ ? "context" : "off"
            }
        })).then(e => (s.default.dispatch({
            type: "SPOTIFY_PLAYER_PLAY",
            id: n,
            position: null != l ? l : 0
        }), e))
    }

    function h(e, t) {
        return E.put(e, t, {
            url: d.SpotifyEndpoints.PLAYER_PAUSE
        }).then(e => (s.default.dispatch({
            type: "SPOTIFY_PLAYER_PAUSE"
        }), e))
    }

    function A() {
        !u.default.isProtocolRegistered() && (0, l.isDesktop)() && o.default.isProtocolRegistered(d.SPOTIFY_APP_PROTOCOL).then(e => {
            s.default.dispatch({
                type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
                isRegistered: e
            })
        })
    }

    function m(e, t) {
        s.default.dispatch({
            type: "SPOTIFY_SET_ACTIVE_DEVICE",
            accountId: e,
            deviceId: t
        })
    }
}