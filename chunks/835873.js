function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showActivitiesInvalidPermissionsAlert: function() {
            return s
        }
    });
    var i = n("668781"),
        r = n("689938");
    let s = () => {
        i.default.show({
            title: r.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_TITLE,
            body: r.default.Messages.NO_EMBEDDED_ACTIVITY_PERMISSION_DIALOG_BODY,
            hideActionSheet: !1
        })
    }
}