function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        },
        unsetCommand: function() {
            return L
        }
    }), n("47120"), n("653041"), n("757143"), n("733860");
    var i = n("911969"),
        r = n("555573"),
        a = n("456007"),
        s = n("10718"),
        o = n("998698"),
        l = n("895924"),
        u = n("581364"),
        d = n("509716"),
        _ = n("826298"),
        c = n("592125"),
        E = n("430824"),
        I = n("594174"),
        T = n("91313"),
        f = n("53529"),
        S = n("925994"),
        h = n("436660"),
        A = n("887490"),
        m = n("42530"),
        N = n("981631"),
        p = n("665692");
    let O = new Set(["applicationCommandOption"]),
        R = new Set([i.ApplicationCommandOptionType.ATTACHMENT]),
        C = new Set(["line", "applicationCommand"]);

    function g(e, t, n, d) {
        let {
            insertData: c,
            isInline: E,
            isVoid: I,
            onChange: N,
            deleteBackward: g,
            deleteForward: U,
            deleteFragment: b
        } = e;
        e.insertData = n => {
            if (null != t && A.EditorUtils.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
                let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                    {
                        commandKey: d,
                        interactionOptions: _
                    } = (0, u.extractInteractionDataProps)(e),
                    {
                        application: c,
                        command: E
                    } = s.getCachedCommand(t, d);
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
                        initialValues: (0, a.getInitialValuesFromInteractionOptions)(E, null != _ ? _ : [])
                    }), null
                }
            }
            return c(n)
        }, e.isInline = e => !!O.has(e.type) || E(e), e.isVoid = e => !!("applicationCommandOption" === e.type && R.has(e.optionType)) || I(e), e.deleteBackward = t => {
            y(e, () => g(t))
        }, e.deleteForward = t => {
            y(e, () => U(t))
        }, e.deleteFragment = t => {
            y(e, () => b(t))
        };
        let G = null,
            w = null,
            B = null,
            k = null,
            V = null;
        return e.onChange = () => {
            if (null != t) {
                let a = o.default.getState(t.id),
                    u = s.getChangeKeys(t);
                if (A.EditorUtils.richValue(e) !== G || !A.SelectionUtils.equals(e.selection, w) || a.activeCommand !== B || null == V || u.some((e, t) => V[t] !== e)) {
                    let o = f.HistoryUtils.withMergedEntry(e, () => {
                        var o;
                        return function(e) {
                            let {
                                editor: t,
                                storeCommandState: n,
                                channel: a,
                                canUseCommands: o,
                                canOnlyUseTextCommands: u,
                                commandChanged: d,
                                previousOptionValues: c
                            } = e, {
                                command: E,
                                commandText: I
                            } = M(t), f = n.activeCommand;
                            if (!o || u && (null == f ? void 0 : f.inputType) !== l.ApplicationCommandInputType.BUILT_IN_TEXT && (null == f ? void 0 : f.inputType) !== l.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return null != E && L(t, a.id, f, !0), null;
                            if (null != E) {
                                if (A.EditorUtils.isEditorEmpty(t) || null == f) return L(t, a.id, f, !1), null;
                                let e = "".concat(p.COMMAND_SENTINEL).concat(E.displayName);
                                if (null == I || !I.startsWith(e) || 0 === T.getOptionNames(t).length && (I.length < e.length + 1 || " " !== I[e.length])) return L(t, a.id, f, !0), null
                            } else {
                                if (null != f && d) {
                                    let e = function(e, t, n) {
                                            var i, r, a, s, o;
                                            let l;
                                            let {
                                                initialValues: u,
                                                activeCommand: d
                                            } = n;
                                            if (null == d) return null;
                                            let _ = (null !== (a = null === (i = d.options) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0) > 0 ? T.findTextOptions(e, d) : null,
                                                c = (0, S.toTextValue)(A.EditorUtils.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: A.EditorUtils.start(e, []),
                                                        focus: null !== (s = null == _ ? void 0 : null === (r = _[0]) || void 0 === r ? void 0 : r.keyRange.anchor) && void 0 !== s ? s : A.EditorUtils.end(e, [])
                                                    }
                                                }),
                                                E = "",
                                                I = c.toLocaleLowerCase(),
                                                f = "".concat(p.COMMAND_SENTINEL).concat(d.displayName).toLocaleLowerCase(),
                                                N = "".concat(p.COMMAND_SENTINEL).concat(d.name).toLocaleLowerCase();
                                            I.startsWith(f) && I.length > f.length ? E = c.substring(f.length).trim() : I.startsWith(N) && I.length > N.length && (E = c.substring(N.length).trim());
                                            let O = [],
                                                C = null,
                                                g = null;
                                            if (null != d.options) {
                                                let e = new Set;
                                                if (null != _)
                                                    for (let i of _) {
                                                        e.add(i.name);
                                                        let r = null !== (o = P(n, t, i.name)) && void 0 !== o ? o : i.text,
                                                            a = {
                                                                type: "applicationCommandOption",
                                                                optionName: i.name,
                                                                optionDisplayName: i.displayName,
                                                                optionType: i.type,
                                                                children: [{
                                                                    text: r
                                                                }]
                                                            };
                                                        O.push(a), 0 === i.text.length && null == C && (C = a)
                                                    }
                                                for (let i of d.options)
                                                    if (!e.has(i.name) && (i.required || null != u[i.name])) {
                                                        let e, r;
                                                        E.length > 0 && !R.has(i.type) ? (e = E, E = "") : e = null != (r = P(n, t, i.name)) ? r : "";
                                                        let a = {
                                                            type: "applicationCommandOption",
                                                            optionName: i.name,
                                                            optionDisplayName: i.displayName,
                                                            optionType: i.type,
                                                            children: [{
                                                                text: e
                                                            }]
                                                        };
                                                        O.push(a), 0 === e.length && null == C && (C = a), null == r && (g = a)
                                                    }
                                            }
                                            l = E.length > 0 ? "".concat(p.COMMAND_SENTINEL).concat(d.displayName, " ").concat(E.replace(/\r|\n/g, " ")) : 0 === O.length ? "".concat(p.COMMAND_SENTINEL).concat(d.displayName, " ") : "".concat(p.COMMAND_SENTINEL).concat(d.displayName), O.unshift({
                                                text: l
                                            });
                                            let L = {
                                                type: "applicationCommand",
                                                children: O,
                                                command: {
                                                    id: d.id,
                                                    name: d.name,
                                                    displayName: d.displayName
                                                }
                                            };
                                            A.EditorUtils.withoutNormalizing(e, () => {
                                                for (let [, t] of(h.SlateTransforms.insertNodes(e, [L], {
                                                        at: m.FIRST_BLOCK_PATH
                                                    }), A.EditorUtils.blocks(e).reverse())) A.PathUtils.isAfter(t, m.FIRST_BLOCK_PATH) && h.SlateTransforms.removeNodes(e, {
                                                    at: t,
                                                    voids: !0
                                                })
                                            });
                                            let D = null;
                                            return null != C ? (h.SlateTransforms.selectCommandOption(e, C.optionName), D = C.optionName) : null != g ? (h.SlateTransforms.selectCommandOption(e, g.optionName, !1), D = g.optionName) : h.SlateTransforms.resetSelectionToEnd(e), null == g && v(e, d), D
                                        }(t, a, n),
                                        i = T.getOptionValues(t, f);
                                    return D({
                                        guildId: a.guild_id,
                                        channelId: a.id,
                                        command: f,
                                        activeOption: e,
                                        currentOptionValues: i,
                                        previousOptionValues: null,
                                        validateAll: !0,
                                        allowEmpty: !0
                                    }), {
                                        commandId: f.id,
                                        optionValues: i
                                    }
                                }
                                if (null != f && !d) return r.setActiveCommand({
                                    channelId: a.id,
                                    command: null,
                                    section: null
                                }), null;
                                let e = A.EditorUtils.richValue(t)[0],
                                    o = e.children[0];
                                if (C.has(e.type) && A.TextUtils.isText(o)) {
                                    let e = function(e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, _.getCommandQuery)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        let {
                                            commands: r,
                                            sections: a
                                        } = s.getCachedResults(t, i.ApplicationCommandType.CHAT, n.text);
                                        if (0 === r.length) return null;
                                        let o = n.text.trim(),
                                            u = o + " ",
                                            d = r.filter(e => e.inputType !== l.ApplicationCommandInputType.PLACEHOLDER && (e.displayName === o || e.displayName.startsWith(u)));
                                        if (1 === d.length && d[0].displayName === o) {
                                            let e = d[0],
                                                t = a.find(t => {
                                                    var n;
                                                    return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId
                                                });
                                            return {
                                                command: e,
                                                section: t
                                            }
                                        }
                                        return null
                                    }(o.text, a);
                                    if (null != e) return r.setActiveCommand({
                                        channelId: a.id,
                                        command: e.command,
                                        section: e.section
                                    }), null
                                }
                            }
                            if (null != f && null != E) {
                                var N;
                                ! function(e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = T.findTextOptions(e, t);
                                    return 0 !== n.length && (A.EditorUtils.withoutNormalizing(e, () => {
                                        for (let t = n.length - 1; t >= 0; t--) {
                                            let i = n[t];
                                            h.SlateTransforms.textToInline(e, {
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
                                        let t = A.EditorUtils.getFirstText(e);
                                        if (null == t) return !1;
                                        let i = t.text.trim();
                                        t.text !== i && h.SlateTransforms.textToText(e, i, {
                                            anchor: {
                                                path: m.FIRST_TEXT_PATH,
                                                offset: 0
                                            },
                                            focus: {
                                                path: m.FIRST_TEXT_PATH,
                                                offset: t.text.length
                                            }
                                        })
                                    }), !0)
                                }(t, f) && v(t, f);
                                let e = T.getOptionValues(t, f),
                                    n = A.EditorUtils.above(t, {
                                        match: e => A.EditorUtils.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest"
                                    }),
                                    i = null !== (N = null == n ? void 0 : n[0].optionName) && void 0 !== N ? N : null;
                                return D({
                                    guildId: a.guild_id,
                                    channelId: a.id,
                                    command: f,
                                    activeOption: i,
                                    currentOptionValues: e,
                                    previousOptionValues: c,
                                    validateAll: !1,
                                    allowEmpty: !1
                                }), {
                                    commandId: E.id,
                                    optionValues: e
                                }
                            }
                            return null
                        }({
                            editor: e,
                            storeCommandState: a,
                            channel: t,
                            canUseCommands: n,
                            canOnlyUseTextCommands: d,
                            commandChanged: (null === (o = a.activeCommand) || void 0 === o ? void 0 : o.id) !== (null == B ? void 0 : B.id),
                            previousOptionValues: k
                        })
                    });
                    if (null != o) {
                        let t = f.HistoryUtils.currentEntry(e);
                        null != t && (t.commandId = o.commandId), k = o.optionValues
                    } else k = null;
                    G = A.EditorUtils.richValue(e), w = e.selection, B = a.activeCommand, V = u
                }
            }
            N()
        }, e
    }

    function L(e, t, n, i) {
        let [a] = A.EditorUtils.blocks(e)[0], s = (i ? (0, S.serializeDescendant)(a, {
            mode: "plain"
        }).trimEnd() : "").split("\n").map(e => ({
            type: "line",
            children: [{
                text: e
            }]
        })), o = [s.length - 1];
        for (let [, t] of(h.SlateTransforms.insertNodes(e, s, {
                at: m.FIRST_BLOCK_PATH
            }), A.EditorUtils.blocks(e).reverse())) A.PathUtils.isAfter(t, o) && h.SlateTransforms.removeNodes(e, {
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
        if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || R.has(t.options[0].type) || T.getOptionNames(e).length > 0 || null == T.getCommandBlock(e)) return !1;
        let n = A.EditorUtils.getFirstText(e);
        if (null == n) return !1;
        let i = t.options[0],
            r = {
                path: m.FIRST_TEXT_PATH,
                offset: t.displayName.length + 2
            },
            a = {
                path: m.FIRST_TEXT_PATH,
                offset: n.text.length
            };
        return !(!n.text.startsWith("".concat(p.COMMAND_SENTINEL).concat(t.displayName, " ").toLocaleLowerCase()) || A.PointUtils.equals(r, a)) && (h.SlateTransforms.textToInline(e, {
            type: "applicationCommandOption",
            optionName: i.name,
            optionDisplayName: i.displayName,
            optionType: i.type,
            children: [{
                text: n.text.substring(t.displayName.length + 2)
            }]
        }, {
            anchor: r,
            focus: a
        }), !0)
    }

    function D(e) {
        let {
            guildId: t,
            channelId: n,
            command: i,
            activeOption: a,
            currentOptionValues: s,
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
                r = u || e.name === c && c !== a || (null == i ? void 0 : null === (f = i.lastValidationResult) || void 0 === f ? void 0 : f.success) === !1 && (null == s ? void 0 : s[e.name]) !== (null == l ? void 0 : l[e.name]),
                o = {
                    hasValue: null != s && e.name in s,
                    isActive: e.name === a,
                    lastValidationResult: r ? (0, d.validateOptionContent)({
                        option: e,
                        content: null !== (h = null == s ? void 0 : s[e.name]) && void 0 !== h ? h : null,
                        guildId: t,
                        channelId: n,
                        allowEmptyValues: _
                    }) : null == i ? void 0 : i.lastValidationResult
                };
            (null == i || i.hasValue !== o.hasValue || i.isActive !== o.isActive || r && (null === (S = i.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (E[e.name] = o, T = !0)
        }
        T && r.updateOptionStates(n, E)
    }

    function M(e) {
        let t = T.getCommandBlock(e);
        if (null == t) return {
            command: null,
            commandText: null
        };
        let [n] = t, i = n.children[0];
        return A.TextUtils.isText(i) ? {
            command: n.command,
            commandText: i.text
        } : {
            command: n.command,
            commandText: null
        }
    }

    function y(e, t) {
        let n = T.getOptionNames(e)[0];
        t();
        let i = A.RangeUtils.toPoint(e.selection);
        if (null == i || n === T.getOptionNames(e)[0]) return;
        let {
            command: r,
            commandText: a
        } = M(e);
        !(null == r || null == a || a.endsWith(" ")) && A.PointUtils.equals(i, {
            path: m.FIRST_TEXT_PATH,
            offset: r.displayName.length + 1
        }) && h.SlateTransforms.insertText(e, " ")
    }

    function P(e, t, n) {
        var r, a, s, o;
        let l = null === (a = e.activeCommand) || void 0 === a ? void 0 : null === (r = a.options) || void 0 === r ? void 0 : r.find(e => e.name === n),
            u = e.initialValues[n];
        if (null == l || null == u) return null;
        if (null != l.choices) return null === (o = l.choices.find(e => e.value === u.value)) || void 0 === o ? void 0 : o.displayName;
        let d = null === (s = u.value) || void 0 === s ? void 0 : s.toString();
        return l.type === i.ApplicationCommandOptionType.CHANNEL || l.type === i.ApplicationCommandOptionType.MENTIONABLE && null != c.default.getChannel(d) ? "<#".concat(d, ">	") : l.type === i.ApplicationCommandOptionType.USER || l.type === i.ApplicationCommandOptionType.MENTIONABLE && null != I.default.getUser(d) ? "<@".concat(d, ">") : l.type === i.ApplicationCommandOptionType.ROLE || l.type === i.ApplicationCommandOptionType.MENTIONABLE && null != E.default.getRole(t.guild_id, null != d ? d : N.EMPTY_STRING_SNOWFLAKE_ID) ? "<@&".concat(d, ">") : d
    }
}