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
            return g
        },
        clearTokenCache: function() {
            return N
        },
        showDatePicker: function() {
            return M
        },
        filterHasAnswer: function() {
            return y
        },
        refreshSearchTokens: function() {
            return m
        }
    }), n("222007"), n("808653");
    var l = n("917351"),
        r = n.n(l),
        a = n("76385"),
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
                            r = e.getData("end");
                        l && (t.min_id = i.default.fromTimestamp(l)), r && (t.max_id = i.default.fromTimestamp(r));
                        return
                }
                let a = function(e) {
                    let t = u.default[e],
                        n = null != t ? t.queryKey : null;
                    return null == n && (n = "content"), n
                }(n);
                null == t[a] && (t[a] = new Set);
                let s = t[a];
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
        let l, r;
        let a = e.find((a, u) => t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[u + 1] && (r = e[u + 1]), !0) : (l = a, !1));
        return null == a ? null : {
            previousToken: l,
            currentToken: a,
            nextToken: r,
            focusOffset: t,
            anchorOffset: n
        }
    }

    function h(e, t) {
        let n;
        e = null != e ? e : {};
        let {
            currentToken: l,
            nextToken: r,
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
            if (null == r || r.type === a.default.NON_TOKEN_TYPE) return {
                type: c.SearchPopoutModes.FILTER,
                filter: l.type,
                token: r
            };
            if (null != r && !c.IS_SEARCH_ANSWER_TOKEN.test(r.type)) return {
                type: c.SearchPopoutModes.FILTER,
                filter: l.type,
                token: null
            }
        }
        return l.type === a.default.NON_TOKEN_TYPE && null != u && c.IS_SEARCH_FILTER_TOKEN.test(u.type) ? {
            type: c.SearchPopoutModes.FILTER,
            filter: u.type,
            token: l
        } : (l.type === a.default.NON_TOKEN_TYPE && (n = l), {
            type: c.SearchPopoutModes.FILTER_ALL,
            filter: null,
            token: n
        })
    }

    function R(e, t) {
        let n = [];
        return r(e).forEach(e => {
            if (null == e || 0 === e.results.length) return;
            let l = e.group;
            n = n.concat(e.results.map(e => {
                let n = e.text;
                if (t === c.SearchPopoutModes.FILTER_ALL) {
                    var r;
                    l = null !== (r = e.group) && void 0 !== r ? r : l;
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
    let I = new a.default;

    function g(e) {
        return I.tokenize(e)
    }

    function N() {
        return I.clearCache()
    }

    function M(e) {
        return null != e ? _[e] : null
    }

    function y(e, t) {
        let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
        return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
    }

    function m() {
        (0, u.refreshSearchTokens)(), I.reset(), r(u.default).forOwn((e, t) => I.addRule({
            type: t,
            ...e
        }))
    }
}