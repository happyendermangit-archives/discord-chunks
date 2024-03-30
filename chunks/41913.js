function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("613828"),
        i = n("383959"),
        a = n("278982");

    function u(e) {
        var t, n = e.impressionName,
            u = e.impressionProperties,
            s = e.disableTrack,
            l = function(e, t) {
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
            }(e, ["impressionName", "impressionProperties", "disableTrack"]),
            c = u;
        return "function" == typeof c && (c = c(l)), (0, a.default)({
            type: i.ImpressionTypes.PAGE,
            name: n,
            properties: c
        }, {
            disableTrack: s
        }, [null === (t = l.location) || void 0 === t ? void 0 : t.pathname]), r.createElement(o.Route, l)
    }
}