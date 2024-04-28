function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("952265"),
        s = n("285651"),
        a = n("268350"),
        o = n("926491"),
        l = n("373228"),
        u = n("419922"),
        d = n("430824"),
        _ = n("156361"),
        c = n("483360"),
        E = n("877565"),
        I = n("590921"),
        T = n("665692"),
        f = n("981631"),
        S = n("689938"),
        h = n("573198");

    function A(e, t) {
        return (0, i.jsx)(u.default, {
            sticker: e,
            isInteracting: t,
            size: 40
        })
    }
    let m = {
        sentinel: T.EMOJI_SENTINEL,
        stores: [o.default],
        matches: (e, t, n, i, r) => n.length > 1,
        queryResults(e, t, n, i, r) {
            let o = i.allowStickers ? 0 : 40,
                l = f.MAX_AUTOCOMPLETE_RESULTS + o,
                {
                    emojis: {
                        unlocked: u
                    }
                } = c.default.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: i.emojiIntention,
                    maxCount: l
                });
            "-" === n[0] && (u = u.filter(e => {
                var t;
                return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
            }));
            let d = [];
            if (i.allowStickers) {
                (0, a.fetchStickerPacks)();
                let t = c.default.queryStickers([n], !0, [e, (e, t) => t === s.StickerSendability.SENDABLE]),
                    i = Math.max(4, 8 - u.length);
                d = t.slice(0, i), "-" === n[0] && (d = t.filter(e => e.sticker.name === n))
            }
            let _ = u.slice(0, l - d.length);
            return {
                results: {
                    emojis: _,
                    emojisLocked: [],
                    stickers: d
                },
                metadata: {
                    numEmojiResults: _.length,
                    numLockedEmojiResults: 0,
                    numStickerResults: d.length
                }
            }
        },
        renderResults(e) {
            let {
                results: {
                    emojis: t,
                    stickers: s,
                    emojisLocked: a
                },
                selectedIndex: o,
                query: l,
                onHover: u,
                onClick: c
            } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, E.renderAutocompleteGroup)({
                    query: l,
                    selectedIndex: o,
                    autocompletes: t,
                    onHover: u,
                    onClick: c,
                    titleWithQuery: S.default.Messages.EMOJI_MATCHING,
                    titleWithoutQuery: S.default.Messages.EMOJI,
                    Component: _.default.Emoji,
                    getProps: e => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: T.EMOJI_SENTINEL,
                        guild: null != e.guildId ? d.default.getGuild(e.guildId) : null
                    }),
                    getQuery: e => "".concat(T.EMOJI_SENTINEL).concat(e),
                    key: "emoji"
                }), a.length > 0 ? (0, E.renderAutocompleteGroup)({
                    query: l,
                    selectedIndex: o,
                    autocompletes: a,
                    onHover: u,
                    onClick: () => {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("99387"), n.e("9766")]).then(n.bind(n, "889684"));
                            return t => (0, i.jsx)(e, {
                                ...t
                            })
                        })
                    },
                    titleWithQuery: 0 === t.length ? S.default.Messages.EMOJI_MATCHING : null,
                    titleWithoutQuery: 0 === t.length ? S.default.Messages.EMOJI : null,
                    Component: _.default.EmojiUpsell,
                    getProps: e => {
                        let {
                            emojis: t
                        } = e;
                        return {
                            key: "emoji-upsell",
                            emojis: t
                        }
                    },
                    getQuery: e => "".concat(T.EMOJI_SENTINEL).concat(e),
                    key: "emoji-upsell",
                    indexOffset: t.length
                }) : null, (t.length > 0 || a.length > 0) && s.length > 0 && (0, i.jsx)(_.default.Divider, {
                    className: h.emojiStickersDivider
                }), (0, E.renderAutocompleteGroup)({
                    query: l,
                    selectedIndex: o,
                    autocompletes: s,
                    onHover: u,
                    onClick: c,
                    titleWithQuery: S.default.Messages.STICKERS_MATCHING,
                    titleWithoutQuery: S.default.Messages.STICKER,
                    Component: _.default.Sticker,
                    getProps: e => {
                        let {
                            comparator: t,
                            sticker: n
                        } = e;
                        return {
                            renderSticker: A,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id
                        }
                    },
                    getQuery: e => e,
                    key: "stickers",
                    indexOffset: t.length + a.length,
                    headerClassName: t.length > 0 ? h.stickersHeaderWithEmojiResults : void 0
                })]
            })
        },
        onSelect(e) {
            let {
                results: {
                    emojis: t,
                    emojisLocked: n,
                    stickers: i
                },
                index: r,
                options: s
            } = e;
            if (r < t.length) {
                let e = t[r];
                return s.insertText(function(e) {
                    return "".concat(T.EMOJI_SENTINEL).concat(e.name).concat(T.EMOJI_SENTINEL)
                }(e), function(e) {
                    var t;
                    let n = e.animated ? "a" : "";
                    return e.managed || null == e.id ? "".concat(T.EMOJI_SENTINEL).concat(e.name).concat(T.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
                }(e)), {
                    type: I.AutocompleteSelectionTypes.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: t.length,
                        numStickerResults: i.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated
                    }
                }
            }
            if ((r -= t.length) < n.length) return {
                type: null
            };
            if ((r -= n.length) < i.length) {
                let e = i[r];
                return s.insertText(""), s.sendSticker(e.sticker, l.StickerSelectLocation.AUTOCOMPLETE), {
                    type: I.AutocompleteSelectionTypes.STICKER,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: i.length,
                        stickerId: e.sticker.id
                    }
                }
            }
            return {
                type: null
            }
        }
    };
    t.default = m
}