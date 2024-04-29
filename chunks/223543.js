function(e, t, n) {
    "use strict";
    n.r(t);
    var s = n("735250"),
        a = n("470079"),
        l = n("442837"),
        i = n("893776"),
        r = n("129293"),
        u = n("108427"),
        o = n("314897"),
        d = n("819570"),
        c = n("689938"),
        f = n("611273");
    t.default = e => {
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
                src: n("375673"),
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
                src: n("73962"),
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