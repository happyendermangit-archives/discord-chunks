function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsFeedItemSeenManager: function() {
            return I
        },
        AnalyticsFeedTypes: function() {
            return i
        },
        ForceFlushType: function() {
            return a
        }
    });
    var r, o, i, a, u = n("512722"),
        s = n.n(u),
        l = n("629815");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function f(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    c(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    c(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function d(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t && _(e.prototype, t), n && _(e, n), e
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e, t) {
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
    }(r = i || (i = {})).GUILD_HOME = "guild_home", r.FORUM_CHANNEL = "forum_channel", (o = a || (a = {}))[o.IMMEDIATE = 0] = "IMMEDIATE", o[o.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", o[o.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
    var y = function() {
            function e() {
                d(this, e), p(this, "seenIntervals", void 0), this.seenIntervals = []
            }
            return E(e, [{
                key: "maybeMarkSeen",
                value: function(e) {
                    var t = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
                        startTimeMillis: e
                    }), !0)
                }
            }, {
                key: "maybeMarkUnseen",
                value: function(e) {
                    var t = this.seenIntervals[this.seenIntervals.length - 1];
                    return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
                }
            }, {
                key: "isVisible",
                value: function() {
                    var e = this.seenIntervals[this.seenIntervals.length - 1];
                    return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null
                }
            }, {
                key: "computeSeenTimeDestructive",
                value: function(e) {
                    var t = 0,
                        n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = this.seenIntervals[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var l = a.value;
                            if (null != l.endTimeMillis) {
                                t += l.endTimeMillis - l.startTimeMillis;
                                continue
                            }
                            if (e) {
                                var c = Date.now();
                                t += c - l.startTimeMillis, n.push({
                                    startTimeMillis: c
                                });
                                continue
                            }
                            n.push(l)
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return s()(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
                }
            }]), e
        }(),
        I = function() {
            function e(t) {
                var n = this,
                    r = t.id,
                    o = t.windowId,
                    i = t.isPaused;
                d(this, e), p(this, "trackedFeedItems", void 0), p(this, "_lastFlushTimeMillis", void 0), p(this, "_pausedFeedItemIds", void 0), p(this, "_paused", void 0), p(this, "_windowId", void 0), p(this, "_isReactNavigationFocused", void 0), p(this, "_id", void 0), p(this, "onInitialize", void 0), p(this, "onTerminate", void 0), p(this, "onFeedItemSeen", void 0), p(this, "onFeedItemUnseen", void 0), p(this, "initialize", function() {
                    var e;
                    l.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", n.handleFeedItemSeen), l.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", n.handleFeedItemUnseen), l.default.subscribe("ANALYTICS_FEED_FLUSH", n.handleFeedItemFlush), l.default.subscribe("APP_STATE_UPDATE", n.handleAppStateUpdate), l.default.subscribe("DRAWER_OPEN", n.handleDrawerOpen), l.default.subscribe("DRAWER_CLOSE", n.handleDrawerClose), l.default.subscribe("WINDOW_FOCUS", n.handleWindowFocus), null === (e = n.onInitialize) || void 0 === e || e.call(n)
                }), p(this, "terminate", function() {
                    var e;
                    l.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", n.handleFeedItemSeen), l.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", n.handleFeedItemUnseen), l.default.unsubscribe("ANALYTICS_FEED_FLUSH", n.handleFeedItemFlush), l.default.unsubscribe("APP_STATE_UPDATE", n.handleAppStateUpdate), l.default.unsubscribe("DRAWER_OPEN", n.handleDrawerOpen), l.default.unsubscribe("DRAWER_CLOSE", n.handleDrawerClose), l.default.unsubscribe("WINDOW_FOCUS", n.handleWindowFocus), null === (e = n.onTerminate) || void 0 === e || e.call(n), n.maybeFlushSeenItems(0)
                }), p(this, "handleFeedItemFlush", function(e) {
                    var t = e.id,
                        r = e.force;
                    n._id === t && n.maybeFlushSeenItems(r)
                }), p(this, "handleFeedItemSeen", function(e) {
                    var t, r = e.id,
                        o = e.timestampMillis,
                        i = e.feedItemId;
                    if (r === n._id) {
                        if (n._paused) {
                            n._pausedFeedItemIds.add(i);
                            return
                        }
                        var a = n.getTrackedFeedItem(i).maybeMarkSeen(o);
                        null === (t = n.onFeedItemSeen) || void 0 === t || t.call(n, i, a)
                    }
                }), p(this, "handleFeedItemUnseen", function(e) {
                    var t, r = e.id,
                        o = e.timestampMillis,
                        i = e.feedItemId;
                    if (r === n._id) {
                        n._paused && n._pausedFeedItemIds.delete(i);
                        var a = n.getTrackedFeedItem(i).maybeMarkUnseen(o);
                        null === (t = n.onFeedItemUnseen) || void 0 === t || t.call(n, i, a), n.maybeFlushSeenItems()
                    }
                }), p(this, "getTrackedFeedItem", function(e) {
                    return null == n.trackedFeedItems[e] && (n.trackedFeedItems[e] = new y), n.trackedFeedItems[e]
                }), p(this, "getVisibleFeedItemIds", function() {
                    var e = Object.keys(n.trackedFeedItems);
                    return new Set(e.filter(function(e) {
                        var t;
                        return null === (t = n.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                    }))
                }), p(this, "handleDrawerClose", function() {
                    n._isReactNavigationFocused && n.resume()
                }), p(this, "handleDrawerOpen", function() {
                    n._isReactNavigationFocused && n.pause()
                }), p(this, "handleAppStateUpdate", function(e) {
                    var t = e.state;
                    "active" === t && n._isReactNavigationFocused && n.resume(), "background" === t && (n._isReactNavigationFocused && n.pause(), n.maybeFlushSeenItems(0))
                }), p(this, "clearPausedFeedItemIds", function() {
                    n._pausedFeedItemIds = new Set, n._paused = !1
                }), p(this, "pause", function() {
                    if (!n._paused) {
                        var e = n.getVisibleFeedItemIds();
                        e.forEach(function(e) {
                            n.handleFeedItemUnseen({
                                id: n._id,
                                feedItemId: e,
                                timestampMillis: Date.now(),
                                type: "ANALYTICS_FEED_ITEM_UNSEEN"
                            })
                        }), n._paused = !0, n._pausedFeedItemIds = e
                    }
                }), p(this, "resume", function() {
                    n._paused && (n._paused = !1, n._pausedFeedItemIds.forEach(function(e) {
                        n.handleFeedItemSeen({
                            id: n._id,
                            feedItemId: e,
                            timestampMillis: Date.now(),
                            type: "ANALYTICS_FEED_ITEM_SEEN"
                        })
                    }), n.clearPausedFeedItemIds())
                }), p(this, "handleReactNavigationFocus", function(e, t) {
                    n._isReactNavigationFocused = e, n._isReactNavigationFocused && !t ? n.resume() : n.pause()
                }), p(this, "handleWindowFocus", function(e) {
                    n._windowId === e.windowId && (e.focused ? n.resume() : n.pause())
                }), this.trackedFeedItems = {}, this._id = r, this._windowId = o, this._pausedFeedItemIds = new Set, this._paused = null != i && i, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
            }
            return E(e, [{
                key: "maybeFlushSeenItems",
                value: function(e) {
                    if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
                    var t, n = this.createFlushSeenItemsFunction(e);
                    if (null == n) return Promise.resolve();
                    if (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) {
                        ;
                        return new Promise((t = f(function(e) {
                            return m(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, n()];
                                    case 1:
                                        return t.sent(), e(), [2]
                                }
                            })
                        }), function(e) {
                            return t.apply(this, arguments)
                        }))
                    }
                    return new Promise(function(e) {
                        setTimeout(f(function() {
                            return m(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, n()];
                                    case 1:
                                        return t.sent(), e(), [2]
                                }
                            })
                        }), 100)
                    })
                }
            }]), e
        }()
}