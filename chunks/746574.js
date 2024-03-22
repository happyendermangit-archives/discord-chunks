function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        moveItemFromTo: function() {
            return o
        },
        default: function() {
            return i
        }
    }), n("424973"), n("222007");
    var l = n("917351"),
        r = n.n(l),
        a = n("605250");
    let u = new a.default("DragAndDropUtils");

    function s(e) {
        let {
            oldOrdering: t,
            newOrdering: n,
            idGetter: l,
            existingPositionGetter: r,
            ascending: a = !0
        } = e, s = n.length;
        if (t.length !== s) return u.warn("Arrays are not of the same length!", t, n), [];
        let o = t.map(l).sort().join(":"),
            i = n.map(l).sort().join(":");
        if (o !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
        let c = {};
        for (let e = 0; e < s; e++) c[l(t[e])] = r(t[e]);
        let E = [];
        for (let e = 0; e < s; e++) {
            let t = l(n[e]),
                u = c[t],
                o = a ? e : s - 1 - e;
            (u !== o || r(n[e]) !== o) && E.push({
                id: t,
                position: o
            })
        }
        return !a && E.reverse(), E
    }

    function o(e, t, n) {
        let l = e[t],
            r = [...e];
        return r.splice(t, 1), r.splice(n, 0, l), r
    }
    var i = {
        moveItemFromTo: o,
        calculatePositionDeltas: s,
        getPositionUpdates: function(e) {
            let {
                objectArray: t,
                fromPosition: n,
                toPosition: l,
                idGetter: a,
                existingPositionGetter: u,
                ascending: i = !0
            } = e;
            !Array.isArray(t) && (t = r.values(t));
            let c = o(t, n, l);
            return s({
                oldOrdering: t,
                newOrdering: c,
                idGetter: a,
                existingPositionGetter: u,
                ascending: i
            })
        }
    }
}