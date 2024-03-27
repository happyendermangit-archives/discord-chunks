function(e, t, n) {
    "use strict";
    let i, l, a, s;
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    }), n("834022"), n("222007"), n("424973"), n("808653");
    var r, o, u = n("917351"),
        d = n.n(u),
        c = n("446674"),
        f = n("913144"),
        m = n("734575"),
        p = n("123225"),
        h = n("789563"),
        x = n("116460"),
        E = n("42203"),
        y = n("305961"),
        g = n("660478"),
        S = n("18494"),
        C = n("282109"),
        T = n("697218"),
        _ = n("718517"),
        I = n("299039"),
        v = n("204653"),
        A = n("995307");
    (o = r || (r = {})).FETCHING = "fetching", o.OK = "ok", o.ERROR = "error";
    let N = {},
        R = {},
        O = {},
        M = [],
        k = {},
        L = {
            status: "ok",
            lastRequest: null,
            lastResponse: null
        },
        P = [],
        b = [];

    function j() {
        P = x.default.getProps().results.filter(e => e.type === p.AutocompleterResultTypes.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
    }
    class U extends c.default.PersistedStore {
        getState() {
            return {
                shouldShowTopicsBar: i
            }
        }
        initialize(e) {
            var t;
            i = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t, this.waitFor(E.default, T.default, S.default, y.default, h.default), this.syncWith([x.default], j)
        }
        allSummaries() {
            return N
        }
        topSummaries() {
            let e = Object.values(N).flat().filter(e => e.people.length > 1 && I.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * _.default.Millis.HOUR).sort((e, t) => I.default.extractTimestamp(t.endId) - I.default.extractTimestamp(e.endId));
            return e
        }
        summaries(e) {
            var t;
            return null !== (t = N[e]) && void 0 !== t ? t : b
        }
        shouldShowTopicsBar() {
            return i
        }
        findSummary(e, t) {
            var n;
            return null !== (n = this.summaries(e).find(e => e.id === t)) && void 0 !== n ? n : null
        }
        selectedSummary(e) {
            return null != s && s.channelId === e && null != s.summaryId ? this.findSummary(e, null == s ? void 0 : s.summaryId) : null
        }
        summaryFeedback(e) {
            return null == e ? null : O[e.id]
        }
        isFetching(e, t) {
            var n, i;
            return null != t ? (null === (i = R[e]) || void 0 === i ? void 0 : i.summaryId) === t : (null === (n = R[e]) || void 0 === n ? void 0 : n.fetching) === !0
        }
        status(e) {
            return R[e]
        }
        shouldFetch(e, t) {
            var n, i;
            let l = R[e],
                a = E.default.getChannel(e);
            if (!(0, m.canSeeChannelSummaries)(a)) return !1;
            if (null != t) {
                let e = null !== (n = null == l ? void 0 : l.summaryIdLastRequestedAt) && void 0 !== n ? n : 0,
                    i = Date.now() - e;
                return t !== (null == l ? void 0 : l.summaryId) || i > A.SUMMARY_POLL_INTERVAL
            }
            let s = null !== (i = null == l ? void 0 : l.lastReceivedAt) && void 0 !== i ? i : 0;
            return !(null == l ? void 0 : l.fetching) && 0 === s
        }
        channelAffinities() {
            return M
        }
        channelAffinitiesById(e) {
            return null == e ? k : k[e]
        }
        channelAffinitiesStatus() {
            return L
        }
        shouldFetchChannelAffinities() {
            return !("fetching" === L.status || null != L.lastResponse && Date.now() - L.lastResponse < 30 * _.default.Millis.SECOND) && !0
        }
        defaultChannelIds(e) {
            let {
                withQuickSwitcher: t,
                withChannelAffinities: n,
                withUnreads: i,
                numChannels: l = 25
            } = e, a = [];
            return t && (a = a.concat(P)), n && (a = a.concat(M.map(e => e.channel_id))), i && (a = a.filter(e => {
                let t = E.default.getChannel(e);
                return null != t && !C.default.isChannelMuted(t.guild_id, e) && g.default.hasUnread(e)
            })), (a = a.filter(e => {
                let t = E.default.getChannel(e);
                return (0, m.canSeeChannelSummaries)(t, !1, !1)
            })).slice(0, l)
        }
        visibleSummaryIndex() {
            return a
        }
    }
    U.persistKey = "SummaryStore";
    let D = new U(f.default, {
        CONNECTION_OPEN: () => !1,
        CHANNEL_SELECT(e) {
            let {
                channelId: t
            } = e;
            (null == s ? void 0 : s.channelId) !== t && (s = null)
        },
        TOGGLE_TOPICS_BAR() {
            i = !i
        },
        RECEIVE_CHANNEL_SUMMARY(e) {
            var t, n;
            let {
                summary: i,
                channelId: l,
                error: a,
                receivedAt: s
            } = e;
            if (null != i && Object.keys(i).length > 0) {
                let e = (0, v.createSummaryFromServer)(i, l),
                    n = [...null !== (t = N[l]) && void 0 !== t ? t : []],
                    a = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
                a > -1 ? n[a] = e : n.push(e), N[l] = n
            }
            let r = {
                ...null !== (n = R[l]) && void 0 !== n ? n : {
                    fetching: !1
                },
                summaryId: void 0,
                summaryIdLastReceivedAt: s,
                summaryIdError: a
            };
            R[l] = r
        },
        REQUEST_CHANNEL_SUMMARY(e) {
            var t;
            let {
                channelId: n,
                summaryId: i,
                requestedAt: l
            } = e;
            R[n] = {
                ...null !== (t = R[n]) && void 0 !== t ? t : {
                    fetching: !1
                },
                summaryId: i,
                summaryIdLastRequestedAt: l
            }
        },
        RECEIVE_CHANNEL_SUMMARIES(e) {
            let {
                summaries: t,
                channelId: n,
                error: i,
                receivedAt: l
            } = e, a = t.filter(e => Object.keys(e).length > 0).map(e => (0, v.createSummaryFromServer)(e, n));
            if (null != s && s.channelId === n && !a.some(e => e.id === (null == s ? void 0 : s.summaryId))) {
                var r;
                let e = null !== (r = N[n]) && void 0 !== r ? r : [],
                    t = e.find(e => e.id === (null == s ? void 0 : s.summaryId));
                null != t && a.push(t)
            }
            N[n] = (0, u.sortBy)(a, e => I.default.extractTimestamp(e.startId)).reverse();
            let o = {
                ...R[n],
                fetching: !1,
                error: void 0,
                lastReceivedAt: l
            };
            null != i && (o.error = i), R[n] = o
        },
        REQUEST_CHANNEL_SUMMARIES(e) {
            var t;
            R[e.channelId] = {
                ...null !== (t = R[e.channelId]) && void 0 !== t ? t : {},
                fetching: !0,
                lastRequestedAt: e.requestedAt
            }
        },
        SET_HIGHLIGHTED_SUMMARY(e) {
            var t;
            if (null == l && null == e.channelId || e.channelId === (null == l ? void 0 : l.channelId) && e.summaryId === (null == l ? void 0 : l.summaryId)) return !1;
            if (null != (l = null != e.channelId ? {
                    channelId: e.channelId,
                    summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                } : null) && l.channelId === e.channelId && null != l.summaryId) {
                let e = N[l.channelId];
                a = null == e ? void 0 : e.findIndex(e => e.id === (null == l ? void 0 : l.summaryId))
            }
        },
        UPDATE_VISIBLE_MESSAGES(e) {
            let t = S.default.getChannelId();
            if (null != t) {
                if (null != l && l.channelId === t && null != l.summaryId) {
                    let e = N[l.channelId];
                    a = null == e ? void 0 : e.findIndex(e => e.id === (null == l ? void 0 : l.summaryId))
                } else {
                    var n;
                    a = null === (n = N[t]) || void 0 === n ? void 0 : n.findIndex(t => {
                        var n, i, l, a;
                        return n = e.topVisibleMessage, i = e.bottomVisibleMessage, l = t.startId, a = t.endId, !(null == n || n > a) && !(null == i || i < l)
                    })
                }
            }
        },
        SET_SELECTED_SUMMARY(e) {
            var t;
            let n = e.channelId;
            return null == n ? null : (n !== (null == s ? void 0 : s.channelId) || e.summaryId !== (null == s ? void 0 : s.summaryId)) && void(s = {
                channelId: n,
                summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
            })
        },
        SET_SUMMARY_FEEDBACK(e) {
            let {
                summary: t,
                rating: n
            } = e;
            null != n ? O[t.id] = n : delete O[t.id]
        },
        REQUEST_CHANNEL_AFFINITIES() {
            L = {
                ...L,
                status: "fetching",
                lastRequest: Date.now()
            }
        },
        RECEIVE_CHANNEL_AFFINITIES(e) {
            var t;
            let {
                affinities: n,
                error: i
            } = e;
            if (null != i) {
                M = [], k = {}, L = {
                    ...L,
                    status: "error",
                    lastResponse: Date.now()
                };
                return
            }
            M = null != n ? n : [], k = null !== (t = null == n ? void 0 : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) && void 0 !== t ? t : {}, L = {
                ...L,
                status: "ok",
                lastResponse: Date.now()
            }
        },
        REQUEST_CHANNEL_SUMMARIES_BULK(e) {
            let {
                channelIds: t,
                requestedAt: n
            } = e, i = t.reduce((e, t) => {
                var i;
                let l = null !== (i = R[t]) && void 0 !== i ? i : {};
                return e[t] = {
                    ...l,
                    fetching: !0,
                    lastRequestedAt: n,
                    error: void 0
                }, e
            }, {});
            R = {
                ...R,
                ...i
            }
        },
        RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
            let {
                summaries: t,
                receivedAt: n,
                error: i,
                requestArgs: {
                    channelIds: l
                }
            } = e, a = d.toPairs(t).reduce((e, t) => {
                let [n, i] = t, l = d.chain(i.map(e => (0, v.createSummaryFromServer)(e, n))).sortBy(e => I.default.extractTimestamp(e.startId)).takeRight(75).reverse().filter(e => Object.keys(e).length > 0).value();
                return e[n] = l, e
            }, {}), s = l.reduce((e, t) => {
                var l;
                let s = null !== (l = R[t]) && void 0 !== l ? l : {},
                    r = a[t];
                return null != r && (e.summariesByChannel[t] = r), e.summaryFetchStatusByChannel[t] = {
                    ...s,
                    fetching: !1,
                    error: i,
                    lastReceivedAt: n
                }, e
            }, {
                summariesByChannel: {},
                summaryFetchStatusByChannel: {}
            });
            N = {
                ...N,
                ...s.summariesByChannel
            }, R = {
                ...R,
                ...s.summaryFetchStatusByChannel
            }
        },
        CONVERSATION_SUMMARY_UPDATE(e) {
            var t, n, i;
            let {
                channel_id: l,
                summaries: a,
                guild_id: s
            } = e, r = Date.now(), o = d.chain(a).sortBy(e => I.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, v.createSummaryFromServer)(e, l)).reverse().value(), u = null !== (n = N[l]) && void 0 !== n ? n : [], c = d.chain(o).concat(u).sortBy(e => I.default.extractTimestamp(e.startId)).takeRight(75).uniqBy("id").reverse().value();
            N[l] = c, R[l] = {
                ...R[l],
                error: void 0,
                fetching: null !== (i = null === (t = R[l]) || void 0 === t ? void 0 : t.fetching) && void 0 !== i && i,
                lastReceivedAt: r
            }
        },
        CLEAR_CONVERSATION_SUMMARIES() {
            N = {}, R = {}
        },
        DELETE_SUMMARY(e) {
            var t;
            let n = e.summary.channelId,
                i = null !== (t = N[n]) && void 0 !== t ? t : [],
                l = i.indexOf(e.summary); - 1 !== l && N[n].splice(l, 1)
        }
    });
    var w = D
}