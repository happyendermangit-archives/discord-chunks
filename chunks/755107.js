function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("222007");
    var l = n("939563"),
        i = n("385887"),
        a = n("566819");

    function s(e) {
        let {
            apply: t,
            onChange: n
        } = e;
        return e.apply = n => {
            t(n), i.SelectionUtils.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
        }, e.onChange = () => {
            if (!i.SelectionUtils.isValid(e, e.selection) && (e.selection = function(e) {
                    let t;
                    if (i.SelectionUtils.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                    else {
                        let n = i.EditorUtils.end(e, []);
                        t = {
                            anchor: n,
                            focus: n
                        }
                    }
                    return t
                }(e)), null != e.selection) {
                let t, n, [s, r] = i.RangeUtils.edges(e.selection),
                    o = !1;
                for (; null != s && null != (t = i.EditorUtils.getParentVoid(e, s)) && !a.SELECTABLE_VOIDS.includes(t[0].type);) s = i.EditorUtils.before(e, s, {
                    unit: "offset"
                }), o = !0;
                for (; null != r && null != (n = i.EditorUtils.getParentVoid(e, r)) && !a.SELECTABLE_VOIDS.includes(n[0].type);) r = i.EditorUtils.after(e, r, {
                    unit: "offset"
                }), o = !0;
                o && null != s && null != r && (i.RangeUtils.isForward(e.selection) ? l.SlateTransforms.select(e, {
                    anchor: s,
                    focus: r
                }) : l.SlateTransforms.select(e, {
                    anchor: r,
                    focus: s
                }))
            }
            n()
        }, e
    }
}