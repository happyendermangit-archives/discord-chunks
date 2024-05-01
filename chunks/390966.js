function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildEventTimeStatus: function() {
            return C
        }
    }), n("47120");
    var s, l, a = n("735250"),
        r = n("470079"),
        u = n("120356"),
        i = n.n(u),
        c = n("913527"),
        d = n.n(c),
        o = n("692547"),
        E = n("481060"),
        f = n("44315"),
        T = n("305878"),
        v = n("855693"),
        N = n("26290"),
        _ = n("894017"),
        S = n("854698"),
        h = n("849464"),
        m = n("765305"),
        D = n("231338"),
        R = n("689938"),
        g = n("690504");
    (l = s || (s = {}))[l.SCHEDULED = 0] = "SCHEDULED", l[l.STARTING_SOON = 1] = "STARTING_SOON", l[l.READY = 2] = "READY", l[l.STARTED = 3] = "STARTED", l[l.ENDED = 4] = "ENDED", l[l.CANCELED = 5] = "CANCELED";

    function p() {
        return (0, a.jsx)(N.TextBadge, {
            className: g.newBadge,
            color: o.default.unsafe_rawColors.BRAND_260.css,
            text: (0, a.jsx)(E.Text, {
                className: g.newBadgeText,
                variant: "text-xs/bold",
                children: R.default.Messages.NEW
            })
        })
    }

    function x(e) {
        let {
            children: t,
            className: n,
            tooltipText: s
        } = e;
        return (0, a.jsx)("div", {
            className: i()(g.eventStatusContainer, n),
            children: (0, a.jsx)(E.Tooltip, {
                position: "right",
                text: s,
                shouldShow: null != s,
                children: e => (0, a.jsx)("div", {
                    ...e,
                    className: i()(g.eventStatusContainer, n),
                    children: t
                })
            })
        })
    }

    function C(e) {
        let {
            startTime: t,
            status: n,
            eventType: s,
            className: l,
            endTime: u,
            liveText: c,
            textVariant: o = "text-sm/semibold",
            isNew: N,
            recurrenceRule: C,
            guildEventId: I,
            recurrenceId: L
        } = e, A = (0, f.useThemedColorValue)(D.ThemeColor.TEXT_BRAND), G = (0, f.useThemedColorValue)(D.ThemeColor.TEXT_POSITIVE), j = (0, f.useThemedColorValue)(D.ThemeColor.TEXT_DANGER);
        null == c && (c = s === m.GuildScheduledEventEntityTypes.EXTERNAL ? R.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : R.default.Messages.STAGE_CHANNEL_LIVE_NOW);
        let O = (0, _.default)(L, I),
            [{
                startDateTimeString: M,
                endDateTimeString: U,
                currentOrPastEvent: w,
                upcomingEvent: V,
                diffMinutes: H
            }, P] = r.useState((0, S.getEventTimeData)(t, u));
        r.useEffect(() => {
            P((0, S.getEventTimeData)(t, u));
            let e = setInterval(() => P((0, S.getEventTimeData)(t, u)), 1e3);
            return () => {
                clearInterval(e)
            }
        }, [t, u]);
        let b = M;
        null != U && "" !== U && (b = R.default.Messages.START_DATE_TO_END_DATE.format({
            start: M,
            end: U
        }));
        let B = r.useMemo(() => n === m.GuildScheduledEventStatus.CANCELED || (null == O ? void 0 : O.is_canceled) ? 5 : n === m.GuildScheduledEventStatus.ACTIVE ? 3 : m.GuildScheduledEventStatusDone.has(n) ? 4 : w ? 2 : V ? 1 : 0, [n, null == O ? void 0 : O.is_canceled, w, V]),
            Y = function(e, t, n, s, l) {
                switch (e) {
                    case 1:
                        return l > 0 ? R.default.Messages.STARTING_IN_MINUTES.format({
                            minutes: l
                        }) : R.default.Messages.STARTING_SOON;
                    case 2:
                        return R.default.Messages.STARTING_SOON;
                    case 3:
                        return null != s && "" !== s ? R.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                            start: n,
                            startHook: e => (0, a.jsx)(E.Text, {
                                color: "text-positive",
                                variant: "text-sm/semibold",
                                className: g.liveEventEndTime,
                                children: e
                            }),
                            end: s
                        }) : null != n ? n : "";
                    default:
                        return t
                }
            }(B, b, c, U, H),
            {
                Icon: k,
                iconColor: y,
                textColor: W,
                tooltipText: K
            } = r.useMemo(() => (function(e) {
                let t, {
                        timeStatus: n,
                        textBrand: s,
                        textPositive: l,
                        textDanger: a,
                        endDateTimeString: r,
                        startDateTimeString: u
                    } = e,
                    i = T.default,
                    c = s,
                    d = "header-secondary";
                switch (n) {
                    case 3:
                        c = l, d = null != r ? void 0 : "text-positive";
                        break;
                    case 4:
                        i = v.default;
                        break;
                    case 2:
                    case 1:
                        d = "text-brand", t = u;
                        break;
                    case 5:
                        c = a
                }
                return {
                    Icon: i,
                    iconColor: c.hex,
                    textColor: d,
                    tooltipText: t
                }
            })({
                timeStatus: B,
                textBrand: A,
                textPositive: G,
                textDanger: j,
                endDateTimeString: U,
                startDateTimeString: M
            }), [B, A, G, j, U, M]),
            z = null;
        if (null != C) {
            let e = (0, S.getRRule)(C);
            z = R.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                recurrenceRule: e.toText()
            });
            let n = d()(t);
            z = function(e, t) {
                let n = t.toDate(),
                    s = n.toLocaleString(R.default.getLocale(), {
                        weekday: "long"
                    });
                switch (e) {
                    case h.RecurrenceOptions.WEEKLY:
                        return R.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                            weekday: s
                        });
                    case h.RecurrenceOptions.BIWEEKLY:
                        return R.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
                            weekday: s
                        });
                    case h.RecurrenceOptions.MONTHLY:
                        let l = Math.ceil(n.getDate() / 7);
                        return R.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
                            weekday: s,
                            nth: l
                        });
                    case h.RecurrenceOptions.YEARLY:
                        return R.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                            date: n.toLocaleString(R.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        });
                    case h.RecurrenceOptions.WEEKDAY_ONLY:
                        return R.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                    case h.RecurrenceOptions.WEEKEND_ONLY:
                        return R.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
                    default:
                        return null
                }
            }((0, S.recurrenceRuleToOption)(n, C), n)
        }
        return (0, a.jsxs)(x, {
            className: i()(l, {
                [g.isRecurring]: null != z
            }),
            tooltipText: K,
            children: [N && n === m.GuildScheduledEventStatus.SCHEDULED ? (0, a.jsx)(p, {}) : (0, a.jsx)(k, {
                color: y,
                width: 20,
                height: 20
            }), (0, a.jsxs)("div", {
                className: g.eventStatusLabel,
                children: [(0, a.jsx)(E.Text, {
                    color: W,
                    variant: o,
                    children: Y
                }), null != z && (0, a.jsx)(E.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: z
                })]
            })]
        })
    }
}