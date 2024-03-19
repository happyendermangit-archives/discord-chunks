function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fetchSummaries: function() {
            return y
        },
        setHighlightedSummary: function() {
            return g
        },
        toggleTopicsBar: function() {
            return S
        },
        setSelectedSummary: function() {
            return C
        },
        updateVisibleMessages: function() {
            return _
        },
        setSummaryFeedback: function() {
            return I
        },
        deleteSummary: function() {
            return N
        },
        default: function() {
            return A
        }
    });
    var i = n("884691"),
        l = n("917351"),
        a = n.n(l),
        s = n("65597"),
        r = n("872717"),
        o = n("913144"),
        u = n("448993"),
        d = n("734575"),
        c = n("619443"),
        f = n("42203"),
        p = n("718517"),
        m = n("347738"),
        h = n("49111");
    let x = 30 * p.default.Millis.SECOND;
    async function E(e, t) {
        let n, i;
        if (!m.default.shouldFetch(e, t)) return;
        let l = Date.now();
        o.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARY",
            channelId: e,
            summaryId: t,
            requestedAt: l
        });
        try {
            let n = await r.default.get(h.Routes.CHANNEL_SUMMARY(e, t));
            i = null == n ? void 0 : n.body
        } catch (e) {
            n = new u.APIError(e)
        }
        o.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARY",
            channelId: e,
            summary: i,
            error: n,
            requestedAt: l,
            receivedAt: Date.now()
        })
    }
    async function y(e) {
        var t, n;
        let i, l;
        if (!m.default.shouldFetch(e)) return;
        let s = Date.now();
        o.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARIES",
            channelId: e,
            requestedAt: s
        });
        try {
            l = await r.default.get(h.Routes.CHANNEL_SUMMARIES(e))
        } catch (e) {
            i = new u.APIError(e)
        }
        let d = (null == l ? void 0 : null === (t = l.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? l.body.summaries : null !== (n = null == l ? void 0 : l.body) && void 0 !== n ? n : [];
        d = a.takeRight(d, 75), o.default.dispatch({
            type: "RECEIVE_CHANNEL_SUMMARIES",
            channelId: e,
            summaries: d,
            error: null != i ? i : void 0,
            requestedAt: s,
            receivedAt: Date.now()
        })
    }

    function g(e, t) {
        o.default.dispatch({
            type: "SET_HIGHLIGHTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function S() {
        o.default.dispatch({
            type: "TOGGLE_TOPICS_BAR"
        })
    }

    function C(e, t) {
        null != e && null != t && E(e, t), o.default.dispatch({
            type: "SET_SELECTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function _(e, t) {
        o.default.dispatch({
            type: "UPDATE_VISIBLE_MESSAGES",
            topVisibleMessage: null != e ? e : null,
            bottomVisibleMessage: null != t ? t : null
        })
    }

    function I(e, t) {
        o.default.dispatch({
            type: "SET_SUMMARY_FEEDBACK",
            summary: e,
            rating: t
        })
    }
    async function T() {
        var e;
        let t, n;
        if (!m.default.shouldFetchChannelAffinities()) return Promise.resolve(null);
        let i = Date.now();
        o.default.dispatch({
            type: "REQUEST_CHANNEL_AFFINITIES",
            requestedAt: i
        });
        try {
            n = await r.default.get("/users/@me/affinities/channels")
        } catch (e) {
            t = new u.APIError(e)
        }
        let l = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
        o.default.dispatch({
            type: "RECEIVE_CHANNEL_AFFINITIES",
            affinities: l,
            error: null != t ? t : void 0,
            requestedAt: i,
            receivedAt: Date.now()
        })
    }
    async function v(e) {
        let t, n, {
            useQuickSwitcher: i = !0,
            useChannelAffinities: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        e = null != e ? e : [];
        let a = Date.now();
        if (0 === (e = e.concat(m.default.defaultChannelIds({
                withQuickSwitcher: i,
                withChannelAffinities: l
            })).filter(e => {
                let t = f.default.getChannel(e);
                return (0, d.canSeeChannelSummaries)(t, !1, !0)
            }).filter(e => {
                let t = Date.now(),
                    n = m.default.status(e);
                if (null == n ? void 0 : n.fetching) return !1;
                let i = null == n ? void 0 : n.lastReceivedAt;
                return null == i || t - i > x
            }).slice(0, 50)).length) return Promise.resolve(null);
        o.default.dispatch({
            type: "REQUEST_CHANNEL_SUMMARIES_BULK",
            channelIds: e,
            requestedAt: a
        });
        try {
            n = await r.default.post({
                url: h.Routes.USER_SUMMARIES,
                body: {
                    channel_ids: e
                }
            })
        } catch (e) {
            t = new u.APIError(e)
        }
        let s = null == n ? void 0 : n.body.summaries;
        o.default.dispatch({
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
    async function N(e) {
        try {
            await r.default.delete(h.Routes.CHANNEL_SUMMARY(e.channelId, e.id)), o.default.dispatch({
                type: "DELETE_SUMMARY",
                summary: e
            })
        } catch (e) {
            throw new u.APIError(e)
        }
    }
    var A = {
        setSummaryFeedback: I,
        updateVisibleMessages: _,
        setSelectedSummary: C,
        setHighlightedSummary: g,
        fetchSummaries: y,
        fetchSummariesBulk: v,
        useChannelSummaries: function(e) {
            let {
                channelIds: t = []
            } = e;
            return ! function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, s.default)([c.default], () => c.default.isConnected()),
                    n = i.useMemo(() => e.join(","), [e]);
                i.useEffect(() => {
                    t && e();
                    async function e() {
                        try {
                            await T()
                        } catch (e) {}
                        await v(n.split(","))
                    }
                }, [n, t])
            }(t), (0, s.useStateFromStoresArray)([m.default], () => m.default.topSummaries(), [])
        },
        deleteSummary: N
    }
}