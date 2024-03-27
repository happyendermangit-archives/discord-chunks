function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getVisibilityWatcher: function() {
            return u
        }
    });
    var r = n("607190"),
        i = n("527475");
    let a = -1,
        o = () => "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? 1 / 0 : 0,
        s = () => {
            (0, i.onHidden)(({
                timeStamp: t
            }) => {
                a = t
            }, !0)
        },
        u = () => (a < 0 && (a = o(), s()), {
            get firstHiddenTime() {
                return a
            }
        })
}