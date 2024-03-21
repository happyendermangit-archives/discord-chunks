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
        a = n.n(l),
        r = n("605250");
    let u = new r.default("DragAndDropUtils");

    function s(e) {
        let {
            oldOrdering: t,
            newOrdering: n,
            idGetter: l,
            existingPositionGetter: a,
            ascending: r = !0
        } = e, s = n.length;
        if (t.length !== s) return u.warn("Arrays are not of the same length!", t, n), [];
        let o = t.map(l).sort().join(":"),
            i = n.map(l).sort().join(":");
        if (o !== i) return u.warn("Object IDs in the old ordering and the new ordering are not the same.", o, i), [];
        let c = {};
        for (let e = 0; e < s; e++) c[l(t[e])] = a(t[e]);
        let E = [];
        for (let e = 0; e < s; e++) {
            let t = l(n[e]),
                u = c[t],
                o = r ? e : s - 1 - e;
            (u !== o || a(n[e]) !== o) && E.push({
                id: t,
                position: o
            })
        }
        return !r && E.reverse(), E
    }

    function o(e, t, n) {
        let l = e[t],
            a = [...e];
        return a.splice(t, 1), a.splice(n, 0, l), a
    }
    var i = {
        moveItemFromTo: o,
        calculatePositionDeltas: s,
        getPositionUpdates: function(e) {
            let {
                objectArray: t,
                fromPosition: n,
                toPosition: l,
                idGetter: r,
                existingPositionGetter: u,
                ascending: i = !0
            } = e;
            !Array.isArray(t) && (t = a.values(t));
            let c = o(t, n, l);
            return s({
                oldOrdering: t,
                newOrdering: c,
                idGetter: r,
                existingPositionGetter: u,
                ascending: i
            })
        }
    }
}