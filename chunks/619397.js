function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("224359"),
        i = n("736381"),
        a = n("481971"),
        u = n("222875"),
        s = n("281767"),
        l = n("941504"),
        c = n("66737");

    function f(e) {
        var t = e.stream,
            n = e.width,
            f = e.selected,
            d = e.noArt;
        return r.createElement(u.default, {
            artURL: c,
            header: l.default.Messages.STREAM_FAILED_TITLE,
            size: (0, u.getSizeForWidth)(n),
            noArt: void 0 !== d && d,
            selected: void 0 !== f && f,
            description: l.default.Messages.STREAM_FAILED_DESCRIPTION.format({
                helpUrl: a.default.getArticleURL(s.HelpdeskArticles.STREAM_FAILED)
            }),
            onCTAClick: function() {
                return (0, o.closeStream)((0, i.encodeStreamKey)(t))
            },
            callToAction: l.default.Messages.CLOSE_STREAM
        })
    }
}