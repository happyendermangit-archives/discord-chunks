function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        },
        unsetCommand: function() {
            return P
        }
    });
    var r = n("29570"),
        o = n("503113"),
        i = n("169850"),
        a = n("292206"),
        u = n("471559"),
        s = n("861272"),
        l = n("653754"),
        c = n("148768"),
        f = n("960201"),
        d = n("4833"),
        _ = n("935741"),
        E = n("306912"),
        p = n("208454"),
        m = n("494189"),
        y = n("610045"),
        I = n("590401"),
        h = n("453197"),
        O = n("714196"),
        T = n("188629"),
        S = n("281767"),
        v = n("407048");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e, t) {
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
                if ("string" == typeof e) return g(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var b = new Set(["applicationCommandOption"]),
        N = new Set([r.ApplicationCommandOptionType.ATTACHMENT]),
        R = new Set(["line", "applicationCommand"]);

    function C(e, t, n, c) {
        var _ = e.insertData,
            E = e.isInline,
            p = e.isVoid,
            S = e.onChange,
            g = e.deleteBackward,
            C = e.deleteForward,
            k = e.deleteFragment;
        e.insertData = function(n) {
            if (null != t && O.EditorUtils.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
                var r = JSON.parse(n.getData("application/x-discord-interaction-data")),
                    u = (0, l.extractInteractionDataProps)(r),
                    c = u.commandKey,
                    f = u.interactionOptions,
                    d = a.getCachedCommand(t, c),
                    E = d.application,
                    p = d.command;
                if (null != p) {
                    var m, y, I = null != E ? {
                        type: s.ApplicationCommandSectionType.APPLICATION,
                        id: E.id,
                        icon: E.icon,
                        name: null !== (y = null === (m = E.bot) || void 0 === m ? void 0 : m.username) && void 0 !== y ? y : E.name,
                        application: E
                    } : null;
                    return o.setActiveCommand({
                        channelId: t.id,
                        command: p,
                        section: I,
                        location: s.ApplicationCommandTriggerLocations.PASTE,
                        initialValues: (0, i.getInitialValuesFromInteractionOptions)(p, null != f ? f : [])
                    }), null
                }
            }
            return _(n)
        }, e.isInline = function(e) {
            return !!b.has(e.type) || E(e)
        }, e.isVoid = function(e) {
            return !!("applicationCommandOption" === e.type && N.has(e.optionType)) || p(e)
        }, e.deleteBackward = function(t) {
            U(e, function() {
                return g(t)
            })
        }, e.deleteForward = function(t) {
            U(e, function() {
                return C(t)
            })
        }, e.deleteFragment = function(t) {
            U(e, function() {
                return k(t)
            })
        };
        var G = null,
            B = null,
            j = null,
            F = null,
            V = null;
        return e.onChange = function() {
            if (null != t) {
                var i = u.default.getState(t.id),
                    l = a.getChangeKeys(t);
                if (O.EditorUtils.richValue(e) !== G || !O.SelectionUtils.equals(e.selection, B) || i.activeCommand !== j || null == V || l.some(function(e, t) {
                        return V[t] !== e
                    })) {
                    var _ = y.HistoryUtils.withMergedEntry(e, function() {
                        var u;
                        return function(e) {
                            var t = e.editor,
                                n = e.storeCommandState,
                                i = e.channel,
                                u = e.canUseCommands,
                                l = e.canOnlyUseTextCommands,
                                c = e.commandChanged,
                                _ = e.previousOptionValues,
                                E = M(t),
                                p = E.command,
                                y = E.commandText,
                                S = n.activeCommand;
                            if (!u || l && (null == S ? void 0 : S.inputType) !== s.ApplicationCommandInputType.BUILT_IN_TEXT && (null == S ? void 0 : S.inputType) !== s.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return null != p && P(t, i.id, S, !0), null;
                            if (null != p) {
                                if (O.EditorUtils.isEditorEmpty(t) || null == S) return P(t, i.id, S, !1), null;
                                var g = "".concat(v.COMMAND_SENTINEL).concat(p.displayName);
                                if (null == y || !y.startsWith(g) || 0 === m.getOptionNames(t).length && (y.length < g.length + 1 || " " !== y[g.length])) return P(t, i.id, S, !0), null
                            } else {
                                if (null != S && c) {
                                    var b = function(e, t, n) {
                                            var r, o = n.initialValues,
                                                i = n.activeCommand;
                                            if (null == i) return null;
                                            var a = (null !== (L = null === (C = i.options) || void 0 === C ? void 0 : C.length) && void 0 !== L ? L : 0) > 0 ? m.findTextOptions(e, i) : null,
                                                u = (0, I.toTextValue)(O.EditorUtils.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: O.EditorUtils.start(e, []),
                                                        focus: null !== (M = null == a ? void 0 : null === (P = a[0]) || void 0 === P ? void 0 : P.keyRange.anchor) && void 0 !== M ? M : O.EditorUtils.end(e, [])
                                                    }
                                                }),
                                                s = "",
                                                l = u.toLocaleLowerCase(),
                                                c = d.PREFIX_COMMAND_REGEX.exec(l);
                                            null != c && (l = v.COMMAND_SENTINEL + l.substring(c.length));
                                            var f = "".concat(v.COMMAND_SENTINEL).concat(i.displayName).toLocaleLowerCase(),
                                                _ = "".concat(v.COMMAND_SENTINEL).concat(i.name).toLocaleLowerCase();
                                            l.startsWith(f) && l.length > f.length ? s = u.substring(f.length).trim() : l.startsWith(_) && l.length > _.length && (s = u.substring(_.length).trim());
                                            var E = [],
                                                p = null,
                                                y = null;
                                            if (null != i.options) {
                                                var S = new Set;
                                                if (null != a) {
                                                    var g = !0,
                                                        b = !1,
                                                        R = void 0;
                                                    try {
                                                        for (var C, P, L, M, U, k = a[Symbol.iterator](); !(g = (U = k.next()).done); g = !0) {
                                                            var G, B = U.value;
                                                            S.add(B.name);
                                                            var j = null !== (G = w(n, t, B.name)) && void 0 !== G ? G : B.text,
                                                                F = {
                                                                    type: "applicationCommandOption",
                                                                    optionName: B.name,
                                                                    optionDisplayName: B.displayName,
                                                                    optionType: B.type,
                                                                    children: [{
                                                                        text: j
                                                                    }]
                                                                };
                                                            E.push(F), 0 === B.text.length && null == p && (p = F)
                                                        }
                                                    } catch (e) {
                                                        b = !0, R = e
                                                    } finally {
                                                        try {
                                                            !g && null != k.return && k.return()
                                                        } finally {
                                                            if (b) throw R
                                                        }
                                                    }
                                                }
                                                var V = !0,
                                                    H = !1,
                                                    x = void 0;
                                                try {
                                                    for (var Y, W = i.options[Symbol.iterator](); !(V = (Y = W.next()).done); V = !0) {
                                                        var K = Y.value;
                                                        if (!S.has(K.name) && (K.required || null != o[K.name])) {
                                                            var z = void 0,
                                                                X = void 0;
                                                            s.length > 0 && !N.has(K.type) ? (z = s, s = "") : z = null != (X = w(n, t, K.name)) ? X : "";
                                                            var q = {
                                                                type: "applicationCommandOption",
                                                                optionName: K.name,
                                                                optionDisplayName: K.displayName,
                                                                optionType: K.type,
                                                                children: [{
                                                                    text: z
                                                                }]
                                                            };
                                                            E.push(q), 0 === z.length && null == p && (p = q), null == X && (y = q)
                                                        }
                                                    }
                                                } catch (e) {
                                                    H = !0, x = e
                                                } finally {
                                                    try {
                                                        !V && null != W.return && W.return()
                                                    } finally {
                                                        if (H) throw x
                                                    }
                                                }
                                            }
                                            r = s.length > 0 ? "".concat(v.COMMAND_SENTINEL).concat(i.displayName, " ").concat(s.replace(/\r|\n/g, " ")) : 0 === E.length ? "".concat(v.COMMAND_SENTINEL).concat(i.displayName, " ") : "".concat(v.COMMAND_SENTINEL).concat(i.displayName), E.unshift({
                                                text: r
                                            });
                                            var Q = {
                                                type: "applicationCommand",
                                                children: E,
                                                command: {
                                                    id: i.id,
                                                    name: i.name,
                                                    displayName: i.displayName
                                                }
                                            };
                                            O.EditorUtils.withoutNormalizing(e, function() {
                                                h.SlateTransforms.insertNodes(e, [Q], {
                                                    at: T.FIRST_BLOCK_PATH
                                                });
                                                var t = !0,
                                                    n = !1,
                                                    r = void 0;
                                                try {
                                                    for (var o, i = O.EditorUtils.blocks(e).reverse()[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                                        var a = A(o.value, 2)[1];
                                                        O.PathUtils.isAfter(a, T.FIRST_BLOCK_PATH) && h.SlateTransforms.removeNodes(e, {
                                                            at: a,
                                                            voids: !0
                                                        })
                                                    }
                                                } catch (e) {
                                                    n = !0, r = e
                                                } finally {
                                                    try {
                                                        !t && null != i.return && i.return()
                                                    } finally {
                                                        if (n) throw r
                                                    }
                                                }
                                            });
                                            var J = null;
                                            return null != p ? (h.SlateTransforms.selectCommandOption(e, p.optionName), J = p.optionName) : null != y ? (h.SlateTransforms.selectCommandOption(e, y.optionName, !1), J = y.optionName) : h.SlateTransforms.resetSelectionToEnd(e), null == y && D(e, i), J
                                        }(t, i, n),
                                        C = m.getOptionValues(t, S);
                                    return L({
                                        guildId: i.guild_id,
                                        channelId: i.id,
                                        command: S,
                                        activeOption: b,
                                        currentOptionValues: C,
                                        previousOptionValues: null,
                                        validateAll: !0,
                                        allowEmpty: !0
                                    }), {
                                        commandId: S.id,
                                        optionValues: C
                                    }
                                }
                                if (null != S && !c) return o.setActiveCommand({
                                    channelId: i.id,
                                    command: null,
                                    section: null
                                }), null;
                                var U = O.EditorUtils.richValue(t)[0],
                                    k = U.children[0];
                                if (R.has(U.type) && O.TextUtils.isText(k)) {
                                    var G = function(e, t) {
                                        if (!e.startsWith("/")) return null;
                                        var n = (0, f.getCommandQuery)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        var o = a.getCachedResults(t, r.ApplicationCommandType.CHAT, n.text),
                                            i = o.commands,
                                            u = o.sections;
                                        if (0 === i.length) return null;
                                        var l = n.text.trim(),
                                            c = l + " ",
                                            d = i.filter(function(e) {
                                                return e.inputType !== s.ApplicationCommandInputType.PLACEHOLDER && (e.displayName === l || e.displayName.startsWith(c))
                                            });
                                        if (1 === d.length && d[0].displayName === l) {
                                            var _ = d[0],
                                                E = u.find(function(e) {
                                                    var t;
                                                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === _.applicationId
                                                });
                                            return {
                                                command: _,
                                                section: E
                                            }
                                        }
                                        return null
                                    }(k.text, i);
                                    if (null != G) return o.setActiveCommand({
                                        channelId: i.id,
                                        command: G.command,
                                        section: G.section
                                    }), null
                                }
                            }
                            if (null != S && null != p) {
                                ! function(e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    var n = m.findTextOptions(e, t);
                                    return 0 !== n.length && (O.EditorUtils.withoutNormalizing(e, function() {
                                        for (var t = n.length - 1; t >= 0; t--) {
                                            var r = n[t];
                                            h.SlateTransforms.textToInline(e, {
                                                type: "applicationCommandOption",
                                                optionName: r.name,
                                                optionDisplayName: r.displayName,
                                                optionType: r.type,
                                                children: [{
                                                    text: r.text
                                                }]
                                            }, {
                                                anchor: r.keyRange.anchor,
                                                focus: r.valueRange.focus
                                            })
                                        }
                                        var o = O.EditorUtils.getFirstText(e);
                                        if (null == o) return !1;
                                        var i = o.text.trim();
                                        o.text !== i && h.SlateTransforms.textToText(e, i, {
                                            anchor: {
                                                path: T.FIRST_TEXT_PATH,
                                                offset: 0
                                            },
                                            focus: {
                                                path: T.FIRST_TEXT_PATH,
                                                offset: o.text.length
                                            }
                                        })
                                    }), !0)
                                }(t, S) && D(t, S);
                                var B, j = m.getOptionValues(t, S),
                                    F = O.EditorUtils.above(t, {
                                        match: function(e) {
                                            return O.EditorUtils.isInline(t, e) && "applicationCommandOption" === e.type
                                        },
                                        mode: "lowest"
                                    }),
                                    V = null !== (B = null == F ? void 0 : F[0].optionName) && void 0 !== B ? B : null;
                                return L({
                                    guildId: i.guild_id,
                                    channelId: i.id,
                                    command: S,
                                    activeOption: V,
                                    currentOptionValues: j,
                                    previousOptionValues: _,
                                    validateAll: !1,
                                    allowEmpty: !1
                                }), {
                                    commandId: p.id,
                                    optionValues: j
                                }
                            }
                            return null
                        }({
                            editor: e,
                            storeCommandState: i,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: c,
                            commandChanged: (null === (u = i.activeCommand) || void 0 === u ? void 0 : u.id) !== (null == j ? void 0 : j.id),
                            previousOptionValues: F
                        })
                    });
                    if (null != _) {
                        var E = y.HistoryUtils.currentEntry(e);
                        null != E && (E.commandId = _.commandId), F = _.optionValues
                    } else F = null;
                    G = O.EditorUtils.richValue(e), B = e.selection, j = i.activeCommand, V = l
                }
            }
            S()
        }, e
    }

    function P(e, t, n, r) {
        var i = A(O.EditorUtils.blocks(e)[0], 1)[0],
            a = (r ? (0, I.serializeDescendant)(i, {
                mode: "plain"
            }).trimEnd() : "").split("\n").map(function(e) {
                return {
                    type: "line",
                    children: [{
                        text: e
                    }]
                }
            }),
            u = [a.length - 1];
        h.SlateTransforms.insertNodes(e, a, {
            at: T.FIRST_BLOCK_PATH
        });
        var s = !0,
            l = !1,
            c = void 0;
        try {
            for (var f, d = O.EditorUtils.blocks(e).reverse()[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                var _ = A(f.value, 2)[1];
                O.PathUtils.isAfter(_, u) && h.SlateTransforms.removeNodes(e, {
                    at: _,
                    voids: !0
                })
            }
        } catch (e) {
            l = !0, c = e
        } finally {
            try {
                !s && null != d.return && d.return()
            } finally {
                if (l) throw c
            }
        }
        null != n && o.setActiveCommand({
            channelId: t,
            command: null,
            section: null
        })
    }

    function D(e, t) {
        if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || N.has(t.options[0].type) || m.getOptionNames(e).length > 0 || null == m.getCommandBlock(e)) return !1;
        var n = O.EditorUtils.getFirstText(e);
        if (null == n) return !1;
        var r = t.options[0],
            o = {
                path: T.FIRST_TEXT_PATH,
                offset: t.displayName.length + 2
            },
            i = {
                path: T.FIRST_TEXT_PATH,
                offset: n.text.length
            };
        return !(!n.text.startsWith("".concat(v.COMMAND_SENTINEL).concat(t.displayName, " ").toLocaleLowerCase()) || O.PointUtils.equals(o, i)) && (h.SlateTransforms.textToInline(e, {
            type: "applicationCommandOption",
            optionName: r.name,
            optionDisplayName: r.displayName,
            optionType: r.type,
            children: [{
                text: n.text.substring(t.displayName.length + 2)
            }]
        }, {
            anchor: o,
            focus: i
        }), !0)
    }

    function L(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.command,
            i = e.activeOption,
            a = e.currentOptionValues,
            s = e.previousOptionValues,
            l = e.validateAll,
            f = e.allowEmpty;
        if (null == r.options) return !1;
        var d = l ? null : u.default.getActiveOptionName(n),
            _ = {},
            E = u.default.getOptionStates(n),
            p = !1,
            m = !0,
            y = !1,
            I = void 0;
        try {
            for (var h, O = r.options[Symbol.iterator](); !(m = (h = O.next()).done); m = !0) {
                var T, S, v, g = h.value,
                    A = E[g.name],
                    b = l || g.name === d && d !== i || (null == A ? void 0 : null === (T = A.lastValidationResult) || void 0 === T ? void 0 : T.success) === !1 && (null == a ? void 0 : a[g.name]) !== (null == s ? void 0 : s[g.name]),
                    N = {
                        hasValue: null != a && g.name in a,
                        isActive: g.name === i,
                        lastValidationResult: b ? (0, c.validateOptionContent)({
                            option: g,
                            content: null !== (v = null == a ? void 0 : a[g.name]) && void 0 !== v ? v : null,
                            guildId: t,
                            channelId: n,
                            allowEmptyValues: f
                        }) : null == A ? void 0 : A.lastValidationResult
                    };
                (null == A || A.hasValue !== N.hasValue || A.isActive !== N.isActive || b && (null === (S = A.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (_[g.name] = N, p = !0)
            }
        } catch (e) {
            y = !0, I = e
        } finally {
            try {
                !m && null != O.return && O.return()
            } finally {
                if (y) throw I
            }
        }
        p && o.updateOptionStates(n, _)
    }

    function M(e) {
        var t = m.getCommandBlock(e);
        if (null == t) return {
            command: null,
            commandText: null
        };
        var n = A(t, 1)[0],
            r = n.children[0];
        return O.TextUtils.isText(r) ? {
            command: n.command,
            commandText: r.text
        } : {
            command: n.command,
            commandText: null
        }
    }

    function U(e, t) {
        var n = m.getOptionNames(e)[0];
        t();
        var r = O.RangeUtils.toPoint(e.selection);
        if (null != r && n !== m.getOptionNames(e)[0]) {
            var o = M(e),
                i = o.command,
                a = o.commandText;
            !(null == i || null == a || a.endsWith(" ")) && O.PointUtils.equals(r, {
                path: T.FIRST_TEXT_PATH,
                offset: i.displayName.length + 1
            }) && h.SlateTransforms.insertText(e, " ")
        }
    }

    function w(e, t, n) {
        var o, i, a, u, s = null === (i = e.activeCommand) || void 0 === i ? void 0 : null === (o = i.options) || void 0 === o ? void 0 : o.find(function(e) {
                return e.name === n
            }),
            l = e.initialValues[n];
        if (null == s || null == l) return null;
        if (null != s.choices) return null === (u = s.choices.find(function(e) {
            return e.value === l.value
        })) || void 0 === u ? void 0 : u.displayName;
        var c = null === (a = l.value) || void 0 === a ? void 0 : a.toString();
        return s.type === r.ApplicationCommandOptionType.CHANNEL || s.type === r.ApplicationCommandOptionType.MENTIONABLE && null != _.default.getChannel(c) ? "<#".concat(c, ">	") : s.type === r.ApplicationCommandOptionType.USER || s.type === r.ApplicationCommandOptionType.MENTIONABLE && null != p.default.getUser(c) ? "<@".concat(c, ">") : s.type === r.ApplicationCommandOptionType.ROLE || s.type === r.ApplicationCommandOptionType.MENTIONABLE && null != E.default.getRole(t.guild_id, null != c ? c : S.EMPTY_STRING_SNOWFLAKE_ID) ? "<@&".concat(c, ">") : c
    }
}