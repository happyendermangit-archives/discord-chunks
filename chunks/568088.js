function(e, t, n) {
    "use strict";
    let l;
    n.r(t), n.d(t, {
        clearVoiceChannelEffectForUser: function() {
            return p
        },
        default: function() {
            return S
        }
    }), n("222007"), n("843762");
    var i = n("917351"),
        a = n("446674"),
        s = n("819855"),
        r = n("913144"),
        o = n("718517"),
        u = n("397485"),
        d = n("99795");
    let c = [],
        f = {},
        m = [],
        p = e => {
            null != e && r.default.dispatch({
                type: "VOICE_CHANNEL_EFFECT_CLEAR",
                userId: e
            })
        },
        h = [],
        E = 10 * o.default.Millis.SECOND,
        g = (0, i.debounce)(() => {
            let e = (0, u.getEffectAnnouncement)(m);
            s.AccessibilityAnnouncer.announce(e, "polite"), m = []
        }, 500);
    class C extends a.default.Store {
        get recentlyUsedEmojis() {
            return c
        }
        get isOnCooldown() {
            return null != l && new Date < l
        }
        get effectCooldownEndTime() {
            return l
        }
        getEffectForUserId(e) {
            return f[e]
        }
    }
    C.displayName = "VoiceChannelEffectsStore";
    var S = new C(r.default, {
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
            null != t && (c.unshift(t), (c = (0, i.uniqBy)(c, "name")).length > d.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && c.pop())
        },
        VOICE_CHANNEL_EFFECT_SEND: e => {
            let {
                emoji: t,
                userId: n,
                animationType: l
            } = e;
            null != t && null != l && (f[n] = {
                emoji: t,
                sentAt: Date.now(),
                animationType: l
            }, m = [...m, {
                emojiName: t.name,
                userId: n
            }], g())
        },
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
            let e = new Date;
            if ((h = [e, ...h].slice(0, 20)).length >= 20) {
                let t = h[h.length - 1],
                    n = e.getTime() - t.getTime();
                n < E && (l = new Date(e.getTime() + E - n))
            }
        },
        VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: e => {
            let {
                cooldownEndsAtMs: t
            } = e;
            l = new Date(Date.now() + t)
        }
    })
}