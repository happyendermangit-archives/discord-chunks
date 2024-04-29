function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useNumberField: function() {
            return V
        }
    });
    var r = n("258669"),
        i = n("54506"),
        a = n("805131"),
        o = n("482163"),
        s = n("111821"),
        u = n("963268"),
        c = n("548598"),
        l = n("409170"),
        d = n("816510"),
        f = n("710492"),
        p = n("197794"),
        h = n("601770"),
        m = n("532861"),
        g = n("227987"),
        _ = n("114931"),
        b = n("146929"),
        v = n("33189"),
        y = n("909276"),
        E = n("362498"),
        S = n("640263"),
        x = n("827781"),
        w = n("340998"),
        T = n("997859"),
        C = n("601694"),
        D = n("180176"),
        O = n("497334"),
        M = n("699384"),
        A = n("60776"),
        k = n("903451"),
        R = n("372623"),
        N = n("596553"),
        I = n("107274"),
        L = n("998549"),
        P = n("338558"),
        F = n("182823"),
        B = n("470079"),
        U = n("201284"),
        Y = n("612001"),
        j = n("640900"),
        z = n("602607"),
        H = n("982631"),
        G = {};

    function V(e, t, n) {
        var r;
        let i, {
                id: a,
                decrementAriaLabel: o,
                incrementAriaLabel: s,
                isDisabled: u,
                isReadOnly: c,
                isRequired: l,
                minValue: d,
                maxValue: f,
                autoFocus: p,
                label: h,
                formatOptions: m,
                onBlur: g = () => {},
                onFocus: _,
                onFocusChange: b,
                onKeyDown: v,
                onKeyUp: y,
                description: E,
                errorMessage: S,
                ...x
            } = e,
            {
                increment: w,
                incrementToMax: T,
                decrement: C,
                decrementToMin: D,
                numberValue: O,
                inputValue: M,
                commit: A,
                commitValidation: k
            } = t;
        let R = (0, z.useLocalizedStringFormatter)((r = G) && r.__esModule ? r.default : r, "@react-aria/numberfield"),
            N = (0, F.useId)(a),
            {
                focusProps: I
            } = (0, Y.useFocus)({
                onBlur() {
                    A()
                }
            }),
            L = (0, z.useNumberFormatter)(m),
            P = (0, B.useMemo)(() => L.resolvedOptions(), [L]),
            V = (0, z.useNumberFormatter)({
                ...m,
                currencySign: void 0
            }),
            $ = (0, B.useMemo)(() => isNaN(O) ? "" : V.format(O), [V, O]),
            {
                spinButtonProps: W,
                incrementButtonProps: K,
                decrementButtonProps: q
            } = (0, H.useSpinButton)({
                isDisabled: u,
                isReadOnly: c,
                isRequired: l,
                maxValue: f,
                minValue: d,
                onIncrement: w,
                onIncrementToMax: T,
                onDecrement: C,
                onDecrementToMin: D,
                value: O,
                textValue: $
            }),
            [Q, Z] = (0, B.useState)(!1),
            {
                focusWithinProps: X
            } = (0, Y.useFocusWithin)({
                isDisabled: u,
                onFocusWithinChange: Z
            }),
            J = (0, B.useCallback)(e => {
                !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? w() : e.deltaY < 0 && C())
            }, [C, w]),
            ee = u || c || !Q;
        (0, Y.useScrollWheel)({
            onScroll: J,
            isDisabled: ee
        }, n);
        let et = P.maximumFractionDigits > 0,
            en = isNaN(t.minValue) || t.minValue < 0,
            er = "numeric";
        (0, F.isIPhone)() ? en ? er = "text" : et && (er = "decimal"): (0, F.isAndroid)() && (en ? er = "numeric" : et && (er = "decimal"));
        let ei = (0, F.filterDOMProps)(e),
            ea = (0, B.useCallback)(e => {
                "Enter" === e.key ? (A(), k()) : e.continuePropagation()
            }, [A, k]),
            {
                isInvalid: eo,
                validationErrors: es,
                validationDetails: eu
            } = t.displayValidation,
            {
                labelProps: ec,
                inputProps: el,
                descriptionProps: ed,
                errorMessageProps: ef
            } = (0, j.useFormattedTextField)({
                ...x,
                ...ei,
                name: void 0,
                label: h,
                autoFocus: p,
                isDisabled: u,
                isReadOnly: c,
                isRequired: l,
                validate: void 0,
                [U.privateValidationStateProp]: t,
                value: M,
                defaultValue: void 0,
                autoComplete: "off",
                "aria-label": e["aria-label"] || null,
                "aria-labelledby": e["aria-labelledby"] || null,
                id: N,
                type: "text",
                inputMode: er,
                onChange: e => {
                    t.validate(e) && t.setInputValue(e)
                },
                onBlur: g,
                onFocus: _,
                onFocusChange: b,
                onKeyDown: (0, B.useMemo)(() => (0, F.chain)(ea, v), [ea, v]),
                onKeyUp: y,
                description: E,
                errorMessage: S
            }, t, n);
        (0, F.useFormReset)(n, t.numberValue, t.setNumberValue);
        let ep = (0, F.mergeProps)(W, I, el, {
            role: null,
            "aria-roledescription": (0, F.isIOS)() ? null : R.format("numberField"),
            "aria-valuemax": null,
            "aria-valuemin": null,
            "aria-valuenow": null,
            "aria-valuetext": null,
            autoCorrect: "off",
            spellCheck: "false"
        });
        "native" === e.validationBehavior && (ep["aria-required"] = void 0);
        let eh = e => {
                document.activeElement !== n.current && ("mouse" === e.pointerType ? n.current.focus() : e.target.focus())
            },
            em = e["aria-label"] || ("string" == typeof e.label ? e.label : "");
        !em && (i = null != e.label ? ec.id : e["aria-labelledby"]);
        let eg = (0, F.useId)(),
            e_ = (0, F.useId)(),
            eb = (0, F.mergeProps)(K, {
                "aria-label": s || R.format("increase", {
                    fieldLabel: em
                }).trim(),
                id: i && !s ? eg : null,
                "aria-labelledby": i && !s ? `${eg} ${i}` : null,
                "aria-controls": N,
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                allowFocusWhenDisabled: !0,
                isDisabled: !t.canIncrement,
                onPressStart: eh
            }),
            ev = (0, F.mergeProps)(q, {
                "aria-label": o || R.format("decrease", {
                    fieldLabel: em
                }).trim(),
                id: i && !o ? e_ : null,
                "aria-labelledby": i && !o ? `${e_} ${i}` : null,
                "aria-controls": N,
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                allowFocusWhenDisabled: !0,
                isDisabled: !t.canDecrement,
                onPressStart: eh
            });
        return {
            groupProps: {
                ...X,
                role: "group",
                "aria-disabled": u,
                "aria-invalid": eo ? "true" : void 0
            },
            labelProps: ec,
            inputProps: ep,
            incrementButtonProps: eb,
            decrementButtonProps: ev,
            errorMessageProps: ef,
            descriptionProps: ed,
            isInvalid: eo,
            validationErrors: es,
            validationDetails: eu
        }
    }
    G = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": a.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": u.default,
        "en-US": c.default,
        "es-ES": l.default,
        "et-EE": d.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": m.default,
        "hu-HU": g.default,
        "it-IT": _.default,
        "ja-JP": b.default,
        "ko-KR": v.default,
        "lt-LT": y.default,
        "lv-LV": E.default,
        "nb-NO": S.default,
        "nl-NL": x.default,
        "pl-PL": w.default,
        "pt-BR": T.default,
        "pt-PT": C.default,
        "ro-RO": D.default,
        "ru-RU": O.default,
        "sk-SK": M.default,
        "sl-SI": A.default,
        "sr-SP": k.default,
        "sv-SE": R.default,
        "tr-TR": N.default,
        "uk-UA": I.default,
        "zh-CN": L.default,
        "zh-TW": P.default
    }
}