function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("47120"), n("653041");
    var i = n("887490");

    function r(e, t) {
        if (i.EditorUtils.areStylesDisabled(e)) return [];
        let [n, r] = t, s = [];
        if (!i.TextUtils.isText(n)) return s;
        let [a] = i.EditorUtils.node(e, i.PathUtils.parent(r));
        return i.NodeUtils.isType(a, "applicationCommand") ? (n === a.children[0] && s.push({
            anchor: {
                path: r,
                offset: 0
            },
            focus: {
                path: r,
                offset: 0 + a.command.displayName.length + 1
            },
            commandName: !0
        }), s) : s
    }
}