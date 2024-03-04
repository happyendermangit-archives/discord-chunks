function(e, t, n) {
    "use strict";
    let i, s, r;
    n.r(t), n.d(t, {
        default: function() {
            return em
        }
    }), n("222007"), n("424973"), n("808653"), n("781738"), n("702976");
    var a, o, l = n("917351"),
        u = n.n(l),
        d = n("981980"),
        c = n("446674"),
        f = n("233736"),
        _ = n("862337"),
        h = n("913144"),
        E = n("899633"),
        g = n("376556"),
        m = n("823704"),
        p = n("605250"),
        S = n("161454"),
        v = n("271938"),
        T = n("47319"),
        I = n("603699"),
        C = n("824563"),
        A = n("280168"),
        y = n("800762"),
        N = n("599110"),
        R = n("550368"),
        O = n("718517"),
        D = n("613691"),
        P = n("450484"),
        L = n("49111");
    let M = g.default.get(L.PlatformTypes.SPOTIFY),
        b = "hm://pusher/v1/connections/",
        U = 30 * O.default.Millis.SECOND,
        w = 30 * O.default.Millis.SECOND,
        k = 5 * O.default.Millis.MINUTE,
        V = 5 * O.default.Millis.SECOND,
        G = 1.5 * O.default.Millis.SECOND,
        F = 1 * O.default.Millis.MINUTE,
        x = 3 * O.default.Millis.SECOND;
    (o = a || (a = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", o.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
    let B = {
            MESSAGE: "message",
            PING: "ping",
            PONG: "pong"
        },
        H = {
            SINGLE: "single"
        },
        Y = new p.default("Spotify"),
        j = new _.Timeout,
        W = new _.Timeout,
        K = new _.Timeout,
        z = new _.Timeout,
        q = new _.Timeout,
        X = {},
        Q = {},
        Z = {},
        J = !1,
        $ = null;

    function ee() {
        for (let e in X) {
            let t = X[e];
            if (!t.connected || null == Q[e]) continue;
            let n = Q[e].find(e => e.is_active);
            if (null != n) return {
                socket: t,
                device: n
            }
        }
    }

    function et(e) {
        h.default.dispatch({
            type: "SPOTIFY_PLAYER_STATE",
            accountId: e,
            track: null,
            volumePercent: 0,
            isPlaying: !1,
            repeat: !1,
            position: 0,
            context: null
        })
    }

    function en(e) {
        return C.default.findActivity(e, e => null != e.party && null != e.party.id && (0, P.isSpotifyParty)(e.party.id))
    }
    let ei = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
    class es {
        get connected() {
            return null != this.socket && ei.has(this.socket.readyState)
        }
        connect() {
            !this.connected && !this._requestedConnect && (Y.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, eh(this.accountId, this.accessToken).then(() => {
                this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
            }).catch(e => {
                Y.error(e), this._requestedConnect = !1, this.handleClose()
            }))
        }
        disconnect() {
            this._requestedDisconnect = !0, this.backoff.cancel();
            try {
                var e;
                null === (e = this.socket) || void 0 === e || e.close()
            } catch (e) {}
        }
        ping() {
            var e;
            this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({
                type: B.PING
            })))
        }
        handleOpen() {
            Y.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(U, () => this.ping()), (0, D.getProfile)(this.accountId, this.accessToken), (0, D.getDevices)(this.accountId, this.accessToken)
        }
        handleMessage(e) {
            let {
                data: t
            } = e;
            if ("string" != typeof t) return;
            let {
                type: n,
                uri: i,
                payloads: s
            } = JSON.parse(t);
            switch (n) {
                case B.MESSAGE:
                    if ("string" == typeof i && i.startsWith(b)) this.connectionId = decodeURIComponent(i.split(b)[1]), (0, D.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
                    else if (Array.isArray(s)) {
                        for (let {
                                events: e
                            }
                            of s)
                            if (null != e)
                                for (let t of e) this.handleEvent(t)
                    }
                case B.PONG:
            }
        }
        handleClose() {
            if (this.pingInterval.stop(), !this._requestedDisconnect) try {
                let e = this.backoff.fail(() => {
                    !this._requestedDisconnect && this.connect()
                });
                Y.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
            } catch (e) {}
        }
        handleEvent(e) {
            let {
                type: t,
                event: n
            } = e;
            switch (t) {
                case "PLAYER_STATE_CHANGED":
                    null != n && null != n.state && e_(this.accountId, this.accessToken, n.state);
                    break;
                case "DEVICE_STATE_CHANGED":
                    this.handleDeviceStateChange()
            }
        }
        constructor(e, t) {
            this._requestedDisconnect = !1, this._requestedConnect = !1, this.handleDeviceStateChange = u.throttle(() => {
                (0, D.getDevices)(this.accountId, this.accessToken), eh(this.accountId, this.accessToken)
            }, x), this.accountId = e, this.accessToken = t, this.pingInterval = new _.Interval, this.backoff = new d.default(void 0, F), this.connect()
        }
    }

    function er(e, t) {
        e in X ? (X[e].accessToken = t, Y.info("Updated account access token: ".concat(e))) : (X[e] = new es(e, t), Y.info("Added account: ".concat(e)))
    }

    function ea(e) {
        if (!(e in X)) return;
        X[e].disconnect(), delete X[e];
        let t = Z[e];
        null != t && null != i && t.track.id === i.track.id && (i = null), delete Z[e], Y.info("Removed account: ".concat(e))
    }

    function eo(e, t) {
        for (let n of Q[e]) n.is_active = n.id === t
    }

    function el(e, t, n) {
        var i, r;
        let a = ee();
        if (null == a) return !1;
        let {
            socket: o,
            device: l
        } = a, {
            sync_id: u,
            party: d,
            timestamps: c
        } = t;
        if (null == u || null == d || null == d.id || !(0, P.isSpotifyParty)(d.id)) return !1;
        let f = null != c && null != c.start ? c.start : Date.now(),
            _ = Math.max(0, Date.now() - f),
            h = !1,
            E = Z[o.accountId];
        null != E && !1 === E.repeat && (h = null);
        let g = (0, P.getSpotifyResourceType)(null !== (r = null === (i = t.metadata) || void 0 === i ? void 0 : i.type) && void 0 !== r ? r : P.SpotifyResourceTypes.TRACK);
        if (null == g) return;
        (0, D.play)(o.accountId, o.accessToken, u, g, {
            position: +_,
            deviceId: l.id,
            repeat: h
        }), s = {
            userId: e,
            partyId: d.id,
            trackId: u,
            startTime: f
        };
        let m = "presence change";
        n && (m = "started", N.default.track(L.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: d.id,
            other_user_id: e
        })), Y.info("Listen along ".concat(m, ": ").concat(o.accountId, " to ").concat(e, " playing ").concat(u, " on ").concat(l.name))
    }

    function eu() {
        N.default.track(L.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
            party_id: null != s ? s.partyId : null,
            other_user_id: null != s ? s.userId : null
        });
        let e = null != s ? s.trackId : null;
        s = null, Y.info("Listen along stopped");
        let t = ee();
        if (null == t) return;
        let {
            socket: n
        } = t, i = Z[n.accountId];
        null != i && i.track.id === e && (0, D.pause)(n.accountId, n.accessToken)
    }

    function ed() {
        let e = Object.keys(X),
            t = T.default.getAccounts().filter(e => {
                let {
                    type: t
                } = e;
                return t === L.PlatformTypes.SPOTIFY
            });
        if (null == t) return !1;
        let n = t.map(e => {
            let {
                id: t
            } = e;
            return t
        });
        for (let t of e) !n.includes(t) && ea(t);
        let s = !1;
        for (let n of t)
            if (null != i && i.account.id === n.id && (i.account = n, s = !0), !e.includes(n.id)) {
                if (null != n.accessToken) {
                    er(n.id, n.accessToken);
                    continue
                }(0, D.getAccessToken)(n.id)
            } return s
    }

    function ec() {
        if (null == i) return;
        let e = ee();
        if (null == e) return;
        let {
            socket: t
        } = e;
        J = !0, (0, D.pause)(t.accountId, t.accessToken), N.default.track(L.AnalyticEvents.SPOTIFY_AUTO_PAUSED), Y.info("Playback auto paused")
    }

    function ef(e) {
        if (e === v.default.getId()) {
            let t = y.default.isCurrentClientInVoiceChannel(),
                n = (0, E.getIsSpeaking)({
                    userId: e,
                    checkSoundSharing: !0,
                    checkSoundboardSounds: !1
                });
            t && n && null != i ? (j.start(w, ec, !1), W.stop()) : W.start(100, () => j.stop(), !1)
        }
        return !1
    }

    function e_(e, t, n) {
        var i, s, r, a, o, l, u, d, c, f, _;
        let E, g, {
            device: m,
            progress_ms: p,
            is_playing: S,
            repeat_state: v,
            item: T,
            context: I
        } = n;
        if (null != T && T.type === P.SpotifyResourceTypes.TRACK) {
            let e = T.id;
            null != T.linked_from && null != T.linked_from.id && (e = T.linked_from.id), E = {
                id: e,
                name: T.name,
                duration: T.duration_ms,
                type: P.SpotifyResourceTypes.TRACK,
                album: {
                    id: null !== (a = null === (i = T.album) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : "",
                    name: null !== (o = null === (s = T.album) || void 0 === s ? void 0 : s.name) && void 0 !== o ? o : "",
                    image: null === (r = T.album) || void 0 === r ? void 0 : r.images[0]
                },
                artists: null !== (l = T.artists) && void 0 !== l ? l : [],
                isLocal: T.is_local || !1
            }
        } else if (null != T && T.type === P.SpotifyResourceTypes.EPISODE) {
            let e = T.id;
            E = {
                id: e,
                name: T.name,
                duration: T.duration_ms,
                type: P.SpotifyResourceTypes.EPISODE,
                album: {
                    id: null !== (f = null === (u = T.show) || void 0 === u ? void 0 : u.id) && void 0 !== f ? f : "",
                    name: null !== (_ = null === (d = T.show) || void 0 === d ? void 0 : d.name) && void 0 !== _ ? _ : "",
                    image: null === (c = T.show) || void 0 === c ? void 0 : c.images[0]
                },
                artists: [],
                isLocal: !1
            }
        }
        if (null != m && !0 !== m.is_active && (m = {
                ...m,
                is_active: !0
            }), null != I && [P.SpotifyResourceTypes.PLAYLIST, P.SpotifyResourceTypes.ALBUM].includes(I.type)) {
            let n = eg.getPlayerState(e);
            g = null != n && null != n.context && n.context.uri === I.uri ? Promise.resolve(n.context) : I.type === P.SpotifyResourceTypes.ALBUM ? Promise.resolve(I) : D.SpotifyAPI.get(e, t, {
                url: I.href
            }).then(e => {
                let {
                    body: t
                } = e;
                return t
            }).catch(e => {
                if (e && 404 === e.status) return null;
                throw e
            })
        } else g = Promise.resolve(void 0);
        return g.then(t => {
            null != t && t.type === P.SpotifyResourceTypes.PLAYLIST && !t.public && (t = null), h.default.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: E,
                volumePercent: null != m ? m.volume_percent : 0,
                isPlaying: S,
                repeat: "off" !== v,
                position: p,
                context: t,
                device: m
            })
        })
    }

    function eh(e, t) {
        return D.SpotifyAPI.get(e, t, {
            url: P.SpotifyEndpoints.PLAYER,
            query: {
                additional_types: "".concat(P.SpotifyResourceTypes.TRACK, ",").concat(P.SpotifyResourceTypes.EPISODE)
            },
            onlyRetryOnAuthorizationErrors: !0
        }).then(n => {
            let i = n.body;
            null != i ? e_(e, t, i).then(() => n) : et(e)
        }).catch(() => et(e))
    }
    class eE extends c.default.Store {
        initialize() {
            this.waitFor(T.default, A.default), this.syncWith([C.default], () => (function() {
                if (null == s) return !1;
                let e = ee();
                if (null == e) return !1;
                let {
                    userId: t
                } = s, n = en(t);
                if (null == n) return K.start(k, () => {
                    null != s && s.userId === t && (0, m.default)()
                }), !1;
                K.stop();
                let {
                    sync_id: i,
                    timestamps: r,
                    party: a
                } = n, o = null != i && s.trackId !== i, l = null != r && s.startTime !== r.start;
                return o || l ? el(t, n, !1) : null != a && a.id !== s.partyId && (s.partyId = a.id, !0)
            })()), (0, D.fetchIsSpotifyProtocolRegistered)()
        }
        hasConnectedAccount() {
            return Object.keys(X).length > 0
        }
        getActiveSocketAndDevice() {
            return ee()
        }
        getPlayableComputerDevices() {
            let e = [];
            for (let t in X) {
                let n = X[t];
                if (!n.connected || null == Q[t]) continue;
                let i = Q[t].find(e => !e.is_restricted && "Computer" === e.type);
                null != i && e.push({
                    socket: n,
                    device: i
                })
            }
            return e
        }
        canPlay(e) {
            let {
                sync_id: t,
                party: n
            } = e;
            return null != ee() && null != t && null != n && null != n.id && (0, P.isSpotifyParty)(n.id)
        }
        getSyncingWith() {
            return s
        }
        wasAutoPaused() {
            return J
        }
        getLastPlayedTrackId() {
            return r
        }
        getTrack() {
            return null != i ? i.track : null
        }
        getPlayerState(e) {
            return Z[e]
        }
        shouldShowActivity() {
            return null != i && i.account.showActivity && !I.default.isIdle()
        }
        getActivity() {
            let e, t, n;
            if (null == i) return null != s ? en(s.userId) : null;
            let {
                track: {
                    artists: r,
                    album: a,
                    name: o,
                    id: l,
                    duration: u,
                    isLocal: d,
                    type: c
                },
                startTime: f,
                context: _
            } = i, h = r.slice(0, 5);
            r.length > 0 && (e = h.map(e => {
                let {
                    name: t
                } = e;
                return t.replace(/;/g, "")
            }).join("; "));
            let E = {},
                g = null != a.image ? (0, R.getAssetFromImageURL)(L.PlatformTypes.SPOTIFY, a.image.url) : null;
            null != a.image && null != g && (E.large_image = g), "single" !== a.type && (E.large_text = a.name), null != _ && (t = _.uri), n = null != s && null != s.partyId ? s.partyId : "".concat(P.SPOTIFY_PARTY_PREFIX).concat(v.default.getId());
            let m = o.length > 128 ? o.substring(0, 125) + "..." : o,
                p = {
                    name: M.name,
                    assets: E,
                    details: m,
                    state: e,
                    timestamps: {
                        start: f,
                        end: f + u
                    },
                    party: {
                        id: n
                    }
                };
            return !d && (p.sync_id = l, p.flags = L.ActivityFlags.PLAY | L.ActivityFlags.SYNC, p.metadata = {
                context_uri: t,
                album_id: a.id,
                artist_ids: h.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }),
                type: c
            }), p
        }
    }
    eE.displayName = "SpotifyStore";
    let eg = new eE(h.default, {
        USER_CONNECTIONS_UPDATE: ed,
        CONNECTION_OPEN: ed,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(e) {
            let {
                accountId: t,
                accessToken: n
            } = e;
            return er(t, n), !1
        },
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(e) {
            let {
                accountId: t
            } = e;
            ea(t)
        },
        SPOTIFY_PROFILE_UPDATE: function(e) {
            let {
                accountId: t,
                isPremium: n
            } = e, i = X[t];
            if (null == i) return !1;
            i.isPremium = n, Y.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
        },
        SPOTIFY_PLAYER_STATE: function(e) {
            let {
                accountId: t,
                isPlaying: n,
                repeat: r,
                track: a,
                position: o,
                device: l,
                context: d
            } = e, c = !1;
            if (null != l) {
                if (null != Q[t]) {
                    let e = Q[t].find(e => {
                        let {
                            id: t
                        } = e;
                        return t === l.id
                    });
                    null == e ? (Q[t].push(l), c = !0) : !(0, f.default)(e, l) && (Object.assign(e, l), c = !0), eo(t, l.id)
                } else Q[t] = [l], c = !0
            }
            n ? null == $ || $.start(w, ec) : (a = null, null == $ || $.stop());
            let _ = T.default.getAccount(t, L.PlatformTypes.SPOTIFY);
            if (null == _) return c;
            let h = Z[t],
                E = null != a ? {
                    account: _,
                    track: a,
                    startTime: function(e, t) {
                        let n = Date.now(),
                            i = null != e ? e.startTime : 0,
                            s = n - t;
                        return Math.abs(s - i) > G ? s : i
                    }(h, o),
                    context: d,
                    repeat: r
                } : null,
                g = null != l && null != s && 0 === o && !n;
            !g && (Z[t] = E);
            let p = i;
            if (i = u.values(Z).find(e => null != e), ef(v.default.getId()), null == a || g ? z.stop() : z.start(a.duration - o + V, () => et(_.id)), null != s && (!n && o > 0 || null == l || null != E && s.trackId !== E.track.id) ? (Y.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(V, "ms")), q.start(V, () => {
                    Y.info("Stopping listening along"), (0, m.default)(), et(_.id)
                })) : q.isStarted() && (Y.info("Listen along stop cancelled as playback of track resumed"), q.stop()), p === i || null == h && null == E || null != h && null != E && h.track.id === E.track.id && h.startTime === E.startTime) return c;
            null != a && N.default.track(L.AnalyticEvents.ACTIVITY_UPDATED, {
                party_platform: L.PlatformTypes.SPOTIFY,
                track_id: a.id,
                has_images: !0
            })
        },
        SPOTIFY_PLAYER_PLAY: function(e) {
            let {
                id: t
            } = e;
            r = t
        },
        ACTIVITY_PLAY: function(e) {
            var t;
            let n, {
                    activity: i,
                    metadata: r
                } = e,
                a = ee();
            if (null == a) return !1;
            let {
                socket: o,
                device: l
            } = a, {
                sync_id: u,
                party: d
            } = i;
            return !!(null != u && null != d && null != d.id && (0, P.isSpotifyParty)(d.id)) && (null != r && (n = r.context_uri), null != s && eu(), null != r && void((0, D.play)(o.accountId, o.accessToken, u, null !== (t = r.type) && void 0 !== t ? t : P.SpotifyResourceTypes.TRACK, {
                contextUri: n,
                deviceId: l.id
            }), Y.info("Play started: ".concat(o.accountId, " playing ").concat(u, " on ").concat(l.name))))
        },
        ACTIVITY_SYNC: function(e) {
            let {
                activity: t,
                userId: n
            } = e;
            return el(n, t, !0)
        },
        ACTIVITY_SYNC_STOP: eu,
        SPOTIFY_SET_DEVICES: function(e) {
            let {
                accountId: t,
                devices: n
            } = e;
            Q[t] = n, Y.info("Devices updated for ".concat(t, ":"), n)
        },
        SPOTIFY_SET_ACTIVE_DEVICE: function(e) {
            let {
                accountId: t,
                deviceId: n
            } = e;
            eo(t, n)
        },
        SPEAKING: function(e) {
            let {
                userId: t
            } = e;
            return ef(t)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: n
                } = t;
                return ef(n) || e
            }, !1)
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            let {
                settings: t
            } = e;
            if ((null == t ? void 0 : t.desktopSettings) != null) {
                null == $ || $.stop();
                let {
                    sourceId: e,
                    sound: n
                } = null == t ? void 0 : t.desktopSettings, i = null != e && S.default.getObservedAppNameForWindow(e) === M.name;
                i && n ? ($ = new _.Interval).start(w, ec) : $ = null
            }
        }
    });
    var em = eg
}