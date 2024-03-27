function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n("47120"), n("653041"), n("724458"), n("757143"), n("789020");
    var a, o, l, u = n("392711"),
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
        O = n("553795"),
        p = n("517100"),
        R = n("158776"),
        C = n("606304"),
        g = n("979651"),
        L = n("626135"),
        D = n("81063"),
        v = n("70956"),
        M = n("781518"),
        y = n("616922"),
        P = n("981631");

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let b = S.default.get(P.PlatformTypes.SPOTIFY),
        G = "hm://pusher/v1/connections/",
        w = 30 * v.default.Millis.SECOND,
        k = 30 * v.default.Millis.SECOND,
        B = 5 * v.default.Millis.MINUTE,
        V = 5 * v.default.Millis.SECOND,
        F = 1.5 * v.default.Millis.SECOND,
        x = 1 * v.default.Millis.MINUTE,
        H = 3 * v.default.Millis.SECOND;
    (l = a || (a = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", l.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
    let Y = {
            MESSAGE: "message",
            PING: "ping",
            PONG: "pong"
        },
        j = {
            SINGLE: "single"
        },
        W = new A.default("Spotify"),
        K = new I.Timeout,
        z = new I.Timeout,
        X = new I.Timeout,
        Q = new I.Timeout,
        q = new I.Timeout,
        J = {},
        Z = {},
        $ = {},
        ee = !1,
        et = null;

    function en() {
        for (let e in J) {
            let t = J[e];
            if (!t.connected || null == Z[e]) continue;
            let n = Z[e].find(e => e.is_active);
            if (null != n) return {
                socket: t,
                device: n
            }
        }
    }

    function ei(e) {
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

    function er(e) {
        return R.default.findActivity(e, e => null != e.party && null != e.party.id && (0, y.isSpotifyParty)(e.party.id))
    }
    let es = new Set([WebSocket.CONNECTING, WebSocket.OPEN]);
    class ea {
        get connected() {
            return null != this.socket && es.has(this.socket.readyState)
        }
        connect() {
            !this.connected && !this._requestedConnect && (W.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, ef(this.accountId, this.accessToken).then(() => {
                this._requestedConnect = !1, this.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(this.accessToken)), this.socket.onopen = this.handleOpen.bind(this), this.socket.onmessage = this.handleMessage.bind(this), this.socket.onclose = this.socket.onerror = this.handleClose.bind(this)
            }).catch(e => {
                W.error(e), this._requestedConnect = !1, this.handleClose()
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
                type: Y.PING
            })))
        }
        handleOpen() {
            W.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(w, () => this.ping()), (0, M.getProfile)(this.accountId, this.accessToken), (0, M.getDevices)(this.accountId, this.accessToken)
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
                case Y.MESSAGE:
                    if ("string" == typeof i && i.startsWith(G)) this.connectionId = decodeURIComponent(i.split(G)[1]), (0, M.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
                    else if (Array.isArray(r)) {
                        for (let {
                                events: e
                            }
                            of r)
                            if (null != e)
                                for (let t of e) this.handleEvent(t)
                    }
                case Y.PONG:
            }
        }
        handleClose() {
            if (this.pingInterval.stop(), !this._requestedDisconnect) try {
                let e = this.backoff.fail(() => {
                    !this._requestedDisconnect && this.connect()
                });
                W.info("WS Disconnected. Next retry in ".concat(Math.round(e), "ms"))
            } catch (e) {}
        }
        handleEvent(e) {
            let {
                type: t,
                event: n
            } = e;
            switch (t) {
                case "PLAYER_STATE_CHANGED":
                    null != n && null != n.state && eT(this.accountId, this.accessToken, n.state);
                    break;
                case "DEVICE_STATE_CHANGED":
                    this.handleDeviceStateChange()
            }
        }
        constructor(e, t) {
            U(this, "accessToken", void 0), U(this, "accountId", void 0), U(this, "connectionId", void 0), U(this, "isPremium", void 0), U(this, "pingInterval", void 0), U(this, "backoff", void 0), U(this, "socket", void 0), U(this, "_requestedDisconnect", !1), U(this, "_requestedConnect", !1), U(this, "handleDeviceStateChange", d().throttle(() => {
                (0, M.getDevices)(this.accountId, this.accessToken), ef(this.accountId, this.accessToken)
            }, H)), this.accountId = e, this.accessToken = t, this.pingInterval = new I.Interval, this.backoff = new _.default(void 0, x), this.connect()
        }
    }

    function eo(e, t) {
        e in J ? (J[e].accessToken = t, W.info("Updated account access token: ".concat(e))) : (J[e] = new ea(e, t), W.info("Added account: ".concat(e)))
    }

    function el(e) {
        if (!(e in J)) return;
        J[e].disconnect(), delete J[e];
        let t = $[e];
        null != t && null != i && t.track.id === i.track.id && (i = null), delete $[e], W.info("Removed account: ".concat(e))
    }

    function eu(e, t) {
        for (let n of Z[e]) n.is_active = n.id === t
    }

    function ed(e, t, n) {
        var i, s;
        let a = en();
        if (null == a) return !1;
        let {
            socket: o,
            device: l
        } = a, {
            sync_id: u,
            party: d,
            timestamps: _
        } = t;
        if (null == u || null == d || null == d.id || !(0, y.isSpotifyParty)(d.id)) return !1;
        let c = null != _ && null != _.start ? _.start : Date.now(),
            E = Math.max(0, Date.now() - c),
            I = !1,
            T = $[o.accountId];
        null != T && !1 === T.repeat && (I = null);
        let f = (0, y.getSpotifyResourceType)(null !== (s = null === (i = t.metadata) || void 0 === i ? void 0 : i.type) && void 0 !== s ? s : y.SpotifyResourceTypes.TRACK);
        if (null == f) return;
        (0, M.play)(o.accountId, o.accessToken, u, f, {
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
        n && (S = "started", L.default.track(P.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
            party_id: d.id,
            other_user_id: e
        })), W.info("Listen along ".concat(S, ": ").concat(o.accountId, " to ").concat(e, " playing ").concat(u, " on ").concat(l.name))
    }

    function e_() {
        L.default.track(P.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
            party_id: null != r ? r.partyId : null,
            other_user_id: null != r ? r.userId : null
        });
        let e = null != r ? r.trackId : null;
        r = null, W.info("Listen along stopped");
        let t = en();
        if (null == t) return;
        let {
            socket: n
        } = t, i = $[n.accountId];
        null != i && i.track.id === e && (0, M.pause)(n.accountId, n.accessToken)
    }

    function ec() {
        let e = Object.keys(J),
            t = O.default.getAccounts().filter(e => {
                let {
                    type: t
                } = e;
                return t === P.PlatformTypes.SPOTIFY
            });
        if (null == t) return !1;
        let n = t.map(e => {
            let {
                id: t
            } = e;
            return t
        });
        for (let t of e) !n.includes(t) && el(t);
        let r = !1;
        for (let n of t)
            if (null != i && i.account.id === n.id && (i.account = n, r = !0), !e.includes(n.id)) {
                if (null != n.accessToken) {
                    eo(n.id, n.accessToken);
                    continue
                }(0, M.getAccessToken)(n.id)
            } return r
    }

    function eE() {
        if (null == i) return;
        let e = en();
        if (null == e) return;
        let {
            socket: t
        } = e;
        ee = !0, (0, M.pause)(t.accountId, t.accessToken), L.default.track(P.AnalyticEvents.SPOTIFY_AUTO_PAUSED), W.info("Playback auto paused")
    }

    function eI(e) {
        if (e === N.default.getId()) {
            let t = g.default.isCurrentClientInVoiceChannel(),
                n = (0, f.getIsSpeaking)({
                    userId: e,
                    checkSoundSharing: !0,
                    checkSoundboardSounds: !1
                });
            t && n && null != i ? (K.start(k, eE, !1), z.stop()) : z.start(100, () => K.stop(), !1)
        }
        return !1
    }

    function eT(e, t, n) {
        var i, r, s, a, o, l, u, d, _, c, E;
        let I, f, {
            device: S,
            progress_ms: h,
            is_playing: A,
            repeat_state: m,
            item: N,
            context: O
        } = n;
        if (null != N && N.type === y.SpotifyResourceTypes.TRACK) {
            let e = N.id;
            null != N.linked_from && null != N.linked_from.id && (e = N.linked_from.id), I = {
                id: e,
                name: N.name,
                duration: N.duration_ms,
                type: y.SpotifyResourceTypes.TRACK,
                album: {
                    id: null !== (a = null === (i = N.album) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : "",
                    name: null !== (o = null === (r = N.album) || void 0 === r ? void 0 : r.name) && void 0 !== o ? o : "",
                    image: null === (s = N.album) || void 0 === s ? void 0 : s.images[0]
                },
                artists: null !== (l = N.artists) && void 0 !== l ? l : [],
                isLocal: N.is_local || !1
            }
        } else null != N && N.type === y.SpotifyResourceTypes.EPISODE && (I = {
            id: N.id,
            name: N.name,
            duration: N.duration_ms,
            type: y.SpotifyResourceTypes.EPISODE,
            album: {
                id: null !== (c = null === (u = N.show) || void 0 === u ? void 0 : u.id) && void 0 !== c ? c : "",
                name: null !== (E = null === (d = N.show) || void 0 === d ? void 0 : d.name) && void 0 !== E ? E : "",
                image: null === (_ = N.show) || void 0 === _ ? void 0 : _.images[0]
            },
            artists: [],
            isLocal: !1
        });
        if (null != S && !0 !== S.is_active && (S = {
                ...S,
                is_active: !0
            }), null != O && [y.SpotifyResourceTypes.PLAYLIST, y.SpotifyResourceTypes.ALBUM].includes(O.type)) {
            let n = eh.getPlayerState(e);
            f = null != n && null != n.context && n.context.uri === O.uri ? Promise.resolve(n.context) : O.type === y.SpotifyResourceTypes.ALBUM ? Promise.resolve(O) : M.SpotifyAPI.get(e, t, {
                url: O.href
            }).then(e => {
                let {
                    body: t
                } = e;
                return t
            }).catch(e => {
                if (e && 404 === e.status) return null;
                throw e
            })
        } else f = Promise.resolve(void 0);
        return f.then(t => {
            null != t && t.type === y.SpotifyResourceTypes.PLAYLIST && !t.public && (t = null), T.default.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: I,
                volumePercent: null != S ? S.volume_percent : 0,
                isPlaying: A,
                repeat: "off" !== m,
                position: h,
                context: t,
                device: S
            })
        })
    }

    function ef(e, t) {
        return M.SpotifyAPI.get(e, t, {
            url: y.SpotifyEndpoints.PLAYER,
            query: {
                additional_types: "".concat(y.SpotifyResourceTypes.TRACK, ",").concat(y.SpotifyResourceTypes.EPISODE)
            },
            onlyRetryOnAuthorizationErrors: !0
        }).then(n => {
            let i = n.body;
            null != i ? eT(e, t, i).then(() => n) : ei(e)
        }).catch(() => ei(e))
    }
    class eS extends(o = c.default.Store) {
        initialize() {
            this.waitFor(O.default, C.default), this.syncWith([R.default], () => (function() {
                if (null == r || null == en()) return !1;
                let {
                    userId: e
                } = r, t = er(e);
                if (null == t) return X.start(B, () => {
                    null != r && r.userId === e && (0, h.default)()
                }), !1;
                X.stop();
                let {
                    sync_id: n,
                    timestamps: i,
                    party: s
                } = t, a = null != n && r.trackId !== n, o = null != i && r.startTime !== i.start;
                return a || o ? ed(e, t, !1) : null != s && s.id !== r.partyId && (r.partyId = s.id, !0)
            })()), (0, M.fetchIsSpotifyProtocolRegistered)()
        }
        hasConnectedAccount() {
            return Object.keys(J).length > 0
        }
        getActiveSocketAndDevice() {
            return en()
        }
        getPlayableComputerDevices() {
            let e = [];
            for (let t in J) {
                let n = J[t];
                if (!n.connected || null == Z[t]) continue;
                let i = Z[t].find(e => !e.is_restricted && "Computer" === e.type);
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
            return null != en() && null != t && null != n && null != n.id && (0, y.isSpotifyParty)(n.id)
        }
        getSyncingWith() {
            return r
        }
        wasAutoPaused() {
            return ee
        }
        getLastPlayedTrackId() {
            return s
        }
        getTrack() {
            return null != i ? i.track : null
        }
        getPlayerState(e) {
            return $[e]
        }
        shouldShowActivity() {
            return null != i && i.account.showActivity && !p.default.isIdle()
        }
        getActivity() {
            let e, t, n;
            if (null == i) return null != r ? er(r.userId) : null;
            let {
                track: {
                    artists: s,
                    album: a,
                    name: o,
                    id: l,
                    duration: u,
                    isLocal: d,
                    type: _
                },
                startTime: c,
                context: E
            } = i, I = s.slice(0, 5);
            s.length > 0 && (e = I.map(e => {
                let {
                    name: t
                } = e;
                return t.replace(/;/g, "")
            }).join("; "));
            let T = {},
                f = null != a.image ? (0, D.getAssetFromImageURL)(P.PlatformTypes.SPOTIFY, a.image.url) : null;
            null != a.image && null != f && (T.large_image = f), "single" !== a.type && (T.large_text = a.name), null != E && (t = E.uri), n = null != r && null != r.partyId ? r.partyId : "".concat(y.SPOTIFY_PARTY_PREFIX).concat(N.default.getId());
            let S = o.length > 128 ? o.substring(0, 125) + "..." : o,
                h = {
                    name: b.name,
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
            return !d && (h.sync_id = l, h.flags = P.ActivityFlags.PLAY | P.ActivityFlags.SYNC, h.metadata = {
                context_uri: t,
                album_id: a.id,
                artist_ids: I.map(e => {
                    let {
                        id: t
                    } = e;
                    return t
                }),
                type: _
            }), h
        }
    }
    U(eS, "displayName", "SpotifyStore");
    let eh = new eS(T.default, {
        USER_CONNECTIONS_UPDATE: ec,
        CONNECTION_OPEN: ec,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(e) {
            let {
                accountId: t,
                accessToken: n
            } = e;
            return eo(t, n), !1
        },
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(e) {
            let {
                accountId: t
            } = e;
            el(t)
        },
        SPOTIFY_PROFILE_UPDATE: function(e) {
            let {
                accountId: t,
                isPremium: n
            } = e, i = J[t];
            if (null == i) return !1;
            i.isPremium = n, W.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
        },
        SPOTIFY_PLAYER_STATE: function(e) {
            let {
                accountId: t,
                isPlaying: n,
                repeat: s,
                track: a,
                position: o,
                device: l,
                context: u
            } = e, _ = !1;
            if (null != l) {
                if (null != Z[t]) {
                    let e = Z[t].find(e => {
                        let {
                            id: t
                        } = e;
                        return t === l.id
                    });
                    null == e ? (Z[t].push(l), _ = !0) : !(0, E.default)(e, l) && (Object.assign(e, l), _ = !0), eu(t, l.id)
                } else Z[t] = [l], _ = !0
            }
            n ? null == et || et.start(k, eE) : (a = null, null == et || et.stop());
            let c = O.default.getAccount(t, P.PlatformTypes.SPOTIFY);
            if (null == c) return _;
            let I = $[t],
                T = null != a ? {
                    account: c,
                    track: a,
                    startTime: function(e, t) {
                        let n = Date.now(),
                            i = null != e ? e.startTime : 0,
                            r = n - t;
                        return Math.abs(r - i) > F ? r : i
                    }(I, o),
                    context: u,
                    repeat: s
                } : null,
                f = null != l && null != r && 0 === o && !n;
            !f && ($[t] = T);
            let S = i;
            if (i = d().values($).find(e => null != e), eI(N.default.getId()), null == a || f ? Q.stop() : Q.start(a.duration - o + V, () => ei(c.id)), null != r && (!n && o > 0 || null == l || null != T && r.trackId !== T.track.id) ? (W.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(V, "ms")), q.start(V, () => {
                    W.info("Stopping listening along"), (0, h.default)(), ei(c.id)
                })) : q.isStarted() && (W.info("Listen along stop cancelled as playback of track resumed"), q.stop()), S === i || null == I && null == T || null != I && null != T && I.track.id === T.track.id && I.startTime === T.startTime) return _;
            null != a && L.default.track(P.AnalyticEvents.ACTIVITY_UPDATED, {
                party_platform: P.PlatformTypes.SPOTIFY,
                track_id: a.id,
                has_images: !0,
                details: a.album.name,
                state: a.name,
                album_id: a.album.id,
                author_ids: a.artists.map(e => e.id),
                author_names: a.artists.map(e => e.name)
            })
        },
        SPOTIFY_PLAYER_PLAY: function(e) {
            let {
                id: t
            } = e;
            s = t
        },
        ACTIVITY_PLAY: function(e) {
            var t;
            let n, {
                    activity: i,
                    metadata: s
                } = e,
                a = en();
            if (null == a) return !1;
            let {
                socket: o,
                device: l
            } = a, {
                sync_id: u,
                party: d
            } = i;
            return !!(null != u && null != d && null != d.id && (0, y.isSpotifyParty)(d.id)) && (null != s && (n = s.context_uri), null != r && e_(), null != s && void((0, M.play)(o.accountId, o.accessToken, u, null !== (t = s.type) && void 0 !== t ? t : y.SpotifyResourceTypes.TRACK, {
                contextUri: n,
                deviceId: l.id
            }), W.info("Play started: ".concat(o.accountId, " playing ").concat(u, " on ").concat(l.name))))
        },
        ACTIVITY_SYNC: function(e) {
            let {
                activity: t,
                userId: n
            } = e;
            return ed(n, t, !0)
        },
        ACTIVITY_SYNC_STOP: e_,
        SPOTIFY_SET_DEVICES: function(e) {
            let {
                accountId: t,
                devices: n
            } = e;
            Z[t] = n, W.info("Devices updated for ".concat(t, ":"), n)
        },
        SPOTIFY_SET_ACTIVE_DEVICE: function(e) {
            let {
                accountId: t,
                deviceId: n
            } = e;
            eu(t, n)
        },
        SPEAKING: function(e) {
            let {
                userId: t
            } = e;
            return eI(t)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: n
                } = t;
                return eI(n) || e
            }, !1)
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            let {
                settings: t
            } = e;
            if ((null == t ? void 0 : t.desktopSettings) != null) {
                null == et || et.stop();
                let {
                    sourceId: e,
                    sound: n
                } = null == t ? void 0 : t.desktopSettings;
                null != e && m.default.getObservedAppNameForWindow(e) === b.name && n ? (et = new I.Interval).start(k, eE) : et = null
            }
        }
    });
    t.default = eh
}