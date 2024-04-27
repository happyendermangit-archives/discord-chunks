function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        GuildEventTimeStatus: function() {
            return C
        }
    }), s("47120");
    var n, l, a = s("735250"),
        r = s("470079"),
        u = s("120356"),
        i = s.n(u),
        d = s("913527"),
        c = s.n(d),
        o = s("692547"),
        E = s("481060"),
        f = s("44315"),
        T = s("305878"),
        v = s("855693"),
        N = s("26290"),
        S = s("894017"),
        h = s("854698"),
        m = s("849464"),
        _ = s("765305"),
        R = s("231338"),
        D = s("689938"),
        g = s("690504");
    (l = n || (n = {}))[l.SCHEDULED = 0] = "SCHEDULED", l[l.STARTING_SOON = 1] = "STARTING_SOON", l[l.READY = 2] = "READY", l[l.STARTED = 3] = "STARTED", l[l.ENDED = 4] = "ENDED", l[l.CANCELED = 5] = "CANCELED";

    function x() {
        return (0, a.jsx)(N.TextBadge, {
            className: g.newBadge,
            color: o.default.unsafe_rawColors.BRAND_260.css,
            text: (0, a.jsx)(E.Text, {
                className: g.newBadgeText,
                variant: "text-xs/bold",
                children: D.default.Messages.NEW
            })
        })
    }

    function p(e) {
        let {
            children: t,
            className: s,
            tooltipText: n
        } = e;
        return (0, a.jsx)("div", {
            className: i()(g.eventStatusContainer, s),
            children: (0, a.jsx)(E.Tooltip, {
                position: "right",
                text: n,
                shouldShow: null != n,
                children: e => (0, a.jsx)("div", {
                    ...e,
                    className: i()(g.eventStatusContainer, s),
                    children: t
                })
            })
        })
    }

    function C(e) {
        let {
            startTime: t,
            status: s,
            eventType: n,
            className: l,
            endTime: u,
            liveText: d,
            textVariant: o = "text-sm/semibold",
            isNew: N,
            recurrenceRule: C,
            guildEventId: I,
            recurrenceId: L
        } = e, A = (0, f.useThemedColorValue)(R.ThemeColor.TEXT_BRAND), j = (0, f.useThemedColorValue)(R.ThemeColor.TEXT_POSITIVE), G = (0, f.useThemedColorValue)(R.ThemeColor.TEXT_DANGER);
        null == d && (d = n === _.GuildScheduledEventEntityTypes.EXTERNAL ? D.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : D.default.Messages.STAGE_CHANNEL_LIVE_NOW);
        let U = (0, S.default)(L, I),
            [{
                startDateTimeString: M,
                endDateTimeString: O,
                currentOrPastEvent: w,
                upcomingEvent: H,
                diffMinutes: V
            }, b] = r.useState((0, h.getEventTimeData)(t, u));
        r.useEffect(() => {
            b((0, h.getEventTimeData)(t, u));
            let e = setInterval(() => b((0, h.getEventTimeData)(t, u)), 1e3);
            return () => {
                clearInterval(e)
            }
        }, [t, u]);
        let P = M;
        null != O && "" !== O && (P = D.default.Messages.START_DATE_TO_END_DATE.format({
            start: M,
            end: O
        }));
        let Y = r.useMemo(() => s === _.GuildScheduledEventStatus.CANCELED || (null == U ? void 0 : U.is_canceled) ? 5 : s === _.GuildScheduledEventStatus.ACTIVE ? 3 : _.GuildScheduledEventStatusDone.has(s) ? 4 : w ? 2 : H ? 1 : 0, [s, null == U ? void 0 : U.is_canceled, w, H]),
            B = function(e, t, s, n, l) {
                switch (e) {
                    case 1:
                        return l > 0 ? D.default.Messages.STARTING_IN_MINUTES.format({
                            minutes: l
                        }) : D.default.Messages.STARTING_SOON;
                    case 2:
                        return D.default.Messages.STARTING_SOON;
                    case 3:
                        return null != n && "" !== n ? D.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                            start: s,
                            startHook: e => (0, a.jsx)(E.Text, {
                                color: "text-positive",
                                variant: "text-sm/semibold",
                                className: g.liveEventEndTime,
                                children: e
                            }),
                            end: n
                        }) : null != s ? s : "";
                    default:
                        return t
                }
            }(Y, P, d, O, V),
            {
                Icon: k,
                iconColor: y,
                textColor: W,
                tooltipText: K
            } = r.useMemo(() => (function(e) {
                let t, {
                        timeStatus: s,
                        textBrand: n,
                        textPositive: l,
                        textDanger: a,
                        endDateTimeString: r,
                        startDateTimeString: u
                    } = e,
                    i = T.default,
                    d = n,
                    c = "header-secondary";
                switch (s) {
                    case 3:
                        d = l, c = null != r ? void 0 : "text-positive";
                        break;
                    case 4:
                        i = v.default;
                        break;
                    case 2:
                    case 1:
                        c = "text-brand", t = u;
                        break;
                    case 5:
                        d = a
                }
                return {
                    Icon: i,
                    iconColor: d.hex,
                    textColor: c,
                    tooltipText: t
                }
            })({
                timeStatus: Y,
                textBrand: A,
                textPositive: j,
                textDanger: G,
                endDateTimeString: O,
                startDateTimeString: M
            }), [Y, A, j, G, O, M]),
            Z = null;
        if (null != C) {
            let e = (0, h.getRRule)(C);
            Z = D.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                recurrenceRule: e.toText()
            });
            let s = c()(t);
            Z = function(e, t) {
                let s = t.toDate(),
                    n = s.toLocaleString(D.default.getLocale(), {
                        weekday: "long"
                    });
                switch (e) {
                    case m.RecurrenceOptions.WEEKLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                            weekday: n
                        });
                    case m.RecurrenceOptions.BIWEEKLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
                            weekday: n
                        });
                    case m.RecurrenceOptions.MONTHLY:
                        let l = Math.ceil(s.getDate() / 7);
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
                            weekday: n,
                            nth: l
                        });
                    case m.RecurrenceOptions.YEARLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                            date: s.toLocaleString(D.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        });
                    case m.RecurrenceOptions.WEEKDAY_ONLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                    case m.RecurrenceOptions.WEEKEND_ONLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
                    default:
                        return null
                }
            }((0, h.recurrenceRuleToOption)(s, C), s)
        }
        return (0, a.jsxs)(p, {
            className: i()(l, {
                [g.isRecurring]: null != Z
            }),
            tooltipText: K,
            children: [N && s === _.GuildScheduledEventStatus.SCHEDULED ? (0, a.jsx)(x, {}) : (0, a.jsx)(k, {
                color: y,
                width: 20,
                height: 20
            }), (0, a.jsxs)("div", {
                className: g.eventStatusLabel,
                children: [(0, a.jsx)(E.Text, {
                    color: W,
                    variant: o,
                    children: B
                }), null != Z && (0, a.jsx)(E.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: Z
                })]
            })]
        })
    }
}