function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("592125");
    let d = {};

    function _(e) {
        let t = u.default.getChannel(e);
        return !!(null != t && t.isForumLikeChannel()) || !1
    }

    function c(e) {
        var t;
        let n = null !== (t = d[e]) && void 0 !== t ? t : {
            query: null,
            loading: !1,
            results: null
        };
        return d[e] = n, n
    }
    class E extends(s = o.default.Store) {
        getSearchQuery(e) {
            let t = d[e];
            return null == t ? void 0 : t.query
        }
        getSearchLoading(e) {
            var t;
            let n = d[e];
            return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
        }
        getSearchResults(e) {
            let t = d[e];
            return null == t ? void 0 : t.results
        }
        getHasSearchResults(e) {
            let t = d[e];
            return (null == t ? void 0 : t.results) != null && t.results.length > 0
        }
    }
    a = "ForumSearchStore", (r = "displayName") in(i = E) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new E(l.default, {
        CONNECTION_OPEN: function() {
            d = {}
        },
        THREAD_DELETE: function(e) {
            var t;
            let {
                channel: n
            } = e, i = n.parent_id;
            if (null == i) return !1;
            let r = d[i];
            if (null == r) return !1;
            d[i] = {
                ...r,
                results: null === (t = r.results) || void 0 === t ? void 0 : t.filter(e => n.id !== e)
            }
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            return delete d[t.id]
        },
        FORUM_SEARCH_QUERY_UPDATED: function(e) {
            let {
                channelId: t,
                query: n
            } = e;
            if (!_(t)) return !1;
            let i = c(t);
            d[t] = {
                ...i,
                query: n,
                results: null
            }
        },
        FORUM_SEARCH_START: function(e) {
            let {
                channelId: t
            } = e;
            if (!_(t)) return !1;
            let n = c(t);
            d[t] = {
                ...n,
                loading: !0
            }
        },
        FORUM_SEARCH_SUCCESS: function(e) {
            let {
                channelId: t,
                threadIds: n
            } = e;
            if (!_(t)) return !1;
            let i = c(t);
            d[t] = {
                ...i,
                loading: !1,
                results: n
            }
        },
        FORUM_SEARCH_FAILURE: function(e) {
            let {
                channelId: t
            } = e;
            if (!_(t)) return !1;
            let n = c(t);
            d[t] = {
                ...n,
                loading: !1,
                results: []
            }
        },
        FORUM_SEARCH_CLEAR: function(e) {
            let {
                channelId: t
            } = e;
            return !!_(t) && delete d[t]
        }
    })
}