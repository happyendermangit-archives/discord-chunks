function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250");
    n("470079");
    var r = n("658722"),
        s = n.n(r),
        a = n("392711"),
        o = n.n(a),
        l = n("866442"),
        u = n("442837"),
        d = n("481060"),
        _ = n("430824"),
        c = n("981631"),
        E = n("689938"),
        I = n("441121");
    t.default = function(e) {
        let {
            className: t,
            guild: n,
            roleStyle: r,
            roleFilter: a,
            onSelect: T,
            onClose: f
        } = e, S = (0, u.useStateFromStores)([_.default], () => _.default.getRoles(n.id)), h = e => o()(S).filter(a).filter(t => s()(e.toLowerCase(), t.name.toLowerCase())).value();
        return (0, i.jsx)(d.ComboboxPopout, {
            className: t,
            value: new Set,
            onChange: T,
            placeholder: E.default.Messages.ADD_ROLE_PLACEHOLDER,
            "aria-label": E.default.Messages.ADD_ROLE_A11Y_LABEL,
            onClose: f,
            children: e => h(e).map(e => {
                var t, n;
                return (0, i.jsxs)(d.ComboboxItem, {
                    value: e.id,
                    children: ["dot" === r ? (0, i.jsx)(d.RoleDot, {
                        className: I.popoutRoleDot,
                        color: null !== (t = e.colorString) && void 0 !== t ? t : (0, l.int2hex)(c.DEFAULT_ROLE_COLOR),
                        background: !1,
                        tooltip: !1
                    }) : (0, i.jsx)(d.RoleCircle, {
                        className: I.popoutRoleCircle,
                        color: null !== (n = e.colorString) && void 0 !== n ? n : (0, l.int2hex)(c.DEFAULT_ROLE_COLOR)
                    }), (0, i.jsx)(d.ComboboxItem.Label, {
                        children: e.name
                    })]
                }, e.id)
            })
        })
    }
}