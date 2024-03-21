function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPickerInspector: function() {
            return O
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("206230"),
        o = n("858619"),
        u = n("575226"),
        d = n("305781"),
        c = n("986632"),
        f = n("562323"),
        p = n("845579"),
        m = n("305961"),
        h = n("471671"),
        x = n("351825"),
        E = n("315102"),
        y = n("248474"),
        g = n("788506"),
        S = n("352046"),
        C = n("917764"),
        T = n("83017"),
        _ = n("115279"),
        I = n("782340"),
        v = n("981840");

    function N(e) {
        return "animated" in e
    }
    let A = e => {
            let {
                inspectedEmoji: t,
                guild: n
            } = e, i = N(t);
            return null != n && i ? I.default.Messages.EMOJI_FROM_GUILD.format({
                guildName: n.name
            }) : null
        },
        O = l.memo(function(e) {
            let t, {
                    className: n,
                    emojiGrid: O,
                    guildId: R,
                    pickerIntention: M,
                    channel: k
                } = e,
                {
                    enabled: L
                } = y.default.useExperiment({
                    location: "EmojiPicker"
                }, {
                    autoTrackExposure: !1
                }),
                P = c.EmojiPickerStore.useStore(e => e.inspectedExpressionPosition),
                b = l.useMemo(() => {
                    var e;
                    let {
                        rowIndex: t,
                        columnIndex: n
                    } = P;
                    return null === (e = O[t]) || void 0 === e ? void 0 : e[n]
                }, [O, P]),
                j = (null == b ? void 0 : b.type) === T.EmojiGridItemTypes.EMOJI ? null == b ? void 0 : b.emoji : {
                    type: "CREATE_EMOJI",
                    guildId: null == b ? void 0 : b.guildId,
                    allNamesString: null == b ? void 0 : b.name
                },
                U = (0, a.useStateFromStores)([m.default], () => null !== j && j.type === o.EmojiTypes.GUILD ? m.default.getGuild(j.guildId) : null, [j]),
                D = (0, a.useStateFromStores)([h.default], () => h.default.isFocused()),
                w = (0, a.useStateFromStores)([r.default], () => r.default.useReducedMotion, []),
                F = p.AnimateEmoji.useSetting(),
                G = (0, g.useIsFavoriteEmoji)(R, N(j) ? j : null),
                {
                    newlyAddedEmojis: H
                } = (0, S.default)(R, M),
                B = j.id,
                V = (null == b ? void 0 : b.type) === T.EmojiGridItemTypes.EMOJI ? b.subCategory : _.EmojiSubCategory.NONE;
            if (l.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        let t = Date.now() - e;
                        t >= 250 && N(j) && V !== _.EmojiSubCategory.NONE && (V === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && null !== j && j.type === o.EmojiTypes.GUILD && (0, d.updateNewlyAddedEmojiSeenAcknowledged)(j.guildId, H[0].id), null != P.source && (0, g.trackEmojiFocus)({
                            emoji: j,
                            subCategory: V,
                            position: b.columnIndex + 1,
                            newlyAddedHighlight: V === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && u.default.isNewerThanLastSeen(R, B)
                        }))
                    }
                }), null == j) return null;
            if (N(j)) {
                var K;
                let e = null != j.id ? E.default.getEmojiURL({
                    id: j.id,
                    animated: F && j.animated,
                    size: 28
                }) : j.url;
                t = "" === e ? (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: v.glyphEmoji,
                    children: "surrogates" in j ? j.surrogates : null
                }) : (0, i.jsx)("img", {
                    alt: null !== (K = j.allNamesString) && void 0 !== K ? K : "",
                    src: e,
                    className: v.emoji
                })
            } else t = (0, i.jsx)(x.default, {
                className: v.icon,
                foreground: v.icon,
                width: 24,
                height: 24
            });
            let W = null != U ? (0, i.jsx)(C.default, {
                    className: v.guildIcon,
                    guild: U,
                    shouldAnimate: !w && D
                }) : null,
                Y = L && "CREATE_EMOJI" === j.type ? I.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : j.allNamesString,
                z = L && "CREATE_EMOJI" === j.type ? I.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE : A({
                    inspectedEmoji: j,
                    channel: k,
                    guildId: R,
                    intention: M,
                    guild: U
                });
            return (0, i.jsx)(f.default, {
                className: n,
                graphicPrimary: t,
                graphicSecondary: W,
                titlePrimary: Y,
                titleSecondary: z,
                isFavorite: G,
                emojiSubCategory: V
            })
        })
}