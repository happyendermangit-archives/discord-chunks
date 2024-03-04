function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l;
    n.r(t), n.d(t, {
        ConfettiLocation: function() {
            return i
        },
        ShakeLocation: function() {
            return s
        },
        ShakeLevel: function() {
            return r
        },
        SHAKE_STEPS: function() {
            return d
        },
        SHAKE_STEP_DIVIDER: function() {
            return c
        }
    }), n("808653"), n("222007"), (a = i || (i = {}))[a.CHAT_INPUT = 0] = "CHAT_INPUT", a[a.REACTION = 1] = "REACTION", a[a.MEMBER_USER = 2] = "MEMBER_USER", a[a.CALL_TILE = 3] = "CALL_TILE", (o = s || (s = {}))[o.CHAT_INPUT = 0] = "CHAT_INPUT", o[o.VOICE_USER = 1] = "VOICE_USER", o[o.MENTION = 2] = "MENTION", (l = r || (r = {}))[l.LEVEL_1 = 0] = "LEVEL_1", l[l.LEVEL_2 = 1] = "LEVEL_2", l[l.LEVEL_3 = 2] = "LEVEL_3", l[l.LEVEL_4 = 3] = "LEVEL_4", l[l.LEVEL_5 = 4] = "LEVEL_5";
    let u = {
            0: [
                [1, 1e-4],
                [25, .05],
                [50, .1],
                [100, .5],
                [250, 1],
                [500, 2],
                [1e3, 3],
                [9001, 4]
            ],
            1: [
                [1, 1e-4],
                [25, .25],
                [50, .5],
                [100, 1],
                [250, 2.5],
                [500, 5],
                [1e3, 7.5],
                [9001, 10]
            ],
            2: [
                [1, .001],
                [25, .5],
                [50, 1],
                [100, 2],
                [250, 4],
                [500, 8],
                [1e3, 12],
                [9001, 16]
            ],
            3: [
                [1, .25],
                [25, .75],
                [50, 1],
                [100, 2],
                [250, 4],
                [500, 8],
                [1e3, 20],
                [9001, 50]
            ],
            4: [
                [1, .001],
                [25, .5],
                [50, 1],
                [100, 2],
                [250, 5],
                [500, 10],
                [1e3, 100],
                [9001, 1e4]
            ]
        },
        d = Object.keys(u).reduce((e, t) => ({
            ...e,
            [t]: u[t].map(e => {
                let [t] = e;
                return t
            })
        }), {
            0: [],
            1: [],
            2: [],
            3: [],
            4: []
        }),
        c = Object.keys(u).reduce((e, t) => ({
            ...e,
            [t]: u[t].map(e => {
                let [t, n] = e;
                return n
            })
        }), {
            0: [],
            1: [],
            2: [],
            3: [],
            4: []
        })
}