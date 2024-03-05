function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("551042"),
        o = n("77078"),
        u = n("714602"),
        d = n("454655"),
        c = n("866353"),
        f = n("467094"),
        m = n("364685"),
        p = n("161585"),
        h = n("41170"),
        E = n("305961"),
        g = n("501536"),
        C = n("216422"),
        S = n("25292"),
        T = n("200294"),
        v = n("851745"),
        I = n("406291"),
        _ = n("49111"),
        N = n("782340"),
        A = n("522572");

    function x(e, t) {
        return (0, l.jsx)(h.default, {
            sticker: e,
            isInteracting: t,
            size: 40
        })
    }
    let y = {
        sentinel: I.EMOJI_SENTINEL,
        stores: [m.default],
        matches: (e, t, n, l, i) => n.length > 1,
        queryResults(e, t, n, l, i) {
            let a = l.allowStickers ? 0 : 40,
                s = _.MAX_AUTOCOMPLETE_RESULTS + a,
                {
                    emojis: {
                        locked: r,
                        unlocked: o
                    }
                } = S.default.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: l.emojiIntention,
                    maxCount: s
                });
            if ("-" === n[0]) {
                let e = e => {
                    var t;
                    return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
                };
                r = r.filter(e), o = o.filter(e)
            }
            let d = [];
            if (l.allowStickers) {
                (0, f.fetchStickerPacks)();
                let t = S.default.queryStickers([n], !0, [e, (e, t) => t === c.StickerSendability.SENDABLE]),
                    l = Math.max(4, 8 - o.length);
                d = t.slice(0, l), "-" === n[0] && (d = t.filter(e => e.sticker.name === n))
            }
            let m = o.slice(0, s - d.length),
                p = !l.allowStickers && r.length > 0 && m.length < s,
                h = u.default.getCurrentConfig({
                    location: "Emoji Autocomplete"
                }, {
                    autoTrackExposure: p,
                    disable: !p
                }).enabled,
                E = p && h ? r.slice(0, s - m.length) : [],
                g = m.length + E.length;
            return {
                results: {
                    emojis: m,
                    emojisLocked: E,
                    stickers: d
                },
                metadata: {
                    numEmojiResults: g,
                    numLockedEmojiResults: E.length,
                    numStickerResults: d.length
                }
            }
        },
        renderResults(e) {
            let {
                results: {
                    emojis: t,
                    stickers: a,
                    emojisLocked: u
                },
                selectedIndex: c,
                query: f,
                onHover: m,
                onClick: p
            } = e, h = u.length > 0 ? (0, l.jsxs)(i.Fragment, {
                children: [(0, l.jsx)(d.default, {
                    glowOpacity: 0,
                    className: A.premiumSectionDivider
                }), (0, l.jsxs)("div", {
                    className: s(A.premiumHeader),
                    children: [(0, l.jsx)(C.default, {
                        className: A.premiumIcon,
                        width: 20,
                        height: 20
                    }), (0, l.jsx)(o.Text, {
                        className: A.premiumText,
                        variant: "text-sm/semibold",
                        children: N.default.Messages.UNLOCK_WITH_NITRO
                    })]
                })]
            }) : null;
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, T.renderAutocompleteGroup)({
                    query: f,
                    selectedIndex: c,
                    autocompletes: t,
                    onHover: m,
                    onClick: p,
                    titleWithQuery: N.default.Messages.EMOJI_MATCHING,
                    titleWithoutQuery: N.default.Messages.EMOJI,
                    Component: g.default.Emoji,
                    getProps: e => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: I.EMOJI_SENTINEL,
                        guild: null != e.guildId ? E.default.getGuild(e.guildId) : null,
                        isLocked: !1
                    }),
                    getQuery: e => "".concat(I.EMOJI_SENTINEL).concat(e),
                    key: "emoji"
                }), u.length > 0 ? (0, T.renderAutocompleteGroup)({
                    query: f,
                    selectedIndex: c,
                    autocompletes: u,
                    onHover: m,
                    onClick: () => {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("499237").then(n.bind(n, "499237"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        })
                    },
                    titleWithQuery: 0 === t.length ? N.default.Messages.EMOJI_MATCHING : null,
                    titleWithoutQuery: 0 === t.length ? N.default.Messages.EMOJI : null,
                    Component: g.default.Emoji,
                    getProps: e => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: I.EMOJI_SENTINEL,
                        guild: null != e.guildId ? E.default.getGuild(e.guildId) : null,
                        isLocked: !0
                    }),
                    getQuery: e => "".concat(I.EMOJI_SENTINEL).concat(e),
                    key: "emoji-upsell",
                    indexOffset: t.length,
                    subHeader: h
                }) : null, (t.length > 0 || u.length > 0) && a.length > 0 && (0, l.jsx)(g.default.Divider, {
                    className: A.emojiStickersDivider
                }), (0, T.renderAutocompleteGroup)({
                    query: f,
                    selectedIndex: c,
                    autocompletes: a,
                    onHover: m,
                    onClick: p,
                    titleWithQuery: N.default.Messages.STICKERS_MATCHING,
                    titleWithoutQuery: N.default.Messages.STICKER,
                    Component: g.default.Sticker,
                    getProps: e => {
                        let {
                            comparator: t,
                            sticker: n
                        } = e;
                        return {
                            renderSticker: x,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id
                        }
                    },
                    getQuery: e => e,
                    key: "stickers",
                    indexOffset: t.length + u.length,
                    headerClassName: t.length > 0 ? A.stickersHeaderWithEmojiResults : void 0
                })]
            })
        },
        onSelect(e) {
            let {
                results: {
                    emojis: t,
                    emojisLocked: n,
                    stickers: l
                },
                index: i,
                options: a
            } = e;
            if (i < t.length) {
                let e = t[i],
                    s = t.length + n.length;
                return a.insertText(function(e) {
                    return "".concat(I.EMOJI_SENTINEL).concat(e.name).concat(I.EMOJI_SENTINEL)
                }(e), function(e) {
                    var t;
                    let n = e.animated ? "a" : "";
                    return e.managed || null == e.id ? "".concat(I.EMOJI_SENTINEL).concat(e.name).concat(I.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
                }(e)), {
                    type: v.AutocompleteSelectionTypes.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: s,
                        numStickerResults: l.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated
                    }
                }
            }
            if ((i -= t.length) < n.length) return {
                type: null
            };
            if ((i -= n.length) < l.length) {
                let e = l[i];
                return a.insertText(""), a.sendSticker(e.sticker, p.StickerSelectLocation.AUTOCOMPLETE), {
                    type: v.AutocompleteSelectionTypes.STICKER,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: l.length,
                        stickerId: e.sticker.id
                    }
                }
            }
            return {
                type: null
            }
        }
    };
    var O = y
}