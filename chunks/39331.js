function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return s
        }
    });
    var l = i("884691"),
        r = i("95045"),
        n = i("227698"),
        a = i("49111");

    function s(t, e) {
        let {
            hideSimpleEmbedContent: i,
            formatInline: s = !1,
            noStyleAndInteraction: o = !1,
            isInteracting: d = !1,
            allowHeading: c = !1,
            allowList: h = !1,
            allowLinks: u = !1,
            previewLinkTarget: f = !1
        } = e;
        return l.useMemo(() => null != t.customRenderedContent ? t.customRenderedContent : t.isCommandType() && 0 === t.content.length || t.hasFlag(a.MessageFlags.LOADING) ? (0, n.default)(t) : (0, r.default)(t, {
            hideSimpleEmbedContent: i,
            formatInline: s,
            noStyleAndInteraction: o,
            isInteracting: d,
            allowHeading: c,
            allowList: h,
            allowLinks: u,
            previewLinkTarget: f
        }), [t.content, t.customRenderedContent, t.embeds, t.interaction, t.state, t.type, i, s, o, d, c, h, u, f])
    }
}