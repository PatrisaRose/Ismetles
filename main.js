import { ListaAdat } from "./adatok.js";
import ListaMegjelenit from "./megjelenit.js";

$(function () {
  const TARTALOM = $(".tartalom");
  new ListaMegjelenit(ListaAdat, TARTALOM);
  /*ha betöltődik a html akkor fusson le a kód*/
  /* let Lista = "<ul>"; */
  /* for (let i = 0; i < ListaAdat.length; i++) {
    Lista += "<li>" + ListaAdat[i] + "</li>";
  }
  Lista += "</ul>";
  TARTALOM.html(Lista); */
});
