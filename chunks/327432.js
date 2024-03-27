function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Editor: function() {
            return X
        },
        Element: function() {
            return $
        },
        Node: function() {
            return er
        },
        Path: function() {
            return es
        },
        Point: function() {
            return ed
        },
        Range: function() {
            return em
        },
        Scrubber: function() {
            return eb
        },
        Text: function() {
            return ew
        },
        Transforms: function() {
            return eU
        },
        createEditor: function() {
            return _
        }
    });
    var r, i, a = n("855242"),
        o = n("688451");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = new WeakMap,
        c = new WeakMap,
        l = new WeakMap,
        d = new WeakMap,
        f = new WeakMap,
        p = new WeakMap,
        h = new WeakMap;

    function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? m(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var _ = () => {
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
                for (var n of X.pathRefs(e)) eu.transform(n, t);
                for (var r of X.pointRefs(e)) ef.transform(r, t);
                for (var i of X.rangeRefs(e)) eg.transform(i, t);
                var a, o, s = u.get(e) || [],
                    d = c.get(e) || new Set,
                    f = e => {
                        if (e) {
                            var t = e.join(",");
                            !o.has(t) && (o.add(t), a.push(e))
                        }
                    };
                if (es.operationCanTransformPath(t))
                    for (var p of (a = [], o = new Set, s)) f(es.transform(p, t));
                else a = s, o = d;
                for (var h of e.getDirtyPaths(t)) f(h);
                u.set(e, a), c.set(e, o), eU.transform(e, t), e.operations.push(t), X.normalize(e, {
                    operation: t
                }), "set_selection" === t.type && (e.marks = null), !l.get(e) && (l.set(e, !0), Promise.resolve().then(() => {
                    l.set(e, !1), e.onChange({
                        operation: t
                    }), e.operations = []
                }))
            },
            addMark: (t, n) => {
                var {
                    selection: r,
                    markableVoid: i
                } = e;
                if (r) {
                    var a = (t, n) => {
                            if (!ew.isText(t)) return !1;
                            var [r, i] = X.parent(e, n);
                            return !e.isVoid(r) || e.markableVoid(r)
                        },
                        o = em.isExpanded(r),
                        s = !1;
                    if (!o) {
                        var [u, c] = X.node(e, r);
                        if (u && a(u, c)) {
                            var [d] = X.parent(e, c);
                            s = d && e.markableVoid(d)
                        }
                    }
                    if (o || s) eU.setNodes(e, {
                        [t]: n
                    }, {
                        match: a,
                        split: !0,
                        voids: !0
                    });
                    else {
                        var f = g(g({}, X.marks(e) || {}), {}, {
                            [t]: n
                        });
                        e.marks = f, !l.get(e) && e.onChange()
                    }
                }
            },
            deleteBackward: t => {
                var {
                    selection: n
                } = e;
                n && em.isCollapsed(n) && eU.delete(e, {
                    unit: t,
                    reverse: !0
                })
            },
            deleteForward: t => {
                var {
                    selection: n
                } = e;
                n && em.isCollapsed(n) && eU.delete(e, {
                    unit: t
                })
            },
            deleteFragment: t => {
                var {
                    selection: n
                } = e;
                n && em.isExpanded(n) && eU.delete(e, {
                    reverse: "backward" === t
                })
            },
            getFragment: () => {
                var {
                    selection: t
                } = e;
                return t ? er.fragment(e, t) : []
            },
            insertBreak: () => {
                eU.splitNodes(e, {
                    always: !0
                })
            },
            insertSoftBreak: () => {
                eU.splitNodes(e, {
                    always: !0
                })
            },
            insertFragment: t => {
                eU.insertFragment(e, t)
            },
            insertNode: t => {
                eU.insertNodes(e, t)
            },
            insertText: t => {
                var {
                    selection: n,
                    marks: r
                } = e;
                if (n) {
                    if (r) {
                        var i = g({
                            text: t
                        }, r);
                        eU.insertNodes(e, i)
                    } else eU.insertText(e, t);
                    e.marks = null
                }
            },
            normalizeNode: t => {
                var [n, r] = t;
                if (!ew.isText(n)) {
                    if ($.isElement(n) && 0 === n.children.length) {
                        eU.insertNodes(e, {
                            text: ""
                        }, {
                            at: r.concat(0),
                            voids: !0
                        });
                        return
                    }
                    for (var i = !X.isEditor(n) && $.isElement(n) && (e.isInline(n) || 0 === n.children.length || ew.isText(n.children[0]) || e.isInline(n.children[0])), a = 0, o = 0; o < n.children.length; o++, a++) {
                        var s = er.get(e, r);
                        if (!ew.isText(s)) {
                            var u = n.children[o],
                                c = s.children[a - 1],
                                l = o === n.children.length - 1;
                            if ((ew.isText(u) || $.isElement(u) && e.isInline(u)) !== i) eU.removeNodes(e, {
                                at: r.concat(a),
                                voids: !0
                            }), a--;
                            else if ($.isElement(u)) {
                                if (e.isInline(u)) {
                                    if (null != c && ew.isText(c)) {
                                        if (l) {
                                            var d = {
                                                text: ""
                                            };
                                            eU.insertNodes(e, d, {
                                                at: r.concat(a + 1),
                                                voids: !0
                                            }), a++
                                        }
                                    } else {
                                        var f = {
                                            text: ""
                                        };
                                        eU.insertNodes(e, f, {
                                            at: r.concat(a),
                                            voids: !0
                                        }), a++
                                    }
                                }
                            } else null != c && ew.isText(c) && (ew.equals(u, c, {
                                loose: !0
                            }) ? (eU.mergeNodes(e, {
                                at: r.concat(a),
                                voids: !0
                            }), a--) : "" === c.text ? (eU.removeNodes(e, {
                                at: r.concat(a - 1),
                                voids: !0
                            }), a--) : "" === u.text && (eU.removeNodes(e, {
                                at: r.concat(a),
                                voids: !0
                            }), a--))
                        }
                    }
                }
            },
            removeMark: t => {
                var {
                    selection: n
                } = e;
                if (n) {
                    var r = (t, n) => {
                            if (!ew.isText(t)) return !1;
                            var [r, i] = X.parent(e, n);
                            return !e.isVoid(r) || e.markableVoid(r)
                        },
                        i = em.isExpanded(n),
                        a = !1;
                    if (!i) {
                        var [o, s] = X.node(e, n);
                        if (o && r(o, s)) {
                            var [u] = X.parent(e, s);
                            a = u && e.markableVoid(u)
                        }
                    }
                    if (i || a) eU.unsetNodes(e, t, {
                        match: r,
                        split: !0,
                        voids: !0
                    });
                    else {
                        var c = g({}, X.marks(e) || {});
                        delete c[t], e.marks = c, !l.get(e) && e.onChange()
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
                        return es.levels(t);
                    case "insert_node":
                        var {
                            node: n, path: r
                        } = e;
                        return [...es.levels(r), ...ew.isText(n) ? [] : Array.from(er.nodes(n), e => {
                            var [, t] = e;
                            return r.concat(t)
                        })];
                    case "merge_node":
                        var {
                            path: i
                        } = e;
                        return [...es.ancestors(i), es.previous(i)];
                    case "move_node":
                        var {
                            path: a, newPath: o
                        } = e;
                        if (es.equals(a, o)) return [];
                        var s = [],
                            u = [];
                        for (var c of es.ancestors(a)) {
                            var l = es.transform(c, e);
                            s.push(l)
                        }
                        for (var d of es.ancestors(o)) {
                            var f = es.transform(d, e);
                            u.push(f)
                        }
                        var p = u[u.length - 1],
                            h = o[o.length - 1];
                        return [...s, ...u, p.concat(h)];
                    case "remove_node":
                        var {
                            path: m
                        } = e;
                        return [...es.ancestors(m)];
                    case "split_node":
                        var {
                            path: g
                        } = e;
                        return [...es.levels(g), es.next(g)];
                    default:
                        return []
                }
            },
            shouldNormalize: e => {
                var {
                    iteration: t,
                    initialDirtyPathsLength: n
                } = e, r = 42 * n;
                if (t > r) throw Error("Could not completely normalize the editor after ".concat(r, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
                return !0
            }
        };
        return e
    };

    function b(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) {
                if (n = a[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
        }
        return i
    }
    var v = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = !t,
                r = t ? C(e) : e,
                a = i.None,
                o = i.None,
                s = 0,
                u = null,
                c = null;
            for (var l of r) {
                var d = l.codePointAt(0);
                if (!d) break;
                var f = B(l, d);
                if ([a, o] = n ? [o, f] : [f, a], function(e, t) {
                        return (e & t) != 0
                    }(a, i.ZWJ) && function(e, t) {
                        return (e & t) != 0
                    }(o, i.ExtPict) && !(u = n ? z(e.substring(0, s)) : z(e.substring(0, e.length - s))) || function(e, t) {
                        return (e & t) != 0
                    }(a, i.RI) && function(e, t) {
                        return (e & t) != 0
                    }(o, i.RI) && !(c = null !== c ? !c : !!n || G(e.substring(0, e.length - s))) || a !== i.None && o !== i.None && function(e, t) {
                        return -1 === Y.findIndex(n => (e & n[0]) != 0 && (t & n[1]) != 0)
                    }(a, o)) break;
                s += l.length
            }
            return s || 1
        },
        y = /\s/,
        E = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        S = /['\u2018\u2019]/,
        x = function(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = !1; e.length > 0;) {
                var i = v(e, t),
                    [a, o] = w(e, i, t);
                if (T(a, o, t)) r = !0, n += i;
                else if (r) break;
                else n += i;
                e = o
            }
            return n
        },
        w = (e, t, n) => {
            if (n) {
                var r = e.length - t;
                return [e.slice(r, e.length), e.slice(0, r)]
            }
            return [e.slice(0, t), e.slice(t)]
        },
        T = function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (y.test(t)) return !1;
            if (S.test(t)) {
                var i = v(n, r),
                    [a, o] = w(n, i, r);
                if (e(a, o, r)) return !0
            }
            return !E.test(t) && !0
        },
        C = function*(e) {
            for (var t = e.length - 1, n = 0; n < e.length; n++) {
                var r = e.charAt(t - n);
                if (O(r.charCodeAt(0))) {
                    var i = e.charAt(t - n - 1);
                    if (D(i.charCodeAt(0))) {
                        yield i + r, n++;
                        continue
                    }
                }
                yield r
            }
        },
        D = e => e >= 55296 && e <= 56319,
        O = e => e >= 56320 && e <= 57343;
    (r = i || (i = {}))[r.None = 0] = "None", r[r.Extend = 1] = "Extend", r[r.ZWJ = 2] = "ZWJ", r[r.RI = 4] = "RI", r[r.Prepend = 8] = "Prepend", r[r.SpacingMark = 16] = "SpacingMark", r[r.L = 32] = "L", r[r.V = 64] = "V", r[r.T = 128] = "T", r[r.LV = 256] = "LV", r[r.LVT = 512] = "LVT", r[r.ExtPict = 1024] = "ExtPict", r[r.Any = 2048] = "Any";
    var M = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        A = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        k = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        R = /^[\u1100-\u115F\uA960-\uA97C]$/,
        N = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        I = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        L = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        P = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        F = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        B = (e, t) => {
            var n = i.Any;
            return -1 !== e.search(M) && (n |= i.Extend), 8205 === t && (n |= i.ZWJ), t >= 127462 && t <= 127487 && (n |= i.RI), -1 !== e.search(A) && (n |= i.Prepend), -1 !== e.search(k) && (n |= i.SpacingMark), -1 !== e.search(R) && (n |= i.L), -1 !== e.search(N) && (n |= i.V), -1 !== e.search(I) && (n |= i.T), -1 !== e.search(L) && (n |= i.LV), -1 !== e.search(P) && (n |= i.LVT), -1 !== e.search(F) && (n |= i.ExtPict), n
        };

    function U(e, t) {
        return (e & t) != 0
    }
    var Y = [
            [i.L, i.L | i.V | i.LV | i.LVT],
            [i.LV | i.V, i.V | i.T],
            [i.LVT | i.T, i.T],
            [i.Any, i.Extend | i.ZWJ],
            [i.Any, i.SpacingMark],
            [i.Prepend, i.Any],
            [i.ZWJ, i.ExtPict],
            [i.RI, i.RI]
        ],
        j = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        z = e => -1 !== e.search(j),
        H = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        G = e => {
            var t = e.match(H);
            return null !== t && t[0].length / 2 % 2 == 1
        },
        V = e => (0, a.isPlainObject)(e) && er.isNodeList(e.children) && !X.isEditor(e),
        $ = {
            isAncestor: e => (0, a.isPlainObject)(e) && er.isNodeList(e.children),
            isElement: V,
            isElementList: e => Array.isArray(e) && e.every(e => $.isElement(e)),
            isElementProps: e => void 0 !== e.children,
            isElementType: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
                return V(e) && e[n] === t
            },
            matches(e, t) {
                for (var n in t)
                    if ("children" !== n && e[n] !== t[n]) return !1;
                return !0
            }
        },
        W = ["text"],
        K = ["text"];

    function q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? q(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var Z = new WeakMap,
        X = {
            above(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        voids: n = !1,
                        mode: r = "lowest",
                        at: i = e.selection,
                        match: a
                    } = t;
                if (i) {
                    var o = X.path(e, i);
                    for (var [s, u] of X.levels(e, {
                            at: o,
                            voids: n,
                            match: a,
                            reverse: "lowest" === r
                        }))
                        if (!ew.isText(s)) {
                            if (em.isRange(i)) {
                                if (es.isAncestor(u, i.anchor.path) && es.isAncestor(u, i.focus.path)) return [s, u]
                            } else if (!es.equals(o, u)) return [s, u]
                        }
                }
            },
            addMark(e, t, n) {
                e.addMark(t, n)
            },
            after(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = X.point(e, t, {
                        edge: "end"
                    }),
                    a = X.end(e, []),
                    {
                        distance: o = 1
                    } = r,
                    s = 0;
                for (var u of X.positions(e, Q(Q({}, r), {}, {
                        at: {
                            anchor: i,
                            focus: a
                        }
                    }))) {
                    if (s > o) break;
                    0 !== s && (n = u), s++
                }
                return n
            },
            before(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = X.start(e, []),
                    a = X.point(e, t, {
                        edge: "start"
                    }),
                    {
                        distance: o = 1
                    } = r,
                    s = 0;
                for (var u of X.positions(e, Q(Q({}, r), {}, {
                        at: {
                            anchor: i,
                            focus: a
                        },
                        reverse: !0
                    }))) {
                    if (s > o) break;
                    0 !== s && (n = u), s++
                }
                return n
            },
            deleteBackward(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        unit: n = "character"
                    } = t;
                e.deleteBackward(n)
            },
            deleteForward(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        unit: n = "character"
                    } = t;
                e.deleteForward(n)
            },
            deleteFragment(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        direction: n = "forward"
                    } = t;
                e.deleteFragment(n)
            },
            edges: (e, t) => [X.start(e, t), X.end(e, t)],
            end: (e, t) => X.point(e, t, {
                edge: "end"
            }),
            first(e, t) {
                var n = X.path(e, t, {
                    edge: "start"
                });
                return X.node(e, n)
            },
            fragment(e, t) {
                var n = X.range(e, t);
                return er.fragment(e, n)
            },
            hasBlocks: (e, t) => t.children.some(t => $.isElement(t) && X.isBlock(e, t)),
            hasInlines: (e, t) => t.children.some(t => ew.isText(t) || X.isInline(e, t)),
            hasTexts: (e, t) => t.children.every(e => ew.isText(e)),
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
                var t = Z.get(e);
                if (void 0 !== t) return t;
                if (!(0, a.isPlainObject)(e)) return !1;
                var n = "function" == typeof e.addMark && "function" == typeof e.apply && "function" == typeof e.deleteBackward && "function" == typeof e.deleteForward && "function" == typeof e.deleteFragment && "function" == typeof e.insertBreak && "function" == typeof e.insertSoftBreak && "function" == typeof e.insertFragment && "function" == typeof e.insertNode && "function" == typeof e.insertText && "function" == typeof e.isInline && "function" == typeof e.isVoid && "function" == typeof e.normalizeNode && "function" == typeof e.onChange && "function" == typeof e.removeMark && "function" == typeof e.getDirtyPaths && (null === e.marks || (0, a.isPlainObject)(e.marks)) && (null === e.selection || em.isRange(e.selection)) && er.isNodeList(e.children) && eo.isOperationList(e.operations);
                return Z.set(e, n), n
            },
            isEnd(e, t, n) {
                var r = X.end(e, n);
                return ed.equals(t, r)
            },
            isEdge: (e, t, n) => X.isStart(e, t, n) || X.isEnd(e, t, n),
            isEmpty(e, t) {
                var {
                    children: n
                } = t, [r] = n;
                return 0 === n.length || 1 === n.length && ew.isText(r) && "" === r.text && !e.isVoid(t)
            },
            isInline: (e, t) => e.isInline(t),
            isNormalizing(e) {
                var t = d.get(e);
                return void 0 === t || t
            },
            isStart(e, t, n) {
                if (0 !== t.offset) return !1;
                var r = X.start(e, n);
                return ed.equals(t, r)
            },
            isVoid: (e, t) => e.isVoid(t),
            last(e, t) {
                var n = X.path(e, t, {
                    edge: "end"
                });
                return X.node(e, n)
            },
            leaf(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = X.path(e, t, n);
                return [er.leaf(e, r), r]
            },
            * levels(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: n = e.selection,
                        reverse: r = !1,
                        voids: i = !1
                    } = t,
                    {
                        match: a
                    } = t;
                if (null == a && (a = () => !0), n) {
                    var o = [],
                        s = X.path(e, n);
                    for (var [u, c] of er.levels(e, s))
                        if (a(u, c) && (o.push([u, c]), !i && $.isElement(u) && X.isVoid(e, u))) break;
                    r && o.reverse(), yield* o
                }
            },
            marks(e) {
                var {
                    marks: t,
                    selection: n
                } = e;
                if (!n) return null;
                if (t) return t;
                if (em.isExpanded(n)) {
                    var [r] = X.nodes(e, {
                        match: ew.isText
                    });
                    if (!r) return {};
                    var [i] = r;
                    return b(i, W)
                }
                var {
                    anchor: a
                } = n, {
                    path: o
                } = a, [s] = X.leaf(e, o);
                if (0 === a.offset) {
                    var u = X.previous(e, {
                        at: o,
                        match: ew.isText
                    });
                    if (!X.above(e, {
                            match: t => $.isElement(t) && X.isVoid(e, t) && e.markableVoid(t)
                        })) {
                        var c = X.above(e, {
                            match: t => $.isElement(t) && X.isBlock(e, t)
                        });
                        if (u && c) {
                            var [l, d] = u, [, f] = c;
                            es.isAncestor(f, d) && (s = l)
                        }
                    }
                }
                return b(s, K)
            },
            next(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        mode: n = "lowest",
                        voids: r = !1
                    } = t,
                    {
                        match: i,
                        at: a = e.selection
                    } = t;
                if (!!a) {
                    var o = X.after(e, a, {
                        voids: r
                    });
                    if (o) {
                        var [, s] = X.last(e, []), u = [o.path, s];
                        if (es.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                        if (null == i) {
                            if (es.isPath(a)) {
                                var [c] = X.parent(e, a);
                                i = e => c.children.includes(e)
                            } else i = () => !0
                        }
                        var [l] = X.nodes(e, {
                            at: u,
                            match: i,
                            mode: n,
                            voids: r
                        });
                        return l
                    }
                }
            },
            node(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = X.path(e, t, n);
                return [er.get(e, r), r]
            },
            * nodes(e) {
                var t, n, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: a = e.selection,
                        mode: o = "all",
                        universal: s = !1,
                        reverse: u = !1,
                        voids: c = !1
                    } = i,
                    {
                        match: l
                    } = i;
                if (!l && (l = () => !0), a) {
                    if (J.isSpan(a)) t = a[0], n = a[1];
                    else {
                        var d = X.path(e, a, {
                                edge: "start"
                            }),
                            f = X.path(e, a, {
                                edge: "end"
                            });
                        t = u ? f : d, n = u ? d : f
                    }
                    var p = er.nodes(e, {
                            reverse: u,
                            from: t,
                            to: n,
                            pass: t => {
                                var [n] = t;
                                return !c && $.isElement(n) && X.isVoid(e, n)
                            }
                        }),
                        h = [];
                    for (var [m, g] of p) {
                        var _ = r && 0 === es.compare(g, r[1]);
                        if ("highest" !== o || !_) {
                            if (!l(m, g)) {
                                if (s && !_ && ew.isText(m)) return;
                                continue
                            }
                            if ("lowest" === o && _) {
                                r = [m, g];
                                continue
                            }
                            var b = "lowest" === o ? r : [m, g];
                            b && (s ? h.push(b) : yield b), r = [m, g]
                        }
                    }
                    "lowest" === o && r && (s ? h.push(r) : yield r), s && (yield* h)
                }
            },
            normalize(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        force: n = !1,
                        operation: r
                    } = t,
                    i = e => u.get(e) || [],
                    a = e => c.get(e) || new Set,
                    o = e => {
                        var t = i(e).pop(),
                            n = t.join(",");
                        return a(e).delete(n), t
                    };
                if (!!X.isNormalizing(e)) {
                    if (n) {
                        var s = Array.from(er.nodes(e), e => {
                                var [, t] = e;
                                return t
                            }),
                            l = new Set(s.map(e => e.join(",")));
                        u.set(e, s), c.set(e, l)
                    }
                    0 !== i(e).length && X.withoutNormalizing(e, () => {
                        for (var t of i(e))
                            if (er.has(e, t)) {
                                var n = X.node(e, t),
                                    [a, s] = n;
                                $.isElement(a) && 0 === a.children.length && e.normalizeNode(n, {
                                    operation: r
                                })
                            } for (var u = i(e), c = u.length, l = 0; 0 !== u.length;) {
                            if (!e.shouldNormalize({
                                    dirtyPaths: u,
                                    iteration: l,
                                    initialDirtyPathsLength: c,
                                    operation: r
                                })) return;
                            var d = o(e);
                            if (er.has(e, d)) {
                                var f = X.node(e, d);
                                e.normalizeNode(f, {
                                    operation: r
                                })
                            }
                            l++, u = i(e)
                        }
                    })
                }
            },
            parent(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = X.path(e, t, n),
                    i = es.parent(r);
                return X.node(e, i)
            },
            path(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        depth: r,
                        edge: i
                    } = n;
                if (es.isPath(t)) {
                    if ("start" === i) {
                        var [, a] = er.first(e, t);
                        t = a
                    } else if ("end" === i) {
                        var [, o] = er.last(e, t);
                        t = o
                    }
                }
                return em.isRange(t) && (t = "start" === i ? em.start(t) : "end" === i ? em.end(t) : es.common(t.anchor.path, t.focus.path)), ed.isPoint(t) && (t = t.path), null != r && (t = t.slice(0, r)), t
            },
            hasPath: (e, t) => er.has(e, t),
            pathRef(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        affinity: r = "forward"
                    } = n,
                    i = {
                        current: t,
                        affinity: r,
                        unref() {
                            var {
                                current: t
                            } = i;
                            return X.pathRefs(e).delete(i), i.current = null, t
                        }
                    };
                return X.pathRefs(e).add(i), i
            },
            pathRefs(e) {
                var t = f.get(e);
                return !t && (t = new Set, f.set(e, t)), t
            },
            point(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        edge: r = "start"
                    } = n;
                if (es.isPath(t)) {
                    if ("end" === r) {
                        var i, [, a] = er.last(e, t);
                        i = a
                    } else {
                        var [, o] = er.first(e, t);
                        i = o
                    }
                    var s = er.get(e, i);
                    if (!ew.isText(s)) throw Error("Cannot get the ".concat(r, " point in the node at path [").concat(t, "] because it has no ").concat(r, " text node."));
                    return {
                        path: i,
                        offset: "end" === r ? s.text.length : 0
                    }
                }
                if (em.isRange(t)) {
                    var [u, c] = em.edges(t);
                    return "start" === r ? u : c
                }
                return t
            },
            pointRef(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        affinity: r = "forward"
                    } = n,
                    i = {
                        current: t,
                        affinity: r,
                        unref() {
                            var {
                                current: t
                            } = i;
                            return X.pointRefs(e).delete(i), i.current = null, t
                        }
                    };
                return X.pointRefs(e).add(i), i
            },
            pointRefs(e) {
                var t = p.get(e);
                return !t && (t = new Set, p.set(e, t)), t
            },
            * positions(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: n = e.selection,
                        unit: r = "offset",
                        reverse: i = !1,
                        voids: a = !1
                    } = t;
                if (n) {
                    var o = X.range(e, n),
                        [s, u] = em.edges(o),
                        c = i ? u : s,
                        l = !1,
                        d = "",
                        f = 0,
                        p = 0,
                        h = 0;
                    for (var [m, g] of X.nodes(e, {
                            at: n,
                            reverse: i,
                            voids: a
                        })) {
                        if ($.isElement(m)) {
                            if (!a && e.isVoid(m)) {
                                yield X.start(e, g);
                                continue
                            }
                            if (e.isInline(m)) continue;
                            if (X.hasInlines(e, m)) {
                                var _ = es.isAncestor(g, u.path) ? u : X.end(e, g),
                                    b = es.isAncestor(g, s.path) ? s : X.start(e, g);
                                d = X.string(e, {
                                    anchor: b,
                                    focus: _
                                }, {
                                    voids: a
                                }), l = !0
                            }
                        }
                        if (ew.isText(m)) {
                            var y = es.equals(g, c.path);
                            for (y ? (p = i ? c.offset : m.text.length - c.offset, h = c.offset) : (p = m.text.length, h = i ? p : 0), (y || l || "offset" === r) && (yield {
                                    path: g,
                                    offset: h
                                }, l = !1);;) {
                                if (0 === f) {
                                    if ("" === d) break;
                                    f = function(e, t, n) {
                                        if ("character" === t) return v(e, n);
                                        if ("word" === t) return x(e, n);
                                        if ("line" === t || "block" === t) return e.length;
                                        return 1
                                    }(d, r, i), d = w(d, f, i)[1]
                                }
                                if (h = i ? h - f : h + f, (p -= f) < 0) {
                                    f = -p;
                                    break
                                }
                                f = 0, yield {
                                    path: g,
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
                        mode: n = "lowest",
                        voids: r = !1
                    } = t,
                    {
                        match: i,
                        at: a = e.selection
                    } = t;
                if (!!a) {
                    var o = X.before(e, a, {
                        voids: r
                    });
                    if (o) {
                        var [, s] = X.first(e, []), u = [o.path, s];
                        if (es.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                        if (null == i) {
                            if (es.isPath(a)) {
                                var [c] = X.parent(e, a);
                                i = e => c.children.includes(e)
                            } else i = () => !0
                        }
                        var [l] = X.nodes(e, {
                            reverse: !0,
                            at: u,
                            match: i,
                            mode: n,
                            voids: r
                        });
                        return l
                    }
                }
            },
            range: (e, t, n) => em.isRange(t) && !n ? t : {
                anchor: X.start(e, t),
                focus: X.end(e, n || t)
            },
            rangeRef(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        affinity: r = "forward"
                    } = n,
                    i = {
                        current: t,
                        affinity: r,
                        unref() {
                            var {
                                current: t
                            } = i;
                            return X.rangeRefs(e).delete(i), i.current = null, t
                        }
                    };
                return X.rangeRefs(e).add(i), i
            },
            rangeRefs(e) {
                var t = h.get(e);
                return !t && (t = new Set, h.set(e, t)), t
            },
            removeMark(e, t) {
                e.removeMark(t)
            },
            setNormalizing(e, t) {
                d.set(e, t)
            },
            start: (e, t) => X.point(e, t, {
                edge: "start"
            }),
            string(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        voids: r = !1
                    } = n,
                    i = X.range(e, t),
                    [a, o] = em.edges(i),
                    s = "";
                for (var [u, c] of X.nodes(e, {
                        at: i,
                        match: ew.isText,
                        voids: r
                    })) {
                    var l = u.text;
                    es.equals(c, o.path) && (l = l.slice(0, o.offset)), es.equals(c, a.path) && (l = l.slice(a.offset)), s += l
                }
                return s
            },
            unhangRange(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        voids: r = !1
                    } = n,
                    [i, a] = em.edges(t);
                if (0 !== i.offset || 0 !== a.offset || em.isCollapsed(t) || es.hasPrevious(a.path)) return t;
                var o = X.above(e, {
                        at: a,
                        match: t => $.isElement(t) && X.isBlock(e, t),
                        voids: r
                    }),
                    s = o ? o[1] : [],
                    u = {
                        anchor: X.start(e, i),
                        focus: a
                    },
                    c = !0;
                for (var [l, d] of X.nodes(e, {
                        at: u,
                        match: ew.isText,
                        reverse: !0,
                        voids: r
                    })) {
                    if (c) {
                        c = !1;
                        continue
                    }
                    if ("" !== l.text || es.isBefore(d, s)) {
                        a = {
                            path: d,
                            offset: l.text.length
                        };
                        break
                    }
                }
                return {
                    anchor: i,
                    focus: a
                }
            },
            void(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return X.above(e, Q(Q({}, t), {}, {
                    match: t => $.isElement(t) && X.isVoid(e, t)
                }))
            },
            withoutNormalizing(e, t) {
                var n = X.isNormalizing(e);
                X.setNormalizing(e, !1);
                try {
                    t()
                } finally {
                    X.setNormalizing(e, n)
                }
                X.normalize(e)
            }
        },
        J = {
            isSpan: e => Array.isArray(e) && 2 === e.length && e.every(es.isPath)
        },
        ee = ["children"],
        et = ["text"],
        en = new WeakMap,
        er = {
            ancestor(e, t) {
                var n = er.get(e, t);
                if (ew.isText(n)) throw Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(eb.stringify(n)));
                return n
            },
            * ancestors(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                for (var r of es.ancestors(t, n)) {
                    var i = [er.ancestor(e, r), r];
                    yield i
                }
            },
            child(e, t) {
                if (ew.isText(e)) throw Error("Cannot get the child of a text node: ".concat(eb.stringify(e)));
                var n = e.children[t];
                if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(eb.stringify(e)));
                return n
            },
            * children(e, t) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                        reverse: r = !1
                    } = n, i = er.ancestor(e, t), {
                        children: a
                    } = i, o = r ? a.length - 1 : 0; r ? o >= 0 : o < a.length;) {
                    var s = er.child(i, o),
                        u = t.concat(o);
                    yield [s, u], o = r ? o - 1 : o + 1
                }
            },
            common(e, t, n) {
                var r = es.common(t, n);
                return [er.get(e, r), r]
            },
            descendant(e, t) {
                var n = er.get(e, t);
                if (X.isEditor(n)) throw Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(eb.stringify(n)));
                return n
            },
            * descendants(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                for (var [n, r] of er.nodes(e, t)) 0 !== r.length && (yield [n, r])
            },
            * elements(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                for (var [n, r] of er.nodes(e, t)) $.isElement(n) && (yield [n, r])
            },
            extractProps(e) {
                if ($.isAncestor(e)) {
                    var t = b(e, ee);
                    return t
                }
                var t = b(e, et);
                return t
            },
            first(e, t) {
                for (var n = t.slice(), r = er.get(e, n); r && !ew.isText(r) && 0 !== r.children.length;) {
                    ;
                    r = r.children[0], n.push(0)
                }
                return [r, n]
            },
            fragment(e, t) {
                if (ew.isText(e)) throw Error("Cannot get a fragment starting from a root text node: ".concat(eb.stringify(e)));
                return (0, o.produce)({
                    children: e.children
                }, e => {
                    var [n, r] = em.edges(t);
                    for (var [, i] of er.nodes(e, {
                            reverse: !0,
                            pass: e => {
                                var [, n] = e;
                                return !em.includes(t, n)
                            }
                        })) {
                        if (!em.includes(t, i)) {
                            var a = er.parent(e, i),
                                o = i[i.length - 1];
                            a.children.splice(o, 1)
                        }
                        if (es.equals(i, r.path)) {
                            var s = er.leaf(e, i);
                            s.text = s.text.slice(0, r.offset)
                        }
                        if (es.equals(i, n.path)) {
                            var u = er.leaf(e, i);
                            u.text = u.text.slice(n.offset)
                        }
                    }
                    X.isEditor(e) && (e.selection = null)
                }).children
            },
            get(e, t) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (ew.isText(n) || !n.children[i]) throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(eb.stringify(e)));
                    n = n.children[i]
                }
                return n
            },
            has(e, t) {
                for (var n = e, r = 0; r < t.length; r++) {
                    var i = t[r];
                    if (ew.isText(n) || !n.children[i]) return !1;
                    n = n.children[i]
                }
                return !0
            },
            isNode: e => ew.isText(e) || $.isElement(e) || X.isEditor(e),
            isNodeList(e) {
                if (!Array.isArray(e)) return !1;
                var t = en.get(e);
                if (void 0 !== t) return t;
                var n = e.every(e => er.isNode(e));
                return en.set(e, n), n
            },
            last(e, t) {
                for (var n = t.slice(), r = er.get(e, n); r && !ew.isText(r) && 0 !== r.children.length;) {
                    ;
                    var i = r.children.length - 1;
                    r = r.children[i], n.push(i)
                }
                return [r, n]
            },
            leaf(e, t) {
                var n = er.get(e, t);
                if (!ew.isText(n)) throw Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(eb.stringify(n)));
                return n
            },
            * levels(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                for (var r of es.levels(t, n)) {
                    var i = er.get(e, r);
                    yield [i, r]
                }
            },
            matches: (e, t) => $.isElement(e) && $.isElementProps(t) && $.matches(e, t) || ew.isText(e) && ew.isTextProps(t) && ew.matches(e, t),
            * nodes(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        pass: n,
                        reverse: r = !1
                    } = t, {
                        from: i = [],
                        to: a
                    } = t, o = new Set, s = [], u = e; !(a && (r ? es.isBefore(s, a) : es.isAfter(s, a)));) {
                    ;
                    if (!o.has(u) && (yield [u, s]), !o.has(u) && !ew.isText(u) && 0 !== u.children.length && (null == n || !1 === n([u, s]))) {
                        o.add(u);
                        var c = r ? u.children.length - 1 : 0;
                        es.isAncestor(s, i) && (c = i[s.length]), s = s.concat(c), u = er.get(e, s);
                        continue
                    }
                    if (0 === s.length) break;
                    if (!r) {
                        var l = es.next(s);
                        if (er.has(e, l)) {
                            s = l, u = er.get(e, s);
                            continue
                        }
                    }
                    if (r && 0 !== s[s.length - 1]) {
                        s = es.previous(s), u = er.get(e, s);
                        continue
                    }
                    s = es.parent(s), u = er.get(e, s), o.add(u)
                }
            },
            parent(e, t) {
                var n = es.parent(t),
                    r = er.get(e, n);
                if (ew.isText(r)) throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
                return r
            },
            string: e => ew.isText(e) ? e.text : e.children.map(er.string).join(""),
            * texts(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                for (var [n, r] of er.nodes(e, t)) ew.isText(n) && (yield [n, r])
            }
        };

    function ei(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function ea(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ei(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ei(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var eo = {
            isNodeOperation: e => eo.isOperation(e) && e.type.endsWith("_node"),
            isOperation(e) {
                if (!(0, a.isPlainObject)(e)) return !1;
                switch (e.type) {
                    case "insert_node":
                    case "remove_node":
                        return es.isPath(e.path) && er.isNode(e.node);
                    case "insert_text":
                    case "remove_text":
                        return "number" == typeof e.offset && "string" == typeof e.text && es.isPath(e.path);
                    case "merge_node":
                        return "number" == typeof e.position && es.isPath(e.path) && (0, a.isPlainObject)(e.properties);
                    case "move_node":
                        return es.isPath(e.path) && es.isPath(e.newPath);
                    case "set_node":
                        return es.isPath(e.path) && (0, a.isPlainObject)(e.properties) && (0, a.isPlainObject)(e.newProperties);
                    case "set_selection":
                        return null === e.properties && em.isRange(e.newProperties) || null === e.newProperties && em.isRange(e.properties) || (0, a.isPlainObject)(e.properties) && (0, a.isPlainObject)(e.newProperties);
                    case "split_node":
                        return es.isPath(e.path) && "number" == typeof e.position && (0, a.isPlainObject)(e.properties);
                    default:
                        return !1
                }
            },
            isOperationList: e => Array.isArray(e) && e.every(e => eo.isOperation(e)),
            isSelectionOperation: e => eo.isOperation(e) && e.type.endsWith("_selection"),
            isTextOperation: e => eo.isOperation(e) && e.type.endsWith("_text"),
            inverse(e) {
                switch (e.type) {
                    case "insert_node":
                        return ea(ea({}, e), {}, {
                            type: "remove_node"
                        });
                    case "insert_text":
                        return ea(ea({}, e), {}, {
                            type: "remove_text"
                        });
                    case "merge_node":
                        return ea(ea({}, e), {}, {
                            type: "split_node",
                            path: es.previous(e.path)
                        });
                    case "move_node":
                        var {
                            newPath: t, path: n
                        } = e;
                        if (es.equals(t, n)) return e;
                        if (es.isSibling(n, t)) return ea(ea({}, e), {}, {
                            path: t,
                            newPath: n
                        });
                        var r = es.transform(n, e),
                            i = es.transform(es.next(n), e);
                        return ea(ea({}, e), {}, {
                            path: r,
                            newPath: i
                        });
                    case "remove_node":
                        return ea(ea({}, e), {}, {
                            type: "insert_node"
                        });
                    case "remove_text":
                        return ea(ea({}, e), {}, {
                            type: "insert_text"
                        });
                    case "set_node":
                        var {
                            properties: a, newProperties: o
                        } = e;
                        return ea(ea({}, e), {}, {
                            properties: o,
                            newProperties: a
                        });
                    case "set_selection":
                        var {
                            properties: s, newProperties: u
                        } = e;
                        if (null == s) return ea(ea({}, e), {}, {
                            properties: u,
                            newProperties: null
                        });
                        if (null == u) return ea(ea({}, e), {}, {
                            properties: null,
                            newProperties: s
                        });
                        else return ea(ea({}, e), {}, {
                            properties: u,
                            newProperties: s
                        });
                    case "split_node":
                        return ea(ea({}, e), {}, {
                            type: "merge_node",
                            path: es.next(e.path)
                        })
                }
            }
        },
        es = {
            ancestors(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        reverse: n = !1
                    } = t,
                    r = es.levels(e, t);
                return r = n ? r.slice(1) : r.slice(0, -1)
            },
            common(e, t) {
                for (var n = [], r = 0; r < e.length && r < t.length; r++) {
                    var i = e[r];
                    if (i !== t[r]) break;
                    n.push(i)
                }
                return n
            },
            compare(e, t) {
                for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                    if (e[r] < t[r]) return -1;
                    if (e[r] > t[r]) return 1
                }
                return 0
            },
            endsAfter(e, t) {
                var n = e.length - 1,
                    r = e.slice(0, n),
                    i = t.slice(0, n),
                    a = e[n],
                    o = t[n];
                return es.equals(r, i) && a > o
            },
            endsAt(e, t) {
                var n = e.length,
                    r = e.slice(0, n),
                    i = t.slice(0, n);
                return es.equals(r, i)
            },
            endsBefore(e, t) {
                var n = e.length - 1,
                    r = e.slice(0, n),
                    i = t.slice(0, n),
                    a = e[n],
                    o = t[n];
                return es.equals(r, i) && a < o
            },
            equals: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]),
            hasPrevious: e => e[e.length - 1] > 0,
            isAfter: (e, t) => 1 === es.compare(e, t),
            isAncestor: (e, t) => e.length < t.length && 0 === es.compare(e, t),
            isBefore: (e, t) => -1 === es.compare(e, t),
            isChild: (e, t) => e.length === t.length + 1 && 0 === es.compare(e, t),
            isCommon: (e, t) => e.length <= t.length && 0 === es.compare(e, t),
            isDescendant: (e, t) => e.length > t.length && 0 === es.compare(e, t),
            isParent: (e, t) => e.length + 1 === t.length && 0 === es.compare(e, t),
            isPath: e => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
            isSibling(e, t) {
                if (e.length !== t.length) return !1;
                var n = e.slice(0, -1),
                    r = t.slice(0, -1);
                return e[e.length - 1] !== t[t.length - 1] && es.equals(n, r)
            },
            levels(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        reverse: n = !1
                    } = t, r = [], i = 0; i <= e.length; i++) r.push(e.slice(0, i));
                return n && r.reverse(), r
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
                if (!es.isAncestor(t, e) && !es.equals(e, t)) throw Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
                return e.slice(t.length)
            },
            transform(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!e) return null;
                var r = [...e],
                    {
                        affinity: i = "forward"
                    } = n;
                if (0 === e.length) return r;
                switch (t.type) {
                    case "insert_node":
                        var {
                            path: a
                        } = t;
                        (es.equals(a, r) || es.endsBefore(a, r) || es.isAncestor(a, r)) && (r[a.length - 1] += 1);
                        break;
                    case "remove_node":
                        var {
                            path: o
                        } = t;
                        if (es.equals(o, r) || es.isAncestor(o, r)) return null;
                        es.endsBefore(o, r) && (r[o.length - 1] -= 1);
                        break;
                    case "merge_node":
                        var {
                            path: s, position: u
                        } = t;
                        es.equals(s, r) || es.endsBefore(s, r) ? r[s.length - 1] -= 1 : es.isAncestor(s, r) && (r[s.length - 1] -= 1, r[s.length] += u);
                        break;
                    case "split_node":
                        var {
                            path: c, position: l
                        } = t;
                        if (es.equals(c, r)) {
                            if ("forward" === i) r[r.length - 1] += 1;
                            else if ("backward" !== i) return null
                        } else es.endsBefore(c, r) ? r[c.length - 1] += 1 : es.isAncestor(c, r) && e[c.length] >= l && (r[c.length - 1] += 1, r[c.length] -= l);
                        break;
                    case "move_node":
                        var {
                            path: d, newPath: f
                        } = t;
                        if (es.equals(d, f)) break;
                        if (es.isAncestor(d, r) || es.equals(d, r)) {
                            var p = f.slice();
                            return es.endsBefore(d, f) && d.length < f.length && (p[d.length - 1] -= 1), p.concat(r.slice(d.length))
                        }
                        es.isSibling(d, f) && (es.isAncestor(f, r) || es.equals(f, r)) ? es.endsBefore(d, r) ? r[d.length - 1] -= 1 : r[d.length - 1] += 1 : es.endsBefore(f, r) || es.equals(f, r) || es.isAncestor(f, r) ? (es.endsBefore(d, r) && (r[d.length - 1] -= 1), r[f.length - 1] += 1) : es.endsBefore(d, r) && (es.equals(f, r) && (r[f.length - 1] += 1), r[d.length - 1] -= 1)
                }
                return r
            }
        },
        eu = {
            transform(e, t) {
                var {
                    current: n,
                    affinity: r
                } = e;
                if (null != n) {
                    var i = es.transform(n, t, {
                        affinity: r
                    });
                    e.current = i, null == i && e.unref()
                }
            }
        };

    function ec(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function el(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ec(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ec(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var ed = {
            compare(e, t) {
                var n = es.compare(e.path, t.path);
                if (0 === n) return e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0;
                return n
            },
            isAfter: (e, t) => 1 === ed.compare(e, t),
            isBefore: (e, t) => -1 === ed.compare(e, t),
            equals: (e, t) => e.offset === t.offset && es.equals(e.path, t.path),
            isPoint: e => (0, a.isPlainObject)(e) && "number" == typeof e.offset && es.isPath(e.path),
            transform(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (0, o.produce)(e, e => {
                    if (null === e) return null;
                    var {
                        affinity: r = "forward"
                    } = n, {
                        path: i,
                        offset: a
                    } = e;
                    switch (t.type) {
                        case "insert_node":
                        case "move_node":
                            e.path = es.transform(i, t, n);
                            break;
                        case "insert_text":
                            es.equals(t.path, i) && (t.offset < a || t.offset === a && "forward" === r) && (e.offset += t.text.length);
                            break;
                        case "merge_node":
                            es.equals(t.path, i) && (e.offset += t.position), e.path = es.transform(i, t, n);
                            break;
                        case "remove_text":
                            es.equals(t.path, i) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                            break;
                        case "remove_node":
                            if (es.equals(t.path, i) || es.isAncestor(t.path, i)) return null;
                            e.path = es.transform(i, t, n);
                            break;
                        case "split_node":
                            if (es.equals(t.path, i)) {
                                if (t.position === a && null == r) return null;
                                (t.position < a || t.position === a && "forward" === r) && (e.offset -= t.position, e.path = es.transform(i, t, el(el({}, n), {}, {
                                    affinity: "forward"
                                })))
                            } else e.path = es.transform(i, t, n)
                    }
                })
            }
        },
        ef = {
            transform(e, t) {
                var {
                    current: n,
                    affinity: r
                } = e;
                if (null != n) {
                    var i = ed.transform(n, t, {
                        affinity: r
                    });
                    e.current = i, null == i && e.unref()
                }
            }
        },
        ep = ["anchor", "focus"];

    function eh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }
    var em = {
            edges(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        reverse: n = !1
                    } = t,
                    {
                        anchor: r,
                        focus: i
                    } = e;
                return em.isBackward(e) === n ? [r, i] : [i, r]
            },
            end(e) {
                var [, t] = em.edges(e);
                return t
            },
            equals: (e, t) => ed.equals(e.anchor, t.anchor) && ed.equals(e.focus, t.focus),
            includes(e, t) {
                if (em.isRange(t)) {
                    if (em.includes(e, t.anchor) || em.includes(e, t.focus)) return !0;
                    var [n, r] = em.edges(e), [i, a] = em.edges(t);
                    return ed.isBefore(n, i) && ed.isAfter(r, a)
                }
                var [o, s] = em.edges(e), u = !1, c = !1;
                return ed.isPoint(t) ? (u = ed.compare(t, o) >= 0, c = 0 >= ed.compare(t, s)) : (u = es.compare(t, o.path) >= 0, c = 0 >= es.compare(t, s.path)), u && c
            },
            intersection(e, t) {
                var n = b(e, ep),
                    [r, i] = em.edges(e),
                    [a, o] = em.edges(t),
                    u = ed.isBefore(r, a) ? a : r,
                    c = ed.isBefore(i, o) ? i : o;
                return ed.isBefore(c, u) ? null : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? eh(Object(n), !0).forEach(function(t) {
                            s(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eh(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({
                    anchor: u,
                    focus: c
                }, n)
            },
            isBackward(e) {
                var {
                    anchor: t,
                    focus: n
                } = e;
                return ed.isAfter(t, n)
            },
            isCollapsed(e) {
                var {
                    anchor: t,
                    focus: n
                } = e;
                return ed.equals(t, n)
            },
            isExpanded: e => !em.isCollapsed(e),
            isForward: e => !em.isBackward(e),
            isRange: e => (0, a.isPlainObject)(e) && ed.isPoint(e.anchor) && ed.isPoint(e.focus),
            * points(e) {
                yield [e.anchor, "anchor"], yield [e.focus, "focus"]
            },
            start(e) {
                var [t] = em.edges(e);
                return t
            },
            transform(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return (0, o.produce)(e, e => {
                    if (null === e) return null;
                    var r, i, {
                        affinity: a = "inward"
                    } = n;
                    if ("inward" === a) {
                        var o = em.isCollapsed(e);
                        em.isForward(e) ? (r = "forward", i = o ? r : "backward") : (r = "backward", i = o ? r : "forward")
                    } else "outward" === a ? em.isForward(e) ? (r = "backward", i = "forward") : (r = "forward", i = "backward") : (r = a, i = a);
                    var s = ed.transform(e.anchor, t, {
                            affinity: r
                        }),
                        u = ed.transform(e.focus, t, {
                            affinity: i
                        });
                    if (!s || !u) return null;
                    e.anchor = s, e.focus = u
                })
            }
        },
        eg = {
            transform(e, t) {
                var {
                    current: n,
                    affinity: r
                } = e;
                if (null != n) {
                    var i = em.transform(n, t, {
                        affinity: r
                    });
                    e.current = i, null == i && e.unref()
                }
            }
        },
        e_ = void 0,
        eb = {
            setScrubber(e) {
                e_ = e
            },
            stringify: e => JSON.stringify(e, e_)
        },
        ev = (e, t) => {
            for (var n in e) {
                var r = e[n],
                    i = t[n];
                if ((0, a.isPlainObject)(r) && (0, a.isPlainObject)(i)) {
                    if (!ev(r, i)) return !1
                } else if (Array.isArray(r) && Array.isArray(i)) {
                    if (r.length !== i.length) return !1;
                    for (var o = 0; o < r.length; o++)
                        if (r[o] !== i[o]) return !1
                } else if (r !== i) return !1
            }
            for (var s in t)
                if (void 0 === e[s] && void 0 !== t[s]) return !1;
            return !0
        },
        ey = ["text"],
        eE = ["anchor", "focus"];

    function eS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function ex(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eS(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eS(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var ew = {
        equals(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                {
                    loose: r = !1
                } = n;

            function i(e) {
                return b(e, ey)
            }
            return ev(r ? b(e, ey) : e, r ? b(t, ey) : t)
        },
        isText: e => (0, a.isPlainObject)(e) && "string" == typeof e.text,
        isTextList: e => Array.isArray(e) && e.every(e => ew.isText(e)),
        isTextProps: e => void 0 !== e.text,
        matches(e, t) {
            for (var n in t)
                if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
            return !0
        },
        decorations(e, t) {
            var n = [ex({}, e)];
            for (var r of t) {
                var i = b(r, eE),
                    [a, o] = em.edges(r),
                    s = [],
                    u = 0,
                    c = a.offset,
                    l = o.offset;
                for (var d of n) {
                    var {
                        length: f
                    } = d.text, p = u;
                    if (u += f, c <= p && u <= l) {
                        Object.assign(d, i), s.push(d);
                        continue
                    }
                    if (c !== l && (c === u || l === p) || c > u || l < p || l === p && 0 !== p) {
                        s.push(d);
                        continue
                    }
                    var h = d,
                        m = void 0,
                        g = void 0;
                    if (l < u) {
                        var _ = l - p;
                        g = ex(ex({}, h), {}, {
                            text: h.text.slice(_)
                        }), h = ex(ex({}, h), {}, {
                            text: h.text.slice(0, _)
                        })
                    }
                    if (c > p) {
                        var v = c - p;
                        m = ex(ex({}, h), {}, {
                            text: h.text.slice(0, v)
                        }), h = ex(ex({}, h), {}, {
                            text: h.text.slice(v)
                        })
                    }
                    Object.assign(h, i), m && s.push(m), s.push(h), g && s.push(g)
                }
                n = s
            }
            return n
        }
    };

    function eT(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function eC(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eT(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eT(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var eD = (e, t, n) => {
            switch (n.type) {
                case "insert_node":
                    var {
                        path: r, node: i
                    } = n, a = er.parent(e, r), o = r[r.length - 1];
                    if (o > a.children.length) throw Error('Cannot apply an "insert_node" operation at path ['.concat(r, "] because the destination is past the end of the node."));
                    if (a.children.splice(o, 0, i), t)
                        for (var [s, u] of em.points(t)) t[u] = ed.transform(s, n);
                    break;
                case "insert_text":
                    var {
                        path: c, offset: l, text: d
                    } = n;
                    if (0 === d.length) break;
                    var f = er.leaf(e, c),
                        p = f.text.slice(0, l),
                        h = f.text.slice(l);
                    if (f.text = p + d + h, t)
                        for (var [m, g] of em.points(t)) t[g] = ed.transform(m, n);
                    break;
                case "merge_node":
                    var {
                        path: _
                    } = n, b = er.get(e, _), v = es.previous(_), y = er.get(e, v), E = er.parent(e, _), S = _[_.length - 1];
                    if (ew.isText(b) && ew.isText(y)) y.text += b.text;
                    else if (ew.isText(b) || ew.isText(y)) throw Error('Cannot apply a "merge_node" operation at path ['.concat(_, "] to nodes of different interfaces: ").concat(eb.stringify(b), " ").concat(eb.stringify(y)));
                    else y.children.push(...b.children);
                    if (E.children.splice(S, 1), t)
                        for (var [x, w] of em.points(t)) t[w] = ed.transform(x, n);
                    break;
                case "move_node":
                    var {
                        path: T, newPath: C
                    } = n;
                    if (es.isAncestor(T, C)) throw Error("Cannot move a path [".concat(T, "] to new path [").concat(C, "] because the destination is inside itself."));
                    var D = er.get(e, T),
                        O = er.parent(e, T),
                        M = T[T.length - 1];
                    O.children.splice(M, 1);
                    var A = es.transform(T, n),
                        k = er.get(e, es.parent(A)),
                        R = A[A.length - 1];
                    if (k.children.splice(R, 0, D), t)
                        for (var [N, I] of em.points(t)) t[I] = ed.transform(N, n);
                    break;
                case "remove_node":
                    var {
                        path: L
                    } = n, P = L[L.length - 1];
                    if (er.parent(e, L).children.splice(P, 1), t)
                        for (var [F, B] of em.points(t)) {
                            var U = ed.transform(F, n);
                            if (null != t && null != U) t[B] = U;
                            else {
                                var Y = void 0,
                                    j = void 0;
                                for (var [z, H] of er.texts(e))
                                    if (-1 === es.compare(H, L)) Y = [z, H];
                                    else {
                                        j = [z, H];
                                        break
                                    } var G = !1;
                                Y && j && (G = es.equals(j[1], L) ? !es.hasPrevious(j[1]) : es.common(Y[1], L).length < es.common(j[1], L).length), Y && !G ? (F.path = Y[1], F.offset = Y[0].text.length) : j ? (F.path = j[1], F.offset = 0) : t = null
                            }
                        }
                    break;
                case "remove_text":
                    var {
                        path: V, offset: $, text: W
                    } = n;
                    if (0 === W.length) break;
                    var K = er.leaf(e, V),
                        q = K.text.slice(0, $),
                        Q = K.text.slice($ + W.length);
                    if (K.text = q + Q, t)
                        for (var [Z, X] of em.points(t)) t[X] = ed.transform(Z, n);
                    break;
                case "set_node":
                    var {
                        path: J, properties: ee, newProperties: et
                    } = n;
                    if (0 === J.length) throw Error("Cannot set properties on the root node!");
                    var en = er.get(e, J);
                    for (var ei in et) {
                        if ("children" === ei || "text" === ei) throw Error('Cannot set the "'.concat(ei, '" property of nodes!'));
                        var ea = et[ei];
                        null == ea ? delete en[ei] : en[ei] = ea
                    }
                    for (var eo in ee) !et.hasOwnProperty(eo) && delete en[eo];
                    break;
                case "set_selection":
                    var {
                        newProperties: eu
                    } = n;
                    if (null == eu) t = eu;
                    else {
                        if (null == t) {
                            if (!em.isRange(eu)) throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(eb.stringify(eu), " when there is no current selection."));
                            t = eC({}, eu)
                        }
                        for (var ec in eu) {
                            var el = eu[ec];
                            if (null == el) {
                                if ("anchor" === ec || "focus" === ec) throw Error('Cannot remove the "'.concat(ec, '" selection property'));
                                delete t[ec]
                            } else t[ec] = el
                        }
                    }
                    break;
                case "split_node":
                    var ef, {
                        path: ep,
                        position: eh,
                        properties: eg
                    } = n;
                    if (0 === ep.length) throw Error('Cannot apply a "split_node" operation at path ['.concat(ep, "] because the root node cannot be split."));
                    var e_ = er.get(e, ep),
                        ev = er.parent(e, ep),
                        ey = ep[ep.length - 1];
                    if (ew.isText(e_)) {
                        var eE = e_.text.slice(0, eh),
                            eS = e_.text.slice(eh);
                        e_.text = eE, ef = eC(eC({}, eg), {}, {
                            text: eS
                        })
                    } else {
                        var ex = e_.children.slice(0, eh),
                            eT = e_.children.slice(eh);
                        e_.children = ex, ef = eC(eC({}, eg), {}, {
                            children: eT
                        })
                    }
                    if (ev.children.splice(ey + 1, 0, ef), t)
                        for (var [eD, eO] of em.points(t)) t[eO] = ed.transform(eD, n)
            }
            return t
        },
        eO = ["text"],
        eM = ["children"];

    function eA(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function ek(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eA(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eA(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var eR = (e, t) => {
            if ($.isElement(t)) return !!X.isVoid(e, t) || 1 === t.children.length && eR(e, t.children[0]);
            if (X.isEditor(t)) return !1;
            return !0
        },
        eN = (e, t) => {
            if (em.isCollapsed(t)) return t.anchor;
            var [, n] = em.edges(t), r = X.pointRef(e, n);
            return eU.delete(e, {
                at: t
            }), r.unref()
        },
        eI = (e, t) => {
            var [n] = X.node(e, t);
            return e => e === n
        };

    function eL(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function eP(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eL(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eL(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function eF(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function eB(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? eF(Object(n), !0).forEach(function(t) {
                s(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eF(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var eU = eB(eB(eB(eB({}, {
        transform(e, t) {
            e.children = (0, o.createDraft)(e.children);
            var n = e.selection && (0, o.createDraft)(e.selection);
            try {
                n = eD(e, n, t)
            } finally {
                e.children = (0, o.finishDraft)(e.children), n ? e.selection = (0, o.isDraft)(n) ? (0, o.finishDraft)(n) : n : e.selection = null
            }
        }
    }), {
        insertNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var {
                    hanging: r = !1,
                    voids: i = !1,
                    mode: a = "lowest"
                } = n, {
                    at: o,
                    match: s,
                    select: u
                } = n;
                if (er.isNode(t) && (t = [t]), 0 !== t.length) {
                    var [c] = t;
                    if (!o && (o = e.selection ? e.selection : e.children.length > 0 ? X.end(e, []) : [0], u = !0), null == u && (u = !1), em.isRange(o)) {
                        if (!r && (o = X.unhangRange(e, o, {
                                voids: i
                            })), em.isCollapsed(o)) o = o.anchor;
                        else {
                            var [, l] = em.edges(o), d = X.pointRef(e, l);
                            eU.delete(e, {
                                at: o
                            }), o = d.unref()
                        }
                    }
                    if (ed.isPoint(o)) {
                        null == s && (s = ew.isText(c) ? e => ew.isText(e) : e.isInline(c) ? t => ew.isText(t) || X.isInline(e, t) : t => $.isElement(t) && X.isBlock(e, t));
                        var [f] = X.nodes(e, {
                            at: o.path,
                            match: s,
                            mode: a,
                            voids: i
                        });
                        if (!f) return;
                        var [, p] = f, h = X.pathRef(e, p), m = X.isEnd(e, o, p);
                        eU.splitNodes(e, {
                            at: o,
                            match: s,
                            mode: a,
                            voids: i
                        });
                        var g = h.unref();
                        o = m ? es.next(g) : g
                    }
                    var _ = es.parent(o),
                        b = o[o.length - 1];
                    if (!(!i && X.void(e, {
                            at: _
                        }))) {
                        for (var v of t) {
                            var y = _.concat(b);
                            b++, e.apply({
                                type: "insert_node",
                                path: y,
                                node: v
                            }), o = es.next(o)
                        }
                        if (o = es.previous(o), u) {
                            var E = X.end(e, o);
                            E && eU.select(e, E)
                        }
                    }
                }
            })
        },
        liftNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            X.withoutNormalizing(e, () => {
                var {
                    at: n = e.selection,
                    mode: r = "lowest",
                    voids: i = !1
                } = t, {
                    match: a
                } = t;
                if (null == a && (a = es.isPath(n) ? eI(e, n) : t => $.isElement(t) && X.isBlock(e, t)), n)
                    for (var o of Array.from(X.nodes(e, {
                            at: n,
                            match: a,
                            mode: r,
                            voids: i
                        }), t => {
                            var [, n] = t;
                            return X.pathRef(e, n)
                        })) {
                        var s = o.unref();
                        if (s.length < 2) throw Error("Cannot lift node at a path [".concat(s, "] because it has a depth of less than `2`."));
                        var [u, c] = X.node(e, es.parent(s)), l = s[s.length - 1], {
                            length: d
                        } = u.children;
                        if (1 === d) {
                            var f = es.next(c);
                            eU.moveNodes(e, {
                                at: s,
                                to: f,
                                voids: i
                            }), eU.removeNodes(e, {
                                at: c,
                                voids: i
                            })
                        } else if (0 === l) eU.moveNodes(e, {
                            at: s,
                            to: c,
                            voids: i
                        });
                        else if (l === d - 1) {
                            var p = es.next(c);
                            eU.moveNodes(e, {
                                at: s,
                                to: p,
                                voids: i
                            })
                        } else {
                            var h = es.next(s),
                                m = es.next(c);
                            eU.splitNodes(e, {
                                at: h,
                                voids: i
                            }), eU.moveNodes(e, {
                                at: s,
                                to: m,
                                voids: i
                            })
                        }
                    }
            })
        },
        mergeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            X.withoutNormalizing(e, () => {
                var n, r, {
                        match: i,
                        at: a = e.selection
                    } = t,
                    {
                        hanging: o = !1,
                        voids: s = !1,
                        mode: u = "lowest"
                    } = t;
                if (!a) return;
                if (null == i) {
                    if (es.isPath(a)) {
                        var [c] = X.parent(e, a);
                        i = e => c.children.includes(e)
                    } else i = t => $.isElement(t) && X.isBlock(e, t)
                }
                if (!o && em.isRange(a) && (a = X.unhangRange(e, a, {
                        voids: s
                    })), em.isRange(a)) {
                    if (em.isCollapsed(a)) a = a.anchor;
                    else {
                        var [, l] = em.edges(a), d = X.pointRef(e, l);
                        eU.delete(e, {
                            at: a
                        }), a = d.unref(), null == t.at && eU.select(e, a)
                    }
                }
                var [f] = X.nodes(e, {
                    at: a,
                    match: i,
                    voids: s,
                    mode: u
                }), p = X.previous(e, {
                    at: a,
                    match: i,
                    voids: s,
                    mode: u
                });
                if (!!f && !!p) {
                    var [h, m] = f, [g, _] = p;
                    if (0 !== m.length && 0 !== _.length) {
                        var v = es.next(_),
                            y = es.common(m, _),
                            E = es.isSibling(m, _),
                            S = Array.from(X.levels(e, {
                                at: m
                            }), e => {
                                var [t] = e;
                                return t
                            }).slice(y.length).slice(0, -1),
                            x = X.above(e, {
                                at: m,
                                mode: "highest",
                                match: t => S.includes(t) && eR(e, t)
                            }),
                            w = x && X.pathRef(e, x[1]);
                        if (ew.isText(h) && ew.isText(g)) {
                            var T = b(h, eO);
                            r = g.text.length, n = T
                        } else if ($.isElement(h) && $.isElement(g)) {
                            var T = b(h, eM);
                            r = g.children.length, n = T
                        } else throw Error("Cannot merge the node at path [".concat(m, "] with the previous sibling because it is not the same kind: ").concat(eb.stringify(h), " ").concat(eb.stringify(g)));
                        !E && eU.moveNodes(e, {
                            at: m,
                            to: v,
                            voids: s
                        }), w && eU.removeNodes(e, {
                            at: w.current,
                            voids: s
                        }), $.isElement(g) && X.isEmpty(e, g) || ew.isText(g) && "" === g.text && 0 !== _[_.length - 1] ? eU.removeNodes(e, {
                            at: _,
                            voids: s
                        }) : e.apply({
                            type: "merge_node",
                            path: v,
                            position: r,
                            properties: n
                        }), w && w.unref()
                    }
                }
            })
        },
        moveNodes(e, t) {
            X.withoutNormalizing(e, () => {
                var {
                    to: n,
                    at: r = e.selection,
                    mode: i = "lowest",
                    voids: a = !1
                } = t, {
                    match: o
                } = t;
                if (r) {
                    null == o && (o = es.isPath(r) ? eI(e, r) : t => $.isElement(t) && X.isBlock(e, t));
                    var s = X.pathRef(e, n);
                    for (var u of Array.from(X.nodes(e, {
                            at: r,
                            match: o,
                            mode: i,
                            voids: a
                        }), t => {
                            var [, n] = t;
                            return X.pathRef(e, n)
                        })) {
                        var c = u.unref(),
                            l = s.current;
                        0 !== c.length && e.apply({
                            type: "move_node",
                            path: c,
                            newPath: l
                        }), s.current && es.isSibling(l, c) && es.isAfter(l, c) && (s.current = es.next(s.current))
                    }
                    s.unref()
                }
            })
        },
        removeNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            X.withoutNormalizing(e, () => {
                var {
                    hanging: n = !1,
                    voids: r = !1,
                    mode: i = "lowest"
                } = t, {
                    at: a = e.selection,
                    match: o
                } = t;
                if (a)
                    for (var s of (null == o && (o = es.isPath(a) ? eI(e, a) : t => $.isElement(t) && X.isBlock(e, t)), !n && em.isRange(a) && (a = X.unhangRange(e, a, {
                            voids: r
                        })), Array.from(X.nodes(e, {
                            at: a,
                            match: o,
                            mode: i,
                            voids: r
                        }), t => {
                            var [, n] = t;
                            return X.pathRef(e, n)
                        }))) {
                        var u = s.unref();
                        if (u) {
                            var [c] = X.node(e, u);
                            e.apply({
                                type: "remove_node",
                                path: u,
                                node: c
                            })
                        }
                    }
            })
        },
        setNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var {
                    match: r,
                    at: i = e.selection,
                    compare: a,
                    merge: o
                } = n, {
                    hanging: s = !1,
                    mode: u = "lowest",
                    split: c = !1,
                    voids: l = !1
                } = n;
                if (i) {
                    if (null == r && (r = es.isPath(i) ? eI(e, i) : t => $.isElement(t) && X.isBlock(e, t)), !s && em.isRange(i) && (i = X.unhangRange(e, i, {
                            voids: l
                        })), c && em.isRange(i)) {
                        if (em.isCollapsed(i) && X.leaf(e, i.anchor)[0].text.length > 0) return;
                        var d = X.rangeRef(e, i, {
                                affinity: "inward"
                            }),
                            [f, p] = em.edges(i),
                            h = "lowest" === u ? "lowest" : "highest",
                            m = X.isEnd(e, p, p.path);
                        eU.splitNodes(e, {
                            at: p,
                            match: r,
                            mode: h,
                            voids: l,
                            always: !m
                        });
                        var g = X.isStart(e, f, f.path);
                        eU.splitNodes(e, {
                            at: f,
                            match: r,
                            mode: h,
                            voids: l,
                            always: !g
                        }), i = d.unref(), null == n.at && eU.select(e, i)
                    }
                    for (var [_, b] of(!a && (a = (e, t) => e !== t), X.nodes(e, {
                            at: i,
                            match: r,
                            mode: u,
                            voids: l
                        }))) {
                        var v = {},
                            y = {};
                        if (0 !== b.length) {
                            var E = !1;
                            for (var S in t) "children" !== S && "text" !== S && a(t[S], _[S]) && (E = !0, _.hasOwnProperty(S) && (v[S] = _[S]), o ? null != t[S] && (y[S] = o(_[S], t[S])) : null != t[S] && (y[S] = t[S]));
                            E && e.apply({
                                type: "set_node",
                                path: b,
                                properties: v,
                                newProperties: y
                            })
                        }
                    }
                }
            })
        },
        splitNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            X.withoutNormalizing(e, () => {
                var n, r, {
                        mode: i = "lowest",
                        voids: a = !1
                    } = t,
                    {
                        match: o,
                        at: s = e.selection,
                        height: u = 0,
                        always: c = !1
                    } = t;
                if (null == o && (o = t => $.isElement(t) && X.isBlock(e, t)), em.isRange(s) && (s = eN(e, s)), es.isPath(s)) {
                    var l = s,
                        d = X.point(e, l),
                        [f] = X.parent(e, l);
                    o = e => e === f, u = d.path.length - l.length + 1, s = d, c = !0
                }
                if (s) {
                    var p = X.pointRef(e, s, {
                        affinity: "backward"
                    });
                    try {
                        var [h] = X.nodes(e, {
                            at: s,
                            match: o,
                            mode: i,
                            voids: a
                        });
                        if (!h) return;
                        var m = X.void(e, {
                            at: s,
                            mode: "highest"
                        });
                        if (!a && m) {
                            var [g, _] = m;
                            if ($.isElement(g) && e.isInline(g)) {
                                var b = X.after(e, _);
                                if (!b) {
                                    var v = es.next(_);
                                    eU.insertNodes(e, {
                                        text: ""
                                    }, {
                                        at: v,
                                        voids: a
                                    }), b = X.point(e, v)
                                }
                                s = b, c = !0
                            }
                            u = s.path.length - _.length + 1, c = !0
                        }
                        n = X.pointRef(e, s);
                        var y = s.path.length - u,
                            [, E] = h,
                            S = s.path.slice(0, y),
                            x = 0 === u ? s.offset : s.path[y] + 0;
                        for (var [w, T] of X.levels(e, {
                                at: S,
                                reverse: !0,
                                voids: a
                            })) {
                            var C = !1;
                            if (T.length < E.length || 0 === T.length || !a && $.isElement(w) && X.isVoid(e, w)) break;
                            var D = p.current,
                                O = X.isEnd(e, D, T);
                            if (c || !p || !X.isEdge(e, D, T)) {
                                C = !0;
                                var M = er.extractProps(w);
                                e.apply({
                                    type: "split_node",
                                    path: T,
                                    position: x,
                                    properties: M
                                })
                            }
                            x = T[T.length - 1] + (C || O ? 1 : 0)
                        }
                        if (null == t.at) {
                            var A = n.current || X.end(e, []);
                            eU.select(e, A)
                        }
                    } finally {
                        p.unref(), null === (r = n) || void 0 === r || r.unref()
                    }
                }
            })
        },
        unsetNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            !Array.isArray(t) && (t = [t]);
            var r = {};
            for (var i of t) r[i] = null;
            eU.setNodes(e, r, n)
        },
        unwrapNodes(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            X.withoutNormalizing(e, () => {
                var {
                    mode: n = "lowest",
                    split: r = !1,
                    voids: i = !1
                } = t, {
                    at: a = e.selection,
                    match: o
                } = t;
                if (a) {
                    null == o && (o = es.isPath(a) ? eI(e, a) : t => $.isElement(t) && X.isBlock(e, t)), es.isPath(a) && (a = X.range(e, a));
                    var s = em.isRange(a) ? X.rangeRef(e, a) : null,
                        u = Array.from(X.nodes(e, {
                            at: a,
                            match: o,
                            mode: n,
                            voids: i
                        }), t => {
                            var [, n] = t;
                            return X.pathRef(e, n)
                        }).reverse();
                    for (var c of u) ! function(t) {
                        var n = t.unref(),
                            [a] = X.node(e, n),
                            o = X.range(e, n);
                        r && s && (o = em.intersection(s.current, o)), eU.liftNodes(e, {
                            at: o,
                            match: e => $.isAncestor(a) && a.children.includes(e),
                            voids: i
                        })
                    }(c);
                    s && s.unref()
                }
            })
        },
        wrapNodes(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var {
                    mode: r = "lowest",
                    split: i = !1,
                    voids: a = !1
                } = n, {
                    match: o,
                    at: s = e.selection
                } = n;
                if (s) {
                    if (null == o && (o = es.isPath(s) ? eI(e, s) : e.isInline(t) ? t => $.isElement(t) && X.isInline(e, t) || ew.isText(t) : t => $.isElement(t) && X.isBlock(e, t)), i && em.isRange(s)) {
                        var [u, c] = em.edges(s), l = X.rangeRef(e, s, {
                            affinity: "inward"
                        });
                        eU.splitNodes(e, {
                            at: c,
                            match: o,
                            voids: a
                        }), eU.splitNodes(e, {
                            at: u,
                            match: o,
                            voids: a
                        }), s = l.unref(), null == n.at && eU.select(e, s)
                    }
                    for (var [, d] of Array.from(X.nodes(e, {
                            at: s,
                            match: e.isInline(t) ? t => $.isElement(t) && X.isBlock(e, t) : e => X.isEditor(e),
                            mode: "lowest",
                            voids: a
                        }))) {
                        var f = em.isRange(s) ? em.intersection(s, X.range(e, d)) : s;
                        if (f) {
                            var p = Array.from(X.nodes(e, {
                                at: f,
                                match: o,
                                mode: r,
                                voids: a
                            }));
                            if (p.length > 0 && "continue" === function() {
                                    var [n] = p, r = p[p.length - 1], [, i] = n, [, o] = r;
                                    if (0 === i.length && 0 === o.length) return "continue";
                                    var s = es.equals(i, o) ? es.parent(i) : es.common(i, o),
                                        u = X.range(e, i, o),
                                        [c] = X.node(e, s),
                                        l = s.length + 1,
                                        d = es.next(o.slice(0, l)),
                                        f = ek(ek({}, t), {}, {
                                            children: []
                                        });
                                    eU.insertNodes(e, f, {
                                        at: d,
                                        voids: a
                                    }), eU.moveNodes(e, {
                                        at: u,
                                        match: e => $.isAncestor(c) && c.children.includes(e),
                                        to: d.concat(0),
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
                    edge: n = "anchor"
                } = t,
                {
                    selection: r
                } = e;
            if (!!r) {
                if ("anchor" === n) eU.select(e, r.anchor);
                else if ("focus" === n) eU.select(e, r.focus);
                else if ("start" === n) {
                    var [i] = em.edges(r);
                    eU.select(e, i)
                } else if ("end" === n) {
                    var [, a] = em.edges(r);
                    eU.select(e, a)
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
                    selection: n
                } = e,
                {
                    distance: r = 1,
                    unit: i = "character",
                    reverse: a = !1
                } = t,
                {
                    edge: o = null
                } = t;
            if (n) {
                "start" === o && (o = em.isBackward(n) ? "focus" : "anchor"), "end" === o && (o = em.isBackward(n) ? "anchor" : "focus");
                var {
                    anchor: s,
                    focus: u
                } = n, c = {
                    distance: r,
                    unit: i
                }, l = {};
                if (null == o || "anchor" === o) {
                    var d = a ? X.before(e, s, c) : X.after(e, s, c);
                    d && (l.anchor = d)
                }
                if (null == o || "focus" === o) {
                    var f = a ? X.before(e, u, c) : X.after(e, u, c);
                    f && (l.focus = f)
                }
                eU.setSelection(e, l)
            }
        },
        select(e, t) {
            var {
                selection: n
            } = e;
            if (t = X.range(e, t), n) {
                eU.setSelection(e, t);
                return
            }
            if (!em.isRange(t)) throw Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(eb.stringify(t)));
            e.apply({
                type: "set_selection",
                properties: n,
                newProperties: t
            })
        },
        setPoint(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                {
                    selection: r
                } = e,
                {
                    edge: i = "both"
                } = n;
            if (r) {
                "start" === i && (i = em.isBackward(r) ? "focus" : "anchor"), "end" === i && (i = em.isBackward(r) ? "anchor" : "focus");
                var {
                    anchor: a,
                    focus: o
                } = r, s = "anchor" === i ? a : o;
                eU.setSelection(e, {
                    ["anchor" === i ? "anchor" : "focus"]: eP(eP({}, s), t)
                })
            }
        },
        setSelection(e, t) {
            var {
                selection: n
            } = e, r = {}, i = {};
            if (n) {
                for (var a in t)("anchor" === a && null != t.anchor && !ed.equals(t.anchor, n.anchor) || "focus" === a && null != t.focus && !ed.equals(t.focus, n.focus) || "anchor" !== a && "focus" !== a && t[a] !== n[a]) && (r[a] = n[a], i[a] = t[a]);
                Object.keys(r).length > 0 && e.apply({
                    type: "set_selection",
                    properties: r,
                    newProperties: i
                })
            }
        }
    }), {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            X.withoutNormalizing(e, () => {
                var n, {
                        reverse: r = !1,
                        unit: i = "character",
                        distance: a = 1,
                        voids: o = !1
                    } = t,
                    {
                        at: s = e.selection,
                        hanging: u = !1
                    } = t;
                if (!!s) {
                    var c = !1;
                    if (em.isRange(s) && em.isCollapsed(s) && (c = !0, s = s.anchor), ed.isPoint(s)) {
                        var l = X.void(e, {
                            at: s,
                            mode: "highest"
                        });
                        if (!o && l) {
                            var [, d] = l;
                            s = d
                        } else {
                            var f = {
                                    unit: i,
                                    distance: a
                                },
                                p = r ? X.before(e, s, f) || X.start(e, []) : X.after(e, s, f) || X.end(e, []);
                            s = {
                                anchor: s,
                                focus: p
                            }, u = !0
                        }
                    }
                    if (es.isPath(s)) {
                        eU.removeNodes(e, {
                            at: s,
                            voids: o
                        });
                        return
                    }
                    if (!em.isCollapsed(s)) {
                        if (!u) {
                            var [, h] = em.edges(s), m = X.end(e, []);
                            !ed.equals(h, m) && (s = X.unhangRange(e, s, {
                                voids: o
                            }))
                        }
                        var [g, _] = em.edges(s), b = X.above(e, {
                            match: t => $.isElement(t) && X.isBlock(e, t),
                            at: g,
                            voids: o
                        }), v = X.above(e, {
                            match: t => $.isElement(t) && X.isBlock(e, t),
                            at: _,
                            voids: o
                        }), y = b && v && !es.equals(b[1], v[1]), E = es.equals(g.path, _.path), S = o ? null : X.void(e, {
                            at: g,
                            mode: "highest"
                        }), x = o ? null : X.void(e, {
                            at: _,
                            mode: "highest"
                        });
                        if (S) {
                            var w = X.before(e, g);
                            w && b && es.isAncestor(b[1], w.path) && (g = w)
                        }
                        if (x) {
                            var T = X.after(e, _);
                            T && v && es.isAncestor(v[1], T.path) && (_ = T)
                        }
                        var C = [];
                        for (var D of X.nodes(e, {
                                at: s,
                                voids: o
                            })) {
                            var [O, M] = D;
                            (!n || 0 !== es.compare(M, n)) && (!o && $.isElement(O) && X.isVoid(e, O) || !es.isCommon(M, g.path) && !es.isCommon(M, _.path)) && (C.push(D), n = M)
                        }
                        var A = Array.from(C, t => {
                                var [, n] = t;
                                return X.pathRef(e, n)
                            }),
                            k = X.pointRef(e, g),
                            R = X.pointRef(e, _),
                            N = "";
                        if (!E && !S) {
                            var I = k.current,
                                [L] = X.leaf(e, I),
                                {
                                    path: P
                                } = I,
                                {
                                    offset: F
                                } = g,
                                B = L.text.slice(F);
                            B.length > 0 && (e.apply({
                                type: "remove_text",
                                path: P,
                                offset: F,
                                text: B
                            }), N = B)
                        }
                        if (A.reverse().map(e => e.unref()).filter(e => null !== e).forEach(t => eU.removeNodes(e, {
                                at: t,
                                voids: o
                            })), !x) {
                            var U = R.current,
                                [Y] = X.leaf(e, U),
                                {
                                    path: j
                                } = U,
                                z = E ? g.offset : 0,
                                H = Y.text.slice(z, _.offset);
                            H.length > 0 && (e.apply({
                                type: "remove_text",
                                path: j,
                                offset: z,
                                text: H
                            }), N = H)
                        }!E && y && R.current && k.current && eU.mergeNodes(e, {
                            at: R.current,
                            hanging: !0,
                            voids: o
                        }), c && r && "character" === i && N.length > 1 && N.match(/[\u0E00-\u0E7F]+/) && eU.insertText(e, N.slice(0, N.length - a));
                        var G = k.unref(),
                            V = R.unref(),
                            W = r ? G || V : V || G;
                        null == t.at && W && eU.select(e, W)
                    }
                }
            })
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var r, {
                        hanging: i = !1,
                        voids: a = !1
                    } = n,
                    {
                        at: o = e.selection
                    } = n;
                if (!t.length) return;
                if (!!o) {
                    if (em.isRange(o)) {
                        if (!i && (o = X.unhangRange(e, o, {
                                voids: a
                            })), em.isCollapsed(o)) o = o.anchor;
                        else {
                            var [, s] = em.edges(o);
                            if (!a && X.void(e, {
                                    at: s
                                })) return;
                            var u = X.pointRef(e, s);
                            eU.delete(e, {
                                at: o
                            }), o = u.unref()
                        }
                    } else es.isPath(o) && (o = X.start(e, o));
                    if (!(!a && X.void(e, {
                            at: o
                        }))) {
                        var c = X.above(e, {
                            at: o,
                            match: t => $.isElement(t) && X.isInline(e, t),
                            mode: "highest",
                            voids: a
                        });
                        if (c) {
                            var [, l] = c;
                            X.isEnd(e, o, l) ? o = X.after(e, l) : X.isStart(e, o, l) && (o = X.before(e, l))
                        }
                        var [, d] = X.above(e, {
                            match: t => $.isElement(t) && X.isBlock(e, t),
                            at: o,
                            voids: a
                        }), f = X.isStart(e, o, d), p = X.isEnd(e, o, d), h = f && p, m = !f || f && p, g = !p, [, _] = er.first({
                            children: t
                        }, []), [, b] = er.last({
                            children: t
                        }, []), v = [], y = t => {
                            var [n, r] = t;
                            return 0 !== r.length && (!!h || !(m && es.isAncestor(r, _) && $.isElement(n) && !e.isVoid(n) && !e.isInline(n) || g && es.isAncestor(r, b) && $.isElement(n) && !e.isVoid(n) && !e.isInline(n)) && !0)
                        };
                        for (var E of er.nodes({
                                children: t
                            }, {
                                pass: y
                            })) y(E) && v.push(E);
                        var S = [],
                            x = [],
                            w = [],
                            T = !0,
                            C = !1;
                        for (var [D] of v) $.isElement(D) && !e.isInline(D) ? (T = !1, C = !0, x.push(D)) : T ? S.push(D) : w.push(D);
                        var [O] = X.nodes(e, {
                            at: o,
                            match: t => ew.isText(t) || X.isInline(e, t),
                            mode: "highest",
                            voids: a
                        }), [, M] = O, A = X.isStart(e, o, M), k = X.isEnd(e, o, M), R = X.pathRef(e, p && !w.length ? es.next(d) : d), N = X.pathRef(e, k ? es.next(M) : M);
                        eU.splitNodes(e, {
                            at: o,
                            match: t => C ? $.isElement(t) && X.isBlock(e, t) : ew.isText(t) || X.isInline(e, t),
                            mode: C ? "lowest" : "highest",
                            always: C && (!f || S.length > 0) && (!p || w.length > 0),
                            voids: a
                        });
                        var I = X.pathRef(e, !A || A && k ? es.next(M) : M);
                        if (eU.insertNodes(e, S, {
                                at: I.current,
                                match: t => ew.isText(t) || X.isInline(e, t),
                                mode: "highest",
                                voids: a
                            }), h && !S.length && x.length && !w.length && eU.delete(e, {
                                at: d,
                                voids: a
                            }), eU.insertNodes(e, x, {
                                at: R.current,
                                match: t => $.isElement(t) && X.isBlock(e, t),
                                mode: "lowest",
                                voids: a
                            }), eU.insertNodes(e, w, {
                                at: N.current,
                                match: t => ew.isText(t) || X.isInline(e, t),
                                mode: "highest",
                                voids: a
                            }), !n.at && (w.length > 0 && N.current ? r = es.previous(N.current) : x.length > 0 && R.current ? r = es.previous(R.current) : I.current && (r = es.previous(I.current)), r)) {
                            var L = X.end(e, r);
                            eU.select(e, L)
                        }
                        I.unref(), R.unref(), N.unref()
                    }
                }
            })
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            X.withoutNormalizing(e, () => {
                var {
                    voids: r = !1
                } = n, {
                    at: i = e.selection
                } = n;
                if (!!i) {
                    if (es.isPath(i) && (i = X.range(e, i)), em.isRange(i)) {
                        if (em.isCollapsed(i)) i = i.anchor;
                        else {
                            var a = em.end(i);
                            if (!r && X.void(e, {
                                    at: a
                                })) return;
                            var o = em.start(i),
                                s = X.pointRef(e, o),
                                u = X.pointRef(e, a);
                            eU.delete(e, {
                                at: i,
                                voids: r
                            });
                            var c = s.unref(),
                                l = u.unref();
                            i = c || l, eU.setSelection(e, {
                                anchor: i,
                                focus: i
                            })
                        }
                    }
                    if (!(!r && X.void(e, {
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