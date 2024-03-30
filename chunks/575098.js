function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("348327"),
        c = n.n(l),
        f = n("392711"),
        d = n.n(f),
        _ = n("898511"),
        E = n("629815"),
        p = n("157941"),
        m = n("603138"),
        y = n("366621"),
        I = n("53867"),
        h = n("851285"),
        O = n("569492"),
        T = n("367602"),
        S = n("217014"),
        v = n("950520"),
        g = n("517088"),
        A = n("620205"),
        b = n("294324"),
        N = n("868447"),
        R = n("276664"),
        C = n("281767");

    function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function D(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function L(e) {
        return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function M(e, t) {
        return (M = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var U = !1,
        w = C.StatusTypes.ONLINE,
        k = C.StatusTypes.UNKNOWN,
        G = 0,
        B = [],
        j = !1,
        F = !0,
        V = Object.freeze([]),
        H = [];

    function x(e) {
        return (0, T.shouldShareApplicationActivity)(e, A.default)
    }

    function Y(e) {
        switch (e.type) {
            case C.ActivityTypes.LISTENING:
                if ((0, p.default)(e)) return y.default.shouldShowActivity();
                if (null != e.application_id) return x(e.application_id);
                return !1;
            case C.ActivityTypes.PLAYING:
                var t, n;
                return null != e.application_id ? x(e.application_id) : (t = e.name, null != (n = v.default.getGameByName(t)) ? x(n.id) : I.ShowCurrentGame.getSetting());
            case C.ActivityTypes.STREAMING:
            case C.ActivityTypes.WATCHING:
            default:
                return null == e.application_id || x(e.application_id)
        }
    }

    function W() {
        if (G = null !== (e = g.default.getIdleSince()) && void 0 !== e ? e : 0, j = g.default.isAFK(), F) w = k, K();
        else if (U) w = C.StatusTypes.INVISIBLE;
        else {
            var e, t = I.StatusSetting.getSetting();
            w = t !== C.StatusTypes.UNKNOWN ? t : C.StatusTypes.ONLINE
        }
        w === C.StatusTypes.ONLINE && G > 0 && (w = C.StatusTypes.IDLE);
        var n = !1,
            r = F || w === C.StatusTypes.INVISIBLE ? [] : b.default.getActivities().filter(Y);
        !c()(B, r) && (B = r, n = !0);
        var o = R.default.getRemoteActivities();
        if (V !== o && (V = o, n = !0), n) {
            var i, a = B.find(function(e) {
                return e.type === C.ActivityTypes.CUSTOM_STATUS
            });
            if (B.filter(function(e) {
                    return e.type !== C.ActivityTypes.CUSTOM_STATUS
                }).length > 0) H = B;
            else if (null != a) {
                ;
                H = [a].concat(function(e) {
                    if (Array.isArray(e)) return P(e)
                }(i = d()(V).filter(function(e) {
                    return e.type !== C.ActivityTypes.CUSTOM_STATUS
                }).uniqBy(function(e) {
                    return "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)
                }).value()) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(i) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return P(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                    }
                }(i) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }())
            } else H = d().uniqBy(V, function(e) {
                return "".concat(e.type, ":").concat(e.application_id, ":").concat(e.name)
            })
        }
    }

    function K() {
        a = void 0, u = void 0
    }

    function z() {
        F = !1, k = C.StatusTypes.UNKNOWN, W(), N.default.setCurrentUserOnConnectionOpen(w, H)
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
            }), t && M(e, t)
        }(l, e);
        var t, n, r, o, i, s = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = L(t);
            if (n) {
                var a = L(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), s.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(g.default, h.default, b.default, R.default, A.default, v.default), this.syncWith([b.default], W)
            }
        }, {
            key: "getLocalPresence",
            value: function() {
                return {
                    status: w,
                    since: G,
                    activities: B,
                    afk: j,
                    broadcast: u
                }
            }
        }, {
            key: "getStatus",
            value: function() {
                return w
            }
        }, {
            key: "getActivities",
            value: function() {
                var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return e ? H : B
            }
        }, {
            key: "getPrimaryActivity",
            value: function() {
                var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return e ? H[0] : B[0]
            }
        }, {
            key: "getApplicationActivity",
            value: function(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return this.findActivity(function(t) {
                    return t.application_id === e
                }, t)
            }
        }, {
            key: "findActivity",
            value: function(e) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return this.getActivities(t).find(e)
            }
        }, {
            key: "getBroadcast",
            value: function() {
                return a
            }
        }], D(r.prototype, o), i && D(r, i), l
    }(_.default.Store);
    i = "SelfPresenceStore", (o = "displayName") in(r = X) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new X(E.default, {
        START_SESSION: W,
        CONNECTION_OPEN: function() {
            z()
        },
        CONNECTION_OPEN_SUPPLEMENTAL: z,
        OVERLAY_INITIALIZE: z,
        CONNECTION_CLOSED: W,
        IDLE: W,
        AFK: W,
        RUNNING_GAMES_CHANGE: W,
        STREAMING_UPDATE: W,
        USER_SETTINGS_PROTO_UPDATE: W,
        LOCAL_ACTIVITY_UPDATE: W,
        SPOTIFY_PLAYER_STATE: W,
        SPOTIFY_PLAYER_PLAY: W,
        USER_CONNECTIONS_UPDATE: W,
        SESSIONS_REPLACE: W,
        RPC_APP_DISCONNECTED: W,
        LIBRARY_FETCH_SUCCESS: W,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: W,
        LOGOUT: function() {
            F = !0, k = w, W()
        },
        EMBEDDED_ACTIVITY_CLOSE: W,
        EMBEDDED_ACTIVITY_OPEN: W,
        FORCE_INVISIBLE: function(e) {
            return U = e.invisible, W()
        },
        WINDOW_FOCUS: function() {
            return U = !1, W()
        },
        BROADCAST_START: function(e) {
            a = e.broadcast, u = (0, m.broadcastToServer)(e.broadcast)
        },
        BROADCAST_STOP: K,
        CHANNEL_DELETE: function(e) {
            var t, n, r = e.channel;
            if (t = r, (null != (n = O.ChannelRecordBase) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n) && (null == r ? void 0 : r.isBroadcastChannel()) && (null == r ? void 0 : r.ownerId) === S.default.getId()) a = void 0, u = void 0
        }
    })
}