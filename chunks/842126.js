function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("612039"),
        u = n("858619"),
        d = n("575226"),
        c = n("986632"),
        f = n("592407"),
        m = n("872173"),
        p = n("351825"),
        h = n("642032"),
        E = n("248474"),
        g = n("83017"),
        S = n("458604"),
        C = n("115279"),
        T = n("49111"),
        v = n("782340"),
        I = n("348473"),
        _ = e => {
            let {
                emojiDescriptors: t,
                emojiSize: n,
                onSelect: a,
                onInspect: _,
                surrogateCodePoint: N,
                getEmojiItemProps: A,
                getEmojiRowProps: x,
                isScrolling: y,
                isUsingKeyboardNavigation: O,
                rowIndex: R,
                allowAnimatedEmoji: M,
                showEmojiFavoriteTooltip: L,
                channelGuildId: P,
                category: b,
                selectedItemClassName: j,
                messageId: U,
                isBurstReaction: D,
                inNitroLockedSection: k
            } = e, {
                enabled: w
            } = E.default.useExperiment({
                location: "EmojiPicker"
            }, {
                autoTrackExposure: !1
            }), F = c.EmojiPickerStore.getState(), [G, B] = i.useState(F.inspectedExpressionPosition), [H, V] = (0, o.default)(null, 300), K = i.useRef(null);
            i.useEffect(() => c.EmojiPickerStore.useStore.subscribe(e => B(e), e => e.inspectedExpressionPosition), []), i.useEffect(() => {
                m.FrecencyUserSettingsActionCreators.loadIfNecessary()
            }, []);
            let W = n === C.EmojiSize.LARGE,
                Y = n === C.EmojiSize.MEDIUM,
                z = e => {
                    let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
                    switch (e.type) {
                        case g.EmojiGridItemTypes.CREATE_EMOJI: {
                            let {
                                visibleRowIndex: n,
                                columnIndex: o
                            } = e, u = G.rowIndex === n && G.columnIndex === o, d = t => {
                                t.stopPropagation(), !y.current && !O.current && (a(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }), f.default.open(e.guildId, T.GuildSettingsSections.EMOJI, T.AnalyticsSections.EMOJI_PICKER_POPOUT))
                            }, c = () => {
                                !y.current && !O.current && _(e)
                            };
                            return function() {
                                var e;
                                let {
                                    onMouseEnter: n,
                                    onMouseLeave: a
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                                    ref: f,
                                    tabIndex: m,
                                    onFocus: h,
                                    ...E
                                } = null !== (e = A(o, R)) && void 0 !== e ? e : {};
                                return (0, i.createElement)("li", {
                                    ...E,
                                    key: t
                                }, (0, l.jsx)(r.FocusRing, {
                                    children: (0, l.jsx)("button", {
                                        "aria-label": v.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        ref: f,
                                        className: s(I.emojiItem, {
                                            [I.emojiItemLarge]: W,
                                            [I.emojiItemMedium]: Y,
                                            [I.emojiItemSelected]: u,
                                            [null != j ? j : ""]: u,
                                            [I.showPulse]: H === t
                                        }),
                                        onFocus: null != h ? h : c,
                                        onMouseOver: c,
                                        onMouseEnter: n,
                                        onMouseLeave: a,
                                        onClick: d,
                                        tabIndex: m,
                                        children: (0, l.jsx)(p.default, {
                                            className: I.icon,
                                            foreground: I.icon,
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                }))
                            }()
                        }
                        case g.EmojiGridItemTypes.EMOJI: {
                            var n;
                            let {
                                columnIndex: i,
                                visibleRowIndex: s
                            } = e, r = G.rowIndex === s && G.columnIndex === i;
                            return (0, l.jsx)(S.default, {
                                rowIndex: R,
                                descriptor: e,
                                emojiItemKey: t,
                                isInspected: r,
                                isScrolling: y,
                                isUsingKeyboardNavigation: O,
                                surrogateCodePoint: N,
                                allowAnimatedEmoji: M,
                                selectedItemClassName: j,
                                onSelect: a,
                                onInspect: _,
                                channelGuildId: P,
                                getEmojiItemProps: A,
                                isMediumSize: Y,
                                isLargeSize: W,
                                pulseItemKey: H,
                                setPulseItemKey: V,
                                showEmojiFavoriteTooltip: L,
                                messageId: U,
                                isBurstReaction: D,
                                rowPosition: null == K ? void 0 : null === (n = K.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                                inNitroLockedSection: k
                            }, t)
                        }
                    }
                },
                Z = e => (0, l.jsx)("ul", {
                    ...x(R),
                    className: s(I.emojiListRow, {
                        [I.emojiListRowLargeSize]: W,
                        [I.emojiListRowMediumSize]: Y
                    }),
                    ref: K,
                    children: e.map(z)
                });
            if (b !== C.EmojiCategoryTypes.TOP_GUILD_EMOJI) return Z(t);
            let J = t.filter(e => !!w && e.type === g.EmojiGridItemTypes.CREATE_EMOJI || e.subCategory === C.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === C.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && !d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
                q = t.filter(e => e.subCategory === C.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
            return 0 === q.length ? Z(t) : (0, l.jsxs)("div", {
                className: I.topEmojiSectionContainer,
                children: [(0, l.jsx)("div", {
                    className: s(I.topEmojiContainer, {
                        [I.noEmojis]: 0 === J.length
                    }),
                    children: Z(J)
                }), (0, l.jsxs)("div", {
                    className: I.newlyAddedHighlightContainer,
                    children: [(0, l.jsx)("div", {
                        className: s(I.newlyAddedHighlight, {
                            [I.oneItem]: 1 === q.length,
                            [I.alignRight]: J.length > 0
                        }),
                        children: Z(q)
                    }), (0, l.jsxs)("div", {
                        className: s(I.newlyAddedBadge, {
                            [I.newlyAddedBadgeLarge]: W,
                            [I.newlyAddedBadgeMedium]: Y,
                            [I.alignRight]: J.length > 0
                        }),
                        children: [(0, l.jsx)(h.default, {
                            foreground: I.newlyAddedBadgeStar
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: v.default.Messages.NEW
                        })]
                    })]
                })]
            })
        }
}