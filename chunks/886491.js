function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StorefrontButton: function() {
            return d
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("555730"),
        a = n("481060"),
        s = n("682864"),
        o = n("359610"),
        l = n("689938"),
        u = n("123752");

    function d(e) {
        return (0, i.jsx)(o.default, {
            size: a.ButtonSizes.MEDIUM,
            ...e,
            children: (0, i.jsxs)("div", {
                className: u.storeBtn,
                children: [(0, i.jsx)(r.ShopSparkleIcon, {
                    width: 16,
                    height: 16,
                    color: "#fff"
                }), (0, i.jsx)(s.default, {
                    size: 4,
                    horizontal: !0
                }), l.default.Messages.STOREFRONT]
            })
        })
    }
}