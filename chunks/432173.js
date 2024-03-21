function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getReactionEmojiName: function() {
            return o
        },
        getAccessibleEmojiDisplayName: function() {
            return l
        },
        toReactionEmoji: function() {
            return u
        },
        emojiEquals: function() {
            return d
        },
        getBurstAnalyticsSection: function() {
            return c
        },
        shouldApplyReaction: function() {
            return _
        }
    }), n("781738");
    var i = n("867805"),
        s = n("271938"),
        r = n("49111"),
        a = n("782340");

    function o(e) {
        return null == e.id ? i.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
    }

    function l(e, t, n, i) {
        var s, r, l;
        let u;
        u = i ? e ? a.default.Messages.SUPER_REACT_REMOVE_WITH_COUNT_A11Y_LABEL : a.default.Messages.SUPER_REACT_WITH_COUNT_A11Y_LABEL : e ? a.default.Messages.REACT_REMOVE_WITH_COUNT_A11Y_LABEL : a.default.Messages.REACT_WITH_COUNT_A11Y_LABEL;
        let d = u.format({
            reactions: t,
            emojiName: null !== (l = null === (r = o(n)) || void 0 === r ? void 0 : null === (s = r.replace(/[:_]/g, " ")) || void 0 === s ? void 0 : s.trim()) && void 0 !== l ? l : ""
        });
        return d
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

    function c(e) {
        if (e.isThread()) return r.AnalyticsSections.THREAD_TEXT_AREA;
        if (e.isForumPost()) return r.AnalyticsSections.FORUM_CHANNEL_TEXT_AREA;
        if (e.isGuildVocal()) return r.AnalyticsSections.TEXT_IN_VOICE;
        return r.AnalyticsSections.CHANNEL_TEXT_AREA
    }

    function _(e) {
        let {
            userId: t,
            optimistic: n
        } = e, i = s.default.getId() === t;
        return (!n || !!i) && !0
    }
}