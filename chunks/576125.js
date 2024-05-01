function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("399606"),
        a = n("351780");

    function s(e) {
        let {
            children: t,
            confettiLocation: n
        } = e;
        return (0, r.useStateFromStores)([a.default], () => a.default.isEnabled({
            confettiLocation: n
        })) ? (0, i.jsx)(i.Fragment, {
            children: t
        }) : null
    }
}