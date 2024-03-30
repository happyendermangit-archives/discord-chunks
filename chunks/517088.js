function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("585949"),
        c = n("517727"),
        f = n("53867"),
        d = n("388990"),
        _ = n("374550"),
        E = n("217014"),
        p = n("281767"),
        m = n("439386");

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = Date.now(),
        T = !1,
        S = !1,
        v = !1,
        g = !1,
        A = !1;

    function b() {
        return v || g || (0, _.isAndroid)() && A
    }

    function N() {
        Date.now() - O > p.IDLE_DURATION || b() ? T || s.default.dispatch({
            type: "IDLE",
            idle: !0,
            idleSince: O
        }) : T && s.default.dispatch({
            type: "IDLE",
            idle: !1
        }), Date.now() - O > Math.min(f.AfkTimeout.getSetting() * d.default.Millis.SECOND, p.IDLE_DURATION) || b() ? S || s.default.dispatch({
            type: "AFK",
            afk: !0
        }) : S && s.default.dispatch({
            type: "AFK",
            afk: !1
        })
    }!__OVERLAY__ && (_.isPlatformEmbedded && (null === c.default || void 0 === c.default ? void 0 : c.default.remotePowerMonitor) != null ? (! function e() {
        var t, n = function(t) {
            O = Math.max(Date.now() - t, O), N(), setTimeout(e, 10 * d.default.Millis.SECOND)
        };
        if ((null === c.default || void 0 === c.default ? void 0 : null === (t = c.default.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
            var r, o, i = c.default.remotePowerMonitor.getSystemIdleTimeMs();
            if (r = i, null != (o = Promise) && "undefined" != typeof Symbol && o[Symbol.hasInstance] ? !!o[Symbol.hasInstance](r) : r instanceof o) i.then(n);
            else n(i)
        }
    }(), c.default.remotePowerMonitor.on("resume", function() {
        v = !1, R({})
    }), c.default.remotePowerMonitor.on("suspend", function() {
        v = !0, R({}), l.default.disconnect()
    }), c.default.remotePowerMonitor.on("lock-screen", function() {
        g = !0, R({})
    }), c.default.remotePowerMonitor.on("unlock-screen", function() {
        g = !1, R({})
    })) : setInterval(N, .25 * p.IDLE_DURATION));

    function R(e) {
        var t = e.timestamp,
            n = "OVERLAY_SET_NOT_IDLE" === e.type && null != t;
        return (!n || !(t <= O)) && (O = n ? t : Date.now(), __OVERLAY__ ? s.default.dispatch({
            type: "OVERLAY_SET_NOT_IDLE",
            timestamp: O
        }) : N(), !1)
    }
    var C = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
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
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
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
            key: "isIdle",
            value: function() {
                return T
            }
        }, {
            key: "isAFK",
            value: function() {
                return S
            }
        }, {
            key: "getIdleSince",
            value: function() {
                return T ? O : null
            }
        }], y(r.prototype, o), i && y(r, i), u
    }(u.default.Store);
    i = "IdleStore", (o = "displayName") in(r = C) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new C(s.default, {
        IDLE: function(e) {
            T = e.idle
        },
        AFK: function(e) {
            S = e.afk
        },
        SPEAKING: function(e) {
            var t = e.userId;
            return e.speakingFlags !== m.SpeakingFlags.NONE && t === E.default.getId() && R({}), !1
        },
        APP_STATE_UPDATE: function(e) {
            return A = e.state === p.AppStates.BACKGROUND, O = Date.now(), N(), !1
        },
        OVERLAY_SET_NOT_IDLE: R,
        CHANNEL_SELECT: R,
        VOICE_CHANNEL_SELECT: R,
        WINDOW_FOCUS: R,
        OVERLAY_INITIALIZE: R,
        OVERLAY_SET_INPUT_LOCKED: R,
        USER_SETTINGS_PROTO_UPDATE: R
    })
}