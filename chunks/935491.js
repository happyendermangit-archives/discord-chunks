function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("131900");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = function() {
        var e, t, n;

        function a(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a), i(this, "_language", void 0), i(this, "_onChange", void 0), i(this, "_languageHint", void 0), i(this, "_shouldProcess", !1), i(this, "_processing", !1), i(this, "_minimumTimeRemaining", 5), this._language = e, this._languageHint = e, this._onChange = t, t(e)
        }
        return e = a, t = [{
            key: "language",
            get: function() {
                return this._language
            },
            set: function(e) {
                this._language !== e && (this._language = e, this._onChange(e))
            }
        }, {
            key: "languageHint",
            set: function(e) {
                this._languageHint = e
            }
        }, {
            key: "process",
            value: function(e) {
                var t = this;
                !this._processing && (this._processing = !0, requestIdleCallback(function(n) {
                    var o, i;
                    if (n.timeRemaining() <= t._minimumTimeRemaining) {
                        t._processEnd();
                        return
                    }
                    e.length > 256 && (e = e.slice(0, 256)), (o = e, i = t._languageHint, r.default.ensureModule("discord_spellcheck").then(function() {
                        var e = r.default.requireModule("discord_spellcheck").cld;
                        return new Promise(function(t, n) {
                            e.detect(o, {
                                httpHint: i,
                                encodingHint: "UTF8"
                            }, function(e, r) {
                                null != e ? n(Error(e.message)) : !r.reliable || r.languages[0].percent < 90 || r.languages[0].score < 500 ? n(Error("Not enough reliable text.")) : t(r.languages[0].code)
                            })
                        })
                    })).then(function(e) {
                        t.language = e, t._processEnd(n.didTimeout)
                    }, function() {
                        t._processEnd(n.didTimeout)
                    })
                }))
            }
        }, {
            key: "_processEnd",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._processing = !1, e && this._minimumTimeRemaining++
            }
        }], o(e.prototype, t), n && o(e, n), a
    }()
}