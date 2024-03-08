function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("37983");
    n("884691");
    var l = n("448105"),
        a = n.n(l),
        s = n("917351"),
        r = n.n(s),
        o = n("509043"),
        u = n("446674"),
        d = n("77078"),
        c = n("305961"),
        f = n("49111"),
        p = n("782340"),
        m = n("262092"),
        h = function(e) {
            let {
                className: t,
                guild: n,
                roleStyle: l,
                roleFilter: s,
                onSelect: h,
                onClose: x
            } = e, E = (0, u.useStateFromStores)([c.default], () => c.default.getRoles(n.id)), y = e => r(E).filter(s).filter(t => a(e.toLowerCase(), t.name.toLowerCase())).value();
            return (0, i.jsx)(d.ComboboxPopout, {
                className: t,
                value: new Set,
                onChange: h,
                placeholder: p.default.Messages.ADD_ROLE_PLACEHOLDER,
                "aria-label": p.default.Messages.ADD_ROLE_A11Y_LABEL,
                onClose: x,
                children: e => y(e).map(e => {
                    var t, n;
                    return (0, i.jsxs)(d.ComboboxItem, {
                        value: e.id,
                        children: ["dot" === l ? (0, i.jsx)(d.RoleDot, {
                            className: m.popoutRoleDot,
                            color: null !== (t = e.colorString) && void 0 !== t ? t : (0, o.int2hex)(f.DEFAULT_ROLE_COLOR),
                            background: !1,
                            tooltip: !1
                        }) : (0, i.jsx)(d.RoleCircle, {
                            className: m.popoutRoleCircle,
                            color: null !== (n = e.colorString) && void 0 !== n ? n : (0, o.int2hex)(f.DEFAULT_ROLE_COLOR)
                        }), (0, i.jsx)(d.ComboboxItem.Label, {
                            children: e.name
                        })]
                    }, e.id)
                })
            })
        }
}