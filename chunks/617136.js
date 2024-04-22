function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestContentCTA: function() {
            return r
        },
        getContentProperties: function() {
            return T
        },
        getQuestContentName: function() {
            return c
        },
        getQuestStatus: function() {
            return E
        },
        trackQuestContentClicked: function() {
            return S
        },
        trackQuestEvent: function() {
            return f
        }
    });
    var i, r, s = n("367907"),
        a = n("857192"),
        o = n("626135"),
        l = n("569984"),
        u = n("497505"),
        d = n("981631");
    let _ = Object.keys(u.QuestContent);

    function c(e) {
        var t;
        return null !== (t = _.find(t => u.QuestContent[t] === e)) && void 0 !== t ? t : ""
    }

    function E(e) {
        var t, n, i;
        return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? "COMPLETED_CLAIMED" : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? "COMPLETED" : (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null ? "ENROLLED" : "NONE"
    }

    function I(e) {
        return {
            quest_id: e.id,
            game_id: e.config.applicationId,
            game_name: e.config.applicationName
        }
    }

    function T(e) {
        return {
            content_id: e,
            content_name: c(e)
        }
    }

    function f(e) {
        let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: r = !1
        } = e, u = l.default.quests.get(t);
        if (null != u) {
            if (u.preview) {
                a.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", n, {
                    ...I(u),
                    ...i
                });
                return
            }
            if (r) return s.default.trackWithMetadata(n, {
                ...I(u),
                ...i
            });
            o.default.track(n, {
                ...I(u),
                ...i
            })
        }
    }

    function S(e) {
        let {
            questId: t,
            questContent: n,
            questContentCTA: i,
            trackGuildAndChannelMetadata: r = !1
        } = e;
        f({
            questId: t,
            event: d.AnalyticEvents.QUEST_CONTENT_CLICKED,
            properties: {
                ...T(n),
                cta_name: i
            },
            trackGuildAndChannelMetadata: r
        })
    }(i = r || (r = {})).LEARN_MORE = "LEARN_MORE", i.SHOW_REWARD = "SHOW_REWARD", i.CLAIM_REWARD = "CLAIM_REWARD", i.GET_REWARD_CODE = "GET_REWARD_CODE", i.COPY_REWARD_CODE = "COPY_REWARD_CODE", i.ACCEPT_QUEST = "ACCEPT_QUEST", i.COPY_QUEST_URL = "COPY_QUEST_URL", i.TRACK_PROGRESS = "TRACK_PROGRESS", i.OPEN_DISCLOSURE = "OPEN_DISCLOSURE", i.WATCH_STREAM = "WATCH_STREAM", i.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", i.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", i.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", i.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", i.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", i.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE", i.CONTEXT_MENU_LEARN_MORE = "CONTEXT_MENU.LEARN_MORE"
}