function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("5192"),
        s = n("447452"),
        a = n("505737"),
        o = n("790711"),
        l = n("901952"),
        u = n("287612"),
        d = n("614664"),
        _ = n("797849");

    function c(e) {
        let {
            user: t,
            displayProfile: n,
            guild: c,
            channelId: E
        } = e, {
            moreUserDetailsEnabled: I
        } = (0, s.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), T = r.default.getName(null == c ? void 0 : c.id, E, t), f = (0, a.default)(t.id, null == c ? void 0 : c.id);
        return t.isSystemUser() ? null : t.isNonUserBot() ? (0, i.jsxs)("div", {
            className: _.paddingBottom,
            children: [(0, i.jsx)(d.default, {
                guildId: null == c ? void 0 : c.id,
                user: t,
                nickname: null,
                pronouns: null
            }), ";"]
        }) : (0, i.jsxs)("div", {
            className: _.paddingBottom,
            children: [(0, i.jsx)(d.default, {
                guildId: null == c ? void 0 : c.id,
                user: t,
                nickname: T,
                pronouns: null == n ? void 0 : n.pronouns,
                usernameIcon: t.hasAvatarForGuild(null == c ? void 0 : c.id) && (0, i.jsx)(o.default, {
                    user: t,
                    nickname: T
                })
            }), I && (0, i.jsx)(u.default, {
                user: t
            }), f && (0, i.jsx)(l.default, {
                user: t
            })]
        })
    }
}