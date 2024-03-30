function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("224359"),
        a = n("736381"),
        u = n("935741"),
        s = n("222875"),
        l = n("941504"),
        c = n("340109");

    function f(e) {
        var t = e.stream,
            n = e.width,
            f = e.noArt,
            d = e.selected,
            _ = (0, o.useStateFromStores)([u.default], function() {
                return u.default.getChannel(t.channelId)
            });
        return r.useEffect(function() {
            (null == _ ? void 0 : _.isGuildStageVoice()) && (0, i.closeStream)((0, a.encodeStreamKey)(t), !1)
        }, []), r.createElement(s.default, {
            artURL: c,
            noArt: void 0 !== f && f,
            selected: void 0 !== d && d,
            size: (0, s.getSizeForWidth)(n),
            header: l.default.Messages.STREAM_ENDED,
            onCTAClick: function() {
                return (0, i.closeStream)((0, a.encodeStreamKey)(t))
            },
            callToAction: l.default.Messages.CLOSE_STREAM
        })
    }
}