function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("158776"),
        a = n("246946"),
        o = n("5192"),
        l = n("447452"),
        u = n("505737"),
        d = n("193281"),
        _ = n("998120"),
        c = n("530"),
        E = n("894374"),
        I = n("705556"),
        T = n("790711"),
        f = n("67152"),
        S = n("901952"),
        h = n("579285"),
        A = n("287612"),
        m = n("797849");

    function N(e) {
        let {
            user: t,
            currentUser: n,
            displayProfile: N,
            guild: p,
            onOpenProfile: O,
            channelId: R,
            onClose: C
        } = e, {
            moreUserDetailsEnabled: g
        } = (0, l.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), L = o.default.getName(null == p ? void 0 : p.id, R, t), D = (0, u.default)(t.id, null == p ? void 0 : p.id), v = (0, r.useStateFromStores)([a.default], () => a.default.hidePersonalInformation), M = (0, r.useStateFromStores)([s.default], () => s.default.findActivity(t.id, e => null != e.type && d.SUPPORTED_ACTIVITY_TYPES.has(e.type)), [t]);
        return (0, i.jsxs)("div", {
            className: m.body,
            children: [(0, i.jsx)(c.default, {
                user: t,
                guildId: null == p ? void 0 : p.id,
                usernameIcon: t.hasAvatarForGuild(null == p ? void 0 : p.id) && (0, i.jsx)(T.default, {
                    user: t,
                    nickname: L
                }),
                pronouns: null == N ? void 0 : N.pronouns,
                tags: (0, i.jsx)(E.UserProfileBadgesTag, {
                    displayProfile: N,
                    onClose: C
                }),
                nicknameIcon: g && !v ? (0, i.jsx)(_.default, {
                    user: t,
                    onOpenProfile: () => O(!0)
                }) : null
            }), (0, i.jsx)(A.default, {
                user: t,
                onClose: C
            }), g && (0, i.jsx)(f.default, {
                user: t,
                bio: null == N ? void 0 : N.bio,
                hidePersonalInformation: v,
                onClose: C
            }), null != M && (0, i.jsx)(d.default, {
                activity: M
            }), null != p && (0, i.jsx)(h.default, {
                user: t,
                currentUser: n,
                guild: p,
                onOpenProfile: () => O(!1)
            }), D && (0, i.jsx)(S.default, {
                user: t,
                channelId: R,
                onClose: C
            }), (0, i.jsx)(I.default, {
                type: "action",
                user: t,
                guildId: null == p ? void 0 : p.id,
                onClose: C
            })]
        })
    }
}