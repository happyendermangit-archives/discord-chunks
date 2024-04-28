function(e, t, n) {
    "use strict";
    n.r(t), n("627341");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("278074"),
        l = n("831209"),
        u = n("399606"),
        d = n("481060"),
        _ = n("727637"),
        c = n("597688"),
        E = n("884697"),
        I = n("126900"),
        T = n("466111"),
        f = n("783014"),
        S = n("242411"),
        h = n("26290"),
        A = n("74538"),
        m = n("864106"),
        N = n("439959"),
        p = n("125988"),
        O = n("689938"),
        R = n("166253");
    let C = () => 80,
        g = e => {
            let {
                children: t,
                className: n,
                onSelect: r,
                isSelected: s = !1,
                ...o
            } = e;
            return (0, i.jsx)(d.Clickable, {
                className: a()(R.decorationGridItem, s ? R.selected : void 0, n),
                ...o,
                onClick: r,
                children: t
            })
        },
        L = e => {
            let {
                user: t,
                avatarDecoration: n,
                innerRef: s,
                section: a,
                isSelected: o = !1,
                ...d
            } = e, I = (0, u.useStateFromStores)([c.default], () => {
                let e = c.default.getProduct(n.skuId);
                return (0, E.isPremiumCollectiblesProduct)(e)
            }), f = (0, E.isProductNew)(n.skuId), m = A.default.canUseCollectibles(t), C = a === N.Section.PREMIUM_PURCHASE && !m, L = r.useRef(null), D = (0, _.default)(null != s ? s : L), {
                avatarDecorationSrc: v
            } = (0, p.default)({
                user: t,
                avatarDecorationOverride: n,
                size: 80,
                animateOnHover: !D
            });
            return (0, i.jsxs)(g, {
                className: C ? R.decorationGridItemChurned : void 0,
                innerRef: null != s ? s : L,
                isSelected: o,
                ...d,
                children: [(0, i.jsx)("img", {
                    className: R.presetDecorationImg,
                    src: v,
                    alt: n.label
                }), a === N.Section.PURCHASE || a === N.Section.PREMIUM_PURCHASE && m ? null : f ? (0, i.jsx)(h.PremiumBadge, {
                    className: R.newBadge,
                    text: (0, i.jsxs)("div", {
                        className: R.newBadgeText,
                        children: [(0, i.jsx)(S.default, {
                            width: 12,
                            height: 12
                        }), O.default.Messages.NEW]
                    })
                }) : (0, i.jsx)(h.IconBadge, {
                    icon: I ? () => (0, i.jsx)(T.default, {
                        width: 14,
                        height: 14
                    }) : () => (0, i.jsx)(S.default, {
                        width: 12,
                        height: 12
                    }),
                    color: l.default.BACKGROUND_ACCENT,
                    className: R.iconBadge
                })]
            })
        };
    t.default = e => {
        let {
            user: t,
            guild: n,
            pendingAvatarDecoration: s,
            selectedAvatarDecorationRef: a,
            onSelect: l,
            onOpenShop: u
        } = e, _ = (0, N.default)(), c = r.useCallback(() => {
            u(void 0)
        }, [u]);
        return (0, i.jsx)(d.MasonryList, {
            fade: !0,
            className: R.list,
            columns: 3,
            sections: _.map(e => {
                let {
                    items: t
                } = e;
                return t.length
            }),
            sectionGutter: 16,
            itemGutter: 12,
            paddingHorizontal: 12,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: (e, r, u, E) => {
                let {
                    section: T,
                    items: S
                } = _[e];
                return (0, o.match)(S[r]).with(N.NONE_ITEM, () => (0, i.jsxs)(g, {
                    style: {
                        ...u
                    },
                    isSelected: null === s,
                    onSelect: () => l(null),
                    children: [(0, i.jsx)(f.default, {
                        className: R.notAllowedIcon
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children: (0, m.hasGlobalDefaultAvatarDecoration)(t, n) ? O.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : O.default.Messages.NONE
                    })]
                }, E)).with(N.SHOP_ITEM, () => (0, i.jsxs)(g, {
                    style: u,
                    onSelect: c,
                    children: [(0, i.jsx)(I.default, {
                        className: R.shopIcon
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children: O.default.Messages.COLLECTIBLES_SHOP
                    })]
                }, E)).otherwise(e => {
                    let n = (null == s ? void 0 : s.id) === e.id;
                    return (0, i.jsx)(L, {
                        style: {
                            ...u
                        },
                        user: t,
                        avatarDecoration: e,
                        section: T,
                        innerRef: n ? a : void 0,
                        isSelected: n,
                        onSelect: () => l(e)
                    }, E)
                })
            },
            renderSection: e => {
                let {
                    header: t
                } = _[e];
                return (0, i.jsx)("div", {
                    className: R.headings,
                    children: (0, i.jsx)(d.HeadingLevel, {
                        forceLevel: 5,
                        children: (0, i.jsx)(d.Heading, {
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: t
                        })
                    })
                })
            },
            getSectionHeight: e => _[e].height,
            getItemKey: (e, t) => _[e].items[t].id,
            getItemHeight: C
        })
    }
}