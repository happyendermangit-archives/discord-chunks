function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("581583"),
        o = n("777003"),
        u = n("782340"),
        d = n("690807"),
        c = n("862939");

    function f(e) {
        let {
            user: t,
            guild: n,
            guildMember: i,
            showBorder: f
        } = e;
        return null == n || null == i ? null : (0, l.jsxs)(o.default, {
            children: [(0, l.jsx)(s.Heading, {
                variant: "eyebrow",
                className: c.title,
                children: u.default.Messages.ROLES_LIST.format({
                    numRoles: i.roles.length
                })
            }), (0, l.jsx)(r.default, {
                roleClassName: a(d.rolePill, {
                    [d.rolePillBorder]: f
                }),
                className: d.roles,
                guild: n,
                user: t,
                userRoles: i.roles,
                disableBorderColor: !0
            }, "roles")]
        })
    }
}