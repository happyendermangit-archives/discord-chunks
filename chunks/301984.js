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
            friendToken: h
        } = e, {
            trackUserProfileAction: A
        } = (0, I.useUserProfileAnalyticsContext)(), m = (0, r.useStateFromStores)([d.default], () => d.default.getId() === (null == t ? void 0 : t.id)), N = (0, r.useStateFromStores)([_.default], () => null != t ? _.default.getRelationshipType(t.id) : f.RelationshipTypes.NONE);
        return null == t || t.bot || m || N === f.RelationshipTypes.BLOCKED ? null : N === f.RelationshipTypes.FRIEND ? (0, i.jsx)(T.default, {
            icon: a.UserCheckIcon,
            text: S.default.Messages.FRIENDS,
            onClick: () => (function(e) {
                let t = () => {
                    A({
                        action: "REMOVE_FRIEND"
                    }), u.default.removeFriend(e.id, {
                        location: "UserProfileFriendRequestButtons"
                    })
                };
                (0, l.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await n.e("69938").then(n.bind(n, "637697"));
                    return n => (0, i.jsx)(r, {
                        user: e,
                        onConfirmRemoveFriend: t,
                        ...n
                    })
                })
            })(t)
        }) : N === f.RelationshipTypes.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(T.default, {
                icon: e => (0, i.jsx)(s.CheckmarkLargeIcon, {
                    ...e,
                    color: l.tokens.colors.TEXT_BRAND
                }),
                text: S.default.Messages.ACCEPT_FRIEND_REQUEST,
                onClick: () => {
                    A({
                        action: "ACCEPT_FRIEND_REQUEST"
                    }), u.default.addRelationship({
                        userId: t.id,
                        friendToken: h
                    })
                }
            }), (0, i.jsx)(T.default, {
                icon: c.default,
                text: S.default.Messages.IGNORE_FRIEND_REQUEST,
                onClick: () => {
                    A({
                        action: "IGNORE_FRIEND_REQUEST"
                    }), u.default.cancelFriendRequest(t.id)
                }
            })]
        }) : N === f.RelationshipTypes.PENDING_OUTGOING ? (0, i.jsx)(T.default, {
            icon: o.UserClockIcon,
            text: S.default.Messages.REQUEST_SENT,
            disabled: !0
        }) : (0, i.jsx)(T.default, {
            icon: E.default,
            text: S.default.Messages.ADD_FRIEND,
            onClick: () => {
                A({
                    action: "SEND_FRIEND_REQUEST"
                }), u.default.addRelationship({
                    userId: t.id,
                    friendToken: h
                })
            }
        })
    }
}