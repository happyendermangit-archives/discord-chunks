function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SelfDismissibleAlertBody: function() {
            return l
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("258609"),
        o = n("102050");

    function l(e) {
        let {
            body: t,
            dismissCallback: n,
            errorCodeMessage: l
        } = e, u = (0, s.useStateFromStores)([a.default], () => a.default.getRemoteSessionId());
        return (r.useEffect(() => {
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