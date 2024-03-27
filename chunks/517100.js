function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("287734"),
        d = n("579806"),
        _ = n("695346"),
        c = n("70956"),
        E = n("358085"),
        I = n("314897"),
        T = n("981631"),
        f = n("65154");
    let S = Date.now(),
        h = !1,
        A = !1,
        m = !1,
        N = !1,
        O = !1;

    function p() {
        return m || N || (0, E.isAndroid)() && O
    }

    function R() {
        Date.now() - S > T.IDLE_DURATION || p() ? h || l.default.dispatch({
            type: "IDLE",
            idle: !0,
            idleSince: S
        }) : h && l.default.dispatch({
            type: "IDLE",
            idle: !1
        }), Date.now() - S > Math.min(_.AfkTimeout.getSetting() * c.default.Millis.SECOND, T.IDLE_DURATION) || p() ? A || l.default.dispatch({
            type: "AFK",
            afk: !0
        }) : A && l.default.dispatch({
            type: "AFK",
            afk: !1
        })
    }!__OVERLAY__ && (E.isPlatformEmbedded && (null === d.default || void 0 === d.default ? void 0 : d.default.remotePowerMonitor) != null ? (! function e() {
        var t;
        let n = t => {
            S = Math.max(Date.now() - t, S), R(), setTimeout(e, 10 * c.default.Millis.SECOND)
        };
        if ((null === d.default || void 0 === d.default ? void 0 : null === (t = d.default.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
            let e = d.default.remotePowerMonitor.getSystemIdleTimeMs();
            e instanceof Promise ? e.then(n) : n(e)
        }
    }(), d.default.remotePowerMonitor.on("resume", () => {
        m = !1, C({})
    }), d.default.remotePowerMonitor.on("suspend", () => {
        m = !0, C({}), u.default.disconnect()
    }), d.default.remotePowerMonitor.on("lock-screen", () => {
        N = !0, C({})
    }), d.default.remotePowerMonitor.on("unlock-screen", () => {
        N = !1, C({})
    })) : setInterval(R, .25 * T.IDLE_DURATION));

    function C(e) {
        let {
            timestamp: t,
            type: n
        } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
        return (!i || !(t <= S)) && (S = i ? t : Date.now(), __OVERLAY__ ? l.default.dispatch({
            type: "OVERLAY_SET_NOT_IDLE",
            timestamp: S
        }) : R(), !1)
    }
    class g extends(a = o.default.Store) {
        isIdle() {
            return h
        }
        isAFK() {
            return A
        }
        getIdleSince() {
            return h ? S : null
        }
    }
    s = "IdleStore", (r = "displayName") in(i = g) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new g(l.default, {
        IDLE: function(e) {
            h = e.idle
        },
        AFK: function(e) {
            A = e.afk
        },
        SPEAKING: function(e) {
            let {
                userId: t,
                speakingFlags: n
            } = e;
            return n !== f.SpeakingFlags.NONE && t === I.default.getId() && C({}), !1
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e;
            return O = t === T.AppStates.BACKGROUND, S = Date.now(), R(), !1
        },
        OVERLAY_SET_NOT_IDLE: C,
        CHANNEL_SELECT: C,
        VOICE_CHANNEL_SELECT: C,
        WINDOW_FOCUS: C,
        OVERLAY_INITIALIZE: C,
        OVERLAY_SET_INPUT_LOCKED: C,
        USER_SETTINGS_PROTO_UPDATE: C
    })
}