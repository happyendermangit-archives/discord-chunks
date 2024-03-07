function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        getHasImportantUnread: function() {
            return n
        }
    }), s("446674");
    var l = s("660478"),
        i = s("282109"),
        u = s("133335");

    function n(e) {
        return l.default.hasUnread(e.id) && i.default.resolveUnreadSetting(e) === u.UnreadSetting.ALL_MESSAGES
    }
}