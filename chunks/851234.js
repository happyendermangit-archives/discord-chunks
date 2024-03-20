function(N, I, A) {
    "use strict";
    A.r(I), A.d(I, {
        default: function() {
            return O
        }
    }), A("70102");
    var O, T = A("50885");
    O = class {
        get language() {
            return this._language
        }
        set language(N) {
            this._language !== N && (this._language = N, this._onChange(N))
        }
        set languageHint(N) {
            this._languageHint = N
        }
        process(N) {
            !this._processing && (this._processing = !0, requestIdleCallback(I => {
                var A, O;
                let _ = I.timeRemaining();
                if (_ <= this._minimumTimeRemaining) {
                    this._processEnd();
                    return
                }
                N.length > 256 && (N = N.slice(0, 256)), (A = N, O = this._languageHint, T.default.ensureModule("discord_spellcheck").then(() => {
                    let {
                        cld: N
                    } = T.default.requireModule("discord_spellcheck");
                    return new Promise((I, T) => {
                        N.detect(A, {
                            httpHint: O,
                            encodingHint: "UTF8"
                        }, (N, A) => {
                            null != N ? T(Error(N.message)) : !A.reliable || A.languages[0].percent < 90 || A.languages[0].score < 500 ? T(Error("Not enough reliable text.")) : I(A.languages[0].code)
                        })
                    })
                })).then(N => {
                    this.language = N, this._processEnd(I.didTimeout)
                }, () => {
                    this._processEnd(I.didTimeout)
                })
            }))
        }
        _processEnd() {
            let N = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._processing = !1, N && this._minimumTimeRemaining++
        }
        constructor(N, I) {
            this._shouldProcess = !1, this._processing = !1, this._minimumTimeRemaining = 5, this._language = N, this._languageHint = N, this._onChange = I, I(N)
        }
    }
}