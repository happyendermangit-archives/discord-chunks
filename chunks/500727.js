function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("372514"),
        i = n("264437"),
        a = n("804384");

    function u(e) {
        var t = e.user,
            n = e.onClose,
            u = (0, i.useUserProfileAnalyticsContext)().trackUserProfileAction;
        return r.createElement("div", {
            className: a.container
        }, r.createElement(o.default, {
            className: a.messageInputContainer,
            inputClassName: a.messageInput,
            user: t,
            autoFocus: !0,
            onSend: function() {
                u({
                    action: "SEND_DIRECT_MESSAGE"
                }), null == n || n()
            }
        }))
    }
}