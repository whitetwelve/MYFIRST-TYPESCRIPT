// TUPLES
var user = ["Fuad", 23, true, "Azkia"];
// ENUMS
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var mySize = Size.Medium;
console.log(mySize);
