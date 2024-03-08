function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildEventTimeStatus: function() {
            return R
        }
    }), n("222007");
    var l, a, s = n("37983"),
        r = n("884691"),
        u = n("414456"),
        i = n.n(u),
        c = n("866227"),
        d = n.n(c),
        o = n("669491"),
        E = n("77078"),
        f = n("449918"),
        v = n("943232"),
        h = n("93393"),
        T = n("956089"),
        N = n("397680"),
        m = n("822516"),
        g = n("757767"),
        x = n("745049"),
        C = n("843455"),
        S = n("782340"),
        _ = n("966631");
    (a = l || (l = {}))[a.SCHEDULED = 0] = "SCHEDULED", a[a.STARTING_SOON = 1] = "STARTING_SOON", a[a.READY = 2] = "READY", a[a.STARTED = 3] = "STARTED", a[a.ENDED = 4] = "ENDED", a[a.CANCELED = 5] = "CANCELED";

    function D() {
        return (0, s.jsx)(T.TextBadge, {
            className: _.newBadge,
            color: o.default.unsafe_rawColors.BRAND_260.css,
            text: (0, s.jsx)(E.Text, {
                className: _.newBadgeText,
                variant: "text-xs/bold",
                children: S.default.Messages.NEW
            })
        })
    }

    function L(e) {
        let {
            children: t,
            className: n,
            tooltipText: l
        } = e;
        return (0, s.jsx)("div", {
            className: i(_.eventStatusContainer, n),
            children: (0, s.jsx)(E.Tooltip, {
                position: "right",
                text: l,
                shouldShow: null != l,
                children: e => (0, s.jsx)("div", {
                    ...e,
                    className: i(_.eventStatusContainer, n),
                    children: t
                })
            })
        })
    }

    function R(e) {
        let {
            startTime: t,
            status: n,
            eventType: l,
            className: a,
            endTime: u,
            liveText: c,
            textVariant: o = "text-sm/semibold",
            isNew: T,
            recurrenceRule: R,
            guildEventId: I,
            recurrenceId: p
        } = e, A = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_BRAND), w = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_POSITIVE), j = (0, f.useThemedColorValue)(C.ThemeColor.TEXT_DANGER);
        null == c && (c = l === x.GuildScheduledEventEntityTypes.EXTERNAL ? S.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : S.default.Messages.STAGE_CHANNEL_LIVE_NOW);
        let M = (0, N.default)(p, I),
            [{
                startDateTimeString: G,
                endDateTimeString: O,
                currentOrPastEvent: V,
                upcomingEvent: U,
                diffMinutes: H
            }, b] = r.useState((0, m.getEventTimeData)(t, u));
        r.useEffect(() => {
            b((0, m.getEventTimeData)(t, u));
            let e = setInterval(() => b((0, m.getEventTimeData)(t, u)), 1e3);
            return () => {
                clearInterval(e)
            }
        }, [t, u]);
        let B = G;
        null != O && "" !== O && (B = S.default.Messages.START_DATE_TO_END_DATE.format({
            start: G,
            end: O
        }));
        let P = r.useMemo(() => n === x.GuildScheduledEventStatus.CANCELED || (null == M ? void 0 : M.is_canceled) ? 5 : n === x.GuildScheduledEventStatus.ACTIVE ? 3 : x.GuildScheduledEventStatusDone.has(n) ? 4 : V ? 2 : U ? 1 : 0, [n, null == M ? void 0 : M.is_canceled, V, U]),
            Y = function(e, t, n, l, a) {
                switch (e) {
                    case 1:
                        return a > 0 ? S.default.Messages.STARTING_IN_MINUTES.format({
                            minutes: a
                        }) : S.default.Messages.STARTING_SOON;
                    case 2:
                        return S.default.Messages.STARTING_SOON;
                    case 3:
                        return null != l && "" !== l ? S.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                            start: n,
                            startHook: e => (0, s.jsx)(E.Text, {
                                color: "text-positive",
                                variant: "text-sm/semibold",
                                className: _.liveEventEndTime,
                                children: e
                            }),
                            end: l
                        }) : null != n ? n : "";
                    default:
                        return t
                }
            }(P, B, c, O, H),
            {
                Icon: k,
                iconColor: y,
                textColor: W,
                tooltipText: Z
            } = r.useMemo(() => (function(e) {
                let t, {
                        timeStatus: n,
                        textBrand: l,
                        textPositive: a,
                        textDanger: s,
                        endDateTimeString: r,
                        startDateTimeString: u
                    } = e,
                    i = v.default,
                    c = l,
                    d = "header-secondary";
                switch (n) {
                    case 3:
                        c = a, d = null != r ? void 0 : "text-positive";
                        break;
                    case 4:
                        i = h.default;
                        break;
                    case 2:
                    case 1:
                        d = "text-brand", t = u;
                        break;
                    case 5:
                        c = s
                }
                return {
                    Icon: i,
                    iconColor: c.hex,
                    textColor: d,
                    tooltipText: t
                }
            })({
                timeStatus: P,
                textBrand: A,
                textPositive: w,
                textDanger: j,
                endDateTimeString: O,
                startDateTimeString: G
            }), [P, A, w, j, O, G]),
            z = null;
        if (null != R) {
            let e = (0, m.getRRule)(R);
            z = S.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                recurrenceRule: e.toText()
            });
            let n = d(t),
                l = (0, m.recurrenceRuleToOption)(n, R);
            z = function(e, t) {
                let n = t.toDate(),
                    l = n.toLocaleString(S.default.getLocale(), {
                        weekday: "long"
                    });
                switch (e) {
                    case g.RecurrenceOptions.WEEKLY:
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                            weekday: l
                        });
                    case g.RecurrenceOptions.BIWEEKLY:
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
                            weekday: l
                        });
                    case g.RecurrenceOptions.MONTHLY:
                        let a = Math.ceil(n.getDate() / 7);
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
                            weekday: l,
                            nth: a
                        });
                    case g.RecurrenceOptions.YEARLY:
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                            date: n.toLocaleString(S.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        });
                    case g.RecurrenceOptions.WEEKDAY_ONLY:
                        return S.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                    default:
                        return null
                }
            }(l, n)
        }
        return (0, s.jsxs)(L, {
            className: i(a, {
                [_.isRecurring]: null != z
            }),
            tooltipText: Z,
            children: [T && n === x.GuildScheduledEventStatus.SCHEDULED ? (0, s.jsx)(D, {}) : (0, s.jsx)(k, {
                color: y,
                width: 20,
                height: 20
            }), (0, s.jsxs)("div", {
                className: _.eventStatusLabel,
                children: [(0, s.jsx)(E.Text, {
                    color: W,
                    variant: o,
                    children: Y
                }), null != z && (0, s.jsx)(E.Text, {
                    color: "header-secondary",
                    variant: "text-xs/normal",
                    children: z
                })]
            })]
        })
    }
}