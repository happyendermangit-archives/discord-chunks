function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("446674"),
        u = n("878720"),
        o = n("345327"),
        d = n("25033"),
        c = n("589252"),
        f = n("124969"),
        E = n("578706"),
        _ = n("482931"),
        I = n("782340"),
        h = n("125047"),
        p = n("890957"),
        m = () => {
            let [e, t] = a.useState(""), [l, m] = a.useState(""), [T, N] = a.useState(!1), [g, A] = a.useState(!1), [S, C] = a.useState(null), [v, O] = a.useState(null), R = (0, i.useStateFromStores)([d.default], () => d.default.getCountryCode()), L = R.code.split(" ")[0], x = async () => {
                try {
                    await u.default.resendCode(e)
                } catch (e) {
                    O(e.body.message)
                }
            }, M = async () => {
                N(!0);
                try {
                    let {
                        token: t
                    } = await u.default.verifyPhone(L + e, l);
                    C(null), O(null), A(!0), u.default.validatePhoneForSupport(t)
                } catch (e) {
                    e.body.message ? (C(null), O(e.body.message)) : (C(e.body.phone), O(e.body.code))
                } finally {
                    N(!1)
                }
            }, D = (0, s.jsxs)(f.default, {
                children: [(0, s.jsx)(f.Image, {
                    src: n("229483")
                }), (0, s.jsxs)(f.Title, {
                    className: r(p.marginTop20, h.flex, h.justifyCenter, h.alignCenter),
                    children: [I.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(E.default, {
                        className: p.marginLeft8
                    })]
                })]
            });
            return g ? D : (0, s.jsxs)(f.default, {
                children: [(0, s.jsx)(f.Title, {
                    children: I.default.Messages.ENTER_CODE
                }), (0, s.jsx)(f.SubTitle, {
                    className: p.marginTop8,
                    children: I.default.Messages.VERIFY_PHONE_FOR_SUPPORT
                }), (0, s.jsxs)(f.Block, {
                    className: p.marginTop20,
                    children: [(0, s.jsx)(c.default, {
                        label: I.default.Messages.FORM_LABEL_PHONE_NUMBER,
                        alpha2: R.alpha2,
                        countryCode: L,
                        value: e,
                        autoComplete: "off",
                        spellCheck: "false",
                        onChange: t,
                        forceMode: o.PhoneOrEmailSelectorForceMode.PHONE,
                        error: S
                    }), (0, s.jsx)(f.Input, {
                        className: p.marginTop20,
                        label: I.default.Messages.CONFIRMATION_CODE,
                        value: l,
                        onChange: m,
                        maxLength: _.PHONE_VERIFICATION_CODE_NUM_DIGITS,
                        error: v
                    }), (0, s.jsx)(f.Button, {
                        size: f.Button.Sizes.SMALL,
                        look: f.Button.Looks.LINK,
                        onClick: x,
                        children: I.default.Messages.RESEND_CODE
                    }), (0, s.jsx)(f.Button, {
                        className: p.marginTop20,
                        onClick: M,
                        submitting: T,
                        children: I.default.Messages.DONE
                    })]
                })]
            })
        }
}