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
        s = n("246946"),
        a = n("5192"),
        o = n("447452"),
        l = n("505737"),
        u = n("998120"),
        d = n("530"),
        _ = n("894374"),
        c = n("790711"),
        E = n("67152"),
        I = n("901952"),
        T = n("287612"),
        f = n("165818"),
        S = n("797849");

    function h(e) {
        let {
            user: t,
            displayProfile: n,
            guild: h,
            channelId: A,
            onOpenProfile: m,
            onClose: N
        } = e, {
            moreUserDetailsEnabled: p
        } = (0, o.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), O = a.default.getName(null == h ? void 0 : h.id, A, t), R = (0, l.default)(t.id, null == h ? void 0 : h.id), C = (0, r.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
        return t.isSystemUser() ? null : (0, i.jsxs)("div", {
            className: S.body,
            children: [(0, i.jsx)(d.default, {
                user: t,
                guildId: null == h ? void 0 : h.id,
                usernameIcon: t.hasAvatarForGuild(null == h ? void 0 : h.id) && (0, i.jsx)(c.default, {
                    user: t,
                    nickname: O
                }),
                tags: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(_.UserProfilePronounsTag, {
                        pronouns: null == n ? void 0 : n.pronouns
                    }), (0, i.jsx)(_.UserProfileBadgesTag, {
                        user: t,
                        guildId: null == h ? void 0 : h.id
                    })]
                }),
                nicknameIcon: p && !C ? (0, i.jsx)(u.default, {
                    user: t,
                    onOpenProfile: m
                }) : null
            }), p && (0, i.jsx)(T.default, {
                user: t
            }), p && (0, i.jsx)(E.default, {
                user: t,
                bio: null == n ? void 0 : n.bio,
                hidePersonalInformation: C,
                onClose: N
            }), (0, i.jsx)(f.default, {
                user: t,
                guild: h
            }), R && (0, i.jsx)(I.default, {
                user: t
            })]
        })
    }
}