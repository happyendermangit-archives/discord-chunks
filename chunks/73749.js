function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return a
        }
    });
    var t = E("37983");
    E("884691");
    var o = E("90915"),
        n = E("759843"),
        r = E("428958");

    function a(e) {
        var _;
        let {
            impressionName: E,
            impressionProperties: a,
            disableTrack: i,
            ...I
        } = e, s = a;
        return "function" == typeof s && (s = s(I)), (0, r.default)({
            type: n.ImpressionTypes.PAGE,
            name: E,
            properties: s
        }, {
            disableTrack: i
        }, [null === (_ = I.location) || void 0 === _ ? void 0 : _.pathname]), (0, t.jsx)(o.Route, {
            ...I
        })
    }
}