function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("757143");
    var i = n("379082");
    let r = /🏻|🏼|🏽|🏾|🏿|\uFE0F/g;

    function a(e) {
        return i.HIGH_FIVE_EMOJIS.has(e.replace(r, ""))
    }
}