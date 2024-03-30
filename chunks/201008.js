function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return J
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("197080"),
        s = n("784184"),
        l = n("549579"),
        c = n("751007"),
        f = n("396586"),
        d = n("289917"),
        _ = n("797056"),
        E = n("251384"),
        p = n("486075"),
        m = n("53867"),
        y = n("208454"),
        I = n("665863"),
        h = n("719328"),
        O = n("701958"),
        T = n("228897"),
        S = n("636146"),
        v = n("995254"),
        g = n("486541"),
        A = n("893427"),
        b = n("830721"),
        N = n("686309"),
        R = n("141526"),
        C = n("490364"),
        P = n("314208"),
        D = n("797992"),
        L = n("894949"),
        M = n("466508"),
        U = n("358648"),
        w = n("710493"),
        k = n("473059"),
        G = n("281767"),
        B = n("941504"),
        j = n("6503");

    function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function V(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function H(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function x(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                H(e, t, n[t])
            })
        }
        return e
    }

    function Y(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function W(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return F(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var K = [8, 0, 8, 8];

    function z(e) {
        return 0 === e ? 16 : 32
    }

    function X(e) {
        var t = e.categoryInfo,
            n = e.collapsed,
            o = e.toggleCollapsed,
            a = e.index;
        return r.createElement(s.Clickable, {
            className: i()(j.sectionHeader, H({}, j.notFirstSectionHeader, 0 !== a)),
            onClick: o
        }, function() {
            switch (t.type) {
                case N.SoundboardSoundGridSectionType.FAVORITES:
                    return r.createElement(v.default, {
                        className: j.headerIcon
                    });
                case N.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                    return r.createElement(T.default, {
                        className: j.headerIcon
                    });
                case N.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                    return r.createElement(u.AnalyticsIcon, {
                        className: j.headerIcon
                    });
                case N.SoundboardSoundGridSectionType.GUILD:
                    return r.createElement(d.default, {
                        guild: t.guild,
                        height: 16,
                        width: 16
                    });
                case N.SoundboardSoundGridSectionType.DEFAULTS:
                    return r.createElement(S.default, {
                        className: j.headerIcon
                    });
                case N.SoundboardSoundGridSectionType.SEARCH:
                    return r.createElement(g.default, {
                        className: j.headerIcon
                    })
            }
        }(), r.createElement(s.Heading, {
            variant: "eyebrow",
            color: "none",
            className: j.sectionTitle
        }, function() {
            switch (t.type) {
                case N.SoundboardSoundGridSectionType.FAVORITES:
                    return B.default.Messages.FAVORITES;
                case N.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                    return B.default.Messages.RECENTLY_HEARD;
                case N.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                    return B.default.Messages.FREQUENTLY_USED;
                case N.SoundboardSoundGridSectionType.GUILD:
                    return t.guild.name;
                case N.SoundboardSoundGridSectionType.DEFAULTS:
                    return B.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                case N.SoundboardSoundGridSectionType.SEARCH:
                    return B.default.Messages.SEARCH_RESULTS_SECTION_LABEL
            }
        }()), r.createElement(O.default, {
            className: j.headerIcon,
            direction: n ? O.default.Directions.RIGHT : O.default.Directions.DOWN
        }))
    }

    function q() {
        return r.createElement(c.default, {
            message: B.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
        })
    }

    function Q(e) {
        var t = e.descriptors,
            n = e.soundButtonProps,
            o = e.rowIndex,
            i = e.isUsingKeyboardNavigation,
            a = e.suppressPlaySound,
            u = e.gridRowProps,
            s = e.getItemProps,
            l = e.onSelectItem,
            c = e.onItemMouseEnter,
            f = e.buttonOverlay,
            d = _.SoundboardPickerStore.useStore(function(e) {
                return e.inspectedExpressionPosition
            });
        return r.createElement("ul", Y(x({}, u), {
            className: j.soundRow
        }), t.map(function(e, t) {
            var u = "item-".concat(t),
                _ = i && d.rowIndex === o && d.columnIndex === t;
            switch (e.item.type) {
                case N.SoundboardSoundItemType.SOUND:
                    return r.createElement(D.default, Y(x({}, s(t), n), {
                        key: "".concat(u, "-").concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: a,
                        focused: _,
                        onMouseEnter: function() {
                            return c(t)
                        },
                        onSelectItem: function() {
                            return l(e)
                        },
                        enableSecondaryActions: !0,
                        buttonOverlay: f
                    }));
                case N.SoundboardSoundItemType.ADD_SOUND:
                    return r.createElement(L.default, Y(x({}, s(t)), {
                        key: u,
                        guild: e.item.guild,
                        focused: _
                    }))
            }
        }))
    }

    function J(e) {
        var t = e.guildId,
            o = e.channel,
            i = e.containerWidth,
            u = e.onClose,
            c = e.onSelect,
            d = e.suppressPlaySound,
            O = void 0 !== d && d,
            T = e.shouldShowUpsell,
            S = void 0 === T || T,
            v = e.gridNotice,
            g = e.soundButtonOverlay,
            D = e.listPadding,
            L = e.renderHeader,
            F = e.defaultSoundsOnly,
            H = (0, f.default)().analyticsLocations,
            x = W(r.useState(null), 2),
            Y = x[0],
            J = x[1],
            Z = (0, a.useStateFromStores)([y.default], function() {
                return y.default.getCurrentUser()
            }),
            $ = (0, a.useStateFromStores)([I.default], function() {
                var e;
                return I.default.getVoiceState(t, null !== (e = null == Z ? void 0 : Z.id) && void 0 !== e ? e : G.EMPTY_STRING_SNOWFLAKE_ID)
            }),
            ee = (null == $ ? void 0 : $.selfDeaf) || (null == $ ? void 0 : $.mute) || (null == $ ? void 0 : $.suppress),
            et = (0, E.useExpressionPickerStore)(function(e) {
                return e.searchQuery
            }),
            en = (0, h.useUID)(),
            er = (0, P.default)(o, void 0, void 0 !== F && F).categories,
            eo = W(r.useState([]), 2),
            ei = eo[0],
            ea = eo[1],
            eu = (0, P.useSearchCategories)(er, ei, et),
            es = m.SoundboardPickerCollapsedSections.useSetting(),
            el = r.useMemo(function() {
                return new Set(es)
            }, [es]),
            ec = null == o,
            ef = b.default.canUseCustomCallSounds(Z),
            ed = r.useCallback(function(e) {
                el.has(e) ? el.delete(e) : el.add(e), m.SoundboardPickerCollapsedSections.updateSetting(Array.from(el))
            }, [el]),
            e_ = r.useCallback(function(e, t) {
                if (!O && (0, R.canUseSoundboardSound)(Z, e, o, !1)) {
                    var n;
                    (0, R.playSound)(e, null !== (n = null == o ? void 0 : o.id) && void 0 !== n ? n : G.EMPTY_STRING_SNOWFLAKE_ID, t)
                } else {
                    if ((0, R.canUseSoundboardSound)(Z, e, o)) return;
                    S && J(e)
                }
            }, [O, Z, o, S]),
            eE = r.useCallback(function(e) {
                switch (e.item.type) {
                    case N.SoundboardSoundItemType.SOUND:
                        return null == c || c(e.item.sound), e_(e.item.sound, H);
                    case N.SoundboardSoundItemType.ADD_SOUND:
                        return (0, k.default)(e.item.guild.id)
                }
            }, [H, e_, c]),
            ep = r.useCallback(function(e, t, n, i, a) {
                return r.createElement(Q, {
                    key: "row-".concat(t["aria-rowindex"]),
                    descriptors: e,
                    rowIndex: n.rowIndex,
                    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
                    gridRowProps: t,
                    getItemProps: i,
                    onItemMouseEnter: a,
                    suppressPlaySound: O,
                    onSelectItem: eE,
                    soundButtonProps: {
                        channel: o,
                        interactive: ec ? ef : !ee,
                        forceSecondaryActions: ec,
                        analyticsLocations: H
                    },
                    buttonOverlay: g
                })
            }, [eE, o, ee, O, H, ec, ef, g]),
            em = r.useCallback(function(e, t) {
                var n = "".concat(e.key);
                return r.createElement(X, {
                    key: "header-".concat(n),
                    categoryInfo: e.categoryInfo,
                    toggleCollapsed: function() {
                        return ed(n)
                    },
                    collapsed: el.has(n),
                    index: t
                })
            }, [el, ed]),
            ey = r.useCallback(function(e) {
                return ea((0, C.default)(e, er, Z, o))
            }, [o, Z, er]),
            eI = r.useCallback(function(e) {
                var t;
                (0, l.openContextMenuLazy)(e, (t = function() {
                    var e;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, n.e("68780").then(n.bind(n, "972381"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    return r.createElement(e, t)
                                }]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            V(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            V(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }))
            }, []),
            eh = r.useCallback(function() {
                return r.createElement(s.Clickable, {
                    tabIndex: 0,
                    className: j.settingsClickArea,
                    onClick: eI,
                    "aria-label": B.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
                }, r.createElement(A.default, {
                    className: j.settingsIcon
                }))
            }, [eI]),
            eO = r.useCallback(function(e) {
                return r.createElement(M.default, {
                    soundboardListRef: e,
                    categories: er,
                    listPadding: D
                })
            }, [er, D]),
            eT = r.useCallback(function(e) {
                if ((null == e ? void 0 : e.item.type) === N.SoundboardSoundItemType.SOUND) {
                    var t;
                    return r.createElement(U.default, {
                        closePicker: u,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    })
                }
                return null
            }, [u]);
        return r.createElement(r.Fragment, null, null != Y && r.createElement(w.default, {
            onClose: function() {
                return J(null)
            },
            closePopout: u,
            sound: Y,
            channel: o
        }), r.createElement(p.default, {
            categories: eu,
            collapsedCategories: el,
            containerWidth: i,
            store: _.SoundboardPickerStore,
            onSelectItem: eE,
            onSearchExpressions: ey,
            hasSearchResults: ei.length > 0,
            defaultSearchPlaceholder: B.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
            renderRow: ep,
            renderSectionHeader: em,
            renderCategoryList: eO,
            renderHeaderAccessories: eh,
            rowHeight: 48,
            sectionHeaderHeight: z,
            listPadding: K,
            itemNodeWidth: 150,
            gridNavigatorId: en,
            renderEmptySearchState: q,
            renderInspector: eT,
            gridNotice: v,
            renderHeader: L
        }))
    }
}