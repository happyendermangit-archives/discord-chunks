function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackQuestEvent: function() {
            return o
        },
        QuestContentCTA: function() {
            return l
        },
        trackQuestContentClicked: function() {
            return c
        }
    });
    var a, l, s = n("599110"),
        i = n("2973"),
        r = n("588025"),
        u = n("49111");
    let d = Object.keys(r.QuestContent);

    function o(e, t, n) {
        let a = i.default.quests.get(e);
        if (null != a && !a.preview) {
            var l;
            s.default.track(t, {
                quest_id: (l = a).id,
                game_id: l.config.applicationId,
                game_name: l.config.applicationName,
                ...n
            })
        }
    }

    function c(e, t, n) {
        var a, l;
        o(e, u.AnalyticEvents.QUEST_CONTENT_CLICKED, {
            content_id: a = t,
            content_name: null !== (l = d.find(e => r.QuestContent[e] === a)) && void 0 !== l ? l : "",
            cta_name: n
        })
    }(a = l || (l = {})).LEARN_MORE = "LEARN_MORE", a.SHOW_REWARD = "SHOW_REWARD", a.CLAIM_REWARD = "CLAIM_REWARD", a.ACCEPT_QUEST = "ACCEPT_QUEST", a.COPY_QUEST_URL = "COPY_QUEST_URL", a.TRACK_PROGRESS = "TRACK_PROGRESS", a.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", a.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", a.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", a.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", a.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", a.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE"
}