function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsFeedItemSeenManager: function() {
            return c
        },
        AnalyticsFeedTypes: function() {
            return i
        },
        ForceFlushType: function() {
            return r
        }
    }), n("653041"), n("47120");
    var i, r, a, s, o = n("512722"),
        l = n.n(o),
        u = n("570140");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(a = i || (i = {})).GUILD_HOME = "guild_home", a.FORUM_CHANNEL = "forum_channel", (s = r || (r = {}))[s.IMMEDIATE = 0] = "IMMEDIATE", s[s.IMMEDIATE_WITH_COOLDOWN = 1] = "IMMEDIATE_WITH_COOLDOWN", s[s.IMMEDIATE_WITH_DELAY = 2] = "IMMEDIATE_WITH_DELAY";
    class _ {
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
                n = [];
            for (let i of this.seenIntervals) {
                if (null != i.endTimeMillis) {
                    t += i.endTimeMillis - i.startTimeMillis;
                    continue
                }
                if (e) {
                    let e = Date.now();
                    t += e - i.startTimeMillis, n.push({
                        startTimeMillis: e
                    });
                    continue
                }
                n.push(i)
            }
            return l()(n.length < 2, "there should only be a single left over data"), this.seenIntervals = n, Math.round(t)
        }
        constructor() {
            d(this, "seenIntervals", void 0), this.seenIntervals = []
        }
    }
    class c {
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
            isPaused: n
        }) {
            d(this, "trackedFeedItems", void 0), d(this, "_lastFlushTimeMillis", void 0), d(this, "_pausedFeedItemIds", void 0), d(this, "_paused", void 0), d(this, "_windowId", void 0), d(this, "_isReactNavigationFocused", void 0), d(this, "_id", void 0), d(this, "onInitialize", void 0), d(this, "onTerminate", void 0), d(this, "onFeedItemSeen", void 0), d(this, "onFeedItemUnseen", void 0), d(this, "initialize", () => {
                var e;
                u.default.subscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), u.default.subscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), u.default.subscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), u.default.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), u.default.subscribe("DRAWER_OPEN", this.handleDrawerOpen), u.default.subscribe("DRAWER_CLOSE", this.handleDrawerClose), u.default.subscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onInitialize) || void 0 === e || e.call(this)
            }), d(this, "terminate", () => {
                var e;
                u.default.unsubscribe("ANALYTICS_FEED_ITEM_SEEN", this.handleFeedItemSeen), u.default.unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", this.handleFeedItemUnseen), u.default.unsubscribe("ANALYTICS_FEED_FLUSH", this.handleFeedItemFlush), u.default.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate), u.default.unsubscribe("DRAWER_OPEN", this.handleDrawerOpen), u.default.unsubscribe("DRAWER_CLOSE", this.handleDrawerClose), u.default.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus), null === (e = this.onTerminate) || void 0 === e || e.call(this), this.maybeFlushSeenItems(0)
            }), d(this, "handleFeedItemFlush", e => {
                let {
                    id: t,
                    force: n
                } = e;
                this._id === t && this.maybeFlushSeenItems(n)
            }), d(this, "handleFeedItemSeen", e => {
                var t;
                let n = e.id,
                    i = e.timestampMillis,
                    r = e.feedItemId;
                if (n !== this._id) return;
                if (this._paused) {
                    this._pausedFeedItemIds.add(r);
                    return
                }
                let a = this.getTrackedFeedItem(r).maybeMarkSeen(i);
                null === (t = this.onFeedItemSeen) || void 0 === t || t.call(this, r, a)
            }), d(this, "handleFeedItemUnseen", e => {
                var t;
                let n = e.id,
                    i = e.timestampMillis,
                    r = e.feedItemId;
                if (n !== this._id) return;
                this._paused && this._pausedFeedItemIds.delete(r);
                let a = this.getTrackedFeedItem(r).maybeMarkUnseen(i);
                null === (t = this.onFeedItemUnseen) || void 0 === t || t.call(this, r, a), this.maybeFlushSeenItems()
            }), d(this, "getTrackedFeedItem", e => (null == this.trackedFeedItems[e] && (this.trackedFeedItems[e] = new _), this.trackedFeedItems[e])), d(this, "getVisibleFeedItemIds", () => {
                let e = Object.keys(this.trackedFeedItems);
                return new Set(e.filter(e => {
                    var t;
                    return null === (t = this.trackedFeedItems[e]) || void 0 === t ? void 0 : t.isVisible()
                }))
            }), d(this, "handleDrawerClose", () => {
                this._isReactNavigationFocused && this.resume()
            }), d(this, "handleDrawerOpen", () => {
                this._isReactNavigationFocused && this.pause()
            }), d(this, "handleAppStateUpdate", e => {
                let {
                    state: t
                } = e;
                "active" === t && this._isReactNavigationFocused && this.resume(), "background" === t && (this._isReactNavigationFocused && this.pause(), this.maybeFlushSeenItems(0))
            }), d(this, "clearPausedFeedItemIds", () => {
                this._pausedFeedItemIds = new Set, this._paused = !1
            }), d(this, "pause", () => {
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
            }), d(this, "resume", () => {
                this._paused && (this._paused = !1, this._pausedFeedItemIds.forEach(e => {
                    this.handleFeedItemSeen({
                        id: this._id,
                        feedItemId: e,
                        timestampMillis: Date.now(),
                        type: "ANALYTICS_FEED_ITEM_SEEN"
                    })
                }), this.clearPausedFeedItemIds())
            }), d(this, "handleReactNavigationFocus", (e, t) => {
                this._isReactNavigationFocused = e, this._isReactNavigationFocused && !t ? this.resume() : this.pause()
            }), d(this, "handleWindowFocus", e => {
                this._windowId === e.windowId && (e.focused ? this.resume() : this.pause())
            }), this.trackedFeedItems = {}, this._id = e, this._windowId = t, this._pausedFeedItemIds = new Set, this._paused = null != n && n, this._isReactNavigationFocused = !0, this._lastFlushTimeMillis = Date.now()
        }
    }
}