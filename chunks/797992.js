function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PreviewButton: function() {
            return M
        },
        SecondaryActionButton: function() {
            return L
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("762624"),
        u = n("898511"),
        s = n("945816"),
        l = n("447515"),
        c = n("784184"),
        f = n("765457"),
        d = n("622780"),
        _ = n("18486"),
        E = n("208454"),
        p = n("98682"),
        m = n("995254"),
        y = n("328545"),
        I = n("210295"),
        h = n("893427"),
        O = n("14253"),
        T = n("452700"),
        S = n("686309"),
        v = n("141526"),
        g = n("940070"),
        A = n("167633"),
        b = n("332243"),
        N = n("941504"),
        R = n("247046");

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                C(e, t, n[t])
            })
        }
        return e
    }

    function D(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function L(e) {
        var t = e.disabled,
            n = void 0 !== t && t,
            o = e.onClick,
            a = e.text,
            u = e.children,
            s = e.tooltipPosition;
        return r.createElement(c.Tooltip, {
            text: a,
            position: void 0 === s ? "top" : s
        }, function(e) {
            return r.createElement(c.Clickable, D(P({}, e), {
                "aria-label": a,
                className: i()(R.secondaryButton, C({}, R.buttonDisabled, n)),
                onClick: o
            }), u)
        })
    }

    function M(e) {
        var t = e.sound,
            n = e.previewSound,
            o = e.disabled,
            i = e.tooltipPosition;
        return r.createElement(L, {
            tooltipPosition: void 0 === i ? "top" : i,
            disabled: void 0 !== o && o,
            onClick: function(e) {
                e.stopPropagation(), e.currentTarget.blur(), n()
            },
            text: N.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                emojiName: t.emojiName,
                soundName: t.name
            })
        }, r.createElement(h.default, {
            className: R.secondaryIcon
        }))
    }
    t.default = r.forwardRef(function(e, t) {
        var n, o, h, U, w = e.sound,
            k = e.channel,
            G = e.className,
            B = e.focused,
            j = e.forceSecondaryActions,
            F = void 0 !== j && j,
            V = e.interactive,
            H = void 0 === V || V,
            x = e.enableSecondaryActions,
            Y = void 0 !== x && x,
            W = e.suppressPlaySound,
            K = e.onMouseEnter,
            z = e.onSelectItem,
            X = e.analyticsLocations,
            q = e.buttonOverlay,
            Q = void 0 === q ? S.SoundButtonOverlay.PLAY : q,
            J = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["sound", "channel", "className", "focused", "forceSecondaryActions", "interactive", "enableSecondaryActions", "suppressPlaySound", "onMouseEnter", "onSelectItem", "analyticsLocations", "buttonOverlay"]),
            Z = w.soundId,
            $ = w.name,
            ee = w.emojiId,
            et = w.emojiName,
            en = (0, u.useStateFromStores)([E.default], function() {
                return E.default.getCurrentUser()
            }),
            er = (0, A.useSoundButtonContextMenu)(w, null == k ? void 0 : k.guild_id),
            eo = (0, g.default)(w, null !== (h = null == k ? void 0 : k.id) && void 0 !== h ? h : null),
            ei = eo.playSoundboardSound,
            ea = eo.previewSound,
            eu = eo.isPlayingSound,
            es = r.useContext(_.ConfettiCannonContext).createMultipleConfettiAt,
            el = r.useRef(null);
        var ec = (n = w.soundId, o = el.current, r.useMemo(function() {
                if (null == o || "1" !== n) return {
                    x: 0,
                    y: 0
                };
                var e = o.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                }
            }, [o, n])),
            ef = (0, u.useStateFromStores)([d.default], function() {
                return d.default.useReducedMotion
            }),
            ed = r.useRef(.01),
            e_ = r.useRef(new s.Interval),
            eE = "1" === w.soundId,
            ep = (0, u.useStateFromStores)([T.default], function() {
                return T.default.isFavoriteSound(Z)
            }, [Z]),
            em = "sound-".concat(w.soundId),
            ey = (0, a.useListItem)(em),
            eI = null != ee || null != et,
            eh = !(0, v.canUseSoundboardSound)(en, w, k),
            eO = F || Y && !eh;

        function eT(e) {
            e.stopPropagation(), e.currentTarget.blur(), ep ? (0, O.removeFavoriteSound)(Z) : (0, O.addFavoriteSound)(Z)
        }

        function eS() {
            return r.createElement(L, {
                disabled: !H && !F,
                onClick: eT,
                text: N.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                    emojiName: w.emojiName,
                    soundName: w.name
                })
            }, ep ? r.createElement(m.default, {
                className: i()(R.secondaryIcon, R.favoriteIconFavorite),
                color: l.default.unsafe_rawColors.GOLD.css
            }) : r.createElement(p.default, {
                className: R.secondaryIcon
            }))
        }
        var ev = M({
                sound: w,
                previewSound: ea,
                disabled: eh
            }),
            eg = function() {
                return r.createElement("div", {
                    className: R.buttonOverlay
                }, r.createElement("div", {
                    className: i()(C({}, R.buttonOverlayBackground, !W))
                }), r.createElement("div", {
                    className: R.buttonOverlayActions
                }, eO && ev, !W && !eh && r.createElement(y.default, {
                    className: R.playIcon
                }), eO && eS()))
            };
        return r.useEffect(function() {
            var e = e_.current;
            return eE && e.start(1e3, function() {
                    ed.current = Math.max(ed.current - .01, .01)
                }),
                function() {
                    return e.stop()
                }
        }, [eE]), r.createElement("li", {
            ref: t,
            className: R.soundButtonWrapper,
            onMouseEnter: K
        }, r.createElement(c.ClickableContainer, D(P({}, J), {
            buttonProps: D(P({}, ey), {
                id: em,
                role: "button"
            }),
            "aria-label": N.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                emojiName: w.emojiName,
                soundName: w.name
            }),
            className: i()(G, R.soundButton, (C(U = {}, R.playing, eu), C(U, R.hoverActiveBackground, W), C(U, R.soundButtonInteractive, H), C(U, R.buttonDisabled, !H && !F), C(U, R.premiumDisabled, eh && !F), C(U, R.buttonDisabledSecondaryActionsEnabled, !H && F), C(U, R.focused, H && B), U)),
            onClick: function() {
                if (eE && !ef && (ed.current = Math.min(ed.current + .01, .1), Math.random() < ed.current && es(ec.x, ec.y, void 0, void 0, {
                        sprite: b.DUCK_CONFETTI_SPRITE
                    })), null != z) {
                    z();
                    return
                }
                W || ei(X)
            },
            onContextMenu: Y && !eh ? er : void 0
        }), r.createElement("div", {
            className: R.soundInfo,
            "aria-hidden": !0,
            ref: el
        }, eI && r.createElement(f.default, {
            emojiId: ee,
            emojiName: et,
            className: R.emoji
        }), r.createElement(c.Text, {
            variant: "text-xs/medium",
            color: H ? "header-primary" : "text-muted",
            className: i()(R.soundName, C({}, R.hasEmoji, eI))
        }, $)), function() {
            switch (Q) {
                case S.SoundButtonOverlay.ADD:
                    return r.createElement("div", {
                        className: R.addButtonOverlay
                    }, r.createElement("div", {
                        className: R.buttonOverlayBackground
                    }), r.createElement("div", {
                        className: R.buttonOverlayActions
                    }, ev, r.createElement("div", {
                        className: R.addButton
                    }, r.createElement(I.default, {
                        className: R.plusSign
                    }), r.createElement(c.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary"
                    }, N.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD)), eO && eS()));
                case S.SoundButtonOverlay.PLAY:
                default:
                    return eg()
            }
        }()), !w.available && r.createElement(c.Tooltip, {
            text: N.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST
        }, function(e) {
            return r.createElement("div", P({
                className: R.unavailableTooltip
            }, e))
        }))
    })
}