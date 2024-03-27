function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_VALIDATION_RESULT: function() {
            return o
        },
        mergeValidation: function() {
            return p
        },
        privateValidationStateProp: function() {
            return u
        },
        useFormValidationState: function() {
            return c
        }
    });
    var r = n("470079");
    let i = {
            badInput: !1,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: !1,
            rangeUnderflow: !1,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valueMissing: !1,
            valid: !0
        },
        a = {
            ...i,
            customError: !0,
            valid: !1
        },
        o = {
            isInvalid: !1,
            validationDetails: i,
            validationErrors: []
        },
        s = (0, r.createContext)({}),
        u = "__formValidationState" + Date.now();

    function c(e) {
        if (e[u]) {
            let {
                realtimeValidation: t,
                displayValidation: n,
                updateValidation: r,
                resetValidation: i,
                commitValidation: a
            } = e[u];
            return {
                realtimeValidation: t,
                displayValidation: n,
                updateValidation: r,
                resetValidation: i,
                commitValidation: a
            }
        }
        return function(e) {
            let {
                isInvalid: t,
                validationState: n,
                name: i,
                value: u,
                builtinValidation: c,
                validate: p,
                validationBehavior: h = "aria"
            } = e;
            n && (t || (t = "invalid" === n));
            let m = t ? {
                    isInvalid: !0,
                    validationErrors: [],
                    validationDetails: a
                } : null,
                g = (0, r.useMemo)(() => d(function(e, t) {
                    if ("function" == typeof e) {
                        let n = e(t);
                        if (n && "boolean" != typeof n) return l(n)
                    }
                    return []
                }(p, u)), [p, u]);
            (null == c ? void 0 : c.validationDetails.valid) && (c = null);
            let _ = (0, r.useContext)(s),
                b = (0, r.useMemo)(() => i ? Array.isArray(i) ? i.flatMap(e => l(_[e])) : l(_[i]) : [], [_, i]),
                [v, y] = (0, r.useState)(_),
                [E, S] = (0, r.useState)(!1);
            _ !== v && (y(_), S(!1));
            let x = (0, r.useMemo)(() => d(E ? [] : b), [E, b]),
                w = (0, r.useRef)(o),
                [T, C] = (0, r.useState)(o),
                D = (0, r.useRef)(o),
                [O, M] = (0, r.useState)(!1);
            return (0, r.useEffect)(() => {
                if (!O) return;
                M(!1);
                let e = g || c || w.current;
                !f(e, D.current) && (D.current = e, C(e))
            }), {
                realtimeValidation: m || x || g || c || o,
                displayValidation: "native" === h ? m || x || T : m || x || g || c || T,
                updateValidation(e) {
                    "aria" !== h || f(T, e) ? w.current = e : C(e)
                },
                resetValidation() {
                    !f(o, D.current) && (D.current = o, C(o)), "native" === h && M(!1), S(!0)
                },
                commitValidation() {
                    "native" === h && M(!0), S(!0)
                }
            }
        }(e)
    }

    function l(e) {
        return e ? Array.isArray(e) ? e : [e] : []
    }

    function d(e) {
        return e.length ? {
            isInvalid: !0,
            validationErrors: e,
            validationDetails: a
        } : null
    }

    function f(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n)
    }

    function p(...e) {
        let t = new Set,
            n = !1,
            r = {
                ...i
            };
        for (let i of e) {
            for (let e of i.validationErrors) t.add(e);
            for (let e in n || (n = i.isInvalid), r) r[e] || (r[e] = i.validationDetails[e])
        }
        return r.valid = !n, {
            isInvalid: n,
            validationErrors: [...t],
            validationDetails: r
        }
    }
}