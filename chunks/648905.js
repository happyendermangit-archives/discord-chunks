function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        moveItemFromTo: function() {
            return l
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("35523");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var u = new i.default("DragAndDropUtils");

    function s(e) {
        var t = e.oldOrdering,
            n = e.newOrdering,
            r = e.idGetter,
            o = e.existingPositionGetter,
            i = e.ascending,
            a = void 0 === i || i,
            s = n.length;
        if (t.length !== s) return u.warn("Arrays are not of the same length!", t, n), [];
        var l = t.map(r).sort().join(":"),
            c = n.map(r).sort().join(":");
        if (l !== c) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", l, c), [];
        for (var f = {}, d = 0; d < s; d++) f[r(t[d])] = o(t[d]);
        for (var _ = [], E = 0; E < s; E++) {
            var p = r(n[E]),
                m = f[p],
                y = a ? E : s - 1 - E;
            (m !== y || o(n[E]) !== y) && _.push({
                id: p,
                position: y
            })
        }
        return !a && _.reverse(), _
    }

    function l(e, t, n) {
        var r, o = e[t];
        var i = function(e) {
            if (Array.isArray(e)) return a(e)
        }(r = e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(r) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(r) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }();
        return i.splice(t, 1), i.splice(n, 0, o), i
    }
    t.default = {
        moveItemFromTo: l,
        calculatePositionDeltas: s,
        getPositionUpdates: function(e) {
            var t = e.objectArray,
                n = e.fromPosition,
                r = e.toPosition,
                i = e.idGetter,
                a = e.existingPositionGetter,
                u = e.ascending;
            !Array.isArray(t) && (t = o().values(t));
            var c = l(t, n, r);
            return s({
                oldOrdering: t,
                newOrdering: c,
                idGetter: i,
                existingPositionGetter: a,
                ascending: void 0 === u || u
            })
        }
    }
}