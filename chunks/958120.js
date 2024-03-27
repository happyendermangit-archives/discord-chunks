function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
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
        d = n("614664");

    function _(e) {
        let {
            user: t,
            displayProfile: n,
            guild: _,
            channelId: c
        } = e, {
            moreUserDetailsEnabled: E
        } = (0, s.useSimplifiedProfileExperiment)({
            location: "BiteSizeProfileBody"
        }), I = r.default.getName(null == _ ? void 0 : _.id, c, t), T = (0, a.default)(t.id, null == _ ? void 0 : _.id);
        return t.isSystemUser() ? null : t.isNonUserBot() ? (0, i.jsx)(d.default, {
            user: t,
            nickname: null,
            pronouns: null,
            lastSection: !0
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(d.default, {
                user: t,
                nickname: I,
                pronouns: null == n ? void 0 : n.pronouns,
                usernameIcon: t.hasAvatarForGuild(null == _ ? void 0 : _.id) && (0, i.jsx)(o.default, {
                    user: t,
                    nickname: I
                }),
                lastSection: !E && !T
            }), E && (0, i.jsx)(u.default, {
                user: t,
                lastSection: !T
            }), T && (0, i.jsx)(l.default, {
                user: t,
                lastSection: !0
            })]
        })
    }
}