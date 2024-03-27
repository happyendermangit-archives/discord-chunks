function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("399606"),
        s = n("351780");

    function a(e) {
        let {
            children: t,
            confettiLocation: n
        } = e;
        return (0, r.useStateFromStores)([s.default], () => s.default.isEnabled({
            confettiLocation: n
        })) ? (0, i.jsx)(i.Fragment, {
            children: t
        }) : null
    }
}