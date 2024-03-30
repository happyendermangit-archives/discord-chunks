function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("149765"),
        a = n("178940"),
        o = n("993365"),
        l = n("465670"),
        u = n("422559"),
        d = n("689938"),
        _ = n("827604");

    function c(e) {
        let {
            application: t,
            permissions: n,
            deniedPermissions: c,
            onPermissionsChange: E,
            guild: I
        } = e, T = r.useMemo(() => s.invert(I.permissions), [I.permissions]);
        r.useEffect(() => {
            E(!1, s.filter(n, T))
        }, [T, E, n]);
        let f = u.OrderedPermissions.filter(e => s.has(n, e)),
            S = f.filter(e => !s.has(T, e)).map(e => {
                let t = (0, u.getPermissionName)(e),
                    n = !s.has(c, e);
                return (0, i.jsx)("li", {
                    className: _.permission,
                    children: (0, i.jsx)(a.Checkbox, {
                        value: n,
                        onChange: (t, n) => E(n, e),
                        type: a.Checkbox.Types.INVERTED,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: t
                        })
                    })
                }, String(e))
            }),
            h = f.filter(e => s.has(T, e)).map(e => {
                let t = (0, u.getPermissionName)(e);
                return (0, i.jsxs)("li", {
                    className: _.permission,
                    children: [(0, i.jsx)("div", {
                        className: _.disabledPermissionIcon,
                        children: (0, i.jsx)(l.default, {
                            className: _.icon
                        })
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: t
                    })]
                }, String(e))
            });
        return (0, i.jsxs)("div", {
            className: _.botPermissions,
            children: [S.length > 0 ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: _.permissionsLabel,
                    children: d.default.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
                        applicationName: t.name,
                        guildName: I.name
                    })
                }), (0, i.jsx)("ul", {
                    className: _.permissionsList,
                    children: S
                })]
            }) : null, h.length > 0 ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "header-secondary",
                    className: _.disabledPermissionsLabel,
                    children: d.default.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
                        applicationName: t.name
                    })
                }), (0, i.jsx)("ul", {
                    className: _.permissionsList,
                    children: h
                })]
            }) : null]
        })
    }
}