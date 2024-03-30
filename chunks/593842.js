function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearTokenCache: function() {
            return b
        },
        filterHasAnswer: function() {
            return R
        },
        getAutocompleteMode: function() {
            return O
        },
        getFlattenedStringArray: function() {
            return T
        },
        getQueryFromTokens: function() {
            return v
        },
        getSearchOptionAnswer: function() {
            return p
        },
        getSearchQueryFromTokens: function() {
            return I
        },
        getSelectionScope: function() {
            return h
        },
        getTotalResults: function() {
            return S
        },
        refreshSearchTokens: function() {
            return C
        },
        setIncludeNSFW: function() {
            return y
        },
        showDatePicker: function() {
            return N
        },
        tokenizeQuery: function() {
            return A
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("541709"),
        u = n("688065"),
        s = n("906963"),
        l = n("208454"),
        c = n("523018"),
        f = n("281767"),
        d = n("941504");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        switch (e) {
            case f.SearchTokenTypes.FILTER_FROM:
                return d.default.Messages.SEARCH_ANSWER_FROM;
            case f.SearchTokenTypes.FILTER_MENTIONS:
                return d.default.Messages.SEARCH_ANSWER_MENTIONS;
            case f.SearchTokenTypes.FILTER_HAS:
                return d.default.Messages.SEARCH_ANSWER_HAS;
            case f.SearchTokenTypes.FILTER_BEFORE:
            case f.SearchTokenTypes.FILTER_ON:
            case f.SearchTokenTypes.FILTER_AFTER:
                return d.default.Messages.SEARCH_ANSWER_DATE;
            case f.SearchTokenTypes.FILTER_IN:
                return d.default.Messages.SEARCH_ANSWER_IN;
            case f.SearchTokenTypes.FILTER_FILE_TYPE:
                return d.default.Messages.SEARCH_ANSWER_FILE_TYPE;
            case f.SearchTokenTypes.FILTER_FILE_NAME:
                return d.default.Messages.SEARCH_ANSWER_FILE_NAME;
            case f.SearchTokenTypes.FILTER_PINNED:
                return d.default.Messages.SEARCH_ANSWER_BOOLEAN
        }
    }
    var m = (E(r = {}, f.SearchTokenTypes.FILTER_BEFORE, !0), E(r, f.SearchTokenTypes.FILTER_AFTER, !0), E(r, f.SearchTokenTypes.FILTER_ON, !0), r);

    function y(e, t) {
        if (s.default.didAgree(t)) {
            var n = l.default.getCurrentUser();
            null != n && (e.include_nsfw = null == n.nsfwAllowed || n.nsfwAllowed)
        }
    }

    function I(e) {
        var t = {};
        e.forEach(function(e) {
            var n = e.type;
            if (!f.IS_SEARCH_FILTER_TOKEN.test(n)) {
                switch (n) {
                    case f.SearchTokenTypes.ANSWER_BEFORE:
                    case f.SearchTokenTypes.ANSWER_ON:
                    case f.SearchTokenTypes.ANSWER_AFTER:
                        var r, o, i, a = e.getData("start"),
                            s = e.getData("end");
                        a && (t.min_id = c.default.fromTimestamp(a)), s && (t.max_id = c.default.fromTimestamp(s));
                        return
                }
                var l = (r = n, null == (i = null != (o = u.default[r]) ? o.queryKey : null) && (i = "content"), i);
                null == t[l] && (t[l] = new Set);
                var d = t[l];
                switch (n) {
                    case f.SearchTokenTypes.ANSWER_USERNAME_FROM:
                    case f.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                        d.add(e.getData("userId"));
                        break;
                    case f.SearchTokenTypes.ANSWER_FILE_TYPE:
                    case f.SearchTokenTypes.ANSWER_FILE_NAME:
                        d.add(e.getMatch(1));
                        break;
                    case f.SearchTokenTypes.ANSWER_IN:
                        d.add(e.getData("channel").id);
                        break;
                    case f.SearchTokenTypes.ANSWER_HAS:
                        d.add(e.getData("has"));
                        break;
                    case f.SearchTokenTypes.ANSWER_PINNED:
                        d.add(e.getData("pinned"));
                        break;
                    default:
                        d.add(e.getFullMatch().trim())
                }
            }
        });
        var n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = Object.entries(t)[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var s, l, d, E, p = (s = i.value, l = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(s) || function(e, t) {
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
                    }(s, l) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return _(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                        }
                    }(s, l) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    m = p[0],
                    y = p[1];
                if (d = y, E = Set, null != E && "undefined" != typeof Symbol && E[Symbol.hasInstance] ? !!E[Symbol.hasInstance](d) : d instanceof E) t[m] = Array.from(y)
            }
        } catch (e) {
            r = !0, o = e
        } finally {
            try {
                !n && null != a.return && a.return()
            } finally {
                if (r) throw o
            }
        }
        return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
    }

    function h(e, t, n) {
        var r, o, i = e.find(function(i, a) {
            return t >= i.start && t <= i.end && n >= i.start && n <= i.end ? (null != e[a + 1] && (o = e[a + 1]), !0) : (r = i, !1)
        });
        return null == i ? null : {
            previousToken: r,
            currentToken: i,
            nextToken: o,
            focusOffset: t,
            anchorOffset: n
        }
    }

    function O(e, t) {
        var n, r = (e = null != e ? e : {}).currentToken,
            o = e.nextToken,
            i = e.previousToken;
        if (0 === t.length) return {
            type: f.SearchPopoutModes.EMPTY,
            filter: null,
            token: null
        };
        if (null == r) return {
            type: f.SearchPopoutModes.FILTER_ALL,
            filter: null,
            token: null
        };
        if (f.IS_SEARCH_FILTER_TOKEN.test(r.type)) {
            if (null == o || o.type === a.default.NON_TOKEN_TYPE) return {
                type: f.SearchPopoutModes.FILTER,
                filter: r.type,
                token: o
            };
            if (null != o && !f.IS_SEARCH_ANSWER_TOKEN.test(o.type)) return {
                type: f.SearchPopoutModes.FILTER,
                filter: r.type,
                token: null
            }
        }
        return r.type === a.default.NON_TOKEN_TYPE && null != i && f.IS_SEARCH_FILTER_TOKEN.test(i.type) ? {
            type: f.SearchPopoutModes.FILTER,
            filter: i.type,
            token: r
        } : (r.type === a.default.NON_TOKEN_TYPE && (n = r), {
            type: f.SearchPopoutModes.FILTER_ALL,
            filter: null,
            token: n
        })
    }

    function T(e, t) {
        var n = [];
        return i()(e).forEach(function(e) {
            if (null != e && 0 !== e.results.length) {
                var r = e.group;
                n = n.concat(e.results.map(function(e) {
                    var n = e.text;
                    if (t === f.SearchPopoutModes.FILTER_ALL) {
                        r = null !== (o = e.group) && void 0 !== o ? o : r;
                        var o, i = u.default[r];
                        (null == i ? void 0 : i.key) != null && (null == i ? void 0 : i.key) !== "" && (n = "".concat(i.key, " ").concat(n))
                    }
                    return n
                }))
            }
        }), n.filter(function(e) {
            return e
        })
    }

    function S(e) {
        return e.reduce(function(e, t) {
            return null == t ? e : t.results.length + e
        }, 0)
    }

    function v(e) {
        return null == e ? "" : e.map(function(e) {
            return e.getFullMatch()
        }).join("")
    }
    var g = new a.default;

    function A(e) {
        return g.tokenize(e)
    }

    function b() {
        return g.clearCache()
    }

    function N(e) {
        return null != e ? m[e] : null
    }

    function R(e, t) {
        var n = f.IS_SEARCH_FILTER_TOKEN.test(e.type);
        return (null != t || !n) && (null == t || !n || !!f.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
    }

    function C() {
        (0, u.refreshSearchTokens)(), g.reset(), i()(u.default).forOwn(function(e, t) {
            return g.addRule(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        E(e, t, n[t])
                    })
                }
                return e
            }({
                type: t
            }, e))
        })
    }
}