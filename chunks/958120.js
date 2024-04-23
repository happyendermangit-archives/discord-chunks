function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
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
        m = n("981631"),
        N = n("797849");

    function p(e) {
        let {
            user: t,
            currentUser: n,
            displayProfile: p,
            guild: O,
            onOpenProfile: R,
            channelId: C,
            onClose: g
        } = e, {
            moreUserDetailsEnabled: L
        } = (0, l.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), D = o.default.getName(null == O ? void 0 : O.id, C, t), v = (0, u.default)(t.id, null == O ? void 0 : O.id), M = (0, r.useStateFromStores)([a.default], () => a.default.hidePersonalInformation), y = (0, r.useStateFromStores)([s.default], () => s.default.findActivity(t.id, e => e.type === m.ActivityTypes.PLAYING), [t]);
        return (0, i.jsxs)("div", {
            className: N.body,
            children: [(0, i.jsx)(c.default, {
                user: t,
                guildId: null == O ? void 0 : O.id,
                usernameIcon: t.hasAvatarForGuild(null == O ? void 0 : O.id) && (0, i.jsx)(T.default, {
                    user: t,
                    nickname: D
                }),
                tags: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(E.UserProfilePronounsTag, {
                        pronouns: null == p ? void 0 : p.pronouns
                    }), (0, i.jsx)(E.UserProfileBadgesTag, {
                        user: t,
                        guildId: null == O ? void 0 : O.id
                    })]
                }),
                nicknameIcon: L && !M ? (0, i.jsx)(_.default, {
                    user: t,
                    onOpenProfile: () => R(!0)
                }) : null
            }), (0, i.jsx)(A.default, {
                user: t,
                onClose: g
            }), L && (0, i.jsx)(f.default, {
                user: t,
                bio: null == p ? void 0 : p.bio,
                hidePersonalInformation: M,
                onClose: g
            }), null != y && (0, i.jsx)(d.default, {
                activity: y
            }), null != O && (0, i.jsx)(h.default, {
                user: t,
                currentUser: n,
                guild: O,
                onOpenProfile: () => R(!1)
            }), v && (0, i.jsx)(S.default, {
                user: t
            }), (0, i.jsx)(I.default, {
                type: "action",
                user: t,
                guildId: null == O ? void 0 : O.id,
                onClose: g
            })]
        })
    }
}