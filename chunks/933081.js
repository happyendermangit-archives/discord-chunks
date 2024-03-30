function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n("805654"),
        s = n("784184"),
        l = n("549579"),
        c = n("560897"),
        f = n("512832"),
        d = n("210295"),
        _ = n("870331"),
        E = n("922747"),
        p = n("294463"),
        m = n("443699"),
        y = n("624308"),
        I = n("289398"),
        h = n("281767"),
        O = n("941504"),
        T = n("900544");

    function S(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function v(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    S(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    S(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
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
    }
    var N = (0, u.cssValueToNumber)(T.__invalid_stickerPickerPreviewDimensions),
        R = (0, u.cssValueToNumber)(T.__invalid_stickerPickerPreviewPadding),
        C = r.memo(function(e) {
            var t = e.isDisplayingIndividualStickers,
                o = void 0 !== t && t,
                u = e.preferAnimation,
                S = void 0 === u || u,
                C = e.getStickerItemProps,
                P = e.getStickerRowProps,
                D = e.gutterWidth,
                L = e.inspectedStickerPosition,
                M = e.isScrolling,
                U = e.isUsingKeyboardNavigation,
                w = e.onInspect,
                k = e.onSelect,
                G = e.rowIndex,
                B = e.stickerClassName,
                j = e.stickerDescriptors,
                F = e.stickerPadding,
                V = void 0 === F ? R : F,
                H = e.stickerSize,
                x = void 0 === H ? N : H,
                Y = e.ownedStickerPacks,
                W = e.enlargeOnInteraction,
                K = void 0 !== W && W,
                z = e.channel,
                X = e.currentUser,
                q = e.checkSendability,
                Q = void 0 === q || q,
                J = (0, c.useAnalyticsContext)().location,
                Z = x + 2 * V,
                $ = r.useMemo(function() {
                    return {
                        gridColumnGap: D,
                        gridTemplateColumns: "repeat(auto-fill, ".concat(Z, "px)"),
                        height: Z,
                        paddingRight: o ? void 0 : Z
                    }
                }, [o, D, Z]),
                ee = r.useMemo(function() {
                    return {
                        width: x,
                        height: x,
                        padding: V
                    }
                }, [V, x]);
            return r.createElement("div", A({
                className: T.row,
                style: $
            }, null == P ? void 0 : P(G)), j.map(function(e) {
                var t = e.visibleRowIndex === (null == L ? void 0 : L.rowIndex) && e.columnIndex === (null == L ? void 0 : L.columnIndex),
                    u = e.type === p.StickerGridItemTypes.STICKER && K && t,
                    c = (0, a.throttle)(function() {
                        (null == M ? void 0 : M.current) !== !0 && (null == U ? void 0 : U.current) !== !0 && !t && (null == w || w(e))
                    }, 250),
                    N = null !== (H = null == C ? void 0 : C(e.columnIndex, G)) && void 0 !== H ? H : {},
                    R = N.ref,
                    P = N.tabIndex,
                    D = N.onFocus,
                    j = function(e, t) {
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
                    }(N, ["ref", "tabIndex", "onFocus"]);
                switch (e.type) {
                    case p.StickerGridItemTypes.CREATE_STICKER:
                        return r.createElement("div", A({
                            key: e.guild_id
                        }, j), r.createElement(s.Clickable, {
                            "aria-label": e.name,
                            className: i()(T.createSticker, B, g({}, T.createInspected, t)),
                            innerRef: R,
                            tabIndex: P,
                            onFocus: null != D ? D : c,
                            onMouseMove: c,
                            onClick: function() {
                                e.type === p.StickerGridItemTypes.CREATE_STICKER && (_.default.track(h.AnalyticEvents.OPEN_MODAL, {
                                    type: h.AnalyticsSections.CREATE_STICKER_MODAL,
                                    location: J
                                }), (0, s.openModalLazy)(v(function() {
                                    var t;
                                    return b(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("72569"), n.e("62858")]).then(n.bind(n, "113747"))];
                                            case 1:
                                                return t = o.sent().default, [2, function(n) {
                                                    return r.createElement(t, A({
                                                        guildId: e.guild_id
                                                    }, n))
                                                }]
                                        }
                                    })
                                })))
                            },
                            style: ee
                        }, !K && r.createElement("div", {
                            className: T.inspectedIndicator
                        }), r.createElement("div", {
                            className: T.iconWrapper
                        }, r.createElement(d.default, {
                            className: T.icon
                        })), r.createElement(s.Text, {
                            color: "interactive-active",
                            variant: "text-xs/normal"
                        }, O.default.Messages.STICKER_PICKER_CREATE_STICKER)));
                    case p.StickerGridItemTypes.STICKER:
                        var F, V, H, W, q = o && null != Y && (0, m.isStandardSticker)(e.sticker) && !Y.has(e.sticker.pack_id);
                        return r.createElement("div", (F = A({}, j), V = (V = {
                            key: e.sticker.id
                        }, V), Object.getOwnPropertyDescriptors ? Object.defineProperties(F, Object.getOwnPropertyDescriptors(V)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(V)).forEach(function(e) {
                            Object.defineProperty(F, e, Object.getOwnPropertyDescriptor(V, e))
                        }), F), r.createElement(s.Clickable, {
                            className: i()(T.sticker, B, g({}, T.stickerInspected, t)),
                            innerRef: R,
                            tabIndex: P,
                            onFocus: null != D ? D : c,
                            onMouseMove: c,
                            onClick: function(t) {
                                (null == M ? void 0 : M.current) !== !0 && (null == U ? void 0 : U.current) !== !0 && (null == k || k(e, t))
                            },
                            onContextMenu: function(e) {
                                (0, l.openContextMenuLazy)(e, v(function() {
                                    var e;
                                    return b(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, n.e("88204").then(n.bind(n, "715075"))];
                                            case 1:
                                                return e = t.sent().default, [2, function(t) {
                                                    return r.createElement(e, t)
                                                }]
                                        }
                                    })
                                }))
                            },
                            style: ee,
                            "data-type": f.PickerContextMenuDataTypes.STICKER,
                            "data-id": e.sticker.id
                        }, r.createElement(s.HiddenVisually, null, (0, y.getStickerAltText)(e.sticker)), r.createElement("div", {
                            "aria-hidden": !0
                        }, !K && r.createElement("div", {
                            className: T.inspectedIndicator
                        }), r.createElement(y.default, {
                            className: i()(T.stickerNode, (g(W = {}, T.stickerNodeDimmed, K && !t && null != L && -1 !== L.rowIndex && -1 !== L.columnIndex), g(W, T.stickerNodeHidden, u), g(W, T.stickerUnsendable, Q && !(0, E.isSendableSticker)(e.sticker, X, z)), W)),
                            disableAnimation: !t && !S,
                            enlargeOnInteraction: K,
                            isInteracting: t,
                            maskAsset: t,
                            sticker: e.sticker,
                            size: x
                        }), q ? r.createElement(I.default, {
                            size: 20
                        }) : null)))
                }
            }))
        });
    t.default = C
}