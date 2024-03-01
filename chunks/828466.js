function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    let a = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];

    function l(e) {
        let {
            allowPopups: t
        } = e, n = a;
        return t && (n = [...a, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ")
    }
}