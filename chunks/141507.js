function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPickerInspector: function() {
            return D
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("607070"),
        l = n("906411"),
        u = n("438332"),
        d = n("664437"),
        _ = n("806966"),
        c = n("65029"),
        E = n("695346"),
        I = n("430824"),
        T = n("451478"),
        f = n("151785"),
        S = n("768581"),
        h = n("392552"),
        A = n("543241"),
        m = n("199257"),
        N = n("880949"),
        O = n("784222"),
        p = n("149203"),
        R = n("689938"),
        C = n("821568");

    function g(e) {
        return "animated" in e
    }
    let L = e => {
            let {
                inspectedEmoji: t,
                guild: n
            } = e, i = g(t);
            return null != n && i ? R.default.Messages.EMOJI_FROM_GUILD.format({
                guildName: n.name
            }) : null
        },
        D = r.memo(function(e) {
            let t, {
                    className: n,
                    emojiGrid: D,
                    guildId: v,
                    pickerIntention: M,
                    channel: y
                } = e,
                {
                    enabled: P
                } = h.default.useExperiment({
                    location: "EmojiPicker"
                }, {
                    autoTrackExposure: !1
                }),
                U = _.EmojiPickerStore.useStore(e => e.inspectedExpressionPosition),
                b = r.useMemo(() => {
                    var e;
                    let {
                        rowIndex: t,
                        columnIndex: n
                    } = U;
                    return null === (e = D[t]) || void 0 === e ? void 0 : e[n]
                }, [D, U]),
                G = (null == b ? void 0 : b.type) === O.EmojiGridItemTypes.EMOJI ? null == b ? void 0 : b.emoji : {
                    type: "CREATE_EMOJI",
                    guildId: null == b ? void 0 : b.guildId,
                    allNamesString: null == b ? void 0 : b.name
                },
                w = (0, s.useStateFromStores)([I.default], () => null !== G && G.type === l.EmojiTypes.GUILD ? I.default.getGuild(G.guildId) : null, [G]),
                k = (0, s.useStateFromStores)([T.default], () => T.default.isFocused()),
                B = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion, []),
                V = E.AnimateEmoji.useSetting(),
                F = (0, A.useIsFavoriteEmoji)(v, g(G) ? G : null),
                {
                    newlyAddedEmojis: x
                } = (0, m.default)(v, M),
                H = G.id,
                Y = (null == b ? void 0 : b.type) === O.EmojiGridItemTypes.EMOJI ? b.subCategory : p.EmojiSubCategory.NONE;
            if (r.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        Date.now() - e >= 250 && g(G) && Y !== p.EmojiSubCategory.NONE && (Y === p.EmojiSubCategory.NEWLY_ADDED_EMOJI && null !== G && G.type === l.EmojiTypes.GUILD && (0, d.updateNewlyAddedEmojiSeenAcknowledged)(G.guildId, x[0].id), null != U.source && (0, A.trackEmojiFocus)({
                            emoji: G,
                            subCategory: Y,
                            position: b.columnIndex + 1,
                            newlyAddedHighlight: Y === p.EmojiSubCategory.NEWLY_ADDED_EMOJI && u.default.isNewerThanLastSeen(v, H)
                        }))
                    }
                }), null == G) return null;
            if (g(G)) {
                var j;
                let e = null != G.id ? S.default.getEmojiURL({
                    id: G.id,
                    animated: V && G.animated,
                    size: 28
                }) : G.url;
                t = "" === e ? (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: C.glyphEmoji,
                    children: "surrogates" in G ? G.surrogates : null
                }) : (0, i.jsx)("img", {
                    alt: null !== (j = G.allNamesString) && void 0 !== j ? j : "",
                    src: e,
                    className: C.emoji
                })
            } else t = (0, i.jsx)(f.default, {
                className: C.icon,
                foreground: C.icon,
                width: 24,
                height: 24
            });
            let W = null != w ? (0, i.jsx)(N.default, {
                    className: C.__invalid_guildIcon,
                    guild: w,
                    shouldAnimate: !B && k
                }) : null,
                K = P && "CREATE_EMOJI" === G.type ? R.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : G.allNamesString,
                z = P && "CREATE_EMOJI" === G.type ? R.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE : L({
                    inspectedEmoji: G,
                    channel: y,
                    guildId: v,
                    intention: M,
                    guild: w
                });
            return (0, i.jsx)(c.default, {
                className: n,
                graphicPrimary: t,
                graphicSecondary: W,
                titlePrimary: K,
                titleSecondary: z,
                isFavorite: F,
                emojiSubCategory: Y
            })
        })
}