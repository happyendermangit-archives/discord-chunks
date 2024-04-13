function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        i = n("803997"),
        l = n.n(i),
        r = n("442837"),
        u = n("144114"),
        o = n("742458"),
        d = n("541692"),
        c = n("952802"),
        f = n("819570"),
        E = n("441674"),
        I = n("815660"),
        h = n("689938"),
        _ = n("605094"),
        p = n("794711");
    t.default = () => {
        let [e, t] = a.useState(""), [i, T] = a.useState(""), [m, N] = a.useState(!1), [g, A] = a.useState(!1), [S, v] = a.useState(null), [O, C] = a.useState(null), R = (0, r.useStateFromStores)([d.default], () => d.default.getCountryCode()), x = R.code.split(" ")[0], D = async () => {
            try {
                await u.default.resendCode(e)
            } catch (e) {
                C(e.body.message)
            }
        }, P = async () => {
            N(!0);
            try {
                let {
                    token: t
                } = await u.default.verifyPhone(x + e, i);
                v(null), C(null), A(!0), u.default.validatePhoneForSupport(t)
            } catch (e) {
                e.body.message ? (v(null), C(e.body.message)) : (v(e.body.phone), C(e.body.code))
            } finally {
                N(!1)
            }
        }, L = (0, s.jsxs)(f.default, {
            children: [(0, s.jsx)(f.Image, {
                src: n("292824")
            }), (0, s.jsxs)(f.Title, {
                className: l()(p.marginTop20, _.flex, _.justifyCenter, _.alignCenter),
                children: [h.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(E.default, {
                    className: p.marginLeft8
                })]
            })]
        });
        return g ? L : (0, s.jsxs)(f.default, {
            children: [(0, s.jsx)(f.Title, {
                children: h.default.Messages.ENTER_CODE
            }), (0, s.jsx)(f.SubTitle, {
                className: p.marginTop8,
                children: h.default.Messages.VERIFY_PHONE_FOR_SUPPORT
            }), (0, s.jsxs)(f.Block, {
                className: p.marginTop20,
                children: [(0, s.jsx)(c.default, {
                    label: h.default.Messages.FORM_LABEL_PHONE_NUMBER,
                    alpha2: R.alpha2,
                    countryCode: x,
                    value: e,
                    autoComplete: "off",
                    spellCheck: "false",
                    onChange: t,
                    forceMode: o.PhoneOrEmailSelectorForceMode.PHONE,
                    error: S
                }), (0, s.jsx)(f.Input, {
                    className: p.marginTop20,
                    label: h.default.Messages.CONFIRMATION_CODE,
                    value: i,
                    onChange: T,
                    maxLength: I.PHONE_VERIFICATION_CODE_NUM_DIGITS,
                    error: O
                }), (0, s.jsx)(f.Button, {
                    size: f.Button.Sizes.SMALL,
                    look: f.Button.Looks.LINK,
                    onClick: D,
                    children: h.default.Messages.RESEND_CODE
                }), (0, s.jsx)(f.Button, {
                    className: p.marginTop20,
                    onClick: P,
                    submitting: m,
                    children: h.default.Messages.DONE
                })]
            })]
        })
    }
}