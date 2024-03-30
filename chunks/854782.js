function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("22287"),
        i = n("48111"),
        a = n("135983"),
        u = n("247164"),
        s = n("934387"),
        l = n("941504"),
        c = n("827604");

    function f(e) {
        var t = e.application,
            n = e.permissions,
            f = e.deniedPermissions,
            d = e.onPermissionsChange,
            _ = e.guild,
            E = r.useMemo(function() {
                return o.invert(_.permissions)
            }, [_.permissions]);
        r.useEffect(function() {
            d(!1, o.filter(n, E))
        }, [E, d, n]);
        var p = s.OrderedPermissions.filter(function(e) {
                return o.has(n, e)
            }),
            m = p.filter(function(e) {
                return !o.has(E, e)
            }).map(function(e) {
                var t = (0, s.getPermissionName)(e),
                    n = !o.has(f, e);
                return r.createElement("li", {
                    key: String(e),
                    className: c.permission
                }, r.createElement(i.Checkbox, {
                    value: n,
                    onChange: function(t, n) {
                        return d(n, e)
                    },
                    type: i.Checkbox.Types.INVERTED
                }, r.createElement(a.Text, {
                    variant: "text-md/normal"
                }, t)))
            }),
            y = p.filter(function(e) {
                return o.has(E, e)
            }).map(function(e) {
                var t = (0, s.getPermissionName)(e);
                return r.createElement("li", {
                    key: String(e),
                    className: c.permission
                }, r.createElement("div", {
                    className: c.disabledPermissionIcon
                }, r.createElement(u.default, {
                    className: c.icon
                })), r.createElement(a.Text, {
                    variant: "text-md/normal"
                }, t))
            });
        return r.createElement("div", {
            className: c.botPermissions
        }, m.length > 0 ? r.createElement(r.Fragment, null, r.createElement(a.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            className: c.permissionsLabel
        }, l.default.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
            applicationName: t.name,
            guildName: _.name
        })), r.createElement("ul", {
            className: c.permissionsList
        }, m)) : null, y.length > 0 ? r.createElement(r.Fragment, null, r.createElement(a.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            className: c.disabledPermissionsLabel
        }, l.default.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
            applicationName: t.name
        })), r.createElement("ul", {
            className: c.permissionsList
        }, y)) : null)
    }
}