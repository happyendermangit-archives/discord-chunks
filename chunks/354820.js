function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("396586"),
        i = n("948876"),
        a = n("845265"),
        u = n("870331"),
        s = n("281767"),
        l = n("868615"),
        c = n("941504"),
        f = n("63502");
    t.default = function(e) {
        var t = e.emojis,
            n = (0, o.default)().analyticsLocations;
        r.useEffect(function() {
            u.default.track(s.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: l.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_INLINE,
                location_stack: n
            })
        }, [n]);
        var d = r.createElement("div", {
            className: f.emojis
        }, t.slice(0, 3).map(function(e, t) {
            if ("" === e.url) return null;
            var n = r.createElement("div", {
                key: e.id,
                className: f.emojiBackground
            }, r.createElement("img", {
                alt: e.name,
                className: f.emoji,
                src: e.url
            }));
            return 2 === t ? n : r.createElement(a.default, {
                key: e.id,
                className: f.emojiMask,
                mask: a.default.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI
            }, n)
        }));
        return r.createElement(i.AutocompleteRowContent, {
            className: f.upsell
        }, r.createElement(i.AutocompleteRowContentPrimary, null, r.createElement(i.AutocompleteRowHeading, null, c.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({
            count: t.length
        }))), r.createElement(i.AutocompleteRowContentSecondary, null, d))
    }
}