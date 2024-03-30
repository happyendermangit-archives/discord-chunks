function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SelfDismissibleAlertBody: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("254061"),
        a = n("102050");

    function u(e) {
        var t = e.body,
            n = e.dismissCallback,
            u = e.errorCodeMessage,
            s = (0, o.useStateFromStores)([i.default], function() {
                return i.default.getRemoteSessionId()
            });
        return (r.useEffect(function() {
            null != s && n()
        }, [s, n]), null == u) ? r.createElement(r.Fragment, null, t) : r.createElement(r.Fragment, null, t, r.createElement("div", {
            className: a.errorCodeMessage
        }, u))
    }
}