function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("762624"),
        u = n("898511"),
        s = n("784184"),
        l = n("186179"),
        c = n("306912"),
        f = n("587996"),
        d = n("719328"),
        _ = n("244749"),
        E = n("205490"),
        p = n("903793"),
        m = n("209610"),
        y = n("547459"),
        I = n("899883"),
        h = n("881338");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function S(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                T(e, t, n[t])
            })
        }
        return e
    }

    function v(e, t) {
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
    t.default = r.forwardRef(function(e, t) {
        var n, o, g, A, b, N, R, C, P = e.channel,
            D = e.type,
            L = e.editorHeight,
            M = e.onVisibilityChange,
            U = (0, d.useUID)(),
            w = (0, u.useStateFromStores)([c.default], function() {
                var e;
                return null !== (e = c.default.getGuild(P.guild_id)) && void 0 !== e ? e : null
            }, [P.guild_id]),
            k = r.useRef();
        var G = (n = (0, I.default)(v(S({}, e), {
                guild: w
            }), t, k), o = 3, function(e) {
                if (Array.isArray(e)) return e
            }(n) || function(e, t) {
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
            }(n, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }
            }(n, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            B = G[0],
            j = G[1],
            F = G[2],
            V = (null === (g = D.autocomplete) || void 0 === g ? void 0 : g.forceChatLayer) ? E.default : _.default,
            H = (0, f.getAutocompleteRowId)(B.selectedIndex);
        (0, l.useChannelEditorPopup)(U, B.isVisible, H), p.default.trackExposure({
            location: "6e9811_1"
        });
        var x = p.default.useExperiment({
                location: "6e9811_2"
            }, {
                autoTrackExposure: !1
            }).usePopoutAutocomplete,
            Y = (0, y.useChannelAutocompleteLayerPosition)({
                editorHeight: L,
                type: D,
                state: B,
                isInPopoutExperiment: x
            }),
            W = r.useMemo(function() {
                return null == Y ? "" : String(Date.now())
            }, [null == Y ? void 0 : Y.top, null == Y ? void 0 : Y.left, null == Y ? void 0 : Y.bottom, null == Y ? void 0 : Y.right]);
        if (r.useEffect(function() {
                M(B.isVisible)
            }, [M, B.isVisible]), !B.isVisible || null == B.query || void 0 === Y) return null;
        var K = null !== (A = B.query.typeInfo.renderResults({
            results: B.query.results,
            selectedIndex: B.selectedIndex,
            channel: P,
            guild: w,
            query: B.query.queryText,
            options: B.query.options,
            onHover: function(e) {
                return j.onResultHover(e)
            },
            onClick: function(e) {
                return j.onResultClick(e)
            }
        })) && void 0 !== A ? A : null;
        if (null == K) return null;
        var z = (T(b = {}, h.autocompleteAttached, null == Y), T(b, h.autocompletePopout, null != Y), T(b, h.bottom, null == Y && "bottom" === e.position), b),
            X = 490;
        null != Y && (X = (null === (N = D.autocomplete) || void 0 === N ? void 0 : N.small) ? 200 : (null === (R = B.query) || void 0 === R ? void 0 : R.type) === m.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245), X = Math.min(window.innerHeight - 175, X);
        var q = r.createElement(f.default, {
            id: U,
            className: i()(h.autocomplete, z),
            innerClassName: h.autocompleteInner,
            onMouseDown: function(e) {
                return e.preventDefault()
            }
        }, r.createElement(a.ListNavigatorProvider, {
            navigator: F
        }, r.createElement(a.ListNavigatorContainer, null, function(e) {
            var t = e.ref,
                n = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = {},
                            i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                        return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) {
                            if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                    }
                    return o
                }(e, ["ref"]);
            return r.createElement(s.AdvancedScrollerThin, v(S({
                id: U,
                ref: function(e) {
                    var n;
                    t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, k.current = e
                }
            }, n), {
                className: h.scroller,
                style: {
                    maxHeight: X
                },
                role: "listbox",
                "aria-labelledby": (0, f.getAutocompleteTitleId)(U)
            }), K)
        })));
        return null != Y ? r.createElement(V, null, r.createElement(s.ReferencePositionLayer, {
            reference: function() {
                return Y
            },
            positionKey: W,
            position: null !== (C = e.position) && void 0 !== C ? C : "top",
            align: "left",
            spacing: 8,
            autoInvert: !0,
            nudgeAlignIntoViewport: !0
        }, function() {
            return q
        })) : q
    })
}