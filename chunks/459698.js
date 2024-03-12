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
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("759843"),
        o = n("446674"),
        u = n("130969"),
        d = n("77078"),
        c = n("851387"),
        f = n("430568"),
        p = n("812204"),
        m = n("685665"),
        h = n("428958"),
        x = n("736271"),
        E = n("500460"),
        y = n("101263"),
        g = n("865453"),
        S = n("153043"),
        C = n("256941"),
        I = n("270295"),
        T = n("626301"),
        _ = n("505233"),
        v = n("635956"),
        N = n("393414"),
        A = n("324929"),
        O = n("18494"),
        R = n("162771"),
        M = n("697218"),
        k = n("145131"),
        L = n("580357"),
        b = n("476263"),
        P = n("98292"),
        j = n("256170"),
        U = n("587974"),
        D = n("599110"),
        w = n("315102"),
        F = n("794818"),
        B = n("719923"),
        G = n("412745"),
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
            return (0, g.useTrackOpenPopout)({
                emojiId: t.emojiId,
                currentGuildId: R.default.getGuildId()
            }), (0, i.jsx)(u.Dialog, {
                children: (0, i.jsx)(H.MessagePopoutContent, {
                    children: (0, i.jsxs)(k.default, {
                        className: z.emojiSection,
                        children: [(0, i.jsx)(f.default, {
                            emojiName: t.name,
                            className: z.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: "jumbo"
                        }), (0, i.jsxs)(k.default, {
                            direction: k.default.Direction.VERTICAL,
                            justify: k.default.Justify.CENTER,
                            className: z.truncatingText,
                            children: [(0, i.jsx)(d.Text, {
                                className: z.emojiName,
                                variant: "text-md/semibold",
                                children: (0, i.jsx)(P.default, {
                                    children: t.name
                                })
                            }), (0, i.jsx)(d.Text, {
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
                isDisplayingJoinGuildButtonInPopout: l
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
                    t.isDiscoverable() ? (0, F.startLurking)(a, {}) : n && (0, N.transitionTo)(V.Routes.CHANNEL(a, O.default.getChannelId(a)))
                },
                p = t.isDiscoverable() && null != t.presenceCount,
                m = () => {
                    let e = !l && !n;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: Y.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: t.presenceCount
                            })
                        }), (0, i.jsx)("div", {
                            className: z.dotSeparator
                        }), e ? (0, i.jsx)(d.Clickable, {
                            className: z.joinGuildLink,
                            onClick: f,
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-link",
                                children: Y.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                            })
                        }) : (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: Y.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
                        })]
                    })
                };
            return (0, i.jsxs)(k.default, {
                align: k.default.Align.CENTER,
                children: [(0, i.jsx)(U.default, {
                    mask: U.default.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: z.guildIconContainer,
                    children: (() => {
                        let e = null != u && c;
                        return e ? (0, i.jsxs)(d.Clickable, {
                            "aria-label": o,
                            onClick: f,
                            children: [(0, i.jsx)("img", {
                                src: u,
                                alt: "",
                                className: z.guildIcon
                            }), " :"]
                        }) : (0, i.jsx)(b.default, {
                            size: b.default.Sizes.SMALL,
                            className: z.guildIconNotClickable,
                            guild: t
                        })
                    })()
                }), (0, i.jsxs)(k.default, {
                    direction: k.default.Direction.VERTICAL,
                    className: s(z.guildInformation, z.truncatingText),
                    children: [(0, i.jsxs)(k.default, {
                        align: k.default.Align.CENTER,
                        children: [(0, i.jsx)(L.default, {
                            guild: t,
                            className: z.guildBadge
                        }), c ? (0, i.jsx)(d.Clickable, {
                            onClick: f,
                            className: z.truncatingText,
                            children: (0, i.jsx)(d.Heading, {
                                className: z.guildName,
                                variant: "heading-md/semibold",
                                children: (0, i.jsx)(P.default, {
                                    children: o
                                })
                            })
                        }) : (0, i.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: (0, i.jsx)(P.default, {
                                children: o
                            })
                        })]
                    }), (0, i.jsx)(k.default, {
                        align: k.default.Align.CENTER,
                        children: p ? m() : (0, i.jsx)(d.Text, {
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
                refreshPositionKey: l,
                nonce: a
            } = e, {
                expressionSourceGuild: s,
                joinedEmojiSourceGuildRecord: r,
                emoji: o,
                isFetching: d
            } = (0, E.useEmojiAndSourceGuild)({
                emojiId: t.emojiId,
                refreshPositionKey: l
            });
            return d ? (0, i.jsx)(H.PopoutLoadingAnimation, {}) : (0, i.jsx)(u.Dialog, {
                "aria-label": t.name,
                children: (0, i.jsx)(Q, {
                    node: t,
                    guildEmoji: null != o ? o : void 0,
                    expressionSourceGuild: s,
                    joinedEmojiSourceGuildRecord: r,
                    closePopout: n,
                    onToggleShowMoreEmojis: l,
                    demoMode: !1,
                    nonce: a
                })
            })
        },
        Q = e => {
            var t, n, a;
            let {
                node: u,
                expressionSourceGuild: E,
                joinedEmojiSourceGuildRecord: N,
                closePopout: O,
                onToggleShowMoreEmojis: L,
                guildEmoji: b,
                demoMode: U = !1,
                nonce: w
            } = e, F = (0, o.useStateFromStores)([M.default], () => M.default.getCurrentUser()), J = (0, o.useStateFromStores)([R.default], () => R.default.getGuildId()), X = B.default.isPremium(F), Q = null != J && (J === (null == E ? void 0 : E.id) || J === (null == N ? void 0 : N.id)), ee = null != N, et = null !== (t = null == E ? void 0 : E.isDiscoverable()) && void 0 !== t && t;
            U && (X = !0, et = !0, ee = !1, Q = !1);
            let {
                enabled: en
            } = _.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "CustomGuildEmojiPopout"
            }, {
                autoTrackExposure: !0
            }), ei = Z(), {
                isRoleSubscriptionEmoji: el,
                isUnusableRoleSubscriptionEmoji: ea,
                userIsRoleSubscriber: es
            } = l.useMemo(() => null == b ? {
                isRoleSubscriptionEmoji: !1,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1
            } : {
                isRoleSubscriptionEmoji: S.isPurchasableRoleSubscriptionEmoji(b),
                isUnusableRoleSubscriptionEmoji: S.isUnusableRoleSubscriptionEmoji(b, null != J ? J : void 0),
                userIsRoleSubscriber: C.default.getUserSubscriptionRoles(b.guildId).size > 0
            }, [b, J]), er = !!ea && (0, x.shouldHideGuildPurchaseEntryPoints)(null == b ? void 0 : b.guildId), {
                analyticsLocations: eo
            } = (0, m.default)(p.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
            (0, h.default)({
                type: r.ImpressionTypes.MODAL,
                name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: eo,
                    emoji_guild_id: null !== (n = null == b ? void 0 : b.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (a = null == b ? void 0 : b.id) && void 0 !== a ? a : null
                }
            }, {
                disableTrack: !el
            });
            let eu = R.default.getGuildId(),
                ed = (0, G.getEmojiPopoutData)({
                    isPremium: X,
                    hasJoinedEmojiSourceGuild: ee,
                    isRoleSubscriptionEmoji: el,
                    isUnusableRoleSubscriptionEmoji: ea,
                    userIsRoleSubscriber: es,
                    emojiComesFromCurrentGuild: Q,
                    isDiscoverable: et,
                    shouldHideRoleSubscriptionCTA: er,
                    onOpenPremiumSettings: () => {
                        O(), D.default.track(V.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_page: ei.page,
                            location_section: ei.section
                        }), (0, T.navigateToPremiumMarketingPage)()
                    }
                }),
                ec = ee && ea && !er && (X && el || !X),
                ef = ed.emojiDescription,
                ep = (0, g.useTrackOpenPopout)({
                    emojiId: u.emojiId,
                    currentGuildId: eu,
                    popoutData: ed,
                    emojiSourceGuildId: null == E ? void 0 : E.id,
                    nonce: w,
                    demoMode: U
                }),
                em = ed.type === G.EmojiPopoutType.JOIN_GUILD,
                eh = ed.type === G.EmojiPopoutType.GET_PREMIUM,
                [ex, eE] = l.useState(!1),
                ey = et || ee && !Q || null != E;
            return (0, i.jsxs)(H.MessagePopoutContent, {
                className: z.popoutContent,
                children: [(() => {
                    let e = async () => {
                        if (U || null == E || ee) return;
                        O();
                        let e = E.id;
                        try {
                            await c.default.joinGuild(e), c.default.transitionToGuildSync(e)
                        } catch {}
                    }, t = !ee && et;
                    return (0, i.jsxs)("div", {
                        className: z.emojiSection,
                        children: [(0, i.jsxs)(k.default, {
                            children: [(0, i.jsx)(f.default, {
                                className: z.primaryEmoji,
                                emojiId: u.emojiId,
                                emojiName: u.name,
                                animated: u.animated,
                                size: "jumbo"
                            }), (0, i.jsxs)(k.default, {
                                direction: k.default.Direction.VERTICAL,
                                justify: k.default.Justify.CENTER,
                                className: z.truncatingText,
                                children: [(0, i.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    children: (0, i.jsx)(P.default, {
                                        children: u.name
                                    })
                                }), en && (0, i.jsxs)("div", {
                                    className: z.nitroTextAndBadge,
                                    children: [(0, i.jsx)(A.default, {
                                        isSelected: !1
                                    }), (0, i.jsx)(d.Text, {
                                        className: z.nitroText,
                                        variant: "text-sm/semibold",
                                        children: Y.default.Messages.POWERED_BY_NITRO
                                    })]
                                }), null != ef && (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: ef
                                })]
                            })]
                        }), eh ? (0, i.jsx)(v.default, {
                            className: z.ctaButton,
                            subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            buttonText: ed.text,
                            onSubscribeModalClose: t => t ? e() : O(),
                            postSuccessGuild: t && null != E ? E : void 0,
                            premiumModalAnalyticsLocation: ei
                        }) : em ? (0, i.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            className: z.ctaButton,
                            color: d.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: e,
                            children: ed.text
                        }) : void 0, ec && (0, i.jsx)(I.default, {
                            className: z.ctaButton,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            onClick: () => {
                                O(), (null == N ? void 0 : N.id) != null && c.default.transitionToGuildSync(N.id, void 0, K.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [p.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                            },
                            children: es ? Y.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : Y.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                        })]
                    })
                })(), ey && (() => {
                    let e = null != E && !ee && et,
                        t = () => {
                            e && (null == L || L(), !ex && !U && D.default.track(V.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ep), eE(!ex))
                        };
                    return (0, i.jsxs)("div", {
                        className: z.guildSection,
                        children: [(0, i.jsx)(d.FormTitle, {
                            className: z.guildTitle,
                            children: ee ? Y.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : Y.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                        }), (0, i.jsx)(q, {
                            expressionSourceGuild: null != E ? E : y.default.createFromGuildRecord(N),
                            hasJoinedExpressionSourceGuild: ee,
                            isDisplayingJoinGuildButtonInPopout: em
                        }), e && (0, i.jsxs)(i.Fragment, {
                            children: [(() => {
                                let e = Y.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                                return (0, i.jsx)(d.Clickable, {
                                    onClick: t,
                                    className: z.showMoreEmojis,
                                    children: (0, i.jsxs)(k.default, {
                                        children: [(0, i.jsx)(d.Text, {
                                            className: z.showMoreEmojisLabel,
                                            "aria-label": e,
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: e
                                        }), (0, i.jsx)(j.default, {
                                            className: s(z.showMoreEmojisArrow, {
                                                [z.showMoreEmojisArrowCollapsed]: !ex
                                            })
                                        })]
                                    })
                                })
                            })(), null != u.emojiId && ex && (0, i.jsx)($, {
                                emojiId: u.emojiId,
                                expressionSourceGuild: E,
                                popoutData: ed,
                                onClose: O,
                                hasJoinedEmojiSourceGuild: ee,
                                isDisplayingButtonInTopSection: em || eh
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
                expressionSourceGuild: l,
                hasJoinedEmojiSourceGuild: a,
                popoutData: s,
                onClose: r,
                isDisplayingButtonInTopSection: o
            } = e, u = (null !== (t = null == l ? void 0 : l.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
                type: c,
                description: p
            } = s;
            return (0, i.jsxs)(k.default, {
                wrap: k.default.Wrap.WRAP,
                align: k.default.Align.CENTER,
                justify: k.default.Justify.CENTER,
                className: z.otherEmojisContainer,
                children: [a ? null : u.map(e => (0, i.jsx)(d.Tooltip, {
                    text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                    ...H.EXPRESSION_TOOLTIP_PROPS,
                    children: t => (0, i.jsx)(f.default, {
                        className: z.otherEmoji,
                        emojiId: e.id,
                        animated: e.animated,
                        ...t
                    })
                }, e.id)), !o && (c === G.EmojiPopoutType.GET_PREMIUM ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(v.default, {
                        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: s.text,
                        className: z.ctaButton,
                        fullWidth: !0,
                        onClick: () => r()
                    }), null != p && (0, i.jsx)("div", {
                        className: z.ctaDescription,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            "aria-label": p,
                            children: p
                        })
                    })]
                }) : c === G.EmojiPopoutType.JOIN_GUILD ? (0, i.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    className: z.ctaButton,
                    color: d.ButtonColors.BRAND,
                    fullWidth: !0,
                    onClick: () => {
                        (0, F.startLurking)(l.id, {})
                    },
                    children: s.text
                }) : null)]
            })
        }
}