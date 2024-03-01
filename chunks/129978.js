function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SelfDismissibleAlertBody: function() {
            return d
        }
    });
    var s = n("37983"),
        i = n("884691"),
        r = n("446674"),
        a = n("76393"),
        o = n("443725");

    function d(e) {
        let {
            body: t,
            dismissCallback: n,
            errorCodeMessage: d
        } = e, u = (0, r.useStateFromStores)([a.default], () => a.default.getRemoteSessionId());
        return (i.useEffect(() => {
            null != u && n()
        }, [u, n]), null == d) ? (0, s.jsx)(s.Fragment, {
            children: t
        }) : (0, s.jsxs)(s.Fragment, {
            children: [t, (0, s.jsx)("div", {
                className: o.errorCodeMessage,
                children: d
            })]
        })
    }
}