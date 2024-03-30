function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l, c = n("392711"),
        f = n.n(c),
        d = n("898511"),
        _ = n("629815"),
        E = n("46545"),
        p = n("505793"),
        m = n("963041"),
        y = n("263924"),
        I = n("935741"),
        h = n("306912"),
        O = n("879547"),
        T = n("894288"),
        S = n("848957"),
        v = n("208454"),
        g = n("388990"),
        A = n("523018"),
        b = n("180921"),
        N = n("635277");

    function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function C(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function D(e) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function L(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                P(e, t, n[t])
            })
        }
        return e
    }

    function M(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function U(e, t) {
        return (U = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function w(e, t) {
        if (e) {
            if ("string" == typeof e) return R(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
        }
    }(r = o || (o = {})).FETCHING = "fetching", r.OK = "ok", r.ERROR = "error";
    var k = {},
        G = {},
        B = {},
        j = [],
        F = {},
        V = {
            status: "ok",
            lastRequest: null,
            lastResponse: null
        },
        H = [],
        x = [];

    function Y() {
        H = y.default.getProps().results.filter(function(e) {
            return e.type === p.AutocompleterResultTypes.TEXT_CHANNEL && 0 === e.record.type
        }).map(function(e) {
            return e.record.id
        })
    }
    var W = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && U(e, t)
        }(c, e);
        var t, n, r, o, a, l = (t = c, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = D(t);
            if (n) {
                var a = D(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function c() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), l.apply(this, arguments)
        }
        return r = c, o = [{
            key: "getState",
            value: function() {
                return {
                    shouldShowTopicsBar: i
                }
            }
        }, {
            key: "initialize",
            value: function(e) {
                var t;
                i = null === (t = null == e ? void 0 : e.shouldShowTopicsBar) || void 0 === t || t, this.waitFor(I.default, v.default, T.default, h.default, m.default), this.syncWith([y.default], Y)
            }
        }, {
            key: "allSummaries",
            value: function() {
                return k
            }
        }, {
            key: "topSummaries",
            value: function() {
                return Object.values(k).flat().filter(function(e) {
                    return e.people.length > 1 && A.default.extractTimestamp(e.endId) > new Date().getTime() - 5 * g.default.Millis.HOUR
                }).sort(function(e, t) {
                    return A.default.extractTimestamp(t.endId) - A.default.extractTimestamp(e.endId)
                })
            }
        }, {
            key: "summaries",
            value: function(e) {
                var t;
                return null !== (t = k[e]) && void 0 !== t ? t : x
            }
        }, {
            key: "shouldShowTopicsBar",
            value: function() {
                return i
            }
        }, {
            key: "findSummary",
            value: function(e, t) {
                var n;
                return null !== (n = this.summaries(e).find(function(e) {
                    return e.id === t
                })) && void 0 !== n ? n : null
            }
        }, {
            key: "selectedSummary",
            value: function(e) {
                return null != s && s.channelId === e && null != s.summaryId ? this.findSummary(e, null == s ? void 0 : s.summaryId) : null
            }
        }, {
            key: "summaryFeedback",
            value: function(e) {
                return null == e ? null : B[e.id]
            }
        }, {
            key: "isFetching",
            value: function(e, t) {
                var n, r;
                return null != t ? (null === (r = G[e]) || void 0 === r ? void 0 : r.summaryId) === t : (null === (n = G[e]) || void 0 === n ? void 0 : n.fetching) === !0
            }
        }, {
            key: "status",
            value: function(e) {
                return G[e]
            }
        }, {
            key: "shouldFetch",
            value: function(e, t) {
                var n, r = G[e],
                    o = I.default.getChannel(e);
                if (!(0, E.canSeeChannelSummaries)(o)) return !1;
                if (null != t) {
                    var i, a = null !== (i = null == r ? void 0 : r.summaryIdLastRequestedAt) && void 0 !== i ? i : 0,
                        u = Date.now() - a;
                    return t !== (null == r ? void 0 : r.summaryId) || u > N.SUMMARY_POLL_INTERVAL
                }
                var s = null !== (n = null == r ? void 0 : r.lastReceivedAt) && void 0 !== n ? n : 0;
                return !(null == r ? void 0 : r.fetching) && 0 === s
            }
        }, {
            key: "channelAffinities",
            value: function() {
                return j
            }
        }, {
            key: "channelAffinitiesById",
            value: function(e) {
                return null == e ? F : F[e]
            }
        }, {
            key: "channelAffinitiesStatus",
            value: function() {
                return V
            }
        }, {
            key: "shouldFetchChannelAffinities",
            value: function() {
                return !("fetching" === V.status || null != V.lastResponse && Date.now() - V.lastResponse < 30 * g.default.Millis.SECOND) && !0
            }
        }, {
            key: "defaultChannelIds",
            value: function(e) {
                var t = e.withQuickSwitcher,
                    n = e.withChannelAffinities,
                    r = e.withUnreads,
                    o = e.numChannels,
                    i = [];
                return t && (i = i.concat(H)), n && (i = i.concat(j.map(function(e) {
                    return e.channel_id
                }))), r && (i = i.filter(function(e) {
                    var t = I.default.getChannel(e);
                    return null != t && !S.default.isChannelMuted(t.guild_id, e) && O.default.hasUnread(e)
                })), (i = i.filter(function(e) {
                    var t = I.default.getChannel(e);
                    return (0, E.canSeeChannelSummaries)(t, !1, !1)
                })).slice(0, void 0 === o ? 25 : o)
            }
        }, {
            key: "visibleSummaryIndex",
            value: function() {
                return u
            }
        }], C(r.prototype, o), a && C(r, a), c
    }(d.default.PersistedStore);
    P(W, "persistKey", "SummaryStore");
    var K = new W(_.default, {
        CONNECTION_OPEN: function() {
            return !1
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            (null == s ? void 0 : s.channelId) !== t && (s = null)
        },
        TOGGLE_TOPICS_BAR: function() {
            i = !i
        },
        RECEIVE_CHANNEL_SUMMARY: function(e) {
            var t, n = e.summary,
                r = e.channelId,
                o = e.error,
                i = e.receivedAt;
            if (null != n && Object.keys(n).length > 0) {
                var a, u, s = (0, b.createSummaryFromServer)(n, r);
                var l = function(e) {
                        if (Array.isArray(e)) return R(e)
                    }(a = null !== (u = k[r]) && void 0 !== u ? u : []) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(a) || w(a) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    c = l.findIndex(function(e) {
                        return e.id === (null == s ? void 0 : s.id)
                    });
                c > -1 ? l[c] = s : l.push(s), k[r] = l
            }
            var f = M(L({}, null !== (t = G[r]) && void 0 !== t ? t : {
                fetching: !1
            }), {
                summaryId: void 0,
                summaryIdLastReceivedAt: i,
                summaryIdError: o
            });
            G[r] = f
        },
        REQUEST_CHANNEL_SUMMARY: function(e) {
            var t, n = e.channelId,
                r = e.summaryId,
                o = e.requestedAt;
            G[n] = M(L({}, null !== (t = G[n]) && void 0 !== t ? t : {
                fetching: !1
            }), {
                summaryId: r,
                summaryIdLastRequestedAt: o
            })
        },
        RECEIVE_CHANNEL_SUMMARIES: function(e) {
            var t = e.summaries,
                n = e.channelId,
                r = e.error,
                o = e.receivedAt,
                i = t.filter(function(e) {
                    return Object.keys(e).length > 0
                }).map(function(e) {
                    return (0, b.createSummaryFromServer)(e, n)
                });
            if (null != s && s.channelId === n && !i.some(function(e) {
                    return e.id === (null == s ? void 0 : s.summaryId)
                })) {
                var a, u = (null !== (a = k[n]) && void 0 !== a ? a : []).find(function(e) {
                    return e.id === (null == s ? void 0 : s.summaryId)
                });
                null != u && i.push(u)
            }
            k[n] = (0, c.sortBy)(i, function(e) {
                return A.default.extractTimestamp(e.startId)
            }).reverse();
            var l = M(L({}, G[n]), {
                fetching: !1,
                error: void 0,
                lastReceivedAt: o
            });
            null != r && (l.error = r), G[n] = l
        },
        REQUEST_CHANNEL_SUMMARIES: function(e) {
            var t;
            G[e.channelId] = M(L({}, null !== (t = G[e.channelId]) && void 0 !== t ? t : {}), {
                fetching: !0,
                lastRequestedAt: e.requestedAt
            })
        },
        SET_HIGHLIGHTED_SUMMARY: function(e) {
            if (null == a && null == e.channelId || e.channelId === (null == a ? void 0 : a.channelId) && e.summaryId === (null == a ? void 0 : a.summaryId)) return !1;
            if (null != (a = null != e.channelId ? {
                    channelId: e.channelId,
                    summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
                } : null) && a.channelId === e.channelId && null != a.summaryId) {
                var t, n = k[a.channelId];
                u = null == n ? void 0 : n.findIndex(function(e) {
                    return e.id === (null == a ? void 0 : a.summaryId)
                })
            }
        },
        UPDATE_VISIBLE_MESSAGES: function(e) {
            var t = T.default.getChannelId();
            if (null != t) {
                if (null != a && a.channelId === t && null != a.summaryId) {
                    var n, r = k[a.channelId];
                    u = null == r ? void 0 : r.findIndex(function(e) {
                        return e.id === (null == a ? void 0 : a.summaryId)
                    })
                } else u = null === (n = k[t]) || void 0 === n ? void 0 : n.findIndex(function(t) {
                    var n, r, o, i;
                    return n = e.topVisibleMessage, r = e.bottomVisibleMessage, o = t.startId, i = t.endId, !(null == n || n > i) && !(null == r || r < o)
                })
            }
        },
        SET_SELECTED_SUMMARY: function(e) {
            var t, n = e.channelId;
            return null == n ? null : (n !== (null == s ? void 0 : s.channelId) || e.summaryId !== (null == s ? void 0 : s.summaryId)) && void(s = {
                channelId: n,
                summaryId: null !== (t = e.summaryId) && void 0 !== t ? t : null
            })
        },
        SET_SUMMARY_FEEDBACK: function(e) {
            var t = e.summary,
                n = e.rating;
            null != n ? B[t.id] = n : delete B[t.id]
        },
        REQUEST_CHANNEL_AFFINITIES: function() {
            V = M(L({}, V), {
                status: "fetching",
                lastRequest: Date.now()
            })
        },
        RECEIVE_CHANNEL_AFFINITIES: function(e) {
            var t, n = e.affinities;
            if (null != e.error) {
                j = [], F = {}, V = M(L({}, V), {
                    status: "error",
                    lastResponse: Date.now()
                });
                return
            }
            j = null != n ? n : [], F = null !== (t = null == n ? void 0 : n.reduce(function(e, t) {
                return e[t.channel_id] = t.affinity, e
            }, {})) && void 0 !== t ? t : {}, V = M(L({}, V), {
                status: "ok",
                lastResponse: Date.now()
            })
        },
        REQUEST_CHANNEL_SUMMARIES_BULK: function(e) {
            var t = e.channelIds,
                n = e.requestedAt,
                r = t.reduce(function(e, t) {
                    var r, o = null !== (r = G[t]) && void 0 !== r ? r : {};
                    return e[t] = M(L({}, o), {
                        fetching: !0,
                        lastRequestedAt: n,
                        error: void 0
                    }), e
                }, {});
            G = L({}, G, r)
        },
        RECEIVE_CHANNEL_SUMMARIES_BULK: function(e) {
            var t = e.summaries,
                n = e.receivedAt,
                r = e.error,
                o = e.requestArgs.channelIds,
                i = f().toPairs(t).reduce(function(e, t) {
                    var n, r, o = (r = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(n = t) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(n, r) || w(n, r) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        i = o[0],
                        a = o[1],
                        u = f().chain(a.map(function(e) {
                            return (0, b.createSummaryFromServer)(e, i)
                        })).sortBy(function(e) {
                            return A.default.extractTimestamp(e.startId)
                        }).takeRight(75).reverse().filter(function(e) {
                            return Object.keys(e).length > 0
                        }).value();
                    return e[i] = u, e
                }, {}),
                a = o.reduce(function(e, t) {
                    var o, a = null !== (o = G[t]) && void 0 !== o ? o : {},
                        u = i[t];
                    return null != u && (e.summariesByChannel[t] = u), e.summaryFetchStatusByChannel[t] = M(L({}, a), {
                        fetching: !1,
                        error: r,
                        lastReceivedAt: n
                    }), e
                }, {
                    summariesByChannel: {},
                    summaryFetchStatusByChannel: {}
                });
            k = L({}, k, a.summariesByChannel), G = L({}, G, a.summaryFetchStatusByChannel)
        },
        CONVERSATION_SUMMARY_UPDATE: function(e) {
            var t, n, r, o = e.channel_id,
                i = e.summaries;
            e.guild_id;
            var a = Date.now(),
                u = f().chain(i).sortBy(function(e) {
                    return A.default.extractTimestamp(e.start_id)
                }).filter(function(e) {
                    return Object.keys(e).length > 0
                }).map(function(e) {
                    return (0, b.createSummaryFromServer)(e, o)
                }).reverse().value(),
                s = null !== (n = k[o]) && void 0 !== n ? n : [],
                l = f().chain(u).concat(s).sortBy(function(e) {
                    return A.default.extractTimestamp(e.startId)
                }).takeRight(75).uniqBy("id").reverse().value();
            k[o] = l, G[o] = M(L({}, G[o]), {
                error: void 0,
                fetching: null !== (r = null === (t = G[o]) || void 0 === t ? void 0 : t.fetching) && void 0 !== r && r,
                lastReceivedAt: a
            })
        },
        CLEAR_CONVERSATION_SUMMARIES: function() {
            k = {}, G = {}
        },
        DELETE_SUMMARY: function(e) {
            var t, n = e.summary.channelId,
                r = (null !== (t = k[n]) && void 0 !== t ? t : []).indexOf(e.summary); - 1 !== r && k[n].splice(r, 1)
        }
    });
    t.default = K
}