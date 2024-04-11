function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("924826"),
        l = n("442837"),
        u = n("481060"),
        d = n("30465"),
        _ = n("430824"),
        c = n("156361"),
        E = n("153124"),
        I = n("153850"),
        T = n("482207"),
        f = n("436896"),
        S = n("590921"),
        h = n("606992"),
        A = n("51062"),
        m = n("881338");
    t.default = r.forwardRef(function(e, t) {
        var n, s, N, O, p;
        let {
            channel: R,
            type: C,
            editorHeight: g,
            onVisibilityChange: L
        } = e, D = (0, E.useUID)(), v = (0, l.useStateFromStores)([_.default], () => {
            var e;
            return null !== (e = _.default.getGuild(R.guild_id)) && void 0 !== e ? e : null
        }, [R.guild_id]), M = r.useRef(), [y, P, U] = (0, A.default)({
            ...e,
            guild: v
        }, t, M), b = (null === (n = C.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? T.default : I.default, G = (0, c.getAutocompleteRowId)(y.selectedIndex);
        (0, d.useChannelEditorPopup)(D, y.isVisible, G), f.default.trackExposure({
            location: "6e9811_1"
        });
        let {
            usePopoutAutocomplete: w
        } = f.default.useExperiment({
            location: "6e9811_2"
        }, {
            autoTrackExposure: !1
        }), k = (0, h.useChannelAutocompleteLayerPosition)({
            editorHeight: g,
            type: C,
            state: y,
            isInPopoutExperiment: w
        }), B = r.useMemo(() => null == k ? "" : String(Date.now()), [null == k ? void 0 : k.top, null == k ? void 0 : k.left, null == k ? void 0 : k.bottom, null == k ? void 0 : k.right]);
        if (r.useEffect(() => {
                L(y.isVisible)
            }, [L, y.isVisible]), !y.isVisible || null == y.query || void 0 === k) return null;
        let V = null !== (s = y.query.typeInfo.renderResults({
            results: y.query.results,
            selectedIndex: y.selectedIndex,
            channel: R,
            guild: v,
            query: y.query.queryText,
            options: y.query.options,
            onHover: e => P.onResultHover(e),
            onClick: e => P.onResultClick(e)
        })) && void 0 !== s ? s : null;
        if (null == V) return null;
        let F = {
                [m.autocompleteAttached]: null == k,
                [m.autocompletePopout]: null != k,
                [m.bottom]: null == k && "bottom" === e.position
            },
            x = 490;
        null != k && (x = (null === (N = C.autocomplete) || void 0 === N ? void 0 : N.small) ? 200 : (null === (O = y.query) || void 0 === O ? void 0 : O.type) === S.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245), x = Math.min(window.innerHeight - 175, x);
        let H = (0, i.jsx)(c.default, {
            id: D,
            className: a()(m.autocomplete, F),
            innerClassName: m.autocompleteInner,
            onMouseDown: e => e.preventDefault(),
            children: (0, i.jsx)(o.ListNavigatorProvider, {
                navigator: U,
                children: (0, i.jsx)(o.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, i.jsx)(u.AdvancedScrollerThin, {
                            id: D,
                            ref: e => {
                                var n;
                                t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, M.current = e
                            },
                            ...n,
                            className: m.scroller,
                            style: {
                                maxHeight: x
                            },
                            role: "listbox",
                            "aria-labelledby": (0, c.getAutocompleteTitleId)(D),
                            children: V
                        })
                    }
                })
            })
        });
        return null != k ? (0, i.jsx)(b, {
            children: (0, i.jsx)(u.ReferencePositionLayer, {
                reference: () => k,
                positionKey: B,
                position: null !== (p = e.position) && void 0 !== p ? p : "top",
                align: "left",
                spacing: 8,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                children: () => H
            })
        }) : H
    })
}