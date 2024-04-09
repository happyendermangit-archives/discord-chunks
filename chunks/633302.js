function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DIVERSITY_SURROGATES: function() {
            return h
        }
    }), n("411104"), n("47120"), n("757143"), n("653041");
    var i = n("392711"),
        r = n.n(i),
        s = n("946188"),
        a = n("176354"),
        o = n("906411");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = null,
        d = {},
        _ = {},
        c = {},
        E = {},
        I = [],
        T = 0,
        f = 0,
        S = {
            "1f3fb": 0,
            "1f3fc": 1,
            "1f3fd": 2,
            "1f3fe": 3,
            "1f3ff": 4
        },
        h = ["\uD83C\uDFFB", "\uD83C\uDFFC", "\uD83C\uDFFD", "\uD83C\uDFFE", "\uD83C\uDFFF"],
        A = /^:([^\s:]+?(?:::skin-tone-\d)?):/,
        m = n("523558"),
        N = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/,
        O = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
    for (let e = 0; e < h.length; e++) {
        let t = h[e];
        c["skin-tone-".concat(e + 1)] = t, E[t] = "skin-tone-".concat(e + 1)
    }
    class p {
        get names() {
            return this.emojiObject.names
        }
        get allNamesString() {
            return this.names.length > 1 ? ":".concat(this.names.join(": :"), ":") : ":".concat(this.uniqueName, ":")
        }
        get unicodeVersion() {
            var e;
            return null !== (e = this.emojiObject.unicodeVersion) && void 0 !== e ? e : 0
        }
        get hasDiversity() {
            return this.emojiObject.hasDiversity
        }
        get hasMultiDiversity() {
            return this.emojiObject.hasMultiDiversity
        }
        get hasDiversityParent() {
            return this.emojiObject.hasDiversityParent
        }
        get hasMultiDiversityParent() {
            return this.emojiObject.hasMultiDiversityParent
        }
        get managed() {
            return !0
        }
        get animated() {
            return !1
        }
        get defaultDiversityChild() {
            if (this.hasDiversity && null != u) {
                let e = function(e) {
                    let t = s.default.convert.toCodePoint(e);
                    return null != t ? t : ""
                }(u);
                return this.diversityChildren[e]
            }
            return null
        }
        get url() {
            let e = this.defaultDiversityChild;
            return null != e ? a.default.getURL(e.surrogates) : a.default.getURL(this.surrogates)
        }
        get name() {
            return this.hasDiversity && null != u ? "".concat(this.uniqueName, "::").concat(E[u]) : this.uniqueName
        }
        get optionallyDiverseSequence() {
            let e = this.defaultDiversityChild;
            return null != e ? e.surrogates : this.surrogates
        }
        forEachDiversity(e) {
            null != this.diversityChildren && r().each(this.diversityChildren, e)
        }
        forEachName(e) {
            r().each(this.names, e)
        }
        setSpriteSheetIndex(e) {
            this.index = e, this.useSpriteSheet = !0
        }
        constructor(e) {
            if (l(this, "emojiObject", void 0), l(this, "type", void 0), l(this, "uniqueName", void 0), l(this, "surrogates", void 0), l(this, "diversityChildren", void 0), l(this, "originalName", void 0), l(this, "id", void 0), l(this, "guildId", void 0), l(this, "index", void 0), l(this, "useSpriteSheet", void 0), this.emojiObject = e, this.type = o.EmojiTypes.UNICODE, this.uniqueName = e.names[0], this.surrogates = e.surrogates, this.diversityChildren = {}, null != e.diversityChildren) {
                for (let t of e.diversityChildren)
                    if (null != t.diversity) {
                        let e = t.diversity.join("-");
                        this.diversityChildren[e] = new p(t)
                    }
            }
        }
    }
    let R = n("5420");
    for (let e in R) {
        let t = R[e].map(e => {
            let t = new p(e),
                n = t.surrogates,
                i = t.uniqueName;
            if (t.setSpriteSheetIndex(t.hasDiversity ? T++ : f++), E[n] = i, 0 > n.indexOf("‍")) {
                let e = n.replace("️", "");
                e !== n && (E[e] = i)
            }
            for (let e of t.names) _[e] = t, c[e] = n;
            let r = t.diversityChildren;
            for (let t in r) {
                let n = r[t],
                    i = n.surrogates;
                for (let e of n.names) _[e] = n, c[e] = i;
                if (!e.hasMultiDiversity) {
                    let t = S[n.emojiObject.diversity[0]];
                    for (let r of e.names) {
                        let e = "".concat(r, "::skin-tone-").concat(t + 1);
                        c[e] = i, _[e] = n
                    }
                }
                E[i] = n.uniqueName
            }
            return I.push(t), t
        });
        d[e] = a.default.filterUnsupportedEmojis(t)
    }

    function C(e) {
        let t = E[e];
        return null != t ? {
            type: "emoji",
            surrogate: e,
            emojiName: ":".concat(t, ":")
        } : {
            type: "text",
            text: e
        }
    }
    let g = String.fromCodePoint(917631),
        L = String.fromCodePoint(127988),
        D = /^[\u{E0061}-\u{E007A}]$/u;

    function v(e, t) {
        var n;
        if (!0 !== t && !N.test(e)) return [{
            type: "text",
            text: e
        }];
        let i = "",
            r = [],
            s = null !== (n = e.match(O)) && void 0 !== n ? n : [];
        for (let e = 0; e < s.length; e++) {
            let t = s[e];
            if (null != i && "" !== i) {
                if (t === g) t = i + t, i = "";
                else if (D.test(t)) {
                    i += t;
                    continue
                } else r.push(C(i)), i = ""
            } else if (t === L) {
                i = t;
                continue
            }
            let n = C(t);
            if (r.length > 0) {
                let e = r[r.length - 1];
                if ("text" === n.type && "text" === e.type) {
                    e.text += n.text;
                    continue
                }
            }
            r.push(n)
        }
        return null != i && "" !== i && r.push(C(i)), r
    }

    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return Object.prototype.hasOwnProperty.call(c, e) ? c[e] : t
    }
    t.default = {
        getDefaultDiversitySurrogate: function() {
            return u
        },
        setDefaultDiversitySurrogate: function(e) {
            u = null != e && "" !== e ? e : null
        },
        getCategories: function() {
            return Object.keys(d)
        },
        getByName: function(e) {
            return Object.prototype.hasOwnProperty.call(_, e) ? _[e] : null
        },
        getByCategory: function(e) {
            return d[e]
        },
        translateInlineEmojiToSurrogates: function(e) {
            return e.replace(A, (e, t) => M(t, e))
        },
        maybeTranslateSurrogatesToInlineEmoji: function(e) {
            if (!N.test(e)) return null;
            let t = v(e, !0).map(e => "text" === e.type ? e.text : e.emojiName).join("");
            return t === e ? null : t
        },
        findInlineEmojisFromSurrogates: v,
        translateSurrogatesToInlineEmoji: function(e) {
            return v(e).map(e => "text" === e.type ? e.text : e.emojiName).join("")
        },
        convertNameToSurrogate: M,
        convertSurrogateToName: function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                i = n;
            return Object.prototype.hasOwnProperty.call(E, e) && (i = E[e]), t ? ":".concat(i, ":") : i
        },
        convertShortcutToName: function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                i = n;
            return Object.prototype.hasOwnProperty.call(m, e) && (i = m[e]), t ? ":".concat(i, ":") : i
        },
        forEach: e => r().each(I, e),
        all: () => I,
        numDiversitySprites: T,
        numNonDiversitySprites: f,
        EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
        EMOJI_NAME_AND_DIVERSITY_RE: A,
        EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
        hasSurrogates: function(e) {
            return r().toArray(e).some(e => null != E[e])
        }
    }
}