function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        AnalyticsFeedTypes: function() {
            return i
        },
        ForceFlushType: function() {
            return n
        },
        AnalyticsFeedItemSeenManager: function() {
            return o
        }
    }), s("424973"), s("222007");
    var i, n, a, d, l = s("627445"),
        u = s.n(l),
        r = s("913144");
    (a = i || (i = {})).GUILD_HOME = "guild_home", a.FORUM_CHANNEL = "forum_channel", (d = n || (n = {}))[d.IMMEDIATE = 0] = "IMMEDIATE", d[d.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", d[d.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
    class h {
        maybeMarkSeen(e) {
            let t = this.seenIntervals[this.seenIntervals.length - 1];
            return (null == t || null != t.endTimeMillis) && (this.seenIntervals.push({
                startTimeMillis: e
            }), !0)
        }
        maybeMarkUnseen(e) {
            let t = this.seenIntervals[this.seenIntervals.length - 1];
            return null != t && null == t.endTimeMillis && (t.endTimeMillis = e, !0)
        }
        isVisible() {
            let e = this.seenIntervals[this.seenIntervals.length - 1];
            return (null == e ? void 0 : e.startTimeMillis) != null && (null == e ? void 0 : e.endTimeMillis) == null
        }
        computeSeenTimeDestructive(e) {
            let t = 0,
                s = [];
            for (let i of this.seenIntervals) {
                if (null != i.endTimeMillis) {
                    t += i.endTimeMillis - i.startTimeMillis;
                    continue
                }
                if (e) {
                    let e = Date.now();
                    t += e - i.startTimeMillis, s.push({
                        startTimeMillis: e
                    });
                    continue
                }
                s.push(i)
            }
            return u(s.length < 2, "there should only be a single left over data"), this.seenIntervals = s, Math.round(t)
        }
        constructor() {
            this.seenIntervals = []
        }
    }
    class o {
        maybeFlushSeenItems(e) {
            if (null == e && Date.now() - this._lastFlushTimeMillis < 6e4 || 1 === e && Date.now() - this._lastFlushTimeMillis < 3e3) return Promise.resolve();
            let t = this.createFlushSeenItemsFunction(e);
            return null == t ? Promise.resolve() : (this._lastFlushTimeMillis = Date.now(), 0 === e || 1 === e) ? new Promise(async e => {
                await t(), e()
            }) : new Promise(e => {
                setTimeout(async () => {
                    await t(), e()
                }, 100)
            })
        }
        constructor({
            id: e,
            windowId: t,
            isPaused: s
        }) {
            this.initialize = () => {
                var e;
                r.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), r.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), r.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), r.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), r.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), r.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), r.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this)
            }, this.terminate = () => {
                var e;
                r.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), r.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), r.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), r.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), r.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), r.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), r.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(0)
            }, this.handleFeedItemFlush = e => {
                let {
                    id: t,
                    force: s
                } = e;
                this._id === t && this.maybeFlushSeenItems(s)
            }, this.handleFeedItemSeen = e => {
                var t;
                let s = e.id,
                    i = e.timestampMillis,
                    n = e.feedItemId;
                if (s !== this._id) return;
                if (this._paused) {
                    this._pausedFeedItemIds.add(n);
                    return
                }
                let a = this.getTrackedFeedItem(n),
                    d = a.maybeMarkSeen(i);
                null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, n, d)
            }, this.handleFeedItemUnseen = e => {
                var t;
                let s = e.id,
                    i = e.timestampMillis,
                    n = e.feedItemId;
                if (s !== this._id) return;
                this._paused && this._pausedFeedItemIds.delete(n);
                let a = this.getTrackedFeedItem(n),
                    d = a.maybeMarkUnseen(i);
                null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, n, d), this.maybeFlushSeenItems()
            }, this.getTrackedFeedItem = e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new h), this.trackedFeedItems[e]), this.getVisibleFeedItemIds = () => {
                let e = Object.keys(this.trackedFeedItems);
                return new Set(e.filter(e => {
                    var t;
                    return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                }))
            }, this.handleDrawerClose = () => {
                this._isReactNavigationFocused && this.resume()
            }, this.handleDrawerOpen = () => {
                this._isReactNavigationFocused && this.pause()
            }, this.handleAppStateUpdate = e => {
                let {
                    state: t
                } = e;
                "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
            }, this.clearPausedFeedItemIds = () => {
                this._pausedFeedItemIds = new Set, this._paused = !1
            }, this.pause = () => {
                if (this._paused) return;
                let e = this.getVisibleFeedItemIds();
                e.forEach(e => {
                    this.handleFeedItemUnseen({
                        id: this._id,
                        feedItemId: e,
                        timestampMillis: Date.now(),
                        type: "ANALYTICS_FEED_ITEM_UNSEEN"
                    })
                }), this._paused = !0, this._pausedFeedItemIds = e
            }, this.resume = () => {
                this._paused && (this._paused = !1, this._pausedFeedItemIds.forEach(e => {
                    this.handleFeedItemSeen({
                        id: this._id,
                        feedItemId: e,
                        timestampMillis: Date.now(),
                        type: "ANALYTICS_FEED_ITEM_SEEN"
                    })
                }), this.clearPausedFeedItemIds())
            }, this.handleReactNavigationFocus = (e, t) => {
                this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause()
            }, this.handleWindowFocus = e => {
                this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
            }, this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != s && s, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
        }
    }
}