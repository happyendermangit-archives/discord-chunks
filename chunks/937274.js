function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showActivitiesInvalidPermissionsAlert: function() {
            return i
        }
    });
    var r = n("483587"),
        o = n("941504"),
        i = function() {
            r.default.show({
                title: o.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_TITLE,
                body: o.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_BODY,
                hideActionSheet: !1
            })
        }
}