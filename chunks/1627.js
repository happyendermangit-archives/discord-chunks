function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("481060"),
        r = n("375964"),
        s = n("302155"),
        a = n("798077"),
        o = n("689938");
    t.default = new s.default({
        onSwitchSuccess(e) {
            setTimeout(() => {
                (0, i.showToast)((0, i.createToast)(o.default.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({
                    username: e.username
                }), i.ToastType.SUCCESS))
            }, 100)
        },
        onSwitchError() {
            (0, i.showToast)((0, i.createToast)(r.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, i.ToastType.FAILURE))
        },
        onTokenSet() {
            (0, i.closeModal)(a.SWITCH_ACCOUNTS_MODAL_KEY)
        }
    })
}