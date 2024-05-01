function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("676161");

    function a(e) {
        let {
            channel: t,
            commands: n
        } = e;
        return 0 === (0, r.default)({
            channel: t,
            commands: n,
            limit: 5
        }).length ? null : (0, i.jsx)("li", {})
    }
}