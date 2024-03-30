function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTrackOpenPopout: function() {
            return _
        }
    });
    var i = n("470079"),
        r = n("367907"),
        s = n("592125"),
        a = n("944486"),
        o = n("626135"),
        l = n("130402"),
        u = n("185923"),
        d = n("981631");
    let _ = e => {
        let {
            emojiId: t,
            currentGuildId: n,
            popoutData: _,
            nonce: c,
            demoMode: E
        } = e, {
            current: I
        } = i.useRef({
            guild_id: n,
            emoji_id: t,
            ...(0, r.collectChannelAnalyticsMetadata)(s.default.getChannel(a.default.getChannelId(n)))
        });
        return i.useEffect(() => {
            var e;
            (0, l.initiateEmojiInteraction)(u.EmojiInteractionPoint.TrackOpenPopoutUsed), !E && o.default.track(d.AnalyticEvents.OPEN_POPOUT, {
                type: null !== (e = null == _ ? void 0 : _.analyticsType) && void 0 !== e ? e : "Standard Emoji Popout",
                nonce: c,
                ...I
            })
        }, []), I
    }
}