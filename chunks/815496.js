function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQuestContentName: function() {
            return _
        },
        getQuestStatus: function() {
            return f
        },
        getContentProperties: function() {
            return h
        },
        trackQuestEvent: function() {
            return g
        },
        QuestContentCTA: function() {
            return s
        },
        trackQuestContentClicked: function() {
            return m
        }
    });
    var i, s, r = n("716241"),
        a = n("313915"),
        o = n("599110"),
        l = n("2973"),
        u = n("588025"),
        d = n("49111");
    let c = Object.keys(u.QuestContent);

    function _(e) {
        var t;
        return null !== (t = c.find(t => u.QuestContent[t] === e)) && void 0 !== t ? t : ""
    }

    function f(e) {
        var t, n, i;
        return null == e ? null : (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? "COMPLETED_CLAIMED" : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? "COMPLETED" : (null === (i = e.userStatus) || void 0 === i ? void 0 : i.enrolledAt) != null ? "ENROLLED" : "NONE"
    }

    function E(e) {
        return {
            quest_id: e.id,
            game_id: e.config.applicationId,
            game_name: e.config.applicationName
        }
    }

    function h(e) {
        return {
            content_id: e,
            content_name: _(e)
        }
    }

    function g(e) {
        let {
            questId: t,
            event: n,
            properties: i,
            trackGuildAndChannelMetadata: s = !1
        } = e, u = l.default.quests.get(t);
        if (null != u) {
            if (u.preview) {
                a.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", n, {
                    ...E(u),
                    ...i
                });
                return
            }
            if (s) return r.default.trackWithMetadata(n, {
                ...E(u),
                ...i
            });
            o.default.track(n, {
                ...E(u),
                ...i
            })
        }
    }

    function m(e) {
        let {
            questId: t,
            questContent: n,
            questContentCTA: i,
            trackGuildAndChannelMetadata: s = !1
        } = e;
        g({
            questId: t,
            event: d.AnalyticEvents.QUEST_CONTENT_CLICKED,
            properties: {
                ...h(n),
                cta_name: i
            },
            trackGuildAndChannelMetadata: s
        })
    }(i = s || (s = {})).LEARN_MORE = "LEARN_MORE", i.SHOW_REWARD = "SHOW_REWARD", i.CLAIM_REWARD = "CLAIM_REWARD", i.ACCEPT_QUEST = "ACCEPT_QUEST", i.COPY_QUEST_URL = "COPY_QUEST_URL", i.TRACK_PROGRESS = "TRACK_PROGRESS", i.OPEN_DISCLOSURE = "OPEN_DISCLOSURE", i.WATCH_STREAM = "WATCH_STREAM", i.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", i.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", i.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", i.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", i.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", i.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE", i.CONTEXT_MENU_LEARN_MORE = "CONTEXT_MENU.LEARN_MORE"
}