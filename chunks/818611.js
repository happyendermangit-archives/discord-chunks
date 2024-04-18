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
        I = n("295177"),
        T = n("126900"),
        f = n("466111"),
        S = n("783014"),
        h = n("242411"),
        A = n("26290"),
        m = n("74538"),
        N = n("864106"),
        p = n("439959"),
        O = n("125988"),
        R = n("689938"),
        C = n("566253");
    let g = () => 80,
        L = e => {
            let {
                children: t,
                className: n,
                onSelect: r,
                isSelected: s = !1,
                ...o
            } = e;
            return (0, i.jsx)(d.Clickable, {
                className: a()(C.decorationGridItem, s ? C.selected : void 0, n),
                ...o,
                onClick: r,
                children: t
            })
        },
        D = e => {
            let {
                user: t,
                avatarDecoration: n,
                innerRef: s,
                section: a,
                isSelected: o = !1,
                ...d
            } = e, T = (0, u.useStateFromStores)([c.default], () => {
                let e = c.default.getProduct(n.skuId);
                return (0, E.isPremiumCollectiblesProduct)(e)
            }), S = (0, I.default)(n, o), N = m.default.canUseCollectibles(t), g = a === p.Section.PREMIUM_PURCHASE && !N, D = r.useRef(null), v = (0, _.default)(null != s ? s : D), {
                avatarDecorationSrc: M
            } = (0, O.default)({
                user: t,
                avatarDecorationOverride: n,
                size: 80,
                animateOnHover: !v
            });
            return (0, i.jsxs)(L, {
                className: g ? C.decorationGridItemChurned : void 0,
                innerRef: null != s ? s : D,
                isSelected: o,
                ...d,
                children: [(0, i.jsx)("img", {
                    className: C.presetDecorationImg,
                    src: M,
                    alt: n.label
                }), a === p.Section.PURCHASE || a === p.Section.PREMIUM_PURCHASE && N ? null : S ? (0, i.jsx)(A.PremiumBadge, {
                    className: C.newBadge,
                    text: (0, i.jsxs)("div", {
                        className: C.newBadgeText,
                        children: [(0, i.jsx)(h.default, {
                            width: 12,
                            height: 12
                        }), R.default.Messages.NEW]
                    })
                }) : (0, i.jsx)(A.IconBadge, {
                    icon: T ? () => (0, i.jsx)(f.default, {
                        width: 14,
                        height: 14
                    }) : () => (0, i.jsx)(h.default, {
                        width: 12,
                        height: 12
                    }),
                    color: l.default.BACKGROUND_ACCENT,
                    className: C.iconBadge
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
        } = e, _ = (0, p.default)(), c = r.useCallback(() => {
            u(void 0)
        }, [u]);
        return (0, i.jsx)(d.MasonryList, {
            fade: !0,
            className: C.list,
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
                    section: I,
                    items: f
                } = _[e];
                return (0, o.match)(f[r]).with(p.NONE_ITEM, () => (0, i.jsxs)(L, {
                    style: {
                        ...u
                    },
                    isSelected: null === s,
                    onSelect: () => l(null),
                    children: [(0, i.jsx)(S.default, {
                        className: C.notAllowedIcon
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children: (0, N.hasGlobalDefaultAvatarDecoration)(t, n) ? R.default.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : R.default.Messages.NONE
                    })]
                }, E)).with(p.SHOP_ITEM, () => (0, i.jsxs)(L, {
                    style: u,
                    onSelect: c,
                    children: [(0, i.jsx)(T.default, {
                        className: C.shopIcon
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "header-primary",
                        children: R.default.Messages.COLLECTIBLES_SHOP
                    })]
                }, E)).otherwise(e => {
                    let n = (null == s ? void 0 : s.id) === e.id;
                    return (0, i.jsx)(D, {
                        style: {
                            ...u
                        },
                        user: t,
                        avatarDecoration: e,
                        section: I,
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
                    className: C.headings,
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
            getItemHeight: g
        })
    }
}