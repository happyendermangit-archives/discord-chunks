function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deleteSummary: function() {
            return g
        },
        fetchSummaries: function() {
            return h
        },
        setHighlightedSummary: function() {
            return A
        },
        setSelectedSummary: function() {
            return N
        },
        setSummaryFeedback: function() {
            return O
        },
        toggleTopicsBar: function() {
            return m
        },
        updateVisibleMessages: function() {
            return p
        }
    });
    var i = n("470079"),
        r = n("392711"),
        a = n.n(r),
        s = n("399606"),
        o = n("544891"),
        l = n("570140"),
        u = n("881052"),
        d = n("902840"),
        _ = n("38618"),
        c = n("592125"),
        E = n("70956"),
        I = n("765104"),
        T = n("981631");
    let f = 30 * E.default.Millis.SECOND;
    async function S(e, t) {
        let n, i;
        if (!I.default.shouldFetch(e, t)) return;
        let r = Date.now();
        l.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARY",
            channelId: e,
            summaryId: t,
            requestedAt: r
        });
        try {
            let n = await o.HTTP.get(T.Routes.CHANNEL_SUMMARY(e, t));
            i = null == n ? void 0 : n.body
        } catch (e) {
            n = new u.APIError(e)
        }
        l.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARY",
            channelId: e,
            summary: i,
            error: n,
            requestedAt: r,
            receivedAt: Date.now()
        })
    }
    async function h(e) {
        var t, n;
        let i, r;
        if (!I.default.shouldFetch(e)) return;
        let s = Date.now();
        l.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARIES",
            channelId: e,
            requestedAt: s
        });
        try {
            r = await o.HTTP.get(T.Routes.CHANNEL_SUMMARIES(e))
        } catch (e) {
            i = new u.APIError(e)
        }
        let d = (null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? r.body.summaries : null !== (n = null == r ? void 0 : r.body) && void 0 !== n ? n : [];
        d = a().takeRight(d, 75), l.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: d,
            error: null != i ? i : void 0,
            requestedAt: s,
            receivedAt: Date.now()
        })
    }

    function A(e, t) {
        l.default.dispatch({
            type: "SET_HIGHLIGHTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function m() {
        l.default.dispatch({
            type: "TOGGLE_TOPICS_BAR"
        })
    }

    function N(e, t) {
        null != e && null != t && S(e, t), l.default.dispatch({
            type: "SET_SELECTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function p(e, t) {
        l.default.dispatch({
            type: "UPDATE_VISIBLE_MESSAGES",
            topVisibleMessage: null != e ? e : null,
            bottomVisibleMessage: null != t ? t : null
        })
    }

    function O(e, t) {
        l.default.dispatch({
            type: "SET_SUMMARY_FEEDBACK",
            summary: e,
            rating: t
        })
    }
    async function R() {
        var e;
        let t, n;
        if (!I.default.shouldFetchChannelAffinities()) return Promise.resolve(null);
        let i = Date.now();
        l.default.dispatch({
            type: "REQUEST_CHANNEL_AFFINITIES",
            requestedAt: i
        });
        try {
            n = await o.HTTP.get("/users/@me/affinities/channels")
        } catch (e) {
            t = new u.APIError(e)
        }
        let r = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
        l.default.dispatch({
            type: "RECEIVE_CHANNEL_AFFINITIES",
            affinities: r,
            error: null != t ? t : void 0,
            requestedAt: i,
            receivedAt: Date.now()
        })
    }
    async function C(e) {
        let t, n, {
            useQuickSwitcher: i = !0,
            useChannelAffinities: r = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e = null != e ? e : [];
        let a = Date.now();
        if (0 === (e = e.concat(I.default.defaultChannelIds({
                withQuickSwitcher: i,
                withChannelAffinities: r
            })).filter(e => {
                let t = c.default.getChannel(e);
                return (0, d.canSeeChannelSummaries)(t, !1, !0)
            }).filter(e => {
                let t = Date.now(),
                    n = I.default.status(e);
                if (null == n ? void 0 : n.fetching) return !1;
                let i = null == n ? void 0 : n.lastReceivedAt;
                return null == i || t - i > f
            }).slice(0, 50)).length) return Promise.resolve(null);
        l.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARIES_BULK",
            channelIds: e,
            requestedAt: a
        });
        try {
            n = await o.HTTP.post({
                url: T.Routes.USER_SUMMARIES,
                body: {
                    channel_ids: e
                }
            })
        } catch (e) {
            t = new u.APIError(e)
        }
        let s = null == n ? void 0 : n.body.summaries;
        l.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
            requestedAt: a,
            receivedAt: Date.now(),
            summaries: s,
            requestArgs: {
                channelIds: e
            },
            error: t
        })
    }
    async function g(e) {
        try {
            await o.HTTP.del(T.Routes.CHANNEL_SUMMARY(e.channelId, e.id)), l.default.dispatch({
                type: "DELETE_SUMMARY",
                summary: e
            })
        } catch (e) {
            throw new u.APIError(e)
        }
    }
    t.default = {
        setSummaryFeedback: O,
        updateVisibleMessages: p,
        setSelectedSummary: N,
        setHighlightedSummary: A,
        fetchSummaries: h,
        fetchSummariesBulk: C,
        useChannelSummaries: function(e) {
            let {
                channelIds: t = []
            } = e;
            return ! function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, s.useStateFromStores)([_.default], () => _.default.isConnected()),
                    n = i.useMemo(() => e.join(","), [e]);
                i.useEffect(() => {
                    t && e();
                    async function e() {
                        try {
                            await R()
                        } catch (e) {}
                        await C(n.split(","))
                    }
                }, [n, t])
            }(t), (0, s.useStateFromStoresArray)([I.default], () => I.default.topSummaries(), [])
        },
        deleteSummary: g
    }
}