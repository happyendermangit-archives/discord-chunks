function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComponentTypes: function() {
            return o
        },
        getFilterAutocompletions: function() {
            return et
        },
        getRandomDateShortcut: function() {
            return K
        },
        refreshSearchTokens: function() {
            return ee
        }
    });
    var r, o, i = n("658722"),
        a = n.n(i),
        u = n("392711"),
        s = n.n(u),
        l = n("913527"),
        c = n.n(l),
        f = n("29604"),
        d = n("776982"),
        _ = n("529996"),
        E = n("894288"),
        p = n("63116"),
        m = n("930949"),
        y = n("208454"),
        I = n("378309"),
        h = n("949011"),
        O = n("830567"),
        T = n("281767"),
        S = n("941504");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function N(e, t) {
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
        }(e, t) || C(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function R(e) {
        return function(e) {
            if (Array.isArray(e)) return v(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || C(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function C(e, t) {
        if (e) {
            if ("string" == typeof e) return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
        }
    }

    function P() {
        return new Set(c().months().map(function(e) {
            return e.toLowerCase()
        }))
    }

    function D() {
        return new Set(c().weekdays().map(function(e) {
            return e.toLowerCase()
        }))
    }

    function L() {
        var e = new Date().getFullYear();
        return new Set(s().range(2015, e + 1).map(function(e) {
            return e.toString()
        }))
    }

    function M(e, t) {
        return [e, e.clone().add(1, t)]
    }

    function U(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return M(c()().startOf(e).add(t, e), e)
    }

    function w(e, t, n) {
        return M(c()(e, t).local(), n)
    }

    function k() {
        var e;
        return g(e = {}, S.default.Messages.SEARCH_SHORTCUT_TODAY, function() {
            return U("day")
        }), g(e, S.default.Messages.SEARCH_SHORTCUT_YESTERDAY, function() {
            return U("day", -1)
        }), g(e, S.default.Messages.SEARCH_SHORTCUT_WEEK, function() {
            return U("week")
        }), g(e, S.default.Messages.SEARCH_SHORTCUT_MONTH, function() {
            return U("month")
        }), g(e, S.default.Messages.SEARCH_SHORTCUT_YEAR, function() {
            return U("year")
        }), e
    }
    var G = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
        B = RegExp("\\s*(true|false)", "i");

    function j(e) {
        return "".concat(e, ":")
    }

    function F(e) {
        return RegExp(j(e), "i")
    }

    function V(e) {
        var t, n = e.getMatch(1),
            r = function(e) {
                return null != e ? null == e ? void 0 : e.id : null
            };
        return null != (t = T.ID_REGEX.test(n) ? n : n === T.ME ? r(y.default.getCurrentUser()) : null != e.getMatch(4) ? r(y.default.findByTag(e.getMatch(4))) : r(y.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
    }

    function H(e, t) {
        var n, r, o, i, a, u, s, l = e.getFullMatch().trim().toLowerCase(),
            c = k()[l];
        return null != c ? (n = (o = N(c(), 2))[0], r = o[1]) : P().has(l) ? (n = (i = N(w(l, "MMMM", "month"), 2))[0], r = i[1]) : D().has(l) ? (n = (a = N(w(l, "dddd", "day"), 2))[0], r = a[1]) : L().has(l) ? (n = (u = N(w(l, "YYYY", "year"), 2))[0], r = u[1]) : (n = (s = N(w(l, T.SEARCH_DATE_FORMAT, "day"), 2))[0], r = s[1]), !!(n.isValid() && r.isValid()) && ("before" === t ? (r = n, n = null) : "after" === t && (n = r, r = null), e.setData("start", n), e.setData("end", r), !0)
    }

    function x(e) {
        var t = e.getMatch(1),
            n = p.default.getGuildId(),
            r = f.default.getChannels(n)[f.GUILD_SELECTABLE_CHANNELS_KEY].concat(f.default.getChannels(n)[f.GUILD_VOCAL_CHANNELS_KEY]),
            o = f.default.getTextChannelNameDisambiguations(n),
            i = s().chain(r).map(function(e) {
                return e.channel
            }).find(function(e) {
                var n, r;
                return t === (null !== (r = null === (n = o[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : e.name)
            }).value();
        return null != i && (e.setData("channel", i), !0)
    }

    function Y(e) {
        var t, n = (g(t = {}, S.default.Messages.SEARCH_ANSWER_HAS_LINK, "link"), g(t, S.default.Messages.SEARCH_ANSWER_HAS_EMBED, "embed"), g(t, S.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, "file"), g(t, S.default.Messages.SEARCH_ANSWER_HAS_VIDEO, "video"), g(t, S.default.Messages.SEARCH_ANSWER_HAS_IMAGE, "image"), g(t, S.default.Messages.SEARCH_ANSWER_HAS_SOUND, "sound"), g(t, S.default.Messages.SEARCH_ANSWER_HAS_STICKER, "sticker"), t)[e.getMatch(1)];
        return null != n && "" !== n && (e.setData("has", n), !0)
    }

    function W() {
        return R(Array.from(P())).concat(R(Array.from(D())), R(Array.from(L())), R(Object.keys(k())))
    }

    function K() {
        return s().sample(W())
    }

    function z(e, t, n) {
        return X(e, t, W()).map(function(e) {
            return b(A({}, e), {
                group: n,
                key: "".concat(n, "-").concat(e.text)
            })
        })
    }

    function X(e, t, n) {
        var r = e.toLocaleLowerCase();
        return s()(n).filter(function(e) {
            return a()(r, e.toLocaleLowerCase())
        }).take(t).map(function(e) {
            return {
                text: e
            }
        }).value()
    }

    function q(e, t) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = _.default.getSearchType(t),
            a = {
                query: e = e.split("#")[0],
                limit: r,
                request: o
            };
        switch (i) {
            case T.SearchTypes.GUILD:
                n = I.default.queryGuildUsers(b(A({}, a), {
                    guildId: t
                }));
                break;
            case T.SearchTypes.CHANNEL:
                n = I.default.queryChannelUsers(b(A({}, a), {
                    channelId: t
                }));
                break;
            case T.SearchTypes.DMS:
                n = I.default.queryUsers(e, r, !0, o, function() {
                    return !0
                });
                break;
            default:
                return []
        }
        return n.filter(function(e) {
            var t = e.record;
            return !d.default.isBlocked(t.id)
        }).map(function(e) {
            var t = e.record;
            return {
                text: O.default.getUserTag(t),
                user: t
            }
        })
    }

    function Q() {
        return _.default.getSearchType() === T.SearchTypes.GUILD
    }

    function J() {
        return !m.default.hidePersonalInformation
    }
    var Z = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
    (r = o || (o = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
    var $ = {};

    function ee() {
        var e, t;
        Object.assign($, (t = [S.default.Messages.SEARCH_ANSWER_HAS_LINK, S.default.Messages.SEARCH_ANSWER_HAS_EMBED, S.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, S.default.Messages.SEARCH_ANSWER_HAS_VIDEO, S.default.Messages.SEARCH_ANSWER_HAS_IMAGE, S.default.Messages.SEARCH_ANSWER_HAS_SOUND, S.default.Messages.SEARCH_ANSWER_HAS_STICKER], g(e = {}, T.SearchTokenTypes.FILTER_FROM, {
            regex: F(S.default.Messages.SEARCH_FILTER_FROM),
            componentType: "FILTER",
            key: j(S.default.Messages.SEARCH_FILTER_FROM),
            plainText: S.default.Messages.SEARCH_FILTER_FROM,
            validator: J,
            getAutocompletions: q
        }), g(e, T.SearchTokenTypes.ANSWER_USERNAME_FROM, {
            follows: [T.SearchTokenTypes.FILTER_FROM],
            regex: Z,
            validator: V,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id"
        }), g(e, T.SearchTokenTypes.FILTER_MENTIONS, {
            regex: F(S.default.Messages.SEARCH_FILTER_MENTIONS),
            componentType: "FILTER",
            key: j(S.default.Messages.SEARCH_FILTER_MENTIONS),
            plainText: S.default.Messages.SEARCH_FILTER_MENTIONS,
            validator: J,
            getAutocompletions: q
        }), g(e, T.SearchTokenTypes.ANSWER_USERNAME_MENTIONS, {
            follows: [T.SearchTokenTypes.FILTER_MENTIONS],
            regex: Z,
            validator: V,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions"
        }), g(e, T.SearchTokenTypes.FILTER_HAS, {
            regex: F(S.default.Messages.SEARCH_FILTER_HAS),
            componentType: "FILTER",
            key: j(S.default.Messages.SEARCH_FILTER_HAS),
            plainText: S.default.Messages.SEARCH_FILTER_HAS,
            getAutocompletions: function(e, n, r) {
                return X(e, r, t)
            }
        }), g(e, T.SearchTokenTypes.ANSWER_HAS, {
            regex: RegExp("(?:\\s*-?(".concat(t.map(function(e) {
                return h.default.escape(e)
            }).join("|"), "))"), "i"),
            follows: [T.SearchTokenTypes.FILTER_HAS],
            validator: Y,
            componentType: "ANSWER",
            queryKey: "has"
        }), g(e, T.SearchTokenTypes.FILTER_FILE_TYPE, {
            regex: F(S.default.Messages.SEARCH_FILTER_FILE_TYPE),
            key: j(S.default.Messages.SEARCH_FILTER_FILE_TYPE),
            plainText: S.default.Messages.SEARCH_FILTER_FILE_TYPE,
            componentType: "FILTER"
        }), g(e, T.SearchTokenTypes.ANSWER_FILE_TYPE, {
            regex: /(?:\s*([^\s]+))/,
            follows: [T.SearchTokenTypes.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extensions"
        }), g(e, T.SearchTokenTypes.FILTER_FILE_NAME, {
            regex: F(S.default.Messages.SEARCH_FILTER_FILE_NAME),
            key: j(S.default.Messages.SEARCH_FILTER_FILE_NAME),
            plainText: S.default.Messages.SEARCH_FILTER_FILE_NAME,
            componentType: "FILTER"
        }), g(e, T.SearchTokenTypes.ANSWER_FILE_NAME, {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [T.SearchTokenTypes.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename"
        }), g(e, T.SearchTokenTypes.FILTER_BEFORE, {
            regex: F(S.default.Messages.SEARCH_FILTER_BEFORE),
            componentType: "FILTER",
            key: j(S.default.Messages.SEARCH_FILTER_BEFORE),
            plainText: S.default.Messages.SEARCH_FILTER_BEFORE,
            getAutocompletions: function(e, t, n) {
                return z(e, n, T.SearchTokenTypes.FILTER_BEFORE)
            }
        }), g(e, T.SearchTokenTypes.FILTER_ON, {
            regex: F("(".concat(S.default.Messages.SEARCH_FILTER_ON, "|").concat(S.default.Messages.SEARCH_FILTER_DURING, ")")),
            componentType: "FILTER",
            key: j(S.default.Messages.SEARCH_FILTER_DURING),
            plainText: S.default.Messages.SEARCH_FILTER_DURING,
            getAutocompletions: function(e, t, n) {
                return z(e, n, T.SearchTokenTypes.FILTER_ON)
            }
        }), g(e, T.SearchTokenTypes.FILTER_AFTER, {
            regex: F(S.default.Messages.SEARCH_FILTER_AFTER),
            componentType: "FILTER",
            key: j(S.default.Messages.SEARCH_FILTER_AFTER),
            plainText: S.default.Messages.SEARCH_FILTER_AFTER,
            getAutocompletions: function(e, t, n) {
                return z(e, n, T.SearchTokenTypes.FILTER_AFTER)
            }
        }), g(e, T.SearchTokenTypes.ANSWER_BEFORE, {
            regex: G,
            follows: [T.SearchTokenTypes.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: function(e) {
                return H(e, "before")
            }
        }), g(e, T.SearchTokenTypes.ANSWER_ON, {
            regex: G,
            follows: [T.SearchTokenTypes.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: function(e) {
                return H(e, "on")
            }
        }), g(e, T.SearchTokenTypes.ANSWER_AFTER, {
            regex: G,
            follows: [T.SearchTokenTypes.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: function(e) {
                return H(e, "after")
            }
        }), g(e, T.SearchTokenTypes.FILTER_IN, {
            regex: F(S.default.Messages.SEARCH_FILTER_IN),
            componentType: "FILTER",
            key: j(S.default.Messages.SEARCH_FILTER_IN),
            plainText: S.default.Messages.SEARCH_FILTER_IN,
            validator: Q,
            getAutocompletions: function(e, t, n) {
                "#" === e[0] && (e = e.substring(1));
                var r = I.default.queryChannels({
                    query: e,
                    type: f.GUILD_SELECTABLE_CHANNELS_KEY,
                    guildId: t,
                    limit: 1 / 0
                }).concat(I.default.queryChannels({
                    query: e,
                    type: f.GUILD_VOCAL_CHANNELS_KEY,
                    guildId: t,
                    limit: 1 / 0
                })).map(function(e) {
                    return e.record
                }).filter(function(e) {
                    return !e.isThread()
                });
                if ("" === e.trim()) {
                    var o = E.default.getChannelId(t),
                        i = r.find(function(e) {
                            return e.id === o
                        });
                    null != i && (r.splice(r.indexOf(i), 1), r.unshift(i))
                }
                var a = f.default.getTextChannelNameDisambiguations(t);
                return s()(r).take(n).map(function(e) {
                    var t, n;
                    return {
                        text: "".concat(null !== (n = null === (t = a[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                        channel: e
                    }
                }).value()
            }
        }), g(e, T.SearchTokenTypes.ANSWER_IN, {
            regex: /(?:\s*#?([^ ]+))/i,
            mutable: !0,
            follows: [T.SearchTokenTypes.FILTER_IN],
            componentType: "ANSWER",
            validator: x,
            queryKey: "channel_id"
        }), g(e, T.SearchTokenTypes.FILTER_PINNED, {
            regex: F(S.default.Messages.SEARCH_FILTER_PINNED),
            componentType: "FILTER",
            key: j(S.default.Messages.SEARCH_FILTER_PINNED),
            plainText: S.default.Messages.SEARCH_FILTER_PINNED,
            getAutocompletions: function() {
                return [{
                    text: "true"
                }, {
                    text: "false"
                }]
            }
        }), g(e, T.SearchTokenTypes.ANSWER_PINNED, {
            regex: B,
            componentType: "ANSWER",
            follows: [T.SearchTokenTypes.FILTER_PINNED],
            queryKey: "pinned",
            validator: function(e) {
                var t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
            }
        }), e))
    }

    function et(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys($).length;
        return s()($).keys().filter(function(e) {
            return T.IS_SEARCH_FILTER_TOKEN.test(e)
        }).filter(function(e) {
            return null != $[e].key
        }).map(function(e) {
            return {
                token: e,
                text: $[e].key
            }
        }).filter(function(t) {
            var n = t.text;
            return a()(e.toLowerCase(), n)
        }).take(t).value()
    }
    t.default = $
}