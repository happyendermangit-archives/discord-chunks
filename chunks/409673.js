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
        s = n("120356"),
        a = n.n(s),
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
        D = n("689938"),
        v = n("247046");

    function M(e) {
        let {
            disabled: t = !1,
            onClick: n,
            text: r,
            children: s,
            tooltipPosition: o = "top"
        } = e;
        return (0, i.jsx)(_.Tooltip, {
            text: r,
            position: o,
            children: e => (0, i.jsx)(_.Clickable, {
                ...e,
                "aria-label": r,
                className: a()(v.secondaryButton, {
                    [v.buttonDisabled]: t
                }),
                onClick: n,
                children: s
            })
        })
    }

    function y(e) {
        let {
            sound: t,
            previewSound: n,
            disabled: r = !1,
            tooltipPosition: s = "top"
        } = e;
        return (0, i.jsx)(M, {
            tooltipPosition: s,
            disabled: r,
            onClick: function(e) {
                e.stopPropagation(), e.currentTarget.blur(), n()
            },
            text: D.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                emojiName: t.emojiName,
                soundName: t.name
            }),
            children: (0, i.jsx)(m.default, {
                className: v.secondaryIcon
            })
        })
    }
    t.default = r.forwardRef(function(e, t) {
        var n, s, m;
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
            emojiName: X
        } = P, Q = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()), q = (0, g.useSoundButtonContextMenu)(P, null == U ? void 0 : U.guild_id), {
            playSoundboardSound: Z,
            previewSound: J,
            isPlayingSound: $
        } = (0, C.default)(P, null !== (n = null == U ? void 0 : U.id) && void 0 !== n ? n : null), {
            createMultipleConfettiAt: ee
        } = r.useContext(I.ConfettiCannonContext), et = r.useRef(null);
        let en = (s = P.soundId, m = et.current, r.useMemo(() => {
                if (null == m || "1" !== s) return {
                    x: 0,
                    y: 0
                };
                let e = m.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                }
            }, [m, s])),
            ei = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion),
            er = r.useRef(.01),
            es = r.useRef(new u.Interval),
            ea = "1" === P.soundId,
            eo = (0, l.useStateFromStores)([p.default], () => p.default.isFavoriteSound(W), [W]),
            el = "sound-".concat(P.soundId),
            eu = (0, o.useListItem)(el),
            ed = null != z || null != X,
            e_ = !(0, R.canUseSoundboardSound)(Q, P, U),
            ec = w || k && !e_;

        function eE(e) {
            e.stopPropagation(), e.currentTarget.blur(), eo ? (0, N.removeFavoriteSound)(W) : (0, N.addFavoriteSound)(W)
        }

        function eI() {
            return (0, i.jsx)(M, {
                disabled: !B && !w,
                onClick: eE,
                text: D.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                    emojiName: P.emojiName,
                    soundName: P.name
                }),
                children: eo ? (0, i.jsx)(S.default, {
                    className: a()(v.secondaryIcon, v.favoriteIconFavorite),
                    color: d.default.unsafe_rawColors.GOLD.css
                }) : (0, i.jsx)(f.default, {
                    className: v.secondaryIcon
                })
            })
        }
        let eT = y({
                sound: P,
                previewSound: J,
                disabled: e_
            }),
            ef = () => (0, i.jsxs)("div", {
                className: v.buttonOverlay,
                children: [(0, i.jsx)("div", {
                    className: a()({
                        [v.buttonOverlayBackground]: !V
                    })
                }), (0, i.jsxs)("div", {
                    className: v.buttonOverlayActions,
                    children: [ec && eT, !V && !e_ && (0, i.jsx)(h.default, {
                        className: v.playIcon
                    }), ec && eI()]
                })]
            });
        return r.useEffect(() => {
            let e = es.current;
            return ea && e.start(1e3, () => {
                er.current = Math.max(er.current - .01, .01)
            }), () => e.stop()
        }, [ea]), (0, i.jsxs)("li", {
            ref: t,
            className: v.soundButtonWrapper,
            onMouseEnter: x,
            children: [(0, i.jsxs)(_.ClickableContainer, {
                ...j,
                buttonProps: {
                    ...eu,
                    id: el,
                    role: "button"
                },
                "aria-label": D.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                    emojiName: P.emojiName,
                    soundName: P.name
                }),
                className: a()(b, v.soundButton, {
                    [v.playing]: $,
                    [v.hoverActiveBackground]: V,
                    [v.soundButtonInteractive]: B,
                    [v.buttonDisabled]: !B && !w,
                    [v.premiumDisabled]: e_ && !w,
                    [v.buttonDisabledSecondaryActionsEnabled]: !B && w,
                    [v.focused]: B && G
                }),
                onClick: function() {
                    if (ea && !ei && (er.current = Math.min(er.current + .01, .1), Math.random() < er.current && ee(en.x, en.y, void 0, void 0, {
                            sprite: L.DUCK_CONFETTI_SPRITE
                        })), null != F) {
                        F();
                        return
                    }
                    V || Z(H)
                },
                onContextMenu: k && !e_ ? q : void 0,
                children: [(0, i.jsxs)("div", {
                    className: v.soundInfo,
                    "aria-hidden": !0,
                    ref: et,
                    children: [ed && (0, i.jsx)(c.default, {
                        emojiId: z,
                        emojiName: X,
                        className: v.emoji
                    }), (0, i.jsx)(_.Text, {
                        variant: "text-xs/medium",
                        color: B ? "header-primary" : "text-muted",
                        className: a()(v.soundName, {
                            [v.hasEmoji]: ed
                        }),
                        children: K
                    })]
                }), function() {
                    switch (Y) {
                        case O.SoundButtonOverlay.ADD:
                            return (0, i.jsxs)("div", {
                                className: v.addButtonOverlay,
                                children: [(0, i.jsx)("div", {
                                    className: v.buttonOverlayBackground
                                }), (0, i.jsxs)("div", {
                                    className: v.buttonOverlayActions,
                                    children: [eT, (0, i.jsxs)("div", {
                                        className: v.addButton,
                                        children: [(0, i.jsx)(A.default, {
                                            className: v.plusSign
                                        }), (0, i.jsx)(_.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: D.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD
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
                text: D.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                children: e => (0, i.jsx)("div", {
                    className: v.unavailableTooltip,
                    ...e
                })
            })]
        })
    })
}