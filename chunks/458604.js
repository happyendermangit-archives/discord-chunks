function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("272030"),
        d = n("206230"),
        c = n("385976"),
        f = n("858619"),
        m = n("867805"),
        p = n("246511"),
        h = n("139321"),
        E = n("140708"),
        g = n("305961"),
        C = n("773336"),
        S = n("429569"),
        T = n("215550"),
        v = n("782340"),
        I = n("348473");
    let _ = (e, t) => "".concat(e, ":").concat(t),
        N = i.forwardRef(function(e, t) {
            let n, {
                    emoji: i,
                    isFavorite: a,
                    isLargeSize: u,
                    isMediumSize: d,
                    isInspected: c,
                    isDisabled: m,
                    showPulse: h,
                    columnIndex: E,
                    rowIndex: C,
                    size: _,
                    surrogateCodePoint: N,
                    allowAnimatedEmoji: A,
                    selectedItemClassName: x,
                    inNitroLockedSection: y,
                    ...O
                } = e,
                R = (0, r.useStateFromStores)([g.default], () => i.type === f.EmojiTypes.GUILD ? g.default.getGuild(i.guildId) : void 0, [i]),
                {
                    enabled: M
                } = S.default.useExperiment({
                    location: "Emoji Picker List"
                }, {
                    autoTrackExposure: m
                }),
                L = m && M && !y;
            return (0, l.jsx)(o.FocusRing, {
                children: (0, l.jsx)("button", {
                    ...O,
                    className: s(I.emojiItem, {
                        [I.emojiItemLarge]: u,
                        [I.emojiItemMedium]: d,
                        [I.emojiItemSelected]: c,
                        [null != x ? x : ""]: c,
                        [I.emojiItemDisabled]: m && !M,
                        [I.showPulse]: h
                    }),
                    "data-type": p.PickerContextMenuDataTypes.EMOJI,
                    "data-id": i.id,
                    "data-name": i.name,
                    ref: t,
                    children: (0, l.jsx)(T.default, {
                        "aria-label": (n = i.allNamesString, ((null == R ? void 0 : R.name) != null && (n = v.default.Messages.EMOJI_FROM_GUILD_LABEL.format({
                            names: n,
                            guildName: R.name
                        })), a) ? v.default.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
                            names: n
                        }) : n),
                        columnIndex: E,
                        rowIndex: C,
                        emoji: i,
                        size: _,
                        surrogateCodePoint: N,
                        allowAnimatedEmoji: A,
                        isLocked: L
                    })
                })
            })
        });

    function A(e) {
        let {
            descriptor: t,
            emojiItemKey: a,
            isInspected: s,
            rowIndex: f,
            channelGuildId: p,
            onInspect: g,
            onSelect: S,
            isScrolling: T,
            isUsingKeyboardNavigation: I,
            showEmojiFavoriteTooltip: A,
            surrogateCodePoint: x,
            selectedItemClassName: y,
            getEmojiItemProps: O,
            isMediumSize: R,
            isLargeSize: M,
            pulseItemKey: L,
            allowAnimatedEmoji: P,
            setPulseItemKey: b,
            messageId: j,
            isBurstReaction: U,
            rowPosition: D,
            inNitroLockedSection: k
        } = e, [w, F] = i.useState(""), G = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), B = (0, r.useStateFromStores)([c.default], () => c.default.getDisambiguatedEmojiContext(p), [p]), H = i.useRef(null), {
            emoji: V,
            size: K,
            isDisabled: W,
            columnIndex: Y
        } = t, z = e => {
            if (e.stopPropagation(), T.current || I.current) return;
            let n = e.altKey;
            n && !c.default.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(V) && b(a), (0, h.hideHotspot)(h.HotspotLocations.FAVORITE_EMOJI_TOOLTIP), S(t, {
                isFinalSelection: !e.shiftKey,
                toggleFavorite: n
            })
        }, Z = () => {
            !T.current && !I.current && g(t)
        }, J = e => {
            (0, u.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("367343").then(n.bind(n, "367343"));
                return t => (0, l.jsx)(e, {
                    ...t
                })
            })
        }, q = function() {
            var e;
            let {
                onMouseEnter: t,
                onMouseLeave: n
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
                ref: r,
                tabIndex: o,
                onFocus: u,
                ...d
            } = null !== (e = O(Y, f)) && void 0 !== e ? e : {};
            return (0, i.createElement)("li", {
                ...d,
                key: a,
                ref: H
            }, w !== _(Y, f) && (0, l.jsx)(N, {
                ref: r,
                emoji: V,
                isFavorite: B.isFavoriteEmojiWithoutFetchingLatest(V),
                isLargeSize: M,
                isMediumSize: R,
                isInspected: s,
                isDisabled: W,
                showPulse: L === a,
                allowAnimatedEmoji: P,
                onFocus: null != u ? u : Z,
                onMouseMove: Z,
                onMouseEnter: t,
                onMouseLeave: n,
                onClick: e => {
                    if (null != H.current && null != D && null != j && !e.shiftKey && null != V.name && U && !G && P) {
                        let e = null == V.id ? m.default.convertNameToSurrogate(V.name) : V.name,
                            t = H.current.getBoundingClientRect();
                        t.x = D.x + (Y + 1) * K, F(_(Y, f)), (0, E.addReactionPickerAnimation)(j, e, V.id, t)
                    }
                    z(e)
                },
                onContextMenu: J,
                tabIndex: o,
                columnIndex: Y,
                rowIndex: f,
                size: K,
                surrogateCodePoint: x,
                selectedItemClassName: y,
                inNitroLockedSection: k
            }))
        };
        return A ? (0, l.jsx)(o.Tooltip, {
            text: v.default.Messages.EMOJI_FAVORITE_TOOLTIP.format({
                key: (0, C.isMac)() ? "Opt" : "Alt"
            }),
            position: "top",
            delay: 200,
            children: e => q(e)
        }, a) : q()
    }
}