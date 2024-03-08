function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEmbedApplication: function() {
            return h
        },
        getApplication: function() {
            return x
        },
        getCategories: function() {
            return E
        },
        getSimilarApplications: function() {
            return y
        },
        search: function() {
            return g
        },
        getCollections: function() {
            return S
        },
        fetchIntegrationApplicationIdsForMyGuilds: function() {
            return C
        }
    }), n("222007");
    var i = n("981980"),
        l = n("872717"),
        a = n("913144"),
        s = n("915639"),
        r = n("349503"),
        o = n("831109"),
        u = n("810047"),
        d = n("856894"),
        c = n("388647"),
        f = n("506061"),
        p = n("49111");
    let m = new Map;
    async function h(e) {
        var t;
        let n = Date.now(),
            s = null !== (t = m.get(e)) && void 0 !== t ? t : 0;
        if (r.default.getApplicationFetchState(e) === r.FetchState.FETCHING || r.default.isInvalidApplication(e) || n < s + 6e5) return;
        m.set(e, n), a.default.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
            applicationId: e
        });
        let o = new i.default(1e3, 5e3),
            u = (e, t) => 429 === e.status && !!(o.fails < 10) && (o.fail(() => {
                t(void 0, u)
            }), !0);
        try {
            let t = await l.default.get({
                    url: p.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                    backoff: o,
                    retries: 10,
                    interceptResponse: u
                }),
                n = t.body;
            a.default.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                application: n
            })
        } catch (t) {
            a.default.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                applicationId: e,
                isInvalidApplication: !0
            })
        }
    }
    async function x(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = Date.now(),
            i = r.default.getApplicationFetchState(e),
            o = r.default.getApplicationLastFetchTime(e),
            {
                dontRefetchMs: u
            } = t;
        if (i !== r.FetchState.FETCHING) {
            if (!(null != o && o + (null != u ? u : 6e5) > n)) {
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                    applicationId: e
                });
                try {
                    let t = await l.default.get({
                        url: p.Endpoints.APPLICATION_DIRECTORY_APPLICATION(e),
                        query: {
                            locale: s.default.locale
                        }
                    });
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                        application: t.body
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                        applicationId: e,
                        isInvalidApplication: !0
                    })
                }
            }
        }
    }
    async function E() {
        let e = Date.now(),
            t = o.default.getLastFetchTimeMs();
        if (null != t && t + 6e5 > e) return;
        let n = await l.default.get({
            url: p.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
            query: {
                locale: s.default.locale
            }
        });
        a.default.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
            categories: n.body
        })
    }
    async function y(e) {
        var t;
        let {
            applicationId: n,
            guildId: i,
            options: r
        } = e, {
            page: o
        } = null != r ? r : {}, u = Date.now(), d = c.default.getFetchState({
            applicationId: n,
            guildId: i
        }), {
            lastFetchTimeMs: f
        } = null !== (t = c.default.getSimilarApplications({
            applicationId: n,
            guildId: i
        })) && void 0 !== t ? t : {};
        if (d !== c.FetchState.FETCHING) {
            if (null == f || !(f + 6e5 > u)) {
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
                    applicationId: n,
                    guildId: i,
                    page: o
                });
                try {
                    let e = await l.default.get({
                        url: p.Endpoints.APPLICATION_DIRECTORY_SIMILAR(n),
                        query: {
                            guild_id: i,
                            page: o,
                            locale: s.default.locale
                        }
                    });
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                        applicationId: n,
                        guildId: i,
                        similarApplications: e.body.applications,
                        loadId: e.body.load_id,
                        page: o,
                        totalPages: e.body.num_pages
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                        applicationId: n,
                        guildId: i,
                        page: o
                    })
                }
            }
        }
    }
    async function g(e) {
        var t;
        let {
            query: n,
            guildId: i,
            options: r,
            onSuccessCallback: o
        } = e, {
            page: u,
            categoryId: c
        } = null != r ? r : {}, f = Date.now(), m = d.default.getFetchState({
            query: n,
            guildId: i,
            page: u,
            categoryId: c
        }), {
            lastFetchTimeMs: h
        } = null !== (t = d.default.getSearchResults({
            query: n,
            guildId: i,
            page: u,
            categoryId: c
        })) && void 0 !== t ? t : {};
        if (m !== d.FetchState.FETCHING) {
            if (null == h || !(h + 6e5 > f)) {
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
                    query: n,
                    guildId: i,
                    page: u,
                    categoryId: c
                });
                try {
                    let e = await l.default.get({
                        url: p.Endpoints.APPLICATION_DIRECTORY_SEARCH,
                        query: {
                            query: n,
                            guild_id: i,
                            page: u,
                            category_id: c,
                            locale: s.default.locale
                        }
                    });
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                        query: n,
                        guildId: i,
                        page: u,
                        categoryId: c,
                        result: {
                            results: e.body.results,
                            countsByCategory: e.body.counts_by_category,
                            totalCount: e.body.result_count,
                            totalPages: e.body.num_pages,
                            type: e.body.type,
                            loadId: e.body.load_id
                        }
                    }), null == o || o(e.body.result_count)
                } catch (e) {
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                        query: n,
                        guildId: i,
                        page: u,
                        categoryId: c
                    })
                }
            }
        }
    }
    async function S() {
        let {
            includesInactive: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Date.now(), n = u.default.getFetchState({
            includesInactive: e
        }), i = u.default.getLastFetchTimeMs({
            includesInactive: e
        });
        if (n !== u.FetchState.FETCHING) {
            if (null == i || !(i + 6e5 > t)) {
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
                    includesInactive: e
                });
                try {
                    let t = await l.default.get({
                        url: p.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
                        query: {
                            includes_inactive: e,
                            locale: s.default.locale
                        }
                    });
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                        collections: t.body,
                        includesInactive: e
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
                        includesInactive: e
                    })
                }
            }
        }
    }
    async function C() {
        let e = Date.now(),
            t = f.default.getFetchState(),
            n = f.default.getLastFetchTimeMs(),
            i = f.default.getNextFetchRetryTimeMs();
        if (t !== f.FetchState.FETCHING && (null == n || !(n + 864e5 > e))) {
            if (null == i || !(e < i)) {
                a.default.dispatch({
                    type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
                });
                try {
                    let e = await l.default.get({
                        url: p.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
                    });
                    a.default.dispatch({
                        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                        guildIdToApplicationIds: e.body
                    })
                } catch (t) {
                    var s;
                    let e = (null == t ? void 0 : t.status) === 429;
                    a.default.dispatch({
                        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                        retryAfterSeconds: e ? null == t ? void 0 : null === (s = t.body) || void 0 === s ? void 0 : s.retry_after : void 0
                    })
                }
            }
        }
    }
}