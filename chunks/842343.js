function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("974667"),
        o = n("446674"),
        u = n("77078"),
        d = n("296141"),
        c = n("305961"),
        f = n("501536"),
        p = n("476765"),
        m = n("983782"),
        h = n("659186"),
        x = n("418062"),
        E = n("851745"),
        y = n("280214"),
        g = n("497858"),
        S = n("892149"),
        C = l.forwardRef(function(e, t) {
            var n, a, C, I, T;
            let {
                channel: _,
                type: v,
                editorHeight: N,
                onVisibilityChange: A
            } = e, O = (0, p.useUID)(), M = (0, o.useStateFromStores)([c.default], () => {
                var e;
                return null !== (e = c.default.getGuild(_.guild_id)) && void 0 !== e ? e : null
            }, [_.guild_id]), k = l.useRef(), [R, L, b] = (0, g.default)({
                ...e,
                guild: M
            }, t, k), P = (null === (n = v.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? h.default : m.default, j = (0, f.getAutocompleteRowId)(R.selectedIndex);
            (0, d.useChannelEditorPopup)(O, R.isVisible, j), x.default.trackExposure({
                location: "6e9811_1"
            });
            let {
                usePopoutAutocomplete: U
            } = x.default.useExperiment({
                location: "6e9811_2"
            }, {
                autoTrackExposure: !1
            }), D = (0, y.useChannelAutocompleteLayerPosition)({
                editorHeight: N,
                type: v,
                state: R,
                isInPopoutExperiment: U
            }), w = l.useMemo(() => null == D ? "" : String(Date.now()), [null == D ? void 0 : D.top, null == D ? void 0 : D.left, null == D ? void 0 : D.bottom, null == D ? void 0 : D.right]);
            if (l.useEffect(() => {
                    A(R.isVisible)
                }, [A, R.isVisible]), !R.isVisible || null == R.query || void 0 === D) return null;
            let F = null !== (a = R.query.typeInfo.renderResults({
                results: R.query.results,
                selectedIndex: R.selectedIndex,
                channel: _,
                guild: M,
                query: R.query.queryText,
                options: R.query.options,
                onHover: e => L.onResultHover(e),
                onClick: e => L.onResultClick(e)
            })) && void 0 !== a ? a : null;
            if (null == F) return null;
            let B = {
                    [S.autocompleteAttached]: null == D,
                    [S.autocompletePopout]: null != D,
                    [S.bottom]: null == D && "bottom" === e.position
                },
                G = 490;
            null != D && (G = (null === (C = v.autocomplete) || void 0 === C ? void 0 : C.small) ? 200 : (null === (I = R.query) || void 0 === I ? void 0 : I.type) === E.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245), G = Math.min(window.innerHeight - 175, G);
            let H = (0, i.jsx)(f.default, {
                id: O,
                className: s(S.autocomplete, B),
                innerClassName: S.autocompleteInner,
                onMouseDown: e => e.preventDefault(),
                children: (0, i.jsx)(r.ListNavigatorProvider, {
                    navigator: b,
                    children: (0, i.jsx)(r.ListNavigatorContainer, {
                        children: e => {
                            let {
                                ref: t,
                                ...n
                            } = e;
                            return (0, i.jsx)(u.AdvancedScrollerThin, {
                                id: O,
                                ref: e => {
                                    var n;
                                    t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, k.current = e
                                },
                                ...n,
                                className: S.scroller,
                                style: {
                                    maxHeight: G
                                },
                                role: "listbox",
                                "aria-labelledby": (0, f.getAutocompleteTitleId)(O),
                                children: F
                            })
                        }
                    })
                })
            });
            return null != D ? (0, i.jsx)(P, {
                children: (0, i.jsx)(u.ReferencePositionLayer, {
                    reference: () => D,
                    positionKey: w,
                    position: null !== (T = e.position) && void 0 !== T ? T : "top",
                    align: "left",
                    spacing: 8,
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    children: () => H
                })
            }) : H
        })
}