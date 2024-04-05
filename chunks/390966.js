function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        GuildEventTimeStatus: function() {
            return L
        }
    }), l("47120");
    var a, n, s = l("735250"),
        r = l("470079"),
        u = l("803997"),
        i = l.n(u),
        d = l("913527"),
        c = l.n(d),
        o = l("692547"),
        E = l("481060"),
        f = l("44315"),
        T = l("305878"),
        m = l("855693"),
        v = l("26290"),
        N = l("894017"),
        h = l("854698"),
        _ = l("849464"),
        S = l("765305"),
        g = l("231338"),
        D = l("689938"),
        x = l("839905");
    (n = a || (a = {}))[n.SCHEDULED = 0] = "SCHEDULED", n[n.STARTING_SOON = 1] = "STARTING_SOON", n[n.READY = 2] = "READY", n[n.STARTED = 3] = "STARTED", n[n.ENDED = 4] = "ENDED", n[n.CANCELED = 5] = "CANCELED";

    function R() {
        return (0, s.jsx)(v.TextBadge, {
            className: x.newBadge,
            color: o.default.unsafe_rawColors.BRAND_260.css,
            text: (0, s.jsx)(E.Text, {
                className: x.newBadgeText,
                variant: "text-xs/bold",
                children: D.default.Messages.NEW
            })
        })
    }

    function C(e) {
        let {
            children: t,
            className: l,
            tooltipText: a
        } = e;
        return (0, s.jsx)("div", {
            className: i()(x.eventStatusContainer, l),
            children: (0, s.jsx)(E.Tooltip, {
                position: "right",
                text: a,
                shouldShow: null != a,
                children: e => (0, s.jsx)("div", {
                    ...e,
                    className: i()(x.eventStatusContainer, l),
                    children: t
                })
            })
        })
    }

    function L(e) {
        let {
            startTime: t,
            status: l,
            eventType: a,
            className: n,
            endTime: u,
            liveText: d,
            textVariant: o = "text-sm/semibold",
            isNew: v,
            recurrenceRule: L,
            guildEventId: A,
            recurrenceId: I
        } = e, p = (0, f.useThemedColorValue)(g.ThemeColor.TEXT_BRAND), j = (0, f.useThemedColorValue)(g.ThemeColor.TEXT_POSITIVE), G = (0, f.useThemedColorValue)(g.ThemeColor.TEXT_DANGER);
        null == d && (d = a === S.GuildScheduledEventEntityTypes.EXTERNAL ? D.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : D.default.Messages.STAGE_CHANNEL_LIVE_NOW);
        let O = (0, N.default)(I, A),
            [{
                startDateTimeString: M,
                endDateTimeString: U,
                currentOrPastEvent: b,
                upcomingEvent: w,
                diffMinutes: H
            }, Y] = r.useState((0, h.getEventTimeData)(t, u));
        r.useEffect(() => {
            Y((0, h.getEventTimeData)(t, u));
            let e = setInterval(() => Y((0, h.getEventTimeData)(t, u)), 1e3);
            return () => {
                clearInterval(e)
            }
        }, [t, u]);
        let k = M;
        null != U && "" !== U && (k = D.default.Messages.START_DATE_TO_END_DATE.format({
            start: M,
            end: U
        }));
        let V = r.useMemo(() => l === S.GuildScheduledEventStatus.CANCELED || (null == O ? void 0 : O.is_canceled) ? 5 : l === S.GuildScheduledEventStatus.ACTIVE ? 3 : S.GuildScheduledEventStatusDone.has(l) ? 4 : b ? 2 : w ? 1 : 0, [l, null == O ? void 0 : O.is_canceled, b, w]),
            P = function(e, t, l, a, n) {
                switch (e) {
                    case 1:
                        return n > 0 ? D.default.Messages.STARTING_IN_MINUTES.format({
                            minutes: n
                        }) : D.default.Messages.STARTING_SOON;
                    case 2:
                        return D.default.Messages.STARTING_SOON;
                    case 3:
                        return null != a && "" !== a ? D.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                            start: l,
                            startHook: e => (0, s.jsx)(E.Text, {
                                color: "text-positive",
                                variant: "text-sm/semibold",
                                className: x.liveEventEndTime,
                                children: e
                            }),
                            end: a
                        }) : null != l ? l : "";
                    default:
                        return t
                }
            }(V, k, d, U, H),
            {
                Icon: y,
                iconColor: W,
                textColor: B,
                tooltipText: K
            } = r.useMemo(() => (function(e) {
                let t, {
                        timeStatus: l,
                        textBrand: a,
                        textPositive: n,
                        textDanger: s,
                        endDateTimeString: r,
                        startDateTimeString: u
                    } = e,
                    i = T.default,
                    d = a,
                    c = "header-secondary";
                switch (l) {
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
                timeStatus: V,
                textBrand: p,
                textPositive: j,
                textDanger: G,
                endDateTimeString: U,
                startDateTimeString: M
            }), [V, p, j, G, U, M]),
            F = null;
        if (null != L) {
            let e = (0, h.getRRule)(L);
            F = D.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                recurrenceRule: e.toText()
            });
            let l = c()(t);
            F = function(e, t) {
                let l = t.toDate(),
                    a = l.toLocaleString(D.default.getLocale(), {
                        weekday: "long"
                    });
                switch (e) {
                    case _.RecurrenceOptions.WEEKLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                            weekday: a
                        });
                    case _.RecurrenceOptions.BIWEEKLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
                            weekday: a
                        });
                    case _.RecurrenceOptions.MONTHLY:
                        let n = Math.ceil(l.getDate() / 7);
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
                            weekday: a,
                            nth: n
                        });
                    case _.RecurrenceOptions.YEARLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                            date: l.toLocaleString(D.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        });
                    case _.RecurrenceOptions.WEEKDAY_ONLY:
                        return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                    default:
                        return null
                }
            }((0, h.recurrenceRuleToOption)(l, L), l)
        }
        return (0, s.jsxs)(C, {
            className: i()(n, {
                [x.isRecurring]: null != F
            }),
            tooltipText: K,
            children: [v && l === S.GuildScheduledEventStatus.SCHEDULED ? (0, s.jsx)(R, {}) : (0, s.jsx)(y, {
                color: W,
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