function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Soundpacks: function() {
            return r
        },
        getCustomNotificationSoundpackOptions: function() {
            return a
        },
        getSoundpackOptionsAprilFools2023: function() {
            return o
        }
    });
    var i, r, s = n("689938");

    function a() {
        return [{
            value: "classic",
            label: "Discord Default",
            description: "Wumpus' Favorite"
        }, {
            value: "retro",
            label: "Power up!",
            description: "Retro"
        }, {
            value: "bop",
            label: "*hey you*",
            description: "BOP"
        }, {
            value: "ducky",
            label: "Quack quack",
            description: "Ducky"
        }, {
            value: "lofi",
            label: "Twinkle",
            description: "Lofi"
        }]
    }

    function o() {
        return [{
            value: "classic",
            label: s.default.Messages.SOUNDPACK_CLASSIC_LABEL
        }, {
            value: "detune",
            label: s.default.Messages.SOUNDPACK_DETUNE_LABEL
        }]
    }(i = r || (r = {})).CLASSIC = "classic", i.DETUNE = "detune", i.RETRO = "retro", i.BOP = "bop", i.DUCKY = "ducky", i.LOFI = "lofi"
}