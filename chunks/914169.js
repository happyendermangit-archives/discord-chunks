function(e, l, n) {
    "use strict";
    n.r(l), n.d(l, {
        createEventLocationClickHandler: function() {
            return b
        },
        default: function() {
            return z
        }
    });
    var t = n("37983"),
        s = n("884691"),
        a = n("414456"),
        i = n.n(a),
        u = n("446674"),
        o = n("77078"),
        r = n("970728"),
        d = n("987317"),
        c = n("716214"),
        m = n("813006"),
        v = n("42203"),
        p = n("305961"),
        E = n("580357"),
        N = n("174622"),
        h = n("660279"),
        C = n("36694"),
        g = n("374021"),
        f = n("398604"),
        I = n("1339"),
        x = n("882550"),
        S = n("189443"),
        j = n("822516"),
        L = n("93550"),
        R = n("255050"),
        T = n("400271"),
        _ = n("931874"),
        B = n("936965"),
        D = n("745049"),
        k = n("782340"),
        y = n("673843");
    let G = (e, l) => n => {
            n.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == l || l(n)
        },
        A = (e, l) => n => {
            let t = v.default.getChannel(e.channel_id);
            null != t && (n.stopPropagation(), (0, c.connectAndOpen)(t), null == l || l(n))
        },
        b = (e, l) => {
            switch (null == e ? void 0 : e.entity_type) {
                case D.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                    return A(e, l);
                case D.GuildScheduledEventEntityTypes.VOICE:
                    return G(e, l)
            }
            return () => {}
        },
        M = (e, l) => l && [D.GuildScheduledEventEntityTypes.STAGE_INSTANCE, D.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
        w = s.memo(function(e) {
            var l;
            let {
                guild: n,
                guildScheduledEvent: a,
                channel: i,
                isMember: d
            } = e, c = (0, u.useStateFromStores)([p.default], () => {
                var e;
                return null == n ? null : null !== (e = p.default.getGuild(n.id)) && void 0 !== e ? e : new m.default(n)
            }, [n]), v = (0, _.getLocationDataForEvent)(a, i), h = s.useCallback(e => {
                d && null != a && (e.stopPropagation(), (0, r.transitionToGuildFromEventInvite)(a))
            }, [d, a]), C = s.useCallback(e => {
                b(a)(e)
            }, [a]);
            if (null == c) return null;
            let g = null == v ? void 0 : v.IconComponent,
                f = (0, t.jsxs)(t.Fragment, {
                    children: [null != g && (0, t.jsx)(g, {
                        width: 16,
                        height: 16,
                        className: y.channelIcon
                    }), (0, t.jsx)(o.Text, {
                        className: y.channelDescription,
                        variant: "text-xs/normal",
                        children: (0, I.guildEventDetailsParser)(null !== (l = null == v ? void 0 : v.locationName) && void 0 !== l ? l : "", !0)
                    })]
                });
            return (0, t.jsxs)("div", {
                className: y.inviteDetailsContainer,
                children: [(0, t.jsx)(N.default.Icon, {
                    guild: c,
                    onClick: h
                }), (0, t.jsxs)("div", {
                    className: y.verticalContainer,
                    children: [(0, t.jsxs)("div", {
                        className: y.guildChannelInfoContainer,
                        children: [(0, t.jsx)(E.default, {
                            guild: c,
                            tooltipPosition: "top",
                            tooltipColor: o.Tooltip.Colors.PRIMARY,
                            size: 16,
                            className: y.guildBadge
                        }), (0, t.jsx)(o.Clickable, {
                            className: y.guildNameClickable,
                            onClick: h,
                            children: (0, t.jsx)(o.Heading, {
                                className: d ? y.guildNameLinkable : y.guildName,
                                variant: "text-sm/medium",
                                children: c.name
                            })
                        })]
                    }), (0, t.jsx)("div", {
                        className: y.channelInfoContainer,
                        children: M(a, d) ? (0, t.jsx)(o.Clickable, {
                            className: y.channelLocationLink,
                            onClick: C,
                            children: f
                        }) : f
                    })]
                })]
            })
        }),
        P = s.memo(function(e) {
            let {
                guildId: l,
                guildScheduledEventId: n,
                recurrenceId: s,
                isActive: a,
                isEnded: i,
                isMember: r,
                isExternal: d,
                onAcceptInstantInvite: c,
                onTransitionToInviteChannel: m
            } = e, v = (0, u.useStateFromStores)([f.default], () => f.default.isInterestedInEventRecurrence(n, s), [n, s]), p = e => {
                e.stopPropagation(), r ? a && m() : c()
            };
            return r ? a ? (0, t.jsx)(o.Button, {
                className: y.button,
                size: o.Button.Sizes.SMALL,
                onClick: e => {
                    !d && p(e)
                },
                color: d ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
                children: d ? k.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : k.default.Messages.JOIN_GUILD
            }) : i ? (0, t.jsx)(o.Button, {
                className: y.button,
                size: o.Button.Sizes.SMALL,
                disabled: !0,
                color: o.Button.Colors.PRIMARY,
                look: o.Button.Looks.OUTLINED,
                children: k.default.Messages.GUILD_EVENT_INVITE_COMPLETED
            }) : (0, t.jsxs)(o.Button, {
                className: y.button,
                innerClassName: y.innerButton,
                size: o.Button.Sizes.SMALL,
                color: o.Button.Colors.PRIMARY,
                look: v ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
                onClick: e => {
                    e.stopPropagation(), (0, B.default)(n, s, l)
                },
                children: [v ? (0, t.jsx)(C.default, {
                    width: 16,
                    height: 16,
                    className: y.buttonIcon
                }) : (0, t.jsx)(h.default, {
                    width: 16,
                    height: 16,
                    className: y.buttonIcon
                }), k.default.Messages.INDICATE_RSVP]
            }) : (0, t.jsx)(o.Button, {
                className: y.button,
                size: o.Button.Sizes.SMALL,
                onClick: p,
                color: o.Button.Colors.GREEN,
                children: k.default.Messages.JOIN_GUILD
            })
        }),
        U = s.memo(function(e) {
            var l;
            let {
                guildScheduledEvent: n,
                guild: a,
                channel: u,
                isMember: r,
                recurrenceId: d,
                onAcceptInstantInvite: c,
                onTransitionToInviteChannel: m
            } = e, v = null != d ? d : null != n ? (0, j.getNextRecurrenceIdInEvent)(n) : null, p = (null == n ? void 0 : n.recurrence_rule) == null || null == v || (0, j.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == n ? void 0 : n.recurrence_rule), v), E = (0, x.default)(n), h = s.useCallback(() => {
                r && null != n && (0, g.openGuildEventDetails)({
                    eventId: n.id,
                    recurrenceId: v
                })
            }, [r, n, v]);
            if (null == n || !p) return null;
            let C = (0, f.isGuildScheduledEventActive)(n),
                I = (0, f.isGuildEventEnded)(n),
                _ = n.entity_type === D.GuildScheduledEventEntityTypes.EXTERNAL;
            return (0, t.jsx)(N.default, {
                className: i({
                    [y.clickable]: r
                }),
                children: (0, t.jsxs)(o.Clickable, {
                    onClick: h,
                    children: [null != n.image && (0, t.jsx)(R.default, {
                        source: (0, L.default)(n),
                        className: y.banner
                    }), (0, t.jsx)(T.default, {
                        name: n.name,
                        description: null !== (l = n.description) && void 0 !== l ? l : void 0,
                        descriptionClassName: y.eventDescription,
                        guildId: n.guild_id,
                        creator: E,
                        guildEventId: n.id,
                        eventPreview: n,
                        recurrenceId: v
                    }), (0, t.jsxs)("div", {
                        className: y.footerContainer,
                        children: [(0, t.jsx)(w, {
                            guild: a,
                            channel: u,
                            guildScheduledEvent: n,
                            isMember: r
                        }), (0, t.jsx)(P, {
                            isActive: C,
                            isEnded: I,
                            isMember: r,
                            guildId: n.guild_id,
                            guildScheduledEventId: n.id,
                            recurrenceId: v,
                            onAcceptInstantInvite: c,
                            onTransitionToInviteChannel: m,
                            isExternal: _
                        })]
                    })]
                })
            })
        });
    var z = U
}