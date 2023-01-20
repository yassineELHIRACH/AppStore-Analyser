export default function filterTab(value, valCat, nbInstall) {
    if (value == "All") {
        const allfilter1 = d => d["Categorie Principale Apptica"] == valCat && d["Nombre installations"] >= nbInstall
        return allfilter1;
    }

    else if (value != "All") {
        const allfilter2 = d => Math.floor(d["Version Android"]) == value &&
        d["Categorie Principale Apptica"] == valCat && d["Nombre installations"] >= nbInstall
        return allfilter2;
    }
}

/* export default function  */

