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
        s = n("505737"),
        a = n("790711"),
        o = n("901952"),
        l = n("287612"),
        u = n("614664"),
        d = n("797849");

    function _(e) {
        let {
            user: t,
            displayProfile: n,
            guild: _,
            channelId: c
        } = e, E = r.default.getName(null == _ ? void 0 : _.id, c, t), I = (0, s.default)(t.id, null == _ ? void 0 : _.id);
        return t.isSystemUser() ? null : t.isNonUserBot() ? (0, i.jsx)(u.default, {
            user: t,
            nickname: null,
            pronouns: null,
            className: d.usernameSection,
            lastSection: !0
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.default, {
                className: d.usernameSection,
                user: t,
                nickname: E,
                pronouns: null == n ? void 0 : n.pronouns,
                usernameIcon: t.hasAvatarForGuild(null == _ ? void 0 : _.id) && (0, i.jsx)(a.default, {
                    user: t,
                    nickname: E
                })
            }), (0, i.jsx)(l.default, {
                user: t,
                isLastSection: !I
            }), (0, i.jsx)(o.default, {
                user: t,
                canDM: I
            })]
        })
    }
}