function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("646574"),
        o = n("543241"),
        l = n("747613"),
        u = n("533432"),
        d = n("149203"),
        _ = n("185923"),
        c = n("776464");
    t.default = e => {
        let {
            accessory: t,
            pickerIntention: n,
            headerClassName: r,
            emojiListRef: E,
            onKeyDown: I,
            onFocus: T,
            autoFocus: f,
            searchBarRef: S,
            hasTabWrapper: A,
            diversitySurrogate: h,
            isBurstReaction: m,
            onBurstReactionToggle: N,
            renderHeader: O
        } = e, p = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(u.default, {
                emojiListRef: E,
                gridNavigatorId: d.GRID_NAVIGATOR_ID,
                onKeyDown: I,
                className: c.searchBar,
                ref: S,
                isFullRow: n === _.EmojiIntention.COMMUNITY_CONTENT_ONLY,
                onFocus: T,
                autoFocus: f,
                defaultSearchPlaceholder: (0, o.getSearchPlaceholder)(n, m)
            }), n === _.EmojiIntention.REACTION ? (0, i.jsx)("div", {
                className: c.burstToggle,
                children: (0, i.jsx)(a.default, {
                    checked: m,
                    onClick: N
                })
            }) : null, n === _.EmojiIntention.COMMUNITY_CONTENT_ONLY ? null : null != t ? t : (0, i.jsx)(l.default, {
                searchBarRef: S,
                className: c.diversitySelector,
                hasTabWrapper: A,
                selectedSurrogate: h
            })]
        });
        return (0, i.jsx)("div", {
            className: s()(c.header, r),
            children: null != O ? O(p) : p
        })
    }
}