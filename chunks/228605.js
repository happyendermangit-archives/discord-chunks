function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("689251"),
        i = n("350897"),
        a = n("671069"),
        u = n("281767");

    function s(e) {
        var t = e.tier,
            n = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["tier"]);
        switch (t) {
            case u.BoostedGuildTiers.NONE:
            case u.BoostedGuildTiers.TIER_1:
                return r.createElement(o.default, n);
            case u.BoostedGuildTiers.TIER_2:
                return r.createElement(i.default, n);
            case u.BoostedGuildTiers.TIER_3:
                return r.createElement(a.default, n);
            default:
                throw Error("Not a valid tier type")
        }
    }
}