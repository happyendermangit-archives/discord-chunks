function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        Editor: function() {
            return Y
        },
        Element: function() {
            return Element
        },
        Node: function() {
            return Node
        },
        Path: function() {
            return ea
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
            return C
        }
    }), r("222007"), r("424973"), r("70102"), r("106442"), r("175143");
    var n, u, a = r("156336"),
        o = r("746140");

    function i(e, t, r) {
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
        f = new WeakMap,
        d = new WeakMap,
        D = new WeakMap,
        h = new WeakMap;

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

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? v(Object(r), !0).forEach(function(t) {
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var C = () => {
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
                for (var r of Y.pathRefs(e)) eo.transform(r, t);
                for (var n of Y.pointRefs(e)) ec.transform(n, t);
                for (var u of Y.rangeRefs(e)) eD.transform(u, t);
                var a, o, i = s.get(e) || [],
                    f = l.get(e) || new Set,
                    d = e => {
                        if (e) {
                            var t = e.join(",");
                            !o.has(t) && (o.add(t), a.push(e))
                        }
                    };
                if (ea.operationCanTransformPath(t))
                    for (var D of (a = [], o = new Set, i)) d(ea.transform(D, t));
                else a = i, o = f;
                for (var h of e.getDirtyPaths(t)) d(h);
                s.set(e, a), l.set(e, o), eM.transform(e, t), e.operations.push(t), Y.normalize(e, {
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
                    markableVoid: u
                } = e;
                if (n) {
                    var a = (t, r) => {
                            if (!Text.isText(t)) return !1;
                            var [n, u] = Y.parent(e, r);
                            return !e.isVoid(n) || e.markableVoid(n)
                        },
                        o = Range.isExpanded(n),
                        i = !1;
                    if (!o) {
                        var [s, l] = Y.node(e, n);
                        if (s && a(s, l)) {
                            var [f] = Y.parent(e, l);
                            i = f && e.markableVoid(f)
                        }
                    }
                    if (o || i) eM.setNodes(e, {
                        [t]: r
                    }, {
                        match: a,
                        split: !0,
                        voids: !0
                    });
                    else {
                        var d = p(p({}, Y.marks(e) || {}), {}, {
                            [t]: r
                        });
                        e.marks = d, !c.get(e) && e.onChange()
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
                        var u = p({
                            text: t
                        }, n);
                        eM.insertNodes(e, u)
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
                    for (var u = !Y.isEditor(r) && Element.isElement(r) && (e.isInline(r) || 0 === r.children.length || Text.isText(r.children[0]) || e.isInline(r.children[0])), a = 0, o = 0; o < r.children.length; o++, a++) {
                        var i = Node.get(e, n);
                        if (!Text.isText(i)) {
                            var s = r.children[o],
                                l = i.children[a - 1],
                                c = o === r.children.length - 1;
                            if ((Text.isText(s) || Element.isElement(s) && e.isInline(s)) !== u) eM.removeNodes(e, {
                                at: n.concat(a),
                                voids: !0
                            }), a--;
                            else if (Element.isElement(s)) {
                                if (e.isInline(s)) {
                                    if (null != l && Text.isText(l)) {
                                        if (c) {
                                            var f = {
                                                text: ""
                                            };
                                            eM.insertNodes(e, f, {
                                                at: n.concat(a + 1),
                                                voids: !0
                                            }), a++
                                        }
                                    } else {
                                        var d = {
                                            text: ""
                                        };
                                        eM.insertNodes(e, d, {
                                            at: n.concat(a),
                                            voids: !0
                                        }), a++
                                    }
                                }
                            } else null != l && Text.isText(l) && (Text.equals(s, l, {
                                loose: !0
                            }) ? (eM.mergeNodes(e, {
                                at: n.concat(a),
                                voids: !0
                            }), a--) : "" === l.text ? (eM.removeNodes(e, {
                                at: n.concat(a - 1),
                                voids: !0
                            }), a--) : "" === s.text && (eM.removeNodes(e, {
                                at: n.concat(a),
                                voids: !0
                            }), a--))
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
                            var [n, u] = Y.parent(e, r);
                            return !e.isVoid(n) || e.markableVoid(n)
                        },
                        u = Range.isExpanded(r),
                        a = !1;
                    if (!u) {
                        var [o, i] = Y.node(e, r);
                        if (o && n(o, i)) {
                            var [s] = Y.parent(e, i);
                            a = s && e.markableVoid(s)
                        }
                    }
                    if (u || a) eM.unsetNodes(e, t, {
                        match: n,
                        split: !0,
                        voids: !0
                    });
                    else {
                        var l = p({}, Y.marks(e) || {});
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
                        return ea.levels(t);
                    case "insert_node":
                        var {
                            node: r, path: n
                        } = e;
                        return [...ea.levels(n), ...Text.isText(r) ? [] : Array.from(Node.nodes(r), e => {
                            var [, t] = e;
                            return n.concat(t)
                        })];
                    case "merge_node":
                        var {
                            path: u
                        } = e;
                        return [...ea.ancestors(u), ea.previous(u)];
                    case "move_node":
                        var {
                            path: a, newPath: o
                        } = e;
                        if (ea.equals(a, o)) return [];
                        var i = [],
                            s = [];
                        for (var l of ea.ancestors(a)) {
                            var c = ea.transform(l, e);
                            i.push(c)
                        }
                        for (var f of ea.ancestors(o)) {
                            var d = ea.transform(f, e);
                            s.push(d)
                        }
                        var D = s[s.length - 1],
                            h = o[o.length - 1];
                        return [...i, ...s, D.concat(h)];
                    case "remove_node":
                        var {
                            path: v
                        } = e;
                        return [...ea.ancestors(v)];
                    case "split_node":
                        var {
                            path: p
                        } = e;
                        return [...ea.levels(p), ea.next(p)];
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

    function g(e, t) {
        if (null == e) return {};
        var r, n, u = function(e, t) {
            if (null == e) return {};
            var r, n, u = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && (u[r] = e[r]);
            return u
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++) {
                if (r = a[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r])
            }
        }
        return u
    }
    var B = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = !t,
                u = t ? w(e) : e,
                a = n.None,
                o = n.None,
                i = 0,
                s = null,
                l = null;
            for (var c of u) {
                var f = c.codePointAt(0);
                if (!f) break;
                var d = I(c, f);
                if ([a, o] = r ? [o, d] : [d, a], function(e, t) {
                        return (e & t) != 0
                    }(a, n.ZWJ) && function(e, t) {
                        return (e & t) != 0
                    }(o, n.ExtPict) && !(s = r ? q(e.substring(0, i)) : q(e.substring(0, e.length - i))) || function(e, t) {
                        return (e & t) != 0
                    }(a, n.RI) && function(e, t) {
                        return (e & t) != 0
                    }(o, n.RI) && !(l = null !== l ? !l : !!r || U(e.substring(0, e.length - i))) || a !== n.None && o !== n.None && function(e, t) {
                        return -1 === L.findIndex(r => (e & r[0]) != 0 && (t & r[1]) != 0)
                    }(a, o)) break;
                i += c.length
            }
            return i || 1
        },
        E = /\s/,
        m = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        A = /['\u2018\u2019]/,
        F = function(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0, n = !1; e.length > 0;) {
                var u = B(e, t),
                    [a, o] = b(e, u, t);
                if (y(a, o, t)) n = !0, r += u;
                else if (n) break;
                else r += u;
                e = o
            }
            return r
        },
        b = (e, t, r) => {
            if (r) {
                var n = e.length - t;
                return [e.slice(n, e.length), e.slice(0, n)]
            }
            return [e.slice(0, t), e.slice(t)]
        },
        y = function e(t, r) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (E.test(t)) return !1;
            if (A.test(t)) {
                var u = B(r, n),
                    [a, o] = b(r, u, n);
                if (e(a, o, n)) return !0
            }
            return !m.test(t) && !0
        },
        w = function*(e) {
            for (var t = e.length - 1, r = 0; r < e.length; r++) {
                var n = e.charAt(t - r);
                if (x(n.charCodeAt(0))) {
                    var u = e.charAt(t - r - 1);
                    if (O(u.charCodeAt(0))) {
                        yield u + n, r++;
                        continue
                    }
                }
                yield n
            }
        },
        O = e => e >= 55296 && e <= 56319,
        x = e => e >= 56320 && e <= 57343;
    (u = n || (n = {}))[u.None = 0] = "None", u[u.Extend = 1] = "Extend", u[u.ZWJ = 2] = "ZWJ", u[u.RI = 4] = "RI", u[u.Prepend = 8] = "Prepend", u[u.SpacingMark = 16] = "SpacingMark", u[u.L = 32] = "L", u[u.V = 64] = "V", u[u.T = 128] = "T", u[u.LV = 256] = "LV", u[u.LVT = 512] = "LVT", u[u.ExtPict = 1024] = "ExtPict", u[u.Any = 2048] = "Any";
    var k = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        P = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        j = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        S = /^[\u1100-\u115F\uA960-\uA97C]$/,
        R = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        T = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        M = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        N = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        z = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        I = (e, t) => {
            var r = n.Any;
            return -1 !== e.search(k) && (r |= n.Extend), 8205 === t && (r |= n.ZWJ), t >= 127462 && t <= 127487 && (r |= n.RI), -1 !== e.search(P) && (r |= n.Prepend), -1 !== e.search(j) && (r |= n.SpacingMark), -1 !== e.search(S) && (r |= n.L), -1 !== e.search(R) && (r |= n.V), -1 !== e.search(T) && (r |= n.T), -1 !== e.search(M) && (r |= n.LV), -1 !== e.search(N) && (r |= n.LVT), -1 !== e.search(z) && (r |= n.ExtPict), r
        };

    function W(e, t) {
        return (e & t) != 0
    }
    var L = [
            [n.L, n.L | n.V | n.LV | n.LVT],
            [n.LV | n.V, n.V | n.T],
            [n.LVT | n.T, n.T],
            [n.Any, n.Extend | n.ZWJ],
            [n.Any, n.SpacingMark],
            [n.Prepend, n.Any],
            [n.ZWJ, n.ExtPict],
            [n.RI, n.RI]
        ],
        _ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        q = e => -1 !== e.search(_),
        V = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        U = e => {
            var t = e.match(V);
            return null !== t && t[0].length / 2 % 2 == 1
        },
        H = e => (0, a.isPlainObject)(e) && Node.isNodeList(e.children) && !Y.isEditor(e),
        Element = {
            isAncestor: e => (0, a.isPlainObject)(e) && Node.isNodeList(e.children),
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
        K = ["text"],
        $ = ["text"];

    function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function J(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? X(Object(r), !0).forEach(function(t) {
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var Q = new WeakMap,
        Y = {
            above(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        voids: r = !1,
                        mode: n = "lowest",
                        at: u = e.selection,
                        match: a
                    } = t;
                if (u) {
                    var o = Y.path(e, u);
                    for (var [i, s] of Y.levels(e, {
                            at: o,
                            voids: r,
                            match: a,
                            reverse: "lowest" === n
                        }))
                        if (!Text.isText(i)) {
                            if (Range.isRange(u)) {
                                if (ea.isAncestor(s, u.anchor.path) && ea.isAncestor(s, u.focus.path)) return [i, s]
                            } else if (!ea.equals(o, s)) return [i, s]
                        }
                }
            },
            addMark(e, t, r) {
                e.addMark(t, r)
            },
            after(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    u = Y.point(e, t, {
                        edge: "end"
                    }),
                    a = Y.end(e, []),
                    {
                        distance: o = 1
                    } = n,
                    i = 0;
                for (var s of Y.positions(e, J(J({}, n), {}, {
                        at: {
                            anchor: u,
                            focus: a
                        }
                    }))) {
                    if (i > o) break;
                    0 !== i && (r = s), i++
                }
                return r
            },
            before(e, t) {
                var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    u = Y.start(e, []),
                    a = Y.point(e, t, {
                        edge: "start"
                    }),
                    {
                        distance: o = 1
                    } = n,
                    i = 0;
                for (var s of Y.positions(e, J(J({}, n), {}, {
                        at: {
                            anchor: u,
                            focus: a
                        },
                        reverse: !0
                    }))) {
                    if (i > o) break;
                    0 !== i && (r = s), i++
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
            edges: (e, t) => [Y.start(e, t), Y.end(e, t)],
            end: (e, t) => Y.point(e, t, {
                edge: "end"
            }),
            first(e, t) {
                var r = Y.path(e, t, {
                    edge: "start"
                });
                return Y.node(e, r)
            },
            fragment(e, t) {
                var r = Y.range(e, t);
                return Node.fragment(e, r)
            },
            hasBlocks: (e, t) => t.children.some(t => Element.isElement(t) && Y.isBlock(e, t)),
            hasInlines: (e, t) => t.children.some(t => Text.isText(t) || Y.isInline(e, t)),
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
                if (!(0, a.isPlainObject)(e)) return !1;
                var r = "function" == typeof e.addMark && "function" == typeof e.apply && "function" == typeof e.deleteBackward && "function" == typeof e.deleteForward && "function" == typeof e.deleteFragment && "function" == typeof e.insertBreak && "function" == typeof e.insertSoftBreak && "function" == typeof e.insertFragment && "function" == typeof e.insertNode && "function" == typeof e.insertText && "function" == typeof e.isInline && "function" == typeof e.isVoid && "function" == typeof e.normalizeNode && "function" == typeof e.onChange && "function" == typeof e.removeMark && "function" == typeof e.getDirtyPaths && (null === e.marks || (0, a.isPlainObject)(e.marks)) && (null === e.selection || Range.isRange(e.selection)) && Node.isNodeList(e.children) && eu.isOperationList(e.operations);
                return Q.set(e, r), r
            },
            isEnd(e, t, r) {
                var n = Y.end(e, r);
                return el.equals(t, n)
            },
            isEdge: (e, t, r) => Y.isStart(e, t, r) || Y.isEnd(e, t, r),
            isEmpty(e, t) {
                var {
                    children: r
                } = t, [n] = r;
                return 0 === r.length || 1 === r.length && Text.isText(n) && "" === n.text && !e.isVoid(t)
            },
            isInline: (e, t) => e.isInline(t),
            isNormalizing(e) {
                var t = f.get(e);
                return void 0 === t || t
            },
            isStart(e, t, r) {
                if (0 !== t.offset) return !1;
                var n = Y.start(e, r);
                return el.equals(t, n)
            },
            isVoid: (e, t) => e.isVoid(t),
            last(e, t) {
                var r = Y.path(e, t, {
                    edge: "end"
                });
                return Y.node(e, r)
            },
            leaf(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Y.path(e, t, r);
                return [Node.leaf(e, n), n]
            },
            * levels(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: r = e.selection,
                        reverse: n = !1,
                        voids: u = !1
                    } = t,
                    {
                        match: a
                    } = t;
                if (null == a && (a = () => !0), r) {
                    var o = [],
                        i = Y.path(e, r);
                    for (var [s, l] of Node.levels(e, i))
                        if (a(s, l) && (o.push([s, l]), !u && Element.isElement(s) && Y.isVoid(e, s))) break;
                    n && o.reverse(), yield* o
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
                    var [n] = Y.nodes(e, {
                        match: Text.isText
                    });
                    if (!n) return {};
                    var [u] = n;
                    return g(u, K)
                }
                var {
                    anchor: a
                } = r, {
                    path: o
                } = a, [i] = Y.leaf(e, o);
                if (0 === a.offset) {
                    var s = Y.previous(e, {
                        at: o,
                        match: Text.isText
                    });
                    if (!Y.above(e, {
                            match: t => Element.isElement(t) && Y.isVoid(e, t) && e.markableVoid(t)
                        })) {
                        var l = Y.above(e, {
                            match: t => Element.isElement(t) && Y.isBlock(e, t)
                        });
                        if (s && l) {
                            var [c, f] = s, [, d] = l;
                            ea.isAncestor(d, f) && (i = c)
                        }
                    }
                }
                return g(i, $)
            },
            next(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        mode: r = "lowest",
                        voids: n = !1
                    } = t,
                    {
                        match: u,
                        at: a = e.selection
                    } = t;
                if (!!a) {
                    var o = Y.after(e, a, {
                        voids: n
                    });
                    if (o) {
                        var [, i] = Y.last(e, []), s = [o.path, i];
                        if (ea.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                        if (null == u) {
                            if (ea.isPath(a)) {
                                var [l] = Y.parent(e, a);
                                u = e => l.children.includes(e)
                            } else u = () => !0
                        }
                        var [c] = Y.nodes(e, {
                            at: s,
                            match: u,
                            mode: r,
                            voids: n
                        });
                        return c
                    }
                }
            },
            node(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Y.path(e, t, r);
                return [Node.get(e, n), n]
            },
            * nodes(e) {
                var t, r, n, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: a = e.selection,
                        mode: o = "all",
                        universal: i = !1,
                        reverse: s = !1,
                        voids: l = !1
                    } = u,
                    {
                        match: c
                    } = u;
                if (!c && (c = () => !0), a) {
                    if (G.isSpan(a)) t = a[0], r = a[1];
                    else {
                        var f = Y.path(e, a, {
                                edge: "start"
                            }),
                            d = Y.path(e, a, {
                                edge: "end"
                            });
                        t = s ? d : f, r = s ? f : d
                    }
                    var D = Node.nodes(e, {
                            reverse: s,
                            from: t,
                            to: r,
                            pass: t => {
                                var [r] = t;
                                return !l && Element.isElement(r) && Y.isVoid(e, r)
                            }
                        }),
                        h = [];
                    for (var [v, p] of D) {
                        var C = n && 0 === ea.compare(p, n[1]);
                        if ("highest" !== o || !C) {
                            if (!c(v, p)) {
                                if (i && !C && Text.isText(v)) return;
                                continue
                            }
                            if ("lowest" === o && C) {
                                n = [v, p];
                                continue
                            }
                            var g = "lowest" === o ? n : [v, p];
                            g && (i ? h.push(g) : yield g), n = [v, p]
                        }
                    }
                    "lowest" === o && n && (i ? h.push(n) : yield n), i && (yield* h)
                }
            },
            normalize(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        force: r = !1,
                        operation: n
                    } = t,
                    u = e => s.get(e) || [],
                    a = e => l.get(e) || new Set,
                    o = e => {
                        var t = u(e).pop(),
                            r = t.join(",");
                        return a(e).delete(r), t
                    };
                if (!!Y.isNormalizing(e)) {
                    if (r) {
                        var i = Array.from(Node.nodes(e), e => {
                                var [, t] = e;
                                return t
                            }),
                            c = new Set(i.map(e => e.join(",")));
                        s.set(e, i), l.set(e, c)
                    }
                    0 !== u(e).length && Y.withoutNormalizing(e, () => {
                        for (var t of u(e))
                            if (Node.has(e, t)) {
                                var r = Y.node(e, t),
                                    [a, i] = r;
                                Element.isElement(a) && 0 === a.children.length && e.normalizeNode(r, {
                                    operation: n
                                })
                            } for (var s = u(e), l = s.length, c = 0; 0 !== s.length;) {
                            if (!e.shouldNormalize({
                                    dirtyPaths: s,
                                    iteration: c,
                                    initialDirtyPathsLength: l,
                                    operation: n
                                })) return;
                            var f = o(e);
                            if (Node.has(e, f)) {
                                var d = Y.node(e, f);
                                e.normalizeNode(d, {
                                    operation: n
                                })
                            }
                            c++, s = u(e)
                        }
                    })
                }
            },
            parent(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = Y.path(e, t, r),
                    u = ea.parent(n);
                return Y.node(e, u)
            },
            path(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        depth: n,
                        edge: u
                    } = r;
                if (ea.isPath(t)) {
                    if ("start" === u) {
                        var [, a] = Node.first(e, t);
                        t = a
                    } else if ("end" === u) {
                        var [, o] = Node.last(e, t);
                        t = o
                    }
                }
                return Range.isRange(t) && (t = "start" === u ? Range.start(t) : "end" === u ? Range.end(t) : ea.common(t.anchor.path, t.focus.path)), el.isPoint(t) && (t = t.path), null != n && (t = t.slice(0, n)), t
            },
            hasPath: (e, t) => Node.has(e, t),
            pathRef(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        affinity: n = "forward"
                    } = r,
                    u = {
                        current: t,
                        affinity: n,
                        unref() {
                            var {
                                current: t
                            } = u;
                            return Y.pathRefs(e).delete(u), u.current = null, t
                        }
                    };
                return Y.pathRefs(e).add(u), u
            },
            pathRefs(e) {
                var t = d.get(e);
                return !t && (t = new Set, d.set(e, t)), t
            },
            point(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        edge: n = "start"
                    } = r;
                if (ea.isPath(t)) {
                    if ("end" === n) {
                        var u, [, a] = Node.last(e, t);
                        u = a
                    } else {
                        var [, o] = Node.first(e, t);
                        u = o
                    }
                    var i = Node.get(e, u);
                    if (!Text.isText(i)) throw Error("Cannot get the ".concat(n, " point in the node at path [").concat(t, "] because it has no ").concat(n, " text node."));
                    return {
                        path: u,
                        offset: "end" === n ? i.text.length : 0
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
                    u = {
                        current: t,
                        affinity: n,
                        unref() {
                            var {
                                current: t
                            } = u;
                            return Y.pointRefs(e).delete(u), u.current = null, t
                        }
                    };
                return Y.pointRefs(e).add(u), u
            },
            pointRefs(e) {
                var t = D.get(e);
                return !t && (t = new Set, D.set(e, t)), t
            },
            * positions(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: r = e.selection,
                        unit: n = "offset",
                        reverse: u = !1,
                        voids: a = !1
                    } = t;
                if (r) {
                    var o = Y.range(e, r),
                        [i, s] = Range.edges(o),
                        l = u ? s : i,
                        c = !1,
                        f = "",
                        d = 0,
                        D = 0,
                        h = 0;
                    for (var [v, p] of Y.nodes(e, {
                            at: r,
                            reverse: u,
                            voids: a
                        })) {
                        if (Element.isElement(v)) {
                            if (!a && e.isVoid(v)) {
                                yield Y.start(e, p);
                                continue
                            }
                            if (e.isInline(v)) continue;
                            if (Y.hasInlines(e, v)) {
                                var C = ea.isAncestor(p, s.path) ? s : Y.end(e, p),
                                    g = ea.isAncestor(p, i.path) ? i : Y.start(e, p);
                                f = Y.string(e, {
                                    anchor: g,
                                    focus: C
                                }, {
                                    voids: a
                                }), c = !0
                            }
                        }
                        if (Text.isText(v)) {
                            var E = ea.equals(p, l.path);
                            for (E ? (D = u ? l.offset : v.text.length - l.offset, h = l.offset) : (D = v.text.length, h = u ? D : 0), (E || c || "offset" === n) && (yield {
                                    path: p,
                                    offset: h
                                }, c = !1);;) {
                                if (0 === d) {
                                    if ("" === f) break;
                                    d = function(e, t, r) {
                                        if ("character" === t) return B(e, r);
                                        if ("word" === t) return F(e, r);
                                        if ("line" === t || "block" === t) return e.length;
                                        return 1
                                    }(f, n, u), f = b(f, d, u)[1]
                                }
                                if (h = u ? h - d : h + d, (D -= d) < 0) {
                                    d = -D;
                                    break
                                }
                                d = 0, yield {
                                    path: p,
                                    offset: h
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
                        match: u,
                        at: a = e.selection
                    } = t;
                if (!!a) {
                    var o = Y.before(e, a, {
                        voids: n
                    });
                    if (o) {
                        var [, i] = Y.first(e, []), s = [o.path, i];
                        if (ea.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                        if (null == u) {
                            if (ea.isPath(a)) {
                                var [l] = Y.parent(e, a);
                                u = e => l.children.includes(e)
                            } else u = () => !0
                        }
                        var [c] = Y.nodes(e, {
                            reverse: !0,
                            at: s,
                            match: u,
                            mode: r,
                            voids: n
                        });
                        return c
                    }
                }
            },
            range: (e, t, r) => Range.isRange(t) && !r ? t : {
                anchor: Y.start(e, t),
                focus: Y.end(e, r || t)
            },
            rangeRef(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        affinity: n = "forward"
                    } = r,
                    u = {
                        current: t,
                        affinity: n,
                        unref() {
                            var {
                                current: t
                            } = u;
                            return Y.rangeRefs(e).delete(u), u.current = null, t
                        }
                    };
                return Y.rangeRefs(e).add(u), u
            },
            rangeRefs(e) {
                var t = h.get(e);
                return !t && (t = new Set, h.set(e, t)), t
            },
            removeMark(e, t) {
                e.removeMark(t)
            },
            setNormalizing(e, t) {
                f.set(e, t)
            },
            start: (e, t) => Y.point(e, t, {
                edge: "start"
            }),
            string(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        voids: n = !1
                    } = r,
                    u = Y.range(e, t),
                    [a, o] = Range.edges(u),
                    i = "";
                for (var [s, l] of Y.nodes(e, {
                        at: u,
                        match: Text.isText,
                        voids: n
                    })) {
                    var c = s.text;
                    ea.equals(l, o.path) && (c = c.slice(0, o.offset)), ea.equals(l, a.path) && (c = c.slice(a.offset)), i += c
                }
                return i
            },
            unhangRange(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        voids: n = !1
                    } = r,
                    [u, a] = Range.edges(t);
                if (0 !== u.offset || 0 !== a.offset || Range.isCollapsed(t) || ea.hasPrevious(a.path)) return t;
                var o = Y.above(e, {
                        at: a,
                        match: t => Element.isElement(t) && Y.isBlock(e, t),
                        voids: n
                    }),
                    i = o ? o[1] : [],
                    s = {
                        anchor: Y.start(e, u),
                        focus: a
                    },
                    l = !0;
                for (var [c, f] of Y.nodes(e, {
                        at: s,
                        match: Text.isText,
                        reverse: !0,
                        voids: n
                    })) {
                    if (l) {
                        l = !1;
                        continue
                    }
                    if ("" !== c.text || ea.isBefore(f, i)) {
                        a = {
                            path: f,
                            offset: c.text.length
                        };
                        break
                    }
                }
                return {
                    anchor: u,
                    focus: a
                }
            },
            void(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Y.above(e, J(J({}, t), {}, {
                    match: t => Element.isElement(t) && Y.isVoid(e, t)
                }))
            },
            withoutNormalizing(e, t) {
                var r = Y.isNormalizing(e);
                Y.setNormalizing(e, !1);
                try {
                    t()
                } finally {
                    Y.setNormalizing(e, r)
                }
                Y.normalize(e)
            }
        },
        G = {
            isSpan: e => Array.isArray(e) && 2 === e.length && e.every(ea.isPath)
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
                for (var n of ea.ancestors(t, r)) {
                    var u = [Node.ancestor(e, n), n];
                    yield u
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
                    } = r, u = Node.ancestor(e, t), {
                        children: a
                    } = u, o = n ? a.length - 1 : 0; n ? o >= 0 : o < a.length;) {
                    var i = Node.child(u, o),
                        s = t.concat(o);
                    yield [i, s], o = n ? o - 1 : o + 1
                }
            },
            common(e, t, r) {
                var n = ea.common(t, r);
                return [Node.get(e, n), n]
            },
            descendant(e, t) {
                var r = Node.get(e, t);
                if (Y.isEditor(r)) throw Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(ev.stringify(r)));
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
                    var t = g(e, Z);
                    return t
                }
                var t = g(e, ee);
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
                return (0, o.produce)({
                    children: e.children
                }, e => {
                    var [r, n] = Range.edges(t);
                    for (var [, u] of Node.nodes(e, {
                            reverse: !0,
                            pass: e => {
                                var [, r] = e;
                                return !Range.includes(t, r)
                            }
                        })) {
                        if (!Range.includes(t, u)) {
                            var a = Node.parent(e, u),
                                o = u[u.length - 1];
                            a.children.splice(o, 1)
                        }
                        if (ea.equals(u, n.path)) {
                            var i = Node.leaf(e, u);
                            i.text = i.text.slice(0, n.offset)
                        }
                        if (ea.equals(u, r.path)) {
                            var s = Node.leaf(e, u);
                            s.text = s.text.slice(r.offset)
                        }
                    }
                    Y.isEditor(e) && (e.selection = null)
                }).children
            },
            get(e, t) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var u = t[n];
                    if (Text.isText(r) || !r.children[u]) throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(ev.stringify(e)));
                    r = r.children[u]
                }
                return r
            },
            has(e, t) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var u = t[n];
                    if (Text.isText(r) || !r.children[u]) return !1;
                    r = r.children[u]
                }
                return !0
            },
            isNode: e => Text.isText(e) || Element.isElement(e) || Y.isEditor(e),
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
                    var u = n.children.length - 1;
                    n = n.children[u], r.push(u)
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
                for (var n of ea.levels(t, r)) {
                    var u = Node.get(e, n);
                    yield [u, n]
                }
            },
            matches: (e, t) => Element.isElement(e) && Element.isElementProps(t) && Element.matches(e, t) || Text.isText(e) && Text.isTextProps(t) && Text.matches(e, t),
            * nodes(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        pass: r,
                        reverse: n = !1
                    } = t, {
                        from: u = [],
                        to: a
                    } = t, o = new Set, i = [], s = e; !(a && (n ? ea.isBefore(i, a) : ea.isAfter(i, a)));) {
                    ;
                    if (!o.has(s) && (yield [s, i]), !o.has(s) && !Text.isText(s) && 0 !== s.children.length && (null == r || !1 === r([s, i]))) {
                        o.add(s);
                        var l = n ? s.children.length - 1 : 0;
                        ea.isAncestor(i, u) && (l = u[i.length]), i = i.concat(l), s = Node.get(e, i);
                        continue
                    }
                    if (0 === i.length) break;
                    if (!n) {
                        var c = ea.next(i);
                        if (Node.has(e, c)) {
                            i = c, s = Node.get(e, i);
                            continue
                        }
                    }
                    if (n && 0 !== i[i.length - 1]) {
                        i = ea.previous(i), s = Node.get(e, i);
                        continue
                    }
                    i = ea.parent(i), s = Node.get(e, i), o.add(s)
                }
            },
            parent(e, t) {
                var r = ea.parent(t),
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
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eu = {
            isNodeOperation: e => eu.isOperation(e) && e.type.endsWith("_node"),
            isOperation(e) {
                if (!(0, a.isPlainObject)(e)) return !1;
                switch (e.type) {
                    case "insert_node":
                    case "remove_node":
                        return ea.isPath(e.path) && Node.isNode(e.node);
                    case "insert_text":
                    case "remove_text":
                        return "number" == typeof e.offset && "string" == typeof e.text && ea.isPath(e.path);
                    case "merge_node":
                        return "number" == typeof e.position && ea.isPath(e.path) && (0, a.isPlainObject)(e.properties);
                    case "move_node":
                        return ea.isPath(e.path) && ea.isPath(e.newPath);
                    case "set_node":
                        return ea.isPath(e.path) && (0, a.isPlainObject)(e.properties) && (0, a.isPlainObject)(e.newProperties);
                    case "set_selection":
                        return null === e.properties && Range.isRange(e.newProperties) || null === e.newProperties && Range.isRange(e.properties) || (0, a.isPlainObject)(e.properties) && (0, a.isPlainObject)(e.newProperties);
                    case "split_node":
                        return ea.isPath(e.path) && "number" == typeof e.position && (0, a.isPlainObject)(e.properties);
                    default:
                        return !1
                }
            },
            isOperationList: e => Array.isArray(e) && e.every(e => eu.isOperation(e)),
            isSelectionOperation: e => eu.isOperation(e) && e.type.endsWith("_selection"),
            isTextOperation: e => eu.isOperation(e) && e.type.endsWith("_text"),
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
                            path: ea.previous(e.path)
                        });
                    case "move_node":
                        var {
                            newPath: t, path: r
                        } = e;
                        if (ea.equals(t, r)) return e;
                        if (ea.isSibling(r, t)) return en(en({}, e), {}, {
                            path: t,
                            newPath: r
                        });
                        var n = ea.transform(r, e),
                            u = ea.transform(ea.next(r), e);
                        return en(en({}, e), {}, {
                            path: n,
                            newPath: u
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
                            properties: a, newProperties: o
                        } = e;
                        return en(en({}, e), {}, {
                            properties: o,
                            newProperties: a
                        });
                    case "set_selection":
                        var {
                            properties: i, newProperties: s
                        } = e;
                        if (null == i) return en(en({}, e), {}, {
                            properties: s,
                            newProperties: null
                        });
                        if (null == s) return en(en({}, e), {}, {
                            properties: null,
                            newProperties: i
                        });
                        else return en(en({}, e), {}, {
                            properties: s,
                            newProperties: i
                        });
                    case "split_node":
                        return en(en({}, e), {}, {
                            type: "merge_node",
                            path: ea.next(e.path)
                        })
                }
            }
        },
        ea = {
            ancestors(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        reverse: r = !1
                    } = t,
                    n = ea.levels(e, t);
                return n = r ? n.slice(1) : n.slice(0, -1)
            },
            common(e, t) {
                for (var r = [], n = 0; n < e.length && n < t.length; n++) {
                    var u = e[n];
                    if (u !== t[n]) break;
                    r.push(u)
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
                    u = t.slice(0, r),
                    a = e[r],
                    o = t[r];
                return ea.equals(n, u) && a > o
            },
            endsAt(e, t) {
                var r = e.length,
                    n = e.slice(0, r),
                    u = t.slice(0, r);
                return ea.equals(n, u)
            },
            endsBefore(e, t) {
                var r = e.length - 1,
                    n = e.slice(0, r),
                    u = t.slice(0, r),
                    a = e[r],
                    o = t[r];
                return ea.equals(n, u) && a < o
            },
            equals: (e, t) => e.length === t.length && e.every((e, r) => e === t[r]),
            hasPrevious: e => e[e.length - 1] > 0,
            isAfter: (e, t) => 1 === ea.compare(e, t),
            isAncestor: (e, t) => e.length < t.length && 0 === ea.compare(e, t),
            isBefore: (e, t) => -1 === ea.compare(e, t),
            isChild: (e, t) => e.length === t.length + 1 && 0 === ea.compare(e, t),
            isCommon: (e, t) => e.length <= t.length && 0 === ea.compare(e, t),
            isDescendant: (e, t) => e.length > t.length && 0 === ea.compare(e, t),
            isParent: (e, t) => e.length + 1 === t.length && 0 === ea.compare(e, t),
            isPath: e => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
            isSibling(e, t) {
                if (e.length !== t.length) return !1;
                var r = e.slice(0, -1),
                    n = t.slice(0, -1);
                return e[e.length - 1] !== t[t.length - 1] && ea.equals(r, n)
            },
            levels(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        reverse: r = !1
                    } = t, n = [], u = 0; u <= e.length; u++) n.push(e.slice(0, u));
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
                if (!ea.isAncestor(t, e) && !ea.equals(e, t)) throw Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
                return e.slice(t.length)
            },
            transform(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!e) return null;
                var n = [...e],
                    {
                        affinity: u = "forward"
                    } = r;
                if (0 === e.length) return n;
                switch (t.type) {
                    case "insert_node":
                        var {
                            path: a
                        } = t;
                        (ea.equals(a, n) || ea.endsBefore(a, n) || ea.isAncestor(a, n)) && (n[a.length - 1] += 1);
                        break;
                    case "remove_node":
                        var {
                            path: o
                        } = t;
                        if (ea.equals(o, n) || ea.isAncestor(o, n)) return null;
                        ea.endsBefore(o, n) && (n[o.length - 1] -= 1);
                        break;
                    case "merge_node":
                        var {
                            path: i, position: s
                        } = t;
                        ea.equals(i, n) || ea.endsBefore(i, n) ? n[i.length - 1] -= 1 : ea.isAncestor(i, n) && (n[i.length - 1] -= 1, n[i.length] += s);
                        break;
                    case "split_node":
                        var {
                            path: l, position: c
                        } = t;
                        if (ea.equals(l, n)) {
                            if ("forward" === u) n[n.length - 1] += 1;
                            else if ("backward" !== u) return null
                        } else ea.endsBefore(l, n) ? n[l.length - 1] += 1 : ea.isAncestor(l, n) && e[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
                        break;
                    case "move_node":
                        var {
                            path: f, newPath: d
                        } = t;
                        if (ea.equals(f, d)) break;
                        if (ea.isAncestor(f, n) || ea.equals(f, n)) {
                            var D = d.slice();
                            return ea.endsBefore(f, d) && f.length < d.length && (D[f.length - 1] -= 1), D.concat(n.slice(f.length))
                        }
                        ea.isSibling(f, d) && (ea.isAncestor(d, n) || ea.equals(d, n)) ? ea.endsBefore(f, n) ? n[f.length - 1] -= 1 : n[f.length - 1] += 1 : ea.endsBefore(d, n) || ea.equals(d, n) || ea.isAncestor(d, n) ? (ea.endsBefore(f, n) && (n[f.length - 1] -= 1), n[d.length - 1] += 1) : ea.endsBefore(f, n) && (ea.equals(d, n) && (n[d.length - 1] += 1), n[f.length - 1] -= 1)
                }
                return n
            }
        },
        eo = {
            transform(e, t) {
                var {
                    current: r,
                    affinity: n
                } = e;
                if (null != r) {
                    var u = ea.transform(r, t, {
                        affinity: n
                    });
                    e.current = u, null == u && e.unref()
                }
            }
        };

    function ei(e, t) {
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
            t % 2 ? ei(Object(r), !0).forEach(function(t) {
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ei(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var el = {
            compare(e, t) {
                var r = ea.compare(e.path, t.path);
                if (0 === r) return e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0;
                return r
            },
            isAfter: (e, t) => 1 === el.compare(e, t),
            isBefore: (e, t) => -1 === el.compare(e, t),
            equals: (e, t) => e.offset === t.offset && ea.equals(e.path, t.path),
            isPoint: e => (0, a.isPlainObject)(e) && "number" == typeof e.offset && ea.isPath(e.path),
            transform(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (0, o.produce)(e, e => {
                    if (null === e) return null;
                    var {
                        affinity: n = "forward"
                    } = r, {
                        path: u,
                        offset: a
                    } = e;
                    switch (t.type) {
                        case "insert_node":
                        case "move_node":
                            e.path = ea.transform(u, t, r);
                            break;
                        case "insert_text":
                            ea.equals(t.path, u) && (t.offset < a || t.offset === a && "forward" === n) && (e.offset += t.text.length);
                            break;
                        case "merge_node":
                            ea.equals(t.path, u) && (e.offset += t.position), e.path = ea.transform(u, t, r);
                            break;
                        case "remove_text":
                            ea.equals(t.path, u) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                            break;
                        case "remove_node":
                            if (ea.equals(t.path, u) || ea.isAncestor(t.path, u)) return null;
                            e.path = ea.transform(u, t, r);
                            break;
                        case "split_node":
                            if (ea.equals(t.path, u)) {
                                if (t.position === a && null == n) return null;
                                (t.position < a || t.position === a && "forward" === n) && (e.offset -= t.position, e.path = ea.transform(u, t, es(es({}, r), {}, {
                                    affinity: "forward"
                                })))
                            } else e.path = ea.transform(u, t, r)
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
                    var u = el.transform(r, t, {
                        affinity: n
                    });
                    e.current = u, null == u && e.unref()
                }
            }
        },
        ef = ["anchor", "focus"];

    function ed(e, t) {
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
                        focus: u
                    } = e;
                return Range.isBackward(e) === r ? [n, u] : [u, n]
            },
            end(e) {
                var [, t] = Range.edges(e);
                return t
            },
            equals: (e, t) => el.equals(e.anchor, t.anchor) && el.equals(e.focus, t.focus),
            includes(e, t) {
                if (Range.isRange(t)) {
                    if (Range.includes(e, t.anchor) || Range.includes(e, t.focus)) return !0;
                    var [r, n] = Range.edges(e), [u, a] = Range.edges(t);
                    return el.isBefore(r, u) && el.isAfter(n, a)
                }
                var [o, i] = Range.edges(e), s = !1, l = !1;
                return el.isPoint(t) ? (s = el.compare(t, o) >= 0, l = 0 >= el.compare(t, i)) : (s = ea.compare(t, o.path) >= 0, l = 0 >= ea.compare(t, i.path)), s && l
            },
            intersection(e, t) {
                var r = g(e, ef),
                    [n, u] = Range.edges(e),
                    [a, o] = Range.edges(t),
                    s = el.isBefore(n, a) ? a : n,
                    l = el.isBefore(u, o) ? u : o;
                return el.isBefore(l, s) ? null : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ed(Object(r), !0).forEach(function(t) {
                            i(e, t, r[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(t) {
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
            isRange: e => (0, a.isPlainObject)(e) && el.isPoint(e.anchor) && el.isPoint(e.focus),
            * points(e) {
                yield [e.anchor, "anchor"], yield [e.focus, "focus"]
            },
            start(e) {
                var [t] = Range.edges(e);
                return t
            },
            transform(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (0, o.produce)(e, e => {
                    if (null === e) return null;
                    var n, u, {
                        affinity: a = "inward"
                    } = r;
                    if ("inward" === a) {
                        var o = Range.isCollapsed(e);
                        Range.isForward(e) ? (n = "forward", u = o ? n : "backward") : (n = "backward", u = o ? n : "forward")
                    } else "outward" === a ? Range.isForward(e) ? (n = "backward", u = "forward") : (n = "forward", u = "backward") : (n = a, u = a);
                    var i = el.transform(e.anchor, t, {
                            affinity: n
                        }),
                        s = el.transform(e.focus, t, {
                            affinity: u
                        });
                    if (!i || !s) return null;
                    e.anchor = i, e.focus = s
                })
            }
        },
        eD = {
            transform(e, t) {
                var {
                    current: r,
                    affinity: n
                } = e;
                if (null != r) {
                    var u = Range.transform(r, t, {
                        affinity: n
                    });
                    e.current = u, null == u && e.unref()
                }
            }
        },
        eh = void 0,
        ev = {
            setScrubber(e) {
                eh = e
            },
            stringify: e => JSON.stringify(e, eh)
        },
        ep = (e, t) => {
            for (var r in e) {
                var n = e[r],
                    u = t[r];
                if ((0, a.isPlainObject)(n) && (0, a.isPlainObject)(u)) {
                    if (!ep(n, u)) return !1
                } else if (Array.isArray(n) && Array.isArray(u)) {
                    if (n.length !== u.length) return !1;
                    for (var o = 0; o < n.length; o++)
                        if (n[o] !== u[o]) return !1
                } else if (n !== u) return !1
            }
            for (var i in t)
                if (void 0 === e[i] && void 0 !== t[i]) return !1;
            return !0
        },
        eC = ["text"],
        eg = ["anchor", "focus"];

    function eB(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function eE(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eB(Object(r), !0).forEach(function(t) {
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eB(Object(r)).forEach(function(t) {
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

            function u(e) {
                return g(e, eC)
            }
            return ep(n ? g(e, eC) : e, n ? g(t, eC) : t)
        },
        isText: e => (0, a.isPlainObject)(e) && "string" == typeof e.text,
        isTextList: e => Array.isArray(e) && e.every(e => Text.isText(e)),
        isTextProps: e => void 0 !== e.text,
        matches(e, t) {
            for (var r in t)
                if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r])) return !1;
            return !0
        },
        decorations(e, t) {
            var r = [eE({}, e)];
            for (var n of t) {
                var u = g(n, eg),
                    [a, o] = Range.edges(n),
                    i = [],
                    s = 0,
                    l = a.offset,
                    c = o.offset;
                for (var f of r) {
                    var {
                        length: d
                    } = f.text, D = s;
                    if (s += d, l <= D && s <= c) {
                        Object.assign(f, u), i.push(f);
                        continue
                    }
                    if (l !== c && (l === s || c === D) || l > s || c < D || c === D && 0 !== D) {
                        i.push(f);
                        continue
                    }
                    var h = f,
                        v = void 0,
                        p = void 0;
                    if (c < s) {
                        var C = c - D;
                        p = eE(eE({}, h), {}, {
                            text: h.text.slice(C)
                        }), h = eE(eE({}, h), {}, {
                            text: h.text.slice(0, C)
                        })
                    }
                    if (l > D) {
                        var B = l - D;
                        v = eE(eE({}, h), {}, {
                            text: h.text.slice(0, B)
                        }), h = eE(eE({}, h), {}, {
                            text: h.text.slice(B)
                        })
                    }
                    Object.assign(h, u), v && i.push(v), i.push(h), p && i.push(p)
                }
                r = i
            }
            return r
        }
    };

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

    function eA(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? em(Object(r), !0).forEach(function(t) {
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eF = (e, t, r) => {
            switch (r.type) {
                case "insert_node":
                    var {
                        path: n, node: u
                    } = r, a = Node.parent(e, n), o = n[n.length - 1];
                    if (o > a.children.length) throw Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
                    if (a.children.splice(o, 0, u), t)
                        for (var [i, s] of Range.points(t)) t[s] = el.transform(i, r);
                    break;
                case "insert_text":
                    var {
                        path: l, offset: c, text: f
                    } = r;
                    if (0 === f.length) break;
                    var d = Node.leaf(e, l),
                        D = d.text.slice(0, c),
                        h = d.text.slice(c);
                    if (d.text = D + f + h, t)
                        for (var [v, p] of Range.points(t)) t[p] = el.transform(v, r);
                    break;
                case "merge_node":
                    var {
                        path: C
                    } = r, g = Node.get(e, C), B = ea.previous(C), E = Node.get(e, B), m = Node.parent(e, C), A = C[C.length - 1];
                    if (Text.isText(g) && Text.isText(E)) E.text += g.text;
                    else if (Text.isText(g) || Text.isText(E)) throw Error('Cannot apply a "merge_node" operation at path ['.concat(C, "] to nodes of different interfaces: ").concat(ev.stringify(g), " ").concat(ev.stringify(E)));
                    else E.children.push(...g.children);
                    if (m.children.splice(A, 1), t)
                        for (var [F, b] of Range.points(t)) t[b] = el.transform(F, r);
                    break;
                case "move_node":
                    var {
                        path: y, newPath: w
                    } = r;
                    if (ea.isAncestor(y, w)) throw Error("Cannot move a path [".concat(y, "] to new path [").concat(w, "] because the destination is inside itself."));
                    var O = Node.get(e, y),
                        x = Node.parent(e, y),
                        k = y[y.length - 1];
                    x.children.splice(k, 1);
                    var P = ea.transform(y, r),
                        j = Node.get(e, ea.parent(P)),
                        S = P[P.length - 1];
                    if (j.children.splice(S, 0, O), t)
                        for (var [R, T] of Range.points(t)) t[T] = el.transform(R, r);
                    break;
                case "remove_node":
                    var {
                        path: M
                    } = r, N = M[M.length - 1];
                    if (Node.parent(e, M).children.splice(N, 1), t)
                        for (var [z, I] of Range.points(t)) {
                            var W = el.transform(z, r);
                            if (null != t && null != W) t[I] = W;
                            else {
                                var L = void 0,
                                    _ = void 0;
                                for (var [q, V] of Node.texts(e))
                                    if (-1 === ea.compare(V, M)) L = [q, V];
                                    else {
                                        _ = [q, V];
                                        break
                                    } var U = !1;
                                L && _ && (U = ea.equals(_[1], M) ? !ea.hasPrevious(_[1]) : ea.common(L[1], M).length < ea.common(_[1], M).length), L && !U ? (z.path = L[1], z.offset = L[0].text.length) : _ ? (z.path = _[1], z.offset = 0) : t = null
                            }
                        }
                    break;
                case "remove_text":
                    var {
                        path: H, offset: K, text: $
                    } = r;
                    if (0 === $.length) break;
                    var X = Node.leaf(e, H),
                        J = X.text.slice(0, K),
                        Q = X.text.slice(K + $.length);
                    if (X.text = J + Q, t)
                        for (var [Y, G] of Range.points(t)) t[G] = el.transform(Y, r);
                    break;
                case "set_node":
                    var {
                        path: Z, properties: ee, newProperties: et
                    } = r;
                    if (0 === Z.length) throw Error("Cannot set properties on the root node!");
                    var er = Node.get(e, Z);
                    for (var en in et) {
                        if ("children" === en || "text" === en) throw Error('Cannot set the "'.concat(en, '" property of nodes!'));
                        var eu = et[en];
                        null == eu ? delete er[en] : er[en] = eu
                    }
                    for (var eo in ee) !et.hasOwnProperty(eo) && delete er[eo];
                    break;
                case "set_selection":
                    var {
                        newProperties: ei
                    } = r;
                    if (null == ei) t = ei;
                    else {
                        if (null == t) {
                            if (!Range.isRange(ei)) throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(ev.stringify(ei), " when there is no current selection."));
                            t = eA({}, ei)
                        }
                        for (var es in ei) {
                            var ec = ei[es];
                            if (null == ec) {
                                if ("anchor" === es || "focus" === es) throw Error('Cannot remove the "'.concat(es, '" selection property'));
                                delete t[es]
                            } else t[es] = ec
                        }
                    }
                    break;
                case "split_node":
                    var ef, {
                        path: ed,
                        position: eD,
                        properties: eh
                    } = r;
                    if (0 === ed.length) throw Error('Cannot apply a "split_node" operation at path ['.concat(ed, "] because the root node cannot be split."));
                    var ep = Node.get(e, ed),
                        eC = Node.parent(e, ed),
                        eg = ed[ed.length - 1];
                    if (Text.isText(ep)) {
                        var eB = ep.text.slice(0, eD),
                            eE = ep.text.slice(eD);
                        ep.text = eB, ef = eA(eA({}, eh), {}, {
                            text: eE
                        })
                    } else {
                        var em = ep.children.slice(0, eD),
                            eF = ep.children.slice(eD);
                        ep.children = em, ef = eA(eA({}, eh), {}, {
                            children: eF
                        })
                    }
                    if (eC.children.splice(eg + 1, 0, ef), t)
                        for (var [eb, ey] of Range.points(t)) t[ey] = el.transform(eb, r)
            }
            return t
        },
        eb = ["text"],
        ey = ["children"];

    function ew(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function eO(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ew(Object(r), !0).forEach(function(t) {
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ew(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var ex = (e, t) => {
            if (Element.isElement(t)) return !!Y.isVoid(e, t) || 1 === t.children.length && ex(e, t.children[0]);
            if (Y.isEditor(t)) return !1;
            return !0
        },
        ek = (e, t) => {
            if (Range.isCollapsed(t)) return t.anchor;
            var [, r] = Range.edges(t), n = Y.pointRef(e, r);
            return eM.delete(e, {
                at: t
            }), n.unref()
        },
        eP = (e, t) => {
            var [r] = Y.node(e, t);
            return e => e === r
        };

    function ej(e, t) {
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
            t % 2 ? ej(Object(r), !0).forEach(function(t) {
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ej(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function eR(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function eT(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eR(Object(r), !0).forEach(function(t) {
                i(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eR(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }
    var eM = eT(eT(eT(eT({}, {
        transform(e, t) {
            e.children = (0, o.createDraft)(e.children);
            var r = e.selection && (0, o.createDraft)(e.selection);
            try {
                r = eF(e, r, t)
            } finally {
                e.children = (0, o.finishDraft)(e.children), r ? e.selection = (0, o.isDraft)(r) ? (0, o.finishDraft)(r) : r : e.selection = null
            }
        }
    }), {
        insertNodes(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Y.withoutNormalizing(e, () => {
                var {
                    hanging: n = !1,
                    voids: u = !1,
                    mode: a = "lowest"
                } = r, {
                    at: o,
                    match: i,
                    select: s
                } = r;
                if (Node.isNode(t) && (t = [t]), 0 !== t.length) {
                    var [l] = t;
                    if (!o && (o = e.selection ? e.selection : e.children.length > 0 ? Y.end(e, []) : [0], s = !0), null == s && (s = !1), Range.isRange(o)) {
                        if (!n && (o = Y.unhangRange(e, o, {
                                voids: u
                            })), Range.isCollapsed(o)) o = o.anchor;
                        else {
                            var [, c] = Range.edges(o), f = Y.pointRef(e, c);
                            eM.delete(e, {
                                at: o
                            }), o = f.unref()
                        }
                    }
                    if (el.isPoint(o)) {
                        null == i && (i = Text.isText(l) ? e => Text.isText(e) : e.isInline(l) ? t => Text.isText(t) || Y.isInline(e, t) : t => Element.isElement(t) && Y.isBlock(e, t));
                        var [d] = Y.nodes(e, {
                            at: o.path,
                            match: i,
                            mode: a,
                            voids: u
                        });
                        if (!d) return;
                        var [, D] = d, h = Y.pathRef(e, D), v = Y.isEnd(e, o, D);
                        eM.splitNodes(e, {
                            at: o,
                            match: i,
                            mode: a,
                            voids: u
                        });
                        var p = h.unref();
                        o = v ? ea.next(p) : p
                    }
                    var C = ea.parent(o),
                        g = o[o.length - 1];
                    if (!(!u && Y.void(e, {
                            at: C
                        }))) {
                        for (var B of t) {
                            var E = C.concat(g);
                            g++, e.apply({
                                type: "insert_node",
                                path: E,
                                node: B
                            }), o = ea.next(o)
                        }
                        if (o = ea.previous(o), s) {
                            var m = Y.end(e, o);
                            m && eM.select(e, m)
                        }
                    }
                }
            })
        },
        liftNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Y.withoutNormalizing(e, () => {
                var {
                    at: r = e.selection,
                    mode: n = "lowest",
                    voids: u = !1
                } = t, {
                    match: a
                } = t;
                if (null == a && (a = ea.isPath(r) ? eP(e, r) : t => Element.isElement(t) && Y.isBlock(e, t)), r)
                    for (var o of Array.from(Y.nodes(e, {
                            at: r,
                            match: a,
                            mode: n,
                            voids: u
                        }), t => {
                            var [, r] = t;
                            return Y.pathRef(e, r)
                        })) {
                        var i = o.unref();
                        if (i.length < 2) throw Error("Cannot lift node at a path [".concat(i, "] because it has a depth of less than `2`."));
                        var [s, l] = Y.node(e, ea.parent(i)), c = i[i.length - 1], {
                            length: f
                        } = s.children;
                        if (1 === f) {
                            var d = ea.next(l);
                            eM.moveNodes(e, {
                                at: i,
                                to: d,
                                voids: u
                            }), eM.removeNodes(e, {
                                at: l,
                                voids: u
                            })
                        } else if (0 === c) eM.moveNodes(e, {
                            at: i,
                            to: l,
                            voids: u
                        });
                        else if (c === f - 1) {
                            var D = ea.next(l);
                            eM.moveNodes(e, {
                                at: i,
                                to: D,
                                voids: u
                            })
                        } else {
                            var h = ea.next(i),
                                v = ea.next(l);
                            eM.splitNodes(e, {
                                at: h,
                                voids: u
                            }), eM.moveNodes(e, {
                                at: i,
                                to: v,
                                voids: u
                            })
                        }
                    }
            })
        },
        mergeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Y.withoutNormalizing(e, () => {
                var r, n, {
                        match: u,
                        at: a = e.selection
                    } = t,
                    {
                        hanging: o = !1,
                        voids: i = !1,
                        mode: s = "lowest"
                    } = t;
                if (!a) return;
                if (null == u) {
                    if (ea.isPath(a)) {
                        var [l] = Y.parent(e, a);
                        u = e => l.children.includes(e)
                    } else u = t => Element.isElement(t) && Y.isBlock(e, t)
                }
                if (!o && Range.isRange(a) && (a = Y.unhangRange(e, a, {
                        voids: i
                    })), Range.isRange(a)) {
                    if (Range.isCollapsed(a)) a = a.anchor;
                    else {
                        var [, c] = Range.edges(a), f = Y.pointRef(e, c);
                        eM.delete(e, {
                            at: a
                        }), a = f.unref(), null == t.at && eM.select(e, a)
                    }
                }
                var [d] = Y.nodes(e, {
                    at: a,
                    match: u,
                    voids: i,
                    mode: s
                }), D = Y.previous(e, {
                    at: a,
                    match: u,
                    voids: i,
                    mode: s
                });
                if (!!d && !!D) {
                    var [h, v] = d, [p, C] = D;
                    if (0 !== v.length && 0 !== C.length) {
                        var B = ea.next(C),
                            E = ea.common(v, C),
                            m = ea.isSibling(v, C),
                            A = Array.from(Y.levels(e, {
                                at: v
                            }), e => {
                                var [t] = e;
                                return t
                            }).slice(E.length).slice(0, -1),
                            F = Y.above(e, {
                                at: v,
                                mode: "highest",
                                match: t => A.includes(t) && ex(e, t)
                            }),
                            b = F && Y.pathRef(e, F[1]);
                        if (Text.isText(h) && Text.isText(p)) {
                            var y = g(h, eb);
                            n = p.text.length, r = y
                        } else if (Element.isElement(h) && Element.isElement(p)) {
                            var y = g(h, ey);
                            n = p.children.length, r = y
                        } else throw Error("Cannot merge the node at path [".concat(v, "] with the previous sibling because it is not the same kind: ").concat(ev.stringify(h), " ").concat(ev.stringify(p)));
                        !m && eM.moveNodes(e, {
                            at: v,
                            to: B,
                            voids: i
                        }), b && eM.removeNodes(e, {
                            at: b.current,
                            voids: i
                        }), Element.isElement(p) && Y.isEmpty(e, p) || Text.isText(p) && "" === p.text && 0 !== C[C.length - 1] ? eM.removeNodes(e, {
                            at: C,
                            voids: i
                        }) : e.apply({
                            type: "merge_node",
                            path: B,
                            position: n,
                            properties: r
                        }), b && b.unref()
                    }
                }
            })
        },
        moveNodes(e, t) {
            Y.withoutNormalizing(e, () => {
                var {
                    to: r,
                    at: n = e.selection,
                    mode: u = "lowest",
                    voids: a = !1
                } = t, {
                    match: o
                } = t;
                if (n) {
                    null == o && (o = ea.isPath(n) ? eP(e, n) : t => Element.isElement(t) && Y.isBlock(e, t));
                    var i = Y.pathRef(e, r);
                    for (var s of Array.from(Y.nodes(e, {
                            at: n,
                            match: o,
                            mode: u,
                            voids: a
                        }), t => {
                            var [, r] = t;
                            return Y.pathRef(e, r)
                        })) {
                        var l = s.unref(),
                            c = i.current;
                        0 !== l.length && e.apply({
                            type: "move_node",
                            path: l,
                            newPath: c
                        }), i.current && ea.isSibling(c, l) && ea.isAfter(c, l) && (i.current = ea.next(i.current))
                    }
                    i.unref()
                }
            })
        },
        removeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Y.withoutNormalizing(e, () => {
                var {
                    hanging: r = !1,
                    voids: n = !1,
                    mode: u = "lowest"
                } = t, {
                    at: a = e.selection,
                    match: o
                } = t;
                if (a)
                    for (var i of (null == o && (o = ea.isPath(a) ? eP(e, a) : t => Element.isElement(t) && Y.isBlock(e, t)), !r && Range.isRange(a) && (a = Y.unhangRange(e, a, {
                            voids: n
                        })), Array.from(Y.nodes(e, {
                            at: a,
                            match: o,
                            mode: u,
                            voids: n
                        }), t => {
                            var [, r] = t;
                            return Y.pathRef(e, r)
                        }))) {
                        var s = i.unref();
                        if (s) {
                            var [l] = Y.node(e, s);
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
            Y.withoutNormalizing(e, () => {
                var {
                    match: n,
                    at: u = e.selection,
                    compare: a,
                    merge: o
                } = r, {
                    hanging: i = !1,
                    mode: s = "lowest",
                    split: l = !1,
                    voids: c = !1
                } = r;
                if (u) {
                    if (null == n && (n = ea.isPath(u) ? eP(e, u) : t => Element.isElement(t) && Y.isBlock(e, t)), !i && Range.isRange(u) && (u = Y.unhangRange(e, u, {
                            voids: c
                        })), l && Range.isRange(u)) {
                        if (Range.isCollapsed(u) && Y.leaf(e, u.anchor)[0].text.length > 0) return;
                        var f = Y.rangeRef(e, u, {
                                affinity: "inward"
                            }),
                            [d, D] = Range.edges(u),
                            h = "lowest" === s ? "lowest" : "highest",
                            v = Y.isEnd(e, D, D.path);
                        eM.splitNodes(e, {
                            at: D,
                            match: n,
                            mode: h,
                            voids: c,
                            always: !v
                        });
                        var p = Y.isStart(e, d, d.path);
                        eM.splitNodes(e, {
                            at: d,
                            match: n,
                            mode: h,
                            voids: c,
                            always: !p
                        }), u = f.unref(), null == r.at && eM.select(e, u)
                    }
                    for (var [C, g] of(!a && (a = (e, t) => e !== t), Y.nodes(e, {
                            at: u,
                            match: n,
                            mode: s,
                            voids: c
                        }))) {
                        var B = {},
                            E = {};
                        if (0 !== g.length) {
                            var m = !1;
                            for (var A in t) "children" !== A && "text" !== A && a(t[A], C[A]) && (m = !0, C.hasOwnProperty(A) && (B[A] = C[A]), o ? null != t[A] && (E[A] = o(C[A], t[A])) : null != t[A] && (E[A] = t[A]));
                            m && e.apply({
                                type: "set_node",
                                path: g,
                                properties: B,
                                newProperties: E
                            })
                        }
                    }
                }
            })
        },
        splitNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Y.withoutNormalizing(e, () => {
                var r, n, {
                        mode: u = "lowest",
                        voids: a = !1
                    } = t,
                    {
                        match: o,
                        at: i = e.selection,
                        height: s = 0,
                        always: l = !1
                    } = t;
                if (null == o && (o = t => Element.isElement(t) && Y.isBlock(e, t)), Range.isRange(i) && (i = ek(e, i)), ea.isPath(i)) {
                    var c = i,
                        f = Y.point(e, c),
                        [d] = Y.parent(e, c);
                    o = e => e === d, s = f.path.length - c.length + 1, i = f, l = !0
                }
                if (i) {
                    var D = Y.pointRef(e, i, {
                        affinity: "backward"
                    });
                    try {
                        var [h] = Y.nodes(e, {
                            at: i,
                            match: o,
                            mode: u,
                            voids: a
                        });
                        if (!h) return;
                        var v = Y.void(e, {
                            at: i,
                            mode: "highest"
                        });
                        if (!a && v) {
                            var [p, C] = v;
                            if (Element.isElement(p) && e.isInline(p)) {
                                var g = Y.after(e, C);
                                if (!g) {
                                    var B = ea.next(C);
                                    eM.insertNodes(e, {
                                        text: ""
                                    }, {
                                        at: B,
                                        voids: a
                                    }), g = Y.point(e, B)
                                }
                                i = g, l = !0
                            }
                            s = i.path.length - C.length + 1, l = !0
                        }
                        r = Y.pointRef(e, i);
                        var E = i.path.length - s,
                            [, m] = h,
                            A = i.path.slice(0, E),
                            F = 0 === s ? i.offset : i.path[E] + 0;
                        for (var [b, y] of Y.levels(e, {
                                at: A,
                                reverse: !0,
                                voids: a
                            })) {
                            var w = !1;
                            if (y.length < m.length || 0 === y.length || !a && Element.isElement(b) && Y.isVoid(e, b)) break;
                            var O = D.current,
                                x = Y.isEnd(e, O, y);
                            if (l || !D || !Y.isEdge(e, O, y)) {
                                w = !0;
                                var k = Node.extractProps(b);
                                e.apply({
                                    type: "split_node",
                                    path: y,
                                    position: F,
                                    properties: k
                                })
                            }
                            F = y[y.length - 1] + (w || x ? 1 : 0)
                        }
                        if (null == t.at) {
                            var P = r.current || Y.end(e, []);
                            eM.select(e, P)
                        }
                    } finally {
                        D.unref(), null === (n = r) || void 0 === n || n.unref()
                    }
                }
            })
        },
        unsetNodes(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            !Array.isArray(t) && (t = [t]);
            var n = {};
            for (var u of t) n[u] = null;
            eM.setNodes(e, n, r)
        },
        unwrapNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Y.withoutNormalizing(e, () => {
                var {
                    mode: r = "lowest",
                    split: n = !1,
                    voids: u = !1
                } = t, {
                    at: a = e.selection,
                    match: o
                } = t;
                if (a) {
                    null == o && (o = ea.isPath(a) ? eP(e, a) : t => Element.isElement(t) && Y.isBlock(e, t)), ea.isPath(a) && (a = Y.range(e, a));
                    var i = Range.isRange(a) ? Y.rangeRef(e, a) : null,
                        s = Array.from(Y.nodes(e, {
                            at: a,
                            match: o,
                            mode: r,
                            voids: u
                        }), t => {
                            var [, r] = t;
                            return Y.pathRef(e, r)
                        }).reverse();
                    for (var l of s) ! function(t) {
                        var r = t.unref(),
                            [a] = Y.node(e, r),
                            o = Y.range(e, r);
                        n && i && (o = Range.intersection(i.current, o)), eM.liftNodes(e, {
                            at: o,
                            match: e => Element.isAncestor(a) && a.children.includes(e),
                            voids: u
                        })
                    }(l);
                    i && i.unref()
                }
            })
        },
        wrapNodes(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Y.withoutNormalizing(e, () => {
                var {
                    mode: n = "lowest",
                    split: u = !1,
                    voids: a = !1
                } = r, {
                    match: o,
                    at: i = e.selection
                } = r;
                if (i) {
                    if (null == o && (o = ea.isPath(i) ? eP(e, i) : e.isInline(t) ? t => Element.isElement(t) && Y.isInline(e, t) || Text.isText(t) : t => Element.isElement(t) && Y.isBlock(e, t)), u && Range.isRange(i)) {
                        var [s, l] = Range.edges(i), c = Y.rangeRef(e, i, {
                            affinity: "inward"
                        });
                        eM.splitNodes(e, {
                            at: l,
                            match: o,
                            voids: a
                        }), eM.splitNodes(e, {
                            at: s,
                            match: o,
                            voids: a
                        }), i = c.unref(), null == r.at && eM.select(e, i)
                    }
                    for (var [, f] of Array.from(Y.nodes(e, {
                            at: i,
                            match: e.isInline(t) ? t => Element.isElement(t) && Y.isBlock(e, t) : e => Y.isEditor(e),
                            mode: "lowest",
                            voids: a
                        }))) {
                        var d = Range.isRange(i) ? Range.intersection(i, Y.range(e, f)) : i;
                        if (d) {
                            var D = Array.from(Y.nodes(e, {
                                at: d,
                                match: o,
                                mode: n,
                                voids: a
                            }));
                            if (D.length > 0 && "continue" === function() {
                                    var [r] = D, n = D[D.length - 1], [, u] = r, [, o] = n;
                                    if (0 === u.length && 0 === o.length) return "continue";
                                    var i = ea.equals(u, o) ? ea.parent(u) : ea.common(u, o),
                                        s = Y.range(e, u, o),
                                        [l] = Y.node(e, i),
                                        c = i.length + 1,
                                        f = ea.next(o.slice(0, c)),
                                        d = eO(eO({}, t), {}, {
                                            children: []
                                        });
                                    eM.insertNodes(e, d, {
                                        at: f,
                                        voids: a
                                    }), eM.moveNodes(e, {
                                        at: s,
                                        match: e => Element.isAncestor(l) && l.children.includes(e),
                                        to: f.concat(0),
                                        voids: a
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
                    var [u] = Range.edges(n);
                    eM.select(e, u)
                } else if ("end" === r) {
                    var [, a] = Range.edges(n);
                    eM.select(e, a)
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
                    unit: u = "character",
                    reverse: a = !1
                } = t,
                {
                    edge: o = null
                } = t;
            if (r) {
                "start" === o && (o = Range.isBackward(r) ? "focus" : "anchor"), "end" === o && (o = Range.isBackward(r) ? "anchor" : "focus");
                var {
                    anchor: i,
                    focus: s
                } = r, l = {
                    distance: n,
                    unit: u
                }, c = {};
                if (null == o || "anchor" === o) {
                    var f = a ? Y.before(e, i, l) : Y.after(e, i, l);
                    f && (c.anchor = f)
                }
                if (null == o || "focus" === o) {
                    var d = a ? Y.before(e, s, l) : Y.after(e, s, l);
                    d && (c.focus = d)
                }
                eM.setSelection(e, c)
            }
        },
        select(e, t) {
            var {
                selection: r
            } = e;
            if (t = Y.range(e, t), r) {
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
                    edge: u = "both"
                } = r;
            if (n) {
                "start" === u && (u = Range.isBackward(n) ? "focus" : "anchor"), "end" === u && (u = Range.isBackward(n) ? "anchor" : "focus");
                var {
                    anchor: a,
                    focus: o
                } = n, i = "anchor" === u ? a : o;
                eM.setSelection(e, {
                    ["anchor" === u ? "anchor" : "focus"]: eS(eS({}, i), t)
                })
            }
        },
        setSelection(e, t) {
            var {
                selection: r
            } = e, n = {}, u = {};
            if (r) {
                for (var a in t)("anchor" === a && null != t.anchor && !el.equals(t.anchor, r.anchor) || "focus" === a && null != t.focus && !el.equals(t.focus, r.focus) || "anchor" !== a && "focus" !== a && t[a] !== r[a]) && (n[a] = r[a], u[a] = t[a]);
                Object.keys(n).length > 0 && e.apply({
                    type: "set_selection",
                    properties: n,
                    newProperties: u
                })
            }
        }
    }), {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            Y.withoutNormalizing(e, () => {
                var r, {
                        reverse: n = !1,
                        unit: u = "character",
                        distance: a = 1,
                        voids: o = !1
                    } = t,
                    {
                        at: i = e.selection,
                        hanging: s = !1
                    } = t;
                if (!!i) {
                    var l = !1;
                    if (Range.isRange(i) && Range.isCollapsed(i) && (l = !0, i = i.anchor), el.isPoint(i)) {
                        var c = Y.void(e, {
                            at: i,
                            mode: "highest"
                        });
                        if (!o && c) {
                            var [, f] = c;
                            i = f
                        } else {
                            var d = {
                                    unit: u,
                                    distance: a
                                },
                                D = n ? Y.before(e, i, d) || Y.start(e, []) : Y.after(e, i, d) || Y.end(e, []);
                            i = {
                                anchor: i,
                                focus: D
                            }, s = !0
                        }
                    }
                    if (ea.isPath(i)) {
                        eM.removeNodes(e, {
                            at: i,
                            voids: o
                        });
                        return
                    }
                    if (!Range.isCollapsed(i)) {
                        if (!s) {
                            var [, h] = Range.edges(i), v = Y.end(e, []);
                            !el.equals(h, v) && (i = Y.unhangRange(e, i, {
                                voids: o
                            }))
                        }
                        var [p, C] = Range.edges(i), g = Y.above(e, {
                            match: t => Element.isElement(t) && Y.isBlock(e, t),
                            at: p,
                            voids: o
                        }), B = Y.above(e, {
                            match: t => Element.isElement(t) && Y.isBlock(e, t),
                            at: C,
                            voids: o
                        }), E = g && B && !ea.equals(g[1], B[1]), m = ea.equals(p.path, C.path), A = o ? null : Y.void(e, {
                            at: p,
                            mode: "highest"
                        }), F = o ? null : Y.void(e, {
                            at: C,
                            mode: "highest"
                        });
                        if (A) {
                            var b = Y.before(e, p);
                            b && g && ea.isAncestor(g[1], b.path) && (p = b)
                        }
                        if (F) {
                            var y = Y.after(e, C);
                            y && B && ea.isAncestor(B[1], y.path) && (C = y)
                        }
                        var w = [];
                        for (var O of Y.nodes(e, {
                                at: i,
                                voids: o
                            })) {
                            var [x, k] = O;
                            (!r || 0 !== ea.compare(k, r)) && (!o && Element.isElement(x) && Y.isVoid(e, x) || !ea.isCommon(k, p.path) && !ea.isCommon(k, C.path)) && (w.push(O), r = k)
                        }
                        var P = Array.from(w, t => {
                                var [, r] = t;
                                return Y.pathRef(e, r)
                            }),
                            j = Y.pointRef(e, p),
                            S = Y.pointRef(e, C),
                            R = "";
                        if (!m && !A) {
                            var T = j.current,
                                [M] = Y.leaf(e, T),
                                {
                                    path: N
                                } = T,
                                {
                                    offset: z
                                } = p,
                                I = M.text.slice(z);
                            I.length > 0 && (e.apply({
                                type: "remove_text",
                                path: N,
                                offset: z,
                                text: I
                            }), R = I)
                        }
                        if (P.reverse().map(e => e.unref()).filter(e => null !== e).forEach(t => eM.removeNodes(e, {
                                at: t,
                                voids: o
                            })), !F) {
                            var W = S.current,
                                [L] = Y.leaf(e, W),
                                {
                                    path: _
                                } = W,
                                q = m ? p.offset : 0,
                                V = L.text.slice(q, C.offset);
                            V.length > 0 && (e.apply({
                                type: "remove_text",
                                path: _,
                                offset: q,
                                text: V
                            }), R = V)
                        }!m && E && S.current && j.current && eM.mergeNodes(e, {
                            at: S.current,
                            hanging: !0,
                            voids: o
                        }), l && n && "character" === u && R.length > 1 && R.match(/[\u0E00-\u0E7F]+/) && eM.insertText(e, R.slice(0, R.length - a));
                        var U = j.unref(),
                            H = S.unref(),
                            K = n ? U || H : H || U;
                        null == t.at && K && eM.select(e, K)
                    }
                }
            })
        },
        insertFragment(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Y.withoutNormalizing(e, () => {
                var n, {
                        hanging: u = !1,
                        voids: a = !1
                    } = r,
                    {
                        at: o = e.selection
                    } = r;
                if (!t.length) return;
                if (!!o) {
                    if (Range.isRange(o)) {
                        if (!u && (o = Y.unhangRange(e, o, {
                                voids: a
                            })), Range.isCollapsed(o)) o = o.anchor;
                        else {
                            var [, i] = Range.edges(o);
                            if (!a && Y.void(e, {
                                    at: i
                                })) return;
                            var s = Y.pointRef(e, i);
                            eM.delete(e, {
                                at: o
                            }), o = s.unref()
                        }
                    } else ea.isPath(o) && (o = Y.start(e, o));
                    if (!(!a && Y.void(e, {
                            at: o
                        }))) {
                        var l = Y.above(e, {
                            at: o,
                            match: t => Element.isElement(t) && Y.isInline(e, t),
                            mode: "highest",
                            voids: a
                        });
                        if (l) {
                            var [, c] = l;
                            Y.isEnd(e, o, c) ? o = Y.after(e, c) : Y.isStart(e, o, c) && (o = Y.before(e, c))
                        }
                        var [, f] = Y.above(e, {
                            match: t => Element.isElement(t) && Y.isBlock(e, t),
                            at: o,
                            voids: a
                        }), d = Y.isStart(e, o, f), D = Y.isEnd(e, o, f), h = d && D, v = !d || d && D, p = !D, [, C] = Node.first({
                            children: t
                        }, []), [, g] = Node.last({
                            children: t
                        }, []), B = [], E = t => {
                            var [r, n] = t;
                            return 0 !== n.length && (!!h || !(v && ea.isAncestor(n, C) && Element.isElement(r) && !e.isVoid(r) && !e.isInline(r) || p && ea.isAncestor(n, g) && Element.isElement(r) && !e.isVoid(r) && !e.isInline(r)) && !0)
                        };
                        for (var m of Node.nodes({
                                children: t
                            }, {
                                pass: E
                            })) E(m) && B.push(m);
                        var A = [],
                            F = [],
                            b = [],
                            y = !0,
                            w = !1;
                        for (var [O] of B) Element.isElement(O) && !e.isInline(O) ? (y = !1, w = !0, F.push(O)) : y ? A.push(O) : b.push(O);
                        var [x] = Y.nodes(e, {
                            at: o,
                            match: t => Text.isText(t) || Y.isInline(e, t),
                            mode: "highest",
                            voids: a
                        }), [, k] = x, P = Y.isStart(e, o, k), j = Y.isEnd(e, o, k), S = Y.pathRef(e, D && !b.length ? ea.next(f) : f), R = Y.pathRef(e, j ? ea.next(k) : k);
                        eM.splitNodes(e, {
                            at: o,
                            match: t => w ? Element.isElement(t) && Y.isBlock(e, t) : Text.isText(t) || Y.isInline(e, t),
                            mode: w ? "lowest" : "highest",
                            always: w && (!d || A.length > 0) && (!D || b.length > 0),
                            voids: a
                        });
                        var T = Y.pathRef(e, !P || P && j ? ea.next(k) : k);
                        if (eM.insertNodes(e, A, {
                                at: T.current,
                                match: t => Text.isText(t) || Y.isInline(e, t),
                                mode: "highest",
                                voids: a
                            }), h && !A.length && F.length && !b.length && eM.delete(e, {
                                at: f,
                                voids: a
                            }), eM.insertNodes(e, F, {
                                at: S.current,
                                match: t => Element.isElement(t) && Y.isBlock(e, t),
                                mode: "lowest",
                                voids: a
                            }), eM.insertNodes(e, b, {
                                at: R.current,
                                match: t => Text.isText(t) || Y.isInline(e, t),
                                mode: "highest",
                                voids: a
                            }), !r.at && (b.length > 0 && R.current ? n = ea.previous(R.current) : F.length > 0 && S.current ? n = ea.previous(S.current) : T.current && (n = ea.previous(T.current)), n)) {
                            var M = Y.end(e, n);
                            eM.select(e, M)
                        }
                        T.unref(), S.unref(), R.unref()
                    }
                }
            })
        },
        insertText(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Y.withoutNormalizing(e, () => {
                var {
                    voids: n = !1
                } = r, {
                    at: u = e.selection
                } = r;
                if (!!u) {
                    if (ea.isPath(u) && (u = Y.range(e, u)), Range.isRange(u)) {
                        if (Range.isCollapsed(u)) u = u.anchor;
                        else {
                            var a = Range.end(u);
                            if (!n && Y.void(e, {
                                    at: a
                                })) return;
                            var o = Range.start(u),
                                i = Y.pointRef(e, o),
                                s = Y.pointRef(e, a);
                            eM.delete(e, {
                                at: u,
                                voids: n
                            });
                            var l = i.unref(),
                                c = s.unref();
                            u = l || c, eM.setSelection(e, {
                                anchor: u,
                                focus: u
                            })
                        }
                    }
                    if (!(!n && Y.void(e, {
                            at: u
                        }))) {
                        var {
                            path: f,
                            offset: d
                        } = u;
                        t.length > 0 && e.apply({
                            type: "insert_text",
                            path: f,
                            offset: d,
                            text: t
                        })
                    }
                }
            })
        }
    })
}