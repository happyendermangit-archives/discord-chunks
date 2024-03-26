function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("387111"),
        a = n("561845"),
        s = n("648149"),
        r = n("633668"),
        o = n("223696"),
        u = n("266113"),
        d = n("882519");

    function c(e) {
        let {
            user: t,
            displayProfile: n,
            guild: c,
            channelId: f
        } = e, p = l.default.getName(null == c ? void 0 : c.id, f, t), m = (0, a.default)(t.id, null == c ? void 0 : c.id);
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
                nickname: p,
                pronouns: null == n ? void 0 : n.pronouns,
                usernameIcon: t.hasAvatarForGuild(null == c ? void 0 : c.id) && (0, i.jsx)(s.default, {
                    user: t,
                    nickname: p
                })
            }), (0, i.jsx)(o.default, {
                user: t,
                isLastSection: !m
            }), (0, i.jsx)(r.default, {
                user: t,
                canDM: m
            })]
        })
    }
}