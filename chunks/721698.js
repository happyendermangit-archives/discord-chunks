function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getEmbedApplication: function() {
            return h
        },
        getApplication: function() {
            return E
        },
        getCategories: function() {
            return g
        },
        getSimilarApplications: function() {
            return C
        },
        search: function() {
            return S
        },
        getCollections: function() {
            return T
        },
        fetchIntegrationApplicationIdsForMyGuilds: function() {
            return I
        }
    }), n("222007");
    var l = n("981980"),
        i = n("872717"),
        a = n("913144"),
        s = n("915639"),
        r = n("349503"),
        o = n("831109"),
        u = n("810047"),
        d = n("856894"),
        c = n("388647"),
        f = n("506061"),
        m = n("49111");
    let p = new Map;
    async function h(e) {
        var t;
        let n = Date.now(),
            s = null !== (t = p.get(e)) && void 0 !== t ? t : 0;
        if (r.default.getApplicationFetchState(e) === r.FetchState.FETCHING || r.default.isInvalidApplication(e) || n < s + 6e5) return;
        p.set(e, n), a.default.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
            applicationId: e
        });
        let o = new l.default(1e3, 5e3),
            u = (e, t) => 429 === e.status && !!(o.fails < 10) && (o.fail(() => {
                t(void 0, u)
            }), !0);
        try {
            let t = await i.default.get({
                    url: m.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
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
    async function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = Date.now(),
            l = r.default.getApplicationFetchState(e),
            o = r.default.getApplicationLastFetchTime(e),
            {
                dontRefetchMs: u
            } = t;
        if (l !== r.FetchState.FETCHING) {
            if (!(null != o && o + (null != u ? u : 6e5) > n)) {
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                    applicationId: e
                });
                try {
                    let t = await i.default.get({
                        url: m.Endpoints.APPLICATION_DIRECTORY_APPLICATION(e),
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
    async function g() {
        let e = Date.now(),
            t = o.default.getLastFetchTimeMs();
        if (null != t && t + 6e5 > e) return;
        let n = await i.default.get({
            url: m.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
            query: {
                locale: s.default.locale
            }
        });
        a.default.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
            categories: n.body
        })
    }
    async function C(e) {
        var t;
        let {
            applicationId: n,
            guildId: l,
            options: r
        } = e, {
            page: o
        } = null != r ? r : {}, u = Date.now(), d = c.default.getFetchState({
            applicationId: n,
            guildId: l
        }), {
            lastFetchTimeMs: f
        } = null !== (t = c.default.getSimilarApplications({
            applicationId: n,
            guildId: l
        })) && void 0 !== t ? t : {};
        if (d !== c.FetchState.FETCHING) {
            if (null == f || !(f + 6e5 > u)) {
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
                    applicationId: n,
                    guildId: l,
                    page: o
                });
                try {
                    let e = await i.default.get({
                        url: m.Endpoints.APPLICATION_DIRECTORY_SIMILAR(n),
                        query: {
                            guild_id: l,
                            page: o,
                            locale: s.default.locale
                        }
                    });
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                        applicationId: n,
                        guildId: l,
                        similarApplications: e.body.applications,
                        loadId: e.body.load_id,
                        page: o,
                        totalPages: e.body.num_pages
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                        applicationId: n,
                        guildId: l,
                        page: o
                    })
                }
            }
        }
    }
    async function S(e) {
        var t;
        let {
            query: n,
            guildId: l,
            options: r,
            onSuccessCallback: o
        } = e, {
            page: u,
            categoryId: c
        } = null != r ? r : {}, f = Date.now(), p = d.default.getFetchState({
            query: n,
            guildId: l,
            page: u,
            categoryId: c
        }), {
            lastFetchTimeMs: h
        } = null !== (t = d.default.getSearchResults({
            query: n,
            guildId: l,
            page: u,
            categoryId: c
        })) && void 0 !== t ? t : {};
        if (p !== d.FetchState.FETCHING) {
            if (null == h || !(h + 6e5 > f)) {
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
                    query: n,
                    guildId: l,
                    page: u,
                    categoryId: c
                });
                try {
                    let e = await i.default.get({
                        url: m.Endpoints.APPLICATION_DIRECTORY_SEARCH,
                        query: {
                            query: n,
                            guild_id: l,
                            page: u,
                            category_id: c,
                            locale: s.default.locale
                        }
                    });
                    a.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                        query: n,
                        guildId: l,
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
                        guildId: l,
                        page: u,
                        categoryId: c
                    })
                }
            }
        }
    }
    async function T() {
        let {
            includesInactive: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Date.now(), n = u.default.getFetchState({
            includesInactive: e
        }), l = u.default.getLastFetchTimeMs({
            includesInactive: e
        });
        if (n !== u.FetchState.FETCHING) {
            if (null == l || !(l + 6e5 > t)) {
                a.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
                    includesInactive: e
                });
                try {
                    let t = await i.default.get({
                        url: m.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
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
    async function I() {
        let e = Date.now(),
            t = f.default.getFetchState(),
            n = f.default.getLastFetchTimeMs(),
            l = f.default.getNextFetchRetryTimeMs();
        if (t !== f.FetchState.FETCHING && (null == n || !(n + 864e5 > e))) {
            if (null == l || !(e < l)) {
                a.default.dispatch({
                    type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
                });
                try {
                    let e = await i.default.get({
                        url: m.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
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