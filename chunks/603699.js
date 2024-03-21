function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("987317"),
        a = n("49671"),
        o = n("845579"),
        l = n("718517"),
        u = n("773336"),
        d = n("271938"),
        c = n("49111"),
        _ = n("353927");
    let f = Date.now(),
        E = !1,
        h = !1,
        g = !1,
        m = !1,
        p = !1;

    function S() {
        return g || m || (0, u.isAndroid)() && p
    }

    function T() {
        Date.now() - f > c.IDLE_DURATION || S() ? E || s.default.dispatch({
            type: "IDLE",
            idle: !0,
            idleSince: f
        }) : E && s.default.dispatch({
            type: "IDLE",
            idle: !1
        }), Date.now() - f > Math.min(o.AfkTimeout.getSetting() * l.default.Millis.SECOND, c.IDLE_DURATION) || S() ? h || s.default.dispatch({
            type: "AFK",
            afk: !0
        }) : h && s.default.dispatch({
            type: "AFK",
            afk: !1
        })
    }!__OVERLAY__ && (u.isPlatformEmbedded && (null === a.default || void 0 === a.default ? void 0 : a.default.remotePowerMonitor) != null ? (! function e() {
        var t;
        let n = t => {
            f = Math.max(Date.now() - t, f), T(), setTimeout(e, 10 * l.default.Millis.SECOND)
        };
        if ((null === a.default || void 0 === a.default ? void 0 : null === (t = a.default.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
            let e = a.default.remotePowerMonitor.getSystemIdleTimeMs();
            e instanceof Promise ? e.then(n) : n(e)
        }
    }(), a.default.remotePowerMonitor.on("resume", () => {
        g = !1, v({})
    }), a.default.remotePowerMonitor.on("suspend", () => {
        g = !0, v({}), r.default.disconnect()
    }), a.default.remotePowerMonitor.on("lock-screen", () => {
        m = !0, v({})
    }), a.default.remotePowerMonitor.on("unlock-screen", () => {
        m = !1, v({})
    })) : setInterval(T, .25 * c.IDLE_DURATION));

    function v(e) {
        let {
            timestamp: t,
            type: n
        } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
        return (!i || !(t <= f)) && (f = i ? t : Date.now(), __OVERLAY__ ? s.default.dispatch({
            type: "OVERLAY_SET_NOT_IDLE",
            timestamp: f
        }) : T(), !1)
    }
    class I extends i.default.Store {
        isIdle() {
            return E
        }
        isAFK() {
            return h
        }
        getIdleSince() {
            return E ? f : null
        }
    }
    I.displayName = "IdleStore";
    var A = new I(s.default, {
        IDLE: function(e) {
            E = e.idle
        },
        AFK: function(e) {
            h = e.afk
        },
        SPEAKING: function(e) {
            let {
                userId: t,
                speakingFlags: n
            } = e;
            return n !== _.SpeakingFlags.NONE && t === d.default.getId() && v({}), !1
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e;
            return p = t === c.AppStates.BACKGROUND, f = Date.now(), T(), !1
        },
        OVERLAY_SET_NOT_IDLE: v,
        CHANNEL_SELECT: v,
        VOICE_CHANNEL_SELECT: v,
        WINDOW_FOCUS: v,
        OVERLAY_INITIALIZE: v,
        OVERLAY_SET_INPUT_LOCKED: v,
        USER_SETTINGS_PROTO_UPDATE: v
    })
}