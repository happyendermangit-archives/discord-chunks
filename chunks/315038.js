function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuGroup: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("367628"),
        u = n("989608");

    function s(e) {
        var t = e.contents,
            n = e.label,
            o = e.className,
            s = e.color;
        return 0 === t.length ? null : r.createElement("div", {
            "aria-label": n,
            role: "group",
            className: o
        }, null != n ? r.createElement("div", {
            className: i()(u.groupLabel, a.MENU_ITEM_COLORS[void 0 === s ? "default" : s])
        }, n) : null, t)
    }
}