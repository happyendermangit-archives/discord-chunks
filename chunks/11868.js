function(e, l, n) {
    "use strict";
    n.r(l), n.d(l, {
        createEventLocationClickHandler: function() {
            return M
        }
    });
    var t = n("735250"),
        a = n("470079"),
        s = n("120356"),
        i = n.n(s),
        u = n("442837"),
        r = n("481060"),
        d = n("447543"),
        o = n("287734"),
        c = n("922482"),
        m = n("601964"),
        v = n("592125"),
        h = n("430824"),
        N = n("940627"),
        g = n("197409"),
        C = n("808602"),
        p = n("263704"),
        I = n("15274"),
        x = n("924301"),
        E = n("725436"),
        f = n("978227"),
        j = n("236373"),
        L = n("854698"),
        S = n("405613"),
        B = n("95291"),
        k = n("742593"),
        T = n("217804"),
        _ = n("139712"),
        y = n("765305"),
        b = n("689938"),
        A = n("353515");
    let G = (e, l) => n => {
            n.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == l || l(n)
        },
        D = (e, l) => n => {
            let t = v.default.getChannel(e.channel_id);
            null != t && (n.stopPropagation(), (0, c.connectAndOpen)(t), null == l || l(n))
        },
        M = (e, l) => {
            switch (null == e ? void 0 : e.entity_type) {
                case y.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                    return D(e, l);
                case y.GuildScheduledEventEntityTypes.VOICE:
                    return G(e, l)
            }
            return () => {}
        },
        R = (e, l) => l && [y.GuildScheduledEventEntityTypes.STAGE_INSTANCE, y.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
        w = a.memo(function(e) {
            var l;
            let {
                guild: n,
                guildScheduledEvent: s,
                channel: i,
                isMember: o
            } = e, c = (0, u.useStateFromStores)([h.default], () => {
                var e;
                return null == n ? null : null !== (e = h.default.getGuild(n.id)) && void 0 !== e ? e : new m.default(n)
            }, [n]), v = (0, T.getLocationDataForEvent)(s, i), C = a.useCallback(e => {
                o && null != s && (e.stopPropagation(), (0, d.transitionToGuildFromEventInvite)(s))
            }, [o, s]), p = a.useCallback(e => {
                M(s)(e)
            }, [s]);
            if (null == c) return null;
            let I = null == v ? void 0 : v.IconComponent,
                x = (0, t.jsxs)(t.Fragment, {
                    children: [null != I && (0, t.jsx)(I, {
                        width: 16,
                        height: 16,
                        className: A.channelIcon
                    }), (0, t.jsx)(r.Text, {
                        className: A.channelDescription,
                        variant: "text-xs/normal",
                        children: (0, E.guildEventDetailsParser)(null !== (l = null == v ? void 0 : v.locationName) && void 0 !== l ? l : "", !0)
                    })]
                });
            return (0, t.jsxs)("div", {
                className: A.inviteDetailsContainer,
                children: [(0, t.jsx)(g.default.Icon, {
                    guild: c,
                    onClick: C
                }), (0, t.jsxs)("div", {
                    className: A.verticalContainer,
                    children: [(0, t.jsxs)("div", {
                        className: A.guildChannelInfoContainer,
                        children: [(0, t.jsx)(N.default, {
                            guild: c,
                            tooltipPosition: "top",
                            tooltipColor: r.Tooltip.Colors.PRIMARY,
                            size: 16,
                            className: A.guildBadge
                        }), (0, t.jsx)(r.Clickable, {
                            className: A.guildNameClickable,
                            onClick: C,
                            children: (0, t.jsx)(r.Heading, {
                                className: o ? A.guildNameLinkable : A.guildName,
                                variant: "text-sm/medium",
                                children: c.name
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: A.channelInfoContainer,
                        children: R(s, o) ? (0, t.jsx)(r.Clickable, {
                            className: A.channelLocationLink,
                            onClick: p,
                            children: x
                        }) : x
                    })]
                })]
            })
        }),
        z = a.memo(function(e) {
            let {
                guildId: l,
                guildScheduledEventId: n,
                recurrenceId: a,
                isActive: s,
                isEnded: i,
                isMember: d,
                isExternal: o,
                onAcceptInstantInvite: c,
                onTransitionToInviteChannel: m
            } = e, v = (0, u.useStateFromStores)([x.default], () => x.default.isInterestedInEventRecurrence(n, a), [n, a]), h = e => {
                e.stopPropagation(), d ? s && m() : c()
            };
            return d ? s ? (0, t.jsx)(r.Button, {
                className: A.button,
                size: r.Button.Sizes.SMALL,
                onClick: e => {
                    !o && h(e)
                },
                color: o ? r.Button.Colors.TRANSPARENT : r.Button.Colors.GREEN,
                children: o ? b.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : b.default.Messages.JOIN_GUILD
            }) : i ? (0, t.jsx)(r.Button, {
                className: A.button,
                size: r.Button.Sizes.SMALL,
                disabled: !0,
                color: r.Button.Colors.PRIMARY,
                look: r.Button.Looks.OUTLINED,
                children: b.default.Messages.GUILD_EVENT_INVITE_COMPLETED
            }) : (0, t.jsxs)(r.Button, {
                className: A.button,
                innerClassName: A.innerButton,
                size: r.Button.Sizes.SMALL,
                color: r.Button.Colors.PRIMARY,
                look: v ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
                onClick: e => {
                    e.stopPropagation(), (0, _.default)(n, a, l)
                },
                children: [v ? (0, t.jsx)(p.default, {
                    width: 16,
                    height: 16,
                    className: A.buttonIcon
                }) : (0, t.jsx)(C.default, {
                    width: 16,
                    height: 16,
                    className: A.buttonIcon
                }), b.default.Messages.INDICATE_RSVP]
            }) : (0, t.jsx)(r.Button, {
                className: A.button,
                size: r.Button.Sizes.SMALL,
                onClick: h,
                color: r.Button.Colors.GREEN,
                children: b.default.Messages.JOIN_GUILD
            })
        }),
        P = a.memo(function(e) {
            var l;
            let {
                guildScheduledEvent: n,
                guild: s,
                channel: u,
                isMember: d,
                recurrenceId: o,
                onAcceptInstantInvite: c,
                onTransitionToInviteChannel: m
            } = e, v = null != o ? o : null != n ? (0, L.getNextRecurrenceIdInEvent)(n) : null, h = (null == n ? void 0 : n.recurrence_rule) == null || null == v || (0, L.isValidRecurrence)((0, j.recurrenceRuleFromServer)(null == n ? void 0 : n.recurrence_rule), v), N = (0, f.default)(n), C = a.useCallback(() => {
                d && null != n && (0, I.openGuildEventDetails)({
                    eventId: n.id,
                    recurrenceId: v
                })
            }, [d, n, v]);
            if (null == n || !h) return null;
            let p = (0, x.isGuildScheduledEventActive)(n),
                E = (0, x.isGuildEventEnded)(n),
                T = n.entity_type === y.GuildScheduledEventEntityTypes.EXTERNAL;
            return (0, t.jsx)(g.default, {
                className: i()({
                    [A.clickable]: d
                }),
                children: (0, t.jsxs)(r.Clickable, {
                    onClick: C,
                    children: [null != n.image && (0, t.jsx)(B.default, {
                        source: (0, S.default)(n),
                        className: A.banner
                    }), (0, t.jsx)(k.default, {
                        name: n.name,
                        description: null !== (l = n.description) && void 0 !== l ? l : void 0,
                        descriptionClassName: A.eventDescription,
                        guildId: n.guild_id,
                        creator: N,
                        guildEventId: n.id,
                        eventPreview: n,
                        recurrenceId: v
                    }), (0, t.jsxs)("div", {
                        className: A.footerContainer,
                        children: [(0, t.jsx)(w, {
                            guild: s,
                            channel: u,
                            guildScheduledEvent: n,
                            isMember: d
                        }), (0, t.jsx)(z, {
                            isActive: p,
                            isEnded: E,
                            isMember: d,
                            guildId: n.guild_id,
                            guildScheduledEventId: n.id,
                            recurrenceId: v,
                            onAcceptInstantInvite: c,
                            onTransitionToInviteChannel: m,
                            isExternal: T
                        })]
                    })]
                })
            })
        });
    l.default = P
}