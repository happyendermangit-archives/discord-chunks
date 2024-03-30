function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlateTransforms: function() {
            return f
        }
    });
    var r, o, i = n("327432"),
        a = n("494189"),
        u = n("714196"),
        s = n("188629");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t) {
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
                if ("string" == typeof e) return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var f = (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }({}, i.Transforms), o = (o = {
        resetSelectionToStart: function(e) {
            i.Transforms.select(e, u.EditorUtils.start(e, []))
        },
        resetSelectionToEnd: function(e) {
            i.Transforms.select(e, u.EditorUtils.end(e, []))
        },
        delete: function(e, t) {
            var n = t.at,
                r = t.distance,
                o = t.unit,
                a = t.reverse,
                s = t.select,
                l = t.bounds,
                f = t.voids;
            if (null == n) {
                if (null == e.selection) return;
                n = e.selection
            }
            var d = c(u.RangeUtils.isRange(n) ? u.RangeUtils.edges(n) : u.EditorUtils.edges(e, n), 2),
                _ = d[0],
                E = d[1];
            if (null != r || null != o) {
                if (void 0 !== a && a) {
                    var p, m = null !== (y = u.EditorUtils.before(e, _, {
                        distance: r,
                        unit: o
                    })) && void 0 !== y ? y : u.EditorUtils.start(e, []);
                    if ("character" === o && (null != r ? r : 1) === 1 && u.PathUtils.equals(_.path, E.path)) {
                        var y, I, h = u.EditorUtils.leaf(e, _.path),
                            O = null != h ? h[0].text : "";
                        O.length > 0 && null != O[O.length - 1].match(/[\u0E00-\u0E7F]/) && (m = null !== (I = u.EditorUtils.before(e, _, {
                            distance: r,
                            unit: "offset"
                        })) && void 0 !== I ? I : u.EditorUtils.start(e, []))
                    }
                    _ = m
                } else E = null !== (p = u.EditorUtils.after(e, E, {
                    distance: r,
                    unit: o
                })) && void 0 !== p ? p : u.EditorUtils.end(e, [])
            }
            if (null != l) {
                var T = c(u.RangeUtils.edges(l), 2),
                    S = T[0],
                    v = T[1];
                u.PointUtils.isBefore(_, S) && (_ = S), u.PointUtils.isAfter(E, v) && (E = v)
            }!u.PointUtils.equals(_, E) && (i.Transforms.delete(e, {
                at: {
                    anchor: _,
                    focus: E
                },
                hanging: !0,
                voids: f
            }), void 0 !== s && s && u.EditorUtils.hasPath(e, _.path) && i.Transforms.select(e, _))
        },
        textToText: function(e, t, n) {
            var r, o = u.EditorUtils.getSelectionOverlap(e, n),
                a = c(u.RangeUtils.edges(n), 2),
                s = a[0],
                l = a[1],
                f = null !== (r = u.EditorUtils.before(e, s)) && void 0 !== r ? r : u.EditorUtils.start(e, []),
                d = u.EditorUtils.after(e, l);
            u.RangeUtils.isExpanded(n) && i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), i.Transforms.insertText(e, t, {
                at: f
            }), f = null != f ? f : u.EditorUtils.start(e, []), d = null != d ? d : u.EditorUtils.end(e, []), _(e, o, f, d, d)
        },
        textToVoid: function(e, t, n) {
            var r = u.EditorUtils.getSelectionOverlap(e, n),
                o = u.RangeUtils.start(n),
                a = u.PathUtils.next(o.path),
                s = {
                    path: u.PathUtils.next(a),
                    offset: 0
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), 0 === o.offset && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: o.path
            }), i.Transforms.insertNodes(e, [t], {
                at: o
            }), (!u.EditorUtils.hasPath(e, s.path) || !u.TextUtils.isText(u.EditorUtils.node(e, s.path)[0])) && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: s.path
            }), _(e, r, o, s, s)
        },
        textToInline: function(e, t, n) {
            var r = u.EditorUtils.getSelectionOverlap(e, n),
                o = t.children[t.children.length - 1],
                a = u.RangeUtils.start(n),
                s = u.PathUtils.next(a.path),
                l = {
                    path: u.PathUtils.child(s, t.children.length - 1),
                    offset: u.TextUtils.isText(o) ? o.text.length : 0
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), 0 === a.offset && i.Transforms.insertNodes(e, [{
                text: ""
            }], {
                at: a.path
            }), i.Transforms.insertNodes(e, [t], {
                at: a
            }), _(e, r, a, l, l)
        },
        voidToText: function(e, t, n) {
            var r, o = u.EditorUtils.getSelectionOverlap(e, n),
                a = null !== (r = u.EditorUtils.before(e, n)) && void 0 !== r ? r : u.EditorUtils.start(e, []),
                s = {
                    path: a.path,
                    offset: a.offset + t.length
                };
            i.Transforms.delete(e, {
                at: n,
                voids: !0
            }), i.Transforms.insertText(e, t, {
                at: a
            }), _(e, o, a, a, s)
        },
        removeInline: function(e, t) {
            var n, r = u.EditorUtils.getSelectionOverlap(e, t),
                o = null !== (n = u.EditorUtils.before(e, t)) && void 0 !== n ? n : u.EditorUtils.start(e, []);
            i.Transforms.delete(e, {
                at: t,
                voids: !0
            }), _(e, r, o, o, o)
        },
        removeInlineChildren: function(e, t) {
            var n = c(t, 2),
                r = n[0],
                o = n[1],
                a = u.EditorUtils.getSelectionOverlap(e, o),
                s = {
                    path: u.PathUtils.child(o, 0),
                    offset: 0
                };
            u.EditorUtils.withoutNormalizing(e, function() {
                for (var t = r.children.length - 1; t >= 0; t--) i.Transforms.removeNodes(e, {
                    at: u.PathUtils.child(o, t),
                    voids: !0
                })
            }), _(e, a, null, s, null)
        },
        selectCommandOption: function(e, t) {
            var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = a.getCommandBlock(e);
            if (null != r)
                for (var o = 0; o < r[0].children.length; o++) {
                    var s = r[0].children[o];
                    if (u.NodeUtils.isType(s, "applicationCommandOption") && s.optionName === t) {
                        n ? i.Transforms.select(e, [0, o]) : i.Transforms.select(e, u.EditorUtils.end(e, [0, o]));
                        return
                    }
                }
        },
        selectPreviousCommandOption: function(e) {
            if (null != a.getCommandBlock(e)) {
                var t = null != e.selection ? e.selection.focus.path : u.EditorUtils.end(e, s.FIRST_BLOCK_PATH).path,
                    n = a.getCurrentCommandOption(e),
                    r = u.EditorUtils.previous(e, {
                        at: t,
                        match: function(e) {
                            return e !== (null == n ? void 0 : n[0]) && u.NodeUtils.isType(e, "applicationCommandOption")
                        }
                    });
                null != r ? i.Transforms.select(e, r[1]) : u.PathUtils.isAfter(t, s.FIRST_TEXT_PATH) && i.Transforms.select(e, u.EditorUtils.end(e, s.FIRST_TEXT_PATH))
            }
        },
        selectNextCommandOption: function(e) {
            if (null != a.getCommandBlock(e)) {
                var t = null != e.selection ? e.selection.focus.path : u.EditorUtils.start(e, s.FIRST_BLOCK_PATH).path,
                    n = a.getCurrentCommandOption(e),
                    r = u.EditorUtils.next(e, {
                        at: t,
                        match: function(e) {
                            return e !== (null == n ? void 0 : n[0]) && u.NodeUtils.isType(e, "applicationCommandOption")
                        }
                    });
                null != r ? i.Transforms.select(e, r[1]) : f.resetSelectionToEnd(e)
            }
        },
        insertCommandOption: function(e, t) {
            f.resetSelectionToEnd(e), f.insertNodes(e, [{
                type: "applicationCommandOption",
                optionName: t.name,
                optionDisplayName: t.displayName,
                optionType: t.type,
                children: [{
                    text: ""
                }]
            }])
        },
        keyboardMove: function(e, t) {
            var n = null != t ? t : {},
                r = n.reverse,
                o = void 0 !== r && r,
                a = n.unit,
                s = void 0 === a ? "character" : a,
                l = n.edge,
                c = e.selection;
            if (null != c) {
                if (void 0 === l && u.RangeUtils.isExpanded(c)) {
                    i.Transforms.collapse(e, {
                        edge: o ? "start" : "end"
                    });
                    return
                }
                var f = u.EditorUtils.leaf(e, c.anchor.path);
                if (null != f) {
                    for (var d = o ? u.EditorUtils.before : u.EditorUtils.after, _ = c.focus; null != _;) {
                        var E = s;
                        o || c.focus.offset !== f[0].text.length ? o && 0 === c.focus.offset && (E = "offset") : E = "offset";
                        var p = d(e, _, {
                            unit: E
                        });
                        if (null == p || u.PointUtils.equals(_, p)) {
                            _ = void 0;
                            break
                        }
                        if (_ = p, null == u.EditorUtils.getParentVoid(e, _)) break
                    }
                    null != _ && ("focus" === l ? i.Transforms.setSelection(e, {
                        focus: _
                    }) : i.Transforms.setSelection(e, {
                        focus: _,
                        anchor: _
                    }))
                }
            }
        }
    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
    }), r);

    function d(e, t, n, r, o) {
        switch (t) {
            case "start":
                return n;
            case "inside":
                return r;
            case "end":
                return o
        }
        return e
    }

    function _(e, t, n, r, o) {
        if (null != t.anchor || null != t.focus) {
            var i, a, u = d(null === (i = e.selection) || void 0 === i ? void 0 : i.anchor, t.anchor, n, r, o),
                s = d(null === (a = e.selection) || void 0 === a ? void 0 : a.focus, t.focus, n, r, o);
            null != u && null != s && f.select(e, {
                anchor: u,
                focus: s
            })
        }
    }
}