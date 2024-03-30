function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return o
        }
    });
    var n = r("470079"),
        l = r("779570"),
        i = r("786206"),
        a = r("281767");

    function o(e, t) {
        var r = t.hideSimpleEmbedContent,
            o = t.formatInline,
            c = void 0 !== o && o,
            u = t.noStyleAndInteraction,
            s = void 0 !== u && u,
            f = t.isInteracting,
            d = void 0 !== f && f,
            m = t.allowHeading,
            h = void 0 !== m && m,
            p = t.allowList,
            g = void 0 !== p && p,
            y = t.allowLinks,
            b = void 0 !== y && y,
            O = t.previewLinkTarget,
            E = void 0 !== O && O;
        return n.useMemo(function() {
            return null != e.customRenderedContent ? e.customRenderedContent : e.isCommandType() && 0 === e.content.length || e.hasFlag(a.MessageFlags.LOADING) ? (0, i.default)(e) : (0, l.default)(e, {
                hideSimpleEmbedContent: r,
                formatInline: c,
                noStyleAndInteraction: s,
                isInteracting: d,
                allowHeading: h,
                allowList: g,
                allowLinks: b,
                previewLinkTarget: E
            })
        }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, r, c, s, d, h, g, b, E])
    }
}