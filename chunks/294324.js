function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("348327"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("898511"),
        l = n("629815"),
        c = n("632142"),
        f = n("342942"),
        d = n("975797"),
        _ = n("654370"),
        E = n("979821"),
        p = n("955255"),
        m = n("366621"),
        y = n("53867"),
        I = n("851285"),
        h = n("73013"),
        O = n("441795"),
        T = n("281767"),
        S = n("941504");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function N(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                A(e, t, n[t])
            })
        }
        return e
    }

    function R(e, t) {
        return (R = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var C = [],
        P = {};

    function D() {
        var e, t = [],
            n = y.CustomStatusSetting.getSetting();
        null != n && ("0" === n.expiresAtMs || new Date(Number(n.expiresAtMs)).getTime() - new Date().getTime() > 0) && t.push((0, d.getActivityFromCustomStatus)(n));
        var r = p.default.getActivities();
        t.push.apply(t, function(e) {
            if (Array.isArray(e)) return v(e)
        }(e = r) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }());
        var o = O.default.getStream();
        null != o && t.push(N({
            type: T.ActivityTypes.STREAMING
        }, o));
        var a = new Set,
            s = new Set;
        u().forEach(P, function(e) {
            null != e.application_id && (a.add(e.name), s.add(e.application_id), t.push(e))
        }), c.default.getSelfEmbeddedActivities().forEach(function(e) {
            var n, r = e.applicationId;
            if (!s.has(r)) {
                var o = null === (n = f.default.getApplication(r)) || void 0 === n ? void 0 : n.name;
                t.push({
                    type: T.ActivityTypes.PLAYING,
                    name: null != o ? o : S.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
                    application_id: r,
                    flags: T.ActivityFlags.EMBEDDED
                })
            }
        });
        var l = _.default.getVisibleGame(),
            I = null != l && null != l.name && a.has(l.name),
            g = null != l && l.isLauncher,
            A = h.default.getCurrentUserActiveStream();
        null != l && null != l.name && !(I || g && !(null != A)) && t.push({
            type: T.ActivityTypes.PLAYING,
            name: l.name,
            application_id: l.id,
            timestamps: {
                start: l.start
            }
        });
        var b = m.default.getActivity();
        null != b && t.push(N({
            type: T.ActivityTypes.LISTENING
        }, b));
        var R = E.default.getCurrentHangStatus();
        if (null != R) {
            var D = E.default.getCustomHangStatus();
            t.push({
                type: T.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: R,
                details: null == D ? void 0 : D.status,
                emoji: null == D ? void 0 : D.emoji
            })
        }!i()(C, t) && (C = t)
    }
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && R(e, t)
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
            var e, r, o, i = b(t);
            if (n) {
                var a = b(this).constructor;
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
                this.waitFor(_.default, c.default, O.default, h.default, m.default, I.default, E.default), this.syncWith([p.default, E.default], function() {
                    return D()
                })
            }
        }, {
            key: "getActivities",
            value: function() {
                return C
            }
        }, {
            key: "getPrimaryActivity",
            value: function() {
                return C[0]
            }
        }, {
            key: "getApplicationActivity",
            value: function(e) {
                return this.findActivity(function(t) {
                    return t.application_id === e
                })
            }
        }, {
            key: "getCustomStatusActivity",
            value: function() {
                return this.findActivity(function(e) {
                    return e.type === T.ActivityTypes.CUSTOM_STATUS
                })
            }
        }, {
            key: "findActivity",
            value: function(e) {
                return C.find(e)
            }
        }, {
            key: "getApplicationActivities",
            value: function() {
                return P
            }
        }], g(r.prototype, o), i && g(r, i), u
    }(s.default.Store);
    A(L, "displayName", "LocalActivityStore"), t.default = new L(l.default, {
        OVERLAY_INITIALIZE: function(e) {
            P = N({}, e.localActivities), D()
        },
        START_SESSION: function() {
            P = {}, D()
        },
        LOCAL_ACTIVITY_UPDATE: function(e) {
            var t = e.socketId,
                n = e.activity;
            if (i()(P[t], n)) return !1;
            null != n ? P[t] = n : delete P[t], D()
        },
        RPC_APP_DISCONNECTED: function(e) {
            var t = e.socketId;
            delete P[t], D()
        },
        RUNNING_GAMES_CHANGE: D,
        LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: D,
        SPOTIFY_PLAYER_STATE: D,
        SPOTIFY_PLAYER_PLAY: D,
        STREAMING_UPDATE: D,
        USER_CONNECTIONS_UPDATE: D,
        STREAM_START: D,
        STREAM_STOP: D,
        USER_SETTINGS_PROTO_UPDATE: D,
        EMBEDDED_ACTIVITY_OPEN: D,
        EMBEDDED_ACTIVITY_CLOSE: D,
        UPDATE_HANG_STATUS: D
    })
}