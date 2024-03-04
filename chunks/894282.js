function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        KeyboardEventKey: function() {
            return r.Key
        },
        FOCUS_SECTION_JUMP_KEY: function() {
            return a
        },
        NavigationKeyShortcutMap: function() {
            return o
        },
        NavigationShortcuts: function() {
            return l
        },
        KeyboardKeysUpdated: function() {
            return i
        }
    }), n("222007");
    var i, s, r = n("338923");
    let a = r.Key.F6,
        o = new Map([
            [r.Key.F6, "f6"],
            [r.Key.Tab, "tab"],
            [r.Key.ArrowDown, "down"],
            [r.Key.ArrowUp, "up"],
            [r.Key.ArrowLeft, "left"],
            [r.Key.ArrowRight, "right"],
            [r.Key.Home, "home"],
            [r.Key.End, "end"]
        ]),
        l = new Set(["tab", "shift+tab", "down", "up", "left", "right", "home", "end"]);
    (s = i || (i = {})).ENTER = "Enter", s.TAB = "Tab", s.SPACE = " ", s.ESCAPE = "Escape", s.SHIFT = "Shift"
}