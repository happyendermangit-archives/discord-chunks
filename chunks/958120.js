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
        I = n("790711"),
        T = n("67152"),
        f = n("901952"),
        S = n("287612"),
        h = n("165818"),
        A = n("981631"),
        m = n("797849");

    function N(e) {
        let {
            user: t,
            displayProfile: n,
            guild: N,
            channelId: p,
            onOpenProfile: O,
            onClose: R
        } = e, {
            moreUserDetailsEnabled: C
        } = (0, l.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), g = o.default.getName(null == N ? void 0 : N.id, p, t), L = (0, u.default)(t.id, null == N ? void 0 : N.id), D = (0, r.useStateFromStores)([a.default], () => a.default.hidePersonalInformation), v = (0, r.useStateFromStores)([s.default], () => s.default.findActivity(t.id, e => e.type === A.ActivityTypes.PLAYING), [t]);
        return t.isSystemUser() ? null : (0, i.jsxs)("div", {
            className: m.body,
            children: [(0, i.jsx)(c.default, {
                user: t,
                guildId: null == N ? void 0 : N.id,
                usernameIcon: t.hasAvatarForGuild(null == N ? void 0 : N.id) && (0, i.jsx)(I.default, {
                    user: t,
                    nickname: g
                }),
                tags: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(E.UserProfilePronounsTag, {
                        pronouns: null == n ? void 0 : n.pronouns
                    }), (0, i.jsx)(E.UserProfileBadgesTag, {
                        user: t,
                        guildId: null == N ? void 0 : N.id
                    })]
                }),
                nicknameIcon: C && !D ? (0, i.jsx)(_.default, {
                    user: t,
                    onOpenProfile: O
                }) : null
            }), C && (0, i.jsx)(S.default, {
                user: t
            }), C && (0, i.jsx)(T.default, {
                user: t,
                bio: null == n ? void 0 : n.bio,
                hidePersonalInformation: D,
                onClose: R
            }), null != v && (0, i.jsx)(d.default, {
                activity: v
            }), (0, i.jsx)(h.default, {
                user: t,
                guild: N
            }), L && (0, i.jsx)(f.default, {
                user: t
            })]
        })
    }
}