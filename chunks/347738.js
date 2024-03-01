function(e, t, n) {
    "use strict";
    let l, i, a, s;
    n.r(t), n.d(t, {
        default: function() {
            return k
        }
    }), n("834022"), n("222007"), n("424973"), n("808653");
    var r, o, u = n("917351"),
        d = n.n(u),
        c = n("446674"),
        f = n("913144"),
        m = n("734575"),
        p = n("123225"),
        h = n("789563"),
        E = n("116460"),
        g = n("42203"),
        C = n("305961"),
        S = n("660478"),
        T = n("18494"),
        v = n("282109"),
        I = n("697218"),
        _ = n("718517"),
        N = n("299039"),
        A = n("204653");
    (o = r || (r = {})).FETCHING = "fetching", o.OK = "ok", o.ERROR = "error";
    let x = {},
        y = {},
        O = {},
        R = [],
        M = {},
        L = {
            status: "ok",
            lastRequest: null,
            lastResponse: null
        },
        P = [],
        b = [];

    function j() {
        P = E.default.getProps().results.filter(e => e.type === p.AutocompleterResultTypes.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
    }
    class U extends c.default.PersistedStore {
        getState() {
            return {
                shouldShowTopicsBar: l
            }
        }
        initialize(e) {
            var t;
            l = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t, this.waitFor(g.default, I.default, T.default, C.default, h.default), this.syncWith([E.default], j)
        }
        allSummaries() {
            return x
        }
        topSummaries() {
            let e = Object.values(x).flat().filter(e => e.people.length > 1 && N.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * _.default.Millis.HOUR).sort((e, t) => N.default.extractTimestamp(t.endId) - N.default.extractTimestamp(e.endId));
            return e
        }
        summaries(e) {
            var t;
            return null !== (t = x[e]) && void 0 !== t ? t : b
        }
        shouldShowTopicsBar() {
            return l
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
            var n, l;
            return null != t ? (null === (l = y[e]) || void 0 === l ? void 0 : l.summaryId) === t : (null === (n = y[e]) || void 0 === n ? void 0 : n.fetching) === !0
        }
        status(e) {
            return y[e]
        }
        shouldFetch(e, t) {
            var n, l, i;
            let a = x[e],
                s = y[e],
                r = g.default.getChannel(e);
            if (!(0, m.canSeeChannelSummaries)(r)) return !1;
            if (null != t) {
                let e = null !== (l = null == s ? void 0 : s.summaryIdLastRequestedAt) && void 0 !== l ? l : 0,
                    n = Date.now() - e;
                return t !== (null == s ? void 0 : s.summaryId) || n > 5e3
            }
            let o = null !== (i = null == s ? void 0 : s.lastRequestedAt) && void 0 !== i ? i : 0,
                u = Date.now() - o;
            return (null === (n = y[e]) || void 0 === n ? void 0 : n.fetching) !== !0 && ((null == a ? void 0 : a.length) < 1 || u >= 5e3)
        }
        channelAffinities() {
            return R
        }
        channelAffinitiesById(e) {
            return null == e ? M : M[e]
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
                withUnreads: l,
                numChannels: i = 25
            } = e, a = [];
            return t && (a = a.concat(P)), n && (a = a.concat(R.map(e => e.channel_id))), l && (a = a.filter(e => {
                let t = g.default.getChannel(e);
                return null != t && !v.default.isChannelMuted(t.guild_id, e) && S.default.hasUnread(e)
            })), (a = a.filter(e => {
                let t = g.default.getChannel(e);
                return (0, m.canSeeChannelSummaries)(t, !1, !1)
            })).slice(0, i)
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
            l = !l
        },
        RECEIVE_CHANNEL_SUMMARY(e) {
            var t, n;
            let {
                summary: l,
                channelId: i,
                error: a,
                receivedAt: s
            } = e;
            if (null != l && Object.keys(l).length > 0) {
                let e = (0, A.createSummaryFromServer)(l, i),
                    n = [...null !== (t = x[i]) && void 0 !== t ? t : []],
                    a = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
                a > -1 ? n[a] = e : n.push(e), x[i] = n
            }
            let r = {
                ...null !== (n = y[i]) && void 0 !== n ? n : {
                    fetching: !1
                },
                summaryId: void 0,
                summaryIdLastReceivedAt: s,
                summaryIdError: a
            };
            y[i] = r
        },
        REQUEST_CHANNEL_SUMMARY(e) {
            var t;
            let {
                channelId: n,
                summaryId: l,
                requestedAt: i
            } = e;
            y[n] = {
                ...null !== (t = y[n]) && void 0 !== t ? t : {
                    fetching: !1
                },
                summaryId: l,
                summaryIdLastRequestedAt: i
            }
        },
        RECEIVE_CHANNEL_SUMMARIES(e) {
            let {
                summaries: t,
                channelId: n,
                error: l,
                receivedAt: i
            } = e, a = t.filter(e => Object.keys(e).length > 0).map(e => (0, A.createSummaryFromServer)(e, n));
            if (null != s && s.channelId === n && !a.some(e => e.id === (null == s ? void 0 : s.summaryId))) {
                var r;
                let e = null !== (r = x[n]) && void 0 !== r ? r : [],
                    t = e.find(e => e.id === (null == s ? void 0 : s.summaryId));
                null != t && a.push(t)
            }
            x[n] = (0, u.sortBy)(a, e => N.default.extractTimestamp(e.startId)).reverse();
            let o = {
                ...y[n],
                fetching: !1,
                error: void 0,
                lastReceivedAt: i
            };
            null != l && (o.error = l), y[n] = o
        },
        REQUEST_CHANNEL_SUMMARIES(e) {
            var t;
            y[e.channelId] = {
                ...null !== (t = y[e.channelId]) && void 0 !== t ? t : {},
                fetching: !0,
                lastRequestedAt: e.requestedAt
            }
        },
        SET_HIGHLIGHTED_SUMMARY(e) {
            var t;
            if (null == i && null == e.channelId || e.channelId === (null == i ? void 0 : i.channelId) && e.summaryId === (null == i ? void 0 : i.summaryId)) return !1;
            if (null != (i = null != e.channelId ? {
                    channelId: e.channelId,
                    summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                } : null) && i.channelId === e.channelId && null != i.summaryId) {
                let e = x[i.channelId];
                a = null == e ? void 0 : e.findIndex(e => e.id === (null == i ? void 0 : i.summaryId))
            }
        },
        UPDATE_VISIBLE_MESSAGES(e) {
            let t = T.default.getChannelId();
            if (null != t) {
                if (null != i && i.channelId === t && null != i.summaryId) {
                    let e = x[i.channelId];
                    a = null == e ? void 0 : e.findIndex(e => e.id === (null == i ? void 0 : i.summaryId))
                } else {
                    var n;
                    a = null === (n = x[t]) || void 0 === n ? void 0 : n.findIndex(t => {
                        var n, l, i, a;
                        return n = e.topVisibleMessage, l = e.bottomVisibleMessage, i = t.startId, a = t.endId, !(null == n || n > a) && !(null == l || l < i)
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
                error: l
            } = e;
            if (null != l) {
                R = [], M = {}, L = {
                    ...L,
                    status: "error",
                    lastResponse: Date.now()
                };
                return
            }
            R = null != n ? n : [], M = null !== (t = null == n ? void 0 : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) && void 0 !== t ? t : {}, L = {
                ...L,
                status: "ok",
                lastResponse: Date.now()
            }
        },
        REQUEST_CHANNEL_SUMMARIES_BULK(e) {
            let {
                channelIds: t,
                requestedAt: n
            } = e, l = t.reduce((e, t) => {
                var l;
                let i = null !== (l = y[t]) && void 0 !== l ? l : {};
                return e[t] = {
                    ...i,
                    fetching: !0,
                    lastRequestedAt: n,
                    error: void 0
                }, e
            }, {});
            y = {
                ...y,
                ...l
            }
        },
        RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
            let {
                summaries: t,
                receivedAt: n,
                error: l,
                requestArgs: {
                    channelIds: i
                }
            } = e, a = d.toPairs(t).reduce((e, t) => {
                let [n, l] = t, i = d.chain(l.map(e => (0, A.createSummaryFromServer)(e, n))).sortBy(e => N.default.extractTimestamp(e.startId)).takeRight(75).reverse().filter(e => Object.keys(e).length > 0).value();
                return e[n] = i, e
            }, {}), s = i.reduce((e, t) => {
                var i;
                let s = null !== (i = y[t]) && void 0 !== i ? i : {},
                    r = a[t];
                return null != r && (e.summariesByChannel[t] = r), e.summaryFetchStatusByChannel[t] = {
                    ...s,
                    fetching: !1,
                    error: l,
                    lastReceivedAt: n
                }, e
            }, {
                summariesByChannel: {},
                summaryFetchStatusByChannel: {}
            });
            x = {
                ...x,
                ...s.summariesByChannel
            }, y = {
                ...y,
                ...s.summaryFetchStatusByChannel
            }
        },
        CONVERSATION_SUMMARY_UPDATE(e) {
            var t, n, l;
            let {
                channel_id: i,
                summaries: a,
                guild_id: s
            } = e, r = Date.now(), o = d.chain(a).sortBy(e => N.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, A.createSummaryFromServer)(e, i)).reverse().value(), u = null !== (n = x[i]) && void 0 !== n ? n : [], c = d.chain(o).concat(u).sortBy(e => N.default.extractTimestamp(e.startId)).takeRight(75).uniqBy("id").reverse().value();
            x[i] = c, y[i] = {
                ...y[i],
                error: void 0,
                fetching: null !== (l = null === (t = y[i]) || void 0 === t ? void 0 : t.fetching) && void 0 !== l && l,
                lastReceivedAt: r
            }
        },
        CLEAR_CONVERSATION_SUMMARIES() {
            x = {}, y = {}
        },
        DELETE_SUMMARY(e) {
            var t;
            let n = e.summary.channelId,
                l = null !== (t = x[n]) && void 0 !== t ? t : [],
                i = l.indexOf(e.summary); - 1 !== i && x[n].splice(i, 1)
        }
    });
    var k = D
}