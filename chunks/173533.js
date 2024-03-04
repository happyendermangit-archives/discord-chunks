function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DndProvider: function() {
            return l
        }
    }), n("70102"), n("222007"), n("424973");
    var r = n("37983"),
        i = n("884691"),
        o = n("515769"),
        s = n("772110"),
        a = ["children"];

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var u = 0,
        d = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
        l = (0, i.memo)(function(e) {
            var t, n, l = e.children;
            var p = (n = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(t = function(e) {
                    return "manager" in e ? [{
                        dragDropManager: e.manager
                    }, !1] : [function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f(),
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = arguments.length > 3 ? arguments[3] : void 0;
                        return !t[d] && (t[d] = {
                            dragDropManager: (0, o.createDragDropManager)(e, t, n, r)
                        }), t[d]
                    }(e.backend, e.context, e.options, e.debugMode), !e.context]
                }(function(e, t) {
                    if (null == e) return {};
                    var n, r, i = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
                        return i
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++) {
                            if (n = o[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                        }
                    }
                    return i
                }(e, a))) || function(e, t) {
                    var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != i) {
                        var o = [],
                            s = !0,
                            a = !1;
                        try {
                            for (i = i.call(e); !(s = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                !s && null != i.return && i.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return o
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return c(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                h = p[0],
                v = p[1];
            return (0, i.useEffect)(function() {
                if (v) {
                    var e = f();
                    return ++u,
                        function() {
                            0 == --u && (e[d] = null)
                        }
                }
            }, []), (0, r.jsx)(s.DndContext.Provider, Object.assign({
                value: h
            }, {
                children: l
            }), void 0)
        });

    function f() {
        return void 0 !== n.g ? n.g : window
    }
}