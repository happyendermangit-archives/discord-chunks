function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deleteSummary: function() {
            return D
        },
        fetchSummaries: function() {
            return T
        },
        setHighlightedSummary: function() {
            return v
        },
        setSelectedSummary: function() {
            return A
        },
        setSummaryFeedback: function() {
            return N
        },
        toggleTopicsBar: function() {
            return g
        },
        updateVisibleMessages: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("37295"),
        u = n("967888"),
        s = n("629815"),
        l = n("146591"),
        c = n("46545"),
        f = n("950879"),
        d = n("935741"),
        _ = n("388990"),
        E = n("802957"),
        p = n("281767");

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function I(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var h = 30 * _.default.Millis.SECOND;

    function O() {
        return (O = y(function(e, t) {
            var n, r, o, i, a;
            return I(this, function(c) {
                switch (c.label) {
                    case 0:
                        if (!E.default.shouldFetch(e, t)) return [2];
                        n = Date.now(), s.default.dispatch({
                            type: "REQUEST_CHANNEL_SUMMARY",
                            channelId: e,
                            summaryId: t,
                            requestedAt: n
                        }), r = void 0, o = void 0, c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]), [4, u.HTTP.get(p.Routes.CHANNEL_SUMMARY(e, t))];
                    case 2:
                        return o = null == (i = c.sent()) ? void 0 : i.body, [3, 4];
                    case 3:
                        return a = c.sent(), r = new l.APIError(a), [3, 4];
                    case 4:
                        return s.default.dispatch({
                            type: "RECEIVE_CHANNEL_SUMMARY",
                            channelId: e,
                            summary: o,
                            error: r,
                            requestedAt: n,
                            receivedAt: Date.now()
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function T(e) {
        return S.apply(this, arguments)
    }

    function S() {
        return (S = y(function(e) {
            var t, n, r, o, a, c, f;
            return I(this, function(d) {
                switch (d.label) {
                    case 0:
                        if (!E.default.shouldFetch(e)) return [2];
                        n = Date.now(), s.default.dispatch({
                            type: "REQUEST_CHANNEL_SUMMARIES",
                            channelId: e,
                            requestedAt: n
                        }), r = void 0, o = void 0, d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]), [4, u.HTTP.get(p.Routes.CHANNEL_SUMMARIES(e))];
                    case 2:
                        return o = d.sent(), [3, 4];
                    case 3:
                        return a = d.sent(), r = new l.APIError(a), [3, 4];
                    case 4:
                        var _, m;
                        return _ = null == o ? void 0 : null === (t = o.body) || void 0 === t ? void 0 : t.summaries, f = (null != (m = Array) && "undefined" != typeof Symbol && m[Symbol.hasInstance] ? !!m[Symbol.hasInstance](_) : _ instanceof m) ? o.body.summaries : null !== (c = null == o ? void 0 : o.body) && void 0 !== c ? c : [], f = i().takeRight(f, 75), s.default.dispatch({
                            type: "RECEIVE_CHANNEL_SUMMARIES",
                            channelId: e,
                            summaries: f,
                            error: null != r ? r : void 0,
                            requestedAt: n,
                            receivedAt: Date.now()
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function v(e, t) {
        s.default.dispatch({
            type: "SET_HIGHLIGHTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function g() {
        s.default.dispatch({
            type: "TOGGLE_TOPICS_BAR"
        })
    }

    function A(e, t) {
        null != e && null != t && ! function(e, t) {
            O.apply(this, arguments)
        }(e, t), s.default.dispatch({
            type: "SET_SELECTED_SUMMARY",
            channelId: e,
            summaryId: null != t ? t : null
        })
    }

    function b(e, t) {
        s.default.dispatch({
            type: "UPDATE_VISIBLE_MESSAGES",
            topVisibleMessage: null != e ? e : null,
            bottomVisibleMessage: null != t ? t : null
        })
    }

    function N(e, t) {
        s.default.dispatch({
            type: "SET_SUMMARY_FEEDBACK",
            summary: e,
            rating: t
        })
    }

    function R() {
        return (R = y(function() {
            var e, t, n, r, o, i;
            return I(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!E.default.shouldFetchChannelAffinities()) return [2, Promise.resolve(null)];
                        t = Date.now(), s.default.dispatch({
                            type: "REQUEST_CHANNEL_AFFINITIES",
                            requestedAt: t
                        }), n = void 0, r = void 0, a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, u.HTTP.get("/users/@me/affinities/channels")];
                    case 2:
                        return r = a.sent(), [3, 4];
                    case 3:
                        return o = a.sent(), n = new l.APIError(o), [3, 4];
                    case 4:
                        return i = null == r ? void 0 : null === (e = r.body) || void 0 === e ? void 0 : e.channel_affinities, s.default.dispatch({
                            type: "RECEIVE_CHANNEL_AFFINITIES",
                            affinities: i,
                            error: null != n ? n : void 0,
                            requestedAt: t,
                            receivedAt: Date.now()
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function C(e) {
        return P.apply(this, arguments)
    }

    function P() {
        return (P = y(function(e) {
            var t, n, r, o, i, a, f, _, m, y, O = arguments;
            return I(this, function(I) {
                switch (I.label) {
                    case 0:
                        if (r = void 0 === (n = (t = O.length > 1 && void 0 !== O[1] ? O[1] : {}).useQuickSwitcher) || n, i = void 0 === (o = t.useChannelAffinities) || o, e = null != e ? e : [], a = Date.now(), 0 === (e = e.concat(E.default.defaultChannelIds({
                                withQuickSwitcher: r,
                                withChannelAffinities: i
                            })).filter(function(e) {
                                var t = d.default.getChannel(e);
                                return (0, c.canSeeChannelSummaries)(t, !1, !0)
                            }).filter(function(e) {
                                var t = Date.now(),
                                    n = E.default.status(e);
                                if (null == n ? void 0 : n.fetching) return !1;
                                var r = null == n ? void 0 : n.lastReceivedAt;
                                return null == r || t - r > h
                            }).slice(0, 50)).length) return [2, Promise.resolve(null)];
                        s.default.dispatch({
                            type: "REQUEST_CHANNEL_SUMMARIES_BULK",
                            channelIds: e,
                            requestedAt: a
                        }), f = void 0, _ = void 0, I.label = 1;
                    case 1:
                        return I.trys.push([1, 3, , 4]), [4, u.HTTP.post({
                            url: p.Routes.USER_SUMMARIES,
                            body: {
                                channel_ids: e
                            }
                        })];
                    case 2:
                        return _ = I.sent(), [3, 4];
                    case 3:
                        return m = I.sent(), f = new l.APIError(m), [3, 4];
                    case 4:
                        return y = null == _ ? void 0 : _.body.summaries, s.default.dispatch({
                            type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
                            requestedAt: a,
                            receivedAt: Date.now(),
                            summaries: y,
                            requestArgs: {
                                channelIds: e
                            },
                            error: f
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function D(e) {
        return L.apply(this, arguments)
    }

    function L() {
        return (L = y(function(e) {
            var t;
            return I(this, function(n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, u.HTTP.del(p.Routes.CHANNEL_SUMMARY(e.channelId, e.id))];
                    case 1:
                        return n.sent(), s.default.dispatch({
                            type: "DELETE_SUMMARY",
                            summary: e
                        }), [3, 3];
                    case 2:
                        throw t = n.sent(), new l.APIError(t);
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    t.default = {
        setSummaryFeedback: N,
        updateVisibleMessages: b,
        setSelectedSummary: A,
        setHighlightedSummary: v,
        fetchSummaries: T,
        fetchSummariesBulk: C,
        useChannelSummaries: function(e) {
            var t = e.channelIds;
            return ! function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, a.useStateFromStores)([f.default], function() {
                        return f.default.isConnected()
                    }),
                    n = r.useMemo(function() {
                        return e.join(",")
                    }, [e]);
                r.useEffect(function() {
                    function e() {
                        return (e = y(function() {
                            var e;
                            return I(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, function() {
                                            return R.apply(this, arguments)
                                        }()];
                                    case 1:
                                    case 2:
                                        return e.sent(), [3, 3];
                                    case 3:
                                        return [4, C(n.split(","))];
                                    case 4:
                                        return e.sent(), [2]
                                }
                            })
                        })).apply(this, arguments)
                    }
                    t && ! function() {
                        e.apply(this, arguments)
                    }()
                }, [n, t])
            }(void 0 === t ? [] : t), (0, a.useStateFromStoresArray)([E.default], function() {
                return E.default.topSummaries()
            }, [])
        },
        deleteSummary: D
    }
}