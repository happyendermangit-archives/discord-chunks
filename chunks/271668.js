function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("788911"),
        d = n("911969"),
        _ = n("367907"),
        c = n("30465"),
        E = n("806966"),
        I = n("98528"),
        T = n("551058"),
        f = n("156361"),
        S = n("695464"),
        A = n("153124"),
        h = n("555573"),
        m = n("10718"),
        N = n("367790"),
        O = n("895924"),
        p = n("581364"),
        R = n("56801"),
        C = n("342687"),
        g = n("826298"),
        L = n("689079"),
        D = n("981631"),
        v = n("689938"),
        M = n("442608"),
        y = n("239840");
    let P = [8, 8, 0, 8],
        U = l().debounce(() => {
            (0, _.trackWithMetadata)(D.AnalyticEvents.APPLICATION_COMMAND_BROWSER_SCROLLED)
        }, 300);

    function b(e) {
        e.preventDefault()
    }
    t.default = r.forwardRef(function(e, t) {
        let {
            channel: n,
            canOnlyUseTextCommands: s
        } = e, o = r.useRef(!1), l = r.useRef(0), [G, w] = r.useState(0), k = r.useRef(null), [B, V] = r.useState(!1), F = E.ApplicationCommandDiscoveryPickerStore.useStore(e => e.activeCategoryIndex);
        r.useEffect(() => {
            (0, _.trackWithMetadata)(D.AnalyticEvents.APPLICATION_COMMAND_BROWSER_OPENED)
        }, []);
        let {
            sectionDescriptors: x,
            activeSections: H,
            commandsByActiveSection: Y,
            hasMoreAfter: j,
            commands: W,
            filteredSectionId: K,
            scrollDown: z,
            filterSection: X
        } = m.useDiscovery(n, {
            commandType: d.ApplicationCommandType.CHAT,
            builtIns: s ? N.BuiltInCommandFilter.ONLY_TEXT : N.BuiltInCommandFilter.ALLOW,
            applicationCommands: !s
        }, {
            placeholderCount: 7,
            limit: L.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        }), Q = (0, I.useSynchronizedActiveCategoryIndexForScrollPosition)({
            activeCategoryIndex: F,
            isScrolling: o,
            listRef: k,
            onActiveCategoryIndexChange: e => {
                let t = H[e];
                if (null != t) {
                    let e = x.findIndex(e => e.id === t.id);
                    E.ApplicationCommandDiscoveryPickerStore.setActiveCategoryIndex(e)
                }
            },
            scrollOffset: 20,
            searchQuery: ""
        }), q = e => {
            let t = H.length,
                n = Y.reduce((e, t) => e + t.data.length, 0) - (j ? 7 : 0);
            j && e + 420 > 48 * t + 56 * n - 512 && z(), Q(e), U(), l.current = e
        };
        r.useEffect(() => {
            q(l.current)
        }, [W]);
        let Z = r.useCallback(e => e !== H.length - 1 || j ? 16 : 0, [H.length, j]),
            J = Y.map(e => e.data.length);
        r.useEffect(() => {
            null != k.current && B && null != G && k.current.scrollRowIntoView(G)
        }, [B, G]), r.useLayoutEffect(() => {
            if (null != K) {
                var e;
                null === (e = k.current) || void 0 === e || e.scrollToSectionTop(0)
            }
        }, [W, K]);
        let $ = r.useCallback(e => {
                if (e.id === K || e.id === L.BuiltInSectionId.FRECENCY) {
                    var t;
                    X(null), null === (t = k.current) || void 0 === t || t.scrollToSectionTop(0)
                } else X(e.id)
            }, [X, K]),
            ee = r.useCallback((e, t, i) => {
                h.setActiveCommand({
                    channelId: n.id,
                    command: e,
                    section: t,
                    location: O.ApplicationCommandTriggerLocations.DISCOVERY,
                    triggerSection: i
                })
            }, [n.id]);
        r.useImperativeHandle(t, () => ({
            onTabOrEnter: e => {
                if (null == G) return !e && (w(0), !0);
                if (null == G) return !1;
                let t = 0,
                    n = 0;
                for (let e of Y)
                    if (t = n, G < (n += e.data.length)) {
                        let n = e.data[G - t],
                            i = x.find(e => e.id === n.applicationId);
                        ee(n, i, (0, p.getCommandTriggerSection)(e.section));
                        break
                    } return !0
            },
            onMoveSelection: e => {
                if (0 === W.length) return !0;
                let t = j ? 7 : 0,
                    n = W.length + t,
                    i = null == G ? 0 : G + e;
                return i >= n ? i = n - 1 : i < 0 && (i = 0), w(i), V(!0), !0
            }
        }), [W.length, Y, j, x, ee, G]);
        let et = r.useCallback(e => {
                let t = H[e];
                if (null == t) return null;
                let r = (0, g.getIconComponent)(t),
                    s = (0, i.jsx)(r, {
                        channel: n,
                        section: t,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return (0, i.jsx)(T.default, {
                    className: M.categoryHeader,
                    icon: s,
                    children: t.name
                }, e)
            }, [n, H]),
            en = r.useCallback((e, t) => {
                let n = e === H.length - 1,
                    r = H[e],
                    {
                        data: s
                    } = Y[e];
                return (0, i.jsxs)("ul", {
                    role: "group",
                    "aria-label": r.name,
                    className: a()(M.categorySection, {
                        [M.categorySectionLast]: n
                    }),
                    children: [t, 0 === s.length && (0, i.jsx)(u.default, {
                        message: v.default.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
                            applicationName: r.name
                        }),
                        noResultsImageURL: y,
                        className: M.noSearchResults
                    })]
                }, e)
            }, [H, Y]),
            ei = r.useCallback((e, t) => {
                var r;
                let s = Y[t.sectionIndex],
                    a = s.data[t.sectionRowIndex],
                    o = "".concat(s.section.id, ":").concat(null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : e);
                if (null == a || s.section.id !== a.applicationId && s.section.id !== L.BuiltInSectionId.FRECENCY || a.inputType === O.ApplicationCommandInputType.PLACEHOLDER) return (0, i.jsx)(C.default, {}, o);
                let l = x.find(e => e.id === a.applicationId);
                return (0, i.jsx)(f.default.NewCommand, {
                    index: e,
                    command: a,
                    channel: n,
                    className: M.itemWrapper,
                    selected: G === e,
                    showImage: s.section.id !== a.applicationId,
                    section: l,
                    onClick: () => ee(a, l, (0, p.getCommandTriggerSection)(s.section)),
                    onHover: () => {
                        w(null), V(!1)
                    }
                }, o)
            }, [n, Y, ee, x, G]),
            er = (0, A.useUID)();
        return (0, c.useChannelEditorPopup)(er, !0, (0, f.getAutocompleteRowId)(G)), r.useEffect(() => () => {
            (0, c.dismissChannelEditorPopup)()
        }, []), (0, i.jsxs)(f.default, {
            id: er,
            className: M.outerWrapper,
            innerClassName: M.wrapper,
            onMouseDown: b,
            children: [(0, i.jsx)(R.default, {
                className: M.rail,
                channel: n,
                sections: x,
                filteredSectionId: K,
                activeCategoryIndex: F,
                onSectionClick: $,
                applicationCommandListRef: k
            }), (0, i.jsx)(S.default, {
                role: "listbox",
                className: M.list,
                listPadding: P,
                onScroll: q,
                renderRow: ei,
                renderSection: en,
                renderSectionHeader: et,
                rowCount: H.length,
                rowCountBySection: J,
                rowHeight: 56,
                sectionHeaderHeight: 32,
                sectionMarginBottom: Z,
                ref: k,
                stickyHeaders: !0
            })]
        })
    })
}