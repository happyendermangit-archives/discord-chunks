function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("925994"),
        r = n("436660"),
        s = n("887490");

    function a(e) {
        return e.setFragmentData = t => {
            if (null != e.selection) {
                let n = (0, i.toTextValue)(s.EditorUtils.richValue(e), {
                    mode: "plain",
                    range: e.selection,
                    preventEmojiSurrogates: !0
                });
                t.setData("text/plain", n)
            }
        }, e.insertData = t => {
            e.insertTextData(t)
        }, e.insertFragmentData = e => !1, e.insertTextData = t => {
            let n = t.getData("text/plain");
            return 0 !== n.length && (null != e.selection && s.RangeUtils.isExpanded(e.selection) && r.SlateTransforms.delete(e, {
                at: e.selection
            }), e.insertText(n), !0)
        }, e
    }
}