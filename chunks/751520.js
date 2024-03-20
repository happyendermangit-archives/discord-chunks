function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSearchOptionAnswer: function() {
            return d
        },
        setIncludeNSFW: function() {
            return T
        },
        getSearchQueryFromTokens: function() {
            return f
        },
        getSelectionScope: function() {
            return S
        },
        getAutocompleteMode: function() {
            return h
        },
        getFlattenedStringArray: function() {
            return R
        },
        getTotalResults: function() {
            return p
        },
        getQueryFromTokens: function() {
            return A
        },
        tokenizeQuery: function() {
            return N
        },
        clearTokenCache: function() {
            return I
        },
        showDatePicker: function() {
            return y
        },
        filterHasAnswer: function() {
            return m
        },
        refreshSearchTokens: function() {
            return M
        }
    }), n("222007"), n("808653");
    var l = n("917351"),
        a = n.n(l),
        r = n("76385"),
        u = n("955513"),
        s = n("247013"),
        o = n("697218"),
        i = n("299039"),
        c = n("49111"),
        E = n("782340");

    function d(e) {
        switch (e) {
            case c.SearchTokenTypes.FILTER_FROM:
                return E.default.Messages.SEARCH_ANSWER_FROM;
            case c.SearchTokenTypes.FILTER_MENTIONS:
                return E.default.Messages.SEARCH_ANSWER_MENTIONS;
            case c.SearchTokenTypes.FILTER_HAS:
                return E.default.Messages.SEARCH_ANSWER_HAS;
            case c.SearchTokenTypes.FILTER_BEFORE:
            case c.SearchTokenTypes.FILTER_ON:
            case c.SearchTokenTypes.FILTER_AFTER:
                return E.default.Messages.SEARCH_ANSWER_DATE;
            case c.SearchTokenTypes.FILTER_IN:
                return E.default.Messages.SEARCH_ANSWER_IN;
            case c.SearchTokenTypes.FILTER_FILE_TYPE:
                return E.default.Messages.SEARCH_ANSWER_FILE_TYPE;
            case c.SearchTokenTypes.FILTER_FILE_NAME:
                return E.default.Messages.SEARCH_ANSWER_FILE_NAME;
            case c.SearchTokenTypes.FILTER_PINNED:
                return E.default.Messages.SEARCH_ANSWER_BOOLEAN
        }
    }
    let _ = {
        [c.SearchTokenTypes.FILTER_BEFORE]: !0,
        [c.SearchTokenTypes.FILTER_AFTER]: !0,
        [c.SearchTokenTypes.FILTER_ON]: !0
    };

    function T(e, t) {
        if (s.default.didAgree(t)) {
            let t = o.default.getCurrentUser();
            null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
        }
    }

    function f(e) {
        let t = {};
        for (let [n, l] of(e.forEach(e => {
                let {
                    type: n
                } = e;
                if (c.IS_SEARCH_FILTER_TOKEN.test(n)) return;
                switch (n) {
                    case c.SearchTokenTypes.ANSWER_BEFORE:
                    case c.SearchTokenTypes.ANSWER_ON:
                    case c.SearchTokenTypes.ANSWER_AFTER:
                        let l = e.getData("start"),
                            a = e.getData("end");
                        l && (t.min_id = i.default.fromTimestamp(l)), a && (t.max_id = i.default.fromTimestamp(a));
                        return
                }
                let r = function(e) {
                    let t = u.default[e],
                        n = null != t ? t.queryKey : null;
                    return null == n && (n = "content"), n
                }(n);
                null == t[r] && (t[r] = new Set);
                let s = t[r];
                switch (n) {
                    case c.SearchTokenTypes.ANSWER_USERNAME_FROM:
                    case c.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                        s.add(e.getData("userId"));
                        break;
                    case c.SearchTokenTypes.ANSWER_FILE_TYPE:
                    case c.SearchTokenTypes.ANSWER_FILE_NAME:
                        s.add(e.getMatch(1));
                        break;
                    case c.SearchTokenTypes.ANSWER_IN:
                        s.add(e.getData("channel").id);
                        break;
                    case c.SearchTokenTypes.ANSWER_HAS:
                        s.add(e.getData("has"));
                        break;
                    case c.SearchTokenTypes.ANSWER_PINNED:
                        s.add(e.getData("pinned"));
                        break;
                    default:
                        s.add(e.getFullMatch().trim())
                }
            }), Object.entries(t))) l instanceof Set && (t[n] = Array.from(l));
        return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
    }

    function S(e, t, n) {
        let l, a;
        let r = e.find((r, u) => t >= r.start && t <= r.end && n >= r.start && n <= r.end ? (null != e[u + 1] && (a = e[u + 1]), !0) : (l = r, !1));
        return null == r ? null : {
            previousToken: l,
            currentToken: r,
            nextToken: a,
            focusOffset: t,
            anchorOffset: n
        }
    }

    function h(e, t) {
        let n;
        e = null != e ? e : {};
        let {
            currentToken: l,
            nextToken: a,
            previousToken: u
        } = e;
        if (0 === t.length) return {
            type: c.SearchPopoutModes.EMPTY,
            filter: null,
            token: null
        };
        if (null == l) return {
            type: c.SearchPopoutModes.FILTER_ALL,
            filter: null,
            token: null
        };
        if (c.IS_SEARCH_FILTER_TOKEN.test(l.type)) {
            if (null == a || a.type === r.default.NON_TOKEN_TYPE) return {
                type: c.SearchPopoutModes.FILTER,
                filter: l.type,
                token: a
            };
            if (null != a && !c.IS_SEARCH_ANSWER_TOKEN.test(a.type)) return {
                type: c.SearchPopoutModes.FILTER,
                filter: l.type,
                token: null
            }
        }
        return l.type === r.default.NON_TOKEN_TYPE && null != u && c.IS_SEARCH_FILTER_TOKEN.test(u.type) ? {
            type: c.SearchPopoutModes.FILTER,
            filter: u.type,
            token: l
        } : (l.type === r.default.NON_TOKEN_TYPE && (n = l), {
            type: c.SearchPopoutModes.FILTER_ALL,
            filter: null,
            token: n
        })
    }

    function R(e, t) {
        let n = [];
        return a(e).forEach(e => {
            if (null == e || 0 === e.results.length) return;
            let l = e.group;
            n = n.concat(e.results.map(e => {
                let n = e.text;
                if (t === c.SearchPopoutModes.FILTER_ALL) {
                    var a;
                    l = null !== (a = e.group) && void 0 !== a ? a : l;
                    let t = u.default[l];
                    (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== "" && (n = "".concat(t.key, " ").concat(n))
                }
                return n
            }))
        }), n.filter(e => e)
    }

    function p(e) {
        return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
    }

    function A(e) {
        return null == e ? "" : e.map(e => e.getFullMatch()).join("")
    }
    let g = new r.default;

    function N(e) {
        return g.tokenize(e)
    }

    function I() {
        return g.clearCache()
    }

    function y(e) {
        return null != e ? _[e] : null
    }

    function m(e, t) {
        let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
        return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
    }

    function M() {
        (0, u.refreshSearchTokens)(), g.reset(), a(u.default).forOwn((e, t) => g.addRule({
            type: t,
            ...e
        }))
    }
}