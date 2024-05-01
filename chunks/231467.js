function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ClanDiscoveryCardTraits: function() {
            return L
        },
        ClanDiscoveryCardView: function() {
            return D
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("481060"),
        l = n("442837"),
        u = n("835473"),
        d = n("353093"),
        _ = n("728257"),
        c = n("114487"),
        E = n("550271"),
        I = n("937111"),
        T = n("703656"),
        f = n("271383"),
        S = n("594174"),
        h = n("626135"),
        A = n("768581"),
        m = n("524989"),
        N = n("981631"),
        p = n("308083"),
        O = n("689938"),
        R = n("228706");

    function C(e) {
        let {
            clan: t
        } = e, {
            wildcardDescriptors: n,
            branding: {
                primaryColor: a
            }
        } = t, s = n.filter(e => e !== p.EMPTY_WILDCARD).join(", "), l = (0, _.useColorIsLowContrastAgainstClientBackground)(a), u = r.useRef(null), [d, c] = r.useState(!1);
        if (r.useEffect(() => {
                let e = u.current;
                null != e && null != e.offsetWidth && null != e.scrollWidth && c(e.offsetWidth < e.scrollWidth)
            }, []), 0 === s.length) return null;
        let E = {
            color: l ? "var(--text-normal)" : a
        };
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-secondary",
                className: R.clanInfoItem,
                children: "\xb7"
            }), (0, i.jsx)(o.Tooltip, {
                text: s,
                color: o.Tooltip.Colors.PRIMARY,
                shouldShow: d,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    style: E,
                    className: R.wildCardText,
                    ref: u,
                    children: s
                })
            })]
        })
    }

    function g(e) {
        let {
            trait: t,
            isHighlighted: n
        } = e;
        return (0, i.jsx)("div", {
            className: s()(R.trait, {
                [R.highlightedTrait]: n
            }),
            children: (0, i.jsx)(o.Text, {
                variant: "text-xs/normal",
                color: "text-normal",
                lineClamp: 1,
                children: t
            })
        })
    }

    function L(e) {
        let {
            traits: t,
            traitsToHighlight: n,
            expanded: a
        } = e, s = r.useMemo(() => new Set(n), [n]);
        return a ? (0, i.jsx)("div", {
            className: R.expandedTraitsContainer,
            children: t.map(e => (0, i.jsx)(g, {
                trait: e,
                isHighlighted: s.has(e)
            }, e))
        }) : (0, i.jsx)(m.default, {
            items: t,
            renderItem: e => (0, i.jsx)(g, {
                trait: e,
                isHighlighted: s.has(e)
            }, e),
            renderOverflow: e => (0, i.jsx)(o.Tooltip, {
                text: (0, i.jsx)("div", {
                    className: R.overflowTooltip,
                    children: e.map(e => (0, i.jsx)("div", {
                        className: R.trait,
                        children: e
                    }, e))
                }),
                "aria-label": "overflow",
                children: t => (0, i.jsx)("div", {
                    ...t,
                    className: R.trait,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-normal",
                        children: O.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
                            count: e.length
                        })
                    })
                })
            }),
            maxLines: 2,
            className: R.traitsContainer
        })
    }

    function v(e) {
        let {
            games: t
        } = e, n = t.filter(e => null != e && null != e.icon), a = n.slice(0, 3), s = r.useMemo(() => {
            let e = n[3];
            if (null == e) return null;
            let t = e.getIconURL(24);
            if (null == t) return null;
            if (n.length > 4) {
                let r = n.slice(3).map(e => e.name),
                    a = (0, d.formatSelectionList)(r);
                return (0, i.jsx)(o.Tooltip, {
                    text: a,
                    position: "bottom",
                    children: n => (0, i.jsxs)("div", {
                        ...n,
                        className: R.cardFooterGame,
                        children: [(0, i.jsx)("img", {
                            src: t,
                            alt: e.name,
                            className: R.cardFooterGameImg
                        }), (0, i.jsx)("div", {
                            className: R.cardFooterOtherCount,
                            children: (0, i.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "always-white",
                                children: "+".concat(r.length)
                            })
                        })]
                    })
                })
            }
            return (0, i.jsx)(o.Tooltip, {
                text: e.name,
                position: "bottom",
                children: n => (0, i.jsx)("div", {
                    ...n,
                    className: R.cardFooterGame,
                    children: (0, i.jsx)("img", {
                        src: t,
                        alt: e.name,
                        className: R.cardFooterGameImg
                    })
                })
            })
        }, [n]);
        return (0, i.jsxs)(i.Fragment, {
            children: [a.map(e => {
                let t = e.getIconURL(24);
                return null == t ? null : (0, i.jsx)(o.Tooltip, {
                    text: e.name,
                    position: "bottom",
                    children: n => (0, i.jsx)("div", {
                        ...n,
                        className: R.cardFooterGame,
                        children: (0, i.jsx)("img", {
                            src: t,
                            alt: e.name,
                            className: R.cardFooterGameImg
                        })
                    })
                }, e.id)
            }), s]
        })
    }

    function D(e) {
        var t, n;
        let {
            clan: r,
            banner: a,
            expanded: l,
            affinity: d,
            isMember: _,
            traitsToHighlight: I,
            className: T
        } = e, {
            tag: f,
            badge: S,
            branding: {
                primaryColor: h,
                secondaryColor: m
            }
        } = r, N = (0, u.default)(r.games), g = O.default.Messages.CLAN_DISCOVERY_MEMBER_COUNT.format({
            count: r.memberCount
        }), D = null !== (t = A.default.getGuildIconURL({
            id: r.id,
            icon: r.icon,
            size: 64,
            canAnimate: !0
        })) && void 0 !== t ? t : void 0;
        return (0, i.jsxs)("div", {
            className: s()(R.card, T),
            children: [(0, i.jsxs)("div", {
                className: R.cardBrandingHeader,
                style: {
                    background: "linear-gradient(90deg, ".concat(h, ", ").concat(m, ")")
                },
                children: [a, (0, i.jsx)(E.ClanBadge, {
                    width: 32,
                    height: 32,
                    className: R.clanBadge,
                    badge: S.badgeKind,
                    primaryTintColor: S.primaryColor,
                    secondaryTintColor: S.secondaryColor
                })]
            }), (0, i.jsxs)("div", {
                className: R.cardContent,
                children: [(0, i.jsxs)("div", {
                    className: R.cardContentTitleSection,
                    children: [(0, i.jsxs)("div", {
                        className: R.cardNameAndTagWrapper,
                        children: [(0, i.jsx)(c.ClanGuildIconSimple, {
                            guildName: r.name,
                            guildIconURL: D,
                            iconSize: 64,
                            className: R.clanIcon
                        }), (0, i.jsx)("div", {
                            className: R.clanTagChipletWrapper,
                            children: (0, i.jsx)(o.Tooltip, {
                                text: O.default.Messages.CLAN_DISCOVERY_CARD_TAG_TOOLTIP,
                                position: "top",
                                shouldShow: !_,
                                children: e => (0, i.jsxs)("div", {
                                    ...e,
                                    className: R.clanTagChiplet,
                                    children: [(0, i.jsx)(E.ClanBadge, {
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
                        className: R.clanInfoRow,
                        children: [(0, i.jsx)(o.Text, {
                            variant: "text-xxs/normal",
                            className: R.clanInfoItem,
                            children: (0, i.jsx)("span", {
                                role: "img",
                                "aria-label": O.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_ARIA_LABEL,
                                children: "\uD83C\uDFAE"
                            })
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            className: R.clanInfoItem,
                            children: null !== (n = (0, p.getPlaystyleTitle)(r.playstyle)) && void 0 !== n ? n : O.default.Messages.CLAN_DISCOVERY_UNKNOWN_PLAYSTYLE
                        }), (0, i.jsx)(C, {
                            clan: r
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: R.cardContentDescriptionSection,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: r.description
                    })
                }), (0, i.jsx)(L, {
                    traits: (0, p.getSortedTraits)(r.traits, I),
                    expanded: l,
                    traitsToHighlight: I
                })]
            }), (0, i.jsxs)("div", {
                className: R.cardFooter,
                children: [(0, i.jsx)("div", {
                    className: R.cardFooterInfo,
                    children: (0, i.jsx)("div", {
                        className: R.cardFooterMembers,
                        children: (0, i.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: g
                        })
                    })
                }), (0, i.jsx)("div", {
                    className: R.cardFooterGames,
                    children: (0, i.jsx)(v, {
                        games: N
                    })
                })]
            }), null != d ? (0, i.jsxs)("div", {
                className: R.cardBrandingFooter,
                style: {
                    background: "linear-gradient(90deg, ".concat(h, ", ").concat(m, ")")
                },
                children: [(0, i.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    children: d
                }), (0, i.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    children: _ ? ", Joined" : ", Not Joined"
                })]
            }) : null]
        })
    }
    t.default = function(e) {
        let {
            clan: t,
            affinity: a,
            index: s
        } = e, u = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), d = (0, l.useStateFromStores)([f.default], () => f.default.isMember(t.id, null == u ? void 0 : u.id), [t, u]), _ = r.useCallback(() => {
            let e = null != I.default.getRequest(t.id);
            if (h.default.track(N.AnalyticEvents.CLAN_DISCOVERY_CARD_CLICKED, {
                    guild_id: t.id,
                    is_member: d,
                    has_join_request: e,
                    affinity: a,
                    index: s
                }), d) {
                (0, T.transitionToGuild)(t.id);
                return
            }
            if (e) {
                (0, T.transitionTo)(N.Routes.GUILD_MEMBER_VERIFICATION(t.id));
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
        }, [t, d, a, s]);
        return (0, i.jsx)(o.Clickable, {
            onClick: _,
            className: R.clickableCard,
            children: (0, i.jsx)(D, {
                ...e,
                isMember: d
            })
        })
    }
}