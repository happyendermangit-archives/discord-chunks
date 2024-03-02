function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, {
        moveItemFromTo: function() {
            return a
        },
        default: function() {
            return d
        }
    }), t("424973"), t("222007");
    var l = t("917351"),
        i = t.n(l),
        r = t("605250");
    let o = new r.default("DragAndDropUtils");

    function u(e) {
        let {
            oldOrdering: n,
            newOrdering: t,
            idGetter: l,
            existingPositionGetter: i,
            ascending: r = !0
        } = e, u = t.length;
        if (n.length !== u) return o.warn("Arrays are not of the same length!", n, t), [];
        let a = n.map(l).sort().join(":"),
            d = t.map(l).sort().join(":");
        if (a !== d) return o.warn("Object IDs in the old ordering and the new ordering are not the same.", a, d), [];
        let c = {};
        for (let e = 0; e < u; e++) c[l(n[e])] = i(n[e]);
        let s = [];
        for (let e = 0; e < u; e++) {
            let n = l(t[e]),
                o = c[n],
                a = r ? e : u - 1 - e;
            (o !== a || i(t[e]) !== a) && s.push({
                id: n,
                position: a
            })
        }
        return !r && s.reverse(), s
    }

    function a(e, n, t) {
        let l = e[n],
            i = [...e];
        return i.splice(n, 1), i.splice(t, 0, l), i
    }
    var d = {
        moveItemFromTo: a,
        calculatePositionDeltas: u,
        getPositionUpdates: function(e) {
            let {
                objectArray: n,
                fromPosition: t,
                toPosition: l,
                idGetter: r,
                existingPositionGetter: o,
                ascending: d = !0
            } = e;
            !Array.isArray(n) && (n = i.values(n));
            let c = a(n, t, l);
            return u({
                oldOrdering: n,
                newOrdering: c,
                idGetter: r,
                existingPositionGetter: o,
                ascending: d
            })
        }
    }
}