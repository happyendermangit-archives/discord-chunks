function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        i = n("437822"),
        r = n("457108"),
        u = n("970366"),
        o = n("271938"),
        d = n("124969"),
        c = n("782340"),
        f = n("890957"),
        E = e => {
            let {
                location: t
            } = e, {
                verifyFailed: E,
                verifySucceeded: _
            } = (0, l.useStateFromStoresObject)([o.default], () => ({
                verifyFailed: o.default.didVerifyFail(),
                verifySucceeded: o.default.didVerifySucceed()
            }));
            return (a.useEffect(() => {
                let e = (0, r.default)(t);
                null != e && i.default.authorizePayment(e), (0, u.trackAppUIViewed)("authorize_payment")
            }, [t]), E) ? (0, s.jsxs)(d.default, {
                children: [(0, s.jsx)("img", {
                    alt: "",
                    src: n("768025"),
                    className: f.marginBottom20
                }), (0, s.jsx)(d.Title, {
                    className: f.marginBottom8,
                    children: c.default.Messages.PAYMENT_AUTHORIZATION_EXPIRED
                }), (0, s.jsx)(d.SubTitle, {
                    className: f.marginBottom40,
                    children: c.default.Messages.PAYMENT_AUTH_EXPIRED_SUGGESTION
                })]
            }) : _ ? (0, s.jsxs)(d.default, {
                children: [(0, s.jsx)("img", {
                    alt: "",
                    src: n("176872"),
                    className: f.marginBottom20
                }), (0, s.jsx)(d.Title, {
                    className: f.marginBottom8,
                    children: c.default.Messages.PAYMENT_AUTHORIZATION_SUCCEEDED
                }), (0, s.jsx)(d.SubTitle, {
                    className: f.marginBottom40,
                    children: c.default.Messages.PAYMENT_AUTH_SUCCEEDED_SUGGESTION
                })]
            }) : (0, s.jsxs)(d.default, {
                children: [(0, s.jsx)(d.AuthSpinner, {}), (0, s.jsx)(d.Title, {
                    children: c.default.Messages.PAYMENT_AUTHORIZING
                })]
            })
        }
}