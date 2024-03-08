function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setHighlightedSummary: function() {
            return T
        },
        toggleTopicsBar: function() {
            return _
        },
        setSelectedSummary: function() {
            return v
        },
        updateVisibleMessages: function() {
            return N
        },
        useSummaryPolling: function() {
            return O
        },
        setSummaryFeedback: function() {
            return k
        },
        deleteSummary: function() {
            return L
        },
        default: function() {
            return P
        }
    }), n("222007");
    var i = n("884691"),
        l = n("917351"),
        a = n.n(l),
        s = n("394846"),
        r = n("65597"),
        o = n("872717"),
        u = n("913144"),
        d = n("448993"),
        c = n("734575"),
        f = n("104589"),
        p = n("116460"),
        m = n("42203"),
        h = n("718517"),
        x = n("347738");
    let E = 30 * h.default.Millis.SECOND,
        y = 5 * h.default.Millis.SECOND,
        g = {},
        S = {};
    async function C(e, t) {
        let n, i;
        if (!x.default.shouldFetch(e, t)) return;
        let l = Date.now();
        u.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARY",
            channelId: e,
            summaryId: t,
            requestedAt: l
        });
        try {
            let n = await o.default.get("/channels/".concat(e, "/summaries/").concat(t));
            i = null == n ? void 0 : n.body
        } catch (e) {
            n = new d.APIError(e)
        }
        u.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARY",
            channelId: e,
            summary: i,
            error: n,
            requestedAt: l,
            receivedAt: Date.now()
        })
    }
    async function I(e) {
        var t, n;
        let i, l;
        if (!x.default.shouldFetch(e)) return;
        let s = Date.now();
        u.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARIES",
            channelId: e,
            requestedAt: s
        });
        try {
            l = await o.default.get("/channels/".concat(e, "/summaries"))
        } catch (e) {
            i = new d.APIError(e)
        }
        let r = (null == l ? void 0 : null === (t = l.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? l.body.summaries : null !== (n = null == l ? void 0 : l.body) && void 0 !== n ? n : [];
        r = a.takeRight(r, 75), u.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: r,
            error: null != i ? i : void 0,
            requestedAt: s,
            receivedAt: Date.now()
        })
    }

    function T(e, t) {
        u.default.dispatch({
            type: "SET_HIGHLIGHTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function _() {
        u.default.dispatch({
            type: "TOGGLE_TOPICS_BAR"
        })
    }

    function v(e, t) {
        null != e && null != t && C(e, t), u.default.dispatch({
            type: "SET_SELECTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function N(e, t) {
        u.default.dispatch({
            type: "UPDATE_VISIBLE_MESSAGES",
            topVisibleMessage: null != e ? e : null,
            bottomVisibleMessage: null != t ? t : null
        })
    }

    function A(e, t) {
        return null == g[e] && (g[e] = 0), null === t ? g[e] = 0 : g[e] += t, g[e]
    }

    function O(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = (0, r.default)([m.default], () => m.default.getChannel(e), [e]),
            [l, a] = i.useState(null),
            o = (0, c.useChannelSummariesExperiment)(n) && !s.isMobile;
        i.useEffect(() => {
            if (o) return a(e), () => {
                a(null)
            }
        }, [e, o]), i.useEffect(() => {
            if (l !== e && null != l && b.stopPolling(e), o && null != l) return (t || null != e && l !== e) && b.fetchSummaries(e), b.startPolling(e), () => {
                null != l && b.stopPolling(e)
            }
        }, [e, t, l, o])
    }

    function k(e, t) {
        u.default.dispatch({
            type: "SET_SUMMARY_FEEDBACK",
            summary: e,
            rating: t
        })
    }
    async function M() {
        var e;
        let t, n;
        if (!x.default.shouldFetchChannelAffinities()) return Promise.resolve(null);
        let i = Date.now();
        u.default.dispatch({
            type: "REQUEST_CHANNEL_AFFINITIES",
            requestedAt: i
        });
        try {
            n = await o.default.get("/users/@me/affinities/channels")
        } catch (e) {
            t = new d.APIError(e)
        }
        let l = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
        u.default.dispatch({
            type: "RECEIVE_CHANNEL_AFFINITIES",
            affinities: l,
            error: null != t ? t : void 0,
            requestedAt: i,
            receivedAt: Date.now()
        })
    }
    async function R(e) {
        let t, n, {
            useQuickSwitcher: i = !0,
            useChannelAffinities: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e = null != e ? e : [];
        let a = Date.now();
        if (0 === (e = e.concat(x.default.defaultChannelIds({
                withQuickSwitcher: i,
                withChannelAffinities: l
            })).filter(e => {
                let t = m.default.getChannel(e);
                return (0, c.canSeeChannelSummaries)(t, !1, !0)
            }).filter(e => {
                let t = Date.now(),
                    n = x.default.status(e);
                if (null == n ? void 0 : n.fetching) return !1;
                let i = null == n ? void 0 : n.lastReceivedAt;
                return null == i || t - i > E
            }).slice(0, 50)).length) return Promise.resolve(null);
        u.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARIES_BULK",
            channelIds: e,
            requestedAt: a
        });
        try {
            n = await o.default.post({
                url: "/users/@me/summaries",
                body: {
                    channel_ids: e
                }
            })
        } catch (e) {
            t = new d.APIError(e)
        }
        let s = null == n ? void 0 : n.body.summaries;
        u.default.dispatch({
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
    async function L(e) {
        try {
            await o.default.delete("/channels/".concat(e.channelId, "/summaries/").concat(e.id)), u.default.dispatch({
                type: "DELETE_SUMMARY",
                summary: e
            })
        } catch (e) {
            throw new d.APIError(e)
        }
    }
    let b = {
        startPolling: function(e) {
            let t = A(e, 1);
            t - 1 == 0 && (S[e] = setInterval(async () => {
                await b.fetchSummaries(e)
            }, y))
        },
        stopPolling: function(e) {
            let t = A(e, -1);
            t <= 0 && (A(e, 0), clearInterval(S[e]))
        },
        setSummaryFeedback: k,
        useSummaryPolling: O,
        updateVisibleMessages: N,
        setSelectedSummary: v,
        setHighlightedSummary: T,
        fetchSummaries: I,
        fetchSummariesBulk: R,
        useChannelSummaries: function(e) {
            let {
                channelIds: t = []
            } = e;
            return ! function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = i.useMemo(() => e.join(","), [e]);
                i.useEffect(() => {
                    (async function e() {
                        try {
                            await M()
                        } catch (e) {}
                        try {
                            var e, n;
                            (null === (e = p.default.getProps().results) || void 0 === e ? void 0 : e.length) === 0 && (0, f.search)(null !== (n = p.default.getProps().query) && void 0 !== n ? n : "")
                        } catch (e) {}
                        await R(t.split(","))
                    })()
                }, [t])
            }(t), (0, r.useStateFromStoresArray)([x.default], () => x.default.topSummaries(), [])
        },
        deleteSummary: L
    };
    var P = b
}