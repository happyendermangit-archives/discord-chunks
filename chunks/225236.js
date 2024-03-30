function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var r = n("470079"),
        o = n("836560"),
        i = n("327432"),
        a = n("813970"),
        u = n("455866"),
        s = n("471559"),
        l = n("53867"),
        c = n("941055"),
        f = n("264218"),
        d = n("32175"),
        _ = n("384139"),
        E = n("33849"),
        p = n("953873"),
        m = n("246098"),
        y = n("498683"),
        I = n("173272");
    n("862396");
    var h = n("234281"),
        O = n("527819"),
        T = n("408453"),
        S = n("370937"),
        v = n("751544"),
        g = n("188629");

    function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function b(e) {
        var t, n, b = r.useContext(a.default),
            N = l.UseRichChatInput.useSetting();
        var R = (t = r.useState(function() {
            var t, n, r = (0, i.createEditor)();
            return r.children = (0, c.toRichValue)(""), r.selection = {
                    anchor: g.FIRST_TEXT_POINT,
                    focus: g.FIRST_TEXT_POINT
                },
                function(e) {
                    var t, n, r, i = e.editor,
                        a = e.chatInputType,
                        u = e.channel,
                        s = e.canUseCommands,
                        l = e.canOnlyUseTextCommands,
                        c = e.windowContext,
                        g = e.previewMarkdown,
                        A = e.forTests,
                        b = e.onChangeStart,
                        N = e.onChangeEnd,
                        R = e.updateState,
                        C = i,
                        P = C.onChange;
                    C.chatInputType = a, C.windowContext = c, C.previewMarkdown = g, C.composition = null, C.events = new o.EventEmitter, C.isMac = "MacIntel" === navigator.platform, C.onChange = function() {
                        C.events.emit("onChange"), P()
                    }, C = (0, O.withReact)(C, !0 === A), C = (0, h.default)(C), C = (0, I.default)(C), (null === (t = a.commands) || void 0 === t ? void 0 : t.enabled) && (C = (0, f.default)(C, u, !0 === s, !0 === l)), C = (0, y.default)(C, u.guild_id, u.id), !(null === (n = a.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (C = (0, d.default)(C)), !(null === (r = a.markdown) || void 0 === r ? void 0 : r.disableCodeBlocks) && (C = (0, _.default)(C)), A && (C = (0, S.default)(C)), C = (0, m.default)(C), C = (0, E.default)(C), C = (0, T.default)(C), C = (0, v.default)(C, b, N), C = (0, p.default)(C, function(e) {
                        var t = e.newValue,
                            n = e.newSelection;
                        return R(C, "undo", {
                            value: t,
                            selection: n
                        })
                    })
                }((t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r, o, i;
                            r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[o] = i
                        })
                    }
                    return e
                }({}, e), n = (n = {
                    editor: r,
                    windowContext: b,
                    previewMarkdown: N
                }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t)), r
        }), n = 1, function(e) {
            if (Array.isArray(e)) return e
        }(t) || function(e, t) {
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
        }(t, n) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return A(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
            }
        }(t, n) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }())[0];
        return r.useEffect(function() {
            var e = function() {
                return R.onChange()
            };
            return s.default.addChangeListener(e), u.default.addChangeListener(e),
                function() {
                    s.default.removeChangeListener(e), u.default.removeChangeListener(e)
                }
        }, [R]), r.useEffect(function() {
            R.previewMarkdown !== N && (R.previewMarkdown = N, R.onChange())
        }, [R, N]), R
    }
}