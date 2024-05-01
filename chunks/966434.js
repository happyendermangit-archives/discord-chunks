function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("668781"),
        r = n("689938");

    function a(e, t, n, a) {
        var s, o;
        i.default.show({
            title: r.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
            cancelText: r.default.Messages.CANCEL,
            confirmText: r.default.Messages.CONFIRM,
            onConfirm: n,
            onCancel: a,
            body: r.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
                currentApplicationName: null !== (s = null == e ? void 0 : e.name) && void 0 !== s ? s : r.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                currentApplicationChannelName: null !== (o = null == t ? void 0 : t.name) && void 0 !== o ? o : r.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT
            })
        })
    }
}