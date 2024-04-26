function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("442837"),
        o = n("158776"),
        l = n("246946"),
        u = n("5192"),
        d = n("447452"),
        _ = n("505737"),
        c = n("193281"),
        E = n("724593"),
        I = n("530"),
        T = n("894374"),
        f = n("705556"),
        S = n("790711"),
        h = n("67152"),
        A = n("901952"),
        m = n("579285"),
        N = n("287612"),
        p = n("108997");

    function O(e) {
        let {
            user: t,
            currentUser: n,
            displayProfile: r,
            guild: O,
            isHovering: R,
            onOpenProfile: C,
            channelId: g,
            onClose: L
        } = e, {
            moreUserDetailsEnabled: D
        } = (0, d.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), v = u.default.getName(null == O ? void 0 : O.id, g, t), M = (0, _.default)(t.id, null == O ? void 0 : O.id), y = (0, a.useStateFromStores)([l.default], () => l.default.hidePersonalInformation), P = (0, a.useStateFromStores)([o.default], () => o.default.findActivity(t.id, e => null != e.type && c.SUPPORTED_ACTIVITY_TYPES.has(e.type)), [t]);
        return (0, i.jsxs)("div", {
            className: p.body,
            children: [(0, i.jsx)(I.default, {
                user: t,
                guildId: null == O ? void 0 : O.id,
                usernameIcon: t.hasAvatarForGuild(null == O ? void 0 : O.id) && (0, i.jsx)(S.default, {
                    user: t,
                    nickname: v
                }),
                pronouns: null == r ? void 0 : r.pronouns,
                tags: (0, i.jsx)(T.UserProfileBadgesTag, {
                    displayProfile: r,
                    onClose: L
                }),
                nicknameIcon: D && !y ? (0, i.jsx)(E.default, {
                    className: s()(p.noteIcon, {
                        [p.visible]: R
                    }),
                    user: t,
                    onOpenProfile: () => C(!0)
                }) : null
            }), (0, i.jsx)(N.default, {
                user: t,
                onClose: L
            }), D && (0, i.jsx)(h.default, {
                user: t,
                bio: null == r ? void 0 : r.bio,
                hidePersonalInformation: y,
                onClose: L
            }), null != P && (0, i.jsx)(c.default, {
                activity: P
            }), null != O && (0, i.jsx)(m.default, {
                user: t,
                currentUser: n,
                guild: O,
                onOpenProfile: () => C(!1)
            }), M && (0, i.jsx)(A.default, {
                user: t,
                channelId: g,
                onClose: L
            }), (0, i.jsx)(f.default, {
                type: "action",
                user: t,
                guildId: null == O ? void 0 : O.id,
                onClose: L
            })]
        })
    }
}