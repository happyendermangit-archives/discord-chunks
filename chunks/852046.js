function(N, I, A) {
    "use strict";
    A.r(I), A.d(I, {
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

    function a(N) {
        var I;
        N = null !== (I = R.default[N]) && void 0 !== I ? I : N;
        let A = (0, O.parse)(N.replace(/[_-]/g, "-"));
        if (null == A || null == A.langtag.language || null == A.langtag.region) {
            G.error("".concat(N, " is not a valid locale."));
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
        set enabled(N) {
            this._enabled = N
        }
        setLearnedWords(N) {
            r.setLearnedWords(N)
        }
        setLocale(N) {
            var I;
            null === (I = r.setLocale(N)) || void 0 === I || I.then(I => {
                G.info("Switching to ".concat(N), I ? "(available)" : "(unavailable)")
            })
        }
        setAppLocale(N) {
            this.regionPreference = N.split("-")[1]
        }
        detectLanguage(N) {
            this.enabled && this.languageDetector.process(N)
        }
        getAvailableLanguages(N) {
            let I = {};
            return N.forEach(N => {
                var A;
                let [O] = N.split("-");
                I[O] = null !== (A = I[O]) && void 0 !== A ? A : N
            }), I
        }
        isMisspelled(N, I) {
            return "" !== this.misspelledWord && N === this.misspelledWord
        }
        getCorrectionsForMisspelling(N, I) {
            return this.isMisspelled(N, I) ? this.corrections : []
        }
        replaceMisspelling(N) {
            r.replaceMisspelling(N)
        }
        constructor(N) {
            this._enabled = !0, this.misspelledWord = "", this.corrections = [];
            let [I, A] = t.default.locale.split("-");
            this.regionPreference = A;
            let O = this.getAvailableLanguages(N);
            this.languageDetector = new i.default(I, A => {
                let T = "".concat(A, "-").concat(this.regionPreference);
                if (-1 !== N.indexOf(T)) this.setLocale(T);
                else {
                    var _;
                    let N = null !== (_ = O[A]) && void 0 !== _ ? _ : R.default[I];
                    null != N && this.setLocale(N)
                }
            }), r.on("spellcheck-result", (N, I) => {
                this.misspelledWord = null != N ? N : "", this.corrections = null != I ? I : []
            })
        }
    }
    let o = _.debounce((N, I) => {
        let A = function(N) {
            return null == N ? null : (0, e.isElement)(N, HTMLInputElement) || (0, e.isElement)(N, HTMLTextAreaElement) ? N.value : (0, e.isElement)(N) && N.hasAttribute("contenteditable") ? N.textContent : void 0
        }(I);
        null != A && N.detectLanguage(A)
    }, 250);
    async function s() {
        var N, I;
        let A = null !== (N = await r.getAvailableDictionaries()) && void 0 !== N ? N : [],
            O = A.map(a).filter(n.isNotNullish),
            T = new S(O);
        return I = T, null != document.body && document.body.addEventListener("beforeinput", N => o(I, N.target), !0), T
    }
}