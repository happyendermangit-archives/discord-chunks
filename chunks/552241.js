function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NameWithRoleAnchor: function() {
            return _
        },
        NameWithRole: function() {
            return f
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
        } = e, c = "username" === t, _ = "dot" === t ? (0, i.jsx)(u.RoleDot, {
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
            children: ["left" === o && _, n, "right" === o && _]
        })
    }

    function _(e) {
        let {
            name: t,
            color: n,
            roleName: s,
            dotAlignment: r,
            className: u,
            ...d
        } = e, _ = (0, a.useStateFromStores)([l.default], () => l.default.roleStyle), f = "username" === _, E = (0, i.jsx)(c, {
            roleStyle: _,
            name: t,
            color: n,
            roleName: s,
            dotAlignment: r,
            className: u
        }), h = f ? {
            color: n
        } : void 0;
        return (0, i.jsx)(o.Anchor, {
            ...d,
            children: E,
            style: h
        })
    }

    function f(e) {
        let t = (0, a.useStateFromStores)([l.default], () => l.default.roleStyle);
        return (0, i.jsx)(c, {
            ...e,
            roleStyle: t
        })
    }
}