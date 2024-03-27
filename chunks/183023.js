function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CustomGuildEmojiPopout: function() {
            return Z
        },
        EmojiPopoutList: function() {
            return $
        },
        GuildDetails: function() {
            return q
        },
        MessageCustomEmojiPopout: function() {
            return J
        },
        MessageStandardEmojiPopout: function() {
            return Q
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
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
        O = n("761966"),
        p = n("98278"),
        R = n("642345"),
        C = n("197115"),
        g = n("703656"),
        L = n("170671"),
        D = n("944486"),
        v = n("914010"),
        M = n("594174"),
        y = n("285952"),
        P = n("940627"),
        U = n("346656"),
        b = n("514342"),
        G = n("605403"),
        w = n("806519"),
        k = n("626135"),
        B = n("768581"),
        V = n("900849"),
        F = n("74538"),
        x = n("886132"),
        H = n("524444"),
        Y = n("981631"),
        j = n("176505"),
        W = n("474936"),
        K = n("689938"),
        z = n("163237");
    let X = () => ({
            page: null != (0, l.useStateFromStores)([v.default], () => v.default.getGuildId()) ? Y.AnalyticsPages.GUILD_CHANNEL : Y.AnalyticsPages.DM_CHANNEL,
            section: Y.AnalyticsSections.EMOJI_UPSELL_POPOUT
        }),
        Q = e => {
            let {
                node: t
            } = e;
            return (0, A.useTrackOpenPopout)({
                emojiId: t.emojiId,
                currentGuildId: v.default.getGuildId()
            }), (0, i.jsx)(u.Dialog, {
                children: (0, i.jsx)(H.MessagePopoutContent, {
                    children: (0, i.jsxs)(y.default, {
                        className: z.emojiSection,
                        children: [(0, i.jsx)(c.default, {
                            emojiName: t.name,
                            className: z.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: "jumbo"
                        }), (0, i.jsxs)(y.default, {
                            direction: y.default.Direction.VERTICAL,
                            justify: y.default.Justify.CENTER,
                            className: z.truncatingText,
                            children: [(0, i.jsx)(d.Text, {
                                className: z.emojiName,
                                variant: "text-md/semibold",
                                children: (0, i.jsx)(b.default, {
                                    children: t.name
                                })
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: K.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
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
                isDisplayingJoinGuildButtonInPopout: r
            } = e, {
                id: s,
                icon: o,
                name: l
            } = t, u = B.default.getGuildIconURL({
                id: s,
                icon: o,
                size: 32,
                canAnimate: !0
            }), _ = (n = null == n || n) || t.isDiscoverable(), c = () => {
                t.isDiscoverable() ? (0, V.startLurking)(s, {}) : n && (0, g.transitionTo)(Y.Routes.CHANNEL(s, D.default.getChannelId(s)))
            }, E = t.isDiscoverable() && null != t.presenceCount, I = () => {
                let e = !r && !n;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: K.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                            membersOnline: t.presenceCount
                        })
                    }), (0, i.jsx)("div", {
                        className: z.dotSeparator
                    }), e ? (0, i.jsx)(d.Clickable, {
                        className: z.joinGuildLink,
                        onClick: c,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-link",
                            children: K.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                        })
                    }) : (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: K.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
                    })]
                })
            };
            return (0, i.jsxs)(y.default, {
                align: y.default.Align.CENTER,
                children: [(0, i.jsx)(w.default, {
                    mask: w.default.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: z.guildIconContainer,
                    children: null != u && _ ? (0, i.jsxs)(d.Clickable, {
                        "aria-label": l,
                        onClick: c,
                        children: [(0, i.jsx)("img", {
                            src: u,
                            alt: "",
                            className: z.guildIcon
                        }), " :"]
                    }) : (0, i.jsx)(U.default, {
                        size: U.default.Sizes.SMALL,
                        className: z.guildIconNotClickable,
                        guild: t
                    })
                }), (0, i.jsxs)(y.default, {
                    direction: y.default.Direction.VERTICAL,
                    className: a()(z.guildInformation, z.truncatingText),
                    children: [(0, i.jsxs)(y.default, {
                        align: y.default.Align.CENTER,
                        children: [(0, i.jsx)(P.default, {
                            guild: t,
                            className: z.guildBadge
                        }), _ ? (0, i.jsx)(d.Clickable, {
                            onClick: c,
                            className: z.truncatingText,
                            children: (0, i.jsx)(d.Heading, {
                                className: z.guildName,
                                variant: "heading-md/semibold",
                                children: (0, i.jsx)(b.default, {
                                    children: l
                                })
                            })
                        }) : (0, i.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: (0, i.jsx)(b.default, {
                                children: l
                            })
                        })]
                    }), (0, i.jsx)(y.default, {
                        align: y.default.Align.CENTER,
                        children: E ? I() : (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: K.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
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
            return d ? (0, i.jsx)(H.PopoutLoadingAnimation, {}) : (0, i.jsx)(u.Dialog, {
                "aria-label": t.name,
                children: (0, i.jsx)(Z, {
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
        Z = e => {
            var t, n, s;
            let {
                node: u,
                expressionSourceGuild: S,
                joinedEmojiSourceGuildRecord: g,
                closePopout: D,
                onToggleShowMoreEmojis: P,
                guildEmoji: U,
                demoMode: w = !1,
                nonce: B
            } = e, V = (0, l.useStateFromStores)([M.default], () => M.default.getCurrentUser()), Q = (0, l.useStateFromStores)([v.default], () => v.default.getGuildId()), J = F.default.isPremium(V), Z = null != Q && (Q === (null == S ? void 0 : S.id) || Q === (null == g ? void 0 : g.id)), ee = null != g, et = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
            w && (J = !0, et = !0, ee = !1, Z = !1);
            let {
                enabled: en
            } = R.NitroBadgeOnEmojiHoverExperiment.useExperiment({
                location: "CustomGuildEmojiPopout"
            }, {
                autoTrackExposure: !0
            }), ei = X(), {
                isRoleSubscriptionEmoji: er,
                isUnusableRoleSubscriptionEmoji: es,
                userIsRoleSubscriber: ea
            } = r.useMemo(() => null == U ? {
                isRoleSubscriptionEmoji: !1,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1
            } : {
                isRoleSubscriptionEmoji: m.isPurchasableRoleSubscriptionEmoji(U),
                isUnusableRoleSubscriptionEmoji: m.isUnusableRoleSubscriptionEmoji(U, null != Q ? Q : void 0),
                userIsRoleSubscriber: N.default.getUserSubscriptionRoles(U.guildId).size > 0
            }, [U, Q]), eo = !!es && (0, f.shouldHideGuildPurchaseEntryPoints)(null == U ? void 0 : U.guildId), {
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
            let eu = v.default.getGuildId(),
                ed = (0, x.getEmojiPopoutData)({
                    isPremium: J,
                    hasJoinedEmojiSourceGuild: ee,
                    isRoleSubscriptionEmoji: er,
                    isUnusableRoleSubscriptionEmoji: es,
                    userIsRoleSubscriber: ea,
                    emojiComesFromCurrentGuild: Z,
                    isDiscoverable: et,
                    shouldHideRoleSubscriptionCTA: eo,
                    onOpenPremiumSettings: () => {
                        D(), k.default.track(Y.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_page: ei.page,
                            location_section: ei.section
                        }), (0, p.navigateToPremiumMarketingPage)()
                    }
                }),
                e_ = ee && es && !eo && (J && er || !J),
                ec = ed.emojiDescription,
                eE = (0, A.useTrackOpenPopout)({
                    emojiId: u.emojiId,
                    currentGuildId: eu,
                    popoutData: ed,
                    emojiSourceGuildId: null == S ? void 0 : S.id,
                    nonce: B,
                    demoMode: w
                }),
                eI = ed.type === x.EmojiPopoutType.JOIN_GUILD,
                eT = ed.type === x.EmojiPopoutType.GET_PREMIUM,
                [ef, eS] = r.useState(!1),
                eh = et || ee && !Z || null != S;
            return (0, i.jsxs)(H.MessagePopoutContent, {
                className: z.popoutContent,
                children: [(() => {
                    let e = async () => {
                        if (w || null == S || ee) return;
                        D();
                        let e = S.id;
                        try {
                            await _.default.joinGuild(e), _.default.transitionToGuildSync(e)
                        } catch {}
                    }, t = !ee && et;
                    return (0, i.jsxs)("div", {
                        className: z.emojiSection,
                        children: [(0, i.jsxs)(y.default, {
                            children: [(0, i.jsx)(c.default, {
                                className: z.primaryEmoji,
                                emojiId: u.emojiId,
                                emojiName: u.name,
                                animated: u.animated,
                                size: "jumbo"
                            }), (0, i.jsxs)(y.default, {
                                direction: y.default.Direction.VERTICAL,
                                justify: y.default.Justify.CENTER,
                                className: z.truncatingText,
                                children: [(0, i.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    children: (0, i.jsx)(b.default, {
                                        children: u.name
                                    })
                                }), en && (0, i.jsxs)("div", {
                                    className: z.nitroTextAndBadge,
                                    children: [(0, i.jsx)(L.default, {
                                        isSelected: !1
                                    }), (0, i.jsx)(d.Text, {
                                        className: z.nitroText,
                                        variant: "text-sm/semibold",
                                        children: K.default.Messages.POWERED_BY_NITRO
                                    })]
                                }), null != ec && (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: ec
                                })]
                            })]
                        }), eT ? (0, i.jsx)(C.default, {
                            className: z.ctaButton,
                            subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            buttonText: ed.text,
                            onSubscribeModalClose: t => t ? e() : D(),
                            postSuccessGuild: t && null != S ? S : void 0,
                            premiumModalAnalyticsLocation: ei
                        }) : eI ? (0, i.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            className: z.ctaButton,
                            color: d.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: e,
                            children: ed.text
                        }) : void 0, e_ && (0, i.jsx)(O.default, {
                            className: z.ctaButton,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            onClick: () => {
                                D(), (null == g ? void 0 : g.id) != null && _.default.transitionToGuildSync(g.id, void 0, j.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [E.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                            },
                            children: ea ? K.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : K.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                        })]
                    })
                })(), eh && (() => {
                    let e = null != S && !ee && et,
                        t = () => {
                            e && (null == P || P(), !ef && !w && k.default.track(Y.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eE), eS(!ef))
                        };
                    return (0, i.jsxs)("div", {
                        className: z.guildSection,
                        children: [(0, i.jsx)(d.FormTitle, {
                            className: z.guildTitle,
                            children: ee ? K.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : K.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                        }), (0, i.jsx)(q, {
                            expressionSourceGuild: null != S ? S : h.default.createFromGuildRecord(g),
                            hasJoinedExpressionSourceGuild: ee,
                            isDisplayingJoinGuildButtonInPopout: eI
                        }), e && (0, i.jsxs)(i.Fragment, {
                            children: [(() => {
                                let e = K.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                                return (0, i.jsx)(d.Clickable, {
                                    onClick: t,
                                    className: z.showMoreEmojis,
                                    children: (0, i.jsxs)(y.default, {
                                        children: [(0, i.jsx)(d.Text, {
                                            className: z.showMoreEmojisLabel,
                                            "aria-label": e,
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: e
                                        }), (0, i.jsx)(G.default, {
                                            className: a()(z.showMoreEmojisArrow, {
                                                [z.showMoreEmojisArrowCollapsed]: !ef
                                            })
                                        })]
                                    })
                                })
                            })(), null != u.emojiId && ef && (0, i.jsx)($, {
                                emojiId: u.emojiId,
                                expressionSourceGuild: S,
                                popoutData: ed,
                                onClose: D,
                                hasJoinedEmojiSourceGuild: ee,
                                isDisplayingButtonInTopSection: eI || eT
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
                expressionSourceGuild: r,
                hasJoinedEmojiSourceGuild: s,
                popoutData: a,
                onClose: o,
                isDisplayingButtonInTopSection: l
            } = e, u = (null !== (t = null == r ? void 0 : r.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
                type: _,
                description: E
            } = a;
            return (0, i.jsxs)(y.default, {
                wrap: y.default.Wrap.WRAP,
                align: y.default.Align.CENTER,
                justify: y.default.Justify.CENTER,
                className: z.otherEmojisContainer,
                children: [s ? null : u.map(e => (0, i.jsx)(d.Tooltip, {
                    text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                    ...H.EXPRESSION_TOOLTIP_PROPS,
                    children: t => (0, i.jsx)(c.default, {
                        className: z.otherEmoji,
                        emojiId: e.id,
                        animated: e.animated,
                        ...t
                    })
                }, e.id)), !l && (_ === x.EmojiPopoutType.GET_PREMIUM ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(C.default, {
                        subscriptionTier: W.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: a.text,
                        className: z.ctaButton,
                        fullWidth: !0,
                        onClick: () => o()
                    }), null != E && (0, i.jsx)("div", {
                        className: z.ctaDescription,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            "aria-label": E,
                            children: E
                        })
                    })]
                }) : _ === x.EmojiPopoutType.JOIN_GUILD ? (0, i.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    className: z.ctaButton,
                    color: d.ButtonColors.BRAND,
                    fullWidth: !0,
                    onClick: () => {
                        (0, V.startLurking)(r.id, {})
                    },
                    children: a.text
                }) : null)]
            })
        }
}