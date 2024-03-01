function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchTabFetcherImpl: function() {
            return l
        },
        default: function() {
            return s
        }
    }), n("70102");
    var s, i = n("522632"),
        r = n("872717"),
        a = n("605250"),
        o = n("718517"),
        d = n("49111");
    class u {
        async fetch(e, t, n) {
            if (!this.isCanceled) try {
                let i = await this.makeRequest();
                if (null == i || this.isCanceled) return;
                if (200 === i.status) e(i);
                else if (202 === i.status) {
                    var s;
                    if (this.query.attempts = (null !== (s = this.query.attempts) && void 0 !== s ? s : 0) + 1, this.query.attempts > 5) return;
                    let r = i.body.retry_after * o.default.Millis.SECOND;
                    this.retryDelay = isNaN(r) || 0 === r ? 5e3 : r, this.retryLater(e, t, n), t(i)
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
    s = class extends u {
        getEndpoint() {
            switch (this.searchType) {
                case d.SearchTypes.DMS:
                    return d.Endpoints.SEARCH_DMS;
                case d.SearchTypes.FAVORITES:
                    return d.Endpoints.SEARCH_FAVORITES;
                case d.SearchTypes.GUILD:
                    if (null == this.searchId || "" === this.searchId) return;
                    return d.Endpoints.SEARCH_GUILD(this.searchId);
                case d.SearchTypes.CHANNEL:
                    if (null == this.searchId || "" === this.searchId) return;
                    return d.Endpoints.SEARCH_CHANNEL(this.searchId);
                default:
                    throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
            }
        }
        makeRequest() {
            let e = this.getEndpoint();
            return null == e ? null : r.default.get({
                url: e,
                query: i.stringify(this.query),
                oldFormErrors: !0
            })
        }
    };
    class l extends u {
        getEndpoint() {
            switch (this.searchType) {
                case d.SearchTypes.DMS:
                    return d.Endpoints.SEARCH_TABS_DMS;
                case d.SearchTypes.GUILD_CHANNEL:
                case d.SearchTypes.GUILD:
                    if (null == this.searchId || "" === this.searchId) return;
                    return d.Endpoints.SEARCH_TABS_GUILD(this.searchId);
                case d.SearchTypes.CHANNEL:
                    if (null == this.searchId || "" === this.searchId) return;
                    return d.Endpoints.SEARCH_TABS_CHANNEL(this.searchId);
                default:
                    throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
            }
        }
        makeRequest() {
            let e = this.getEndpoint();
            return null == e ? null : r.default.post({
                url: e,
                body: this.payload,
                oldFormErrors: !0
            })
        }
        constructor(e, t, n, s) {
            super(e, t, n), this.payload = s
        }
    }
}