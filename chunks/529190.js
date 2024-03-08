function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ITEM_HEIGHT: function() {
            return L
        },
        default: function() {
            return j
        }
    }), n("222007"), n("808653");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("96386"),
        d = n("798609"),
        c = n("716241"),
        f = n("296141"),
        p = n("986632"),
        m = n("45961"),
        h = n("515059"),
        x = n("501536"),
        E = n("124299"),
        y = n("476765"),
        g = n("507217"),
        S = n("240249"),
        C = n("972620"),
        I = n("524768"),
        T = n("389153"),
        _ = n("586450"),
        v = n("41884"),
        N = n("355263"),
        A = n("317041"),
        O = n("49111"),
        M = n("782340"),
        R = n("847948"),
        k = n("327769");
    let L = 56,
        b = [8, 8, 0, 8],
        P = o.debounce(() => {
            (0, c.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_BROWSER_SCROLLED)
        }, 300);
    var j = l.forwardRef(function(e, t) {
        let {
            channel: n,
            canOnlyUseTextCommands: a
        } = e, r = l.useRef(!1), o = l.useRef(0), [j, D] = l.useState(0), w = l.useRef(null), [F, B] = l.useState(!1), G = p.ApplicationCommandDiscoveryPickerStore.useStore(e => e.activeCategoryIndex);
        l.useEffect(() => {
            (0, c.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_BROWSER_OPENED)
        }, []);
        let {
            sectionDescriptors: H,
            activeSections: V,
            commandsByActiveSection: K,
            hasMoreAfter: W,
            commands: Y,
            filteredSectionId: z,
            scrollDown: Z,
            filterSection: J
        } = S.useDiscovery(n, {
            commandType: d.ApplicationCommandType.CHAT,
            builtIns: a ? C.BuiltInCommandFilter.ONLY_TEXT : C.BuiltInCommandFilter.ALLOW,
            applicationCommands: !a
        }, {
            placeholderCount: 7,
            limit: A.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        }), q = (0, m.useSynchronizedActiveCategoryIndexForScrollPosition)({
            activeCategoryIndex: G,
            isScrolling: r,
            listRef: w,
            onActiveCategoryIndexChange: e => {
                let t = V[e];
                if (null != t) {
                    let e = H.findIndex(e => e.id === t.id);
                    p.ApplicationCommandDiscoveryPickerStore.setActiveCategoryIndex(e)
                }
            },
            scrollOffset: 20,
            searchQuery: ""
        }), X = e => {
            let t = V.length,
                n = K.reduce((e, t) => e + t.data.length, 0) - (W ? 7 : 0),
                i = 48 * t + n * L - 512;
            W && e + 420 > i && Z(), q(e), P(), o.current = e
        };
        l.useEffect(() => {
            X(o.current)
        }, [Y]);
        let Q = l.useCallback(e => {
                let t = e === V.length - 1;
                return t && !W ? 0 : 16
            }, [V.length, W]),
            $ = K.map(e => e.data.length);
        l.useEffect(() => {
            null != w.current && F && null != j && w.current.scrollRowIntoView(j)
        }, [F, j]), l.useLayoutEffect(() => {
            if (null != z) {
                var e;
                null === (e = w.current) || void 0 === e || e.scrollToSectionTop(0)
            }
        }, [Y, z]);
        let ee = l.useCallback(e => {
                if (e.id === z || e.id === A.BuiltInSectionId.FRECENCY) {
                    var t;
                    J(null), null === (t = w.current) || void 0 === t || t.scrollToSectionTop(0)
                } else J(e.id)
            }, [J, z]),
            et = l.useCallback((e, t, i) => {
                g.setActiveCommand({
                    channelId: n.id,
                    command: e,
                    section: t,
                    location: I.ApplicationCommandTriggerLocations.DISCOVERY,
                    triggerSection: i
                })
            }, [n.id]);
        l.useImperativeHandle(t, () => ({
            onTabOrEnter: e => {
                if (null == j) return !e && (D(0), !0);
                if (null == j) return !1;
                let t = 0,
                    n = 0;
                for (let e of K)
                    if (t = n, j < (n += e.data.length)) {
                        let n = e.data[j - t],
                            i = H.find(e => e.id === n.applicationId);
                        et(n, i, (0, T.getCommandTriggerSection)(e.section));
                        break
                    } return !0
            },
            onMoveSelection: e => {
                if (0 === Y.length) return !0;
                let t = W ? 7 : 0,
                    n = Y.length + t,
                    i = null == j ? 0 : j + e;
                return i >= n ? i = n - 1 : i < 0 && (i = 0), D(i), B(!0), !0
            }
        }), [Y.length, K, W, H, et, j]);
        let en = l.useCallback(e => {
                let t = V[e];
                if (null == t) return null;
                let l = (0, N.getIconComponent)(t),
                    a = (0, i.jsx)(l, {
                        channel: n,
                        section: t,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return (0, i.jsx)(h.default, {
                    className: R.categoryHeader,
                    icon: a,
                    children: t.name
                }, e)
            }, [n, V]),
            ei = l.useCallback((e, t) => {
                let n = e === V.length - 1,
                    l = V[e],
                    {
                        data: a
                    } = K[e];
                return (0, i.jsxs)("ul", {
                    role: "group",
                    "aria-label": l.name,
                    className: s(R.categorySection, {
                        [R.categorySectionLast]: n
                    }),
                    children: [t, 0 === a.length && (0, i.jsx)(u.default, {
                        message: M.default.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
                            applicationName: l.name
                        }),
                        noResultsImageURL: k,
                        className: R.noSearchResults
                    })]
                }, e)
            }, [V, K]),
            el = l.useCallback((e, t) => {
                var l;
                let a = K[t.sectionIndex],
                    s = a.data[t.sectionRowIndex],
                    r = "".concat(a.section.id, ":").concat(null !== (l = null == s ? void 0 : s.id) && void 0 !== l ? l : e);
                if (null == s || a.section.id !== s.applicationId && a.section.id !== A.BuiltInSectionId.FRECENCY || s.inputType === I.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(v.default, {}, r);
                let o = H.find(e => e.id === s.applicationId);
                return (0, i.jsx)(x.default.NewCommand, {
                    index: e,
                    command: s,
                    channel: n,
                    className: R.itemWrapper,
                    selected: j === e,
                    showImage: a.section.id !== s.applicationId,
                    section: o,
                    onClick: () => et(s, o, (0, T.getCommandTriggerSection)(a.section)),
                    onHover: () => {
                        D(null), B(!1)
                    }
                }, r)
            }, [n, K, et, H, j]),
            ea = (0, y.useUID)();
        return (0, f.useChannelEditorPopup)(ea, !0, (0, x.getAutocompleteRowId)(j)), l.useEffect(() => () => {
            (0, f.dismissChannelEditorPopup)()
        }, []), (0, i.jsxs)(x.default, {
            id: ea,
            className: R.outerWrapper,
            innerClassName: R.wrapper,
            onMouseDown: U,
            children: [(0, i.jsx)(_.default, {
                className: R.rail,
                channel: n,
                sections: H,
                filteredSectionId: z,
                activeCategoryIndex: G,
                onSectionClick: ee,
                applicationCommandListRef: w
            }), (0, i.jsx)(E.default, {
                role: "listbox",
                className: R.list,
                listPadding: b,
                onScroll: X,
                renderRow: el,
                renderSection: ei,
                renderSectionHeader: en,
                rowCount: V.length,
                rowCountBySection: $,
                rowHeight: L,
                sectionHeaderHeight: 32,
                sectionMarginBottom: Q,
                ref: w,
                stickyHeaders: !0
            })]
        })
    });

    function U(e) {
        e.preventDefault()
    }
}