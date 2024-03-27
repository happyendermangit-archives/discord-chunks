function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestContentImpressionTracker: function() {
            return E
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("748820"),
        s = n("432710"),
        r = n("446674"),
        o = n("811425"),
        u = n("84339"),
        d = n("155084"),
        c = n("471671"),
        f = n("815496"),
        m = n("188649"),
        p = n("2973"),
        h = n("49111");
    class x {
        constructor(e, t, n) {
            var i = this;
            this.onMinViewTimeReached = () => {
                this.questIds.forEach(e => {
                    (0, f.trackQuestEvent)({
                        questId: e,
                        event: h.AnalyticEvents.QUEST_CONTENT_VIEWED,
                        properties: {
                            min_view_time_seconds: this.minViewTimeSecond,
                            min_viewport_percentage: this.minViewportPercentage,
                            ...this.commonProperties(e)
                        },
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                    })
                })
            }, this.heartbeat = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.questIds.forEach(t => {
                    null != i.lastBeatTime && (0, f.trackQuestEvent)({
                        questId: t,
                        event: h.AnalyticEvents.QUEST_CONTENT_VIEW_TIME,
                        properties: {
                            is_termination_beat: e,
                            viewed_time_ms: Date.now() - i.lastBeatTime,
                            ...i.commonProperties(t)
                        },
                        trackGuildAndChannelMetadata: i.trackGuildAndChannelMetadata
                    })
                }), i.lastBeatTime = Date.now()
            }, this.commonProperties = e => ({
                impression_id: this.id,
                quest_status: (0, f.getQuestStatus)(p.default.quests.get(e)),
                ...(0, f.getContentProperties)(this.questContent)
            }), this.start = () => {
                this.stop(!1), this.lastBeatTime = Date.now(), this.beatTimeout = setInterval(() => this.heartbeat(), 6e4), this.minViewTimeReachedTimeout = setTimeout(this.onMinViewTimeReached, 1e3 * this.minViewTimeSecond), this.questIds.forEach(e => {
                    (0, f.trackQuestEvent)({
                        questId: e,
                        event: h.AnalyticEvents.QUEST_CONTENT_LOADED,
                        properties: {
                            ...this.commonProperties(e)
                        },
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                    })
                }), (0, m.isEligibleForQuestsClientMonitoring)("QuestImpressionTracker") && d.default.increment({
                    name: s.MetricEvents.QUEST_CONTENT_IMPRESSION,
                    tags: ["quest_content:".concat((0, f.getQuestContentName)(this.questContent))]
                })
            }, this.stop = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && i.heartbeat(!0), i.lastBeatTime = void 0, clearInterval(i.beatTimeout), clearTimeout(i.minViewTimeReachedTimeout)
            }, this.id = (0, a.v4)(), this.questContent = t, this.minViewTimeSecond = 1, this.minViewportPercentage = .5, this.questIds = Array.isArray(e) ? e : [e], this.trackGuildAndChannelMetadata = n
        }
    }

    function E(e) {
        let t = Array.isArray(e.questId) ? e.questId.sort().join("_") : e.questId;
        return (0, i.jsx)(y, {
            ...e
        }, "".concat(t, "_").concat(e.questContent))
    }

    function y(e) {
        var t;
        let n = (0, r.useStateFromStores)([c.default], () => c.default.isFocused()),
            a = n !== (0, u.default)(n),
            [s, d] = l.useState(!1),
            f = null !== (t = e.overrideVisibility) && void 0 !== t ? t : s,
            m = f !== (0, u.default)(f),
            p = l.useRef(null),
            h = (0, o.useIsVisible)(e => d(e), .5);
        return l.useEffect(() => () => {
            null != p.current && p.current.stop()
        }, []), l.useEffect(() => {
            let t = m && f || a && n && f,
                i = m && !f || a && !n;
            (t || i) && null != p.current && p.current.stop(), t && (p.current = new x(e.questId, e.questContent, e.trackGuildAndChannelMetadata), p.current.start())
        }, [n, f, p, a, m, e.questId, e.questContent, e.trackGuildAndChannelMetadata]), (0, i.jsx)(i.Fragment, {
            children: e.children(h)
        })
    }
}