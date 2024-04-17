function(e, t, s) {
    "use strict";
    s.r(t), s("47120");
    var n = s("735250"),
        a = s("470079"),
        l = s("120356"),
        i = s.n(l),
        r = s("442837"),
        u = s("144114"),
        o = s("742458"),
        d = s("541692"),
        c = s("952802"),
        f = s("819570"),
        E = s("441674"),
        I = s("815660"),
        _ = s("689938"),
        h = s("605094"),
        p = s("794711");
    t.default = () => {
        let [e, t] = a.useState(""), [l, T] = a.useState(""), [N, g] = a.useState(!1), [m, A] = a.useState(!1), [S, v] = a.useState(null), [C, O] = a.useState(null), R = (0, r.useStateFromStores)([d.default], () => d.default.getCountryCode()), x = R.code.split(" ")[0], D = async () => {
            try {
                await u.default.resendCode(e)
            } catch (e) {
                O(e.body.message)
            }
        }, L = async () => {
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
        }, P = (0, n.jsxs)(f.default, {
            children: [(0, n.jsx)(f.Image, {
                src: s("292824")
            }), (0, n.jsxs)(f.Title, {
                className: i()(p.marginTop20, h.flex, h.justifyCenter, h.alignCenter),
                children: [_.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, n.jsx)(E.default, {
                    className: p.marginLeft8
                })]
            })]
        });
        return m ? P : (0, n.jsxs)(f.default, {
            children: [(0, n.jsx)(f.Title, {
                children: _.default.Messages.ENTER_CODE
            }), (0, n.jsx)(f.SubTitle, {
                className: p.marginTop8,
                children: _.default.Messages.VERIFY_PHONE_FOR_SUPPORT
            }), (0, n.jsxs)(f.Block, {
                className: p.marginTop20,
                children: [(0, n.jsx)(c.default, {
                    label: _.default.Messages.FORM_LABEL_PHONE_NUMBER,
                    alpha2: R.alpha2,
                    countryCode: x,
                    value: e,
                    autoComplete: "off",
                    spellCheck: "false",
                    onChange: t,
                    forceMode: o.PhoneOrEmailSelectorForceMode.PHONE,
                    error: S
                }), (0, n.jsx)(f.Input, {
                    className: p.marginTop20,
                    label: _.default.Messages.CONFIRMATION_CODE,
                    value: l,
                    onChange: T,
                    maxLength: I.PHONE_VERIFICATION_CODE_NUM_DIGITS,
                    error: C
                }), (0, n.jsx)(f.Button, {
                    size: f.Button.Sizes.SMALL,
                    look: f.Button.Looks.LINK,
                    onClick: D,
                    children: _.default.Messages.RESEND_CODE
                }), (0, n.jsx)(f.Button, {
                    className: p.marginTop20,
                    onClick: L,
                    submitting: N,
                    children: _.default.Messages.DONE
                })]
            })]
        })
    }
}