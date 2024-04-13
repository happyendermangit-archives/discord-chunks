function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var s = n("735250");
    n("470079");
    var a = n("481060"),
        i = n("973616"),
        l = n("131704"),
        r = n("601964"),
        u = n("598077"),
        o = n("230224"),
        d = n("258356"),
        c = n("981631"),
        f = n("689938"),
        E = n("684866");
    let I = e => {
        let {
            state: t
        } = e;
        switch (t) {
            case c.InviteStates.ACCEPTING:
            case c.InviteStates.APP_OPENING:
                return !0;
            default:
                return !1
        }
    };

    function h(e) {
        let {
            invite: t,
            onAcceptInvite: n,
            disableUser: h = !1
        } = e;
        if (null == t) return null;
        let _ = null != t.guild ? new r.default(t.guild) : null,
            p = null != t.channel ? (0, l.createChannelRecordFromInvite)(t.channel) : null,
            T = null != t.target_application ? new i.default(t.target_application) : null,
            m = h || null == t.inviter ? null : new u.default(t.inviter),
            N = !(null != t.approximate_member_count && t.approximate_member_count > o.LARGE_SERVER_MEMBER_THRESHOLD || null != _ && _.hasFeature(c.GuildFeatures.COMMUNITY)) && null != m && (0, o.isGroupInvite)(t),
            g = I(t),
            A = {
                invite: t,
                user: m,
                guild: _,
                channel: p,
                application: T
            };
        return (0, o.isEnhancedCommunityInvite)(t) ? (0, s.jsx)(d.default, {
            invite: t,
            channel: p,
            isSubmitting: g,
            onAcceptInvite: n
        }) : (0, s.jsxs)("div", {
            className: E.container,
            children: [(0, s.jsx)(o.InviteDestinationIcon, {
                application: T,
                guild: _,
                user: N || (0, o.isDirectInvite)(t) ? m : null
            }), (0, o.isDirectInvite)(t) ? null : (0, s.jsx)(o.InviteJoinContext, {
                ...A,
                showBigUserIcon: N
            }), (0, s.jsx)(o.InviteHeader, {
                ...A,
                showBigUserIcon: N
            }), (0, s.jsx)(o.InviteMemberCounts, {
                ...A
            }), (0, s.jsx)(a.Button, {
                onClick: n,
                submitting: g,
                className: E.acceptButton,
                children: f.default.Messages.INSTANT_INVITE_ACCEPT
            })]
        })
    }
}