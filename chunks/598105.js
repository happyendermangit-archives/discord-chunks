function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("411104");
    var i = n("998502");

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class s {
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
                var n, r;
                if (t.timeRemaining() <= this._minimumTimeRemaining) {
                    this._processEnd();
                    return
                }
                e.length > 256 && (e = e.slice(0, 256)), (n = e, r = this._languageHint, i.default.ensureModule("discord_spellcheck").then(() => {
                    let {
                        cld: e
                    } = i.default.requireModule("discord_spellcheck");
                    return new Promise((t, i) => {
                        e.detect(n, {
                            httpHint: r,
                            encodingHint: "UTF8"
                        }, (e, n) => {
                            null != e ? i(Error(e.message)) : !n.reliable || n.languages[0].percent < 90 || n.languages[0].score < 500 ? i(Error("Not enough reliable text.")) : t(n.languages[0].code)
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
            r(this, "_language", void 0), r(this, "_onChange", void 0), r(this, "_languageHint", void 0), r(this, "_shouldProcess", !1), r(this, "_processing", !1), r(this, "_minimumTimeRemaining", 5), this._language = e, this._languageHint = e, this._onChange = t, t(e)
        }
    }
}