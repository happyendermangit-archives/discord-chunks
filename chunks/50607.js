function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        withReact: function() {
            return a
        }
    });
    var i = n("488665"),
        r = n("436660"),
        s = n("887490");
    let a = (e, t) => {
        let {
            addMark: n,
            removeMark: a,
            deleteBackward: o,
            deleteForward: l,
            setFragmentData: u,
            insertData: d,
            insertFragmentData: _,
            insertTextData: c
        } = e;
        return (e = (0, i.withReact)(e)).addMark = n, e.removeMark = a, e.setFragmentData = u, e.insertData = d, e.insertFragmentData = _, e.insertTextData = c, e.deleteBackward = n => {
            if ("line" !== n || t) o(n);
            else {
                let t = s.DOMUtils.getLineActionRange(e, !0);
                null != t && r.SlateTransforms.delete(e, {
                    at: t
                })
            }
        }, e.deleteForward = n => {
            if ("line" !== n || t) l(n);
            else {
                let t = s.DOMUtils.getLineActionRange(e, !1);
                null != t && r.SlateTransforms.delete(e, {
                    at: t
                })
            }
        }, e
    }
}