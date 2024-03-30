function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("136035"),
        u = n("898511"),
        s = n("29570"),
        l = n("471559"),
        c = n("309944"),
        f = n("158201"),
        d = n("494189"),
        _ = n("453197"),
        E = n("714196"),
        p = n("941504"),
        m = n("500813");

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t, n) {
        var o = t.attributes,
            i = t.children,
            a = t.element;
        switch (a.type) {
            case "applicationCommand":
                var u, s = l.default.getActiveCommand(n),
                    c = 0,
                    f = 0;
                if (null != s && s.id === a.command.id) {
                    var _ = d.getOptionNames(e),
                        E = !0,
                        y = !1,
                        h = void 0;
                    try {
                        for (var T, S, v = (null !== (T = s.options) && void 0 !== T ? T : [])[Symbol.iterator](); !(E = (S = v.next()).done); E = !0) {
                            var g = S.value;
                            _.includes(g.name) ? f++ : c++
                        }
                    } catch (e) {
                        y = !0, h = e
                    } finally {
                        try {
                            !E && null != v.return && v.return()
                        } finally {
                            if (y) throw h
                        }
                    }
                }
                var A = {};
                return c > 0 && (u = f > 0 ? p.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                    count: c
                }) : p.default.Messages.COMMANDS_OPTION_COUNT.format({
                    count: c
                }), A["data-trailing-placeholder"] = u), r.createElement("div", I({
                    className: m.applicationCommand
                }, o, A), i);
            case "applicationCommandOption":
                return r.createElement(O, {
                    attributes: o,
                    channelId: n,
                    element: a
                }, i);
            default:
                return null
        }
    }
    var O = function(e) {
        var t, n, o, d, h = e.channelId,
            O = e.element,
            T = e.attributes,
            S = e.children,
            v = (0, a.useSelected)(),
            g = (0, a.useFocused)(),
            A = (0, a.useSlateStatic)(),
            b = (0, u.useStateFromStoresObject)([l.default], function() {
                var e, t, n;
                return {
                    optionType: null === (e = l.default.getOption(h, O.optionName)) || void 0 === e ? void 0 : e.type,
                    errored: (null === (n = l.default.getOptionState(h, O.optionName)) || void 0 === n ? void 0 : null === (t = n.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                }
            }, [h, O.optionName]),
            N = b.optionType,
            R = b.errored,
            C = (0, u.useStateFromStores)([f.default], function() {
                return f.default.getUpload(h, O.optionName, c.DraftType.SlashCommand)
            }, [h, O.optionName]),
            P = O.children[O.children.length - 1],
            D = null != P && E.TextUtils.isText(P) && P.text.endsWith("\n"),
            L = i()(m.inlineElement, m.optionPill, (y(o = {}, m.selectedPill, g && v), y(o, m.erroredPill, (!g || !v) && R), o)),
            M = r.useCallback(function() {
                !E.EditorUtils.isVoid(A, O) && _.SlateTransforms.selectCommandOption(A, O.optionName, !0)
            }, [A, O]);
        return d = N === s.ApplicationCommandOptionType.ATTACHMENT ? (null == C ? void 0 : C.filename) != null ? r.createElement("span", {
            className: i()(m.optionPillValue, m.attachmentFilename),
            contentEditable: !1
        }, C.filename, S) : r.createElement("span", {
            className: i()(m.optionPillValue, m.readonlyPillValue),
            contentEditable: !1
        }, p.default.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, S) : r.createElement("span", {
            className: m.optionPillValue
        }, S, D ? r.createElement("span", {
            className: m.newLine,
            contentEditable: !1
        }) : null), r.createElement("span", (t = I({}, T), n = (n = {
            className: L
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), r.createElement("span", {
            className: m.optionPillKey,
            contentEditable: !1,
            onClick: M
        }, O.optionDisplayName, "​"), d, r.createElement("span", {
            contentEditable: !1
        }, "​"))
    }
}