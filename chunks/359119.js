function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SafetyWarningFeedbackTypes: function() {
            return r
        },
        SafetyWarningTypes: function() {
            return i
        }
    }), n("47120");
    var i, r, s, a, o = n("442837"),
        l = n("570140"),
        u = n("592125");
    let d = 5 * n("70956").default.Millis.SECOND;
    (s = i || (i = {}))[s.STRANGER_DANGER = 1] = "STRANGER_DANGER", s[s.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", s[s.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (a = r || (r = {}))[a.UPVOTE = 0] = "UPVOTE", a[a.DOWNVOTE = 1] = "DOWNVOTE";
    let _ = [],
        c = {},
        E = new Set;

    function I(e) {
        let {
            safetyWarnings: t
        } = e;
        null != t && (c[e.id] = t, t.some(e => {
            var t;
            return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                return new Date(e).getTime() > Date.now() - d
            }(e.dismiss_timestamp)
        }) ? E.add(e.id) : E.delete(e.id)), null == t && (null != c[e.id] && delete c[e.id], E.delete(e.id))
    }

    function T() {
        c = {}, Object.values(u.default.getMutablePrivateChannels()).forEach(e => {
            I(e)
        })
    }
    class f extends o.default.Store {
        initialize() {
            this.waitFor(u.default)
        }
        getChannelSafetyWarning(e, t) {
            var n;
            return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
        }
        getChannelSafetyWarnings(e) {
            var t;
            return null !== (t = c[e]) && void 0 !== t ? t : _
        }
        hasShownInitialTooltipForChannel(e) {
            return E.has(e)
        }
    }
    t.default = new f(l.default, {
        CHANNEL_CREATE: function(e) {
            I(e.channel)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            null != c[t.id] && delete c[t.id], E.delete(t.id)
        },
        CHANNEL_UPDATES: function(e) {
            e.channels.forEach(e => {
                I(e)
            })
        },
        CONNECTION_OPEN: T,
        CONNECTION_OPEN_SUPPLEMENTAL: T,
        CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
            let {
                channelId: t,
                warningId: n,
                feedbackType: i
            } = e, r = c[t];
            null != r && (c[t] = r.map(e => e.id === n ? {
                ...e,
                feedback_type: i
            } : e))
        },
        CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t
            } = e, n = c[t];
            E.delete(t), null != n && (c[t] = n.map(e => ({
                ...e,
                dismiss_timestamp: void 0
            })))
        },
        DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
            let {
                channelId: t,
                warningIds: n
            } = e, i = c[t];
            if (null == i) return;
            let r = new Date().toISOString();
            c[t] = i.map(e => n.includes(e.id) ? {
                ...e,
                dismiss_timestamp: r
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