function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CustomGuildEmojiPopout: function() {
            return $
        },
        EmojiPopoutList: function() {
            return ee
        },
        GuildDetails: function() {
            return Z
        },
        MessageCustomEmojiPopout: function() {
            return J
        },
        MessageStandardEmojiPopout: function() {
            return q
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("990547"),
        l = n("442837"),
        u = n("507274"),
        d = n("481060"),
        _ = n("749210"),
        c = n("596454"),
        E = n("100527"),
        I = n("906732"),
        T = n("213609"),
        f = n("738774"),
        S = n("29598"),
        h = n("400106"),
        A = n("944386"),
        m = n("889564"),
        N = n("687476"),
        p = n("761966"),
        O = n("98278"),
        R = n("642345"),
        C = n("197115"),
        g = n("703656"),
        L = n("706454"),
        D = n("170671"),
        v = n("944486"),
        M = n("914010"),
        y = n("594174"),
        P = n("285952"),
        U = n("940627"),
        b = n("346656"),
        G = n("514342"),
        w = n("605403"),
        B = n("806519"),
        k = n("626135"),
        V = n("768581"),
        F = n("900849"),
        x = n("74538"),
        H = n("886132"),
        Y = n("524444"),
        j = n("981631"),
        W = n("176505"),
        K = n("474936"),
        z = n("689938"),
        X = n("163237");
    let Q = () => ({
            page: null != (0, l.useStateFromStores)([M.default], () => M.default.getGuildId()) ? j.AnalyticsPages.GUILD_CHANNEL : j.AnalyticsPages.DM_CHANNEL,
            section: j.AnalyticsSections.EMOJI_UPSELL_POPOUT
        }),
        q = e => {
            let {
                node: t
            } = e;
            (0, A.useTrackOpenPopout)({
                emojiId: t.emojiId,
                currentGuildId: M.default.getGuildId()
            });
            let n = (0, l.useStateFromStores)([L.default], () => L.default.locale.startsWith("en-")),
                r = ":pizza:" === t.name && n ? z.default.Messages.POLLS_MARKETING_EASTER_EGG_PIZZA_EMOJI_DESCRIPTION.format({
                    emojiName: t.name
                }) : t.name;
            return (0, i.jsx)(u.Dialog, {
                children: (0, i.jsx)(Y.MessagePopoutContent, {
                    children: (0, i.jsxs)(P.default, {
                        className: X.emojiSection,
                        children: [(0, i.jsx)(c.default, {
                            emojiName: t.name,
                            className: X.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: "jumbo"
                        }), (0, i.jsxs)(P.default, {
                            direction: P.default.Direction.VERTICAL,
                            justify: P.default.Justify.CENTER,
                            className: X.truncatingText,
                            children: [(0, i.jsx)(d.Text, {
                                className: X.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: (0, i.jsx)(G.default, {
                                    children: r
                                })
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: z.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
                            })]
                        })]
                    })
                })
            })
        },
        Z = e => {
            let {
                expressionSourceGuild: t,
                hasJoinedExpressionSourceGuild: n,
                isDisplayingJoinGuildButtonInPopout: r
            } = e, {
                id: s,
                icon: o,
                name: l
            } = t, u = V.default.getGuildIconURL({
                id: s,
                icon: o,
                size: 32,
                canAnimate: !0
            }), _ = (n = null == n || n) || t.isDiscoverable(), c = () => {
                t.isDiscoverable() ? (0, F.startLurking)(s, {}) : n && (0, g.transitionTo)(j.Routes.CHANNEL(s, v.default.getChannelId(s)))
            }, E = t.isDiscoverable() && null != t.presenceCount, I = () => {
                let e = !r && !n;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: z.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                            membersOnline: t.presenceCount
                        })
                    }), (0, i.jsx)("div", {
                        className: X.dotSeparator
                    }), e ? (0, i.jsx)(d.Clickable, {
                        className: X.joinGuildLink,
                        onClick: c,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-link",
                            children: z.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                        })
                    }) : (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: z.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
                    })]
                })
            };
            return (0, i.jsxs)(P.default, {
                align: P.default.Align.CENTER,
                children: [(0, i.jsx)(B.default, {
                    mask: B.default.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: X.__invalid_guildIconContainer,
                    children: null != u && _ ? (0, i.jsxs)(d.Clickable, {
                        "aria-label": l,
                        onClick: c,
                        children: [(0, i.jsx)("img", {
                            src: u,
                            alt: "",
                            className: X.guildIcon
                        }), " :"]
                    }) : (0, i.jsx)(b.default, {
                        size: b.default.Sizes.SMALL,
                        className: X.guildIconNotClickable,
                        guild: t
                    })
                }), (0, i.jsxs)(P.default, {
                    direction: P.default.Direction.VERTICAL,
                    className: a()(X.__invalid_guildInformation, X.truncatingText),
                    children: [(0, i.jsxs)(P.default, {
                        align: P.default.Align.CENTER,
                        children: [(0, i.jsx)(U.default, {
                            guild: t,
                            className: X.guildBadge
                        }), _ ? (0, i.jsx)(d.Clickable, {
                            onClick: c,
                            className: X.truncatingText,
                            children: (0, i.jsx)(d.Heading, {
                                className: X.guildName,
                                variant: "heading-md/semibold",
                                children: (0, i.jsx)(G.default, {
                                    children: l
                                })
                            })
                        }) : (0, i.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: (0, i.jsx)(G.default, {
                                children: l
                            })
                        })]
                    }), (0, i.jsx)(P.default, {
                        align: P.default.Align.CENTER,
                        children: E ? I() : (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: z.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
                        })
                    })]
                })]
            })
        },
        J = e => {
            let {
                node: t,
                closePopout: n,
                refreshPositionKey: r,
                nonce: s
            } = e, {
                expressionSourceGuild: a,
                joinedEmojiSourceGuildRecord: o,
                emoji: l,
                isFetching: d
            } = (0, S.useEmojiAndSourceGuild)({
                emojiId: t.emojiId,
                refreshPositionKey: r
            });
            return d ? (0, i.jsx)(Y.PopoutLoadingAnimation, {}) : (0, i.jsx)(u.Dialog, {
                "aria-label": t.name,
                children: (0, i.jsx)($, {
                    node: t,
                    guildEmoji: null != l ? l : void 0,
                    expressionSourceGuild: a,
                    joinedEmojiSourceGuildRecord: o,
                    closePopout: n,
                    onToggleShowMoreEmojis: r,
                    demoMode: !1,
                    nonce: s
                })
            })
        },
        $ = e => {
            var t, n, s;
            let {
                node: u,
                expressionSourceGuild: S,
                joinedEmojiSourceGuildRecord: g,
                closePopout: L,
                onToggleShowMoreEmojis: v,
                guildEmoji: U,
                demoMode: b = !1,
                nonce: B
            } = e, V = (0, l.useStateFromStores)([y.default], () => y.default.getCurrentUser()), F = (0, l.useStateFromStores)([M.default], () => M.default.getGuildId()), q = x.default.isPremium(V), J = null != F && (F === (null == S ? void 0 : S.id) || F === (null == g ? void 0 : g.id)), $ = null != g, et = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
            b && (q = !0, et = !0, $ = !1, J = !1);
            let {
                enabled: en
            } = R.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "CustomGuildEmojiPopout"
            }, {
                autoTrackExposure: !0
            }), ei = Q(), {
                isRoleSubscriptionEmoji: er,
                isUnusableRoleSubscriptionEmoji: es,
                userIsRoleSubscriber: ea
            } = r.useMemo(() => null == U ? {
                isRoleSubscriptionEmoji: !1,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1
            } : {
                isRoleSubscriptionEmoji: m.isPurchasableRoleSubscriptionEmoji(U),
                isUnusableRoleSubscriptionEmoji: m.isUnusableRoleSubscriptionEmoji(U, null != F ? F : void 0),
                userIsRoleSubscriber: N.default.getUserSubscriptionRoles(U.guildId).size > 0
            }, [U, F]), eo = !!es && (0, f.shouldHideGuildPurchaseEntryPoints)(null == U ? void 0 : U.guildId), {
                analyticsLocations: el
            } = (0, I.default)(E.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
            (0, T.default)({
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: el,
                    emoji_guild_id: null !== (n = null == U ? void 0 : U.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (s = null == U ? void 0 : U.id) && void 0 !== s ? s : null
                }
            }, {
                disableTrack: !er
            });
            let eu = M.default.getGuildId(),
                ed = (0, H.getEmojiPopoutData)({
                    isPremium: q,
                    hasJoinedEmojiSourceGuild: $,
                    isRoleSubscriptionEmoji: er,
                    isUnusableRoleSubscriptionEmoji: es,
                    userIsRoleSubscriber: ea,
                    emojiComesFromCurrentGuild: J,
                    isDiscoverable: et,
                    shouldHideRoleSubscriptionCTA: eo,
                    onOpenPremiumSettings: () => {
                        L(), k.default.track(j.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_page: ei.page,
                            location_section: ei.section
                        }), (0, O.navigateToPremiumMarketingPage)()
                    }
                }),
                e_ = $ && es && !eo && (q && er || !q),
                ec = ed.emojiDescription,
                eE = (0, A.useTrackOpenPopout)({
                    emojiId: u.emojiId,
                    currentGuildId: eu,
                    popoutData: ed,
                    emojiSourceGuildId: null == S ? void 0 : S.id,
                    nonce: B,
                    demoMode: b
                }),
                eI = ed.type === H.EmojiPopoutType.JOIN_GUILD,
                eT = ed.type === H.EmojiPopoutType.GET_PREMIUM,
                [ef, eS] = r.useState(!1),
                eh = et || $ && !J || null != S;
            return (0, i.jsxs)(Y.MessagePopoutContent, {
                className: X.popoutContent,
                children: [(() => {
                    let e = async () => {
                        if (b || null == S || $) return;
                        L();
                        let e = S.id;
                        try {
                            await _.default.joinGuild(e), _.default.transitionToGuildSync(e)
                        } catch {}
                    }, t = !$ && et;
                    return (0, i.jsxs)("div", {
                        className: X.emojiSection,
                        children: [(0, i.jsxs)(P.default, {
                            children: [(0, i.jsx)(c.default, {
                                className: X.primaryEmoji,
                                emojiId: u.emojiId,
                                emojiName: u.name,
                                animated: u.animated,
                                size: "jumbo"
                            }), (0, i.jsxs)(P.default, {
                                direction: P.default.Direction.VERTICAL,
                                justify: P.default.Justify.CENTER,
                                className: X.truncatingText,
                                children: [(0, i.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    children: (0, i.jsx)(G.default, {
                                        children: u.name
                                    })
                                }), en && (0, i.jsxs)("div", {
                                    className: X.nitroTextAndBadge,
                                    children: [(0, i.jsx)(D.default, {
                                        isSelected: !1
                                    }), (0, i.jsx)(d.Text, {
                                        className: X.nitroText,
                                        variant: "text-sm/semibold",
                                        children: z.default.Messages.POWERED_BY_NITRO
                                    })]
                                }), null != ec && (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: ec
                                })]
                            })]
                        }), eT ? (0, i.jsx)(C.default, {
                            className: X.ctaButton,
                            subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            buttonText: ed.text,
                            onSubscribeModalClose: t => t ? e() : L(),
                            postSuccessGuild: t && null != S ? S : void 0,
                            premiumModalAnalyticsLocation: ei
                        }) : eI ? (0, i.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            className: X.ctaButton,
                            color: d.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: e,
                            children: ed.text
                        }) : void 0, e_ && (0, i.jsx)(p.default, {
                            className: X.ctaButton,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            onClick: () => {
                                L(), (null == g ? void 0 : g.id) != null && _.default.transitionToGuildSync(g.id, void 0, W.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [E.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                            },
                            children: ea ? z.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : z.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                        })]
                    })
                })(), eh && (() => {
                    let e = null != S && !$ && et,
                        t = () => {
                            e && (null == v || v(), !ef && !b && k.default.track(j.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eE), eS(!ef))
                        };
                    return (0, i.jsxs)("div", {
                        className: X.guildSection,
                        children: [(0, i.jsx)(d.FormTitle, {
                            className: X.guildTitle,
                            children: $ ? z.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : z.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                        }), (0, i.jsx)(Z, {
                            expressionSourceGuild: null != S ? S : h.default.createFromGuildRecord(g),
                            hasJoinedExpressionSourceGuild: $,
                            isDisplayingJoinGuildButtonInPopout: eI
                        }), e && (0, i.jsxs)(i.Fragment, {
                            children: [(() => {
                                let e = z.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                                return (0, i.jsx)(d.Clickable, {
                                    onClick: t,
                                    className: X.showMoreEmojis,
                                    children: (0, i.jsxs)(P.default, {
                                        children: [(0, i.jsx)(d.Text, {
                                            className: X.__invalid_showMoreEmojisLabel,
                                            "aria-label": e,
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: e
                                        }), (0, i.jsx)(w.default, {
                                            className: a()(X.showMoreEmojisArrow, {
                                                [X.showMoreEmojisArrowCollapsed]: !ef
                                            })
                                        })]
                                    })
                                })
                            })(), null != u.emojiId && ef && (0, i.jsx)(ee, {
                                emojiId: u.emojiId,
                                expressionSourceGuild: S,
                                popoutData: ed,
                                onClose: L,
                                hasJoinedEmojiSourceGuild: $,
                                isDisplayingButtonInTopSection: eI || eT
                            })]
                        })]
                    })
                })()]
            })
        },
        ee = e => {
            var t;
            let {
                emojiId: n,
                expressionSourceGuild: r,
                hasJoinedEmojiSourceGuild: s,
                popoutData: a,
                onClose: o,
                isDisplayingButtonInTopSection: l
            } = e, u = (null !== (t = null == r ? void 0 : r.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
                type: _,
                description: E
            } = a;
            return (0, i.jsxs)(P.default, {
                wrap: P.default.Wrap.WRAP,
                align: P.default.Align.CENTER,
                justify: P.default.Justify.CENTER,
                className: X.otherEmojisContainer,
                children: [s ? null : u.map(e => (0, i.jsx)(d.Tooltip, {
                    text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                    ...Y.EXPRESSION_TOOLTIP_PROPS,
                    children: t => (0, i.jsx)(c.default, {
                        className: X.otherEmoji,
                        emojiId: e.id,
                        animated: e.animated,
                        ...t
                    })
                }, e.id)), !l && (_ === H.EmojiPopoutType.GET_PREMIUM ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(C.default, {
                        subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: a.text,
                        className: X.ctaButton,
                        fullWidth: !0,
                        onClick: () => o()
                    }), null != E && (0, i.jsx)("div", {
                        className: X.ctaDescription,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            "aria-label": E,
                            children: E
                        })
                    })]
                }) : _ === H.EmojiPopoutType.JOIN_GUILD ? (0, i.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    className: X.ctaButton,
                    color: d.ButtonColors.BRAND,
                    fullWidth: !0,
                    onClick: () => {
                        (0, F.startLurking)(r.id, {})
                    },
                    children: a.text
                }) : null)]
            })
        }
}