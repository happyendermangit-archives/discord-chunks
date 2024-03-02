function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageStandardEmojiPopout: function() {
            return J
        },
        GuildDetails: function() {
            return q
        },
        MessageCustomEmojiPopout: function() {
            return X
        },
        CustomGuildEmojiPopout: function() {
            return Q
        },
        EmojiPopoutList: function() {
            return $
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("759843"),
        o = n("446674"),
        u = n("130969"),
        d = n("77078"),
        c = n("851387"),
        f = n("430568"),
        m = n("812204"),
        p = n("685665"),
        h = n("428958"),
        E = n("736271"),
        g = n("500460"),
        C = n("101263"),
        S = n("865453"),
        T = n("153043"),
        I = n("256941"),
        v = n("270295"),
        _ = n("626301"),
        N = n("505233"),
        A = n("635956"),
        x = n("393414"),
        y = n("324929"),
        O = n("18494"),
        R = n("162771"),
        M = n("697218"),
        L = n("145131"),
        P = n("580357"),
        b = n("476263"),
        j = n("98292"),
        U = n("256170"),
        D = n("587974"),
        k = n("599110"),
        w = n("315102"),
        F = n("794818"),
        G = n("719923"),
        B = n("412745"),
        H = n("933629"),
        V = n("49111"),
        K = n("724210"),
        W = n("646718"),
        Y = n("782340"),
        z = n("325417");
    let Z = () => {
            let e = (0, o.useStateFromStores)([R.default], () => R.default.getGuildId());
            return {
                page: null != e ? V.AnalyticsPages.GUILD_CHANNEL : V.AnalyticsPages.DM_CHANNEL,
                section: V.AnalyticsSections.EMOJI_UPSELL_POPOUT
            }
        },
        J = e => {
            let {
                node: t
            } = e;
            return (0, S.useTrackOpenPopout)({
                emojiId: t.emojiId,
                currentGuildId: R.default.getGuildId()
            }), (0, l.jsx)(u.Dialog, {
                children: (0, l.jsx)(H.MessagePopoutContent, {
                    children: (0, l.jsxs)(L.default, {
                        className: z.emojiSection,
                        children: [(0, l.jsx)(f.default, {
                            emojiName: t.name,
                            className: z.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: "jumbo"
                        }), (0, l.jsxs)(L.default, {
                            direction: L.default.Direction.VERTICAL,
                            justify: L.default.Justify.CENTER,
                            className: z.truncatingText,
                            children: [(0, l.jsx)(d.Text, {
                                className: z.emojiName,
                                variant: "text-md/semibold",
                                children: (0, l.jsx)(j.default, {
                                    children: t.name
                                })
                            }), (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: Y.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
                            })]
                        })]
                    })
                })
            })
        },
        q = e => {
            let {
                expressionSourceGuild: t,
                hasJoinedExpressionSourceGuild: n,
                isDisplayingJoinGuildButtonInPopout: i
            } = e, {
                id: a,
                icon: r,
                name: o
            } = t, u = w.default.getGuildIconURL({
                id: a,
                icon: r,
                size: 32,
                canAnimate: !0
            });
            n = null == n || n;
            let c = n || t.isDiscoverable(),
                f = () => {
                    t.isDiscoverable() ? (0, F.startLurking)(a, {}) : n && (0, x.transitionTo)(V.Routes.CHANNEL(a, O.default.getChannelId(a)))
                },
                m = t.isDiscoverable() && null != t.presenceCount,
                p = () => {
                    let e = !i && !n;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: Y.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: t.presenceCount
                            })
                        }), (0, l.jsx)("div", {
                            className: z.dotSeparator
                        }), e ? (0, l.jsx)(d.Clickable, {
                            className: z.joinGuildLink,
                            onClick: f,
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                children: Y.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                            })
                        }) : (0, l.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: Y.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
                        })]
                    })
                };
            return (0, l.jsxs)(L.default, {
                align: L.default.Align.CENTER,
                children: [(0, l.jsx)(D.default, {
                    mask: D.default.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: z.guildIconContainer,
                    children: (() => {
                        let e = null != u && c;
                        return e ? (0, l.jsxs)(d.Clickable, {
                            "aria-label": o,
                            onClick: f,
                            children: [(0, l.jsx)("img", {
                                src: u,
                                alt: "",
                                className: z.guildIcon
                            }), " :"]
                        }) : (0, l.jsx)(b.default, {
                            size: b.default.Sizes.SMALL,
                            className: z.guildIconNotClickable,
                            guild: t
                        })
                    })()
                }), (0, l.jsxs)(L.default, {
                    direction: L.default.Direction.VERTICAL,
                    className: s(z.guildInformation, z.truncatingText),
                    children: [(0, l.jsxs)(L.default, {
                        align: L.default.Align.CENTER,
                        children: [(0, l.jsx)(P.default, {
                            guild: t,
                            className: z.guildBadge
                        }), c ? (0, l.jsx)(d.Clickable, {
                            onClick: f,
                            className: z.truncatingText,
                            children: (0, l.jsx)(d.Heading, {
                                className: z.guildName,
                                variant: "heading-md/semibold",
                                children: (0, l.jsx)(j.default, {
                                    children: o
                                })
                            })
                        }) : (0, l.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: (0, l.jsx)(j.default, {
                                children: o
                            })
                        })]
                    }), (0, l.jsx)(L.default, {
                        align: L.default.Align.CENTER,
                        children: m ? p() : (0, l.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: Y.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
                        })
                    })]
                })]
            })
        },
        X = e => {
            let {
                node: t,
                closePopout: n,
                refreshPositionKey: i,
                nonce: a
            } = e, {
                expressionSourceGuild: s,
                joinedEmojiSourceGuildRecord: r,
                emoji: o,
                isFetching: d
            } = (0, g.useEmojiAndSourceGuild)({
                emojiId: t.emojiId,
                refreshPositionKey: i
            });
            return d ? (0, l.jsx)(H.PopoutLoadingAnimation, {}) : (0, l.jsx)(u.Dialog, {
                "aria-label": t.name,
                children: (0, l.jsx)(Q, {
                    node: t,
                    guildEmoji: null != o ? o : void 0,
                    expressionSourceGuild: s,
                    joinedEmojiSourceGuildRecord: r,
                    closePopout: n,
                    onToggleShowMoreEmojis: i,
                    demoMode: !1,
                    nonce: a
                })
            })
        },
        Q = e => {
            var t, n, a;
            let {
                node: u,
                expressionSourceGuild: g,
                joinedEmojiSourceGuildRecord: x,
                closePopout: O,
                onToggleShowMoreEmojis: P,
                guildEmoji: b,
                demoMode: D = !1,
                nonce: w
            } = e, F = (0, o.useStateFromStores)([M.default], () => M.default.getCurrentUser()), J = (0, o.useStateFromStores)([R.default], () => R.default.getGuildId()), X = G.default.isPremium(F), Q = null != J && (J === (null == g ? void 0 : g.id) || J === (null == x ? void 0 : x.id)), ee = null != x, et = null !== (t = null == g ? void 0 : g.isDiscoverable()) && void 0 !== t && t;
            D && (X = !0, et = !0, ee = !1, Q = !1);
            let {
                enabled: en
            } = N.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "CustomGuildEmojiPopout"
            }, {
                autoTrackExposure: !0
            }), el = Z(), {
                isRoleSubscriptionEmoji: ei,
                isUnusableRoleSubscriptionEmoji: ea,
                userIsRoleSubscriber: es
            } = i.useMemo(() => null == b ? {
                isRoleSubscriptionEmoji: !1,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1
            } : {
                isRoleSubscriptionEmoji: T.isPurchasableRoleSubscriptionEmoji(b),
                isUnusableRoleSubscriptionEmoji: T.isUnusableRoleSubscriptionEmoji(b, null != J ? J : void 0),
                userIsRoleSubscriber: I.default.getUserSubscriptionRoles(b.guildId).size > 0
            }, [b, J]), er = !!ea && (0, E.shouldHideGuildPurchaseEntryPoints)(null == b ? void 0 : b.guildId), {
                analyticsLocations: eo
            } = (0, p.default)(m.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
            (0, h.default)({
                type: r.ImpressionTypes.MODAL,
                name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: eo,
                    emoji_guild_id: null !== (n = null == b ? void 0 : b.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (a = null == b ? void 0 : b.id) && void 0 !== a ? a : null
                }
            }, {
                disableTrack: !ei
            });
            let eu = R.default.getGuildId(),
                ed = (0, B.getEmojiPopoutData)({
                    isPremium: X,
                    hasJoinedEmojiSourceGuild: ee,
                    isRoleSubscriptionEmoji: ei,
                    isUnusableRoleSubscriptionEmoji: ea,
                    userIsRoleSubscriber: es,
                    emojiComesFromCurrentGuild: Q,
                    isDiscoverable: et,
                    shouldHideRoleSubscriptionCTA: er,
                    onOpenPremiumSettings: () => {
                        O(), k.default.track(V.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_page: el.page,
                            location_section: el.section
                        }), (0, _.navigateToPremiumMarketingPage)()
                    }
                }),
                ec = ee && ea && !er && (X && ei || !X),
                ef = ed.emojiDescription,
                em = (0, S.useTrackOpenPopout)({
                    emojiId: u.emojiId,
                    currentGuildId: eu,
                    popoutData: ed,
                    emojiSourceGuildId: null == g ? void 0 : g.id,
                    nonce: w,
                    demoMode: D
                }),
                ep = ed.type === B.EmojiPopoutType.JOIN_GUILD,
                eh = ed.type === B.EmojiPopoutType.GET_PREMIUM,
                [eE, eg] = i.useState(!1),
                eC = et || ee && !Q || null != g;
            return (0, l.jsxs)(H.MessagePopoutContent, {
                className: z.popoutContent,
                children: [(() => {
                    let e = async () => {
                        if (D || null == g || ee) return;
                        O();
                        let e = g.id;
                        try {
                            await c.default.joinGuild(e), c.default.transitionToGuildSync(e)
                        } catch {}
                    }, t = !ee && et;
                    return (0, l.jsxs)("div", {
                        className: z.emojiSection,
                        children: [(0, l.jsxs)(L.default, {
                            children: [(0, l.jsx)(f.default, {
                                className: z.primaryEmoji,
                                emojiId: u.emojiId,
                                emojiName: u.name,
                                animated: u.animated,
                                size: "jumbo"
                            }), (0, l.jsxs)(L.default, {
                                direction: L.default.Direction.VERTICAL,
                                justify: L.default.Justify.CENTER,
                                className: z.truncatingText,
                                children: [(0, l.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    children: (0, l.jsx)(j.default, {
                                        children: u.name
                                    })
                                }), en && (0, l.jsxs)("div", {
                                    className: z.nitroTextAndBadge,
                                    children: [(0, l.jsx)(y.default, {
                                        isSelected: !1
                                    }), (0, l.jsx)(d.Text, {
                                        className: z.nitroText,
                                        variant: "text-sm/semibold",
                                        children: Y.default.Messages.POWERED_BY_NITRO
                                    })]
                                }), null != ef && (0, l.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: ef
                                })]
                            })]
                        }), eh ? (0, l.jsx)(A.default, {
                            className: z.ctaButton,
                            subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            buttonText: ed.text,
                            onSubscribeModalClose: t => t ? e() : O(),
                            postSuccessGuild: t && null != g ? g : void 0,
                            premiumModalAnalyticsLocation: el
                        }) : ep ? (0, l.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            className: z.ctaButton,
                            color: d.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: e,
                            children: ed.text
                        }) : void 0, ec && (0, l.jsx)(v.default, {
                            className: z.ctaButton,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            onClick: () => {
                                O(), (null == x ? void 0 : x.id) != null && c.default.transitionToGuildSync(x.id, void 0, K.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [m.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                            },
                            children: es ? Y.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : Y.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                        })]
                    })
                })(), eC && (() => {
                    let e = null != g && !ee && et,
                        t = () => {
                            e && (null == P || P(), !eE && !D && k.default.track(V.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, em), eg(!eE))
                        };
                    return (0, l.jsxs)("div", {
                        className: z.guildSection,
                        children: [(0, l.jsx)(d.FormTitle, {
                            className: z.guildTitle,
                            children: ee ? Y.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : Y.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                        }), (0, l.jsx)(q, {
                            expressionSourceGuild: null != g ? g : C.default.createFromGuildRecord(x),
                            hasJoinedExpressionSourceGuild: ee,
                            isDisplayingJoinGuildButtonInPopout: ep
                        }), e && (0, l.jsxs)(l.Fragment, {
                            children: [(() => {
                                let e = Y.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                                return (0, l.jsx)(d.Clickable, {
                                    onClick: t,
                                    className: z.showMoreEmojis,
                                    children: (0, l.jsxs)(L.default, {
                                        children: [(0, l.jsx)(d.Text, {
                                            className: z.showMoreEmojisLabel,
                                            "aria-label": e,
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: e
                                        }), (0, l.jsx)(U.default, {
                                            className: s(z.showMoreEmojisArrow, {
                                                [z.showMoreEmojisArrowCollapsed]: !eE
                                            })
                                        })]
                                    })
                                })
                            })(), null != u.emojiId && eE && (0, l.jsx)($, {
                                emojiId: u.emojiId,
                                expressionSourceGuild: g,
                                popoutData: ed,
                                onClose: O,
                                hasJoinedEmojiSourceGuild: ee,
                                isDisplayingButtonInTopSection: ep || eh
                            })]
                        })]
                    })
                })()]
            })
        },
        $ = e => {
            var t;
            let {
                emojiId: n,
                expressionSourceGuild: i,
                hasJoinedEmojiSourceGuild: a,
                popoutData: s,
                onClose: r,
                isDisplayingButtonInTopSection: o
            } = e, u = (null !== (t = null == i ? void 0 : i.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
                type: c,
                description: m
            } = s;
            return (0, l.jsxs)(L.default, {
                wrap: L.default.Wrap.WRAP,
                align: L.default.Align.CENTER,
                justify: L.default.Justify.CENTER,
                className: z.otherEmojisContainer,
                children: [a ? null : u.map(e => (0, l.jsx)(d.Tooltip, {
                    text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                    ...H.EXPRESSION_TOOLTIP_PROPS,
                    children: t => (0, l.jsx)(f.default, {
                        className: z.otherEmoji,
                        emojiId: e.id,
                        animated: e.animated,
                        ...t
                    })
                }, e.id)), !o && (c === B.EmojiPopoutType.GET_PREMIUM ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(A.default, {
                        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: s.text,
                        className: z.ctaButton,
                        fullWidth: !0,
                        onClick: () => r()
                    }), null != m && (0, l.jsx)("div", {
                        className: z.ctaDescription,
                        children: (0, l.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            "aria-label": m,
                            children: m
                        })
                    })]
                }) : c === B.EmojiPopoutType.JOIN_GUILD ? (0, l.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    className: z.ctaButton,
                    color: d.ButtonColors.BRAND,
                    fullWidth: !0,
                    onClick: () => {
                        (0, F.startLurking)(i.id, {})
                    },
                    children: s.text
                }) : null)]
            })
        }
}