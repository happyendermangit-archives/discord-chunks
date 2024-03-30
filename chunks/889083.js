function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e, t) {
        return ((null == e ? void 0 : e.type) !== r.ActivityTypes.HANG_STATUS || !!t) && null != e && e.type !== r.ActivityTypes.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
    }
}