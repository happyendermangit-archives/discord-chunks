function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestContentImpressionTracker: function() {
            return h
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("153832"),
        a = n("286379"),
        o = n("442837"),
        l = n("434650"),
        u = n("110924"),
        d = n("797614"),
        _ = n("451478"),
        c = n("617136"),
        E = n("145460"),
        I = n("569984"),
        T = n("981631");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class S {
        constructor(e, t, n) {
            var i = this;
            f(this, "id", void 0), f(this, "questIds", void 0), f(this, "questContent", void 0), f(this, "trackGuildAndChannelMetadata", void 0), f(this, "beatTimeout", void 0), f(this, "lastBeatTime", void 0), f(this, "minViewTimeReachedTimeout", void 0), f(this, "minViewTimeSecond", void 0), f(this, "minViewportPercentage", void 0), f(this, "onMinViewTimeReached", () => {
                this.questIds.forEach(e => {
                    (0, c.trackQuestEvent)({
                        questId: e,
                        event: T.AnalyticEvents.QUEST_CONTENT_VIEWED,
                        properties: {
                            min_view_time_seconds: this.minViewTimeSecond,
                            min_viewport_percentage: this.minViewportPercentage,
                            ...this.commonProperties(e)
                        },
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                    })
                })
            }), f(this, "heartbeat", function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.questIds.forEach(t => {
                    null != i.lastBeatTime && (0, c.trackQuestEvent)({
                        questId: t,
                        event: T.AnalyticEvents.QUEST_CONTENT_VIEW_TIME,
                        properties: {
                            is_termination_beat: e,
                            viewed_time_ms: Date.now() - i.lastBeatTime,
                            ...i.commonProperties(t)
                        },
                        trackGuildAndChannelMetadata: i.trackGuildAndChannelMetadata
                    })
                }), i.lastBeatTime = Date.now()
            }), f(this, "commonProperties", e => ({
                impression_id: this.id,
                quest_status: (0, c.getQuestStatus)(I.default.quests.get(e)),
                ...(0, c.getContentProperties)(this.questContent)
            })), f(this, "start", () => {
                this.stop(!1), this.lastBeatTime = Date.now(), this.beatTimeout = setInterval(() => this.heartbeat(), 6e4), this.minViewTimeReachedTimeout = setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSecond), this.questIds.forEach(e => {
                    (0, c.trackQuestEvent)({
                        questId: e,
                        event: T.AnalyticEvents.QUEST_CONTENT_LOADED,
                        properties: {
                            ...this.commonProperties(e)
                        },
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                    })
                }), (0, E.isEligibleForQuestsClientMonitoring)("QuestImpressionTracker") && d.default.increment({
                    name: a.MetricEvents.QUEST_CONTENT_IMPRESSION,
                    tags: ["quest_content:".concat((0, c.getQuestContentName)(this.questContent))]
                })
            }), f(this, "stop", function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && i.heartbeat(!0), i.lastBeatTime = void 0, clearInterval(i.beatTimeout), clearTimeout(i.minViewTimeReachedTimeout)
            }), this.id = (0, s.v4)(), this.questContent = t, this.minViewTimeSecond = 1, this.minViewportPercentage = .5, this.questIds = Array.isArray(e) ? e : [e], this.trackGuildAndChannelMetadata = n
        }
    }

    function h(e) {
        let t = Array.isArray(e.questId) ? e.questId.sort().join("_") : e.questId;
        return (0, i.jsx)(A, {
            ...e
        }, "".concat(t, "_").concat(e.questContent))
    }

    function A(e) {
        var t;
        let n = (0, o.useStateFromStores)([_.default], () => _.default.isFocused()),
            s = n !== (0, u.default)(n),
            [a, d] = r.useState(!1),
            c = null !== (t = e.overrideVisibility) && void 0 !== t ? t : a,
            E = c !== (0, u.default)(c),
            I = r.useRef(null),
            T = (0, l.useIsVisible)(e => d(e), .5);
        return r.useEffect(() => () => {
            null != I.current && I.current.stop()
        }, []), r.useEffect(() => {
            let t = E && c || s && n && c,
                i = E && !c || s && !n;
            (t || i) && null != I.current && I.current.stop(), t && (I.current = new S(e.questId, e.questContent, e.trackGuildAndChannelMetadata), I.current.start())
        }, [n, c, I, s, E, e.questId, e.questContent, e.trackGuildAndChannelMetadata]), (0, i.jsx)(i.Fragment, {
            children: e.children(T)
        })
    }
}