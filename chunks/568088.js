function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        clearVoiceChannelEffectForUser: function() {
            return p
        },
        default: function() {
            return g
        }
    }), n("222007"), n("843762");
    var l = n("917351"),
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
        x = 10 * o.default.Millis.SECOND,
        E = (0, l.debounce)(() => {
            let e = (0, u.getEffectAnnouncement)(m);
            s.AccessibilityAnnouncer.announce(e, "polite"), m = []
        }, 500);
    class y extends a.default.Store {
        get recentlyUsedEmojis() {
            return c
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
    y.displayName = "VoiceChannelEffectsStore";
    var g = new y(r.default, {
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
            null != t && (c.unshift(t), (c = (0, l.uniqBy)(c, "name")).length > d.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT + 1 && c.pop())
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
            }, m = [...m, {
                emojiName: t.name,
                userId: n
            }], E())
        },
        VOICE_CHANNEL_EFFECT_SENT_LOCAL: () => {
            let e = new Date;
            if ((h = [e, ...h].slice(0, 20)).length >= 20) {
                let t = h[h.length - 1],
                    n = e.getTime() - t.getTime();
                n < x && (i = new Date(e.getTime() + x - n))
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