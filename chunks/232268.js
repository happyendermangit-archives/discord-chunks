function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("65597"),
        a = n("880731");

    function s(e) {
        let {
            children: t,
            confettiLocation: n
        } = e, s = (0, l.default)([a.default], () => a.default.isEnabled({
            confettiLocation: n
        }));
        return s ? (0, i.jsx)(i.Fragment, {
            children: t
        }) : null
    }
}