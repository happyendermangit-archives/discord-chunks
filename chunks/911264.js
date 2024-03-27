function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DndProvider: function() {
            return d
        }
    });
    var r = n("735250"),
        i = n("470079"),
        a = n("647841"),
        o = n("157394"),
        s = ["children"];

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var c = 0,
        l = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
        d = (0, i.memo)(function(e) {
            var t, n, d = e.children;
            var p = (n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t = function(e) {
                    return "manager" in e ? [{
                        dragDropManager: e.manager
                    }, !1] : [function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f(),
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = arguments.length > 3 ? arguments[3] : void 0;
                        return !t[l] && (t[l] = {
                            dragDropManager: (0, a.createDragDropManager)(e, t, n, r)
                        }), t[l]
                    }(e.backend, e.context, e.options, e.debugMode), !e.context]
                }(function(e, t) {
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
                }(e, s))) || function(e, t) {
                    var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var a = [],
                            o = !0,
                            s = !1;
                        try {
                            for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
                        } catch (e) {
                            s = !0, r = e
                        } finally {
                            try {
                                !o && null != i.return && i.return()
                            } finally {
                                if (s) throw r
                            }
                        }
                        return a
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                h = p[0],
                m = p[1];
            return (0, i.useEffect)(function() {
                if (m) {
                    var e = f();
                    return ++c,
                        function() {
                            0 == --c && (e[l] = null)
                        }
                }
            }, []), (0, r.jsx)(o.DndContext.Provider, Object.assign({
                value: h
            }, {
                children: d
            }), void 0)
        });

    function f() {
        return void 0 !== n.g ? n.g : window
    }
}