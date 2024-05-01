function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        install: function() {
            return A
        }
    }), n("757143"), n("47120");
    var i = n("623279"),
        r = n("392711"),
        a = n.n(r),
        s = n("374470"),
        o = n("579806"),
        l = n("710845"),
        u = n("706454"),
        d = n("823379"),
        _ = n("598105"),
        c = n("643413");

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let I = new l.default("Spellchecker"),
        T = null === o.default || void 0 === o.default ? void 0 : o.default.spellCheck;

    function f(e) {
        var t;
        e = null !== (t = c.default[e]) && void 0 !== t ? t : e;
        let n = (0, i.parse)(e.replace(/[_-]/g, "-"));
        if (null == n || null == n.langtag.language || null == n.langtag.region) {
            I.error("".concat(e, " is not a valid locale."));
            return
        }
        let {
            language: r,
            region: a
        } = n.langtag;
        return "".concat(r.language.toLowerCase(), "-").concat(a.toUpperCase())
    }
    class S {
        get enabled() {
            return this._enabled
        }
        set enabled(e) {
            this._enabled = e
        }
        setLearnedWords(e) {
            T.setLearnedWords(e)
        }
        setLocale(e) {
            var t;
            null === (t = T.setLocale(e)) || void 0 === t || t.then(t => {
                I.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
            })
        }
        setAppLocale(e) {
            this.regionPreference = e.split("-")[1]
        }
        detectLanguage(e) {
            this.enabled && this.languageDetector.process(e)
        }
        getAvailableLanguages(e) {
            let t = {};
            return e.forEach(e => {
                var n;
                let [i] = e.split("-");
                t[i] = null !== (n = t[i]) && void 0 !== n ? n : e
            }), t
        }
        isMisspelled(e, t) {
            return "" !== this.misspelledWord && e === this.misspelledWord
        }
        getCorrectionsForMisspelling(e, t) {
            return this.isMisspelled(e, t) ? this.corrections : []
        }
        replaceMisspelling(e) {
            T.replaceMisspelling(e)
        }
        constructor(e) {
            E(this, "languageDetector", void 0), E(this, "regionPreference", void 0), E(this, "_enabled", !0), E(this, "misspelledWord", ""), E(this, "corrections", []);
            let [t, n] = u.default.locale.split("-");
            this.regionPreference = n;
            let i = this.getAvailableLanguages(e);
            this.languageDetector = new _.default(t, n => {
                let r = "".concat(n, "-").concat(this.regionPreference);
                if (-1 !== e.indexOf(r)) this.setLocale(r);
                else {
                    var a;
                    let e = null !== (a = i[n]) && void 0 !== a ? a : c.default[t];
                    null != e && this.setLocale(e)
                }
            }), T.on("spellcheck-result", (e, t) => {
                this.misspelledWord = null != e ? e : "", this.corrections = null != t ? t : []
            })
        }
    }
    let h = a().debounce((e, t) => {
        let n = function(e) {
            return null == e ? null : (0, s.isElement)(e, HTMLInputElement) || (0, s.isElement)(e, HTMLTextAreaElement) ? e.value : (0, s.isElement)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
        }(t);
        null != n && e.detectLanguage(n)
    }, 250);
    async function A() {
        var e, t;
        let n = new S((null !== (e = await T.getAvailableDictionaries()) && void 0 !== e ? e : []).map(f).filter(d.isNotNullish));
        return t = n, null != document.body && document.body.addEventListener("beforeinput", e => h(t, e.target), !0), n
    }
}