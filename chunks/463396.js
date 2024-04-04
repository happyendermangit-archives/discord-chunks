function(e, t, n) {
    "use strict";
    n.r(t), n("789020");
    var a = n("630388"),
        i = n("981631");
    t.default = e => null != e && null != e.attachments && !(e.attachments.length < 1) && e.attachments.some(e => null != e.flags && (0, a.hasFlag)(e.flags, i.MessageAttachmentFlags.IS_REMIX))
}