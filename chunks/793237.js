function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setHighlightedSummary: function() {
            return _
        },
        toggleTopicsBar: function() {
            return N
        },
        setSelectedSummary: function() {
            return A
        },
        updateVisibleMessages: function() {
            return x
        },
        useSummaryPolling: function() {
            return O
        },
        setSummaryFeedback: function() {
            return R
        },
        deleteSummary: function() {
            return P
        },
        default: function() {
            return j
        }
    }), n("222007");
    var l = n("884691"),
        i = n("917351"),
        a = n.n(i),
        s = n("394846"),
        r = n("65597"),
        o = n("872717"),
        u = n("913144"),
        d = n("448993"),
        c = n("734575"),
        f = n("104589"),
        m = n("116460"),
        p = n("42203"),
        h = n("718517"),
        E = n("347738");
    let g = 30 * h.default.Millis.SECOND,
        C = 5 * h.default.Millis.SECOND,
        S = {},
        T = {};
    async function v(e, t) {
        let n, l;
        if (!E.default.shouldFetch(e, t)) return;
        let i = Date.now();
        u.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARY",
            channelId: e,
            summaryId: t,
            requestedAt: i
        });
        try {
            let n = await o.default.get("/channels/".concat(e, "/summaries/").concat(t));
            l = null == n ? void 0 : n.body
        } catch (e) {
            n = new d.APIError(e)
        }
        u.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARY",
            channelId: e,
            summary: l,
            error: n,
            requestedAt: i,
            receivedAt: Date.now()
        })
    }
    async function I(e) {
        var t, n;
        let l, i;
        if (!E.default.shouldFetch(e)) return;
        let s = Date.now();
        u.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARIES",
            channelId: e,
            requestedAt: s
        });
        try {
            i = await o.default.get("/channels/".concat(e, "/summaries"))
        } catch (e) {
            l = new d.APIError(e)
        }
        let r = (null == i ? void 0 : null === (t = i.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? i.body.summaries : null !== (n = null == i ? void 0 : i.body) && void 0 !== n ? n : [];
        r = a.takeRight(r, 75), u.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: r,
            error: null != l ? l : void 0,
            requestedAt: s,
            receivedAt: Date.now()
        })
    }

    function _(e, t) {
        u.default.dispatch({
            type: "SET_HIGHLIGHTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function N() {
        u.default.dispatch({
            type: "TOGGLE_TOPICS_BAR"
        })
    }

    function A(e, t) {
        null != e && null != t && v(e, t), u.default.dispatch({
            type: "SET_SELECTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function x(e, t) {
        u.default.dispatch({
            type: "UPDATE_VISIBLE_MESSAGES",
            topVisibleMessage: null != e ? e : null,
            bottomVisibleMessage: null != t ? t : null
        })
    }

    function y(e, t) {
        return null == S[e] && (S[e] = 0), null === t ? S[e] = 0 : S[e] += t, S[e]
    }

    function O(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = (0, r.default)([p.default], () => p.default.getChannel(e), [e]),
            [i, a] = l.useState(null),
            o = (0, c.useChannelSummariesExperiment)(n) && !s.isMobile;
        l.useEffect(() => {
            if (o) return a(e), () => {
                a(null)
            }
        }, [e, o]), l.useEffect(() => {
            if (i !== e && null != i && b.stopPolling(e), o && null != i) return (t || null != e && i !== e) && b.fetchSummaries(e), b.startPolling(e), () => {
                null != i && b.stopPolling(e)
            }
        }, [e, t, i, o])
    }

    function R(e, t) {
        u.default.dispatch({
            type: "SET_SUMMARY_FEEDBACK",
            summary: e,
            rating: t
        })
    }
    async function M() {
        var e;
        let t, n;
        if (!E.default.shouldFetchChannelAffinities()) return Promise.resolve(null);
        let l = Date.now();
        u.default.dispatch({
            type: "REQUEST_CHANNEL_AFFINITIES",
            requestedAt: l
        });
        try {
            n = await o.default.get("/users/@me/affinities/channels")
        } catch (e) {
            t = new d.APIError(e)
        }
        let i = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
        u.default.dispatch({
            type: "RECEIVE_CHANNEL_AFFINITIES",
            affinities: i,
            error: null != t ? t : void 0,
            requestedAt: l,
            receivedAt: Date.now()
        })
    }
    async function L(e) {
        let t, n, {
            useQuickSwitcher: l = !0,
            useChannelAffinities: i = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e = null != e ? e : [];
        let a = Date.now();
        if (0 === (e = e.concat(E.default.defaultChannelIds({
                withQuickSwitcher: l,
                withChannelAffinities: i
            })).filter(e => {
                let t = p.default.getChannel(e);
                return (0, c.canSeeChannelSummaries)(t, !1, !0)
            }).filter(e => {
                let t = Date.now(),
                    n = E.default.status(e);
                if (null == n ? void 0 : n.fetching) return !1;
                let l = null == n ? void 0 : n.lastReceivedAt;
                return null == l || t - l > g
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
    async function P(e) {
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
            let t = y(e, 1);
            t - 1 == 0 && (T[e] = setInterval(async () => {
                await b.fetchSummaries(e)
            }, C))
        },
        stopPolling: function(e) {
            let t = y(e, -1);
            t <= 0 && (y(e, 0), clearInterval(T[e]))
        },
        setSummaryFeedback: R,
        useSummaryPolling: O,
        updateVisibleMessages: x,
        setSelectedSummary: A,
        setHighlightedSummary: _,
        fetchSummaries: I,
        fetchSummariesBulk: L,
        useChannelSummaries: function(e) {
            let {
                channelIds: t = []
            } = e;
            return ! function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = l.useMemo(() => e.join(","), [e]);
                l.useEffect(() => {
                    (async function e() {
                        try {
                            await M()
                        } catch (e) {}
                        try {
                            var e, n;
                            (null === (e = m.default.getProps().results) || void 0 === e ? void 0 : e.length) === 0 && (0, f.search)(null !== (n = m.default.getProps().query) && void 0 !== n ? n : "")
                        } catch (e) {}
                        await L(t.split(","))
                    })()
                }, [t])
            }(t), (0, r.useStateFromStoresArray)([E.default], () => E.default.topSummaries(), [])
        },
        deleteSummary: P
    };
    var j = b
}