function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("599373"),
        s = n("819439"),
        l = n("147163"),
        c = n("644037"),
        f = n("941504"),
        d = n("102700"),
        _ = function(e) {
            var t = e.emojiSubCategory;
            return r.createElement("div", {
                className: i()(d.badgeLabel, t === c.EmojiSubCategory.TOP_GUILD_EMOJI ? d.topGuildEmojiBadge : d.newlyAddedBadge)
            }, t === c.EmojiSubCategory.TOP_GUILD_EMOJI ? r.createElement(u.default, {
                foreground: d.newlyAddedBadgeIcon
            }) : r.createElement(s.default, {
                foreground: d.newlyAddedBadgeIcon
            }), r.createElement(a.Text, {
                variant: "text-sm/semibold",
                color: "always-white"
            }, t === c.EmojiSubCategory.TOP_GUILD_EMOJI ? f.default.Messages.TOP_GUILD_EMOJI_BADGE : f.default.Messages.NEWLY_ADDED_GUILD_EMOJI_BADGE))
        };
    t.default = function(e) {
        var t = e.className,
            n = e.graphicPrimary,
            o = e.graphicSecondary,
            u = e.titlePrimary,
            s = e.titleSecondary,
            E = e.isFavorite,
            p = void 0 !== E && E,
            m = e.emojiSubCategory,
            y = void 0 === m ? c.EmojiSubCategory.NONE : m;
        return r.createElement("div", {
            className: i()(d.inspector, t)
        }, r.createElement("div", {
            className: d.graphicPrimary,
            "aria-hidden": !0
        }, n), r.createElement("div", {
            className: d.textWrapper
        }, r.createElement(a.Text, {
            className: d.titlePrimary,
            variant: "text-md/semibold"
        }, p ? r.createElement(l.default, {
            "aria-label": p ? f.default.Messages.EMOJI_IS_FAVORITE_ARIA_LABEL.format({
                names: u
            }) : void 0,
            width: 15,
            height: 15,
            className: d.favorite
        }) : null, u), null != s && r.createElement(a.Text, {
            className: d.titleSecondary,
            variant: "text-xs/normal"
        }, s)), y === c.EmojiSubCategory.NONE ? null != o && r.createElement("div", {
            className: d.graphicSecondary,
            "aria-hidden": !0
        }, o) : r.createElement(_, {
            emojiSubCategory: y
        }))
    }
}