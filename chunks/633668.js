function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("36341"),
        a = n("756507"),
        s = n("233589");

    function r(e) {
        let {
            user: t,
            canDM: n,
            onClose: r
        } = e, {
            trackUserProfileAction: o
        } = (0, a.useUserProfileAnalyticsContext)();
        return n ? (0, i.jsx)("div", {
            className: s.container,
            children: (0, i.jsx)(l.default, {
                className: s.messageInputContainer,
                inputClassName: s.messageInput,
                user: t,
                autoFocus: !0,
                onSend: () => {
                    o({
                        action: "SEND_DIRECT_MESSAGE"
                    }), null == r || r()
                }
            })
        }) : null
    }
}