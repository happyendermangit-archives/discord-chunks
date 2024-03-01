function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTrackOpenPopout: function() {
            return c
        }
    });
    var l = n("884691"),
        i = n("716241"),
        a = n("42203"),
        s = n("18494"),
        r = n("599110"),
        o = n("558986"),
        u = n("958706"),
        d = n("49111");
    let c = e => {
        let {
            emojiId: t,
            currentGuildId: n,
            popoutData: c,
            nonce: f,
            demoMode: m
        } = e, {
            current: p
        } = l.useRef({
            guild_id: n,
            emoji_id: t,
            ...(0, i.collectChannelAnalyticsMetadata)(a.default.getChannel(s.default.getChannelId(n)))
        });
        return l.useEffect(() => {
            var e;
            (0, o.initiateEmojiInteraction)(u.EmojiInteractionPoint.TrackOpenPopoutUsed), !m && r.default.track(d.AnalyticEvents.OPEN_POPOUT, {
                type: null !== (e = null == c ? void 0 : c.analyticsType) && void 0 !== e ? e : "Standard Emoji Popout",
                nonce: f,
                ...p
            })
        }, []), p
    }
}