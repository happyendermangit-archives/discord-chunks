function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return f
        }
    }), s("47120");
    var n = s("735250"),
        o = s("470079"),
        l = s("120356"),
        a = s.n(l),
        r = s("481060"),
        i = s("153124"),
        u = s("742458"),
        c = s("766650"),
        d = s("699359"),
        h = s("12349");

    function f(e) {
        let {
            alpha2: t,
            countryCode: s,
            forceMode: l,
            label: f,
            error: C,
            className: m,
            required: p,
            value: x,
            setRef: N,
            placeholder: v,
            autoFocus: A,
            maxLength: g,
            spellCheck: y,
            autoComplete: j,
            autoCapitalize: T,
            autoCorrect: S,
            onChange: E,
            inputClassName: I
        } = e, _ = (0, i.useUID)(), [M, O] = o.useState(!1), k = (0, u.shouldShowCountryCodeSelector)(l, x);
        return (0, n.jsx)(r.FormItem, {
            title: f,
            error: C,
            className: m,
            required: p,
            tag: "label",
            htmlFor: _,
            children: (0, n.jsxs)("div", {
                className: a()(h.input, d.input, I, {
                    [h.error]: null != C,
                    [h.focused]: M
                }),
                children: [(0, n.jsx)(c.default, {
                    show: k,
                    alpha2: t,
                    countryCode: s
                }), (0, n.jsx)(r.TextInput, {
                    id: _,
                    name: "email",
                    type: l === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
                    value: x,
                    inputRef: N,
                    placeholder: v,
                    "aria-label": f,
                    required: p,
                    onChange: function(e) {
                        let t = (0, u.shouldShowCountryCodeSelector)(l, e) ? s : "";
                        E(e, t)
                    },
                    autoComplete: j,
                    autoCapitalize: T,
                    autoCorrect: S,
                    autoFocus: A,
                    maxLength: g,
                    spellCheck: y,
                    className: d.inputWrapper,
                    inputClassName: d.inputField,
                    onFocus: () => O(!0),
                    onBlur: () => O(!1)
                })]
            })
        })
    }
}