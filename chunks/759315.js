function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        i = n.n(l),
        r = n("446674"),
        u = n("878720"),
        o = n("345327"),
        d = n("25033"),
        c = n("589252"),
        f = n("124969"),
        E = n("578706"),
        I = n("482931"),
        _ = n("782340"),
        h = n("125047"),
        p = n("890957"),
        T = () => {
            let [e, t] = a.useState(""), [l, T] = a.useState(""), [N, m] = a.useState(!1), [g, A] = a.useState(!1), [S, v] = a.useState(null), [O, C] = a.useState(null), R = (0, r.useStateFromStores)([d.default], () => d.default.getCountryCode()), L = R.code.split(" ")[0], x = async () => {
                try {
                    await u.default.resendCode(e)
                } catch (e) {
                    C(e.body.message)
                }
            }, D = async () => {
                m(!0);
                try {
                    let {
                        token: t
                    } = await u.default.verifyPhone(L + e, l);
                    v(null), C(null), A(!0), u.default.validatePhoneForSupport(t)
                } catch (e) {
                    e.body.message ? (v(null), C(e.body.message)) : (v(e.body.phone), C(e.body.code))
                } finally {
                    m(!1)
                }
            }, M = (0, s.jsxs)(f.default, {
                children: [(0, s.jsx)(f.Image, {
                    src: n("229483")
                }), (0, s.jsxs)(f.Title, {
                    className: i(p.marginTop20, h.flex, h.justifyCenter, h.alignCenter),
                    children: [_.default.Messages.MEMBER_VERIFICATION_PHONE_VERIFIED, (0, s.jsx)(E.default, {
                        className: p.marginLeft8
                    })]
                })]
            });
            return g ? M : (0, s.jsxs)(f.default, {
                children: [(0, s.jsx)(f.Title, {
                    children: _.default.Messages.ENTER_CODE
                }), (0, s.jsx)(f.SubTitle, {
                    className: p.marginTop8,
                    children: _.default.Messages.VERIFY_PHONE_FOR_SUPPORT
                }), (0, s.jsxs)(f.Block, {
                    className: p.marginTop20,
                    children: [(0, s.jsx)(c.default, {
                        label: _.default.Messages.FORM_LABEL_PHONE_NUMBER,
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
                        label: _.default.Messages.CONFIRMATION_CODE,
                        value: l,
                        onChange: T,
                        maxLength: I.PHONE_VERIFICATION_CODE_NUM_DIGITS,
                        error: O
                    }), (0, s.jsx)(f.Button, {
                        size: f.Button.Sizes.SMALL,
                        look: f.Button.Looks.LINK,
                        onClick: x,
                        children: _.default.Messages.RESEND_CODE
                    }), (0, s.jsx)(f.Button, {
                        className: p.marginTop20,
                        onClick: D,
                        submitting: N,
                        children: _.default.Messages.DONE
                    })]
                })]
            })
        }
}