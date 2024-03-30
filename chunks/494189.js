function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findTextOptions: function() {
            return v
        },
        getCommandBlock: function() {
            return m
        },
        getCurrentCommandOption: function() {
            return y
        },
        getOptionNames: function() {
            return I
        },
        getOptionValues: function() {
            return h
        },
        optionToValues: function() {
            return O
        },
        validateOption: function() {
            return S
        },
        validateOptionValues: function() {
            return T
        }
    });
    var r = n("29570"),
        o = n("503113"),
        i = n("471559"),
        a = n("148768"),
        u = n("309944"),
        s = n("894288"),
        l = n("158201"),
        c = n("941055"),
        f = n("590401"),
        d = n("714196"),
        _ = n("188629");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var p = RegExp("([\\p{L}\\p{N}\\p{sc=Deva}\\p{sc=Thai}_-]+):", "gu");

    function m(e) {
        var t = d.EditorUtils.richValue(e)[0];
        return null == t || "applicationCommand" !== t.type ? null : [t, _.FIRST_BLOCK_PATH]
    }

    function y(e) {
        if (null == e.selection) return null;
        var t, n, r = null !== (t = d.EditorUtils.above(e, {
            at: e.selection.focus,
            match: function(e) {
                return d.NodeUtils.isType(e, "applicationCommandOption")
            }
        })) && void 0 !== t ? t : null;
        return null != r || d.RangeUtils.isCollapsed(e.selection) ? r : null !== (n = d.EditorUtils.above(e, {
            at: e.selection.anchor,
            match: function(e) {
                return d.NodeUtils.isType(e, "applicationCommandOption")
            }
        })) && void 0 !== n ? n : null
    }

    function I(e) {
        var t = m(e),
            n = [],
            r = null == t ? void 0 : t[0].children;
        if (null != r) {
            var o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = r[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var l = u.value;
                    d.NodeUtils.isType(l, "applicationCommandOption") && n.push(l.optionName)
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
        }
        return n
    }

    function h(e, t) {
        var n = {};
        if (null == t.options) return {};
        var r = m(e),
            o = Object.fromEntries(t.options.map(function(e) {
                return [e.name, e]
            })),
            i = null == r ? void 0 : r[0].children;
        if (null != i) {
            var a = !0,
                u = !1,
                s = void 0;
            try {
                for (var l, c = i[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                    var f = l.value;
                    if (d.NodeUtils.isType(f, "applicationCommandOption")) {
                        var _ = o[f.optionName];
                        null != _ && (n[f.optionName] = O(e, _, f))
                    }
                }
            } catch (e) {
                u = !0, s = e
            } finally {
                try {
                    !a && null != c.return && c.return()
                } finally {
                    if (u) throw s
                }
            }
        }
        return n
    }

    function O(e, t, n) {
        var o = s.default.getCurrentlySelectedChannelId(),
            i = n.children.map(function(n) {
                if (t.type === r.ApplicationCommandOptionType.ATTACHMENT) {
                    var i, a = l.default.getUpload(o, t.name, u.DraftType.SlashCommand);
                    if (null != a) return {
                        type: "text",
                        text: null !== (i = a.filename) && void 0 !== i ? i : ""
                    }
                }
                if (d.TextUtils.isText(n)) return {
                    type: "text",
                    text: n.text
                };
                if (d.EditorUtils.isVoid(e, n)) {
                    var s = (0, c.voidToOptionValue)(n);
                    if (null != s) return s
                }
                return {
                    type: "text",
                    text: (0, f.serializeDescendant)(n, {
                        mode: "raw"
                    })
                }
            });
        if (t.type !== r.ApplicationCommandOptionType.STRING) {
            for (; i.length > 0 && "text" === i[0].type && "" === i[0].text.trim();) i.shift();
            for (; i.length > 0 && "text" === i[i.length - 1].type && "" === i[i.length - 1].text.trim();) i.pop()
        }
        return i
    }

    function T(e, t, n, r, i) {
        if (null == e.options) return {};
        var u = Object.fromEntries(e.options.map(function(e) {
            var o;
            return [e.name, a.validateOptionContent({
                option: e,
                content: null !== (o = r[e.name]) && void 0 !== o ? o : null,
                guildId: t,
                channelId: n,
                allowEmptyValues: i
            })]
        }));
        return o.updateOptionValidationStates(n, u), u
    }

    function S(e, t, n, r, u) {
        var s, l, c, f = (l = 1, function(e) {
                if (Array.isArray(e)) return e
            }(s = r) || function(e, t) {
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
            }(s, l) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }
            }(s, l) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0],
            d = i.default.getActiveCommand(n),
            _ = null == d ? void 0 : null === (c = d.options) || void 0 === c ? void 0 : c.find(function(e) {
                return e.name === f.optionName
            });
        if (null != _) {
            var p, m, y, I = O(e, _, f),
                h = a.validateOptionContent({
                    option: _,
                    content: I,
                    guildId: t,
                    channelId: n,
                    allowEmptyValues: u
                });
            return o.updateOptionStates(n, (p = {}, m = f.optionName, y = {
                lastValidationResult: h
            }, m in p ? Object.defineProperty(p, m, {
                value: y,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : p[m] = y, p)), h
        }
    }

    function v(e, t) {
        if (null == t.options || 0 === t.options.length) return [];
        var n = d.EditorUtils.richValue(e),
            r = [],
            o = new Set(I(e)),
            i = {},
            a = new Set,
            u = !0,
            s = !1,
            l = void 0;
        try {
            for (var c, _ = t.options[Symbol.iterator](); !(u = (c = _.next()).done); u = !0) {
                var E = c.value;
                i[E.displayName] = E, !o.has(E.name) && a.add(E.displayName)
            }
        } catch (e) {
            s = !0, l = e
        } finally {
            try {
                !u && null != _.return && _.return()
            } finally {
                if (s) throw l
            }
        }
        for (var m = null, y = 0; y < n.length; y++) {
            var h = n[y];
            if ("line" === h.type || "applicationCommand" === h.type)
                for (var O = 0; O < h.children.length; O++) {
                    var T, S = h.children[O],
                        v = [y, O];
                    if (d.NodeUtils.isType(S, "applicationCommandOption")) {
                        null != m && (m.valueRange.focus = null !== (T = d.EditorUtils.before(e, v)) && void 0 !== T ? T : d.EditorUtils.start(e, []), m.text = (0, f.toTextValue)(n, {
                            mode: "raw",
                            range: m.valueRange
                        }).trim(), r.push(m), m = null);
                        continue
                    }
                    if (!!d.TextUtils.isText(S)) {
                        p.lastIndex = 0;
                        for (var g = void 0; null != (g = p.exec(S.text));) {
                            if (0 !== g.index && null == S.text.charAt(g.index - 1).match(/(\t|\s)/)) continue;
                            var A = g[1];
                            if (!a.has(A)) continue;
                            a.delete(A);
                            var b = i[A];
                            if (null != b) {
                                var N = {
                                        path: v,
                                        offset: g.index
                                    },
                                    R = {
                                        path: v,
                                        offset: N.offset + g[0].length
                                    },
                                    C = {
                                        path: v,
                                        offset: R.offset
                                    },
                                    P = {
                                        name: b.name,
                                        displayName: b.displayName,
                                        type: b.type,
                                        keyRange: {
                                            anchor: N,
                                            focus: R
                                        },
                                        valueRange: {
                                            anchor: C,
                                            focus: C
                                        },
                                        text: ""
                                    };
                                null != m && (m.valueRange.focus = P.keyRange.anchor, m.text = (0, f.toTextValue)(n, {
                                    mode: "raw",
                                    range: m.valueRange
                                }).trim(), r.push(m)), m = P
                            }
                        }
                    }
                }
        }
        return null != m && (m.valueRange.focus = d.EditorUtils.end(e, []), m.text = (0, f.toTextValue)(n, {
            mode: "raw",
            range: m.valueRange
        }).trim(), r.push(m)), r
    }
}