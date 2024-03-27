function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHasImportantUnread: function() {
            return a
        }
    }), n("442837");
    var i = n("306680"),
        r = n("9156"),
        s = n("490897");

    function a(e) {
        return i.default.hasUnread(e.id) && r.default.resolveUnreadSetting(e) === s.UnreadSetting.ALL_MESSAGES
    }
}