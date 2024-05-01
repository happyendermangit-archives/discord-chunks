function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("757143");
    var i = n("379082");
    let r = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

    function s(e) {
        return i.HIGH_FIVE_EMOJIS.has(e.replace(r, ""))
    }
}