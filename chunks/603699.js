function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
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
        f = n("353927");
    let _ = Date.now(),
        E = !1,
        h = !1,
        g = !1,
        m = !1,
        p = !1;

    function S() {
        return g || m || (0, u.isAndroid)() && p
    }

    function v() {
        Date.now() - _ > c.IDLE_DURATION || S() ? E || s.default.dispatch({
            type: "IDLE",
            idle: !0,
            idleSince: _
        }) : E && s.default.dispatch({
            type: "IDLE",
            idle: !1
        }), Date.now() - _ > Math.min(o.AfkTimeout.getSetting() * l.default.Millis.SECOND, c.IDLE_DURATION) || S() ? h || s.default.dispatch({
            type: "AFK",
            afk: !0
        }) : h && s.default.dispatch({
            type: "AFK",
            afk: !1
        })
    }!__OVERLAY__ && (u.isPlatformEmbedded && (null === a.default || void 0 === a.default ? void 0 : a.default.remotePowerMonitor) != null ? (! function e() {
        var t;
        let n = t => {
            _ = Math.max(Date.now() - t, _), v(), setTimeout(e, 10 * l.default.Millis.SECOND)
        };
        if ((null === a.default || void 0 === a.default ? void 0 : null === (t = a.default.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
            let e = a.default.remotePowerMonitor.getSystemIdleTimeMs();
            e instanceof Promise ? e.then(n) : n(e)
        }
    }(), a.default.remotePowerMonitor.on("resume", () => {
        g = !1, T({})
    }), a.default.remotePowerMonitor.on("suspend", () => {
        g = !0, T({}), r.default.disconnect()
    }), a.default.remotePowerMonitor.on("lock-screen", () => {
        m = !0, T({})
    }), a.default.remotePowerMonitor.on("unlock-screen", () => {
        m = !1, T({})
    })) : setInterval(v, .25 * c.IDLE_DURATION));

    function T(e) {
        let {
            timestamp: t,
            type: n
        } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
        return (!i || !(t <= _)) && (_ = i ? t : Date.now(), __OVERLAY__ ? s.default.dispatch({
            type: "OVERLAY_SET_NOT_IDLE",
            timestamp: _
        }) : v(), !1)
    }
    class I extends i.default.Store {
        isIdle() {
            return E
        }
        isAFK() {
            return h
        }
        getIdleSince() {
            return E ? _ : null
        }
    }
    I.displayName = "IdleStore";
    var C = new I(s.default, {
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
            return n !== f.SpeakingFlags.NONE && t === d.default.getId() && T({}), !1
        },
        APP_STATE_UPDATE: function(e) {
            let {
                state: t
            } = e;
            return p = t === c.AppStates.BACKGROUND, _ = Date.now(), v(), !1
        },
        OVERLAY_SET_NOT_IDLE: T,
        CHANNEL_SELECT: T,
        VOICE_CHANNEL_SELECT: T,
        WINDOW_FOCUS: T,
        OVERLAY_INITIALIZE: T,
        OVERLAY_SET_INPUT_LOCKED: T,
        USER_SETTINGS_PROTO_UPDATE: T
    })
}