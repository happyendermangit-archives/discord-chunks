function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("246946"),
        a = n("5192"),
        o = n("447452"),
        l = n("505737"),
        u = n("530"),
        d = n("894374"),
        _ = n("790711"),
        c = n("67152"),
        E = n("901952"),
        I = n("287612"),
        T = n("165818"),
        f = n("797849");

    function S(e) {
        let {
            user: t,
            displayProfile: n,
            onClose: S,
            guild: A,
            channelId: h
        } = e, {
            moreUserDetailsEnabled: m
        } = (0, o.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), N = a.default.getName(null == A ? void 0 : A.id, h, t), O = (0, l.default)(t.id, null == A ? void 0 : A.id), p = (0, r.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
        return t.isSystemUser() ? null : t.isNonUserBot() ? (0, i.jsx)(u.default, {
            className: f.paddingBottom,
            user: t,
            guildId: null == A ? void 0 : A.id
        }) : (0, i.jsxs)("div", {
            className: f.paddingBottom,
            children: [(0, i.jsx)(u.default, {
                className: f.username,
                user: t,
                guildId: null == A ? void 0 : A.id,
                icon: t.hasAvatarForGuild(null == A ? void 0 : A.id) && (0, i.jsx)(_.default, {
                    user: t,
                    nickname: N
                }),
                tags: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.UserProfilePronounsTag, {
                        pronouns: null == n ? void 0 : n.pronouns
                    }), (0, i.jsx)(d.UserProfileBadgesTag, {
                        user: t,
                        guildId: null == A ? void 0 : A.id
                    })]
                })
            }), m && (0, i.jsx)(I.default, {
                user: t
            }), m && (0, i.jsx)(c.default, {
                user: t,
                bio: null == n ? void 0 : n.bio,
                hidePersonalInformation: p,
                onClose: S
            }), (0, i.jsx)(T.default, {
                user: t,
                guild: A
            }), O && (0, i.jsx)(E.default, {
                user: t
            })]
        })
    }
}