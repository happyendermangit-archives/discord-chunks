function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("751007"),
        l = n("29570"),
        c = n("140817"),
        f = n("186179"),
        d = n("797056"),
        _ = n("61546"),
        E = n("718775"),
        p = n("587996"),
        m = n("222961"),
        y = n("719328"),
        I = n("503113"),
        h = n("292206"),
        O = n("705737"),
        T = n("861272"),
        S = n("653754"),
        v = n("268367"),
        g = n("719208"),
        A = n("960201"),
        b = n("118891"),
        N = n("281767"),
        R = n("941504"),
        C = n("442608"),
        P = n("239840");

    function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function L(e, t) {
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
                if ("string" == typeof e) return D(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var M = [8, 8, 0, 8],
        U = u().debounce(function() {
            (0, c.trackWithMetadata)(N.AnalyticEvents.APPLICATION_COMMAND_BROWSER_SCROLLED)
        }, 300);

    function w(e) {
        e.preventDefault()
    }
    t.default = r.forwardRef(function(e, t) {
        var n = e.channel,
            o = e.canOnlyUseTextCommands,
            a = r.useRef(!1),
            u = r.useRef(0),
            D = L(r.useState(0), 2),
            k = D[0],
            G = D[1],
            B = r.useRef(null),
            j = L(r.useState(!1), 2),
            F = j[0],
            V = j[1],
            H = d.ApplicationCommandDiscoveryPickerStore.useStore(function(e) {
                return e.activeCategoryIndex
            });
        r.useEffect(function() {
            (0, c.trackWithMetadata)(N.AnalyticEvents.APPLICATION_COMMAND_BROWSER_OPENED)
        }, []);
        var x = h.useDiscovery(n, {
                commandType: l.ApplicationCommandType.CHAT,
                builtIns: o ? O.BuiltInCommandFilter.ONLY_TEXT : O.BuiltInCommandFilter.ALLOW,
                applicationCommands: !o
            }, {
                placeholderCount: 7,
                limit: b.DISCOVERY_COMMANDS_QUERY_LIMIT,
                includeFrecency: !0
            }),
            Y = x.sectionDescriptors,
            W = x.activeSections,
            K = x.commandsByActiveSection,
            z = x.hasMoreAfter,
            X = x.commands,
            q = x.filteredSectionId,
            Q = x.scrollDown,
            J = x.filterSection,
            Z = (0, _.useSynchronizedActiveCategoryIndexForScrollPosition)({
                activeCategoryIndex: H,
                isScrolling: a,
                listRef: B,
                onActiveCategoryIndexChange: function(e) {
                    var t = W[e];
                    if (null != t) {
                        var n = Y.findIndex(function(e) {
                            return e.id === t.id
                        });
                        d.ApplicationCommandDiscoveryPickerStore.setActiveCategoryIndex(n)
                    }
                },
                scrollOffset: 20,
                searchQuery: ""
            }),
            $ = function(e) {
                var t = W.length,
                    n = K.reduce(function(e, t) {
                        return e + t.data.length
                    }, 0) - (z ? 7 : 0);
                z && e + 420 > 48 * t + 56 * n - 512 && Q(), Z(e), U(), u.current = e
            };
        r.useEffect(function() {
            $(u.current)
        }, [X]);
        var ee = r.useCallback(function(e) {
                return e !== W.length - 1 || z ? 16 : 0
            }, [W.length, z]),
            et = K.map(function(e) {
                return e.data.length
            });
        r.useEffect(function() {
            null != B.current && F && null != k && B.current.scrollRowIntoView(k)
        }, [F, k]), r.useLayoutEffect(function() {
            if (null != q) {
                var e;
                null === (e = B.current) || void 0 === e || e.scrollToSectionTop(0)
            }
        }, [X, q]);
        var en = r.useCallback(function(e) {
                if (e.id === q || e.id === b.BuiltInSectionId.FRECENCY) {
                    var t;
                    J(null), null === (t = B.current) || void 0 === t || t.scrollToSectionTop(0)
                } else J(e.id)
            }, [J, q]),
            er = r.useCallback(function(e, t, r) {
                I.setActiveCommand({
                    channelId: n.id,
                    command: e,
                    section: t,
                    location: T.ApplicationCommandTriggerLocations.DISCOVERY,
                    triggerSection: r
                })
            }, [n.id]);
        r.useImperativeHandle(t, function() {
            return {
                onTabOrEnter: function(e) {
                    if (null == k) return !e && (G(0), !0);
                    if (null == k) return !1;
                    var t = 0,
                        n = 0,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = K[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = function() {
                                var e = a.value;
                                if (t = n, n += e.data.length, k < n) {
                                    var r = e.data[k - t],
                                        o = Y.find(function(e) {
                                            return e.id === r.applicationId
                                        });
                                    return er(r, o, (0, S.getCommandTriggerSection)(e.section)), "break"
                                }
                            }();
                            if ("break" === s) break
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return !0
                },
                onMoveSelection: function(e) {
                    if (0 === X.length) return !0;
                    var t = z ? 7 : 0,
                        n = X.length + t,
                        r = null == k ? 0 : k + e;
                    return r >= n ? r = n - 1 : r < 0 && (r = 0), G(r), V(!0), !0
                }
            }
        }, [X.length, K, z, Y, er, k]);
        var eo = r.useCallback(function(e) {
                var t = W[e];
                if (null == t) return null;
                var o = (0, A.getIconComponent)(t),
                    i = r.createElement(o, {
                        channel: n,
                        section: t,
                        width: 16,
                        height: 16,
                        padding: 0
                    });
                return r.createElement(E.default, {
                    key: e,
                    className: C.categoryHeader,
                    icon: i
                }, t.name)
            }, [n, W]),
            ei = r.useCallback(function(e, t) {
                var n, o, a, u = e === W.length - 1,
                    l = W[e],
                    c = K[e].data;
                return r.createElement("ul", {
                    role: "group",
                    "aria-label": l.name,
                    key: e,
                    className: i()(C.categorySection, (n = {}, o = C.categorySectionLast, a = u, o in n ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = a, n))
                }, t, 0 === c.length && r.createElement(s.default, {
                    message: R.default.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
                        applicationName: l.name
                    }),
                    noResultsImageURL: P,
                    className: C.noSearchResults
                }))
            }, [W, K]),
            ea = r.useCallback(function(e, t) {
                var o, i = K[t.sectionIndex],
                    a = i.data[t.sectionRowIndex],
                    u = "".concat(i.section.id, ":").concat(null !== (o = null == a ? void 0 : a.id) && void 0 !== o ? o : e);
                if (null == a || i.section.id !== a.applicationId && i.section.id !== b.BuiltInSectionId.FRECENCY || a.inputType === T.ApplicationCommandInputType.PLACEHOLDER) return r.createElement(g.default, {
                    key: u
                });
                var s = Y.find(function(e) {
                    return e.id === a.applicationId
                });
                return r.createElement(p.default.NewCommand, {
                    key: u,
                    index: e,
                    command: a,
                    channel: n,
                    className: C.itemWrapper,
                    selected: k === e,
                    showImage: i.section.id !== a.applicationId,
                    section: s,
                    onClick: function() {
                        return er(a, s, (0, S.getCommandTriggerSection)(i.section))
                    },
                    onHover: function() {
                        G(null), V(!1)
                    }
                })
            }, [n, K, er, Y, k]),
            eu = (0, y.useUID)();
        return (0, f.useChannelEditorPopup)(eu, !0, (0, p.getAutocompleteRowId)(k)), r.useEffect(function() {
            return function() {
                (0, f.dismissChannelEditorPopup)()
            }
        }, []), r.createElement(p.default, {
            id: eu,
            className: C.outerWrapper,
            innerClassName: C.wrapper,
            onMouseDown: w
        }, r.createElement(v.default, {
            className: C.rail,
            channel: n,
            sections: Y,
            filteredSectionId: q,
            activeCategoryIndex: H,
            onSectionClick: en,
            applicationCommandListRef: B
        }), r.createElement(m.default, {
            role: "listbox",
            className: C.list,
            listPadding: M,
            onScroll: $,
            renderRow: ea,
            renderSection: ei,
            renderSectionHeader: eo,
            rowCount: W.length,
            rowCountBySection: et,
            rowHeight: 56,
            sectionHeaderHeight: 32,
            sectionMarginBottom: ee,
            ref: B,
            stickyHeaders: !0
        }))
    })
}