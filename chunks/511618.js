function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("906732"),
        a = n("508688"),
        o = n("806519"),
        l = n("626135"),
        u = n("981631"),
        d = n("474936"),
        _ = n("689938"),
        c = n("129235");
    t.default = e => {
        let {
            emojis: t
        } = e, {
            analyticsLocations: n
        } = (0, s.default)();
        r.useEffect(() => {
            l.default.track(u.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: d.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_INLINE,
                location_stack: n
            })
        }, [n]);
        let E = (0, i.jsx)("div", {
            className: c.emojis,
            children: t.slice(0, 3).map((e, t) => {
                if ("" === e.url) return null;
                let n = (0, i.jsx)("div", {
                    className: c.emojiBackground,
                    children: (0, i.jsx)("img", {
                        alt: e.name,
                        className: c.emoji,
                        src: e.url
                    })
                }, e.id);
                return 2 === t ? n : (0, i.jsx)(o.default, {
                    className: c.emojiMask,
                    mask: o.default.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                    children: n
                }, e.id)
            })
        });
        return (0, i.jsxs)(a.AutocompleteRowContent, {
            className: c.upsell,
            children: [(0, i.jsx)(a.AutocompleteRowContentPrimary, {
                children: (0, i.jsx)(a.AutocompleteRowHeading, {
                    children: _.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({
                        count: t.length
                    })
                })
            }), (0, i.jsx)(a.AutocompleteRowContentSecondary, {
                children: E
            })]
        })
    }
}