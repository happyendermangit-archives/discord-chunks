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
        a = n.n(r),
        s = n("442837"),
        o = n("246946"),
        l = n("5192"),
        u = n("447452"),
        d = n("505737"),
        _ = n("681837"),
        c = n("724593"),
        E = n("530"),
        I = n("894374"),
        T = n("705556"),
        f = n("790711"),
        S = n("580512"),
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
            moreUserDetailsEnabled: v
        } = (0, u.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), D = l.default.getName(null == O ? void 0 : O.id, g, t), M = (0, d.default)(t.id, null == O ? void 0 : O.id), y = (0, s.useStateFromStores)([o.default], () => o.default.hidePersonalInformation);
        return (0, i.jsxs)("div", {
            className: p.body,
            children: [(0, i.jsx)(E.default, {
                user: t,
                onOpenProfile: () => C(!1),
                guildId: null == O ? void 0 : O.id,
                usernameIcon: t.hasAvatarForGuild(null == O ? void 0 : O.id) && (0, i.jsx)(f.default, {
                    user: t,
                    nickname: D
                }),
                pronouns: null == r ? void 0 : r.pronouns,
                tags: (0, i.jsx)(I.UserProfileBadgesTag, {
                    displayProfile: r,
                    onClose: L
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(_.default, {
                        userId: t.id
                    }), v && !y && (0, i.jsx)(c.default, {
                        className: a()(p.noteIcon, {
                            [p.visible]: R
                        }),
                        user: t,
                        onOpenProfile: () => C(!0)
                    })]
                })
            }), (0, i.jsx)(N.default, {
                user: t,
                onClose: L
            }), v && (0, i.jsx)(h.default, {
                user: t,
                bio: null == r ? void 0 : r.bio,
                hidePersonalInformation: y,
                onClose: L
            }), (0, i.jsx)(S.default, {
                user: t,
                guild: O,
                channelId: g,
                onClose: L
            }), null != O && (0, i.jsx)(m.default, {
                user: t,
                currentUser: n,
                guild: O,
                onOpenProfile: () => C(!1)
            }), M && (0, i.jsx)(A.default, {
                user: t,
                channelId: g,
                onClose: L
            }), (0, i.jsx)(T.default, {
                type: "action",
                user: t,
                guildId: null == O ? void 0 : O.id,
                onClose: L
            })]
        })
    }
}