function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        GuildEventTimeStatus: function() {
            return C
        }
    }), a("47120");
    var l, n, s = a("735250"),
        r = a("470079"),
        u = a("803997"),
        i = a.n(u),
        d = a("913527"),
        c = a.n(d),
        o = a("692547"),
        E = a("481060"),
        f = a("44315"),
        T = a("305878"),
        m = a("855693"),
        N = a("26290"),
        v = a("894017"),
        _ = a("854698"),
        h = a("849464"),
        S = a("765305"),
        D = a("231338"),
        g = a("689938"),
        x = a("839905");
    (n = l || (l = {}))[n.SCHEDULED = 0] = "SCHEDULED", n[n.STARTING_SOON = 1] = "STARTING_SOON", n[n.READY = 2] = "READY", n[n.STARTED = 3] = "STARTED", n[n.ENDED = 4] = "ENDED", n[n.CANCELED = 5] = "CANCELED";

    function R() {
        return (0, s.jsx)(N.TextBadge, {
            className: x.newBadge,
            color: o.default.unsafe_rawColors.BRAND_260.css,
            text: (0, s.jsx)(E.Text, {
                className: x.newBadgeText,
                variant: "text-xs/bold",
                children: g.default.Messages.NEW
            })
        })
    }

    function L(e) {
        let {
            children: t,
            className: a,
            tooltipText: l
        } = e;
        return (0, s.jsx)("div", {
            className: i()(x.eventStatusContainer, a),
            children: (0, s.jsx)(E.Tooltip, {
                position: "right",
                text: l,
                shouldShow: null != l,
                children: e => (0, s.jsx)("div", {
                    ...e,
                    className: i()(x.eventStatusContainer, a),
                    children: t
                })
            })
        })
    }

    function C(e) {
        let {
            startTime: t,
            status: a,
            eventType: l,
            className: n,
            endTime: u,
            liveText: d,
            textVariant: o = "text-sm/semibold",
            isNew: N,
            recurrenceRule: C,
            guildEventId: A,
            recurrenceId: I
        } = e, p = (0, f.useThemedColorValue)(D.ThemeColor.TEXT_BRAND), j = (0, f.useThemedColorValue)(D.ThemeColor.TEXT_POSITIVE), O = (0, f.useThemedColorValue)(D.ThemeColor.TEXT_DANGER);
        null == d && (d = l === S.GuildScheduledEventEntityTypes.EXTERNAL ? g.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : g.default.Messages.STAGE_CHANNEL_LIVE_NOW);
        let G = (0, v.default)(I, A),
            [{
                startDateTimeString: M,
                endDateTimeString: U,
                currentOrPastEvent: b,
                upcomingEvent: w,
                diffMinutes: H
            }, Y] = r.useState((0, _.getEventTimeData)(t, u));
        r.useEffect(() => {
            Y((0, _.getEventTimeData)(t, u));
            let e = setInterval(() => Y((0, _.getEventTimeData)(t, u)), 1e3);
            return () => {
                clearInterval(e)
            }
        }, [t, u]);
        let V = M;
        null != U && "" !== U && (V = g.default.Messages.START_DATE_TO_END_DATE.format({
            start: M,
            end: U
        }));
        let k = r.useMemo(() => a === S.GuildScheduledEventStatus.CANCELED || (null == G ? void 0 : G.is_canceled) ? 5 : a === S.GuildScheduledEventStatus.ACTIVE ? 3 : S.GuildScheduledEventStatusDone.has(a) ? 4 : b ? 2 : w ? 1 : 0, [a, null == G ? void 0 : G.is_canceled, b, w]),
            P = function(e, t, a, l, n) {
                switch (e) {
                    case 1:
                        return n > 0 ? g.default.Messages.STARTING_IN_MINUTES.format({
                            minutes: n
                        }) : g.default.Messages.STARTING_SOON;
                    case 2:
                        return g.default.Messages.STARTING_SOON;
                    case 3:
                        return null != l && "" !== l ? g.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                            start: a,
                            startHook: e => (0, s.jsx)(E.Text, {
                                color: "text-positive",
                                variant: "text-sm/semibold",
                                className: x.liveEventEndTime,
                                children: e
                            }),
                            end: l
                        }) : null != a ? a : "";
                    default:
                        return t
                }
            }(k, V, d, U, H),
            {
                Icon: W,
                iconColor: y,
                textColor: B,
                tooltipText: K
            } = r.useMemo(() => (function(e) {
                let t, {
                        timeStatus: a,
                        textBrand: l,
                        textPositive: n,
                        textDanger: s,
                        endDateTimeString: r,
                        startDateTimeString: u
                    } = e,
                    i = T.default,
                    d = l,
                    c = "header-secondary";
                switch (a) {
                    case 3:
                        d = n, c = null != r ? void 0 : "text-positive";
                        break;
                    case 4:
                        i = m.default;
                        break;
                    case 2:
                    case 1:
                        c = "text-brand", t = u;
                        break;
                    case 5:
                        d = s
                }
                return {
                    Icon: i,
                    iconColor: d.hex,
                    textColor: c,
                    tooltipText: t
                }
            })({
                timeStatus: k,
                textBrand: p,
                textPositive: j,
                textDanger: O,
                endDateTimeString: U,
                startDateTimeString: M
            }), [k, p, j, O, U, M]),
            F = null;
        if (null != C) {
            let e = (0, _.getRRule)(C);
            F = g.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                recurrenceRule: e.toText()
            });
            let a = c()(t);
            F = function(e, t) {
                let a = t.toDate(),
                    l = a.toLocaleString(g.default.getLocale(), {
                        weekday: "long"
                    });
                switch (e) {
                    case h.RecurrenceOptions.WEEKLY:
                        return g.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                            weekday: l
                        });
                    case h.RecurrenceOptions.BIWEEKLY:
                        return g.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
                            weekday: l
                        });
                    case h.RecurrenceOptions.MONTHLY:
                        let n = Math.ceil(a.getDate() / 7);
                        return g.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
                            weekday: l,
                            nth: n
                        });
                    case h.RecurrenceOptions.YEARLY:
                        return g.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                            date: a.toLocaleString(g.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        });
                    case h.RecurrenceOptions.WEEKDAY_ONLY:
                        return g.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                    case h.RecurrenceOptions.WEEKEND_ONLY:
                        return g.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
                    default:
                        return null
                }
            }((0, _.recurrenceRuleToOption)(a, C), a)
        }
        return (0, s.jsxs)(L, {
            className: i()(n, {
                [x.isRecurring]: null != F
            }),
            tooltipText: K,
            children: [N && a === S.GuildScheduledEventStatus.SCHEDULED ? (0, s.jsx)(R, {}) : (0, s.jsx)(W, {
                color: y,
                width: 20,
                height: 20
            }), (0, s.jsxs)("div", {
                className: x.eventStatusLabel,
                children: [(0, s.jsx)(E.Text, {
                    color: B,
                    variant: o,
                    children: P
                }), null != F && (0, s.jsx)(E.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: F
                })]
            })]
        })
    }
}