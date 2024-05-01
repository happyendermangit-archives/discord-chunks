function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildInfoCard: function() {
            return _
        },
        default: function() {
            return I
        }
    });
    var s = n("735250");
    n("470079");
    var a = n("481060"),
        l = n("742593"),
        i = n("390072"),
        r = n("601964"),
        u = n("940627"),
        o = n("346656"),
        d = n("230224"),
        c = n("689938"),
        f = n("132087");

    function E(e) {
        var t;
        let {
            guildScheduledEvent: n,
            channel: r,
            onAcceptInvite: u,
            isSubmitting: o
        } = e;
        return (0, s.jsxs)("div", {
            className: f.guildEventCard,
            children: [(0, s.jsx)(l.default, {
                name: n.name,
                description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: f.__invalid_channelDescription,
                guildId: n.guild_id,
                guildEventId: n.id,
                eventPreview: n
            }), null != r && (0, s.jsx)("div", {
                className: f.channelInfo,
                children: (0, s.jsx)(i.default, {
                    guildScheduledEvent: n,
                    channel: r
                })
            }), (0, s.jsx)(a.Button, {
                className: f.acceptButton,
                color: a.Button.Colors.GREEN,
                onClick: u,
                submitting: o,
                children: c.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
            })]
        })
    }

    function _(e) {
        var t;
        let {
            invite: n
        } = e, l = null != n.guild ? new r.default(n.guild) : null;
        if (null == l) return null;
        let i = null !== (t = l.description) && void 0 !== t ? t : "";
        return (0, s.jsxs)("div", {
            className: f.guildInfoCard,
            children: [(0, s.jsx)(a.Heading, {
                className: f.presentedBy,
                variant: "text-sm/medium",
                children: c.default.Messages.STAGE_INVITE_GUILD_HEADER
            }), (0, s.jsxs)("div", {
                className: f.guildContainer,
                children: [(0, s.jsx)(o.default, {
                    guild: l,
                    active: !0,
                    size: o.default.Sizes.MEDIUM
                }), (0, s.jsxs)("div", {
                    className: f.guildDetailsContanier,
                    children: [(0, s.jsxs)(a.Text, {
                        className: f.guildName,
                        color: "header-primary",
                        variant: "text-sm/medium",
                        tag: "span",
                        children: [l.name, (0, s.jsx)(u.default, {
                            guild: l,
                            className: f.guildBadge,
                            tooltipPosition: "left"
                        })]
                    }), (0, s.jsx)(d.InviteMemberCounts, {
                        invite: n,
                        textClassName: f.guildInfoMemberCountText,
                        className: f.guildInfoMemberCount
                    })]
                })]
            }), i.length > 0 && (0, s.jsx)("details", {
                className: f.guildDescriptionContainer,
                children: (0, s.jsx)(a.Text, {
                    color: "header-secondary",
                    variant: "text-sm/normal",
                    children: i
                })
            })]
        })
    }

    function I(e) {
        let {
            invite: t,
            channel: n,
            isSubmitting: a,
            onAcceptInvite: l
        } = e, {
            guild_scheduled_event: i
        } = t;
        return null != i ? (0, s.jsx)(E, {
            guildScheduledEvent: i,
            channel: n,
            isSubmitting: a,
            onAcceptInvite: l
        }) : null
    }
}