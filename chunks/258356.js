function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        GuildInfoCard: function() {
            return I
        },
        default: function() {
            return _
        }
    });
    var n = s("735250");
    s("470079");
    var a = s("481060"),
        l = s("742593"),
        i = s("390072"),
        r = s("601964"),
        u = s("940627"),
        o = s("346656"),
        d = s("230224"),
        c = s("689938"),
        f = s("503080");

    function E(e) {
        var t;
        let {
            guildScheduledEvent: s,
            channel: r,
            onAcceptInvite: u,
            isSubmitting: o
        } = e;
        return (0, n.jsxs)("div", {
            className: f.guildEventCard,
            children: [(0, n.jsx)(l.default, {
                name: s.name,
                description: null !== (t = s.description) && void 0 !== t ? t : void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: f.__invalid_channelDescription,
                guildId: s.guild_id,
                guildEventId: s.id,
                eventPreview: s
            }), null != r && (0, n.jsx)("div", {
                className: f.channelInfo,
                children: (0, n.jsx)(i.default, {
                    guildScheduledEvent: s,
                    channel: r
                })
            }), (0, n.jsx)(a.Button, {
                className: f.acceptButton,
                color: a.Button.Colors.GREEN,
                onClick: u,
                submitting: o,
                children: c.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
            })]
        })
    }

    function I(e) {
        var t;
        let {
            invite: s
        } = e, l = null != s.guild ? new r.default(s.guild) : null;
        if (null == l) return null;
        let i = null !== (t = l.description) && void 0 !== t ? t : "";
        return (0, n.jsxs)("div", {
            className: f.guildInfoCard,
            children: [(0, n.jsx)(a.Heading, {
                className: f.presentedBy,
                variant: "text-sm/medium",
                children: c.default.Messages.STAGE_INVITE_GUILD_HEADER
            }), (0, n.jsxs)("div", {
                className: f.guildContainer,
                children: [(0, n.jsx)(o.default, {
                    guild: l,
                    active: !0,
                    size: o.default.Sizes.MEDIUM
                }), (0, n.jsxs)("div", {
                    className: f.guildDetailsContanier,
                    children: [(0, n.jsxs)(a.Text, {
                        className: f.guildName,
                        color: "header-primary",
                        variant: "text-sm/medium",
                        tag: "span",
                        children: [l.name, (0, n.jsx)(u.default, {
                            guild: l,
                            className: f.guildBadge,
                            tooltipPosition: "left"
                        })]
                    }), (0, n.jsx)(d.InviteMemberCounts, {
                        invite: s,
                        textClassName: f.guildInfoMemberCountText,
                        className: f.guildInfoMemberCount
                    })]
                })]
            }), i.length > 0 && (0, n.jsx)("details", {
                className: f.guildDescriptionContainer,
                children: (0, n.jsx)(a.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: i
                })
            })]
        })
    }

    function _(e) {
        let {
            invite: t,
            channel: s,
            isSubmitting: a,
            onAcceptInvite: l
        } = e, {
            guild_scheduled_event: i
        } = t;
        return null != i ? (0, n.jsx)(E, {
            guildScheduledEvent: i,
            channel: s,
            isSubmitting: a,
            onAcceptInvite: l
        }) : null
    }
}