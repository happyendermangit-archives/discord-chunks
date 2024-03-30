function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiPickerInspector: function() {
            return N
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("622780"),
        u = n("148527"),
        s = n("950763"),
        l = n("443619"),
        c = n("797056"),
        f = n("991264"),
        d = n("53867"),
        _ = n("306912"),
        E = n("290976"),
        p = n("749904"),
        m = n("299529"),
        y = n("544811"),
        I = n("276328"),
        h = n("888136"),
        O = n("289917"),
        T = n("458821"),
        S = n("644037"),
        v = n("941504"),
        g = n("821568");

    function A(e) {
        return "animated" in e
    }
    var b = function(e) {
            var t = e.inspectedEmoji,
                n = e.guild,
                r = A(t);
            return null != n && r ? v.default.Messages.EMOJI_FROM_GUILD.format({
                guildName: n.name
            }) : null
        },
        N = r.memo(function(e) {
            var t = e.className,
                n = e.emojiGrid,
                N = e.guildId,
                R = e.pickerIntention,
                C = e.channel,
                P = y.default.useExperiment({
                    location: "EmojiPicker"
                }, {
                    autoTrackExposure: !1
                }).enabled,
                D = c.EmojiPickerStore.useStore(function(e) {
                    return e.inspectedExpressionPosition
                }),
                L = r.useMemo(function() {
                    var e, t = D.rowIndex,
                        r = D.columnIndex;
                    return null === (e = n[t]) || void 0 === e ? void 0 : e[r]
                }, [n, D]),
                M = (null == L ? void 0 : L.type) === T.EmojiGridItemTypes.EMOJI ? null == L ? void 0 : L.emoji : {
                    type: "CREATE_EMOJI",
                    guildId: null == L ? void 0 : L.guildId,
                    allNamesString: null == L ? void 0 : L.name
                },
                U = (0, o.useStateFromStores)([_.default], function() {
                    return null !== M && M.type === u.EmojiTypes.GUILD ? _.default.getGuild(M.guildId) : null
                }, [M]),
                w = (0, o.useStateFromStores)([E.default], function() {
                    return E.default.isFocused()
                }),
                k = (0, o.useStateFromStores)([a.default], function() {
                    return a.default.useReducedMotion
                }, []),
                G = d.AnimateEmoji.useSetting(),
                B = (0, I.useIsFavoriteEmoji)(N, A(M) ? M : null),
                j = (0, h.default)(N, R).newlyAddedEmojis,
                F = M.id,
                V = (null == L ? void 0 : L.type) === T.EmojiGridItemTypes.EMOJI ? L.subCategory : S.EmojiSubCategory.NONE;
            if (r.useEffect(function() {
                    var e = Date.now();
                    return function() {
                        Date.now() - e >= 250 && A(M) && V !== S.EmojiSubCategory.NONE && (V === S.EmojiSubCategory.NEWLY_ADDED_EMOJI && null !== M && M.type === u.EmojiTypes.GUILD && (0, l.updateNewlyAddedEmojiSeenAcknowledged)(M.guildId, j[0].id), null != D.source && (0, I.trackEmojiFocus)({
                            emoji: M,
                            subCategory: V,
                            position: L.columnIndex + 1,
                            newlyAddedHighlight: V === S.EmojiSubCategory.NEWLY_ADDED_EMOJI && s.default.isNewerThanLastSeen(N, F)
                        }))
                    }
                }), null == M) return null;
            if (A(M)) {
                var H, x, Y = null != M.id ? m.default.getEmojiURL({
                    id: M.id,
                    animated: G && M.animated,
                    size: 28
                }) : M.url;
                H = "" === Y ? r.createElement(i.Text, {
                    variant: "text-md/normal",
                    className: g.glyphEmoji
                }, "surrogates" in M ? M.surrogates : null) : r.createElement("img", {
                    alt: null !== (x = M.allNamesString) && void 0 !== x ? x : "",
                    src: Y,
                    className: g.emoji
                })
            } else H = r.createElement(p.default, {
                className: g.icon,
                foreground: g.icon,
                width: 24,
                height: 24
            });
            var W = null != U ? r.createElement(O.default, {
                    className: g.__invalid_guildIcon,
                    guild: U,
                    shouldAnimate: !k && w
                }) : null,
                K = P && "CREATE_EMOJI" === M.type ? v.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : M.allNamesString,
                z = P && "CREATE_EMOJI" === M.type ? v.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE : b({
                    inspectedEmoji: M,
                    channel: C,
                    guildId: N,
                    intention: R,
                    guild: U
                });
            return r.createElement(f.default, {
                className: t,
                graphicPrimary: H,
                graphicSecondary: W,
                titlePrimary: K,
                titleSecondary: z,
                isFavorite: B,
                emojiSubCategory: V
            })
        })
}