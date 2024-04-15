function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        clearVoiceChannelEffectForUser: function() {
            return h
        }
    }), n("47120"), n("733860");
    var r, s, a, o, l = n("392711"),
        u = n("442837"),
        d = n("780384"),
        _ = n("570140"),
        c = n("70956"),
        E = n("963838"),
        I = n("354459");
    let T = [],
        f = {},
        S = [],
        h = e => {
            null != e && _.default.dispatch({
                type: "VOICE_CHANNEL_EFFECT_CLEAR",
                userId: e
            })
        },
        A = [],
        m = 10 * c.default.Millis.SECOND,
        N = (0, l.debounce)(() => {
            let e = (0, E.getEffectAnnouncement)(S);
            d.AccessibilityAnnouncer.announce(e, "polite"), S = []
        }, 500);
    class p extends(r = u.default.Store) {
        get recentlyUsedEmojis() {
            return T
        }
        get isOnCooldown() {
            return null != i && new Date < i
        }
        get effectCooldownEndTime() {
            return i
        }
        getEffectForUserId(e) {
            return f[e]
        }
    }
    o = "VoiceChannelEffectsStore", (a = "displayName") in(s = p) ? Object.defineProperty(s, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = o, t.default = new p(_.default, {
        VOICE_CHANNEL_EFFECT_CLEAR: e => {
            let {
                userId: t
            } = e;
            null != f[t] && delete f[t]
        },
        VOICE_CHANNEL_EFFECT_RECENT_EMOJI: e => {
            let {
                emoji: t
            } = e;
            null != t && (T.unshift(t), (T = (0, l.uniqBy)(T, "name")).length > I.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && T.pop())
        },
        VOICE_CHANNEL_EFFECT_SEND: e => {
            let {
                emoji: t,
                userId: n,
                animationType: i
            } = e;
            null != t && null != i && (f[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: i
            }, S = [...S, {
                emojiName: t.name,
                userId: n
            }], N())
        },
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
            let e = new Date;
            if ((A = [e, ...A].slice(0, 20)).length >= 20) {
                let t = A[A.length - 1],
                    n = e.getTime() - t.getTime();
                n < m && (i = new Date(e.getTime() + m - n))
            }
        },
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
            let {
                cooldownEndsAtMs: t
            } = e;
            i = new Date(Date.now() + t)
        }
    })
}