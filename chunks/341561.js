function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("952265"),
        l = n("481060"),
        u = n("684774"),
        d = n("75145"),
        _ = n("285651"),
        c = n("268350"),
        E = n("926491"),
        I = n("373228"),
        T = n("419922"),
        f = n("430824"),
        S = n("156361"),
        h = n("466111"),
        A = n("483360"),
        m = n("877565"),
        N = n("590921"),
        O = n("665692"),
        p = n("981631"),
        R = n("689938"),
        C = n("106488");

    function g(e, t) {
        return (0, i.jsx)(T.default, {
            sticker: e,
            isInteracting: t,
            size: 40
        })
    }
    let L = {
        sentinel: O.EMOJI_SENTINEL,
        stores: [E.default],
        matches: (e, t, n, i, r) => n.length > 1,
        queryResults(e, t, n, i, r) {
            let s = i.allowStickers ? 0 : 40,
                a = p.MAX_AUTOCOMPLETE_RESULTS + s,
                {
                    emojis: {
                        locked: o,
                        unlocked: l
                    }
                } = A.default.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: i.emojiIntention,
                    maxCount: a
                });
            if ("-" === n[0]) {
                let e = e => {
                    var t;
                    return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
                };
                o = o.filter(e), l = l.filter(e)
            }
            let d = [];
            if (i.allowStickers) {
                (0, c.fetchStickerPacks)();
                let t = A.default.queryStickers([n], !0, [e, (e, t) => t === _.StickerSendability.SENDABLE]),
                    i = Math.max(4, 8 - l.length);
                d = t.slice(0, i), "-" === n[0] && (d = t.filter(e => e.sticker.name === n))
            }
            let E = l.slice(0, a - d.length),
                I = !i.allowStickers && o.length > 0 && E.length < a,
                T = u.default.getCurrentConfig({
                    location: "Emoji Autocomplete"
                }, {
                    autoTrackExposure: I,
                    disable: !I
                }).enabled,
                f = I && T ? o.slice(0, a - E.length) : [],
                S = E.length + f.length;
            return {
                results: {
                    emojis: E,
                    emojisLocked: f,
                    stickers: d
                },
                metadata: {
                    numEmojiResults: S,
                    numLockedEmojiResults: f.length,
                    numStickerResults: d.length
                }
            }
        },
        renderResults(e) {
            let {
                results: {
                    emojis: t,
                    stickers: s,
                    emojisLocked: u
                },
                selectedIndex: _,
                query: c,
                onHover: E,
                onClick: I
            } = e, T = u.length > 0 ? (0, i.jsxs)(r.Fragment, {
                children: [(0, i.jsx)(d.default, {
                    glowOpacity: 0,
                    className: C.premiumSectionDivider
                }), (0, i.jsxs)("div", {
                    className: a()(C.premiumHeader),
                    children: [(0, i.jsx)(h.default, {
                        className: C.premiumIcon,
                        width: 20,
                        height: 20
                    }), (0, i.jsx)(l.Text, {
                        className: C.premiumText,
                        variant: "text-sm/semibold",
                        children: R.default.Messages.UNLOCK_WITH_NITRO
                    })]
                })]
            }) : null;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, m.renderAutocompleteGroup)({
                    query: c,
                    selectedIndex: _,
                    autocompletes: t,
                    onHover: E,
                    onClick: I,
                    titleWithQuery: R.default.Messages.EMOJI_MATCHING,
                    titleWithoutQuery: R.default.Messages.EMOJI,
                    Component: S.default.Emoji,
                    getProps: e => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: O.EMOJI_SENTINEL,
                        guild: null != e.guildId ? f.default.getGuild(e.guildId) : null,
                        isLocked: !1
                    }),
                    getQuery: e => "".concat(O.EMOJI_SENTINEL).concat(e),
                    key: "emoji"
                }), u.length > 0 ? (0, m.renderAutocompleteGroup)({
                    query: c,
                    selectedIndex: _,
                    autocompletes: u,
                    onHover: E,
                    onClick: () => {
                        (0, o.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await Promise.all([n.e("99387"), n.e("9766")]).then(n.bind(n, "889684"));
                            return t => (0, i.jsx)(e, {
                                ...t
                            })
                        })
                    },
                    titleWithQuery: 0 === t.length ? R.default.Messages.EMOJI_MATCHING : null,
                    titleWithoutQuery: 0 === t.length ? R.default.Messages.EMOJI : null,
                    Component: S.default.Emoji,
                    getProps: e => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: O.EMOJI_SENTINEL,
                        guild: null != e.guildId ? f.default.getGuild(e.guildId) : null,
                        isLocked: !0
                    }),
                    getQuery: e => "".concat(O.EMOJI_SENTINEL).concat(e),
                    key: "emoji-upsell",
                    indexOffset: t.length,
                    subHeader: T
                }) : null, (t.length > 0 || u.length > 0) && s.length > 0 && (0, i.jsx)(S.default.Divider, {
                    className: C.emojiStickersDivider
                }), (0, m.renderAutocompleteGroup)({
                    query: c,
                    selectedIndex: _,
                    autocompletes: s,
                    onHover: E,
                    onClick: I,
                    titleWithQuery: R.default.Messages.STICKERS_MATCHING,
                    titleWithoutQuery: R.default.Messages.STICKER,
                    Component: S.default.Sticker,
                    getProps: e => {
                        let {
                            comparator: t,
                            sticker: n
                        } = e;
                        return {
                            renderSticker: g,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id
                        }
                    },
                    getQuery: e => e,
                    key: "stickers",
                    indexOffset: t.length + u.length,
                    headerClassName: t.length > 0 ? C.stickersHeaderWithEmojiResults : void 0
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
                let e = t[r],
                    a = t.length + n.length;
                return s.insertText(function(e) {
                    return "".concat(O.EMOJI_SENTINEL).concat(e.name).concat(O.EMOJI_SENTINEL)
                }(e), function(e) {
                    var t;
                    let n = e.animated ? "a" : "";
                    return e.managed || null == e.id ? "".concat(O.EMOJI_SENTINEL).concat(e.name).concat(O.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
                }(e)), {
                    type: N.AutocompleteSelectionTypes.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: a,
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
                return s.insertText(""), s.sendSticker(e.sticker, I.StickerSelectLocation.AUTOCOMPLETE), {
                    type: N.AutocompleteSelectionTypes.STICKER,
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
    t.default = L
}