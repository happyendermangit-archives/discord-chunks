function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("70102");
    var i, l = n("50885");
    i = class {
        get language() {
            return this._language
        }
        set language(e) {
            this._language !== e && (this._language = e, this._onChange(e))
        }
        set languageHint(e) {
            this._languageHint = e
        }
        process(e) {
            !this._processing && (this._processing = !0, requestIdleCallback(t => {
                var n, i;
                let s = t.timeRemaining();
                if (s <= this._minimumTimeRemaining) {
                    this._processEnd();
                    return
                }
                e.length > 256 && (e = e.slice(0, 256)), (n = e, i = this._languageHint, l.default.ensureModule("discord_spellcheck").then(() => {
                    let {
                        cld: e
                    } = l.default.requireModule("discord_spellcheck");
                    return new Promise((t, l) => {
                        e.detect(n, {
                            httpHint: i,
                            encodingHint: "UTF8"
                        }, (e, n) => {
                            null != e ? l(Error(e.message)) : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500 ? l(Error("Not enough reliable text.")) : t(n.languages[0].code)
                        })
                    })
                })).then(e => {
                    this.language = e, this._processEnd(t.didTimeout)
                }, () => {
                    this._processEnd(t.didTimeout)
                })
            }))
        }
        _processEnd() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._processing = !1, e && this._minimumTimeRemaining++
        }
        constructor(e, t) {
            this._shouldProcess = !1, this._processing = !1, this._minimumTimeRemaining = 5, this._language = e, this._languageHint = e, this._onChange = t, t(e)
        }
    }
}