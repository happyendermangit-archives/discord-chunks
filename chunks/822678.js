function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isChannelTypeMentionable: function() {
            return o
        }
    });
    var r = n("569492");

    function o(e) {
        return (0, r.isGuildSelectableChannelType)(e) || (0, r.isGuildVocalChannelType)(e)
    }
}