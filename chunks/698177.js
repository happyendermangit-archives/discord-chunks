function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        l = n("120356"),
        i = n.n(l),
        r = n("442837"),
        u = n("144114"),
        o = n("742458"),
        d = n("541692"),
        c = n("952802"),
        f = n("819570"),
        E = n("441674"),
        _ = n("815660"),
        I = n("689938"),
        p = n("605094"),
        h = n("794711");
    t.default = () => {
        let [e, t] = a.useState(""), [l, T] = a.useState(""), [N, g] = a.useState(!1), [m, A] = a.useState(!1), [S, v] = a.useState(null), [C, O] = a.useState(null), R = (0, r.useStateFromStores)([d.default], () => d.default.getCountryCode()), x = R.code.split(" ")[0], L = async () => {
            try {
                await u.default.resendCode(e)
            } catch (e) {
                O(e.body.message)
            }
        }, M = async () => {
            g(!0);
            try {
                let {
                    token: t
                } = await u.default.verifyPhone(x + e, l);
                v(null), O(null), A(!0), u.default.validatePhoneForSupport(t)
            } catch (e) {
                e.body.message ? (v(null), O(e.body.message)) : (v(e.body.phone), O(e.body.code))
            } finally {
                g(!1)
            }
        }, D = (0, s.jsxs)(f.default, {
            children: [(0, s.jsx)(f.Image, {
                src: n("292824")
            }), (0, s.jsxs)(f.Title, {
                className: i()(h.marginTop20, p.flex, p.justifyCenter, p.alignCenter),
                children: [I.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(E.default, {
                    className: h.marginLeft8
                })]
            })]
        });
        return m ? D : (0, s.jsxs)(f.default, {
            children: [(0, s.jsx)(f.Title, {
                children: I.default.Messages.ENTER_CODE
            }), (0, s.jsx)(f.SubTitle, {
                className: h.marginTop8,
                children: I.default.Messages.VERIFY_PHONE_FOR_SUPPORT
            }), (0, s.jsxs)(f.Block, {
                className: h.marginTop20,
                children: [(0, s.jsx)(c.default, {
                    label: I.default.Messages.FORM_LABEL_PHONE_NUMBER,
                    alpha2: R.alpha2,
                    countryCode: x,
                    value: e,
                    autoComplete: "off",
                    spellCheck: "false",
                    onChange: t,
                    forceMode: o.PhoneOrEmailSelectorForceMode.PHONE,
                    error: S
                }), (0, s.jsx)(f.Input, {
                    className: h.marginTop20,
                    label: I.default.Messages.CONFIRMATION_CODE,
                    value: l,
                    onChange: T,
                    maxLength: _.PHONE_VERIFICATION_CODE_NUM_DIGITS,
                    error: C
                }), (0, s.jsx)(f.Button, {
                    size: f.Button.Sizes.SMALL,
                    look: f.Button.Looks.LINK,
                    onClick: L,
                    children: I.default.Messages.RESEND_CODE
                }), (0, s.jsx)(f.Button, {
                    className: h.marginTop20,
                    onClick: M,
                    submitting: N,
                    children: I.default.Messages.DONE
                })]
            })]
        })
    }
}