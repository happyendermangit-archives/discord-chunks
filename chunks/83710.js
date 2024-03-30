function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        emojiEquals: function() {
            return c
        },
        getAccessibleEmojiDisplayName: function() {
            return s
        },
        getBurstAnalyticsSection: function() {
            return f
        },
        getReactionEmojiName: function() {
            return u
        },
        shouldApplyReaction: function() {
            return d
        },
        toReactionEmoji: function() {
            return l
        }
    });
    var r = n("27375"),
        o = n("217014"),
        i = n("281767"),
        a = n("941504");

    function u(e) {
        return null == e.id ? r.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
    }

    function s(e, t, n, r) {
        var o, i, s, l;
        return (s = r ? e ? a.default.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : a.default.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? a.default.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : a.default.Messages.REACT_WITH_COUNT_A11Y_LABEL).format({
            reactions: t,
            emojiName: null !== (l = null === (i = u(n)) || void 0 === i ? void 0 : null === (o = i.replace(/[:_]/g, " ")) || void 0 === o ? void 0 : o.trim()) && void 0 !== l ? l : ""
        })
    }

    function l(e) {
        var t, n, r;
        return {
            id: null !== (t = e.id) && void 0 !== t ? t : null,
            name: null !== (r = null !== (n = null != e.id ? e.name : e.optionallyDiverseSequence) && void 0 !== n ? n : e.name) && void 0 !== r ? r : "",
            animated: !!e.animated
        }
    }

    function c(e, t) {
        if (null != t.id) {
            var n = null != e.id ? "".concat(e.id) : e.id;
            return "".concat(t.id) === n
        }
        return null == e.id && t.name === e.name
    }

    function f(e) {
        if (e.isThread()) return i.AnalyticsSections.THREAD_TEXT_AREA;
        if (e.isForumPost()) return i.AnalyticsSections.FORUM_CHANNEL_TEXT_AREA;
        if (e.isGuildVocal()) return i.AnalyticsSections.TEXT_IN_VOICE;
        return i.AnalyticsSections.CHANNEL_TEXT_AREA
    }

    function d(e) {
        var t = e.userId,
            n = e.optimistic,
            r = o.default.getId() === t;
        return (!n || !!r) && !0
    }
}