function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("302454"),
        a = n.n(i),
        u = n("300983"),
        s = n("27375"),
        l = n("739226"),
        c = n("676641");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t) {
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
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var _ = {
        s: {
            requiredFirstCharacters: ["~"],
            match: a().inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
        },
        highlight: {
            order: c.default.order,
            match: function() {
                return null
            }
        },
        emoji: {
            order: c.default.order,
            requiredFirstCharacters: [":"],
            match: function(e) {
                var t = s.default.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
                return null != t && "" !== s.default.convertNameToSurrogate(t[1]) ? t : null
            },
            parse: function(e) {
                var t = d(e, 2),
                    n = t[0],
                    r = t[1],
                    o = s.default.convertNameToSurrogate(r);
                return null == o || "" === o ? {
                    type: "text",
                    content: n
                } : {
                    name: ":".concat(r, ":"),
                    surrogate: o,
                    src: l.default.getURL(o)
                }
            }
        },
        customEmoji: {
            order: a().defaultRules.codeBlock.order,
            requiredFirstCharacters: ["<"],
            match: function(e) {
                return /^<(a)?:(\w+):(\d+)>/.exec(e)
            },
            parse: function(e, t, n) {
                var r = d(e, 4),
                    o = (r[0], r[1]),
                    i = r[2],
                    a = r[3],
                    s = n.guildId,
                    l = u.default.getDisambiguatedEmojiContext(s).getById(a),
                    c = null == l || l.require_colons;
                return null != l && (i = l.name), {
                    emojiId: a,
                    name: c ? ":".concat(i, ":") : i,
                    animated: "a" === o
                }
            }
        },
        text: {
            parse: function(e) {
                var t = s.default.findInlineEmojisFromSurrogates(e[0]),
                    n = 0;
                return t.map(function(e) {
                    if ("text" === e.type) {
                        var t = {
                            index: n,
                            0: e.text
                        };
                        return n += e.text.length, {
                            type: "text",
                            content: e.text,
                            originalMatch: t
                        }
                    }
                    var r = {
                        index: n,
                        0: e.surrogate
                    };
                    return n += e.surrogate.length, {
                        type: "emoji",
                        name: e.emojiName,
                        surrogate: e.surrogate,
                        src: l.default.getURL(e.surrogate),
                        originalMatch: r
                    }
                })
            }
        },
        looseEm: (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, a().defaultRules.em), o = (o = {
            match: a().inlineRegex(RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
            parse: function(e, t, n) {
                return {
                    type: "em",
                    content: t(e[1], n),
                    originalMatch: e
                }
            }
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r)
    };
    t.default = _
}