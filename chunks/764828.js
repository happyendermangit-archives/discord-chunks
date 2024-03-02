function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SafetyWarningTypes: function() {
            return l
        },
        SafetyWarningFeedbackTypes: function() {
            return a
        },
        default: function() {
            return N
        }
    }), n("222007");
    var l, a, i, u, d = n("446674"),
        r = n("913144"),
        s = n("42203"),
        o = n("718517");
    let f = 5 * o.default.Millis.SECOND;
    (i = l || (l = {}))[i.STRANGER_DANGER = 1] = "STRANGER_DANGER", i[i.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", i[i.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (u = a || (a = {}))[u.UPVOTE = 0] = "UPVOTE", u[u.DOWNVOTE = 1] = "DOWNVOTE";
    let c = [],
        E = {},
        C = new Set;

    function g(e) {
        let {
            safetyWarnings: t
        } = e;
        null != t && (E[e.id] = t, t.some(e => {
            var t;
            return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                return new Date(e).getTime() > Date.now() - f
            }(e.dismiss_timestamp)
        }) ? C.add(e.id) : C.delete(e.id)), null == t && (null != E[e.id] && delete E[e.id], C.delete(e.id))
    }

    function _() {
        E = {}, Object.values(s.default.getMutablePrivateChannels()).forEach(e => {
            g(e)
        })
    }
    class p extends d.default.Store {
        initialize() {
            this.waitFor(s.default)
        }
        getChannelSafetyWarning(e, t) {
            var n;
            return null === (n = E[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
        }
        getChannelSafetyWarnings(e) {
            var t;
            return null !== (t = E[e]) && void 0 !== t ? t : c
        }
        hasShownInitialTooltipForChannel(e) {
            return C.has(e)
        }
    }
    var N = new p(r.default, {
        CHANNEL_CREATE: function(e) {
            g(e.channel)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            null != E[t.id] && delete E[t.id], C.delete(t.id)
        },
        CHANNEL_UPDATES: function(e) {
            e.channels.forEach(e => {
                g(e)
            })
        },
        CONNECTION_OPEN: _,
        CONNECTION_OPEN_SUPPLEMENTAL: _,
        CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
            let {
                channelId: t,
                warningId: n,
                feedbackType: l
            } = e, a = E[t];
            null != a && (E[t] = a.map(e => e.id === n ? {
                ...e,
                feedback_type: l
            } : e))
        },
        CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t
            } = e, n = E[t];
            C.delete(t), null != n && (E[t] = n.map(e => ({
                ...e,
                dismiss_timestamp: void 0
            })))
        },
        DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t,
                warningIds: n
            } = e, l = E[t];
            if (null == l) return;
            let a = new Date().toISOString();
            E[t] = l.map(e => n.includes(e.id) ? {
                ...e,
                dismiss_timestamp: a
            } : e)
        },
        ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
            let {
                channelId: t
            } = e;
            C.add(t)
        }
    })
}