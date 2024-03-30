function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("784184"),
        o = n("1757"),
        i = n("548851"),
        a = n("115610"),
        u = n("941504");
    t.default = new i.default({
        onSwitchSuccess: function(e) {
            setTimeout(function() {
                (0, r.showToast)((0, r.createToast)(u.default.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({
                    username: e.username
                }), r.ToastType.SUCCESS))
            }, 100)
        },
        onSwitchError: function() {
            (0, r.showToast)((0, r.createToast)(o.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, r.ToastType.FAILURE))
        },
        onTokenSet: function() {
            (0, r.closeModal)(a.SWITCH_ACCOUNTS_MODAL_KEY)
        }
    })
}