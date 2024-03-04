function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isChannelTypeMentionable: function() {
            return s
        }
    });
    var i = n("233069");

    function s(e) {
        return (0, i.isGuildSelectableChannelType)(e) || (0, i.isGuildVocalChannelType)(e)
    }
}