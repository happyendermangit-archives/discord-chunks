function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        default: function() {
            return O
        }
    }), A("70102");
    var O, T = A("50885");
    O = class {
        get language() {
            return this._language
        }
        set language(I) {
            this._language !== I && (this._language = I, this._onChange(I))
        }
        set languageHint(I) {
            this._languageHint = I
        }
        process(I) {
            !this._processing && (this._processing = !0, requestIdleCallback(N => {
                var A, O;
                let _ = N.timeRemaining();
                if (_ <= this._minimumTimeRemaining) {
                    this._processEnd();
                    return
                }
                I.length > 256 && (I = I.slice(0, 256)), (A = I, O = this._languageHint, T.default.ensureModule("discord_spellcheck").then(() => {
                    let {
                        cld: I
                    } = T.default.requireModule("discord_spellcheck");
                    return new Promise((N, T) => {
                        I.detect(A, {
                            httpHint: O,
                            encodingHint: "UTF8"
                        }, (I, A) => {
                            null != I ? T(Error(I.message)) : !A.reliable || A.languages[0].percent < 90 || A.languages[0].score < 500 ? T(Error("Not enough reliable text.")) : N(A.languages[0].code)
                        })
                    })
                })).then(I => {
                    this.language = I, this._processEnd(N.didTimeout)
                }, () => {
                    this._processEnd(N.didTimeout)
                })
            }))
        }
        _processEnd() {
            let I = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._processing = !1, I && this._minimumTimeRemaining++
        }
        constructor(I, N) {
            this._shouldProcess = !1, this._processing = !1, this._minimumTimeRemaining = 5, this._language = I, this._languageHint = I, this._onChange = N, N(I)
        }
    }
}