function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("412899"),
        l = n("659101"),
        u = n("689938"),
        d = n("180299"),
        _ = n("989171");

    function c(e) {
        let {
            user: t,
            guild: n,
            guildMember: r,
            showBorder: c
        } = e;
        return null == n || null == r ? null : (0, i.jsxs)(l.default, {
            children: [(0, i.jsx)(a.Heading, {
                variant: "eyebrow",
                className: _.title,
                children: u.default.Messages.ROLES_LIST.format({
                    numRoles: r.roles.length
                })
            }), (0, i.jsx)(o.default, {
                roleClassName: s()(d.rolePill, {
                    [d.rolePillBorder]: c
                }),
                className: d.roles,
                guild: n,
                user: t,
                userRoles: r.roles,
                disableBorderColor: !0
            }, "roles")]
        })
    }
}