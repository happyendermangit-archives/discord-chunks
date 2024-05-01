function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUploadPayload: function() {
            return l
        }
    });
    var i = n("512722"),
        r = n.n(i),
        a = n("392711"),
        s = n.n(a),
        o = n("830496");

    function l(e) {
        var t, n;
        let i = e.item.file;
        return r()(null != i, "file data must not be empty"), {
            filename: i.name,
            file_size: i.size,
            id: s().uniqueId(),
            is_clip: null != e.clip,
            title: null === (t = e.clip) || void 0 === t ? void 0 : t.name,
            application_id: null === (n = e.clip) || void 0 === n ? void 0 : n.applicationId,
            clip_created_at: null != e.clip ? (0, o.getClipCreatedAt)(e.clip.id) : void 0,
            clip_participant_ids: null != e.clip ? (0, o.getClipParticipantIds)(e.clip.users) : void 0
        }
    }
    t.default = {
        getUploadPayload: l
    }
}