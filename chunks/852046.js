function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        install: function() {
            return s
        }
    }), A("781738"), A("222007");
    var O = A("78349"),
        T = A("917351"),
        _ = A.n(T),
        e = A("118810"),
        E = A("49671"),
        V = A("605250"),
        t = A("915639"),
        n = A("449008"),
        i = A("851234"),
        R = A("648610");
    let G = new V.default("Spellchecker"),
        r = null === E.default || void 0 === E.default ? void 0 : E.default.spellCheck;

    function a(I) {
        var N;
        I = null !== (N = R.default[I]) && void 0 !== N ? N : I;
        let A = (0, O.parse)(I.replace(/[_-]/g, "-"));
        if (null == A || null == A.langtag.language || null == A.langtag.region) {
            G.error("".concat(I, " is not a valid locale."));
            return
        }
        let {
            language: T,
            region: _
        } = A.langtag;
        return "".concat(T.language.toLowerCase(), "-").concat(_.toUpperCase())
    }
    class S {
        get enabled() {
            return this._enabled
        }
        set enabled(I) {
            this._enabled = I
        }
        setLearnedWords(I) {
            r.setLearnedWords(I)
        }
        setLocale(I) {
            var N;
            null === (N = r.setLocale(I)) || void 0 === N || N.then(N => {
                G.info("Switching to ".concat(I), N ? "(available)" : "(unavailable)")
            })
        }
        setAppLocale(I) {
            this.regionPreference = I.split("-")[1]
        }
        detectLanguage(I) {
            this.enabled && this.languageDetector.process(I)
        }
        getAvailableLanguages(I) {
            let N = {};
            return I.forEach(I => {
                var A;
                let [O] = I.split("-");
                N[O] = null !== (A = N[O]) && void 0 !== A ? A : I
            }), N
        }
        isMisspelled(I, N) {
            return "" !== this.misspelledWord && I === this.misspelledWord
        }
        getCorrectionsForMisspelling(I, N) {
            return this.isMisspelled(I, N) ? this.corrections : []
        }
        replaceMisspelling(I) {
            r.replaceMisspelling(I)
        }
        constructor(I) {
            this._enabled = !0, this.misspelledWord = "", this.corrections = [];
            let [N, A] = t.default.locale.split("-");
            this.regionPreference = A;
            let O = this.getAvailableLanguages(I);
            this.languageDetector = new i.default(N, A => {
                let T = "".concat(A, "-").concat(this.regionPreference);
                if (-1 !== I.indexOf(T)) this.setLocale(T);
                else {
                    var _;
                    let I = null !== (_ = O[A]) && void 0 !== _ ? _ : R.default[N];
                    null != I && this.setLocale(I)
                }
            }), r.on("spellcheck-result", (I, N) => {
                this.misspelledWord = null != I ? I : "", this.corrections = null != N ? N : []
            })
        }
    }
    let o = _.debounce((I, N) => {
        let A = function(I) {
            return null == I ? null : (0, e.isElement)(I, HTMLInputElement) || (0, e.isElement)(I, HTMLTextAreaElement) ? I.value : (0, e.isElement)(I) && I.hasAttribute("contenteditable") ? I.textContent : void 0
        }(N);
        null != A && I.detectLanguage(A)
    }, 250);
    async function s() {
        var I, N;
        let A = null !== (I = await r.getAvailableDictionaries()) && void 0 !== I ? I : [],
            O = A.map(a).filter(n.isNotNullish),
            T = new S(O);
        return N = T, null != document.body && document.body.addEventListener("beforeinput", I => o(N, I.target), !0), T
    }
}