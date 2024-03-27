function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFormValidation: function() {
            return o
        }
    });
    var r = n("470079"),
        i = n("612001"),
        a = n("182823");

    function o(e, t, n) {
        let {
            validationBehavior: o,
            focus: s
        } = e;
        (0, a.useLayoutEffect)(() => {
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
        let u = (0, a.useEffectEvent)(() => {
                t.resetValidation()
            }),
            c = (0, a.useEffectEvent)(e => {
                var r, a;
                !t.displayValidation.isInvalid && t.commitValidation();
                let o = null == n ? void 0 : null === (r = n.current) || void 0 === r ? void 0 : r.form;
                !e.defaultPrevented && n && o && function(e) {
                    for (let t = 0; t < e.elements.length; t++) {
                        let n = e.elements[t];
                        if (!n.validity.valid) return n
                    }
                    return null
                }(o) === n.current && (s ? s() : null === (a = n.current) || void 0 === a || a.focus(), (0, i.setInteractionModality)("keyboard")), e.preventDefault()
            }),
            l = (0, a.useEffectEvent)(() => {
                t.commitValidation()
            });
        (0, r.useEffect)(() => {
            let e = null == n ? void 0 : n.current;
            if (!e) return;
            let t = e.form;
            return e.addEventListener("invalid", c), e.addEventListener("change", l), null == t || t.addEventListener("reset", u), () => {
                e.removeEventListener("invalid", c), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", u)
            }
        }, [n, c, l, u, o])
    }
}