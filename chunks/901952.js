function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("648996"),
        s = n("785717"),
        a = n("804384");

    function o(e) {
        let {
            user: t,
            canDM: n,
            onClose: o
        } = e, {
            trackUserProfileAction: l
        } = (0, s.useUserProfileAnalyticsContext)();
        return n ? (0, i.jsx)("div", {
            className: a.container,
            children: (0, i.jsx)(r.default, {
                className: a.messageInputContainer,
                inputClassName: a.messageInput,
                user: t,
                autoFocus: !0,
                onSend: () => {
                    l({
                        action: "SEND_DIRECT_MESSAGE"
                    }), null == o || o()
                }
            })
        }) : null
    }
}