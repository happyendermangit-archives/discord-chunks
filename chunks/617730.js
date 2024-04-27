function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var s = n("735250");
    n("470079");
    var a = n("481060"),
        l = n("973616"),
        i = n("131704"),
        r = n("601964"),
        u = n("598077"),
        o = n("230224"),
        d = n("258356"),
        c = n("981631"),
        f = n("689938"),
        E = n("454895");
    let _ = e => {
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

    function I(e) {
        let {
            invite: t,
            onAcceptInvite: n,
            disableUser: I = !1
        } = e;
        if (null == t) return null;
        let p = null != t.guild ? new r.default(t.guild) : null,
            h = null != t.channel ? (0, i.createChannelRecordFromInvite)(t.channel) : null,
            T = null != t.target_application ? new l.default(t.target_application) : null,
            N = I || null == t.inviter ? null : new u.default(t.inviter),
            g = !(null != t.approximate_member_count && t.approximate_member_count > o.LARGE_SERVER_MEMBER_THRESHOLD || null != p && p.hasFeature(c.GuildFeatures.COMMUNITY)) && null != N && (0, o.isGroupInvite)(t),
            m = _(t),
            A = {
                invite: t,
                user: N,
                guild: p,
                channel: h,
                application: T
            };
        return (0, o.isEnhancedCommunityInvite)(t) ? (0, s.jsx)(d.default, {
            invite: t,
            channel: h,
            isSubmitting: m,
            onAcceptInvite: n
        }) : (0, s.jsxs)("div", {
            className: E.container,
            children: [(0, s.jsx)(o.InviteDestinationIcon, {
                application: T,
                guild: p,
                user: g || (0, o.isDirectInvite)(t) ? N : null
            }), (0, o.isDirectInvite)(t) ? null : (0, s.jsx)(o.InviteJoinContext, {
                ...A,
                showBigUserIcon: g
            }), (0, s.jsx)(o.InviteHeader, {
                ...A,
                showBigUserIcon: g
            }), (0, s.jsx)(o.InviteMemberCounts, {
                ...A
            }), (0, s.jsx)(a.Button, {
                onClick: n,
                submitting: m,
                className: E.acceptButton,
                children: f.default.Messages.INSTANT_INVITE_ACCEPT
            })]
        })
    }
}