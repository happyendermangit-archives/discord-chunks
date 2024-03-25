function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("272030"),
        d = n("206230"),
        c = n("385976"),
        f = n("858619"),
        p = n("867805"),
        m = n("246511"),
        h = n("139321"),
        x = n("140708"),
        E = n("305961"),
        y = n("773336"),
        g = n("429569"),
        S = n("215550"),
        C = n("782340"),
        _ = n("348473");
    let T = (e, t) => "".concat(e, ":").concat(t),
        I = l.forwardRef(function(e, t) {
            let n, {
                    emoji: l,
                    isFavorite: a,
                    isLargeSize: u,
                    isMediumSize: d,
                    isInspected: c,
                    isDisabled: p,
                    showPulse: h,
                    columnIndex: x,
                    rowIndex: y,
                    size: T,
                    surrogateCodePoint: I,
                    allowAnimatedEmoji: v,
                    selectedItemClassName: A,
                    inNitroLockedSection: N,
                    ...R
                } = e,
                O = (0, r.useStateFromStores)([E.default], () => l.type === f.EmojiTypes.GUILD ? E.default.getGuild(l.guildId) : void 0, [l]),
                {
                    enabled: M
                } = g.default.useExperiment({
                    location: "Emoji Picker List"
                }, {
                    autoTrackExposure: p
                }),
                k = p && M && !N;
            return (0, i.jsx)(o.FocusRing, {
                children: (0, i.jsx)("button", {
                    ...R,
                    className: s(_.emojiItem, {
                        [_.emojiItemLarge]: u,
                        [_.emojiItemMedium]: d,
                        [_.emojiItemSelected]: c,
                        [null != A ? A : ""]: c,
                        [_.emojiItemDisabled]: p && !M,
                        [_.showPulse]: h
                    }),
                    "data-type": m.PickerContextMenuDataTypes.EMOJI,
                    "data-id": l.id,
                    "data-name": l.name,
                    ref: t,
                    children: (0, i.jsx)(S.default, {
                        "aria-label": (n = l.allNamesString, ((null == O ? void 0 : O.name) != null && (n = C.default.Messages.EMOJI_FROM_GUILD_LABEL.format({
                            names: n,
                            guildName: O.name
                        })), a) ? C.default.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
                            names: n
                        }) : n),
                        columnIndex: x,
                        rowIndex: y,
                        emoji: l,
                        size: T,
                        surrogateCodePoint: I,
                        allowAnimatedEmoji: v,
                        isLocked: k
                    })
                })
            })
        });

    function v(e) {
        let {
            descriptor: t,
            emojiItemKey: a,
            isInspected: s,
            rowIndex: f,
            channelGuildId: m,
            onInspect: E,
            onSelect: g,
            isScrolling: S,
            isUsingKeyboardNavigation: _,
            showEmojiFavoriteTooltip: v,
            surrogateCodePoint: A,
            selectedItemClassName: N,
            getEmojiItemProps: R,
            isMediumSize: O,
            isLargeSize: M,
            pulseItemKey: k,
            allowAnimatedEmoji: L,
            setPulseItemKey: P,
            messageId: b,
            isBurstReaction: j,
            rowPosition: U,
            inNitroLockedSection: D
        } = e, [w, F] = l.useState(""), G = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), H = (0, r.useStateFromStores)([c.default], () => c.default.getDisambiguatedEmojiContext(m), [m]), B = l.useRef(null), {
            emoji: V,
            size: K,
            isDisabled: W,
            columnIndex: Y
        } = t, z = e => {
            if (e.stopPropagation(), S.current || _.current) return;
            let n = e.altKey;
            n && !c.default.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(V) && P(a), (0, h.hideHotspot)(h.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), g(t, {
                isFinalSelection: !e.shiftKey,
                toggleFavorite: n
            })
        }, Z = () => {
            !S.current && !_.current && E(t)
        }, J = e => {
            (0, u.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("367343").then(n.bind(n, "367343"));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            })
        }, Q = function() {
            var e;
            let {
                onMouseEnter: t,
                onMouseLeave: n
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                ref: r,
                tabIndex: o,
                onFocus: u,
                ...d
            } = null !== (e = R(Y, f)) && void 0 !== e ? e : {};
            return (0, l.createElement)("li", {
                ...d,
                key: a,
                ref: B
            }, w !== T(Y, f) && (0, i.jsx)(I, {
                ref: r,
                emoji: V,
                isFavorite: H.isFavoriteEmojiWithoutFetchingLatest(V),
                isLargeSize: M,
                isMediumSize: O,
                isInspected: s,
                isDisabled: W,
                showPulse: k === a,
                allowAnimatedEmoji: L,
                onFocus: null != u ? u : Z,
                onMouseMove: Z,
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: e => {
                    if (null != B.current && null != U && null != b && !e.shiftKey && null != V.name && j && !G && L) {
                        let e = null == V.id ? p.default.convertNameToSurrogate(V.name) : V.name,
                            t = B.current.getBoundingClientRect();
                        t.x = U.x + (Y + 1) * K, F(T(Y, f)), (0, x.addReactionPickerAnimation)(b, e, V.id, t)
                    }
                    z(e)
                },
                onContextMenu: J,
                tabIndex: o,
                columnIndex: Y,
                rowIndex: f,
                size: K,
                surrogateCodePoint: A,
                selectedItemClassName: N,
                inNitroLockedSection: D
            }))
        };
        return v ? (0, i.jsx)(o.Tooltip, {
            text: C.default.Messages.EMOJI_FAVORITE_TOOLTIP.format({
                key: (0, y.isMac)() ? "Opt" : "Alt"
            }),
            position: "top",
            delay: 200,
            children: e => Q(e)
        }, a) : Q()
    }
}