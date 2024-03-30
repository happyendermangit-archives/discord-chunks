function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHasImportantUnread: function() {
            return a
        }
    }), n("898511");
    var r = n("879547"),
        o = n("848957"),
        i = n("24729");

    function a(e) {
        return r.default.hasUnread(e.id) && o.default.resolveUnreadSetting(e) === i.UnreadSetting.ALL_MESSAGES
    }
}