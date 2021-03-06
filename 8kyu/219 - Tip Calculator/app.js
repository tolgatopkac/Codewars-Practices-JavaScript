/* Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service. */

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "excellent":
      return Math.ceil(amount / 5);
      break;
    case "great":
      return Math.ceil((amount * 15) / 100);
      break;

    case "good":
      return Math.ceil((amount * 10) / 100);
      break;

    case "poor":
      return Math.ceil((amount * 5) / 100);
      break;

    case "terrible":
      return 0;
      break;

    default:
      return "Rating not recognised";
  }
}

// alternative***

const TIPS = {
  terrible: 0.0,
  poor: 0.05,
  good: 0.1,
  great: 0.15,
  excellent: 0.2,
};

const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();
  return rating in TIPS
    ? Math.ceil(TIPS[rating] * amount)
    : "Rating not recognised";
};
