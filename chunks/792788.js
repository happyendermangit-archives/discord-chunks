function(N, I, A) {
    "use strict";
    A.r(I), A.d(I, {
        default: function() {
            return e
        }
    });
    var O = A("160679"),
        T = A("429030");
    A("246663");
    let _ = new T.default({
        initialLocale: O.parse(document.cookie).locale,
        getMessages: N => A("826507")("./messages/".concat(N).replace("./messages/", "./")),
        getLanguages: () => A("499172")
    });
    _.addListener("locale", N => {
        document.cookie = "locale=".concat(N, ";path=/")
    });
    var e = _
}