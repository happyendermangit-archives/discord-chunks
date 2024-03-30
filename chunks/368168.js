function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUploadPayload: function() {
            return s
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("392711"),
        a = n.n(i),
        u = n("995369");

    function s(e) {
        var t, n, r = e.item.file;
        return o()(null != r, "file data must not be empty"), {
            filename: r.name,
            file_size: r.size,
            id: a().uniqueId(),
            is_clip: null != e.clip,
            title: null === (t = e.clip) || void 0 === t ? void 0 : t.name,
            application_id: null === (n = e.clip) || void 0 === n ? void 0 : n.applicationId,
            clip_created_at: null != e.clip ? (0, u.getClipCreatedAt)(e.clip.id) : void 0,
            clip_participant_ids: null != e.clip ? (0, u.getClipParticipantIds)(e.clip.users) : void 0
        }
    }
    t.default = {
        getUploadPayload: s
    }
}