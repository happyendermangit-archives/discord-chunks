function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        moveItemFromTo: function() {
            return o
        }
    }), n("653041"), n("47120");
    var i = n("392711"),
        r = n.n(i);
    let s = new(n("710845")).default("DragAndDropUtils");

    function a(e) {
        let {
            oldOrdering: t,
            newOrdering: n,
            idGetter: i,
            existingPositionGetter: r,
            ascending: a = !0
        } = e, o = n.length;
        if (t.length !== o) return s.warn("Arrays are not of the same length!", t, n), [];
        let l = t.map(i).sort().join(":"),
            u = n.map(i).sort().join(":");
        if (l !== u) return s.warn("Object IDs in the old ordering and the new ordering are not the same.", l, u), [];
        let d = {};
        for (let e = 0; e < o; e++) d[i(t[e])] = r(t[e]);
        let _ = [];
        for (let e = 0; e < o; e++) {
            let t = i(n[e]),
                s = d[t],
                l = a ? e : o - 1 - e;
            (s !== l || r(n[e]) !== l) && _.push({
                id: t,
                position: l
            })
        }
        return !a && _.reverse(), _
    }

    function o(e, t, n) {
        let i = e[t],
            r = [...e];
        return r.splice(t, 1), r.splice(n, 0, i), r
    }
    t.default = {
        moveItemFromTo: o,
        calculatePositionDeltas: a,
        getPositionUpdates: function(e) {
            let {
                objectArray: t,
                fromPosition: n,
                toPosition: i,
                idGetter: s,
                existingPositionGetter: l,
                ascending: u = !0
            } = e;
            !Array.isArray(t) && (t = r().values(t));
            let d = o(t, n, i);
            return a({
                oldOrdering: t,
                newOrdering: d,
                idGetter: s,
                existingPositionGetter: l,
                ascending: u
            })
        }
    }
}