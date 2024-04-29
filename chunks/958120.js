function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("442837"),
        o = n("246946"),
        l = n("5192"),
        u = n("447452"),
        d = n("505737"),
        _ = n("724593"),
        c = n("530"),
        E = n("894374"),
        I = n("705556"),
        T = n("790711"),
        f = n("580512"),
        S = n("67152"),
        h = n("901952"),
        A = n("579285"),
        m = n("287612"),
        N = n("108997");

    function p(e) {
        let {
            user: t,
            currentUser: n,
            displayProfile: r,
            guild: p,
            isHovering: O,
            onOpenProfile: R,
            channelId: C,
            onClose: g
        } = e, {
            moreUserDetailsEnabled: L
        } = (0, u.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), D = l.default.getName(null == p ? void 0 : p.id, C, t), v = (0, d.default)(t.id, null == p ? void 0 : p.id), M = (0, a.useStateFromStores)([o.default], () => o.default.hidePersonalInformation);
        return (0, i.jsxs)("div", {
            className: N.body,
            children: [(0, i.jsx)(c.default, {
                user: t,
                onOpenProfile: () => R(!1),
                guildId: null == p ? void 0 : p.id,
                usernameIcon: t.hasAvatarForGuild(null == p ? void 0 : p.id) && (0, i.jsx)(T.default, {
                    user: t,
                    nickname: D
                }),
                pronouns: null == r ? void 0 : r.pronouns,
                tags: (0, i.jsx)(E.UserProfileBadgesTag, {
                    displayProfile: r,
                    onClose: g
                }),
                nicknameIcon: L && !M ? (0, i.jsx)(_.default, {
                    className: s()(N.noteIcon, {
                        [N.visible]: O
                    }),
                    user: t,
                    onOpenProfile: () => R(!0)
                }) : null
            }), (0, i.jsx)(m.default, {
                user: t,
                onClose: g
            }), L && (0, i.jsx)(S.default, {
                user: t,
                bio: null == r ? void 0 : r.bio,
                hidePersonalInformation: M,
                onClose: g
            }), (0, i.jsx)(f.default, {
                user: t,
                guild: p,
                channelId: C,
                onClose: g
            }), null != p && (0, i.jsx)(A.default, {
                user: t,
                currentUser: n,
                guild: p,
                onOpenProfile: () => R(!1)
            }), v && (0, i.jsx)(h.default, {
                user: t,
                channelId: C,
                onClose: g
            }), (0, i.jsx)(I.default, {
                type: "action",
                user: t,
                guildId: null == p ? void 0 : p.id,
                onClose: g
            })]
        })
    }
}