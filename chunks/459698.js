function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MessageStandardEmojiPopout: function() {
            return Z
        },
        GuildDetails: function() {
            return q
        },
        MessageCustomEmojiPopout: function() {
            return J
        },
        CustomGuildEmojiPopout: function() {
            return X
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
        m = n("812204"),
        p = n("685665"),
        h = n("428958"),
        x = n("736271"),
        E = n("500460"),
        y = n("101263"),
        g = n("865453"),
        S = n("153043"),
        C = n("256941"),
        T = n("270295"),
        _ = n("626301"),
        I = n("505233"),
        v = n("635956"),
        A = n("393414"),
        N = n("324929"),
        R = n("18494"),
        O = n("162771"),
        M = n("697218"),
        k = n("145131"),
        L = n("580357"),
        P = n("476263"),
        b = n("98292"),
        j = n("256170"),
        U = n("587974"),
        D = n("599110"),
        w = n("315102"),
        F = n("794818"),
        G = n("719923"),
        H = n("412745"),
        B = n("933629"),
        V = n("49111"),
        K = n("724210"),
        W = n("646718"),
        Y = n("782340"),
        z = n("325417");
    let Q = () => {
            let e = (0, o.useStateFromStores)([O.default], () => O.default.getGuildId());
            return {
                page: null != e ? V.AnalyticsPages.GUILD_CHANNEL : V.AnalyticsPages.DM_CHANNEL,
                section: V.AnalyticsSections.EMOJI_UPSELL_POPOUT
            }
        },
        Z = e => {
            let {
                node: t
            } = e;
            return (0, g.useTrackOpenPopout)({
                emojiId: t.emojiId,
                currentGuildId: O.default.getGuildId()
            }), (0, i.jsx)(u.Dialog, {
                children: (0, i.jsx)(B.MessagePopoutContent, {
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
                                children: (0, i.jsx)(b.default, {
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
                    t.isDiscoverable() ? (0, F.startLurking)(a, {}) : n && (0, A.transitionTo)(V.Routes.CHANNEL(a, R.default.getChannelId(a)))
                },
                m = t.isDiscoverable() && null != t.presenceCount,
                p = () => {
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
                        }) : (0, i.jsx)(P.default, {
                            size: P.default.Sizes.SMALL,
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
                                children: (0, i.jsx)(b.default, {
                                    children: o
                                })
                            })
                        }) : (0, i.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: (0, i.jsx)(b.default, {
                                children: o
                            })
                        })]
                    }), (0, i.jsx)(k.default, {
                        align: k.default.Align.CENTER,
                        children: m ? p() : (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: Y.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
                        })
                    })]
                })]
            })
        },
        J = e => {
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
            return d ? (0, i.jsx)(B.PopoutLoadingAnimation, {}) : (0, i.jsx)(u.Dialog, {
                "aria-label": t.name,
                children: (0, i.jsx)(X, {
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
        X = e => {
            var t, n, a;
            let {
                node: u,
                expressionSourceGuild: E,
                joinedEmojiSourceGuildRecord: A,
                closePopout: R,
                onToggleShowMoreEmojis: L,
                guildEmoji: P,
                demoMode: U = !1,
                nonce: w
            } = e, F = (0, o.useStateFromStores)([M.default], () => M.default.getCurrentUser()), Z = (0, o.useStateFromStores)([O.default], () => O.default.getGuildId()), J = G.default.isPremium(F), X = null != Z && (Z === (null == E ? void 0 : E.id) || Z === (null == A ? void 0 : A.id)), ee = null != A, et = null !== (t = null == E ? void 0 : E.isDiscoverable()) && void 0 !== t && t;
            U && (J = !0, et = !0, ee = !1, X = !1);
            let {
                enabled: en
            } = I.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "CustomGuildEmojiPopout"
            }, {
                autoTrackExposure: !0
            }), ei = Q(), {
                isRoleSubscriptionEmoji: el,
                isUnusableRoleSubscriptionEmoji: ea,
                userIsRoleSubscriber: es
            } = l.useMemo(() => null == P ? {
                isRoleSubscriptionEmoji: !1,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1
            } : {
                isRoleSubscriptionEmoji: S.isPurchasableRoleSubscriptionEmoji(P),
                isUnusableRoleSubscriptionEmoji: S.isUnusableRoleSubscriptionEmoji(P, null != Z ? Z : void 0),
                userIsRoleSubscriber: C.default.getUserSubscriptionRoles(P.guildId).size > 0
            }, [P, Z]), er = !!ea && (0, x.shouldHideGuildPurchaseEntryPoints)(null == P ? void 0 : P.guildId), {
                analyticsLocations: eo
            } = (0, p.default)(m.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
            (0, h.default)({
                type: r.ImpressionTypes.MODAL,
                name: r.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: eo,
                    emoji_guild_id: null !== (n = null == P ? void 0 : P.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (a = null == P ? void 0 : P.id) && void 0 !== a ? a : null
                }
            }, {
                disableTrack: !el
            });
            let eu = O.default.getGuildId(),
                ed = (0, H.getEmojiPopoutData)({
                    isPremium: J,
                    hasJoinedEmojiSourceGuild: ee,
                    isRoleSubscriptionEmoji: el,
                    isUnusableRoleSubscriptionEmoji: ea,
                    userIsRoleSubscriber: es,
                    emojiComesFromCurrentGuild: X,
                    isDiscoverable: et,
                    shouldHideRoleSubscriptionCTA: er,
                    onOpenPremiumSettings: () => {
                        R(), D.default.track(V.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_page: ei.page,
                            location_section: ei.section
                        }), (0, _.navigateToPremiumMarketingPage)()
                    }
                }),
                ec = ee && ea && !er && (J && el || !J),
                ef = ed.emojiDescription,
                em = (0, g.useTrackOpenPopout)({
                    emojiId: u.emojiId,
                    currentGuildId: eu,
                    popoutData: ed,
                    emojiSourceGuildId: null == E ? void 0 : E.id,
                    nonce: w,
                    demoMode: U
                }),
                ep = ed.type === H.EmojiPopoutType.JOIN_GUILD,
                eh = ed.type === H.EmojiPopoutType.GET_PREMIUM,
                [ex, eE] = l.useState(!1),
                ey = et || ee && !X || null != E;
            return (0, i.jsxs)(B.MessagePopoutContent, {
                className: z.popoutContent,
                children: [(() => {
                    let e = async () => {
                        if (U || null == E || ee) return;
                        R();
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
                                    children: (0, i.jsx)(b.default, {
                                        children: u.name
                                    })
                                }), en && (0, i.jsxs)("div", {
                                    className: z.nitroTextAndBadge,
                                    children: [(0, i.jsx)(N.default, {
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
                            onSubscribeModalClose: t => t ? e() : R(),
                            postSuccessGuild: t && null != E ? E : void 0,
                            premiumModalAnalyticsLocation: ei
                        }) : ep ? (0, i.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            className: z.ctaButton,
                            color: d.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: e,
                            children: ed.text
                        }) : void 0, ec && (0, i.jsx)(T.default, {
                            className: z.ctaButton,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            onClick: () => {
                                R(), (null == A ? void 0 : A.id) != null && c.default.transitionToGuildSync(A.id, void 0, K.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [m.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                            },
                            children: es ? Y.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : Y.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                        })]
                    })
                })(), ey && (() => {
                    let e = null != E && !ee && et,
                        t = () => {
                            e && (null == L || L(), !ex && !U && D.default.track(V.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, em), eE(!ex))
                        };
                    return (0, i.jsxs)("div", {
                        className: z.guildSection,
                        children: [(0, i.jsx)(d.FormTitle, {
                            className: z.guildTitle,
                            children: ee ? Y.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : Y.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                        }), (0, i.jsx)(q, {
                            expressionSourceGuild: null != E ? E : y.default.createFromGuildRecord(A),
                            hasJoinedExpressionSourceGuild: ee,
                            isDisplayingJoinGuildButtonInPopout: ep
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
                                onClose: R,
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
                expressionSourceGuild: l,
                hasJoinedEmojiSourceGuild: a,
                popoutData: s,
                onClose: r,
                isDisplayingButtonInTopSection: o
            } = e, u = (null !== (t = null == l ? void 0 : l.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
                type: c,
                description: m
            } = s;
            return (0, i.jsxs)(k.default, {
                wrap: k.default.Wrap.WRAP,
                align: k.default.Align.CENTER,
                justify: k.default.Justify.CENTER,
                className: z.otherEmojisContainer,
                children: [a ? null : u.map(e => (0, i.jsx)(d.Tooltip, {
                    text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                    ...B.EXPRESSION_TOOLTIP_PROPS,
                    children: t => (0, i.jsx)(f.default, {
                        className: z.otherEmoji,
                        emojiId: e.id,
                        animated: e.animated,
                        ...t
                    })
                }, e.id)), !o && (c === H.EmojiPopoutType.GET_PREMIUM ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(v.default, {
                        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: s.text,
                        className: z.ctaButton,
                        fullWidth: !0,
                        onClick: () => r()
                    }), null != m && (0, i.jsx)("div", {
                        className: z.ctaDescription,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            "aria-label": m,
                            children: m
                        })
                    })]
                }) : c === H.EmojiPopoutType.JOIN_GUILD ? (0, i.jsx)(d.Button, {
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