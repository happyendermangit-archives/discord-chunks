function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        getHasImportantUnread: function() {
            return n
        }
    }), s("446674");
    var l = s("660478"),
        u = s("282109"),
        i = s("133335");

    function n(e) {
        return l.default.hasUnread(e.id) && u.default.resolveUnreadSetting(e) === i.UnreadSetting.ALL_MESSAGES
    }
}