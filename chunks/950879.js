function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("585949"),
        d = n("35523"),
        _ = n("736381"),
        E = n("851285"),
        p = n("217014"),
        m = n("518254"),
        y = n("935741"),
        I = n("947063"),
        h = n("335911"),
        O = n("545072"),
        T = n("97478"),
        S = n("894288"),
        v = n("575098"),
        g = n("140591"),
        A = n("374550"),
        b = n("779250"),
        N = n("942060"),
        R = n("910375"),
        C = n("201163"),
        P = n("281767"),
        D = n("382021");

    function L(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function M(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function U(e) {
        return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function w(e, t) {
        return (w = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var k = window.DiscordNative;
    N.socket.dispatcher.getDispatchHandler = C.default;
    var G = new d.default("ConnectionStore"),
        B = 0,
        j = null,
        F = !0,
        V = null;

    function H() {
        var e;
        return e = function(e) {
            var t, n, r, o, i, a, u, s, l, c, d, _;
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
            }(this, function(E) {
                switch (E.label) {
                    case 0:
                        if (B = Date.now(), j = e.sessionId, N.localPresenceState.handleConnectionOpen(), t = {}, !(null != (n = S.default.getVoiceChannelId()))) return [3, 3];
                        if (d = (null === (u = window) || void 0 === u ? void 0 : null === (a = u.performance) || void 0 === a ? void 0 : null === (i = a.getEntriesByType) || void 0 === i ? void 0 : null === (o = i.call(a, "navigation")) || void 0 === o ? void 0 : null === (r = o[0]) || void 0 === r ? void 0 : r.type) === "reload") return [3, 2];
                        return [4, null == k ? void 0 : null === (c = k.processUtils) || void 0 === c ? void 0 : null === (l = c.getLastCrash) || void 0 === l ? void 0 : l.call(c)];
                    case 1:
                        d = (null === (s = E.sent()) || void 0 === s ? void 0 : s.rendererCrashReason) != null, E.label = 2;
                    case 2:
                        d || !F ? null != (_ = y.default.getChannel(n)) && (t = {
                            guildId: _.getGuildId(),
                            channelId: n
                        }) : (O.default.setLastSessionVoiceChannelId(null != n ? n : null), f.default.selectVoiceChannel(null)), E.label = 3;
                    case 3:
                        return N.localVoiceState.update(t, !0), N.localLobbyVoiceStates.update({}, !0), F = !1, [2]
                }
            })
        }, (H = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    L(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    L(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function x() {
        N.localVoiceState.update()
    }

    function Y() {
        return N.localVoiceState.update(), N.localLobbyVoiceStates.update(), !1
    }

    function W() {
        return N.localPresenceState.update(), !1
    }

    function K() {
        return N.localLobbyVoiceStates.update(), !1
    }

    function z(e) {
        N.socket.isSessionEstablished() && N.socket.streamDelete(e)
    }
    var X = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && w(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = U(t);
            if (n) {
                var a = U(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(p.default, S.default, y.default, m.default, I.default, E.default), this.syncWith([h.default], Y), this.syncWith([v.default], W)
            }
        }, {
            key: "getSocket",
            value: function() {
                return N.socket
            }
        }, {
            key: "isTryingToConnect",
            value: function() {
                return !N.socket.isClosed()
            }
        }, {
            key: "isConnected",
            value: function() {
                return N.socket.isSessionEstablished()
            }
        }, {
            key: "isConnectedOrOverlay",
            value: function() {
                return N.socket.isSessionEstablished() || __OVERLAY__
            }
        }, {
            key: "lastTimeConnectedChanged",
            value: function() {
                return B
            }
        }], M(r.prototype, o), i && M(r, i), u
    }(l.default.Store);
    i = "GatewayConnectionStore", (o = "displayName") in(r = X) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new X(c.default, {
        START_SESSION: function() {
            return N.socket.isClosed() ? (G.verbose("Socket is reconnecting because of starting new session"), N.socket.connect()) : (G.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
        },
        LOGIN_SUCCESS: function() {
            return G.verbose("session refresh dispatched", {
                isEstablished: N.socket.isSessionEstablished()
            }), !!N.socket.isSessionEstablished() && (N.socket.close(), N.socket.connect())
        },
        LOGOUT: function(e) {
            e.isSwitchingAccount && N.localPresenceState.handleAccountSwitch(), G.verbose("Closing socket because of logout"), N.socket.close()
        },
        CLEAR_CACHES: function(e) {
            return e.resetSocket && (N.socket.close(), N.socket.dispatcher.clear(), N.socket.connect()), !1
        },
        CONNECTION_OPEN: function(e) {
            ! function(e) {
                H.apply(this, arguments)
            }(e)
        },
        CONNECTION_CLOSED: function() {
            G.verbose("connection closed dispatched"), B = Date.now()
        },
        RTC_CONNECTION_STATE: function(e) {
            if (e.state !== P.RTCConnectionStates.DISCONNECTED) return !1;
            e.willReconnect && (null != e.streamKey ? N.socket.streamPing(e.streamKey) : N.socket.voiceServerPing())
        },
        VOICE_CHANNEL_SELECT: function(e) {
            return N.localVoiceState.update({
                guildId: e.guildId,
                channelId: e.channelId
            }), (0, A.isIOS)() && null == e.channelId && V === P.AppStates.BACKGROUND && N.socket.close(!0), !1
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                if (p.default.getId() !== t.userId) return e;
                if (t.sessionId === j) N.localVoiceState.setState({
                    guildId: t.guildId,
                    channelId: t.channelId
                });
                else {
                    if (t.guildId !== N.localVoiceState.guildId) return e;
                    N.localVoiceState.setState({
                        guildId: null,
                        channelId: null
                    })
                }
                return !0
            }, !1)
        },
        GUILD_DELETE: function(e) {
            e.guild.id === N.localVoiceState.guildId && N.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CHANNEL_DELETE: function(e) {
            e.channel.id === N.localVoiceState.channelId && N.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        CALL_DELETE: function(e) {
            e.channelId === N.localVoiceState.channelId && N.localVoiceState.setState({
                guildId: null,
                channelId: null
            })
        },
        APP_STATE_UPDATE: function(e) {
            return (0, A.isIOS)() ? (p.default.isAuthenticated() && (V === P.AppStates.INACTIVE && e.state === P.AppStates.BACKGROUND && null == N.localVoiceState.channelId ? N.socket.close(!0) : V === P.AppStates.BACKGROUND && e.state === P.AppStates.ACTIVE && (R.setIsPaused(!1), N.socket.connect())), V = e.state) : e.state === P.AppStates.ACTIVE && (R.setIsPaused(!1), p.default.isAuthenticated() && N.socket.resetBackoff("App state is active")), !1
        },
        GUILD_MEMBERS_REQUEST: function(e) {
            return N.socket.isSessionEstablished() && ("userIds" in e ? s()(e.userIds).chunk(100).forEach(function(t) {
                N.socket.requestGuildMembers(e.guildIds, {
                    userIds: t,
                    presences: !!e.presences
                })
            }) : N.socket.requestGuildMembers(e.guildIds, {
                query: e.query,
                limit: e.limit,
                presences: !!e.presences
            })), !1
        },
        GUILD_SEARCH_RECENT_MEMBERS: function(e) {
            var t = e.guildId,
                n = e.query,
                r = e.continuationToken;
            N.socket.isSessionEstablished() && N.socket.searchRecentMembers(t, {
                query: n,
                continuationToken: r
            })
        },
        GUILD_SUBSCRIPTIONS_FLUSH: function(e) {
            var t = e.subscriptions;
            return N.socket.isSessionEstablished() && N.socket.updateGuildSubscriptions(t), !1
        },
        CALL_CONNECT: function(e) {
            var t = e.channelId;
            return N.socket.isSessionEstablished() && N.socket.callConnect(t), !1
        },
        CALL_CONNECT_MULTIPLE: function(e) {
            var t = e.channelIds;
            return N.socket.isSessionEstablished() && t.forEach(function(e) {
                N.socket.callConnect(e)
            }), !1
        },
        LOBBY_CONNECT: function(e) {
            var t = e.lobbyId,
                n = e.lobbySecret;
            return N.socket.isSessionEstablished() && N.socket.lobbyConnect(t, n), !1
        },
        LOBBY_DISCONNECT: function(e) {
            var t = e.lobbyId;
            return N.socket.isSessionEstablished() && N.socket.lobbyDisconnect(t), N.localLobbyVoiceStates.update(), !1
        },
        LOBBY_VOICE_CONNECT: K,
        LOBBY_VOICE_DISCONNECT: K,
        RPC_APP_DISCONNECTED: K,
        STREAM_CREATE: x,
        STREAM_START: function(e) {
            var t = e.streamType,
                n = e.guildId,
                r = e.channelId;
            if (N.socket.isSessionEstablished()) {
                var o, i, a = null != n ? null === (o = y.default.getChannel(r)) || void 0 === o ? void 0 : o.rtcRegion : null === (i = m.default.getCall(r)) || void 0 === i ? void 0 : i.region;
                N.socket.streamCreate(t, n, r, null != a ? a : T.default.getPreferredRegion())
            }
            return !1
        },
        STREAM_WATCH: function(e) {
            var t, n = e.streamKey,
                r = e.allowMultiple;
            if (N.socket.isSessionEstablished()) {
                if (r);
                else {
                    ;
                    t = function() {
                        return g.default.getAllActiveStreamKeys().find(function(e) {
                            return (0, _.decodeStreamKey)(e).ownerId === p.default.getId()
                        })
                    }(), g.default.getAllActiveStreamKeys().filter(function(e) {
                        return e !== t
                    }).forEach(function(e) {
                        return z(e)
                    })
                }
                N.socket.streamWatch(n)
            }
            return !1
        },
        STREAM_STOP: function(e) {
            return z(e.streamKey), x(), !1
        },
        STREAM_SET_PAUSED: function(e) {
            var t = e.streamKey,
                n = e.paused;
            N.socket.isSessionEstablished() && N.socket.streamSetPaused(t, n)
        },
        PUSH_NOTIFICATION_CLICK: function() {
            return N.socket.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
        },
        EMBEDDED_ACTIVITY_DISCONNECT: function(e) {
            var t, n, r = e.channelId,
                o = e.applicationId,
                i = null !== (n = null === (t = y.default.getChannel(r)) || void 0 === t ? void 0 : t.getGuildId()) && void 0 !== n ? n : null;
            N.socket.embeddedActivityClose(i, r, o)
        },
        REQUEST_FORUM_UNREADS: function(e) {
            var t = e.guildId,
                n = e.channelId,
                r = e.threads;
            N.socket.requestForumUnreads(t, n, r)
        },
        REQUEST_SOUNDBOARD_SOUNDS: function(e) {
            var t = e.guildIds;
            N.socket.requestSoundboardSounds(t)
        },
        REMOTE_COMMAND: function(e) {
            var t = e.sessionId,
                n = e.payload;
            return N.socket.isSessionEstablished() && N.socket.remoteCommand(t, n), !1
        },
        RESET_SOCKET: function(e) {
            N.socket.connectionState !== b.default.WILL_RECONNECT && N.socket.resetSocketOnError(e.args)
        },
        RTC_SPEED_TEST_START_TEST: function() {
            return N.socket.isSessionEstablished() && N.socket.speedTestCreate(T.default.getPreferredRegion()), !1
        },
        RTC_SPEED_TEST_STOP_TEST: function() {
            return N.socket.isSessionEstablished() && N.socket.speedTestDelete(), !1
        },
        CLIPS_SETTINGS_UPDATE: x,
        RUNNING_GAMES_CHANGE: x,
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t;
            e.settings.type === D.UserSettingsTypes.PRELOADED_USER_SETTINGS && (null === (t = e.settings.proto.clips) || void 0 === t ? void 0 : t.allowVoiceRecording) != null && x()
        }
    })
}