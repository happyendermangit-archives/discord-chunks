function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("560627"),
        o = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

    function i(e) {
        return r.HIGH_FIVE_EMOJIS.has(e.replace(o, ""))
    }
}