function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("42203");
    let a = {};

    function o(e) {
        let t = r.default.getChannel(e);
        return !!(null != t && t.isForumLikeChannel()) || !1
    }

    function l(e) {
        var t;
        let n = null !== (t = a[e]) && void 0 !== t ? t : {
            query: null,
            loading: !1,
            results: null
        };
        return a[e] = n, n
    }
    class u extends i.default.Store {
        getSearchQuery(e) {
            let t = a[e];
            return null == t ? void 0 : t.query
        }
        getSearchLoading(e) {
            var t;
            let n = a[e];
            return null !== (t = null == n ? void 0 : n.loading) && void 0 !== t && t
        }
        getSearchResults(e) {
            let t = a[e];
            return null == t ? void 0 : t.results
        }
        getHasSearchResults(e) {
            let t = a[e];
            return (null == t ? void 0 : t.results) != null && t.results.length > 0
        }
    }
    u.displayName = "ForumSearchStore";
    var d = new u(s.default, {
        CONNECTION_OPEN: function() {
            a = {}
        },
        THREAD_DELETE: function(e) {
            var t;
            let {
                channel: n
            } = e, i = n.parent_id;
            if (null == i) return !1;
            let s = a[i];
            if (null == s) return !1;
            a[i] = {
                ...s,
                results: null === (t = s.results) || void 0 === t ? void 0 : t.filter(e => n.id !== e)
            }
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e, n = delete a[t.id];
            return n
        },
        FORUM_SEARCH_QUERY_UPDATED: function(e) {
            let {
                channelId: t,
                query: n
            } = e;
            if (!o(t)) return !1;
            let i = l(t);
            a[t] = {
                ...i,
                query: n,
                results: null
            }
        },
        FORUM_SEARCH_START: function(e) {
            let {
                channelId: t
            } = e;
            if (!o(t)) return !1;
            let n = l(t);
            a[t] = {
                ...n,
                loading: !0
            }
        },
        FORUM_SEARCH_SUCCESS: function(e) {
            let {
                channelId: t,
                threadIds: n
            } = e;
            if (!o(t)) return !1;
            let i = l(t);
            a[t] = {
                ...i,
                loading: !1,
                results: n
            }
        },
        FORUM_SEARCH_FAILURE: function(e) {
            let {
                channelId: t
            } = e;
            if (!o(t)) return !1;
            let n = l(t);
            a[t] = {
                ...n,
                loading: !1,
                results: []
            }
        },
        FORUM_SEARCH_CLEAR: function(e) {
            let {
                channelId: t
            } = e;
            if (!o(t)) return !1;
            let n = delete a[t];
            return n
        }
    })
}