function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPickerInspector: function() {
            return O
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("206230"),
        o = n("858619"),
        u = n("575226"),
        d = n("305781"),
        c = n("986632"),
        f = n("562323"),
        m = n("845579"),
        p = n("305961"),
        h = n("471671"),
        E = n("351825"),
        g = n("315102"),
        C = n("248474"),
        S = n("788506"),
        T = n("352046"),
        I = n("917764"),
        v = n("83017"),
        _ = n("115279"),
        N = n("782340"),
        A = n("981840");

    function x(e) {
        return "animated" in e
    }
    let y = e => {
            let {
                inspectedEmoji: t,
                guild: n
            } = e, l = x(t);
            return null != n && l ? N.default.Messages.EMOJI_FROM_GUILD.format({
                guildName: n.name
            }) : null
        },
        O = i.memo(function(e) {
            let t, {
                    className: n,
                    emojiGrid: O,
                    guildId: R,
                    pickerIntention: M,
                    channel: L
                } = e,
                {
                    enabled: P
                } = C.default.useExperiment({
                    location: "EmojiPicker"
                }, {
                    autoTrackExposure: !1
                }),
                b = c.EmojiPickerStore.useStore(e => e.inspectedExpressionPosition),
                j = i.useMemo(() => {
                    var e;
                    let {
                        rowIndex: t,
                        columnIndex: n
                    } = b;
                    return null === (e = O[t]) || void 0 === e ? void 0 : e[n]
                }, [O, b]),
                U = (null == j ? void 0 : j.type) === v.EmojiGridItemTypes.EMOJI ? null == j ? void 0 : j.emoji : {
                    type: "CREATE_EMOJI",
                    guildId: null == j ? void 0 : j.guildId,
                    allNamesString: null == j ? void 0 : j.name
                },
                D = (0, a.useStateFromStores)([p.default], () => null !== U && U.type === o.EmojiTypes.GUILD ? p.default.getGuild(U.guildId) : null, [U]),
                k = (0, a.useStateFromStores)([h.default], () => h.default.isFocused()),
                w = (0, a.useStateFromStores)([r.default], () => r.default.useReducedMotion, []),
                F = m.AnimateEmoji.useSetting(),
                G = (0, S.useIsFavoriteEmoji)(R, x(U) ? U : null),
                {
                    newlyAddedEmojis: B
                } = (0, T.default)(R, M),
                H = U.id,
                V = (null == j ? void 0 : j.type) === v.EmojiGridItemTypes.EMOJI ? j.subCategory : _.EmojiSubCategory.NONE;
            if (i.useEffect(() => {
                    let e = Date.now();
                    return () => {
                        let t = Date.now() - e;
                        t >= 250 && x(U) && V !== _.EmojiSubCategory.NONE && (V === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && null !== U && U.type === o.EmojiTypes.GUILD && (0, d.updateNewlyAddedEmojiSeenAcknowledged)(U.guildId, B[0].id), null != b.source && (0, S.trackEmojiFocus)({
                            emoji: U,
                            subCategory: V,
                            position: j.columnIndex + 1,
                            newlyAddedHighlight: V === _.EmojiSubCategory.NEWLY_ADDED_EMOJI && u.default.isNewerThanLastSeen(R, H)
                        }))
                    }
                }), null == U) return null;
            if (x(U)) {
                var K;
                let e = null != U.id ? g.default.getEmojiURL({
                    id: U.id,
                    animated: F && U.animated,
                    size: 28
                }) : U.url;
                t = "" === e ? (0, l.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: A.glyphEmoji,
                    children: "surrogates" in U ? U.surrogates : null
                }) : (0, l.jsx)("img", {
                    alt: null !== (K = U.allNamesString) && void 0 !== K ? K : "",
                    src: e,
                    className: A.emoji
                })
            } else t = (0, l.jsx)(E.default, {
                className: A.icon,
                foreground: A.icon,
                width: 24,
                height: 24
            });
            let W = null != D ? (0, l.jsx)(I.default, {
                    className: A.guildIcon,
                    guild: D,
                    shouldAnimate: !w && k
                }) : null,
                Y = P && "CREATE_EMOJI" === U.type ? N.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : U.allNamesString,
                z = P && "CREATE_EMOJI" === U.type ? N.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE : y({
                    inspectedEmoji: U,
                    channel: L,
                    guildId: R,
                    intention: M,
                    guild: D
                });
            return (0, l.jsx)(f.default, {
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