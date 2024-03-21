function(e, t, d) {
    "use strict";
    d.r(t), d.d(t, {
        getGuildFeedSeenManagerId: function() {
            return F
        },
        default: function() {
            return n
        }
    }), d("222007"), d("424973");
    var n, i = d("872717"),
        a = d("913144"),
        l = d("263024"),
        u = d("660478"),
        s = d("395118"),
        r = d("599110"),
        E = d("449008"),
        o = d("299039"),
        c = d("645600"),
        _ = d("185014"),
        f = d("60036"),
        I = d("49111");

    function F(e) {
        return "".concat(s.AnalyticsFeedTypes.GUILD_HOME, "_").concat(e)
    }
    n = class extends s.AnalyticsFeedItemSeenManager {
        constructor({
            loadId: e,
            homeSessionId: t,
            guildId: d,
            windowId: n,
            isPaused: s
        }) {
            super({
                windowId: n,
                isPaused: s,
                id: F(d)
            }), this.onInitialize = () => {
                a.default.subscribe("GUILD_FEED_ITEM_READ_ACK", this.handleReadAck)
            }, this.onTerminate = () => {
                a.default.unsubscribe("GUILD_FEED_ITEM_READ_ACK", this.handleReadAck)
            }, this.onFeedItemSeen = (e, t) => {
                t && (this.pendingReadAcks[e] = setTimeout(() => {
                    this.ackItemAsRead(e)
                }, 3e3), this.feedItemSnapshots[e] = _.default.getItem(this.guildId, e))
            }, this.onFeedItemUnseen = (e, t) => {
                if (e in this.pendingReadAcks) {
                    let t = this.pendingReadAcks[e];
                    clearTimeout(t), delete this.pendingReadAcks[e]
                }
            }, this.createFlushSeenItemsFunction = e => {
                let t = this.guildId,
                    d = this.loadId,
                    n = this.trackedFeedItems,
                    a = this.homeSessionId,
                    l = this.feedItemSnapshots;
                if (null == d || null == a) return;
                let u = {
                    guildId: t,
                    loadId: d,
                    trackedFeedItems: n,
                    feedItemSnapshots: l,
                    isForcedFlush: null != e,
                    homeSessionId: a
                };
                return () => (function(e) {
                    let {
                        guildId: t,
                        loadId: d,
                        homeSessionId: n,
                        trackedFeedItems: a,
                        feedItemSnapshots: l,
                        isForcedFlush: u
                    } = e, s = {};
                    for (let e of Object.keys(a)) {
                        let t = a[e],
                            d = t.computeSeenTimeDestructive(u);
                        d > 0 && (s[e] = {
                            additionalSeenTimeMillis: d
                        })
                    }
                    if (0 === Object.keys(s).length) return Promise.resolve();
                    let o = [],
                        c = [],
                        _ = [];
                    for (let e of Object.keys(s)) o.push(e), c.push(s[e].additionalSeenTimeMillis), s[e].additionalSeenTimeMillis >= 1e3 && _.push(e);
                    r.default.track(I.AnalyticEvents.FEED_ITEM_SEEN_BATCH, {
                        guild_id: t,
                        load_id: d,
                        feed_item_ids: o,
                        additional_seen_time_millis: c,
                        home_session_id: n
                    });
                    let F = _.map(e => l[e]).filter(E.isNotNullish).map(f.default).map(e => e.id);
                    return 0 === F.length ? Promise.resolve() : i.HTTP.post({
                        url: I.Endpoints.GUILD_FEED_MARK_SEEN(t),
                        body: {
                            item_ids: F
                        }
                    })
                })(u)
            }, this.ackItemAsRead = e => {
                delete this.pendingReadAcks[e], !c.default.isItemSeen(this.guildId, e) && a.default.dispatch({
                    type: "GUILD_FEED_ITEM_READ_ACK",
                    guildId: this.guildId,
                    itemId: e
                })
            }, this.handleReadAck = async e => {
                let {
                    guildId: t,
                    itemId: d
                } = e;
                if (this.guildId !== t) return;
                let n = _.default.getItem(t, d);
                if (null == n || !n.unreadMention || n.seen) return;
                let a = (0, f.default)(n),
                    s = a.channel_id;
                await l.default.unarchiveThreadIfNecessary(s);
                let r = u.default.getMentionCount(s),
                    E = u.default.ackMessageId(s);
                if (null == E) return;
                let c = 0;
                for (let e of (0, f.getAllMessagesFromFeedItem)(n)) e.mentioned && o.default.compare(e.id, E) > 0 && (c += 1);
                0 !== c && i.HTTP.post({
                    url: I.Endpoints.MESSAGE_ACK(s, E),
                    body: {
                        manual: !0,
                        mention_count: r - c
                    }
                })
            }, this.guildId = d, this.loadId = e, this.homeSessionId = t, this.pendingReadAcks = {}, this.feedItemSnapshots = {}, this.lastFlushTimeMillis = Date.now()
        }
    }
}