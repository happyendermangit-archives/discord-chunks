function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("906732"),
        a = n("508688"),
        o = n("806519"),
        l = n("626135"),
        u = n("768581"),
        d = n("981631"),
        _ = n("185923"),
        c = n("474936"),
        E = n("689938"),
        I = n("129235");
    t.default = e => {
        let {
            emojis: t
        } = e, {
            analyticsLocations: n
        } = (0, s.default)();
        r.useEffect(() => {
            l.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: c.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_INLINE,
                location_stack: n
            })
        }, [n]);
        let T = (0, i.jsx)("div", {
            className: I.emojis,
            children: t.slice(0, 3).map((e, t) => {
                if (null == e.id) return null;
                let n = (0, i.jsx)("div", {
                    className: I.emojiBackground,
                    children: (0, i.jsx)("img", {
                        alt: e.name,
                        className: I.emoji,
                        src: u.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: _.EMOJI_URL_BASE_SIZE
                        })
                    })
                }, e.id);
                return 2 === t ? n : (0, i.jsx)(o.default, {
                    className: I.emojiMask,
                    mask: o.default.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                    children: n
                }, e.id)
            })
        });
        return (0, i.jsxs)(a.AutocompleteRowContent, {
            className: I.upsell,
            children: [(0, i.jsx)(a.AutocompleteRowContentPrimary, {
                children: (0, i.jsx)(a.AutocompleteRowHeading, {
                    children: E.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({
                        count: t.length
                    })
                })
            }), (0, i.jsx)(a.AutocompleteRowContentSecondary, {
                children: T
            })]
        })
    }
}