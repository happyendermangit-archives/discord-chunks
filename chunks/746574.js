function(e, n, t) {
    "use strict";
    t.r(n), t.d(n, {
        moveItemFromTo: function() {
            return u
        },
        default: function() {
            return d
        }
    }), t("424973"), t("222007");
    var l = t("917351"),
        i = t.n(l),
        r = t("605250");
    let o = new r.default("DragAndDropUtils");

    function a(e) {
        let {
            oldOrdering: n,
            newOrdering: t,
            idGetter: l,
            existingPositionGetter: i,
            ascending: r = !0
        } = e, a = t.length;
        if (n.length !== a) return o.warn("Arrays are not of the same length!", n, t), [];
        let u = n.map(l).sort().join(":"),
            d = t.map(l).sort().join(":");
        if (u !== d) return o.warn("Object IDs in the old ordering and the new ordering are not the same.", u, d), [];
        let c = {};
        for (let e = 0; e < a; e++) c[l(n[e])] = i(n[e]);
        let s = [];
        for (let e = 0; e < a; e++) {
            let n = l(t[e]),
                o = c[n],
                u = r ? e : a - 1 - e;
            (o !== u || i(t[e]) !== u) && s.push({
                id: n,
                position: u
            })
        }
        return !r && s.reverse(), s
    }

    function u(e, n, t) {
        let l = e[n],
            i = [...e];
        return i.splice(n, 1), i.splice(t, 0, l), i
    }
    var d = {
        moveItemFromTo: u,
        calculatePositionDeltas: a,
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
            let c = u(n, t, l);
            return a({
                oldOrdering: n,
                newOrdering: c,
                idGetter: r,
                existingPositionGetter: o,
                ascending: d
            })
        }
    }
}