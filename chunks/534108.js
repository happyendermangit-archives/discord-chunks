function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return Y
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("308472"),
        u = n("77078"),
        d = n("272030"),
        c = n("96386"),
        f = n("685665"),
        p = n("917764"),
        m = n("986632"),
        h = n("538282"),
        x = n("522096"),
        E = n("845579"),
        y = n("697218"),
        g = n("800762"),
        S = n("476765"),
        C = n("461380"),
        _ = n("93393"),
        T = n("153769"),
        I = n("671434"),
        v = n("229915"),
        A = n("368121"),
        N = n("719923"),
        R = n("389480"),
        O = n("78581"),
        M = n("262439"),
        k = n("557585"),
        L = n("553372"),
        P = n("122557"),
        b = n("478477"),
        j = n("181021"),
        U = n("299069"),
        D = n("569717"),
        w = n("49111"),
        F = n("782340"),
        G = n("851289");
    let H = [8, 0, 8, 8];

    function B(e) {
        return 0 === e ? 16 : 32
    }

    function V(e) {
        let {
            categoryInfo: t,
            collapsed: n,
            toggleCollapsed: l,
            index: a
        } = e;
        return (0, i.jsxs)(u.Clickable, {
            className: s(G.sectionHeader, {
                [G.notFirstSectionHeader]: 0 !== a
            }),
            onClick: l,
            children: [function() {
                switch (t.type) {
                    case R.SoundboardSoundGridSectionType.FAVORITES:
                        return (0, i.jsx)(I.default, {
                            className: G.headerIcon
                        });
                    case R.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                        return (0, i.jsx)(_.default, {
                            className: G.headerIcon
                        });
                    case R.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                        return (0, i.jsx)(o.AnalyticsIcon, {
                            className: G.headerIcon
                        });
                    case R.SoundboardSoundGridSectionType.GUILD:
                        return (0, i.jsx)(p.default, {
                            guild: t.guild,
                            height: 16,
                            width: 16
                        });
                    case R.SoundboardSoundGridSectionType.DEFAULTS:
                        return (0, i.jsx)(T.default, {
                            className: G.headerIcon
                        });
                    case R.SoundboardSoundGridSectionType.SEARCH:
                        return (0, i.jsx)(v.default, {
                            className: G.headerIcon
                        })
                }
            }(), (0, i.jsx)(u.Heading, {
                variant: "eyebrow",
                color: "none",
                className: G.sectionTitle,
                children: function() {
                    switch (t.type) {
                        case R.SoundboardSoundGridSectionType.FAVORITES:
                            return F.default.Messages.FAVORITES;
                        case R.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                            return F.default.Messages.RECENTLY_HEARD;
                        case R.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                            return F.default.Messages.FREQUENTLY_USED;
                        case R.SoundboardSoundGridSectionType.GUILD:
                            return t.guild.name;
                        case R.SoundboardSoundGridSectionType.DEFAULTS:
                            return F.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                        case R.SoundboardSoundGridSectionType.SEARCH:
                            return F.default.Messages.SEARCH_RESULTS_SECTION_LABEL
                    }
                }()
            }), (0, i.jsx)(C.default, {
                className: G.headerIcon,
                direction: n ? C.default.Directions.RIGHT : C.default.Directions.DOWN
            })]
        })
    }

    function K() {
        return (0, i.jsx)(c.default, {
            message: F.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
        })
    }

    function W(e) {
        let {
            descriptors: t,
            soundButtonProps: n,
            rowIndex: a,
            isUsingKeyboardNavigation: s,
            suppressPlaySound: r,
            gridRowProps: o,
            getItemProps: u,
            onSelectItem: d,
            onItemMouseEnter: c,
            buttonOverlay: f
        } = e, p = m.SoundboardPickerStore.useStore(e => e.inspectedExpressionPosition);
        return (0, i.jsx)("ul", {
            ...o,
            className: G.soundRow,
            children: t.map((e, t) => {
                let i = "item-".concat(t),
                    o = s && p.rowIndex === a && p.columnIndex === t;
                switch (e.item.type) {
                    case R.SoundboardSoundItemType.SOUND:
                        return (0, l.createElement)(L.default, {
                            ...u(t),
                            ...n,
                            key: "".concat(i, "-").concat(e.item.sound.soundId),
                            sound: e.item.sound,
                            suppressPlaySound: r,
                            focused: o,
                            onMouseEnter: () => c(t),
                            onSelectItem: () => d(e),
                            enableSecondaryActions: !0,
                            buttonOverlay: f
                        });
                    case R.SoundboardSoundItemType.ADD_SOUND:
                        return (0, l.createElement)(P.default, {
                            ...u(t),
                            key: i,
                            guild: e.item.guild,
                            focused: o
                        })
                }
            })
        })
    }

    function Y(e) {
        let {
            guildId: t,
            channel: a,
            containerWidth: s,
            onClose: o,
            onSelect: c,
            suppressPlaySound: p = !1,
            shouldShowUpsell: C = !0,
            gridNotice: _,
            soundButtonOverlay: T,
            listPadding: I,
            renderHeader: v,
            defaultSoundsOnly: L = !1
        } = e, {
            analyticsLocations: P
        } = (0, f.default)(), [Y, z] = l.useState(null), Z = (0, r.useStateFromStores)([y.default], () => y.default.getCurrentUser()), J = (0, r.useStateFromStores)([g.default], () => {
            var e;
            return g.default.getVoiceState(t, null !== (e = null == Z ? void 0 : Z.id) && void 0 !== e ? e : w.EMPTY_STRING_SNOWFLAKE_ID)
        }), Q = (null == J ? void 0 : J.selfDeaf) || (null == J ? void 0 : J.mute) || (null == J ? void 0 : J.suppress), q = (0, h.useExpressionPickerStore)(e => e.searchQuery), X = (0, S.useUID)(), {
            categories: $
        } = (0, k.default)(a, void 0, L), [ee, et] = l.useState([]), en = (0, k.useSearchCategories)($, ee, q), ei = E.SoundboardPickerCollapsedSections.useSetting(), el = l.useMemo(() => new Set(ei), [ei]), ea = null == a, es = N.default.canUseCustomCallSounds(Z), er = l.useCallback(e => {
            let t = !el.has(e);
            t ? el.add(e) : el.delete(e), E.SoundboardPickerCollapsedSections.updateSetting(Array.from(el))
        }, [el]), eo = l.useCallback((e, t) => {
            if (!p && (0, O.canUseSoundboardSound)(Z, e, a, !1)) {
                var n;
                (0, O.playSound)(e, null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : w.EMPTY_STRING_SNOWFLAKE_ID, t)
            } else {
                if ((0, O.canUseSoundboardSound)(Z, e, a)) return;
                C && z(e)
            }
        }, [p, Z, a, C]), eu = l.useCallback(e => {
            switch (e.item.type) {
                case R.SoundboardSoundItemType.SOUND:
                    return null == c || c(e.item.sound), eo(e.item.sound, P);
                case R.SoundboardSoundItemType.ADD_SOUND:
                    return (0, D.default)(e.item.guild.id)
            }
        }, [P, eo, c]), ed = l.useCallback((e, t, n, l, s) => (0, i.jsx)(W, {
            descriptors: e,
            rowIndex: n.rowIndex,
            isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
            gridRowProps: t,
            getItemProps: l,
            onItemMouseEnter: s,
            suppressPlaySound: p,
            onSelectItem: eu,
            soundButtonProps: {
                channel: a,
                interactive: ea ? es : !Q,
                forceSecondaryActions: ea,
                analyticsLocations: P
            },
            buttonOverlay: T
        }, "row-".concat(t["aria-rowindex"])), [eu, a, Q, p, P, ea, es, T]), ec = l.useCallback((e, t) => {
            let n = "".concat(e.key);
            return (0, i.jsx)(V, {
                categoryInfo: e.categoryInfo,
                toggleCollapsed: () => er(n),
                collapsed: el.has(n),
                index: t
            }, "header-".concat(n))
        }, [el, er]), ef = l.useCallback(e => et((0, M.default)(e, $, Z, a)), [a, Z, $]), ep = l.useCallback(e => {
            (0, d.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("136137").then(n.bind(n, "136137"));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            })
        }, []), em = l.useCallback(() => (0, i.jsx)(u.Clickable, {
            tabIndex: 0,
            className: G.settingsClickArea,
            onClick: ep,
            "aria-label": F.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
            children: (0, i.jsx)(A.default, {
                className: G.settingsIcon
            })
        }), [ep]), eh = l.useCallback(e => (0, i.jsx)(b.default, {
            soundboardListRef: e,
            categories: $,
            listPadding: I
        }), [$, I]), ex = l.useCallback(e => {
            if ((null == e ? void 0 : e.item.type) === R.SoundboardSoundItemType.SOUND) {
                var t;
                return (0, i.jsx)(j.default, {
                    closePicker: o,
                    soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                })
            }
            return null
        }, [o]);
        return (0, i.jsxs)(i.Fragment, {
            children: [null != Y && (0, i.jsx)(U.default, {
                onClose: () => z(null),
                closePopout: o,
                sound: Y,
                channel: a
            }), (0, i.jsx)(x.default, {
                categories: en,
                collapsedCategories: el,
                containerWidth: s,
                store: m.SoundboardPickerStore,
                onSelectItem: eu,
                onSearchExpressions: ef,
                hasSearchResults: ee.length > 0,
                defaultSearchPlaceholder: F.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: ed,
                renderSectionHeader: ec,
                renderCategoryList: eh,
                renderHeaderAccessories: em,
                rowHeight: 48,
                sectionHeaderHeight: B,
                listPadding: H,
                itemNodeWidth: 150,
                gridNavigatorId: X,
                renderEmptySearchState: K,
                renderInspector: ex,
                gridNotice: _,
                renderHeader: v
            })]
        })
    }
}