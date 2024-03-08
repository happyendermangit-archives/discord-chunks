function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("448105"),
        a = n.n(l),
        s = n("917351"),
        r = n.n(s),
        o = n("509043"),
        u = n("77078"),
        d = n("49111"),
        c = n("782340"),
        f = n("262092"),
        p = function(e) {
            let {
                className: t,
                guild: n,
                roleStyle: l,
                roleFilter: s,
                onSelect: p,
                onClose: m
            } = e, h = e => r(n.roles).filter(s).filter(t => a(e.toLowerCase(), t.name.toLowerCase())).value();
            return (0, i.jsx)(u.ComboboxPopout, {
                className: t,
                value: new Set,
                onChange: p,
                placeholder: c.default.Messages.ADD_ROLE_PLACEHOLDER,
                "aria-label": c.default.Messages.ADD_ROLE_A11Y_LABEL,
                onClose: m,
                children: e => h(e).map(e => {
                    var t, n;
                    return (0, i.jsxs)(u.ComboboxItem, {
                        value: e.id,
                        children: ["dot" === l ? (0, i.jsx)(u.RoleDot, {
                            className: f.popoutRoleDot,
                            color: null !== (t = e.colorString) && void 0 !== t ? t : (0, o.int2hex)(d.DEFAULT_ROLE_COLOR),
                            background: !1,
                            tooltip: !1
                        }) : (0, i.jsx)(u.RoleCircle, {
                            className: f.popoutRoleCircle,
                            color: null !== (n = e.colorString) && void 0 !== n ? n : (0, o.int2hex)(d.DEFAULT_ROLE_COLOR)
                        }), (0, i.jsx)(u.ComboboxItem.Label, {
                            children: e.name
                        })]
                    }, e.id)
                })
            })
        }
}