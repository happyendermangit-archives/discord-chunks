function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        uid: function() {
            return E
        },
        useUID: function() {
            return e
        },
        UID: function() {
            return V
        }
    });
    var O = A("995008"),
        T = A.n(O),
        _ = A("775560");
    let E = function() {
            let I = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
            return T(I)
        },
        e = () => (0, _.useLazyValue)(() => E()),
        V = I => {
            let {
                children: N
            } = I;
            return N(e())
        }
}