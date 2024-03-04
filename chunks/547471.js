function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useLocale: function() {
            return b
        },
        useLocalizedStringFormatter: function() {
            return x
        },
        useLocalizedStringDictionary: function() {
            return y
        },
        useDateFormatter: function() {
            return w
        },
        useNumberFormatter: function() {
            return k
        },
        useCollator: function() {
            return _
        },
        useFilter: function() {
            return M
        }
    }), n("222007");
    var r = n("884691"),
        i = n("638915"),
        o = n("231420"),
        s = n("24899"),
        a = n("240849"),
        c = n("546262");
    let u = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        d = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]),
        l = Symbol.for("react-aria.i18n.locale");

    function f() {
        let e = "undefined" != typeof window && window[l] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
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
                    if (t.script) return u.has(t.script)
                }
                let t = e.split("-")[0];
                return d.has(t)
            }(e) ? "ltr" : "rtl"
        }
    }
    let p = f(),
        h = new Set;

    function v() {
        for (let e of (p = f(), h)) e(p)
    }
    let g = r.createContext(null);

    function b() {
        let e = function() {
            let e = (0, i.useIsSSR)(),
                [t, n] = (0, r.useState)(p);
            return ((0, r.useEffect)(() => (0 === h.size && window.addEventListener("languagechange", v), h.add(n), () => {
                h.delete(n), 0 === h.size && window.removeEventListener("languagechange", v)
            }), []), e) ? {
                locale: "en-US",
                direction: "ltr"
            } : t
        }();
        return (0, r.useContext)(g) || e
    }
    let m = new WeakMap;

    function y(e, t) {
        var n;
        let r;
        return t && o.LocalizedStringDictionary.getGlobalDictionaryForPackage(t) || (n = e, !(r = m.get(n)) && (r = new o.LocalizedStringDictionary(n), m.set(n, r)), r)
    }

    function x(e, t) {
        let {
            locale: n
        } = b(), i = y(e, t);
        return (0, r.useMemo)(() => new o.LocalizedStringFormatter(n, i), [n, i])
    }

    function w(e) {
        e = (0, a.useDeepMemo)(null != e ? e : {}, S);
        let {
            locale: t
        } = b();
        return (0, r.useMemo)(() => new s.DateFormatter(t, e), [t, e])
    }

    function S(e, t) {
        if (e === t) return !0;
        let n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let r of n)
            if (t[r] !== e[r]) return !1;
        return !0
    }

    function k() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                locale: t
            } = b();
        return (0, r.useMemo)(() => new c.NumberFormatter(t, e), [t, e])
    }
    let E = new Map;

    function _(e) {
        let {
            locale: t
        } = b(), n = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
        if (E.has(n)) return E.get(n);
        let r = new Intl.Collator(t, e);
        return E.set(n, r), r
    }

    function M(e) {
        let t = _({
                usage: "search",
                ...e
            }),
            n = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(0, n.length), n)), [t]),
            i = (0, r.useCallback)((e, n) => 0 === n.length || (e = e.normalize("NFC"), n = n.normalize("NFC"), 0 === t.compare(e.slice(-n.length), n)), [t]),
            o = (0, r.useCallback)((e, n) => {
                if (0 === n.length) return !0;
                e = e.normalize("NFC"), n = n.normalize("NFC");
                let r = 0,
                    i = n.length;
                for (; r + i <= e.length; r++) {
                    let o = e.slice(r, r + i);
                    if (0 === t.compare(n, o)) return !0
                }
                return !1
            }, [t]);
        return (0, r.useMemo)(() => ({
            startsWith: n,
            endsWith: i,
            contains: o
        }), [n, i, o])
    }
}