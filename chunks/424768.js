function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useNumberField: function() {
            return q
        }
    }), n("222007");
    var r = n("194215"),
        i = n("996341"),
        o = n("426143"),
        s = n("73107"),
        a = n("532449"),
        c = n("7518"),
        u = n("340156"),
        d = n("933841"),
        l = n("967153"),
        f = n("143075"),
        p = n("271849"),
        h = n("603526"),
        v = n("777050"),
        g = n("457972"),
        b = n("963929"),
        m = n("92434"),
        y = n("814129"),
        x = n("809867"),
        w = n("199178"),
        S = n("258683"),
        k = n("9785"),
        E = n("175726"),
        _ = n("603820"),
        M = n("358788"),
        D = n("520106"),
        C = n("854901"),
        P = n("958008"),
        T = n("858117"),
        A = n("694756"),
        R = n("315530"),
        I = n("651509"),
        O = n("143540"),
        L = n("891224"),
        j = n("820959"),
        N = n("240849"),
        F = n("884691"),
        B = n("444324"),
        z = n("388032"),
        K = n("381084"),
        V = n("564341"),
        U = n("277184"),
        H = {};

    function q(e, t, n) {
        var r;
        let i, {
                id: o,
                decrementAriaLabel: s,
                incrementAriaLabel: a,
                isDisabled: c,
                isReadOnly: u,
                isRequired: d,
                minValue: l,
                maxValue: f,
                autoFocus: p,
                label: h,
                formatOptions: v,
                onBlur: g = () => {},
                onFocus: b,
                onFocusChange: m,
                onKeyDown: y,
                onKeyUp: x,
                description: w,
                errorMessage: S,
                ...k
            } = e,
            {
                increment: E,
                incrementToMax: _,
                decrement: M,
                decrementToMin: D,
                numberValue: C,
                inputValue: P,
                commit: T,
                commitValidation: A
            } = t;
        let R = (0, V.useLocalizedStringFormatter)((r = H) && r.__esModule ? r.default : r, "@react-aria/numberfield"),
            I = (0, N.useId)(o),
            {
                focusProps: O
            } = (0, z.useFocus)({
                onBlur() {
                    T()
                }
            }),
            L = (0, V.useNumberFormatter)(v),
            j = (0, F.useMemo)(() => L.resolvedOptions(), [L]),
            q = (0, V.useNumberFormatter)({
                ...v,
                currencySign: void 0
            }),
            G = (0, F.useMemo)(() => isNaN(C) ? "" : q.format(C), [q, C]),
            {
                spinButtonProps: W,
                incrementButtonProps: Z,
                decrementButtonProps: Y
            } = (0, U.useSpinButton)({
                isDisabled: c,
                isReadOnly: u,
                isRequired: d,
                maxValue: f,
                minValue: l,
                onIncrement: E,
                onIncrementToMax: _,
                onDecrement: M,
                onDecrementToMin: D,
                value: C,
                textValue: G
            }),
            [X, J] = (0, F.useState)(!1),
            {
                focusWithinProps: $
            } = (0, z.useFocusWithin)({
                isDisabled: c,
                onFocusWithinChange: J
            }),
            Q = (0, F.useCallback)(e => {
                !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? E() : e.deltaY < 0 && M())
            }, [M, E]),
            ee = c || u || !X;
        (0, z.useScrollWheel)({
            onScroll: Q,
            isDisabled: ee
        }, n);
        let et = j.maximumFractionDigits > 0,
            en = isNaN(t.minValue) || t.minValue < 0,
            er = "numeric";
        (0, N.isIPhone)() ? en ? er = "text" : et && (er = "decimal"): (0, N.isAndroid)() && (en ? er = "numeric" : et && (er = "decimal"));
        let ei = (0, N.filterDOMProps)(e),
            eo = (0, F.useCallback)(e => {
                "Enter" === e.key ? (T(), A()) : e.continuePropagation()
            }, [T, A]),
            {
                isInvalid: es,
                validationErrors: ea,
                validationDetails: ec
            } = t.displayValidation,
            {
                labelProps: eu,
                inputProps: ed,
                descriptionProps: el,
                errorMessageProps: ef
            } = (0, K.useFormattedTextField)({
                ...k,
                ...ei,
                name: void 0,
                label: h,
                autoFocus: p,
                isDisabled: c,
                isReadOnly: u,
                isRequired: d,
                validate: void 0,
                [B.privateValidationStateProp]: t,
                value: P,
                defaultValue: void 0,
                autoComplete: "off",
                "aria-label": e["aria-label"] || null,
                "aria-labelledby": e["aria-labelledby"] || null,
                id: I,
                type: "text",
                inputMode: er,
                onChange: e => {
                    t.validate(e) && t.setInputValue(e)
                },
                onBlur: g,
                onFocus: b,
                onFocusChange: m,
                onKeyDown: (0, F.useMemo)(() => (0, N.chain)(eo, y), [eo, y]),
                onKeyUp: x,
                description: w,
                errorMessage: S
            }, t, n);
        (0, N.useFormReset)(n, t.numberValue, t.setNumberValue);
        let ep = (0, N.mergeProps)(W, O, ed, {
            role: null,
            "aria-roledescription": (0, N.isIOS)() ? null : R.format("numberField"),
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
            ev = e["aria-label"] || ("string" == typeof e.label ? e.label : "");
        !ev && (i = null != e.label ? eu.id : e["aria-labelledby"]);
        let eg = (0, N.useId)(),
            eb = (0, N.useId)(),
            em = (0, N.mergeProps)(Z, {
                "aria-label": a || R.format("increase", {
                    fieldLabel: ev
                }).trim(),
                id: i && !a ? eg : null,
                "aria-labelledby": i && !a ? "".concat(eg, " ").concat(i) : null,
                "aria-controls": I,
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                allowFocusWhenDisabled: !0,
                isDisabled: !t.canIncrement,
                onPressStart: eh
            }),
            ey = (0, N.mergeProps)(Y, {
                "aria-label": s || R.format("decrease", {
                    fieldLabel: ev
                }).trim(),
                id: i && !s ? eb : null,
                "aria-labelledby": i && !s ? "".concat(eb, " ").concat(i) : null,
                "aria-controls": I,
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                allowFocusWhenDisabled: !0,
                isDisabled: !t.canDecrement,
                onPressStart: eh
            });
        return {
            groupProps: {
                ...$,
                role: "group",
                "aria-disabled": c,
                "aria-invalid": es ? "true" : void 0
            },
            labelProps: eu,
            inputProps: ep,
            incrementButtonProps: em,
            decrementButtonProps: ey,
            errorMessageProps: ef,
            descriptionProps: el,
            isInvalid: es,
            validationErrors: ea,
            validationDetails: ec
        }
    }
    H = {
        "ar-AE": r.default,
        "bg-BG": i.default,
        "cs-CZ": o.default,
        "da-DK": s.default,
        "de-DE": a.default,
        "el-GR": c.default,
        "en-US": u.default,
        "es-ES": d.default,
        "et-EE": l.default,
        "fi-FI": f.default,
        "fr-FR": p.default,
        "he-IL": h.default,
        "hr-HR": v.default,
        "hu-HU": g.default,
        "it-IT": b.default,
        "ja-JP": m.default,
        "ko-KR": y.default,
        "lt-LT": x.default,
        "lv-LV": w.default,
        "nb-NO": S.default,
        "nl-NL": k.default,
        "pl-PL": E.default,
        "pt-BR": _.default,
        "pt-PT": M.default,
        "ro-RO": D.default,
        "ru-RU": C.default,
        "sk-SK": P.default,
        "sl-SI": T.default,
        "sr-SP": A.default,
        "sv-SE": R.default,
        "tr-TR": I.default,
        "uk-UA": O.default,
        "zh-CN": L.default,
        "zh-TW": j.default
    }
}