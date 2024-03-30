function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("51891");

    function i(e) {
        var t = e.channel,
            n = e.commands;
        return 0 === (0, o.default)({
            channel: t,
            commands: n,
            limit: 5
        }).length ? null : r.createElement("li", null)
    }
}