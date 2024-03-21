function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchTabFetcherImpl: function() {
            return d
        },
        default: function() {
            return i
        }
    }), n("70102");
    var i, s = n("522632"),
        r = n("872717"),
        a = n("605250"),
        o = n("718517"),
        l = n("49111");
    class u {
        async fetch(e, t, n) {
            if (!this.isCanceled) try {
                let s = await this.makeRequest();
                if (null == s || this.isCanceled) return;
                if (200 === s.status) e(s);
                else if (202 === s.status) {
                    var i;
                    if (this.query.attempts = (null !== (i = this.query.attempts) && void 0 !== i ? i : 0) + 1, this.query.attempts > 5) return;
                    let r = s.body.retry_after * o.default.Millis.SECOND;
                    this.retryDelay = isNaN(r) || 0 === r ? 5e3 : r, this.retryLater(e, t, n), t(s)
                }
            } catch (e) {
                new(0, a.default)("SearchFetcher").error(e), n(e)
            }
        }
        cancel() {
            this.isCanceled = !0, null != this.indexingPollId && clearTimeout(this.indexingPollId)
        }
        retryLater(e, t, n) {
            null != this.indexingPollId && clearTimeout(this.indexingPollId), this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
        }
        constructor(e, t, n) {
            this.isCanceled = !1, this.searchId = e, this.searchType = t, this.query = n
        }
    }
    i = class extends u {
        getEndpoint() {
            switch (this.searchType) {
                case l.SearchTypes.DMS:
                    return l.Endpoints.SEARCH_DMS;
                case l.SearchTypes.FAVORITES:
                    return l.Endpoints.SEARCH_FAVORITES;
                case l.SearchTypes.GUILD:
                    if (null == this.searchId || "" === this.searchId) return;
                    return l.Endpoints.SEARCH_GUILD(this.searchId);
                case l.SearchTypes.CHANNEL:
                    if (null == this.searchId || "" === this.searchId) return;
                    return l.Endpoints.SEARCH_CHANNEL(this.searchId);
                default:
                    throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
            }
        }
        makeRequest() {
            let e = this.getEndpoint();
            return null == e ? null : r.HTTP.get({
                url: e,
                query: s.stringify(this.query),
                oldFormErrors: !0
            })
        }
    };
    class d extends u {
        getEndpoint() {
            switch (this.searchType) {
                case l.SearchTypes.DMS:
                    return l.Endpoints.SEARCH_TABS_DMS;
                case l.SearchTypes.GUILD_CHANNEL:
                case l.SearchTypes.GUILD:
                    if (null == this.searchId || "" === this.searchId) return;
                    return l.Endpoints.SEARCH_TABS_GUILD(this.searchId);
                case l.SearchTypes.CHANNEL:
                    if (null == this.searchId || "" === this.searchId) return;
                    return l.Endpoints.SEARCH_TABS_CHANNEL(this.searchId);
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
            super(e, t, n), this.payload = i
        }
    }
}