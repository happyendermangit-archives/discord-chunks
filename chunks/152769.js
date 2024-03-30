function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = new n.constructor(n.toJS());
        return r.position_ = t.order, null != t.nickname && (r.name = t.nickname), null != t.parentId && t.parentId in e && (r.parent_id = t.parentId), r
    }
    n.r(t), n.d(t, {
        createFavoritesChannelRecord: function() {
            return r
        }
    })
}