function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createEventLocationClickHandler: function() {
            return _
        }
    });
    var l = n("470079"),
        a = n("803997"),
        r = n.n(a),
        i = n("898511"),
        o = n("784184"),
        u = n("945215"),
        c = n("585949"),
        s = n("104747"),
        d = n("393588"),
        m = n("935741"),
        v = n("306912"),
        f = n("793570"),
        E = n("940546"),
        p = n("156962"),
        g = n("843317"),
        N = n("118944"),
        C = n("89536"),
        h = n("829267"),
        I = n("864521"),
        b = n("556403"),
        y = n("888447"),
        S = n("590615"),
        L = n("747081"),
        k = n("771888"),
        O = n("463549"),
        T = n("893351"),
        B = n("713653"),
        A = n("941504"),
        w = n("353515"),
        _ = function(e, t) {
            var n, l, a, r;
            switch (null == e ? void 0 : e.entity_type) {
                case B.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                    ;
                    return n = e, l = t,
                        function(e) {
                            var t = m.default.getChannel(n.channel_id);
                            null != t && (e.stopPropagation(), (0, s.connectAndOpen)(t), null == l || l(e))
                        };
                case B.GuildScheduledEventEntityTypes.VOICE:
                    ;
                    return a = e, r = t,
                        function(e) {
                            e.stopPropagation(), c.default.selectVoiceChannel(a.channel_id, !1), null == r || r(e)
                        }
            }
            return function() {}
        },
        D = l.memo(function(e) {
            var t, n, a = e.guild,
                r = e.guildScheduledEvent,
                c = e.channel,
                s = e.isMember,
                m = (0, i.useStateFromStores)([v.default], function() {
                    var e;
                    return null == a ? null : null !== (e = v.default.getGuild(a.id)) && void 0 !== e ? e : new d.default(a)
                }, [a]),
                p = (0, O.getLocationDataForEvent)(r, c),
                g = l.useCallback(function(e) {
                    s && null != r && (e.stopPropagation(), (0, u.transitionToGuildFromEventInvite)(r))
                }, [s, r]),
                N = l.useCallback(function(e) {
                    _(r)(e)
                }, [r]);
            if (null == m) return null;
            var C = null == p ? void 0 : p.IconComponent,
                I = l.createElement(l.Fragment, null, null != C && l.createElement(C, {
                    width: 16,
                    height: 16,
                    className: w.channelIcon
                }), l.createElement(o.Text, {
                    className: w.channelDescription,
                    variant: "text-xs/normal"
                }, (0, h.guildEventDetailsParser)(null !== (n = null == p ? void 0 : p.locationName) && void 0 !== n ? n : "", !0)));
            return l.createElement("div", {
                className: w.inviteDetailsContainer
            }, l.createElement(E.default.Icon, {
                guild: m,
                onClick: g
            }), l.createElement("div", {
                className: w.verticalContainer
            }, l.createElement("div", {
                className: w.guildChannelInfoContainer
            }, l.createElement(f.default, {
                guild: m,
                tooltipPosition: "top",
                tooltipColor: o.Tooltip.Colors.PRIMARY,
                size: 16,
                className: w.guildBadge
            }), l.createElement(o.Clickable, {
                className: w.guildNameClickable,
                onClick: g
            }, l.createElement(o.Heading, {
                className: s ? w.guildNameLinkable : w.guildName,
                variant: "text-sm/medium"
            }, m.name))), l.createElement("div", {
                className: w.channelInfoContainer
            }, (t = r, s && [B.GuildScheduledEventEntityTypes.STAGE_INSTANCE, B.GuildScheduledEventEntityTypes.VOICE].includes(null == t ? void 0 : t.entity_type)) ? l.createElement(o.Clickable, {
                className: w.channelLocationLink,
                onClick: N
            }, I) : I)))
        }),
        P = l.memo(function(e) {
            var t = e.guildId,
                n = e.guildScheduledEventId,
                a = e.recurrenceId,
                r = e.isActive,
                u = e.isEnded,
                c = e.isMember,
                s = e.isExternal,
                d = e.onAcceptInstantInvite,
                m = e.onTransitionToInviteChannel,
                v = (0, i.useStateFromStores)([C.default], function() {
                    return C.default.isInterestedInEventRecurrence(n, a)
                }, [n, a]),
                f = function(e) {
                    e.stopPropagation(), c ? r && m() : d()
                };
            return c ? r ? l.createElement(o.Button, {
                className: w.button,
                size: o.Button.Sizes.SMALL,
                onClick: function(e) {
                    !s && f(e)
                },
                color: s ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN
            }, s ? A.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : A.default.Messages.JOIN_GUILD) : u ? l.createElement(o.Button, {
                className: w.button,
                size: o.Button.Sizes.SMALL,
                disabled: !0,
                color: o.Button.Colors.PRIMARY,
                look: o.Button.Looks.OUTLINED
            }, A.default.Messages.GUILD_EVENT_INVITE_COMPLETED) : l.createElement(o.Button, {
                className: w.button,
                innerClassName: w.innerButton,
                size: o.Button.Sizes.SMALL,
                color: o.Button.Colors.PRIMARY,
                look: v ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
                onClick: function(e) {
                    e.stopPropagation(), (0, T.default)(n, a, t)
                }
            }, v ? l.createElement(g.default, {
                width: 16,
                height: 16,
                className: w.buttonIcon
            }) : l.createElement(p.default, {
                width: 16,
                height: 16,
                className: w.buttonIcon
            }), A.default.Messages.INDICATE_RSVP) : l.createElement(o.Button, {
                className: w.button,
                size: o.Button.Sizes.SMALL,
                onClick: f,
                color: o.Button.Colors.GREEN
            }, A.default.Messages.JOIN_GUILD)
        }),
        G = l.memo(function(e) {
            var t, n, a, i, u = e.guildScheduledEvent,
                c = e.guild,
                s = e.channel,
                d = e.isMember,
                m = e.recurrenceId,
                v = e.onAcceptInstantInvite,
                f = e.onTransitionToInviteChannel,
                p = null != m ? m : null != u ? (0, y.getNextRecurrenceIdInEvent)(u) : null,
                g = (null == u ? void 0 : u.recurrence_rule) == null || null == p || (0, y.isValidRecurrence)((0, b.recurrenceRuleFromServer)(null == u ? void 0 : u.recurrence_rule), p),
                h = (0, I.default)(u),
                O = l.useCallback(function() {
                    d && null != u && (0, N.openGuildEventDetails)({
                        eventId: u.id,
                        recurrenceId: p
                    })
                }, [d, u, p]);
            if (null == u || !g) return null;
            var T = (0, C.isGuildScheduledEventActive)(u),
                A = (0, C.isGuildEventEnded)(u),
                _ = u.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL;
            return l.createElement(E.default, {
                className: r()((t = {}, n = w.clickable, a = d, n in t ? Object.defineProperty(t, n, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = a, t))
            }, l.createElement(o.Clickable, {
                onClick: O
            }, null != u.image && l.createElement(L.default, {
                source: (0, S.default)(u),
                className: w.banner
            }), l.createElement(k.default, {
                name: u.name,
                description: null !== (i = u.description) && void 0 !== i ? i : void 0,
                descriptionClassName: w.eventDescription,
                guildId: u.guild_id,
                creator: h,
                guildEventId: u.id,
                eventPreview: u,
                recurrenceId: p
            }), l.createElement("div", {
                className: w.footerContainer
            }, l.createElement(D, {
                guild: c,
                channel: s,
                guildScheduledEvent: u,
                isMember: d
            }), l.createElement(P, {
                isActive: T,
                isEnded: A,
                isMember: d,
                guildId: u.guild_id,
                guildScheduledEventId: u.id,
                recurrenceId: p,
                onAcceptInstantInvite: v,
                onTransitionToInviteChannel: f,
                isExternal: _
            }))))
        });
    t.default = G
}