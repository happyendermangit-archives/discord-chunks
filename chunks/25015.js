function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("470079"),
        r = n("937889"),
        a = n("761910"),
        s = n("981631"),
        o = n("126798");

    function l(e, t) {
        let {
            hideSimpleEmbedContent: n,
            formatInline: l = !1,
            noStyleAndInteraction: u = !1,
            isInteracting: d = !1,
            allowHeading: _ = !1,
            allowList: c = !1,
            allowLinks: E = !1,
            allowDevLinks: I = !1,
            allowSubtext: T = !1,
            previewLinkTarget: f = !1
        } = t;
        return i.useMemo(() => null != e.customRenderedContent ? e.customRenderedContent : e.isCommandType() && 0 === e.content.length || e.hasFlag(s.MessageFlags.LOADING) ? (0, a.default)(e) : e.type === s.MessageTypes.CHANGELOG ? (0, r.renderChangelogMessageMarkup)(e, o) : (0, r.default)(e, {
            hideSimpleEmbedContent: n,
            formatInline: l,
            noStyleAndInteraction: u,
            isInteracting: d,
            allowHeading: _,
            allowList: c,
            allowLinks: E,
            allowSubtext: T,
            allowDevLinks: I,
            previewLinkTarget: f
        }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, n, l, u, d, _, c, E, f, T])
    }
}