function(e, t, n) {
    "use strict";
    let i, r, a, s;
    n.r(t), n("536091"), n("47120"), n("653041"), n("724458");
    var o, l, u, d, _, c, E = n("392711"),
        I = n.n(E),
        T = n("442837"),
        f = n("570140"),
        S = n("902840"),
        h = n("212819"),
        A = n("353926"),
        m = n("823385"),
        N = n("592125"),
        p = n("430824"),
        O = n("306680"),
        R = n("944486"),
        C = n("9156"),
        g = n("594174"),
        L = n("70956"),
        v = n("709054"),
        D = n("418088"),
        M = n("814249");
    (u = o || (o = {})).FETCHING = "fetching", u.OK = "ok", u.ERROR = "error";
    let y = {},
        P = {},
        U = {},
        b = [],
        G = {},
        w = {
            status: "ok",
            lastRequest: null,
            lastResponse: null
        },
        B = [],
        k = [];

    function V() {
        B = m.default.getProps().results.filter(e => e.type === h.AutocompleterResultTypes.TEXT_CHANNEL && 0 === e.record.type).map(e => e.record.id)
    }
    class x extends(l = T.default.PersistedStore) {
        getState() {
            return {
                shouldShowTopicsBar: i
            }
        }
        initialize(e) {
            var t;
            i = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t, this.waitFor(N.default, g.default, R.default, p.default, A.default), this.syncWith([m.default], V)
        }
        allSummaries() {
            return y
        }
        topSummaries() {
            return Object.values(y).flat().filter(e => e.people.length > 1 && v.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * L.default.Millis.HOUR).sort((e, t) => v.default.extractTimestamp(t.endId) - v.default.extractTimestamp(e.endId))
        }
        summaries(e) {
            var t;
            return null !== (t = y[e]) && void 0 !== t ? t : k
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
            return null == e ? null : U[e.id]
        }
        isFetching(e, t) {
            var n, i;
            return null != t ? (null === (i = P[e]) || void 0 === i ? void 0 : i.summaryId) === t : (null === (n = P[e]) || void 0 === n ? void 0 : n.fetching) === !0
        }
        status(e) {
            return P[e]
        }
        shouldFetch(e, t) {
            var n, i;
            let r = P[e],
                a = N.default.getChannel(e);
            if (!(0, S.canSeeChannelSummaries)(a)) return !1;
            if (null != t) {
                let e = null !== (n = null == r ? void 0 : r.summaryIdLastRequestedAt) && void 0 !== n ? n : 0,
                    i = Date.now() - e;
                return t !== (null == r ? void 0 : r.summaryId) || i > M.SUMMARY_POLL_INTERVAL
            }
            let s = null !== (i = null == r ? void 0 : r.lastReceivedAt) && void 0 !== i ? i : 0;
            return !(null == r ? void 0 : r.fetching) && 0 === s
        }
        channelAffinities() {
            return b
        }
        channelAffinitiesById(e) {
            return null == e ? G : G[e]
        }
        channelAffinitiesStatus() {
            return w
        }
        shouldFetchChannelAffinities() {
            return !("fetching" === w.status || null != w.lastResponse && Date.now() - w.lastResponse < 30 * L.default.Millis.SECOND) && !0
        }
        defaultChannelIds(e) {
            let {
                withQuickSwitcher: t,
                withChannelAffinities: n,
                withUnreads: i,
                numChannels: r = 25
            } = e, a = [];
            return t && (a = a.concat(B)), n && (a = a.concat(b.map(e => e.channel_id))), i && (a = a.filter(e => {
                let t = N.default.getChannel(e);
                return null != t && !C.default.isChannelMuted(t.guild_id, e) && O.default.hasUnread(e)
            })), (a = a.filter(e => {
                let t = N.default.getChannel(e);
                return (0, S.canSeeChannelSummaries)(t, !1, !1)
            })).slice(0, r)
        }
        visibleSummaryIndex() {
            return a
        }
    }
    c = "SummaryStore", (_ = "persistKey") in(d = x) ? Object.defineProperty(d, _, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : d[_] = c;
    let F = new x(f.default, {
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
                channelId: r,
                error: a,
                receivedAt: s
            } = e;
            if (null != i && Object.keys(i).length > 0) {
                let e = (0, D.createSummaryFromServer)(i, r),
                    n = [...null !== (t = y[r]) && void 0 !== t ? t : []],
                    a = n.findIndex(t => t.id === (null == e ? void 0 : e.id));
                a > -1 ? n[a] = e : n.push(e), y[r] = n
            }
            let o = {
                ...null !== (n = P[r]) && void 0 !== n ? n : {
                    fetching: !1
                },
                summaryId: void 0,
                summaryIdLastReceivedAt: s,
                summaryIdError: a
            };
            P[r] = o
        },
        REQUEST_CHANNEL_SUMMARY(e) {
            var t;
            let {
                channelId: n,
                summaryId: i,
                requestedAt: r
            } = e;
            P[n] = {
                ...null !== (t = P[n]) && void 0 !== t ? t : {
                    fetching: !1
                },
                summaryId: i,
                summaryIdLastRequestedAt: r
            }
        },
        RECEIVE_CHANNEL_SUMMARIES(e) {
            let {
                summaries: t,
                channelId: n,
                error: i,
                receivedAt: r
            } = e, a = t.filter(e => Object.keys(e).length > 0).map(e => (0, D.createSummaryFromServer)(e, n));
            if (null != s && s.channelId === n && !a.some(e => e.id === (null == s ? void 0 : s.summaryId))) {
                var o;
                let e = (null !== (o = y[n]) && void 0 !== o ? o : []).find(e => e.id === (null == s ? void 0 : s.summaryId));
                null != e && a.push(e)
            }
            y[n] = (0, E.sortBy)(a, e => v.default.extractTimestamp(e.startId)).reverse();
            let l = {
                ...P[n],
                fetching: !1,
                error: void 0,
                lastReceivedAt: r
            };
            null != i && (l.error = i), P[n] = l
        },
        REQUEST_CHANNEL_SUMMARIES(e) {
            var t;
            P[e.channelId] = {
                ...null !== (t = P[e.channelId]) && void 0 !== t ? t : {},
                fetching: !0,
                lastRequestedAt: e.requestedAt
            }
        },
        SET_HIGHLIGHTED_SUMMARY(e) {
            var t;
            if (null == r && null == e.channelId || e.channelId === (null == r ? void 0 : r.channelId) && e.summaryId === (null == r ? void 0 : r.summaryId)) return !1;
            if (null != (r = null != e.channelId ? {
                    channelId: e.channelId,
                    summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                } : null) && r.channelId === e.channelId && null != r.summaryId) {
                let e = y[r.channelId];
                a = null == e ? void 0 : e.findIndex(e => e.id === (null == r ? void 0 : r.summaryId))
            }
        },
        UPDATE_VISIBLE_MESSAGES(e) {
            let t = R.default.getChannelId();
            if (null != t) {
                if (null != r && r.channelId === t && null != r.summaryId) {
                    let e = y[r.channelId];
                    a = null == e ? void 0 : e.findIndex(e => e.id === (null == r ? void 0 : r.summaryId))
                } else {
                    var n;
                    a = null === (n = y[t]) || void 0 === n ? void 0 : n.findIndex(t => {
                        var n, i, r, a;
                        return n = e.topVisibleMessage, i = e.bottomVisibleMessage, r = t.startId, a = t.endId, !(null == n || n > a) && !(null == i || i < r)
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
            null != n ? U[t.id] = n : delete U[t.id]
        },
        REQUEST_CHANNEL_AFFINITIES() {
            w = {
                ...w,
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
                b = [], G = {}, w = {
                    ...w,
                    status: "error",
                    lastResponse: Date.now()
                };
                return
            }
            b = null != n ? n : [], G = null !== (t = null == n ? void 0 : n.reduce((e, t) => (e[t.channel_id] = t.affinity, e), {})) && void 0 !== t ? t : {}, w = {
                ...w,
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
                let r = null !== (i = P[t]) && void 0 !== i ? i : {};
                return e[t] = {
                    ...r,
                    fetching: !0,
                    lastRequestedAt: n,
                    error: void 0
                }, e
            }, {});
            P = {
                ...P,
                ...i
            }
        },
        RECEIVE_CHANNEL_SUMMARIES_BULK(e) {
            let {
                summaries: t,
                receivedAt: n,
                error: i,
                requestArgs: {
                    channelIds: r
                }
            } = e, a = I().toPairs(t).reduce((e, t) => {
                let [n, i] = t, r = I().chain(i.map(e => (0, D.createSummaryFromServer)(e, n))).sortBy(e => v.default.extractTimestamp(e.startId)).takeRight(75).reverse().filter(e => Object.keys(e).length > 0).value();
                return e[n] = r, e
            }, {}), s = r.reduce((e, t) => {
                var r;
                let s = null !== (r = P[t]) && void 0 !== r ? r : {},
                    o = a[t];
                return null != o && (e.summariesByChannel[t] = o), e.summaryFetchStatusByChannel[t] = {
                    ...s,
                    fetching: !1,
                    error: i,
                    lastReceivedAt: n
                }, e
            }, {
                summariesByChannel: {},
                summaryFetchStatusByChannel: {}
            });
            y = {
                ...y,
                ...s.summariesByChannel
            }, P = {
                ...P,
                ...s.summaryFetchStatusByChannel
            }
        },
        CONVERSATION_SUMMARY_UPDATE(e) {
            var t, n, i;
            let {
                channel_id: r,
                summaries: a,
                guild_id: s
            } = e, o = Date.now(), l = I().chain(a).sortBy(e => v.default.extractTimestamp(e.start_id)).filter(e => Object.keys(e).length > 0).map(e => (0, D.createSummaryFromServer)(e, r)).reverse().value(), u = null !== (n = y[r]) && void 0 !== n ? n : [], d = I().chain(l).concat(u).sortBy(e => v.default.extractTimestamp(e.startId)).takeRight(75).uniqBy("id").reverse().value();
            y[r] = d, P[r] = {
                ...P[r],
                error: void 0,
                fetching: null !== (i = null === (t = P[r]) || void 0 === t ? void 0 : t.fetching) && void 0 !== i && i,
                lastReceivedAt: o
            }
        },
        CLEAR_CONVERSATION_SUMMARIES() {
            y = {}, P = {}
        },
        DELETE_SUMMARY(e) {
            var t;
            let n = e.summary.channelId,
                i = (null !== (t = y[n]) && void 0 !== t ? t : []).indexOf(e.summary); - 1 !== i && y[n].splice(i, 1)
        }
    });
    t.default = F
}