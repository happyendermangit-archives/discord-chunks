function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("906732"),
        a = n("246946"),
        o = n("5192"),
        l = n("447452"),
        u = n("785717"),
        d = n("505737"),
        _ = n("998120"),
        c = n("530"),
        E = n("894374"),
        I = n("171368"),
        T = n("790711"),
        f = n("67152"),
        S = n("901952"),
        A = n("287612"),
        h = n("165818"),
        m = n("981631"),
        N = n("797849");

    function O(e) {
        let {
            user: t,
            displayProfile: n,
            guild: O,
            channelId: p,
            onClose: R
        } = e, {
            moreUserDetailsEnabled: C
        } = (0, l.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), g = o.default.getName(null == O ? void 0 : O.id, p, t), L = (0, d.default)(t.id, null == O ? void 0 : O.id), D = (0, r.useStateFromStores)([a.default], () => a.default.hidePersonalInformation), {
            messageId: v,
            roleId: M
        } = (0, u.useUserProfileAnalyticsContext)(), {
            analyticsLocations: y
        } = (0, s.default)();
        return t.isSystemUser() ? null : (0, i.jsxs)("div", {
            className: N.body,
            children: [(0, i.jsx)(c.default, {
                user: t,
                guildId: null == O ? void 0 : O.id,
                usernameIcon: t.hasAvatarForGuild(null == O ? void 0 : O.id) && (0, i.jsx)(T.default, {
                    user: t,
                    nickname: g
                }),
                tags: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(E.UserProfilePronounsTag, {
                        pronouns: null == n ? void 0 : n.pronouns
                    }), (0, i.jsx)(E.UserProfileBadgesTag, {
                        user: t,
                        guildId: null == O ? void 0 : O.id
                    })]
                }),
                nicknameIcon: C && !D ? (0, i.jsx)(_.default, {
                    user: t,
                    onClick: () => {
                        (0, I.openUserProfileModal)({
                            userId: t.id,
                            guildId: null == O ? void 0 : O.id,
                            channelId: p,
                            messageId: v,
                            roleId: M,
                            analyticsLocation: {
                                section: m.AnalyticsSections.BITE_SIZE_PROFILE_POPOUT
                            },
                            sourceAnalyticsLocations: y
                        })
                    }
                }) : null
            }), C && (0, i.jsx)(A.default, {
                user: t
            }), C && (0, i.jsx)(f.default, {
                user: t,
                bio: null == n ? void 0 : n.bio,
                hidePersonalInformation: D,
                onClose: R
            }), (0, i.jsx)(h.default, {
                user: t,
                guild: O
            }), L && (0, i.jsx)(S.default, {
                user: t
            })]
        })
    }
}