function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("316693"),
        a = n("685698"),
        o = n("577776"),
        l = n("945330"),
        u = n("991170"),
        d = n("978970"),
        c = n("782340"),
        f = n("981009");

    function _(e) {
        let {
            application: t,
            permissions: n,
            deniedPermissions: _,
            onPermissionsChange: h,
            guild: E
        } = e, [g, m] = s.useState(u.default.NONE);
        s.useEffect(() => {
            h(!0, n), m(r.default.invert(E.permissions)), h(!1, r.default.invert(E.permissions))
        }, [E, h, n]);
        let p = d.OrderedPermissions.filter(e => r.default.has(n, e)),
            S = p.filter(e => !r.default.has(g, e)).map(e => {
                let t = (0, d.getPermissionName)(e),
                    n = !r.default.has(_, e);
                return (0, i.jsx)("li", {
                    className: f.permission,
                    children: (0, i.jsx)(a.Checkbox, {
                        value: n,
                        onChange: (t, n) => h(n, e),
                        type: a.Checkbox.Types.INVERTED,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: t
                        })
                    })
                }, String(e))
            }),
            v = p.filter(e => r.default.has(g, e)).map(e => {
                let t = (0, d.getPermissionName)(e);
                return (0, i.jsxs)("li", {
                    className: f.permission,
                    children: [(0, i.jsx)("div", {
                        className: f.disabledPermissionIcon,
                        children: (0, i.jsx)(l.default, {
                            className: f.icon
                        })
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: t
                    })]
                }, String(e))
            });
        return (0, i.jsxs)("div", {
            className: f.botPermissions,
            children: [(0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "header-secondary",
                className: f.permissionsLabel,
                children: c.default.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
                    applicationName: t.name,
                    guildName: E.name
                })
            }), (0, i.jsx)("ul", {
                className: f.permissionsList,
                children: S
            }), v.length > 0 ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: f.disabledPermissionsLabel,
                    children: c.default.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
                        applicationName: t.name
                    })
                }), (0, i.jsx)("ul", {
                    className: f.permissionsList,
                    children: v
                })]
            }) : null]
        })
    }
}