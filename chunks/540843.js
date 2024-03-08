function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("381784");

    function a(e) {
        let {
            channel: t,
            commands: n
        } = e, a = (0, l.default)({
            channel: t,
            commands: n,
            limit: 5
        });
        return 0 === a.length ? null : (0, i.jsx)("li", {})
    }
}