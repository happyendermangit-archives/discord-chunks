function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return o
        }
    }), l("70102");
    var n = l("37983");
    l("884691");
    var r = l("784917"),
        s = l("326880"),
        i = l("131777"),
        a = l("49111");

    function o(e) {
        let {
            tier: t,
            ...l
        } = e;
        switch (t) {
            case a.BoostedGuildTiers.NONE:
            case a.BoostedGuildTiers.TIER_1:
                return (0, n.jsx)(r.default, {
                    ...l
                });
            case a.BoostedGuildTiers.TIER_2:
                return (0, n.jsx)(s.default, {
                    ...l
                });
            case a.BoostedGuildTiers.TIER_3:
                return (0, n.jsx)(i.default, {
                    ...l
                });
            default:
                throw Error("Not a valid tier type")
        }
    }
}