function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSpinButton: function() {
            return V
        }
    }), n("781738");
    var r = n("105476"),
        i = n("719623"),
        o = n("152626"),
        s = n("572815"),
        a = n("703094"),
        c = n("156983"),
        u = n("851583"),
        d = n("900060"),
        l = n("426604"),
        f = n("986501"),
        p = n("195158"),
        h = n("336267"),
        v = n("30205"),
        g = n("961019"),
        b = n("756129"),
        m = n("993212"),
        y = n("648830"),
        x = n("274364"),
        w = n("156839"),
        S = n("114724"),
        k = n("773770"),
        E = n("979972"),
        _ = n("790346"),
        M = n("156755"),
        D = n("678311"),
        C = n("702313"),
        P = n("369760"),
        T = n("520016"),
        A = n("452155"),
        R = n("636311"),
        I = n("244754"),
        O = n("640455"),
        L = n("436488"),
        j = n("906362"),
        N = n("362561"),
        F = n("884691"),
        B = n("240849"),
        z = n("564341"),
        K = {};

    function V(e) {
        var t;
        let n = (0, F.useRef)(),
            {
                value: r,
                textValue: i,
                minValue: o,
                maxValue: s,
                isDisabled: a,
                isReadOnly: c,
                isRequired: u,
                onIncrement: d,
                onIncrementPage: l,
                onDecrement: f,
                onDecrementPage: p,
                onDecrementToMin: h,
                onIncrementToMax: v
            } = e;
        let g = (0, z.useLocalizedStringFormatter)((t = K) && t.__esModule ? t.default : t, "@react-aria/spinbutton"),
            b = () => clearTimeout(n.current);
        (0, F.useEffect)(() => () => b(), []);
        let m = (0, F.useRef)(!1),
            y = () => {
                m.current = !0
            },
            x = () => {
                m.current = !1
            };
        i = "" === i ? g.format("Empty") : (i || "".concat(r)).replace("-", "−"), (0, F.useEffect)(() => {
            m.current && ((0, N.clearAnnouncer)("assertive"), (0, N.announce)(i, "assertive"))
        }, [i]);
        let w = (0, B.useEffectEvent)(e => {
                b(), d(), n.current = window.setTimeout(() => {
                    (isNaN(s) || isNaN(r) || r < s) && w(60)
                }, e)
            }),
            S = (0, B.useEffectEvent)(e => {
                b(), f(), n.current = window.setTimeout(() => {
                    (isNaN(o) || isNaN(r) || r > o) && S(60)
                }, e)
            }),
            k = e => {
                e.preventDefault()
            },
            {
                addGlobalListener: E,
                removeAllGlobalListeners: _
            } = (0, B.useGlobalListeners)();
        return {
            spinButtonProps: {
                role: "spinbutton",
                "aria-valuenow": isNaN(r) ? null : r,
                "aria-valuetext": i,
                "aria-valuemin": o,
                "aria-valuemax": s,
                "aria-disabled": a || null,
                "aria-readonly": c || null,
                "aria-required": u || null,
                onKeyDown: e => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !c) switch (e.key) {
                        case "PageUp":
                            if (l) {
                                e.preventDefault(), l();
                                break
                            }
                        case "ArrowUp":
                        case "Up":
                            d && (e.preventDefault(), d());
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
                            v && (e.preventDefault(), v())
                    }
                },
                onFocus: y,
                onBlur: x
            },
            incrementButtonProps: {
                onPressStart: () => {
                    w(400), E(window, "contextmenu", k)
                },
                onPressEnd: () => {
                    b(), _()
                },
                onFocus: y,
                onBlur: x
            },
            decrementButtonProps: {
                onPressStart: () => {
                    S(400), E(window, "contextmenu", k)
                },
                onPressEnd: () => {
                    b(), _()
                },
                onFocus: y,
                onBlur: x
            }
        }
    }
    K = {
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