function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("124597"),
        a = n("657147"),
        o = n("97910"),
        l = n("481060"),
        u = n("194359"),
        d = n("314897"),
        _ = n("699516"),
        c = n("465670"),
        E = n("782089"),
        I = n("785717"),
        T = n("537387"),
        f = n("981631"),
        S = n("689938");

    function h(e) {
        let {
            user: t,
            friendToken: n
        } = e, {
            trackUserProfileAction: h
        } = (0, I.useUserProfileAnalyticsContext)(), A = (0, r.useStateFromStores)([d.default], () => d.default.getId() === (null == t ? void 0 : t.id)), m = (0, r.useStateFromStores)([_.default], () => null != t ? _.default.getRelationshipType(t.id) : f.RelationshipTypes.NONE);
        return null == t || t.bot || A || m === f.RelationshipTypes.BLOCKED ? null : m === f.RelationshipTypes.FRIEND ? (0, i.jsx)(T.default, {
            icon: a.UserCheckIcon,
            text: S.default.Messages.FRIENDS
        }) : m === f.RelationshipTypes.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(T.default, {
                icon: e => (0, i.jsx)(s.CheckmarkLargeIcon, {
                    ...e,
                    color: l.tokens.colors.TEXT_BRAND
                }),
                text: S.default.Messages.ACCEPT_FRIEND_REQUEST,
                onClick: () => {
                    h({
                        action: "ACCEPT_FRIEND_REQUEST"
                    }), u.default.addRelationship({
                        userId: t.id,
                        friendToken: n
                    })
                }
            }), (0, i.jsx)(T.default, {
                icon: c.default,
                text: S.default.Messages.IGNORE_FRIEND_REQUEST,
                onClick: () => {
                    h({
                        action: "IGNORE_FRIEND_REQUEST"
                    }), u.default.cancelFriendRequest(t.id)
                }
            })]
        }) : m === f.RelationshipTypes.PENDING_OUTGOING ? (0, i.jsx)(T.default, {
            icon: o.UserClockIcon,
            text: S.default.Messages.REQUEST_SENT,
            disabled: !0
        }) : (0, i.jsx)(T.default, {
            icon: E.default,
            text: S.default.Messages.ADD_FRIEND,
            onClick: () => {
                h({
                    action: "SEND_FRIEND_REQUEST"
                }), u.default.addRelationship({
                    userId: t.id,
                    friendToken: n
                })
            }
        })
    }
}