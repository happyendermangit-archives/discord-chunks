function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        },
        unsetCommand: function() {
            return O
        }
    }), n("222007"), n("424973"), n("781738"), n("843762");
    var i = n("798609"),
        l = n("507217"),
        a = n("118200"),
        s = n("240249"),
        r = n("383018"),
        o = n("524768"),
        u = n("389153"),
        d = n("343952"),
        c = n("355263"),
        f = n("511104"),
        p = n("42203"),
        m = n("305961"),
        h = n("697218"),
        x = n("640830"),
        E = n("83800"),
        y = n("970153"),
        g = n("939563"),
        S = n("385887"),
        C = n("566819"),
        T = n("49111"),
        _ = n("406291");
    let I = new Set(["applicationCommandOption"]),
        v = new Set([i.ApplicationCommandOptionType.ATTACHMENT]),
        N = new Set(["line", "applicationCommand"]);

    function A(e, t, n, d) {
        let {
            insertData: p,
            isInline: m,
            isVoid: h,
            onChange: T,
            deleteBackward: A,
            deleteForward: b,
            deleteFragment: j
        } = e;
        e.insertData = n => {
            if (null != t && S.EditorUtils.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
                let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                    {
                        commandKey: d,
                        interactionOptions: c
                    } = (0, u.extractInteractionDataProps)(e),
                    {
                        application: f,
                        command: p
                    } = s.getCachedCommand(t, d);
                if (null != p) {
                    var i, r;
                    let e = null != f ? {
                        type: o.ApplicationCommandSectionType.APPLICATION,
                        id: f.id,
                        icon: f.icon,
                        name: null !== (r = null === (i = f.bot) || void 0 === i ? void 0 : i.username) && void 0 !== r ? r : f.name,
                        application: f
                    } : null;
                    return l.setActiveCommand({
                        channelId: t.id,
                        command: p,
                        section: e,
                        location: o.ApplicationCommandTriggerLocations.PASTE,
                        initialValues: (0, a.getInitialValuesFromInteractionOptions)(p, null != c ? c : [])
                    }), null
                }
            }
            return p(n)
        }, e.isInline = e => !!I.has(e.type) || m(e), e.isVoid = e => !!("applicationCommandOption" === e.type && v.has(e.optionType)) || h(e), e.deleteBackward = t => {
            L(e, () => A(t))
        }, e.deleteForward = t => {
            L(e, () => b(t))
        }, e.deleteFragment = t => {
            L(e, () => j(t))
        };
        let U = null,
            D = null,
            w = null,
            F = null,
            G = null;
        return e.onChange = () => {
            if (null != t) {
                let a = r.default.getState(t.id),
                    u = s.getChangeKeys(t);
                if (S.EditorUtils.richValue(e) !== U || !S.SelectionUtils.equals(e.selection, D) || a.activeCommand !== w || null == G || u.some((e, t) => G[t] !== e)) {
                    let r = E.HistoryUtils.withMergedEntry(e, () => {
                        var r;
                        return function(e) {
                            let {
                                editor: t,
                                storeCommandState: n,
                                channel: a,
                                canUseCommands: r,
                                canOnlyUseTextCommands: u,
                                commandChanged: d,
                                previousOptionValues: p
                            } = e, {
                                command: m,
                                commandText: h
                            } = k(t), E = n.activeCommand;
                            if (!r || u && (null == E ? void 0 : E.inputType) !== o.ApplicationCommandInputType.BUILT_IN_TEXT && (null == E ? void 0 : E.inputType) !== o.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return null != m && O(t, a.id, E, !0), null;
                            if (null != m) {
                                if (S.EditorUtils.isEditorEmpty(t) || null == E) return O(t, a.id, E, !1), null;
                                let e = "".concat(_.COMMAND_SENTINEL).concat(m.displayName);
                                if (null == h || !h.startsWith(e) || 0 === x.getOptionNames(t).length && (h.length < e.length + 1 || " " !== h[e.length])) return O(t, a.id, E, !0), null
                            } else {
                                if (null != E && d) {
                                    let e = function(e, t, n) {
                                            var i, l, a, s, r;
                                            let o;
                                            let {
                                                initialValues: u,
                                                activeCommand: d
                                            } = n;
                                            if (null == d) return null;
                                            let c = (null !== (a = null === (i = d.options) || void 0 === i ? void 0 : i.length) && void 0 !== a ? a : 0) > 0 ? x.findTextOptions(e, d) : null,
                                                p = (0, y.toTextValue)(S.EditorUtils.richValue(e), {
                                                    mode: "raw",
                                                    range: {
                                                        anchor: S.EditorUtils.start(e, []),
                                                        focus: null !== (s = null == c ? void 0 : null === (l = c[0]) || void 0 === l ? void 0 : l.keyRange.anchor) && void 0 !== s ? s : S.EditorUtils.end(e, [])
                                                    }
                                                }),
                                                m = "",
                                                h = p.toLocaleLowerCase(),
                                                E = f.PREFIX_COMMAND_REGEX.exec(h);
                                            null != E && (h = _.COMMAND_SENTINEL + h.substring(E.length));
                                            let T = "".concat(_.COMMAND_SENTINEL).concat(d.displayName).toLocaleLowerCase(),
                                                I = "".concat(_.COMMAND_SENTINEL).concat(d.name).toLocaleLowerCase();
                                            h.startsWith(T) && h.length > T.length ? m = p.substring(T.length).trim() : h.startsWith(I) && h.length > I.length && (m = p.substring(I.length).trim());
                                            let N = [],
                                                A = null,
                                                O = null;
                                            if (null != d.options) {
                                                let e = new Set;
                                                if (null != c)
                                                    for (let i of c) {
                                                        e.add(i.name);
                                                        let l = null !== (r = P(n, t, i.name)) && void 0 !== r ? r : i.text,
                                                            a = {
                                                                type: "applicationCommandOption",
                                                                optionName: i.name,
                                                                optionDisplayName: i.displayName,
                                                                optionType: i.type,
                                                                children: [{
                                                                    text: l
                                                                }]
                                                            };
                                                        N.push(a), 0 === i.text.length && null == A && (A = a)
                                                    }
                                                for (let i of d.options)
                                                    if (!e.has(i.name) && (i.required || null != u[i.name])) {
                                                        let e, l;
                                                        m.length > 0 && !v.has(i.type) ? (e = m, m = "") : e = null != (l = P(n, t, i.name)) ? l : "";
                                                        let a = {
                                                            type: "applicationCommandOption",
                                                            optionName: i.name,
                                                            optionDisplayName: i.displayName,
                                                            optionType: i.type,
                                                            children: [{
                                                                text: e
                                                            }]
                                                        };
                                                        N.push(a), 0 === e.length && null == A && (A = a), null == l && (O = a)
                                                    }
                                            }
                                            o = m.length > 0 ? "".concat(_.COMMAND_SENTINEL).concat(d.displayName, " ").concat(m.replace(/\r|\n/g, " ")) : 0 === N.length ? "".concat(_.COMMAND_SENTINEL).concat(d.displayName, " ") : "".concat(_.COMMAND_SENTINEL).concat(d.displayName), N.unshift({
                                                text: o
                                            });
                                            let M = {
                                                type: "applicationCommand",
                                                children: N,
                                                command: {
                                                    id: d.id,
                                                    name: d.name,
                                                    displayName: d.displayName
                                                }
                                            };
                                            S.EditorUtils.withoutNormalizing(e, () => {
                                                for (let [, t] of(g.SlateTransforms.insertNodes(e, [M], {
                                                        at: C.FIRST_BLOCK_PATH
                                                    }), S.EditorUtils.blocks(e).reverse())) S.PathUtils.isAfter(t, C.FIRST_BLOCK_PATH) && g.SlateTransforms.removeNodes(e, {
                                                    at: t,
                                                    voids: !0
                                                })
                                            });
                                            let k = null;
                                            return null != A ? (g.SlateTransforms.selectCommandOption(e, A.optionName), k = A.optionName) : null != O ? (g.SlateTransforms.selectCommandOption(e, O.optionName, !1), k = O.optionName) : g.SlateTransforms.resetSelectionToEnd(e), null == O && R(e, d), k
                                        }(t, a, n),
                                        i = x.getOptionValues(t, E);
                                    return M({
                                        guildId: a.guild_id,
                                        channelId: a.id,
                                        command: E,
                                        activeOption: e,
                                        currentOptionValues: i,
                                        previousOptionValues: null,
                                        validateAll: !0,
                                        allowEmpty: !0
                                    }), {
                                        commandId: E.id,
                                        optionValues: i
                                    }
                                }
                                if (null != E && !d) return l.setActiveCommand({
                                    channelId: a.id,
                                    command: null,
                                    section: null
                                }), null;
                                let e = S.EditorUtils.richValue(t),
                                    r = e[0],
                                    u = r.children[0];
                                if (N.has(r.type) && S.TextUtils.isText(u)) {
                                    let e = function(e, t) {
                                        if (!e.startsWith("/")) return null;
                                        let n = (0, c.getCommandQuery)(t, e.substring(1));
                                        if (!n.hasSpaceTerminator) return null;
                                        let {
                                            commands: l,
                                            sections: a
                                        } = s.getCachedResults(t, i.ApplicationCommandType.CHAT, n.text);
                                        if (0 === l.length) return null;
                                        let r = n.text.trim(),
                                            u = r + " ",
                                            d = l.filter(e => e.inputType !== o.ApplicationCommandInputType.PLACEHOLDER && (e.displayName === r || e.displayName.startsWith(u)));
                                        if (1 === d.length && d[0].displayName === r) {
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
                                    }(u.text, a);
                                    if (null != e) return l.setActiveCommand({
                                        channelId: a.id,
                                        command: e.command,
                                        section: e.section
                                    }), null
                                }
                            }
                            if (null != E && null != m) {
                                var T;
                                ! function(e, t) {
                                    if (null == t.options || 0 === t.options.length) return !1;
                                    let n = x.findTextOptions(e, t);
                                    return 0 !== n.length && (S.EditorUtils.withoutNormalizing(e, () => {
                                        for (let t = n.length - 1; t >= 0; t--) {
                                            let i = n[t];
                                            g.SlateTransforms.textToInline(e, {
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
                                        let t = S.EditorUtils.getFirstText(e);
                                        if (null == t) return !1;
                                        let i = t.text.trim();
                                        t.text !== i && g.SlateTransforms.textToText(e, i, {
                                            anchor: {
                                                path: C.FIRST_TEXT_PATH,
                                                offset: 0
                                            },
                                            focus: {
                                                path: C.FIRST_TEXT_PATH,
                                                offset: t.text.length
                                            }
                                        })
                                    }), !0)
                                }(t, E) && R(t, E);
                                let e = x.getOptionValues(t, E),
                                    n = S.EditorUtils.above(t, {
                                        match: e => S.EditorUtils.isInline(t, e) && "applicationCommandOption" === e.type,
                                        mode: "lowest"
                                    }),
                                    i = null !== (T = null == n ? void 0 : n[0].optionName) && void 0 !== T ? T : null;
                                return M({
                                    guildId: a.guild_id,
                                    channelId: a.id,
                                    command: E,
                                    activeOption: i,
                                    currentOptionValues: e,
                                    previousOptionValues: p,
                                    validateAll: !1,
                                    allowEmpty: !1
                                }), {
                                    commandId: m.id,
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
                            commandChanged: (null === (r = a.activeCommand) || void 0 === r ? void 0 : r.id) !== (null == w ? void 0 : w.id),
                            previousOptionValues: F
                        })
                    });
                    if (null != r) {
                        let t = E.HistoryUtils.currentEntry(e);
                        null != t && (t.commandId = r.commandId), F = r.optionValues
                    } else F = null;
                    U = S.EditorUtils.richValue(e), D = e.selection, w = a.activeCommand, G = u
                }
            }
            T()
        }, e
    }

    function O(e, t, n, i) {
        let [a] = S.EditorUtils.blocks(e)[0], s = i ? (0, y.serializeDescendant)(a, {
            mode: "plain"
        }).trimEnd() : "", r = s.split("\n").map(e => ({
            type: "line",
            children: [{
                text: e
            }]
        })), o = [r.length - 1];
        for (let [, t] of(g.SlateTransforms.insertNodes(e, r, {
                at: C.FIRST_BLOCK_PATH
            }), S.EditorUtils.blocks(e).reverse())) S.PathUtils.isAfter(t, o) && g.SlateTransforms.removeNodes(e, {
            at: t,
            voids: !0
        });
        null != n && l.setActiveCommand({
            channelId: t,
            command: null,
            section: null
        })
    }

    function R(e, t) {
        if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || v.has(t.options[0].type) || x.getOptionNames(e).length > 0) return !1;
        let n = x.getCommandBlock(e);
        if (null == n) return !1;
        let i = S.EditorUtils.getFirstText(e);
        if (null == i) return !1;
        let l = t.options[0],
            a = {
                path: C.FIRST_TEXT_PATH,
                offset: t.displayName.length + 2
            },
            s = {
                path: C.FIRST_TEXT_PATH,
                offset: i.text.length
            };
        return !(!i.text.startsWith("".concat(_.COMMAND_SENTINEL).concat(t.displayName, " ").toLocaleLowerCase()) || S.PointUtils.equals(a, s)) && (g.SlateTransforms.textToInline(e, {
            type: "applicationCommandOption",
            optionName: l.name,
            optionDisplayName: l.displayName,
            optionType: l.type,
            children: [{
                text: i.text.substring(t.displayName.length + 2)
            }]
        }, {
            anchor: a,
            focus: s
        }), !0)
    }

    function M(e) {
        let {
            guildId: t,
            channelId: n,
            command: i,
            activeOption: a,
            currentOptionValues: s,
            previousOptionValues: o,
            validateAll: u,
            allowEmpty: c
        } = e;
        if (null == i.options) return !1;
        let f = u ? null : r.default.getActiveOptionName(n),
            p = {},
            m = r.default.getOptionStates(n),
            h = !1;
        for (let e of i.options) {
            var x, E, y;
            let i = m[e.name],
                l = u || e.name === f && f !== a || (null == i ? void 0 : null === (x = i.lastValidationResult) || void 0 === x ? void 0 : x.success) === !1 && (null == s ? void 0 : s[e.name]) !== (null == o ? void 0 : o[e.name]),
                r = {
                    hasValue: null != s && e.name in s,
                    isActive: e.name === a,
                    lastValidationResult: l ? (0, d.validateOptionContent)({
                        option: e,
                        content: null !== (y = null == s ? void 0 : s[e.name]) && void 0 !== y ? y : null,
                        guildId: t,
                        channelId: n,
                        allowEmptyValues: c
                    }) : null == i ? void 0 : i.lastValidationResult
                };
            (null == i || i.hasValue !== r.hasValue || i.isActive !== r.isActive || l && (null === (E = i.lastValidationResult) || void 0 === E ? void 0 : E.success) === !1) && (p[e.name] = r, h = !0)
        }
        h && l.updateOptionStates(n, p)
    }

    function k(e) {
        let t = x.getCommandBlock(e);
        if (null == t) return {
            command: null,
            commandText: null
        };
        let [n] = t, i = n.children[0];
        return S.TextUtils.isText(i) ? {
            command: n.command,
            commandText: i.text
        } : {
            command: n.command,
            commandText: null
        }
    }

    function L(e, t) {
        let n = x.getOptionNames(e)[0];
        t();
        let i = S.RangeUtils.toPoint(e.selection);
        if (null == i || n === x.getOptionNames(e)[0]) return;
        let {
            command: l,
            commandText: a
        } = k(e);
        !(null == l || null == a || a.endsWith(" ")) && S.PointUtils.equals(i, {
            path: C.FIRST_TEXT_PATH,
            offset: l.displayName.length + 1
        }) && g.SlateTransforms.insertText(e, " ")
    }

    function P(e, t, n) {
        var l, a, s, r;
        let o = null === (a = e.activeCommand) || void 0 === a ? void 0 : null === (l = a.options) || void 0 === l ? void 0 : l.find(e => e.name === n),
            u = e.initialValues[n];
        if (null == o || null == u) return null;
        if (null != o.choices) return null === (r = o.choices.find(e => e.value === u.value)) || void 0 === r ? void 0 : r.displayName;
        let d = null === (s = u.value) || void 0 === s ? void 0 : s.toString();
        return o.type === i.ApplicationCommandOptionType.CHANNEL || o.type === i.ApplicationCommandOptionType.MENTIONABLE && null != p.default.getChannel(d) ? "<#".concat(d, ">	") : o.type === i.ApplicationCommandOptionType.USER || o.type === i.ApplicationCommandOptionType.MENTIONABLE && null != h.default.getUser(d) ? "<@".concat(d, ">") : o.type === i.ApplicationCommandOptionType.ROLE || o.type === i.ApplicationCommandOptionType.MENTIONABLE && null != m.default.getRole(t.guild_id, null != d ? d : T.EMPTY_STRING_SNOWFLAKE_ID) ? "<@&".concat(d, ">") : d
    }
}