function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SecureFramesGuildExperiment: function() {
            return s
        },
        SecureFramesUserExperiment: function() {
            return r
        }
    });
    var i = n("818083");
    let r = (0, i.createExperiment)({
            kind: "user",
            id: "2023-08_secure_frames_encryption",
            label: "Allowing testing secure frames for voice/video",
            defaultConfig: {
                protocolVersionFloor: 0,
                canSupportSecureFrames: !1,
                canSupportMls: !1
            },
            treatments: [{
                id: 6,
                label: "Can support secure frames above protocol version 10",
                config: {
                    protocolVersionFloor: 10,
                    canSupportSecureFrames: !0,
                    canSupportMls: !1
                }
            }, {
                id: 7,
                label: "Can support secure frames above protocol version 110 (MLS)",
                config: {
                    protocolVersionFloor: 10,
                    canSupportSecureFrames: !0,
                    canSupportMls: !0
                }
            }, {
                id: 8,
                label: "Can support secure frames above protocol version 11",
                config: {
                    protocolVersionFloor: 11,
                    canSupportSecureFrames: !0,
                    canSupportMls: !1
                }
            }, {
                id: 9,
                label: "Can support secure frames above protocol version 111 (MLS)",
                config: {
                    protocolVersionFloor: 11,
                    canSupportSecureFrames: !0,
                    canSupportMls: !0
                }
            }]
        }),
        s = (0, i.createExperiment)({
            kind: "guild",
            id: "2023-11_secure_frames_encryption_guilds",
            label: "Allowing testing secure frames for voice/video (Guilds)",
            defaultConfig: {
                protocolVersionFloor: 0,
                canSupportSecureFrames: !1,
                canSupportMls: !1
            },
            treatments: [{
                id: 6,
                label: "Can support secure frames above protocol version 10",
                config: {
                    protocolVersionFloor: 10,
                    canSupportSecureFrames: !0,
                    canSupportMls: !1
                }
            }, {
                id: 7,
                label: "Can support secure frames above protocol version 110 (MLS)",
                config: {
                    protocolVersionFloor: 10,
                    canSupportSecureFrames: !0,
                    canSupportMls: !0
                }
            }, {
                id: 8,
                label: "Can support secure frames above protocol version 11",
                config: {
                    protocolVersionFloor: 11,
                    canSupportSecureFrames: !0,
                    canSupportMls: !1
                }
            }, {
                id: 9,
                label: "Can support secure frames above protocol version 111 (MLS)",
                config: {
                    protocolVersionFloor: 11,
                    canSupportSecureFrames: !0,
                    canSupportMls: !0
                }
            }]
        })
}