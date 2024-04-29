function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanDiscoveryCardView: function() {
            return O
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("442837"),
        u = n("835473"),
        d = n("728257"),
        _ = n("114487"),
        c = n("550271"),
        E = n("703656"),
        I = n("271383"),
        T = n("594174"),
        f = n("768581"),
        S = n("524989"),
        h = n("308083"),
        A = n("689938"),
        m = n("228706");

    function N(e) {
        let {
            clan: t
        } = e, {
            wildcardDescriptors: n,
            branding: {
                primaryColor: r
            }
        } = t, s = n.filter(e => e !== h.EMPTY_WILDCARD).join(", "), l = (0, d.useColorIsLowContrastAgainstClientBackground)(r);
        return 0 === s.length ? null : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: m.clanInfoItem,
                children: "\xb7"
            }), (0, i.jsx)("div", {
                className: m.wildcards,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-xs/semibold",
                    style: l ? {} : {
                        color: r
                    },
                    lineClamp: 1,
                    className: a()({
                        [m.wildcardsOverride]: l
                    }),
                    children: s
                })
            })]
        })
    }

    function p(e) {
        let {
            traits: t,
            traitsToHighlight: n,
            expanded: r
        } = e;
        return r ? (0, i.jsx)("div", {
            className: m.expandedTraitsContainer,
            children: t.map(e => (0, i.jsx)("div", {
                className: a()(m.trait, {
                    [m.highlightedTrait]: (null != n ? n : []).includes(e)
                }),
                children: (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    lineClamp: 1,
                    children: e
                })
            }, e))
        }) : (0, i.jsx)(S.default, {
            items: t,
            renderItem: e => (0, i.jsx)("div", {
                className: a()(m.trait, {
                    [m.highlightedTrait]: (null != n ? n : []).includes(e)
                }),
                children: (0, i.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    lineClamp: 1,
                    children: e
                })
            }, e),
            renderOverflow: e => (0, i.jsx)(o.Tooltip, {
                text: (0, i.jsx)("div", {
                    className: m.overflowTooltip,
                    children: e.map(e => (0, i.jsx)("div", {
                        className: m.trait,
                        children: e
                    }, e))
                }),
                "aria-label": "overflow",
                children: t => (0, i.jsx)("div", {
                    ...t,
                    className: m.trait,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-normal",
                        children: A.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
                            count: e.length
                        })
                    })
                })
            }),
            maxLines: 2,
            className: m.traitsContainer
        })
    }

    function O(e) {
        var t, n;
        let {
            clan: r,
            expanded: s,
            affinity: l,
            isMember: d,
            traitsToHighlight: E,
            className: I
        } = e, {
            tag: T,
            badge: S,
            branding: {
                primaryColor: O,
                secondaryColor: R
            }
        } = r, C = (0, u.default)(r.games), g = A.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
            count: r.memberCount
        }), L = null !== (t = f.default.getGuildIconURL({
            id: r.id,
            icon: r.icon,
            size: 64,
            canAnimate: !0
        })) && void 0 !== t ? t : void 0;
        return (0, i.jsxs)("div", {
            className: a()(m.card, I),
            children: [(0, i.jsx)("div", {
                className: m.cardBrandingHeader,
                style: {
                    background: "linear-gradient(90deg, ".concat(O, ", ").concat(R, ")")
                },
                children: (0, i.jsx)(c.ClanBadge, {
                    width: 32,
                    height: 32,
                    className: m.clanBadge,
                    badge: S.badgeKind,
                    primaryTintColor: S.primaryColor,
                    secondaryTintColor: S.secondaryColor
                })
            }), (0, i.jsxs)("div", {
                className: m.cardContent,
                children: [(0, i.jsxs)("div", {
                    className: m.cardContentTitleSection,
                    children: [(0, i.jsxs)("div", {
                        className: m.cardNameAndTagWrapper,
                        children: [(0, i.jsx)(_.ClanGuildIconSimple, {
                            guildName: r.name,
                            guildIconURL: L,
                            iconSize: 64,
                            className: m.clanIcon
                        }), (0, i.jsx)("div", {
                            className: m.clanTagChipletWrapper,
                            children: (0, i.jsx)(o.Tooltip, {
                                text: A.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                position: "top",
                                shouldShow: !d,
                                children: e => (0, i.jsxs)("div", {
                                    ...e,
                                    className: m.clanTagChiplet,
                                    children: [(0, i.jsx)(c.ClanBadge, {
                                        width: 16,
                                        height: 16,
                                        badge: S.badgeKind,
                                        primaryTintColor: S.primaryColor,
                                        secondaryTintColor: S.secondaryColor
                                    }), (0, i.jsx)(o.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-primary",
                                        children: T
                                    })]
                                })
                            })
                        })]
                    }), (0, i.jsx)(o.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        lineClamp: 1,
                        children: r.name
                    }), (0, i.jsxs)("div", {
                        className: m.clanInfoRow,
                        children: [(0, i.jsx)(o.Text, {
                            variant: "text-xxs/normal",
                            className: m.clanInfoItem,
                            children: (0, i.jsx)("span", {
                                role: "img",
                                "aria-label": A.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                children: "\uD83C\uDFAE"
                            })
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            className: m.clanInfoItem,
                            children: null !== (n = (0, h.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : A.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                        }), (0, i.jsx)(N, {
                            clan: r
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: m.cardContentDescriptionSection,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: r.description
                    })
                }), (0, i.jsx)(p, {
                    traits: (0, h.getSortedTraits)(r.traits, E),
                    expanded: s,
                    traitsToHighlight: E
                })]
            }), (0, i.jsxs)("div", {
                className: m.cardFooter,
                children: [(0, i.jsx)("div", {
                    className: m.cardFooterInfo,
                    children: (0, i.jsx)("div", {
                        className: m.cardFooterMembers,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: g
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: m.cardFooterGames,
                    children: C.map(e => {
                        if (null == e) return null;
                        let t = e.getIconURL(24);
                        return null == t ? null : (0, i.jsx)(o.Tooltip, {
                            text: e.name,
                            position: "bottom",
                            children: n => (0, i.jsx)("div", {
                                ...n,
                                className: m.cardFooterGame,
                                children: (0, i.jsx)("img", {
                                    src: t,
                                    alt: e.name,
                                    className: m.cardFooterGameImg
                                })
                            })
                        }, e.id)
                    })
                })]
            }), null != l ? (0, i.jsxs)("div", {
                className: m.cardBrandingFooter,
                style: {
                    background: "linear-gradient(90deg, ".concat(O, ", ").concat(R, ")")
                },
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    children: l
                }), (0, i.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    children: d ? ", Joined" : ", Not Joined"
                })]
            }) : null]
        })
    }
    t.default = function(e) {
        let {
            clan: t
        } = e, s = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser()), a = (0, l.useStateFromStores)([I.default], () => I.default.isMember(t.id, null == s ? void 0 : s.id), [t, s]), u = r.useCallback(() => {
            if (a) {
                (0, E.transitionToGuild)(t.id);
                return
            }(0, o.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    clan: t
                })
            })
        }, [t, a]);
        return (0, i.jsx)(o.Clickable, {
            onClick: u,
            className: m.clickableCard,
            children: (0, i.jsx)(O, {
                ...e,
                isMember: a
            })
        })
    }
}