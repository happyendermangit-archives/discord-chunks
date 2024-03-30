function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("447452"),
        s = n("788197"),
        a = n("969835");

    function o(e) {
        let {
            location: t,
            ...n
        } = e, {
            basicsEnabled: o
        } = (0, r.useSimplifiedProfileExperiment)({
            location: t
        });
        return o ? (0, i.jsx)(a.default, {
            ...n
        }) : (0, i.jsx)(s.default, {
            ...n
        })
    }
}