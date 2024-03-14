function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQuestContentName: function() {
            return c
        },
        getQuestStatus: function() {
            return f
        },
        getContentProperties: function() {
            return h
        },
        trackQuestEvent: function() {
            return E
        },
        QuestContentCTA: function() {
            return s
        },
        trackQuestContentClicked: function() {
            return g
        }
    });
    var i, s, r = n("313915"),
        a = n("599110"),
        o = n("2973"),
        l = n("588025"),
        u = n("49111");
    let d = Object.keys(l.QuestContent);

    function c(e) {
        var t;
        return null !== (t = d.find(t => l.QuestContent[t] === e)) && void 0 !== t ? t : ""
    }

    function f(e) {
        var t, n, i;
        return null == e ? null : (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? "COMPLETED_CLAIMED" : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? "COMPLETED" : (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null ? "ENROLLED" : "NONE"
    }

    function _(e) {
        return {
            quest_id: e.id,
            game_id: e.config.applicationId,
            game_name: e.config.applicationName
        }
    }

    function h(e) {
        return {
            content_id: e,
            content_name: c(e)
        }
    }

    function E(e, t, n) {
        let i = o.default.quests.get(e);
        if (null != i) {
            if (i.preview) {
                r.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", t, {
                    ..._(i),
                    ...n
                });
                return
            }
            a.default.track(t, {
                ..._(i),
                ...n
            })
        }
    }

    function g(e, t, n) {
        E(e, u.AnalyticEvents.QUEST_CONTENT_CLICKED, {
            ...h(t),
            cta_name: n
        })
    }(i = s || (s = {})).LEARN_MORE = "LEARN_MORE", i.SHOW_REWARD = "SHOW_REWARD", i.CLAIM_REWARD = "CLAIM_REWARD", i.ACCEPT_QUEST = "ACCEPT_QUEST", i.COPY_QUEST_URL = "COPY_QUEST_URL", i.TRACK_PROGRESS = "TRACK_PROGRESS", i.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", i.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", i.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", i.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", i.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", i.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE", i.CONTEXT_MENU_LEARN_MORE = "CONTEXT_MENU.LEARN_MORE"
}