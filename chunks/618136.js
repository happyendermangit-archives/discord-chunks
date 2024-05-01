function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("436660"),
        r = n("887490"),
        a = n("42530");

    function s(e) {
        let {
            apply: t,
            onChange: n
        } = e;
        return e.apply = n => {
            t(n), r.SelectionUtils.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
        }, e.onChange = () => {
            if (!r.SelectionUtils.isValid(e, e.selection) && (e.selection = function(e) {
                    let t;
                    if (r.SelectionUtils.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                    else {
                        let n = r.EditorUtils.end(e, []);
                        t = {
                            anchor: n,
                            focus: n
                        }
                    }
                    return t
                }(e)), null != e.selection) {
                let t, n, [s, o] = r.RangeUtils.edges(e.selection),
                    l = !1;
                for (; null != s && null != (t = r.EditorUtils.getParentVoid(e, s)) && !a.SELECTABLE_VOIDS.includes(t[0].type);) s = r.EditorUtils.before(e, s, {
                    unit: "offset"
                }), l = !0;
                for (; null != o && null != (n = r.EditorUtils.getParentVoid(e, o)) && !a.SELECTABLE_VOIDS.includes(n[0].type);) o = r.EditorUtils.after(e, o, {
                    unit: "offset"
                }), l = !0;
                l && null != s && null != o && (r.RangeUtils.isForward(e.selection) ? i.SlateTransforms.select(e, {
                    anchor: s,
                    focus: o
                }) : i.SlateTransforms.select(e, {
                    anchor: o,
                    focus: s
                }))
            }
            n()
        }, e
    }
}