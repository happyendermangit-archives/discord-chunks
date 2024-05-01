function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CustomGuildEmojiPopout: function() {
            return q
        },
        EmojiPopoutList: function() {
            return J
        },
        GuildDetails: function() {
            return X
        },
        MessageCustomEmojiPopout: function() {
            return Q
        },
        MessageStandardEmojiPopout: function() {
            return Z
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
        O = n("563927"),
        R = n("98278"),
        C = n("197115"),
        g = n("703656"),
        L = n("944486"),
        v = n("914010"),
        D = n("594174"),
        M = n("285952"),
        y = n("940627"),
        P = n("346656"),
        U = n("514342"),
        b = n("605403"),
        G = n("806519"),
        w = n("626135"),
        B = n("768581"),
        k = n("900849"),
        V = n("74538"),
        x = n("886132"),
        F = n("524444"),
        H = n("981631"),
        Y = n("176505"),
        j = n("474936"),
        W = n("689938"),
        K = n("180848");
    let z = () => ({
            page: null != (0, l.useStateFromStores)([v.default], () => v.default.getGuildId()) ? H.AnalyticsPages.GUILD_CHANNEL : H.AnalyticsPages.DM_CHANNEL,
            section: H.AnalyticsSections.EMOJI_UPSELL_POPOUT
        }),
        Z = e => {
            let {
                node: t
            } = e;
            (0, A.useTrackOpenPopout)({
                emojiId: t.emojiId,
                currentGuildId: v.default.getGuildId()
            });
            let n = (0, O.default)(t.name);
            return (0, i.jsx)(u.Dialog, {
                children: (0, i.jsx)(F.MessagePopoutContent, {
                    children: (0, i.jsxs)(M.default, {
                        className: K.emojiSection,
                        children: [(0, i.jsx)(c.default, {
                            emojiName: t.name,
                            className: K.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: "jumbo"
                        }), (0, i.jsxs)(M.default, {
                            direction: M.default.Direction.VERTICAL,
                            justify: M.default.Justify.CENTER,
                            className: K.truncatingText,
                            children: [(0, i.jsx)(d.Text, {
                                className: K.__invalid_emojiName,
                                variant: "text-md/semibold",
                                children: (0, i.jsx)(U.default, {
                                    children: n
                                })
                            }), (0, i.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: W.default.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
                            })]
                        })]
                    })
                })
            })
        },
        X = e => {
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
                t.isDiscoverable() ? (0, k.startLurking)(s, {}) : n && (0, g.transitionTo)(H.Routes.CHANNEL(s, L.default.getChannelId(s)))
            }, E = t.isDiscoverable() && null != t.presenceCount, I = () => {
                let e = !r && !n;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: W.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                            membersOnline: t.presenceCount
                        })
                    }), (0, i.jsx)("div", {
                        className: K.dotSeparator
                    }), e ? (0, i.jsx)(d.Clickable, {
                        className: K.joinGuildLink,
                        onClick: c,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "text-link",
                            children: W.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                        })
                    }) : (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: W.default.Messages.EMOJI_POPOUT_PUBLIC_SERVER
                    })]
                })
            };
            return (0, i.jsxs)(M.default, {
                align: M.default.Align.CENTER,
                children: [(0, i.jsx)(G.default, {
                    mask: G.default.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: K.__invalid_guildIconContainer,
                    children: null != u && _ ? (0, i.jsxs)(d.Clickable, {
                        "aria-label": l,
                        onClick: c,
                        children: [(0, i.jsx)("img", {
                            src: u,
                            alt: "",
                            className: K.guildIcon
                        }), " :"]
                    }) : (0, i.jsx)(P.default, {
                        size: P.default.Sizes.SMALL,
                        className: K.guildIconNotClickable,
                        guild: t
                    })
                }), (0, i.jsxs)(M.default, {
                    direction: M.default.Direction.VERTICAL,
                    className: a()(K.__invalid_guildInformation, K.truncatingText),
                    children: [(0, i.jsxs)(M.default, {
                        align: M.default.Align.CENTER,
                        children: [(0, i.jsx)(y.default, {
                            guild: t,
                            className: K.guildBadge
                        }), _ ? (0, i.jsx)(d.Clickable, {
                            onClick: c,
                            className: K.truncatingText,
                            children: (0, i.jsx)(d.Heading, {
                                className: K.guildName,
                                variant: "heading-md/semibold",
                                children: (0, i.jsx)(U.default, {
                                    children: l
                                })
                            })
                        }) : (0, i.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            children: (0, i.jsx)(U.default, {
                                children: l
                            })
                        })]
                    }), (0, i.jsx)(M.default, {
                        align: M.default.Align.CENTER,
                        children: E ? I() : (0, i.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: W.default.Messages.EMOJI_POPOUT_PRIVATE_SERVER
                        })
                    })]
                })]
            })
        },
        Q = e => {
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
            return d ? (0, i.jsx)(F.PopoutLoadingAnimation, {}) : (0, i.jsx)(u.Dialog, {
                "aria-label": t.name,
                children: (0, i.jsx)(q, {
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
        q = e => {
            var t, n, s;
            let {
                node: u,
                expressionSourceGuild: S,
                joinedEmojiSourceGuildRecord: O,
                closePopout: g,
                onToggleShowMoreEmojis: L,
                guildEmoji: y,
                demoMode: P = !1,
                nonce: G
            } = e, B = (0, l.useStateFromStores)([D.default], () => D.default.getCurrentUser()), k = (0, l.useStateFromStores)([v.default], () => v.default.getGuildId()), Z = V.default.isPremium(B), Q = null != k && (k === (null == S ? void 0 : S.id) || k === (null == O ? void 0 : O.id)), q = null != O, $ = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
            P && (Z = !0, $ = !0, q = !1, Q = !1);
            let ee = z(),
                {
                    isRoleSubscriptionEmoji: et,
                    isUnusableRoleSubscriptionEmoji: en,
                    userIsRoleSubscriber: ei
                } = r.useMemo(() => null == y ? {
                    isRoleSubscriptionEmoji: !1,
                    isUnusableRoleSubscriptionEmoji: !1,
                    userIsRoleSubscriber: !1
                } : {
                    isRoleSubscriptionEmoji: m.isPurchasableRoleSubscriptionEmoji(y),
                    isUnusableRoleSubscriptionEmoji: m.isUnusableRoleSubscriptionEmoji(y, null != k ? k : void 0),
                    userIsRoleSubscriber: N.default.getUserSubscriptionRoles(y.guildId).size > 0
                }, [y, k]),
                er = !!en && (0, f.shouldHideGuildPurchaseEntryPoints)(null == y ? void 0 : y.guildId),
                {
                    analyticsLocations: es
                } = (0, I.default)(E.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
            (0, T.default)({
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: es,
                    emoji_guild_id: null !== (n = null == y ? void 0 : y.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (s = null == y ? void 0 : y.id) && void 0 !== s ? s : null
                }
            }, {
                disableTrack: !et
            });
            let ea = v.default.getGuildId(),
                eo = (0, x.getEmojiPopoutData)({
                    isPremium: Z,
                    hasJoinedEmojiSourceGuild: q,
                    isRoleSubscriptionEmoji: et,
                    isUnusableRoleSubscriptionEmoji: en,
                    userIsRoleSubscriber: ei,
                    emojiComesFromCurrentGuild: Q,
                    isDiscoverable: $,
                    shouldHideRoleSubscriptionCTA: er,
                    onOpenPremiumSettings: () => {
                        g(), w.default.track(H.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_page: ee.page,
                            location_section: ee.section
                        }), (0, R.navigateToPremiumMarketingPage)()
                    }
                }),
                el = q && en && !er && (Z && et || !Z),
                eu = eo.emojiDescription,
                ed = (0, A.useTrackOpenPopout)({
                    emojiId: u.emojiId,
                    currentGuildId: ea,
                    popoutData: eo,
                    emojiSourceGuildId: null == S ? void 0 : S.id,
                    nonce: G,
                    demoMode: P
                }),
                e_ = eo.type === x.EmojiPopoutType.JOIN_GUILD,
                ec = eo.type === x.EmojiPopoutType.GET_PREMIUM,
                [eE, eI] = r.useState(!1),
                eT = $ || q && !Q || null != S;
            return (0, i.jsxs)(F.MessagePopoutContent, {
                className: K.popoutContent,
                children: [(() => {
                    let e = async () => {
                        if (P || null == S || q) return;
                        g();
                        let e = S.id;
                        try {
                            await _.default.joinGuild(e), _.default.transitionToGuildSync(e)
                        } catch {}
                    }, t = !q && $;
                    return (0, i.jsxs)("div", {
                        className: K.emojiSection,
                        children: [(0, i.jsxs)(M.default, {
                            children: [(0, i.jsx)(c.default, {
                                className: K.primaryEmoji,
                                emojiId: u.emojiId,
                                emojiName: u.name,
                                animated: u.animated,
                                size: "jumbo"
                            }), (0, i.jsxs)(M.default, {
                                direction: M.default.Direction.VERTICAL,
                                justify: M.default.Justify.CENTER,
                                className: K.truncatingText,
                                children: [(0, i.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    children: (0, i.jsx)(U.default, {
                                        children: u.name
                                    })
                                }), null != eu && (0, i.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    children: eu
                                })]
                            })]
                        }), ec ? (0, i.jsx)(C.default, {
                            className: K.ctaButton,
                            subscriptionTier: j.PremiumSubscriptionSKUs.TIER_2,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            buttonText: eo.text,
                            onSubscribeModalClose: t => t ? e() : g(),
                            postSuccessGuild: t && null != S ? S : void 0,
                            premiumModalAnalyticsLocation: ee
                        }) : e_ ? (0, i.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            className: K.ctaButton,
                            color: d.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: e,
                            children: eo.text
                        }) : void 0, el && (0, i.jsx)(p.default, {
                            className: K.ctaButton,
                            size: d.Button.Sizes.SMALL,
                            fullWidth: !0,
                            onClick: () => {
                                g(), (null == O ? void 0 : O.id) != null && _.default.transitionToGuildSync(O.id, void 0, Y.StaticChannelRoute.ROLE_SUBSCRIPTIONS, [E.default.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
                            },
                            children: ei ? W.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : W.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                        })]
                    })
                })(), eT && (() => {
                    let e = null != S && !q && $,
                        t = () => {
                            e && (null == L || L(), !eE && !P && w.default.track(H.AnalyticEvents.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ed), eI(!eE))
                        };
                    return (0, i.jsxs)("div", {
                        className: K.guildSection,
                        children: [(0, i.jsx)(d.FormTitle, {
                            className: K.guildTitle,
                            children: q ? W.default.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : W.default.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                        }), (0, i.jsx)(X, {
                            expressionSourceGuild: null != S ? S : h.default.createFromGuildRecord(O),
                            hasJoinedExpressionSourceGuild: q,
                            isDisplayingJoinGuildButtonInPopout: e_
                        }), e && (0, i.jsxs)(i.Fragment, {
                            children: [(() => {
                                let e = W.default.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                                return (0, i.jsx)(d.Clickable, {
                                    onClick: t,
                                    className: K.showMoreEmojis,
                                    children: (0, i.jsxs)(M.default, {
                                        children: [(0, i.jsx)(d.Text, {
                                            className: K.__invalid_showMoreEmojisLabel,
                                            "aria-label": e,
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: e
                                        }), (0, i.jsx)(b.default, {
                                            className: a()(K.showMoreEmojisArrow, {
                                                [K.showMoreEmojisArrowCollapsed]: !eE
                                            })
                                        })]
                                    })
                                })
                            })(), null != u.emojiId && eE && (0, i.jsx)(J, {
                                emojiId: u.emojiId,
                                expressionSourceGuild: S,
                                popoutData: eo,
                                onClose: g,
                                hasJoinedEmojiSourceGuild: q,
                                isDisplayingButtonInTopSection: e_ || ec
                            })]
                        })]
                    })
                })()]
            })
        },
        J = e => {
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
            return (0, i.jsxs)(M.default, {
                wrap: M.default.Wrap.WRAP,
                align: M.default.Align.CENTER,
                justify: M.default.Justify.CENTER,
                className: K.otherEmojisContainer,
                children: [s ? null : u.map(e => (0, i.jsx)(d.Tooltip, {
                    text: e.require_colons ? ":".concat(e.name, ":") : e.name,
                    ...F.EXPRESSION_TOOLTIP_PROPS,
                    children: t => (0, i.jsx)(c.default, {
                        className: K.otherEmoji,
                        emojiId: e.id,
                        animated: e.animated,
                        ...t
                    })
                }, e.id)), !l && (_ === x.EmojiPopoutType.GET_PREMIUM ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(C.default, {
                        subscriptionTier: j.PremiumSubscriptionSKUs.TIER_2,
                        buttonText: a.text,
                        className: K.ctaButton,
                        fullWidth: !0,
                        onClick: () => o()
                    }), null != E && (0, i.jsx)("div", {
                        className: K.ctaDescription,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            "aria-label": E,
                            children: E
                        })
                    })]
                }) : _ === x.EmojiPopoutType.JOIN_GUILD ? (0, i.jsx)(d.Button, {
                    size: d.Button.Sizes.SMALL,
                    className: K.ctaButton,
                    color: d.ButtonColors.BRAND,
                    fullWidth: !0,
                    onClick: () => {
                        (0, k.startLurking)(r.id, {})
                    },
                    children: a.text
                }) : null)]
            })
        }
}