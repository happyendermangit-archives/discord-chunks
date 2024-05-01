function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return K
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("442837"),
        l = n("552075"),
        u = n("481060"),
        d = n("239091"),
        _ = n("788911"),
        c = n("906732"),
        E = n("880949"),
        I = n("806966"),
        T = n("28546"),
        f = n("468954"),
        S = n("695346"),
        h = n("594174"),
        A = n("979651"),
        m = n("153124"),
        N = n("259580"),
        p = n("855693"),
        O = n("68972"),
        R = n("887208"),
        C = n("664800"),
        g = n("632184"),
        L = n("74538"),
        v = n("697426"),
        D = n("242291"),
        M = n("421673"),
        y = n("663215"),
        P = n("409673"),
        U = n("347072"),
        b = n("835648"),
        G = n("650743"),
        w = n("394740"),
        B = n("343747"),
        k = n("981631"),
        V = n("689938"),
        x = n("617925");
    let F = [8, 0, 8, 8];

    function H(e) {
        return 0 === e ? 16 : 32
    }

    function Y(e) {
        let {
            categoryInfo: t,
            collapsed: n,
            toggleCollapsed: r,
            index: s
        } = e;
        return (0, i.jsx)("div", {
            className: x.sectionContainer,
            children: (0, i.jsx)(u.Clickable, {
                className: a()(x.sectionHeader, {
                    [x.notFirstSectionHeader]: 0 !== s
                }),
                onClick: r,
                "aria-expanded": !n,
                children: (0, i.jsxs)("div", {
                    className: x.sectionHeaderContent,
                    children: [function() {
                        switch (t.type) {
                            case v.SoundboardSoundGridSectionType.FAVORITES:
                                return (0, i.jsx)(R.default, {
                                    className: x.headerIcon
                                });
                            case v.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                return (0, i.jsx)(p.default, {
                                    className: x.headerIcon
                                });
                            case v.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                return (0, i.jsx)(l.AnalyticsIcon, {
                                    className: x.headerIcon
                                });
                            case v.SoundboardSoundGridSectionType.GUILD:
                                return (0, i.jsx)(E.default, {
                                    guild: t.guild,
                                    height: 16,
                                    width: 16
                                });
                            case v.SoundboardSoundGridSectionType.DEFAULTS:
                                return (0, i.jsx)(O.default, {
                                    className: x.headerIcon
                                });
                            case v.SoundboardSoundGridSectionType.SEARCH:
                                return (0, i.jsx)(C.default, {
                                    className: x.headerIcon
                                })
                        }
                    }(), (0, i.jsx)(u.Heading, {
                        variant: "eyebrow",
                        color: "none",
                        className: x.sectionTitle,
                        children: function() {
                            switch (t.type) {
                                case v.SoundboardSoundGridSectionType.FAVORITES:
                                    return V.default.Messages.FAVORITES;
                                case v.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                    return V.default.Messages.RECENTLY_HEARD;
                                case v.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                    return V.default.Messages.FREQUENTLY_USED;
                                case v.SoundboardSoundGridSectionType.GUILD:
                                    return t.guild.name;
                                case v.SoundboardSoundGridSectionType.DEFAULTS:
                                    return V.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                                case v.SoundboardSoundGridSectionType.SEARCH:
                                    return V.default.Messages.SEARCH_RESULTS_SECTION_LABEL
                            }
                        }()
                    }), (0, i.jsx)(N.default, {
                        className: x.headerIcon,
                        direction: n ? N.default.Directions.RIGHT : N.default.Directions.DOWN
                    })]
                })
            })
        })
    }

    function j() {
        return (0, i.jsx)(_.default, {
            message: V.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
        })
    }

    function W(e) {
        let {
            descriptors: t,
            soundButtonProps: n,
            rowIndex: s,
            isUsingKeyboardNavigation: a,
            suppressPlaySound: o,
            gridRowProps: l,
            getItemProps: u,
            onSelectItem: d,
            onItemMouseEnter: _,
            buttonOverlay: c
        } = e, E = I.SoundboardPickerStore.useStore(e => e.inspectedExpressionPosition);
        return (0, i.jsx)("ul", {
            ...l,
            className: x.soundRow,
            children: t.map((e, t) => {
                let i = "item-".concat(t),
                    l = a && E.rowIndex === s && E.columnIndex === t;
                switch (e.item.type) {
                    case v.SoundboardSoundItemType.SOUND:
                        return (0, r.createElement)(P.default, {
                            ...u(t),
                            ...n,
                            key: "".concat(i, "-").concat(e.item.sound.soundId),
                            sound: e.item.sound,
                            suppressPlaySound: o,
                            focused: l,
                            onMouseEnter: () => _(t),
                            onSelectItem: () => d(e),
                            enableSecondaryActions: !0,
                            buttonOverlay: c
                        });
                    case v.SoundboardSoundItemType.ADD_SOUND:
                        return (0, r.createElement)(U.default, {
                            ...u(t),
                            key: i,
                            guild: e.item.guild,
                            focused: l
                        })
                }
            })
        })
    }

    function K(e) {
        let {
            guildId: t,
            channel: s,
            containerWidth: a,
            onClose: l,
            onSelect: _,
            suppressPlaySound: E = !1,
            shouldShowUpsell: N = !0,
            gridNotice: p,
            soundButtonOverlay: O,
            listPadding: R,
            renderHeader: C,
            defaultSoundsOnly: P = !1
        } = e, {
            analyticsLocations: U
        } = (0, c.default)(), [K, z] = r.useState(null), Z = (0, o.useStateFromStores)([h.default], () => h.default.getCurrentUser()), X = (0, o.useStateFromStores)([A.default], () => {
            var e;
            return A.default.getVoiceState(t, null !== (e = null == Z ? void 0 : Z.id) && void 0 !== e ? e : k.EMPTY_STRING_SNOWFLAKE_ID)
        }), Q = (null == X ? void 0 : X.selfDeaf) || (null == X ? void 0 : X.mute) || (null == X ? void 0 : X.suppress), q = (0, T.useExpressionPickerStore)(e => e.searchQuery), J = (0, m.useUID)(), {
            categories: $
        } = (0, y.default)(s, void 0, P), [ee, et] = r.useState([]), en = (0, y.useSearchCategories)($, ee, q), ei = S.SoundboardPickerCollapsedSections.useSetting(), er = r.useMemo(() => new Set(ei), [ei]), es = null == s, ea = L.default.canUseCustomCallSounds(Z), eo = r.useCallback(e => {
            er.has(e) ? er.delete(e) : er.add(e), S.SoundboardPickerCollapsedSections.updateSetting(Array.from(er))
        }, [er]), el = r.useCallback((e, t) => {
            if (!E && (0, D.canUseSoundboardSound)(Z, e, s, !1)) {
                var n;
                (0, D.playSound)(e, null !== (n = null == s ? void 0 : s.id) && void 0 !== n ? n : k.EMPTY_STRING_SNOWFLAKE_ID, t)
            } else {
                if ((0, D.canUseSoundboardSound)(Z, e, s)) return;
                N && z(e)
            }
        }, [E, Z, s, N]), eu = r.useCallback(e => {
            switch (e.item.type) {
                case v.SoundboardSoundItemType.SOUND:
                    return null == _ || _(e.item.sound), el(e.item.sound, U);
                case v.SoundboardSoundItemType.ADD_SOUND:
                    return (0, B.default)(e.item.guild.id)
            }
        }, [U, el, _]), ed = r.useCallback((e, t, n, r, a) => (0, i.jsx)(W, {
            descriptors: e,
            rowIndex: n.rowIndex,
            isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
            gridRowProps: t,
            getItemProps: r,
            onItemMouseEnter: a,
            suppressPlaySound: E,
            onSelectItem: eu,
            soundButtonProps: {
                channel: s,
                interactive: es ? ea : !Q,
                forceSecondaryActions: es,
                analyticsLocations: U
            },
            buttonOverlay: O
        }, "row-".concat(t["aria-rowindex"])), [eu, s, Q, E, U, es, ea, O]), e_ = r.useCallback((e, t) => {
            let n = "".concat(e.key);
            return (0, i.jsx)(Y, {
                categoryInfo: e.categoryInfo,
                toggleCollapsed: () => eo(n),
                collapsed: er.has(n),
                index: t
            }, "header-".concat(n))
        }, [er, eo]), ec = r.useCallback(e => et((0, M.default)(e, $, Z, s)), [s, Z, $]), eE = r.useCallback(e => {
            (0, d.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("56049").then(n.bind(n, "338991"));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            })
        }, []), eI = r.useCallback(() => (0, i.jsx)(u.Clickable, {
            tabIndex: 0,
            className: x.settingsClickArea,
            onClick: eE,
            "aria-label": V.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
            children: (0, i.jsx)(g.default, {
                className: x.settingsIcon
            })
        }), [eE]), eT = r.useCallback(e => (0, i.jsx)(b.default, {
            soundboardListRef: e,
            categories: $,
            listPadding: R
        }), [$, R]), ef = r.useCallback(e => {
            if ((null == e ? void 0 : e.item.type) === v.SoundboardSoundItemType.SOUND) {
                var t;
                return (0, i.jsx)(G.default, {
                    closePicker: l,
                    soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                })
            }
            return null
        }, [l]);
        return (0, i.jsxs)(i.Fragment, {
            children: [null != K && (0, i.jsx)(w.default, {
                onClose: () => z(null),
                closePopout: l,
                sound: K,
                channel: s
            }), (0, i.jsx)(f.default, {
                categories: en,
                collapsedCategories: er,
                containerWidth: a,
                store: I.SoundboardPickerStore,
                onSelectItem: eu,
                onSearchExpressions: ec,
                hasSearchResults: ee.length > 0,
                defaultSearchPlaceholder: V.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: ed,
                renderSectionHeader: e_,
                renderCategoryList: eT,
                renderHeaderAccessories: eI,
                rowHeight: 48,
                sectionHeaderHeight: H,
                listPadding: F,
                itemNodeWidth: 150,
                gridNavigatorId: J,
                renderEmptySearchState: j,
                renderInspector: ef,
                gridNotice: p,
                renderHeader: C
            })]
        })
    }
}