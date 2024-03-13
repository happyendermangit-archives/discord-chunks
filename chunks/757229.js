function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSearchField: function() {
            return K
        }
    });
    var r = n("961965"),
        i = n("307058"),
        o = n("207610"),
        s = n("203960"),
        a = n("215312"),
        c = n("51665"),
        u = n("293253"),
        d = n("960866"),
        l = n("763188"),
        f = n("760578"),
        p = n("521288"),
        h = n("102220"),
        v = n("106070"),
        g = n("844783"),
        b = n("640180"),
        m = n("822472"),
        y = n("155591"),
        x = n("420354"),
        w = n("471897"),
        S = n("821533"),
        k = n("690927"),
        E = n("395629"),
        _ = n("859170"),
        M = n("666921"),
        D = n("145078"),
        C = n("809309"),
        P = n("218739"),
        T = n("284076"),
        A = n("507289"),
        R = n("448727"),
        I = n("572216"),
        O = n("920929"),
        j = n("682752"),
        L = n("794242"),
        N = n("240849"),
        F = n("564341"),
        B = n("381084"),
        z = {};

    function K(e, t, n) {
        var r;
        let i = (0, F.useLocalizedStringFormatter)((r = z) && r.__esModule ? r.default : r, "@react-aria/searchfield"),
            {
                isDisabled: o,
                isReadOnly: s,
                onSubmit: a = () => {},
                onClear: c,
                type: u = "search"
            } = e,
            {
                labelProps: d,
                inputProps: l,
                descriptionProps: f,
                errorMessageProps: p,
                ...h
            } = (0, B.useTextField)({
                ...e,
                value: t.value,
                onChange: t.setValue,
                onKeyDown: s ? e.onKeyDown : (0, N.chain)(e => {
                    let n = e.key;
                    "Enter" === n && e.preventDefault(), !o && !s && ("Enter" === n && a(t.value), "Escape" === n && ("" === t.value ? e.continuePropagation() : (t.setValue(""), c && c())))
                }, e.onKeyDown),
                type: u
            }, n);
        return {
            labelProps: d,
            inputProps: {
                ...l,
                defaultValue: void 0
            },
            clearButtonProps: {
                "aria-label": i.format("Clear search"),
                excludeFromTabOrder: !0,
                preventFocusOnPress: !0,
                isDisabled: o || s,
                onPress: () => {
                    t.setValue(""), c && c()
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
    z = {
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
        "zh-CN": j.default,
        "zh-TW": L.default
    }
}