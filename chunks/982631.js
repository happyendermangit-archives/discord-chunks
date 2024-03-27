function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSpinButton: function() {
            return z
        }
    });
    var r = n("33887"),
        i = n("910898"),
        a = n("146936"),
        o = n("833062"),
        s = n("583664"),
        u = n("61183"),
        c = n("138817"),
        l = n("613355"),
        d = n("221841"),
        f = n("86082"),
        p = n("742795"),
        h = n("986018"),
        m = n("54544"),
        g = n("321527"),
        _ = n("296659"),
        b = n("779863"),
        v = n("596658"),
        y = n("652546"),
        E = n("579008"),
        S = n("609431"),
        x = n("760193"),
        w = n("208451"),
        T = n("568354"),
        C = n("90960"),
        D = n("139274"),
        O = n("523643"),
        M = n("718612"),
        A = n("433370"),
        k = n("801654"),
        R = n("298552"),
        N = n("605074"),
        I = n("141404"),
        L = n("698426"),
        P = n("129737"),
        F = n("770003"),
        B = n("470079"),
        U = n("182823"),
        Y = n("602607"),
        j = {};

    function z(e) {
        var t;
        let n = (0, B.useRef)(),
            {
                value: r,
                textValue: i,
                minValue: a,
                maxValue: o,
                isDisabled: s,
                isReadOnly: u,
                isRequired: c,
                onIncrement: l,
                onIncrementPage: d,
                onDecrement: f,
                onDecrementPage: p,
                onDecrementToMin: h,
                onIncrementToMax: m
            } = e;
        let g = (0, Y.useLocalizedStringFormatter)((t = j) && t.__esModule ? t.default : t, "@react-aria/spinbutton"),
            _ = () => clearTimeout(n.current);
        (0, B.useEffect)(() => () => _(), []);
        let b = (0, B.useRef)(!1),
            v = () => {
                b.current = !0
            },
            y = () => {
                b.current = !1
            };
        i = "" === i ? g.format("Empty") : (i || `${r}`).replace("-", "−"), (0, B.useEffect)(() => {
            b.current && ((0, F.clearAnnouncer)("assertive"), (0, F.announce)(i, "assertive"))
        }, [i]);
        let E = (0, U.useEffectEvent)(e => {
                _(), l(), n.current = window.setTimeout(() => {
                    (isNaN(o) || isNaN(r) || r < o) && E(60)
                }, e)
            }),
            S = (0, U.useEffectEvent)(e => {
                _(), f(), n.current = window.setTimeout(() => {
                    (isNaN(a) || isNaN(r) || r > a) && S(60)
                }, e)
            }),
            x = e => {
                e.preventDefault()
            },
            {
                addGlobalListener: w,
                removeAllGlobalListeners: T
            } = (0, U.useGlobalListeners)();
        return {
            spinButtonProps: {
                role: "spinbutton",
                "aria-valuenow": isNaN(r) ? null : r,
                "aria-valuetext": i,
                "aria-valuemin": a,
                "aria-valuemax": o,
                "aria-disabled": s || null,
                "aria-readonly": u || null,
                "aria-required": c || null,
                onKeyDown: e => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !u) switch (e.key) {
                        case "PageUp":
                            if (d) {
                                e.preventDefault(), d();
                                break
                            }
                        case "ArrowUp":
                        case "Up":
                            l && (e.preventDefault(), l());
                            break;
                        case "PageDown":
                            if (p) {
                                e.preventDefault(), p();
                                break
                            }
                        case "ArrowDown":
                        case "Down":
                            f && (e.preventDefault(), f());
                            break;
                        case "Home":
                            h && (e.preventDefault(), h());
                            break;
                        case "End":
                            m && (e.preventDefault(), m())
                    }
                },
                onFocus: v,
                onBlur: y
            },
            incrementButtonProps: {
                onPressStart: () => {
                    E(400), w(window, "contextmenu", x)
                },
                onPressEnd: () => {
                    _(), T()
                },
                onFocus: v,
                onBlur: y
            },
            decrementButtonProps: {
                onPressStart: () => {
                    S(400), w(window, "contextmenu", x)
                },
                onPressEnd: () => {
                    _(), T()
                },
                onFocus: v,
                onBlur: y
            }
        }
    }
    j = {
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