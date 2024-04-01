function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchIntegrationApplicationIdsForMyGuilds: function() {
            return N
        },
        getApplication: function() {
            return f
        },
        getCategories: function() {
            return S
        },
        getCollections: function() {
            return m
        },
        getEmbedApplication: function() {
            return T
        },
        getSimilarApplications: function() {
            return A
        },
        search: function() {
            return h
        }
    }), n("47120");
    var i = n("261470"),
        r = n("544891"),
        s = n("570140"),
        a = n("706454"),
        o = n("264043"),
        l = n("894653"),
        u = n("368862"),
        d = n("809547"),
        _ = n("303383"),
        c = n("973001"),
        E = n("981631");
    let I = new Map;
    async function T(e) {
        var t;
        let n = Date.now(),
            a = null !== (t = I.get(e)) && void 0 !== t ? t : 0;
        if (o.default.getApplicationFetchState(e) === o.FetchState.FETCHING || o.default.isInvalidApplication(e) || n < a + 6e5) return;
        I.set(e, n), s.default.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
            applicationId: e
        });
        let l = new i.default(1e3, 5e3),
            u = (e, t) => 429 === e.status && !!(l.fails < 10) && (l.fail(() => {
                t(void 0, u)
            }), !0);
        try {
            let t = (await r.HTTP.get({
                url: E.Endpoints.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: l,
                retries: 10,
                interceptResponse: u
            })).body;
            s.default.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                application: t
            })
        } catch (t) {
            s.default.dispatch({
                type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                applicationId: e,
                isInvalidApplication: !0
            })
        }
    }
    async function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = Date.now(),
            i = o.default.getApplicationFetchState(e),
            l = o.default.getApplicationLastFetchTime(e),
            {
                dontRefetchMs: u
            } = t;
        if (i !== o.FetchState.FETCHING) {
            if (!(null != l && l + (null != u ? u : 6e5) > n)) {
                s.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_APPLICATION",
                    applicationId: e
                });
                try {
                    let t = await r.HTTP.get({
                        url: E.Endpoints.APPLICATION_DIRECTORY_APPLICATION(e),
                        query: {
                            locale: a.default.locale
                        }
                    });
                    s.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS",
                        application: t.body
                    })
                } catch (t) {
                    s.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE",
                        applicationId: e,
                        isInvalidApplication: !0
                    })
                }
            }
        }
    }
    async function S() {
        let e = Date.now(),
            t = l.default.getLastFetchTimeMs();
        if (null != t && t + 6e5 > e) return;
        let n = await r.HTTP.get({
            url: E.Endpoints.APPLICATION_DIRECTORY_CATEGORIES,
            query: {
                locale: a.default.locale
            }
        });
        s.default.dispatch({
            type: "APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS",
            categories: n.body
        })
    }
    async function A(e) {
        var t;
        let {
            applicationId: n,
            guildId: i,
            options: o
        } = e, {
            page: l
        } = null != o ? o : {}, u = Date.now(), d = _.default.getFetchState({
            applicationId: n,
            guildId: i
        }), {
            lastFetchTimeMs: c
        } = null !== (t = _.default.getSimilarApplications({
            applicationId: n,
            guildId: i
        })) && void 0 !== t ? t : {};
        if (d !== _.FetchState.FETCHING) {
            if (null == c || !(c + 6e5 > u)) {
                s.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS",
                    applicationId: n,
                    guildId: i,
                    page: l
                });
                try {
                    let e = await r.HTTP.get({
                        url: E.Endpoints.APPLICATION_DIRECTORY_SIMILAR(n),
                        query: {
                            guild_id: i,
                            page: l,
                            locale: a.default.locale
                        }
                    });
                    s.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS",
                        applicationId: n,
                        guildId: i,
                        similarApplications: e.body.applications,
                        loadId: e.body.load_id,
                        page: l,
                        totalPages: e.body.num_pages
                    })
                } catch (e) {
                    s.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE",
                        applicationId: n,
                        guildId: i,
                        page: l
                    })
                }
            }
        }
    }
    async function h(e) {
        var t;
        let {
            query: n,
            guildId: i,
            options: o,
            onSuccessCallback: l
        } = e, {
            page: u,
            categoryId: _
        } = null != o ? o : {}, c = Date.now(), I = d.default.getFetchState({
            query: n,
            guildId: i,
            page: u,
            categoryId: _
        }), {
            lastFetchTimeMs: T
        } = null !== (t = d.default.getSearchResults({
            query: n,
            guildId: i,
            page: u,
            categoryId: _
        })) && void 0 !== t ? t : {};
        if (I !== d.FetchState.FETCHING) {
            if (null == T || !(T + 6e5 > c)) {
                s.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_SEARCH",
                    query: n,
                    guildId: i,
                    page: u,
                    categoryId: _
                });
                try {
                    let e = await r.HTTP.get({
                        url: E.Endpoints.APPLICATION_DIRECTORY_SEARCH,
                        query: {
                            query: n,
                            guild_id: i,
                            page: u,
                            category_id: _,
                            locale: a.default.locale
                        }
                    });
                    s.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS",
                        query: n,
                        guildId: i,
                        page: u,
                        categoryId: _,
                        result: {
                            results: e.body.results,
                            countsByCategory: e.body.counts_by_category,
                            totalCount: e.body.result_count,
                            totalPages: e.body.num_pages,
                            type: e.body.type,
                            loadId: e.body.load_id
                        }
                    }), null == l || l(e.body.result_count)
                } catch (e) {
                    s.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE",
                        query: n,
                        guildId: i,
                        page: u,
                        categoryId: _
                    })
                }
            }
        }
    }
    async function m() {
        let {
            includesInactive: e = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Date.now(), n = u.default.getFetchState({
            includesInactive: e
        }), i = u.default.getLastFetchTimeMs({
            includesInactive: e
        });
        if (n !== u.FetchState.FETCHING) {
            if (null == i || !(i + 6e5 > t)) {
                s.default.dispatch({
                    type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS",
                    includesInactive: e
                });
                try {
                    let t = await r.HTTP.get({
                        url: E.Endpoints.APPLICATION_DIRECTORY_COLLECTIONS,
                        query: {
                            includes_inactive: e,
                            locale: a.default.locale
                        }
                    });
                    s.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS",
                        collections: t.body,
                        includesInactive: e
                    })
                } catch (t) {
                    s.default.dispatch({
                        type: "APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE",
                        includesInactive: e
                    })
                }
            }
        }
    }
    async function N() {
        let e = Date.now(),
            t = c.default.getFetchState(),
            n = c.default.getLastFetchTimeMs(),
            i = c.default.getNextFetchRetryTimeMs();
        if (t !== c.FetchState.FETCHING && (null == n || !(n + 864e5 > e))) {
            if (null == i || !(e < i)) {
                s.default.dispatch({
                    type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS"
                });
                try {
                    let e = await r.HTTP.get({
                        url: E.Endpoints.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS
                    });
                    s.default.dispatch({
                        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS",
                        guildIdToApplicationIds: e.body
                    })
                } catch (t) {
                    var a;
                    let e = (null == t ? void 0 : t.status) === 429;
                    s.default.dispatch({
                        type: "FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE",
                        retryAfterSeconds: e ? null == t ? void 0 : null === (a = t.body) || void 0 === a ? void 0 : a.retry_after : void 0
                    })
                }
            }
        }
    }
}