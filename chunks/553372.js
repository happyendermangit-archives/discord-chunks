function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SecondaryActionButton: function() {
            return M
        },
        PreviewButton: function() {
            return k
        },
        default: function() {
            return L
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("974667"),
        o = n("446674"),
        u = n("862337"),
        d = n("669491"),
        c = n("77078"),
        f = n("430568"),
        m = n("206230"),
        p = n("526887"),
        h = n("697218"),
        x = n("118849"),
        E = n("671434"),
        y = n("132755"),
        g = n("151185"),
        S = n("368121"),
        C = n("305122"),
        T = n("235004"),
        _ = n("389480"),
        I = n("78581"),
        v = n("23106"),
        A = n("796864"),
        N = n("172858"),
        R = n("782340"),
        O = n("802501");

    function M(e) {
        let {
            disabled: t = !1,
            onClick: n,
            text: l,
            children: a,
            tooltipPosition: r = "top"
        } = e;
        return (0, i.jsx)(c.Tooltip, {
            text: l,
            position: r,
            children: e => (0, i.jsx)(c.Clickable, {
                ...e,
                "aria-label": l,
                className: s(O.secondaryButton, {
                    [O.buttonDisabled]: t
                }),
                onClick: n,
                children: a
            })
        })
    }

    function k(e) {
        let {
            sound: t,
            previewSound: n,
            disabled: l = !1,
            tooltipPosition: a = "top"
        } = e;
        return (0, i.jsx)(M, {
            tooltipPosition: a,
            disabled: l,
            onClick: function(e) {
                e.stopPropagation(), e.currentTarget.blur(), n()
            },
            text: R.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                emojiName: t.emojiName,
                soundName: t.name
            }),
            children: (0, i.jsx)(S.default, {
                className: O.secondaryIcon
            })
        })
    }
    var L = l.forwardRef(function(e, t) {
        var n, a, S;
        let {
            sound: L,
            channel: P,
            className: b,
            focused: j,
            forceSecondaryActions: U = !1,
            interactive: D = !0,
            enableSecondaryActions: w = !1,
            suppressPlaySound: F,
            onMouseEnter: G,
            onSelectItem: H,
            analyticsLocations: B,
            buttonOverlay: V = _.SoundButtonOverlay.PLAY,
            ...K
        } = e, {
            soundId: W,
            name: Y,
            emojiId: z,
            emojiName: Q
        } = L, Z = (0, o.useStateFromStores)([h.default], () => h.default.getCurrentUser()), q = (0, A.useSoundButtonContextMenu)(L, null == P ? void 0 : P.guild_id), {
            playSoundboardSound: J,
            previewSound: X,
            isPlayingSound: $
        } = (0, v.default)(L, null !== (n = null == P ? void 0 : P.id) && void 0 !== n ? n : null), {
            createMultipleConfettiAt: ee
        } = l.useContext(p.ConfettiCannonContext), et = l.useRef(null);
        let en = (a = L.soundId, S = et.current, l.useMemo(() => {
                if (null == S || "1" !== a) return {
                    x: 0,
                    y: 0
                };
                let e = S.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                }
            }, [S, a])),
            ei = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion),
            el = l.useRef(.01),
            ea = l.useRef(new u.Interval),
            es = "1" === L.soundId,
            er = (0, o.useStateFromStores)([T.default], () => T.default.isFavoriteSound(W), [W]),
            eo = "sound-".concat(L.soundId),
            eu = (0, r.useListItem)(eo),
            ed = null != z || null != Q,
            ec = !(0, I.canUseSoundboardSound)(Z, L, P),
            ef = U || w && !ec;

        function em(e) {
            e.stopPropagation(), e.currentTarget.blur(), er ? (0, C.removeFavoriteSound)(W) : (0, C.addFavoriteSound)(W)
        }

        function ep() {
            return (0, i.jsx)(M, {
                disabled: !D && !U,
                onClick: em,
                text: R.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                    emojiName: L.emojiName,
                    soundName: L.name
                }),
                children: er ? (0, i.jsx)(E.default, {
                    className: s(O.secondaryIcon, O.favoriteIconFavorite),
                    color: d.default.unsafe_rawColors.GOLD.css
                }) : (0, i.jsx)(x.default, {
                    className: O.secondaryIcon
                })
            })
        }
        let eh = k({
                sound: L,
                previewSound: X,
                disabled: ec
            }),
            ex = () => (0, i.jsxs)("div", {
                className: O.buttonOverlay,
                children: [(0, i.jsx)("div", {
                    className: s({
                        [O.buttonOverlayBackground]: !F
                    })
                }), (0, i.jsxs)("div", {
                    className: O.buttonOverlayActions,
                    children: [ef && eh, !F && !ec && (0, i.jsx)(y.default, {
                        className: O.playIcon
                    }), ef && ep()]
                })]
            });
        return l.useEffect(() => {
            let e = ea.current;
            return es && e.start(1e3, () => {
                el.current = Math.max(el.current - .01, .01)
            }), () => e.stop()
        }, [es]), (0, i.jsxs)("li", {
            ref: t,
            className: O.soundButtonWrapper,
            onMouseEnter: G,
            children: [(0, i.jsxs)(c.ClickableContainer, {
                ...K,
                buttonProps: {
                    ...eu,
                    id: eo,
                    role: "button"
                },
                "aria-label": R.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                    emojiName: L.emojiName,
                    soundName: L.name
                }),
                className: s(b, O.soundButton, {
                    [O.playing]: $,
                    [O.hoverActiveBackground]: F,
                    [O.soundButtonInteractive]: D,
                    [O.buttonDisabled]: !D && !U,
                    [O.premiumDisabled]: ec && !U,
                    [O.buttonDisabledSecondaryActionsEnabled]: !D && U,
                    [O.focused]: D && j
                }),
                onClick: function() {
                    if (es && !ei && (el.current = Math.min(el.current + .01, .1), Math.random() < el.current && ee(en.x, en.y, void 0, void 0, {
                            sprite: N.DUCK_CONFETTI_SPRITE
                        })), null != H) {
                        H();
                        return
                    }
                    F || J(B)
                },
                onContextMenu: w && !ec ? q : void 0,
                children: [(0, i.jsxs)("div", {
                    className: O.soundInfo,
                    "aria-hidden": !0,
                    ref: et,
                    children: [ed && (0, i.jsx)(f.default, {
                        emojiId: z,
                        emojiName: Q,
                        className: O.emoji
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: D ? "header-primary" : "text-muted",
                        className: s(O.soundName, {
                            [O.hasEmoji]: ed
                        }),
                        children: Y
                    })]
                }), function() {
                    switch (V) {
                        case _.SoundButtonOverlay.ADD:
                            return (0, i.jsxs)("div", {
                                className: O.addButtonOverlay,
                                children: [(0, i.jsx)("div", {
                                    className: O.buttonOverlayBackground
                                }), (0, i.jsxs)("div", {
                                    className: O.buttonOverlayActions,
                                    children: [eh, (0, i.jsxs)("div", {
                                        className: O.addButton,
                                        children: [(0, i.jsx)(g.default, {
                                            className: O.plusSign
                                        }), (0, i.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: R.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                        })]
                                    }), ef && ep()]
                                })]
                            });
                        case _.SoundButtonOverlay.PLAY:
                        default:
                            return ex()
                    }
                }()]
            }), !L.available && (0, i.jsx)(c.Tooltip, {
                text: R.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                children: e => (0, i.jsx)("div", {
                    className: O.unavailableTooltip,
                    ...e
                })
            })]
        })
    })
}