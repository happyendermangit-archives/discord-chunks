function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        withReact: function() {
            return a
        }
    });
    var r = n("136035"),
        o = n("453197"),
        i = n("714196"),
        a = function(e, t) {
            var n = e.addMark,
                a = e.removeMark,
                u = e.deleteBackward,
                s = e.deleteForward,
                l = e.setFragmentData,
                c = e.insertData,
                f = e.insertFragmentData,
                d = e.insertTextData;
            return (e = (0, r.withReact)(e)).addMark = n, e.removeMark = a, e.setFragmentData = l, e.insertData = c, e.insertFragmentData = f, e.insertTextData = d, e.deleteBackward = function(n) {
                if ("line" !== n || t) u(n);
                else {
                    var r = i.DOMUtils.getLineActionRange(e, !0);
                    null != r && o.SlateTransforms.delete(e, {
                        at: r
                    })
                }
            }, e.deleteForward = function(n) {
                if ("line" !== n || t) s(n);
                else {
                    var r = i.DOMUtils.getLineActionRange(e, !1);
                    null != r && o.SlateTransforms.delete(e, {
                        at: r
                    })
                }
            }, e
        }
}