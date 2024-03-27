function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("648996"),
        s = n("785717"),
        a = n("659101"),
        o = n("804384");

    function l(e) {
        let {
            user: t,
            onClose: n,
            lastSection: l
        } = e, {
            trackUserProfileAction: u
        } = (0, s.useUserProfileAnalyticsContext)();
        return (0, i.jsx)(a.default, {
            className: o.container,
            lastSection: l,
            children: (0, i.jsx)(r.default, {
                className: o.messageInputContainer,
                inputClassName: o.messageInput,
                user: t,
                autoFocus: !0,
                onSend: () => {
                    u({
                        action: "SEND_DIRECT_MESSAGE"
                    }), null == n || n()
                }
            })
        })
    }
}