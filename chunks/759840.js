function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFormValidation: function() {
            return o
        }
    });
    var r = n("884691"),
        a = n("388032"),
        i = n("240849");

    function o(e, t, n) {
        let {
            validationBehavior: o,
            focus: s
        } = e;
        (0, i.useLayoutEffect)(() => {
            if ("native" === o && (null == n ? void 0 : n.current)) {
                let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
                n.current.setCustomValidity(e), !n.current.hasAttribute("title") && (n.current.title = ""), !t.realtimeValidation.isInvalid && t.updateValidation(function(e) {
                    let t;
                    return {
                        isInvalid: !e.validity.valid,
                        validationDetails: {
                            badInput: (t = e.validity).badInput,
                            customError: t.customError,
                            patternMismatch: t.patternMismatch,
                            rangeOverflow: t.rangeOverflow,
                            rangeUnderflow: t.rangeUnderflow,
                            stepMismatch: t.stepMismatch,
                            tooLong: t.tooLong,
                            tooShort: t.tooShort,
                            typeMismatch: t.typeMismatch,
                            valueMissing: t.valueMissing,
                            valid: t.valid
                        },
                        validationErrors: e.validationMessage ? [e.validationMessage] : []
                    }
                }(n.current))
            }
        });
        let c = (0, i.useEffectEvent)(() => {
                t.resetValidation()
            }),
            l = (0, i.useEffectEvent)(e => {
                var r, i;
                !t.displayValidation.isInvalid && t.commitValidation();
                let o = null == n ? void 0 : null === (r = n.current) || void 0 === r ? void 0 : r.form;
                !e.defaultPrevented && n && o && function(e) {
                    for (let t = 0; t < e.elements.length; t++) {
                        let n = e.elements[t];
                        if (!n.validity.valid) return n
                    }
                    return null
                }(o) === n.current && (s ? s() : null === (i = n.current) || void 0 === i || i.focus(), (0, a.setInteractionModality)("keyboard")), e.preventDefault()
            }),
            u = (0, i.useEffectEvent)(() => {
                t.commitValidation()
            });
        (0, r.useEffect)(() => {
            let e = null == n ? void 0 : n.current;
            if (!e) return;
            let t = e.form;
            return e.addEventListener("invalid", l), e.addEventListener("change", u), null == t || t.addEventListener("reset", c), () => {
                e.removeEventListener("invalid", l), e.removeEventListener("change", u), null == t || t.removeEventListener("reset", c)
            }
        }, [n, l, u, c, o])
    }
}