function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("49111");

    function s(e, t) {
        return ((null == e ? void 0 : e.type) !== i.ActivityTypes.HANG_STATUS || !!t) && null != e && e.type !== i.ActivityTypes.CUSTOM_STATUS && (null != e.details || null != e.assets && (null != e.assets.large_image || null != e.assets.small_text) || null != e.party || null != e.secrets || null != e.state)
    }
}