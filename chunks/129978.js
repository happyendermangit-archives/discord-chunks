function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SelfDismissibleAlertBody: function() {
            return l
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("446674"),
        a = n("76393"),
        o = n("443725");

    function l(e) {
        let {
            body: t,
            dismissCallback: n,
            errorCodeMessage: l
        } = e, u = (0, r.useStateFromStores)([a.default], () => a.default.getRemoteSessionId());
        return (s.useEffect(() => {
            null != u && n()
        }, [u, n]), null == l) ? (0, i.jsx)(i.Fragment, {
            children: t
        }) : (0, i.jsxs)(i.Fragment, {
            children: [t, (0, i.jsx)("div", {
                className: o.errorCodeMessage,
                children: l
            })]
        })
    }
}