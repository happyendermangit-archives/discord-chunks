function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlowmodeType: function() {
            return i
        }
    }), n("47120");
    var i, r, s, a, o, l, u = n("442837"),
        d = n("846519"),
        _ = n("570140"),
        c = n("70956"),
        E = n("592125"),
        I = n("496675"),
        T = n("981631");
    (s = i || (i = {}))[s.SendMessage = 0] = "SendMessage", s[s.CreateThread = 1] = "CreateThread";
    let f = {
        0: {},
        1: {}
    };

    function S(e, t, n) {
        if (function(e, t) {
                null != f[t][e.id] && (f[t][e.id].timer.stop(), delete f[t][e.id])
            }(e, t), function(e, t) {
                return 0 === t ? I.default.can(T.Permissions.MANAGE_CHANNELS, e) || I.default.can(T.Permissions.MANAGE_MESSAGES, e) : I.default.can(T.Permissions.MANAGE_THREADS, e)
            }(e, t) || n <= 0) return;
        let i = n + Date.now();
        f[t][e.id] = {
            rateLimitPerUser: e.rateLimitPerUser,
            cooldownMs: n,
            cooldownEndTimestamp: i,
            timer: new d.Timeout
        }, f[t][e.id].timer.start(1e3, () => {
            _.default.dispatch({
                type: "SLOWMODE_SET_COOLDOWN",
                channelId: e.id,
                slowmodeType: t,
                cooldownMs: Math.max(i - Date.now(), 0)
            })
        }, !0)
    }

    function A(e, t) {
        let n = E.default.getChannel(e);
        if (null == n) return !1;
        S(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * c.default.Millis.SECOND + 100)
    }

    function h(e) {
        let {
            file: t
        } = e, n = E.default.getChannel(t.channelId);
        return null != n && S(n, 0, 0)
    }
    class m extends(r = u.default.Store) {
        initialize() {
            this.waitFor(E.default)
        }
        getSlowmodeCooldownGuess(e, t) {
            let n = f[null != t ? t : 0][e];
            return null != n ? n.cooldownMs : 0
        }
    }
    l = "SlowmodeStore", (o = "displayName") in(a = m) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new m(_.default, {
        SLOWMODE_RESET_COOLDOWN: function(e) {
            let {
                channelId: t,
                slowmodeType: n
            } = e;
            return A(t, n)
        },
        SLOWMODE_SET_COOLDOWN: function(e) {
            let {
                channelId: t,
                slowmodeType: n,
                cooldownMs: i
            } = e, r = E.default.getChannel(t);
            if (null == r) return !1;
            S(r, n, 0 === i ? 0 : i + 100)
        },
        UPLOAD_START: function(e) {
            let {
                channelId: t
            } = e;
            return A(t, 0)
        },
        UPLOAD_FAIL: h,
        UPLOAD_CANCEL_REQUEST: h,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            [0, 1].forEach(e => {
                for (let i of t) {
                    var n;
                    let t = f[e][i.id],
                        r = i.rateLimitPerUser;
                    if (null != t && t.rateLimitPerUser !== r) S(i, e, Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, r * c.default.Millis.SECOND))
                }
            })
        },
        LOGOUT: function() {
            [0, 1].forEach(e => {
                Object.keys(f[e]).forEach(t => f[e][t].timer.stop()), f[e] = {}
            })
        }
    })
}