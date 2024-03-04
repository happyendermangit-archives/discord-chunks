function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFormValidationState: function() {
            return u
        },
        DEFAULT_VALIDATION_RESULT: function() {
            return s
        },
        privateValidationStateProp: function() {
            return c
        },
        mergeValidation: function() {
            return p
        }
    }), n("881410"), n("222007");
    var r = n("884691");
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
        o = {
            ...i,
            customError: !0,
            valid: !1
        },
        s = {
            isInvalid: !1,
            validationDetails: i,
            validationErrors: []
        },
        a = (0, r.createContext)({}),
        c = "__formValidationState" + Date.now();

    function u(e) {
        if (e[c]) {
            let {
                realtimeValidation: t,
                displayValidation: n,
                updateValidation: r,
                resetValidation: i,
                commitValidation: o
            } = e[c];
            return {
                realtimeValidation: t,
                displayValidation: n,
                updateValidation: r,
                resetValidation: i,
                commitValidation: o
            }
        }
        return function(e) {
            let {
                isInvalid: t,
                validationState: n,
                name: i,
                value: c,
                builtinValidation: u,
                validate: p,
                validationBehavior: h = "aria"
            } = e;
            n && (t || (t = "invalid" === n));
            let v = t ? {
                    isInvalid: !0,
                    validationErrors: [],
                    validationDetails: o
                } : null,
                g = (0, r.useMemo)(() => l(function(e, t) {
                    if ("function" == typeof e) {
                        let n = e(t);
                        if (n && "boolean" != typeof n) return d(n)
                    }
                    return []
                }(p, c)), [p, c]);
            (null == u ? void 0 : u.validationDetails.valid) && (u = null);
            let b = (0, r.useContext)(a),
                m = (0, r.useMemo)(() => i ? Array.isArray(i) ? i.flatMap(e => d(b[e])) : d(b[i]) : [], [b, i]),
                [y, x] = (0, r.useState)(b),
                [w, S] = (0, r.useState)(!1);
            b !== y && (x(b), S(!1));
            let k = (0, r.useMemo)(() => l(w ? [] : m), [w, m]),
                E = (0, r.useRef)(s),
                [_, M] = (0, r.useState)(s),
                D = (0, r.useRef)(s),
                [C, P] = (0, r.useState)(!1);
            return (0, r.useEffect)(() => {
                if (!C) return;
                P(!1);
                let e = g || u || E.current;
                !f(e, D.current) && (D.current = e, M(e))
            }), {
                realtimeValidation: v || k || g || u || s,
                displayValidation: "native" === h ? v || k || _ : v || k || g || u || _,
                updateValidation(e) {
                    "aria" !== h || f(_, e) ? E.current = e : M(e)
                },
                resetValidation() {
                    !f(s, D.current) && (D.current = s, M(s)), "native" === h && P(!1), S(!0)
                },
                commitValidation() {
                    "native" === h && P(!0), S(!0)
                }
            }
        }(e)
    }

    function d(e) {
        return e ? Array.isArray(e) ? e : [e] : []
    }

    function l(e) {
        return e.length ? {
            isInvalid: !0,
            validationErrors: e,
            validationDetails: o
        } : null
    }

    function f(e, t) {
        return e === t || e && t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(e => {
            let [n, r] = e;
            return t.validationDetails[n] === r
        })
    }

    function p() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = new Set,
            o = !1,
            s = {
                ...i
            };
        for (let e of t) {
            for (let t of e.validationErrors) r.add(t);
            for (let t in o || (o = e.isInvalid), s) s[t] || (s[t] = e.validationDetails[t])
        }
        return s.valid = !o, {
            isInvalid: o,
            validationErrors: [...r],
            validationDetails: s
        }
    }
}