function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var i = n("939563"),
        l = n("385887"),
        a = n("566819");

    function s(e) {
        let {
            apply: t,
            onChange: n
        } = e;
        return e.apply = n => {
            t(n), l.SelectionUtils.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
        }, e.onChange = () => {
            if (!l.SelectionUtils.isValid(e, e.selection) && (e.selection = function(e) {
                    let t;
                    if (l.SelectionUtils.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                    else {
                        let n = l.EditorUtils.end(e, []);
                        t = {
                            anchor: n,
                            focus: n
                        }
                    }
                    return t
                }(e)), null != e.selection) {
                let t, n, [s, r] = l.RangeUtils.edges(e.selection),
                    o = !1;
                for (; null != s && null != (t = l.EditorUtils.getParentVoid(e, s)) && !a.SELECTABLE_VOIDS.includes(t[0].type);) s = l.EditorUtils.before(e, s, {
                    unit: "offset"
                }), o = !0;
                for (; null != r && null != (n = l.EditorUtils.getParentVoid(e, r)) && !a.SELECTABLE_VOIDS.includes(n[0].type);) r = l.EditorUtils.after(e, r, {
                    unit: "offset"
                }), o = !0;
                o && null != s && null != r && (l.RangeUtils.isForward(e.selection) ? i.SlateTransforms.select(e, {
                    anchor: s,
                    focus: r
                }) : i.SlateTransforms.select(e, {
                    anchor: r,
                    focus: s
                }))
            }
            n()
        }, e
    }
}