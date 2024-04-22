function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("330726"),
        u = n("906411"),
        d = n("438332"),
        _ = n("806966"),
        c = n("434404"),
        E = n("675478"),
        I = n("151785"),
        T = n("819758"),
        f = n("392552"),
        S = n("784222"),
        h = n("926243"),
        A = n("149203"),
        m = n("981631"),
        N = n("689938"),
        p = n("975903");
    t.default = e => {
        let {
            emojiDescriptors: t,
            emojiSize: n,
            onSelect: s,
            onInspect: O,
            surrogateCodePoint: R,
            getEmojiItemProps: C,
            getEmojiRowProps: g,
            isScrolling: L,
            isUsingKeyboardNavigation: D,
            rowIndex: v,
            allowAnimatedEmoji: M,
            showEmojiFavoriteTooltip: y,
            channelGuildId: P,
            category: U,
            selectedItemClassName: b,
            messageId: G,
            isBurstReaction: w,
            inNitroLockedSection: k
        } = e, {
            enabled: B
        } = f.default.useExperiment({
            location: "EmojiPicker"
        }, {
            autoTrackExposure: !1
        }), F = _.EmojiPickerStore.getState(), [V, x] = r.useState(F.inspectedExpressionPosition), [H, Y] = (0, l.default)(null, 300), j = r.useRef(null);
        r.useEffect(() => _.EmojiPickerStore.useStore.subscribe(e => x(e), e => e.inspectedExpressionPosition), []), r.useEffect(() => {
            E.FrecencyUserSettingsActionCreators.loadIfNecessary()
        }, []);
        let W = n === A.EmojiSize.LARGE,
            K = n === A.EmojiSize.MEDIUM,
            z = e => {
                let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
                switch (e.type) {
                    case S.EmojiGridItemTypes.CREATE_EMOJI: {
                        let {
                            visibleRowIndex: n,
                            columnIndex: l
                        } = e, u = V.rowIndex === n && V.columnIndex === l, d = t => {
                            t.stopPropagation(), !L.current && !D.current && (s(e, {
                                isFinalSelection: !0,
                                toggleFavorite: !1
                            }), c.default.open(e.guildId, m.GuildSettingsSections.EMOJI, m.AnalyticsSections.EMOJI_PICKER_POPOUT))
                        }, _ = () => {
                            !L.current && !D.current && O(e)
                        };
                        return function() {
                            var e;
                            let {
                                onMouseEnter: n,
                                onMouseLeave: s
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                                ref: c,
                                tabIndex: E,
                                onFocus: T,
                                ...f
                            } = null !== (e = C(l, v)) && void 0 !== e ? e : {};
                            return (0, r.createElement)("li", {
                                ...f,
                                key: t
                            }, (0, i.jsx)(o.FocusRing, {
                                children: (0, i.jsx)("button", {
                                    "aria-label": N.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    ref: c,
                                    className: a()(p.emojiItem, {
                                        [p.emojiItemLarge]: W,
                                        [p.emojiItemMedium]: K,
                                        [p.emojiItemSelected]: u,
                                        [null != b ? b : ""]: u,
                                        [p.showPulse]: H === t
                                    }),
                                    onFocus: null != T ? T : _,
                                    onMouseOver: _,
                                    onMouseEnter: n,
                                    onMouseLeave: s,
                                    onClick: d,
                                    tabIndex: E,
                                    children: (0, i.jsx)(I.default, {
                                        className: p.icon,
                                        foreground: p.icon,
                                        width: 24,
                                        height: 24
                                    })
                                })
                            }))
                        }()
                    }
                    case S.EmojiGridItemTypes.EMOJI: {
                        var n;
                        let {
                            columnIndex: r,
                            visibleRowIndex: a
                        } = e, o = V.rowIndex === a && V.columnIndex === r;
                        return (0, i.jsx)(h.default, {
                            rowIndex: v,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: o,
                            isScrolling: L,
                            isUsingKeyboardNavigation: D,
                            surrogateCodePoint: R,
                            allowAnimatedEmoji: M,
                            selectedItemClassName: b,
                            onSelect: s,
                            onInspect: O,
                            channelGuildId: P,
                            getEmojiItemProps: C,
                            isMediumSize: K,
                            isLargeSize: W,
                            pulseItemKey: H,
                            setPulseItemKey: Y,
                            showEmojiFavoriteTooltip: y,
                            messageId: G,
                            isBurstReaction: w,
                            rowPosition: null == j ? void 0 : null === (n = j.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                            inNitroLockedSection: k
                        }, t)
                    }
                }
            },
            X = e => (0, i.jsx)("ul", {
                ...g(v),
                className: a()(p.emojiListRow, {
                    [p.emojiListRowLargeSize]: W,
                    [p.emojiListRowMediumSize]: K
                }),
                ref: j,
                children: e.map(z)
            });
        if (U !== A.EmojiCategoryTypes.TOP_GUILD_EMOJI) return X(t);
        let Q = t.filter(e => !!B && e.type === S.EmojiGridItemTypes.CREATE_EMOJI || e.subCategory === A.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === A.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && !d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
            q = t.filter(e => e.subCategory === A.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
        return 0 === q.length ? X(t) : (0, i.jsxs)("div", {
            className: p.topEmojiSectionContainer,
            children: [(0, i.jsx)("div", {
                className: a()(p.topEmojiContainer, {
                    [p.noEmojis]: 0 === Q.length
                }),
                children: X(Q)
            }), (0, i.jsxs)("div", {
                className: p.newlyAddedHighlightContainer,
                children: [(0, i.jsx)("div", {
                    className: a()(p.newlyAddedHighlight, {
                        [p.oneItem]: 1 === q.length,
                        [p.alignRight]: Q.length > 0
                    }),
                    children: X(q)
                }), (0, i.jsxs)("div", {
                    className: a()(p.newlyAddedBadge, {
                        [p.newlyAddedBadgeLarge]: W,
                        [p.newlyAddedBadgeMedium]: K,
                        [p.alignRight]: Q.length > 0
                    }),
                    children: [(0, i.jsx)(T.default, {
                        foreground: p.newlyAddedBadgeStar
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: N.default.Messages.NEW
                    })]
                })]
            })]
        })
    }
}