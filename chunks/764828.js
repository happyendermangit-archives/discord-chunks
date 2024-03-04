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
    var a, l, i, _, r = n("446674"),
        u = n("913144"),
        s = n("42203"),
        o = n("718517");
    let d = 5 * o.default.Millis.SECOND;
    (i = a || (a = {}))[i.STRANGER_DANGER = 1] = "STRANGER_DANGER", i[i.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", i[i.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (_ = l || (l = {}))[_.UPVOTE = 0] = "UPVOTE", _[_.DOWNVOTE = 1] = "DOWNVOTE";
    let E = [],
        c = {},
        f = new Set;

    function A(e) {
        let {
            safetyWarnings: t
        } = e;
        null != t && (c[e.id] = t, t.some(e => {
            var t;
            return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                return new Date(e).getTime() > Date.now() - d
            }(e.dismiss_timestamp)
        }) ? f.add(e.id) : f.delete(e.id)), null == t && (null != c[e.id] && delete c[e.id], f.delete(e.id))
    }

    function S() {
        c = {}, Object.values(s.default.getMutablePrivateChannels()).forEach(e => {
            A(e)
        })
    }
    class C extends r.default.Store {
        initialize() {
            this.waitFor(s.default)
        }
        getChannelSafetyWarning(e, t) {
            var n;
            return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
        }
        getChannelSafetyWarnings(e) {
            var t;
            return null !== (t = c[e]) && void 0 !== t ? t : E
        }
        hasShownInitialTooltipForChannel(e) {
            return f.has(e)
        }
    }
    var T = new C(u.default, {
        CHANNEL_CREATE: function(e) {
            A(e.channel)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            null != c[t.id] && delete c[t.id], f.delete(t.id)
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
            } = e, l = c[t];
            null != l && (c[t] = l.map(e => e.id === n ? {
                ...e,
                feedback_type: a
            } : e))
        },
        CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t
            } = e, n = c[t];
            f.delete(t), null != n && (c[t] = n.map(e => ({
                ...e,
                dismiss_timestamp: void 0
            })))
        },
        DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t,
                warningIds: n
            } = e, a = c[t];
            if (null == a) return;
            let l = new Date().toISOString();
            c[t] = a.map(e => n.includes(e.id) ? {
                ...e,
                dismiss_timestamp: l
            } : e)
        },
        ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
            let {
                channelId: t
            } = e;
            f.add(t)
        }
    })
}