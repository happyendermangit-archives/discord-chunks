function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestContentImpressionTracker: function() {
            return h
        }
    });
    var r = n("470079"),
        o = n("153832"),
        i = n("767556"),
        a = n("898511"),
        u = n("629630"),
        s = n("575748"),
        l = n("35911"),
        c = n("290976"),
        f = n("867339"),
        d = n("654530"),
        _ = n("995389"),
        E = n("281767");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }
    var I = function e(t, n, r) {
        var a = this,
            u = this;
        ! function(e, t) {
            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
        }(this, e), m(this, "id", void 0), m(this, "questIds", void 0), m(this, "questContent", void 0), m(this, "trackGuildAndChannelMetadata", void 0), m(this, "beatTimeout", void 0), m(this, "lastBeatTime", void 0), m(this, "minViewTimeReachedTimeout", void 0), m(this, "minViewTimeSecond", void 0), m(this, "minViewportPercentage", void 0), m(this, "onMinViewTimeReached", function() {
            a.questIds.forEach(function(e) {
                (0, f.trackQuestEvent)({
                    questId: e,
                    event: E.AnalyticEvents.QUEST_CONTENT_VIEWED,
                    properties: y({
                        min_view_time_seconds: a.minViewTimeSecond,
                        min_viewport_percentage: a.minViewportPercentage
                    }, a.commonProperties(e)),
                    trackGuildAndChannelMetadata: a.trackGuildAndChannelMetadata
                })
            })
        }), m(this, "heartbeat", function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            u.questIds.forEach(function(t) {
                null != u.lastBeatTime && (0, f.trackQuestEvent)({
                    questId: t,
                    event: E.AnalyticEvents.QUEST_CONTENT_VIEW_TIME,
                    properties: y({
                        is_termination_beat: e,
                        viewed_time_ms: Date.now() - u.lastBeatTime
                    }, u.commonProperties(t)),
                    trackGuildAndChannelMetadata: u.trackGuildAndChannelMetadata
                })
            }), u.lastBeatTime = Date.now()
        }), m(this, "commonProperties", function(e) {
            return y({
                impression_id: a.id,
                quest_status: (0, f.getQuestStatus)(_.default.quests.get(e))
            }, (0, f.getContentProperties)(a.questContent))
        }), m(this, "start", function() {
            a.stop(!1), a.lastBeatTime = Date.now(), a.beatTimeout = setInterval(function() {
                return a.heartbeat()
            }, 6e4), a.minViewTimeReachedTimeout = setTimeout(a.onMinViewTimeReached, 1e3 * a.minViewTimeSecond), a.questIds.forEach(function(e) {
                (0, f.trackQuestEvent)({
                    questId: e,
                    event: E.AnalyticEvents.QUEST_CONTENT_LOADED,
                    properties: y({}, a.commonProperties(e)),
                    trackGuildAndChannelMetadata: a.trackGuildAndChannelMetadata
                })
            }), (0, d.isEligibleForQuestsClientMonitoring)("QuestImpressionTracker") && l.default.increment({
                name: i.MetricEvents.QUEST_CONTENT_IMPRESSION,
                tags: ["quest_content:".concat((0, f.getQuestContentName)(a.questContent))]
            })
        }), m(this, "stop", function() {
            var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            e && u.heartbeat(!0), u.lastBeatTime = void 0, clearInterval(u.beatTimeout), clearTimeout(u.minViewTimeReachedTimeout)
        }), this.id = (0, o.v4)(), this.questContent = n, this.minViewTimeSecond = 1, this.minViewportPercentage = .5, this.questIds = Array.isArray(t) ? t : [t], this.trackGuildAndChannelMetadata = r
    };

    function h(e) {
        var t = Array.isArray(e.questId) ? e.questId.sort().join("_") : e.questId;
        return r.createElement(O, y({
            key: "".concat(t, "_").concat(e.questContent)
        }, e))
    }

    function O(e) {
        var t, n, o, i = (0, a.useStateFromStores)([c.default], function() {
                return c.default.isFocused()
            }),
            l = i !== (0, s.default)(i);
        var f = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            d = f[0],
            _ = f[1],
            E = null !== (o = e.overrideVisibility) && void 0 !== o ? o : d,
            m = E !== (0, s.default)(E),
            y = r.useRef(null),
            h = (0, u.useIsVisible)(function(e) {
                return _(e)
            }, .5);
        return r.useEffect(function() {
            return function() {
                null != y.current && y.current.stop()
            }
        }, []), r.useEffect(function() {
            var t = m && E || l && i && E,
                n = m && !E || l && !i;
            (t || n) && null != y.current && y.current.stop(), t && (y.current = new I(e.questId, e.questContent, e.trackGuildAndChannelMetadata), y.current.start())
        }, [i, E, y, l, m, e.questId, e.questContent, e.trackGuildAndChannelMetadata]), r.createElement(r.Fragment, null, e.children(h))
    }
}