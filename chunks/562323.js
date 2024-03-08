function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("346314"),
        o = n("642032"),
        u = n("290581"),
        d = n("115279"),
        c = n("782340"),
        f = n("935102");
    let p = e => {
        let {
            emojiSubCategory: t
        } = e;
        return (0, i.jsxs)("div", {
            className: a(f.badgeLabel, t === d.EmojiSubCategory.TOP_GUILD_EMOJI ? f.topGuildEmojiBadge : f.newlyAddedBadge),
            children: [t === d.EmojiSubCategory.TOP_GUILD_EMOJI ? (0, i.jsx)(r.default, {
                foreground: f.newlyAddedBadgeIcon
            }) : (0, i.jsx)(o.default, {
                foreground: f.newlyAddedBadgeIcon
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/semibold",
                color: "always-white",
                children: t === d.EmojiSubCategory.TOP_GUILD_EMOJI ? c.default.Messages.TOP_GUILD_EMOJI_BADGE : c.default.Messages.NEWLY_ADDED_GUILD_EMOJI_BADGE
            })]
        })
    };
    var m = e => {
        let {
            className: t,
            graphicPrimary: n,
            graphicSecondary: l,
            titlePrimary: r,
            titleSecondary: o,
            isFavorite: m = !1,
            emojiSubCategory: h = d.EmojiSubCategory.NONE
        } = e;
        return (0, i.jsxs)("div", {
            className: a(f.inspector, t),
            children: [(0, i.jsx)("div", {
                className: f.graphicPrimary,
                "aria-hidden": !0,
                children: n
            }), (0, i.jsxs)("div", {
                className: f.textWrapper,
                children: [(0, i.jsxs)(s.Text, {
                    className: f.titlePrimary,
                    variant: "text-md/semibold",
                    children: [m ? (0, i.jsx)(u.default, {
                        "aria-label": m ? c.default.Messages.EMOJI_IS_FAVORITE_ARIA_LABEL.format({
                            names: r
                        }) : void 0,
                        width: 15,
                        height: 15,
                        className: f.favorite
                    }) : null, r]
                }), null != o && (0, i.jsx)(s.Text, {
                    className: f.titleSecondary,
                    variant: "text-xs/normal",
                    children: o
                })]
            }), h === d.EmojiSubCategory.NONE ? null != l && (0, i.jsx)("div", {
                className: f.graphicSecondary,
                "aria-hidden": !0,
                children: l
            }) : (0, i.jsx)(p, {
                emojiSubCategory: h
            })]
        })
    }
}