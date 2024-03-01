function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationIconSize: function() {
            return i
        },
        default: function() {
            return f
        }
    });
    var l, i, a = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        o = n("315102"),
        u = n("271560"),
        d = n("614181");
    (l = i || (i = {}))[l.SMALL = 40] = "SMALL", l[l.MEDIUM = 66] = "MEDIUM";
    let c = {
        40: d.small,
        66: d.medium
    };
    var f = e => {
        let t, {
            application: n,
            size: l,
            asset: i,
            className: s
        } = e;
        return t = null != i ? (0, u.getAssetURL)(n.id, i, l) : o.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            size: l
        }), (0, a.jsx)("img", {
            alt: "",
            src: t,
            className: r(d.icon, c[l], s)
        })
    }
}