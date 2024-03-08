function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SafetyWarningTypes: function() {
            return a
        },
        SafetyWarningFeedbackTypes: function() {
            return l
        },
        default: function() {
            return T
        }
    }), n("222007");
    var a, l, i, r, s = n("446674"),
        _ = n("913144"),
        u = n("42203"),
        o = n("718517");
    let d = 5 * o.default.Millis.SECOND;
    (i = a || (a = {}))[i.STRANGER_DANGER = 1] = "STRANGER_DANGER", i[i.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", i[i.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (r = l || (l = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
    let E = [],
        f = {},
        c = new Set;

    function A(e) {
        let {
            safetyWarnings: t
        } = e;
        null != t && (f[e.id] = t, t.some(e => {
            var t;
            return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                return new Date(e).getTime() > Date.now() - d
            }(e.dismiss_timestamp)
        }) ? c.add(e.id) : c.delete(e.id)), null == t && (null != f[e.id] && delete f[e.id], c.delete(e.id))
    }

    function S() {
        f = {}, Object.values(u.default.getMutablePrivateChannels()).forEach(e => {
            A(e)
        })
    }
    class C extends s.default.Store {
        initialize() {
            this.waitFor(u.default)
        }
        getChannelSafetyWarning(e, t) {
            var n;
            return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
        }
        getChannelSafetyWarnings(e) {
            var t;
            return null !== (t = f[e]) && void 0 !== t ? t : E
        }
        hasShownInitialTooltipForChannel(e) {
            return c.has(e)
        }
    }
    var T = new C(_.default, {
        CHANNEL_CREATE: function(e) {
            A(e.channel)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            null != f[t.id] && delete f[t.id], c.delete(t.id)
        },
        CHANNEL_UPDATES: function(e) {
            e.channels.forEach(e => {
                A(e)
            })
        },
        CONNECTION_OPEN: S,
        CONNECTION_OPEN_SUPPLEMENTAL: S,
        CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
            let {
                channelId: t,
                warningId: n,
                feedbackType: a
            } = e, l = f[t];
            null != l && (f[t] = l.map(e => e.id === n ? {
                ...e,
                feedback_type: a
            } : e))
        },
        CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t
            } = e, n = f[t];
            c.delete(t), null != n && (f[t] = n.map(e => ({
                ...e,
                dismiss_timestamp: void 0
            })))
        },
        DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t,
                warningIds: n
            } = e, a = f[t];
            if (null == a) return;
            let l = new Date().toISOString();
            f[t] = a.map(e => n.includes(e.id) ? {
                ...e,
                dismiss_timestamp: l
            } : e)
        },
        ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
            let {
                channelId: t
            } = e;
            c.add(t)
        }
    })
}