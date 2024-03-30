function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("483587"),
        o = n("941504");

    function i(e, t, n, i) {
        var a, u;
        r.default.show({
            title: o.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
            cancelText: o.default.Messages.CANCEL,
            confirmText: o.default.Messages.CONFIRM,
            onConfirm: n,
            onCancel: i,
            body: o.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
                currentApplicationName: null !== (a = null == e ? void 0 : e.name) && void 0 !== a ? a : o.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
                currentApplicationChannelName: null !== (u = null == t ? void 0 : t.name) && void 0 !== u ? u : o.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT
            })
        })
    }
}