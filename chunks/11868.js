function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        createEventLocationClickHandler: function() {
            return G
        }
    });
    var n = t("735250"),
        s = t("470079"),
        i = t("803997"),
        a = t.n(i),
        o = t("442837"),
        u = t("481060"),
        r = t("447543"),
        d = t("287734"),
        c = t("922482"),
        v = t("601964"),
        m = t("592125"),
        h = t("430824"),
        p = t("940627"),
        f = t("197409"),
        C = t("808602"),
        N = t("263704"),
        E = t("15274"),
        g = t("924301"),
        I = t("725436"),
        x = t("978227"),
        j = t("236373"),
        S = t("854698"),
        L = t("405613"),
        R = t("95291"),
        T = t("742593"),
        _ = t("217804"),
        B = t("139712"),
        D = t("765305"),
        w = t("689938"),
        A = t("353515");
    let M = (e, l) => t => {
            t.stopPropagation(), d.default.selectVoiceChannel(e.channel_id, !1), null == l || l(t)
        },
        k = (e, l) => t => {
            let n = m.default.getChannel(e.channel_id);
            null != n && (t.stopPropagation(), (0, c.connectAndOpen)(n), null == l || l(t))
        },
        G = (e, l) => {
            switch (null == e ? void 0 : e.entity_type) {
                case D.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                    return k(e, l);
                case D.GuildScheduledEventEntityTypes.VOICE:
                    return M(e, l)
            }
            return () => {}
        },
        y = (e, l) => l && [D.GuildScheduledEventEntityTypes.STAGE_INSTANCE, D.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
        b = s.memo(function(e) {
            var l;
            let {
                guild: t,
                guildScheduledEvent: i,
                channel: a,
                isMember: d
            } = e, c = (0, o.useStateFromStores)([h.default], () => {
                var e;
                return null == t ? null : null !== (e = h.default.getGuild(t.id)) && void 0 !== e ? e : new v.default(t)
            }, [t]), m = (0, _.getLocationDataForEvent)(i, a), C = s.useCallback(e => {
                d && null != i && (e.stopPropagation(), (0, r.transitionToGuildFromEventInvite)(i))
            }, [d, i]), N = s.useCallback(e => {
                G(i)(e)
            }, [i]);
            if (null == c) return null;
            let E = null == m ? void 0 : m.IconComponent,
                g = (0, n.jsxs)(n.Fragment, {
                    children: [null != E && (0, n.jsx)(E, {
                        width: 16,
                        height: 16,
                        className: A.channelIcon
                    }), (0, n.jsx)(u.Text, {
                        className: A.channelDescription,
                        variant: "text-xs/normal",
                        children: (0, I.guildEventDetailsParser)(null !== (l = null == m ? void 0 : m.locationName) && void 0 !== l ? l : "", !0)
                    })]
                });
            return (0, n.jsxs)("div", {
                className: A.inviteDetailsContainer,
                children: [(0, n.jsx)(f.default.Icon, {
                    guild: c,
                    onClick: C
                }), (0, n.jsxs)("div", {
                    className: A.verticalContainer,
                    children: [(0, n.jsxs)("div", {
                        className: A.guildChannelInfoContainer,
                        children: [(0, n.jsx)(p.default, {
                            guild: c,
                            tooltipPosition: "top",
                            tooltipColor: u.Tooltip.Colors.PRIMARY,
                            size: 16,
                            className: A.guildBadge
                        }), (0, n.jsx)(u.Clickable, {
                            className: A.guildNameClickable,
                            onClick: C,
                            children: (0, n.jsx)(u.Heading, {
                                className: d ? A.guildNameLinkable : A.guildName,
                                variant: "text-sm/medium",
                                children: c.name
                            })
                        })]
                    }), (0, n.jsx)("div", {
                        className: A.channelInfoContainer,
                        children: y(i, d) ? (0, n.jsx)(u.Clickable, {
                            className: A.channelLocationLink,
                            onClick: N,
                            children: g
                        }) : g
                    })]
                })]
            })
        }),
        V = s.memo(function(e) {
            let {
                guildId: l,
                guildScheduledEventId: t,
                recurrenceId: s,
                isActive: i,
                isEnded: a,
                isMember: r,
                isExternal: d,
                onAcceptInstantInvite: c,
                onTransitionToInviteChannel: v
            } = e, m = (0, o.useStateFromStores)([g.default], () => g.default.isInterestedInEventRecurrence(t, s), [t, s]), h = e => {
                e.stopPropagation(), r ? i && v() : c()
            };
            return r ? i ? (0, n.jsx)(u.Button, {
                className: A.button,
                size: u.Button.Sizes.SMALL,
                onClick: e => {
                    !d && h(e)
                },
                color: d ? u.Button.Colors.TRANSPARENT : u.Button.Colors.GREEN,
                children: d ? w.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : w.default.Messages.JOIN_GUILD
            }) : a ? (0, n.jsx)(u.Button, {
                className: A.button,
                size: u.Button.Sizes.SMALL,
                disabled: !0,
                color: u.Button.Colors.PRIMARY,
                look: u.Button.Looks.OUTLINED,
                children: w.default.Messages.GUILD_EVENT_INVITE_COMPLETED
            }) : (0, n.jsxs)(u.Button, {
                className: A.button,
                innerClassName: A.innerButton,
                size: u.Button.Sizes.SMALL,
                color: u.Button.Colors.PRIMARY,
                look: m ? u.Button.Looks.OUTLINED : u.Button.Looks.FILLED,
                onClick: e => {
                    e.stopPropagation(), (0, B.default)(t, s, l)
                },
                children: [m ? (0, n.jsx)(N.default, {
                    width: 16,
                    height: 16,
                    className: A.buttonIcon
                }) : (0, n.jsx)(C.default, {
                    width: 16,
                    height: 16,
                    className: A.buttonIcon
                }), w.default.Messages.INDICATE_RSVP]
            }) : (0, n.jsx)(u.Button, {
                className: A.button,
                size: u.Button.Sizes.SMALL,
                onClick: h,
                color: u.Button.Colors.GREEN,
                children: w.default.Messages.JOIN_GUILD
            })
        }),
        P = s.memo(function(e) {
            var l;
            let {
                guildScheduledEvent: t,
                guild: i,
                channel: o,
                isMember: r,
                recurrenceId: d,
                onAcceptInstantInvite: c,
                onTransitionToInviteChannel: v
            } = e, m = null != d ? d : null != t ? (0, S.getNextRecurrenceIdInEvent)(t) : null, h = (null == t ? void 0 : t.recurrence_rule) == null || null == m || (0, S.isValidRecurrence)((0, j.recurrenceRuleFromServer)(null == t ? void 0 : t.recurrence_rule), m), p = (0, x.default)(t), C = s.useCallback(() => {
                r && null != t && (0, E.openGuildEventDetails)({
                    eventId: t.id,
                    recurrenceId: m
                })
            }, [r, t, m]);
            if (null == t || !h) return null;
            let N = (0, g.isGuildScheduledEventActive)(t),
                I = (0, g.isGuildEventEnded)(t),
                _ = t.entity_type === D.GuildScheduledEventEntityTypes.EXTERNAL;
            return (0, n.jsx)(f.default, {
                className: a()({
                    [A.clickable]: r
                }),
                children: (0, n.jsxs)(u.Clickable, {
                    onClick: C,
                    children: [null != t.image && (0, n.jsx)(R.default, {
                        source: (0, L.default)(t),
                        className: A.banner
                    }), (0, n.jsx)(T.default, {
                        name: t.name,
                        description: null !== (l = t.description) && void 0 !== l ? l : void 0,
                        descriptionClassName: A.eventDescription,
                        guildId: t.guild_id,
                        creator: p,
                        guildEventId: t.id,
                        eventPreview: t,
                        recurrenceId: m
                    }), (0, n.jsxs)("div", {
                        className: A.footerContainer,
                        children: [(0, n.jsx)(b, {
                            guild: i,
                            channel: o,
                            guildScheduledEvent: t,
                            isMember: r
                        }), (0, n.jsx)(V, {
                            isActive: N,
                            isEnded: I,
                            isMember: r,
                            guildId: t.guild_id,
                            guildScheduledEventId: t.id,
                            recurrenceId: m,
                            onAcceptInstantInvite: c,
                            onTransitionToInviteChannel: v,
                            isExternal: _
                        })]
                    })]
                })
            })
        });
    l.default = P
}