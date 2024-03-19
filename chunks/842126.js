function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("612039"),
        u = n("858619"),
        d = n("575226"),
        c = n("986632"),
        f = n("592407"),
        p = n("872173"),
        m = n("351825"),
        h = n("642032"),
        x = n("248474"),
        E = n("83017"),
        y = n("458604"),
        g = n("115279"),
        S = n("49111"),
        C = n("782340"),
        _ = n("348473"),
        I = e => {
            let {
                emojiDescriptors: t,
                emojiSize: n,
                onSelect: a,
                onInspect: I,
                surrogateCodePoint: T,
                getEmojiItemProps: v,
                getEmojiRowProps: N,
                isScrolling: A,
                isUsingKeyboardNavigation: O,
                rowIndex: R,
                allowAnimatedEmoji: M,
                showEmojiFavoriteTooltip: k,
                channelGuildId: L,
                category: P,
                selectedItemClassName: b,
                messageId: j,
                isBurstReaction: U,
                inNitroLockedSection: D
            } = e, {
                enabled: w
            } = x.default.useExperiment({
                location: "EmojiPicker"
            }, {
                autoTrackExposure: !1
            }), F = c.EmojiPickerStore.getState(), [G, B] = l.useState(F.inspectedExpressionPosition), [H, V] = (0, o.default)(null, 300), K = l.useRef(null);
            l.useEffect(() => c.EmojiPickerStore.useStore.subscribe(e => B(e), e => e.inspectedExpressionPosition), []), l.useEffect(() => {
                p.FrecencyUserSettingsActionCreators.loadIfNecessary()
            }, []);
            let W = n === g.EmojiSize.LARGE,
                Y = n === g.EmojiSize.MEDIUM,
                z = e => {
                    let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
                    switch (e.type) {
                        case E.EmojiGridItemTypes.CREATE_EMOJI: {
                            let {
                                visibleRowIndex: n,
                                columnIndex: o
                            } = e, u = G.rowIndex === n && G.columnIndex === o, d = t => {
                                t.stopPropagation(), !A.current && !O.current && (a(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }), f.default.open(e.guildId, S.GuildSettingsSections.EMOJI, S.AnalyticsSections.EMOJI_PICKER_POPOUT))
                            }, c = () => {
                                !A.current && !O.current && I(e)
                            };
                            return function() {
                                var e;
                                let {
                                    onMouseEnter: n,
                                    onMouseLeave: a
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                                    ref: f,
                                    tabIndex: p,
                                    onFocus: h,
                                    ...x
                                } = null !== (e = v(o, R)) && void 0 !== e ? e : {};
                                return (0, l.createElement)("li", {
                                    ...x,
                                    key: t
                                }, (0, i.jsx)(r.FocusRing, {
                                    children: (0, i.jsx)("button", {
                                        "aria-label": C.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        ref: f,
                                        className: s(_.emojiItem, {
                                            [_.emojiItemLarge]: W,
                                            [_.emojiItemMedium]: Y,
                                            [_.emojiItemSelected]: u,
                                            [null != b ? b : ""]: u,
                                            [_.showPulse]: H === t
                                        }),
                                        onFocus: null != h ? h : c,
                                        onMouseOver: c,
                                        onMouseEnter: n,
                                        onMouseLeave: a,
                                        onClick: d,
                                        tabIndex: p,
                                        children: (0, i.jsx)(m.default, {
                                            className: _.icon,
                                            foreground: _.icon,
                                            width: 24,
                                            height: 24
                                        })
                                    })
                                }))
                            }()
                        }
                        case E.EmojiGridItemTypes.EMOJI: {
                            var n;
                            let {
                                columnIndex: l,
                                visibleRowIndex: s
                            } = e, r = G.rowIndex === s && G.columnIndex === l;
                            return (0, i.jsx)(y.default, {
                                rowIndex: R,
                                descriptor: e,
                                emojiItemKey: t,
                                isInspected: r,
                                isScrolling: A,
                                isUsingKeyboardNavigation: O,
                                surrogateCodePoint: T,
                                allowAnimatedEmoji: M,
                                selectedItemClassName: b,
                                onSelect: a,
                                onInspect: I,
                                channelGuildId: L,
                                getEmojiItemProps: v,
                                isMediumSize: Y,
                                isLargeSize: W,
                                pulseItemKey: H,
                                setPulseItemKey: V,
                                showEmojiFavoriteTooltip: k,
                                messageId: j,
                                isBurstReaction: U,
                                rowPosition: null == K ? void 0 : null === (n = K.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                                inNitroLockedSection: D
                            }, t)
                        }
                    }
                },
                Z = e => (0, i.jsx)("ul", {
                    ...N(R),
                    className: s(_.emojiListRow, {
                        [_.emojiListRowLargeSize]: W,
                        [_.emojiListRowMediumSize]: Y
                    }),
                    ref: K,
                    children: e.map(z)
                });
            if (P !== g.EmojiCategoryTypes.TOP_GUILD_EMOJI) return Z(t);
            let J = t.filter(e => !!w && e.type === E.EmojiGridItemTypes.CREATE_EMOJI || e.subCategory === g.EmojiSubCategory.TOP_GUILD_EMOJI || e.subCategory === g.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && !d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
                q = t.filter(e => e.subCategory === g.EmojiSubCategory.NEWLY_ADDED_EMOJI && e.emoji.type === u.EmojiTypes.GUILD && d.default.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
            return 0 === q.length ? Z(t) : (0, i.jsxs)("div", {
                className: _.topEmojiSectionContainer,
                children: [(0, i.jsx)("div", {
                    className: s(_.topEmojiContainer, {
                        [_.noEmojis]: 0 === J.length
                    }),
                    children: Z(J)
                }), (0, i.jsxs)("div", {
                    className: _.newlyAddedHighlightContainer,
                    children: [(0, i.jsx)("div", {
                        className: s(_.newlyAddedHighlight, {
                            [_.oneItem]: 1 === q.length,
                            [_.alignRight]: J.length > 0
                        }),
                        children: Z(q)
                    }), (0, i.jsxs)("div", {
                        className: s(_.newlyAddedBadge, {
                            [_.newlyAddedBadgeLarge]: W,
                            [_.newlyAddedBadgeMedium]: Y,
                            [_.alignRight]: J.length > 0
                        }),
                        children: [(0, i.jsx)(h.default, {
                            foreground: _.newlyAddedBadgeStar
                        }), (0, i.jsx)(r.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: C.default.Messages.NEW
                        })]
                    })]
                })]
            })
        }
}