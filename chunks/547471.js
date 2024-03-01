function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useLocale: function() {
            return g
        },
        useLocalizedStringFormatter: function() {
            return x
        },
        useLocalizedStringDictionary: function() {
            return b
        },
        useDateFormatter: function() {
            return S
        },
        useNumberFormatter: function() {
            return D
        },
        useCollator: function() {
            return k
        },
        useFilter: function() {
            return P
        }
    }), n("222007");
    var r = n("884691"),
        a = n("638915"),
        i = n("231420"),
        o = n("24899"),
        s = n("240849"),
        c = n("546262");
    let l = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        u = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]),
        d = Symbol.for("react-aria.i18n.locale");

    function p() {
        let e = "undefined" != typeof window && window[d] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
            Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch (t) {
            e = "en-US"
        }
        return {
            locale: e,
            direction: ! function(e) {
                if (Intl.Locale) {
                    let t = new Intl.Locale(e).maximize(),
                        n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
                    if (n) return "rtl" === n.direction;
                    if (t.script) return l.has(t.script)
                }
                let t = e.split("-")[0];
                return u.has(t)
            }(e) ? "ltr" : "rtl"
        }
    }
    let f = p(),
        m = new Set;

    function h() {
        for (let e of (f = p(), m)) e(f)
    }
    let v = r.createContext(null);

    function g() {
        let e = function() {
            let e = (0, a.useIsSSR)(),
                [t, n] = (0, r.useState)(f);
            return ((0, r.useEffect)(() => (0 === m.size && window.addEventListener("languagechange", h), m.add(n), () => {
                m.delete(n), 0 === m.size && window.removeEventListener("languagechange", h)
            }), []), e) ? {
                locale: "en-US",
                direction: "ltr"
            } : t
        }();
        return (0, r.useContext)(v) || e
    }
    let y = new WeakMap;

    function b(e, t) {
        var n;
        let r;
        return t && i.LocalizedStringDictionary.getGlobalDictionaryForPackage(t) || (n = e, !(r = y.get(n)) && (r = new i.LocalizedStringDictionary(n), y.set(n, r)), r)
    }

    function x(e, t) {
        let {
            locale: n
        } = g(), a = b(e, t);
        return (0, r.useMemo)(() => new i.LocalizedStringFormatter(n, a), [n, a])
    }

    function S(e) {
        e = (0, s.useDeepMemo)(null != e ? e : {}, w);
        let {
            locale: t
        } = g();
        return (0, r.useMemo)(() => new o.DateFormatter(t, e), [t, e])
    }

    function w(e, t) {
        if (e === t) return !0;
        let n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let r of n)
            if (t[r] !== e[r]) return !1;
        return !0
    }

    function D() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                locale: t
            } = g();
        return (0, r.useMemo)(() => new c.NumberFormatter(t, e), [t, e])
    }
    let C = new Map;

    function k(e) {
        let {
            locale: t
        } = g(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
        if (C.has(n)) return C.get(n);
        let r = new Intl.Collator(t, e);
        return C.set(n, r), r
    }

    function P(e) {
        let t = k({
                usage: "search",
                ...e
            }),
            n = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(0, n.length), n)), [t]),
            a = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(-n.length), n)), [t]),
            i = (0, r.useCallback)((e, n) => {
                if (0 === n.length) return !0;
                e = e.normalize("NFC"), n = n.normalize("NFC");
                let r = 0,
                    a = n.length;
                for (; r + a <= e.length; r++) {
                    let i = e.slice(r, r + a);
                    if (0 === t.compare(n, i)) return !0
                }
                return !1
            }, [t]);
        return (0, r.useMemo)(() => ({
            startsWith: n,
            endsWith: a,
            contains: i
        }), [n, a, i])
    }
}