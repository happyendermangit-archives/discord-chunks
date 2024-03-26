function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("250901"),
        a = n("981601"),
        s = n("562688");

    function r(e) {
        let {
            location: t,
            ...n
        } = e, {
            basicsEnabled: r
        } = (0, l.useSimplifiedProfileExperiment)({
            location: t
        });
        return r ? (0, i.jsx)(s.default, {
            ...n
        }) : (0, i.jsx)(a.default, {
            ...n
        })
    }
}