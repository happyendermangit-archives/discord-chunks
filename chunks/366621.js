function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("392711"),
        c = n.n(l),
        f = n("235923"),
        d = n("898511"),
        _ = n("252546"),
        E = n("945816"),
        p = n("629815"),
        m = n("904435"),
        y = n("386823"),
        I = n("466849"),
        h = n("35523"),
        O = n("654370"),
        T = n("217014"),
        S = n("295453"),
        v = n("517088"),
        g = n("868447"),
        A = n("380019"),
        b = n("665863"),
        N = n("870331"),
        R = n("23088"),
        C = n("388990"),
        P = n("966834"),
        D = n("935776"),
        L = n("281767");

    function M(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function U(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function w(e, t, n) {
        return t && U(e.prototype, t), n && U(e, n), e
    }

    function k(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function G(e) {
        return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function B(e, t) {
        return (B = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var j = y.default.get(L.PlatformTypes.SPOTIFY),
        F = "hm://pusher/v1/connections/",
        V = 30 * C.default.Millis.SECOND,
        H = 30 * C.default.Millis.SECOND,
        x = 5 * C.default.Millis.MINUTE,
        Y = 5 * C.default.Millis.SECOND,
        W = 1.5 * C.default.Millis.SECOND,
        K = 1 * C.default.Millis.MINUTE,
        z = 3 * C.default.Millis.SECOND;
    (r = o || (o = {})).PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED", r.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED";
    var X = {
            MESSAGE: "message",
            PING: "ping",
            PONG: "pong"
        },
        q = {
            SINGLE: "single"
        },
        Q = new h.default("Spotify"),
        J = new E.Timeout,
        Z = new E.Timeout,
        $ = new E.Timeout,
        ee = new E.Timeout,
        et = new E.Timeout,
        en = {},
        er = {},
        eo = {},
        ei = !1,
        ea = null;

    function eu() {
        for (var e in en) {
            var t = en[e];
            if (t.connected && null != er[e]) {
                var n = er[e].find(function(e) {
                    return e.is_active
                });
                if (null != n) return {
                    socket: t,
                    device: n
                }
            }
        }
    }

    function es(e) {
        p.default.dispatch({
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

    function el(e) {
        return g.default.findActivity(e, function(e) {
            return null != e.party && null != e.party.id && (0, D.isSpotifyParty)(e.party.id)
        })
    }
    var ec = new Set([WebSocket.CONNECTING, WebSocket.OPEN]),
        ef = function() {
            function e(t, n) {
                var r = this;
                M(this, e), k(this, "accessToken", void 0), k(this, "accountId", void 0), k(this, "connectionId", void 0), k(this, "isPremium", void 0), k(this, "pingInterval", void 0), k(this, "backoff", void 0), k(this, "socket", void 0), k(this, "_requestedDisconnect", !1), k(this, "_requestedConnect", !1), k(this, "handleDeviceStateChange", c().throttle(function() {
                    (0, P.getDevices)(r.accountId, r.accessToken), eT(r.accountId, r.accessToken)
                }, z)), this.accountId = t, this.accessToken = n, this.pingInterval = new E.Interval, this.backoff = new f.default(void 0, K), this.connect()
            }
            return w(e, [{
                key: "connected",
                get: function() {
                    return null != this.socket && ec.has(this.socket.readyState)
                }
            }, {
                key: "connect",
                value: function() {
                    var e = this;
                    !this.connected && !this._requestedConnect && (Q.info("WS Connecting"), this._requestedDisconnect = !1, this._requestedConnect = !0, eT(this.accountId, this.accessToken).then(function() {
                        e._requestedConnect = !1, e.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(e.accessToken)), e.socket.onopen = e.handleOpen.bind(e), e.socket.onmessage = e.handleMessage.bind(e), e.socket.onclose = e.socket.onerror = e.handleClose.bind(e)
                    }).catch(function(t) {
                        Q.error(t), e._requestedConnect = !1, e.handleClose()
                    }))
                }
            }, {
                key: "disconnect",
                value: function() {
                    this._requestedDisconnect = !0, this.backoff.cancel();
                    try {
                        var e;
                        null === (e = this.socket) || void 0 === e || e.close()
                    } catch (e) {}
                }
            }, {
                key: "ping",
                value: function() {
                    var e;
                    this.connected && (null === (e = this.socket) || void 0 === e || e.send(JSON.stringify({
                        type: X.PING
                    })))
                }
            }, {
                key: "handleOpen",
                value: function() {
                    var e = this;
                    Q.info("WS Connected"), this.backoff.succeed(), this.pingInterval.start(V, function() {
                        return e.ping()
                    }), (0, P.getProfile)(this.accountId, this.accessToken), (0, P.getDevices)(this.accountId, this.accessToken)
                }
            }, {
                key: "handleMessage",
                value: function(e) {
                    var t = e.data;
                    if ("string" == typeof t) {
                        var n = JSON.parse(t),
                            r = n.type,
                            o = n.uri,
                            i = n.payloads;
                        switch (r) {
                            case X.MESSAGE:
                                if ("string" == typeof o && o.startsWith(F)) this.connectionId = decodeURIComponent(o.split(F)[1]), (0, P.subscribePlayerStateNotifications)(this.accountId, this.accessToken, this.connectionId);
                                else if (Array.isArray(i)) {
                                    var a = !0,
                                        u = !1,
                                        s = void 0;
                                    try {
                                        for (var l, c = i[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                                            var f = l.value.events;
                                            if (null != f) {
                                                var d = !0,
                                                    _ = !1,
                                                    E = void 0;
                                                try {
                                                    for (var p, m = f[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                                                        var y = p.value;
                                                        this.handleEvent(y)
                                                    }
                                                } catch (e) {
                                                    _ = !0, E = e
                                                } finally {
                                                    try {
                                                        !d && null != m.return && m.return()
                                                    } finally {
                                                        if (_) throw E
                                                    }
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        u = !0, s = e
                                    } finally {
                                        try {
                                            !a && null != c.return && c.return()
                                        } finally {
                                            if (u) throw s
                                        }
                                    }
                                }
                            case X.PONG:
                        }
                    }
                }
            }, {
                key: "handleClose",
                value: function() {
                    var e = this;
                    if (this.pingInterval.stop(), !this._requestedDisconnect) try {
                        var t = this.backoff.fail(function() {
                            !e._requestedDisconnect && e.connect()
                        });
                        Q.info("WS Disconnected. Next retry in ".concat(Math.round(t), "ms"))
                    } catch (e) {}
                }
            }, {
                key: "handleEvent",
                value: function(e) {
                    var t = e.type,
                        n = e.event;
                    switch (t) {
                        case "PLAYER_STATE_CHANGED":
                            null != n && null != n.state && eO(this.accountId, this.accessToken, n.state);
                            break;
                        case "DEVICE_STATE_CHANGED":
                            this.handleDeviceStateChange()
                    }
                }
            }]), e
        }();

    function ed(e, t) {
        e in en ? (en[e].accessToken = t, Q.info("Updated account access token: ".concat(e))) : (en[e] = new ef(e, t), Q.info("Added account: ".concat(e)))
    }

    function e_(e) {
        if (e in en) {
            en[e].disconnect(), delete en[e];
            var t = eo[e];
            null != t && null != i && t.track.id === i.track.id && (i = null), delete eo[e], Q.info("Removed account: ".concat(e))
        }
    }

    function eE(e, t) {
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = er[e][Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                u.is_active = u.id === t
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
    }

    function ep(e, t, n) {
        var r, o, i = eu();
        if (null == i) return !1;
        var u = i.socket,
            s = i.device,
            l = t.sync_id,
            c = t.party,
            f = t.timestamps;
        if (null == l || null == c || null == c.id || !(0, D.isSpotifyParty)(c.id)) return !1;
        var d = null != f && null != f.start ? f.start : Date.now(),
            _ = Math.max(0, Date.now() - d),
            E = !1,
            p = eo[u.accountId];
        null != p && !1 === p.repeat && (E = null);
        var m = (0, D.getSpotifyResourceType)(null !== (o = null === (r = t.metadata) || void 0 === r ? void 0 : r.type) && void 0 !== o ? o : D.SpotifyResourceTypes.TRACK);
        if (null != m) {
            (0, P.play)(u.accountId, u.accessToken, l, m, {
                position: +_,
                deviceId: s.id,
                repeat: E
            }), a = {
                userId: e,
                partyId: c.id,
                trackId: l,
                startTime: d
            };
            var y = "presence change";
            n && (y = "started", N.default.track(L.AnalyticEvents.SPOTIFY_LISTEN_ALONG_STARTED, {
                party_id: c.id,
                other_user_id: e
            })), Q.info("Listen along ".concat(y, ": ").concat(u.accountId, " to ").concat(e, " playing ").concat(l, " on ").concat(s.name))
        }
    }

    function em() {
        N.default.track(L.AnalyticEvents.SPOTIFY_LISTEN_ALONG_ENDED, {
            party_id: null != a ? a.partyId : null,
            other_user_id: null != a ? a.userId : null
        });
        var e = null != a ? a.trackId : null;
        a = null, Q.info("Listen along stopped");
        var t = eu();
        if (null != t) {
            var n = t.socket,
                r = eo[n.accountId];
            null != r && r.track.id === e && (0, P.pause)(n.accountId, n.accessToken)
        }
    }

    function ey() {
        var e = Object.keys(en),
            t = S.default.getAccounts().filter(function(e) {
                return e.type === L.PlatformTypes.SPOTIFY
            });
        if (null == t) return !1;
        var n = t.map(function(e) {
                return e.id
            }),
            r = !0,
            o = !1,
            a = void 0;
        try {
            for (var u, s = e[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                var l = u.value;
                !n.includes(l) && e_(l)
            }
        } catch (e) {
            o = !0, a = e
        } finally {
            try {
                !r && null != s.return && s.return()
            } finally {
                if (o) throw a
            }
        }
        var c = !1,
            f = !0,
            d = !1,
            _ = void 0;
        try {
            for (var E, p = t[Symbol.iterator](); !(f = (E = p.next()).done); f = !0) {
                var m = E.value;
                if (null != i && i.account.id === m.id && (i.account = m, c = !0), !e.includes(m.id)) {
                    if (null != m.accessToken) {
                        ed(m.id, m.accessToken);
                        continue
                    }(0, P.getAccessToken)(m.id)
                }
            }
        } catch (e) {
            d = !0, _ = e
        } finally {
            try {
                !f && null != p.return && p.return()
            } finally {
                if (d) throw _
            }
        }
        return c
    }

    function eI() {
        if (null != i) {
            var e = eu();
            if (null != e) {
                var t = e.socket;
                ei = !0, (0, P.pause)(t.accountId, t.accessToken), N.default.track(L.AnalyticEvents.SPOTIFY_AUTO_PAUSED), Q.info("Playback auto paused")
            }
        }
    }

    function eh(e) {
        if (e === T.default.getId()) {
            var t = b.default.isCurrentClientInVoiceChannel(),
                n = (0, m.getIsSpeaking)({
                    userId: e,
                    checkSoundSharing: !0,
                    checkSoundboardSounds: !1
                });
            t && n && null != i ? (J.start(H, eI, !1), Z.stop()) : Z.start(100, function() {
                return J.stop()
            }, !1)
        }
        return !1
    }

    function eO(e, t, n) {
        var r, o, i, a, u, s, l, c, f = n.device,
            d = n.progress_ms,
            _ = n.is_playing,
            E = n.repeat_state,
            m = n.item,
            y = n.context;
        if (null != m && m.type === D.SpotifyResourceTypes.TRACK) {
            var I, h, O, T, S, v, g, A = m.id;
            null != m.linked_from && null != m.linked_from.id && (A = m.linked_from.id), I = {
                id: A,
                name: m.name,
                duration: m.duration_ms,
                type: D.SpotifyResourceTypes.TRACK,
                album: {
                    id: null !== (S = null === (h = m.album) || void 0 === h ? void 0 : h.id) && void 0 !== S ? S : "",
                    name: null !== (v = null === (O = m.album) || void 0 === O ? void 0 : O.name) && void 0 !== v ? v : "",
                    image: null === (T = m.album) || void 0 === T ? void 0 : T.images[0]
                },
                artists: null !== (g = m.artists) && void 0 !== g ? g : [],
                isLocal: m.is_local || !1
            }
        } else if (null != m && m.type === D.SpotifyResourceTypes.EPISODE) {
            ;
            I = {
                id: m.id,
                name: m.name,
                duration: m.duration_ms,
                type: D.SpotifyResourceTypes.EPISODE,
                album: {
                    id: null !== (a = null === (r = m.show) || void 0 === r ? void 0 : r.id) && void 0 !== a ? a : "",
                    name: null !== (u = null === (o = m.show) || void 0 === o ? void 0 : o.name) && void 0 !== u ? u : "",
                    image: null === (i = m.show) || void 0 === i ? void 0 : i.images[0]
                },
                artists: [],
                isLocal: !1
            }
        }
        if (null != f && !0 !== f.is_active) {
            ;
            s = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        k(e, t, n[t])
                    })
                }
                return e
            }({}, f), l = (l = {
                is_active: !0
            }, l), Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(l)).forEach(function(e) {
                Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e))
            }), f = s
        }
        if (null != y && [D.SpotifyResourceTypes.PLAYLIST, D.SpotifyResourceTypes.ALBUM].includes(y.type)) {
            var b = ev.getPlayerState(e);
            c = null != b && null != b.context && b.context.uri === y.uri ? Promise.resolve(b.context) : y.type === D.SpotifyResourceTypes.ALBUM ? Promise.resolve(y) : P.SpotifyAPI.get(e, t, {
                url: y.href
            }).then(function(e) {
                return e.body
            }).catch(function(e) {
                if (e && 404 === e.status) return null;
                throw e
            })
        } else c = Promise.resolve(void 0);
        return c.then(function(t) {
            null != t && t.type === D.SpotifyResourceTypes.PLAYLIST && !t.public && (t = null), p.default.dispatch({
                type: "SPOTIFY_PLAYER_STATE",
                accountId: e,
                track: I,
                volumePercent: null != f ? f.volume_percent : 0,
                isPlaying: _,
                repeat: "off" !== E,
                position: d,
                context: t,
                device: f
            })
        })
    }

    function eT(e, t) {
        return P.SpotifyAPI.get(e, t, {
            url: D.SpotifyEndpoints.PLAYER,
            query: {
                additional_types: "".concat(D.SpotifyResourceTypes.TRACK, ",").concat(D.SpotifyResourceTypes.EPISODE)
            },
            onlyRetryOnAuthorizationErrors: !0
        }).then(function(n) {
            var r = n.body;
            null != r ? eO(e, t, r).then(function() {
                return n
            }) : es(e)
        }).catch(function() {
            return es(e)
        })
    }
    var eS = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && B(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = G(t);
            if (n) {
                var a = G(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function o() {
            return M(this, o), r.apply(this, arguments)
        }
        return w(o, [{
            key: "initialize",
            value: function() {
                this.waitFor(S.default, A.default), this.syncWith([g.default], function() {
                    return function() {
                        if (null == a || null == eu()) return !1;
                        var e = a.userId,
                            t = el(e);
                        if (null == t) return $.start(x, function() {
                            null != a && a.userId === e && (0, I.default)()
                        }), !1;
                        $.stop();
                        var n = t.sync_id,
                            r = t.timestamps,
                            o = t.party,
                            i = null != n && a.trackId !== n,
                            u = null != r && a.startTime !== r.start;
                        return i || u ? ep(e, t, !1) : null != o && o.id !== a.partyId && (a.partyId = o.id, !0)
                    }()
                }), (0, P.fetchIsSpotifyProtocolRegistered)()
            }
        }, {
            key: "hasConnectedAccount",
            value: function() {
                return Object.keys(en).length > 0
            }
        }, {
            key: "getActiveSocketAndDevice",
            value: function() {
                return eu()
            }
        }, {
            key: "getPlayableComputerDevices",
            value: function() {
                var e = [];
                for (var t in en) {
                    var n = en[t];
                    if (n.connected && null != er[t]) {
                        var r = er[t].find(function(e) {
                            return !e.is_restricted && "Computer" === e.type
                        });
                        null != r && e.push({
                            socket: n,
                            device: r
                        })
                    }
                }
                return e
            }
        }, {
            key: "canPlay",
            value: function(e) {
                var t = e.sync_id,
                    n = e.party;
                return null != eu() && null != t && null != n && null != n.id && (0, D.isSpotifyParty)(n.id)
            }
        }, {
            key: "getSyncingWith",
            value: function() {
                return a
            }
        }, {
            key: "wasAutoPaused",
            value: function() {
                return ei
            }
        }, {
            key: "getLastPlayedTrackId",
            value: function() {
                return u
            }
        }, {
            key: "getTrack",
            value: function() {
                return null != i ? i.track : null
            }
        }, {
            key: "getPlayerState",
            value: function(e) {
                return eo[e]
            }
        }, {
            key: "shouldShowActivity",
            value: function() {
                return null != i && i.account.showActivity && !v.default.isIdle()
            }
        }, {
            key: "getActivity",
            value: function() {
                if (null == i) return null != a ? el(a.userId) : null;
                var e, t, n, r = i.track,
                    o = r.artists,
                    u = r.album,
                    s = r.name,
                    l = r.id,
                    c = r.duration,
                    f = r.isLocal,
                    d = r.type,
                    _ = i.startTime,
                    E = i.context,
                    p = o.slice(0, 5);
                o.length > 0 && (e = p.map(function(e) {
                    return e.name.replace(/;/g, "")
                }).join("; "));
                var m = {},
                    y = null != u.image ? (0, R.getAssetFromImageURL)(L.PlatformTypes.SPOTIFY, u.image.url) : null;
                null != u.image && null != y && (m.large_image = y), "single" !== u.type && (m.large_text = u.name), null != E && (t = E.uri), n = null != a && null != a.partyId ? a.partyId : "".concat(D.SPOTIFY_PARTY_PREFIX).concat(T.default.getId());
                var I = s.length > 128 ? s.substring(0, 125) + "..." : s,
                    h = {
                        name: j.name,
                        assets: m,
                        details: I,
                        state: e,
                        timestamps: {
                            start: _,
                            end: _ + c
                        },
                        party: {
                            id: n
                        }
                    };
                return !f && (h.sync_id = l, h.flags = L.ActivityFlags.PLAY | L.ActivityFlags.SYNC, h.metadata = {
                    context_uri: t,
                    album_id: u.id,
                    artist_ids: p.map(function(e) {
                        return e.id
                    }),
                    type: d
                }), h
            }
        }]), o
    }(d.default.Store);
    k(eS, "displayName", "SpotifyStore");
    var ev = new eS(p.default, {
        USER_CONNECTIONS_UPDATE: ey,
        CONNECTION_OPEN: ey,
        SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(e) {
            return ed(e.accountId, e.accessToken), !1
        },
        SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(e) {
            e_(e.accountId)
        },
        SPOTIFY_PROFILE_UPDATE: function(e) {
            var t = e.accountId,
                n = e.isPremium,
                r = en[t];
            if (null == r) return !1;
            r.isPremium = n, Q.info("Profile updated for ".concat(t, ": isPremium = ").concat(n))
        },
        SPOTIFY_PLAYER_STATE: function(e) {
            var t, n, r, o, u, s = e.accountId,
                l = e.isPlaying,
                f = e.repeat,
                d = e.track,
                E = e.position,
                p = e.device,
                m = e.context,
                y = !1;
            if (null != p) {
                if (null != er[s]) {
                    var h = er[s].find(function(e) {
                        return e.id === p.id
                    });
                    null == h ? (er[s].push(p), y = !0) : !(0, _.default)(h, p) && (Object.assign(h, p), y = !0), eE(s, p.id)
                } else er[s] = [p], y = !0
            }
            l ? null == ea || ea.start(H, eI) : (d = null, null == ea || ea.stop());
            var O = S.default.getAccount(s, L.PlatformTypes.SPOTIFY);
            if (null == O) return y;
            var v = eo[s];
            var g = null != d ? {
                    account: O,
                    track: d,
                    startTime: (t = v, n = E, r = Date.now(), o = null != t ? t.startTime : 0, Math.abs((u = r - n) - o) > W ? u : o),
                    context: m,
                    repeat: f
                } : null,
                A = null != p && null != a && 0 === E && !l;
            !A && (eo[s] = g);
            var b = i;
            if (i = c().values(eo).find(function(e) {
                    return null != e
                }), eh(T.default.getId()), null == d || A ? ee.stop() : ee.start(d.duration - E + Y, function() {
                    return es(O.id)
                }), null != a && (!l && E > 0 || null == p || null != g && a.trackId !== g.track.id) ? (Q.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(Y, "ms")), et.start(Y, function() {
                    Q.info("Stopping listening along"), (0, I.default)(), es(O.id)
                })) : et.isStarted() && (Q.info("Listen along stop cancelled as playback of track resumed"), et.stop()), b === i || null == v && null == g || null != v && null != g && v.track.id === g.track.id && v.startTime === g.startTime) return y;
            null != d && N.default.track(L.AnalyticEvents.ACTIVITY_UPDATED, {
                party_platform: L.PlatformTypes.SPOTIFY,
                track_id: d.id,
                has_images: !0,
                details: d.album.name,
                state: d.name,
                album_id: d.album.id,
                author_ids: d.artists.map(function(e) {
                    return e.id
                }),
                author_names: d.artists.map(function(e) {
                    return e.name
                })
            })
        },
        SPOTIFY_PLAYER_PLAY: function(e) {
            u = e.id
        },
        ACTIVITY_PLAY: function(e) {
            var t, n, r = e.activity,
                o = e.metadata,
                i = eu();
            if (null == i) return !1;
            var u = i.socket,
                s = i.device,
                l = r.sync_id,
                c = r.party;
            return !!(null != l && null != c && null != c.id && (0, D.isSpotifyParty)(c.id)) && (null != o && (t = o.context_uri), null != a && em(), null != o && void((0, P.play)(u.accountId, u.accessToken, l, null !== (n = o.type) && void 0 !== n ? n : D.SpotifyResourceTypes.TRACK, {
                contextUri: t,
                deviceId: s.id
            }), Q.info("Play started: ".concat(u.accountId, " playing ").concat(l, " on ").concat(s.name))))
        },
        ACTIVITY_SYNC: function(e) {
            var t = e.activity;
            return ep(e.userId, t, !0)
        },
        ACTIVITY_SYNC_STOP: em,
        SPOTIFY_SET_DEVICES: function(e) {
            var t = e.accountId,
                n = e.devices;
            er[t] = n, Q.info("Devices updated for ".concat(t, ":"), n)
        },
        SPOTIFY_SET_ACTIVE_DEVICE: function(e) {
            eE(e.accountId, e.deviceId)
        },
        SPEAKING: function(e) {
            return eh(e.userId)
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                return eh(t.userId) || e
            }, !1)
        },
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            var t = e.settings;
            if ((null == t ? void 0 : t.desktopSettings) != null) {
                null == ea || ea.stop();
                var n = null == t ? void 0 : t.desktopSettings,
                    r = n.sourceId,
                    o = n.sound;
                null != r && O.default.getObservedAppNameForWindow(r) === j.name && o ? (ea = new E.Interval).start(H, eI) : ea = null
            }
        }
    });
    t.default = ev
}