function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanDiscoveryCardView: function() {
            return R
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("298433"),
        l = n("481060"),
        u = n("442837"),
        d = n("835473"),
        _ = n("728257"),
        c = n("114487"),
        E = n("550271"),
        I = n("703656"),
        T = n("271383"),
        f = n("594174"),
        S = n("768581"),
        h = n("524989"),
        A = n("308083"),
        m = n("689938"),
        N = n("563560");

    function p(e) {
        let {
            clan: t
        } = e, {
            wildcardDescriptors: n,
            branding: {
                primaryColor: r
            }
        } = t, s = n.filter(e => e !== A.EMPTY_WILDCARD).join(", "), o = (0, _.useColorIsLowContrastAgainstClientBackground)(r);
        return (0, i.jsx)("div", {
            className: N.wildcards,
            children: (0, i.jsx)(l.Text, {
                variant: "text-xs/semibold",
                style: o ? {} : {
                    color: r
                },
                lineClamp: 1,
                className: a()({
                    [N.wildcardsOverride]: o
                }),
                children: s
            })
        })
    }

    function O(e) {
        let {
            traits: t,
            traitsToHighlight: n,
            expanded: r
        } = e;
        return r ? (0, i.jsx)("div", {
            className: N.expandedTraitsContainer,
            children: t.map(e => (0, i.jsx)("div", {
                className: a()(N.trait, {
                    [N.highlightedTrait]: (null != n ? n : []).includes(e)
                }),
                children: (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    lineClamp: 1,
                    children: e
                })
            }, e))
        }) : (0, i.jsx)(h.default, {
            items: t,
            renderItem: e => (0, i.jsx)("div", {
                className: a()(N.trait, {
                    [N.highlightedTrait]: (null != n ? n : []).includes(e)
                }),
                children: (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-normal",
                    lineClamp: 1,
                    children: e
                })
            }, e),
            renderOverflow: e => (0, i.jsx)(l.Tooltip, {
                text: (0, i.jsx)("div", {
                    className: N.overflowTooltip,
                    children: e.map(e => (0, i.jsx)("div", {
                        className: N.trait,
                        children: e
                    }, e))
                }),
                "aria-label": "overflow",
                children: t => (0, i.jsx)("div", {
                    ...t,
                    className: N.trait,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-normal",
                        children: m.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
                            count: e.length
                        })
                    })
                })
            }),
            maxLines: 2,
            className: N.traitsContainer
        })
    }

    function R(e) {
        var t, n;
        let {
            clan: r,
            expanded: s,
            affinity: u,
            isMember: _,
            traitsToHighlight: I,
            className: T
        } = e, {
            tag: f,
            badge: h,
            branding: {
                primaryColor: R,
                secondaryColor: C
            }
        } = r, g = (0, d.default)(r.games), L = m.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
            count: r.memberCount
        }), D = null !== (t = S.default.getGuildIconURL({
            id: r.id,
            icon: r.icon,
            size: 64,
            canAnimate: !0
        })) && void 0 !== t ? t : void 0;
        return (0, i.jsxs)("div", {
            className: a()(N.card, T),
            children: [(0, i.jsx)("div", {
                className: N.cardBrandingHeader,
                style: {
                    background: "linear-gradient(90deg, ".concat(R, ", ").concat(C, ")")
                },
                children: (0, i.jsx)(E.ClanBadge, {
                    width: 32,
                    height: 32,
                    className: N.clanBadge,
                    badge: h.badgeKind,
                    primaryTintColor: h.primaryColor,
                    secondaryTintColor: h.secondaryColor
                })
            }), (0, i.jsxs)("div", {
                className: N.cardContent,
                children: [(0, i.jsxs)("div", {
                    className: N.cardContentTitleSection,
                    children: [(0, i.jsxs)("div", {
                        className: N.cardNameAndTagWrapper,
                        children: [(0, i.jsx)(c.ClanGuildIconSimple, {
                            guildName: r.name,
                            guildIconURL: D,
                            iconSize: 64,
                            className: N.clanIcon
                        }), (0, i.jsx)("div", {
                            className: N.clanTagChipletWrapper,
                            children: (0, i.jsx)(l.Tooltip, {
                                text: m.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                position: "top",
                                children: e => (0, i.jsxs)("div", {
                                    ...e,
                                    className: N.clanTagChiplet,
                                    children: [(0, i.jsx)(E.ClanBadge, {
                                        width: 16,
                                        height: 16,
                                        badge: h.badgeKind,
                                        primaryTintColor: h.primaryColor,
                                        secondaryTintColor: h.secondaryColor
                                    }), (0, i.jsx)(l.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-primary",
                                        children: f
                                    })]
                                })
                            })
                        })]
                    }), (0, i.jsx)(l.Heading, {
                        variant: "heading-md/medium",
                        color: "header-primary",
                        lineClamp: 1,
                        children: r.name
                    }), (0, i.jsxs)("div", {
                        className: N.clanInfoRow,
                        children: [(0, i.jsx)(l.Text, {
                            variant: "text-xxs/normal",
                            className: N.clanInfoItem,
                            children: (0, i.jsx)("span", {
                                role: "img",
                                "aria-label": m.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                children: "\uD83C\uDFAE"
                            })
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            className: N.clanInfoItem,
                            children: null !== (n = (0, A.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : m.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            className: N.clanInfoItem,
                            children: "\xb7"
                        }), (0, i.jsx)(p, {
                            clan: r
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: N.cardContentDescriptionSection,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: r.description
                    })
                }), (0, i.jsx)(O, {
                    traits: (0, A.getSortedTraits)(r.traits, I),
                    expanded: s,
                    traitsToHighlight: I
                })]
            }), (0, i.jsxs)("div", {
                className: N.cardFooter,
                children: [(0, i.jsx)("div", {
                    className: N.cardFooterInfo,
                    children: (0, i.jsxs)("div", {
                        className: N.cardFooterMembers,
                        children: [(0, i.jsx)(o.GroupIcon, {
                            className: N.cardFooterMembersIcon,
                            color: "currentColor"
                        }), (0, i.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: L
                        })]
                    })
                }), (0, i.jsx)("div", {
                    className: N.cardFooterGames,
                    children: g.map(e => {
                        if (null == e) return null;
                        let t = e.getIconURL(24);
                        return null == t ? null : (0, i.jsx)(l.Tooltip, {
                            text: e.name,
                            position: "bottom",
                            children: n => (0, i.jsx)("div", {
                                ...n,
                                className: N.cardFooterGame,
                                children: (0, i.jsx)("img", {
                                    src: t,
                                    alt: e.name,
                                    className: N.cardFooterGameImg
                                })
                            })
                        }, e.id)
                    })
                })]
            }), null != u ? (0, i.jsxs)("div", {
                className: N.cardBrandingFooter,
                style: {
                    background: "linear-gradient(90deg, ".concat(R, ", ").concat(C, ")")
                },
                children: [(0, i.jsx)(l.Text, {
                    variant: "text-xxs/normal",
                    children: u
                }), (0, i.jsx)(l.Text, {
                    variant: "text-xxs/normal",
                    children: _ ? ", Joined" : ", Not Joined"
                })]
            }) : null]
        })
    }
    t.default = function(e) {
        let {
            clan: t
        } = e, s = (0, u.useStateFromStores)([f.default], () => f.default.getCurrentUser()), a = (0, u.useStateFromStores)([T.default], () => T.default.isMember(t.id, null == s ? void 0 : s.id), [t, s]), o = r.useCallback(() => {
            if (a) {
                (0, I.transitionToGuild)(t.id);
                return
            }(0, l.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("80026"), n.e("18482")]).then(n.bind(n, "767593"));
                return n => (0, i.jsx)(e, {
                    ...n,
                    clan: t
                })
            })
        }, [t, a]);
        return (0, i.jsx)(l.Clickable, {
            onClick: o,
            className: N.clickableCard,
            children: (0, i.jsx)(R, {
                ...e,
                isMember: a
            })
        })
    }
}