function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSpinButton: function() {
            return B
        }
    }), n("781738");
    var r = n("105476"),
        a = n("719623"),
        i = n("152626"),
        o = n("572815"),
        s = n("703094"),
        c = n("156983"),
        l = n("851583"),
        u = n("900060"),
        d = n("426604"),
        p = n("986501"),
        f = n("195158"),
        m = n("336267"),
        h = n("30205"),
        v = n("961019"),
        g = n("756129"),
        y = n("993212"),
        b = n("648830"),
        x = n("274364"),
        S = n("156839"),
        w = n("114724"),
        D = n("773770"),
        C = n("979972"),
        k = n("790346"),
        P = n("156755"),
        E = n("678311"),
        T = n("702313"),
        M = n("369760"),
        R = n("520016"),
        I = n("452155"),
        O = n("636311"),
        A = n("244754"),
        L = n("640455"),
        N = n("436488"),
        F = n("906362"),
        j = n("362561"),
        K = n("884691"),
        _ = n("240849"),
        V = n("564341"),
        z = {};

    function B(e) {
        var t;
        let n = (0, K.useRef)(),
            {
                value: r,
                textValue: a,
                minValue: i,
                maxValue: o,
                isDisabled: s,
                isReadOnly: c,
                isRequired: l,
                onIncrement: u,
                onIncrementPage: d,
                onDecrement: p,
                onDecrementPage: f,
                onDecrementToMin: m,
                onIncrementToMax: h
            } = e;
        let v = (0, V.useLocalizedStringFormatter)((t = z) && t.__esModule ? t.default : t, "@react-aria/spinbutton"),
            g = () => clearTimeout(n.current);
        (0, K.useEffect)(() => () => g(), []);
        let y = (0, K.useRef)(!1),
            b = () => {
                y.current = !0
            },
            x = () => {
                y.current = !1
            };
        a = "" === a ? v.format("Empty") : (a || "".concat(r)).replace("-", "−"), (0, K.useEffect)(() => {
            y.current && ((0, j.clearAnnouncer)("assertive"), (0, j.announce)(a, "assertive"))
        }, [a]);
        let S = (0, _.useEffectEvent)(e => {
                g(), u(), n.current = window.setTimeout(() => {
                    (isNaN(o) || isNaN(r) || r < o) && S(60)
                }, e)
            }),
            w = (0, _.useEffectEvent)(e => {
                g(), p(), n.current = window.setTimeout(() => {
                    (isNaN(i) || isNaN(r) || r > i) && w(60)
                }, e)
            }),
            D = e => {
                e.preventDefault()
            },
            {
                addGlobalListener: C,
                removeAllGlobalListeners: k
            } = (0, _.useGlobalListeners)();
        return {
            spinButtonProps: {
                role: "spinbutton",
                "aria-valuenow": isNaN(r) ? null : r,
                "aria-valuetext": a,
                "aria-valuemin": i,
                "aria-valuemax": o,
                "aria-disabled": s || null,
                "aria-readonly": c || null,
                "aria-required": l || null,
                onKeyDown: e => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !c) switch (e.key) {
                        case "PageUp":
                            if (d) {
                                e.preventDefault(), d();
                                break
                            }
                        case "ArrowUp":
                        case "Up":
                            u && (e.preventDefault(), u());
                            break;
                        case "PageDown":
                            if (f) {
                                e.preventDefault(), f();
                                break
                            }
                        case "ArrowDown":
                        case "Down":
                            p && (e.preventDefault(), p());
                            break;
                        case "Home":
                            m && (e.preventDefault(), m());
                            break;
                        case "End":
                            h && (e.preventDefault(), h())
                    }
                },
                onFocus: b,
                onBlur: x
            },
            incrementButtonProps: {
                onPressStart: () => {
                    S(400), C(window, "contextmenu", D)
                },
                onPressEnd: () => {
                    g(), k()
                },
                onFocus: b,
                onBlur: x
            },
            decrementButtonProps: {
                onPressStart: () => {
                    w(400), C(window, "contextmenu", D)
                },
                onPressEnd: () => {
                    g(), k()
                },
                onFocus: b,
                onBlur: x
            }
        }
    }
    z = {
        "ar-AE": r.default,
        "bg-BG": a.default,
        "cs-CZ": i.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": c.default,
        "en-US": l.default,
        "es-ES": u.default,
        "et-EE": d.default,
        "fi-FI": p.default,
        "fr-FR": f.default,
        "he-IL": m.default,
        "hr-HR": h.default,
        "hu-HU": v.default,
        "it-IT": g.default,
        "ja-JP": y.default,
        "ko-KR": b.default,
        "lt-LT": x.default,
        "lv-LV": S.default,
        "nb-NO": w.default,
        "nl-NL": D.default,
        "pl-PL": C.default,
        "pt-BR": k.default,
        "pt-PT": P.default,
        "ro-RO": E.default,
        "ru-RU": T.default,
        "sk-SK": M.default,
        "sl-SI": R.default,
        "sr-SP": I.default,
        "sv-SE": O.default,
        "tr-TR": A.default,
        "uk-UA": L.default,
        "zh-CN": N.default,
        "zh-TW": F.default
    }
}