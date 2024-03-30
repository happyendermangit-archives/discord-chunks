function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("198654"),
        u = n("276328"),
        s = n("5731"),
        l = n("348942"),
        c = n("644037"),
        f = n("68735"),
        d = n("776464");
    t.default = function(e) {
        var t = e.accessory,
            n = e.pickerIntention,
            o = e.headerClassName,
            _ = e.emojiListRef,
            E = e.onKeyDown,
            p = e.onFocus,
            m = e.autoFocus,
            y = e.searchBarRef,
            I = e.hasTabWrapper,
            h = e.diversitySurrogate,
            O = e.isBurstReaction,
            T = e.onBurstReactionToggle,
            S = e.renderHeader,
            v = r.createElement(r.Fragment, null, r.createElement(l.default, {
                emojiListRef: _,
                gridNavigatorId: c.GRID_NAVIGATOR_ID,
                onKeyDown: E,
                className: d.searchBar,
                ref: y,
                isFullRow: n === f.EmojiIntention.COMMUNITY_CONTENT_ONLY,
                onFocus: p,
                autoFocus: m,
                defaultSearchPlaceholder: (0, u.getSearchPlaceholder)(n, O)
            }), n === f.EmojiIntention.REACTION ? r.createElement("div", {
                className: d.burstToggle
            }, r.createElement(a.default, {
                checked: O,
                onClick: T
            })) : null, n === f.EmojiIntention.COMMUNITY_CONTENT_ONLY ? null : null != t ? t : r.createElement(s.default, {
                searchBarRef: y,
                className: d.diversitySelector,
                hasTabWrapper: I,
                selectedSurrogate: h
            }));
        return r.createElement("div", {
            className: i()(d.header, o)
        }, null != S ? S(v) : v)
    }
}