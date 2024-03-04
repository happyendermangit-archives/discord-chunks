function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getQuestStatus: function() {
            return c
        },
        getContentProperties: function() {
            return _
        },
        trackQuestEvent: function() {
            return f
        },
        QuestContentCTA: function() {
            return l
        },
        trackQuestContentClicked: function() {
            return g
        }
    });
    var a, l, s = n("313915"),
        i = n("599110"),
        r = n("2973"),
        u = n("588025"),
        d = n("49111");
    let o = Object.keys(u.QuestContent);

    function c(e) {
        var t, n, a;
        return null == e ? null : (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? "COMPLETED_CLAIMED" : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? "COMPLETED" : (null === (a = e.userStatus) || void 0 === a ? void 0 : a.enrolledAt) != null ? "ENROLLED" : "NONE"
    }

    function E(e) {
        return {
            quest_id: e.id,
            game_id: e.config.applicationId,
            game_name: e.config.applicationName
        }
    }

    function _(e) {
        var t;
        return {
            content_id: e,
            content_name: null !== (t = o.find(t => u.QuestContent[t] === e)) && void 0 !== t ? t : ""
        }
    }

    function f(e, t, n) {
        let a = r.default.quests.get(e);
        if (null != a) {
            if (a.preview) {
                s.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", t, {
                    ...E(a),
                    ...n
                });
                return
            }
            i.default.track(t, {
                ...E(a),
                ...n
            })
        }
    }

    function g(e, t, n) {
        f(e, d.AnalyticEvents.QUEST_CONTENT_CLICKED, {
            ..._(t),
            cta_name: n
        })
    }(a = l || (l = {})).LEARN_MORE = "LEARN_MORE", a.SHOW_REWARD = "SHOW_REWARD", a.CLAIM_REWARD = "CLAIM_REWARD", a.ACCEPT_QUEST = "ACCEPT_QUEST", a.COPY_QUEST_URL = "COPY_QUEST_URL", a.TRACK_PROGRESS = "TRACK_PROGRESS", a.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", a.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", a.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", a.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", a.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", a.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE"
}