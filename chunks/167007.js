function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationIconSize: function() {
            return l
        },
        default: function() {
            return f
        }
    });
    var i, l, a = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        o = n("315102"),
        u = n("271560"),
        d = n("614181");
    (i = l || (l = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
    let c = {
        40: d.small,
        66: d.medium
    };
    var f = e => {
        let t, {
            application: n,
            size: i,
            asset: l,
            className: s
        } = e;
        return t = null != l ? (0, u.getAssetURL)(n.id, l, i) : o.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            size: i
        }), (0, a.jsx)("img", {
            alt: "",
            src: t,
            className: r(d.icon, c[i], s)
        })
    }
}