function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationIconSize: function() {
            return a
        },
        default: function() {
            return f
        }
    });
    var i, a, s = n("37983");
    n("884691");
    var r = n("414456"),
        l = n.n(r),
        o = n("315102"),
        u = n("271560"),
        c = n("614181");
    (i = a || (a = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
    let d = {
        40: c.small,
        66: c.medium
    };
    var f = e => {
        let t, {
            application: n,
            size: i,
            asset: a,
            className: r
        } = e;
        return t = null != a ? (0, u.getAssetURL)(n.id, a, i) : o.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            size: i
        }), (0, s.jsx)("img", {
            alt: "",
            src: t,
            className: l(c.icon, d[i], r)
        })
    }
}