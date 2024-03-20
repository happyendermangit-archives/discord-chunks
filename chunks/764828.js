function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SafetyWarningTypes: function() {
            return a
        },
        SafetyWarningFeedbackTypes: function() {
            return i
        },
        default: function() {
            return m
        }
    }), n("222007");
    var a, i, l, r, s = n("446674"),
        u = n("913144"),
        d = n("42203"),
        o = n("718517");
    let c = 5 * o.default.Millis.SECOND;
    (l = a || (a = {}))[l.STRANGER_DANGER = 1] = "STRANGER_DANGER", l[l.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", l[l.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (r = i || (i = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
    let _ = [],
        f = {},
        E = new Set;

    function g(e) {
        let {
            safetyWarnings: t
        } = e;
        null != t && (f[e.id] = t, t.some(e => {
            var t;
            return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                return new Date(e).getTime() > Date.now() - c
            }(e.dismiss_timestamp)
        }) ? E.add(e.id) : E.delete(e.id)), null == t && (null != f[e.id] && delete f[e.id], E.delete(e.id))
    }

    function p() {
        f = {}, Object.values(d.default.getMutablePrivateChannels()).forEach(e => {
            g(e)
        })
    }
    class S extends s.default.Store {
        initialize() {
            this.waitFor(d.default)
        }
        getChannelSafetyWarning(e, t) {
            var n;
            return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
        }
        getChannelSafetyWarnings(e) {
            var t;
            return null !== (t = f[e]) && void 0 !== t ? t : _
        }
        hasShownInitialTooltipForChannel(e) {
            return E.has(e)
        }
    }
    var m = new S(u.default, {
        CHANNEL_CREATE: function(e) {
            g(e.channel)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            null != f[t.id] && delete f[t.id], E.delete(t.id)
        },
        CHANNEL_UPDATES: function(e) {
            e.channels.forEach(e => {
                g(e)
            })
        },
        CONNECTION_OPEN: p,
        CONNECTION_OPEN_SUPPLEMENTAL: p,
        CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
            let {
                channelId: t,
                warningId: n,
                feedbackType: a
            } = e, i = f[t];
            null != i && (f[t] = i.map(e => e.id === n ? {
                ...e,
                feedback_type: a
            } : e))
        },
        CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t
            } = e, n = f[t];
            E.delete(t), null != n && (f[t] = n.map(e => ({
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
            let i = new Date().toISOString();
            f[t] = a.map(e => n.includes(e.id) ? {
                ...e,
                dismiss_timestamp: i
            } : e)
        },
        ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
            let {
                channelId: t
            } = e;
            E.add(t)
        }
    })
}