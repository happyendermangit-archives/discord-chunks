function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("872810"),
        a = n("569545"),
        s = n("63063"),
        o = n("112560"),
        l = n("981631"),
        u = n("689938");
    let d = n("66737");

    function _(e) {
        let {
            stream: t,
            width: n,
            selected: _ = !1,
            noArt: c = !1
        } = e;
        return (0, i.jsx)(o.default, {
            artURL: d,
            header: u.default.Messages.STREAM_FAILED_TITLE,
            size: (0, o.getSizeForWidth)(n),
            noArt: c,
            selected: _,
            description: u.default.Messages.STREAM_FAILED_DESCRIPTION.format({
                helpUrl: s.default.getArticleURL(l.HelpdeskArticles.STREAM_FAILED)
            }),
            onCTAClick: () => (0, r.closeStream)((0, a.encodeStreamKey)(t)),
            callToAction: u.default.Messages.CLOSE_STREAM
        })
    }
}