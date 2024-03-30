function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ApplicationIconSize: function() {
            return o
        }
    });
    var r, o, i, a = n("470079"),
        u = n("803997"),
        s = n.n(u),
        l = n("299529"),
        c = n("329903"),
        f = n("372482");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = o || (o = {}))[r.SMALL = 40] = "SMALL", r[r.MEDIUM = 66] = "MEDIUM";
    var _ = (d(i = {}, 40, f.small), d(i, 66, f.medium), i);
    t.default = function(e) {
        var t, n = e.application,
            r = e.size,
            o = e.asset,
            i = e.className;
        return t = null != o ? (0, c.getAssetURL)(n.id, o, r) : l.default.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            size: r
        }), a.createElement("img", {
            alt: "",
            src: t,
            className: s()(f.icon, _[r], i)
        })
    }
}