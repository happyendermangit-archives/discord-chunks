function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        GuildEventTimeStatus: function() {
            return w
        }
    });
    var n, a, u = r("470079"),
        l = r("803997"),
        i = r.n(l),
        c = r("913527"),
        o = r.n(c),
        s = r("447515"),
        d = r("784184"),
        f = r("405502"),
        E = r("311327"),
        m = r("228897"),
        v = r("547700"),
        g = r("592741"),
        p = r("888447"),
        T = r("556161"),
        b = r("713653"),
        O = r("563090"),
        S = r("941504"),
        y = r("839905");

    function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function D(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }(n = a || (a = {}))[n.SCHEDULED = 0] = "SCHEDULED", n[n.STARTING_SOON = 1] = "STARTING_SOON", n[n.READY = 2] = "READY", n[n.STARTED = 3] = "STARTED", n[n.ENDED = 4] = "ENDED", n[n.CANCELED = 5] = "CANCELED";

    function h() {
        return u.createElement(v.TextBadge, {
            className: y.newBadge,
            color: s.default.unsafe_rawColors.BRAND_260.css,
            text: u.createElement(d.Text, {
                className: y.newBadgeText,
                variant: "text-xs/bold"
            }, S.default.Messages.NEW)
        })
    }

    function _(e) {
        var t = e.children,
            r = e.className,
            n = e.tooltipText;
        return u.createElement("div", {
            className: i()(y.eventStatusContainer, r)
        }, u.createElement(d.Tooltip, {
            position: "right",
            text: n,
            shouldShow: null != n
        }, function(e) {
            var n, a;
            return u.createElement("div", (n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        D(e, t, r[t])
                    })
                }
                return e
            }({}, e), a = (a = {
                className: i()(y.eventStatusContainer, r)
            }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(a)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
            }), n), t)
        }))
    }

    function w(e) {
        var t, r, n = e.startTime,
            a = e.status,
            l = e.eventType,
            c = e.className,
            s = e.endTime,
            v = e.liveText,
            w = e.textVariant,
            I = e.isNew,
            P = e.recurrenceRule,
            C = e.guildEventId,
            R = e.recurrenceId,
            A = (0, f.useThemedColorValue)(O.ThemeColor.TEXT_BRAND),
            j = (0, f.useThemedColorValue)(O.ThemeColor.TEXT_POSITIVE),
            L = (0, f.useThemedColorValue)(O.ThemeColor.TEXT_DANGER);
        null == v && (v = l === b.GuildScheduledEventEntityTypes.EXTERNAL ? S.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : S.default.Messages.STAGE_CHANNEL_LIVE_NOW);
        var x = (0, g.default)(R, C);
        var G = (t = u.useState((0, p.getEventTimeData)(n, s)), r = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var r, n, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var u = [],
                        l = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(l = (r = a.next()).done) && (u.push(r.value), !t || u.length !== t); l = !0);
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !l && null != a.return && a.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return u
                }
            }(t, r) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return N(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return N(e, t)
                }
            }(t, r) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            M = G[0],
            k = M.startDateTimeString,
            U = M.endDateTimeString,
            H = M.currentOrPastEvent,
            V = M.upcomingEvent,
            Y = M.diffMinutes,
            B = G[1];
        u.useEffect(function() {
            B((0, p.getEventTimeData)(n, s));
            var e = setInterval(function() {
                return B((0, p.getEventTimeData)(n, s))
            }, 1e3);
            return function() {
                clearInterval(e)
            }
        }, [n, s]);
        var W = k;
        null != U && "" !== U && (W = S.default.Messages.START_DATE_TO_END_DATE.format({
            start: k,
            end: U
        }));
        var K = u.useMemo(function() {
                return a === b.GuildScheduledEventStatus.CANCELED || (null == x ? void 0 : x.is_canceled) ? 5 : a === b.GuildScheduledEventStatus.ACTIVE ? 3 : b.GuildScheduledEventStatusDone.has(a) ? 4 : H ? 2 : V ? 1 : 0
            }, [a, null == x ? void 0 : x.is_canceled, H, V]),
            F = function(e, t, r, n, a) {
                switch (e) {
                    case 1:
                        return a > 0 ? S.default.Messages.STARTING_IN_MINUTES.format({
                            minutes: a
                        }) : S.default.Messages.STARTING_SOON;
                    case 2:
                        return S.default.Messages.STARTING_SOON;
                    case 3:
                        return null != n && "" !== n ? S.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                            start: r,
                            startHook: function(e) {
                                return u.createElement(d.Text, {
                                    color: "text-positive",
                                    variant: "text-sm/semibold",
                                    className: y.liveEventEndTime
                                }, e)
                            },
                            end: n
                        }) : null != r ? r : "";
                    default:
                        return t
                }
            }(K, W, v, U, Y),
            X = u.useMemo(function() {
                return function(e) {
                    var t, r = e.timeStatus,
                        n = e.textBrand,
                        a = e.textPositive,
                        u = e.textDanger,
                        l = e.endDateTimeString,
                        i = e.startDateTimeString,
                        c = E.default,
                        o = n,
                        s = "header-secondary";
                    switch (r) {
                        case 3:
                            o = a, s = null != l ? void 0 : "text-positive";
                            break;
                        case 4:
                            c = m.default;
                            break;
                        case 2:
                        case 1:
                            s = "text-brand", t = i;
                            break;
                        case 5:
                            o = u
                    }
                    return {
                        Icon: c,
                        iconColor: o.hex,
                        textColor: s,
                        tooltipText: t
                    }
                }({
                    timeStatus: K,
                    textBrand: A,
                    textPositive: j,
                    textDanger: L,
                    endDateTimeString: U,
                    startDateTimeString: k
                })
            }, [K, A, j, L, U, k]),
            z = X.Icon,
            Z = X.iconColor,
            $ = X.textColor,
            q = X.tooltipText,
            J = null;
        if (null != P) {
            var Q = (0, p.getRRule)(P);
            J = S.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                recurrenceRule: Q.toText()
            });
            var ee = o()(n);
            J = function(e, t) {
                var r = t.toDate(),
                    n = r.toLocaleString(S.default.getLocale(), {
                        weekday: "long"
                    });
                switch (e) {
                    case T.RecurrenceOptions.WEEKLY:
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                            weekday: n
                        });
                    case T.RecurrenceOptions.BIWEEKLY:
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
                            weekday: n
                        });
                    case T.RecurrenceOptions.MONTHLY:
                        var a = Math.ceil(r.getDate() / 7);
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
                            weekday: n,
                            nth: a
                        });
                    case T.RecurrenceOptions.YEARLY:
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                            date: r.toLocaleString(S.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        });
                    case T.RecurrenceOptions.WEEKDAY_ONLY:
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                    default:
                        return null
                }
            }((0, p.recurrenceRuleToOption)(ee, P), ee)
        }
        return u.createElement(_, {
            className: i()(c, D({}, y.isRecurring, null != J)),
            tooltipText: q
        }, I && a === b.GuildScheduledEventStatus.SCHEDULED ? u.createElement(h, null) : u.createElement(z, {
            color: Z,
            width: 20,
            height: 20
        }), u.createElement("div", {
            className: y.eventStatusLabel
        }, u.createElement(d.Text, {
            color: $,
            variant: void 0 === w ? "text-sm/semibold" : w
        }, F), null != J && u.createElement(d.Text, {
            color: "header-secondary",
            variant: "text-xs/normal"
        }, J)))
    }
}