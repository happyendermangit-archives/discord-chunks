function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        },
        getGuildFeedSeenManagerId: function() {
            return O
        }
    });
    var r = n("967888"),
        o = n("629815"),
        i = n("741471"),
        a = n("879547"),
        u = n("499525"),
        s = n("870331"),
        l = n("162677"),
        c = n("523018"),
        f = n("864682"),
        d = n("98406"),
        _ = n("466861"),
        E = n("281767");

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

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

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function O(e) {
        return "".concat(u.AnalyticsFeedTypes.GUILD_HOME, "_").concat(e)
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(T, e);
        var t, n, u = (t = T, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = I(t);
            if (n) {
                var a = I(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function T(e) {
            var t, n, I, h = e.loadId,
                S = e.homeSessionId,
                v = e.guildId,
                g = e.windowId,
                A = e.isPaused;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, T), y(p(I = u.call(this, {
                windowId: g,
                isPaused: A,
                id: O(v)
            })), "guildId", void 0), y(p(I), "loadId", void 0), y(p(I), "homeSessionId", void 0), y(p(I), "lastFlushTimeMillis", void 0), y(p(I), "pendingReadAcks", void 0), y(p(I), "feedItemSnapshots", void 0), y(p(I), "onInitialize", function() {
                o.default.subscribe("GUILD_FEED_ITEM_READ_ACK", I.handleReadAck)
            }), y(p(I), "onTerminate", function() {
                o.default.unsubscribe("GUILD_FEED_ITEM_READ_ACK", I.handleReadAck)
            }), y(p(I), "onFeedItemSeen", function(e, t) {
                t && (I.pendingReadAcks[e] = setTimeout(function() {
                    I.ackItemAsRead(e)
                }, 3e3), I.feedItemSnapshots[e] = d.default.getItem(I.guildId, e))
            }), y(p(I), "onFeedItemUnseen", function(e, t) {
                e in I.pendingReadAcks && (clearTimeout(I.pendingReadAcks[e]), delete I.pendingReadAcks[e])
            }), y(p(I), "createFlushSeenItemsFunction", function(e) {
                var t = I.guildId,
                    n = I.loadId,
                    o = I.trackedFeedItems,
                    i = I.homeSessionId,
                    a = I.feedItemSnapshots;
                if (null != n && null != i) {
                    var u = {
                        guildId: t,
                        loadId: n,
                        trackedFeedItems: o,
                        feedItemSnapshots: a,
                        isForcedFlush: null != e,
                        homeSessionId: i
                    };
                    return function() {
                        return function(e) {
                            var t = e.guildId,
                                n = e.loadId,
                                o = e.homeSessionId,
                                i = e.trackedFeedItems,
                                a = e.feedItemSnapshots,
                                u = e.isForcedFlush,
                                c = {},
                                f = !0,
                                d = !1,
                                p = void 0;
                            try {
                                for (var m, y = Object.keys(i)[Symbol.iterator](); !(f = (m = y.next()).done); f = !0) {
                                    var I = m.value,
                                        h = i[I].computeSeenTimeDestructive(u);
                                    h > 0 && (c[I] = {
                                        additionalSeenTimeMillis: h
                                    })
                                }
                            } catch (e) {
                                d = !0, p = e
                            } finally {
                                try {
                                    !f && null != y.return && y.return()
                                } finally {
                                    if (d) throw p
                                }
                            }
                            if (0 === Object.keys(c).length) return Promise.resolve();
                            var O = [],
                                T = [],
                                S = [],
                                v = !0,
                                g = !1,
                                A = void 0;
                            try {
                                for (var b, N = Object.keys(c)[Symbol.iterator](); !(v = (b = N.next()).done); v = !0) {
                                    var R = b.value;
                                    O.push(R), T.push(c[R].additionalSeenTimeMillis), c[R].additionalSeenTimeMillis >= 1e3 && S.push(R)
                                }
                            } catch (e) {
                                g = !0, A = e
                            } finally {
                                try {
                                    !v && null != N.return && N.return()
                                } finally {
                                    if (g) throw A
                                }
                            }
                            s.default.track(E.AnalyticEvents.FEED_ITEM_SEEN_BATCH, {
                                guild_id: t,
                                load_id: n,
                                feed_item_ids: O,
                                additional_seen_time_millis: T,
                                home_session_id: o
                            });
                            var C = S.map(function(e) {
                                return a[e]
                            }).filter(l.isNotNullish).map(_.default).map(function(e) {
                                return e.id
                            });
                            return 0 === C.length ? Promise.resolve() : r.HTTP.post({
                                url: E.Endpoints.GUILD_FEED_MARK_SEEN(t),
                                body: {
                                    item_ids: C
                                }
                            })
                        }(u)
                    }
                }
            }), y(p(I), "ackItemAsRead", function(e) {
                delete I.pendingReadAcks[e], !f.default.isItemSeen(I.guildId, e) && o.default.dispatch({
                    type: "GUILD_FEED_ITEM_READ_ACK",
                    guildId: I.guildId,
                    itemId: e
                })
            });
            var b = p(I);
            return y(p(I), "handleReadAck", (n = (t = function(e) {
                var t, n, o, u, s, l, f, p, m, y, I, h, O;
                return function(e, t) {
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
                }(this, function(T) {
                    switch (T.label) {
                        case 0:
                            if (t = e.guildId, n = e.itemId, b.guildId !== t || null == (o = d.default.getItem(t, n)) || !o.unreadMention || o.seen) return [2];
                            return u = (0, _.default)(o).channel_id, [4, i.default.unarchiveThreadIfNecessary(u)];
                        case 1:
                            if (T.sent(), s = a.default.getMentionCount(u), null == (l = a.default.ackMessageId(u))) return [2];
                            f = 0, p = !0, m = !1, y = void 0;
                            try {
                                for (I = (0, _.getAllMessagesFromFeedItem)(o)[Symbol.iterator](); !(p = (h = I.next()).done); p = !0)(O = h.value).mentioned && c.default.compare(O.id, l) > 0 && (f += 1)
                            } catch (e) {
                                m = !0, y = e
                            } finally {
                                try {
                                    !p && null != I.return && I.return()
                                } finally {
                                    if (m) throw y
                                }
                            }
                            if (0 === f) return [2];
                            return r.HTTP.post({
                                url: E.Endpoints.MESSAGE_ACK(u, l),
                                body: {
                                    manual: !0,
                                    mention_count: s - f
                                }
                            }), [2]
                    }
                })
            }, function() {
                var e = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var i = t.apply(e, n);

                    function a(e) {
                        m(i, r, o, a, u, "next", e)
                    }

                    function u(e) {
                        m(i, r, o, a, u, "throw", e)
                    }
                    a(void 0)
                })
            }), function(e) {
                return n.apply(this, arguments)
            })), I.guildId = v, I.loadId = h, I.homeSessionId = S, I.pendingReadAcks = {}, I.feedItemSnapshots = {}, I.lastFlushTimeMillis = Date.now(), I
        }
        return T
    }(u.AnalyticsFeedItemSeenManager)
}