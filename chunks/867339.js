function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestContentCTA: function() {
            return o
        },
        getContentProperties: function() {
            return m
        },
        getQuestContentName: function() {
            return _
        },
        getQuestStatus: function() {
            return E
        },
        trackQuestContentClicked: function() {
            return I
        },
        trackQuestEvent: function() {
            return y
        }
    });
    var r, o, i = n("140817"),
        a = n("306191"),
        u = n("870331"),
        s = n("995389"),
        l = n("118"),
        c = n("281767");

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    var d = Object.keys(l.QuestContent);

    function _(e) {
        var t;
        return null !== (t = d.find(function(t) {
            return l.QuestContent[t] === e
        })) && void 0 !== t ? t : ""
    }

    function E(e) {
        var t, n, r;
        return null == e ? null : (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? "COMPLETED_CLAIMED" : (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null ? "COMPLETED" : (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null ? "ENROLLED" : "NONE"
    }

    function p(e) {
        return {
            quest_id: e.id,
            game_id: e.config.applicationId,
            game_name: e.config.applicationName
        }
    }

    function m(e) {
        return {
            content_id: e,
            content_name: _(e)
        }
    }

    function y(e) {
        var t = e.questId,
            n = e.event,
            r = e.properties,
            o = e.trackGuildAndChannelMetadata,
            l = s.default.quests.get(t);
        if (null != l) {
            if (l.preview) {
                a.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", n, f({}, p(l), r));
                return
            }
            if (void 0 !== o && o) return i.default.trackWithMetadata(n, f({}, p(l), r));
            u.default.track(n, f({}, p(l), r))
        }
    }

    function I(e) {
        var t, n, r = e.questId,
            o = e.questContent,
            i = e.questContentCTA,
            a = e.trackGuildAndChannelMetadata;
        y({
            questId: r,
            event: c.AnalyticEvents.QUEST_CONTENT_CLICKED,
            properties: (t = f({}, m(o)), n = (n = {
                cta_name: i
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t),
            trackGuildAndChannelMetadata: void 0 !== a && a
        })
    }(r = o || (o = {})).LEARN_MORE = "LEARN_MORE", r.SHOW_REWARD = "SHOW_REWARD", r.CLAIM_REWARD = "CLAIM_REWARD", r.GET_REWARD_CODE = "GET_REWARD_CODE", r.COPY_REWARD_CODE = "COPY_REWARD_CODE", r.ACCEPT_QUEST = "ACCEPT_QUEST", r.COPY_QUEST_URL = "COPY_QUEST_URL", r.TRACK_PROGRESS = "TRACK_PROGRESS", r.OPEN_DISCLOSURE = "OPEN_DISCLOSURE", r.WATCH_STREAM = "WATCH_STREAM", r.REWARD_LEARN_MORE = "REWARD_LEARN_MORE", r.OPEN_CONTEXT_MENU = "OPEN_CONTEXT_MENU", r.CONTEXT_MENU_COPY_LINK = "CONTEXT_MENU.COPY_LINK", r.CONTEXT_MENU_HIDE_CONTENT = "CONTEXT_MENU.HIDE_CONTENT", r.CONTEXT_MENU_OPEN_GAME_LINK = "CONTEXT_MENU.OPEN_GAME_LINK", r.CONTEXT_MENU_OPEN_DISCLOSURE = "CONTEXT_MENU.OPEN_DISCLOSURE", r.CONTEXT_MENU_LEARN_MORE = "CONTEXT_MENU.LEARN_MORE"
}