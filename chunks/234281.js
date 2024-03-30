function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("590401"),
        o = n("453197"),
        i = n("714196");

    function a(e) {
        return e.setFragmentData = function(t) {
            if (null != e.selection) {
                var n = (0, r.toTextValue)(i.EditorUtils.richValue(e), {
                    mode: "plain",
                    range: e.selection,
                    preventEmojiSurrogates: !0
                });
                t.setData("text/plain", n)
            }
        }, e.insertData = function(t) {
            e.insertTextData(t)
        }, e.insertFragmentData = function(e) {
            return !1
        }, e.insertTextData = function(t) {
            var n = t.getData("text/plain");
            return 0 !== n.length && (null != e.selection && i.RangeUtils.isExpanded(e.selection) && o.SlateTransforms.delete(e, {
                at: e.selection
            }), e.insertText(n), !0)
        }, e
    }
}