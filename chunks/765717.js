function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("613828"),
        a = n("990547"),
        s = n("213609");

    function o(e) {
        var t;
        let {
            impressionName: n,
            impressionProperties: o,
            disableTrack: l,
            ...u
        } = e, d = o;
        return "function" == typeof d && (d = d(u)), (0, s.default)({
            type: a.ImpressionTypes.PAGE,
            name: n,
            properties: d
        }, {
            disableTrack: l
        }, [null === (t = u.location) || void 0 === t ? void 0 : t.pathname]), (0, i.jsx)(r.Route, {
            ...u
        })
    }
}