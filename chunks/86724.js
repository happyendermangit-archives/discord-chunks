function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return L
        },
        unsetCommand: function() {
            return D
        }
    }), n("47120"), n("653041"), n("757143"), n("733860");
    var i = n("911969"),
        r = n("555573"),
        s = n("456007"),
        a = n("10718"),
        o = n("998698"),
        l = n("895924"),
        u = n("581364"),
        d = n("509716"),
        _ = n("826298"),
        c = n("417574"),
        E = n("592125"),
        I = n("430824"),
        T = n("594174"),
        f = n("91313"),
        S = n("53529"),
        h = n("925994"),
        A = n("436660"),
        m = n("887490"),
        N = n("42530"),
        O = n("981631"),
        p = n("665692");
    let R = new Set(["applicationCommandOption"]),
        C = new Set([i.ApplicationCommandOptionType.ATTACHMENT]),
        g = new Set(["line", "applicationCommand"]);

    function L(e, t, n, d) {
        let {
            insertData: E,
            isInline: I,
            isVoid: T,
            onChange: O,
            deleteBackward: L,
            deleteForward: b,
            deleteFragment: G
        } = e;
        e.insertData = n => {
            if (null != t && m.EditorUtils.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
                let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                    {
                        commandKey: d,
                        interactionOptions: _
                    } = (0, u.extractInteractionDataProps)(e),
                    {
                        application: c,
                        command: E
                    } = a.getCachedCommand(t, d);
                if (null != E) {
                    var i, o;
                    let e = null != c ? {
                        type: l.ApplicationCommandSectionType.APPLICATION,
                        id: c.id,
                        icon: c.icon,
                        name: null !== (o = null === (i = c.bot) || void 0 === i ? void 0 : i.username) && void 0 !== o ? o : c.name,
                        application: c
                    } : null;
                    return r.setActiveCommand({
                        channelId: t.id,
                        command: E,
                        section: e,
                        location: l.ApplicationCommandTriggerLocations.PASTE,
                        initialValues: (0, s.getInitialValuesFromInteractionOptions)(E, null != _ ? _ : [])
                    }), null
                }
            }
            return E(n)
        }, e.isInline = e => !!R.has(e.type) || I(e), e.isVoid = e => !!("applicationCommandOption" === e.type && C.has(e.optionType)) || T(e), e.deleteBackward = t => {
            P(e, () => L(t))
        }, e.deleteForward = t => {
            P(e, () => b(t))
        }, e.deleteFragment = t => {
            P(e, () => G(t))
        };
        let w = null,
            B = null,
            k = null,
            V = null,
            F = null;
        return e.onChange = () => {
            if (null != t) {
                let s = o.default.getState(t.id),
                    u = a.getChangeKeys(t);
                if (m.EditorUtils.richValue(e) !== w || !m.SelectionUtils.equals(e.selection, B) || s.activeCommand !== k || null == F || u.some((e, t) => F[t] !== e)) {
                    let o = S.HistoryUtils.withMergedEntry(e, () => {
                        var o;
                        return function(e) {
                            let {
                                editor: t,
                                storeCommandState: n,
                                channel: s,
                                canUseCommands: o,
                                canOnlyUseTextCommands: u,
                                commandChanged: d,
                                previousOptionValues: E
                            } = e, {
                                command: I,
                                commandText: T
                            } = y(t), S = n.activeCommand;
                            if (!o || u && (null == S ? void 0 : S.inputType) !== l.ApplicationCommandInputType.BUILT_IN_TEXT && (null == S ? void 0 : S.inputType) !== l.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return null != I && D(t, s.id, S, !0), null;
                            if (null != I) {
                                if (m.EditorUtils.isEditorEmpty(t) || null == S) return D(t, s.id, S, !1), null;
                                let e = "".concat(p.COMMAND_SENTINEL).concat(I.displayName);
                                if (null == T || !T.startsWith(e) || 0 === f.getOptionNames(t).length && (T.length < e.length + 1 || " " !== T[e.length])) return D(t, s.id, S, !0), null
                            } else {
                                if (null != S && d) {
                                    let e = function(e, t, n) {
                                            var i, r, s, a, o;
                                            let l;
                                            let {
                                                initialValues: u,
                                                activeCommand: d
                                            } = n;
                                            if (null == d) return null;
                                            let _ = (null !== (s = null === (i = d.options) || void 0 === i ? void 0 : i.length) && void 0 !== s ? s : 0) > 0 ? f.findTextOptions(e, d) : null,
                                                E = (0, h.toTextValue)(m.EditorUtils.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: m.EditorUtils.start(e, []),
                                                        focus: null !== (a = null == _ ? void 0 : null === (r = _[0]) || void 0 === r ? void 0 : r.keyRange.anchor) && void 0 !== a ? a : m.EditorUtils.end(e, [])
                                                    }
                                                }),
                                                I = "",
                                                T = E.toLocaleLowerCase(),
                                                S = c.PREFIX_COMMAND_REGEX.exec(T);
                                            null != S && (T = p.COMMAND_SENTINEL + T.substring(S.length));
                                            let O = "".concat(p.COMMAND_SENTINEL).concat(d.displayName).toLocaleLowerCase(),
                                                R = "".concat(p.COMMAND_SENTINEL).concat(d.name).toLocaleLowerCase();
                                            T.startsWith(O) && T.length > O.length ? I = E.substring(O.length).trim() : T.startsWith(R) && T.length > R.length && (I = E.substring(R.length).trim());
                                            let g = [],
                                                L = null,
                                                D = null;
                                            if (null != d.options) {
                                                let e = new Set;
                                                if (null != _)
                                                    for (let i of _) {
                                                        e.add(i.name);
                                                        let r = null !== (o = U(n, t, i.name)) && void 0 !== o ? o : i.text,
                                                            s = {
                                                                type: "applicationCommandOption",
                                                                optionName: i.name,
                                                                optionDisplayName: i.displayName,
                                                                optionType: i.type,
                                                                children: [{
                                                                    text: r
                                                                }]
                                                            };
                                                        g.push(s), 0 === i.text.length && null == L && (L = s)
                                                    }
                                                for (let i of d.options)
                                                    if (!e.has(i.name) && (i.required || null != u[i.name])) {
                                                        let e, r;
                                                        I.length > 0 && !C.has(i.type) ? (e = I, I = "") : e = null != (r = U(n, t, i.name)) ? r : "";
                                                        let s = {
                                                            type: "applicationCommandOption",
                                                            optionName: i.name,
                                                            optionDisplayName: i.displayName,
                                                            optionType: i.type,
                                                            children: [{
                                                                text: e
                                                            }]
                                                        };
                                                        g.push(s), 0 === e.length && null == L && (L = s), null == r && (D = s)
                                                    }
                                            }
                                            l = I.length > 0 ? "".concat(p.COMMAND_SENTINEL).concat(d.displayName, " ").concat(I.replace(/\r|\n/g, " ")) : 0 === g.length ? "".concat(p.COMMAND_SENTINEL).concat(d.displayName, " ") : "".concat(p.COMMAND_SENTINEL).concat(d.displayName), g.unshift({
                                                text: l
                                            });
                                            let M = {
                                                type: "applicationCommand",
                                                children: g,
                                                command: {
                                                    id: d.id,
                                                    name: d.name,
                                                    displayName: d.displayName
                                                }
                                            };
                                            m.EditorUtils.withoutNormalizing(e, () => {
                                                for (let [, t] of(A.SlateTransforms.insertNodes(e, [M], {
                                                        at: N.FIRST_BLOCK_PATH
                                                    }), m.EditorUtils.blocks(e).reverse())) m.PathUtils.isAfter(t, N.FIRST_BLOCK_PATH) && A.SlateTransforms.removeNodes(e, {
                                                    at: t,
                                                    voids: !0
                                                })
                                            });
                                            let y = null;
                                            return null != L ? (A.SlateTransforms.selectCommandOption(e, L.optionName), y = L.optionName) : null != D ? (A.SlateTransforms.selectCommandOption(e, D.optionName, !1), y = D.optionName) : A.SlateTransforms.resetSelectionToEnd(e), null == D && v(e, d), y
                                        }(t, s, n),
                                        i = f.getOptionValues(t, S);
                                    return M({
                                        guildId: s.guild_id,
                                        channelId: s.id,
                                        command: S,
                                        activeOption: e,
                                        currentOptionValues: i,
                                        previousOptionValues: null,
                                        validateAll: !0,
                                        allowEmpty: !0
                                    }), {
                                        commandId: S.id,
                                        optionValues: i
                                    }
                                }
                                if (null != S && !d) return r.setActiveCommand({
                                    channelId: s.id,
                                    command: null,
                                    section: null
                                }), null;
                                let e = m.EditorUtils.richValue(t)[0],
                                    o = e.children[0];
                                if (g.has(e.type) && m.TextUtils.isText(o)) {
                                    let e = function(e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, _.getCommandQuery)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        let {
                                            commands: r,
                                            sections: s
                                        } = a.getCachedResults(t, i.ApplicationCommandType.CHAT, n.text);
                                        if (0 === r.length) return null;
                                        let o = n.text.trim(),
                                            u = o + " ",
                                            d = r.filter(e => e.inputType !== l.ApplicationCommandInputType.PLACEHOLDER && (e.displayName === o || e.displayName.startsWith(u)));
                                        if (1 === d.length && d[0].displayName === o) {
                                            let e = d[0],
                                                t = s.find(t => {
                                                    var n;
                                                    return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId
                                                });
                                            return {
                                                command: e,
                                                section: t
                                            }
                                        }
                                        return null
                                    }(o.text, s);
                                    if (null != e) return r.setActiveCommand({
                                        channelId: s.id,
                                        command: e.command,
                                        section: e.section
                                    }), null
                                }
                            }
                            if (null != S && null != I) {
                                var O;
                                ! function(e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = f.findTextOptions(e, t);
                                    return 0 !== n.length && (m.EditorUtils.withoutNormalizing(e, () => {
                                        for (let t = n.length - 1; t >= 0; t--) {
                                            let i = n[t];
                                            A.SlateTransforms.textToInline(e, {
                                                type: "applicationCommandOption",
                                                optionName: i.name,
                                                optionDisplayName: i.displayName,
                                                optionType: i.type,
                                                children: [{
                                                    text: i.text
                                                }]
                                            }, {
                                                anchor: i.keyRange.anchor,
                                                focus: i.valueRange.focus
                                            })
                                        }
                                        let t = m.EditorUtils.getFirstText(e);
                                        if (null == t) return !1;
                                        let i = t.text.trim();
                                        t.text !== i && A.SlateTransforms.textToText(e, i, {
                                            anchor: {
                                                path: N.FIRST_TEXT_PATH,
                                                offset: 0
                                            },
                                            focus: {
                                                path: N.FIRST_TEXT_PATH,
                                                offset: t.text.length
                                            }
                                        })
                                    }), !0)
                                }(t, S) && v(t, S);
                                let e = f.getOptionValues(t, S),
                                    n = m.EditorUtils.above(t, {
                                        match: e => m.EditorUtils.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest"
                                    }),
                                    i = null !== (O = null == n ? void 0 : n[0].optionName) && void 0 !== O ? O : null;
                                return M({
                                    guildId: s.guild_id,
                                    channelId: s.id,
                                    command: S,
                                    activeOption: i,
                                    currentOptionValues: e,
                                    previousOptionValues: E,
                                    validateAll: !1,
                                    allowEmpty: !1
                                }), {
                                    commandId: I.id,
                                    optionValues: e
                                }
                            }
                            return null
                        }({
                            editor: e,
                            storeCommandState: s,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: d,
                            commandChanged: (null === (o = s.activeCommand) || void 0 === o ? void 0 : o.id) !== (null == k ? void 0 : k.id),
                            previousOptionValues: V
                        })
                    });
                    if (null != o) {
                        let t = S.HistoryUtils.currentEntry(e);
                        null != t && (t.commandId = o.commandId), V = o.optionValues
                    } else V = null;
                    w = m.EditorUtils.richValue(e), B = e.selection, k = s.activeCommand, F = u
                }
            }
            O()
        }, e
    }

    function D(e, t, n, i) {
        let [s] = m.EditorUtils.blocks(e)[0], a = (i ? (0, h.serializeDescendant)(s, {
            mode: "plain"
        }).trimEnd() : "").split("\n").map(e => ({
            type: "line",
            children: [{
                text: e
            }]
        })), o = [a.length - 1];
        for (let [, t] of(A.SlateTransforms.insertNodes(e, a, {
                at: N.FIRST_BLOCK_PATH
            }), m.EditorUtils.blocks(e).reverse())) m.PathUtils.isAfter(t, o) && A.SlateTransforms.removeNodes(e, {
            at: t,
            voids: !0
        });
        null != n && r.setActiveCommand({
            channelId: t,
            command: null,
            section: null
        })
    }

    function v(e, t) {
        if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || C.has(t.options[0].type) || f.getOptionNames(e).length > 0 || null == f.getCommandBlock(e)) return !1;
        let n = m.EditorUtils.getFirstText(e);
        if (null == n) return !1;
        let i = t.options[0],
            r = {
                path: N.FIRST_TEXT_PATH,
                offset: t.displayName.length + 2
            },
            s = {
                path: N.FIRST_TEXT_PATH,
                offset: n.text.length
            };
        return !(!n.text.startsWith("".concat(p.COMMAND_SENTINEL).concat(t.displayName, " ").toLocaleLowerCase()) || m.PointUtils.equals(r, s)) && (A.SlateTransforms.textToInline(e, {
            type: "applicationCommandOption",
            optionName: i.name,
            optionDisplayName: i.displayName,
            optionType: i.type,
            children: [{
                text: n.text.substring(t.displayName.length + 2)
            }]
        }, {
            anchor: r,
            focus: s
        }), !0)
    }

    function M(e) {
        let {
            guildId: t,
            channelId: n,
            command: i,
            activeOption: s,
            currentOptionValues: a,
            previousOptionValues: l,
            validateAll: u,
            allowEmpty: _
        } = e;
        if (null == i.options) return !1;
        let c = u ? null : o.default.getActiveOptionName(n),
            E = {},
            I = o.default.getOptionStates(n),
            T = !1;
        for (let e of i.options) {
            var f, S, h;
            let i = I[e.name],
                r = u || e.name === c && c !== s || (null == i ? void 0 : null === (f = i.lastValidationResult) || void 0 === f ? void 0 : f.success) === !1 && (null == a ? void 0 : a[e.name]) !== (null == l ? void 0 : l[e.name]),
                o = {
                    hasValue: null != a && e.name in a,
                    isActive: e.name === s,
                    lastValidationResult: r ? (0, d.validateOptionContent)({
                        option: e,
                        content: null !== (h = null == a ? void 0 : a[e.name]) && void 0 !== h ? h : null,
                        guildId: t,
                        channelId: n,
                        allowEmptyValues: _
                    }) : null == i ? void 0 : i.lastValidationResult
                };
            (null == i || i.hasValue !== o.hasValue || i.isActive !== o.isActive || r && (null === (S = i.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (E[e.name] = o, T = !0)
        }
        T && r.updateOptionStates(n, E)
    }

    function y(e) {
        let t = f.getCommandBlock(e);
        if (null == t) return {
            command: null,
            commandText: null
        };
        let [n] = t, i = n.children[0];
        return m.TextUtils.isText(i) ? {
            command: n.command,
            commandText: i.text
        } : {
            command: n.command,
            commandText: null
        }
    }

    function P(e, t) {
        let n = f.getOptionNames(e)[0];
        t();
        let i = m.RangeUtils.toPoint(e.selection);
        if (null == i || n === f.getOptionNames(e)[0]) return;
        let {
            command: r,
            commandText: s
        } = y(e);
        !(null == r || null == s || s.endsWith(" ")) && m.PointUtils.equals(i, {
            path: N.FIRST_TEXT_PATH,
            offset: r.displayName.length + 1
        }) && A.SlateTransforms.insertText(e, " ")
    }

    function U(e, t, n) {
        var r, s, a, o;
        let l = null === (s = e.activeCommand) || void 0 === s ? void 0 : null === (r = s.options) || void 0 === r ? void 0 : r.find(e => e.name === n),
            u = e.initialValues[n];
        if (null == l || null == u) return null;
        if (null != l.choices) return null === (o = l.choices.find(e => e.value === u.value)) || void 0 === o ? void 0 : o.displayName;
        let d = null === (a = u.value) || void 0 === a ? void 0 : a.toString();
        return l.type === i.ApplicationCommandOptionType.CHANNEL || l.type === i.ApplicationCommandOptionType.MENTIONABLE && null != E.default.getChannel(d) ? "<#".concat(d, ">	") : l.type === i.ApplicationCommandOptionType.USER || l.type === i.ApplicationCommandOptionType.MENTIONABLE && null != T.default.getUser(d) ? "<@".concat(d, ">") : l.type === i.ApplicationCommandOptionType.ROLE || l.type === i.ApplicationCommandOptionType.MENTIONABLE && null != I.default.getRole(t.guild_id, null != d ? d : O.EMPTY_STRING_SNOWFLAKE_ID) ? "<@&".concat(d, ">") : d
    }
}