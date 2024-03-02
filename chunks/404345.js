function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("685665"),
        s = n("563911"),
        r = n("587974"),
        o = n("599110"),
        u = n("49111"),
        d = n("646718"),
        c = n("782340"),
        f = n("728930"),
        m = e => {
            let {
                emojis: t
            } = e, {
                analyticsLocations: n
            } = (0, a.default)();
            i.useEffect(() => {
                o.default.track(u.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                    type: d.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_INLINE,
                    location_stack: n
                })
            }, [n]);
            let m = (0, l.jsx)("div", {
                className: f.emojis,
                children: t.slice(0, 3).map((e, t) => {
                    if ("" === e.url) return null;
                    let n = (0, l.jsx)("div", {
                        className: f.emojiBackground,
                        children: (0, l.jsx)("img", {
                            alt: e.name,
                            className: f.emoji,
                            src: e.url
                        })
                    }, e.id);
                    return 2 === t ? n : (0, l.jsx)(r.default, {
                        className: f.emojiMask,
                        mask: r.default.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                        children: n
                    }, e.id)
                })
            });
            return (0, l.jsxs)(s.AutocompleteRowContent, {
                className: f.upsell,
                children: [(0, l.jsx)(s.AutocompleteRowContentPrimary, {
                    children: (0, l.jsx)(s.AutocompleteRowHeading, {
                        children: c.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({
                            count: t.length
                        })
                    })
                }), (0, l.jsx)(s.AutocompleteRowContentSecondary, {
                    children: m
                })]
            })
        }
}