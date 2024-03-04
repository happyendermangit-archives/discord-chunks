function(e, t, n) {
    "use strict";
    n("70102"), n("424973");
    var r = TypeError;
    e.exports = function(e) {
        if (!e || "function" != typeof e.next) throw new r("iterator must be an object with a `next` method");
        if (arguments.length > 1) {
            var t, n = arguments[1];
            if ("function" != typeof n) throw new r("`callback`, if provided, must be a function")
        }
        for (var i = n || [];
            (t = e.next()) && !t.done;) n ? n(t.value) : i.push(t.value);
        if (!n) return i
    }
}