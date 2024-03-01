function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        Editor: function() {
            return G
        },
        Element: function() {
            return Element
        },
        Node: function() {
            return Node
        },
        Path: function() {
            return eo
        },
        Point: function() {
            return el
        },
        Range: function() {
            return Range
        },
        Scrubber: function() {
            return ev
        },
        Text: function() {
            return Text
        },
        Transforms: function() {
            return eM
        },
        createEditor: function() {
            return g
        }
    }), r("222007"), r("424973"), r("70102"), r("106442"), r("175143");
    var n, i, o = r("156336"),
        a = r("746140");

    function u(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var s = new WeakMap,
        l = new WeakMap,
        c = new WeakMap,
        d = new WeakMap,
        f = new WeakMap,
        h = new WeakMap,
        p = new WeakMap;

    function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function D(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? v(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var g = () => {
        var e = {
            children: [],
            operations: [],
            selection: null,
            marks: null,
            isInline: () => !1,
            isVoid: () => !1,
            markableVoid: () => !1,
            onChange: () => {},
            apply: t => {
                for (var r of G.pathRefs(e)) ea.transform(r, t);
                for (var n of G.pointRefs(e)) ec.transform(n, t);
                for (var i of G.rangeRefs(e)) eh.transform(i, t);
                var o, a, u = s.get(e) || [],
                    d = l.get(e) || new Set,
                    f = e => {
                        if (e) {
                            var t = e.join(",");
                            !a.has(t) && (a.add(t), o.push(e))
                        }
                    };
                if (eo.operationCanTransformPath(t))
                    for (var h of (o = [], a = new Set, u)) f(eo.transform(h, t));
                else o = u, a = d;
                for (var p of e.getDirtyPaths(t)) f(p);
                s.set(e, o), l.set(e, a), eM.transform(e, t), e.operations.push(t), G.normalize(e, {
                    operation: t
                }), "set_selection" === t.type && (e.marks = null), !c.get(e) && (c.set(e, !0), Promise.resolve().then(() => {
                    c.set(e, !1), e.onChange({
                        operation: t
                    }), e.operations = []
                }))
            },
            addMark: (t, r) => {
                var {
                    selection: n,
                    markableVoid: i
                } = e;
                if (n) {
                    var o = (t, r) => {
                            if (!Text.isText(t)) return !1;
                            var [n, i] = G.parent(e, r);
                            return !e.isVoid(n) || e.markableVoid(n)
                        },
                        a = Range.isExpanded(n),
                        u = !1;
                    if (!a) {
                        var [s, l] = G.node(e, n);
                        if (s && o(s, l)) {
                            var [d] = G.parent(e, l);
                            u = d && e.markableVoid(d)
                        }
                    }
                    if (a || u) eM.setNodes(e, {
                        [t]: r
                    }, {
                        match: o,
                        split: !0,
                        voids: !0
                    });
                    else {
                        var f = D(D({}, G.marks(e) || {}), {}, {
                            [t]: r
                        });
                        e.marks = f, !c.get(e) && e.onChange()
                    }
                }
            },
            deleteBackward: t => {
                var {
                    selection: r
                } = e;
                r && Range.isCollapsed(r) && eM.delete(e, {
                    unit: t,
                    reverse: !0
                })
            },
            deleteForward: t => {
                var {
                    selection: r
                } = e;
                r && Range.isCollapsed(r) && eM.delete(e, {
                    unit: t
                })
            },
            deleteFragment: t => {
                var {
                    selection: r
                } = e;
                r && Range.isExpanded(r) && eM.delete(e, {
                    reverse: "backward" === t
                })
            },
            getFragment: () => {
                var {
                    selection: t
                } = e;
                return t ? Node.fragment(e, t) : []
            },
            insertBreak: () => {
                eM.splitNodes(e, {
                    always: !0
                })
            },
            insertSoftBreak: () => {
                eM.splitNodes(e, {
                    always: !0
                })
            },
            insertFragment: t => {
                eM.insertFragment(e, t)
            },
            insertNode: t => {
                eM.insertNodes(e, t)
            },
            insertText: t => {
                var {
                    selection: r,
                    marks: n
                } = e;
                if (r) {
                    if (n) {
                        var i = D({
                            text: t
                        }, n);
                        eM.insertNodes(e, i)
                    } else eM.insertText(e, t);
                    e.marks = null
                }
            },
            normalizeNode: t => {
                var [r, n] = t;
                if (!Text.isText(r)) {
                    if (Element.isElement(r) && 0 === r.children.length) {
                        eM.insertNodes(e, {
                            text: ""
                        }, {
                            at: n.concat(0),
                            voids: !0
                        });
                        return
                    }
                    for (var i = !G.isEditor(r) && Element.isElement(r) && (e.isInline(r) || 0 === r.children.length || Text.isText(r.children[0]) || e.isInline(r.children[0])), o = 0, a = 0; a < r.children.length; a++, o++) {
                        var u = Node.get(e, n);
                        if (!Text.isText(u)) {
                            var s = r.children[a],
                                l = u.children[o - 1],
                                c = a === r.children.length - 1;
                            if ((Text.isText(s) || Element.isElement(s) && e.isInline(s)) !== i) eM.removeNodes(e, {
                                at: n.concat(o),
                                voids: !0
                            }), o--;
                            else if (Element.isElement(s)) {
                                if (e.isInline(s)) {
                                    if (null != l && Text.isText(l)) {
                                        if (c) {
                                            var d = {
                                                text: ""
                                            };
                                            eM.insertNodes(e, d, {
                                                at: n.concat(o + 1),
                                                voids: !0
                                            }), o++
                                        }
                                    } else {
                                        var f = {
                                            text: ""
                                        };
                                        eM.insertNodes(e, f, {
                                            at: n.concat(o),
                                            voids: !0
                                        }), o++
                                    }
                                }
                            } else null != l && Text.isText(l) && (Text.equals(s, l, {
                                loose: !0
                            }) ? (eM.mergeNodes(e, {
                                at: n.concat(o),
                                voids: !0
                            }), o--) : "" === l.text ? (eM.removeNodes(e, {
                                at: n.concat(o - 1),
                                voids: !0
                            }), o--) : "" === s.text && (eM.removeNodes(e, {
                                at: n.concat(o),
                                voids: !0
                            }), o--))
                        }
                    }
                }
            },
            removeMark: t => {
                var {
                    selection: r
                } = e;
                if (r) {
                    var n = (t, r) => {
                            if (!Text.isText(t)) return !1;
                            var [n, i] = G.parent(e, r);
                            return !e.isVoid(n) || e.markableVoid(n)
                        },
                        i = Range.isExpanded(r),
                        o = !1;
                    if (!i) {
                        var [a, u] = G.node(e, r);
                        if (a && n(a, u)) {
                            var [s] = G.parent(e, u);
                            o = s && e.markableVoid(s)
                        }
                    }
                    if (i || o) eM.unsetNodes(e, t, {
                        match: n,
                        split: !0,
                        voids: !0
                    });
                    else {
                        var l = D({}, G.marks(e) || {});
                        delete l[t], e.marks = l, !c.get(e) && e.onChange()
                    }
                }
            },
            getDirtyPaths: e => {
                switch (e.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                        var {
                            path: t
                        } = e;
                        return eo.levels(t);
                    case "insert_node":
                        var {
                            node: r, path: n
                        } = e;
                        return [...eo.levels(n), ...Text.isText(r) ? [] : Array.from(Node.nodes(r), e => {
                            var [, t] = e;
                            return n.concat(t)
                        })];
                    case "merge_node":
                        var {
                            path: i
                        } = e;
                        return [...eo.ancestors(i), eo.previous(i)];
                    case "move_node":
                        var {
                            path: o, newPath: a
                        } = e;
                        if (eo.equals(o, a)) return [];
                        var u = [],
                            s = [];
                        for (var l of eo.ancestors(o)) {
                            var c = eo.transform(l, e);
                            u.push(c)
                        }
                        for (var d of eo.ancestors(a)) {
                            var f = eo.transform(d, e);
                            s.push(f)
                        }
                        var h = s[s.length - 1],
                            p = a[a.length - 1];
                        return [...u, ...s, h.concat(p)];
                    case "remove_node":
                        var {
                            path: v
                        } = e;
                        return [...eo.ancestors(v)];
                    case "split_node":
                        var {
                            path: D
                        } = e;
                        return [...eo.levels(D), eo.next(D)];
                    default:
                        return []
                }
            },
            shouldNormalize: e => {
                var {
                    iteration: t,
                    initialDirtyPathsLength: r
                } = e, n = 42 * r;
                if (t > n) throw Error("Could not completely normalize the editor after ".concat(n, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
                return !0
            }
        };
        return e
    };

    function C(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
            if (null == e) return {};
            var r, n, i = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && (i[r] = e[r]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++) {
                if (r = o[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
            }
        }
        return i
    }
    var m = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = !t,
                i = t ? F(e) : e,
                o = n.None,
                a = n.None,
                u = 0,
                s = null,
                l = null;
            for (var c of i) {
                var d = c.codePointAt(0);
                if (!d) break;
                var f = L(c, d);
                if ([o, a] = r ? [a, f] : [f, o], function(e, t) {
                        return (e & t) != 0
                    }(o, n.ZWJ) && function(e, t) {
                        return (e & t) != 0
                    }(a, n.ExtPict) && !(s = r ? q(e.substring(0, u)) : q(e.substring(0, e.length - u))) || function(e, t) {
                        return (e & t) != 0
                    }(o, n.RI) && function(e, t) {
                        return (e & t) != 0
                    }(a, n.RI) && !(l = null !== l ? !l : !!r || U(e.substring(0, e.length - u))) || o !== n.None && a !== n.None && function(e, t) {
                        return -1 === z.findIndex(r => (e & r[0]) != 0 && (t & r[1]) != 0)
                    }(o, a)) break;
                u += c.length
            }
            return u || 1
        },
        y = /\s/,
        E = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        B = /['\u2018\u2019]/,
        b = function(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0, n = !1; e.length > 0;) {
                var i = m(e, t),
                    [o, a] = A(e, i, t);
                if (w(o, a, t)) n = !0, r += i;
                else if (n) break;
                else r += i;
                e = a
            }
            return r
        },
        A = (e, t, r) => {
            if (r) {
                var n = e.length - t;
                return [e.slice(n, e.length), e.slice(0, n)]
            }
            return [e.slice(0, t), e.slice(t)]
        },
        w = function e(t, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (y.test(t)) return !1;
            if (B.test(t)) {
                var i = m(r, n),
                    [o, a] = A(r, i, n);
                if (e(o, a, n)) return !0
            }
            return !E.test(t) && !0
        },
        F = function*(e) {
            for (var t = e.length - 1, r = 0; r < e.length; r++) {
                var n = e.charAt(t - r);
                if (O(n.charCodeAt(0))) {
                    var i = e.charAt(t - r - 1);
                    if (_(i.charCodeAt(0))) {
                        yield i + n, r++;
                        continue
                    }
                }
                yield n
            }
        },
        _ = e => e >= 55296 && e <= 56319,
        O = e => e >= 56320 && e <= 57343;
    (i = n || (n = {}))[i.None = 0] = "None", i[i.Extend = 1] = "Extend", i[i.ZWJ = 2] = "ZWJ", i[i.RI = 4] = "RI", i[i.Prepend = 8] = "Prepend", i[i.SpacingMark = 16] = "SpacingMark", i[i.L = 32] = "L", i[i.V = 64] = "V", i[i.T = 128] = "T", i[i.LV = 256] = "LV", i[i.LVT = 512] = "LVT", i[i.ExtPict = 1024] = "ExtPict", i[i.Any = 2048] = "Any";
    var x = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        k = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        P = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        S = /^[\u1100-\u115F\uA960-\uA97C]$/,
        T = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        j = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        M = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        R = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        I = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        L = (e, t) => {
            var r = n.Any;
            return -1 !== e.search(x) && (r |= n.Extend), 8205 === t && (r |= n.ZWJ), t >= 127462 && t <= 127487 && (r |= n.RI), -1 !== e.search(k) && (r |= n.Prepend), -1 !== e.search(P) && (r |= n.SpacingMark), -1 !== e.search(S) && (r |= n.L), -1 !== e.search(T) && (r |= n.V), -1 !== e.search(j) && (r |= n.T), -1 !== e.search(M) && (r |= n.LV), -1 !== e.search(R) && (r |= n.LVT), -1 !== e.search(I) && (r |= n.ExtPict), r
        };

    function N(e, t) {
        return (e & t) != 0
    }
    var z = [
            [n.L, n.L | n.V | n.LV | n.LVT],
            [n.LV | n.V, n.V | n.T],
            [n.LVT | n.T, n.T],
            [n.Any, n.Extend | n.ZWJ],
            [n.Any, n.SpacingMark],
            [n.Prepend, n.Any],
            [n.ZWJ, n.ExtPict],
            [n.RI, n.RI]
        ],
        W = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        q = e => -1 !== e.search(W),
        V = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        U = e => {
            var t = e.match(V);
            return null !== t && t[0].length / 2 % 2 == 1
        },
        H = e => (0, o.isPlainObject)(e) && Node.isNodeList(e.children) && !G.isEditor(e),
        Element = {
            isAncestor: e => (0, o.isPlainObject)(e) && Node.isNodeList(e.children),
            isElement: H,
            isElementList: e => Array.isArray(e) && e.every(e => Element.isElement(e)),
            isElementProps: e => void 0 !== e.children,
            isElementType: function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
                return H(e) && e[r] === t
            },
            matches(e, t) {
                for (var r in t)
                    if ("children" !== r && e[r] !== t[r]) return !1;
                return !0
            }
        },
        J = ["text"],
        K = ["text"];

    function $(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function X(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? $(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var Q = new WeakMap,
        G = {
            above(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        voids: r = !1,
                        mode: n = "lowest",
                        at: i = e.selection,
                        match: o
                    } = t;
                if (i) {
                    var a = G.path(e, i);
                    for (var [u, s] of G.levels(e, {
                            at: a,
                            voids: r,
                            match: o,
                            reverse: "lowest" === n
                        }))
                        if (!Text.isText(u)) {
                            if (Range.isRange(i)) {
                                if (eo.isAncestor(s, i.anchor.path) && eo.isAncestor(s, i.focus.path)) return [u, s]
                            } else if (!eo.equals(a, s)) return [u, s]
                        }
                }
            },
            addMark(e, t, r) {
                e.addMark(t, r)
            },
            after(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = G.point(e, t, {
                        edge: "end"
                    }),
                    o = G.end(e, []),
                    {
                        distance: a = 1
                    } = n,
                    u = 0;
                for (var s of G.positions(e, X(X({}, n), {}, {
                        at: {
                            anchor: i,
                            focus: o
                        }
                    }))) {
                    if (u > a) break;
                    0 !== u && (r = s), u++
                }
                return r
            },
            before(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = G.start(e, []),
                    o = G.point(e, t, {
                        edge: "start"
                    }),
                    {
                        distance: a = 1
                    } = n,
                    u = 0;
                for (var s of G.positions(e, X(X({}, n), {}, {
                        at: {
                            anchor: i,
                            focus: o
                        },
                        reverse: !0
                    }))) {
                    if (u > a) break;
                    0 !== u && (r = s), u++
                }
                return r
            },
            deleteBackward(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        unit: r = "character"
                    } = t;
                e.deleteBackward(r)
            },
            deleteForward(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        unit: r = "character"
                    } = t;
                e.deleteForward(r)
            },
            deleteFragment(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        direction: r = "forward"
                    } = t;
                e.deleteFragment(r)
            },
            edges: (e, t) => [G.start(e, t), G.end(e, t)],
            end: (e, t) => G.point(e, t, {
                edge: "end"
            }),
            first(e, t) {
                var r = G.path(e, t, {
                    edge: "start"
                });
                return G.node(e, r)
            },
            fragment(e, t) {
                var r = G.range(e, t);
                return Node.fragment(e, r)
            },
            hasBlocks: (e, t) => t.children.some(t => Element.isElement(t) && G.isBlock(e, t)),
            hasInlines: (e, t) => t.children.some(t => Text.isText(t) || G.isInline(e, t)),
            hasTexts: (e, t) => t.children.every(e => Text.isText(e)),
            insertBreak(e) {
                e.insertBreak()
            },
            insertSoftBreak(e) {
                e.insertSoftBreak()
            },
            insertFragment(e, t) {
                e.insertFragment(t)
            },
            insertNode(e, t) {
                e.insertNode(t)
            },
            insertText(e, t) {
                e.insertText(t)
            },
            isBlock: (e, t) => !e.isInline(t),
            isEditor(e) {
                var t = Q.get(e);
                if (void 0 !== t) return t;
                if (!(0, o.isPlainObject)(e)) return !1;
                var r = "function" == typeof e.addMark && "function" == typeof e.apply && "function" == typeof e.deleteBackward && "function" == typeof e.deleteForward && "function" == typeof e.deleteFragment && "function" == typeof e.insertBreak && "function" == typeof e.insertSoftBreak && "function" == typeof e.insertFragment && "function" == typeof e.insertNode && "function" == typeof e.insertText && "function" == typeof e.isInline && "function" == typeof e.isVoid && "function" == typeof e.normalizeNode && "function" == typeof e.onChange && "function" == typeof e.removeMark && "function" == typeof e.getDirtyPaths && (null === e.marks || (0, o.isPlainObject)(e.marks)) && (null === e.selection || Range.isRange(e.selection)) && Node.isNodeList(e.children) && ei.isOperationList(e.operations);
                return Q.set(e, r), r
            },
            isEnd(e, t, r) {
                var n = G.end(e, r);
                return el.equals(t, n)
            },
            isEdge: (e, t, r) => G.isStart(e, t, r) || G.isEnd(e, t, r),
            isEmpty(e, t) {
                var {
                    children: r
                } = t, [n] = r;
                return 0 === r.length || 1 === r.length && Text.isText(n) && "" === n.text && !e.isVoid(t)
            },
            isInline: (e, t) => e.isInline(t),
            isNormalizing(e) {
                var t = d.get(e);
                return void 0 === t || t
            },
            isStart(e, t, r) {
                if (0 !== t.offset) return !1;
                var n = G.start(e, r);
                return el.equals(t, n)
            },
            isVoid: (e, t) => e.isVoid(t),
            last(e, t) {
                var r = G.path(e, t, {
                    edge: "end"
                });
                return G.node(e, r)
            },
            leaf(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = G.path(e, t, r);
                return [Node.leaf(e, n), n]
            },
            * levels(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: r = e.selection,
                        reverse: n = !1,
                        voids: i = !1
                    } = t,
                    {
                        match: o
                    } = t;
                if (null == o && (o = () => !0), r) {
                    var a = [],
                        u = G.path(e, r);
                    for (var [s, l] of Node.levels(e, u))
                        if (o(s, l) && (a.push([s, l]), !i && Element.isElement(s) && G.isVoid(e, s))) break;
                    n && a.reverse(), yield* a
                }
            },
            marks(e) {
                var {
                    marks: t,
                    selection: r
                } = e;
                if (!r) return null;
                if (t) return t;
                if (Range.isExpanded(r)) {
                    var [n] = G.nodes(e, {
                        match: Text.isText
                    });
                    if (!n) return {};
                    var [i] = n;
                    return C(i, J)
                }
                var {
                    anchor: o
                } = r, {
                    path: a
                } = o, [u] = G.leaf(e, a);
                if (0 === o.offset) {
                    var s = G.previous(e, {
                        at: a,
                        match: Text.isText
                    });
                    if (!G.above(e, {
                            match: t => Element.isElement(t) && G.isVoid(e, t) && e.markableVoid(t)
                        })) {
                        var l = G.above(e, {
                            match: t => Element.isElement(t) && G.isBlock(e, t)
                        });
                        if (s && l) {
                            var [c, d] = s, [, f] = l;
                            eo.isAncestor(f, d) && (u = c)
                        }
                    }
                }
                return C(u, K)
            },
            next(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        mode: r = "lowest",
                        voids: n = !1
                    } = t,
                    {
                        match: i,
                        at: o = e.selection
                    } = t;
                if (!!o) {
                    var a = G.after(e, o, {
                        voids: n
                    });
                    if (a) {
                        var [, u] = G.last(e, []), s = [a.path, u];
                        if (eo.isPath(o) && 0 === o.length) throw Error("Cannot get the next node from the root node!");
                        if (null == i) {
                            if (eo.isPath(o)) {
                                var [l] = G.parent(e, o);
                                i = e => l.children.includes(e)
                            } else i = () => !0
                        }
                        var [c] = G.nodes(e, {
                            at: s,
                            match: i,
                            mode: r,
                            voids: n
                        });
                        return c
                    }
                }
            },
            node(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = G.path(e, t, r);
                return [Node.get(e, n), n]
            },
            * nodes(e) {
                var t, r, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: o = e.selection,
                        mode: a = "all",
                        universal: u = !1,
                        reverse: s = !1,
                        voids: l = !1
                    } = i,
                    {
                        match: c
                    } = i;
                if (!c && (c = () => !0), o) {
                    if (Y.isSpan(o)) t = o[0], r = o[1];
                    else {
                        var d = G.path(e, o, {
                                edge: "start"
                            }),
                            f = G.path(e, o, {
                                edge: "end"
                            });
                        t = s ? f : d, r = s ? d : f
                    }
                    var h = Node.nodes(e, {
                            reverse: s,
                            from: t,
                            to: r,
                            pass: t => {
                                var [r] = t;
                                return !l && Element.isElement(r) && G.isVoid(e, r)
                            }
                        }),
                        p = [];
                    for (var [v, D] of h) {
                        var g = n && 0 === eo.compare(D, n[1]);
                        if ("highest" !== a || !g) {
                            if (!c(v, D)) {
                                if (u && !g && Text.isText(v)) return;
                                continue
                            }
                            if ("lowest" === a && g) {
                                n = [v, D];
                                continue
                            }
                            var C = "lowest" === a ? n : [v, D];
                            C && (u ? p.push(C) : yield C), n = [v, D]
                        }
                    }
                    "lowest" === a && n && (u ? p.push(n) : yield n), u && (yield* p)
                }
            },
            normalize(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        force: r = !1,
                        operation: n
                    } = t,
                    i = e => s.get(e) || [],
                    o = e => l.get(e) || new Set,
                    a = e => {
                        var t = i(e).pop(),
                            r = t.join(",");
                        return o(e).delete(r), t
                    };
                if (!!G.isNormalizing(e)) {
                    if (r) {
                        var u = Array.from(Node.nodes(e), e => {
                                var [, t] = e;
                                return t
                            }),
                            c = new Set(u.map(e => e.join(",")));
                        s.set(e, u), l.set(e, c)
                    }
                    0 !== i(e).length && G.withoutNormalizing(e, () => {
                        for (var t of i(e))
                            if (Node.has(e, t)) {
                                var r = G.node(e, t),
                                    [o, u] = r;
                                Element.isElement(o) && 0 === o.children.length && e.normalizeNode(r, {
                                    operation: n
                                })
                            } for (var s = i(e), l = s.length, c = 0; 0 !== s.length;) {
                            if (!e.shouldNormalize({
                                    dirtyPaths: s,
                                    iteration: c,
                                    initialDirtyPathsLength: l,
                                    operation: n
                                })) return;
                            var d = a(e);
                            if (Node.has(e, d)) {
                                var f = G.node(e, d);
                                e.normalizeNode(f, {
                                    operation: n
                                })
                            }
                            c++, s = i(e)
                        }
                    })
                }
            },
            parent(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = G.path(e, t, r),
                    i = eo.parent(n);
                return G.node(e, i)
            },
            path(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        depth: n,
                        edge: i
                    } = r;
                if (eo.isPath(t)) {
                    if ("start" === i) {
                        var [, o] = Node.first(e, t);
                        t = o
                    } else if ("end" === i) {
                        var [, a] = Node.last(e, t);
                        t = a
                    }
                }
                return Range.isRange(t) && (t = "start" === i ? Range.start(t) : "end" === i ? Range.end(t) : eo.common(t.anchor.path, t.focus.path)), el.isPoint(t) && (t = t.path), null != n && (t = t.slice(0, n)), t
            },
            hasPath: (e, t) => Node.has(e, t),
            pathRef(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        affinity: n = "forward"
                    } = r,
                    i = {
                        current: t,
                        affinity: n,
                        unref() {
                            var {
                                current: t
                            } = i;
                            return G.pathRefs(e).delete(i), i.current = null, t
                        }
                    };
                return G.pathRefs(e).add(i), i
            },
            pathRefs(e) {
                var t = f.get(e);
                return !t && (t = new Set, f.set(e, t)), t
            },
            point(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        edge: n = "start"
                    } = r;
                if (eo.isPath(t)) {
                    if ("end" === n) {
                        var i, [, o] = Node.last(e, t);
                        i = o
                    } else {
                        var [, a] = Node.first(e, t);
                        i = a
                    }
                    var u = Node.get(e, i);
                    if (!Text.isText(u)) throw Error("Cannot get the ".concat(n, " point in the node at path [").concat(t, "] because it has no ").concat(n, " text node."));
                    return {
                        path: i,
                        offset: "end" === n ? u.text.length : 0
                    }
                }
                if (Range.isRange(t)) {
                    var [s, l] = Range.edges(t);
                    return "start" === n ? s : l
                }
                return t
            },
            pointRef(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        affinity: n = "forward"
                    } = r,
                    i = {
                        current: t,
                        affinity: n,
                        unref() {
                            var {
                                current: t
                            } = i;
                            return G.pointRefs(e).delete(i), i.current = null, t
                        }
                    };
                return G.pointRefs(e).add(i), i
            },
            pointRefs(e) {
                var t = h.get(e);
                return !t && (t = new Set, h.set(e, t)), t
            },
            * positions(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: r = e.selection,
                        unit: n = "offset",
                        reverse: i = !1,
                        voids: o = !1
                    } = t;
                if (r) {
                    var a = G.range(e, r),
                        [u, s] = Range.edges(a),
                        l = i ? s : u,
                        c = !1,
                        d = "",
                        f = 0,
                        h = 0,
                        p = 0;
                    for (var [v, D] of G.nodes(e, {
                            at: r,
                            reverse: i,
                            voids: o
                        })) {
                        if (Element.isElement(v)) {
                            if (!o && e.isVoid(v)) {
                                yield G.start(e, D);
                                continue
                            }
                            if (e.isInline(v)) continue;
                            if (G.hasInlines(e, v)) {
                                var g = eo.isAncestor(D, s.path) ? s : G.end(e, D),
                                    C = eo.isAncestor(D, u.path) ? u : G.start(e, D);
                                d = G.string(e, {
                                    anchor: C,
                                    focus: g
                                }, {
                                    voids: o
                                }), c = !0
                            }
                        }
                        if (Text.isText(v)) {
                            var y = eo.equals(D, l.path);
                            for (y ? (h = i ? l.offset : v.text.length - l.offset, p = l.offset) : (h = v.text.length, p = i ? h : 0), (y || c || "offset" === n) && (yield {
                                    path: D,
                                    offset: p
                                }, c = !1);;) {
                                if (0 === f) {
                                    if ("" === d) break;
                                    f = function(e, t, r) {
                                        if ("character" === t) return m(e, r);
                                        if ("word" === t) return b(e, r);
                                        if ("line" === t || "block" === t) return e.length;
                                        return 1
                                    }(d, n, i), d = A(d, f, i)[1]
                                }
                                if (p = i ? p - f : p + f, (h -= f) < 0) {
                                    f = -h;
                                    break
                                }
                                f = 0, yield {
                                    path: D,
                                    offset: p
                                }
                            }
                        }
                    }
                }
            },
            previous(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        mode: r = "lowest",
                        voids: n = !1
                    } = t,
                    {
                        match: i,
                        at: o = e.selection
                    } = t;
                if (!!o) {
                    var a = G.before(e, o, {
                        voids: n
                    });
                    if (a) {
                        var [, u] = G.first(e, []), s = [a.path, u];
                        if (eo.isPath(o) && 0 === o.length) throw Error("Cannot get the previous node from the root node!");
                        if (null == i) {
                            if (eo.isPath(o)) {
                                var [l] = G.parent(e, o);
                                i = e => l.children.includes(e)
                            } else i = () => !0
                        }
                        var [c] = G.nodes(e, {
                            reverse: !0,
                            at: s,
                            match: i,
                            mode: r,
                            voids: n
                        });
                        return c
                    }
                }
            },
            range: (e, t, r) => Range.isRange(t) && !r ? t : {
                anchor: G.start(e, t),
                focus: G.end(e, r || t)
            },
            rangeRef(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        affinity: n = "forward"
                    } = r,
                    i = {
                        current: t,
                        affinity: n,
                        unref() {
                            var {
                                current: t
                            } = i;
                            return G.rangeRefs(e).delete(i), i.current = null, t
                        }
                    };
                return G.rangeRefs(e).add(i), i
            },
            rangeRefs(e) {
                var t = p.get(e);
                return !t && (t = new Set, p.set(e, t)), t
            },
            removeMark(e, t) {
                e.removeMark(t)
            },
            setNormalizing(e, t) {
                d.set(e, t)
            },
            start: (e, t) => G.point(e, t, {
                edge: "start"
            }),
            string(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        voids: n = !1
                    } = r,
                    i = G.range(e, t),
                    [o, a] = Range.edges(i),
                    u = "";
                for (var [s, l] of G.nodes(e, {
                        at: i,
                        match: Text.isText,
                        voids: n
                    })) {
                    var c = s.text;
                    eo.equals(l, a.path) && (c = c.slice(0, a.offset)), eo.equals(l, o.path) && (c = c.slice(o.offset)), u += c
                }
                return u
            },
            unhangRange(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        voids: n = !1
                    } = r,
                    [i, o] = Range.edges(t);
                if (0 !== i.offset || 0 !== o.offset || Range.isCollapsed(t) || eo.hasPrevious(o.path)) return t;
                var a = G.above(e, {
                        at: o,
                        match: t => Element.isElement(t) && G.isBlock(e, t),
                        voids: n
                    }),
                    u = a ? a[1] : [],
                    s = {
                        anchor: G.start(e, i),
                        focus: o
                    },
                    l = !0;
                for (var [c, d] of G.nodes(e, {
                        at: s,
                        match: Text.isText,
                        reverse: !0,
                        voids: n
                    })) {
                    if (l) {
                        l = !1;
                        continue
                    }
                    if ("" !== c.text || eo.isBefore(d, u)) {
                        o = {
                            path: d,
                            offset: c.text.length
                        };
                        break
                    }
                }
                return {
                    anchor: i,
                    focus: o
                }
            },
            void(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return G.above(e, X(X({}, t), {}, {
                    match: t => Element.isElement(t) && G.isVoid(e, t)
                }))
            },
            withoutNormalizing(e, t) {
                var r = G.isNormalizing(e);
                G.setNormalizing(e, !1);
                try {
                    t()
                } finally {
                    G.setNormalizing(e, r)
                }
                G.normalize(e)
            }
        },
        Y = {
            isSpan: e => Array.isArray(e) && 2 === e.length && e.every(eo.isPath)
        },
        Z = ["children"],
        ee = ["text"],
        et = new WeakMap,
        Node = {
            ancestor(e, t) {
                var r = Node.get(e, t);
                if (Text.isText(r)) throw Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(ev.stringify(r)));
                return r
            },
            * ancestors(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                for (var n of eo.ancestors(t, r)) {
                    var i = [Node.ancestor(e, n), n];
                    yield i
                }
            },
            child(e, t) {
                if (Text.isText(e)) throw Error("Cannot get the child of a text node: ".concat(ev.stringify(e)));
                var r = e.children[t];
                if (null == r) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(ev.stringify(e)));
                return r
            },
            * children(e, t) {
                for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                        reverse: n = !1
                    } = r, i = Node.ancestor(e, t), {
                        children: o
                    } = i, a = n ? o.length - 1 : 0; n ? a >= 0 : a < o.length;) {
                    var u = Node.child(i, a),
                        s = t.concat(a);
                    yield [u, s], a = n ? a - 1 : a + 1
                }
            },
            common(e, t, r) {
                var n = eo.common(t, r);
                return [Node.get(e, n), n]
            },
            descendant(e, t) {
                var r = Node.get(e, t);
                if (G.isEditor(r)) throw Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(ev.stringify(r)));
                return r
            },
            * descendants(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                for (var [r, n] of Node.nodes(e, t)) 0 !== n.length && (yield [r, n])
            },
            * elements(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                for (var [r, n] of Node.nodes(e, t)) Element.isElement(r) && (yield [r, n])
            },
            extractProps(e) {
                if (Element.isAncestor(e)) {
                    var t = C(e, Z);
                    return t
                }
                var t = C(e, ee);
                return t
            },
            first(e, t) {
                for (var r = t.slice(), n = Node.get(e, r); n && !Text.isText(n) && 0 !== n.children.length;) {
                    ;
                    n = n.children[0], r.push(0)
                }
                return [n, r]
            },
            fragment(e, t) {
                if (Text.isText(e)) throw Error("Cannot get a fragment starting from a root text node: ".concat(ev.stringify(e)));
                return (0, a.produce)({
                    children: e.children
                }, e => {
                    var [r, n] = Range.edges(t);
                    for (var [, i] of Node.nodes(e, {
                            reverse: !0,
                            pass: e => {
                                var [, r] = e;
                                return !Range.includes(t, r)
                            }
                        })) {
                        if (!Range.includes(t, i)) {
                            var o = Node.parent(e, i),
                                a = i[i.length - 1];
                            o.children.splice(a, 1)
                        }
                        if (eo.equals(i, n.path)) {
                            var u = Node.leaf(e, i);
                            u.text = u.text.slice(0, n.offset)
                        }
                        if (eo.equals(i, r.path)) {
                            var s = Node.leaf(e, i);
                            s.text = s.text.slice(r.offset)
                        }
                    }
                    G.isEditor(e) && (e.selection = null)
                }).children
            },
            get(e, t) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (Text.isText(r) || !r.children[i]) throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(ev.stringify(e)));
                    r = r.children[i]
                }
                return r
            },
            has(e, t) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (Text.isText(r) || !r.children[i]) return !1;
                    r = r.children[i]
                }
                return !0
            },
            isNode: e => Text.isText(e) || Element.isElement(e) || G.isEditor(e),
            isNodeList(e) {
                if (!Array.isArray(e)) return !1;
                var t = et.get(e);
                if (void 0 !== t) return t;
                var r = e.every(e => Node.isNode(e));
                return et.set(e, r), r
            },
            last(e, t) {
                for (var r = t.slice(), n = Node.get(e, r); n && !Text.isText(n) && 0 !== n.children.length;) {
                    ;
                    var i = n.children.length - 1;
                    n = n.children[i], r.push(i)
                }
                return [n, r]
            },
            leaf(e, t) {
                var r = Node.get(e, t);
                if (!Text.isText(r)) throw Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(ev.stringify(r)));
                return r
            },
            * levels(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                for (var n of eo.levels(t, r)) {
                    var i = Node.get(e, n);
                    yield [i, n]
                }
            },
            matches: (e, t) => Element.isElement(e) && Element.isElementProps(t) && Element.matches(e, t) || Text.isText(e) && Text.isTextProps(t) && Text.matches(e, t),
            * nodes(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        pass: r,
                        reverse: n = !1
                    } = t, {
                        from: i = [],
                        to: o
                    } = t, a = new Set, u = [], s = e; !(o && (n ? eo.isBefore(u, o) : eo.isAfter(u, o)));) {
                    ;
                    if (!a.has(s) && (yield [s, u]), !a.has(s) && !Text.isText(s) && 0 !== s.children.length && (null == r || !1 === r([s, u]))) {
                        a.add(s);
                        var l = n ? s.children.length - 1 : 0;
                        eo.isAncestor(u, i) && (l = i[u.length]), u = u.concat(l), s = Node.get(e, u);
                        continue
                    }
                    if (0 === u.length) break;
                    if (!n) {
                        var c = eo.next(u);
                        if (Node.has(e, c)) {
                            u = c, s = Node.get(e, u);
                            continue
                        }
                    }
                    if (n && 0 !== u[u.length - 1]) {
                        u = eo.previous(u), s = Node.get(e, u);
                        continue
                    }
                    u = eo.parent(u), s = Node.get(e, u), a.add(s)
                }
            },
            parent(e, t) {
                var r = eo.parent(t),
                    n = Node.get(e, r);
                if (Text.isText(n)) throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
                return n
            },
            string: e => Text.isText(e) ? e.text : e.children.map(Node.string).join(""),
            * texts(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                for (var [r, n] of Node.nodes(e, t)) Text.isText(r) && (yield [r, n])
            }
        };

    function er(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function en(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? er(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var ei = {
            isNodeOperation: e => ei.isOperation(e) && e.type.endsWith("_node"),
            isOperation(e) {
                if (!(0, o.isPlainObject)(e)) return !1;
                switch (e.type) {
                    case "insert_node":
                    case "remove_node":
                        return eo.isPath(e.path) && Node.isNode(e.node);
                    case "insert_text":
                    case "remove_text":
                        return "number" == typeof e.offset && "string" == typeof e.text && eo.isPath(e.path);
                    case "merge_node":
                        return "number" == typeof e.position && eo.isPath(e.path) && (0, o.isPlainObject)(e.properties);
                    case "move_node":
                        return eo.isPath(e.path) && eo.isPath(e.newPath);
                    case "set_node":
                        return eo.isPath(e.path) && (0, o.isPlainObject)(e.properties) && (0, o.isPlainObject)(e.newProperties);
                    case "set_selection":
                        return null === e.properties && Range.isRange(e.newProperties) || null === e.newProperties && Range.isRange(e.properties) || (0, o.isPlainObject)(e.properties) && (0, o.isPlainObject)(e.newProperties);
                    case "split_node":
                        return eo.isPath(e.path) && "number" == typeof e.position && (0, o.isPlainObject)(e.properties);
                    default:
                        return !1
                }
            },
            isOperationList: e => Array.isArray(e) && e.every(e => ei.isOperation(e)),
            isSelectionOperation: e => ei.isOperation(e) && e.type.endsWith("_selection"),
            isTextOperation: e => ei.isOperation(e) && e.type.endsWith("_text"),
            inverse(e) {
                switch (e.type) {
                    case "insert_node":
                        return en(en({}, e), {}, {
                            type: "remove_node"
                        });
                    case "insert_text":
                        return en(en({}, e), {}, {
                            type: "remove_text"
                        });
                    case "merge_node":
                        return en(en({}, e), {}, {
                            type: "split_node",
                            path: eo.previous(e.path)
                        });
                    case "move_node":
                        var {
                            newPath: t, path: r
                        } = e;
                        if (eo.equals(t, r)) return e;
                        if (eo.isSibling(r, t)) return en(en({}, e), {}, {
                            path: t,
                            newPath: r
                        });
                        var n = eo.transform(r, e),
                            i = eo.transform(eo.next(r), e);
                        return en(en({}, e), {}, {
                            path: n,
                            newPath: i
                        });
                    case "remove_node":
                        return en(en({}, e), {}, {
                            type: "insert_node"
                        });
                    case "remove_text":
                        return en(en({}, e), {}, {
                            type: "insert_text"
                        });
                    case "set_node":
                        var {
                            properties: o, newProperties: a
                        } = e;
                        return en(en({}, e), {}, {
                            properties: a,
                            newProperties: o
                        });
                    case "set_selection":
                        var {
                            properties: u, newProperties: s
                        } = e;
                        if (null == u) return en(en({}, e), {}, {
                            properties: s,
                            newProperties: null
                        });
                        if (null == s) return en(en({}, e), {}, {
                            properties: null,
                            newProperties: u
                        });
                        else return en(en({}, e), {}, {
                            properties: s,
                            newProperties: u
                        });
                    case "split_node":
                        return en(en({}, e), {}, {
                            type: "merge_node",
                            path: eo.next(e.path)
                        })
                }
            }
        },
        eo = {
            ancestors(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        reverse: r = !1
                    } = t,
                    n = eo.levels(e, t);
                return n = r ? n.slice(1) : n.slice(0, -1)
            },
            common(e, t) {
                for (var r = [], n = 0; n < e.length && n < t.length; n++) {
                    var i = e[n];
                    if (i !== t[n]) break;
                    r.push(i)
                }
                return r
            },
            compare(e, t) {
                for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
                    if (e[n] < t[n]) return -1;
                    if (e[n] > t[n]) return 1
                }
                return 0
            },
            endsAfter(e, t) {
                var r = e.length - 1,
                    n = e.slice(0, r),
                    i = t.slice(0, r),
                    o = e[r],
                    a = t[r];
                return eo.equals(n, i) && o > a
            },
            endsAt(e, t) {
                var r = e.length,
                    n = e.slice(0, r),
                    i = t.slice(0, r);
                return eo.equals(n, i)
            },
            endsBefore(e, t) {
                var r = e.length - 1,
                    n = e.slice(0, r),
                    i = t.slice(0, r),
                    o = e[r],
                    a = t[r];
                return eo.equals(n, i) && o < a
            },
            equals: (e, t) => e.length === t.length && e.every((e, r) => e === t[r]),
            hasPrevious: e => e[e.length - 1] > 0,
            isAfter: (e, t) => 1 === eo.compare(e, t),
            isAncestor: (e, t) => e.length < t.length && 0 === eo.compare(e, t),
            isBefore: (e, t) => -1 === eo.compare(e, t),
            isChild: (e, t) => e.length === t.length + 1 && 0 === eo.compare(e, t),
            isCommon: (e, t) => e.length <= t.length && 0 === eo.compare(e, t),
            isDescendant: (e, t) => e.length > t.length && 0 === eo.compare(e, t),
            isParent: (e, t) => e.length + 1 === t.length && 0 === eo.compare(e, t),
            isPath: e => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
            isSibling(e, t) {
                if (e.length !== t.length) return !1;
                var r = e.slice(0, -1),
                    n = t.slice(0, -1);
                return e[e.length - 1] !== t[t.length - 1] && eo.equals(r, n)
            },
            levels(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        reverse: r = !1
                    } = t, n = [], i = 0; i <= e.length; i++) n.push(e.slice(0, i));
                return r && n.reverse(), n
            },
            next(e) {
                if (0 === e.length) throw Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
                var t = e[e.length - 1];
                return e.slice(0, -1).concat(t + 1)
            },
            operationCanTransformPath(e) {
                switch (e.type) {
                    case "insert_node":
                    case "remove_node":
                    case "merge_node":
                    case "split_node":
                    case "move_node":
                        return !0;
                    default:
                        return !1
                }
            },
            parent(e) {
                if (0 === e.length) throw Error("Cannot get the parent path of the root path [".concat(e, "]."));
                return e.slice(0, -1)
            },
            previous(e) {
                if (0 === e.length) throw Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
                var t = e[e.length - 1];
                if (t <= 0) throw Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
                return e.slice(0, -1).concat(t - 1)
            },
            relative(e, t) {
                if (!eo.isAncestor(t, e) && !eo.equals(e, t)) throw Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
                return e.slice(t.length)
            },
            transform(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!e) return null;
                var n = [...e],
                    {
                        affinity: i = "forward"
                    } = r;
                if (0 === e.length) return n;
                switch (t.type) {
                    case "insert_node":
                        var {
                            path: o
                        } = t;
                        (eo.equals(o, n) || eo.endsBefore(o, n) || eo.isAncestor(o, n)) && (n[o.length - 1] += 1);
                        break;
                    case "remove_node":
                        var {
                            path: a
                        } = t;
                        if (eo.equals(a, n) || eo.isAncestor(a, n)) return null;
                        eo.endsBefore(a, n) && (n[a.length - 1] -= 1);
                        break;
                    case "merge_node":
                        var {
                            path: u, position: s
                        } = t;
                        eo.equals(u, n) || eo.endsBefore(u, n) ? n[u.length - 1] -= 1 : eo.isAncestor(u, n) && (n[u.length - 1] -= 1, n[u.length] += s);
                        break;
                    case "split_node":
                        var {
                            path: l, position: c
                        } = t;
                        if (eo.equals(l, n)) {
                            if ("forward" === i) n[n.length - 1] += 1;
                            else if ("backward" !== i) return null
                        } else eo.endsBefore(l, n) ? n[l.length - 1] += 1 : eo.isAncestor(l, n) && e[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
                        break;
                    case "move_node":
                        var {
                            path: d, newPath: f
                        } = t;
                        if (eo.equals(d, f)) break;
                        if (eo.isAncestor(d, n) || eo.equals(d, n)) {
                            var h = f.slice();
                            return eo.endsBefore(d, f) && d.length < f.length && (h[d.length - 1] -= 1), h.concat(n.slice(d.length))
                        }
                        eo.isSibling(d, f) && (eo.isAncestor(f, n) || eo.equals(f, n)) ? eo.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : eo.endsBefore(f, n) || eo.equals(f, n) || eo.isAncestor(f, n) ? (eo.endsBefore(d, n) && (n[d.length - 1] -= 1), n[f.length - 1] += 1) : eo.endsBefore(d, n) && (eo.equals(f, n) && (n[f.length - 1] += 1), n[d.length - 1] -= 1)
                }
                return n
            }
        },
        ea = {
            transform(e, t) {
                var {
                    current: r,
                    affinity: n
                } = e;
                if (null != r) {
                    var i = eo.transform(r, t, {
                        affinity: n
                    });
                    e.current = i, null == i && e.unref()
                }
            }
        };

    function eu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function es(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eu(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eu(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var el = {
            compare(e, t) {
                var r = eo.compare(e.path, t.path);
                if (0 === r) return e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0;
                return r
            },
            isAfter: (e, t) => 1 === el.compare(e, t),
            isBefore: (e, t) => -1 === el.compare(e, t),
            equals: (e, t) => e.offset === t.offset && eo.equals(e.path, t.path),
            isPoint: e => (0, o.isPlainObject)(e) && "number" == typeof e.offset && eo.isPath(e.path),
            transform(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (0, a.produce)(e, e => {
                    if (null === e) return null;
                    var {
                        affinity: n = "forward"
                    } = r, {
                        path: i,
                        offset: o
                    } = e;
                    switch (t.type) {
                        case "insert_node":
                        case "move_node":
                            e.path = eo.transform(i, t, r);
                            break;
                        case "insert_text":
                            eo.equals(t.path, i) && (t.offset < o || t.offset === o && "forward" === n) && (e.offset += t.text.length);
                            break;
                        case "merge_node":
                            eo.equals(t.path, i) && (e.offset += t.position), e.path = eo.transform(i, t, r);
                            break;
                        case "remove_text":
                            eo.equals(t.path, i) && t.offset <= o && (e.offset -= Math.min(o - t.offset, t.text.length));
                            break;
                        case "remove_node":
                            if (eo.equals(t.path, i) || eo.isAncestor(t.path, i)) return null;
                            e.path = eo.transform(i, t, r);
                            break;
                        case "split_node":
                            if (eo.equals(t.path, i)) {
                                if (t.position === o && null == n) return null;
                                (t.position < o || t.position === o && "forward" === n) && (e.offset -= t.position, e.path = eo.transform(i, t, es(es({}, r), {}, {
                                    affinity: "forward"
                                })))
                            } else e.path = eo.transform(i, t, r)
                    }
                })
            }
        },
        ec = {
            transform(e, t) {
                var {
                    current: r,
                    affinity: n
                } = e;
                if (null != r) {
                    var i = el.transform(r, t, {
                        affinity: n
                    });
                    e.current = i, null == i && e.unref()
                }
            }
        },
        ed = ["anchor", "focus"];

    function ef(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }
    var Range = {
            edges(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        reverse: r = !1
                    } = t,
                    {
                        anchor: n,
                        focus: i
                    } = e;
                return Range.isBackward(e) === r ? [n, i] : [i, n]
            },
            end(e) {
                var [, t] = Range.edges(e);
                return t
            },
            equals: (e, t) => el.equals(e.anchor, t.anchor) && el.equals(e.focus, t.focus),
            includes(e, t) {
                if (Range.isRange(t)) {
                    if (Range.includes(e, t.anchor) || Range.includes(e, t.focus)) return !0;
                    var [r, n] = Range.edges(e), [i, o] = Range.edges(t);
                    return el.isBefore(r, i) && el.isAfter(n, o)
                }
                var [a, u] = Range.edges(e), s = !1, l = !1;
                return el.isPoint(t) ? (s = el.compare(t, a) >= 0, l = 0 >= el.compare(t, u)) : (s = eo.compare(t, a.path) >= 0, l = 0 >= eo.compare(t, u.path)), s && l
            },
            intersection(e, t) {
                var r = C(e, ed),
                    [n, i] = Range.edges(e),
                    [o, a] = Range.edges(t),
                    s = el.isBefore(n, o) ? o : n,
                    l = el.isBefore(i, a) ? i : a;
                return el.isBefore(l, s) ? null : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ef(Object(r), !0).forEach(function(t) {
                            u(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ef(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        })
                    }
                    return e
                }({
                    anchor: s,
                    focus: l
                }, r)
            },
            isBackward(e) {
                var {
                    anchor: t,
                    focus: r
                } = e;
                return el.isAfter(t, r)
            },
            isCollapsed(e) {
                var {
                    anchor: t,
                    focus: r
                } = e;
                return el.equals(t, r)
            },
            isExpanded: e => !Range.isCollapsed(e),
            isForward: e => !Range.isBackward(e),
            isRange: e => (0, o.isPlainObject)(e) && el.isPoint(e.anchor) && el.isPoint(e.focus),
            * points(e) {
                yield [e.anchor, "anchor"], yield [e.focus, "focus"]
            },
            start(e) {
                var [t] = Range.edges(e);
                return t
            },
            transform(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (0, a.produce)(e, e => {
                    if (null === e) return null;
                    var n, i, {
                        affinity: o = "inward"
                    } = r;
                    if ("inward" === o) {
                        var a = Range.isCollapsed(e);
                        Range.isForward(e) ? (n = "forward", i = a ? n : "backward") : (n = "backward", i = a ? n : "forward")
                    } else "outward" === o ? Range.isForward(e) ? (n = "backward", i = "forward") : (n = "forward", i = "backward") : (n = o, i = o);
                    var u = el.transform(e.anchor, t, {
                            affinity: n
                        }),
                        s = el.transform(e.focus, t, {
                            affinity: i
                        });
                    if (!u || !s) return null;
                    e.anchor = u, e.focus = s
                })
            }
        },
        eh = {
            transform(e, t) {
                var {
                    current: r,
                    affinity: n
                } = e;
                if (null != r) {
                    var i = Range.transform(r, t, {
                        affinity: n
                    });
                    e.current = i, null == i && e.unref()
                }
            }
        },
        ep = void 0,
        ev = {
            setScrubber(e) {
                ep = e
            },
            stringify: e => JSON.stringify(e, ep)
        },
        eD = (e, t) => {
            for (var r in e) {
                var n = e[r],
                    i = t[r];
                if ((0, o.isPlainObject)(n) && (0, o.isPlainObject)(i)) {
                    if (!eD(n, i)) return !1
                } else if (Array.isArray(n) && Array.isArray(i)) {
                    if (n.length !== i.length) return !1;
                    for (var a = 0; a < n.length; a++)
                        if (n[a] !== i[a]) return !1
                } else if (n !== i) return !1
            }
            for (var u in t)
                if (void 0 === e[u] && void 0 !== t[u]) return !1;
            return !0
        },
        eg = ["text"],
        eC = ["anchor", "focus"];

    function em(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function ey(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? em(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var Text = {
        equals(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                {
                    loose: n = !1
                } = r;

            function i(e) {
                return C(e, eg)
            }
            return eD(n ? C(e, eg) : e, n ? C(t, eg) : t)
        },
        isText: e => (0, o.isPlainObject)(e) && "string" == typeof e.text,
        isTextList: e => Array.isArray(e) && e.every(e => Text.isText(e)),
        isTextProps: e => void 0 !== e.text,
        matches(e, t) {
            for (var r in t)
                if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r])) return !1;
            return !0
        },
        decorations(e, t) {
            var r = [ey({}, e)];
            for (var n of t) {
                var i = C(n, eC),
                    [o, a] = Range.edges(n),
                    u = [],
                    s = 0,
                    l = o.offset,
                    c = a.offset;
                for (var d of r) {
                    var {
                        length: f
                    } = d.text, h = s;
                    if (s += f, l <= h && s <= c) {
                        Object.assign(d, i), u.push(d);
                        continue
                    }
                    if (l !== c && (l === s || c === h) || l > s || c < h || c === h && 0 !== h) {
                        u.push(d);
                        continue
                    }
                    var p = d,
                        v = void 0,
                        D = void 0;
                    if (c < s) {
                        var g = c - h;
                        D = ey(ey({}, p), {}, {
                            text: p.text.slice(g)
                        }), p = ey(ey({}, p), {}, {
                            text: p.text.slice(0, g)
                        })
                    }
                    if (l > h) {
                        var m = l - h;
                        v = ey(ey({}, p), {}, {
                            text: p.text.slice(0, m)
                        }), p = ey(ey({}, p), {}, {
                            text: p.text.slice(m)
                        })
                    }
                    Object.assign(p, i), v && u.push(v), u.push(p), D && u.push(D)
                }
                r = u
            }
            return r
        }
    };

    function eE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function eB(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eE(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eE(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eb = (e, t, r) => {
            switch (r.type) {
                case "insert_node":
                    var {
                        path: n, node: i
                    } = r, o = Node.parent(e, n), a = n[n.length - 1];
                    if (a > o.children.length) throw Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
                    if (o.children.splice(a, 0, i), t)
                        for (var [u, s] of Range.points(t)) t[s] = el.transform(u, r);
                    break;
                case "insert_text":
                    var {
                        path: l, offset: c, text: d
                    } = r;
                    if (0 === d.length) break;
                    var f = Node.leaf(e, l),
                        h = f.text.slice(0, c),
                        p = f.text.slice(c);
                    if (f.text = h + d + p, t)
                        for (var [v, D] of Range.points(t)) t[D] = el.transform(v, r);
                    break;
                case "merge_node":
                    var {
                        path: g
                    } = r, C = Node.get(e, g), m = eo.previous(g), y = Node.get(e, m), E = Node.parent(e, g), B = g[g.length - 1];
                    if (Text.isText(C) && Text.isText(y)) y.text += C.text;
                    else if (Text.isText(C) || Text.isText(y)) throw Error('Cannot apply a "merge_node" operation at path ['.concat(g, "] to nodes of different interfaces: ").concat(ev.stringify(C), " ").concat(ev.stringify(y)));
                    else y.children.push(...C.children);
                    if (E.children.splice(B, 1), t)
                        for (var [b, A] of Range.points(t)) t[A] = el.transform(b, r);
                    break;
                case "move_node":
                    var {
                        path: w, newPath: F
                    } = r;
                    if (eo.isAncestor(w, F)) throw Error("Cannot move a path [".concat(w, "] to new path [").concat(F, "] because the destination is inside itself."));
                    var _ = Node.get(e, w),
                        O = Node.parent(e, w),
                        x = w[w.length - 1];
                    O.children.splice(x, 1);
                    var k = eo.transform(w, r),
                        P = Node.get(e, eo.parent(k)),
                        S = k[k.length - 1];
                    if (P.children.splice(S, 0, _), t)
                        for (var [T, j] of Range.points(t)) t[j] = el.transform(T, r);
                    break;
                case "remove_node":
                    var {
                        path: M
                    } = r, R = M[M.length - 1];
                    if (Node.parent(e, M).children.splice(R, 1), t)
                        for (var [I, L] of Range.points(t)) {
                            var N = el.transform(I, r);
                            if (null != t && null != N) t[L] = N;
                            else {
                                var z = void 0,
                                    W = void 0;
                                for (var [q, V] of Node.texts(e))
                                    if (-1 === eo.compare(V, M)) z = [q, V];
                                    else {
                                        W = [q, V];
                                        break
                                    } var U = !1;
                                z && W && (U = eo.equals(W[1], M) ? !eo.hasPrevious(W[1]) : eo.common(z[1], M).length < eo.common(W[1], M).length), z && !U ? (I.path = z[1], I.offset = z[0].text.length) : W ? (I.path = W[1], I.offset = 0) : t = null
                            }
                        }
                    break;
                case "remove_text":
                    var {
                        path: H, offset: J, text: K
                    } = r;
                    if (0 === K.length) break;
                    var $ = Node.leaf(e, H),
                        X = $.text.slice(0, J),
                        Q = $.text.slice(J + K.length);
                    if ($.text = X + Q, t)
                        for (var [G, Y] of Range.points(t)) t[Y] = el.transform(G, r);
                    break;
                case "set_node":
                    var {
                        path: Z, properties: ee, newProperties: et
                    } = r;
                    if (0 === Z.length) throw Error("Cannot set properties on the root node!");
                    var er = Node.get(e, Z);
                    for (var en in et) {
                        if ("children" === en || "text" === en) throw Error('Cannot set the "'.concat(en, '" property of nodes!'));
                        var ei = et[en];
                        null == ei ? delete er[en] : er[en] = ei
                    }
                    for (var ea in ee) !et.hasOwnProperty(ea) && delete er[ea];
                    break;
                case "set_selection":
                    var {
                        newProperties: eu
                    } = r;
                    if (null == eu) t = eu;
                    else {
                        if (null == t) {
                            if (!Range.isRange(eu)) throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(ev.stringify(eu), " when there is no current selection."));
                            t = eB({}, eu)
                        }
                        for (var es in eu) {
                            var ec = eu[es];
                            if (null == ec) {
                                if ("anchor" === es || "focus" === es) throw Error('Cannot remove the "'.concat(es, '" selection property'));
                                delete t[es]
                            } else t[es] = ec
                        }
                    }
                    break;
                case "split_node":
                    var ed, {
                        path: ef,
                        position: eh,
                        properties: ep
                    } = r;
                    if (0 === ef.length) throw Error('Cannot apply a "split_node" operation at path ['.concat(ef, "] because the root node cannot be split."));
                    var eD = Node.get(e, ef),
                        eg = Node.parent(e, ef),
                        eC = ef[ef.length - 1];
                    if (Text.isText(eD)) {
                        var em = eD.text.slice(0, eh),
                            ey = eD.text.slice(eh);
                        eD.text = em, ed = eB(eB({}, ep), {}, {
                            text: ey
                        })
                    } else {
                        var eE = eD.children.slice(0, eh),
                            eb = eD.children.slice(eh);
                        eD.children = eE, ed = eB(eB({}, ep), {}, {
                            children: eb
                        })
                    }
                    if (eg.children.splice(eC + 1, 0, ed), t)
                        for (var [eA, ew] of Range.points(t)) t[ew] = el.transform(eA, r)
            }
            return t
        },
        eA = ["text"],
        ew = ["children"];

    function eF(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function e_(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eF(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eF(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eO = (e, t) => {
            if (Element.isElement(t)) return !!G.isVoid(e, t) || 1 === t.children.length && eO(e, t.children[0]);
            if (G.isEditor(t)) return !1;
            return !0
        },
        ex = (e, t) => {
            if (Range.isCollapsed(t)) return t.anchor;
            var [, r] = Range.edges(t), n = G.pointRef(e, r);
            return eM.delete(e, {
                at: t
            }), n.unref()
        },
        ek = (e, t) => {
            var [r] = G.node(e, t);
            return e => e === r
        };

    function eP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function eS(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eP(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eP(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function eT(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function ej(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eT(Object(r), !0).forEach(function(t) {
                u(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eT(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eM = ej(ej(ej(ej({}, {
        transform(e, t) {
            e.children = (0, a.createDraft)(e.children);
            var r = e.selection && (0, a.createDraft)(e.selection);
            try {
                r = eb(e, r, t)
            } finally {
                e.children = (0, a.finishDraft)(e.children), r ? e.selection = (0, a.isDraft)(r) ? (0, a.finishDraft)(r) : r : e.selection = null
            }
        }
    }), {
        insertNodes(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            G.withoutNormalizing(e, () => {
                var {
                    hanging: n = !1,
                    voids: i = !1,
                    mode: o = "lowest"
                } = r, {
                    at: a,
                    match: u,
                    select: s
                } = r;
                if (Node.isNode(t) && (t = [t]), 0 !== t.length) {
                    var [l] = t;
                    if (!a && (a = e.selection ? e.selection : e.children.length > 0 ? G.end(e, []) : [0], s = !0), null == s && (s = !1), Range.isRange(a)) {
                        if (!n && (a = G.unhangRange(e, a, {
                                voids: i
                            })), Range.isCollapsed(a)) a = a.anchor;
                        else {
                            var [, c] = Range.edges(a), d = G.pointRef(e, c);
                            eM.delete(e, {
                                at: a
                            }), a = d.unref()
                        }
                    }
                    if (el.isPoint(a)) {
                        null == u && (u = Text.isText(l) ? e => Text.isText(e) : e.isInline(l) ? t => Text.isText(t) || G.isInline(e, t) : t => Element.isElement(t) && G.isBlock(e, t));
                        var [f] = G.nodes(e, {
                            at: a.path,
                            match: u,
                            mode: o,
                            voids: i
                        });
                        if (!f) return;
                        var [, h] = f, p = G.pathRef(e, h), v = G.isEnd(e, a, h);
                        eM.splitNodes(e, {
                            at: a,
                            match: u,
                            mode: o,
                            voids: i
                        });
                        var D = p.unref();
                        a = v ? eo.next(D) : D
                    }
                    var g = eo.parent(a),
                        C = a[a.length - 1];
                    if (!(!i && G.void(e, {
                            at: g
                        }))) {
                        for (var m of t) {
                            var y = g.concat(C);
                            C++, e.apply({
                                type: "insert_node",
                                path: y,
                                node: m
                            }), a = eo.next(a)
                        }
                        if (a = eo.previous(a), s) {
                            var E = G.end(e, a);
                            E && eM.select(e, E)
                        }
                    }
                }
            })
        },
        liftNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            G.withoutNormalizing(e, () => {
                var {
                    at: r = e.selection,
                    mode: n = "lowest",
                    voids: i = !1
                } = t, {
                    match: o
                } = t;
                if (null == o && (o = eo.isPath(r) ? ek(e, r) : t => Element.isElement(t) && G.isBlock(e, t)), r)
                    for (var a of Array.from(G.nodes(e, {
                            at: r,
                            match: o,
                            mode: n,
                            voids: i
                        }), t => {
                            var [, r] = t;
                            return G.pathRef(e, r)
                        })) {
                        var u = a.unref();
                        if (u.length < 2) throw Error("Cannot lift node at a path [".concat(u, "] because it has a depth of less than `2`."));
                        var [s, l] = G.node(e, eo.parent(u)), c = u[u.length - 1], {
                            length: d
                        } = s.children;
                        if (1 === d) {
                            var f = eo.next(l);
                            eM.moveNodes(e, {
                                at: u,
                                to: f,
                                voids: i
                            }), eM.removeNodes(e, {
                                at: l,
                                voids: i
                            })
                        } else if (0 === c) eM.moveNodes(e, {
                            at: u,
                            to: l,
                            voids: i
                        });
                        else if (c === d - 1) {
                            var h = eo.next(l);
                            eM.moveNodes(e, {
                                at: u,
                                to: h,
                                voids: i
                            })
                        } else {
                            var p = eo.next(u),
                                v = eo.next(l);
                            eM.splitNodes(e, {
                                at: p,
                                voids: i
                            }), eM.moveNodes(e, {
                                at: u,
                                to: v,
                                voids: i
                            })
                        }
                    }
            })
        },
        mergeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            G.withoutNormalizing(e, () => {
                var r, n, {
                        match: i,
                        at: o = e.selection
                    } = t,
                    {
                        hanging: a = !1,
                        voids: u = !1,
                        mode: s = "lowest"
                    } = t;
                if (!o) return;
                if (null == i) {
                    if (eo.isPath(o)) {
                        var [l] = G.parent(e, o);
                        i = e => l.children.includes(e)
                    } else i = t => Element.isElement(t) && G.isBlock(e, t)
                }
                if (!a && Range.isRange(o) && (o = G.unhangRange(e, o, {
                        voids: u
                    })), Range.isRange(o)) {
                    if (Range.isCollapsed(o)) o = o.anchor;
                    else {
                        var [, c] = Range.edges(o), d = G.pointRef(e, c);
                        eM.delete(e, {
                            at: o
                        }), o = d.unref(), null == t.at && eM.select(e, o)
                    }
                }
                var [f] = G.nodes(e, {
                    at: o,
                    match: i,
                    voids: u,
                    mode: s
                }), h = G.previous(e, {
                    at: o,
                    match: i,
                    voids: u,
                    mode: s
                });
                if (!!f && !!h) {
                    var [p, v] = f, [D, g] = h;
                    if (0 !== v.length && 0 !== g.length) {
                        var m = eo.next(g),
                            y = eo.common(v, g),
                            E = eo.isSibling(v, g),
                            B = Array.from(G.levels(e, {
                                at: v
                            }), e => {
                                var [t] = e;
                                return t
                            }).slice(y.length).slice(0, -1),
                            b = G.above(e, {
                                at: v,
                                mode: "highest",
                                match: t => B.includes(t) && eO(e, t)
                            }),
                            A = b && G.pathRef(e, b[1]);
                        if (Text.isText(p) && Text.isText(D)) {
                            var w = C(p, eA);
                            n = D.text.length, r = w
                        } else if (Element.isElement(p) && Element.isElement(D)) {
                            var w = C(p, ew);
                            n = D.children.length, r = w
                        } else throw Error("Cannot merge the node at path [".concat(v, "] with the previous sibling because it is not the same kind: ").concat(ev.stringify(p), " ").concat(ev.stringify(D)));
                        !E && eM.moveNodes(e, {
                            at: v,
                            to: m,
                            voids: u
                        }), A && eM.removeNodes(e, {
                            at: A.current,
                            voids: u
                        }), Element.isElement(D) && G.isEmpty(e, D) || Text.isText(D) && "" === D.text && 0 !== g[g.length - 1] ? eM.removeNodes(e, {
                            at: g,
                            voids: u
                        }) : e.apply({
                            type: "merge_node",
                            path: m,
                            position: n,
                            properties: r
                        }), A && A.unref()
                    }
                }
            })
        },
        moveNodes(e, t) {
            G.withoutNormalizing(e, () => {
                var {
                    to: r,
                    at: n = e.selection,
                    mode: i = "lowest",
                    voids: o = !1
                } = t, {
                    match: a
                } = t;
                if (n) {
                    null == a && (a = eo.isPath(n) ? ek(e, n) : t => Element.isElement(t) && G.isBlock(e, t));
                    var u = G.pathRef(e, r);
                    for (var s of Array.from(G.nodes(e, {
                            at: n,
                            match: a,
                            mode: i,
                            voids: o
                        }), t => {
                            var [, r] = t;
                            return G.pathRef(e, r)
                        })) {
                        var l = s.unref(),
                            c = u.current;
                        0 !== l.length && e.apply({
                            type: "move_node",
                            path: l,
                            newPath: c
                        }), u.current && eo.isSibling(c, l) && eo.isAfter(c, l) && (u.current = eo.next(u.current))
                    }
                    u.unref()
                }
            })
        },
        removeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            G.withoutNormalizing(e, () => {
                var {
                    hanging: r = !1,
                    voids: n = !1,
                    mode: i = "lowest"
                } = t, {
                    at: o = e.selection,
                    match: a
                } = t;
                if (o)
                    for (var u of (null == a && (a = eo.isPath(o) ? ek(e, o) : t => Element.isElement(t) && G.isBlock(e, t)), !r && Range.isRange(o) && (o = G.unhangRange(e, o, {
                            voids: n
                        })), Array.from(G.nodes(e, {
                            at: o,
                            match: a,
                            mode: i,
                            voids: n
                        }), t => {
                            var [, r] = t;
                            return G.pathRef(e, r)
                        }))) {
                        var s = u.unref();
                        if (s) {
                            var [l] = G.node(e, s);
                            e.apply({
                                type: "remove_node",
                                path: s,
                                node: l
                            })
                        }
                    }
            })
        },
        setNodes(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            G.withoutNormalizing(e, () => {
                var {
                    match: n,
                    at: i = e.selection,
                    compare: o,
                    merge: a
                } = r, {
                    hanging: u = !1,
                    mode: s = "lowest",
                    split: l = !1,
                    voids: c = !1
                } = r;
                if (i) {
                    if (null == n && (n = eo.isPath(i) ? ek(e, i) : t => Element.isElement(t) && G.isBlock(e, t)), !u && Range.isRange(i) && (i = G.unhangRange(e, i, {
                            voids: c
                        })), l && Range.isRange(i)) {
                        if (Range.isCollapsed(i) && G.leaf(e, i.anchor)[0].text.length > 0) return;
                        var d = G.rangeRef(e, i, {
                                affinity: "inward"
                            }),
                            [f, h] = Range.edges(i),
                            p = "lowest" === s ? "lowest" : "highest",
                            v = G.isEnd(e, h, h.path);
                        eM.splitNodes(e, {
                            at: h,
                            match: n,
                            mode: p,
                            voids: c,
                            always: !v
                        });
                        var D = G.isStart(e, f, f.path);
                        eM.splitNodes(e, {
                            at: f,
                            match: n,
                            mode: p,
                            voids: c,
                            always: !D
                        }), i = d.unref(), null == r.at && eM.select(e, i)
                    }
                    for (var [g, C] of(!o && (o = (e, t) => e !== t), G.nodes(e, {
                            at: i,
                            match: n,
                            mode: s,
                            voids: c
                        }))) {
                        var m = {},
                            y = {};
                        if (0 !== C.length) {
                            var E = !1;
                            for (var B in t) "children" !== B && "text" !== B && o(t[B], g[B]) && (E = !0, g.hasOwnProperty(B) && (m[B] = g[B]), a ? null != t[B] && (y[B] = a(g[B], t[B])) : null != t[B] && (y[B] = t[B]));
                            E && e.apply({
                                type: "set_node",
                                path: C,
                                properties: m,
                                newProperties: y
                            })
                        }
                    }
                }
            })
        },
        splitNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            G.withoutNormalizing(e, () => {
                var r, n, {
                        mode: i = "lowest",
                        voids: o = !1
                    } = t,
                    {
                        match: a,
                        at: u = e.selection,
                        height: s = 0,
                        always: l = !1
                    } = t;
                if (null == a && (a = t => Element.isElement(t) && G.isBlock(e, t)), Range.isRange(u) && (u = ex(e, u)), eo.isPath(u)) {
                    var c = u,
                        d = G.point(e, c),
                        [f] = G.parent(e, c);
                    a = e => e === f, s = d.path.length - c.length + 1, u = d, l = !0
                }
                if (u) {
                    var h = G.pointRef(e, u, {
                        affinity: "backward"
                    });
                    try {
                        var [p] = G.nodes(e, {
                            at: u,
                            match: a,
                            mode: i,
                            voids: o
                        });
                        if (!p) return;
                        var v = G.void(e, {
                            at: u,
                            mode: "highest"
                        });
                        if (!o && v) {
                            var [D, g] = v;
                            if (Element.isElement(D) && e.isInline(D)) {
                                var C = G.after(e, g);
                                if (!C) {
                                    var m = eo.next(g);
                                    eM.insertNodes(e, {
                                        text: ""
                                    }, {
                                        at: m,
                                        voids: o
                                    }), C = G.point(e, m)
                                }
                                u = C, l = !0
                            }
                            s = u.path.length - g.length + 1, l = !0
                        }
                        r = G.pointRef(e, u);
                        var y = u.path.length - s,
                            [, E] = p,
                            B = u.path.slice(0, y),
                            b = 0 === s ? u.offset : u.path[y] + 0;
                        for (var [A, w] of G.levels(e, {
                                at: B,
                                reverse: !0,
                                voids: o
                            })) {
                            var F = !1;
                            if (w.length < E.length || 0 === w.length || !o && Element.isElement(A) && G.isVoid(e, A)) break;
                            var _ = h.current,
                                O = G.isEnd(e, _, w);
                            if (l || !h || !G.isEdge(e, _, w)) {
                                F = !0;
                                var x = Node.extractProps(A);
                                e.apply({
                                    type: "split_node",
                                    path: w,
                                    position: b,
                                    properties: x
                                })
                            }
                            b = w[w.length - 1] + (F || O ? 1 : 0)
                        }
                        if (null == t.at) {
                            var k = r.current || G.end(e, []);
                            eM.select(e, k)
                        }
                    } finally {
                        h.unref(), null === (n = r) || void 0 === n || n.unref()
                    }
                }
            })
        },
        unsetNodes(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            !Array.isArray(t) && (t = [t]);
            var n = {};
            for (var i of t) n[i] = null;
            eM.setNodes(e, n, r)
        },
        unwrapNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            G.withoutNormalizing(e, () => {
                var {
                    mode: r = "lowest",
                    split: n = !1,
                    voids: i = !1
                } = t, {
                    at: o = e.selection,
                    match: a
                } = t;
                if (o) {
                    null == a && (a = eo.isPath(o) ? ek(e, o) : t => Element.isElement(t) && G.isBlock(e, t)), eo.isPath(o) && (o = G.range(e, o));
                    var u = Range.isRange(o) ? G.rangeRef(e, o) : null,
                        s = Array.from(G.nodes(e, {
                            at: o,
                            match: a,
                            mode: r,
                            voids: i
                        }), t => {
                            var [, r] = t;
                            return G.pathRef(e, r)
                        }).reverse();
                    for (var l of s) ! function(t) {
                        var r = t.unref(),
                            [o] = G.node(e, r),
                            a = G.range(e, r);
                        n && u && (a = Range.intersection(u.current, a)), eM.liftNodes(e, {
                            at: a,
                            match: e => Element.isAncestor(o) && o.children.includes(e),
                            voids: i
                        })
                    }(l);
                    u && u.unref()
                }
            })
        },
        wrapNodes(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            G.withoutNormalizing(e, () => {
                var {
                    mode: n = "lowest",
                    split: i = !1,
                    voids: o = !1
                } = r, {
                    match: a,
                    at: u = e.selection
                } = r;
                if (u) {
                    if (null == a && (a = eo.isPath(u) ? ek(e, u) : e.isInline(t) ? t => Element.isElement(t) && G.isInline(e, t) || Text.isText(t) : t => Element.isElement(t) && G.isBlock(e, t)), i && Range.isRange(u)) {
                        var [s, l] = Range.edges(u), c = G.rangeRef(e, u, {
                            affinity: "inward"
                        });
                        eM.splitNodes(e, {
                            at: l,
                            match: a,
                            voids: o
                        }), eM.splitNodes(e, {
                            at: s,
                            match: a,
                            voids: o
                        }), u = c.unref(), null == r.at && eM.select(e, u)
                    }
                    for (var [, d] of Array.from(G.nodes(e, {
                            at: u,
                            match: e.isInline(t) ? t => Element.isElement(t) && G.isBlock(e, t) : e => G.isEditor(e),
                            mode: "lowest",
                            voids: o
                        }))) {
                        var f = Range.isRange(u) ? Range.intersection(u, G.range(e, d)) : u;
                        if (f) {
                            var h = Array.from(G.nodes(e, {
                                at: f,
                                match: a,
                                mode: n,
                                voids: o
                            }));
                            if (h.length > 0 && "continue" === function() {
                                    var [r] = h, n = h[h.length - 1], [, i] = r, [, a] = n;
                                    if (0 === i.length && 0 === a.length) return "continue";
                                    var u = eo.equals(i, a) ? eo.parent(i) : eo.common(i, a),
                                        s = G.range(e, i, a),
                                        [l] = G.node(e, u),
                                        c = u.length + 1,
                                        d = eo.next(a.slice(0, c)),
                                        f = e_(e_({}, t), {}, {
                                            children: []
                                        });
                                    eM.insertNodes(e, f, {
                                        at: d,
                                        voids: o
                                    }), eM.moveNodes(e, {
                                        at: s,
                                        match: e => Element.isAncestor(l) && l.children.includes(e),
                                        to: d.concat(0),
                                        voids: o
                                    })
                                }()) continue
                        }
                    }
                }
            })
        }
    }), {
        collapse(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                {
                    edge: r = "anchor"
                } = t,
                {
                    selection: n
                } = e;
            if (!!n) {
                if ("anchor" === r) eM.select(e, n.anchor);
                else if ("focus" === r) eM.select(e, n.focus);
                else if ("start" === r) {
                    var [i] = Range.edges(n);
                    eM.select(e, i)
                } else if ("end" === r) {
                    var [, o] = Range.edges(n);
                    eM.select(e, o)
                }
            }
        },
        deselect(e) {
            var {
                selection: t
            } = e;
            t && e.apply({
                type: "set_selection",
                properties: t,
                newProperties: null
            })
        },
        move(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                {
                    selection: r
                } = e,
                {
                    distance: n = 1,
                    unit: i = "character",
                    reverse: o = !1
                } = t,
                {
                    edge: a = null
                } = t;
            if (r) {
                "start" === a && (a = Range.isBackward(r) ? "focus" : "anchor"), "end" === a && (a = Range.isBackward(r) ? "anchor" : "focus");
                var {
                    anchor: u,
                    focus: s
                } = r, l = {
                    distance: n,
                    unit: i
                }, c = {};
                if (null == a || "anchor" === a) {
                    var d = o ? G.before(e, u, l) : G.after(e, u, l);
                    d && (c.anchor = d)
                }
                if (null == a || "focus" === a) {
                    var f = o ? G.before(e, s, l) : G.after(e, s, l);
                    f && (c.focus = f)
                }
                eM.setSelection(e, c)
            }
        },
        select(e, t) {
            var {
                selection: r
            } = e;
            if (t = G.range(e, t), r) {
                eM.setSelection(e, t);
                return
            }
            if (!Range.isRange(t)) throw Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(ev.stringify(t)));
            e.apply({
                type: "set_selection",
                properties: r,
                newProperties: t
            })
        },
        setPoint(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                {
                    selection: n
                } = e,
                {
                    edge: i = "both"
                } = r;
            if (n) {
                "start" === i && (i = Range.isBackward(n) ? "focus" : "anchor"), "end" === i && (i = Range.isBackward(n) ? "anchor" : "focus");
                var {
                    anchor: o,
                    focus: a
                } = n, u = "anchor" === i ? o : a;
                eM.setSelection(e, {
                    ["anchor" === i ? "anchor" : "focus"]: eS(eS({}, u), t)
                })
            }
        },
        setSelection(e, t) {
            var {
                selection: r
            } = e, n = {}, i = {};
            if (r) {
                for (var o in t)("anchor" === o && null != t.anchor && !el.equals(t.anchor, r.anchor) || "focus" === o && null != t.focus && !el.equals(t.focus, r.focus) || "anchor" !== o && "focus" !== o && t[o] !== r[o]) && (n[o] = r[o], i[o] = t[o]);
                Object.keys(n).length > 0 && e.apply({
                    type: "set_selection",
                    properties: n,
                    newProperties: i
                })
            }
        }
    }), {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            G.withoutNormalizing(e, () => {
                var r, {
                        reverse: n = !1,
                        unit: i = "character",
                        distance: o = 1,
                        voids: a = !1
                    } = t,
                    {
                        at: u = e.selection,
                        hanging: s = !1
                    } = t;
                if (!!u) {
                    var l = !1;
                    if (Range.isRange(u) && Range.isCollapsed(u) && (l = !0, u = u.anchor), el.isPoint(u)) {
                        var c = G.void(e, {
                            at: u,
                            mode: "highest"
                        });
                        if (!a && c) {
                            var [, d] = c;
                            u = d
                        } else {
                            var f = {
                                    unit: i,
                                    distance: o
                                },
                                h = n ? G.before(e, u, f) || G.start(e, []) : G.after(e, u, f) || G.end(e, []);
                            u = {
                                anchor: u,
                                focus: h
                            }, s = !0
                        }
                    }
                    if (eo.isPath(u)) {
                        eM.removeNodes(e, {
                            at: u,
                            voids: a
                        });
                        return
                    }
                    if (!Range.isCollapsed(u)) {
                        if (!s) {
                            var [, p] = Range.edges(u), v = G.end(e, []);
                            !el.equals(p, v) && (u = G.unhangRange(e, u, {
                                voids: a
                            }))
                        }
                        var [D, g] = Range.edges(u), C = G.above(e, {
                            match: t => Element.isElement(t) && G.isBlock(e, t),
                            at: D,
                            voids: a
                        }), m = G.above(e, {
                            match: t => Element.isElement(t) && G.isBlock(e, t),
                            at: g,
                            voids: a
                        }), y = C && m && !eo.equals(C[1], m[1]), E = eo.equals(D.path, g.path), B = a ? null : G.void(e, {
                            at: D,
                            mode: "highest"
                        }), b = a ? null : G.void(e, {
                            at: g,
                            mode: "highest"
                        });
                        if (B) {
                            var A = G.before(e, D);
                            A && C && eo.isAncestor(C[1], A.path) && (D = A)
                        }
                        if (b) {
                            var w = G.after(e, g);
                            w && m && eo.isAncestor(m[1], w.path) && (g = w)
                        }
                        var F = [];
                        for (var _ of G.nodes(e, {
                                at: u,
                                voids: a
                            })) {
                            var [O, x] = _;
                            (!r || 0 !== eo.compare(x, r)) && (!a && Element.isElement(O) && G.isVoid(e, O) || !eo.isCommon(x, D.path) && !eo.isCommon(x, g.path)) && (F.push(_), r = x)
                        }
                        var k = Array.from(F, t => {
                                var [, r] = t;
                                return G.pathRef(e, r)
                            }),
                            P = G.pointRef(e, D),
                            S = G.pointRef(e, g),
                            T = "";
                        if (!E && !B) {
                            var j = P.current,
                                [M] = G.leaf(e, j),
                                {
                                    path: R
                                } = j,
                                {
                                    offset: I
                                } = D,
                                L = M.text.slice(I);
                            L.length > 0 && (e.apply({
                                type: "remove_text",
                                path: R,
                                offset: I,
                                text: L
                            }), T = L)
                        }
                        if (k.reverse().map(e => e.unref()).filter(e => null !== e).forEach(t => eM.removeNodes(e, {
                                at: t,
                                voids: a
                            })), !b) {
                            var N = S.current,
                                [z] = G.leaf(e, N),
                                {
                                    path: W
                                } = N,
                                q = E ? D.offset : 0,
                                V = z.text.slice(q, g.offset);
                            V.length > 0 && (e.apply({
                                type: "remove_text",
                                path: W,
                                offset: q,
                                text: V
                            }), T = V)
                        }!E && y && S.current && P.current && eM.mergeNodes(e, {
                            at: S.current,
                            hanging: !0,
                            voids: a
                        }), l && n && "character" === i && T.length > 1 && T.match(/[\u0E00-\u0E7F]+/) && eM.insertText(e, T.slice(0, T.length - o));
                        var U = P.unref(),
                            H = S.unref(),
                            J = n ? U || H : H || U;
                        null == t.at && J && eM.select(e, J)
                    }
                }
            })
        },
        insertFragment(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            G.withoutNormalizing(e, () => {
                var n, {
                        hanging: i = !1,
                        voids: o = !1
                    } = r,
                    {
                        at: a = e.selection
                    } = r;
                if (!t.length) return;
                if (!!a) {
                    if (Range.isRange(a)) {
                        if (!i && (a = G.unhangRange(e, a, {
                                voids: o
                            })), Range.isCollapsed(a)) a = a.anchor;
                        else {
                            var [, u] = Range.edges(a);
                            if (!o && G.void(e, {
                                    at: u
                                })) return;
                            var s = G.pointRef(e, u);
                            eM.delete(e, {
                                at: a
                            }), a = s.unref()
                        }
                    } else eo.isPath(a) && (a = G.start(e, a));
                    if (!(!o && G.void(e, {
                            at: a
                        }))) {
                        var l = G.above(e, {
                            at: a,
                            match: t => Element.isElement(t) && G.isInline(e, t),
                            mode: "highest",
                            voids: o
                        });
                        if (l) {
                            var [, c] = l;
                            G.isEnd(e, a, c) ? a = G.after(e, c) : G.isStart(e, a, c) && (a = G.before(e, c))
                        }
                        var [, d] = G.above(e, {
                            match: t => Element.isElement(t) && G.isBlock(e, t),
                            at: a,
                            voids: o
                        }), f = G.isStart(e, a, d), h = G.isEnd(e, a, d), p = f && h, v = !f || f && h, D = !h, [, g] = Node.first({
                            children: t
                        }, []), [, C] = Node.last({
                            children: t
                        }, []), m = [], y = t => {
                            var [r, n] = t;
                            return 0 !== n.length && (!!p || !(v && eo.isAncestor(n, g) && Element.isElement(r) && !e.isVoid(r) && !e.isInline(r) || D && eo.isAncestor(n, C) && Element.isElement(r) && !e.isVoid(r) && !e.isInline(r)) && !0)
                        };
                        for (var E of Node.nodes({
                                children: t
                            }, {
                                pass: y
                            })) y(E) && m.push(E);
                        var B = [],
                            b = [],
                            A = [],
                            w = !0,
                            F = !1;
                        for (var [_] of m) Element.isElement(_) && !e.isInline(_) ? (w = !1, F = !0, b.push(_)) : w ? B.push(_) : A.push(_);
                        var [O] = G.nodes(e, {
                            at: a,
                            match: t => Text.isText(t) || G.isInline(e, t),
                            mode: "highest",
                            voids: o
                        }), [, x] = O, k = G.isStart(e, a, x), P = G.isEnd(e, a, x), S = G.pathRef(e, h && !A.length ? eo.next(d) : d), T = G.pathRef(e, P ? eo.next(x) : x);
                        eM.splitNodes(e, {
                            at: a,
                            match: t => F ? Element.isElement(t) && G.isBlock(e, t) : Text.isText(t) || G.isInline(e, t),
                            mode: F ? "lowest" : "highest",
                            always: F && (!f || B.length > 0) && (!h || A.length > 0),
                            voids: o
                        });
                        var j = G.pathRef(e, !k || k && P ? eo.next(x) : x);
                        if (eM.insertNodes(e, B, {
                                at: j.current,
                                match: t => Text.isText(t) || G.isInline(e, t),
                                mode: "highest",
                                voids: o
                            }), p && !B.length && b.length && !A.length && eM.delete(e, {
                                at: d,
                                voids: o
                            }), eM.insertNodes(e, b, {
                                at: S.current,
                                match: t => Element.isElement(t) && G.isBlock(e, t),
                                mode: "lowest",
                                voids: o
                            }), eM.insertNodes(e, A, {
                                at: T.current,
                                match: t => Text.isText(t) || G.isInline(e, t),
                                mode: "highest",
                                voids: o
                            }), !r.at && (A.length > 0 && T.current ? n = eo.previous(T.current) : b.length > 0 && S.current ? n = eo.previous(S.current) : j.current && (n = eo.previous(j.current)), n)) {
                            var M = G.end(e, n);
                            eM.select(e, M)
                        }
                        j.unref(), S.unref(), T.unref()
                    }
                }
            })
        },
        insertText(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            G.withoutNormalizing(e, () => {
                var {
                    voids: n = !1
                } = r, {
                    at: i = e.selection
                } = r;
                if (!!i) {
                    if (eo.isPath(i) && (i = G.range(e, i)), Range.isRange(i)) {
                        if (Range.isCollapsed(i)) i = i.anchor;
                        else {
                            var o = Range.end(i);
                            if (!n && G.void(e, {
                                    at: o
                                })) return;
                            var a = Range.start(i),
                                u = G.pointRef(e, a),
                                s = G.pointRef(e, o);
                            eM.delete(e, {
                                at: i,
                                voids: n
                            });
                            var l = u.unref(),
                                c = s.unref();
                            i = l || c, eM.setSelection(e, {
                                anchor: i,
                                focus: i
                            })
                        }
                    }
                    if (!(!n && G.void(e, {
                            at: i
                        }))) {
                        var {
                            path: d,
                            offset: f
                        } = i;
                        t.length > 0 && e.apply({
                            type: "insert_text",
                            path: d,
                            offset: f,
                            text: t
                        })
                    }
                }
            })
        }
    })
}