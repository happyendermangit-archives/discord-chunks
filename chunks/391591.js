function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("781738");
    var a = n("984519");
    let r = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

    function s(e) {
        return a.HIGH_FIVE_EMOJIS.has(e.replace(r, ""))
    }
}