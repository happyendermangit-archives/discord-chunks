function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("45682"),
        r = n("788506"),
        o = n("695106"),
        u = n("974634"),
        d = n("115279"),
        c = n("958706"),
        f = n("296323"),
        p = e => {
            let {
                accessory: t,
                pickerIntention: n,
                headerClassName: l,
                emojiListRef: p,
                onKeyDown: m,
                onFocus: h,
                autoFocus: x,
                searchBarRef: E,
                hasTabWrapper: y,
                diversitySurrogate: g,
                isBurstReaction: S,
                onBurstReactionToggle: C,
                renderHeader: I
            } = e, T = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(u.default, {
                    emojiListRef: p,
                    gridNavigatorId: d.GRID_NAVIGATOR_ID,
                    onKeyDown: m,
                    className: f.searchBar,
                    ref: E,
                    isFullRow: n === c.EmojiIntention.COMMUNITY_CONTENT_ONLY,
                    onFocus: h,
                    autoFocus: x,
                    defaultSearchPlaceholder: (0, r.getSearchPlaceholder)(n, S)
                }), n === c.EmojiIntention.REACTION ? (0, i.jsx)("div", {
                    className: f.burstToggle,
                    children: (0, i.jsx)(s.default, {
                        checked: S,
                        onClick: C
                    })
                }) : null, n === c.EmojiIntention.COMMUNITY_CONTENT_ONLY ? null : null != t ? t : (0, i.jsx)(o.default, {
                    searchBarRef: E,
                    className: f.diversitySelector,
                    hasTabWrapper: y,
                    selectedSurrogate: g
                })]
            });
            return (0, i.jsx)("div", {
                className: a(f.header, l),
                children: null != I ? I(T) : T
            })
        }
}