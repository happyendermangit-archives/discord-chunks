function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DIVERSITY_SURROGATES: function() {
            return h
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("946188"),
        a = n("739226"),
        u = n("148527");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    for (var c = null, f = {}, d = {}, _ = {}, E = {}, p = [], m = 0, y = 0, I = {
            "1f3fb": 0,
            "1f3fc": 1,
            "1f3fd": 2,
            "1f3fe": 3,
            "1f3ff": 4
        }, h = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"], O = /^:([^\s:]+?(?:::skin-tone-\d)?):/, T = n("523558"), S = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/, v = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, g = 0; g < h.length; g++) {
        var A = h[g];
        _["skin-tone-".concat(g + 1)] = A, E[A] = "skin-tone-".concat(g + 1)
    }
    var b = function() {
            var e, t, n;

            function r(e) {
                if (! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, r), l(this, "emojiObject", void 0), l(this, "type", void 0), l(this, "uniqueName", void 0), l(this, "surrogates", void 0), l(this, "diversityChildren", void 0), l(this, "originalName", void 0), l(this, "id", void 0), l(this, "guildId", void 0), l(this, "index", void 0), l(this, "useSpriteSheet", void 0), this.emojiObject = e, this.type = u.EmojiTypes.UNICODE, this.uniqueName = e.names[0], this.surrogates = e.surrogates, this.diversityChildren = {}, null != e.diversityChildren) {
                    var t = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var i, a = e.diversityChildren[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                            var s = i.value;
                            if (null != s.diversity) {
                                var c = s.diversity.join("-");
                                this.diversityChildren[c] = new r(s)
                            }
                        }
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !t && null != a.return && a.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                }
            }
            return e = r, t = [{
                key: "names",
                get: function() {
                    return this.emojiObject.names
                }
            }, {
                key: "allNamesString",
                get: function() {
                    return this.names.length > 1 ? ":".concat(this.names.join(": :"), ":") : ":".concat(this.uniqueName, ":")
                }
            }, {
                key: "unicodeVersion",
                get: function() {
                    var e;
                    return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0
                }
            }, {
                key: "hasDiversity",
                get: function() {
                    return this.emojiObject.hasDiversity
                }
            }, {
                key: "hasMultiDiversity",
                get: function() {
                    return this.emojiObject.hasMultiDiversity
                }
            }, {
                key: "hasDiversityParent",
                get: function() {
                    return this.emojiObject.hasDiversityParent
                }
            }, {
                key: "hasMultiDiversityParent",
                get: function() {
                    return this.emojiObject.hasMultiDiversityParent
                }
            }, {
                key: "managed",
                get: function() {
                    return !0
                }
            }, {
                key: "animated",
                get: function() {
                    return !1
                }
            }, {
                key: "defaultDiversityChild",
                get: function() {
                    if (this.hasDiversity && null != c) {
                        var e = function(e) {
                            var t = i.default.convert.toCodePoint(e);
                            return null != t ? t : ""
                        }(c);
                        return this.diversityChildren[e]
                    }
                    return null
                }
            }, {
                key: "url",
                get: function() {
                    var e = this.defaultDiversityChild;
                    return null != e ? a.default.getURL(e.surrogates) : a.default.getURL(this.surrogates)
                }
            }, {
                key: "name",
                get: function() {
                    return this.hasDiversity && null != c ? "".concat(this.uniqueName, "::").concat(E[c]) : this.uniqueName
                }
            }, {
                key: "optionallyDiverseSequence",
                get: function() {
                    var e = this.defaultDiversityChild;
                    return null != e ? e.surrogates : this.surrogates
                }
            }, {
                key: "forEachDiversity",
                value: function(e) {
                    null != this.diversityChildren && o().each(this.diversityChildren, e)
                }
            }, {
                key: "forEachName",
                value: function(e) {
                    o().each(this.names, e)
                }
            }, {
                key: "setSpriteSheetIndex",
                value: function(e) {
                    this.index = e, this.useSpriteSheet = !0
                }
            }], s(e.prototype, t), n && s(e, n), r
        }(),
        N = n("5420");
    for (var R in N) {
        var C = N[R].map(function(e) {
            var t = new b(e),
                n = t.surrogates,
                r = t.uniqueName;
            if (t.setSpriteSheetIndex(t.hasDiversity ? m++ : y++), E[n] = r, 0 > n.indexOf("‍")) {
                var o = n.replace("️", "");
                o !== n && (E[o] = r)
            }
            var i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = t.names[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                    var c = s.value;
                    d[c] = t, _[c] = n
                }
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !i && null != l.return && l.return()
                } finally {
                    if (a) throw u
                }
            }
            var f = t.diversityChildren;
            for (var h in f) {
                var O = f[h],
                    T = O.surrogates,
                    S = !0,
                    v = !1,
                    g = void 0;
                try {
                    for (var A, N = O.names[Symbol.iterator](); !(S = (A = N.next()).done); S = !0) {
                        var R = A.value;
                        d[R] = O, _[R] = T
                    }
                } catch (e) {
                    v = !0, g = e
                } finally {
                    try {
                        !S && null != N.return && N.return()
                    } finally {
                        if (v) throw g
                    }
                }
                if (!e.hasMultiDiversity) {
                    var C = I[O.emojiObject.diversity[0]],
                        P = !0,
                        D = !1,
                        L = void 0;
                    try {
                        for (var M, U = e.names[Symbol.iterator](); !(P = (M = U.next()).done); P = !0) {
                            var w = M.value,
                                k = "".concat(w, "::skin-tone-").concat(C + 1);
                            _[k] = T, d[k] = O
                        }
                    } catch (e) {
                        D = !0, L = e
                    } finally {
                        try {
                            !P && null != U.return && U.return()
                        } finally {
                            if (D) throw L
                        }
                    }
                }
                E[T] = O.uniqueName
            }
            return p.push(t), t
        });
        f[R] = a.default.filterUnsupportedEmojis(C)
    }

    function P(e) {
        var t = E[e];
        return null != t ? {
            type: "emoji",
            surrogate: e,
            emojiName: ":".concat(t, ":")
        } : {
            type: "text",
            text: e
        }
    }
    var D = String.fromCodePoint(917631),
        L = String.fromCodePoint(127988),
        M = RegExp("^[\\u{E0061}-\\u{E007A}]$", "u");

    function U(e, t) {
        if (!0 !== t && !S.test(e)) return [{
            type: "text",
            text: e
        }];
        for (var n, r = "", o = [], i = null !== (n = e.match(v)) && void 0 !== n ? n : [], a = 0; a < i.length; a++) {
            var u = i[a];
            if (null != r && "" !== r) {
                if (u === D) u = r + u, r = "";
                else if (M.test(u)) {
                    r += u;
                    continue
                } else o.push(P(r)), r = ""
            } else if (u === L) {
                r = u;
                continue
            }
            var s = P(u);
            if (o.length > 0) {
                var l = o[o.length - 1];
                if ("text" === s.type && "text" === l.type) {
                    l.text += s.text;
                    continue
                }
            }
            o.push(s)
        }
        return null != r && "" !== r && o.push(P(r)), o
    }

    function w(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return Object.prototype.hasOwnProperty.call(_, e) ? _[e] : t
    }
    t.default = {
        getDefaultDiversitySurrogate: function() {
            return c
        },
        setDefaultDiversitySurrogate: function(e) {
            c = null != e && "" !== e ? e : null
        },
        getCategories: function() {
            return Object.keys(f)
        },
        getByName: function(e) {
            return Object.prototype.hasOwnProperty.call(d, e) ? d[e] : null
        },
        getByCategory: function(e) {
            return f[e]
        },
        translateInlineEmojiToSurrogates: function(e) {
            return e.replace(O, function(e, t) {
                return w(t, e)
            })
        },
        maybeTranslateSurrogatesToInlineEmoji: function(e) {
            if (!S.test(e)) return null;
            var t = U(e, !0).map(function(e) {
                return "text" === e.type ? e.text : e.emojiName
            }).join("");
            return t === e ? null : t
        },
        findInlineEmojisFromSurrogates: U,
        translateSurrogatesToInlineEmoji: function(e) {
            return U(e).map(function(e) {
                return "text" === e.type ? e.text : e.emojiName
            }).join("")
        },
        convertNameToSurrogate: w,
        convertSurrogateToName: function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = n;
            return Object.prototype.hasOwnProperty.call(E, e) && (r = E[e]), t ? ":".concat(r, ":") : r
        },
        convertShortcutToName: function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = n;
            return Object.prototype.hasOwnProperty.call(T, e) && (r = T[e]), t ? ":".concat(r, ":") : r
        },
        forEach: function(e) {
            return o().each(p, e)
        },
        all: function() {
            return p
        },
        numDiversitySprites: m,
        numNonDiversitySprites: y,
        EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
        EMOJI_NAME_AND_DIVERSITY_RE: O,
        EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
        hasSurrogates: function(e) {
            return o().toArray(e).some(function(e) {
                return null != E[e]
            })
        }
    }
}