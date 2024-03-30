function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTrackOpenPopout: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("140817"),
        i = n("935741"),
        a = n("894288"),
        u = n("870331"),
        s = n("645077"),
        l = n("68735"),
        c = n("281767");

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }
    var d = function(e) {
        var t = e.emojiId,
            n = e.currentGuildId,
            d = e.popoutData,
            _ = e.nonce,
            E = e.demoMode,
            p = r.useRef(f({
                guild_id: n,
                emoji_id: t
            }, (0, o.collectChannelAnalyticsMetadata)(i.default.getChannel(a.default.getChannelId(n))))).current;
        return r.useEffect(function() {
            var e;
            (0, s.initiateEmojiInteraction)(l.EmojiInteractionPoint.TrackOpenPopoutUsed), !E && u.default.track(c.AnalyticEvents.OPEN_POPOUT, f({
                type: null !== (e = null == d ? void 0 : d.analyticsType) && void 0 !== e ? e : "Standard Emoji Popout",
                nonce: _
            }, p))
        }, []), p
    }
}