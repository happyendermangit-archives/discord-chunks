function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationIconSize: function() {
            return r
        }
    });
    var i, r, s = n("735250");
    n("470079");
    var a = n("120356"),
        o = n.n(a),
        l = n("768581"),
        u = n("73346"),
        d = n("454382");
    (i = r || (r = {}))[i.SMALL = 40] = "SMALL", i[i.MEDIUM = 66] = "MEDIUM";
    let _ = {
        40: d.small,
        66: d.medium
    };
    t.default = e => {
        let t, {
            application: n,
            size: i,
            asset: r,
            className: a
        } = e;
        return t = null != r ? (0, u.getAssetURL)(n.id, r, i) : l.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            size: i
        }), (0, s.jsx)("img", {
            alt: "",
            src: t,
            className: o()(d.icon, _[i], a)
        })
    }
}