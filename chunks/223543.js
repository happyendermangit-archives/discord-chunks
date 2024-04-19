function(e, t, s) {
    "use strict";
    s.r(t);
    var n = s("735250"),
        a = s("470079"),
        l = s("442837"),
        i = s("893776"),
        r = s("129293"),
        u = s("108427"),
        o = s("314897"),
        d = s("819570"),
        c = s("689938"),
        f = s("794711");
    t.default = e => {
        let {
            location: t
        } = e, {
            verifyFailed: E,
            verifySucceeded: I
        } = (0, l.useStateFromStoresObject)([o.default], () => ({
            verifyFailed: o.default.didVerifyFail(),
            verifySucceeded: o.default.didVerifySucceed()
        }));
        return (a.useEffect(() => {
            let e = (0, r.default)(t);
            null != e && i.default.authorizePayment(e), (0, u.trackAppUIViewed)("authorize_payment")
        }, [t]), E) ? (0, n.jsxs)(d.default, {
            children: [(0, n.jsx)("img", {
                alt: "",
                src: s("375673"),
                className: f.marginBottom20
            }), (0, n.jsx)(d.Title, {
                className: f.marginBottom8,
                children: c.default.Messages.PAYMENT_AUTHORIZATION_EXPIRED
            }), (0, n.jsx)(d.SubTitle, {
                className: f.marginBottom40,
                children: c.default.Messages.PAYMENT_AUTH_EXPIRED_SUGGESTION
            })]
        }) : I ? (0, n.jsxs)(d.default, {
            children: [(0, n.jsx)("img", {
                alt: "",
                src: s("73962"),
                className: f.marginBottom20
            }), (0, n.jsx)(d.Title, {
                className: f.marginBottom8,
                children: c.default.Messages.PAYMENT_AUTHORIZATION_SUCCEEDED
            }), (0, n.jsx)(d.SubTitle, {
                className: f.marginBottom40,
                children: c.default.Messages.PAYMENT_AUTH_SUCCEEDED_SUGGESTION
            })]
        }) : (0, n.jsxs)(d.default, {
            children: [(0, n.jsx)(d.AuthSpinner, {}), (0, n.jsx)(d.Title, {
                children: c.default.Messages.PAYMENT_AUTHORIZING
            })]
        })
    }
}