function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCommandBlock: function() {
            return h
        },
        getCurrentCommandOption: function() {
            return x
        },
        getOptionNames: function() {
            return E
        },
        getOptionValues: function() {
            return y
        },
        optionToValues: function() {
            return g
        },
        validateOptionValues: function() {
            return S
        },
        validateOption: function() {
            return C
        },
        findTextOptions: function() {
            return T
        }
    }), n("424973"), n("222007");
    var i = n("798609"),
        l = n("507217"),
        a = n("383018"),
        s = n("343952"),
        r = n("474643"),
        o = n("18494"),
        u = n("585722"),
        d = n("149022"),
        c = n("970153"),
        f = n("385887"),
        p = n("566819");
    let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

    function h(e) {
        let t = f.EditorUtils.richValue(e)[0];
        return null == t || "applicationCommand" !== t.type ? null : [t, p.FIRST_BLOCK_PATH]
    }

    function x(e) {
        var t, n;
        if (null == e.selection) return null;
        let i = null !== (t = f.EditorUtils.above(e, {
            at: e.selection.focus,
            match: e => f.NodeUtils.isType(e, "applicationCommandOption")
        })) && void 0 !== t ? t : null;
        if (null != i || f.RangeUtils.isCollapsed(e.selection)) return i;
        let l = null !== (n = f.EditorUtils.above(e, {
            at: e.selection.anchor,
            match: e => f.NodeUtils.isType(e, "applicationCommandOption")
        })) && void 0 !== n ? n : null;
        return l
    }

    function E(e) {
        let t = h(e),
            n = [],
            i = null == t ? void 0 : t[0].children;
        if (null != i)
            for (let e of i) f.NodeUtils.isType(e, "applicationCommandOption") && n.push(e.optionName);
        return n
    }

    function y(e, t) {
        let n = {};
        if (null == t.options) return {};
        let i = h(e),
            l = Object.fromEntries(t.options.map(e => [e.name, e])),
            a = null == i ? void 0 : i[0].children;
        if (null != a) {
            for (let t of a)
                if (f.NodeUtils.isType(t, "applicationCommandOption")) {
                    let i = l[t.optionName];
                    null != i && (n[t.optionName] = g(e, i, t))
                }
        }
        return n
    }

    function g(e, t, n) {
        let l = o.default.getCurrentlySelectedChannelId(),
            a = n.children.map(n => {
                if (t.type === i.ApplicationCommandOptionType.ATTACHMENT) {
                    let e = u.default.getUpload(l, t.name, r.DraftType.SlashCommand);
                    if (null != e) {
                        var a;
                        return {
                            type: "text",
                            text: null !== (a = e.filename) && void 0 !== a ? a : ""
                        }
                    }
                }
                if (f.TextUtils.isText(n)) return {
                    type: "text",
                    text: n.text
                };
                if (f.EditorUtils.isVoid(e, n)) {
                    let e = (0, d.voidToOptionValue)(n);
                    if (null != e) return e
                }
                return {
                    type: "text",
                    text: (0, c.serializeDescendant)(n, {
                        mode: "raw"
                    })
                }
            });
        if (t.type !== i.ApplicationCommandOptionType.STRING) {
            for (; a.length > 0 && "text" === a[0].type && "" === a[0].text.trim();) a.shift();
            for (; a.length > 0 && "text" === a[a.length - 1].type && "" === a[a.length - 1].text.trim();) a.pop()
        }
        return a
    }

    function S(e, t, n, i, a) {
        if (null == e.options) return {};
        let r = Object.fromEntries(e.options.map(e => {
            var l;
            return [e.name, s.validateOptionContent({
                option: e,
                content: null !== (l = i[e.name]) && void 0 !== l ? l : null,
                guildId: t,
                channelId: n,
                allowEmptyValues: a
            })]
        }));
        return l.updateOptionValidationStates(n, r), r
    }

    function C(e, t, n, i, r) {
        var o;
        let [u] = i, d = a.default.getActiveCommand(n), c = null == d ? void 0 : null === (o = d.options) || void 0 === o ? void 0 : o.find(e => e.name === u.optionName);
        if (null == c) return;
        let f = g(e, c, u),
            p = s.validateOptionContent({
                option: c,
                content: f,
                guildId: t,
                channelId: n,
                allowEmptyValues: r
            });
        return l.updateOptionStates(n, {
            [u.optionName]: {
                lastValidationResult: p
            }
        }), p
    }

    function T(e, t) {
        if (null == t.options || 0 === t.options.length) return [];
        let n = f.EditorUtils.richValue(e),
            i = [],
            l = new Set(E(e)),
            a = {},
            s = new Set;
        for (let e of t.options) a[e.displayName] = e, !l.has(e.name) && s.add(e.displayName);
        let r = null;
        for (let t = 0; t < n.length; t++) {
            let l = n[t];
            if ("line" === l.type || "applicationCommand" === l.type)
                for (let u = 0; u < l.children.length; u++) {
                    let d;
                    let p = l.children[u],
                        h = [t, u];
                    if (f.NodeUtils.isType(p, "applicationCommandOption")) {
                        if (null != r) {
                            var o;
                            r.valueRange.focus = null !== (o = f.EditorUtils.before(e, h)) && void 0 !== o ? o : f.EditorUtils.start(e, []), r.text = (0, c.toTextValue)(n, {
                                mode: "raw",
                                range: r.valueRange
                            }).trim(), i.push(r), r = null
                        }
                        continue
                    }
                    if (!!f.TextUtils.isText(p))
                        for (m.lastIndex = 0; null != (d = m.exec(p.text));) {
                            if (0 !== d.index && null == p.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
                            let e = d[1];
                            if (!s.has(e)) continue;
                            s.delete(e);
                            let t = a[e];
                            if (null == t) continue;
                            let l = {
                                    path: h,
                                    offset: d.index
                                },
                                o = {
                                    path: h,
                                    offset: l.offset + d[0].length
                                },
                                u = {
                                    path: h,
                                    offset: o.offset
                                },
                                f = {
                                    name: t.name,
                                    displayName: t.displayName,
                                    type: t.type,
                                    keyRange: {
                                        anchor: l,
                                        focus: o
                                    },
                                    valueRange: {
                                        anchor: u,
                                        focus: u
                                    },
                                    text: ""
                                };
                            null != r && (r.valueRange.focus = f.keyRange.anchor, r.text = (0, c.toTextValue)(n, {
                                mode: "raw",
                                range: r.valueRange
                            }).trim(), i.push(r)), r = f
                        }
                }
        }
        return null != r && (r.valueRange.focus = f.EditorUtils.end(e, []), r.text = (0, c.toTextValue)(n, {
            mode: "raw",
            range: r.valueRange
        }).trim(), i.push(r)), i
    }
}