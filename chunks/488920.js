function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("372844"),
        u = n("938414"),
        s = n("943228");
    t.default = function(e) {
        var t = e.guild,
            n = e.children,
            o = null != t ? r.createElement(a.default, {
                guild: t,
                size: a.default.Sizes.MEDIUM,
                className: i()(s.icon, null == t.icon ? s.textIcon : s.imageIcon),
                active: !0
            }) : null;
        return r.createElement("span", null, r.createElement(u.default, null, o), r.createElement("span", {
            className: s.name
        }, n))
    }
}