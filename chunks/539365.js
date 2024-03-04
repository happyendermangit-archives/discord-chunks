function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuGroup: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
        a = n("389802"),
        o = n("639826");

    function l(e) {
        let {
            contents: t,
            label: n,
            className: s,
            color: l = "default"
        } = e;
        return 0 === t.length ? null : (0, i.jsxs)("div", {
            "aria-label": n,
            role: "group",
            className: s,
            children: [null != n ? (0, i.jsx)("div", {
                className: r(o.groupLabel, a.MENU_ITEM_COLORS[l]),
                children: n
            }) : null, t]
        })
    }
}