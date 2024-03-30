function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showReportModalForDiscoverableGuild: function() {
            return v
        },
        showReportModalForFirstDM: function() {
            return g
        },
        showReportModalForGuildDirectoryEntry: function() {
            return y
        },
        showReportModalForGuildScheduledEvent: function() {
            return h
        },
        showReportModalForInappropriateConversationSafetyAlert: function() {
            return M
        },
        showReportModalForMessage: function() {
            return E
        },
        showReportModalForStageChannel: function() {
            return b
        },
        showReportModalForUser: function() {
            return R
        },
        showUnauthenticatedReportModalForMessage: function() {
            return N
        },
        showUnauthenticatedReportModalForUser: function() {
            return O
        },
        submitHamReportForFirstDM: function() {
            return _
        },
        submitReportForInappropriateConversationSafetyAlert: function() {
            return I
        }
    });
    var r = n("140817"),
        a = n("487181"),
        o = n("715689"),
        l = n("428009"),
        i = n("673686"),
        u = n("303822"),
        c = n("658005"),
        s = n("978606"),
        d = n("281767");

    function f(e, t, n, r, a, o, l) {
        try {
            var i = e[o](l),
                u = i.value
        } catch (e) {
            n(e);
            return
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a)
    }

    function m(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, a) {
                var o = e.apply(t, n);

                function l(e) {
                    f(o, r, a, l, i, "next", e)
                }

                function i(e) {
                    f(o, r, a, l, i, "throw", e)
                }
                l(void 0)
            })
        }
    }

    function p(e, t) {
        var n, r, a, o, l = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function i(o) {
            return function(i) {
                return function(o) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                        switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                            case 0:
                            case 1:
                                a = o;
                                break;
                            case 4:
                                return l.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = l.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                    l.label = o[1];
                                    break
                                }
                                if (6 === o[0] && l.label < a[1]) {
                                    l.label = a[1], a = o;
                                    break
                                }
                                if (a && l.label < a[2]) {
                                    l.label = a[2], l.ops.push(o);
                                    break
                                }
                                a[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        o = t.call(e, l)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        n = a = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, i])
            }
        }
    }

    function v(e, t) {
        A(u.ReportNames.GUILD_DISCOVERY, {
            guild_id: e.id
        }), (0, s.showReportModal)({
            name: u.ReportNames.GUILD_DISCOVERY,
            record: e
        }, {}, t)
    }

    function y(e, t) {
        A(u.ReportNames.GUILD_DIRECTORY_ENTRY, {
            channel_id: e.channelId,
            guild_id: e.guildId
        }), (0, s.showReportModal)({
            name: u.ReportNames.GUILD_DIRECTORY_ENTRY,
            record: e
        }, {}, t)
    }

    function E(e, t) {
        A(u.ReportNames.MESSAGE, {
            message_id: e.id,
            channel_id: e.channel_id
        });
        var n = (0, i.shouldShowFraudMenuVariant)();
        (0, s.showReportModal)({
            name: u.ReportNames.MESSAGE,
            record: e
        }, {
            variant: n ? "4" : void 0
        }, t)
    }

    function b(e, t) {
        var n = a.default.getStageInstanceByChannel(e.id);
        null != n && (A(u.ReportNames.STAGE_CHANNEL, {
            stage_instance_id: n.id,
            channel_id: n.channel_id,
            guild_id: n.guild_id
        }), (0, s.showReportModal)({
            name: u.ReportNames.STAGE_CHANNEL,
            record: n
        }, {}, t))
    }

    function h(e, t) {
        var n;
        A(u.ReportNames.GUILD_SCHEDULED_EVENT, {
            guild_scheduled_event_id: e.id,
            guild_id: e.guild_id,
            channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
        }), (0, s.showReportModal)({
            name: u.ReportNames.GUILD_SCHEDULED_EVENT,
            record: e
        }, {}, t)
    }

    function g(e, t) {
        A(u.ReportNames.FIRST_DM, {
            message_id: e.id,
            channel_id: e.channel_id
        }), (0, s.showReportModal)({
            name: u.ReportNames.FIRST_DM,
            record: e
        }, {}, t, void 0, !1)
    }

    function _(e, t) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = m(function(e, t) {
            var n;
            return p(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, (0, c.submitHeadlessReport)({
                            name: u.ReportNames.FIRST_DM,
                            record: e
                        }, {
                            variant: "_first_dm_ham_v1"
                        })];
                    case 1:
                        return n.sent(), null == t || t(), [3, 3];
                    case 2:
                        return n.sent(), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function R(e, t, n) {
        A(u.ReportNames.USER, {
            reported_user_id: e.id
        }), (0, s.showReportModal)({
            name: u.ReportNames.USER,
            record: e,
            contextualGuildId: t
        }, {}, n, void 0, !1)
    }

    function O(e, t) {
        var n = new l.default({});
        A(u.UnauthenticatedReportNames.USER, {
            reported_user_id: n.id
        }), (0, s.showReportModal)({
            name: u.UnauthenticatedReportNames.USER,
            record: n
        }, {}, t, void 0, !1, !1, e)
    }

    function N(e, t) {
        var n = new o.default({});
        A(u.UnauthenticatedReportNames.MESSAGE, {
            message_id: void 0,
            channel_id: void 0
        }), (0, s.showReportModal)({
            name: u.UnauthenticatedReportNames.MESSAGE,
            record: n
        }, {}, t, void 0, !1, !1, e)
    }

    function I(e, t, n) {
        return T.apply(this, arguments)
    }

    function T() {
        return (T = m(function(e, t, n) {
            var r;
            return p(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), [4, (0, c.submitHeadlessReport)({
                            name: u.ReportNames.MESSAGE,
                            record: e
                        }, {
                            variant: "safety_alerts_headless_v1"
                        })];
                    case 1:
                        return r.sent(), null == t || t(), [3, 3];
                    case 2:
                        return r.sent(), null == n || n(), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function M(e, t) {
        A(u.ReportNames.MESSAGE, {
            message_id: e.id,
            channel_id: e.channel_id
        }), (0, s.showReportModal)({
            name: u.ReportNames.MESSAGE,
            record: e
        }, {
            variant: "safety_alerts_v1"
        }, t)
    }

    function A(e, t) {
        r.default.trackWithMetadata(d.AnalyticEvents.IAR_MODAL_OPEN, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, a, o;
                    r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[a] = o
                })
            }
            return e
        }({
            report_type: e
        }, t))
    }
}