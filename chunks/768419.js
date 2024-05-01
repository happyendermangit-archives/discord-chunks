function(e, t, n) {
    "use strict";
    let i, r, a;
    n.r(t), n("47120"), n("653041"), n("724458"), n("757143"), n("789020");
    var s, o, l, u = n("392711"),
        d = n.n(u),
        _ = n("261470"),
        c = n("442837"),
        E = n("902704"),
        I = n("846519"),
        T = n("570140"),
        f = n("586902"),
        S = n("726542"),
        h = n("524331"),
        A = n("710845"),
        m = n("594190"),
        N = n("314897"),
        p = n("553795"),
        O = n("517100"),
        R = n("158776"),
        C = n("606304"),
        g = n("979651"),
        L = n("626135"),
        v = n("81063"),
        D = n("70956"),
        M = n("823379"),
        y = n("781518"),
        P = n("616922"),
        U = n("981631");

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let G = S.default.get(U.PlatformTypes.SPOTIFY),
        w = "hm://pusher/v1/connections/",
        B = 30 * D.default.Millis.SECOND,
        k = 30 * D.default.Millis.SECOND,
        V = 5 * D.default.Millis.MINUTE,
        x = 5 * D.default.Millis.SECOND,
        F = 1.5 * D.default.Millis.SECOND,
        H = 1 * D.default.Millis.MINUTE,
        Y = 3 * D.default.Millis.SECOND;
    (l = s || (s = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", l.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
    let j = {
            MESSAGE: "message",
            PING: "ping",
            PONG: "pong"
        },
        W = {
            SINGLE: "single"
        },
        K = new A.default("Spotify"),
        z = new I.Timeout,
        Z = new I.Timeout,
        X = new I.Timeout,
        Q = new I.Timeout,
        q = new I.Timeout,
        J = {},
        $ = {},
        ee = {},
        et = !1,
        en = null;

    function ei() {
        for (let e in J) {
            let t = J[e];
            if (!t.connected || null == $[e]) continue;
            let n = $[e].find(e => e.is_active);
            if (null != n) return {
                socket: t,
                device: n
            }
        }
    }

    function er(e) {
        T.default.dispatch({
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

    function ea(e) {
        return R.default.findActivity(e, e => null != e.party && null != e.party.id && (0, P.isSpotifyParty)(e.party.id))
    }
    let es = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
    class eo {
        get connected() {
            return null != this.socket && es.has(this.socket.readyState)
        }
        connect() {
            !this.connected && !this._requestedConnect && (K.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, eS(this.accountId, this.accessToken).then(() => {
                this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
            }).catch(e => {
                K.error(e), this._requestedConnect = !1, this.handleClose()
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
                type: j.PING
            })))
        }
        handleOpen() {
            K.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(B, () => this.ping()), (0, y.getProfile)(this.accountId, this.accessToken), (0, y.getDevices)(this.accountId, this.accessToken)
        }
        handleMessage(e) {
            let {
                data: t
            } = e;
            if ("string" != typeof t) return;
            let {
                type: n,
                uri: i,
                payloads: r
            } = JSON.parse(t);
            switch (n) {
                case j.MESSAGE:
                    if ("string" == typeof i && i.startsWith(w)) this.connectionId = decodeURIComponent(i.split(w)[1]), (0, y.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
                    else if (Array.isArray(r)) {
                        for (let {
                                events: e
                            }
                            of r)
                            if (null != e)
                                for (let t of e) this.handleEvent(t)
                    }
                case j.PONG:
            }
        }
        handleClose() {
            if (this.pingInterval.stop(), !this._requestedDisconnect) try {
                let e = this.backoff.fail(() => {
                    !this._requestedDisconnect && this.connect()
                });
                K.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
            } catch (e) {}
        }
        handleEvent(e) {
            let {
                type: t,
                event: n
            } = e;
            switch (t) {
                case "PLAYER_STATE_CHANGED":
                    null != n && null != n.state && ef(this.accountId, this.accessToken, n.state);
                    break;
                case "DEVICE_STATE_CHANGED":
                    this.handleDeviceStateChange()
            }
        }
        constructor(e, t) {
            b(this, "accessToken", void 0), b(this, "accountId", void 0), b(this, "connectionId", void 0), b(this, "isPremium", void 0), b(this, "pingInterval", void 0), b(this, "backoff", void 0), b(this, "socket", void 0), b(this, "_requestedDisconnect", !1), b(this, "_requestedConnect", !1), b(this, "handleDeviceStateChange", d().throttle(() => {
                (0, y.getDevices)(this.accountId, this.accessToken), eS(this.accountId, this.accessToken)
            }, Y)), this.accountId = e, this.accessToken = t, this.pingInterval = new I.Interval, this.backoff = new _.default(void 0, H), this.connect()
        }
    }

    function el(e, t) {
        e in J ? (J[e].accessToken = t, K.info("Updated account access token: ".concat(e))) : (J[e] = new eo(e, t), K.info("Added account: ".concat(e)))
    }

    function eu(e) {
        if (!(e in J)) return;
        J[e].disconnect(), delete J[e];
        let t = ee[e];
        null != t && null != i && t.track.id === i.track.id && (i = null), delete ee[e], K.info("Removed account: ".concat(e))
    }

    function ed(e, t) {
        for (let n of $[e]) n.is_active = n.id === t
    }

    function e_(e, t, n) {
        var i, a;
        let s = ei();
        if (null == s) return !1;
        let {
            socket: o,
            device: l
        } = s, {
            sync_id: u,
            party: d,
            timestamps: _
        } = t;
        if (null == u || null == d || null == d.id || !(0, P.isSpotifyParty)(d.id)) return !1;
        let c = null != _ && null != _.start ? _.start : Date.now(),
            E = Math.max(0, Date.now() - c),
            I = !1,
            T = ee[o.accountId];
        null != T && !1 === T.repeat && (I = null);
        let f = (0, P.getSpotifyResourceType)(null !== (a = null === (i = t.metadata) || void 0 === i ? void 0 : i.type) && void 0 !== a ? a : P.SpotifyResourceTypes.TRACK);
        if (null == f) return;
        (0, y.play)(o.accountId, o.accessToken, u, f, {
            position: +E,
            deviceId: l.id,
            repeat: I
        }), r = {
            userId: e,
            partyId: d.id,
            trackId: u,
            startTime: c
        };
        let S = "presence change";
        n && (S = "started", L.default.track(U.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: d.id,
            other_user_id: e
        })), K.info("Listen along ".concat(S, ": ").concat(o.accountId, " to ").concat(e, " playing ").concat(u, " on ").concat(l.name))
    }

    function ec() {
        L.default.track(U.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
            party_id: null != r ? r.partyId : null,
            other_user_id: null != r ? r.userId : null
        });
        let e = null != r ? r.trackId : null;
        r = null, K.info("Listen along stopped");
        let t = ei();
        if (null == t) return;
        let {
            socket: n
        } = t, i = ee[n.accountId];
        null != i && i.track.id === e && (0, y.pause)(n.accountId, n.accessToken)
    }

    function eE() {
        let e = Object.keys(J),
            t = p.default.getAccounts().filter(e => {
                let {
                    type: t
                } = e;
                return t === U.PlatformTypes.SPOTIFY
            });
        if (null == t) return !1;
        let n = t.map(e => {
            let {
                id: t
            } = e;
            return t
        });
        for (let t of e) !n.includes(t) && eu(t);
        let r = !1;
        for (let n of t)
            if (null != i && i.account.id === n.id && (i.account = n, r = !0), !e.includes(n.id)) {
                if (null != n.accessToken) {
                    el(n.id, n.accessToken);
                    continue
                }(0, y.getAccessToken)(n.id)
            } return r
    }

    function eI() {
        if (null == i) return;
        let e = ei();
        if (null == e) return;
        let {
            socket: t
        } = e;
        et = !0, (0, y.pause)(t.accountId, t.accessToken), L.default.track(U.AnalyticEvents.SPOTIFY_AUTO_PAUSED), K.info("Playback auto paused")
    }

    function eT(e) {
        if (e === N.default.getId()) {
            let t = g.default.isCurrentClientInVoiceChannel(),
                n = (0, f.getIsSpeaking)({
                    userId: e,
                    checkSoundSharing: !0,
                    checkSoundboardSounds: !1
                });
            t && n && null != i ? (z.start(k, eI, !1), Z.stop()) : Z.start(100, () => z.stop(), !1)
        }
        return !1
    }

    function ef(e, t, n) {
        var i, r, a, s, o, l, u, d, _, c, E, I, f, S;
        let h, A, {
            device: m,
            progress_ms: N,
            is_playing: p,
            repeat_state: O,
            item: R,
            context: C
        } = n;
        if (null != R && R.type === P.SpotifyResourceTypes.TRACK) {
            let e = R.id;
            null != R.linked_from && null != R.linked_from.id && (e = R.linked_from.id), h = {
                id: e,
                name: R.name,
                duration: R.duration_ms,
                type: P.SpotifyResourceTypes.TRACK,
                album: {
                    id: null !== (o = null === (i = R.album) || void 0 === i ? void 0 : i.id) && void 0 !== o ? o : "",
                    name: null !== (l = null === (r = R.album) || void 0 === r ? void 0 : r.name) && void 0 !== l ? l : "",
                    image: null === (a = R.album) || void 0 === a ? void 0 : a.images[0],
                    type: null !== (u = null === (s = R.album) || void 0 === s ? void 0 : s.type) && void 0 !== u ? u : P.SpotifyResourceTypes.ALBUM
                },
                artists: Array.isArray(R.artists) ? R.artists.filter(e => (0, M.isNotNullish)(e.id) && (0, M.isNotNullish)(e.name)) : [],
                isLocal: R.is_local || !1
            }
        } else null != R && R.type === P.SpotifyResourceTypes.EPISODE && (h = {
            id: R.id,
            name: R.name,
            duration: R.duration_ms,
            type: P.SpotifyResourceTypes.EPISODE,
            album: {
                id: null !== (I = null === (d = R.show) || void 0 === d ? void 0 : d.id) && void 0 !== I ? I : "",
                name: null !== (f = null === (_ = R.show) || void 0 === _ ? void 0 : _.name) && void 0 !== f ? f : "",
                image: null === (c = R.show) || void 0 === c ? void 0 : c.images[0],
                type: null !== (S = null === (E = R.album) || void 0 === E ? void 0 : E.type) && void 0 !== S ? S : P.SpotifyResourceTypes.SHOW
            },
            artists: [],
            isLocal: !1
        });
        if (null != m && !0 !== m.is_active && (m = {
                ...m,
                is_active: !0
            }), null != C && [P.SpotifyResourceTypes.PLAYLIST, P.SpotifyResourceTypes.ALBUM].includes(C.type)) {
            let n = eA.getPlayerState(e);
            A = null != n && null != n.context && n.context.uri === C.uri ? Promise.resolve(n.context) : C.type === P.SpotifyResourceTypes.ALBUM ? Promise.resolve(C) : y.SpotifyAPI.get(e, t, {
                url: C.href
            }).then(e => {
                let {
                    body: t
                } = e;
                return t
            }).catch(e => {
                if (e && 404 === e.status) return null;
                throw e
            })
        } else A = Promise.resolve(void 0);
        return A.then(t => {
            null != t && t.type === P.SpotifyResourceTypes.PLAYLIST && !t.public && (t = null), T.default.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: h,
                volumePercent: null != m ? m.volume_percent : 0,
                isPlaying: p,
                repeat: "off" !== O,
                position: N,
                context: t,
                device: m
            })
        })
    }

    function eS(e, t) {
        return y.SpotifyAPI.get(e, t, {
            url: P.SpotifyEndpoints.PLAYER,
            query: {
                additional_types: "".concat(P.SpotifyResourceTypes.TRACK, ",").concat(P.SpotifyResourceTypes.EPISODE)
            },
            onlyRetryOnAuthorizationErrors: !0
        }).then(n => {
            let i = n.body;
            null != i ? ef(e, t, i).then(() => n) : er(e)
        }).catch(() => er(e))
    }
    class eh extends(o = c.default.Store) {
        initialize() {
            this.waitFor(p.default, C.default), this.syncWith([R.default], () => (function() {
                if (null == r || null == ei()) return !1;
                let {
                    userId: e
                } = r, t = ea(e);
                if (null == t) return X.start(V, () => {
                    null != r && r.userId === e && (0, h.default)()
                }), !1;
                X.stop();
                let {
                    sync_id: n,
                    timestamps: i,
                    party: a
                } = t, s = null != n && r.trackId !== n, o = null != i && r.startTime !== i.start;
                return s || o ? e_(e, t, !1) : null != a && a.id !== r.partyId && (r.partyId = a.id, !0)
            })()), (0, y.fetchIsSpotifyProtocolRegistered)()
        }
        hasConnectedAccount() {
            return Object.keys(J).length > 0
        }
        getActiveSocketAndDevice() {
            return ei()
        }
        getPlayableComputerDevices() {
            let e = [];
            for (let t in J) {
                let n = J[t];
                if (!n.connected || null == $[t]) continue;
                let i = $[t].find(e => !e.is_restricted && "Computer" === e.type);
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
            return null != ei() && null != t && null != n && null != n.id && (0, P.isSpotifyParty)(n.id)
        }
        getSyncingWith() {
            return r
        }
        wasAutoPaused() {
            return et
        }
        getLastPlayedTrackId() {
            return a
        }
        getTrack() {
            return null != i ? i.track : null
        }
        getPlayerState(e) {
            return ee[e]
        }
        shouldShowActivity() {
            return null != i && i.account.showActivity && !O.default.isIdle()
        }
        getActivity() {
            let e, t, n;
            if (null == i) return null != r ? ea(r.userId) : null;
            let {
                track: {
                    artists: a,
                    album: s,
                    name: o,
                    id: l,
                    duration: u,
                    isLocal: d,
                    type: _
                },
                startTime: c,
                context: E
            } = i, I = a.slice(0, 5);
            a.length > 0 && (e = I.map(e => {
                let {
                    name: t
                } = e;
                return t.replace(/;/g, "")
            }).join("; "));
            let T = {},
                f = null != s.image ? (0, v.getAssetFromImageURL)(U.PlatformTypes.SPOTIFY, s.image.url) : null;
            null != s.image && null != f && (T.large_image = f), "single" !== s.type && (T.large_text = s.name), null != E && (t = E.uri), n = null != r && null != r.partyId ? r.partyId : "".concat(P.SPOTIFY_PARTY_PREFIX).concat(N.default.getId());
            let S = o.length > 128 ? o.substring(0, 125) + "..." : o,
                h = {
                    context_uri: t,
                    album_id: s.id,
                    artist_ids: I.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    }),
                    type: _,
                    button_urls: []
                },
                A = {
                    name: G.name,
                    assets: T,
                    details: S,
                    state: e,
                    timestamps: {
                        start: c,
                        end: c + u
                    },
                    party: {
                        id: n
                    }
                };
            return !d && (A.sync_id = l, A.flags = U.ActivityFlags.PLAY | U.ActivityFlags.SYNC, A.metadata = h), A
        }
    }
    b(eh, "displayName", "SpotifyStore");
    let eA = new eh(T.default, {
        USER_CONNECTIONS_UPDATE: eE,
        CONNECTION_OPEN: eE,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(e) {
            let {
                accountId: t,
                accessToken: n
            } = e;
            return el(t, n), !1
        },
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(e) {
            let {
                accountId: t
            } = e;
            eu(t)
        },
        SPOTIFY_PROFILE_UPDATE: function(e) {
            let {
                accountId: t,
                isPremium: n
            } = e, i = J[t];
            if (null == i) return !1;
            i.isPremium = n, K.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
        },
        SPOTIFY_PLAYER_STATE: function(e) {
            let {
                accountId: t,
                isPlaying: n,
                repeat: a,
                track: s,
                position: o,
                device: l,
                context: u
            } = e, _ = !1;
            if (null != l) {
                if (null != $[t]) {
                    let e = $[t].find(e => {
                        let {
                            id: t
                        } = e;
                        return t === l.id
                    });
                    null == e ? ($[t].push(l), _ = !0) : !(0, E.default)(e, l) && (Object.assign(e, l), _ = !0), ed(t, l.id)
                } else $[t] = [l], _ = !0
            }
            n ? null == en || en.start(k, eI) : (s = null, null == en || en.stop());
            let c = p.default.getAccount(t, U.PlatformTypes.SPOTIFY);
            if (null == c) return _;
            let I = ee[t],
                f = null != s ? {
                    account: c,
                    track: s,
                    startTime: function(e, t) {
                        let n = Date.now(),
                            i = null != e ? e.startTime : 0,
                            r = n - t;
                        return Math.abs(r - i) > F ? r : i
                    }(I, o),
                    context: u,
                    repeat: a
                } : null,
                S = null != l && null != r && 0 === o && !n;
            !S && (ee[t] = f);
            let A = i;
            if (i = d().values(ee).find(e => null != e), eT(N.default.getId()), null == s || S ? Q.stop() : Q.start(s.duration - o + x, () => er(c.id)), null != r && (!n && o > 0 || null == l || null != f && r.trackId !== f.track.id) ? (K.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(x, "ms")), q.start(x, () => {
                    K.info("Stopping listening along"), (0, h.default)(), er(c.id)
                })) : q.isStarted() && (K.info("Listen along stop cancelled as playback of track resumed"), q.stop()), A === i || null == I && null == f || null != I && null != f && I.track.id === f.track.id && I.startTime === f.startTime) return _;
            null != s && (T.default.dispatch({
                type: "SPOTIFY_NEW_TRACK",
                track: s,
                connectionId: t
            }), L.default.track(U.AnalyticEvents.ACTIVITY_UPDATED, {
                party_platform: U.PlatformTypes.SPOTIFY,
                track_id: s.id,
                has_images: !0,
                details: s.album.name,
                state: s.name,
                album_id: s.album.id,
                author_ids: s.artists.map(e => e.id),
                author_names: s.artists.map(e => e.name)
            }))
        },
        SPOTIFY_PLAYER_PLAY: function(e) {
            let {
                id: t
            } = e;
            a = t
        },
        ACTIVITY_PLAY: function(e) {
            var t;
            let n, {
                    activity: i,
                    metadata: a
                } = e,
                s = ei();
            if (null == s) return !1;
            let {
                socket: o,
                device: l
            } = s, {
                sync_id: u,
                party: d
            } = i;
            return !!(null != u && null != d && null != d.id && (0, P.isSpotifyParty)(d.id)) && (null != a && (n = a.context_uri), null != r && ec(), null != a && void((0, y.play)(o.accountId, o.accessToken, u, null !== (t = a.type) && void 0 !== t ? t : P.SpotifyResourceTypes.TRACK, {
                contextUri: n,
                deviceId: l.id
            }), K.info("Play started: ".concat(o.accountId, " playing ").concat(u, " on ").concat(l.name))))
        },
        ACTIVITY_SYNC: function(e) {
            let {
                activity: t,
                userId: n
            } = e;
            return e_(n, t, !0)
        },
        ACTIVITY_SYNC_STOP: ec,
        SPOTIFY_SET_DEVICES: function(e) {
            let {
                accountId: t,
                devices: n
            } = e;
            $[t] = n, K.info("Devices updated for ".concat(t, ":"), n)
        },
        SPOTIFY_SET_ACTIVE_DEVICE: function(e) {
            let {
                accountId: t,
                deviceId: n
            } = e;
            ed(t, n)
        },
        SPEAKING: function(e) {
            let {
                userId: t
            } = e;
            return eT(t)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: n
                } = t;
                return eT(n) || e
            }, !1)
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            let {
                settings: t
            } = e;
            if ((null == t ? void 0 : t.desktopSettings) != null) {
                null == en || en.stop();
                let {
                    sourceId: e,
                    sound: n
                } = null == t ? void 0 : t.desktopSettings;
                null != e && m.default.getObservedAppNameForWindow(e) === G.name && n ? (en = new I.Interval).start(k, eI) : en = null
            }
        }
    });
    t.default = eA
}