function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return _
        }
    });
    var n = s("735250");
    s("470079");
    var a = s("481060"),
        l = s("973616"),
        i = s("131704"),
        r = s("601964"),
        u = s("598077"),
        o = s("230224"),
        d = s("258356"),
        c = s("981631"),
        f = s("689938"),
        E = s("684866");
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

    function _(e) {
        let {
            invite: t,
            onAcceptInvite: s,
            disableUser: _ = !1
        } = e;
        if (null == t) return null;
        let h = null != t.guild ? new r.default(t.guild) : null,
            p = null != t.channel ? (0, i.createChannelRecordFromInvite)(t.channel) : null,
            T = null != t.target_application ? new l.default(t.target_application) : null,
            N = _ || null == t.inviter ? null : new u.default(t.inviter),
            g = !(null != t.approximate_member_count && t.approximate_member_count > o.LARGE_SERVER_MEMBER_THRESHOLD || null != h && h.hasFeature(c.GuildFeatures.COMMUNITY)) && null != N && (0, o.isGroupInvite)(t),
            m = I(t),
            A = {
                invite: t,
                user: N,
                guild: h,
                channel: p,
                application: T
            };
        return (0, o.isEnhancedCommunityInvite)(t) ? (0, n.jsx)(d.default, {
            invite: t,
            channel: p,
            isSubmitting: m,
            onAcceptInvite: s
        }) : (0, n.jsxs)("div", {
            className: E.container,
            children: [(0, n.jsx)(o.InviteDestinationIcon, {
                application: T,
                guild: h,
                user: g || (0, o.isDirectInvite)(t) ? N : null
            }), (0, o.isDirectInvite)(t) ? null : (0, n.jsx)(o.InviteJoinContext, {
                ...A,
                showBigUserIcon: g
            }), (0, n.jsx)(o.InviteHeader, {
                ...A,
                showBigUserIcon: g
            }), (0, n.jsx)(o.InviteMemberCounts, {
                ...A
            }), (0, n.jsx)(a.Button, {
                onClick: s,
                submitting: m,
                className: E.acceptButton,
                children: f.default.Messages.INSTANT_INVITE_ACCEPT
            })]
        })
    }
}