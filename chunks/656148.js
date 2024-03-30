function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("784184"),
        i = n("707907"),
        a = n("941504"),
        u = function(e, t) {
            return r.createElement(o.Text, {
                color: "text-danger",
                key: t,
                style: {
                    display: "flex",
                    gap: "4px",
                    margin: "8px 0 4px 0",
                    alignItems: "center"
                },
                variant: "text-sm/normal"
            }, r.createElement(i.default, {
                width: 14,
                height: 14
            }), e)
        };
    t.default = {
        getForumChannelPermissionText: function() {
            return a.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT_DISABLED.format({
                warningHook: u
            })
        }
    }
}