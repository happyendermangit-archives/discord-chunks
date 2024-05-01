function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        emojiEquals: function() {
            return d
        },
        getAccessibleEmojiDisplayName: function() {
            return l
        },
        getBurstAnalyticsSection: function() {
            return _
        },
        getReactionEmojiName: function() {
            return o
        },
        shouldApplyReaction: function() {
            return c
        },
        toReactionEmoji: function() {
            return u
        }
    }), n("757143");
    var i = n("633302"),
        r = n("314897"),
        a = n("981631"),
        s = n("689938");

    function o(e) {
        return null == e.id ? i.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
    }

    function l(e, t, n, i) {
        var r, a, l;
        let u;
        return (u = i ? e ? s.default.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : s.default.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? s.default.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : s.default.Messages.REACT_WITH_COUNT_A11Y_LABEL).format({
            reactions: t,
            emojiName: null !== (l = null === (a = o(n)) || void 0 === a ? void 0 : null === (r = a.replace(/[:_]/g, " ")) || void 0 === r ? void 0 : r.trim()) && void 0 !== l ? l : ""
        })
    }

    function u(e) {
        var t, n, i;
        return {
            id: null !== (t = e.id) && void 0 !== t ? t : null,
            name: null !== (i = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== i ? i : "",
            animated: !!e.animated
        }
    }

    function d(e, t) {
        if (null != t.id) {
            let n = null != e.id ? "".concat(e.id) : e.id;
            return "".concat(t.id) === n
        }
        return null == e.id && t.name === e.name
    }

    function _(e) {
        if (e.isThread()) return a.AnalyticsSections.THREAD_TEXT_AREA;
        if (e.isForumPost()) return a.AnalyticsSections.FORUM_CHANNEL_TEXT_AREA;
        if (e.isGuildVocal()) return a.AnalyticsSections.TEXT_IN_VOICE;
        return a.AnalyticsSections.CHANNEL_TEXT_AREA
    }

    function c(e) {
        let {
            userId: t,
            optimistic: n
        } = e, i = r.default.getId() === t;
        return (!n || !!i) && !0
    }
}