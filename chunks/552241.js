function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NameWithRoleAnchor: function() {
            return f
        },
        NameWithRole: function() {
            return _
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("446674"),
        o = n("459462"),
        l = n("206230"),
        u = n("236532"),
        d = n("542644");

    function c(e) {
        let {
            roleStyle: t,
            name: n,
            color: s,
            roleName: a,
            dotAlignment: o = "left",
            className: l
        } = e, c = "username" === t, f = "dot" === t ? (0, i.jsx)(u.RoleDot, {
            color: s,
            name: a,
            className: "left" === o ? d.roleDotLeft : d.roleDotRight
        }) : null;
        return (0, i.jsxs)("span", {
            style: {
                color: c && null != s ? s : void 0
            },
            className: r(l, {
                [d.username]: c
            }),
            children: ["left" === o && f, n, "right" === o && f]
        })
    }

    function f(e) {
        let {
            name: t,
            color: n,
            roleName: s,
            dotAlignment: r,
            className: u,
            ...d
        } = e, f = (0, a.useStateFromStores)([l.default], () => l.default.roleStyle), _ = "username" === f, h = (0, i.jsx)(c, {
            roleStyle: f,
            name: t,
            color: n,
            roleName: s,
            dotAlignment: r,
            className: u
        }), E = _ ? {
            color: n
        } : void 0;
        return (0, i.jsx)(o.Anchor, {
            ...d,
            children: h,
            style: E
        })
    }

    function _(e) {
        let t = (0, a.useStateFromStores)([l.default], () => l.default.roleStyle);
        return (0, i.jsx)(c, {
            ...e,
            roleStyle: t
        })
    }
}