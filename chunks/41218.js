function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("470079"),
        o = n("37295"),
        i = n("251305");

    function a(e) {
        var t = e.children,
            n = e.confettiLocation;
        return (0, o.useStateFromStores)([i.default], function() {
            return i.default.isEnabled({
                confettiLocation: n
            })
        }) ? r.createElement(r.Fragment, null, t) : null
    }
}