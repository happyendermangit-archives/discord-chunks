function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("846519"),
        a = n("147913"),
        o = n("314897"),
        l = n("70956"),
        u = n("557177"),
        d = n("697492"),
        _ = n("37091"),
        c = n("721264");
    let E = 15 * l.default.Millis.SECOND,
        I = 15 * l.default.Millis.SECOND,
        T = ["\uD83C\uDDE9", "\uD83C\uDDF4", "\uD83C\uDDF9", "\uD83C\uDDE6"],
        f = T.length,
        S = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return "".concat(e, ":").concat(t, ":").concat(n)
        },
        h = new s.Timeout,
        A = [],
        m = {},
        N = (0, u.createSound)("highfive_whistle", "highfive_whistle", .6),
        O = (0, u.createSound)("highfive_clap", "highfive_clap", .6);

    function p(e) {
        let {
            emoji: t,
            channelId: n,
            userId: i
        } = e, a = o.default.getId(), l = _.default.getEnabled();
        if (null != t) {
            if (l && (0, c.default)(t.name)) return function(e, t, n) {
                var i;
                let r = S(t, n);
                if (null != _.default.getWaitingHighFive(n, t)) return;
                let [a, o] = null !== (i = Object.entries(m).find(e => {
                    let [t] = e;
                    return t !== r
                })) && void 0 !== i ? i : [];
                if (null != a && null != o) o.cancel(), O.play(), delete m[a], (0, d.completeHighFive)(a.split(":")[0], t, n, e);
                else {
                    (0, d.queueHighFive)(e, t, n), N.play();
                    let i = new s.DelayedCall(I, () => {
                        delete m[t], (0, d.removeHighFive)(t, n)
                    });
                    m[t] = i, i.delay()
                }
            }(t.name, i, n);
            i === a && (A = [...A, t.name].slice(-1 * f), r().isEqual(A, T) ? (N.play(), h.stop(), A = [], (0, d.setHighFiveEnabled)(!l)) : h.start(E, () => A = []))
        }
    }

    function R(e) {
        let {
            completingUserId: t,
            waitingUserId: n,
            channelId: i
        } = e, r = S(t + n, i, !0);
        m[r] = new s.DelayedCall(550, () => {
            delete m[r], (0, d.clearCompletedHighFive)(t, n, i)
        }), m[r].delay()
    }
    class C extends a.default {
        _terminate() {
            Object.values(m).forEach(e => e.cancel()), m = {}
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                VOICE_CHANNEL_EFFECT_SEND: p,
                HIGH_FIVE_COMPLETE: R
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new C
}