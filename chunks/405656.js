function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        clearTokenCache: function() {
            return O
        },
        filterHasAnswer: function() {
            return C
        },
        getAutocompleteMode: function() {
            return S
        },
        getFlattenedStringArray: function() {
            return h
        },
        getQueryFromTokens: function() {
            return m
        },
        getSearchOptionAnswer: function() {
            return c
        },
        getSearchQueryFromTokens: function() {
            return T
        },
        getSelectionScope: function() {
            return f
        },
        getTotalResults: function() {
            return A
        },
        refreshSearchTokens: function() {
            return g
        },
        setIncludeNSFW: function() {
            return I
        },
        showDatePicker: function() {
            return R
        },
        tokenizeQuery: function() {
            return p
        }
    }), n("47120"), n("724458");
    var i = n("392711"),
        r = n.n(i),
        a = n("349033"),
        s = n("999650"),
        o = n("731290"),
        l = n("594174"),
        u = n("709054"),
        d = n("981631"),
        _ = n("689938");

    function c(e) {
        switch (e) {
            case d.SearchTokenTypes.FILTER_FROM:
                return _.default.Messages.SEARCH_ANSWER_FROM;
            case d.SearchTokenTypes.FILTER_MENTIONS:
                return _.default.Messages.SEARCH_ANSWER_MENTIONS;
            case d.SearchTokenTypes.FILTER_HAS:
                return _.default.Messages.SEARCH_ANSWER_HAS;
            case d.SearchTokenTypes.FILTER_BEFORE:
            case d.SearchTokenTypes.FILTER_ON:
            case d.SearchTokenTypes.FILTER_AFTER:
                return _.default.Messages.SEARCH_ANSWER_DATE;
            case d.SearchTokenTypes.FILTER_IN:
                return _.default.Messages.SEARCH_ANSWER_IN;
            case d.SearchTokenTypes.FILTER_FILE_TYPE:
                return _.default.Messages.SEARCH_ANSWER_FILE_TYPE;
            case d.SearchTokenTypes.FILTER_FILE_NAME:
                return _.default.Messages.SEARCH_ANSWER_FILE_NAME;
            case d.SearchTokenTypes.FILTER_PINNED:
                return _.default.Messages.SEARCH_ANSWER_BOOLEAN
        }
    }
    let E = {
        [d.SearchTokenTypes.FILTER_BEFORE]: !0,
        [d.SearchTokenTypes.FILTER_AFTER]: !0,
        [d.SearchTokenTypes.FILTER_ON]: !0
    };

    function I(e, t) {
        if (o.default.didAgree(t)) {
            let t = l.default.getCurrentUser();
            null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
        }
    }

    function T(e) {
        let t = {};
        for (let [n, i] of(e.forEach(e => {
                let {
                    type: n
                } = e;
                if (d.IS_SEARCH_FILTER_TOKEN.test(n)) return;
                switch (n) {
                    case d.SearchTokenTypes.ANSWER_BEFORE:
                    case d.SearchTokenTypes.ANSWER_ON:
                    case d.SearchTokenTypes.ANSWER_AFTER:
                        let i = e.getData("start"),
                            r = e.getData("end");
                        i && (t.min_id = u.default.fromTimestamp(i)), r && (t.max_id = u.default.fromTimestamp(r));
                        return
                }
                let a = function(e) {
                    let t = s.default[e],
                        n = null != t ? t.queryKey : null;
                    return null == n && (n = "content"), n
                }(n);
                null == t[a] && (t[a] = new Set);
                let o = t[a];
                switch (n) {
                    case d.SearchTokenTypes.ANSWER_USERNAME_FROM:
                    case d.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                        o.add(e.getData("userId"));
                        break;
                    case d.SearchTokenTypes.ANSWER_FILE_TYPE:
                    case d.SearchTokenTypes.ANSWER_FILE_NAME:
                        o.add(e.getMatch(1));
                        break;
                    case d.SearchTokenTypes.ANSWER_IN:
                        o.add(e.getData("channel").id);
                        break;
                    case d.SearchTokenTypes.ANSWER_HAS:
                        o.add(e.getData("has"));
                        break;
                    case d.SearchTokenTypes.ANSWER_PINNED:
                        o.add(e.getData("pinned"));
                        break;
                    default:
                        o.add(e.getFullMatch().trim())
                }
            }), Object.entries(t))) i instanceof Set && (t[n] = Array.from(i));
        return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
    }

    function f(e, t, n) {
        let i, r;
        let a = e.find((a, s) => t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[s + 1] && (r = e[s + 1]), !0) : (i = a, !1));
        return null == a ? null : {
            previousToken: i,
            currentToken: a,
            nextToken: r,
            focusOffset: t,
            anchorOffset: n
        }
    }

    function S(e, t) {
        let n;
        let {
            currentToken: i,
            nextToken: r,
            previousToken: s
        } = e = null != e ? e : {};
        if (0 === t.length) return {
            type: d.SearchPopoutModes.EMPTY,
            filter: null,
            token: null
        };
        if (null == i) return {
            type: d.SearchPopoutModes.FILTER_ALL,
            filter: null,
            token: null
        };
        if (d.IS_SEARCH_FILTER_TOKEN.test(i.type)) {
            if (null == r || r.type === a.default.NON_TOKEN_TYPE) return {
                type: d.SearchPopoutModes.FILTER,
                filter: i.type,
                token: r
            };
            if (null != r && !d.IS_SEARCH_ANSWER_TOKEN.test(r.type)) return {
                type: d.SearchPopoutModes.FILTER,
                filter: i.type,
                token: null
            }
        }
        return i.type === a.default.NON_TOKEN_TYPE && null != s && d.IS_SEARCH_FILTER_TOKEN.test(s.type) ? {
            type: d.SearchPopoutModes.FILTER,
            filter: s.type,
            token: i
        } : (i.type === a.default.NON_TOKEN_TYPE && (n = i), {
            type: d.SearchPopoutModes.FILTER_ALL,
            filter: null,
            token: n
        })
    }

    function h(e, t) {
        let n = [];
        return r()(e).forEach(e => {
            if (null == e || 0 === e.results.length) return;
            let i = e.group;
            n = n.concat(e.results.map(e => {
                let n = e.text;
                if (t === d.SearchPopoutModes.FILTER_ALL) {
                    var r;
                    i = null !== (r = e.group) && void 0 !== r ? r : i;
                    let t = s.default[i];
                    (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== "" && (n = "".concat(t.key, " ").concat(n))
                }
                return n
            }))
        }), n.filter(e => e)
    }

    function A(e) {
        return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
    }

    function m(e) {
        return null == e ? "" : e.map(e => e.getFullMatch()).join("")
    }
    let N = new a.default;

    function p(e) {
        return N.tokenize(e)
    }

    function O() {
        return N.clearCache()
    }

    function R(e) {
        return null != e ? E[e] : null
    }

    function C(e, t) {
        let n = d.IS_SEARCH_FILTER_TOKEN.test(e.type);
        return (null != t || !n) && (null == t || !n || !!d.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
    }

    function g() {
        (0, s.refreshSearchTokens)(), N.reset(), r()(s.default).forOwn((e, t) => N.addRule({
            type: t,
            ...e
        }))
    }
}