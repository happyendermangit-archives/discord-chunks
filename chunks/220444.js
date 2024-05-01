function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHasImportantUnread: function() {
            return s
        }
    }), n("442837");
    var i = n("306680"),
        r = n("9156"),
        a = n("490897");

    function s(e) {
        return i.default.hasUnread(e.id) && r.default.resolveUnreadSetting(e) === a.UnreadSetting.ALL_MESSAGES
    }
}