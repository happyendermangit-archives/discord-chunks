function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
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
        E = n("614664"),
        I = n("797849");

    function T(e) {
        let {
            user: t,
            displayProfile: n,
            onClose: T,
            guild: f,
            channelId: S
        } = e, {
            moreUserDetailsEnabled: h
        } = (0, o.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), A = a.default.getName(null == f ? void 0 : f.id, S, t), m = (0, l.default)(t.id, null == f ? void 0 : f.id), N = (0, r.useStateFromStores)([s.default], () => s.default.hidePersonalInformation);
        return t.isSystemUser() ? null : t.isNonUserBot() ? (0, i.jsxs)("div", {
            className: I.paddingBottom,
            children: [(0, i.jsx)(E.default, {
                guildId: null == f ? void 0 : f.id,
                user: t,
                nickname: null,
                pronouns: null
            }), ";"]
        }) : (0, i.jsxs)("div", {
            className: I.paddingBottom,
            children: [(0, i.jsx)(E.default, {
                guildId: null == f ? void 0 : f.id,
                user: t,
                nickname: A,
                pronouns: null == n ? void 0 : n.pronouns,
                usernameIcon: t.hasAvatarForGuild(null == f ? void 0 : f.id) && (0, i.jsx)(u.default, {
                    user: t,
                    nickname: A
                })
            }), h && (0, i.jsx)(c.default, {
                user: t
            }), h && (0, i.jsx)(d.default, {
                user: t,
                bio: null == n ? void 0 : n.bio,
                hidePersonalInformation: N,
                onClose: T
            }), m && (0, i.jsx)(_.default, {
                user: t
            })]
        })
    }
}