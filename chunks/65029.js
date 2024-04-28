function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("481060"),
        o = n("28531"),
        l = n("819758"),
        u = n("898140"),
        d = n("149203"),
        _ = n("689938"),
        c = n("181710");
    let E = e => {
        let {
            emojiSubCategory: t
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(c.badgeLabel, t === d.EmojiSubCategory.TOP_GUILD_EMOJI ? c.topGuildEmojiBadge : c.newlyAddedBadge),
            children: [t === d.EmojiSubCategory.TOP_GUILD_EMOJI ? (0, i.jsx)(o.default, {
                foreground: c.newlyAddedBadgeIcon
            }) : (0, i.jsx)(l.default, {
                foreground: c.newlyAddedBadgeIcon
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: t === d.EmojiSubCategory.TOP_GUILD_EMOJI ? _.default.Messages.TOP_GUILD_EMOJI_BADGE : _.default.Messages.NEWLY_ADDED_GUILD_EMOJI_BADGE
            })]
        })
    };
    t.default = e => {
        let {
            className: t,
            graphicPrimary: n,
            graphicSecondary: r,
            titlePrimary: o,
            titleSecondary: l,
            isFavorite: I = !1,
            emojiSubCategory: T = d.EmojiSubCategory.NONE
        } = e;
        return (0, i.jsxs)("div", {
            className: s()(c.inspector, t),
            children: [(0, i.jsx)("div", {
                className: c.graphicPrimary,
                "aria-hidden": !0,
                children: n
            }), (0, i.jsxs)("div", {
                className: c.textWrapper,
                children: [(0, i.jsxs)(a.Text, {
                    className: c.titlePrimary,
                    variant: "text-md/semibold",
                    children: [I ? (0, i.jsx)(u.default, {
                        "aria-label": I ? _.default.Messages.EMOJI_IS_FAVORITE_ARIA_LABEL.format({
                            names: o
                        }) : void 0,
                        width: 15,
                        height: 15,
                        className: c.favorite
                    }) : null, o]
                }), null != l && (0, i.jsx)(a.Text, {
                    className: c.titleSecondary,
                    variant: "text-xs/normal",
                    children: l
                })]
            }), T === d.EmojiSubCategory.NONE ? null != r && (0, i.jsx)("div", {
                className: c.graphicSecondary,
                "aria-hidden": !0,
                children: r
            }) : (0, i.jsx)(E, {
                emojiSubCategory: T
            })]
        })
    }
}