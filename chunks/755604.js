function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007"), n("424973");
    var i = n("385887");

    function l(e, t) {
        if (i.EditorUtils.areStylesDisabled(e)) return [];
        let [n, l] = t, a = [];
        if (!i.TextUtils.isText(n)) return a;
        let [s] = i.EditorUtils.node(e, i.PathUtils.parent(l));
        return i.NodeUtils.isType(s, "applicationCommand") ? (n === s.children[0] && a.push({
            anchor: {
                path: l,
                offset: 0
            },
            focus: {
                path: l,
                offset: 0 + s.command.displayName.length + 1
            },
            commandName: !0
        }), a) : a
    }
}