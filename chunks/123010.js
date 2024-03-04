function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUploadPayload: function() {
            return l
        },
        default: function() {
            return u
        }
    });
    var i = n("627445"),
        s = n.n(i),
        r = n("917351"),
        a = n.n(r),
        o = n("66175");

    function l(e) {
        var t, n;
        let i = e.item.file;
        return s(null != i, "file data must not be empty"), {
            filename: i.name,
            file_size: i.size,
            id: a.uniqueId(),
            is_clip: null != e.clip,
            title: null === (t = e.clip) || void 0 === t ? void 0 : t.name,
            application_id: null === (n = e.clip) || void 0 === n ? void 0 : n.applicationId,
            clip_created_at: null != e.clip ? (0, o.getClipCreatedAt)(e.clip.id) : void 0,
            clip_participant_ids: null != e.clip ? (0, o.getClipParticipantIds)(e.clip.users) : void 0
        }
    }
    var u = {
        getUploadPayload: l
    }
}