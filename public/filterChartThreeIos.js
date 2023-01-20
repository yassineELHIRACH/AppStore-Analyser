export default function filterChartThreeIos(value, valCat, nbInstall) {
    if (value == "All") {
      const allfilter1 = (d) =>
        d["Categorie(s)"] == valCat && d["Nombre installations"] >= nbInstall;
      return allfilter1;
    } else if (value != "All") {
      const allfilter2 = (d) =>
        Math.floor(d["Version Ios"]) == value &&
        d["Categorie(s)"] == valCat &&
        d["Nombre installations"] >= nbInstall;
      return allfilter2;
    }
  }
  