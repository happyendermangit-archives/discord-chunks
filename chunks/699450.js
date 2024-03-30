function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isChannelTypeMentionable: function() {
            return r
        }
    });
    var i = n("131704");

    function r(e) {
        return (0, i.isGuildSelectableChannelType)(e) || (0, i.isGuildVocalChannelType)(e)
    }
}