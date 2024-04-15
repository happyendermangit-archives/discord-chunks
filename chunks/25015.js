function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("937889"),
        s = n("761910"),
        a = n("981631");

    function o(e, t) {
        let {
            hideSimpleEmbedContent: n,
            formatInline: o = !1,
            noStyleAndInteraction: l = !1,
            isInteracting: u = !1,
            allowHeading: d = !1,
            allowList: _ = !1,
            allowLinks: c = !1,
            allowDevLinks: E = !1,
            previewLinkTarget: I = !1
        } = t;
        return i.useMemo(() => null != e.customRenderedContent ? e.customRenderedContent : e.isCommandType() && 0 === e.content.length || e.hasFlag(a.MessageFlags.LOADING) ? (0, s.default)(e) : (0, r.default)(e, {
            hideSimpleEmbedContent: n,
            formatInline: o,
            noStyleAndInteraction: l,
            isInteracting: u,
            allowHeading: d,
            allowList: _,
            allowLinks: c,
            allowDevLinks: E,
            previewLinkTarget: I
        }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, n, o, l, u, d, _, c, I])
    }
}