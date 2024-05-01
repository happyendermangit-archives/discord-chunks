function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        withReact: function() {
            return s
        }
    });
    var i = n("207470"),
        r = n("436660"),
        a = n("887490");
    let s = (e, t) => {
        let {
            addMark: n,
            removeMark: s,
            deleteBackward: o,
            deleteForward: l,
            setFragmentData: u,
            insertData: d,
            insertFragmentData: _,
            insertTextData: c
        } = e;
        return (e = (0, i.withReact)(e)).addMark = n, e.removeMark = s, e.setFragmentData = u, e.insertData = d, e.insertFragmentData = _, e.insertTextData = c, e.deleteBackward = n => {
            if ("line" !== n || t) o(n);
            else {
                let t = a.DOMUtils.getLineActionRange(e, !0);
                null != t && r.SlateTransforms.delete(e, {
                    at: t
                })
            }
        }, e.deleteForward = n => {
            if ("line" !== n || t) l(n);
            else {
                let t = a.DOMUtils.getLineActionRange(e, !1);
                null != t && r.SlateTransforms.delete(e, {
                    at: t
                })
            }
        }, e
    }
}