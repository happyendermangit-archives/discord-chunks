function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NameWithRole: function() {
            return E
        },
        NameWithRoleAnchor: function() {
            return c
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("442837"),
        o = n("756715"),
        l = n("607070"),
        u = n("109161"),
        d = n("658092");

    function _(e) {
        let {
            roleStyle: t,
            name: n,
            color: r,
            roleName: a,
            dotAlignment: o = "left",
            className: l
        } = e, _ = "username" === t, c = "dot" === t ? (0, i.jsx)(u.RoleDot, {
            color: r,
            name: a,
            className: "left" === o ? d.roleDotLeft : d.roleDotRight
        }) : null;
        return (0, i.jsxs)("span", {
            style: {
                color: _ && null != r ? r : void 0
            },
            className: s()(l, {
                [d.username]: _
            }),
            children: ["left" === o && c, n, "right" === o && c]
        })
    }

    function c(e) {
        let {
            name: t,
            color: n,
            roleName: r,
            dotAlignment: s,
            className: u,
            ...d
        } = e, c = (0, a.useStateFromStores)([l.default], () => l.default.roleStyle), E = "username" === c, I = (0, i.jsx)(_, {
            roleStyle: c,
            name: t,
            color: n,
            roleName: r,
            dotAlignment: s,
            className: u
        }), T = E ? {
            color: n
        } : void 0;
        return (0, i.jsx)(o.Anchor, {
            ...d,
            children: I,
            style: T
        })
    }

    function E(e) {
        let t = (0, a.useStateFromStores)([l.default], () => l.default.roleStyle);
        return (0, i.jsx)(_, {
            ...e,
            roleStyle: t
        })
    }
}