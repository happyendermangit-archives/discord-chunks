function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSearchField: function() {
            return j
        }
    });
    var r = n("267948"),
        i = n("573500"),
        a = n("544637"),
        o = n("365739"),
        s = n("999450"),
        u = n("571513"),
        c = n("759480"),
        l = n("230432"),
        d = n("125289"),
        f = n("471162"),
        p = n("874207"),
        h = n("822776"),
        m = n("186824"),
        g = n("923106"),
        _ = n("512996"),
        b = n("937296"),
        v = n("718870"),
        y = n("692746"),
        E = n("945640"),
        S = n("775847"),
        x = n("121407"),
        w = n("746609"),
        T = n("799880"),
        C = n("557511"),
        D = n("399121"),
        O = n("381584"),
        M = n("628116"),
        A = n("572915"),
        k = n("85677"),
        R = n("117926"),
        N = n("556742"),
        I = n("328407"),
        L = n("411510"),
        P = n("257054"),
        F = n("182823"),
        B = n("602607"),
        U = n("640900"),
        Y = {};

    function j(e, t, n) {
        var r;
        let i = (0, B.useLocalizedStringFormatter)((r = Y) && r.__esModule ? r.default : r, "@react-aria/searchfield"),
            {
                isDisabled: a,
                isReadOnly: o,
                onSubmit: s = () => {},
                onClear: u,
                type: c = "search"
            } = e,
            {
                labelProps: l,
                inputProps: d,
                descriptionProps: f,
                errorMessageProps: p,
                ...h
            } = (0, U.useTextField)({
                ...e,
                value: t.value,
                onChange: t.setValue,
                onKeyDown: o ? e.onKeyDown : (0, F.chain)(e => {
                    let n = e.key;
                    "Enter" === n && e.preventDefault(), !a && !o && ("Enter" === n && s(t.value), "Escape" === n && ("" === t.value ? e.continuePropagation() : (t.setValue(""), u && u())))
                }, e.onKeyDown),
                type: c
            }, n);
        return {
            labelProps: l,
            inputProps: {
                ...d,
                defaultValue: void 0
            },
            clearButtonProps: {
                "aria-label": i.format("Clear search"),
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                isDisabled: a || o,
                onPress: () => {
                    t.setValue(""), u && u()
                },
                onPressStart: () => {
                    var e;
                    null === (e = n.current) || void 0 === e || e.focus()
                }
            },
            descriptionProps: f,
            errorMessageProps: p,
            ...h
        }
    }
    Y = {
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