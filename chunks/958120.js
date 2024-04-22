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
        h = n("287612"),
        A = n("165818"),
        m = n("981631"),
        N = n("797849");

    function p(e) {
        let {
            user: t,
            displayProfile: n,
            onOpenProfile: p,
            guildId: O,
            channelId: R,
            onClose: C
        } = e, {
            moreUserDetailsEnabled: g
        } = (0, l.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), L = o.default.getName(O, R, t), D = (0, u.default)(t.id, O), v = (0, r.useStateFromStores)([a.default], () => a.default.hidePersonalInformation), M = (0, r.useStateFromStores)([s.default], () => s.default.findActivity(t.id, e => e.type === m.ActivityTypes.PLAYING), [t]);
        return (0, i.jsxs)("div", {
            className: N.body,
            children: [(0, i.jsx)(c.default, {
                user: t,
                guildId: O,
                usernameIcon: t.hasAvatarForGuild(O) && (0, i.jsx)(T.default, {
                    user: t,
                    nickname: L
                }),
                tags: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(E.UserProfilePronounsTag, {
                        pronouns: null == n ? void 0 : n.pronouns
                    }), (0, i.jsx)(E.UserProfileBadgesTag, {
                        user: t,
                        guildId: O
                    })]
                }),
                nicknameIcon: g && !v ? (0, i.jsx)(_.default, {
                    user: t,
                    onOpenProfile: p
                }) : null
            }), (0, i.jsx)(h.default, {
                user: t,
                onClose: C
            }), g && (0, i.jsx)(f.default, {
                user: t,
                bio: null == n ? void 0 : n.bio,
                hidePersonalInformation: v,
                onClose: C
            }), null != M && (0, i.jsx)(d.default, {
                activity: M
            }), (0, i.jsx)(A.default, {
                user: t,
                guildId: O,
                onClose: C
            }), D && (0, i.jsx)(S.default, {
                user: t
            }), (0, i.jsx)(I.default, {
                type: "action",
                user: t,
                guildId: O,
                onClose: C
            })]
        })
    }
}