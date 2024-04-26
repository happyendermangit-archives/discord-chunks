function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
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
        m = n("364993");
    t.default = r.forwardRef(function(e, t) {
        var n, s, N, p, O;
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
        }), B = (0, h.useChannelAutocompleteLayerPosition)({
            editorHeight: g,
            type: C,
            state: y,
            isInPopoutExperiment: w
        }), k = r.useMemo(() => null == B ? "" : String(Date.now()), [null == B ? void 0 : B.top, null == B ? void 0 : B.left, null == B ? void 0 : B.bottom, null == B ? void 0 : B.right]);
        if (r.useEffect(() => {
                L(y.isVisible)
            }, [L, y.isVisible]), !y.isVisible || null == y.query || void 0 === B) return null;
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
        let x = {
                [m.autocompleteAttached]: null == B,
                [m.autocompletePopout]: null != B,
                [m.bottom]: null == B && "bottom" === e.position
            },
            F = 490;
        null != B && (F = (null === (N = C.autocomplete) || void 0 === N ? void 0 : N.small) ? 200 : (null === (p = y.query) || void 0 === p ? void 0 : p.type) === S.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245), F = Math.min(window.innerHeight - 175, F);
        let H = (0, i.jsx)(c.default, {
            id: D,
            className: a()(m.autocomplete, x),
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
                                maxHeight: F
                            },
                            role: "listbox",
                            "aria-labelledby": (0, c.getAutocompleteTitleId)(D),
                            children: V
                        })
                    }
                })
            })
        });
        return null != B ? (0, i.jsx)(b, {
            children: (0, i.jsx)(u.ReferencePositionLayer, {
                targetRef: e.targetRef,
                overrideTargetRect: B,
                positionKey: k,
                position: null !== (O = e.position) && void 0 !== O ? O : "top",
                align: "left",
                spacing: 8,
                autoInvert: !0,
                nudgeAlignIntoViewport: !0,
                children: () => H
            })
        }) : H
    })
}