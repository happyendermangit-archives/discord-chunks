function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("53529"),
        r = n("436660"),
        s = n("887490");
    let a = ["applicationCommand"];

    function o(e) {
        let {
            insertBreak: t,
            insertText: n
        } = e;
        return e.insertBreak = () => {
            l(e) && t()
        }, e.insertSoftBreak = () => {
            e.insertBreak()
        }, e.insertText = t => {
            if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) {
                n(t);
                return
            }
            let s = t.split(/\r\n|\r|\n/);
            if (!l(e)) {
                n(s.join(" "));
                return
            }
            i.HistoryUtils.withSingleEntry(e, () => {
                let t = !1;
                for (let i of s) t && r.SlateTransforms.splitNodes(e, {
                    always: !0
                }), n(i), t = !0
            })
        }, e
    }

    function l(e) {
        let t = s.EditorUtils.getCurrentBlock(e);
        return null != t && !a.includes(t[0].type)
    }
}