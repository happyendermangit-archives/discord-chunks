function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findTextOptions: function() {
            return O
        },
        getCommandBlock: function() {
            return T
        },
        getCurrentCommandOption: function() {
            return f
        },
        getOptionNames: function() {
            return S
        },
        getOptionValues: function() {
            return A
        },
        optionToValues: function() {
            return h
        },
        validateOption: function() {
            return N
        },
        validateOptionValues: function() {
            return m
        }
    }), n("653041"), n("47120");
    var i = n("911969"),
        r = n("555573"),
        s = n("998698"),
        a = n("509716"),
        o = n("703558"),
        l = n("944486"),
        u = n("117530"),
        d = n("752305"),
        _ = n("925994"),
        c = n("887490"),
        E = n("42530");
    let I = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

    function T(e) {
        let t = c.EditorUtils.richValue(e)[0];
        return null == t || "applicationCommand" !== t.type ? null : [t, E.FIRST_BLOCK_PATH]
    }

    function f(e) {
        var t, n;
        if (null == e.selection) return null;
        let i = null !== (t = c.EditorUtils.above(e, {
            at: e.selection.focus,
            match: e => c.NodeUtils.isType(e, "applicationCommandOption")
        })) && void 0 !== t ? t : null;
        return null != i || c.RangeUtils.isCollapsed(e.selection) ? i : null !== (n = c.EditorUtils.above(e, {
            at: e.selection.anchor,
            match: e => c.NodeUtils.isType(e, "applicationCommandOption")
        })) && void 0 !== n ? n : null
    }

    function S(e) {
        let t = T(e),
            n = [],
            i = null == t ? void 0 : t[0].children;
        if (null != i)
            for (let e of i) c.NodeUtils.isType(e, "applicationCommandOption") && n.push(e.optionName);
        return n
    }

    function A(e, t) {
        let n = {};
        if (null == t.options) return {};
        let i = T(e),
            r = Object.fromEntries(t.options.map(e => [e.name, e])),
            s = null == i ? void 0 : i[0].children;
        if (null != s) {
            for (let t of s)
                if (c.NodeUtils.isType(t, "applicationCommandOption")) {
                    let i = r[t.optionName];
                    null != i && (n[t.optionName] = h(e, i, t))
                }
        }
        return n
    }

    function h(e, t, n) {
        let r = l.default.getCurrentlySelectedChannelId(),
            s = n.children.map(n => {
                if (t.type === i.ApplicationCommandOptionType.ATTACHMENT) {
                    let e = u.default.getUpload(r, t.name, o.DraftType.SlashCommand);
                    if (null != e) {
                        var s;
                        return {
                            type: "text",
                            text: null !== (s = e.filename) && void 0 !== s ? s : ""
                        }
                    }
                }
                if (c.TextUtils.isText(n)) return {
                    type: "text",
                    text: n.text
                };
                if (c.EditorUtils.isVoid(e, n)) {
                    let e = (0, d.voidToOptionValue)(n);
                    if (null != e) return e
                }
                return {
                    type: "text",
                    text: (0, _.serializeDescendant)(n, {
                        mode: "raw"
                    })
                }
            });
        if (t.type !== i.ApplicationCommandOptionType.STRING) {
            for (; s.length > 0 && "text" === s[0].type && "" === s[0].text.trim();) s.shift();
            for (; s.length > 0 && "text" === s[s.length - 1].type && "" === s[s.length - 1].text.trim();) s.pop()
        }
        return s
    }

    function m(e, t, n, i, s) {
        if (null == e.options) return {};
        let o = Object.fromEntries(e.options.map(e => {
            var r;
            return [e.name, a.validateOptionContent({
                option: e,
                content: null !== (r = i[e.name]) && void 0 !== r ? r : null,
                guildId: t,
                channelId: n,
                allowEmptyValues: s
            })]
        }));
        return r.updateOptionValidationStates(n, o), o
    }

    function N(e, t, n, i, o) {
        var l;
        let [u] = i, d = s.default.getActiveCommand(n), _ = null == d ? void 0 : null === (l = d.options) || void 0 === l ? void 0 : l.find(e => e.name === u.optionName);
        if (null == _) return;
        let c = h(e, _, u),
            E = a.validateOptionContent({
                option: _,
                content: c,
                guildId: t,
                channelId: n,
                allowEmptyValues: o
            });
        return r.updateOptionStates(n, {
            [u.optionName]: {
                lastValidationResult: E
            }
        }), E
    }

    function O(e, t) {
        if (null == t.options || 0 === t.options.length) return [];
        let n = c.EditorUtils.richValue(e),
            i = [],
            r = new Set(S(e)),
            s = {},
            a = new Set;
        for (let e of t.options) s[e.displayName] = e, !r.has(e.name) && a.add(e.displayName);
        let o = null;
        for (let t = 0; t < n.length; t++) {
            let r = n[t];
            if ("line" === r.type || "applicationCommand" === r.type)
                for (let u = 0; u < r.children.length; u++) {
                    let d;
                    let E = r.children[u],
                        T = [t, u];
                    if (c.NodeUtils.isType(E, "applicationCommandOption")) {
                        if (null != o) {
                            var l;
                            o.valueRange.focus = null !== (l = c.EditorUtils.before(e, T)) && void 0 !== l ? l : c.EditorUtils.start(e, []), o.text = (0, _.toTextValue)(n, {
                                mode: "raw",
                                range: o.valueRange
                            }).trim(), i.push(o), o = null
                        }
                        continue
                    }
                    if (!!c.TextUtils.isText(E))
                        for (I.lastIndex = 0; null != (d = I.exec(E.text));) {
                            if (0 !== d.index && null == E.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
                            let e = d[1];
                            if (!a.has(e)) continue;
                            a.delete(e);
                            let t = s[e];
                            if (null == t) continue;
                            let r = {
                                    path: T,
                                    offset: d.index
                                },
                                l = {
                                    path: T,
                                    offset: r.offset + d[0].length
                                },
                                u = {
                                    path: T,
                                    offset: l.offset
                                },
                                c = {
                                    name: t.name,
                                    displayName: t.displayName,
                                    type: t.type,
                                    keyRange: {
                                        anchor: r,
                                        focus: l
                                    },
                                    valueRange: {
                                        anchor: u,
                                        focus: u
                                    },
                                    text: ""
                                };
                            null != o && (o.valueRange.focus = c.keyRange.anchor, o.text = (0, _.toTextValue)(n, {
                                mode: "raw",
                                range: o.valueRange
                            }).trim(), i.push(o)), o = c
                        }
                }
        }
        return null != o && (o.valueRange.focus = c.EditorUtils.end(e, []), o.text = (0, _.toTextValue)(n, {
            mode: "raw",
            range: o.valueRange
        }).trim(), i.push(o)), i
    }
}