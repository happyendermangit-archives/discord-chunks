function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("45682"),
        r = n("788506"),
        o = n("695106"),
        u = n("974634"),
        d = n("115279"),
        c = n("958706"),
        f = n("296323"),
        m = e => {
            let {
                accessory: t,
                pickerIntention: n,
                headerClassName: i,
                emojiListRef: m,
                onKeyDown: p,
                onFocus: h,
                autoFocus: E,
                searchBarRef: g,
                hasTabWrapper: C,
                diversitySurrogate: S,
                isBurstReaction: T,
                onBurstReactionToggle: I,
                renderHeader: v
            } = e, _ = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(u.default, {
                    emojiListRef: m,
                    gridNavigatorId: d.GRID_NAVIGATOR_ID,
                    onKeyDown: p,
                    className: f.searchBar,
                    ref: g,
                    isFullRow: n === c.EmojiIntention.COMMUNITY_CONTENT_ONLY,
                    onFocus: h,
                    autoFocus: E,
                    defaultSearchPlaceholder: (0, r.getSearchPlaceholder)(n, T)
                }), n === c.EmojiIntention.REACTION ? (0, l.jsx)("div", {
                    className: f.burstToggle,
                    children: (0, l.jsx)(s.default, {
                        checked: T,
                        onClick: I
                    })
                }) : null, n === c.EmojiIntention.COMMUNITY_CONTENT_ONLY ? null : null != t ? t : (0, l.jsx)(o.default, {
                    searchBarRef: g,
                    className: f.diversitySelector,
                    hasTabWrapper: C,
                    selectedSurrogate: S
                })]
            });
            return (0, l.jsx)("div", {
                className: a(f.header, i),
                children: null != v ? v(_) : _
            })
        }
}