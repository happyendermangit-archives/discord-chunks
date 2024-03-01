function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var l = n("37983");
    n("884691");
    var i = n("448105"),
        a = n.n(i),
        s = n("917351"),
        r = n.n(s),
        o = n("509043"),
        u = n("77078"),
        d = n("49111"),
        c = n("782340"),
        f = n("262092"),
        m = function(e) {
            let {
                className: t,
                guild: n,
                roleStyle: i,
                roleFilter: s,
                onSelect: m,
                onClose: p
            } = e, h = e => r(n.roles).filter(s).filter(t => a(e.toLowerCase(), t.name.toLowerCase())).value();
            return (0, l.jsx)(u.ComboboxPopout, {
                className: t,
                value: new Set,
                onChange: m,
                placeholder: c.default.Messages.ADD_ROLE_PLACEHOLDER,
                "aria-label": c.default.Messages.ADD_ROLE_A11Y_LABEL,
                onClose: p,
                children: e => h(e).map(e => {
                    var t, n;
                    return (0, l.jsxs)(u.ComboboxItem, {
                        value: e.id,
                        children: ["dot" === i ? (0, l.jsx)(u.RoleDot, {
                            className: f.popoutRoleDot,
                            color: null !== (t = e.colorString) && void 0 !== t ? t : (0, o.int2hex)(d.DEFAULT_ROLE_COLOR),
                            background: !1,
                            tooltip: !1
                        }) : (0, l.jsx)(u.RoleCircle, {
                            className: f.popoutRoleCircle,
                            color: null !== (n = e.colorString) && void 0 !== n ? n : (0, o.int2hex)(d.DEFAULT_ROLE_COLOR)
                        }), (0, l.jsx)(u.ComboboxItem.Label, {
                            children: e.name
                        })]
                    }, e.id)
                })
            })
        }
}