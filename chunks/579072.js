function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("799004"),
        s = n("877987"),
        l = n("941504"),
        c = n("180299"),
        f = n("989171");

    function d(e) {
        var t, n, o, d = e.user,
            _ = e.guild,
            E = e.guildMember,
            p = e.showBorder;
        if (null == _ || null == E) return null;
        return r.createElement(s.default, null, r.createElement(a.Heading, {
            variant: "eyebrow",
            className: f.title
        }, l.default.Messages.ROLES_LIST.format({
            numRoles: E.roles.length
        })), r.createElement(u.default, {
            roleClassName: i()(c.rolePill, (t = {}, n = c.rolePillBorder, o = p, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t)),
            className: c.roles,
            key: "roles",
            guild: _,
            user: d,
            userRoles: E.roles,
            disableBorderColor: !0
        }))
    }
}