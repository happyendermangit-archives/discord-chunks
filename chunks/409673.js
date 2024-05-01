function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PreviewButton: function() {
            return y
        },
        SecondaryActionButton: function() {
            return M
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("924826"),
        l = n("442837"),
        u = n("846519"),
        d = n("692547"),
        _ = n("481060"),
        c = n("596454"),
        E = n("607070"),
        I = n("745510"),
        T = n("594174"),
        f = n("225196"),
        S = n("887208"),
        h = n("897353"),
        A = n("729285"),
        m = n("632184"),
        N = n("208049"),
        p = n("763296"),
        O = n("697426"),
        R = n("242291"),
        C = n("706667"),
        g = n("286654"),
        L = n("675654"),
        v = n("689938"),
        D = n("463644");

    function M(e) {
        let {
            disabled: t = !1,
            onClick: n,
            text: r,
            children: a,
            tooltipPosition: o = "top"
        } = e;
        return (0, i.jsx)(_.Tooltip, {
            text: r,
            position: o,
            children: e => (0, i.jsx)(_.Clickable, {
                ...e,
                "aria-label": r,
                className: s()(D.secondaryButton, {
                    [D.buttonDisabled]: t
                }),
                onClick: n,
                children: a
            })
        })
    }

    function y(e) {
        let {
            sound: t,
            previewSound: n,
            disabled: r = !1,
            tooltipPosition: a = "top"
        } = e;
        return (0, i.jsx)(M, {
            tooltipPosition: a,
            disabled: r,
            onClick: function(e) {
                e.stopPropagation(), e.currentTarget.blur(), n()
            },
            text: v.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                emojiName: t.emojiName,
                soundName: t.name
            }),
            children: (0, i.jsx)(m.default, {
                className: D.secondaryIcon
            })
        })
    }
    t.default = r.forwardRef(function(e, t) {
        var n, a, m;
        let {
            sound: P,
            channel: U,
            className: b,
            focused: G,
            forceSecondaryActions: w = !1,
            interactive: B = !0,
            enableSecondaryActions: k = !1,
            suppressPlaySound: V,
            onMouseEnter: x,
            onSelectItem: F,
            analyticsLocations: H,
            buttonOverlay: Y = O.SoundButtonOverlay.PLAY,
            ...j
        } = e, {
            soundId: W,
            name: K,
            emojiId: z,
            emojiName: Z
        } = P, X = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()), Q = (0, g.useSoundButtonContextMenu)(P, null == U ? void 0 : U.guild_id), {
            playSoundboardSound: q,
            previewSound: J,
            isPlayingSound: $
        } = (0, C.default)(P, null !== (n = null == U ? void 0 : U.id) && void 0 !== n ? n : null), {
            createMultipleConfettiAt: ee
        } = r.useContext(I.ConfettiCannonContext), et = r.useRef(null);
        let en = (a = P.soundId, m = et.current, r.useMemo(() => {
                if (null == m || "1" !== a) return {
                    x: 0,
                    y: 0
                };
                let e = m.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                }
            }, [m, a])),
            ei = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion),
            er = r.useRef(.01),
            ea = r.useRef(new u.Interval),
            es = "1" === P.soundId,
            eo = (0, l.useStateFromStores)([p.default], () => p.default.isFavoriteSound(W), [W]),
            el = "sound-".concat(P.soundId),
            eu = (0, o.useListItem)(el),
            ed = null != z || null != Z,
            e_ = !(0, R.canUseSoundboardSound)(X, P, U),
            ec = w || k && !e_;

        function eE(e) {
            e.stopPropagation(), e.currentTarget.blur(), eo ? (0, N.removeFavoriteSound)(W) : (0, N.addFavoriteSound)(W)
        }

        function eI() {
            return (0, i.jsx)(M, {
                disabled: !B && !w,
                onClick: eE,
                text: v.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                    emojiName: P.emojiName,
                    soundName: P.name
                }),
                children: eo ? (0, i.jsx)(S.default, {
                    className: s()(D.secondaryIcon, D.favoriteIconFavorite),
                    color: d.default.unsafe_rawColors.GOLD.css
                }) : (0, i.jsx)(f.default, {
                    className: D.secondaryIcon
                })
            })
        }
        let eT = y({
                sound: P,
                previewSound: J,
                disabled: e_
            }),
            ef = () => (0, i.jsxs)("div", {
                className: D.buttonOverlay,
                children: [(0, i.jsx)("div", {
                    className: s()({
                        [D.buttonOverlayBackground]: !V
                    })
                }), (0, i.jsxs)("div", {
                    className: D.buttonOverlayActions,
                    children: [ec && eT, !V && !e_ && (0, i.jsx)(h.default, {
                        className: D.playIcon
                    }), ec && eI()]
                })]
            });
        return r.useEffect(() => {
            let e = ea.current;
            return es && e.start(1e3, () => {
                er.current = Math.max(er.current - .01, .01)
            }), () => e.stop()
        }, [es]), (0, i.jsxs)("li", {
            ref: t,
            className: D.soundButtonWrapper,
            onMouseEnter: x,
            children: [(0, i.jsxs)(_.ClickableContainer, {
                ...j,
                buttonProps: {
                    ...eu,
                    id: el,
                    role: "button"
                },
                "aria-label": v.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                    emojiName: P.emojiName,
                    soundName: P.name
                }),
                className: s()(b, D.soundButton, {
                    [D.playing]: $,
                    [D.hoverActiveBackground]: V,
                    [D.soundButtonInteractive]: B,
                    [D.buttonDisabled]: !B && !w,
                    [D.premiumDisabled]: e_ && !w,
                    [D.buttonDisabledSecondaryActionsEnabled]: !B && w,
                    [D.focused]: B && G
                }),
                onClick: function() {
                    if (es && !ei && (er.current = Math.min(er.current + .01, .1), Math.random() < er.current && ee(en.x, en.y, void 0, void 0, {
                            sprite: L.DUCK_CONFETTI_SPRITE
                        })), null != F) {
                        F();
                        return
                    }
                    V || q(H)
                },
                onContextMenu: k && !e_ ? Q : void 0,
                children: [(0, i.jsxs)("div", {
                    className: D.soundInfo,
                    "aria-hidden": !0,
                    ref: et,
                    children: [ed && (0, i.jsx)(c.default, {
                        emojiId: z,
                        emojiName: Z,
                        className: D.emoji
                    }), (0, i.jsx)(_.Text, {
                        variant: "text-xs/medium",
                        color: B ? "header-primary" : "text-muted",
                        className: s()(D.soundName, {
                            [D.hasEmoji]: ed
                        }),
                        children: K
                    })]
                }), function() {
                    switch (Y) {
                        case O.SoundButtonOverlay.ADD:
                            return (0, i.jsxs)("div", {
                                className: D.addButtonOverlay,
                                children: [(0, i.jsx)("div", {
                                    className: D.buttonOverlayBackground
                                }), (0, i.jsxs)("div", {
                                    className: D.buttonOverlayActions,
                                    children: [eT, (0, i.jsxs)("div", {
                                        className: D.addButton,
                                        children: [(0, i.jsx)(A.default, {
                                            className: D.plusSign
                                        }), (0, i.jsx)(_.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: v.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                        })]
                                    }), ec && eI()]
                                })]
                            });
                        case O.SoundButtonOverlay.PLAY:
                        default:
                            return ef()
                    }
                }()]
            }), !P.available && (0, i.jsx)(_.Tooltip, {
                text: v.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                children: e => (0, i.jsx)("div", {
                    className: D.unavailableTooltip,
                    ...e
                })
            })]
        })
    })
}