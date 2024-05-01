function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("411104");
    var i = n("735250");
    n("470079");
    var r = n("758426"),
        a = n("973675"),
        s = n("949605"),
        o = n("981631");

    function l(e) {
        let {
            tier: t,
            ...n
        } = e;
        switch (t) {
            case o.BoostedGuildTiers.NONE:
            case o.BoostedGuildTiers.TIER_1:
                return (0, i.jsx)(r.default, {
                    ...n
                });
            case o.BoostedGuildTiers.TIER_2:
                return (0, i.jsx)(a.default, {
                    ...n
                });
            case o.BoostedGuildTiers.TIER_3:
                return (0, i.jsx)(s.default, {
                    ...n
                });
            default:
                throw Error("Not a valid tier type")
        }
    }
}