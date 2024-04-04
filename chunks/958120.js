function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("246946"),
        a = n("5192"),
        o = n("447452"),
        l = n("505737"),
        u = n("790711"),
        d = n("67152"),
        _ = n("901952"),
        c = n("287612"),
        E = n("165818"),
        I = n("614664"),
        T = n("797849");

    function f(e) {
        let {
            user: t,
            displayProfile: n,
            onClose: f,
            guild: S,
            channelId: h
        } = e, {
            moreUserDetailsEnabled: A
        } = (0, o.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), m = a.default.getName(null == S ? void 0 : S.id, h, t), N = (0, l.default)(t.id, null == S ? void 0 : S.id), O = (0, r.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
        return t.isSystemUser() ? null : t.isNonUserBot() ? (0, i.jsxs)("div", {
            className: T.paddingBottom,
            children: [(0, i.jsx)(I.default, {
                guildId: null == S ? void 0 : S.id,
                user: t,
                nickname: null,
                pronouns: null
            }), ";"]
        }) : (0, i.jsxs)("div", {
            className: T.paddingBottom,
            children: [(0, i.jsx)(I.default, {
                guildId: null == S ? void 0 : S.id,
                user: t,
                nickname: m,
                pronouns: null == n ? void 0 : n.pronouns,
                usernameIcon: t.hasAvatarForGuild(null == S ? void 0 : S.id) && (0, i.jsx)(u.default, {
                    user: t,
                    nickname: m
                })
            }), A && (0, i.jsx)(c.default, {
                user: t
            }), A && (0, i.jsx)(d.default, {
                user: t,
                bio: null == n ? void 0 : n.bio,
                hidePersonalInformation: O,
                onClose: f
            }), (0, i.jsx)(E.default, {
                user: t,
                guild: S
            }), N && (0, i.jsx)(_.default, {
                user: t
            })]
        })
    }
}