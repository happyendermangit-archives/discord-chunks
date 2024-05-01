function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        },
        getGuildFeedSeenManagerId: function() {
            return f
        }
    }), n("47120"), n("653041");
    var i = n("544891"),
        r = n("570140"),
        a = n("346479"),
        s = n("306680"),
        o = n("480739"),
        l = n("626135"),
        u = n("823379"),
        d = n("709054"),
        _ = n("414360"),
        c = n("642101"),
        E = n("330249"),
        I = n("981631");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return "".concat(o.AnalyticsFeedTypes.GUILD_HOME, "_").concat(e)
    }
    class S extends o.AnalyticsFeedItemSeenManager {
        constructor({
            loadId: e,
            homeSessionId: t,
            guildId: n,
            windowId: o,
            isPaused: S
        }) {
            super({
                windowId: o,
                isPaused: S,
                id: f(n)
            }), T(this, "guildId", void 0), T(this, "loadId", void 0), T(this, "homeSessionId", void 0), T(this, "lastFlushTimeMillis", void 0), T(this, "pendingReadAcks", void 0), T(this, "feedItemSnapshots", void 0), T(this, "onInitialize", () => {
                r.default.subscribe("GUILD_FEED_ITEM_READ_ACK", this.handleReadAck)
            }), T(this, "onTerminate", () => {
                r.default.unsubscribe("GUILD_FEED_ITEM_READ_ACK", this.handleReadAck)
            }), T(this, "onFeedItemSeen", (e, t) => {
                t && (this.pendingReadAcks[e] = setTimeout(() => {
                    this.ackItemAsRead(e)
                }, 3e3), this.feedItemSnapshots[e] = c.default.getItem(this.guildId, e))
            }), T(this, "onFeedItemUnseen", (e, t) => {
                e in this.pendingReadAcks && (clearTimeout(this.pendingReadAcks[e]), delete this.pendingReadAcks[e])
            }), T(this, "createFlushSeenItemsFunction", e => {
                let t = this.guildId,
                    n = this.loadId,
                    r = this.trackedFeedItems,
                    a = this.homeSessionId,
                    s = this.feedItemSnapshots;
                if (null == n || null == a) return;
                let o = {
                    guildId: t,
                    loadId: n,
                    trackedFeedItems: r,
                    feedItemSnapshots: s,
                    isForcedFlush: null != e,
                    homeSessionId: a
                };
                return () => (function(e) {
                    let {
                        guildId: t,
                        loadId: n,
                        homeSessionId: r,
                        trackedFeedItems: a,
                        feedItemSnapshots: s,
                        isForcedFlush: o
                    } = e, d = {};
                    for (let e of Object.keys(a)) {
                        let t = a[e].computeSeenTimeDestructive(o);
                        t > 0 && (d[e] = {
                            additionalSeenTimeMillis: t
                        })
                    }
                    if (0 === Object.keys(d).length) return Promise.resolve();
                    let _ = [],
                        c = [],
                        T = [];
                    for (let e of Object.keys(d)) _.push(e), c.push(d[e].additionalSeenTimeMillis), d[e].additionalSeenTimeMillis >= 1e3 && T.push(e);
                    l.default.track(I.AnalyticEvents.FEED_ITEM_SEEN_BATCH, {
                        guild_id: t,
                        load_id: n,
                        feed_item_ids: _,
                        additional_seen_time_millis: c,
                        home_session_id: r
                    });
                    let f = T.map(e => s[e]).filter(u.isNotNullish).map(E.default).map(e => e.id);
                    return 0 === f.length ? Promise.resolve() : i.HTTP.post({
                        url: I.Endpoints.GUILD_FEED_MARK_SEEN(t),
                        body: {
                            item_ids: f
                        }
                    })
                })(o)
            }), T(this, "ackItemAsRead", e => {
                delete this.pendingReadAcks[e], !_.default.isItemSeen(this.guildId, e) && r.default.dispatch({
                    type: "GUILD_FEED_ITEM_READ_ACK",
                    guildId: this.guildId,
                    itemId: e
                })
            }), T(this, "handleReadAck", async e => {
                let {
                    guildId: t,
                    itemId: n
                } = e;
                if (this.guildId !== t) return;
                let r = c.default.getItem(t, n);
                if (null == r || !r.unreadMention || r.seen) return;
                let o = (0, E.default)(r).channel_id;
                await a.default.unarchiveThreadIfNecessary(o);
                let l = s.default.getMentionCount(o),
                    u = s.default.ackMessageId(o);
                if (null == u) return;
                let _ = 0;
                for (let e of (0, E.getAllMessagesFromFeedItem)(r)) e.mentioned && d.default.compare(e.id, u) > 0 && (_ += 1);
                0 !== _ && i.HTTP.post({
                    url: I.Endpoints.MESSAGE_ACK(o, u),
                    body: {
                        manual: !0,
                        mention_count: l - _
                    }
                })
            }), this.guildId = n, this.loadId = e, this.homeSessionId = t, this.pendingReadAcks = {}, this.feedItemSnapshots = {}, this.lastFlushTimeMillis = Date.now()
        }
    }
}