function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        },
        getForumPostSeenManagerId: function() {
            return l
        },
        markForumPostItemAsSeen: function() {
            return u
        },
        markForumPostItemAsUnseen: function() {
            return d
        }
    }), n("653041"), n("47120");
    var i = n("929991"),
        r = n("480739"),
        a = n("228392"),
        s = n("6496");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return "".concat(r.AnalyticsFeedTypes.FORUM_CHANNEL, "_").concat(e)
    }

    function u(e, t, n) {
        (0, i.markAnalyticsFeedItemSeen)(l(e), t, n)
    }

    function d(e, t, n) {
        (0, i.markAnalyticsFeedItemUnseen)(l(e), t, n)
    }
    class _ extends r.AnalyticsFeedItemSeenManager {
        constructor({
            guildId: e,
            channelId: t,
            windowId: n,
            isPaused: i
        }) {
            super({
                windowId: n,
                isPaused: i,
                id: l(t)
            }), o(this, "guildId", void 0), o(this, "channelId", void 0), o(this, "sessionId", void 0), o(this, "createFlushSeenItemsFunction", e => {
                let t = this.trackedFeedItems,
                    n = this.channelId,
                    i = this.guildId,
                    r = {
                        guildId: i,
                        channelId: n,
                        sessionId: this.sessionId,
                        trackedFeedItems: t,
                        isForcedFlush: null != e
                    };
                return () => (function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        sessionId: i,
                        trackedFeedItems: r,
                        isForcedFlush: s
                    } = e, o = [], l = [];
                    for (let e of Object.keys(r)) {
                        let t = r[e].computeSeenTimeDestructive(s);
                        t > 0 && (o.push(e), l.push(t))
                    }
                    0 !== o.length && (0, a.trackForumChannelSeenBatch)({
                        guildId: t,
                        channelId: n,
                        sessionId: i,
                        postIds: o,
                        additionalTimes: l
                    })
                })(r)
            }), this.guildId = e, this.channelId = t, this.sessionId = (0, s.getForumChannelSessionId)(t)
        }
    }
}