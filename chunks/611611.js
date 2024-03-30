function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CustomGuildEmojiPopout: function() {
            return ee
        },
        EmojiPopoutList: function() {
            return et
        },
        GuildDetails: function() {
            return Z
        },
        MessageCustomEmojiPopout: function() {
            return $
        },
        MessageStandardEmojiPopout: function() {
            return J
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("383959"),
        u = n("898511"),
        s = n("639643"),
        l = n("784184"),
        c = n("322997"),
        f = n("765457"),
        d = n("649455"),
        _ = n("396586"),
        E = n("278982"),
        p = n("453724"),
        m = n("255176"),
        y = n("186606"),
        I = n("351468"),
        h = n("696923"),
        O = n("983405"),
        T = n("839032"),
        S = n("150736"),
        v = n("330545"),
        g = n("742971"),
        A = n("163291"),
        b = n("749762"),
        N = n("894288"),
        R = n("63116"),
        C = n("208454"),
        P = n("143953"),
        D = n("793570"),
        L = n("372844"),
        M = n("288509"),
        U = n("974052"),
        w = n("845265"),
        k = n("870331"),
        G = n("299529"),
        B = n("421960"),
        j = n("830721"),
        F = n("57709"),
        V = n("930350"),
        H = n("281767"),
        x = n("928204"),
        Y = n("868615"),
        W = n("941504"),
        K = n("163237");

    function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function X(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function q(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                q(e, t, n[t])
            })
        }
        return e
    }
    var J = function(e) {
            var t = e.node;
            return (0, I.useTrackOpenPopout)({
                emojiId: t.emojiId,
                currentGuildId: R.default.getGuildId()
            }), r.createElement(s.Dialog, null, r.createElement(V.MessagePopoutContent, null, r.createElement(P.default, {
                className: K.emojiSection
            }, r.createElement(f.default, {
                emojiName: t.name,
                className: K.primaryEmoji,
                src: t.src,
                animated: !1,
                size: "jumbo"
            }), r.createElement(P.default, {
                direction: P.default.Direction.VERTICAL,
                justify: P.default.Justify.CENTER,
                className: K.truncatingText
            }, r.createElement(l.Text, {
                className: K.__invalid_emojiName,
                variant: "text-md/semibold"
            }, r.createElement(M.default, null, t.name)), r.createElement(l.Text, {
                variant: "text-sm/normal"
            }, W.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION)))))
        },
        Z = function(e) {
            var t = e.expressionSourceGuild,
                n = e.hasJoinedExpressionSourceGuild,
                o = e.isDisplayingJoinGuildButtonInPopout,
                a = t.id,
                u = t.icon,
                s = t.name,
                c = G.default.getGuildIconURL({
                    id: a,
                    icon: u,
                    size: 32,
                    canAnimate: !0
                }),
                f = (n = null == n || n) || t.isDiscoverable(),
                d = function() {
                    t.isDiscoverable() ? (0, B.startLurking)(a, {}) : n && (0, A.transitionTo)(H.Routes.CHANNEL(a, N.default.getChannelId(a)))
                },
                _ = t.isDiscoverable() && null != t.presenceCount,
                E = function() {
                    var e = !o && !n;
                    return r.createElement(r.Fragment, null, r.createElement(l.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary"
                    }, W.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                        membersOnline: t.presenceCount
                    })), r.createElement("div", {
                        className: K.dotSeparator
                    }), e ? r.createElement(l.Clickable, {
                        className: K.joinGuildLink,
                        onClick: d
                    }, r.createElement(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-link"
                    }, W.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON)) : r.createElement(l.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary"
                    }, W.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER))
                };
            return r.createElement(P.default, {
                align: P.default.Align.CENTER
            }, r.createElement(w.default, {
                mask: w.default.Masks.SQUIRCLE,
                width: 32,
                height: 32,
                className: K.__invalid_guildIconContainer
            }, null != c && f ? r.createElement(l.Clickable, {
                "aria-label": s,
                onClick: d
            }, r.createElement("img", {
                src: c,
                alt: "",
                className: K.guildIcon
            }), " :") : r.createElement(L.default, {
                size: L.default.Sizes.SMALL,
                className: K.guildIconNotClickable,
                guild: t
            })), r.createElement(P.default, {
                direction: P.default.Direction.VERTICAL,
                className: i()(K.__invalid_guildInformation, K.truncatingText)
            }, r.createElement(P.default, {
                align: P.default.Align.CENTER
            }, r.createElement(D.default, {
                guild: t,
                className: K.guildBadge
            }), f ? r.createElement(l.Clickable, {
                onClick: d,
                className: K.truncatingText
            }, r.createElement(l.Heading, {
                className: K.guildName,
                variant: "heading-md/semibold"
            }, r.createElement(M.default, null, s))) : r.createElement(l.Heading, {
                variant: "heading-md/semibold"
            }, r.createElement(M.default, null, s))), r.createElement(P.default, {
                align: P.default.Align.CENTER
            }, _ ? E() : r.createElement(l.Text, {
                variant: "text-xs/normal",
                color: "header-secondary"
            }, W.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER))))
        },
        $ = function(e) {
            var t = e.node,
                n = e.closePopout,
                o = e.refreshPositionKey,
                i = e.nonce,
                a = (0, m.useEmojiAndSourceGuild)({
                    emojiId: t.emojiId,
                    refreshPositionKey: o
                }),
                u = a.expressionSourceGuild,
                l = a.joinedEmojiSourceGuildRecord,
                c = a.emoji;
            return a.isFetching ? r.createElement(V.PopoutLoadingAnimation, null) : r.createElement(s.Dialog, {
                "aria-label": t.name
            }, r.createElement(ee, {
                node: t,
                guildEmoji: null != c ? c : void 0,
                expressionSourceGuild: u,
                joinedEmojiSourceGuildRecord: l,
                closePopout: n,
                onToggleShowMoreEmojis: o,
                demoMode: !1,
                nonce: i
            }))
        },
        ee = function(e) {
            var t, n, o, s, m, A, N, D, L, w, G, B, Q = e.node,
                J = e.expressionSourceGuild,
                $ = e.joinedEmojiSourceGuildRecord,
                ee = e.closePopout,
                en = e.onToggleShowMoreEmojis,
                er = e.guildEmoji,
                eo = e.demoMode,
                ei = void 0 !== eo && eo,
                ea = e.nonce,
                eu = (0, u.useStateFromStores)([C.default], function() {
                    return C.default.getCurrentUser()
                }),
                es = (0, u.useStateFromStores)([R.default], function() {
                    return R.default.getGuildId()
                }),
                el = j.default.isPremium(eu),
                ec = null != es && (es === (null == J ? void 0 : J.id) || es === (null == $ ? void 0 : $.id)),
                ef = null != $,
                ed = null !== (w = null == J ? void 0 : J.isDiscoverable()) && void 0 !== w && w;
            ei && (el = !0, ed = !0, ef = !1, ec = !1);
            var e_ = v.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                    location: "CustomGuildEmojiPopout"
                }, {
                    autoTrackExposure: !0
                }).enabled,
                eE = {
                    page: null != (0, u.useStateFromStores)([R.default], function() {
                        return R.default.getGuildId()
                    }) ? H.AnalyticsPages.GUILD_CHANNEL : H.AnalyticsPages.DM_CHANNEL,
                    section: H.AnalyticsSections.EMOJI_UPSELL_POPOUT
                },
                ep = r.useMemo(function() {
                    return null == er ? {
                        isRoleSubscriptionEmoji: !1,
                        isUnusableRoleSubscriptionEmoji: !1,
                        userIsRoleSubscriber: !1
                    } : {
                        isRoleSubscriptionEmoji: h.isPurchasableRoleSubscriptionEmoji(er),
                        isUnusableRoleSubscriptionEmoji: h.isUnusableRoleSubscriptionEmoji(er, null != es ? es : void 0),
                        userIsRoleSubscriber: O.default.getUserSubscriptionRoles(er.guildId).size > 0
                    }
                }, [er, es]),
                em = ep.isRoleSubscriptionEmoji,
                ey = ep.isUnusableRoleSubscriptionEmoji,
                eI = ep.userIsRoleSubscriber,
                eh = !!ey && (0, p.shouldHideGuildPurchaseEntryPoints)(null == er ? void 0 : er.guildId),
                eO = (0, _.default)(d.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL).analyticsLocations;
            (0, E.default)({
                type: a.ImpressionTypes.MODAL,
                name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: eO,
                    emoji_guild_id: null !== (G = null == er ? void 0 : er.guildId) && void 0 !== G ? G : null,
                    emoji_id: null !== (B = null == er ? void 0 : er.id) && void 0 !== B ? B : null
                }
            }, {
                disableTrack: !em
            });
            var eT = R.default.getGuildId(),
                eS = (0, F.getEmojiPopoutData)({
                    isPremium: el,
                    hasJoinedEmojiSourceGuild: ef,
                    isRoleSubscriptionEmoji: em,
                    isUnusableRoleSubscriptionEmoji: ey,
                    userIsRoleSubscriber: eI,
                    emojiComesFromCurrentGuild: ec,
                    isDiscoverable: ed,
                    shouldHideRoleSubscriptionCTA: eh,
                    onOpenPremiumSettings: function() {
                        ee(), k.default.track(H.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_page: eE.page,
                            location_section: eE.section
                        }), (0, S.navigateToPremiumMarketingPage)()
                    }
                }),
                ev = ef && ey && !eh && (el && em || !el),
                eg = eS.emojiDescription,
                eA = (0, I.useTrackOpenPopout)({
                    emojiId: Q.emojiId,
                    currentGuildId: eT,
                    popoutData: eS,
                    emojiSourceGuildId: null == J ? void 0 : J.id,
                    nonce: ea,
                    demoMode: ei
                }),
                eb = eS.type === F.EmojiPopoutType.JOIN_GUILD,
                eN = eS.type === F.EmojiPopoutType.GET_PREMIUM;
            var eR = (t = r.useState(!1), n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t) || function(e, t) {
                    var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != o) {
                        var i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            u = !0, r = e
                        } finally {
                            try {
                                !a && null != o.return && o.return()
                            } finally {
                                if (u) throw r
                            }
                        }
                        return i
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return z(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                eC = eR[0],
                eP = eR[1],
                eD = ed || ef && !ec || null != J;
            return r.createElement(V.MessagePopoutContent, {
                className: K.popoutContent
            }, (m = (s = (o = function() {
                var e, t;
                return function(e, t) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                }(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (ei || null == J || ef) return [2];
                            ee(), e = J.id, t.label = 1;
                        case 1:
                            return t.trys.push([1, 3, , 4]), [4, c.default.joinGuild(e)];
                        case 2:
                            return t.sent(), c.default.transitionToGuildSync(e), [3, 4];
                        case 3:
                            return t.sent(), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(n, r) {
                    var i = o.apply(e, t);

                    function a(e) {
                        X(i, n, r, a, u, "next", e)
                    }

                    function u(e) {
                        X(i, n, r, a, u, "throw", e)
                    }
                    a(void 0)
                })
            }), function() {
                return s.apply(this, arguments)
            }), A = !ef && ed, r.createElement("div", {
                className: K.emojiSection
            }, r.createElement(P.default, null, r.createElement(f.default, {
                className: K.primaryEmoji,
                emojiId: Q.emojiId,
                emojiName: Q.name,
                animated: Q.animated,
                size: "jumbo"
            }), r.createElement(P.default, {
                direction: P.default.Direction.VERTICAL,
                justify: P.default.Justify.CENTER,
                className: K.truncatingText
            }, r.createElement(l.Text, {
                variant: "text-md/semibold"
            }, r.createElement(M.default, null, Q.name)), e_ && r.createElement("div", {
                className: K.nitroTextAndBadge
            }, r.createElement(b.default, {
                isSelected: !1
            }), r.createElement(l.Text, {
                className: K.nitroText,
                variant: "text-sm/semibold"
            }, W.default.Messages.POWERED_BY_NITRO)), null != eg && r.createElement(l.Text, {
                variant: "text-sm/normal"
            }, eg))), eN ? r.createElement(g.default, {
                className: K.ctaButton,
                subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
                size: l.Button.Sizes.SMALL,
                fullWidth: !0,
                buttonText: eS.text,
                onSubscribeModalClose: function(e) {
                    return e ? m() : ee()
                },
                postSuccessGuild: A && null != J ? J : void 0,
                premiumModalAnalyticsLocation: eE
            }) : eb ? r.createElement(l.Button, {
                size: l.Button.Sizes.SMALL,
                className: K.ctaButton,
                color: l.ButtonColors.BRAND,
                fullWidth: !0,
                onClick: m
            }, eS.text) : void 0, ev && r.createElement(T.default, {
                className: K.ctaButton,
                size: l.Button.Sizes.SMALL,
                fullWidth: !0,
                onClick: function() {
                    ee(), (null == $ ? void 0 : $.id) != null && c.default.transitionToGuildSync($.id, void 0, x.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [d.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                }
            }, eI ? W.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : W.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON))), eD && (N = null != J && !ef && ed, D = function() {
                N && (null == en || en(), !eC && !ei && k.default.track(H.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eA), eP(!eC))
            }, r.createElement("div", {
                className: K.guildSection
            }, r.createElement(l.FormTitle, {
                className: K.guildTitle
            }, ef ? W.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : W.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION), r.createElement(Z, {
                expressionSourceGuild: null != J ? J : y.default.createFromGuildRecord($),
                hasJoinedExpressionSourceGuild: ef,
                isDisplayingJoinGuildButtonInPopout: eb
            }), N && r.createElement(r.Fragment, null, (L = W.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS, r.createElement(l.Clickable, {
                onClick: D,
                className: K.showMoreEmojis
            }, r.createElement(P.default, null, r.createElement(l.Text, {
                className: K.__invalid_showMoreEmojisLabel,
                "aria-label": L,
                variant: "text-xs/normal",
                color: "none"
            }, L), r.createElement(U.default, {
                className: i()(K.showMoreEmojisArrow, q({}, K.showMoreEmojisArrowCollapsed, !eC))
            })))), null != Q.emojiId && eC && r.createElement(et, {
                emojiId: Q.emojiId,
                expressionSourceGuild: J,
                popoutData: eS,
                onClose: ee,
                hasJoinedEmojiSourceGuild: ef,
                isDisplayingButtonInTopSection: eb || eN
            })))))
        },
        et = function(e) {
            var t, n = e.emojiId,
                o = e.expressionSourceGuild,
                i = e.hasJoinedEmojiSourceGuild,
                a = e.popoutData,
                u = e.onClose,
                s = e.isDisplayingButtonInTopSection,
                c = (null !== (t = null == o ? void 0 : o.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(function(e) {
                    return e.id !== n
                }).slice(0, 12),
                d = a.type,
                _ = a.description;
            return r.createElement(P.default, {
                wrap: P.default.Wrap.WRAP,
                align: P.default.Align.CENTER,
                justify: P.default.Justify.CENTER,
                className: K.otherEmojisContainer
            }, i ? null : c.map(function(e) {
                return r.createElement(l.Tooltip, Q({
                    key: e.id,
                    text: e.require_colons ? ":".concat(e.name, ":") : e.name
                }, V.EXPRESSION_TOOLTIP_PROPS), function(t) {
                    return r.createElement(f.default, Q({
                        className: K.otherEmoji,
                        emojiId: e.id,
                        animated: e.animated
                    }, t))
                })
            }), !s && (d === F.EmojiPopoutType.GET_PREMIUM ? r.createElement(r.Fragment, null, r.createElement(g.default, {
                subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
                buttonText: a.text,
                className: K.ctaButton,
                fullWidth: !0,
                onClick: function() {
                    return u()
                }
            }), null != _ && r.createElement("div", {
                className: K.ctaDescription
            }, r.createElement(l.Text, {
                variant: "text-sm/medium",
                "aria-label": _
            }, _))) : d === F.EmojiPopoutType.JOIN_GUILD ? r.createElement(l.Button, {
                size: l.Button.Sizes.SMALL,
                className: K.ctaButton,
                color: l.ButtonColors.BRAND,
                fullWidth: !0,
                onClick: function() {
                    (0, B.startLurking)(o.id, {})
                }
            }, a.text) : null))
        }
}