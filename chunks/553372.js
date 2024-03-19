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
        p = n("206230"),
        m = n("526887"),
        h = n("697218"),
        x = n("118849"),
        E = n("671434"),
        y = n("132755"),
        g = n("151185"),
        S = n("368121"),
        C = n("305122"),
        _ = n("235004"),
        I = n("389480"),
        T = n("78581"),
        v = n("23106"),
        N = n("796864"),
        A = n("172858"),
        O = n("782340"),
        R = n("802501");

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
                className: s(R.secondaryButton, {
                    [R.buttonDisabled]: t
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
            text: O.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                emojiName: t.emojiName,
                soundName: t.name
            }),
            children: (0, i.jsx)(S.default, {
                className: R.secondaryIcon
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
            onSelectItem: B,
            analyticsLocations: H,
            buttonOverlay: V = I.SoundButtonOverlay.PLAY,
            ...K
        } = e, {
            soundId: W,
            name: Y,
            emojiId: z,
            emojiName: Z
        } = L, J = (0, o.useStateFromStores)([h.default], () => h.default.getCurrentUser()), q = (0, N.useSoundButtonContextMenu)(L, null == P ? void 0 : P.guild_id), {
            playSoundboardSound: X,
            previewSound: Q,
            isPlayingSound: $
        } = (0, v.default)(L, null !== (n = null == P ? void 0 : P.id) && void 0 !== n ? n : null), {
            createMultipleConfettiAt: ee
        } = l.useContext(m.ConfettiCannonContext), et = l.useRef(null);
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
            ei = (0, o.useStateFromStores)([p.default], () => p.default.useReducedMotion),
            el = l.useRef(.01),
            ea = l.useRef(new u.Interval),
            es = "1" === L.soundId,
            er = (0, o.useStateFromStores)([_.default], () => _.default.isFavoriteSound(W), [W]),
            eo = "sound-".concat(L.soundId),
            eu = (0, r.useListItem)(eo),
            ed = null != z || null != Z,
            ec = !(0, T.canUseSoundboardSound)(J, L, P),
            ef = U || w && !ec;

        function ep(e) {
            e.stopPropagation(), e.currentTarget.blur(), er ? (0, C.removeFavoriteSound)(W) : (0, C.addFavoriteSound)(W)
        }

        function em() {
            return (0, i.jsx)(M, {
                disabled: !D && !U,
                onClick: ep,
                text: O.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                    emojiName: L.emojiName,
                    soundName: L.name
                }),
                children: er ? (0, i.jsx)(E.default, {
                    className: s(R.secondaryIcon, R.favoriteIconFavorite),
                    color: d.default.unsafe_rawColors.GOLD.css
                }) : (0, i.jsx)(x.default, {
                    className: R.secondaryIcon
                })
            })
        }
        let eh = k({
                sound: L,
                previewSound: Q,
                disabled: ec
            }),
            ex = () => (0, i.jsxs)("div", {
                className: R.buttonOverlay,
                children: [(0, i.jsx)("div", {
                    className: s({
                        [R.buttonOverlayBackground]: !F
                    })
                }), (0, i.jsxs)("div", {
                    className: R.buttonOverlayActions,
                    children: [ef && eh, !F && !ec && (0, i.jsx)(y.default, {
                        className: R.playIcon
                    }), ef && em()]
                })]
            });
        return l.useEffect(() => {
            let e = ea.current;
            return es && e.start(1e3, () => {
                el.current = Math.max(el.current - .01, .01)
            }), () => e.stop()
        }, [es]), (0, i.jsxs)("li", {
            ref: t,
            className: R.soundButtonWrapper,
            onMouseEnter: G,
            children: [(0, i.jsxs)(c.ClickableContainer, {
                ...K,
                buttonProps: {
                    ...eu,
                    id: eo,
                    role: "button"
                },
                "aria-label": O.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                    emojiName: L.emojiName,
                    soundName: L.name
                }),
                className: s(b, R.soundButton, {
                    [R.playing]: $,
                    [R.hoverActiveBackground]: F,
                    [R.soundButtonInteractive]: D,
                    [R.buttonDisabled]: !D && !U,
                    [R.premiumDisabled]: ec && !U,
                    [R.buttonDisabledSecondaryActionsEnabled]: !D && U,
                    [R.focused]: D && j
                }),
                onClick: function() {
                    if (es && !ei && (el.current = Math.min(el.current + .01, .1), Math.random() < el.current && ee(en.x, en.y, void 0, void 0, {
                            sprite: A.DUCK_CONFETTI_SPRITE
                        })), null != B) {
                        B();
                        return
                    }
                    F || X(H)
                },
                onContextMenu: w && !ec ? q : void 0,
                children: [(0, i.jsxs)("div", {
                    className: R.soundInfo,
                    "aria-hidden": !0,
                    ref: et,
                    children: [ed && (0, i.jsx)(f.default, {
                        emojiId: z,
                        emojiName: Z,
                        className: R.emoji
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: D ? "header-primary" : "text-muted",
                        className: s(R.soundName, {
                            [R.hasEmoji]: ed
                        }),
                        children: Y
                    })]
                }), function() {
                    switch (V) {
                        case I.SoundButtonOverlay.ADD:
                            return (0, i.jsxs)("div", {
                                className: R.addButtonOverlay,
                                children: [(0, i.jsx)("div", {
                                    className: R.buttonOverlayBackground
                                }), (0, i.jsxs)("div", {
                                    className: R.buttonOverlayActions,
                                    children: [eh, (0, i.jsxs)("div", {
                                        className: R.addButton,
                                        children: [(0, i.jsx)(g.default, {
                                            className: R.plusSign
                                        }), (0, i.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: O.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                        })]
                                    }), ef && em()]
                                })]
                            });
                        case I.SoundButtonOverlay.PLAY:
                        default:
                            return ex()
                    }
                }()]
            }), !L.available && (0, i.jsx)(c.Tooltip, {
                text: O.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                children: e => (0, i.jsx)("div", {
                    className: R.unavailableTooltip,
                    ...e
                })
            })]
        })
    })
}