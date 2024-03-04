function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFormValidation: function() {
            return s
        }
    });
    var r = n("884691"),
        i = n("388032"),
        o = n("240849");

    function s(e, t, n) {
        let {
            validationBehavior: s,
            focus: a
        } = e;
        (0, o.useLayoutEffect)(() => {
            if ("native" === s && (null == n ? void 0 : n.current)) {
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
        let c = (0, o.useEffectEvent)(() => {
                t.resetValidation()
            }),
            u = (0, o.useEffectEvent)(e => {
                var r, o;
                !t.displayValidation.isInvalid && t.commitValidation();
                let s = null == n ? void 0 : null === (r = n.current) || void 0 === r ? void 0 : r.form;
                !e.defaultPrevented && n && s && function(e) {
                    for (let t = 0; t < e.elements.length; t++) {
                        let n = e.elements[t];
                        if (!n.validity.valid) return n
                    }
                    return null
                }(s) === n.current && (a ? a() : null === (o = n.current) || void 0 === o || o.focus(), (0, i.setInteractionModality)("keyboard")), e.preventDefault()
            }),
            d = (0, o.useEffectEvent)(() => {
                t.commitValidation()
            });
        (0, r.useEffect)(() => {
            let e = null == n ? void 0 : n.current;
            if (!e) return;
            let t = e.form;
            return e.addEventListener("invalid", u), e.addEventListener("change", d), null == t || t.addEventListener("reset", c), () => {
                e.removeEventListener("invalid", u), e.removeEventListener("change", d), null == t || t.removeEventListener("reset", c)
            }
        }, [n, u, d, c, s])
    }
}