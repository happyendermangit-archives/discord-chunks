function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchTabFetcherImpl: function() {
            return _
        },
        default: function() {
            return d
        }
    }), n("411104");
    var i = n("664751"),
        r = n("544891"),
        a = n("710845"),
        s = n("70956"),
        o = n("981631");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class u {
        async fetch(e, t, n) {
            if (!this.isCanceled) try {
                let r = await this.makeRequest();
                if (null == r || this.isCanceled) return;
                if (200 === r.status) e(r);
                else if (202 === r.status) {
                    var i;
                    if (this.query.attempts = (null !== (i = this.query.attempts) && void 0 !== i ? i : 0) + 1, this.query.attempts > 5) return;
                    let a = r.body.retry_after * s.default.Millis.SECOND;
                    this.retryDelay = isNaN(a) || 0 === a ? 5e3 : a, this.retryLater(e, t, n), t(r)
                }
            } catch (e) {
                new a.default("SearchFetcher").error(e), n(e)
            }
        }
        cancel() {
            this.isCanceled = !0, null != this.indexingPollId && clearTimeout(this.indexingPollId)
        }
        retryLater(e, t, n) {
            null != this.indexingPollId && clearTimeout(this.indexingPollId), this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
        }
        constructor(e, t, n) {
            l(this, "indexingPollId", void 0), l(this, "searchId", void 0), l(this, "searchType", void 0), l(this, "query", void 0), l(this, "retryDelay", void 0), l(this, "isCanceled", !1), this.searchId = e, this.searchType = t, this.query = n
        }
    }
    class d extends u {
        getEndpoint() {
            switch (this.searchType) {
                case o.SearchTypes.DMS:
                    return o.Endpoints.SEARCH_DMS;
                case o.SearchTypes.FAVORITES:
                    return o.Endpoints.SEARCH_FAVORITES;
                case o.SearchTypes.GUILD:
                    if (null == this.searchId || "" === this.searchId) return;
                    return o.Endpoints.SEARCH_GUILD(this.searchId);
                case o.SearchTypes.CHANNEL:
                    if (null == this.searchId || "" === this.searchId) return;
                    return o.Endpoints.SEARCH_CHANNEL(this.searchId);
                default:
                    throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
            }
        }
        makeRequest() {
            let e = this.getEndpoint();
            return null == e ? null : r.HTTP.get({
                url: e,
                query: i.stringify(this.query),
                oldFormErrors: !0
            })
        }
    }
    class _ extends u {
        getEndpoint() {
            switch (this.searchType) {
                case o.SearchTypes.DMS:
                    return o.Endpoints.SEARCH_TABS_DMS;
                case o.SearchTypes.GUILD_CHANNEL:
                case o.SearchTypes.GUILD:
                    if (null == this.searchId || "" === this.searchId) return;
                    return o.Endpoints.SEARCH_TABS_GUILD(this.searchId);
                case o.SearchTypes.CHANNEL:
                    if (null == this.searchId || "" === this.searchId) return;
                    return o.Endpoints.SEARCH_TABS_CHANNEL(this.searchId);
                default:
                    throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
            }
        }
        makeRequest() {
            let e = this.getEndpoint();
            return null == e ? null : r.HTTP.post({
                url: e,
                body: this.payload,
                oldFormErrors: !0
            })
        }
        constructor(e, t, n, i) {
            super(e, t, n), l(this, "payload", void 0), this.payload = i
        }
    }
}