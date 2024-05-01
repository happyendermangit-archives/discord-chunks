function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuGroup: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("939350"),
        o = n("942610");

    function l(e) {
        let {
            contents: t,
            label: n,
            className: r,
            color: l = "default"
        } = e;
        return 0 === t.length ? null : (0, i.jsxs)("div", {
            "aria-label": n,
            role: "group",
            className: r,
            children: [null != n ? (0, i.jsx)("div", {
                className: s()(o.groupLabel, a.MENU_ITEM_COLORS[l]),
                children: n
            }) : null, t]
        })
    }
}