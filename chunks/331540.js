function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        install: function() {
            return v
        }
    });
    var r = n("623279"),
        o = n("392711"),
        i = n.n(o),
        a = n("188104"),
        u = n("517727"),
        s = n("35523"),
        l = n("225098"),
        c = n("162677"),
        f = n("935491"),
        d = n("90426");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return _(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var I = new s.default("Spellchecker"),
        h = null === u.default || void 0 === u.default ? void 0 : u.default.spellCheck;

    function O(e) {
        e = null !== (t = d.default[e]) && void 0 !== t ? t : e;
        var t, n = (0, r.parse)(e.replace(/[_-]/g, "-"));
        if (null == n || null == n.langtag.language || null == n.langtag.region) {
            I.error("".concat(e, " is not a valid locale."));
            return
        }
        var o = n.langtag,
            i = o.language,
            a = o.region;
        return "".concat(i.language.toLowerCase(), "-").concat(a.toUpperCase())
    }
    var T = function() {
            var e, t, n;

            function r(e) {
                var t = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), m(this, "languageDetector", void 0), m(this, "regionPreference", void 0), m(this, "_enabled", !0), m(this, "misspelledWord", ""), m(this, "corrections", []);
                var n = y(l.default.locale.split("-"), 2),
                    o = n[0],
                    i = n[1];
                this.regionPreference = i;
                var a = this.getAvailableLanguages(e);
                this.languageDetector = new f.default(o, function(n) {
                    var r = "".concat(n, "-").concat(t.regionPreference);
                    if (-1 !== e.indexOf(r)) t.setLocale(r);
                    else {
                        var i, u = null !== (i = a[n]) && void 0 !== i ? i : d.default[o];
                        null != u && t.setLocale(u)
                    }
                }), h.on("spellcheck-result", function(e, n) {
                    t.misspelledWord = null != e ? e : "", t.corrections = null != n ? n : []
                })
            }
            return e = r, t = [{
                key: "enabled",
                get: function() {
                    return this._enabled
                },
                set: function(e) {
                    this._enabled = e
                }
            }, {
                key: "setLearnedWords",
                value: function(e) {
                    h.setLearnedWords(e)
                }
            }, {
                key: "setLocale",
                value: function(e) {
                    var t;
                    null === (t = h.setLocale(e)) || void 0 === t || t.then(function(t) {
                        I.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)")
                    })
                }
            }, {
                key: "setAppLocale",
                value: function(e) {
                    this.regionPreference = e.split("-")[1]
                }
            }, {
                key: "detectLanguage",
                value: function(e) {
                    this.enabled && this.languageDetector.process(e)
                }
            }, {
                key: "getAvailableLanguages",
                value: function(e) {
                    var t = {};
                    return e.forEach(function(e) {
                        var n, r = y(e.split("-"), 1)[0];
                        t[r] = null !== (n = t[r]) && void 0 !== n ? n : e
                    }), t
                }
            }, {
                key: "isMisspelled",
                value: function(e, t) {
                    return "" !== this.misspelledWord && e === this.misspelledWord
                }
            }, {
                key: "getCorrectionsForMisspelling",
                value: function(e, t) {
                    return this.isMisspelled(e, t) ? this.corrections : []
                }
            }, {
                key: "replaceMisspelling",
                value: function(e) {
                    h.replaceMisspelling(e)
                }
            }], p(e.prototype, t), n && p(e, n), r
        }(),
        S = i().debounce(function(e, t) {
            var n = function(e) {
                return null == e ? null : (0, a.isElement)(e, HTMLInputElement) || (0, a.isElement)(e, HTMLTextAreaElement) ? e.value : (0, a.isElement)(e) && e.hasAttribute("contenteditable") ? e.textContent : void 0
            }(t);
            null != n && e.detectLanguage(n)
        }, 250);

    function v() {
        return g.apply(this, arguments)
    }

    function g() {
        var e;
        return e = function() {
            var e, t;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, h.getAvailableDictionaries()];
                    case 1:
                        var r;
                        return r = t = new T((null !== (e = n.sent()) && void 0 !== e ? e : []).map(O).filter(c.isNotNullish)), null != document.body && document.body.addEventListener("beforeinput", function(e) {
                            return S(r, e.target)
                        }, !0), [2, t]
                }
            })
        }, (g = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    E(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    E(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}