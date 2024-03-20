function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("551042"),
        o = n("77078"),
        u = n("714602"),
        d = n("454655"),
        c = n("866353"),
        f = n("467094"),
        p = n("364685"),
        m = n("161585"),
        h = n("41170"),
        x = n("305961"),
        E = n("501536"),
        y = n("216422"),
        g = n("25292"),
        S = n("200294"),
        C = n("851745"),
        _ = n("406291"),
        T = n("49111"),
        I = n("782340"),
        v = n("522572");

    function N(e, t) {
        return (0, i.jsx)(h.default, {
            sticker: e,
            isInteracting: t,
            size: 40
        })
    }
    let A = {
        sentinel: _.EMOJI_SENTINEL,
        stores: [p.default],
        matches: (e, t, n, i, l) => n.length > 1,
        queryResults(e, t, n, i, l) {
            let a = i.allowStickers ? 0 : 40,
                s = T.MAX_AUTOCOMPLETE_RESULTS + a,
                {
                    emojis: {
                        locked: r,
                        unlocked: o
                    }
                } = g.default.queryEmojiResults({
                    query: n,
                    channel: e,
                    intention: i.emojiIntention,
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
            if (i.allowStickers) {
                (0, f.fetchStickerPacks)();
                let t = g.default.queryStickers([n], !0, [e, (e, t) => t === c.StickerSendability.SENDABLE]),
                    i = Math.max(4, 8 - o.length);
                d = t.slice(0, i), "-" === n[0] && (d = t.filter(e => e.sticker.name === n))
            }
            let p = o.slice(0, s - d.length),
                m = !i.allowStickers && r.length > 0 && p.length < s,
                h = u.default.getCurrentConfig({
                    location: "Emoji Autocomplete"
                }, {
                    autoTrackExposure: m,
                    disable: !m
                }).enabled,
                x = m && h ? r.slice(0, s - p.length) : [],
                E = p.length + x.length;
            return {
                results: {
                    emojis: p,
                    emojisLocked: x,
                    stickers: d
                },
                metadata: {
                    numEmojiResults: E,
                    numLockedEmojiResults: x.length,
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
                onHover: p,
                onClick: m
            } = e, h = u.length > 0 ? (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsx)(d.default, {
                    glowOpacity: 0,
                    className: v.premiumSectionDivider
                }), (0, i.jsxs)("div", {
                    className: s(v.premiumHeader),
                    children: [(0, i.jsx)(y.default, {
                        className: v.premiumIcon,
                        width: 20,
                        height: 20
                    }), (0, i.jsx)(o.Text, {
                        className: v.premiumText,
                        variant: "text-sm/semibold",
                        children: I.default.Messages.UNLOCK_WITH_NITRO
                    })]
                })]
            }) : null;
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, S.renderAutocompleteGroup)({
                    query: f,
                    selectedIndex: c,
                    autocompletes: t,
                    onHover: p,
                    onClick: m,
                    titleWithQuery: I.default.Messages.EMOJI_MATCHING,
                    titleWithoutQuery: I.default.Messages.EMOJI,
                    Component: E.default.Emoji,
                    getProps: e => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: _.EMOJI_SENTINEL,
                        guild: null != e.guildId ? x.default.getGuild(e.guildId) : null,
                        isLocked: !1
                    }),
                    getQuery: e => "".concat(_.EMOJI_SENTINEL).concat(e),
                    key: "emoji"
                }), u.length > 0 ? (0, S.renderAutocompleteGroup)({
                    query: f,
                    selectedIndex: c,
                    autocompletes: u,
                    onHover: p,
                    onClick: () => {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("499237").then(n.bind(n, "499237"));
                            return t => (0, i.jsx)(e, {
                                ...t
                            })
                        })
                    },
                    titleWithQuery: 0 === t.length ? I.default.Messages.EMOJI_MATCHING : null,
                    titleWithoutQuery: 0 === t.length ? I.default.Messages.EMOJI : null,
                    Component: E.default.Emoji,
                    getProps: e => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: _.EMOJI_SENTINEL,
                        guild: null != e.guildId ? x.default.getGuild(e.guildId) : null,
                        isLocked: !0
                    }),
                    getQuery: e => "".concat(_.EMOJI_SENTINEL).concat(e),
                    key: "emoji-upsell",
                    indexOffset: t.length,
                    subHeader: h
                }) : null, (t.length > 0 || u.length > 0) && a.length > 0 && (0, i.jsx)(E.default.Divider, {
                    className: v.emojiStickersDivider
                }), (0, S.renderAutocompleteGroup)({
                    query: f,
                    selectedIndex: c,
                    autocompletes: a,
                    onHover: p,
                    onClick: m,
                    titleWithQuery: I.default.Messages.STICKERS_MATCHING,
                    titleWithoutQuery: I.default.Messages.STICKER,
                    Component: E.default.Sticker,
                    getProps: e => {
                        let {
                            comparator: t,
                            sticker: n
                        } = e;
                        return {
                            renderSticker: N,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id
                        }
                    },
                    getQuery: e => e,
                    key: "stickers",
                    indexOffset: t.length + u.length,
                    headerClassName: t.length > 0 ? v.stickersHeaderWithEmojiResults : void 0
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
                index: l,
                options: a
            } = e;
            if (l < t.length) {
                let e = t[l],
                    s = t.length + n.length;
                return a.insertText(function(e) {
                    return "".concat(_.EMOJI_SENTINEL).concat(e.name).concat(_.EMOJI_SENTINEL)
                }(e), function(e) {
                    var t;
                    let n = e.animated ? "a" : "";
                    return e.managed || null == e.id ? "".concat(_.EMOJI_SENTINEL).concat(e.name).concat(_.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
                }(e)), {
                    type: C.AutocompleteSelectionTypes.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: s,
                        numStickerResults: i.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated
                    }
                }
            }
            if ((l -= t.length) < n.length) return {
                type: null
            };
            if ((l -= n.length) < i.length) {
                let e = i[l];
                return a.insertText(""), a.sendSticker(e.sticker, m.StickerSelectLocation.AUTOCOMPLETE), {
                    type: C.AutocompleteSelectionTypes.STICKER,
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
    var O = A
}