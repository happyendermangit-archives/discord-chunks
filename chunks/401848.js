function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlowmodeType: function() {
            return i
        },
        default: function() {
            return m
        }
    }), n("222007");
    var i, s, r = n("446674"),
        a = n("862337"),
        o = n("913144"),
        l = n("718517"),
        u = n("42203"),
        d = n("957255"),
        c = n("49111");
    (s = i || (i = {}))[s.SendMessage = 0] = "SendMessage", s[s.CreateThread = 1] = "CreateThread";
    let f = {
        0: {},
        1: {}
    };

    function _(e, t, n) {
        if (function(e, t) {
                null != f[t][e.id] && (f[t][e.id].timer.stop(), delete f[t][e.id])
            }(e, t), function(e, t) {
                return 0 === t ? d.default.can(c.Permissions.MANAGE_CHANNELS, e) || d.default.can(c.Permissions.MANAGE_MESSAGES, e) : d.default.can(c.Permissions.MANAGE_THREADS, e)
            }(e, t) || n <= 0) return;
        let i = n + Date.now();
        f[t][e.id] = {
            rateLimitPerUser: e.rateLimitPerUser,
            cooldownMs: n,
            cooldownEndTimestamp: i,
            timer: new a.Timeout
        }, f[t][e.id].timer.start(1e3, () => {
            o.default.dispatch({
                type: "SLOWMODE_SET_COOLDOWN",
                channelId: e.id,
                slowmodeType: t,
                cooldownMs: Math.max(i - Date.now(), 0)
            })
        }, !0)
    }

    function h(e, t) {
        let n = u.default.getChannel(e);
        if (null == n) return !1;
        _(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * l.default.Millis.SECOND + 100)
    }

    function E(e) {
        let {
            file: t
        } = e, n = u.default.getChannel(t.channelId);
        return null != n && _(n, 0, 0)
    }
    class g extends r.default.Store {
        initialize() {
            this.waitFor(u.default)
        }
        getSlowmodeCooldownGuess(e, t) {
            let n = f[null != t ? t : 0][e];
            return null != n ? n.cooldownMs : 0
        }
    }
    g.displayName = "SlowmodeStore";
    var m = new g(o.default, {
        SLOWMODE_RESET_COOLDOWN: function(e) {
            let {
                channelId: t,
                slowmodeType: n
            } = e;
            return h(t, n)
        },
        SLOWMODE_SET_COOLDOWN: function(e) {
            let {
                channelId: t,
                slowmodeType: n,
                cooldownMs: i
            } = e, s = u.default.getChannel(t);
            if (null == s) return !1;
            _(s, n, 0 === i ? 0 : i + 100)
        },
        UPLOAD_START: function(e) {
            let {
                channelId: t
            } = e;
            return h(t, 0)
        },
        UPLOAD_FAIL: E,
        UPLOAD_CANCEL_REQUEST: E,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            [0, 1].forEach(e => {
                for (let i of t) {
                    var n;
                    let t = f[e][i.id],
                        s = i.rateLimitPerUser;
                    if (null == t || t.rateLimitPerUser === s) continue;
                    let r = Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, s * l.default.Millis.SECOND);
                    _(i, e, r)
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