function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("947248"),
        a = n("281767");
    t.default = function(e) {
        return null != e && null != e.attachments && !(e.attachments.length < 1) && e.attachments.some(function(e) {
            return null != e.flags && (0, r.hasFlag)(e.flags, a.MessageAttachmentFlags.IS_REMIX)
        })
    }
}