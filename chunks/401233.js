function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("658722"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("194926"),
        l = n("898511"),
        c = n("784184"),
        f = n("306912"),
        d = n("281767"),
        _ = n("941504"),
        E = n("441121");
    t.default = function(e) {
        var t = e.className,
            n = e.guild,
            o = e.roleStyle,
            a = e.roleFilter,
            p = e.onSelect,
            m = e.onClose,
            y = (0, l.useStateFromStores)([f.default], function() {
                return f.default.getRoles(n.id)
            });
        return r.createElement(c.ComboboxPopout, {
            className: t,
            value: new Set,
            onChange: p,
            placeholder: _.default.Messages.ADD_ROLE_PLACEHOLDER,
            "aria-label": _.default.Messages.ADD_ROLE_A11Y_LABEL,
            onClose: m
        }, function(e) {
            var t;
            return (t = e, u()(y).filter(a).filter(function(e) {
                return i()(t.toLowerCase(), e.name.toLowerCase())
            }).value()).map(function(e) {
                var t, n;
                return r.createElement(c.ComboboxItem, {
                    value: e.id,
                    key: e.id
                }, "dot" === o ? r.createElement(c.RoleDot, {
                    className: E.popoutRoleDot,
                    color: null !== (t = e.colorString) && void 0 !== t ? t : (0, s.int2hex)(d.DEFAULT_ROLE_COLOR),
                    background: !1,
                    tooltip: !1
                }) : r.createElement(c.RoleCircle, {
                    className: E.popoutRoleCircle,
                    color: null !== (n = e.colorString) && void 0 !== n ? n : (0, s.int2hex)(d.DEFAULT_ROLE_COLOR)
                }), r.createElement(c.ComboboxItem.Label, null, e.name))
            })
        })
    }
}