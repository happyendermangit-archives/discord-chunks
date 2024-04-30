function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanDiscoveryCardTraits: function() {
            return g
        },
        ClanDiscoveryCardView: function() {
            return L
        }
    }), n("47120");
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
        E = n("937111"),
        I = n("703656"),
        T = n("271383"),
        f = n("594174"),
        S = n("626135"),
        h = n("768581"),
        A = n("524989"),
        m = n("981631"),
        N = n("308083"),
        p = n("689938"),
        O = n("228706");

    function R(e) {
        let {
            clan: t
        } = e, {
            wildcardDescriptors: n,
            branding: {
                primaryColor: r
            }
        } = t, s = n.filter(e => e !== N.EMPTY_WILDCARD).join(", "), l = (0, d.useColorIsLowContrastAgainstClientBackground)(r);
        return 0 === s.length ? null : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: O.clanInfoItem,
                children: "\xb7"
            }), (0, i.jsx)("div", {
                className: O.wildcards,
                children: (0, i.jsx)(o.Text, {
                    variant: "text-xs/semibold",
                    style: l ? {} : {
                        color: r
                    },
                    lineClamp: 1,
                    className: a()({
                        [O.wildcardsOverride]: l
                    }),
                    children: s
                })
            })]
        })
    }

    function C(e) {
        let {
            trait: t,
            isHighlighted: n
        } = e;
        return (0, i.jsx)("div", {
            className: a()(O.trait, {
                [O.highlightedTrait]: n
            }),
            children: (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-normal",
                lineClamp: 1,
                children: t
            })
        })
    }

    function g(e) {
        let {
            traits: t,
            traitsToHighlight: n,
            expanded: s
        } = e, a = r.useMemo(() => new Set(n), [n]);
        return s ? (0, i.jsx)("div", {
            className: O.expandedTraitsContainer,
            children: t.map(e => (0, i.jsx)(C, {
                trait: e,
                isHighlighted: a.has(e)
            }, e))
        }) : (0, i.jsx)(A.default, {
            items: t,
            renderItem: e => (0, i.jsx)(C, {
                trait: e,
                isHighlighted: a.has(e)
            }, e),
            renderOverflow: e => (0, i.jsx)(o.Tooltip, {
                text: (0, i.jsx)("div", {
                    className: O.overflowTooltip,
                    children: e.map(e => (0, i.jsx)("div", {
                        className: O.trait,
                        children: e
                    }, e))
                }),
                "aria-label": "overflow",
                children: t => (0, i.jsx)("div", {
                    ...t,
                    className: O.trait,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-normal",
                        children: p.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
                            count: e.length
                        })
                    })
                })
            }),
            maxLines: 2,
            className: O.traitsContainer
        })
    }

    function L(e) {
        var t, n;
        let {
            clan: r,
            banner: s,
            expanded: l,
            affinity: d,
            isMember: E,
            traitsToHighlight: I,
            className: T
        } = e, {
            tag: f,
            badge: S,
            branding: {
                primaryColor: A,
                secondaryColor: m
            }
        } = r, C = (0, u.default)(r.games), L = p.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
            count: r.memberCount
        }), D = null !== (t = h.default.getGuildIconURL({
            id: r.id,
            icon: r.icon,
            size: 64,
            canAnimate: !0
        })) && void 0 !== t ? t : void 0;
        return (0, i.jsxs)("div", {
            className: a()(O.card, T),
            children: [(0, i.jsxs)("div", {
                className: O.cardBrandingHeader,
                style: {
                    background: "linear-gradient(90deg, ".concat(A, ", ").concat(m, ")")
                },
                children: [s, (0, i.jsx)(c.ClanBadge, {
                    width: 32,
                    height: 32,
                    className: O.clanBadge,
                    badge: S.badgeKind,
                    primaryTintColor: S.primaryColor,
                    secondaryTintColor: S.secondaryColor
                })]
            }), (0, i.jsxs)("div", {
                className: O.cardContent,
                children: [(0, i.jsxs)("div", {
                    className: O.cardContentTitleSection,
                    children: [(0, i.jsxs)("div", {
                        className: O.cardNameAndTagWrapper,
                        children: [(0, i.jsx)(_.ClanGuildIconSimple, {
                            guildName: r.name,
                            guildIconURL: D,
                            iconSize: 64,
                            className: O.clanIcon
                        }), (0, i.jsx)("div", {
                            className: O.clanTagChipletWrapper,
                            children: (0, i.jsx)(o.Tooltip, {
                                text: p.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                position: "top",
                                shouldShow: !E,
                                children: e => (0, i.jsxs)("div", {
                                    ...e,
                                    className: O.clanTagChiplet,
                                    children: [(0, i.jsx)(c.ClanBadge, {
                                        width: 16,
                                        height: 16,
                                        badge: S.badgeKind,
                                        primaryTintColor: S.primaryColor,
                                        secondaryTintColor: S.secondaryColor
                                    }), (0, i.jsx)(o.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-primary",
                                        children: f
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
                        className: O.clanInfoRow,
                        children: [(0, i.jsx)(o.Text, {
                            variant: "text-xxs/normal",
                            className: O.clanInfoItem,
                            children: (0, i.jsx)("span", {
                                role: "img",
                                "aria-label": p.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                children: "\uD83C\uDFAE"
                            })
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            className: O.clanInfoItem,
                            children: null !== (n = (0, N.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : p.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                        }), (0, i.jsx)(R, {
                            clan: r
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: O.cardContentDescriptionSection,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: r.description
                    })
                }), (0, i.jsx)(g, {
                    traits: (0, N.getSortedTraits)(r.traits, I),
                    expanded: l,
                    traitsToHighlight: I
                })]
            }), (0, i.jsxs)("div", {
                className: O.cardFooter,
                children: [(0, i.jsx)("div", {
                    className: O.cardFooterInfo,
                    children: (0, i.jsx)("div", {
                        className: O.cardFooterMembers,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: L
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: O.cardFooterGames,
                    children: C.map(e => {
                        if (null == e) return null;
                        let t = e.getIconURL(24);
                        return null == t ? null : (0, i.jsx)(o.Tooltip, {
                            text: e.name,
                            position: "bottom",
                            children: n => (0, i.jsx)("div", {
                                ...n,
                                className: O.cardFooterGame,
                                children: (0, i.jsx)("img", {
                                    src: t,
                                    alt: e.name,
                                    className: O.cardFooterGameImg
                                })
                            })
                        }, e.id)
                    })
                })]
            }), null != d ? (0, i.jsxs)("div", {
                className: O.cardBrandingFooter,
                style: {
                    background: "linear-gradient(90deg, ".concat(A, ", ").concat(m, ")")
                },
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    children: d
                }), (0, i.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    children: E ? ", Joined" : ", Not Joined"
                })]
            }) : null]
        })
    }
    t.default = function(e) {
        let {
            clan: t,
            affinity: s,
            index: a
        } = e, u = (0, l.useStateFromStores)([f.default], () => f.default.getCurrentUser()), d = (0, l.useStateFromStores)([T.default], () => T.default.isMember(t.id, null == u ? void 0 : u.id), [t, u]), _ = r.useCallback(() => {
            let e = null != E.default.getRequest(t.id);
            if (S.default.track(m.AnalyticEvents.CLAN_DISCOVERY_CARD_CLICKED, {
                    guild_id: t.id,
                    is_member: d,
                    has_join_request: e,
                    affinity: s,
                    index: a
                }), d) {
                (0, I.transitionToGuild)(t.id);
                return
            }
            if (e) {
                (0, I.transitionTo)(m.Routes.GUILD_MEMBER_VERIFICATION(t.id));
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
        }, [t, d, s, a]);
        return (0, i.jsx)(o.Clickable, {
            onClick: _,
            className: O.clickableCard,
            children: (0, i.jsx)(L, {
                ...e,
                isMember: d
            })
        })
    }
}