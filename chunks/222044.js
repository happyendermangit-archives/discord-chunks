function(e, t, n) {
    "use strict";
    n.r(t), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("653041");
    var i = n("147913"),
        r = n("339085"),
        s = n("592125"),
        a = n("768581"),
        o = n("176354"),
        l = n("176505"),
        u = n("149203");
    let d = new Worker(new URL(n.p + n.u("80493"), n.b));
    class _ extends i.default {
        handleChannelPreload(e) {
            let {
                channelId: t
            } = e;
            if ((0, l.isStaticChannelRoute)(t)) return;
            let n = s.default.getChannel(t);
            null != n && n.isForumLikeChannel() && (function(e) {
                let t = [],
                    n = e.defaultReactionEmoji;
                if ((null == n ? void 0 : n.emojiId) != null) {
                    var i, s;
                    t.push(a.default.getEmojiURL({
                        id: n.emojiId,
                        animated: null !== (s = null === (i = r.default.getUsableCustomEmojiById(n.emojiId)) || void 0 === i ? void 0 : i.animated) && void 0 !== s && s,
                        size: u.EMOJI_SIZE_MAP.reaction
                    }))
                } else(null == n ? void 0 : n.emojiName) != null && t.push(o.default.getURL(n.emojiName));
                return e.availableTags.forEach(e => {
                    null != e.emojiId ? t.push(a.default.getEmojiURL({
                        id: e.emojiId,
                        animated: !1,
                        size: u.EMOJI_SIZE_MAP.reaction
                    })) : null != e.emojiName && t.push(o.default.getURL(e.emojiName))
                }), t
            })(n).forEach(e => {
                if (null != e && 0 !== e.length) {
                    var t;
                    t = e, new Promise(e => {
                        let n = i => {
                            let {
                                data: {
                                    url: r
                                }
                            } = i;
                            null == d || d.removeEventListener("message", n), t === r && e()
                        };
                        null == d || d.addEventListener("message", n), null == d || d.postMessage({
                            url: t
                        })
                    })
                }
            })
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                CHANNEL_PRELOAD: this.handleChannelPreload
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new _
}