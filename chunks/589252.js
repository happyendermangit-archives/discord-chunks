function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return C
        }
    }), s("222007");
    var n = s("37983"),
        o = s("884691"),
        a = s("414456"),
        l = s.n(a),
        r = s("77078"),
        i = s("476765"),
        u = s("345327"),
        c = s("467413"),
        d = s("494823"),
        h = s("182893");

    function C(e) {
        let {
            alpha2: t,
            countryCode: s,
            forceMode: a,
            label: C,
            error: f,
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
        } = e, M = (0, i.useUID)(), [_, O] = o.useState(!1), k = (0, u.shouldShowCountryCodeSelector)(a, x);
        return (0, n.jsx)(r.FormItem, {
            title: C,
            error: f,
            className: m,
            required: p,
            tag: "label",
            htmlFor: M,
            children: (0, n.jsxs)("div", {
                className: l(h.input, d.input, I, {
                    [h.error]: null != f,
                    [h.focused]: _
                }),
                children: [(0, n.jsx)(c.default, {
                    show: k,
                    alpha2: t,
                    countryCode: s
                }), (0, n.jsx)(r.TextInput, {
                    id: M,
                    name: "email",
                    type: a === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
                    value: x,
                    inputRef: N,
                    placeholder: v,
                    "aria-label": C,
                    required: p,
                    onChange: function(e) {
                        let t = (0, u.shouldShowCountryCodeSelector)(a, e) ? s : "";
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